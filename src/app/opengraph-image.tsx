import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'OptiFlow | Automate. Optimize. Grow.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050814',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow blobs */}
        <div style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: -200,
          left: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)',
        }} />

        {/* Grid lines */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
          <span style={{
            fontSize: 56,
            fontWeight: 900,
            background: 'linear-gradient(135deg, #00d4ff, #00ff88)',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-2px',
          }}>Opti</span>
          <span style={{ fontSize: 56, fontWeight: 900, color: 'white', letterSpacing: '-2px' }}>Flow</span>
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: 28,
          fontWeight: 600,
          color: 'rgba(255,255,255,0.6)',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          marginBottom: 48,
        }}>
          Automate · Optimize · Grow
        </div>

        {/* Divider */}
        <div style={{
          width: 120,
          height: 3,
          background: 'linear-gradient(90deg, #00d4ff, #00ff88)',
          borderRadius: 2,
          marginBottom: 48,
        }} />

        {/* Services */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['Web Dev', 'AI Automation', 'Meta Ads', 'App Dev', 'Data Scraping'].map((s) => (
            <div key={s} style={{
              padding: '8px 20px',
              borderRadius: 100,
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,255,255,0.7)',
              fontSize: 16,
              fontWeight: 500,
            }}>
              {s}
            </div>
          ))}
        </div>

        {/* URL badge */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          right: 60,
          fontSize: 18,
          color: 'rgba(0,212,255,0.6)',
          fontWeight: 600,
          letterSpacing: 1,
        }}>
          optiflow.io
        </div>
      </div>
    ),
    { ...size }
  );
}
