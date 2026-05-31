export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #8383D8 0%, #AE83D8 60%, #D883D8 100%)',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      padding: '2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorativo */}
      <div style={{
        position: 'absolute', width: '400px', height: '400px',
        borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '600px', height: '600px',
        borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <p style={{ color: '#ffffff', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
        CANDIDATA • MUNICIPIO DE COLIMA
      </p>
      <h1 style={{
        color: '#ffffff', fontSize: 'clamp(2.5rem, 7vw, 5rem)',
        fontWeight: '400', lineHeight: 1.1, maxWidth: '800px',
        marginBottom: '1.5rem',
      }}>
        Fenty Law
        <br />
        <span style={{ color: '#f0e0ff' }}>para un Colima</span>
        <br />
        que funcione
      </h1>
      <p style={{
        color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem',
        maxWidth: '500px', lineHeight: 1.7, marginBottom: '2.5rem',
      }}>
        Trabajo, seguridad y servicios reales para cada colonia.
        Sin promesas vacías.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#propuestas" style={{
          background: '#ffffff', color: '#8383D8',
          padding: '0.9rem 2rem', textDecoration: 'none',
          fontWeight: 'bold', letterSpacing: '0.05em', fontSize: '0.9rem',
          transition: 'opacity 0.2s',
        }}>
          VER PROPUESTAS
        </a>
        <a href="#blog" style={{
          border: '1px solid rgba(255,255,255,0.6)', color: '#ffffff',
          padding: '0.9rem 2rem', textDecoration: 'none',
          letterSpacing: '0.05em', fontSize: '0.9rem',
          transition: 'border-color 0.2s',
        }}>
          LEER BLOG
        </a>
      </div>
    </section>
  )
}
