'use client'
export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      background: 'rgba(15, 26, 20, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(201, 168, 76, 0.3)',
      padding: '1rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <span style={{ color: '#c9a84c', fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
        ANA MARTÍNEZ
      </span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {[['#blog', 'Blog'], ['#propuestas', 'Propuestas'], ['#trabajo', 'Trabajo']].map(([href, label]) => (
          <a key={href} href={href} style={{
            color: '#f5f0e8', textDecoration: 'none', fontSize: '0.9rem',
            letterSpacing: '0.08em', transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
            onMouseLeave={e => (e.currentTarget.style.color = '#f5f0e8')}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
