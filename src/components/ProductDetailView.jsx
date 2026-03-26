import React, { useState } from 'react';
import { Ico } from './common/Icons';
import { accordionData, accordionData1 } from '../data/constants';

export const ProductDetailView = ({ product, goBack, openProduct }) => {
    if (!product) return null;

    const [activeVariant, setActiveVariant] = useState(0);
    const variants = ["160 KV", "430 KV"];

    // Default performance data
    const performanceData = [
      { t: 10, rpm: 1035, a: 0.332, thrust: 257, eff: 15.438 },
      { t: 20, rpm: 1428, a: 0.713, thrust: 537, eff: 15.027 },
      { t: 50, rpm: 2692, a: 3.892, thrust: 2040, eff: 10.494 },
      { t: 80, rpm: 3810, a: 10.898, thrust: 4091, eff: 7.574 },
      { t: 100, rpm: 4396, a: 17.150, thrust: 5564, eff: 6.594 }
    ];

    const fallbackHighlights = [
      { l: "MOTOR DIAMETER", v: "ø 68.8 mm" },
      { l: "MOTOR LENGTH", v: "32 mm" },
      { l: "MOTOR WEIGHT", v: "240 g ± 10 g" }
    ];

    const highlights = (product.specs?.length ? product.specs.slice(0, 3).map(s => ({ l: s.l, v: s.v })) : fallbackHighlights);

    const allSuggestions = [...accordionData, ...accordionData1];
    const uniqueByKey = (arr) => {
      const m = new Map();
      arr.forEach((p) => {
        const key = `${p.series || ""}::${p.name || ""}`;
        if (!m.has(key)) m.set(key, p);
      });
      return Array.from(m.values());
    };

    const normalizedSuggestions = uniqueByKey(allSuggestions);
    const related = normalizedSuggestions
      .filter(p => p && product && (p.series === product.series) && p.name !== product.name)
      .slice(0, 5);

    const suggestions = (related.length ? related : normalizedSuggestions.filter(p => p.name !== product.name).slice(0, 5));

    const hasProductSpecs = Array.isArray(product.specs) && product.specs.length > 0;

    return (
      <div className="product-page" style={{ 
        backgroundColor: "#0a0f0a",
        backgroundImage: "radial-gradient(ellipse 80% 70% at 55% 40%, #1a2e1a 0%, #0d1a0d 40%, #06090a 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        paddingBottom: "100px",
        color: "#fff",
        fontFamily: "'Inter', sans-serif"
      }}>
        <div style={{ 
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(255,255,255,0.012) 18px, rgba(255,255,255,0.012) 19px)",
          pointerEvents: "none",
          zIndex: 0
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="scan-line" />

        {/* Top Navbar / Back */}
        <div style={{ padding: "110px 52px 20px", position: "relative", zIndex: 2 }}>
           <button className="back-btn" onClick={goBack} style={{ 
             background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", 
             cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", 
             fontWeight: "700", letterSpacing: "1px", fontSize: "12px", fontFamily: "'Inter', sans-serif" 
           }}>
            <Ico d="M19 12H5M12 19l-7-7 7-7" size={12} /> BACK TO PRODUCTS
          </button>
        </div>

        {/* MAIN HERO SECTION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
            gap: "clamp(24px, 4vw, 80px)",
            padding: "0 clamp(16px, 4vw, 52px)",
            marginTop: "20px"
          }}
        >

          {/* Left Column: Image & Thumbnails */}
          <div className="reveal-left visible">
            <div style={{
               background: "#ffffff", 
               borderRadius: "8px",
               padding: "clamp(28px, 5vw, 60px)",
               position: "relative",
               clipPath: "polygon(0 0, 100% 0, 100% 88%, 90% 100%, 0 100%)",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               minHeight: "clamp(360px, 55vh, 560px)",
               boxShadow: "0 40px 80px rgba(0,0,0,0.5)"
            }}>
               
              <img src={product.img} alt={product.name} style={{ width: "85%", filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.15))" }} />
            </div>

            {/* Thumbnail Gallery */}
            <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
               {[0,1,2,3,4].map(i => (
                 <div key={i} style={{
                   width: "90px",
                   height: "90px",
                   background: "#0a0f0a",
                   border: i === 2 ? "2px solid #e85d26" : "1px solid rgba(255,255,255,0.05)",
                   borderRadius: "4px",
                   padding: "12px",
                   cursor: "pointer",
                   transition: "transform 0.3s ease"
                 }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                   <img src={product.img} style={{ width: "100%", height: "100%", objectFit: "contain", opacity: i === 2 ? 1 : 0.4 }} alt="Thumb" />
                 </div>
               ))}
            </div>
          </div>

          {/* Right Column: Title & Info */}
          <div className="reveal-right visible" style={{ paddingTop: "10px" }}>
            <div style={{ 
              color: "rgba(255,255,255,0.45)", fontSize: "11px", fontWeight: "600", 
              display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px",
              letterSpacing: "1px", textTransform: "uppercase"
            }}>
              <span style={{ color: "#e85d26", fontSize: "16px" }}>■</span>{product.series.toUpperCase()} SERIES {'\u2014'} {product.name.toUpperCase()}
            </div>

            <h1 style={{ 
              fontSize: "clamp(48px, 6.5vw, 84px)", margin: "0 0 28px", fontWeight: "700", 
              fontFamily: "'Inter', sans-serif", letterSpacing: "-1px", lineHeight: 0.95 
            }}>{product.name}</h1>

            {product.desc && (
              <p
                style={{
                  marginTop: -8,
                  marginBottom: 28,
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  maxWidth: 520
                }}
              >
                {product.desc}
              </p>
            )}

            <div style={{ marginBottom: "40px" }}>
              <div style={{ 
                display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", 
                fontSize: "12px", fontWeight: "800", letterSpacing: "2px", opacity: 0.8
              }}>
                <span style={{ color: "#e85d26" }}>■</span> VARIANTS
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                {variants.map((v, i) => (
                  <button key={i} onClick={() => setActiveVariant(i)} style={{
                    padding: "14px 28px",
                    background: i === activeVariant ? "#bcd0d0" : "rgba(255,255,255,0.02)",
                    color: i === activeVariant ? "#000" : "#fff",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: "13px",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.19,1,0.22,1)"
                  }}>
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <button className="hover-lift" style={{
              background: "#121212",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "16px 36px",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
              marginBottom: "48px",
              letterSpacing: "1px"
            }}>
              ENQUIRE NOW <Ico d="M5 12h14M12 5l7 7-7 7" size={14} />
            </button>

            {/* Highlights Box - IMPROVED TYPOGRAPHY */}
            <div style={{ border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
              <div style={{ background: "#000", padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontSize: "12px", fontWeight: "800", display: "flex", alignItems: "center", gap: "10px", letterSpacing: "1.5px" }}>
                  <span style={{ color: "#e85d26" }}>■</span> HIGHLIGHTS
                </div>
                <div style={{ opacity: 0.3, cursor: "pointer" }}>✕</div>
              </div>
              <div style={{ background: "#d9eaea", color: "#000", padding: "32px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
                 {highlights.map((h, i) => (
                   <div key={i}>
                     <div style={{ fontSize: "10px", fontWeight: "600", opacity: 0.5, marginBottom: "8px", letterSpacing: "1px" }}>{h.l}</div>
                     <div style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "-0.5px" }}>{h.v}</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: TECHNICAL SPECS */}
        <div style={{ padding: "0 clamp(16px, 4vw, 52px)", marginTop: "clamp(80px, 10vw, 120px)" }}>
           <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "80px" }}>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: "32px", fontWeight: "700", color: "#e85d26", marginBottom: "44px", letterSpacing: "-0.5px" }}>DETAILED PERFORMANCE SPECS</h2>
              
              <div style={{ overflow: "hidden", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
                 <div style={{ background: "rgba(232,93,38,0.9)", color: "#fff", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", padding: "16px", fontSize: "11px", fontWeight: "800", textAlign: "center", letterSpacing: "1.5px" }}>
                   <div>THROTTLE (%)</div>
                   <div>SPEED (RPM)</div>
                   <div>CURRENT (A)</div>
                   <div>THRUST (g)</div>
                   <div>EFFICIENCY (gf/W)</div>
                 </div>
                 {performanceData.map((d, i) => (
                   <div key={i} style={{ 
                     display: "grid", gridTemplateColumns: "repeat(5, 1fr)", padding: "20px", 
                     borderBottom: "1px solid rgba(255,255,255,0.03)", textAlign: "center", 
                     fontSize: "14px", fontWeight: "500",
                     background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" 
                   }}>
                      <div style={{ color: "#e85d26", fontWeight: "800" }}>{d.t}%</div>
                      <div style={{ opacity: 0.8 }}>{d.rpm}</div>
                      <div style={{ opacity: 0.8 }}>{d.a}</div>
                      <div style={{ opacity: 0.8 }}>{d.thrust}</div>
                      <div style={{ color: "#e85d26", fontWeight: "700" }}>{d.eff}</div>
                   </div>
                 ))}
              </div>

              {hasProductSpecs && (
                <div style={{ marginTop: 44 }}>
                  <div className="sec-label" style={{ marginBottom: 18, color: "rgba(255,255,255,0.75)", letterSpacing: "2px", fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>
                    Product Specs
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 }}>
                    {product.specs.map((s, i) => (
                      <div
                        key={`${s.l}-${i}`}
                        style={{
                          padding: "18px 18px",
                          borderRadius: 8,
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: 1, textTransform: "uppercase", fontWeight: 800, marginBottom: 10 }}>
                          {s.l}
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
           </div>
        </div>

        {/* Suggested Products */}
        <div style={{ padding: "0 clamp(16px, 4vw, 52px)", marginTop: "clamp(60px, 8vw, 90px)" }}>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 50 }}>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 28, fontWeight: 800, color: "#e85d26", marginBottom: 26, letterSpacing: "-0.5px" }}>
              Suggested Products
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
              {suggestions.map((s, i) => (
                <div
                  key={`${s.series || ""}-${s.name || ""}-${i}`}
                  onClick={() => openProduct && openProduct(s)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openProduct && openProduct(s);
                  }}
                  style={{
                    cursor: "pointer",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)",
                    overflow: "hidden",
                    position: "relative"
                  }}
                >
                  <div style={{ height: 160, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.18)" }}>
                    <img
                      src={s.img}
                      alt={s.name}
                      style={{ maxHeight: "95%", maxWidth: "95%", objectFit: "contain", filter: "drop-shadow(0 14px 30px rgba(0,0,0,0.6))" }}
                    />
                  </div>
                  <div style={{ padding: 16 }}>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: 2, textTransform: "uppercase", fontWeight: 800, marginBottom: 10 }}>
                      {(s.series || "").toUpperCase()}
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 0.2, lineHeight: 1.15 }}>
                      {s.name}
                    </div>
                    {s.desc && (
                      <div style={{ marginTop: 8, color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.4 }}>
                        {s.desc}
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      border: "1px solid rgba(232,93,38,0.0)",
                      transition: "border-color 0.2s ease"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  };



  