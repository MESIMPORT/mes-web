// src/data/products/proteccionRadiologica.js

export const proteccionRadiologicaProducts = [

{
  id: "mandil-emplomado-kiran",
  name: "MANDIL EMPLOMADO KIRAN",
  description:
    "Mandil emplomado para protección radiológica, disponible en versiones adulto y pediátrico, con opciones de talla y protección de cuello integrada. Equivalente 0.50 mm Pb.",
  brand: "KIRAN",
  type: "proteccion-corporal-torso",

  image: "/images/radiologia/MANDIL/FAMILIA.png",

  attributeOrder: ["paciente", "talla", "proteccion_cuello"],

  priceRange: {
    min: 735,
    max: 1400
  },

  attributes: [
    {
      id: "paciente",
      label: "Tipo de paciente",
      type: "single",
      values: [
        { id: "adulto", label: "Adulto" },
        { id: "pediatrico", label: "Pediátrico" }
      ]
    },
    {
      id: "talla",
      label: "Talla",
      type: "single",
      values: [
        { id: "m", label: "M" },
        { id: "l", label: "L" }
      ]
    },
    {
      id: "proteccion_cuello",
      label: "Protección de cuello",
      type: "single",
      values: [
        { id: "integrada", label: "Con protección de cuello" },
        { id: "sin", label: "Sin protección de cuello" }
      ]
    }
  ],

  variants: [
    // ======================
    // ADULTO – TALLA M
    // ======================
    {
      sku: "MAND-AD-M-COLL",
      attrs: { paciente: "adulto", talla: "m", proteccion_cuello: "integrada" },
      price: 1260,
      image: "/images/radiologia/MANDIL/ADU+COLL.png"
    },
    {
      sku: "MAND-AD-M-SIN",
      attrs: { paciente: "adulto", talla: "m", proteccion_cuello: "sin" },
      price: 970,
      image: "/images/radiologia/MANDIL/ADUNOCOLL.png"
    },

    // ======================
    // ADULTO – TALLA L
    // ======================
    {
      sku: "MAND-AD-L-COLL",
      attrs: { paciente: "adulto", talla: "l", proteccion_cuello: "integrada" },
      price: 1400,
      image: "/images/radiologia/MANDIL/ADUTL+COLL.png"
    },
    {
      sku: "MAND-AD-L-SIN",
      attrs: { paciente: "adulto", talla: "l", proteccion_cuello: "sin" },
      price: 1100,
      image: "/images/radiologia/MANDIL/ADUNOCOLLTL.png"
    },

    // ======================
    // PEDIÁTRICO (SIN TALLA)
    // ======================
{
  sku: "MAND-PED-M-SIN",
  attrs: { paciente: "pediatrico", talla: "m", proteccion_cuello: "sin" },
  price: 735,
  image: "/images/radiologia/MANDIL/PEDNOCOLL.png"
},
{
  sku: "MAND-PED-M-COLL",
  attrs: { paciente: "pediatrico", talla: "m", proteccion_cuello: "integrada" },
  price: 935,
  image: "/images/radiologia/MANDIL/PED+COLL.png"

}
  ]  
},

{
  "id": "chaleco-falda-kiran",
  "name": "CHALECO Y FALDA KIRAN",
  "description": "El sistema de chaleco y falda plomada KIRAN está diseñado para brindar protección radiológica completa del cuerpo superior e inferior durante procedimientos de diagnóstico e intervención. Su diseño modular permite una distribución equilibrada del peso entre hombros y cintura, reduciendo la fatiga durante jornadas prolongadas, mientras ofrece libertad de movimiento y ajuste seguro para el usuario.",
  "brand": "KIRAN",
  type: "proteccion-corporal-torso",

  "image": "/images/radiologia/CHALECO Y FALDA/card.png",

  "attributes": [
    {
      "id": "modelo",
      "label": "Modelo",
      "type": "single",
      "values": [
        {
          "id": "optima",
          "label": "Optima"
        },
        {
          "id": "maxima",
          "label": "Maxima"
        }
      ]
    }
  ],

  "variants": [
    {
      "sku": "KIRAN-CHALECO-FALDA-OPTIMA",
      "attrs": {
        "modelo": "optima"
      },
      "price": 1000,
      "image": "/images/radiologia/CHALECO Y FALDA/OPTIMA.png",
      "features": [
        "Paneles de velcro ajustables para un ajuste cómodo y seguro",
        "Falda totalmente superpuesta para mayor protección de la parte inferior del cuerpo",
        "El chaleco se superpone a la falda hasta 15 cm para protección adicional",
        "Distribución equilibrada del peso en cintura y hombros para prevenir fatiga",
        "Hombreras antideslizantes para reducir el estrés y mejorar la distribución del peso",
        "Bolsillos integrados",
        "Cierre del chaleco con múltiples velcros para un ajuste confortable"
      ]
    },
    {
      "sku": "KIRAN-CHALECO-FALDA-MAXIMA",
      "attrs": {
        "modelo": "maxima"
      },
      "price": 1200,
      "image": "/images/radiologia/CHALECO Y FALDA/MAXIMA.png",
      "features": [
        "Apertura frontal para facilitar la colocación",
        "Disponible con cierre magnético",
        "Protección completa del cuerpo superior con chaleco totalmente superpuesto",
        "Distribución equilibrada del peso en cintura y hombros para prevenir fatiga",
        "Hombreras antideslizantes para reducir el estrés",
        "Cierre de velcro de 4 pulgadas para un ajuste firme",
        "Sistema de broche (snap lock) para una fijación adecuada",
        "Diseño de falda que permite libertad de movimiento",
        "Longitud de superposición optimizada para protección durante movimientos como flexión hacia adelante"
      ]
    }
  ]
},

  {
  id: "lentes-plomados-kiran",
  name: "LENTES DE PROTECCION RADIOLOGICA KIRAN",
  description:
    "Gafas plomadas de protección radiológica KIRAN diseñadas para proteger los ojos del personal médico expuesto a radiación dispersa de equipos de rayos X, fluoroscopía y procedimientos intervencionistas. Con lentes con equivalencia de plomo y monturas ergonómicas ligeras, ofrecen confort durante largos periodos de uso en entornos clínicos, garantizando una defensa ocular óptima y visión clara sin distorsión. Ideales para radiólogos, técnicos, cardiólogos, odontólogos y profesionales de la salud expuestos a radiación ionizante.",

  brand: "KIRAN",
  type: "proteccion-cervical-craneal",

  image: "/images/radiologia/LENTES/card.png",

  attributes: [
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "front", label: "Front" },
        { id: "aviators", label: "Aviators" },
        { id: "fit-over", label: "Fit-Over" },
        { id: "front-side", label: "Front Side" },
        { id: "max10", label: "Max10" },
        { id: "max30", label: "Max30" }
      ]
    }
  ],

  variants: [
    {
      sku: "LENS-KIRAN-FRONT",
      attrs: { modelo: "front" },
      price: 880,
      image: "/images/radiologia/LENTES/front.png"
    },
    {
      sku: "LENS-KIRAN-AVIATORS",
      attrs: { modelo: "aviators" },
      price: 880,
      image: "/images/radiologia/LENTES/aviators.png"
    },
    {
      sku: "LENS-KIRAN-FIT-OVER",
      attrs: { modelo: "fit-over" },
      price: 880,
      image: "/images/radiologia/LENTES/fit-over.png"
    },
    {
      sku: "LENS-KIRAN-FRONT-SIDE",
      attrs: { modelo: "front-side" },
      price: 880,
      image: "/images/radiologia/LENTES/front-side.png"
    },
    {
      sku: "LENS-KIRAN-MAX10",
      attrs: { modelo: "max10" },
      price: 880,
      image: "/images/radiologia/LENTES/max10.png"
    },
    {
      sku: "LENS-KIRAN-MAX30",
      attrs: { modelo: "max30" },
      price: 880,
      image: "/images/radiologia/LENTES/max30.png"
    }
  ]
},

