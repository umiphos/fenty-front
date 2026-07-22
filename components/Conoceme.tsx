const milestones = [
  {
    num: '01',
    label: 'FORMACIÓN Y VISIÓN',
    title: 'Forjando un compromiso real.',
    text: 'Desde mis primeros años en el servicio público, entendí que el cambio no es una promesa electoral, sino una construcción técnica y humana. Mi carrera comenzó en la administración local, donde aprendí que la eficiencia no está reñida con la empatía.',
    reverse: false,
    bg: '#ffffff',
  },
  {
    num: '02',
    label: 'EXPERIENCIA E IMPACTO',
    title: 'Años de gestión transformadora.',
    text: 'Como abogada y servidora pública, he trabajado para reducir la burocracia y acercar la justicia a cada colonia de Colima. No solo gestionamos trámites; devolvemos el tiempo y la dignidad a los ciudadanos.',
    quote: 'La integridad no es negociable; es la base sobre la que se construye cualquier progreso duradero.',
    reverse: true,
    bg: '#f5f0e8',
  },
  {
    num: '03',
    label: 'LIDERAZGO RECONOCIDO',
    title: 'Voz de cambio en cada colonia.',
    text: 'Mi labor ha sido reconocida por organizaciones civiles por su enfoque en seguridad y equidad. He representado a las familias de Colima en foros públicos, siempre con la convicción de que las soluciones locales tienen impacto real.',
    stats: [
      { value: '15+', label: 'Iniciativas Impulsadas' },
      { value: '200k', label: 'Vidas Impactadas' },
    ],
    reverse: false,
    bg: '#ffffff',
  },
  {
    num: '04',
    label: 'EL CAMINO ADELANTE',
    title: 'Preparada para liderar el mañana.',
    text: 'La experiencia me enseñó que el futuro no se espera, se diseña. Mi plan combina la estabilidad institucional con la innovación necesaria para enfrentar los desafíos de seguridad y desarrollo que enfrenta Colima.',
    reverse: true,
    bg: '#f5f0e8',
  },
]

export default function Conoceme() {
  return (
    <main>
      {milestones.map((m) => (
        <section key={m.num} style={{
          display: 'flex', flexWrap: 'wrap',
          flexDirection: m.reverse ? 'row-reverse' : 'row',
          alignItems: 'center', justifyContent: 'center',
          gap: '3rem', padding: '6rem 2rem',
          background: m.bg,
        }}>
          <div style={{ flex: '1 1 420px', maxWidth: '560px' }}>
            <span style={{
              display: 'block', color: '#c9a84c', fontWeight: 'bold',
              letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem',
            }}>
              {m.num} / {m.label}
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: '400',
              lineHeight: 1.2, marginBottom: '1.5rem', color: '#0f1a14',
            }}>
              {m.title}
            </h2>
            <p style={{ color: '#444', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {m.text}
            </p>

            {m.quote && (
              <blockquote style={{
                borderLeft: '3px solid #D883D8', paddingLeft: '1.25rem',
                fontStyle: 'italic', color: '#444', marginBottom: '1.5rem',
              }}>
                &ldquo;{m.quote}&rdquo;
              </blockquote>
            )}

            {m.stats && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                {m.stats.map((s) => (
                  <div key={s.label} style={{ padding: '1rem', background: '#f5f0e8', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1a5c38', marginBottom: '0.25rem' }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: '#555', textTransform: 'uppercase' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ flex: '1 1 380px', maxWidth: '480px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero_fenty.jfif"
              alt="Fenty Law"
              style={{
                width: '100%', height: '460px', objectFit: 'cover',
                borderRadius: '12px', display: 'block',
              }}
            />
          </div>
        </section>
      ))}

      <footer style={{ background: '#0f1a14', color: '#f5f0e8', padding: '4rem 2rem 2rem' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto', display: 'flex',
          flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem',
        }}>
          <div style={{ maxWidth: '320px' }}>
            <h3 style={{ color: '#D883D8', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Fenty Law
            </h3>
            <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Liderazgo con visión, gestión con integridad para un Colima que funcione.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {['Aviso de Privacidad', 'Términos de Uso', 'Voluntariado', 'Prensa'].map((label) => (
              <a key={label} href="#" style={{
                color: 'rgba(245,240,232,0.7)', textDecoration: 'none',
                fontSize: '0.85rem', letterSpacing: '0.05em',
              }}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(245,240,232,0.15)', marginTop: '3rem',
          paddingTop: '1.5rem', textAlign: 'center',
        }}>
          <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.8rem' }}>
            © 2026 Fenty Law. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
