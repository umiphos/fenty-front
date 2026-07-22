'use client'
export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      background: 'transparent',
      padding: '1.5rem 3rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <span style={{ color: '#D883D8', fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
        FENTY LAW
      </span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {[['/#sobre', 'Sobre Fenty'], ['/conoceme', 'Conóceme'], ['/#blog', 'Blog'], ['/contacto', 'Contacto']].map(([href, label]) => (
          <a key={href} href={href} style={{
            color: '#0f1a14', textDecoration: 'underline',
            textDecorationColor: '#c9a84c', textUnderlineOffset: '4px',
            fontSize: '0.9rem', fontWeight: 600,
            letterSpacing: '0.08em', transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#D883D8')}
            onMouseLeave={e => (e.currentTarget.style.color = '#0f1a14')}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
