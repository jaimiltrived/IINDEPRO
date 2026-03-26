import React, { useEffect, useRef, useState } from 'react';
import { Ico } from './common/Icons';
import { APPLICATIONS } from '../data';

/* ─────────────────────────────────────────────
   BIRD SERIES DATA
───────────────────────────────────────────── */
const SERIES = [
  {
    id: 'eagle', name: 'Eagle', code: 'EB', sub: 'Heavy Lift & Industrial',
    tagline: 'ENGINEERED FOR EXTREME PAYLOADS',
    desc: 'Flagship motor series delivering unmatched torque for logistics, cargo, and industrial UAV platforms.',
    color: '#e85d26', img: '/products/eb8320.png',
    stat: '12.5 kg', statLabel: 'Max Thrust',
    kv: '120 KV', power: '3200 W',
  },
  {
    id: 'falcon', name: 'Falcon', code: 'FA', sub: 'Tactical & Surveillance',
    tagline: 'STEALTH. SPEED. PRECISION.',
    desc: 'Built for ISR and surveillance missions — razor-sharp response in high-stress tactical environments.',
    color: '#c084fc', img: '/products/3120_2.png',
    stat: '< 5ms', statLabel: 'Response',
    kv: '900 KV', power: '700 W',
  },
  {
    id: 'hummingbird', name: 'Hummingbird', code: 'HB', sub: 'Agile & Racing',
    tagline: 'ELITE AGILITY. TOP-SPEED THRUST.',
    desc: 'Designed for FPV racing and acrobatics — explosive power-to-weight ratio with ultra-fast throttle response.',
    color: '#ffffff', img: '/products/2206_motor.png',
    stat: '2100 KV', statLabel: 'Speed',
    kv: '2100 KV', power: '450 W',
  },
  {
    id: 'godwick', name: 'Godwick', code: 'GW', sub: 'Agriculture & Endurance',
    tagline: 'ROBUST PERFORMANCE FOR AGRI-TECH.',
    desc: 'Long-endurance motors optimised for precision crop spraying, field mapping, and coastal surveys.',
    color: '#00c896', img: '/products/3120_2.png',
    stat: '120+ min', statLabel: 'Endurance',
    kv: '150 KV', power: '1200 W',
  },
  {
    id: 'condor', name: 'Condor', code: 'CD', sub: 'High-Altitude Endurance',
    tagline: 'MAXIMUM EFFICIENCY FOR LONG MISSIONS.',
    desc: 'High-altitude optimised coaxial propulsion — built for stratospheric conditions and long-range recon.',
    color: '#ff8c5a', img: '/products/hb_6206.png',
    stat: '98%', statLabel: 'Efficiency',
    kv: '180 KV', power: '1350 W',
  },
];

const STATS = [
  { num: 5, suffix: '', label: 'Bird Series', sub: 'Avian-Inspired Lines' },
  { num: 25, suffix: '+', label: 'Motor Models', sub: 'Across All Platforms' },
  { num: 94, suffix: '%', label: 'Efficiency', sub: 'Average Electrical' },
  { num: 2000, suffix: '+', label: 'Flight Hours', sub: 'Rated Lifespan' },
];

/* ─────────────────────────────────────────────
   ANIMATED COUNTER HOOK
───────────────────────────────────────────── */
function useCounter(target, duration = 1800, started = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return val;
}

