// src/data/diagnosticoYMedicion.js

export const diagnosticoYMedicionProducts = [

  {
  id: "seca-334",
  name: "BALANZA DIGITAL SECA 334",
  description:
    "Balanza electrónica portátil para recién nacidos y lactantes, con alta precisión y función BMIF para control clínico neonatal. Alimentación por pilas AA y opción de adaptador de corriente externo (opcional).",
  brand: "SECA",
  type: "balanza",
  price: 2200,

  priceRange: {
    min: 2200,
    max: 4700
  },

  image: "/images/diagnostico/SECA 334/seca334.png",
  images: [
    "/images/diagnostico/SECA 334/seca334.png"
  ],

  attributes: [
    {
      id: "accessories",
      label: "Configuración",
      type: "multi",
      values: [
        {
          id: "base",
          label: "BALANZA DIGITAL SECA 334"
        },
        {
          id: "mochila-428",
          label: "+ Mochila SECA 428",
          images: [
            "/images/diagnostico/SECA 334/seca428-1.png",
            "/images/diagnostico/SECA 334/seca428-2.png"
          ],
          priceDelta: 500
        },
        {
          id: "adaptador-447",
          label: "+ Adaptador SECA 447",
          images: [
            "/images/diagnostico/SECA 334/seca447.png"
          ],
          priceDelta: 500
        },
        {
          id: "adaptador-400",
          label: "+ Adaptador SECA 400",
          images: [
            "/images/diagnostico/SECA 334/seca400.png"
          ],
          priceDelta: 500
        },
        {
          id: "tope-419",
          label: "+ Tope SECA 419",
          images: [
            "/images/diagnostico/SECA 334/seca419.png"
          ],
          priceDelta: 500
        },
        {
          id: "tallimetro-232",
          label: "+ Tallímetro SECA 232",
          images: [
            "/images/diagnostico/SECA 334/seca232.png",
            "/images/diagnostico/SECA 334/seca232-1.png"
          ],
          priceDelta: 500
        }
      ]
    }
  ],

  rules: {
    incompatible: [
      ["adaptador-447", "adaptador-400"],
      ["tope-419", "tallimetro-232"]
    ]
  }
},


    {
    id: "seca-354",
    name: "BALANZA DIGITAL SECA 354",
    description:
      "Balanza digital electrónica para el pesaje preciso de recién nacidos y lactantes, con alta precisión y funciones clínicas para uso hospitalario.",
    brand: "SECA",
    type: "balanza",
    price: 960,

    priceRange: { min: 960, max: 1460 },

    image: "/images/diagnostico/SECA 354/seca354-1.png",
    images: ["/images/diagnostico/SECA 354/seca354-1.png"],

    attributes: [
      {
        id: "accessories",
        label: "Configuración",
        type: "multi",
        values: [
          { id: "base", label: "BALANZA DIGITAL SECA 354" },
          {
            id: "mochila-413",
            label: "+ Mochila SECA 413",
            images: [
              "/images/diagnostico/SECA 354/seca413-1.png",
              "/images/diagnostico/SECA 354/seca413-2.png",
              "/images/diagnostico/SECA 354/seca413-3.png"
            ],
            priceDelta: 500
          }
        ]
      }
    ]
  },

  {
  id: "seca-374",
  name: "BALANZA DIGITAL SECA 374",
  description:
    "Balanza electrónica pediátrica diseñada para el pesaje preciso y seguro de recién nacidos y niños pequeños. Incorpora funciones avanzadas como BMIF, TARA y HOLD, además de conectividad inalámbrica para integración clínica.",
  brand: "SECA",
  type: "balanza",
  price: 2200,

  priceRange: {
    min: 2200,
    max: 3700
  },

  image: "/images/diagnostico/SECA 374/seca374.png",
  images: [
    "/images/diagnostico/SECA 374/seca374.png"
  ],

  attributes: [
    {
      id: "accessories",
      label: "Configuración",
      type: "multi",
      values: [
        {
          id: "base",
          label: "BALANZA DIGITAL SECA 374"
        },
        {
          id: "tallimetro-233",
          label: "+ Tallímetro SECA 233",
          images: [
            "/images/diagnostico/SECA 374/seca233-1.png",
            "/images/diagnostico/SECA 374/seca233-2.png"
          ],
          priceDelta: 500
        },
        {
          id: "tope-418",
          label: "+ Tope de Cabeza y Pies SECA 418",
          images: [
            "/images/diagnostico/SECA 374/seca418-1.png",
            "/images/diagnostico/SECA 374/seca418-2.png"
          ],
          priceDelta: 500
        },
        {
          id: "adaptador-400",
          label: "+ Adaptador SECA 400",
          images: [
            "/images/diagnostico/SECA 374/seca400.png"
          ],
          priceDelta: 500
        }
      ]
    }
  ]
},


  {
    id: "seca-725",
    name: "BALANZA MECÁNICA SECA 725",
    description:
      "Balanza mecánica para pesaje neonatal, sin requerimiento de energía eléctrica, ideal para hospitales y consultorios pediátricos.",
    brand: "SECA",
    type: "balanza",
    price: 1260,

    image: "/images/diagnostico/SECA 725/seca725-1.png",
    images: [
      "/images/diagnostico/SECA 725/seca725-1.png",
      "/images/diagnostico/SECA 725/seca725-2.png"
    ]
  },


  {
    id: "seca-700",
    name: "BALANZA MECÁNICA SECA 700",
    description:
      "Balanza mecánica médica de alta precisión, diseñada para uso continuo en clínicas, hospitales y consultorios. Cuenta con estructura robusta, lectura analógica confiable y compatibilidad con tallímetro SECA 220 como accesorio opcional.",
    brand: "SECA",
    type: "balanza",
    price: 1000,

    priceRange: { min: 1000, max: 1500 },

    image: "/images/diagnostico/SECA 700/seca700-1.png",
    images: [
      "/images/diagnostico/SECA 700/seca700-1.png",
      "/images/diagnostico/SECA 700/seca700-2.png"
    ],

    attributes: [
      {
        id: "accessories",
        label: "Configuración",
        type: "multi",
        values: [
          { id: "base", label: "BALANZA MECÁNICA SECA 700" },
          {
            id: "tallimetro-220",
            label: "+ Tallímetro SECA 220",
            images: ["/images/diagnostico/SECA 700/seca700-tallimetro-2.png"],
            priceDelta: 500
          }
        ]
      }
    ]
  },

  {
    id: "seca-703",
    name: "BALANZA DIGITAL SECA 703",
    description:
      "Equipo de pesaje médico profesional, diseñado para uso continuo en clínicas y hospitales. Ofrece mediciones precisas y estructura robusta.",
    brand: "SECA",
    type: "balanza",
    price: 3600,

    priceRange: { min: 3600, max: 4100 },

    image: "/images/diagnostico/SECA 703/seca703-1.png",
    images: [
      "/images/diagnostico/SECA 703/seca703-1.png",
      "/images/diagnostico/SECA 703/seca703-2.png"
    ],

    attributes: [
      {
        id: "accessories",
        label: "Configuración",
        type: "multi",
        values: [
          { id: "base", label: "BALANZA DIGITAL SECA 703" },
          {
            id: "tallimetro-220",
            label: "+ Tallímetro SECA 220",
            images: [
              "/images/diagnostico/SECA 703/seca703-tallimetro.png",
              "/images/diagnostico/SECA 703/seca220.png"
            ],
            priceDelta: 500
          }
        ]
      }
    ]
  },

  {
    id: "seca-777",
    name: "BALANZA DIGITAL C/TALLÍMETRO SECA 777",
    description:
      "Báscula médica digital de columna con tallímetro integrado, pantalla a la altura de los ojos y plataforma metálica estable.",
    brand: "SECA",
    type: "balanza",
    price: 3000,

    priceRange: { min: 3000, max: 4500 },

    image: "/images/diagnostico/SECA 777/seca777-1.png",
    images: [
      "/images/diagnostico/SECA 777/seca777-1.png",
      "/images/diagnostico/SECA 777/seca777-2.png"
    ],

    attributes: [
      {
        id: "accessories",
        label: "Configuración",
        type: "multi",
        values: [
          { id: "base", label: "BALANZA DIGITAL SECA 777" },
          {
            id: "adaptador-401",
            label: "+ Adaptador SECA 401",
            images: ["/images/diagnostico/SECA 777/seca401.png"],
            priceDelta: 500
          },
          {
            id: "oso-panda-459",
            label: "+ Oso Panda SECA 459",
            images: [
              "/images/diagnostico/SECA 777/seca459-1.png",
              "/images/diagnostico/SECA 777/seca459-2.png"
            ],
            priceDelta: 500
          }
        ]
      }
    ]
  },

    {
    id: "seca-803",
    name: "BALANZA DIGITAL PLATAFORMA SECA 803",
    description:
      "Balanza digital de plataforma ultraplano para control de peso corporal en clínicas y hogares.",
    brand: "SECA",
    type: "balanza",
    price: 450,

    image: "/images/diagnostico/SECA 803/seca803-1.png",
    images: [
      "/images/diagnostico/SECA 803/seca803-1.png",
      "/images/diagnostico/SECA 803/seca803-2.png",
      "/images/diagnostico/SECA 803/seca803-3.png"
    ]
  },

  {
    id: "seca-813",
    name: "BALANZA DIGITAL PLATAFORMA SECA 813",
    description:
      "Balanza digital de plataforma para pacientes adultos con alta capacidad de carga y plataforma antideslizante.",
    brand: "SECA",
    type: "balanza",
    price: 530,

    image: "/images/diagnostico/SECA 813/seca813-1.png",
    images: [
      "/images/diagnostico/SECA 813/seca813-1.png",
      "/images/diagnostico/SECA 813/seca813-2.png"
    ]
  },

   {
    id: "seca-220",
    name: "TALLIMETRO SECA 220",
    description:
      "Tallímetro clínico compatible con balanzas de columna SECA para medición de estatura precisa en entornos médicos.",
    brand: "SECA",
    type: "accesorio",
    price: 400,

    image: "/images/diagnostico/SECA 220/seca700-tallimetro-2.png"
  },

  {
    id: "seca-232",
    name: "TALLIMETRO SECA 232",
    description:
      "Accesorio para medición de longitud corporal en pesabebés SECA 334.",
    brand: "SECA",
    type: "accesorio",
    price: 400,

    image: "/images/diagnostico/SECA 232/seca232-1.png",
    images: [
      "/images/diagnostico/SECA 232/seca232-1.png",
      "/images/diagnostico/SECA 232/seca232-2.png"
    ]
  },

  {
    id: "seca-233",
    name: "TALLÍMETRO SECA 233",
    description:
      "Tallímetro pediátrico para medición de longitud corporal en balanzas pesabebés SECA.",
    brand: "SECA",
    type: "accesorio",
    price: 400,

    image: "/images/diagnostico/SECA 233/seca233-1.png",
    images: [
      "/images/diagnostico/SECA 233/seca233-1.png",
      "/images/diagnostico/SECA 233/seca233-2.png"
    ]
  },

{
  id: "seca-400",
  name: "ADAPTADOR DE CORRIENTE SECA 400",
  description:
    "Adaptador de corriente original SECA para conexión a red eléctrica, diseñado para proporcionar una alimentación estable y segura a equipos médicos compatibles. El SECA 400 es ideal para entornos clínicos que requieren operación continua y confiable del equipo.",
    brand: "SECA",
    type: "accesorio",
    price: 400,
  image: "/images/diagnostico/SECA 400/seca400.png"
},

{
  id: "seca-401",
  name: "ADAPTADOR DE CORRIENTE SECA 401",
  description:
    "Adaptador de corriente original SECA diseñado para suministrar energía estable y segura a las balanzas SECA 787 y SECA 777. El SECA 401 es ideal para entornos clínicos que requieren funcionamiento continuo y confiable del equipo.",
    brand: "SECA",
    type: "accesorio",
    price: 400,
  image: "/images/diagnostico/SECA 401/seca401.png"
},

{
  id: "seca-413",
  name: "MOCHILA DE TRANSPORTE SECA 413",
  description:
    "Accesorio diseñado para facilitar el transporte seguro y cómodo de balanzas pediátricas SECA en actividades extramurales. La mochila SECA 413 es ideal para programas de salud, visitas domiciliarias y campañas de control infantil, ofreciendo practicidad y protección durante el traslado.",
  brand: "SECA",
  type: "accesorio",
  price: 400,
  image: "/images/diagnostico/SECA 413/seca413-1.png",
  images: [
    "/images/diagnostico/SECA 413/seca413-1.png",
    "/images/diagnostico/SECA 413/seca413-2.png",
    "/images/diagnostico/SECA 413/seca413-3.png"
  ]
},


{
  id: "seca-418",
  name: "TOPES PARA PIES Y CABEZA SECA 418",
  description:
    "Accesorio clínico diseñado para asegurar la correcta posición del lactante durante el pesaje y la medición en pesabebés SECA. Los topes SECA 418 mejoran la estabilidad del paciente y contribuyen a obtener mediciones más precisas en controles pediátricos y neonatales.",
  brand: "SECA",
  type: "accesorio",
  price: 400,
  image: "/images/diagnostico/SECA 418/seca418-1.png",
  images: [
    "/images/diagnostico/SECA 418/seca418-1.png",
    "/images/diagnostico/SECA 418/seca418-2.png"
  ]
},

{
  id: "seca-419",
  name: "TOPE PARA CABEZA SECA 419",
  description:
    "Accesorio clínico diseñado para asegurar una correcta posición de la cabeza durante el pesaje y medición en pesabebés SECA. El tope SECA 419 mejora la estabilidad del paciente y la precisión del procedimiento en controles pediátricos y neonatales.",
  brand: "SECA",
  type: "accesorio",
  price: 400,
  image: "/images/diagnostico/SECA 419/seca419.png"
},

{
  id: "seca-428",
  name: "MOCHILA DE TRANSPORTE SECA 428",
  description:
    "Accesorio de transporte diseñado para el traslado seguro del infantómetro SECA 417 en actividades extramurales. La mochila SECA 428 facilita el trabajo en campo, visitas domiciliarias y campañas de salud, protegiendo el equipo y mejorando la movilidad del personal sanitario.",
  brand: "SECA",
  type: "accesorio",
  price: 400,
  image: "/images/diagnostico/SECA 428/seca428-1.png",
  images: [
    "/images/diagnostico/SECA 428/seca428-1.png",
    "/images/diagnostico/SECA 428/seca428-2.png"
  ]
},

{
  id: "seca-447",
  name: "ADAPTADOR DE CORRIENTE SECA 447",
  description:
    "Adaptador de corriente original SECA diseñado para suministrar energía estable y confiable a equipos médicos compatibles. El SECA 447 es ideal para entornos clínicos que requieren operación continua y segura de balanzas y dispositivos SECA.",
  brand: "SECA",
  type: "accesorio",
  price: 400,
  image: "/images/diagnostico/SECA 447/seca447.png"
},


{
  id: "seca-459",
  name: "INDICADOR DE LECTURA INFANTIL SECA 459",
  description:
    "Accesorio clínico diseñado para la medición rápida y precisa de perímetros corporales en evaluaciones médicas y nutricionales. La cinta métrica SECA 459 es ideal para controles antropométricos en consultorios, hospitales y programas de salud que requieren mediciones confiables y repetibles.",
  brand: "SECA",
  type: "accesorio",
  price: 400,
  image: "/images/diagnostico/SECA 459/seca459-1.png",
  images: [
    "/images/diagnostico/SECA 459/seca459-1.png",
    "/images/diagnostico/SECA 459/seca459-2.png"
  ]
},

{
  id: "seca-477",
  name: "PASAMANOS SECA 477",
  description:
    "Accesorio de apoyo diseñado para brindar mayor estabilidad y seguridad al paciente durante el proceso de pesaje. El pasamanos SECA 477 es ideal para entornos clínicos que atienden adultos mayores, pacientes con movilidad reducida o en rehabilitación, optimizando la experiencia de uso y reduciendo riesgos.",
  brand: "SECA",
  type: "accesorio",
  price: 400,
  image: "/images/diagnostico/SECA 477/seca477-1.png",
  images: [
    "/images/diagnostico/SECA 477/seca477-1.png",
    "/images/diagnostico/SECA 477/seca477-2.png"
  ]
},

  {
    id: "cms-tcs200lp",
    name: "BALANZA DIGITAL CMS TCS200LP",
    description:
      "Balanza digital de plataforma para aplicaciones clínicas y comerciales.",
    brand: "CMS",
    type: "balanza",
    price: 890,

    image: "/images/diagnostico/CMS TCS200LP/TCS200LP.png"
  },

  {
    id: "rice-lake-150-10-5",
    name: "BALANZA DIGITAL RICE LAKE 150-10-5",
    description:
      "Balanza digital clínica con tallímetro integrado y tecnología Motiontrap™ para mediciones precisas en pacientes en movimiento.",
    brand: "RICE LAKE",
    type: "balanza",
    price: 2000,

    image: "/images/diagnostico/RICE LAKE 150-10-5/RL150105-1.png",
    images: [
      "/images/diagnostico/RICE LAKE 150-10-5/RL150105-1.png",
      "/images/diagnostico/RICE LAKE 150-10-5/RL150105-2.png"
    ]
  },

  {
    id: "rice-lake-rl-dbs",
    name: "BALANZA DIGITAL RICE LAKE RL-DBS",
    description:
      "Balanza pediátrica digital con tecnología Motiontrap™ para control preciso del peso en lactantes.",
    brand: "RICE LAKE",
    type: "balanza",
    price: 869,

    image: "/images/diagnostico/RICE LAKE RL-DBS/RLDBS.png"
  },

  {
    id: "rice-lake-rl-mis",
    name: "BALANZA MECANICA RICE LAKE RL-MIS",
    description:
      "Balanza mecánica pediátrica sin energía eléctrica para uso clínico neonatal.",
    brand: "RICE LAKE",
    type: "balanza",
    price: 750,

    image: "/images/diagnostico/RICE LAKE RL-MIS/RLMIS.png"
  },

  {
    id: "omron-hbf-514c",
    name: "BALANZA CORPORAL OMRON HBF-514C",
    description:
      "Monitor de composición corporal con sensor mano-pie para análisis avanzado de salud.",
    brand: "OMRON",
    type: "balanza",
    price: 479,

    image: "/images/diagnostico/OMROM HBF/OMRON.png"
  },

  {
    id: "beurer-ps160",
    name: "BALANZA DIGITAL BEURER PS160",
    description:
      "Balanza digital doméstica con plataforma de vidrio templado y diseño moderno.",
    brand: "BEURER",
    type: "balanza",
    price: 200,

    image: "/images/diagnostico/BEURER PS160/BEURERPS160.png"
  },


  {
    id: "reybal-rbd300k",
    name: "BALANZA DIGITAL REYBAL RBD300K",
    description:
      "Balanza digital de plataforma para cargas pesadas en entornos comerciales.",
    brand: "REYBAL",
    type: "balanza",
    price: 950,

    image: "/images/diagnostico/REYBAL RBD300K/REYBAL.png"
  },

  {
    id: "tscale-m301",
    name: "BALANZA DIGITAL TSCALE M301",
    description:
      "Balanza digital de plataforma para aplicaciones comerciales e industriales.",
    brand: "TSCALE",
    type: "balanza",
    price: 2200,

    image: "/images/diagnostico/TSCALE M301/TSCALE-1.png",
    images: [
      "/images/diagnostico/TSCALE M301/TSCALE-1.png",
      "/images/diagnostico/TSCALE M301/TSCALE-2.png"
    ]
  },

  {
    id: "gramera-generica-10kg",
    name: "BALANZA GRAMERA GENERICA 10KG",
    description:
      "Balanza gramera digital portátil para pesaje preciso de pequeños objetos.",
    brand: "GENERICA",
    type: "balanza",
    price: 95,

    image: "/images/diagnostico/GRAMERA GEN/GRAMERAGEN.png"
  },


  {
    id: "nipro-premier",
    name: "GLUCÓMETRO NIPRO PREMIER",
    description:
      "Glucómetro digital para la medición precisa de glucosa en sangre, de uso doméstico y clínico. Compatible con tiras reactivas Nipro Premier y diseñado para un control confiable y sencillo.",

    price: 120,

    image: "/images/diagnostico/NIPRO-PREMIER/nipro-premier-1.png",
    images: [
      "/images/diagnostico/NIPRO-PREMIER/nipro-premier-1.png",
      "/images/diagnostico/NIPRO-PREMIER/nipro-premier-2.png"
    ]
  },

{
  "id": "infantometros-pediatricos-madera",
  "name": "Infantómetros y tallímetros pediátricos de madera",
  "description":
    "Instrumentos antropométricos de madera diseñados para la medición precisa de la longitud y estatura de niñas y niños en diferentes etapas de crecimiento. Incluye modelos específicos para menores de dos años y tallímetros móviles para menores de cinco años, fabricados en triplay reforzado con estructuras de madera que garantizan estabilidad, durabilidad y exactitud en entornos clínicos y trabajo de campo.",

  "image": "/images/diagnostico/INFANTOMETROS MADERA/i2.png",

  
  "attributes": [
    {
      "id": "tipo",
      "label": "Tipo de infantómetro",
      "type": "single",
      "values": [
        { "id": "menores-2-anos", "label": "Menores de 2 años" },
        { "id": "menores-5-anos", "label": "Menores de 5 años (T1 móvil)" }
      ]
    }
  ],

  "variants": [
    {
      "sku": "INF-MAD-2A",
      "attrs": { "tipo": "menores-2-anos" },
      "price": 320,
      "image": "/images/diagnostico/INFANTOMETROS MADERA/i2.png",
      "variantLabel": "Infantómetro de madera para menores de 2 años"
    },
    {
      "sku": "TALL-T1-5A",
      "attrs": { "tipo": "menores-5-anos" },
      "price": 430,
      "image": "/images/diagnostico/INFANTOMETROS MADERA/t1.png",
      "variantLabel": "Tallímetro móvil T1 para menores de 5 años"
    }
  ],
},


{
  id: "riester-1350",
  name: "TENSIOMETRO RIESTER 1350",
  description:
    "Tensiómetro aneroide profesional para medición precisa de la presión arterial en entornos clínicos.",
  brand: "RIESTER",
  type: "tensiometro",

  image: "/images/diagnostico/RIESTER 1350/riester1350.png",

  // ✅ PRECIO BASE (configuración estándar)
  price: 250,

  // ✅ RANGO INFORMATIVO
  priceRange: { min: 250, max: 300 },

  attributes: [
    {
      id: "configuration",
      label: "Configuración de brazalete",
      type: "single",
      values: [
        { id: "adulto-estandar", label: "Adulto 1350" },
        { id: "adulto-obeso", label: "Adulto 1350-123" },
        { id: "pediatrico", label: "Pediátrico 1350-130" }
      ]
    }
  ],

  variants: [
    {
      sku: "RIESTER-1350-ADULTO",
      attrs: { configuration: "adulto-estandar" },
      price: 250,
      image: "/images/diagnostico/RIESTER 1350/riester1350.png"
    },
    {
      sku: "RIESTER-1350-OBESO",
      attrs: { configuration: "adulto-obeso" },
      price: 300,
      image: "/images/diagnostico/RIESTER 1350/riester1350.png"
    },
    {
      sku: "RIESTER-1350-PEDIATRICO",
      attrs: { configuration: "pediatrico" },
      price: 250,
      image: "/images/diagnostico/RIESTER 1350/riester1350.png"
    }
  ]
},


{
  id: "estetoscopio-riester-duplex",
  name: "ESTETOSCOPIO RIESTER DUPLEX",
  description:
    "Estetoscopio clínico profesional Riester Duplex, disponible en diferentes líneas y modelos para uso adulto, pediátrico y neonatal.",
    brand: "RIESTER",
    type: "estetoscopio",
  image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4001.png",

  priceRange: {
    min: 220,
    max: 350
  },

  attributes: [
    {
      id: "linea",
      label: "Línea",
      type: "single",
      values: [
        { id: "4000", label: "Línea 4000" },
        { id: "4200", label: "Línea 4200" }
      ]
    },
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "adulto", label: "Adulto" },
        { id: "pediatrico", label: "Pediátrico" },
        { id: "neonatal", label: "Neonatal" }
      ]
    }
  ],

  variants: [
    {
      sku: "RIESTER-4001-ADULTO",
      attrs: { linea: "4000", modelo: "adulto" },
      price: 220,
      image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4001.png"
    },
    {
      sku: "RIESTER-4041-PEDIATRICO",
      attrs: { linea: "4000", modelo: "pediatrico" },
      price: 220,
      image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4041.png"
    },
    {
      sku: "RIESTER-4051-NEONATAL",
      attrs: { linea: "4000", modelo: "neonatal" },
      price: 220,
      image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4051.png"
    },
    {
      sku: "RIESTER-4210-ADULTO",
      attrs: { linea: "4200", modelo: "adulto" },
      price: 350,
      image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4210.png"
    },
    {
      sku: "RIESTER-4220-PEDIATRICO",
      attrs: { linea: "4200", modelo: "pediatrico" },
      price: 350,
      image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4220.png"
    },
    {
      sku: "RIESTER-4230-NEONATAL",
      attrs: { linea: "4200", modelo: "neonatal" },
      price: 350,
      image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4230.png"
    }
  ]
},



