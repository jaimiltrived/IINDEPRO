import React from 'react';
import { Ico } from './common/Icons';
import { IMGS } from '../imgs_data';

export const BirdSeriesIntro = ({ goHome, openCategory }) => {
    const series = [
      { id: "eagle", name: "Eagle", sub: "Heavy Lift & Industrial", desc: "ENGINEERED FOR EXTREME PAYLOADS", img: "/products/eb8320.png", color: "#e85d26" },
      { id: "falcon", name: "Falcon ", sub: "Tactical & Surveillance", desc: "STEALTH AND LONG-RANGE PRECISION", img: IMGS.fa_3110, color: "#c084fc" },
      { id: "hummingbird", name: "Hummingbird", sub: "Agile & Racing", desc: "ELITE AGILITY AND TOP-SPEED", img: "/products/2206_motor.png", color: "#fff" },
      { id: "godwick", name: "Godwick", sub: "Agriculture & Endurance", desc: "ROBUST PERFORMANCE FOR AGRI-TECH", img: "/products/3120_2.png", color: "#00c896" },
      { id: "condor", name: "Condor", sub: "High-Altitude Endurance", desc: "MAXIMUM EFFICIENCY FOR LONG MISSIONS", img: "/products/hb_6206.png", color: "#ff8c5a" }
    ];

    return (
      <div className="category-view" style={{ background: "#050805" }}>
        <div className="back-btn-wrap reveal visible">
          <button className="back-btn" onClick={goHome}>
            <Ico d="M19 12H5M12 19l-7-7 7-7" size={14} /> Back to Home
          </button>
        </div>

        <section className="hero" style={{ minHeight: "80vh", padding: "80px 52px 40px", display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          {/* Background Image with Overlay */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${IMGS.bird_series})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6, zIndex: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #050805 10%, transparent 60%), linear-gradient(to top, #050805 10%, transparent 50%)', zIndex: 1 }} />

          <div className="content" style={{ padding: 0, minHeight: "auto", textAlign: "left", position: 'relative', zIndex: 2 }}>
            <h1 className="headline" style={{ fontSize: "clamp(54px, 9vw, 120px)", marginBottom: '12px', lineHeight: 0.95 }}>
              <span className="headline-line visible" style={{ color: '#e85d26', textShadow: '0 0 30px rgba(232,93,38,0.5)' }}>
                Nature-Inspired Excellence.
              </span>
              <span className="headline-line visible" style={{ color: "rgba(255,255,255,0.85)" }}>
                Engineered for the Future.
              </span>
            </h1>
            <div style={{ width: '80px', height: '4px', background: '#e85d26', marginBottom: '30px', borderRadius: '2px' }} />
            <div style={{ maxWidth: 760, display: 'grid', gap: 18 }}>
              <p className="sec-sub" style={{ fontSize: "22px", color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, margin: 0 }}>
                At IINDEPRO Dynamics, our propulsion systems draw from nature’s flight masters. Each motor series reflects
                the spirit and performance of its avian counterpart—fusing bio-inspired intelligence with aerospace
                precision to redefine drone propulsion.
              </p>

              <div style={{ marginTop: 6 }}>
                <div className="sec-label" style={{ color: "rgba(255,255,255,0.85)", marginBottom: 10 }}>
                  Why Birds? The Science Behind Our Inspiration
                </div>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, margin: 0, maxWidth: 760 }}>
                  For millions of years, birds have perfected flight—achieving unmatched aerodynamics, agility, and energy
                  efficiency. At IINDEPRO, we convert these natural principles into cutting-edge motor technology,
                  engineered to be faster, lighter, and more efficient than ever before. Each series is not just named
                  after a bird—it’s engineered in its image.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="cat-grid" style={{ padding: "80px 52px 100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "40px", position: 'relative', zIndex: 1 }}>
          {series.map((s, i) => (
            <div
              key={s.id}
              className="feature-card reveal visible"
              style={{ transitionDelay: `${i * 0.1}s`, height: "500px", cursor: "pointer" }}
              onClick={() => openCategory(s.name)}
            >
              <div className="feature-corner corner-tl" />
              <div className="feature-corner corner-tr" />
              <div className="feature-corner corner-bl" />
              <div className="feature-corner corner-br" />

              <div style={{ position: "absolute", top: "50%", right: "-10%", transform: "translateY(-50%)", width: "70%", height: "120%", opacity: 0.1, pointerEvents: "none" }}>
                <img src={s.img} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>

              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                <div>
                  <div className="pc-num">Series 0{i + 1}</div>
                  <h2 className="headline" style={{ fontSize: "60px", margin: "10px 0", color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>{s.name}</h2>
                  <div className="sec-label" style={{ color: s.color, marginBottom: "15px", fontWeight: '700', letterSpacing: '3px', textShadow: `0 0 10px ${s.color}44` }}>{s.sub}</div>
                  <p className="pc-desc" style={{ fontSize: "18px", maxWidth: "300px", color: 'rgba(255,255,255,0.6)' }}>{s.desc}</p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <img src={s.img} alt={s.name} style={{ width: "180px", height: "180px", objectFit: "contain", filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))" }} />
                  <div className="ap-btn" style={{ flex: 1, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    Explore {s.name} <Ico d="M5 12h14M12 5l7 7-7 7" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  