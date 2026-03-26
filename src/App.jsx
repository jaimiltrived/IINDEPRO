import { useState, useEffect, useRef, useCallback } from "react";
import { IMGS } from "./imgs_data";
import { MotorSVG } from './components/common/MotorSVG';        
import { useParticles } from './hooks/useParticles';
import { motorParts, products, productCategories, accordionData, accordionData1, specsData, features, heroProducts } from './data/constants';
import { BirdSeriesIntro } from './components/BirdSeriesIntro';
import { CategoryView } from './components/CategoryView';
import { ProductDetailView } from './components/ProductDetailView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';


/* ─────────────────────────────────────────
   CSS — all animations & styles
───────────────────────────────────────── */

/* ── helpers ── */
const Ico = ({ d, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

/* ── IINDEPRO logo ── */


/* ── Motor SVG ── */

/* ── COUNTER hook ── */
function useCounter(target, duration = 1800, trigger) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target, duration]);
  return val;
}

/* ── SCROLL REVEAL hook ── */
function useScrollReveal(view) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal,.reveal-left,.reveal-right");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [view]);
}

/* ── BAR ANIMATE hook ── */
function useBarReveal(ref) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(e => { if (e[0].isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return active;
}

/* ── COUNTER SECTION ── */
function StatRow() {
  const ref = useRef(null);
  const [trig, setTrig] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(e => { if (e[0].isIntersecting) setTrig(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const projects = useCounter(500, 1600, trig);
  const clients = useCounter(120, 1400, trig);
  const uptime = useCounter(99, 1200, trig);

  return (
    <div className="stat-row" ref={ref}>
      {[
        { num: projects, suffix: "+", label: "Projects Delivered" },
        { num: clients, suffix: "+", label: "Global Clients" },
        { num: uptime, suffix: "%", label: "On-Time Delivery" },
      ].map((s, i) => (
        <div className="stat-cell reveal" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
          <div className="stat-num">{s.num}<span>{s.suffix}</span></div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ── MAIN COMPONENT ── */

export default function App() {
  const canvasRef = useRef(null);
  const barsRef = useRef(null);
  const UI_STATE_KEY = "iindepro_ui_state_v1";

  const readUiState = () => {
    try {
      const raw = localStorage.getItem(UI_STATE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  };

  const writeUiState = (next) => {
    try {
      localStorage.setItem(UI_STATE_KEY, JSON.stringify(next));
    } catch {
      // ignore storage errors
    }
  };

  const initialUi = readUiState() || {};
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [showTop, setShowTop] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [view, setView] = useState(initialUi.view || "home"); // "home", "category", "bird-intro", "product-detail"
  const [selectedCategory, setSelectedCategory] = useState(initialUi.selectedCategory || "");
  const [selectedProduct, setSelectedProduct] = useState(() => {
    const name = initialUi.selectedProductName;
    if (!name) return null;
    const prod = [...accordionData, ...accordionData1].find(p => p.name === name);
    return prod || null;
  });
  const [pendingScrollTarget, setPendingScrollTarget] = useState(initialUi.pendingScrollTarget || "");
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeSpec, setActiveSpec] = useState("Eagle");

  const goHome = (e) => {
    e?.preventDefault();
    setView("home");
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    if (selectedProduct && selectedCategory) {
      setView("category");
    } else {
      setView("home");
    }
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openCategory = (cat) => {
    setSelectedCategory(cat);
    setView("category");
    setSelectedProduct(null);
    setShowMegaMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openProduct = (prod) => {
    setSelectedProduct(prod);
    setView("product-detail");
    setShowMegaMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openProductByName = (name) => {
    const prod = accordionData.find(p => p.name === name);
    if (prod) openProduct(prod);
  };

  const openBirdIntro = () => {
    setView("bird-intro");
    setSelectedProduct(null);
    setShowMegaMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openContact = () => {
    setView("contact");
    setSelectedProduct(null);
    setSelectedCategory("");
    setShowMegaMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openCompare = () => {
    setSelectedProduct(null);
    setSelectedCategory("");
    setView("home");
    setShowMegaMenu(false);
    setPendingScrollTarget("specs");
  };

  // Persist current view + selection so refresh stays on same page
  useEffect(() => {
    writeUiState({
      view,
      selectedCategory,
      selectedProductName: selectedProduct?.name || "",
      scrollY: window.scrollY || 0,
      pendingScrollTarget,
      ts: Date.now(),
    });
  }, [view, selectedCategory, selectedProduct]);

  // Handle pending scroll targets (Compare -> #specs)
  useEffect(() => {
    if (!pendingScrollTarget) return;
    // let layout render
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(pendingScrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          try { window.location.hash = `#${pendingScrollTarget}`; } catch {}
        }
        setPendingScrollTarget("");
      });
    });
  }, [pendingScrollTarget, view]);

  // Restore scroll position after load (only if we are not in home hero top)
  useEffect(() => {
    const s = readUiState();
    if (!s || typeof s.scrollY !== "number") return;
    // Allow layout to render first
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // If we have a pending target, that effect will handle scrolling.
        if (s.pendingScrollTarget) return;
        window.scrollTo({ top: s.scrollY, left: 0, behavior: "auto" });
      });
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);
  const ringPos = useRef({ x: -100, y: -100 });
  const [ringState, setRingState] = useState({ x: -100, y: -100 });

  useParticles(canvasRef, view);
  useScrollReveal(view);
  const barsActive = useBarReveal(barsRef);

  /* Custom cursor */
  useEffect(() => {
    const move = e => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    let id;
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      ringPos.current.x = lerp(ringPos.current.x, cursorPos.x, 0.1);
      ringPos.current.y = lerp(ringPos.current.y, cursorPos.y, 0.1);
      setRingState({ x: ringPos.current.x, y: ringPos.current.y });
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [cursorPos]);

  useEffect(() => {
    const over = () => setCursorHover(true);
    const out = () => setCursorHover(false);
    const btns = document.querySelectorAll("a,button,.product-card,.feature-card,.social-btn,.nav-links li a");
    btns.forEach(b => { b.addEventListener("mouseenter", over); b.addEventListener("mouseleave", out); });
    return () => btns.forEach(b => { b.removeEventListener("mouseenter", over); b.removeEventListener("mouseleave", out); });
  }, []);

  /* Back-to-top */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Global CSS is now in index.css */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <div className={`cursor-dot${cursorHover ? " hover" : ""}`} style={{ left: cursorPos.x, top: cursorPos.y }} />
      <div className={`cursor-ring${cursorHover ? " hover" : ""}`} style={{ left: ringState.x, top: ringState.y }} />

      {/* Back to top */}
      <button className={`back-top${showTop ? "" : " hidden"}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Ico d="M18 15l-6-6-6 6" size={16} />
      </button>

      {/* Global Nav */}
      <nav className="nav" onMouseLeave={() => setShowMegaMenu(false)}>
        <div className="nav-logo" onClick={goHome}>
          <img src="/Iindepro_logo (1).png" alt="IINDEPRO" style={{ height: '260px', width: '260px' }} />
        </div>
        <ul className="nav-links">
          <li onMouseEnter={() => setShowMegaMenu(true)}>
            <a href="" onClick={(e) => { e.preventDefault(); }}><span className="nav-plus">+</span> Products</a>
          </li>
          <li onMouseEnter={() => setShowMegaMenu(false)}>
            <a
              href="#specs"
              onClick={(e) => {
                e.preventDefault();
                openCompare();
              }}
            >
              Compare
            </a>
          </li>
          <li onMouseEnter={() => setShowMegaMenu(false)}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openContact();
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>

        {showMegaMenu && (
          <div className="mega-menu" onMouseEnter={() => setShowMegaMenu(true)}>
            <div className="mm-col">
              <div className="mm-title"><div className="mm-dot" /><a onClick={() => openCategory("Eagle")} style={{ cursor: "pointer" }}>Eagle</a></div>
              <div className="mm-links">
                <a onClick={() => openProductByName("EB-8320 PRO")} className="mm-link" style={{ cursor: "pointer" }}>EB-8320</a>
                <a onClick={() => openProductByName("EB-4220 Apex")} className="mm-link" style={{ cursor: "pointer" }}>EB-4220</a>
                <a onClick={() => openProductByName("EB-6212 MASTER")} className="mm-link" style={{ cursor: "pointer" }}>EB-3010</a>
                <a onClick={() => openProductByName("EB-4515 LITE")} className="mm-link" style={{ cursor: "pointer" }}>EB-2206</a>
                <a onClick={() => openCategory("Eagle")} className="mm-more" style={{ cursor: "pointer" }}>View more →</a>
              </div>
            </div>

            <div className="mm-col">
              <div className="mm-title"><div className="mm-dot" /><a onClick={() => openCategory("Hummingbird")} style={{ cursor: "pointer" }}>Hummingbird</a></div>
              <div className="mm-links">
                <a onClick={() => openProductByName("HB-2206 Agile")} className="mm-link" style={{ cursor: "pointer" }}>HB-2206</a>
                <a onClick={() => openProductByName("HB-6206 Master")} className="mm-link" style={{ cursor: "pointer" }}>HB-3010</a>
                <a onClick={() => openProductByName("HB-2306 PRO")} className="mm-link" style={{ cursor: "pointer" }}>HB-4012</a>
                <a onClick={() => openProductByName("HB-4215 ELITE")} className="mm-link" style={{ cursor: "pointer" }}>HB-5015</a>
                <a onClick={() => openCategory("Hummingbird")} className="mm-more" style={{ cursor: "pointer" }}>View more →</a>
              </div>
            </div>

            <div className="mm-col">
              <div className="mm-title"><div className="mm-dot" /><a onClick={() => openCategory("Godwick")} style={{ cursor: "pointer" }}>Godwick</a></div>
              <div className="mm-links">
                <a onClick={() => openProductByName("GW-3120 Agri")} className="mm-link" style={{ cursor: "pointer" }}>GW-2206</a>
                <a onClick={() => openProductByName("GW-4006 Prowler")} className="mm-link" style={{ cursor: "pointer" }}>GW-3010</a>
                <a onClick={() => openProductByName("GW-5012 MAX")} className="mm-link" style={{ cursor: "pointer" }}>GW-4012</a>
                <a onClick={() => openProductByName("GW-2808 RECON")} className="mm-link" style={{ cursor: "pointer" }}>GW-5015</a>
                <a onClick={() => openCategory("Godwick")} className="mm-more" style={{ cursor: "pointer" }}>View more →</a>
              </div>
            </div>

            <div className="mm-col">
              <div className="mm-title"><div className="mm-dot" /><a onClick={() => openCategory("Falcon ")} style={{ cursor: "pointer" }}>Falcon</a></div>
              <div className="mm-links">
                <a onClick={() => openProductByName("FA-3110 Tactical")} className="mm-link" style={{ cursor: "pointer" }}>FA-2206</a>
                <a onClick={() => openProductByName("FA-2206 PRO")} className="mm-link" style={{ cursor: "pointer" }}>FA-3010</a>
                <a onClick={() => openProductByName("FA-3010")} className="mm-link" style={{ cursor: "pointer" }}>FA-4012</a>
                <a onClick={() => openProductByName("FA-5015")} className="mm-link" style={{ cursor: "pointer" }}>FA-5015</a>
                <a onClick={() => openCategory("Falcon ")} className="mm-more" style={{ cursor: "pointer" }}>View more →</a>
              </div>
            </div>

            <div className="mm-col">
              <div className="mm-title"><div className="mm-dot" style={{ background: '#e85d26' }} /><a onClick={() => openCategory("Condor")} style={{ cursor: "pointer" }}>Condor</a> </div>
              <div className="mm-links">
                <a onClick={() => openProductByName("CD-3010 Elite")} className="mm-link" style={{ cursor: "pointer" }}>CD-2206</a>
                <a onClick={() => openProductByName("CD-2206")} className="mm-link" style={{ cursor: "pointer" }}>CD-3010</a>
                <a onClick={() => openProductByName("CD-4012")} className="mm-link" style={{ cursor: "pointer" }}>CD-4012</a>
                <a onClick={() => openProductByName("CD-6210 COAXIAL")} className="mm-link" style={{ cursor: "pointer" }}>CD-5015</a>
                <a onClick={() => openCategory("Condor")} className="mm-more" style={{ cursor: "pointer" }}>View more →</a>
              </div>
            </div>

            <div className="mm-featured">
              <img src="/products/hb_6206.png" className="mm-feat-img" alt="HB-6206" />
              <div className="mm-feat-name">HB-6206 Master Edition</div>
              <a href="#products" className="mm-feat-btn"></a>
              <a href="#" onClick={(e) => { e.preventDefault(); openBirdIntro(); }} style={{ color: '#e85d26' }}>Discover Precision →</a>
            </div>
          </div>
        )}
      </nav>

      {view === "home" ? (
        <>
          {/* ── HERO ── */}
          <section className="hero">
            <canvas ref={canvasRef} id="particles-canvas" />
            <div className="scan-line" />
            <div className="orbit-ring orbit-spin-cw" style={{ top: "50%", left: "68%", width: 640, height: 640, transform: "translate(-50%, -50%)" }} />
            <div className="orbit-ring orbit-spin-ccw" style={{ top: "50%", left: "68%", width: 480, height: 480, borderColor: "rgba(255,255,255,0.06)", transform: "translate(-50%, -50%)" }} />

            <div className="product-wrap" key={heroIndex}>
              <img src={heroProducts[heroIndex].img} alt={heroProducts[heroIndex].name} className="product-svg" style={{ objectFit: "contain", padding: "60px", height: "750px" }} />
            </div>

            <div className="content">
              <div className="headline-block">
                <h1 className="headline">
                  <span className="headline-line">Engineered</span>
                  <span className="headline-line"> For The </span>
                  <span className="headline-line">Future </span>
                </h1>
                <div className="social-row">
                  {[
                    "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z",
                    "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01",
                    "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                    "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z",
                  ].map((d, i) => (
                    <button className="social-btn" key={i}><Ico d={d} size={13} /></button>
                  ))}
                </div>
              </div>

              <div className="model-tag" key={heroIndex} style={{ animation: "glitch 0.4s cubic-bezier(.25, 1, .5, 1) forwards" }}>
                <div>
                  <div className="model-name">{heroProducts[heroIndex].name}</div>
                  <div className="model-sub">{heroProducts[heroIndex].sub}</div>
                </div>
                <div className="model-dot" />
              </div>

              <div className="bottom-left">
                <p className="about-text">
                  <strong>IINDEPRO</strong> delivers precision-engineered propulsion and motion control systems, refined through rigorous design and testing cycles to meet exacting operational standards.
                </p>
              </div>

              <div className="bottom-right">
                <div className="cta-row mt -1">
                  <button className="cta-btn cta-outline" onClick={openContact}>Get In Touch</button>
                  <button className="cta-btn cta-orange" onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}>View Products</button>
                </div>
              </div>
            </div>
          </section>

          <StatRow />

          <div className="sec-divider" />

          {/* ── FULL SCREEN ACCORDION SLIDER ── */}
          <section className="accordion-sec" id="products">
            <div className="accordion-header">
              <div className="sec-label" style={{ color: "rgba(255,255,255,0.7)" }}>Product Range</div>
              <h2 className="sec-heading">Motor Lineup</h2>
            </div>
            <div className="accordion-container">
              {accordionData1.map((item, index) => {
                const isActive = activeAccordion === index;
                return (
                  <div
                    key={item.id}
                    className={`accordion-panel ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveAccordion(index)}
                    onClick={() => openProduct(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="ap-bg" style={{ backgroundImage: `url(${item.img})` }} />
                    <div className="ap-overlay" />
                    <div className="ap-collapsed">
                      <div className="ap-price-block">
                        <div className="ap-price">{item.price?.includes(' ') ? item.price.split(' ')[1] : (item.price || "")}</div>
                      </div>
                      <div className="ap-title-vert">{item.name}</div>
                    </div>
                    <div className="ap-expanded">
                      <div className="ap-subtitle">{item.title}</div>
                      <h2 className="ap-title">{item.name}</h2>
                      <p className="ap-desc">{item.desc}</p>
                      <div className="ap-bottom-row">
                        <div className="ap-price-expanded">
                          {item.price || ""}<span>{item.oldPrice || ""}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="sec-divider" />

          {/* ── SPECS ── */}
          <section className="specs-sec" id="specs">
            <div className="reveal-left">
              <div className="sec-label">Technical Data</div>

              <div style={{ display: "flex", gap: "10px", marginTop: "24px", marginBottom: "32px", flexWrap: "wrap", position: "relative", zIndex: 2 }}>
                {Object.keys(specsData).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveSpec(cat)}
                    style={{
                      padding: "10px 24px", borderRadius: "40px",
                      background: activeSpec === cat ? "#e85d26" : "rgba(255,255,255,0.04)",
                      border: activeSpec === cat ? "1px solid #e85d26" : "1px solid rgba(255,255,255,0.1)",
                      color: activeSpec === cat ? "#fff" : "rgba(255,255,255,0.6)",
                      fontFamily: "'Bebas Neue', sans-serif", fontSize: "16px", fontWeight: "600",
                      textTransform: "uppercase", letterSpacing: "1.5px", cursor: "pointer", transition: "all 0.3s ease"
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <h2 className="sec-heading">
                {specsData[activeSpec].name.split(' ')[0]}<br />
                {specsData[activeSpec].name.split(' ').slice(1).join(' ')}
              </h2>
              <p className="sec-sub" style={{ marginTop: 20 }}>{specsData[activeSpec].desc}</p>
              <div className="specs-table" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 48px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 32 }}>
                {specsData[activeSpec].specRows.map((r, i) => (
                  <div className="spec-row reveal" key={`${activeSpec}-${i}`} style={{ transitionDelay: `${i * 0.05}s`, display: "flex", flexDirection: "column", gap: "8px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 16 }}>
                    <span className="spec-row-label" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>{r.label}</span>
                    <span className={`spec-row-value`} style={{ fontSize: '22px', fontWeight: '600', color: r.orange ? '#e85d26' : '#fff', letterSpacing: '0.5px' }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="spec-visual reveal-right" ref={barsRef}>
              <div className="sec-label">Performance Index</div>
              {specsData[activeSpec].bars.map((b, i) => (
                <div className="spec-bar-item" key={`${activeSpec}-bar-${i}`}>
                  <div className="spec-bar-label">{b.label}<span>{b.pct}%</span></div>
                  <div className="spec-bar-track">
                    <div className="spec-bar-fill" style={{ width: barsActive ? `${b.pct}%` : "0%", transitionDelay: `${i * 0.15}s` }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 24, padding: "28px 32px", background: "rgba(232,93,38,0.06)", border: "1px solid rgba(232,93,38,0.15)" }}>
                <div style={{ fontSize: 15, color: "#e85d26", letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, marginBottom: 12 }}>Certifications</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {["ISO 9001:2015", "CE Mark", "RoHS Compliant", "DGCA Approved"].map((c, i) => (
                    <span key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", padding: "5px 12px", border: "1px solid rgba(255,255,255,0.1)", letterSpacing: 0.5 }}>{c}</span>
                  ))}
                </div>
              </div>

              {/* Extraordinary Product & Logo Showcase */}<div className="reveal" style={{ marginTop: 40, height: 340, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 24, background: "transparent", overflow: "hidden" }}>
                <img src="/logo/logo.png" alt="Iindepro" style={{ position: "absolute", height: "140%", opacity: 0.04, objectFit: "contain", zIndex: 1, pointerEvents: "none" }} />
              
                <img src={specsData[activeSpec].image} alt={activeSpec} onClick={() => openProductByName(specsData[activeSpec].name)} style={{ maxHeight: "85%", maxWidth: "85%", objectFit: "contain", zIndex: 3, filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.9))", transition: "transform 0.6s cubic-bezier(0.19,1,0.22,1)", cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
              </div>
              <button 
                className="cta-btn cta-orange" 
                onClick={() => openProductByName(specsData[activeSpec].name)} 
                style={{ marginTop: 40, width: "100%", padding: "18px", fontSize: "16px", fontWeight: "600", letterSpacing: "1px" }}
              >
                VIEW FULL SPECIFICATION <Ico d="M5 12h14M12 5l7 7-7 7" size={16} />
              </button>
            </div>
          </section>

          <div className="sec-divider" />

          {/* ── FEATURES ── */}
          <section className="features-sec" id="features">
            <div className="features-inner">
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "32px" }}>
                <div className="reveal-left">
                  <div className="sec-label">Why IINDEPRO</div>
                  <h2 className="sec-heading">Engineering<br />Advantage</h2>
                </div>
                <p className="sec-sub reveal-right" style={{ paddingBottom: 8, maxWidth: "400px" }}>Every component purpose-built. 47 quality checkpoints before any motor ships.</p>
              </div>
              <div className="features-grid">
                {features.map((f, i) => {
                  const spans = ["span 5", "span 7", "span 7", "span 5", "span 6", "span 6"];
                  return (
                    <div
                      className="feature-card reveal"
                      key={i}
                      style={{ transitionDelay: `${i * 0.12}s`, gridColumn: spans[i % spans.length] }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = ((e.clientX - rect.left) / rect.width) * 100;
                        const y = ((e.clientY - rect.top) / rect.height) * 100;
                        e.currentTarget.style.setProperty('--x', `${x}%`);
                        e.currentTarget.style.setProperty('--y', `${y}%`);
                      }}
                    >
                      <div className="feature-glow" />
                      <div className="feature-corner corner-tl" />
                      <div className="feature-corner corner-tr" />
                      <div className="feature-corner corner-bl" />
                      <div className="feature-corner corner-br" />
                      <div className="feature-scan" />
                      <div className="feature-card-header">
                        <div className="feature-num-box">0{i + 1}</div>
                        <div className="feature-status"><div className="status-dot" />STATUS: ACTIVE</div>
                      </div>
                      <div className="feature-icon"><Ico d={f.icon} size={26} /></div>
                      <div className="feature-card-content">
                        <div className="feature-name">{f.name}</div>
                        <p className="feature-desc">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="sec-divider" />
        </>
      ) : view === "bird-intro" ? (
        <BirdSeriesIntro goHome={goHome} openCategory={openCategory} />
      ) : view === "product-detail" ? (
        <ProductDetailView product={selectedProduct} goBack={goBack} openProduct={openProduct} />
      ) : view === "about" ? (
        <AboutView goHome={goHome} openCategory={openCategory} />
      ) : view === "contact" ? (
        <ContactView goHome={goHome} />
      ) : (
        <CategoryView selectedCategory={selectedCategory} goHome={goHome} openProduct={openProduct} />
      )}

      {/* ── FOOTER ── */}
      <footer className="footer" id="footer">
        <div className="f-grid">
          <div className="f-brand">
            <img src="/Iindepro_logo (1).png" alt="IINDEPRO" style={{ height: '260px', width: '260px' }} />
          </div>
          <div className="f-col">
            <div className="f-title">Products</div>
            <div className="f-links">
              {heroProducts.map((p, i) => (
                <a key={i} href="#products" className="f-link" onClick={() => { setHeroIndex(i); setView("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  {p.name.split(' ')[1] || p.name}
                </a>
              ))}
            </div>
          </div>
          <div className="f-col">
            <div className="f-title">Solutions</div>
            <div className="f-links">
              <a
                href="#"
                className="f-link"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProduct(null);
                  setSelectedCategory('');
                  setView('about');
                  setShowMegaMenu(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Surveillance
              </a>
              <a
                href="#"
                className="f-link"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProduct(null);
                  setSelectedCategory('');
                  setView('about');
                  setShowMegaMenu(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Racing
              </a>
              <a
                href="#"
                className="f-link"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProduct(null);
                  setSelectedCategory('');
                  setView('about');
                  setShowMegaMenu(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Agriculture
              </a>
              <a
                href="#"
                className="f-link"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProduct(null);
                  setSelectedCategory('');
                  setView('about');
                  setShowMegaMenu(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Cargo Lift
              </a>
            </div>
          </div>
          <div className="f-col">
            <div className="f-title">Company</div>
            <div className="f-links">
              <a
                href="#"
                className="f-link"
                onClick={(e) => {
                  e.preventDefault();
                  openContact();
                }}
              >
                Contact
              </a>
              <a href="#" className="f-link">Manuals</a>
              <a href="#" className="f-link">R&D</a>
              <a href="#" className="f-link">Careers</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 IINDEPRO Technology. All rights reserved.</div>
          <div className="f-social">
            {[
              "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z",
              "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01",
              "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
            ].map((d, i) => (
              <a href="#" className="fs-btn" key={i}><Ico d={d} size={15} /></a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}