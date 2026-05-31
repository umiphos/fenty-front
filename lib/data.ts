// Datos mock — después vendrán de Django/Wagtail via API
import { Post, Propuesta, LogroTrabajo } from './types'

export const posts: Post[] = [
  {
    id: 1,
    titulo: 'Mi compromiso con las familias de Colima',
    resumen: 'Este proyecto nació de escuchar a cientos de familias en colonias y comunidades...',
    fecha: '28 mayo 2026',
    slug: 'compromiso-familias-colima',
  },
  {
    id: 2,
    titulo: 'Agua limpia para todos: así lo vamos a lograr',
    resumen: 'El acceso al agua potable no es un privilegio, es un derecho. Aquí el plan...',
    fecha: '20 mayo 2026',
    slug: 'agua-limpia-para-todos',
  },
  {
    id: 3,
    titulo: 'Reunión con mujeres emprendedoras del centro',
    resumen: 'Más de 80 mujeres compartieron sus historias y sus necesidades. Las escuché...',
    fecha: '12 mayo 2026',
    slug: 'mujeres-emprendedoras',
  },
]

export const propuestas: Propuesta[] = [
  {
    id: 1,
    titulo: 'Seguridad ciudadana',
    descripcion: 'Más policía de proximidad, cámaras en puntos críticos y comités vecinales activos.',
    icono: '🛡️',
  },
  {
    id: 2,
    titulo: 'Salud accesible',
    descripcion: 'Clínicas comunitarias abiertas los 7 días y medicamento gratuito para adultos mayores.',
    icono: '🏥',
  },
  {
    id: 3,
    titulo: 'Empleo local',
    descripcion: 'Apoyo a microempresas, capacitación técnica y feria de empleo mensual.',
    icono: '💼',
  },
  {
    id: 4,
    titulo: 'Educación de calidad',
    descripcion: 'Becas para preparatoria, internet gratuito en escuelas y útiles escolares para primaria.',
    icono: '📚',
  },
]

export const logros: LogroTrabajo[] = [
  {
    id: 1,
    titulo: 'Pavimentación Col. Jardines',
    descripcion: '3 km de calle rehabilitados beneficiando a 400 familias.',
    año: '2025',
  },
  {
    id: 2,
    titulo: 'Programa "Mujeres que Crecen"',
    descripcion: '120 emprendedoras capacitadas y con acceso a microcréditos.',
    año: '2024',
  },
  {
    id: 3,
    titulo: 'Alumbrado público Zona Norte',
    descripcion: 'Instalación de 200 luminarias LED, reduciendo incidencia delictiva 30%.',
    año: '2024',
  },
]
