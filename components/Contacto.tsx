const asuntos = [
  'Consulta general',
  'Pregunta sobre propuestas',
  'Prensa y medios',
  'Eventos y ponencias',
  'Otro',
]

const voluntariado = [
  'Llamadas telefónicas',
  'Volanteo casa por casa',
  'Redes sociales',
  'Organización de eventos',
  'Captura de datos',
  'Traducción',
]

const navLinks = [
  ['/', 'Inicio'],
  ['/conoceme', 'Conóceme'],
  ['#blog', 'Blog'],
]

const recursos = ['Prensa', 'Preguntas frecuentes', 'Aviso de Privacidad', 'Términos de Uso']

const inputStyle = {
  width: '100%', padding: '1rem', border: '1px solid rgba(15,26,20,0.15)',
  borderRadius: '8px', fontSize: '0.95rem', color: '#0f1a14',
}

const labelStyle = {
  display: 'block', fontSize: '0.8rem', fontWeight: 600,
  letterSpacing: '0.05em', color: '#0f1a14', marginBottom: '0.5rem',
}

export default function Contacto() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        padding: '9rem 2rem 5rem', background: '#f5f0e8', textAlign: 'left',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span style={{ display: 'block', color: '#1a5c38', letterSpacing: '0.3em', fontSize: '0.75rem', marginBottom: '1rem' }}>
            CONECTA CON NOSOTROS
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '400', lineHeight: 1.15, marginBottom: '1.5rem', color: '#0f1a14', maxWidth: '700px' }}>
            Construyamos juntos el futuro de Colima.
          </h1>
          <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px' }}>
            Ya sea que tengas una pregunta sobre nuestras propuestas o quieras dedicar
            tu tiempo al movimiento, estamos aquí para escucharte.
          </p>
        </div>
      </section>

      {/* Main grid */}
      <section style={{ padding: '5rem 2rem', background: '#ffffff' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(280px, 1fr)',
          gap: '3rem',
        }}>
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Contact form */}
            <div id="contacto" style={{ background: '#ffffff', border: '1px solid rgba(15,26,20,0.1)', borderRadius: '12px', padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '600', color: '#0f1a14', marginBottom: '0.5rem' }}>
                Envía tu mensaje
              </h2>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Nuestro equipo responde en un plazo de 24 a 48 horas hábiles.
              </p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  <div>
                    <label style={labelStyle}>Nombre</label>
                    <input style={inputStyle} type="text" placeholder="Jane" />
                  </div>
                  <div>
                    <label style={labelStyle}>Apellido</label>
                    <input style={inputStyle} type="text" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Correo electrónico</label>
                  <input style={inputStyle} type="email" placeholder="jane@example.com" />
                </div>
                <div>
                  <label style={labelStyle}>Asunto</label>
                  <select style={inputStyle}>
                    {asuntos.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Mensaje</label>
                  <textarea style={{ ...inputStyle, resize: 'none' }} rows={5} placeholder="¿Cómo podemos ayudarte?" />
                </div>
                <button type="submit" style={{
                  background: '#0f1a14', color: '#f5f0e8', border: 'none',
                  padding: '1rem', borderRadius: '8px', fontWeight: 'bold',
                  fontSize: '1rem', letterSpacing: '0.05em', cursor: 'pointer',
                }}>
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Volunteer */}

          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#ffffff', border: '1px solid rgba(15,26,20,0.1)', borderRadius: '12px', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0f1a14', marginBottom: '1.25rem' }}>
                Sede de campaña
              </h3>
              <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Av. Constitución 123, Col. Centro<br />
                Colima, Colima, C.P. 28000
              </p>
              <p style={{ color: '#555', fontSize: '0.9rem' }}>
                (312) 123 4567
              </p>
            </div>

            <div style={{
              aspectRatio: '1 / 1', background: '#f5f0e8', borderRadius: '12px',
              border: '1px solid rgba(15,26,20,0.1)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{
                background: '#ffffff', padding: '0.6rem 1.2rem', borderRadius: '999px',
                fontSize: '0.85rem', fontWeight: 600, color: '#0f1a14',
                border: '1px solid rgba(15,26,20,0.1)',
              }}>
                Abrir en Maps
              </span>
            </div>

            <div>
              <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#666', marginBottom: '1rem', textTransform: 'uppercase' }}>
                Síguenos
              </h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['Facebook', 'X', 'Instagram'].map((s) => (
                  <a key={s} href="#" style={{
                    width: '3rem', height: '3rem', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(15,26,20,0.15)', borderRadius: '8px',
                    color: '#0f1a14', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600,
                  }}>
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '6rem 2rem', textAlign: 'center',
        background: 'linear-gradient(135deg, #8383D8 0%, #AE83D8 60%, #D883D8 100%)',
      }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', color: '#ffffff', marginBottom: '2.5rem' }}>
          ¿Lista para hacer historia?
        </h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#voluntariado" style={{
            background: '#ffffff', color: '#8383D8',
            padding: '1rem 2.5rem', textDecoration: 'none',
            fontWeight: 'bold', letterSpacing: '0.05em', fontSize: '0.9rem', borderRadius: '8px',
          }}>
            ÚNETE AL MOVIMIENTO
          </a>
          <a href="#" style={{
            border: '2px solid #ffffff', color: '#ffffff',
            padding: '1rem 2.5rem', textDecoration: 'none',
            fontWeight: 'bold', letterSpacing: '0.05em', fontSize: '0.9rem', borderRadius: '8px',
          }}>
            DONA HOY
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f1a14', color: '#f5f0e8', padding: '4rem 2rem 2rem' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto', display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem',
        }}>
          <div>
            <h3 style={{ color: '#D883D8', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              Fenty Law
            </h3>
            <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px' }}>
              Comprometida con una representación honesta y el progreso real para Colima.
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#c9a84c', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Navegación
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a href={href} style={{ color: 'rgba(245,240,232,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#c9a84c', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Recursos
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {recursos.map((r) => (
                <li key={r}>
                  <a href="#" style={{ color: 'rgba(245,240,232,0.75)', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#c9a84c', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Mantente informado
            </h5>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input type="email" placeholder="Tu correo electrónico" style={{
                padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(245,240,232,0.2)',
                background: 'rgba(245,240,232,0.05)', color: '#f5f0e8', fontSize: '0.9rem',
              }} />
              <button type="submit" style={{
                background: '#D883D8', color: '#0f1a14', border: 'none',
                padding: '0.85rem', borderRadius: '8px', fontWeight: 'bold',
                fontSize: '0.85rem', letterSpacing: '0.05em', cursor: 'pointer',
              }}>
                Suscribirme
              </button>
            </form>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(245,240,232,0.15)', marginTop: '3rem',
          paddingTop: '1.5rem', textAlign: 'center',
        }}>
          <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.8rem' }}>
            © 2026 Fenty Law. Candidata Municipio de Colima.
          </p>
        </div>
      </footer>
    </main>
  )
}