/* ─────────────────────────────────────────────
   STAT CELL
───────────────────────────────────────────── */
function StatCell({ num, suffix, label, sub, started }) {
  const val = useCounter(num, 1600, started);
  return (
    <div style={{
      padding: '40px 52px',
      borderRight: '1px solid rgba(255,255,255,0.06)',
      display: 'flex', flexDirection: 'column', gap: 6,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(to right, #e85d26, transparent)',
        opacity: 0.6,
      }} />
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 68, lineHeight: 1, color: '#fff', letterSpacing: '-1px',
      }}>
        {val.toLocaleString()}<span style={{ color: '#e85d26' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: 1, textTransform: 'uppercase' }}>{sub}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FEATURED CARD (Eagle — wide horizontal)
───────────────────────────────────────────── */
function FeaturedSeriesCard({ s, openCategory }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="feature-card reveal visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 20,
        border: `1px solid ${hovered ? s.color + '60' : 'rgba(255,255,255,0.08)'}`,
        background: hovered
          ? `radial-gradient(ellipse at 30% 60%, ${s.color}20 0%, rgba(8,12,8,0.97) 65%)`
          : 'rgba(8,11,8,0.95)',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 50px 100px rgba(0,0,0,0.55), 0 0 60px ${s.color}25`
          : '0 24px 60px rgba(0,0,0,0.35)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 340,
      }}
    >
      {/* Accent top line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(to right, ${s.color}, ${s.color}44, transparent)`,
        opacity: hovered ? 1 : 0.5, transition: 'opacity 0.4s',
      }} />

      {/* Corner brackets */}
      <div className="feature-corner corner-tl" style={{ borderColor: s.color + '66', width: 18, height: 18 }} />
      <div className="feature-corner corner-tr" style={{ borderColor: s.color + '66', width: 18, height: 18 }} />
      <div className="feature-corner corner-bl" style={{ borderColor: s.color + '44' }} />
      <div className="feature-corner corner-br" style={{ borderColor: s.color + '44' }} />

      {/* Scan line */}
      {hovered && (
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg, transparent, ${s.color}80, transparent)`,
          animation: 'scanMove 3s linear infinite',
          zIndex: 4, pointerEvents: 'none',
        }} />
      )}

      {/* LEFT — text content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '44px 48px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        borderRight: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div>
          {/* Series badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{
              fontSize: 10, fontWeight: 900, letterSpacing: 4, textTransform: 'uppercase',
              color: s.color, border: `1px solid ${s.color}50`,
              padding: '6px 14px', borderRadius: 4,
              background: `${s.color}12`,
            }}>
              Series 01
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>
              FLAGSHIP · {s.code}
            </div>
          </div>

          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(72px, 7vw, 100px)',
            lineHeight: 0.88, letterSpacing: '2px', color: '#fff',
            marginBottom: 14,
            textShadow: hovered ? `0 0 60px ${s.color}40` : 'none',
            transition: 'text-shadow 0.4s',
          }}>{s.name}</h2>

          <div style={{
            fontSize: 11, fontWeight: 900, letterSpacing: 4,
            textTransform: 'uppercase', color: s.color,
            marginBottom: 20, opacity: 0.95,
          }}>{s.sub}</div>

          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.6)', maxWidth: 420 }}>
            {s.desc}
          </p>
        </div>

        {/* Spec pills row */}
        <div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            {[{ k: 'KV Rating', v: s.kv }, { k: 'Max Power', v: s.power }, { k: s.statLabel, v: s.stat }].map(({ k, v }) => (
              <div key={k} style={{
                padding: '8px 14px', borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
              }}>
                <div style={{ fontSize: 9, letterSpacing: 2, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 3 }}>{k}</div>
                <div style={{ fontSize: 15, fontWeight: 900, color: '#fff', letterSpacing: 0.5 }}>{v}</div>
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: `linear-gradient(to right, ${s.color}60, transparent)`, marginTop: 4 }} />
        </div>
      </div>

      {/* RIGHT — motor image */}
      <div style={{
        position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Glow behind image */}
        <div style={{
          position: 'absolute',
          width: 300, height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${s.color}30, transparent 70%)`,
          filter: 'blur(40px)',
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 0.5s',
        }} />
        {/* Subtle grid lines overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.015) 30px, rgba(255,255,255,0.015) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.015) 30px, rgba(255,255,255,0.015) 31px)',
          pointerEvents: 'none',
        }} />
        <img
          src={s.img} alt={s.name}
          style={{
            width: '80%', height: '85%', objectFit: 'contain',
            filter: `drop-shadow(0 20px 50px ${s.color}55)`,
            transform: hovered ? 'scale(1.06) translateY(-6px)' : 'scale(1) translateY(0)',
            transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1), filter 0.4s',
            position: 'relative', zIndex: 2,
          }}
        />
        {/* Decorative — series number watermark */}
        <div style={{
          position: 'absolute', bottom: 20, right: 24,
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 120, lineHeight: 1, letterSpacing: -4,
          color: 'rgba(255,255,255,0.03)',
          pointerEvents: 'none', userSelect: 'none',
        }}>01</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   COMPACT CARD (Falcon / Hummingbird / Godwick / Condor)
