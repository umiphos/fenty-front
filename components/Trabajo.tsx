import { logros } from '@/lib/data'

export default function Trabajo() {
  return (
    <section id="trabajo" style={{ padding: '6rem 2rem', background: '#f5f0e8' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: '#1a5c38', letterSpacing: '0.3em', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
          RESULTADOS REALES
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', marginBottom: '3rem', color: '#0f1a14' }}>
          Trabajo hecho
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {logros.map((logro, i) => (
            <div key={logro.id} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr',
              gap: '2rem', padding: '2rem 0',
              borderBottom: i < logros.length - 1 ? '1px solid rgba(26,92,56,0.2)' : 'none',
              alignItems: 'start',
            }}>
              <span style={{
                color: '#c9a84c', fontSize: '1.5rem', fontWeight: '300',
                fontStyle: 'italic', paddingTop: '0.25rem',
              }}>
                {logro.año}
              </span>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0f1a14' }}>
                  {logro.titulo}
                </h3>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {logro.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
