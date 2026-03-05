export const diagnosticoYMedicionProducts = [

  {
    id: "balanzas-pediatricas",
    name: "BALANZAS PEDIÁTRICAS",
    type: "Balanzas",

    image: "/images/diagnostico/CARDS/PEDIATRICAS.png",

    attributeOrder: ["modelo", "accesorios"],

    priceRange: {
      min: 750,
      max: 4700
    },

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "seca-334", label: "SECA 334" },
          { id: "seca-354", label: "SECA 354" },
          { id: "seca-374", label: "SECA 374" },
          { id: "seca-725", label: "SECA 725" },
          { id: "rice-lake-rl-dbs", label: "RICE LAKE RL-DBS" },
          { id: "rice-lake-rl-mis", label: "RICE LAKE RL-MIS" }
        ]
      },
      {
        id: "accesorios",
        label: "Accesorios",
        type: "multi",
        values: [
          {
            id: "mochila-428", label: "Mochila SECA 428", name: "Mochila SECA 428", priceDelta: 400, compatibleWith: ["seca-334"], images:
              [
                "/images/diagnostico/SECA 428/seca428-1.png",
                "/images/diagnostico/SECA 428/seca428-2.png"
              ]
          },
          {
            id: "adaptador-447", label: "Adaptador SECA 447", name: "Adaptador SECA 447", priceDelta: 400, compatibleWith: ["seca-334"], images:
              [
                "/images/diagnostico/SECA 447/seca447.png"
              ]
          },
          {
            id: "adaptador-400", label: "Adaptador SECA 400", name: "Adaptador SECA 400", priceDelta: 400, compatibleWith: ["seca-334", "seca-374"], images:
              [
                "/images/diagnostico/SECA 400/seca400.png"
              ]
          },
          {
            id: "tope-419", label: "Tope SECA 419", name: "Tope SECA 419", priceDelta: 400, compatibleWith: ["seca-334"], images:
              [
                "/images/diagnostico/SECA 419/seca419.png"
              ]
          },
          {
            id: "tallimetro-232", label: "Tallimetro SECA 232", name: "Tallimetro SECA 232", priceDelta: 400, compatibleWith: ["seca-334"], images:
              [
                "/images/diagnostico/SECA 232/seca232-1.png",
                "/images/diagnostico/SECA 232/seca232-2.png"
              ]
          },
          {
            id: "mochila-413", label: "Mochila SECA 413", name: "Mochila SECA 413", priceDelta: 400, compatibleWith: ["seca-354"], images:
              [
                "/images/diagnostico/SECA 413/seca413-1.png",
                "/images/diagnostico/SECA 413/seca413-2.png",
                "/images/diagnostico/SECA 413/seca413-3.png"
              ]
          },
          {
            id: "tallimetro-233", label: "Infantometro SECA 233", name: "Infantometro SECA 233", priceDelta: 400, compatibleWith: ["seca-374"], images:
              [
                "/images/diagnostico/SECA 233/seca233-1.png",
                "/images/diagnostico/SECA 233/seca233-2.png"
              ]
          },
          {
            id: "tope-418", label: "Topes SECA 418", name: "Topes SECA 418", priceDelta: 400, compatibleWith: ["seca-374"], images:
              [
                "/images/diagnostico/SECA 418/seca418-1.png",
                "/images/diagnostico/SECA 418/seca418-2.png"
              ]
          }
        ]
      }
    ],

    variants: [
      {
        sku: "SECA-334",
        attrs: { modelo: "seca-334" },
        name: "Balanza Pediátrica SECA 334",
        description: "Balanza pediátrica digital con **bandeja curva plegable** que permite pesar al bebé en posición acostada o sentada. **Capacidad de 20 kg con precisión de 10 g**. Función Tara/Hold para pesaje incluso con bebés en movimiento. Compatible con accesorios SECA como tallímetro integrado, mochila de transporte y adaptador de corriente. Diseñada para trabajo en campo y visitas domiciliarias.",
        brand: "SECA",
        type: "balanza",
        price: 750,
        images:
          [
            "/images/diagnostico/SECA 334/seca334.png"
          ]
      },
      {
        sku: "SECA-354",
        attrs: { modelo: "seca-354" },
        name: "Balanza Pediátrica SECA 354",
        description: "Balanza pediátrica digital de **bandeja transparente extra-ancha** que facilita la supervisión visual del bebé durante el pesaje. **Capacidad de 20 kg con precisión de 10 g**. Diseño ergonómico con bordes protectores elevados y apoyabrazos integrados. Compatible con mochila de transporte SECA 413 para trabajo de campo. Ideal para controles de crecimiento en consultorios pediátricos.",
        brand: "SECA",
        type: "balanza",
        price: 900,
        images:
          [
            "/images/diagnostico/SECA 354/seca354-1.png"
          ]
      },
      {
        sku: "SECA-374",
        attrs: { modelo: "seca-374" },
        name: "Balanza Pediátrica SECA 374",
        description: "xxx",
        brand: "SECA",
        type: "balanza",
        price: 1020,
        images:
          [
            "/images/diagnostico/SECA 374/seca374.png"
          ]
      },
      {
        sku: "SECA-725",
        attrs: { modelo: "seca-725" },
        name: "Balanza Pediátrica SECA 725",
        description: "xxx",
        brand: "SECA",
        type: "balanza",
        price: 4700,
        images:
          [
            "/images/diagnostico/SECA 725/seca725-1.png"
          ]
      },
      {
        sku: "RL-DBS",
        attrs: { modelo: "rice-lake-rl-dbs" },
        name: "Balanza Pediátrica RICE LAKE RL-DBS",
        description: "xxx",
        brand: "RICE LAKE",
        type: "balanza",
        price: 1440,
        images:
          [
            "/images/diagnostico/RICE LAKE RL-DBS/RLDBS.png"
          ]
      },
      {
        sku: "RL-MIS",
        attrs: { modelo: "rice-lake-rl-mis" },
        name: "Balanza Pediátrica RICE LAKE RL-MIS",
        description: "xxx",
        brand: "RICE LAKE",
        type: "balanza",
        price: 1200,
        images:
          [
            "/images/diagnostico/RICE LAKE RL-MIS/RLMIS.png"
          ]
      }
    ],

    rules: {
      incompatible: [
        ["adaptador-447", "adaptador-400"],
        ["tope-419", "tallimetro-232"],
        ["tallimetro-233", "tope-418"]
      ]
    }
  },

  {
    id: "balanzas-adulto",
    name: "BALANZAS ADULTO",
    type: "Balanzas",

    image: "/images/diagnostico/CARDS/ADULTO.png",

    attributeOrder: ["modelo", "accesorios"],

    priceRange: {
      min: 890,
      max: 3600
    },

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "seca-700", label: "SECA 700" },
          { id: "seca-703", label: "SECA 703" },
          { id: "seca-777", label: "SECA 777 C/TALLIMETRO" },
          { id: "reybal-rbd300k", label: "REYBAL RBD300K" },
          { id: "cms-tcs200lp", label: "CMS TCS200LP" },
          { id: "rice-lake-150-10-5", label: "RICE LAKE 150-10-5" },
          { id: "tscale-m301", label: "TSCALE M301" }
        ]
      },
      {
        id: "accesorios",
        label: "Accesorios",
        type: "multi",
        values: [
          {
            id: "tallimetro-220", label: "Tallimetro SECA 220", name: "Tallimetro SECA 220", priceDelta: 400, compatibleWith: ["seca-700", "seca-703"], images:
              [
                "/images/diagnostico/SECA 220/seca700-tallimetro-2.png"
              ]
          },
          {
            id: "adaptador-401", label: "Adaptador SECA 401", name: "Adaptador SECA 401", priceDelta: 400, compatibleWith: ["seca-777"], images:
              [
                "/images/diagnostico/SECA 401/seca401.png"
              ]
          },
          {
            id: "oso-panda-459", label: "Oso Panda SECA 459", name: "Oso Panda SECA 459", priceDelta: 400, compatibleWith: ["seca-777"], images:
              [
                "/images/diagnostico/SECA 459/seca459-1.png",
                "/images/diagnostico/SECA 459/seca459-2.png"
              ]
          }
        ]
      }
    ],

    variants: [
      {
        sku: "SECA-700",
        attrs: { modelo: "seca-700" },
        name: "Balanza Adulto SECA 700",
        description: "xxx",
        brand: "SECA",
        type: "balanza",
        price: 890,
        images:
          [
            "/images/diagnostico/SECA 700/seca700-1.png",
            "/images/diagnostico/SECA 700/seca700-2.png"
          ]
      },
      {
        sku: "SECA-703",
        attrs: { modelo: "seca-703" },
        name: "Balanza Adulto SECA 703",
        description: "xxx",
        brand: "SECA",
        type: "balanza",
        price: 2160,
        images:
          [
            "/images/diagnostico/SECA 703/seca703-1.png",
            "/images/diagnostico/SECA 703/seca703-2.png"
          ]
      },
      {
        sku: "SECA-777",
        attrs: { modelo: "seca-777" },
        name: "Balanza Adulto SECA 777 con Tallimetro",
        description: "xxx",
        brand: "SECA",
        type: "balanza",
        price: 2400,
        images:
          [
            "/images/diagnostico/SECA 777/seca777-1.png",
            "/images/diagnostico/SECA 777/seca777-2.png"
          ]
      },
      {
        sku: "REYBAL-RBD300K",
        attrs: { modelo: "reybal-rbd300k" },
        name: "Balanza Adulto REYBAL RBD300K",
        description: "xxx",
        brand: "REYBAL",
        type: "balanza",
        price: 1440,
        images:
          [
            "/images/diagnostico/REYBAL RBD300K/REYBAL.png"
          ]
      },
      {
        sku: "CMS-TCS200LP",
        attrs: { modelo: "cms-tcs200lp" },
        name: "Balanza Adulto CMS TCS200LP",
        description: "xxx",
        brand: "CMS",
        type: "balanza",
        price: 1800,
        images:
          [
            "/images/diagnostico/CMS TCS200LP/TCS200LP.png"
          ]
      },
      {
        sku: "RL-150-10-5",
        attrs: { modelo: "rice-lake-150-10-5" },
        name: "Balanza Adulto RICE LAKE 150-10-5",
        description: "xxx",
        brand: "RICE LAKE",
        type: "balanza",
        price: 2400,
        images:
          [
            "/images/diagnostico/RICE LAKE 150-10-5/RL150105-1.png",
            "/images/diagnostico/RICE LAKE 150-10-5/RL150105-2.png"
          ]
      },
      {
        sku: "TSCALE-M301",
        attrs: { modelo: "tscale-m301" },
        name: "Balanza Adulto TSCALE M301",
        description: "Balanza digital de columna **compacta y ergonómica, diseñada para consultorios de espacio reducido**. **Capacidad de 200 kg con precisión de 50 g**. Pantalla LCD extragrande con iluminación posterior, función kilo/libra y memoria de último pesaje. Cuatro patas de nivelación ajustables y superficie de acero inoxidable de fácil limpieza. Ideal para clínicas de atención primaria y centros de diagnóstico.",
        brand: "TSCALE",
        type: "balanza",
        price: 1680,
        images:
          [
            "/images/diagnostico/TSCALE M301/TSCALE-1.png",
            "/images/diagnostico/TSCALE M301/TSCALE-2.png"
          ]
      }
    ]
  },
  {
    id: "balanzas-de-plataforma",
    name: "BALANZAS DE PLATAFORMA",
    type: "Balanzas",

    image: "/images/diagnostico/CARDS/PLATAFORMA.png",

    attributeOrder: ["modelo", "color"],

    priceRange: {
      min: 95,
      max: 530
    },

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "seca-803", label: "SECA 803" },
          { id: "seca-813", label: "SECA 813" },
          { id: "omron-hbf-514c", label: "OMRON HBF-514C" },
          { id: "beurer-ps160", label: "BEURER PS160" },
          { id: "gramera-generica-10kg", label: "BALANZA GRAMERA 10 KG" }
        ]
      },
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "blanco", label: "Blanco" },
          { id: "negro", label: "Negro" }
        ]
      }
    ],

    variants: [
      {
        sku: "SECA-803-W",
        attrs: { modelo: "seca-803", color: "blanco" },
        name: "Balanza de Plataforma SECA 803 Blanco",
        description: "xxx",
        brand: "SECA",
        type: "balanza",
        price: 450,
        images: [
          "/images/diagnostico/SECA 803/seca803-3.png"
        ]
      },
      {
        sku: "SECA-803-B",
        attrs: { modelo: "seca-803", color: "negro" },
        name: "Balanza de Plataforma SECA 803 Negro",
        description: "Báscula personal electrónica SECA 803 en acabado **negro con plataforma de vidrio templado de alta resistencia**. **Capacidad de 200 kg con precisión de 100 g**. Función de encendido automático por pisada, pantalla LCD de dígitos gran formato y apagado automático de ahorro de energía. Superficie tratada antideslizante para mayor seguridad. Diseño plano minimalista de alta estética para consultorios modernos.",
        brand: "SECA",
        type: "balanza",
        price: 450,
        images: [
          "/images/diagnostico/SECA 803/seca803-1.png"
        ]
      },
      {
        sku: "SECA-813",
        attrs: { modelo: "seca-813" },
        name: "Balanza de Plataforma SECA 813",
        description: "Báscula personal de **alta capacidad con plataforma rectangular extragrande** para mayor estabilidad y comodidad. **Capacidad de 220 kg con precisión de 100 g**. Pantalla LCD de gran tamaño con retroiluminación, función Hold para lectura congelada y memoria de último pesaje. Construcción robusta en ABS de alto impacto, con cuatro sensores de carga de precisión distribuidos para una medición uniforme.",
        brand: "SECA",
        type: "balanza",
        price: 530,
        images: [
          "/images/diagnostico/SECA 813/seca813-1.png"
        ]
      },
      {
        sku: "OMRON-HBF-514C",
        attrs: { modelo: "omron-hbf-514c" },
        name: "Balanza de Plataforma OMRON HBF-514C",
        description: "Monitor de composición corporal con báscula integrada que mide **grasa corporal, grasa visceral, masa muscular, agua corporal e IMC** en una sola lectura. **Capacidad de 150 kg con precisión de 100 g**. Tecnología BIA de 4 electrodos con frecuencia de 50 kHz. Memoria para 4 usuarios, pantalla LCD multisegmento y software de seguimiento incluido. Diferenciador clave respecto a básculas convencionales: clasifica el estado físico en Normal vs Atlético.",
        brand: "OMRON",
        type: "balanza",
        price: 210,
        images: [
          "/images/diagnostico/OMROM HBF/OMRON.png"
        ]
      },
      {
        sku: "BEURER-PS160",
        attrs: { modelo: "beurer-ps160" },
        name: "Balanza de Plataforma BEURER PS160",
        description: "Báscula personal de vidrio con **diseño ultradelgado premium y pantalla LCD retroiluminada de fácil lectura**. **Capacidad de 180 kg con precisión de 100 g**. Tecnología Step-on de encendido instantáneo por pisada, sin demoras ni presionar botones. Superficie de vidrio templado de seguridad con garantía anti-rotura. Funciones de cambio kg/lb/st y apagado automático. Ideal para uso domiciliario de alta gama y consultorios de estética.",
        brand: "BEURER",
        type: "balanza",
        price: 180,
        images: [
          "/images/diagnostico/BEURER PS160/BEURERPS160.png"
        ]
      },
      {
        sku: "GRAMERA-10KG",
        attrs: { modelo: "gramera-generica-10kg" },
        name: "Balanza Gramera Genérica 10 kg",
        description: "Balanza de precisión para pesaje de **muestras alimentarias, nutricionales e ingredientes farmacéuticos**. **Capacidad de 10 kg con precisión de 1 g**. Plataforma removible de acero inoxidable, pantalla LCD de lectura simultánea en múltiples unidades (g, kg, oz, lb). Función de tara dinámica, modo de conteo unitario y memorias de calibración guardadas. Ideal para laboratorios de nutrición, dietistas y dispensación de fórmulas.",
        brand: "GENÉRICA",
        type: "balanza",
        price: 95,
        images: [
          "/images/diagnostico/GRAMERA GEN/GRAMERAGEN.png"
        ]
      }
    ]
  },

  {
    id: "accesorios-seca",
    name: "ACCESORIOS SECA",
    type: "Accesorios-Seca",

    image: "/images/diagnostico/CARDS/ACCESORIOS.png",


    attributeOrder: ["categoria", "accesorio"],

    attributes: [

      {
        id: "categoria",
        label: "Tipo de accesorio",
        type: "single",
        values: [
          { id: "tallimetros", label: "Tallimetros" },
          { id: "adaptadores", label: "Adaptadores" },
          { id: "mochilas", label: "Mochilas" },
          { id: "topes", label: "Topes" },
          { id: "otros", label: "Otros" }
        ]
      },


      {
        id: "accesorio",
        label: "Accesorio",
        type: "single",
        values: [
          { id: "seca-220", label: "Tallimetro 220" },
          { id: "seca-232", label: "Tallimetro 232" },
          { id: "seca-233", label: "Tallimetro 233" },

          { id: "seca-400", label: "Adaptador 400" },
          { id: "seca-401", label: "Adaptador 401" },
          { id: "seca-447", label: "Adaptador 447" },

          { id: "seca-413", label: "Mochila 413" },
          { id: "seca-428", label: "Mochila 428" },

          { id: "seca-418", label: "Topes 418" },
          { id: "seca-419", label: "Topes 419" },

          { id: "seca-459", label: "Indicador 459" },
          { id: "seca-477", label: "Pasamanos 477" }
        ]
      }
    ],


    variants: [
      /* ---------- TALLMETROS ---------- */
      {
        sku: "seca-220",
        attrs: { categoria: "tallimetros", accesorio: "seca-220" },
        name: "TALLMETRO SECA 220",
        description:
          "Tallmetro clnico compatible con balanzas de columna SECA para medicin de estatura precisa en entornos mdicos.",
        price: 400,
        image: "/images/diagnostico/SECA 220/seca700-tallimetro-2.png"
      },
      {
        sku: "seca-232",
        attrs: { categoria: "tallimetros", accesorio: "seca-232" },
        name: "TALLMETRO SECA 232",
        description:
          "Accesorio para medicin de longitud corporal en pesabebs SECA 334.",
        price: 400,
        images:
          [
            "/images/diagnostico/SECA 232/seca232-1.png",
            "/images/diagnostico/SECA 232/seca232-2.png"
          ]
      },
      {
        sku: "seca-233",
        attrs: { categoria: "tallimetros", accesorio: "seca-233" },
        name: "TALLMETRO SECA 233",
        description:
          "Tallmetro peditrico para medicin de longitud corporal en balanzas pesabebs SECA.",
        price: 400,
        images:
          [
            "/images/diagnostico/SECA 233/seca233-1.png",
            "/images/diagnostico/SECA 233/seca233-2.png"
          ]
      },

      /* ---------- ADAPTADORES ---------- */
      {
        sku: "seca-400",
        attrs: { categoria: "adaptadores", accesorio: "seca-400" },
        name: "ADAPTADOR DE CORRIENTE SECA 400",
        description:
          "Adaptador de corriente original SECA para conexion a red electrica.",
        price: 400,
        image: "/images/diagnostico/SECA 400/seca400.png"
      },
      {
        sku: "seca-401",
        attrs: { categoria: "adaptadores", accesorio: "seca-401" },
        name: "ADAPTADOR DE CORRIENTE SECA 401",
        description:
          "Adaptador de corriente original SECA para balanzas SECA 777 y 787.",
        price: 400,
        image: "/images/diagnostico/SECA 401/seca401.png"
      },
      {
        sku: "seca-447",
        attrs: { categoria: "adaptadores", accesorio: "seca-447" },
        name: "ADAPTADOR DE CORRIENTE SECA 447",
        description:
          "Adaptador de corriente original SECA para equipos medicos compatibles.",
        price: 400,
        image: "/images/diagnostico/SECA 447/seca447.png"
      },

      /* ---------- MOCHILAS ---------- */
      {
        sku: "seca-413",
        attrs: { categoria: "mochilas", accesorio: "seca-413" },
        name: "MOCHILA DE TRANSPORTE SECA 413",
        description:
          "Mochila de transporte para balanzas pediatricas SECA.",
        price: 400,
        images:
          [
            "/images/diagnostico/SECA 413/seca413-1.png",
            "/images/diagnostico/SECA 413/seca413-2.png",
            "/images/diagnostico/SECA 413/seca413-3.png"
          ]
      },
      {
        sku: "seca-428",
        attrs: { categoria: "mochilas", accesorio: "seca-428" },
        name: "MOCHILA DE TRANSPORTE SECA 428",
        description:
          "Accesorio de transporte para infantometros SECA.",
        price: 400,
        images:
          [
            "/images/diagnostico/SECA 428/seca428-1.png",
            "/images/diagnostico/SECA 428/seca428-2.png"
          ]
      },

      /* ---------- TOPES ---------- */
      {
        sku: "seca-418",
        attrs: { categoria: "topes", accesorio: "seca-418" },
        name: "TOPES SECA 418",
        description:
          "Topes para pies y cabeza para pesabebes SECA.",
        price: 400,
        images:
          [
            "/images/diagnostico/SECA 418/seca418-1.png",
            "/images/diagnostico/SECA 418/seca418-2.png"
          ]
      },
      {
        sku: "seca-419",
        attrs: { categoria: "topes", accesorio: "seca-419" },
        name: "TOPE PARA CABEZA SECA 419",
        description:
          "Tope clinico para correcta posicion de la cabeza.",
        price: 400,
        image: "/images/diagnostico/SECA 419/seca419.png"
      },

      /* ---------- OTROS ---------- */
      {
        sku: "seca-459",
        attrs: { categoria: "otros", accesorio: "seca-459" },
        name: "INDICADOR DE LECTURA INFANTIL SECA 459",
        description:
          "Indicador clinico para medicion de parametros corporales.",
        price: 400,
        images:
          [
            "/images/diagnostico/SECA 459/seca459-1.png",
            "/images/diagnostico/SECA 459/seca459-2.png"
          ]
      },
      {
        sku: "seca-477",
        attrs: { categoria: "otros", accesorio: "seca-477" },
        name: "PASAMANOS SECA 477",
        description:
          "Pasamanos de apoyo para mayor estabilidad durante el pesaje.",
        price: 400,
        images:
          [
            "/images/diagnostico/SECA 477/seca477-1.png",
            "/images/diagnostico/SECA 477/seca477-2.png"
          ]
      }
    ]
  },

  {
    id: "infantometros-pediatricos-madera",
    name: "INFANTOMETROS Y TALLIMETROS DE MADERA",
    type: "Infantometros-y-Tallimetros",
    description:
      "Instrumentos antropometricos de madera diseñados para la medicion precisa de la longitud y estatura de niñas, niños y adultos en diferentes etapas de crecimiento. Incluye modelos específicos para menores de dos años, tallimetros móviles para menores de cinco años y versiones aptas para uso en población adulta. Los tres modelos están fabricados en triplay reforzado y cuentan con un diseño fácilmente transportables, manteniendo estabilidad, durabilidad y exactitud en entornos clínicos y trabajo de campo.",

    image: "/images/diagnostico/CARDS/INFANTOMETROS.png",

    attributeOrder: ["tipo", "accesorio"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo de infantometro",
        type: "single",
        values: [
          { id: "menores-2-anos", label: "110CM" },
          { id: "menores-5-anos", label: "132CM" },
          { id: "tallimetro-t2", label: "199CM" }
        ]
      },
      {
        id: "accesorio",
        label: "Accesorio",
        type: "single",
        values: [
          {
            id: "mochila-transporte",
            label: "Mochila para transporte"
          }
        ]
      }
    ],

    variants: [

      {
        attrs: {
          tipo: "menores-2-anos",
          accesorio: "mochila-transporte"
        },
        price: 400,
        images:
          [
            "/images/diagnostico/INFANTOMETROS MADERA/i2.png",
            "/images/diagnostico/INFANTOMETROS MADERA/MOCHILA.png"
          ]
      },
      {
        attrs: {
          tipo: "menores-5-anos",
          accesorio: "mochila-transporte"
        },
        price: 510,
        images:
          [
            "/images/diagnostico/INFANTOMETROS MADERA/t1.png",
            "/images/diagnostico/INFANTOMETROS MADERA/MOCHILA.png"
          ]
      },
      {
        attrs: {
          tipo: "tallimetro-t2",
          accesorio: "mochila-transporte"
        },
        price: 560,
        images:
          [
            "/images/diagnostico/INFANTOMETROS MADERA/t2.png",
            "/images/diagnostico/INFANTOMETROS MADERA/MOCHILA.png"
          ]
      },


      {
        sku: "INF-MAD-2A",
        attrs: { tipo: "menores-2-anos" },
        price: 320,
        images:
          [
            "/images/diagnostico/INFANTOMETROS MADERA/i2.png"
          ],
        variantLabel: "Infant�metro de madera para menores de 2 a�os"
      },
      {
        sku: "TALL-T1-5A",
        attrs: { tipo: "menores-5-anos" },
        price: 430,
        images:
          [
            "/images/diagnostico/INFANTOMETROS MADERA/t1.png"
          ],
        variantLabel: "Tall�metro m�vil T1 para menores de 5 a�os"
      },
      {
        sku: "TALL-T2-AD",
        attrs: { tipo: "tallimetro-t2" },
        price: 480,
        images:
          [
            "/images/diagnostico/INFANTOMETROS MADERA/t2.png"
          ],
        variantLabel: "Tall�metro modelo T2 plegable para uso pedi�trico y adulto"
      }
    ]
  },
  {
    id: "tensiometros-riester",
    name: "TENSIÓMETROS RIESTER",
    type: "Tensiometros",

    image: "/images/diagnostico/CARDS/TENSIOMETROS.png",

    attributeOrder: ["modelo", "instalacion", "forma", "brazalete"],

    priceRange: {
      min: 250,
      max: 1470
    },

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "riester-1350", label: "EXACTA" },
          { id: "ri-champion-1725", label: "RI-CHAMPION" },
          { id: "shock-proof", label: "SHOCK-N-PROOF" },
          { id: "big-ben", label: "BIG BEN" }
        ]
      },
      {
        id: "instalacion",
        label: "Tipo de instalación",
        type: "single",
        values: [
          { id: "portatil", label: "Portátil" },
          { id: "mesa", label: "Mesa" },
          { id: "pared", label: "Pared" },
          { id: "pedestal", label: "Pedestal" }
        ],
        visibleWhen: { modelo: ["big-ben", "shock-proof"] }
      },
      {
        id: "forma",
        label: "Forma del manómetro",
        type: "single",
        values: [
          { id: "redondo", label: "Redondo" },
          { id: "cuadrado", label: "Cuadrado" },
          { id: "estandard", label: "Estándar" }
        ],
        visibleWhen: { modelo: ["big-ben"] }
      },
      {
        id: "brazalete",
        label: "Tamaño del brazalete",
        type: "single",
        values: [
          { id: "recien-nacido", label: "Recién nacido", visibleWhen: { modelo: ["shock-proof"] } },
          { id: "pediatrico", label: "Pediátrico" },
          { id: "adulto", label: "Adulto" },
          { id: "adulto-grande", label: "Adulto grande" }
        ]
      }
    ],

    variants: [
      // ======================
      // RIESTER 1350
      // ======================
      {
        sku: "RIESTER-1350-ADULTO",
        attrs: { modelo: "riester-1350", instalacion: "portatil", forma: "estandard", brazalete: "adulto" },
        name: "Tensiómetro RIESTER EXACTA 1350 Adulto",
        description: "Tensiómetro aneroide portátil con brazalete para adulto. Incluye estuche de transporte y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 250,
        images: [
          "/images/diagnostico/RIESTER 1350/riester1350.png"
        ]
      },
      {
        sku: "RIESTER-1350-123",
        attrs: { modelo: "riester-1350", instalacion: "portatil", forma: "estandard", brazalete: "adulto-grande" },
        name: "Tensiómetro RIESTER EXACTA 1350-123 Adulto Grande",
        description: "Tensiómetro aneroide portátil con brazalete para adulto grande. Incluye estuche de transporte y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 300,
        images: [
          "/images/diagnostico/RIESTER 1350/riester1350.png"
        ]
      },
      {
        sku: "RIESTER-1350-130",
        attrs: { modelo: "riester-1350", instalacion: "portatil", forma: "estandard", brazalete: "pediatrico" },
        name: "Tensiómetro RIESTER EXACTA 1350-130 Pediátrico",
        description: "Tensiómetro aneroide portátil con brazalete pediátrico. Incluye estuche de transporte y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 250,
        images: [
          "/images/diagnostico/RIESTER 1350/riester1350.png"
        ]
      },

      // ======================
      // RI-CHAMPION 1725-145
      // ======================
      {
        sku: "RIESTER-1725-ADULTO",
        attrs: { modelo: "ri-champion-1725", instalacion: "mesa", forma: "estandard", brazalete: "adulto" },
        name: "Tensiómetro RIESTER RI-CHAMPION 1725-145 Adulto",
        description: "Tensiómetro aneroide portátil de alta precisión. Incluye estuche de transporte y válvula de acero inoxidable.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 450,
        images: [
          "/images/diagnostico/RI-CHAMPION/RI-CHAMPION.png"
        ]
      },
      {
        sku: "RIESTER-1725-PEDIATRICO",
        attrs: { modelo: "ri-champion-1725", instalacion: "mesa", forma: "estandard", brazalete: "pediatrico" },
        name: "Tensiómetro RIESTER RI-CHAMPION 1725 Pediátrico",
        description: "Tensiómetro aneroide portátil de alta precisión. Incluye estuche de transporte y válvula de acero inoxidable.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 450,
        images: [
          "/images/diagnostico/RI-CHAMPION/RI-CHAMPION.png"
        ]
      },
      {
        sku: "RIESTER-1725-ADULTO-GRANDE",
        attrs: { modelo: "ri-champion-1725", instalacion: "mesa", forma: "estandard", brazalete: "adulto-grande" },
        name: "Tensiómetro RIESTER RI-CHAMPION 1725 Adulto Grande",
        description: "Tensiómetro aneroide portátil de alta precisión. Incluye estuche de transporte y válvula de acero inoxidable.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 450,
        images: [
          "/images/diagnostico/RI-CHAMPION/RI-CHAMPION.png"
        ]
      },

      // ======================
      // SHOCK-N-PROOF
      // ======================
      {
        sku: "RIESTER-1364-RECIEN-NACIDO",
        attrs: { modelo: "shock-proof", instalacion: "portatil", forma: "estandard", brazalete: "recien-nacido" },
        name: "Tensiómetro RIESTER SHOCK-N-PROOF 1364 Recién Nacido",
        description: "Tensiómetro aneroide resistente a impactos con brazalete para recién nacido. Diseño robusto con carcasa de protección especial.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 400,
        images: [
          "/images/diagnostico/SHOCK PROOF/1364.png"
        ]
      },
      {
        sku: "RIESTER-1364-107",
        attrs: { modelo: "shock-proof", instalacion: "portatil", forma: "estandard", brazalete: "adulto" },
        name: "Tensiómetro RIESTER SHOCK-N-PROOF 1364-107 Adulto",
        description: "Tensiómetro aneroide resistente a impactos con brazalete para adulto. Diseño robusto con carcasa de protección especial.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 450,
        images: [
          "/images/diagnostico/SHOCK PROOF/1364-107.png"
        ]
      },
      {
        sku: "RIESTER-1364-122",
        attrs: { modelo: "shock-proof", instalacion: "portatil", forma: "estandard", brazalete: "adulto-grande" },
        name: "Tensiómetro RIESTER SHOCK-N-PROOF 1364-122 Adulto Grande",
        description: "Tensiómetro aneroide resistente a impactos con brazalete para adulto grande. Diseño robusto con carcasa de protección especial.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 480,
        images: [
          "/images/diagnostico/SHOCK PROOF/1364-122.png"
        ]
      },
      {
        sku: "RIESTER-1364-129",
        attrs: { modelo: "shock-proof", instalacion: "portatil", forma: "estandard", brazalete: "pediatrico" },
        name: "Tensiómetro RIESTER SHOCK-N-PROOF 1364-129 Pediátrico",
        description: "Tensiómetro aneroide resistente a impactos con brazalete pediátrico. Diseño robusto con carcasa de protección especial.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 500,
        images: [
          "/images/diagnostico/SHOCK PROOF/1364-129.png"
        ]
      },

      // ======================
      // BIG BEN - MESA REDONDO
      // ======================
      {
        sku: "RIESTER-1453",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "redondo", brazalete: "adulto" },
        name: "Tensiómetro RIESTER Big Ben 1453 - Mesa Redondo Adulto",
        description: "Tensiómetro aneroide de mesa con manómetro redondo y brazalete para adulto. Incluye válvula de alta precisión y estuche de transporte.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 650,
        images: [
          "/images/diagnostico/BIG BEN/1453-REDONDO-MESA.png"
        ]
      },
      {
        sku: "RIESTER-1453-123",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "redondo", brazalete: "adulto-grande" },
        name: "Tensiómetro RIESTER Big Ben 1453-123 - Mesa Redondo Adulto Grande",
        description: "Tensiómetro aneroide de mesa con manómetro redondo y brazalete para adulto grande. Incluye válvula de alta precisión y estuche de transporte.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 650,
        images: [
          "/images/diagnostico/BIG BEN/1453-REDONDO-MESA.png"
        ]
      },
      {
        sku: "RIESTER-1453-130",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "redondo", brazalete: "pediatrico" },
        name: "Tensiómetro RIESTER Big Ben 1453-130 - Mesa Redondo Pediátrico",
        description: "Tensiómetro aneroide de mesa con manómetro redondo y brazalete pediátrico. Incluye válvula de alta precisión y estuche de transporte.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 650,
        images: [
          "/images/diagnostico/BIG BEN/1453-REDONDO-MESA.png"
        ]
      },

      // ======================
      // BIG BEN - MESA CUADRADO
      // ======================
      {
        sku: "RIESTER-1456",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "cuadrado", brazalete: "adulto" },
        name: "Tensiómetro RIESTER Big Ben 1456 - Mesa Cuadrado Adulto",
        description: "Tensiómetro aneroide de mesa con manómetro cuadrado y brazalete para adulto. Incluye válvula de alta precisión y estuche de transporte.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 700,
        images: [
          "/images/diagnostico/BIG BEN/1456-CUADRADO-MESA.png"
        ]
      },
      {
        sku: "RIESTER-1456-123",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "cuadrado", brazalete: "adulto-grande" },
        name: "Tensiómetro RIESTER Big Ben 1456-123 - Mesa Cuadrado Adulto Grande",
        description: "Tensiómetro aneroide de mesa con manómetro cuadrado y brazalete para adulto grande. Incluye válvula de alta precisión y estuche de transporte.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 700,
        images: [
          "/images/diagnostico/BIG BEN/1456-CUADRADO-MESA.png"
        ]
      },
      {
        sku: "RIESTER-1456-130",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "cuadrado", brazalete: "pediatrico" },
        name: "Tensiómetro RIESTER Big Ben 1456-130 - Mesa Cuadrado Pediátrico",
        description: "Tensiómetro aneroide de mesa con manómetro cuadrado y brazalete pediátrico. Incluye válvula de alta precisión y estuche de transporte.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 700,
        images: [
          "/images/diagnostico/BIG BEN/1456-CUADRADO-MESA.png"
        ]
      },

      // ======================
      // BIG BEN - PARED REDONDO
      // ======================
      {
        sku: "RIESTER-1459",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "redondo", brazalete: "adulto" },
        name: "Tensiómetro RIESTER Big Ben 1459 - Pared Redondo Adulto",
        description: "Tensiómetro aneroide de pared con manómetro redondo y brazalete para adulto. Incluye soporte de montaje y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 800,
        images: [
          "/images/diagnostico/BIG BEN/1459-REDONDO-PARED.png"
        ]
      },
      {
        sku: "RIESTER-1459-123",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "redondo", brazalete: "adulto-grande" },
        name: "Tensiómetro RIESTER Big Ben 1459-123 - Pared Redondo Adulto Grande",
        description: "Tensiómetro aneroide de pared con manómetro redondo y brazalete para adulto grande. Incluye soporte de montaje y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 800,
        images: [
          "/images/diagnostico/BIG BEN/1459-REDONDO-PARED.png"
        ]
      },
      {
        sku: "RIESTER-1459-130",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "redondo", brazalete: "pediatrico" },
        name: "Tensiómetro RIESTER Big Ben 1459-130 - Pared Redondo Pediátrico",
        description: "Tensiómetro aneroide de pared con manómetro redondo y brazalete pediátrico. Incluye soporte de montaje y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 800,
        images: [
          "/images/diagnostico/BIG BEN/1459-REDONDO-PARED.png"
        ]
      },

      // ======================
      // BIG BEN - PARED CUADRADO
      // ======================
      {
        sku: "RIESTER-1465",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "cuadrado", brazalete: "adulto" },
        name: "Tensiómetro RIESTER Big Ben 1465 - Pared Cuadrado Adulto",
        description: "Tensiómetro aneroide de pared con manómetro cuadrado y brazalete para adulto. Incluye soporte de montaje y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 900,
        images: [
          "/images/diagnostico/BIG BEN/1465-CUADRADO-PARED.png"
        ]
      },
      {
        sku: "RIESTER-1465-123",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "cuadrado", brazalete: "adulto-grande" },
        name: "Tensiómetro RIESTER Big Ben 1465-123 - Pared Cuadrado Adulto Grande",
        description: "Tensiómetro aneroide de pared con manómetro cuadrado y brazalete para adulto grande. Incluye soporte de montaje y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 900,
        images: [
          "/images/diagnostico/BIG BEN/1465-CUADRADO-PARED.png"
        ]
      },
      {
        sku: "RIESTER-1465-130",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "cuadrado", brazalete: "pediatrico" },
        name: "Tensiómetro RIESTER Big Ben 1465-130 - Pared Cuadrado Pediátrico",
        description: "Tensiómetro aneroide de pared con manómetro cuadrado y brazalete pediátrico. Incluye soporte de montaje y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 900,
        images: [
          "/images/diagnostico/BIG BEN/1465-CUADRADO-PARED.png"
        ]
      },

      // ======================
      // BIG BEN - PEDESTAL REDONDO
      // ======================
      {
        sku: "RIESTER-1468",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "redondo", brazalete: "adulto" },
        name: "Tensiómetro RIESTER Big Ben 1468 - Pedestal Redondo Adulto",
        description: "Tensiómetro aneroide con pedestal móvil, manómetro redondo y brazalete para adulto. Incluye ruedas giratorias y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 1450,
        images: [
          "/images/diagnostico/BIG BEN/1468-REDONDO-PEDESTAL.png"
        ]
      },
      {
        sku: "RIESTER-1468-123",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "redondo", brazalete: "adulto-grande" },
        name: "Tensiómetro RIESTER Big Ben 1468-123 - Pedestal Redondo Adulto Grande",
        description: "Tensiómetro aneroide con pedestal móvil, manómetro redondo y brazalete para adulto grande. Incluye ruedas giratorias y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 1460,
        images: [
          "/images/diagnostico/BIG BEN/1468-REDONDO-PEDESTAL.png"
        ]
      },
      {
        sku: "RIESTER-1468-130",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "redondo", brazalete: "pediatrico" },
        name: "Tensiómetro RIESTER Big Ben 1468-130 - Pedestal Redondo Pediátrico",
        description: "Tensiómetro aneroide con pedestal móvil, manómetro redondo y brazalete pediátrico. Incluye ruedas giratorias y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 1470,
        images: [
          "/images/diagnostico/BIG BEN/1468-REDONDO-PEDESTAL.png"
        ]
      },

      // ======================
      // BIG BEN - PEDESTAL CUADRADO
      // ======================
      {
        sku: "RIESTER-1478",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "cuadrado", brazalete: "adulto" },
        name: "Tensiómetro RIESTER Big Ben 1478 - Pedestal Cuadrado Adulto",
        description: "Tensiómetro aneroide con pedestal móvil, manómetro cuadrado y brazalete para adulto. Incluye ruedas giratorias y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 1450,
        images: [
          "/images/diagnostico/BIG BEN/1478-CUADRADO-PEDESTAL.png"
        ]
      },
      {
        sku: "RIESTER-1478-123",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "cuadrado", brazalete: "adulto-grande" },
        name: "Tensiómetro RIESTER Big Ben 1478-123 - Pedestal Cuadrado Adulto Grande",
        description: "Tensiómetro aneroide con pedestal móvil, manómetro cuadrado y brazalete para adulto grande. Incluye ruedas giratorias y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 1460,
        images: [
          "/images/diagnostico/BIG BEN/1478-CUADRADO-PEDESTAL.png"
        ]
      },
      {
        sku: "RIESTER-1478-130",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "cuadrado", brazalete: "pediatrico" },
        name: "Tensiómetro RIESTER Big Ben 1478-130 - Pedestal Cuadrado Pediátrico",
        description: "Tensiómetro aneroide con pedestal móvil, manómetro cuadrado y brazalete pediátrico. Incluye ruedas giratorias y válvula de alta precisión.",
        brand: "RIESTER",
        type: "tensiometro",
        price: 1470,
        images: [
          "/images/diagnostico/BIG BEN/1478-CUADRADO-PEDESTAL.png"
        ]
      }
    ]
  },
  {
    id: "estetoscopios",
    name: "ESTETOSCOPIOS",
    type: "Estetoscopios",

    image: "/images/diagnostico/CARDS/ESTETOSCOPIOS.png",

    attributeOrder: ["marca", "modelo", "tamaño", "color"],

    priceRange: {
      min: 220,
      max: 450
    },

    attributes: [
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "riester", label: "RIESTER DUPLEX" },
          { id: "littmann", label: "3M LITTMANN" }
        ]
      },
      {
        id: "modelo",
        label: "Material",
        type: "single",
        values: [
          { id: "aluminio", label: "Aluminio" },
          { id: "inox", label: "Inox" },
          { id: "inox-aluminio", label: "Inox con aluminio" }
        ],
        visibleWhen: { marca: ["riester", "littmann"] }
      },
      {
        id: "tamaño",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "universal", label: "Universal", visibleWhen: { marca: ["littmann"] } },
          { id: "adulto", label: "Adulto" },
          { id: "pediatrico", label: "Pediátrico" },
          { id: "neonatal", label: "Neonatal" }
        ],
        visibleWhen: { marca: ["riester", "littmann"] }
      },
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          // Colores RIESTER Aluminio
          { id: "negro", label: "Negro" },
          { id: "azul", label: "Azul" },
          { id: "gris", label: "Gris", visibleWhen: { modelo: ["aluminio"] } },
          // Colores RIESTER Inox
          { id: "verde", label: "Verde", visibleWhen: { modelo: ["inox"] } },
          { id: "rojo", label: "Rojo", visibleWhen: { modelo: ["inox"] } },
          // Colores LITTMANN
          { id: "azul-marino", label: "Azul marino", visibleWhen: { marca: ["littmann"] } },
          { id: "azul-cielo", label: "Azul cielo", visibleWhen: { marca: ["littmann"] } },
          { id: "azul-caribe", label: "Azul caribe", visibleWhen: { marca: ["littmann"] } },
          { id: "borgona", label: "Borgoña", visibleWhen: { marca: ["littmann"] } },
          { id: "ciruela", label: "Ciruela", visibleWhen: { marca: ["littmann"] } },
          { id: "lavanda", label: "Lavanda", visibleWhen: { marca: ["littmann"] } },
          { id: "rosa-perla", label: "Rosa perla", visibleWhen: { marca: ["littmann"] } },
          { id: "rosa-champan", label: "Rosa champán", visibleWhen: { marca: ["littmann"] } },
          { id: "frambuesa", label: "Frambuesa", visibleWhen: { marca: ["littmann"] } },
          { id: "verde-lima", label: "Verde lima", visibleWhen: { marca: ["littmann"] } },
          { id: "turquesa", label: "Turquesa", visibleWhen: { marca: ["littmann"] } }
        ]
      }
    ],

    variants: [
      // ======================
      // RIESTER DUPLEX - ALUMINIO - ADULTO
      // ======================
      {
        sku: "RIESTER-4001-ADULTO-NEGRO",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "adulto", color: "negro" },
        name: "Estetoscopio RIESTER Duplex 4001 Aluminio Adulto Negro",
        description: "Estetoscopio de doble campana con cabezal de aluminio para uso en adultos. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 220,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4001.png"
        ]
      },
      {
        sku: "RIESTER-4001-ADULTO-AZUL",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "adulto", color: "azul" },
        name: "Estetoscopio RIESTER Duplex 4001 Aluminio Adulto Azul",
        description: "Estetoscopio de doble campana con cabezal de aluminio para uso en adultos. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 220,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4001.png"
        ]
      },
      {
        sku: "RIESTER-4001-ADULTO-GRIS",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "adulto", color: "gris" },
        name: "Estetoscopio RIESTER Duplex 4001 Aluminio Adulto Gris",
        description: "Estetoscopio de doble campana con cabezal de aluminio para uso en adultos. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 220,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4001.png"
        ]
      },

      // ======================
      // RIESTER DUPLEX - ALUMINIO - PEDIÁTRICO
      // ======================
      {
        sku: "RIESTER-4041-PEDIATRICO-NEGRO",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "pediatrico", color: "negro" },
        name: "Estetoscopio RIESTER Duplex 4041 Aluminio Pediátrico Negro",
        description: "Estetoscopio de doble campana con cabezal de aluminio para uso pediátrico. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 220,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4041.png"
        ]
      },
      {
        sku: "RIESTER-4041-PEDIATRICO-AZUL",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "pediatrico", color: "azul" },
        name: "Estetoscopio RIESTER Duplex 4041 Aluminio Pediátrico Azul",
        description: "Estetoscopio de doble campana con cabezal de aluminio para uso pediátrico. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 220,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4041.png"
        ]
      },
      {
        sku: "RIESTER-4041-PEDIATRICO-GRIS",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "pediatrico", color: "gris" },
        name: "Estetoscopio RIESTER Duplex 4041 Aluminio Pediátrico Gris",
        description: "Estetoscopio de doble campana con cabezal de aluminio para uso pediátrico. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 220,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4041.png"
        ]
      },

      // ======================
      // RIESTER DUPLEX - ALUMINIO - NEONATAL
      // ======================
      {
        sku: "RIESTER-4051-NEONATAL-NEGRO",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "neonatal", color: "negro" },
        name: "Estetoscopio RIESTER Duplex 4051 Aluminio Neonatal Negro",
        description: "Estetoscopio de doble campana con cabezal de aluminio para uso neonatal. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 220,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4051.png"
        ]
      },
      {
        sku: "RIESTER-4051-NEONATAL-AZUL",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "neonatal", color: "azul" },
        name: "Estetoscopio RIESTER Duplex 4051 Aluminio Neonatal Azul",
        description: "Estetoscopio de doble campana con cabezal de aluminio para uso neonatal. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 220,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4051.png"
        ]
      },
      {
        sku: "RIESTER-4051-NEONATAL-GRIS",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "neonatal", color: "gris" },
        name: "Estetoscopio RIESTER Duplex 4051 Aluminio Neonatal Gris",
        description: "Estetoscopio de doble campana con cabezal de aluminio para uso neonatal. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 220,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4051.png"
        ]
      },

      // ======================
      // RIESTER DUPLEX - INOX - ADULTO
      // ======================
      {
        sku: "RIESTER-4210-ADULTO-NEGRO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "adulto", color: "negro" },
        name: "Estetoscopio RIESTER Duplex 4210 Inox Adulto Negro",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso en adultos. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4210.png"
        ]
      },
      {
        sku: "RIESTER-4210-ADULTO-AZUL",
        attrs: { marca: "riester", modelo: "inox", tamaño: "adulto", color: "azul" },
        name: "Estetoscopio RIESTER Duplex 4210 Inox Adulto Azul",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso en adultos. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4210.png"
        ]
      },
      {
        sku: "RIESTER-4210-ADULTO-VERDE",
        attrs: { marca: "riester", modelo: "inox", tamaño: "adulto", color: "verde" },
        name: "Estetoscopio RIESTER Duplex 4210 Inox Adulto Verde",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso en adultos. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4210.png"
        ]
      },
      {
        sku: "RIESTER-4210-ADULTO-ROJO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "adulto", color: "rojo" },
        name: "Estetoscopio RIESTER Duplex 4210 Inox Adulto Rojo",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso en adultos. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4210.png"
        ]
      },

      // ======================
      // RIESTER DUPLEX - INOX - PEDIÁTRICO
      // ======================
      {
        sku: "RIESTER-4220-PEDIATRICO-NEGRO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "pediatrico", color: "negro" },
        name: "Estetoscopio RIESTER Duplex 4220 Inox Pediátrico Negro",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso pediátrico. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4220.png"
        ]
      },
      {
        sku: "RIESTER-4220-PEDIATRICO-AZUL",
        attrs: { marca: "riester", modelo: "inox", tamaño: "pediatrico", color: "azul" },
        name: "Estetoscopio RIESTER Duplex 4220 Inox Pediátrico Azul",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso pediátrico. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4220.png"
        ]
      },
      {
        sku: "RIESTER-4220-PEDIATRICO-VERDE",
        attrs: { marca: "riester", modelo: "inox", tamaño: "pediatrico", color: "verde" },
        name: "Estetoscopio RIESTER Duplex 4220 Inox Pediátrico Verde",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso pediátrico. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4220.png"
        ]
      },
      {
        sku: "RIESTER-4220-PEDIATRICO-ROJO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "pediatrico", color: "rojo" },
        name: "Estetoscopio RIESTER Duplex 4220 Inox Pediátrico Rojo",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso pediátrico. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4220.png"
        ]
      },

      // ======================
      // RIESTER DUPLEX - INOX - NEONATAL
      // ======================
      {
        sku: "RIESTER-4230-NEONATAL-NEGRO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "neonatal", color: "negro" },
        name: "Estetoscopio RIESTER Duplex 4230 Inox Neonatal Negro",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso neonatal. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4230.png"
        ]
      },
      {
        sku: "RIESTER-4230-NEONATAL-AZUL",
        attrs: { marca: "riester", modelo: "inox", tamaño: "neonatal", color: "azul" },
        name: "Estetoscopio RIESTER Duplex 4230 Inox Neonatal Azul",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso neonatal. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4230.png"
        ]
      },
      {
        sku: "RIESTER-4230-NEONATAL-VERDE",
        attrs: { marca: "riester", modelo: "inox", tamaño: "neonatal", color: "verde" },
        name: "Estetoscopio RIESTER Duplex 4230 Inox Neonatal Verde",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso neonatal. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4230.png"
        ]
      },
      {
        sku: "RIESTER-4230-NEONATAL-ROJO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "neonatal", color: "rojo" },
        name: "Estetoscopio RIESTER Duplex 4230 Inox Neonatal Rojo",
        description: "Estetoscopio de doble campana con cabezal de acero inoxidable para uso neonatal. Incluye membrana de repuesto y olivas suaves.",
        brand: "RIESTER",
        type: "estetoscopio",
        price: 350,
        images: [
          "/images/diagnostico/ESTETOSCOPIOS RIESTER/4230.png"
        ]
      },

      // ======================
      // LITTMANN CLASSIC III - INOX CON ALUMINIO - UNIVERSAL
      // ======================
      {
        sku: "LITT-CL3-NEGRO",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "negro" },
        name: "Estetoscopio Littmann Classic III Negro",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado negro. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-NEGRO.png"
        ]
      },
      {
        sku: "LITT-CL3-AZUL-MARINO",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "azul-marino" },
        name: "Estetoscopio Littmann Classic III Azul Marino",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado azul marino. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-AZULMARINO.png"
        ]
      },
      {
        sku: "LITT-CL3-AZUL-CIELO",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "azul-cielo" },
        name: "Estetoscopio Littmann Classic III Azul Cielo",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado azul cielo. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-AZULCIELO.png"
        ]
      },
      {
        sku: "LITT-CL3-AZUL-CARIBE",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "azul-caribe" },
        name: "Estetoscopio Littmann Classic III Azul Caribe",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado azul caribe. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-CARIBE.png"
        ]
      },
      {
        sku: "LITT-CL3-BORGONA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "borgona" },
        name: "Estetoscopio Littmann Classic III Borgoña",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado borgoña. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-BORGONA.png"
        ]
      },
      {
        sku: "LITT-CL3-CIRUELA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "ciruela" },
        name: "Estetoscopio Littmann Classic III Ciruela",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado ciruela. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-CIRUELA.png"
        ]
      },
      {
        sku: "LITT-CL3-LAVANDA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "lavanda" },
        name: "Estetoscopio Littmann Classic III Lavanda",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado lavanda. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-VIOLETASUAVE.png"
        ]
      },
      {
        sku: "LITT-CL3-ROSA-PERLA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "rosa-perla" },
        name: "Estetoscopio Littmann Classic III Rosa Perla",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado rosa perla. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSAPERLA.png"
        ]
      },
      {
        sku: "LITT-CL3-ROSA-CHAMPAN",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "rosa-champan" },
        name: "Estetoscopio Littmann Classic III Rosa Champán",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado rosa champán. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSACHAMPAGNE.png"
        ]
      },
      {
        sku: "LITT-CL3-FRAMBUESA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "frambuesa" },
        name: "Estetoscopio Littmann Classic III Frambuesa",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado frambuesa. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSAINTENSO.png"
        ]
      },
      {
        sku: "LITT-CL3-VERDE-LIMA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "verde-lima" },
        name: "Estetoscopio Littmann Classic III Verde Lima",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado verde lima. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-AMARILLONEON.png"
        ]
      },
      {
        sku: "LITT-CL3-TURQUESA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "turquesa" },
        name: "Estetoscopio Littmann Classic III Turquesa",
        description: "Estetoscopio Littmann Classic III DualCare 3M con acabado turquesa. Tecnología de doble frecuencia para auscultación precisa.",
        brand: "LITTMANN 3M",
        type: "estetoscopio",
        price: 450,
        images: [
          "/images/diagnostico/LITTMAN 3M/LITTMAN-TURQUESA.png"
        ]
      }
    ]
  },

  {
    "id": "riester-ri-pen",
    "name": "LINTERNA RIESTER RI-PEN",
    "description":
      "Linterna diagnóstica tipo lapicero diseñada para la evaluación clínica de pupilas y exploración general en entornos médicos. El ri-pen de Riester ofrece una iluminación LED potente, homogénea y libre de radiación UV, validada fotobiológicamente para el examen pupilar según la norma EN 62471. Incorpora un medidor de pupilas de 2 mm a 9 mm y una regla integrada de 8 cm, convirtiéndola en una herramienta práctica y precisa para consultorios, hospitales y servicios de urgencias. Su carcasa de aluminio con clip metálico garantiza durabilidad y portabilidad en el uso diario.",
    brand: "RIESTER",
    type: "Linternas",

    image: "/images/diagnostico/CARDS/LINTERNAS.png",


    // =========================
    // ATTRIBUTES (SOLO SELECTORES)
    // =========================
    "attributes": [
      {
        "id": "color",
        "label": "Color",
        "type": "single",
        "values": [
          { "id": "negro", "label": "Negro" },
          { "id": "plateado", "label": "Plateado" },
          { "id": "rojo", "label": "Rojo" },
          { "id": "azul", "label": "Azul" },
          { "id": "purpura", "label": "Púrpura" },
          { "id": "verde", "label": "Verde" }
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
    type: "Otoscopios",
    description:
      "Otoscopios Riester diseñados para la exploración del conducto auditivo externo y la evaluación clínica ORL. Incluye modelos pocket y clínicos con tecnologías de iluminación por fibra óptica LED y xenón, adaptándose a diferentes niveles de uso médico.",
    brand: "RIESTER",

    image: "/images/diagnostico/CARDS/OTOSCOPIOS.png",

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
        images:
          [
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
        images:
          [
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
        images:
          [
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
        images:
          [
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
        images:
          [
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
        images:
          [
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
        images:
          [
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
        images:
          [
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
        images:
          [
            "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-3.5.png",
            "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
          ],
        variantLabel: "ri-scope® L3 Otoscopio F.O. Xenón 3.5V (10581)"
      }
    ]
  },
  {
    id: "termometros",
    name: "TERMÓMETROS",
    type: "Termometros",

    image: "/images/diagnostico/CARDS/TERMOMETROS.png",

    attributeOrder: ["tipo-medicion", "marca"],

    priceRange: {
      min: 40,
      max: 1000
    },

    attributes: [
      {
        id: "tipo-medicion",
        label: "Tipo de medición",
        type: "single",
        values: [
          { id: "contacto", label: "De contacto" },
          { id: "infrarrojo", label: "Infrarrojo" },
          { id: "sonda", label: "Sonda" }
        ]
      },
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "riester", label: "RIESTER", visibleWhen: { "tipo-medicion": ["digital"] } },
          { id: "omron", label: "OMRON", visibleWhen: { "tipo-medicion": ["digital"] } },
          { id: "beurer", label: "BEURER", visibleWhen: { "tipo-medicion": ["digital"] } },
          { id: "contec", label: "CONTEC", visibleWhen: { "tipo-medicion": ["infrarrojo"] } },
          { id: "deltatrak", label: "DELTATRAK", visibleWhen: { "tipo-medicion": ["sonda"] } },
          { id: "thermapen", label: "THERMAPEN", visibleWhen: { "tipo-medicion": ["sonda"] } }
        ]
      }
    ],

    variants: [
      // ======================
      // DIGITAL
      // ======================
      {
        sku: "RIESTER-1851",
        attrs: { "tipo-medicion": "contacto", marca: "riester" },
        name: "Termómetro Digital RIESTER RI-DIGITAL 1851",
        description: "Termómetro digital de alta precisión para medición oral, axilar y rectal. Pantalla LCD clara, memoria de última lectura y apagado automático.",
        brand: "RIESTER",
        type: "termometro",
        price: 70,
        images: [
          "/images/diagnostico/RI-DIGITAL/1851.png"
        ]
      },
      {
        sku: "OMRON-246LA",
        attrs: { "tipo-medicion": "contacto", marca: "omron" },
        name: "Termómetro Digital OMRON 246LA",
        description: "Termómetro digital compacto y preciso para uso oral, axilar y rectal. Lectura rápida en 60 segundos con señal acústica de finalización.",
        brand: "OMRON",
        type: "termometro",
        price: 40,
        images: [
          "/images/diagnostico/OMRON TERMO/246.png"
        ]
      },
      {
        sku: "BEURER-FT90",
        attrs: { "tipo-medicion": "infrarrojo", marca: "beurer" },
        name: "Termómetro Digital BEURER FT-90",
        description: "Termómetro digital de alta gama con pantalla retroiluminada y medición rápida. Incluye estuche protector y punta flexible para mayor comodidad.",
        brand: "BEURER",
        type: "termometro",
        price: 280,
        images: [
          "/images/diagnostico/BEURER FT90/FT90.png"
        ]
      },

      // ======================
      // INFRARROJO
      // ======================
      {
        sku: "CONTEC-TP500",
        attrs: { "tipo-medicion": "infrarrojo", marca: "contec" },
        name: "Termómetro Infrarrojo CONTEC TP500",
        description: "Termómetro infrarrojo digital CONTEC TP500 para medición rápida y sin contacto de la temperatura corporal. Ideal para uso clínico, domiciliario e institucional, ofrece lectura instantánea, pantalla digital clara y operación sencilla.",
        brand: "CONTEC",
        type: "termometro",
        price: 80,
        images: [
          "/images/diagnostico/CONTEC TP500/TP500.png"
        ]
      },

      // ======================
      // SONDA
      // ======================
      {
        sku: "DELTATRAK-15051",
        attrs: { "tipo-medicion": "sonda", marca: "deltatrak" },
        name: "Termómetro de Sonda DeltaTrak 15051",
        description: "Termómetro de sonda plegable impermeable DeltaTrak 15051, ideal para medición rápida y precisa de temperaturas internas en alimentos. Cuenta con sonda plegable de acero inoxidable ajustable 0°-180° para seguridad y flexibilidad, pantalla LCD de doble escala retroiluminada y funciones de retención, mínimo/máximo y cambio °F/°C. Resistente al agua (IP67), desinfectable y conforme al Código de Alimentos de la FDA 4-203.11, es perfecto para la industria alimentaria y entornos exigentes.",
        brand: "DELTATRAK",
        type: "termometro",
        price: 400,
        images: [
          "/images/diagnostico/DELTATRAK/15051.png"
        ]
      },
      {
        sku: "THERMAPEN-228065",
        attrs: { "tipo-medicion": "sonda", marca: "thermapen" },
        name: "Termómetro de Sonda Thermapen IR 228065",
        description: "Thermapen IR, termómetro infrarrojo profesional con sonda plegable diseñado para ofrecer lecturas de temperatura altamente precisas y rápidas. Combina medición sin contacto con sonda retráctil para mayor versatilidad en aplicaciones alimentarias, industriales y médicas. Cuenta con pantalla digital clara, ergonomía premium y respuesta ultrarápida para mediciones confiables en segundos.",
        brand: "THERMAPEN",
        type: "termometro",
        price: 1000,
        images: [
          "/images/diagnostico/THERMAPEN/228065.png"
        ]
      }
    ]
  },

  {
    id: "cinta-antropometrica-lufkin",
    name: "CINTA ANTROPOMÉTRICA LUFKIN W606PM",
    type: "Antropometria",

    image: "/images/diagnostico/LUFKIN/CINTA.png",

    price: 180,

    variants: [
      {
        sku: "LUFKIN-W606PM",
        name: "Cinta Antropométrica Lufkin W606PM",
        description: "La Lufkin W606PM establece el estándar para cintas métricas antropométricas en mediciones de circunferencia, con su hoja de acero estrecha, plana y flexible. Cuenta con hoja de acero flexible y plana para mayor durabilidad sin estiramiento, estuche cromado pulido atractivo y duradable, y tensión de resorte con retracción fuerte que devuelve fácilmente la hoja al estuche. Cumple con los requisitos ISAK para cintas antropométricas. Especificaciones técnicas: rango de 2 metros, ancho de 6 mm, material de hoja de acero con estuche cromado, resolución de 1 mm, espacio en blanco antes del cero de 8 cm, escala superior con longitud en cm/mm, y escala inferior con conversión de diámetro del punto correspondiente en la escala superior.",
        brand: "LUFKIN",
        type: "cinta-antropometrica",
        price: 120,
        images: [
          "/images/diagnostico/LUFKIN/CINTA.png"
        ]
      }
    ]
  },

  {
    id: "nipro-premier",
    name: "GLUCÓMETRO NIPRO PREMIER",
    type: "Glucometros",
    description:
      "Glucómetro digital para la medición precisa de glucosa en sangre, de uso doméstico y clínico. Compatible con tiras reactivas Nipro Premier y diseñado para un control confiable y sencillo.",

    price: 120,

    image: "/images/diagnostico/NIPRO-PREMIER/nipro-premier-1.png",
    images:
      [
        "/images/diagnostico/NIPRO-PREMIER/nipro-premier-1.png"
      ]
  },

  {
    id: "lancetas-esteriles",
    name: "LANCETAS ESTÉRILES DESECHABLES",
    type: "Glucometros",
    description: "Lancetas estériles desechables compuestas por aguja, cuerpo principal y tapa protectora, diseñadas para recolectar micro muestras de sangre mediante punción en la yema del dedo. Cuentan con tapas protectoras giratorias (Twist Lancets), disponibles en diferentes calibres de punta de punción (gauge) y compatibles con dispositivos de punción estándar. Ideal para uso doméstico y clínico en mediciones de glucosa.",

    price: 25,

    image: "/images/diagnostico/NIPRO-PREMIER/LANCETA.png",
    images: [
      "/images/diagnostico/NIPRO-PREMIER/LANCETA.png"
    ]
  },

  {
    id: "martillo-wartenberg",
    name: "RUEDA NEUROLÓGICA WARTENBERG INOX",
    type: "Neurologia",
    description: "Rueda neurológica Wartenberg de acero inoxidable para evaluación de sensibilidad cutánea y estimulación nerviosa. Construcción 100% inoxidable, impermeable y resistente al óxido, con mango antideslizante que ofrece excelente retroalimentación táctil para diagnósticos precisos. La punta afilada del rodillo estimula la piel sin dañarla, siendo apta para pruebas neurológicas, reflexología y relajación muscular. Compacta y ligera, ideal para uso clínico y en campo.",

    image: "/images/diagnostico/MARTILLOS/WARTENBERG-1ROW.png",

    // =========================
    // ATTRIBUTES (SOLO SELECTORES)
    // =========================
    attributes: [
      {
        id: "opcion",
        label: "Opción",
        type: "single",
        values: [
          { id: "1-row", label: "1 Row" },
          { id: "kit-1-3-5-7", label: "1, 3, 5 y 7 Rows" }
        ]
      }
    ],

    // =========================
    // VARIANTS (SKU-BASED)
    // =========================
    variants: [
      {
        sku: "WART-INOX-1ROW",
        attrs: { opcion: "1-row" },
        name: "1 Row",
        description: "Cabezal de 1 fila de puntas de acero inoxidable para exploración de sensibilidad cutánea y estimulación nerviosa. Construcción completamente inoxidable, impermeable y resistente al óxido, de fácil limpieza y esterilización. El mango antideslizante garantiza una retroalimentación táctil precisa para evaluaciones neurológicas profesionales. Diseño compacto y ligero, cabe en cualquier bolso clínico. Las puntas estimulan la piel sin dañarla, siguiendo el estándar utilizado por neurólogos.",
        price: 70,
        image: "/images/diagnostico/MARTILLOS/WARTENBERG-1ROW.png"
      },
      {
        sku: "WART-INOX-KIT-1-3-5-7",
        attrs: { opcion: "kit-1-3-5-7" },
        name: "1, 3, 5 y 7 Rows",
        description: "Set de 4 cabezales de acero inoxidable con 1, 3, 5 y 7 filas de puntas para una evaluación neurológica integral y versátil. Cada rueda ofrece una densidad de estimulación diferente, permitiendo mapear con precisión la sensibilidad táctil y discriminativa del paciente. Construcción 100% inoxidable, impermeable, resistente al óxido y de limpieza sencilla. El mango antideslizante proporciona retroalimentación táctil óptima en cada examen. Ideal para neurólogos, fisioterapeutas y profesionales que requieren un estudio completo de la sensibilidad cutánea.",
        price: 260,
        image: "/images/diagnostico/MARTILLOS/WARTENBERG-KIT.png"
      }
    ],
  },

  {
    id: "martillo-taylor-riester",
    name: "MARTILLO NEUROLÓGICO TAYLOR RIESTER",
    type: "Neurologia",
    description: "Martillo neurológico Taylor de la marca Riester, fabricado con materiales de alta calidad médica. Diseño clásico triangular de acero inoxidable con mango ergonómico cromado para evaluación precisa de reflejos osteotendinosos. Peso balanceado para respuestas reflejas óptimas en examen neurológico profesional.",

    price: 120,

    image: "/images/diagnostico/MARTILLOS/TAYLOR-RIESTER.png",

  },

  {
    id: "martillo-reflejos-buck",
    name: "MARTILLO DE REFLEJOS BUCK",
    type: "Neurologia",
    description: "Martillo neurológico 3 en 1 que integra punta Babinski, percusor de doble mazo, punta puntiaguda y cepillo retráctil en un diseño compacto. Fabricado en aleación de zinc con mazos de silicona suave para mayor durabilidad y comodidad del paciente. Cuenta con doble cabeza en forma de T, mango ergonómico antideslizante y diseño equilibrado que permite evaluaciones neurológicas y musculoesqueléticas precisas. Es portátil y de grado profesional, ideal para uso clínico.",

    price: 95,

    image: "/images/diagnostico/MARTILLOS/BUCK.png",

  },

  {
    id: "pantoscopio-riester-2050",
    name: "PANTOSCOPIO ADULTO RIESTER 2050",
    type: "Oftalmologia-y-ORL",
    description: "Equipo profesional para la exploración de oído, nariz, garganta y ojos. Incluye otoscopio y oftalmoscopio con iluminación LED (3,7 V, hasta 20.000 h) o Xenón (2,5 V), ofreciendo visualización clara y precisa. Cuenta con mango ergonómico con baterías, espéculos reutilizables y estuche rígido para transporte seguro. Es compacto, resistente y ideal para consultorios, clínicas y hospitales. Incluye mango, ambos cabezales y accesorios para otoscopia neumática.",

    price: 850,

    images: [
      "/images/diagnostico/RIESTER 2050/pantoscopio-1.png",
      "/images/diagnostico/RIESTER 2050/pantoscopio-2.png"
    ]
  },

  {
    id: "plicometro-medidor-grasa",
    name: "PLICÓMETRO MEDIDOR DE GRASA",
    type: "Antropometria",
    description: "Plicómetro de alta precisión fabricado en PVC de alta calidad, diseñado para la medición del pliegue cutáneo y la estimación del porcentaje de grasa corporal. Rango de medición de 0 a 60 mm con escala clara y fácil lectura. Herramienta esencial para evaluaciones antropométricas, nutrición deportiva y seguimiento clínico de composición corporal. Ligero, resistente y de uso profesional.",

    price: 30,

    image: "/images/diagnostico/PLICOMETRO/PLICOMETRO.png",

  },

  {
    id: "cinta-metrica-corporal",
    name: "CINTA MÉTRICA CORPORAL",
    type: "Antropometria",
    description: "Cinta métrica corporal flexible de 1.5 metros de longitud, ideal para mediciones antropométricas de circunferencias corporales como cintura, cadera, tórax y extremidades. Fabricada con material resistente y de fácil lectura, con escala en centímetros y milímetros. Compacta, liviana y de uso clínico o deportivo, perfecta para llevar en cualquier bolso o kit de evaluación física.",

    price: 20,

    image: "/images/diagnostico/PLICOMETRO/CINTA.png",

  },

  {
    id: "set-goniometro-6-pzas",
    name: "SET DE GONIÓMETRO 6 PZAS",
    type: "Antropometria",
    description: "Set profesional de 6 goniómetros de PVC transparente de alta calidad, en distintos tamaños (6\", 8\" y 12\") para cubrir todas las articulaciones del cuerpo. Incluye goniómetros de brazo largo para caderas, rodillas y hombros; de brazo corto para muñecas, tobillos y dedos; un goniómetro para flexión lumbar y un goniómetro de dedo para evaluaciones de rango articular fino. Escala de 0° a 360° con graduaciones en negro y rojo de fácil lectura. Ligeros, resistentes y de uso clínico, ideales para fisioterapia, traumatología y rehabilitación.",

    price: 50,

    image: "/images/diagnostico/GONIOMETRO/GONIOMETRO.png",

  },

  {
    id: "monitor-grasa-corporal-omron-hbf-306int",
    name: "MONITOR DE GRASA CORPORAL OMRON HBF-306INT",
    description: "Este monitor estima el porcentaje de grasa corporal en segundos mediante tecnología de Impedancia Bioeléctrica (BIA) y calcula el Índice de Masa Corporal (IMC), clasificándolo en bajo, normal, elevado o muy elevado para una interpretación sencilla. Permite evaluar la calidad del peso perdido o ganado, diferenciando grasa y masa muscular. Incluye guía con rangos recomendados según edad y sexo, cálculo del Índice FIT y opciones de medición en modo NORMAL o ATLÉTICO para mayor precisión según el perfil del usuario.",
    type: "Antropometria",
    price: 250,
    images: [
      "/images/accesorios/MEDIDOR OMROM/OMROM_1.png",
      "/images/accesorios/MEDIDOR OMROM/OMROM_2.png"
    ]
  },

];