{
  id: "littmann-classic-iii",
  name: "Estetoscopio Littmann Classic III DualCare 3M",
  description:
    "Estetoscopio profesional diseñado para la evaluación precisa de pacientes adultos y pediátricos en entornos clínicos no críticos. El Littmann Classic III permite detectar sonidos normales y anormales del corazón y los pulmones con alta fidelidad acústica, siendo ideal para consultorios médicos, salas generales, OB/GYN, clínicas ambulatorias y servicios de urgencias. Su diseño liviano, colores vibrantes y fabricación en Estados Unidos lo convierten en un estándar de referencia para profesionales de la salud.",

  brand: "3M",
  type: "estetoscopio",

  image: "/images/diagnostico/LITTMAN 3M/LITTMAN.png",


  attributes: [
    {
      id: "color",
      label: "Color",
      type: "single",
      values: [
        { id: "negro", label: "Negro" },
        { id: "azul-marino", label: "Azul marino" },
        { id: "azul-cielo", label: "Azul cielo" },
        { id: "azul-caribe", label: "Azul caribe" },
        { id: "borgona", label: "Borgoña" },
        { id: "ciruela", label: "Ciruela" },
        { id: "lavanda", label: "Lavanda" },
        { id: "rosa-perla", label: "Rosa perla" },
        { id: "rosa-champan", label: "Rosa champán" },
        { id: "frambuesa", label: "Frambuesa" },
        { id: "verde-lima", label: "Verde lima" },
        { id: "turquesa", label: "Turquesa" }
      ]
    }
  ],


  variants: [
    {
      sku: "LITT-CL3-NEGRO",
      attrs: { color: "negro" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-NEGRO.png"
    },
    {
      sku: "LITT-CL3-AZUL-MARINO",
      attrs: { color: "azul-marino" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-AZULMARINO.png"
    },
    {
      sku: "LITT-CL3-AZUL-CIELO",
      attrs: { color: "azul-cielo" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-AZULCIELO.png"
    },
    {
      sku: "LITT-CL3-AZUL-CARIBE",
      attrs: { color: "azul-caribe" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-CARIBE.png"
    },
    {
      sku: "LITT-CL3-BORGONA",
      attrs: { color: "borgona" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-BORGONA.png"
    },
    {
      sku: "LITT-CL3-CIRUELA",
      attrs: { color: "ciruela" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-CIRUELA.png"
    },
    {
      sku: "LITT-CL3-LAVANDA",
      attrs: { color: "lavanda" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-VIOLETASUAVE.png"
    },
    {
      sku: "LITT-CL3-ROSA-PERLA",
      attrs: { color: "rosa-perla" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSAPERLA.png"
    },
    {
      sku: "LITT-CL3-ROSA-CHAMPAN",
      attrs: { color: "rosa-champan" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSACHAMPAGNE.png"
    },
    {
      sku: "LITT-CL3-FRAMBUESA",
      attrs: { color: "frambuesa" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSAINTENSO.png"
    },
    {
      sku: "LITT-CL3-VERDE-LIMA",
      attrs: { color: "verde-lima" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-AMARILLONEON.png"
    },
    {
      sku: "LITT-CL3-TURQUESA",
      attrs: { color: "turquesa" },
      price: 450,
      image: "/images/diagnostico/LITTMAN 3M/LITTMAN-TURQUESA.png"
    }
  ]
},


 {
  id: "riester-big-ben",
  name: "TENSIÓMETROS RIESTER BIG BEN",
  description:
    "Tensiómetros aneroides profesionales Riester Big Ben, disponibles en versiones de mesa, pared y pedestal, con manómetro redondo o cuadrado y brazaletes clínicos para uso pediátrico, adulto y adulto grande.",
  brand: "RIESTER",
  type: "tensiometro",
  image: "/images/diagnostico/BIG BEN/FAMILIA.png",


  attributeOrder: ["instalacion", "forma", "brazalete"],

    priceRange: {
    min: 650,
    max: 1470
  },

  attributes: [
    {
      id: "instalacion",
      label: "Tipo de instalación",
      type: "single",
      values: [
        { id: "mesa", label: "Mesa" },
        { id: "pared", label: "Pared" },
        { id: "pedestal", label: "Pedestal" }
      ]
    },
    {
      id: "forma",
      label: "Forma del manómetro",
      type: "single",
      values: [
        { id: "redondo", label: "Redondo" },
        { id: "cuadrado", label: "Cuadrado" }
      ]
    },
    {
      id: "brazalete",
      label: "Tamaño del brazalete",
      type: "single",
      values: [
        { id: "pediatrico", label: "Pediátrico" },
        { id: "adulto", label: "Adulto" },
        { id: "adulto-grande", label: "Adulto grande" }
      ]
    }
  ],

  variants: [
    // ======================
    // MESA – REDONDO
    // ======================
    {
      sku: "1453",
      attrs: { instalacion: "mesa", forma: "redondo", brazalete: "adulto" },
      price: 650,
      image: "/images/diagnostico/BIG BEN/1453-REDONDO-MESA.png"
    },
    {
      sku: "1453-123",
      attrs: { instalacion: "mesa", forma: "redondo", brazalete: "adulto-grande" },
      price: 650,
      image: "/images/diagnostico/BIG BEN/1453-REDONDO-MESA.png"
    },
    {
      sku: "1453-130",
      attrs: { instalacion: "mesa", forma: "redondo", brazalete: "pediatrico" },
      price: 650,
      image: "/images/diagnostico/BIG BEN/1453-REDONDO-MESA.png"
    },

    // ======================
    // MESA – CUADRADO
    // ======================
    {
      sku: "1456",
      attrs: { instalacion: "mesa", forma: "cuadrado", brazalete: "adulto" },
      price: 700,
      image: "/images/diagnostico/BIG BEN/1456-CUADRADO-MESA.png"
    },
    {
      sku: "1456-123",
      attrs: { instalacion: "mesa", forma: "cuadrado", brazalete: "adulto-grande" },
      price: 700,
      image: "/images/diagnostico/BIG BEN/1456-CUADRADO-MESA.png"
    },
    {
      sku: "1456-130",
      attrs: { instalacion: "mesa", forma: "cuadrado", brazalete: "pediatrico" },
      price: 700,
      image: "/images/diagnostico/BIG BEN/1456-CUADRADO-MESA.png"
    },

    // ======================
    // PARED – REDONDO
    // ======================
    {
      sku: "1459",
      attrs: { instalacion: "pared", forma: "redondo", brazalete: "adulto" },
      price: 800,
      image: "/images/diagnostico/BIG BEN/1459-REDONDO-PARED.png"
    },
    {
      sku: "1459-123",
      attrs: { instalacion: "pared", forma: "redondo", brazalete: "adulto-grande" },
      price: 800,
      image: "/images/diagnostico/BIG BEN/1459-REDONDO-PARED.png"
    },
    {
      sku: "1459-130",
      attrs: { instalacion: "pared", forma: "redondo", brazalete: "pediatrico" },
      price: 800,
      image: "/images/diagnostico/BIG BEN/1459-REDONDO-PARED.png"
    },

    // ======================
    // PARED – CUADRADO
    // ======================
    {
      sku: "1465",
      attrs: { instalacion: "pared", forma: "cuadrado", brazalete: "adulto" },
      price: 900,
      image: "/images/diagnostico/BIG BEN/1465-CUADRADO-PARED.png"
    },
    {
      sku: "1465-123",
      attrs: { instalacion: "pared", forma: "cuadrado", brazalete: "adulto-grande" },
      price: 900,
      image: "/images/diagnostico/BIG BEN/1465-CUADRADO-PARED.png"
    },
    {
      sku: "1465-130",
      attrs: { instalacion: "pared", forma: "cuadrado", brazalete: "pediatrico" },
      price: 900,
      image: "/images/diagnostico/BIG BEN/1465-CUADRADO-PARED.png"
    },

    // ======================
    // PEDESTAL – REDONDO
    // ======================
    {
      sku: "1468",
      attrs: { instalacion: "pedestal", forma: "redondo", brazalete: "adulto" },
      price: 1450,
      image: "/images/diagnostico/BIG BEN/1468-REDONDO-PEDESTAL.png"
    },
    {
      sku: "1468-123",
      attrs: { instalacion: "pedestal", forma: "redondo", brazalete: "adulto-grande" },
      price: 1460,
      image: "/images/diagnostico/BIG BEN/1468-REDONDO-PEDESTAL.png"
    },
    {
      sku: "1468-130",
      attrs: { instalacion: "pedestal", forma: "redondo", brazalete: "pediatrico" },
      price: 1470,
      image: "/images/diagnostico/BIG BEN/1468-REDONDO-PEDESTAL.png"
    },

    // ======================
    // PEDESTAL – CUADRADO
    // ======================
    {
      sku: "1478",
      attrs: { instalacion: "pedestal", forma: "cuadrado", brazalete: "adulto" },
      price: 1450,
      image: "/images/diagnostico/BIG BEN/1478-CUADRADO-PEDESTAL.png"
    },
    {
      sku: "1478-123",
      attrs: { instalacion: "pedestal", forma: "cuadrado", brazalete: "adulto-grande" },
      price: 1460,
      image: "/images/diagnostico/BIG BEN/1478-CUADRADO-PEDESTAL.png"
    },
    {
      sku: "1478-130",
      attrs: { instalacion: "pedestal", forma: "cuadrado", brazalete: "pediatrico" },
      price: 1470,
      image: "/images/diagnostico/BIG BEN/1478-CUADRADO-PEDESTAL.png"
    }
  ]
},


  {
  "id": "riester-ri-pen",
  "name": "Linterna diagnóstica Riester ri-pen® LED",
  "description":
    "Linterna diagnóstica tipo lapicero diseñada para la evaluación clínica de pupilas y exploración general en entornos médicos. El ri-pen® de Riester ofrece una iluminación LED potente, homogénea y libre de radiación UV, validada fotobiológicamente para el examen pupilar según la norma EN 62471. Incorpora un medidor de pupilas de 2 mm a 9 mm y una regla integrada de 8 cm, convirtiéndola en una herramienta práctica y precisa para consultorios, hospitales y servicios de urgencias. Su carcasa de aluminio con clip metálico garantiza durabilidad y portabilidad en el uso diario.",
  brand: "RIESTER",
    
  image: "/images/diagnostico/RI-PEN/RI-PEN.png",


  // =========================
  // ATTRIBUTES (SOLO SELECTORES)
  // =========================
  "attributes": [
    {
      "id": "color",
      "label": "Color",
      "type": "single",
      "values": [
        { "id": "negro", "label": "Negro 5075-526" },
        { "id": "plateado", "label": "Plateado 5074-526" },
        { "id": "rojo", "label": "Rojo 5077-526" },
        { "id": "azul", "label": "Azul 5071-526" },
        { "id": "purpura", "label": "Púrpura 5078-526" },
        { "id": "verde", "label": "Verde 5076-526" }
      ]
    }
  ],

  // =========================
  // VARIANTS (SKU-BASED)
  // =========================
  "variants": [
    {
      "sku": "RIE-RIPEN-5075-526",
      "attrs": { "color": "negro" },
      "price": 60,
      "image": "/images/diagnostico/RI-PEN/BLACK 5075-526.png"
    },
    {
      "sku": "RIE-RIPEN-5074-526",
      "attrs": { "color": "plateado" },
      "price": 60,
      "image": "/images/diagnostico/RI-PEN/SILVER 5074-526.png"
    },
    {
      "sku": "RIE-RIPEN-5077-526",
      "attrs": { "color": "rojo" },
      "price": 60,
      "image": "/images/diagnostico/RI-PEN/RED 5077-526.png"
    },
    {
      "sku": "RIE-RIPEN-5071-526",
      "attrs": { "color": "azul" },
      "price": 60,
      "image": "/images/diagnostico/RI-PEN/BLUE 5071-526.png"
    },
    {
      "sku": "RIE-RIPEN-5078-526",
      "attrs": { "color": "purpura" },
      "price": 60,
      "image": "/images/diagnostico/RI-PEN/PURPLE 5078-526.png"
    },
    {
      "sku": "RIE-RIPEN-5072-526",
      "attrs": { "color": "verde" },
      "price": 60,
      "image": "/images/diagnostico/RI-PEN/GREEN 5072-526.png"
    }
  ],

},

{
  id: "riester-otoscopios",
  name: "Otoscopios Riester",
  description:
    "Otoscopios Riester diseñados para la exploración del conducto auditivo externo y la evaluación clínica ORL. Incluye modelos pocket y clínicos con tecnologías de iluminación por fibra óptica LED y xenón, adaptándose a diferentes niveles de uso médico.",
    brand: "RIESTER",
  
  image: "/images/diagnostico/RIESTER-OTOSCOPIOS/conjunto.png",

  attributeOrder: ["familia", "iluminacion"],

  attributes: [
    {
      id: "familia",
      label: "Familia",
      type: "single",
      values: [
        { id: "e-scope", label: "e-scope®" },
        { id: "ri-mini", label: "ri-mini®" },
        { id: "ri-scope-l2", label: "ri-scope® L2" },
        { id: "ri-scope-l3", label: "ri-scope® L3" }
      ]
    },
    {
      id: "iluminacion",
      label: "Iluminación",
      type: "single",
      values: [
        { id: "fo-led-3-7v", label: "F.O. LED 3.7V" },
        { id: "fo-led-3-5v", label: "F.O. LED 3.5V" },
        { id: "fo-xenon-2-5v", label: "F.O. Xenón 2.5V" },
         { id: "fo-xenon-3-5v", label: "F.O. Xenón 3.5V" }
      ]
    }
  ],

  variants: [
    // -------------------------
    // E-SCOPE
    // -------------------------
    {
      sku: "2111-203",
      attrs: {
        familia: "e-scope",
        iluminacion: "fo-led-3-7v"
      },
      price: 2000,
      images: [
        "/images/diagnostico/RIESTER-OTOSCOPIOS/E-SCOPE2111-203.png",
        "/images/diagnostico/RIESTER-OTOSCOPIOS/E-SCOPE-CAJA.png"
      ],
      variantLabel: "e-scope® Otoscopio F.O. LED 3.7V (2111-203)"
    },
    {
      sku: "2111-203-XE",
      attrs: {
        familia: "e-scope",
        iluminacion: "fo-xenon-2-5v"
      },
      price: 1500,
     images: [
        "/images/diagnostico/RIESTER-OTOSCOPIOS/E-SCOPE2111-202.png",
        "/images/diagnostico/RIESTER-OTOSCOPIOS/E-SCOPE-CAJA.png"
      ],
      variantLabel: "e-scope® Otoscopio F.O. Xenón 2.5V"
    },

    // -------------------------
    // RI-MINI
    // -------------------------
    {
      sku: "3010",
      attrs: {
        familia: "ri-mini",
        iluminacion: "fo-xenon-2-5v"
      },
      price: 1000,
      images: [
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-MINI3010.png",
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-MINI-CAJA.png"
      ],
      variantLabel: "ri-mini® Otoscopio F.O. Xenón 2.5V (3010)"
    },

    // -------------------------
    // RI-SCOPE L2
    // -------------------------
    {
      sku: "10565",
      attrs: {
        familia: "ri-scope-l2",
        iluminacion: "fo-led-3-5v"
      },
      price: 2000,
      images: [
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-3.5.png",
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      ],
      variantLabel: "ri-scope® L2 Otoscopio F.O. LED 3.5V (10565)"
    },
    {
      sku: "10582",
      attrs: {
        familia: "ri-scope-l2",
        iluminacion: "fo-xenon-2-5v"
      },
      price: 2000,
            images: [
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-3.5.png",
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      ],
      variantLabel: "ri-scope® L2 Otoscopio F.O. Xenón 2.5V (10582)"
    },

     {
      sku: "10580",
      attrs: {
        familia: "ri-scope-l2",
        iluminacion: "fo-xenon-3-5v"
      },
      price: 2000,
            images: [
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-3.5.png",
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      ],
      variantLabel: "ri-scope® L2 Otoscopio F.O. Xenón 3.5V (10580)"
    },

    // -------------------------
    // RI-SCOPE L3
    // -------------------------
    {
      sku: "10567",
      attrs: {
        familia: "ri-scope-l3",
        iluminacion: "fo-led-3-5v"
      },
      price: 3000,
                  images: [
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-3.5.png",
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      ],
      variantLabel: "ri-scope® L3 Otoscopio F.O. LED 3.5V (10567)"
    },
    {
      sku: "10583",
      attrs: {
        familia: "ri-scope-l3",
        iluminacion: "fo-xenon-2-5v"
      },
      price: 3000,
                  images: [
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-3.5.png",
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      ],
      variantLabel: "ri-scope® L3 Otoscopio F.O. Xenón 2.5V (10583)"
    },
    {
      sku: "10581",
      attrs: {
        familia: "ri-scope-l3",
        iluminacion: "fo-xenon-3-5v"
      },
      price: 3000,
                  images: [
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-3.5.png",
        "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      ],
      variantLabel: "ri-scope® L3 Otoscopio F.O. Xenón 3.5V (10581)"
      }
  ]
},

{
  id: "ri-champion-1725",
  name: "TENSIÓMETRO RIESTER RI-CHAMPION 1725-145",
  description:
    "Tensiómetro aneroide profesional Riester ri-champion® 1725, diseñado para mediciones precisas de la presión arterial en entornos clínicos y consultorios médicos. Cuenta con manómetro de alta calidad, construcción robusta y confiabilidad alemana para uso médico continuo.",
    brand: "RIESTER",
    type: "tensiometro",
  image: "/images/diagnostico/RI-CHAMPION/RI-CHAMPION.png",

 
  price: 450
},
{
  id: "riester-ri-digital-1851",
  name: "Termómetro Digital RI-DIGITAL",
  description:
    "Termómetro digital Riester RI-DIGITAL diseñado para mediciones rápidas y precisas de la temperatura corporal. Ideal para uso clínico y domiciliario, ofrece lectura clara en pantalla digital y operación sencilla, garantizando fiabilidad en la medición diaria.",
    brand: "RIESTER",
    type: "termometro",
  image: "/images/diagnostico/RI-DIGITAL/1851.png",

  price: 70,


},

{
  id: "omron-246la",
  name: "Termómetro Digital OMRON 246LA",
  description:
    "Termómetro digital OMRON 246LA diseñado para mediciones rápidas y precisas de la temperatura corporal. Adecuado para uso clínico y domiciliario, cuenta con pantalla digital de fácil lectura y operación sencilla para un control confiable de la salud.",
    brand: "OMRON",
    type: "termometro",
  image: "/images/diagnostico/OMRON TERMO/246.png",

  price: 40,
},

{
  id: "beurer-ft90",
  name: "Termómetro Digital Beurer FT-90",
  description:
    "Termómetro infrarrojo Beurer FT-90 para medición rápida y sin contacto de la temperatura corporal, ambiental y de superficies. Ideal para uso clínico y domiciliario, ofrece lectura instantánea, pantalla digital clara y operación intuitiva.",
    brand: "BEURER",
    type: "termometro",
  image: "/images/diagnostico/BEURER FT90/FT90.png",

  price: 280,
},

{
  id: "deltatrak-15051",
  name: "Termómetro de sonda DeltaTrak",
  description:
    "Termómetro de sonda plegable impermeable DeltaTrak 15051, ideal para medición rápida y precisa de temperaturas internas en alimentos. Cuenta con sonda plegable de acero inoxidable ajustable 0°-180° para seguridad y flexibilidad, pantalla LCD de doble escala retroiluminada y funciones de retención, mínimo/máximo y cambio °F/°C. Resistente al agua (IP67), desinfectable y conforme al Código de Alimentos de la FDA 4-203.11, es perfecto para la industria alimentaria y entornos exigentes.",
  type: "termometro",
  image: "/images/diagnostico/DELTATRAK/15051.png",

  price: 400,
},

{
  id: "thermapen-ir-228065",
  name: "Termómetro de Sonda Thermapen",
  description:
    "Thermapen IR, termómetro infrarrojo profesional con sonda plegable diseñado para ofrecer lecturas de temperatura altamente precisas y rápidas. Combina medición sin contacto con sonda retráctil para mayor versatilidad en aplicaciones alimentarias, industriales y médicas. Cuenta con pantalla digital clara, ergonomía premium y respuesta ultrarrápida para mediciones confiables en segundos.",
  type: "termometro",
  image: "/images/diagnostico/THERMAPEN/228065.png",

  price: 1000,
},



{
  id: "contec-tp500",
  name: "Termómetro Infrarrojo CONTEC TP500",
  description:
    "Termómetro infrarrojo digital CONTEC TP500 para medición rápida y sin contacto de la temperatura corporal. Ideal para uso clínico, domiciliario e institucional, ofrece lectura instantánea, pantalla digital clara y operación sencilla.",
  type: "termometro",
  image: "/images/diagnostico/CONTEC TP500/TP500.png",

  price: 80,
},

{
  id: "riester-shock-proof-1364",
  name: "Tensiómetro Shock-N-Proof Riester",
  description:
    "Esfigmomanómetro aneroide profesional Riester precisa® N shock-proof, diseñado para mediciones precisas de la presión arterial en entornos clínicos exigentes. Resistente a golpes y caídas desde 1 metro, conforme a la norma DIN EN 81060-1. Incluye válvula de liberación de aire de precisión, microfiltro protector y escala inclinada de fácil lectura.",
    brand: "RIESTER",
    type: "Tensiometros",
  image: "/images/diagnostico/SHOCK PROOF/base.png",

  priceRange: { min: 400, max: 500 },

  attributes: [
    {
      id: "configuration",
      label: "Configuración",
      type: "single",
      values: [
        { id: "set-babyphon", label: "Recién nacido, lactante e infante 1364" },
        { id: "adulto", label: "Adulto 1364-107" },
        { id: "adulto-grande", label: "Adulto grande 1364-122" },
        { id: "pediatrico", label: "Pediatrico 1364-129" }
      ]
    }
  ],

  variants: [
    {
      sku: "RIESTER-1364",
      attrs: { configuration: "set-babyphon" },
      price: 400,
      image: "/images/diagnostico/SHOCK PROOF/1364.png"
    },
    {
      sku: "RIESTER-1364-107",
      attrs: { configuration: "adulto" },
      price: 450,
      image: "/images/diagnostico/SHOCK PROOF/1364-107.png"
    },
    {
      sku: "RIESTER-1364-122",
      attrs: { configuration: "adulto-grande" },
      price: 480,
      image: "/images/diagnostico/SHOCK PROOF/1364-122.png"
    },
    {
      sku: "RIESTER-1364-129",
      attrs: { configuration: "pediatrico" },
      price: 500,
      image: "/images/diagnostico/SHOCK PROOF/1364-129.png"
    }
  ]
},

];
