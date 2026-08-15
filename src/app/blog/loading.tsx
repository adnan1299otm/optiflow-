export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 24,
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <span style={{
          fontWeight: 900,
          fontSize: 28,
          backgroundImage: 'linear-gradient(135deg, #00d4ff, #9d4edd, #ff006e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Opti</span>
        <span style={{ fontWeight: 900, fontSize: 28, color: '#ffffff' }}>Flow</span>
      </div>
      <div style={{
        width: 160,
        height: 2,
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 999,
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          backgroundImage: 'linear-gradient(90deg, #00d4ff, #9d4edd)',
          borderRadius: 999,
          animation: 'progress-load 1.8s cubic-bezier(0.4,0,0.2,1) infinite',
        }} />
      </div>
      <style>{`
        @keyframes progress-load {
          0% { width: 0%; }
          60% { width: 80%; }
          85% { width: 90%; }
          100% { width: 90%; }
        }
      `}</style>
    </div>
  );
}
