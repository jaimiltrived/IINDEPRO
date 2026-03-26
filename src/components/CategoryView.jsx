import React, { useState, useRef } from 'react';
import { Ico } from './common/Icons';
import { accordionData } from '../data/constants';
import { useParticles } from '../hooks/useParticles';

export const CategoryView = ({ selectedCategory: searchSeries, goHome, openProduct }) => {
    
    const [activeTab, setActiveTab] = useState("PRO SERIES");
    const products = accordionData.filter(p => p.series === searchSeries);
    const canvasRef = useRef(null);
    useParticles(canvasRef, searchSeries);

    const seriesDetailedInfo = {
      "Eagle": {
        desc: "Inspired by the Harpy Eagle, a symbol of strength and precision lift.",
        longDesc: "Inspired by the Harpy Eagle, a symbol of strength and precision lift. Designed to deliver massive torque and thrust stability for heavy-payload operations.",
        birdImg: "/products/Birds-05.png",
        stats: [
          { label: "", value: "Industrial Lift" },
          { label: "", value: "Defence" },
          { label: "", value: "Cargo" },
          { label: "", value: "Agriculture" }
        ]
      },
      "Hummingbird": {
        desc: "Inspired by the hummingbird, capable of hovering mid-air with wings beating up to 100 times per second.",
        longDesc: "Inspired by the hummingbird, capable of hovering mid-air with wings beating up to 100 times per second. Engineered for lightweight drones requiring high precision and endurance.",
        birdImg: "/products/Birds-01.png",
        stats: [
          { label: "", value: "Micro Drones" },
          { label: "", value: "Indoor Inspection" },
          { label: "", value: "Cinematic Platforms" },

        ]
      },
      "Godwick": {
        desc: "Modelled after the Godwick, known for long-range flight and aerodynamic endurance.",
        longDesc: "Modelled after the Godwick, known for long-range flight and aerodynamic endurance. Optimized for fixed-wing and VTOL UAVs requiring stability, low vibration, and consistent performance.",
        birdImg: "/products/Birds-03.png",
        stats: [
          { label: "", value: "Long-Range Mapping" },
          { label: "", value: "Defence Patrol" },
          { label: "", value: "Survey Missions" },
        ]
      },
      "Falcon ": {
        desc: "Inspired by the Peregrine Falcon, the fastest bird on Earth.",
        longDesc: "Inspired by the Peregrine Falcon, the fastest bird on Earth, the Falcon  delivers ultra-high RPMs, instant thrust, and rapid directional response.",
        birdImg: "/products/Birds-04.png",
        stats: [
          { label: "", value: "FPV Racing" },
          { label: "", value: "Aerobatic Drones" },
          { label: "", value: "High-Speed Surveillance" },
        ]
      },
      "Condor": {
        desc: "Inspired by the Andean Condor, representing high-altitude dominance and endurance.",
        longDesc: "Inspired by the Andean Condor, representing high-altitude dominance and endurance. Delivers India’s first indigenous coaxial and electric rocket propulsion system for heavy-lift operations.",
        birdImg: "/products/Birds-02.png",
        stats: [
          { label: "", value: "Strategic Defence" },
          { label: "", value: "Heavy Cargo" },
          { label: "", value: "High-Altitude Logistics" },
          { label: "", value: "Industrial Lift" }
        ]
      },
      "GB": {
        desc: "GB series focused on stable mid-to-heavy lift performance.",
        longDesc: "GB series motors are tuned for predictable thrust delivery under sustained mid-to-heavy payload operation, balancing cooling and efficiency.",
        birdImg: "/products/Birds-05.png",
        stats: [
          { label: "", value: "Stable Lift" },
          { label: "", value: "Industrial Reliability" },
          { label: "", value: "Balanced Cooling" },
          { label: "", value: "Mid-Range Power" }
        ]
      },
      "Propellers": {
        desc: "Nature-inspired aerodynamic geometries for peak laminar flow and thrust-to-weight ratio.",
        longDesc: "Our propulsion systems draw from nature's flight masters. Each rotor blade and propeller profile is engineered in the image of avian flight profiles to achieve unmatched aerodynamics and energy efficiency.",
        birdImg: "/products/Birds-01.png",
        stats: [
          { label: "TENSILE STRENGTH", value: "3500 MPA" },
          { label: "VIBRATION G", value: "< 0.05G" },
          { label: "BALANCE GRADE", value: "ISO G1.0" },
          { label: "MATERIAL", value: "CFRP FORGED" }
        ]
      }
    };

    const currentInfo = seriesDetailedInfo[searchSeries] || seriesDetailedInfo["Eagle"];

    return (
      <div className="category-view" style={{
        background: "radial-gradient(ellipse 80% 70% at 55% 40%, #1a2e1a 0%, #0d1a0d 40%, #06090a 100%)",
        minHeight: "100vh", position: "relative", overflow: "hidden"
      }}>
        <div className="scan-line" />
        <canvas ref={canvasRef} id="particles-canvas" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, padding: "0 52px 100px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "40px 0 60px" }}>
            <button className="back-btn" onClick={goHome} style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", fontWeight: "700", letterSpacing: "1.5px" }}>
              <Ico d="M19 12H5M12 19l-7-7 7-7" size={14} /> BACK TO OPERATIONS
            </button>
            <div style={{ display: "flex", gap: "40px" }}>
              <a href="#" style={{ color: "#fff", textDecoration: "none", fontSize: "13px", fontWeight: "700", letterSpacing: "1.5px", opacity: 0.9 }}>SYSTEMS</a>
              <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "13px", fontWeight: "700", letterSpacing: "1.5px" }}>COMPARISON</a>
              <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "13px", fontWeight: "700", letterSpacing: "1.5px" }}>SUPPORT</a>
            </div>
          </div>

          {/* ── UNIFIED SERIES ARCHITECTURE & MISSION PROFILES ── */}
          <div style={{
            marginTop: "40px",
            position: "relative",
            overflow: "hidden",
            borderRadius: "2px"
          }}>
            <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", minHeight: "650px" }}>

              {/* LEFT — Primary Branding & Mission */}
              <div style={{ padding: "80px 10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "60px" }}>
                  <div>
                    <div className="sec-label" style={{ marginBottom: "12px", fontSize: "12px", color: "#e85d26", letterSpacing: "4px" }}>
                      SYSTEM_ARCHITECTURE // 0{Object.keys(seriesDetailedInfo).indexOf(searchSeries) + 1}
                    </div>
                    <h1 className="sec-heading" style={{ fontSize: "clamp(48px, 6vw, 96px)", margin: 0, lineHeight: 0.85, letterSpacing: "-3px" }}>
                      {searchSeries === "Propellers" ? "Propulsion" : searchSeries}
                    </h1>
                    <h1 className="sec-heading" style={{ fontSize: "clamp(48px, 6vw, 96px)", margin: 0, lineHeight: 0.85, letterSpacing: "-3px", color: "rgba(255,255,255,0.3)" }}>
 Series
                    </h1>
                  </div>
                </div>

                <div style={{ width: "40px", height: "1px", background: "#e85d26", marginBottom: "30px" }} />

                <h2 className="sec-label" style={{ fontSize: "14px", color: "#fff", marginBottom: "15px", letterSpacing: "2px" }}>OPERATIONAL CAPACITY</h2>
                <p style={{ fontSize: "20px", lineHeight: 1.6, color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif", fontWeight: 300, maxWidth: "550px", marginBottom: "40px" }}>
                  {currentInfo.longDesc}
                </p>


              </div>

              {/* Column 2: The Immortal Bird Visual — CENTERED */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ flexShrink: 0, width: "450px", height: "450px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  {/* Orbit Rings from Home Page */}
                  <div className="orbit-ring orbit-spin-cw" style={{ width: "420px", height: "420px", opacity: 0.1, border: "1px dashed rgba(255,255,255,0.3)" }} />
                  <div className="orbit-ring orbit-spin-ccw" style={{ width: "350px", height: "350px", opacity: 0.15, borderColor: "rgba(232,93,38,0.3)" }} />

                  {/* Glowing core */}
                  <div style={{
                    position: "absolute",
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(232,93,38,0.1) 0%, transparent 70%)",
                    zIndex: 0,
                    filter: "blur(40px)"
                  }} />

                  <img
                    src={
                      searchSeries.includes("Eagle") ? "/products/Birds-05.png" :
                        searchSeries.includes("Hummingbird") ? "/products/Birds-01.png" :
                          searchSeries.includes("Godwick") ? "/products/Birds-03.png" :
                            searchSeries.includes("Falcon") ? "/products/Birds-04.png" :
                              searchSeries.includes("GB") ? "/products/Birds-05.png" :
                              searchSeries.includes("Condor") ? "/products/Birds-02.png" :
                                "/products/Birds-01.png"
                    }
                    alt={searchSeries}
                    style={{
                      width: "420px",
                      height: "420px",
                      objectFit: "contain",
                      filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.8)) saturate(1.2)",
                      animation: "birdFloat 6s ease-in-out infinite",
                      zIndex: 2,
                      position: "relative"
                    }}
                  />

                  {/* HUD Elements */}
                  <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(255,255,255,0.02)", pointerEvents: "none" }}>
                    {/* Scanning technical pulse */}
                    <div style={{
                      position: "absolute", top: "50%", left: 0, width: "100%", height: "2px",
                      background: "linear-gradient(90deg, transparent, rgba(232,93,38,0.3), transparent)",
                      animation: "scanPulse 4s ease-in-out infinite",
                      zIndex: 3
                    }} />
                  </div>

                  {/* Technical Markers - HUD Style */}
                  <div style={{ position: "absolute", top: "15%", left: "-20px", textAlign: "left", zIndex: 3 }}>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "2px", marginBottom: "4px" }}>{searchSeries}</div>
                    <div style={{ fontSize: "14px", color: "#fff", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}>
                      {searchSeries.slice(0, 2).toUpperCase()}-{6220}
                    </div>
                  </div>

                  <div style={{ position: "absolute", top: "10%", right: "-20px", fontSize: "10px", fontFamily: "monospace", color: "rgba(255,255,255,0.2)", textAlign: "right", letterSpacing: "1px", zIndex: 3 }}>
                    <span style={{ color: "#e85d26" }}>[ FALCON SERIES]</span><br />
                    FB: 6220<br />FB: 1606
                  </div>

                  <div style={{ position: "absolute", bottom: "10%", left: "-20px", fontSize: "10px", fontFamily: "monospace", color: "rgba(255,255,255,0.2)", letterSpacing: "1px", zIndex: 3 }}>
                    <span style={{ color: "#e85d26" }}>[ HUMMINGBIRD ]</span><br />
                     HB: 4006 <br />HB: 5308
                  </div>

                  <div style={{ position: "absolute", bottom: "15%", right: "-20px", textAlign: "right", zIndex: 3 }}>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "2px", marginBottom: "4px" }}>CD: 4220</div>
                    <div style={{ fontSize: "14px", color: "#00ff9d", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}>CONDOR</div>
                  </div>
                </div>
              </div>

              {/* RIGHT — Technical Benchmarks */}
              <div style={{ padding: "80px 10px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "25px" }}>
                <div className="sec-label" style={{ marginBottom: "10px", color: "#e85d26", letterSpacing: "3px" }}>CORE_BENCHMARKS</div>
                {currentInfo.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "24px",
                      background: "rgba(255,255,255,0.015)",
                      border: "1px solid rgba(255,255,255,0.04)",
                      clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,93,38,0.3)"; e.currentTarget.style.background = "rgba(232,93,38,0.02)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; e.currentTarget.style.background = "rgba(255,255,255,0.015)"; }}
                  >
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "2.5px", marginBottom: "8px" }}>{stat.label}</div>
                    <div className="model-name" style={{ fontSize: "28px", color: "#fff", margin: 0 }}>{stat.value}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>


          <br />



          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <h2 className="sec-heading" style={{ fontSize: "32px", margin: 0, paddingBottom: "20px" }}>Propulsion Core</h2>
            <div style={{ display: "flex", gap: "48px" }}>
              {["PRO SERIES", "ELITE", "TACTICAL", "PRECISION"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: "transparent", border: "none", padding: "24px 0",
                    color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.3)",
                    fontSize: "16px", fontWeight: "500", letterSpacing: "2px", cursor: "pointer",
                    fontFamily: "'Bebas Neue', sans-serif",
                    borderBottom: activeTab === tab ? "2px solid #e85d26" : "2px solid transparent",
                    transition: "color 0.3s ease, border-color 0.3s ease"
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>


          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: "60px" }}>
            {products.length > 0 && products.map((p, i) => (
              <div key={p.id} className="reveal visible" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div style={{
                  background: "rgba(255,255,255,0.02)", height: "360px", display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", clipPath: "polygon(0 0, 100% 0, 100% 88%, 92% 100%, 0 100%)",
                  border: "1px solid rgba(255,255,255,0.04)", overflow: "hidden", transition: "all 0.5s ease", cursor: "pointer"
                }} onClick={() => openProduct(p)} onMouseEnter={e => { e.currentTarget.style.background = "rgba(232,93,38,0.03)"; e.currentTarget.style.borderColor = "rgba(232,93,38,0.2)"; }} onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; }}>
                  <img src={p.img} alt={p.name} style={{ height: "65%", objectFit: "contain", filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.9))" }} />
                  <div style={{
                    position: "absolute", bottom: 30, left: 30, background: "rgba(232,93,38,0.15)",
                    color: "#e85d26", fontSize: "13px", padding: "8px 16px", letterSpacing: "1.5px"
                  }}>
                    {activeTab}
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "32px" }}>
                  <div>
                    <div style={{ color: "#e85d26", fontSize: "14px", letterSpacing: "3px", marginBottom: "8px", opacity: 0.8 }}>{p.title.toUpperCase()}</div>
                    <h3 className="model-name" style={{ fontSize: "42px", margin: 0, letterSpacing: "0.5px" }}>{p.name}</h3>
                  </div>
                  <a onClick={() => openProduct(p)} className="mm-feat-btn" style={{ fontSize: "13px", borderBottom: "2px solid #e85d26", paddingBottom: "6px", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                    VIEW SPECS <Ico d="M5 12h14M12 5l7 7-7 7" size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };





  