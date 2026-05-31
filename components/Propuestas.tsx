import { propuestas } from '@/lib/data'

export default function Propuestas() {
  return (
    <section id="propuestas" style={{ padding: '6rem 2rem', background: '#0f1a14' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: '#c9a84c', letterSpacing: '0.3em', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
          AGENDA DE GOBIERNO
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', marginBottom: '3rem', color: '#f5f0e8' }}>
          Propuestas
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {propuestas.map((p) => (
            <div key={p.id} style={{
              border: '1px solid rgba(201,168,76,0.25)',
              padding: '2rem',
              transition: 'border-color 0.2s',
            }}>
              <span style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}>{p.icono}</span>
              <h3 style={{ color: '#c9a84c', fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                {p.titulo}
              </h3>
              <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {p.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