───────────────────────────────────────────── */
function CompactSeriesCard({ s, i, openCategory }) {
  const [hovered, setHovered] = useState(false);
  const num = String(i + 2).padStart(2, '0'); // starts from 02
  return (
    <div
      className="feature-card reveal visible"
      onClick={() => openCategory(s.name)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${i * 0.07}s`,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 18,
        border: `1px solid ${hovered ? s.color + '55' : 'rgba(255,255,255,0.07)'}`,
        background: hovered
          ? `radial-gradient(ellipse at 25% 75%, ${s.color}18 0%, rgba(8,12,8,0.97) 65%)`
          : 'rgba(8,11,8,0.95)',
        transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? `0 36px 72px rgba(0,0,0,0.5), 0 0 40px ${s.color}20` : '0 16px 40px rgba(0,0,0,0.3)',
        display: 'flex', flexDirection: 'column',
        minHeight: 320,
      }}
    >
      {/* Top accent line */}
      <div style={{
        height: 2,
        background: `linear-gradient(to right, ${s.color}, transparent)`,
        opacity: hovered ? 1 : 0.35,
        transition: 'opacity 0.4s',
        flexShrink: 0,
      }} />

      {/* Corner brackets */}
      <div className="feature-corner corner-tl" style={{ borderColor: s.color + '55' }} />
      <div className="feature-corner corner-br" style={{ borderColor: s.color + '33' }} />

      {/* Ghost motor image */}
      <div style={{
        position: 'absolute', bottom: 0, right: -10,
        width: '60%', height: '70%',
        opacity: hovered ? 0.18 : 0.06,
        pointerEvents: 'none',
        transition: 'opacity 0.5s',
      }}>
        <img src={s.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {/* Scan line */}
      {hovered && (
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg, transparent, ${s.color}70, transparent)`,
          animation: 'scanMove 3s linear infinite',
          zIndex: 3, pointerEvents: 'none',
        }} />
      )}

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '28px 30px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        flex: 1,
      }}>
        {/* Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{
              fontSize: 10, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase',
              color: s.color, border: `1px solid ${s.color}44`,
              padding: '4px 10px', borderRadius: 4,
              background: `${s.color}10`,
            }}>Series {num}</div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase' }}>{s.code}</div>
          </div>

          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px, 4.5vw, 68px)',
            lineHeight: 0.9, letterSpacing: '1px', color: '#fff',
            marginBottom: 8,
            textShadow: hovered ? `0 0 40px ${s.color}35` : 'none',
            transition: 'text-shadow 0.4s',
          }}>{s.name}</h2>

          <div style={{
            fontSize: 10, fontWeight: 900, letterSpacing: 3.5,
            textTransform: 'uppercase', color: s.color,
            marginBottom: 14, opacity: 0.85,
          }}>{s.sub}</div>

          <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>
            {s.desc}
          </p>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
            {[{ k: 'KV', v: s.kv }, { k: 'PWR', v: s.power }].map(({ k, v }) => (
              <div key={k} style={{
                padding: '5px 11px', borderRadius: 6,
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.025)',
              }}>
                <div style={{ fontSize: 8, letterSpacing: 2, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 2 }}>{k}</div>
                <div style={{ fontSize: 12, fontWeight: 900, color: '#fff' }}>{v}</div>
              </div>
            ))}
            <div style={{
              padding: '5px 11px', borderRadius: 6,
              border: `1px solid ${s.color}30`,
              background: `${s.color}0a`,
            }}>
              <div style={{ fontSize: 8, letterSpacing: 2, color: s.color + 'aa', textTransform: 'uppercase', marginBottom: 2 }}>{s.statLabel.toUpperCase()}</div>
              <div style={{ fontSize: 12, fontWeight: 900, color: s.color }}>{s.stat}</div>
            </div>
          </div>

          <div style={{ height: 1, background: `linear-gradient(to right, ${s.color}50, transparent)`, marginTop: 4 }} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export const AboutView = ({ goHome, openCategory }) => {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="category-view"
      style={{
        background: 'radial-gradient(ellipse 100% 60% at 60% 20%, #1a2e1a 0%, #0c140c 35%, #060a06 100%)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="scan-line" />

      {/* ── BACK BTN ── */}
      <div style={{ padding: '28px 52px 0', position: 'relative', zIndex: 2 }}>
        <button
          className="back-btn"
          onClick={goHome}
        >
          <Ico d="M19 12H5M12 19l-7-7 7-7" size={12} /> BACK TO OPERATIONS
        </button>
      </div>

      {/* ══════════════════════════════════════
          HERO — FULL WIDTH CINEMATIC
      ══════════════════════════════════════ */}
      <section style={{
        padding: '60px 52px 70px',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: 60,
        alignItems: 'center',
      }}>
        {/* Ambient glows */}
        <div style={{
          position: 'absolute', top: -80, left: -80, width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,93,38,0.10) 0%, transparent 70%)',
          filter: 'blur(30px)', pointerEvents: 'none', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,93,38,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0,
        }} />

        {/* ── LEFT: text ── */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontSize: 11, fontWeight: 800, letterSpacing: 6,
            textTransform: 'uppercase', color: '#e85d26', marginBottom: 28,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ width: 30, height: 2, background: '#e85d26', boxShadow: '0 0 8px rgba(232,93,38,0.6)' }} />
            BIRD SERIES // ABOUT IINDEPRO
          </div>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(52px, 7vw, 100px)',
            lineHeight: 0.93, letterSpacing: '1px', marginBottom: 28,
          }}>
            <span className="headline-line visible" style={{ color: '#e85d26', textShadow: '0 0 40px rgba(232,93,38,0.35)' }}>
              Nature-Inspired Excellence.
            </span>
            <span className="headline-line visible" style={{ color: '#fff', animationDelay: '0.2s' }}>
              Engineered for the Future.
            </span>
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <div style={{ width: 56, height: 3, background: '#e85d26', borderRadius: 2, boxShadow: '0 0 10px rgba(232,93,38,0.5)' }} />
            <div style={{ width: 16, height: 3, background: 'rgba(232,93,38,0.3)', borderRadius: 2 }} />
            <div style={{ width: 6, height: 3, background: 'rgba(232,93,38,0.15)', borderRadius: 2 }} />
          </div>

          <p style={{
            fontSize: 'clamp(15px, 1.4vw, 18px)',
            lineHeight: 1.9, color: 'rgba(255,255,255,0.65)',
            fontFamily: "'Inter', sans-serif", marginBottom: 36,
          }}>
            At <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>IINDEPRO Dynamics</strong>, our propulsion
            systems draw from <strong style={{ color: '#e85d26' }}>nature's greatest flight masters.</strong>{' '}
            Each motor series fuses <strong style={{ color: 'rgba(255,255,255,0.85)' }}>bio-inspired intelligence</strong> with
            aerospace-grade precision to redefine drone propulsion.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { icon: '🦅', title: 'Bird-Inspired Design', body: 'Every series built in the image of its avian counterpart.' },
              { icon: '⚡', title: 'Aerospace Precision', body: 'CNC-machined rotors, IP67 sealing, military-grade build.' },
            ].map((c, ci) => (
              <div key={ci} style={{
                padding: '16px 20px', borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(8px)',
                display: 'flex', gap: 12, alignItems: 'flex-start',
              }}>
                <div style={{ fontSize: 20, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: '#fff', marginBottom: 4 }}>{c.title}</div>
                  <div style={{ fontSize: 11, lineHeight: 1.6, color: 'rgba(255,255,255,0.4)' }}>{c.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: motor image ── */}
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: 440,
        }}>
          {/* Glow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(232,93,38,0.20) 0%, transparent 65%)',
            filter: 'blur(20px)', pointerEvents: 'none',
          }} />
          {/* Outer ring */}
          <div style={{
            position: 'absolute', width: 340, height: 340, borderRadius: '50%',
            border: '1px solid rgba(232,93,38,0.14)',
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            pointerEvents: 'none',
          }} />
          {/* Spinning dashed ring */}
          <div style={{
            position: 'absolute', width: 240, height: 240, borderRadius: '50%',
            border: '1px dashed rgba(255,255,255,0.07)',
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            animation: 'spinCCW 22s linear infinite', pointerEvents: 'none',
          }} />
          {/* Motor */}
          <img
            src="/products/eb8320.png"
            alt="EB-8320 Eagle Motor"
            style={{
              width: '88%', height: 'auto', objectFit: 'contain',
              filter: 'drop-shadow(0 24px 52px rgba(232,93,38,0.38)) drop-shadow(0 0 16px rgba(0,0,0,0.7))',
              animation: 'birdFloat 6s ease-in-out infinite',
              position: 'relative', zIndex: 2,
            }}
          />
          {/* Spec badge */}
          <div style={{
            position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
            padding: '9px 18px', borderRadius: 8,
            border: '1px solid rgba(232,93,38,0.28)',
            background: 'rgba(5,8,5,0.88)', backdropFilter: 'blur(12px)',
            zIndex: 3, whiteSpace: 'nowrap',
          }}>
            <div style={{ fontSize: 8, letterSpacing: 2, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 2 }}>Featured Motor</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: '#fff', letterSpacing: 1 }}>EB-8320 PRO</div>
            <div style={{ fontSize: 10, color: '#e85d26', fontWeight: 700, letterSpacing: 1 }}>120 KV · 12.5 kg THRUST</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ANIMATED STAT BAR
      ══════════════════════════════════════ */}
      <div
        ref={statsRef}
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(12px)',
          position: 'relative', zIndex: 2,
        }}
      >
        {STATS.map((s, i) => (
          <StatCell key={i} {...s} started={statsVisible} />
        ))}
      </div>

      {/* ══════════════════════════════════════
          WHY BIRDS — SCIENCE BLOCK
      ══════════════════════════════════════ */}
      <section style={{ padding: '80px 52px', position: 'relative', zIndex: 2 }}>
        <div style={{
          borderRadius: 24,
          border: '1px solid rgba(255,255,255,0.07)',
          background: 'linear-gradient(145deg, rgba(255,255,255,0.025), rgba(0,0,0,0.2))',
          backdropFilter: 'blur(16px)',
          overflow: 'hidden',
          boxShadow: '0 60px 120px rgba(0,0,0,0.4)',
        }}>
          {/* top bar */}
          <div style={{ height: 2, background: 'linear-gradient(to right, #e85d26, rgba(232,93,38,0.2), transparent)' }} />

          <div style={{ padding: '56px 60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              {/* Left */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 5, color: '#e85d26', marginBottom: 18, textTransform: 'uppercase' }}>
                  THE SCIENCE BEHIND OUR INSPIRATION
                </div>
                <h2 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(48px, 5vw, 76px)',
                  lineHeight: 0.95, marginBottom: 28,
                }}>
                  Why <span style={{ color: '#e85d26' }}>Birds?</span>
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.95, color: 'rgba(255,255,255,0.65)', marginBottom: 24 }}>
                  For millions of years, birds have perfected flight — achieving{' '}
                  <strong style={{ color: 'rgba(255,255,255,0.9)' }}>unmatched aerodynamics, agility, and energy efficiency.</strong>{' '}
                  At IINDEPRO, we convert these natural principles into cutting-edge motor technology — engineered to be faster, lighter, and more efficient than ever before.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.95, color: 'rgba(255,255,255,0.55)' }}>
                  Every series mirrors the unique flight profile of its avian namesake — from the{' '}
                  <strong style={{ color: '#e85d26' }}>ultra-fast Peregrine Falcon</strong> to the stratospheric{' '}
                  <strong style={{ color: '#ff8c5a' }}>Andean Condor</strong>.
                  Each motor carries the biomechanical legacy of millions of years of evolution.
                </p>

                {/* Callout */}
                <div style={{
                  marginTop: 32,
                  padding: '18px 24px',
                  borderRadius: 12,
                  border: '1px solid rgba(232,93,38,0.3)',
                  background: 'radial-gradient(circle at left, rgba(232,93,38,0.1), transparent)',
                  display: 'flex', alignItems: 'center', gap: 16,
                }}>
                  <div style={{ width: 40, height: 2, background: '#e85d26', flexShrink: 0, boxShadow: '0 0 8px rgba(232,93,38,0.5)' }} />
                  <div style={{ fontSize: 15, fontWeight: 700, fontStyle: 'italic', lineHeight: 1.5 }}>
                    Each series is not just named after a bird —{' '}
                    <span style={{ color: '#e85d26' }}>it's engineered in its image.</span>
                  </div>
                </div>
              </div>

              {/* Right — avian traits grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {[
                  { icon: '🌀', label: 'Aerodynamics', val: '94%', desc: 'Electrical efficiency avg.' },
                  { icon: '⚡', label: 'Response', val: '0.2ms', desc: 'Throttle latency' },
                  { icon: '🔥', label: 'Thermal', val: 'IP67', desc: 'Protection rating' },
                  { icon: '🏔️', label: 'Altitude', val: '8000m', desc: 'Operational ceiling' },
                  { icon: '⚙️', label: 'Durability', val: '2000h+', desc: 'Rated lifespan' },
                  { icon: '🌍', label: 'Origin', val: 'India', desc: 'Designed & built' },
                ].map((t, i) => (
                  <div key={i} style={{
                    padding: '18px 20px', borderRadius: 12,
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(255,255,255,0.025)',
                    transition: 'all 0.35s',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(232,93,38,0.35)';
                      e.currentTarget.style.background = 'rgba(232,93,38,0.06)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                    }}
                  >
                    <div style={{ fontSize: 20, marginBottom: 8 }}>{t.icon}</div>
                    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 4 }}>{t.label}</div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: '#e85d26', letterSpacing: 1, lineHeight: 1 }}>{t.val}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BIRD SERIES SHOWCASE
      ══════════════════════════════════════ */}
      <section style={{ padding: '0 52px 90px', position: 'relative', zIndex: 2 }}>
        {/* Section header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 5, color: '#e85d26', textTransform: 'uppercase', marginBottom: 12 }}>
            THE LINEUP
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(44px, 5vw, 72px)',
              lineHeight: 0.95, letterSpacing: '1px',
            }}>
              Five Series. <span style={{ color: '#e85d26' }}>One Mission.</span>
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', maxWidth: 380, lineHeight: 1.7, textAlign: 'right' }}>
              Click any series to explore its full motor lineup, specifications, and performance data.
            </p>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'linear-gradient(to right, rgba(232,93,38,0.5), rgba(255,255,255,0.05), transparent)', marginTop: 24 }} />
        </div>

        {/* Series grid — Eagle featured (span 2) + 4-card 2×2 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: 20,
        }}>
          {/* Row 1: Eagle wide + Falcon + Hummingbird */}
          <div style={{ gridColumn: '1 / 2', gridRow: '1 / 3', display: 'flex', flexDirection: 'column' }}>
            <FeaturedSeriesCard s={SERIES[0]} openCategory={openCategory} />
          </div>
          {SERIES.slice(1).map((s, i) => (
            <CompactSeriesCard key={s.id} s={s} i={i} openCategory={openCategory} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          MISSION BANNER
      ══════════════════════════════════════ */}
      <section style={{
        margin: '0 52px 90px',
        borderRadius: 24, overflow: 'hidden',
        position: 'relative', zIndex: 2,
        border: '1px solid rgba(232,93,38,0.2)',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(232,93,38,0.12) 0%, rgba(10,15,10,0.95) 60%)',
          backdropFilter: 'blur(20px)',
          padding: '64px 60px',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* bg pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(255,255,255,0.012) 18px, rgba(255,255,255,0.012) 19px)',
            pointerEvents: 'none',
          }} />
          {/* orange glow */}
          <div style={{
            position: 'absolute', top: -100, right: -100,
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,93,38,0.18) 0%, transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 5, color: '#e85d26', textTransform: 'uppercase', marginBottom: 16 }}>
                OUR MISSION
              </div>
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(38px, 4.5vw, 64px)',
                lineHeight: 1, marginBottom: 18,
              }}>
                Propelling India Into the{' '}
                <span style={{ color: '#e85d26' }}>Future of Flight.</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.6)', maxWidth: 680 }}>
                IINDEPRO Dynamics is building the propulsion backbone of India's drone revolution — from precision agriculture
                to tactical surveillance, cargo logistics to competitive racing. Every motor we produce carries the ambition
                of a nation ready to lead the skies.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 200 }}>
              {[
                { label: 'Series', value: '5 Lines' },
                { label: 'Inspired by', value: 'Evolution' },
                { label: 'Mission', value: 'All-Domain' },
                { label: 'Origin', value: 'India 🇮🇳' },
              ].map((item) => (
                <div key={item.label} style={{
                  padding: '12px 18px', borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>{item.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: 0.5 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
