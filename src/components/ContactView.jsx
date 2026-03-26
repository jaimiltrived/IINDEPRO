import React, { useState } from 'react';
import { Ico } from './common/Icons';

const contactHeroImg = new URL(
  '../../Iindepro_Website data/Website data/IINDEPRO PAGE PRODUCT PORTFOLIO-01.jpg',
  import.meta.url
).href;

export const ContactView = ({ goHome }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // No backend in this project; show confirmation only.
    setSubmitted(true);
  };

  return (
    <div
      className="category-view"
      style={{
        background:
          'radial-gradient(ellipse 80% 70% at 55% 40%, #1a2e1a 0%, #0d1a0d 40%, #06090a 100%)',
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1.5,
      }}
    >
      <div className="scan-line" />

      <div style={{ padding: '40px 52px 20px', position: 'relative', zIndex: 2 }}>
        <button
          className="back-btn"
          onClick={goHome}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255,255,255,0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: '700',
            letterSpacing: '1px',
            fontSize: '12px',
          }}
        >
          <Ico d="M19 12H5M12 19l-7-7 7-7" size={12} /> BACK TO OPERATIONS
        </button>
      </div>

      <div style={{ padding: '0 52px 140px', position: 'relative', zIndex: 2 }}>
        {/* Hero */}
        <div
          style={{
            marginTop: 26,
            marginBottom: 26,
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
            gap: 'clamp(16px, 3vw, 42px)',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height: 'clamp(360px, 52vh, 560px)',
              borderRadius: 18,
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.02)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.35)',
            }}
          >
            <img
              src={contactHeroImg}
              alt="IINDEPRO Portfolio"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(35%) contrast(1.05) brightness(0.9)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to right, rgba(6,9,10,0.85) 0%, rgba(6,9,10,0.35) 55%, rgba(6,9,10,0.1) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          <div style={{ paddingTop: 6 }}>
            <div className="sec-label" style={{ marginBottom: 14, color: '#e85d26', letterSpacing: '4px' }}>
              CONTACT // INQUIRY
            </div>
            <h1
              className="sec-heading"
              style={{
                fontSize: 'clamp(44px, 5.6vw, 78px)',
                margin: 0,
                lineHeight: 1.02,
                letterSpacing: '-1px',
              }}
            >
              Let’s Build Your Next Mission
            </h1>

            <p style={{ marginTop: 18, color: 'rgba(255,255,255,0.72)', fontSize: 16, lineHeight: 1.85, maxWidth: 560 }}>
              Tell us what you’re designing. We will respond with the right propulsion configuration and recommended product options.
            </p>
          </div>
        </div>

        {/* Main Contact Segment */}
        <div
          style={{
            borderRadius: 18,
            border: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.02)',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 40px 80px rgba(0,0,0,0.32)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(255,255,255,0.012) 18px, rgba(255,255,255,0.012) 19px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, padding: 22 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
                gap: 18,
                alignItems: 'start',
              }}
            >
              {/* Form */}
              <div
                style={{
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: 18,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    background: 'radial-gradient(circle at 20% 20%, rgba(232,93,38,0.22), transparent 60%)',
                    color: '#fff',
                  }}
                >
                  <div className="sec-label" style={{ marginBottom: 10, color: '#e85d26', letterSpacing: '4px' }}>
                    MESSAGE FORM
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.3px' }}>
                    Enquire Now
                  </div>
                </div>

                <div style={{ padding: 18 }}>
                  {submitted ? (
                    <div
                      style={{
                        border: '1px solid rgba(232,93,38,0.25)',
                        background: 'rgba(232,93,38,0.08)',
                        borderRadius: 14,
                        padding: 16,
                      }}
                    >
                      <div style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#e85d26', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 800, marginBottom: 10, fontSize: 12 }}>
                        Request Received
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                        Thanks {form.name || 'there'}. We’ll get back to you soon.
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={submit} style={{ display: 'grid', gap: 14 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                        <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                            Name
                          </span>
                          <input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              color: '#fff',
                              padding: '14px 16px',
                              borderRadius: 10,
                              outline: 'none',
                              fontFamily: "'Inter', sans-serif",
                            }}
                          />
                        </label>
                        <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                            Email
                          </span>
                          <input
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                            type="email"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              color: '#fff',
                              padding: '14px 16px',
                              borderRadius: 10,
                              outline: 'none',
                              fontFamily: "'Inter', sans-serif",
                            }}
                          />
                        </label>
                      </div>

                      <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                          Company
                        </span>
                        <input
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: '#fff',
                            padding: '14px 16px',
                            borderRadius: 10,
                            outline: 'none',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        />
                      </label>

                      <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                          Message
                        </span>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          required
                          rows={5}
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: '#fff',
                            padding: '14px 16px',
                            borderRadius: 10,
                            outline: 'none',
                            fontFamily: "'Inter', sans-serif",
                            resize: 'vertical',
                          }}
                        />
                      </label>

                      <button
                        type="submit"
                        className="cta-btn cta-orange"
                        style={{
                          marginTop: 6,
                          borderRadius: 10,
                          padding: '16px 30px',
                          fontSize: 14,
                          fontWeight: 800,
                          letterSpacing: 2,
                          cursor: 'pointer',
                        }}
                      >
                        SEND MESSAGE
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact info */}
              <div
                style={{
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: 18,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    background: 'radial-gradient(circle at 20% 20%, rgba(232,93,38,0.18), transparent 60%)',
                  }}
                >
                  <div className="sec-label" style={{ marginBottom: 10, color: '#e85d26', letterSpacing: '4px' }}>
                    CONTACT INFO
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.3px' }}>IINDEPRO Team</div>
                </div>

                <div style={{ padding: 18, display: 'grid', gap: 14 }}>
                  {[
                    { k: 'Email', v: 'sales@iindepro.example' },
                    { k: 'Phone', v: '+91 90000 00000' },
                    { k: 'Address', v: 'IINDEPRO Technology, Industrial District, India' },
                  ].map((row, i) => (
                    <div
                      key={i}
                      style={{
                        border: '1px solid rgba(255,255,255,0.06)',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: 14,
                        padding: 14,
                      }}
                    >
                      <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 10, fontFamily: "'Bebas Neue', sans-serif" }}>
                        {row.k}
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, fontFamily: "'Inter', sans-serif'" }}>
                        {row.v}
                      </div>
                    </div>
                  ))}

                  <div
                    style={{
                      border: '1px solid rgba(232,93,38,0.25)',
                      background: 'rgba(232,93,38,0.08)',
                      borderRadius: 14,
                      padding: 14,
                    }}
                  >
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#e85d26', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 800, marginBottom: 10, fontSize: 12 }}>
                      Typical Response
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                      Within 24-48 hours with recommended products and next steps.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