{
  id: "protector-inferior-kiran",
  name: "PROTECTOR DOBLE PROPOSITO KIRAN",
  description:
    "El protector inferior KIRAN (Patient Apron) está diseñado para proteger al paciente frente a la radiación directa y dispersa durante procedimientos de diagnóstico por imágenes realizados bajo mesas de rayos X. Proporciona cobertura completa de la parte inferior del cuerpo y puede utilizarse de manera universal como protector gonadal u ovárico. Su diseño prioriza la comodidad del paciente, un ajuste seguro mediante correa posterior ajustable y una protección radiológica eficaz, estando disponible también en tamaño pediátrico.",

  brand: "KIRAN",
  type: "proteccion-pelvica",

  // Imagen base del card / PDP (misma imagen para todas las variantes)
  image: "/images/radiologia/APRON/card.png",

  attributes: [
    {
      id: "tamaño",
      label: "Tamaño",
      type: "single",
      values: [
        { id: "30x30", label: "30 × 30 cm" },
        { id: "40x40", label: "40 × 40 cm" },
        { id: "50x50", label: "50 × 50 cm" }
      ]
    }
  ],

  variants: [
    {
      sku: "KIRAN-INFERIOR-30X30",
      attrs: { tamaño: "30x30" },
      price: 800,
      image: "/images/radiologia/APRON/card.png"
    },
    {
      sku: "KIRAN-INFERIOR-40X40",
      attrs: { tamaño: "40x40" },
      price: 800,
      image: "/images/radiologia/APRON/card.png"
    },
    {
      sku: "KIRAN-INFERIOR-50X50",
      attrs: { tamaño: "50x50" },
      price: 800,
      image: "/images/radiologia/APRON/card.png"
    }
  ]
},


  
{
  id: "proteccion-gonadal-kiran",
  name: "PROTECTOR GONADAL KIRAN",
  description:
    "La protección gonadal KIRAN está diseñada para reducir la exposición a radiación ionizante en los órganos reproductivos masculinos durante procedimientos de diagnóstico por imágenes. Brinda cobertura anatómica específica, ajuste seguro y comodidad para pacientes y personal médico expuestos a radiación dispersa en estudios de rayos X, fluoroscopía y tomografía.",
  brand: "KIRAN",
  type: "proteccion-pelvica",

  price: 800,

  image: "/images/radiologia/GONADAL/card.png",
  images: [
    "/images/radiologia/GONADAL/card.png",
    "/images/radiologia/GONADAL/gonadal.png"
  ]
},


