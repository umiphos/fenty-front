export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f1a14 0%, #1a5c38 60%, #0f1a14 100%)',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      padding: '2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorativo */}
      <div style={{
        position: 'absolute', width: '400px', height: '400px',
        borderRadius: '50%', border: '1px solid rgba(201,168,76,0.15)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '600px', height: '600px',
        borderRadius: '50%', border: '1px solid rgba(201,168,76,0.08)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <p style={{ color: '#c9a84c', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
        CANDIDATA • MUNICIPIO DE COLIMA
      </p>
      <h1 style={{
        color: '#f5f0e8', fontSize: 'clamp(2.5rem, 7vw, 5rem)',
        fontWeight: '400', lineHeight: 1.1, maxWidth: '800px',
        marginBottom: '1.5rem',
      }}>
        Ana Martínez
        <br />
        <span style={{ color: '#c9a84c' }}>para un Colima</span>
        <br />
        que funcione
      </h1>
      <p style={{
        color: 'rgba(245,240,232,0.7)', fontSize: '1.1rem',
        maxWidth: '500px', lineHeight: 1.7, marginBottom: '2.5rem',
      }}>
        Trabajo, seguridad y servicios reales para cada colonia.
        Sin promesas vacías.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#propuestas" style={{
          background: '#c9a84c', color: '#0f1a14',
          padding: '0.9rem 2rem', textDecoration: 'none',
          fontWeight: 'bold', letterSpacing: '0.05em', fontSize: '0.9rem',
          transition: 'opacity 0.2s',
        }}>
          VER PROPUESTAS
        </a>
        <a href="#blog" style={{
          border: '1px solid rgba(245,240,232,0.4)', color: '#f5f0e8',
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
