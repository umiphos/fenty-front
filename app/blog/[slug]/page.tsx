import { posts } from '@/lib/data'
import { notFound } from 'next/navigation'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) notFound()

  return (
    <main style={{ paddingTop: '6rem', minHeight: '100vh', background: '#f5f0e8' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem' }}>
        <a href="/#blog" style={{ color: '#1a5c38', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
          ← VOLVER AL BLOG
        </a>
        <p style={{ color: '#c9a84c', fontSize: '0.8rem', letterSpacing: '0.1em', margin: '1.5rem 0 0.5rem' }}>
          {post.fecha}
        </p>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '400', lineHeight: 1.2, marginBottom: '2rem', color: '#0f1a14' }}>
          {post.titulo}
        </h1>
        <p style={{ color: '#444', lineHeight: 1.9, fontSize: '1.05rem' }}>
          {post.resumen} — Contenido completo vendrá de Django/Wagtail.
        </p>
      </div>
    </main>
  )
}
