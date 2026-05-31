import { posts } from '@/lib/data'

export default function Blog() {
  return (
    <section id="blog" style={{ padding: '6rem 2rem', background: '#f5f0e8' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: '#1a5c38', letterSpacing: '0.3em', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
          NOTICIAS Y REFLEXIONES
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', marginBottom: '3rem', color: '#0f1a14' }}>
          Blog
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {posts.map((post) => (
            <article key={post.id} style={{
              borderTop: '2px solid #1a5c38', paddingTop: '1.5rem',
              cursor: 'pointer',
            }}>
              <p style={{ color: '#c9a84c', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                {post.fecha}
              </p>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '0.75rem', lineHeight: 1.4, color: '#0f1a14' }}>
                {post.titulo}
              </h3>
              <p style={{ color: '#444', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                {post.resumen}
              </p>
              <a href={`/blog/${post.slug}`} style={{
                color: '#1a5c38', textDecoration: 'none', fontSize: '0.85rem',
                fontWeight: 'bold', letterSpacing: '0.05em',
              }}>
                LEER MÁS →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
