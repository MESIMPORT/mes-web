// src/data/products/mobiliarioYComfort.js

export const mobiliarioYComfortProducts = [
  {
    id: "almohadilla-chest",
    name: "Almohadilla de posicionamiento tipo rollo de ACTION PRODUCTS",
    description:
      "La almohadilla de posicionamiento tipo “Chest-Roll” de Action Products está fabricada en polímero Akton® viscoelástico sin látex, diseñada para distribuir la presión de forma uniforme y reducir el cizallamiento durante procedimientos quirúrgicos prolongados. Radiolúcida, reutilizable y de fácil limpieza, es ideal para proteger la integridad tisular del paciente en decúbito prono o supino. Disponible en versiones para adulto y pediátrico, en múltiples tamaños para adaptarse a distintas anatomías.",
    image: "/images/mobiliario/chest1.jpg",
    // 👇 sin basePrice: el aggregator lo calcula a partir de variants
    variants: [
      // ADULTO
      {
        sku: "40616",
        patientType: "Adulto",
        lengthCm: 31.8,
        widthCm: 11.1,
        heightCm: 8.6,
        label: "40616 – 31.8 × 11.1 × 8.6 cm",
        price: 2500,
      },
      {
        sku: "40617",
        patientType: "Adulto",
        lengthCm: 41.9,
        widthCm: 11.1,
        heightCm: 8.6,
        label: "40617 – 41.9 × 11.1 × 8.6 cm",
        price: 2600,
      },
      {
        sku: "40618",
        patientType: "Adulto",
        lengthCm: 52.1,
        widthCm: 11.1,
        heightCm: 8.6,
        label: "40618 – 52.1 × 11.1 × 8.6 cm",
        price: 2700,
      },
      {
        sku: "40619",
        patientType: "Adulto",
        lengthCm: 30.5,
        widthCm: 15,
        heightCm: 13,
        label: "40619 – 30.5 × 15 × 13 cm",
        price: 2800,
      },
      {
        sku: "40620",
        patientType: "Adulto",
        lengthCm: 40.6,
        widthCm: 15,
        heightCm: 13,
        label: "40620 – 40.6 × 15 × 13 cm",
        price: 2900,
      },
      {
        sku: "40621",
        patientType: "Adulto",
        lengthCm: 50.8,
        widthCm: 15,
        heightCm: 13,
        label: "40621 – 50.8 × 15 × 13 cm",
        price: 3000,
      },

      // PEDIÁTRICO
      {
        sku: "40639",
        patientType: "Pediátrico",
        lengthCm: 15.24,
        widthCm: 5.08,
        heightCm: 5.08,
        label: "40639 – 15.24 × 5.08 × 5.08 cm",
        price: 2000,
      },
      {
        sku: "40640",
        patientType: "Pediátrico",
        lengthCm: 20.32,
        widthCm: 5.08,
        heightCm: 5.08,
        label: "40640 – 20.32 × 5.08 × 5.08 cm",
        price: 2100,
      },
      {
        sku: "40641",
        patientType: "Pediátrico",
        lengthCm: 25.4,
        widthCm: 5.08,
        heightCm: 5.08,
        label: "40641 – 25.4 × 5.08 × 5.08 cm",
        price: 2200,
      },
      {
        sku: "40642",
        patientType: "Pediátrico",
        lengthCm: 30.48,
        widthCm: 5.08,
        heightCm: 5.08,
        label: "40642 – 30.48 × 5.08 × 5.08 cm",
        price: 2300,
      },
      {
        sku: "40643",
        patientType: "Pediátrico",
        lengthCm: 15.24,
        widthCm: 7.62,
        heightCm: 7.62,
        label: "40643 – 15.24 × 7.62 × 7.62 cm",
        price: 2400,
      },
      // ... y sigues con las variantes que ya tenías definidas
    ],
  },

  {
  id: "almohadilla-cabeza-dona",
  name: "Almohadilla tipo dona de ACTION PRODUCTS",
  description:
    "Elaborado con polímero viscoelástico patentado de Action®, diseñado para acunar y proteger la región occipital y cervical del paciente durante procedimientos quirúrgicos o clínicos. Permite acceso óptimo al área de cabeza y cuello, ideal para intervenciones en otorrinolaringología, plástica, cirugía general y oftalmología.",
  basePrice: 1200,
  image: "/images/mobiliario/dona.jpg",
  variants: [
    {
      code: "ACTION 40201",
      tipoPaciente: "Adulto",
      modeloMedida: "40201 – Ø 20.5 cm (DE) × 7.5 cm (DI) × 4.5 cm (A)",
      dimensiones: { DE: "20.5 cm", DI: "7.5 cm", A: "4.5 cm" },
      price: 1200,
      image: "/images/mobiliario/dona.jpg",
    },
    {
      code: "ACTION 40212",
      tipoPaciente: "Adulto",
      modeloMedida: "40212 – Ø 20.5 cm (DE) × 7.5 cm (DI) × 7.5 cm (A)",
      dimensiones: { DE: "20.5 cm", DI: "7.5 cm", A: "7.5 cm" },
      price: 1250,
      image: "/images/mobiliario/dona.jpg",
    },
    {
      code: "ACTION 40218",
      tipoPaciente: "Adulto",
      modeloMedida: "40218 – Ø 20.5 cm (DE) × 11.4 cm (DI) × 4.5 cm (A)",
      dimensiones: { DE: "20.5 cm", DI: "11.4 cm", A: "4.5 cm" },
      price: 1300,
      image: "/images/mobiliario/dona.jpg",
    },
    {
      code: "ACTION 40202",
      tipoPaciente: "Pediátrico",
      modeloMedida: "40202 – Ø 14 cm (DE) × 5.7 cm (DI) × 3.2 cm (A)",
      dimensiones: { DE: "14 cm", DI: "5.7 cm", A: "3.2 cm" },
      price: 1150,
      image: "/images/mobiliario/dona.jpg",
    },
    {
      code: "ACTION 40219",
      tipoPaciente: "Pediátrico / Neonatal",
      modeloMedida: "40219 – Ø 10.2 cm (DE) × 6.4 cm (DI) × 2.5 cm (A)",
      dimensiones: { DE: "10.2 cm", DI: "6.4 cm", A: "2.5 cm" },
      price: 1100,
      image: "/images/mobiliario/dona.jpg",
    },
    {
      code: "ACTION 40203",
      tipoPaciente: "Neonatal",
      modeloMedida: "40203 – Ø 8.3 cm (DE) × 3.8 cm (DI) × 2 cm (A)",
      dimensiones: { DE: "8.3 cm", DI: "3.8 cm", A: "2 cm" },
      price: 1050,
      image: "/images/mobiliario/dona.jpg",
    },
  ],
},

{
  id: "pad-apoyo-grampon-rodilla",
  name: "Pad de apoyo para soporte de rodilla de ACTION PRODUCTS",
  description:
    "Elaborado con polímero viscoelástico patentado de Action®, diseñado para proporcionar soporte anatómico y distribución uniforme de presión en la zona poplítea durante 	procedimientos quirúrgicos prolongados. Reutilizable, radiolúcido y resistente a fluidos hospitalarios.",
  basePrice: 0,
  image: "/images/mobiliario/pad-rodilla.jpg",
  variants: [
    {
      code: "ACTION 40402",
      tipoPaciente: "Adulto / Pediátrico",
      modeloMedida: "40402 – 27.9 cm (L) × 22.9 cm (A) × 0.95 cm (Al)",
      dimensiones: { L: "27.9 cm", A: "22.9 cm", Al: "0.95 cm" },
      price: 1100,
      image: "/images/mobiliario/pad-rodilla.jpg",
    },
    {
      code: "ACTION 40403",
      tipoPaciente: "Adulto",
      modeloMedida: "40403 – 43 cm (L) × 28 cm (A) × 0.6 cm (Al)",
      dimensiones: { L: "43 cm", A: "28 cm", Al: "0.6 cm" },
      price: 1200,
      image: "/images/mobiliario/pad-rodilla.jpg",
    },
    {
      code: "ACTION 40404",
      tipoPaciente: "Adulto",
      modeloMedida: "40404 – 56 cm (L) × 50 cm (A) × 1.3 cm (Al)",
      dimensiones: { L: "56 cm", A: "50 cm", Al: "1.3 cm" },
      price: 1300,
      image: "/images/mobiliario/pad-rodilla.jpg",
    },
  ],
},

{
  id: "pads-incubadora-action",
  name: "Pads de Soporte ACTION para Incubadora",
  description:
    "Almohadillas de polímero Akton® para neonatos y pediátricos, diseñadas para reducir presión, estabilizar postura y proteger piel extremadamente frágil dentro de incubadoras y cuneros. Ideales para prevenir úlceras por presión, absorber vibraciones y brindar soporte seguro durante procedimientos.",
  basePrice: 0,
  image: "/images/mobiliario/pads-incubadora.jpg",
  variants: [
    {
      code: "ACTION 40120L",
      tipoPaciente: "Neonatal",
      modeloMedida: "40120L – 66 cm (L) × 40.6 cm (A) × 1.3 cm (Al)",
      dimensiones: { L: "66 cm", A: "40.6 cm", Al: "1.3 cm" },
      price: 500,
      image: "/images/mobiliario/pads-incubadora.jpg",
    },
    {
      code: "ACTION 40121",
      tipoPaciente: "Neonatal",
      modeloMedida: "40121 – 74 cm (L) × 48.2 cm (A) × 1.3 cm (Al)",
      dimensiones: { L: "74 cm", A: "48.2 cm", Al: "1.3 cm" },
      price: 600,
      image: "/images/mobiliario/pads-incubadora.jpg",
    },
    {
      code: "ACTION 40120",
      tipoPaciente: "Neonatal / Pediátrico",
      modeloMedida: "40120 – 66 cm (L) × 30.5 cm (A) × 1.3 cm (Al)",
      dimensiones: { L: "66 cm", A: "30.5 cm", Al: "1.3 cm" },
      price: 700,
      image: "/images/mobiliario/pads-incubadora.jpg",
    },
  ],
},
	



{
  id: "positioning-strap-40713",
  category: "mobiliario-y-comfort",
  name: "Correa de posicionamiento – ACTION",
  description:
    "Correa de posicionamiento reutilizable en polímero viscoelástico Akton® con superficie suave al contacto, costuras selladas y film resistente a fluidos. Radiolúcida y compatible con RM. El sistema de cierre por velcro permite fijación segura a mesas estándar durante procedimientos quirúrgicos.",
  basePrice: 0, // usa los price de cada variante (muestra rango en cards)
  image: "/images/mobiliario/strap-40713.jpg",
  variants: [
    {
      code: "ACTION 40713",
      tipoPaciente: "Universal",
      modeloMedida: "40713 – 144.8 cm (L) × 10.2 cm (A) × 0.6 cm (Al)",
      dimensiones: { L: "144.8 cm", A: "10.2 cm", Al: "0.6 cm" },
      price: 2600,
      image: "/images/mobiliario/strap-40713.jpg",
    },
    {
      code: "ACTION 40713L",
      tipoPaciente: "Universal",
      modeloMedida: "40713L – 228.6 cm (L) × 10.2 cm (A) × 0.6 cm (Al)",
      dimensiones: { L: "228.6 cm", A: "10.2 cm", Al: "0.6 cm" },
      price: 2900,
      image: "/images/mobiliario/strap-40713L.jpg",
    },
  ],
},

{
  id: "cubierta-superficie-action",
  name: "Cubierta de superficie – ACTION",
  description:
    "Cubierta viscoelástica reutilizable para mesa de operaciones, fabricada con polímero Akton® de alta densidad. Diseñada para redistribuir la presión corporal, mejorar la estabilidad del paciente y reducir el riesgo de lesiones por decúbito durante procedimientos quirúrgicos prolongados. Radiolúcida, libre de látex y fácil de limpiar.",
  basePrice: 2300,
  image: "/images/mobiliario/overlays.jpg",
  variants: [
    {
      code: "40105",
      modeloMedida: "40105 – Small (50.8 × 50.8 × 1.3 cm)",
      dimensiones: { Largo: "50.8 cm", Ancho: "50.8 cm", Altura: "1.3 cm" },
      price: 2300,
      image: "/images/mobiliario/overlays.jpg",
    },
    {
      code: "40100",
      modeloMedida: "40100 – Medium (117 × 50 × 1.3 cm)",
      dimensiones: { Largo: "117 cm", Ancho: "50 cm", Altura: "1.3 cm" },
      price: 2500,
      image: "/images/mobiliario/overlays.jpg",
    },
    {
      code: "40109",
      modeloMedida: "40109 – Medium Large (160 × 50 × 1.3 cm)",
      dimensiones: { Largo: "160 cm", Ancho: "50 cm", Altura: "1.3 cm" },
      price: 2700,
      image: "/images/mobiliario/overlays.jpg",
    },
    {
      code: "40101",
      modeloMedida: "40101 – Full Length (183 × 50 × 1.3 cm)",
      dimensiones: { Largo: "183 cm", Ancho: "50 cm", Altura: "1.3 cm" },
      price: 2900,
      image: "/images/mobiliario/overlays.jpg",
    },
    {
      code: "40103",
      modeloMedida: "40103 – Perineal Cutout (117 × 50.8 × 1.3 cm con recorte perineal)",
      dimensiones: { Largo: "117 cm", Ancho: "50.8 cm", Altura: "1.3 cm" },
      price: 2950,
      image: "/images/mobiliario/overlays.jpg",
    },
    {
      code: "40104",
      modeloMedida: "40104 – Set de 3 piezas (Cabeza, Tronco y Pies con recorte perineal)",
      dimensiones: { Detalle: "Ver modelos 40104A, 40104B y 40104C" },
      price: 3500,
      image: "/images/mobiliario/overlays.jpg",
    },
    {
      code: "40104A",
      modeloMedida: "40104A – Sección Cabeza (22.9 × 50.8 × 1.3 cm)",
      dimensiones: { Largo: "22.9 cm", Ancho: "50.8 cm", Altura: "1.3 cm" },
      price: 1200,
      image: "/images/mobiliario/overlays.jpg",
    },
    {
      code: "40104B",
      modeloMedida: "40104B – Sección Tronco con recorte perineal (100.3 × 50.8 × 1.3 cm)",
      dimensiones: { Largo: "100.3 cm", Ancho: "50.8 cm", Altura: "1.3 cm" },
      price: 1700,
      image: "/images/mobiliario/overlays.jpg",
    },
    {
      code: "40104C",
      modeloMedida: "40104C – Sección Pies con recorte perineal (50.8 × 50.8 × 1.3 cm)",
      dimensiones: { Largo: "50.8 cm", Ancho: "50.8 cm", Altura: "1.3 cm" },
      price: 1300,
      image: "/images/mobiliario/overlays.jpg",
    },
  ],
},


{
  id: "universal-spot-protectors-action",
  name: "Protectores de puntos de presión ACTION",
  description:
    "Pads circulares de polímero Akton® diseñados para proteger zonas óseas pequeñas y puntos de presión generados por dispositivos médicos. Ideales para codos, talones, maléolos, labios bajo tubo endotraqueal, nariz bajo cánulas y áreas delicadas en pacientes adultos, pediátricos y neonatales. Reutilizables, radiolúcidos y de perfil ultradelgado para un posicionamiento preciso.",
  basePrice: 0,
  image: "/images/mobiliario/spot-protectors.jpg",
  variants: [
    {
      code: "ACTION 40405",
      tipoPaciente: "Universal",
      modeloMedida: "40405 – Mini – Ø 4.1 cm × 0.6 cm (Al) – Paquete x 12",
      dimensiones: { D: "4.1 cm", Al: "0.6 cm" },
      price: 300,
      image: "/images/mobiliario/spot-protectors.jpg",
    },
    {
      code: "ACTION 40406",
      tipoPaciente: "Universal",
      modeloMedida: "40406 – Small – Ø 8.3 cm × 0.6 cm (Al) – Paquete x 12",
      dimensiones: { D: "8.3 cm", Al: "0.6 cm" },
      price: 350,
      image: "/images/mobiliario/spot-protectors.jpg",
    },
    {
      code: "ACTION 40407",
      tipoPaciente: "Universal",
      modeloMedida: "40407 – Large – Ø 14 cm × 0.6 cm (Al) – Paquete x 6",
      dimensiones: { D: "14 cm", Al: "0.6 cm" },
      price: 400,
      image: "/images/mobiliario/spot-protectors.jpg",
    },
  ],
},

{
  id: "resurfacing-kits-action",
  name: "Kits de Resuperficie ACTION para polímero Akton",
  description:
    "Kits de resuperficie ACTION diseñados para reparar de forma rápida y sencilla cortes o abrasiones menores en cualquier almohadilla o superficie de polímero Akton®. Permiten restaurar la zona dañada, prolongar la vida útil del producto y mantener la superficie lisa y segura para el paciente. Ideales para quirófano, UCI y áreas donde se utilicen pads de polímero Akton®.",
  basePrice: 0,
  image: "/images/mobiliario/resurfacing-kits.jpg",
  variants: [
    {
      code: "KIT002",
      modeloMedida: "KIT002 – 10 cm (L) × 10 cm (A)",
      dimensiones: { L: "10 cm", A: "10 cm" },
      price: 250,
      image: "/images/mobiliario/resurfacing-kits.jpg",
    },
    {
      code: "KIT003",
      modeloMedida: "KIT003 – 91.4 cm (L) × 10 cm (A)",
      dimensiones: { L: "91.4 cm", A: "10 cm" },
      price: 350,
      image: "/images/mobiliario/resurfacing-kits.jpg",
    }
  ],
},


{
  id: "colchon-anti-escaras",
  name: "Colchon anti escaras con motor",
  description:
  "Ideal para el cuidado en casa y hospitalario. Su sistema de presión silenciosa alternante infla y desinfla celdas de aire para distribuir el peso de forma uniforme y 	prevenir úlceras por presión. Fabricado en PVC resistente, garantiza durabilidad y confort. Soporta: 125KG Dimensiones: 2MT x 90CM",
  price: 276,
  image: "/images/mobiliario/colchon.png",

},


];
