export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #8383D8 0%, #AE83D8 60%, #D883D8 100%)',
      display: 'flex', flexDirection: 'row',
      justifyContent: 'center', alignItems: 'center',
      gap: '3rem',
      padding: '9rem 2rem 2rem',
      position: 'relative', overflow: 'hidden',
      flexWrap: 'wrap',
    }}>
      {/* Informativo */}
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

      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'flex-start', textAlign: 'left',
        flex: '1 1 480px', maxWidth: '600px',
        position: 'relative', zIndex: 1,
      }}>
        <p style={{ color: '#ffffff', letterSpacing: '0.3em', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
          CANDIDATA • MUNICIPIO DE COLIMA
        </p>
        <h1 style={{
          color: '#ffffff', fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontWeight: '400', lineHeight: 1.1,
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
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          <a href="/conoceme" style={{
            background: '#ffffff', color: '#8383D8',
            padding: '0.9rem 2rem', textDecoration: 'none',
            fontWeight: 'bold', letterSpacing: '0.05em', fontSize: '0.9rem',
            transition: 'opacity 0.2s',
          }}>
            CONOCEME
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
      </div>

      {/* Espacio reservado para la foto */}
      <div style={{
        flex: '1 1 360px', maxWidth: '420px',
        aspectRatio: '3 / 4',
        position: 'relative', zIndex: 1,
        borderRadius: '12px', overflow: 'hidden',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero_fenty.jfif"
          alt="Foto de la candidata"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </section>
  )
}
