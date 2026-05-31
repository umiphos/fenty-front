export default function SobreFenty() {
  return (
    <section id="sobre" style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #8383D8 0%, #AE83D8 60%, #D883D8 100%)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: '#f0e0ff', letterSpacing: '0.3em', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
          QUIÉN ES
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', marginBottom: '3rem', color: '#ffffff' }}>
          Sobre Fenty
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.9 }}>
            Fenty Law nació y creció en Colima. Abogada de profesión y servidora pública
            de vocación, ha dedicado su carrera a defender los derechos de las familias
            y a impulsar comunidades más justas y seguras.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.9 }}>
            Su compromiso es claro: cercanía con cada colonia, transparencia en cada
            decisión y resultados reales. No promesas vacías, sino un trabajo constante
            por un Colima que funcione para todas y todos.
          </p>
        </div>
      </div>
    </section>
  )
}