{
  id: "proteccion-ovarica-kiran",
  name: "PROTECTOR OVÁRICO KIRAN",
  description:
    "La protección ovárica KIRAN está diseñada para reducir la exposición a radiación ionizante en los ovarios durante procedimientos de diagnóstico por imágenes. Ofrece cobertura localizada, ajuste anatómico y comodidad, siendo ideal para estudios radiológicos en los que se requiere proteger órganos reproductivos femeninos frente a radiación dispersa.",

  brand: "KIRAN",
  type: "proteccion-pelvica",

  price: 800,

  // Imagen principal (card + imagen inicial del PDP)
  image: "/images/radiologia/OVARICA/card.png",

  // Carrusel del PDP
  images: [
    "/images/radiologia/OVARICA/card.png",
    "/images/radiologia/OVARICA/ovarios.png"
  ]
},




{
  id: "protector-cabeza-kiran",
  name: "PROTECTOR DE CABEZA KIRAN",
  description:
    "El protector de cabeza KIRAN está diseñado para brindar protección radiológica eficaz a la cabeza y orejas frente a radiación ionizante dispersa durante procedimientos de diagnóstico por imágenes. Su diseño ergonómico permite un ajuste cómodo y seguro, facilitando el uso prolongado en estudios de rayos X y fluoroscopía. Está disponible en diferentes modelos para adaptarse a distintas necesidades clínicas, manteniendo un equilibrio óptimo entre cobertura, confort y facilidad de uso.",

  brand: "KIRAN",
  type: "proteccion-cervical-craneal",

  // Imagen base del card / PDP
  image: "/images/radiologia/CABEZA/card.png",

  attributes: [
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "maxima", label: "Modelo Maxima" },
        { id: "optima", label: "Modelo Optima" }
      ]
    }
  ],

  variants: [
    {
      sku: "KIRAN-CABEZA-MAXIMA",
      attrs: { modelo: "maxima" },
      price: 500,

      images: [
        "/images/radiologia/CABEZA/maxima1.png",
        "/images/radiologia/CABEZA/maxima2.png"
      ],

      // fallback para PDPs que aún lean `image`
      image: "/images/radiologia/CABEZA/maxima1.png"
    },
    {
      sku: "KIRAN-CABEZA-OPTIMA",
      attrs: { modelo: "optima" },
      price: 600,
      image: "/images/radiologia/CABEZA/optima.png"
    }
  ]
},

{
  id: "protector-tiroides-kiran",
  name: "PROTECTOR DE TIROIDES KIRAN",
  description:
    "El protector de tiroides KIRAN está diseñado para proporcionar protección eficaz a la glándula tiroides frente a la radiación ionizante dispersa durante procedimientos de diagnóstico por imágenes. Su diseño anatómico permite un ajuste cómodo alrededor del cuello, garantizando seguridad, facilidad de uso y confort en estudios de rayos X y fluoroscopía. Está disponible en diferentes modelos para adaptarse a las preferencias del usuario y a distintos niveles de cobertura y ajuste.",

  brand: "KIRAN",
  type: "proteccion-cervical-craneal",

  // Imagen base del card / PDP
  image: "/images/radiologia/TIROIDES/card.png",

  attributes: [
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "classic", label: "Classic" },
        { id: "slimline", label: "Slimline" }
      ]
    }
  ],

  variants: [
    {
      sku: "KIRAN-TIROIDES-CLASSIC",
      attrs: { modelo: "classic" },
      price: 450,
      image: "/images/radiologia/TIROIDES/thyroid-classic.png"
    },
    {
      sku: "KIRAN-TIROIDES-SLIMLINE",
      attrs: { modelo: "slimline" },
      price: 600,
      image: "/images/radiologia/TIROIDES/thyroid-slimline.png"
    }
  ]
},



  {
    id: "guantes-emplomados-kiran",
    name: "GUANTES EMPLOMADOS KIRAN DUO",
    description:
      "Guantes emplomados con doble capa y forro desmontable. Equivalente 0.50 mm Pb.",

    type: "proteccion-extremidades",
    price: 870,
    image: "/images/radiologia/guantes.png",
  },

  {
    id: "biombo-emplomado",
    name: "Biombo emplomado",
    description:
      "Pantalla móvil emplomada para protección del personal durante procedimientos radiológicos.",
    price: 3750,
    image: "/images/radiologia/biombo.png",
  }

];
