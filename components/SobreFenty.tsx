export default function SobreFenty() {
  return (
    <section id="sobre" style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #8383D8 0%, #AE83D8 60%, #D883D8 100%)',
    }}>

      {/* Espacio reservado para la foto */}
      <div style={{
        width: '480px', height: '256px',
        margin: '0 auto 3rem',
        position: 'relative', zIndex: 1,
        borderRadius: '12px', overflow: 'hidden',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero_fenty.jfif"
          alt="Foto de la candidata"
          style={{ display: 'block' }}
        />
      </div>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
