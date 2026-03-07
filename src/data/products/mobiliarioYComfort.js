// src/data/products/mobiliarioYComfort.js

export const mobiliarioYComfortProducts = [

  {
    id: "biombo-hospitalario",
    name: "BIOMBOS HOSPITALARIOS",
    type: "Mobiliario",
    description: "Biombo hospitalario con cortina de tela desmontable y lavable. Disponible en estructura metálica y acero inoxidable AISI 304-2B, en modelos de 1, 2 y 3 cuerpos.",
    image: "/images/mobiliario/Biombo1.png",

    attributeOrder: ["material", "cuerpos"],

    attributes: [
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "metalico", label: "Metálico" },
          { id: "inoxidable", label: "Acero Inoxidable" }
        ]
      },
      {
        id: "cuerpos",
        label: "Cuerpos",
        type: "single",
        dependsOn: {
          material: {
            metalico: ["2-cuerpos", "3-cuerpos"],
            inoxidable: ["1-cuerpo", "2-cuerpos", "3-cuerpos"]
          }
        },
        values: [
          { id: "1-cuerpo", label: "1 Cuerpo" },
          { id: "2-cuerpos", label: "2 Cuerpos" },
          { id: "3-cuerpos", label: "3 Cuerpos" }
        ]
      }
    ],

    variants: [
      // ── METÁLICO ──
      {
        sku: "biombo-met-2c",
        attrs: { material: "metalico", cuerpos: "2-cuerpos" },
        name: "2 Cuerpos",
        description: "Biombo metálico desmontable de 2 cuerpos en tubo redondo de 1\" con bisagra tipo portón. Regatones de polietileno redondo y cortina de tela. Dimensiones: 120 cm ancho total × 170 cm alto. Ancho por cuerpo: 60 cm. Altura de patas: 15 cm.",
        price: 162,
        image: "/images/mobiliario/Biombo1.png"
      },
      {
        sku: "biombo-met-3c",
        attrs: { material: "metalico", cuerpos: "3-cuerpos" },
        name: "3 Cuerpos",
        description: "Biombo metálico desmontable de 3 cuerpos en tubo redondo de 1\" con bisagra tipo portón. Regatones de polietileno redondo y cortina de tela. Dimensiones: 180 cm ancho total × 170 cm alto. Ancho por cuerpo: 60 cm. Altura de patas: 15 cm.",
        price: 174,
        image: "/images/mobiliario/Biombo2.png"
      },
      // ── ACERO INOXIDABLE ──
      {
        sku: "biombo-inox-1c",
        attrs: { material: "inoxidable", cuerpos: "1-cuerpo" },
        name: "1 Cuerpo",
        description: "Biombo de acero inoxidable AISI 304-2B de 1 cuerpo. Bastidor tubular de 1\" × 1.2 mm con cortina en bramante blanco sujeta por varillas de 3/8\" con tuercas mariposa. Base de 2 arcos de 450 × 150 mm con regatones antideslizantes. Acabado satinado. Dimensiones: 900 mm ancho × 1750 mm alto.",
        price: 354,
        image: "/images/mobiliario/Biombo3.png"
      },
      {
        sku: "biombo-inox-2c",
        attrs: { material: "inoxidable", cuerpos: "2-cuerpos" },
        name: "2 Cuerpos",
        description: "Biombo de acero inoxidable AISI 304-2B de 2 cuerpos. Bastidor tubular de 1\" × 1.2 mm con cortinas en bramante blanco desmontables y lavables, sujetas por varillas de 3/8\" con tuercas mariposa. Base de 2 arcos con regatones antideslizantes. Acabado satinado. Dimensiones: 900 mm ancho × 1750 mm alto.",
        price: 598.8,
        image: "/images/mobiliario/Biombo4.png"
      },
      {
        sku: "biombo-inox-3c",
        attrs: { material: "inoxidable", cuerpos: "3-cuerpos" },
        name: "3 Cuerpos",
        description: "Biombo de acero inoxidable AISI 304-2B de 3 cuerpos unidos por bisagras de rotación lateral. Bastidor tubular de 1\" × 1.2 mm con cortinas en bramante blanco desmontables y lavables. Base de 2 arcos con regatones antideslizantes. Acabado satinado. Dimensiones: 2700 mm ancho total × 1750 mm alto.",
        price: 718.8,
        image: "/images/mobiliario/Biombo5.png"
      }
    ]
  },

  {
    id: "camilla-examenes-curaciones",
    name: "CAMILLA DE EXÁMENES Y CURACIONES",
    type: "Mobiliario",
    description: "Camilla para exámenes y curaciones con cabecera regulable y colchoneta tapizada en korofan negro lavable. Disponible en acero inoxidable AISI 304-2B y estructura metálica pintada.",
    image: "/images/mobiliario/CAM_EX_INOX.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "inox", label: "Acero Inoxidable" },
          { id: "met", label: "Metálica Pintada" },
          { id: "met-b", label: "Metálica Básica" }
        ]
      }
    ],

    variants: [
      {
        sku: "cam-ex-inox",
        attrs: { modelo: "inox" },
        name: "Acero Inoxidable",
        description: "Construida íntegramente en acero inoxidable AISI 304-2B. Estructura en tubo redondo de 1¼\" con regatones de PVC. Cabecera regulable de 3 posiciones por cremallera. Colchoneta de espuma de poliuretano 3\" forrada en korofan negro impermeable, antibacterial y antihongos. Dimensiones: 183 × 61 × 78 cm.",
        price: 1188,
        image: "/images/mobiliario/CAM_EX_INOX.png"
      },
      {
        sku: "cam-ex-met",
        attrs: { modelo: "met" },
        name: "Metálica Pintada",
        description: "Somier en ángulo de 2\" × 1\" × 1.2 mm. Cabecera reclinable con varilla articulada de acero inoxidable sobre muescas. Acabado en pintura electrostática blanco o marfil tipo híbrido poliéster-epóxico. Regatones electroconductivos. Dimensiones: 180 × 60 × 79 cm.",
        price: 660,
        image: "/images/mobiliario/CAM_EX_MET.png"
      },
      {
        sku: "cam-ex-met-b",
        attrs: { modelo: "met-b" },
        name: "Metálica Básica",
        description: "Tubo redondo de 1½\" × 0.8 mm con somier de madera de 12 mm. Colchoneta de espuma 3\" forrada en korofan negro lavable. Respaldar reclinable de 3 posiciones por cremallera de fierro macizo. Pintado electrostático al horno en blanco o marfil. Dimensiones: 180 × 60 × 73 cm.",
        price: 324,
        image: "/images/mobiliario/CAM_EX_MET_B.png"
      }
    ]
  },

  {
    id: "camilla-masajes",
    name: "CAMILLA PARA MASAJES",
    type: "Mobiliario",
    description: "Camilla para masajes, terapias y podología. Disponible en distintos modelos según posiciones, funcionalidad y material de estructura.",
    image: "/images/mobiliario/CAM_MAS_2P.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "2pos", label: "2 Posiciones" },
          { id: "3pos", label: "3 Posiciones" },
          { id: "pod", label: "Podología" },
          { id: "mal-r", label: "Maletín Recta" },
          { id: "mal-rec", label: "Maletín Reclinable" },
          { id: "mal-imp", label: "Maletín Importada" },
          { id: "cab", label: "Tipo Caballito" }
        ]
      }
    ],

    variants: [
      {
        sku: "cam-mas-2pos",
        attrs: { modelo: "2pos" },
        name: "2 Posiciones",
        description: "Tubo redondo de 1½\" × 0.8 mm con somier de madera 12 mm. Colchoneta de espuma 3\" en korofan negro lavable. Respaldar reclinable de 3 posiciones por cremallera. Con orificio facial. Pintado electrostático al horno en blanco o marfil. Dimensiones: 180 × 60 × 73 cm.",
        price: 336,
        image: "/images/mobiliario/CAM_MAS_2P.png"
      },
      {
        sku: "cam-mas-3pos",
        attrs: { modelo: "3pos" },
        name: "3 Posiciones",
        description: "Tubo redondo de 1¼\" × 1.2 mm. Cabecera regulable de 4 posiciones y piecera regulable de 2 posiciones por cremallera. Espuma 3\" tapizada en korofan. Con orificio facial. Estructura pintada en blanco o marfil, tapiz a elegir. Dimensiones: 178 × 60 × 75 cm.",
        price: 348,
        image: "/images/mobiliario/CAM_MAS_3P.png"
      },
      {
        sku: "cam-mas-pod",
        attrs: { modelo: "pod" },
        name: "Podología",
        description: "Tubo redondo de 1¼\" × 1.2 mm. Cabecera regulable de 4 posiciones por cremallera. Espuma 3\" tapizada en korofan. Con piernas individuales y regulables, y orificio facial. Dimensiones: 178 × 60 × 75 cm.",
        price: 358.8,
        image: "/images/mobiliario/CAM_MAS_POD.png"
      },
      {
        sku: "cam-mal-r",
        attrs: { modelo: "mal-r" },
        name: "Maletín Recta",
        description: "Tubo cuadrado de 1\" con espuma resistente 3\" forrada en marroquí especial. Cabecera con orificio facial. Con ruedas y regatones en las 6 patas. Medidas cerrado: 90 × 30 × 68 cm. Medidas abierto: 184 × 60 × 78 cm.",
        price: 324,
        images: ["/images/mobiliario/CAM_MAL_R.png",
          "/images/mobiliario/CAM_MAL_REC.png"]
      },
      {
        sku: "cam-mal-rec",
        attrs: { modelo: "mal-rec" },
        name: "Maletín Reclinable",
        description: "Tubo cuadrado de 1\" con cabecera reclinable de 3 posiciones por cremallera. Espuma 3\" forrada en marroquí especial con orificio facial. Con ruedas y regatones en las 6 patas. Pintado electrostático en blanco, tapiz a elegir. Medidas abierto: 184 × 60 × 78 cm.",
        price: 348,
        images: ["/images/mobiliario/CAM_MAL_REC_2.png",
          "/images/mobiliario/CAM_MAL_REC.png"]
      },
      {
        sku: "cam-mal-imp",
        attrs: { modelo: "mal-imp" },
        name: "Maletín Importada",
        description: "Estructura de aluminio de alta calidad, peso 12 kg, capacidad 200 kg. Cabecera reclinable 0°–80°. Orificio facial con almohadilla removible, apoyabrazos laterales removibles y altura regulable en 8 posiciones (61–81 cm). Espuma de alta densidad 7 cm en cuero PVC. Incluye bolso de transporte. Dimensiones: 186 × 70 cm, altura 61–81 cm.",
        price: 708,
        image: "/images/mobiliario/CAM_MAL_IMP.png"
      },
      {
        sku: "cam-cab",
        attrs: { modelo: "cab" },
        name: "Tipo Caballito",
        description: "Silla multifuncional tipo caballito para masajes. Soporte facial ajustable y soporte torácico.",
        price: 354,
        image: "/images/mobiliario/CAM_CAB.png"
      }
    ]
  },

  {
    id: "camilla-ginecologica",
    name: "CAMILLA GINECOLÓGICA",
    type: "Mobiliario",
    description: "Camilla ginecológica con pierneras de fibra de vidrio, cabecera regulable y cubeta de acero inoxidable. Disponible en modelos simple, gineco-obstétrica y acero inoxidable AISI 304-2B.",
    image: "/images/mobiliario/CAM_GIN_S.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "simple", label: "Simple" },
          { id: "ob", label: "Gineco-Obstétrica" },
          { id: "inox", label: "Acero Inoxidable" }
        ]
      }
    ],

    variants: [
      {
        sku: "cam-gin-simple",
        attrs: { modelo: "simple" },
        name: "Simple",
        description: "Bastidor en tubo redondo de 1½\" × 0.6 mm. Cabecera regulable 0°–60° y 0°–45° por cremallera. Pierneras de fibra de vidrio con soporte de varilla inox de ½\". Colchoneta de 3\" en tres secciones independientes forrada en korofan. Cubeta de acero inoxidable deslizable. Dimensiones: 178 × 60 × 74 cm.",
        price: 450,
        image: "/images/mobiliario/CAM_GIN_S.png"
      },
      {
        sku: "cam-gin-ob",
        attrs: { modelo: "ob" },
        name: "Gineco-Obstétrica",
        description: "Somier en ángulo de 2\" × 1\" × 1.2 mm en tres secciones independientes. Cabecera reclinable 0°–60° por cremallera con varilla inox. Piecera con recorte tipo media luna para exámenes ginecológicos. Pierneras de fibra de vidrio con perilla de regulación en altura. Cubeta inox deslizable. Acabado electrostático blanco o marfil. Dimensiones: 195 × 60 × 79 cm.",
        price: 780,
        image: "/images/mobiliario/CAM_GIN_OB.png"
      },
      {
        sku: "cam-gin-inox",
        attrs: { modelo: "inox" },
        name: "Acero Inoxidable",
        description: "Fabricada íntegramente en acero inoxidable AISI 304-2B. Patas y bastidor en tubo redondo de 1¼\" × 1.2 mm. Cabecera regulable de 3 posiciones por cremallera. Pierneras de fibra de vidrio y cubeta de acero inoxidable. Espuma 3\" forrada en marroquí lavable e indeformable. Dimensiones: 200 × 62 × 80 cm.",
        price: 1416,
        image: "/images/mobiliario/CAM_GIN_INOX.png"
      }
    ]
  },

  {
    id: "camilla-pediatrica",
    name: "CAMILLA PEDIÁTRICA",
    type: "Mobiliario",
    description: "Mesa de examen pediátrico con tallímetro horizontal incorporado de 100 cm, colchoneta desmontable, cajones deslizables y soporte para balanza pediátrica. Disponible en metálica y acero inoxidable.",
    image: "/images/mobiliario/CAM_PED_MET.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "met", label: "Metálica" },
          { id: "inox", label: "Acero Inoxidable" }
        ]
      }
    ],

    variants: [
      {
        sku: "cam-ped-met",
        attrs: { modelo: "met" },
        name: "Metálica",
        description: "Plancha laminada LAF de 0.6 mm con patas de tubo de fierro de 1\" × 0.9 mm. Tallímetro horizontal de 100 cm (div. 1 mm). Colchoneta desmontable de espuma 2\" en korofan lavable. Dos cajones deslizables y soporte para balanza pediátrica 30 × 50 cm. Acabado electrostático al horno 180–200°C. Dimensiones: 130 × 50 × 94 cm.",
        price: 474,
        image: "/images/mobiliario/CAM_PED_MET.png"
      },
      {
        sku: "cam-ped-inox",
        attrs: { modelo: "inox" },
        name: "Acero Inoxidable",
        description: "Plancha de acero inoxidable de 0.8 mm con patas en tubo cuadrado inox de 1\" × 1.2 mm. Tallímetro horizontal de 100 cm (div. 1 mm). Colchoneta desmontable de espuma 2\" en korofan lavable. Dos cajones con correderas telescópicas y soporte para balanza pediátrica 30 × 50 cm. Soldadura MIG. Dimensiones: 130 × 50 × 94 cm.",
        price: 2382,
        image: "/images/mobiliario/CAM_PED_INOX.png"
      }
    ]
  },

  // ══════════════════════════════════════════════
  // COCHE DE 1 CAJÓN
  // ══════════════════════════════════════════════
  {
    id: "coche-1-cajon",
    name: "COCHE DE 1 CAJÓN",
    type: "Mobiliario",
    description: "Coche rodable de 1 cajón para uso hospitalario. Disponible en estructura metálica y acero inoxidable AISI 304-2B, con distintas configuraciones de gabinete y barandilla.",
    image: "/images/mobiliario/C1C_MET.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "met", label: "Metálico" },
          { id: "met-amb", label: "Metálico Amoblado" },
          { id: "inox", label: "Inox" },
          { id: "inox-gab", label: "Inox con Gabinete" },
          { id: "inox-bar", label: "Inox Barandilla Plancha" }
        ]
      }
    ],

    variants: [
      {
        sku: "c1c-met",
        attrs: { modelo: "met" },
        name: "Metálico",
        description: "Tubo cuadrado de 1\" con tablero en formica blanca. 1 cajón y 4 garruchas de nylon. Barandilla inox en 3 lados del tablero superior. Acabado electrostático al horno 180–200°C. Dimensiones: 40 × 39 × 81 cm (88 cm con barandilla).",
        price: 168,
        image: "/images/mobiliario/C1C_MET.png"
      },
      {
        sku: "c1c-met-amb",
        attrs: { modelo: "met-amb" },
        name: "Metálico Amoblado",
        description: "Tubo cuadrado de 1\" con tablero en formica blanca. 1 cajón, gabinete inferior con puerta y división metálica removible. 4 garruchas de nylon. Barandilla inox en 3 lados. Acabado electrostático al horno. Dimensiones: 40 × 35 × 83 cm (88 cm con barandilla).",
        price: 222,
        image: "/images/mobiliario/C1C_MET_AMB.png"
      },
      {
        sku: "c1c-inox",
        attrs: { modelo: "inox" },
        name: "Inox",
        description: "Construido íntegramente en acero inoxidable AISI 304-2B. Patas en tubo cuadrado de 1\" × 1.2 mm. Cajón con jalador de acero y corredera telescópica de extracción total. Garruchas hospitalarias de 2\" con freno en 2 ruedas. Barandilla inox en 3 lados. Dimensiones: 40 × 40 × 83 cm.",
        price: 450,
        image: "/images/mobiliario/C1C_INOX.png"
      },
      {
        sku: "c1c-inox-gab",
        attrs: { modelo: "inox-gab" },
        name: "Inox con Gabinete",
        description: "Construido íntegramente en acero inoxidable AISI 304-2B. Cajón con corredera telescópica de extracción total. Gabinete inferior con puerta y división metálica removible. Garruchas hospitalarias de 2\" con freno en 2 ruedas. Dimensiones: 40 × 40 × 83 cm.",
        price: 1044,
        image: "/images/mobiliario/C1C_INOX_GAB.png",
      },
      {
        sku: "c1c-inox-bar",
        attrs: { modelo: "inox-bar" },
        name: "Inox Barandilla Plancha",
        description: "Construido íntegramente en acero inoxidable AISI 304-2B. Cajón con jalador de acero y corredera telescópica de extracción total. Barandilla de plancha inox. Garruchas hospitalarias de 2\" con freno en 2 ruedas.",
        price: 576,
        image: "/images/mobiliario/C1C_INOX_BAR.png"
      }
    ]
  },

  // ══════════════════════════════════════════════
  // COCHE DE 2 CAJONES / MESA RODABLE
  // ══════════════════════════════════════════════
  {
    id: "coche-2-cajones",
    name: "COCHE DE 2 CAJONES / MESA RODABLE",
    type: "Mobiliario",
    description: "Coche rodable de 2 cajones para uso hospitalario y clínico. Disponible en estructura metálica y acero inoxidable AISI 304-2B, con y sin gabinete inferior.",
    image: "/images/mobiliario/C2C_MET.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "met", label: "Metálico Formica" },
          { id: "met-amb", label: "Metálico Amoblado" },
          { id: "inox-sc", label: "Inox Sin Cajones" },
          { id: "inox", label: "Inox con Cajones" },
          { id: "inox-gab", label: "Inox con Cajones + Gabinete" }
        ]
      }
    ],

    variants: [
      {
        sku: "c2c-met",
        attrs: { modelo: "met" },
        name: "Metálico Formica",
        description: "Tubo cuadrado de 1\" con tablero en formica blanca y tablero inferior de plancha LAF. 2 cajones, 4 garruchas de nylon. Barandilla inox de 6 mm en 3 lados. Acabado electrostático al horno 200°C. Dimensiones: 65 × 40 × 81 cm.",
        price: 216,
        image: "/images/mobiliario/C2C_MET.png"
      },
      {
        sku: "c2c-met-amb",
        attrs: { modelo: "met-amb" },
        name: "Metálico Amoblado",
        description: "Plancha LAF de 0.6 mm con tablero enchapado en formica y filete inox. 2 cajones y gabinete inferior con 2 puertas batientes con llave y división metálica. 4 ruedas omnidireccionales PVC. Acabado electrostático al horno. Dimensiones: 65 × 40 × 81 cm (87 cm con barandilla).",
        price: 312,
        image: "/images/mobiliario/C2C_MET_AMB.png"
      },
      {
        sku: "c2c-inox-sc",
        attrs: { modelo: "inox-sc" },
        name: "Inox Sin Cajones",
        description: "Bastidor inoxidable tubular de 1\" × 1.2 mm. Dos tableros en plancha inox de 0.8 mm con barandilla en 3 lados. Dos agarraderas en tubo inox de ½\". Cuatro garruchas hospitalarias de 2\". Soldadura TIG. Dimensiones: 650 × 450 × 835 mm.",
        price: 840,
        image: "/images/mobiliario/C2C_INOX_SC.png"
      },
      {
        sku: "c2c-inox",
        attrs: { modelo: "inox" },
        name: "Inox con Cajones",
        description: "Tubo inox de 25.4 mm × 1.2 mm. Dos tableros en plancha inox de 0.8 mm con barandilla en 3 lados. 2 gavetas con correderas telescópicas y tiradores tipo asa inox. Dos agarraderas en tubo inox de ½\". Cuatro garruchas hospitalarias de 50 mm, 2 con freno. Dimensiones: 650 × 450 × 810 mm.",
        price: 996,
        image: "/images/mobiliario/C2C_INOX.png"
      },
      {
        sku: "c2c-inox-gab",
        attrs: { modelo: "inox-gab" },
        name: "Inox con Cajones + Gabinete",
        description: "Tubo inox de 25.4 mm × 1.2 mm. Dos tableros inox de 0.8 mm con barandilla en 3 lados. 2 gavetas con correderas telescópicas y tiradores tipo asa. Gabinete inferior con 2 puertas batientes con jalador tipo asa y división en acero inoxidable. Cuatro garruchas hospitalarias de 50 mm, 2 con freno. Dimensiones: 650 × 450 × 810 mm.",
        price: 1410,
        image: "/images/mobiliario/C2C_INOX_GAB.png"
      }
    ]
  },

  // ══════════════════════════════════════════════
  // COCHE PORTA CUNA ACRÍLICA
  // ══════════════════════════════════════════════
  {
    id: "coche-porta-cuna",
    name: "COCHE PORTA CUNA ACRÍLICA",
    type: "Mobiliario",
    description: "Coche porta cuna con cesto acrílico transparente de 3.5 mm termo moldeado, porta tarjeta de identificación y colchoneta hipoalergénica de 2\". Disponible en metálico y acero inoxidable, con y sin gabinete.",
    image: "/images/mobiliario/CPC_MET.png",

    attributeOrder: ["material", "modelo"],

    attributes: [
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "metalico", label: "Metálico" },
          { id: "inoxidable", label: "Acero Inoxidable" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        dependsOn: {
          material: {
            metalico: ["simple", "gabinete"],
            inoxidable: ["simple", "gabinete"]
          }
        },
        values: [
          { id: "simple", label: "Simple" },
          { id: "gabinete", label: "Con Gabinete" }
        ]
      }
    ],

    variants: [
      {
        sku: "cpc-met-simple",
        attrs: { material: "metalico", modelo: "simple" },
        name: "Simple",
        description: "Bastidor en tubo LAF redondo de 1\" × 1.2 mm. Cesto acrílico transparente 3.5 mm con porta tarjeta. Colchoneta de poliuretano 2\" en tapiz hipoalergénico ignífugo. 4 garruchas hospitalarias giratorias 360° de 2\". Pintado electrostático al horno. Dimensiones: 800 × 450 × 900 mm.",
        price: 540,
        image: "/images/mobiliario/CPC_MET.png"
      },
      {
        sku: "cpc-met-gab",
        attrs: { material: "metalico", modelo: "gabinete" },
        name: "Con Gabinete",
        description: "Bastidor en tubo LAF redondo de 1\" × 1.2 mm. Gabinete con 2 puertas con tirador tipo asa y repisa central en plancha LAF de 0.6 mm. Cesto acrílico 3.5 mm con porta tarjeta. Colchoneta de poliuretano 2\" en tapiz hipoalergénico ignífugo. 4 garruchas hospitalarias giratorias 360° de 2\". Pintado electrostático al horno. Dimensiones: 800 × 450 × 900 mm.",
        price: 714,
        image: "/images/mobiliario/CPC_MET_GAB.png"
      },
      {
        sku: "cpc-inox-simple",
        attrs: { material: "inoxidable", modelo: "simple" },
        name: "Simple",
        description: "Bastidor en tubo inox redondo de 1\" × 1.2 mm. Cesto acrílico 3.5 mm con porta tarjeta. Colchoneta de poliuretano 2\" en tapiz hipoalergénico ignífugo. 4 garruchas hospitalarias giratorias 360° de 2\", 2 con freno. Dimensiones: 800 × 450 × 900 mm.",
        price: 900,
        image: "/images/mobiliario/CPC_INOX.png"
      },
      {
        sku: "cpc-inox-gab",
        attrs: { material: "inoxidable", modelo: "gabinete" },
        name: "Con Gabinete",
        description: "Bastidor en tubo inox redondo de 1\" × 1.2 mm. Gabinete con 2 puertas con tirador tipo asa y repisa central en plancha inox de 0.8 mm. Cesto acrílico 3.5 mm con porta tarjeta. Colchoneta de poliuretano 2\" en tapiz hipoalergénico ignífugo. 4 garruchas hospitalarias giratorias 360° de 2\", 2 con freno. Dimensiones: 800 × 450 × 900 mm.",
        price: 1320,
        image: "/images/mobiliario/CPC_INOX_GAB.png"
      }
    ]
  },

  // ══════════════════════════════════════════════
  // COCHE DE PARO
  // ══════════════════════════════════════════════
  {
    id: "coche-de-paro",
    name: "COCHE DE PARO",
    type: "Mobiliario",
    description: "Coche de paro hospitalario con cajones, porta balón de oxígeno y porta suero. Disponible en metálico y acero inoxidable AISI 304-2B, con distintas configuraciones de accesorios.",
    image: "/images/mobiliario/CP_MET_3C.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "met-3c", label: "Metálico 3 Cajones" },
          { id: "met-3c-plus", label: "Metálico 3 Cajones + Repisa + Desfibrilador" },
          { id: "inox-4c", label: "Inox 4 Cajones + Repisa + Desfibrilador" }
        ]
      }
    ],

    variants: [
      {
        sku: "cp-met-3c",
        attrs: { modelo: "met-3c" },
        name: "Metálico 3 Cajones",
        description: "Plancha y tubo LAF de 0.6 mm. Tablero superior enchapado en acero inox con barandilla en 3 lados. 3 cajones en todo el ancho con jaladores metálicos. Gabinete inferior con 2 puertas con llave. Sistema parachoque en 4 lados. 4 ruedas hospitalarias omnidireccionales, 2 con freno. Incluye porta balón O₂, porta suero inox con 2 ganchos. Dimensiones: 950 × 450 × 860 mm (1400 mm con porta suero).",
        price: 936,
        image: "/images/mobiliario/CP_MET_3C.png"
      },
      {
        sku: "cp-met-3c-plus",
        attrs: { modelo: "met-3c-plus" },
        name: "Metálico 3 Cajones + Repisa + Desfibrilador",
        description: "Plancha LAF de 0.6 mm enchapada en acero inox. 3 cajones con correderas telescópicas de extracción total. Gabinete inferior con 2 puertas con llave. Sistema parachoque en 4 lados. 4 ruedas hospitalarias omnidireccionales, 2 con freno. Incluye porta balón O₂, porta suero inox con 2 ganchos, tablero abatible, bandeja porta desfibrilador y barandilla en 3 lados. Dimensiones: 950+440 × 450 × 860 mm (1400 mm con porta suero).",
        price: 1188,
        image: "/images/mobiliario/CP_MET_3C_PLUS.png"
      },
      {
        sku: "cp-inox-4c",
        attrs: { modelo: "inox-4c" },
        name: "Inox 4 Cajones + Repisa + Desfibrilador",
        description: "Fabricado íntegramente en plancha de acero inoxidable AISI 304-2B. 4 cajones con correderas telescópicas de extracción total. Agarradera de 1\" para traslado. Sistema parachoque en 4 lados. 4 ruedas hospitalarias de 4\", 2 con freno. Incluye tablero abatible, porta balón, porta suero y porta desfibrilador 300 × 210 mm. Dimensiones: tablero 650 × 480 mm, ancho total 860 mm, alto 890 mm (1180 mm hasta porta desfibrilador).",
        price: 2976,
        image: "/images/mobiliario/CP_INOX_4C.png"
      }
    ]
  },

  // ══════════════════════════════════════════════
  // PRODUCTOS INDIVIDUALES
  // ══════════════════════════════════════════════
  {
    id: "carro-material-esteril",
    name: "CARRO PARA TRANSPORTE DE MATERIAL ESTÉRIL",
    type: "Mobiliario",
    description: "Construido íntegramente en acero inoxidable AISI 304-2B en plancha de 0.8 mm reforzada. Dos tableros interiores removibles, 2 puertas frontales batientes con bisagras y tiradores inox de 3\". Timón a cada lado en tubo de ¾\" × 1.2 mm. Cuatro garruchas omnidireccionales de 4\", 2 con freno. Dimensiones: 1100 × 600 × 1100 mm.",
    price: 2400,
    images: [
      "/images/mobiliario/Carro1.png",
      "/images/mobiliario/Carro2.png"
    ]
  },

  {
    id: "carro-utiles-limpieza",
    name: "CARRO PARA ÚTILES DE LIMPIEZA",
    type: "Mobiliario",
    description: "Construido íntegramente en acero inoxidable AISI 304-2B. Gabinete en plancha de 0.8 mm con aro apoya escobas y escurridores. Baranda de empuje en tubo redondo de 1\" × 2 mm. Plataforma en tubo cuadrado de 1\" × 1.2 mm. Protectores antichoque en 4 lados. Porta utensilios 49 × 25 cm, bolsa de lona impermeable removible y balde de 20 L con porta balde. 4 garruchas de 4\", 2 con freno, capacidad 100 kg. Dimensiones: 101 × 56 × 95 cm.",
    price: 2268,
    image: "/images/mobiliario/CARRO_LIMP.png"
  },

  {
    id: "mesa-3-tableros",
    name: "MESA METÁLICA RODABLE DE USO MÚLTIPLE CON 3 TABLEROS",
    type: "Mobiliario",
    description: "Fabricada íntegramente en acero inoxidable AISI 304-2B. Bastidor en tubo redondo de 1\" × 1.2 mm. 3 tableros en plancha de 0.8 mm. 4 garruchas hospitalarias omnidireccionales de 3\", 2 con freno. Alturas de tableros: 300 / 600 / 900 mm. Tablero: 650 × 450 mm.",
    price: 1302,
    image: "/images/mobiliario/MESA_3T.png"
  },

  {
    id: "gabinete-3-cajones-toma-muestra",
    name: "GABINETE DE 3 CAJONES PARA TOMA DE MUESTRA",
    type: "Mobiliario",
    description: "Plancha LAF de 0.6 mm con tablero de acero inoxidable. 3 cajones con tiradores inox. 4 ruedas resistentes de PVC. Acabado electrostático al horno 200°C. Dimensiones: 40 × 39 × 81 cm (87 cm con baranda).",
    price: 402,
    image: "/images/mobiliario/GAB_3C.png"
  },



  {
    id: "mesa-auxiliar-oficina",
    name: "MESA AUXILIAR DE OFICINA M-25",
    type: "Mobiliario",
    description: "Tubo LAF cuadrado de 1\" × 1.2 mm. Tablero en plancha LAF de 0.6 mm enchapado en formica con filete inox satinado. 2 cajones con correderas telescópicas y tiradores tipo asa inox de 150 mm. 4 ruedas de jebe duro de 2\", 2 con freno. Acabado electrostático poliéster-epoxy al horno 180–200°C. Dimensiones: 1000 × 500 × 750 mm.",
    price: 552,
    image: "/images/mobiliario/MESA_AUX.png"
  },

  {
    id: "carro-transporte-ropa",
    name: "CARRO PARA TRANSPORTE DE ROPA",
    type: "Mobiliario",
    description: "Fabricado en plancha de acero inoxidable AISI 304-2B de 0.8 mm reforzada con perfiles del mismo material. 2 puertas superiores batientes con bisagras y tiradores de 4\". Timón a cada lado en tubo de 1½\" × 1.2 mm. 4 garruchas hospitalarias de 5\", 2 giratorias y 2 con freno. Dimensiones: 900 × 700 × 900 mm.",
    price: 2988,
    images: [
      "/images/mobiliario/CARRO_ROPA.png",
      "/images/mobiliario/CARRO_ROPA_2.png"
    ]
  },

  // ══════════════════════════════════════════════
  // MESA TIPO MAYO
  // ══════════════════════════════════════════════
  {
    id: "mesa-mayo",
    name: "MESA TIPO MAYO",
    type: "Mobiliario",
    description: "Mesa tipo Mayo con bandeja removible y altura regulable mediante perilla. Disponible en acero quirúrgico inoxidable, cromado y pintado.",
    image: "/images/mobiliario/MAYO_INOX.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "inox", label: "Acero Quirúrgico" },
          { id: "cromado", label: "Cromado" },
          { id: "pintado", label: "Pintado" }
        ]
      }
    ],

    variants: [
      {
        sku: "mayo-inox",
        attrs: { modelo: "inox" },
        name: "Acero Quirúrgico",
        description: "Soporte en tubo de acero inoxidable de 1\" × 1.2 mm con perilla de ajuste de altura. Tablero desmontable en plancha inox de 0.8 mm sin intersticios, apto para esterilización. Anillo rectangular de platina de acero con capacidad de 10 kg. Tablero: 340 × 470 mm. Altura regulable: 900–1300 mm.",
        price: 546,
        image: "/images/mobiliario/MAYO_INOX.png"
      },
      {
        sku: "mayo-cromado",
        attrs: { modelo: "cromado" },
        name: "Cromado",
        description: "Base en tubo cuadrado de 1.5\" con bandeja removible de 44 × 34 cm. Altura regulable mediante perilla. Dimensiones: 53.5 × 41 cm. Bandeja: 45 × 35 cm. Altura regulable: 71–112 cm.",
        price: 222,
        image: "/images/mobiliario/MAYO_CROM.png"
      },
      {
        sku: "mayo-pintado",
        attrs: { modelo: "pintado" },
        name: "Pintado",
        description: "Base en tubo cuadrado de 1.5\" con bandeja removible de 44 × 34 cm. Altura regulable mediante perilla. Acabado en polvo electrostático poliéster-epoxy blanco o marfil, curado en horno a 200°C. Altura regulable: 76–126 cm.",
        price: 186,
        image: "/images/mobiliario/MAYO_PINT.png"
      }
    ]
  },

  // ══════════════════════════════════════════════
  // MESA DE ALIMENTACIÓN
  // ══════════════════════════════════════════════
  {
    id: "mesa-alimentacion",
    name: "MESA DE ALIMENTACIÓN",
    type: "Mobiliario",
    description: "Mesa rodable para alimentación con altura regulable. Disponible en modelo rodable de columna telescópica y modelo estándar con perilla.",
    image: "/images/mobiliario/MESA_ALIM_R.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "rodable", label: "Rodable Telescópica" },
          { id: "estandar", label: "Estándar" }
        ]
      }
    ],

    variants: [
      {
        sku: "mesa-alim-rodable",
        attrs: { modelo: "rodable" },
        name: "Rodable Telescópica",
        description: "Base en tubo LAF rectangular 50 × 25 × 1.2 mm con filetes inox. Columna telescópica con sistema de resorte activado por pin de seguridad. Tablero LAF de 0.8 mm enchapado en plástico laminado. Garruchas hospitalarias omnidireccionales de nylon de 50 mm sin freno. Pintado electrostático al horno 200°C. Bandeja: 750 × 350 mm. Altura regulable: 800–1200 mm.",
        price: 1044,
        image: "/images/mobiliario/MESA_ALIM_R.png"
      },
      {
        sku: "mesa-alim-estandar",
        attrs: { modelo: "estandar" },
        name: "Estándar",
        description: "Tubo rectangular de 2\" × 1\". Tablero de melamina 60 × 35 × 18 mm con filete de aluminio. Regulación mediante perilla. 4 ruedas de nylon. Acabado electrostático al horno 180°C en blanco o marfil. Base: 65 × 40 cm. Altura regulable: 90–136 cm.",
        price: 198,
        image: "/images/mobiliario/MESA_ALIM_E.png"
      }
    ]
  },

  // ══════════════════════════════════════════════
  // MESA DE USO MÚLTIPLE 90×45
  // ══════════════════════════════════════════════
  {
    id: "mesa-uso-multiple-90x45",
    name: "MESA DE USO MÚLTIPLE 90 × 45 CM",
    type: "Mobiliario",
    description: "Mesa de uso múltiple con 2 cajones de extracción telescópica. Disponible en estructura metálica con tablero formica y en acero inoxidable AISI 304-2B completo.",
    image: "/images/mobiliario/MESA_MM_MET.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "met", label: "Metálica" },
          { id: "inox", label: "Acero Inoxidable" }
        ]
      }
    ],

    variants: [
      {
        sku: "mesa-mm-met",
        attrs: { modelo: "met" },
        name: "Metálica",
        description: "Tubo de acero cuadrado de 1\" × 1.2 mm. Tablero en plancha LAF de 0.6 mm enchapado en formica con filete inox satinado. 2 cajones con correderas telescópicas y tiradores tipo asa inox de 120 mm. 4 ruedas cromadas giratorias de 2\" con jebe duro, 2 con freno. Acabado electrostático poliéster-epoxy al horno 180–200°C. Dimensiones: 950 × 450 × 750 mm.",
        price: 684,
        image: "/images/mobiliario/MESA_MM_MET.png"
      },
      {
        sku: "mesa-mm-inox",
        attrs: { modelo: "inox" },
        name: "Acero Inoxidable",
        description: "Tubo de acero inoxidable cuadrado de 1\" × 1.2 mm. Tableros superior e inferior en plancha inox de 0.8 mm. 2 cajones con correderas telescópicas y tiradores tipo asa inox de 150 mm. 4 ruedas cromadas giratorias de 2\" con jebe duro, 2 con freno. Dimensiones: 950 × 450 × 750 mm.",
        price: 1074,
        image: "/images/mobiliario/MESA_MM_INOX.png"
      }
    ]
  },

  // ══════════════════════════════════════════════
  // PRODUCTOS INDIVIDUALES
  // ══════════════════════════════════════════════
  {
    id: "mesa-angular-inox-instrumental",
    name: "MESA ANGULAR DE ACERO INOXIDABLE PARA INSTRUMENTAL",
    type: "Mobiliario",
    description: "Fabricada íntegramente en acero inoxidable quirúrgico calidad 304-2B. Tablero superior angular en plancha inox de 0.8 mm. Patas y travesaños en tubo inox de 1\" × 1.2 mm. 6 garruchas de 2\" con doble rodamiento y ruedas de jebe electroconductivo. Dimensiones: 1470 × 390 mm (fondo total 690 mm).",
    price: 1548,
    image: "/images/mobiliario/MESA_ANG.png"
  },

  {
    id: "mesa-noche-inox",
    name: "MESA METÁLICA DE NOCHE",
    type: "Mobiliario",
    description: "Construida íntegramente en plancha de acero inoxidable calidad 304-2B de 0.8 mm. Cajón con corredera telescópica de extracción total y tirador tipo asa inox. Gabinete con puerta, tirador tipo asa y repisa interior. 4 patas con regatones de PVC. Dimensiones: 480 × 390 × 810 mm.",
    price: 1068,
    image: "/images/mobiliario/MESA_NOCHE.png"
  },


  // ══════════════════════════════════════════════
  // ESCALINATA 1 PELDAÑO
  // ══════════════════════════════════════════════
  {
    id: "escalinata-1-peldano",
    name: "ESCALINATA 1 PELDAÑO",
    type: "Mobiliario",
    description: "Escalinata de 1 peldaño para uso hospitalario. Disponible en estructura metálica, cromada y acero inoxidable para sala de operaciones.",
    image: "/images/mobiliario/ESC1_MET.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "met", label: "Metálica" },
          { id: "crom", label: "Metálica Cromada" },
          { id: "inox", label: "Acero Inoxidable SOP" }
        ]
      }
    ],

    variants: [
      {
        sku: "esc1-met",
        attrs: { modelo: "met" },
        name: "Metálica",
        description: "Tubo redondo LAF de 1\" × 1.2 mm. Peldaño en plancha LAF de 0.8 mm enchapado con neoprene antideslizante y filete inox. Regatones de PVC. Dimensiones: 400 × 240 mm. Alto: 200 mm.",
        price: 58.8,
        image: "/images/mobiliario/ESC1_MET.png"
      },
      {
        sku: "esc1-crom",
        attrs: { modelo: "crom" },
        name: "Metálica Cromada",
        description: "Tubo redondo cromado. Plataforma de melamina 18 mm con borde de aluminio y piso antideslizante de caucho. Regatones de polietileno redondo. Plataforma: 42.5 × 26.5 cm. Dimensiones: 41 × 24 × 24 cm.",
        price: 85.2,
        image: "/images/mobiliario/ESC1_CROM.png"
      },
      {
        sku: "esc1-inox",
        attrs: { modelo: "inox" },
        name: "Acero Inoxidable SOP",
        description: "Fabricada íntegramente en acero inoxidable. Tubo redondo de 1\" × 1.2 mm doblado de una sola pieza sin seccionar. Plataforma en plancha de 0.8 mm con superficie antideslizante de 2 mm y filete inox perimetral. Soldadura TIG. Regatones de jebe o polietileno. Dimensiones: 420 × 260 mm. Alto: 200 mm.",
        price: 234,
        image: "/images/mobiliario/ESC1_INOX.png"
      }
    ]
  },

  // ══════════════════════════════════════════════
  // ESCALINATA 2 PELDAÑOS
  // ══════════════════════════════════════════════
  {
    id: "escalinata-2-peldanos",
    name: "ESCALINATA 2 PELDAÑOS",
    type: "Mobiliario",
    description: "Escalinata de 2 peldaños para uso hospitalario. Disponible en metálica, metálica cromada, acero inoxidable y acero inoxidable con baranda.",
    image: "/images/mobiliario/ESC2_MET.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "met", label: "Metálica" },
          { id: "met-1p", label: "Metálica 1 Pieza" },
          { id: "crom", label: "Metálica Cromada" },
          { id: "inox", label: "Acero Inoxidable" },
          { id: "inox-bar", label: "Inox con Baranda" }
        ]
      }
    ],

    variants: [
      {
        sku: "esc2-met",
        attrs: { modelo: "met" },
        name: "Metálica",
        description: "Tubo redondo de 1\" × 0.8 mm. Plataformas contraplacadas de 25.4 mm con plancha LAF de 0.8 mm y cubierta de jebe antideslizante de 2.5 mm color negro, asegurada con filete inox. Regatones de jebe duro. Dimensiones: 40 × 25 × 23 cm.",
        price: 96,
        image: "/images/mobiliario/ESC2_MET.png"
      },
      {
        sku: "esc2-met-1p",
        attrs: { modelo: "met-1p" },
        name: "Metálica 1 Pieza",
        description: "Tubo LAF de 1\" × 1.25 mm doblado de una sola pieza sin seccionar. Plataformas contraplacadas de 25.4 mm con plancha LAF de 0.8 mm y jebe antideslizante de 2.5 mm asegurado con filete inox. Regatones de jebe duro. Dimensiones: 420 × 250 mm. Alto 1er peldaño: 200 mm / 2do: 400 mm.",
        price: 162,
        image: "/images/mobiliario/ESC2_MET_1P.png"
      },
      {
        sku: "esc2-crom",
        attrs: { modelo: "crom" },
        name: "Metálica Cromada",
        description: "Estructura de tubo redondo cromado. Plataformas de melamina 18 mm con borde de aluminio y piso antideslizante de caucho. Regatones de polietileno redondo. Plataforma: 42.5 × 26.5 cm. Dimensiones: 51 × 40 cm. Alto: 21–41 cm.",
        price: 150,
        image: "/images/mobiliario/ESC2_CROM.png"
      },
      {
        sku: "esc2-inox",
        attrs: { modelo: "inox" },
        name: "Acero Inoxidable",
        description: "Construida íntegramente en acero inoxidable. Bastidor tubular de 1\" × 1.2 mm doblado de una sola pieza. Dos plataformas contraplacadas de 25.4 mm con plancha de 0.8 mm y jebe antideslizante de 3.5 mm. Filete inox perimetral. Dimensiones: 420 × 250 mm. Alto 1er peldaño: 200 mm / 2do: 400 mm.",
        price: 372,
        image: "/images/mobiliario/ESC2_INOX.png"
      },
      {
        sku: "esc2-inox-bar",
        attrs: { modelo: "inox-bar" },
        name: "Inox con Baranda",
        description: "Construida íntegramente en acero inoxidable AISI 304-2B. Bastidor tubular de 1\" × 1.2 mm doblado de una sola pieza. Dos plataformas con jebe antideslizante de 2.5 mm y filete inox. Baranda de acero inoxidable en uno de los costados. Dimensiones: 420 × 250 mm. Alto 1er peldaño: 200 mm / 2do: 400 mm.",
        price: 594,
        image: "/images/mobiliario/ESC2_INOX_BAR.png"
      }
    ]
  },

  // ══════════════════════════════════════════════
  // ESCALINATA 3 PELDAÑOS
  // ══════════════════════════════════════════════
  {
    id: "escalinata-3-peldanos",
    name: "ESCALINATA 3 PELDAÑOS",
    type: "Mobiliario",
    description: "Escalinata de 3 peldaños para uso hospitalario. Disponible en metálica, metálica de una sola pieza y acero inoxidable AISI 304-2B.",
    image: "/images/mobiliario/ESC3_MET.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "met", label: "Metálica" },
          { id: "met-1p", label: "Metálica 1 Pieza" },
          { id: "inox", label: "Acero Inoxidable" }
        ]
      }
    ],

    variants: [
      {
        sku: "esc3-met",
        attrs: { modelo: "met" },
        name: "Metálica",
        description: "Tubo redondo LAF de 1\" × 1 mm. Plataformas en plancha de 0.8 mm con jebe antideslizante de 2.5 mm y filete inox. Regatones de PVC de alta resistencia. Medida del peldaño: 400 × 240 mm. Alto 1er peldaño: 200 mm / 2do: 290 mm / 3ro: 570 mm.",
        price: 198,
        image: "/images/mobiliario/ESC3_MET.png"
      },
      {
        sku: "esc3-met-1p",
        attrs: { modelo: "met-1p" },
        name: "Metálica 1 Pieza",
        description: "Tubo de acero de 1\" × 1.25 mm doblado de una sola pieza sin seccionar. Plataformas contraplacadas con plancha LAF de 0.8 mm y jebe antideslizante de 2.5 mm color negro, asegurado con filete inox. Regatones de jebe duro. Acabado electrostático poliéster-epoxy al horno 180–200°C blanco o marfil. Peldaño: 42 × 25 cm. Alto 1er: 20 cm / 2do: 40 cm / 3ro: 60 cm.",
        price: 236.4,
        image: "/images/mobiliario/ESC3_MET_1P.png"
      },
      {
        sku: "esc3-inox",
        attrs: { modelo: "inox" },
        name: "Acero Inoxidable",
        description: "Fabricada íntegramente en acero inoxidable AISI 304-2B. Tubo de 1\" × 1.25 mm doblado de una sola pieza. Plataformas contraplacadas con plancha de 0.8 mm y jebe antideslizante de 2.5 mm asegurado con filete inox. Regatones de jebe duro. Peldaño: 42 × 25 cm. Alto 1er: 20 cm / 2do: 40 cm / 3ro: 60 cm.",
        price: 598.8,
        image: "/images/mobiliario/ESC3_INOX.png"
      }
    ]
  },

  {
    id: "estanteria-hospitalaria",
    name: "ESTANTERÍA HOSPITALARIA DE ÁNGULOS RANURADOS",
    type: "Mobiliario",
    description: "Estantería con ángulos ranurados y repisas regulables para uso hospitalario. Disponible en estructura metálica y acero inoxidable, con distintas configuraciones de divisiones.",
    image: "/images/mobiliario/EST_MET.png",

    attributeOrder: ["material", "divisiones"],

    attributes: [
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "metalica", label: "Metálica" },
          { id: "inoxidable", label: "Acero Inoxidable" }
        ]
      },
      {
        id: "divisiones",
        label: "Divisiones",
        type: "single",
        dependsOn: {
          material: {
            metalica: ["5div"],
            inoxidable: ["3div", "5div"]
          }
        },
        values: [
          { id: "3div", label: "3 Divisiones" },
          { id: "5div", label: "5 Divisiones" }
        ]
      }
    ],

    variants: [
      {
        sku: "est-met-5div",
        attrs: { material: "metalica", divisiones: "5div" },
        name: "5 Divisiones",
        description: "4 ángulos ranurados de 1½\" × 1½\" × 2 mm. 5 repisas regulables en plancha LAF de 0.6 mm perforadas con pernos zincados 5/16\" × 5/8\". Capacidad de 50 kg por anaquel. Regatones de polietileno en L. Pintado con esmalte epóxico gris claro horneado a 180°C. Dimensiones: 2400 × 900 × 400 mm.",
        price: 417.6,
        image: "/images/mobiliario/EST_MET.png"
      },
      {
        sku: "est-inox-3div",
        attrs: { material: "inoxidable", divisiones: "3div" },
        name: "3 Divisiones",
        description: "4 ángulos ranurados de acero inoxidable de 1½\" × 1½\" × 2 mm. 3 repisas regulables en plancha inox de 0.8 mm perforadas con pernos unicromados 5/16\" × 5/8\". Regatones de polietileno en L. Dimensiones: 1800 × 1000 × 400 mm.",
        price: 1790.4,
        image: "/images/mobiliario/EST_INOX_3D.png"
      },
      {
        sku: "est-inox-5div",
        attrs: { material: "inoxidable", divisiones: "5div" },
        name: "5 Divisiones",
        description: "4 ángulos ranurados de acero inoxidable de 1½\" × 1½\" × 2 mm. 4 repisas regulables en plancha inox de 0.8 mm perforadas con pernos unicromados 5/16\" × 5/8\". Regatones de polietileno en L. Dimensiones: 1800 × 1000 × 400 mm.",
        price: 2280,
        image: "/images/mobiliario/EST_INOX_5D.png"
      }
    ]
  },
  {
    id: "lavamanos-portatil",
    name: "LAVAMANOS PORTÁTIL",
    type: "Mobiliario",
    description: "Mueble autónomo de acero inoxidable calidad 304-2B de 0.5 mm para lavado de manos. Bomba de agua a pedal. Dos depósitos translúcidos de 20 L cada uno (agua limpia y agua sucia) con tapa hermética para verificar nivel. Mangueras internas no visibles desde el frente. Dos ruedas posteriores para fácil traslado. Dimensiones: 500 × 415 mm. Alto hasta lavatorio: 900 mm. Tablero posterior: 410 × 500 mm.",
    price: 1536,
    image: "/images/mobiliario/LAVAMANOS_PORT.png"
  },
  {
    id: "porta-chatas-papagayos-pared",
    name: "PORTA CHATAS Y PAPAGAYOS DE PARED",
    type: "Mobiliario",
    description: "Fabricado íntegramente en acero inoxidable incluyendo todas las partes, accesorios y soldadura. Plancha de 1/16\" de espesor, diseñado para adosar a la pared. 8 ganchos porta papagayos y 8 abrazaderas porta chatas. Bandeja inferior desmontable para recibir líquidos. Dimensiones: 1550 × 1200 mm.",
    price: 1776,
    image: "/images/mobiliario/PORTA_CHATA_PARED.png"
  },
  {
    id: "percha-metalica-pared-4-ganchos",
    name: "PERCHA METÁLICA DE PARED CON 4 GANCHOS",
    type: "Mobiliario",
    description: "Fabricada íntegramente en plancha de acero laminado al frío de 1 mm. 4 ganchos de varilla de acero inoxidable de 3/16\" con bola de plástico. Tratamiento fosfatizado y pintado con 2 capas de esmalte al horno en blanco o marfil. Dimensiones: 450 × 120 mm.",
    price: 98.4,
    image: "/images/mobiliario/PERCHA_PARED.png"
  },

  {
    id: "porta-suero-rodable",
    name: "PORTA SUERO RODABLE",
    type: "Mobiliario",
    description: "Porta suero rodable con varilla de altura regulable mediante perilla. Disponible en distintas configuraciones de base, parante y accesorios.",
    image: "/images/mobiliario/PS_MET.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "met", label: "Metálico" },
          { id: "crom", label: "Cromado" },
          { id: "pvc-pint", label: "Base PVC Pintado" },
          { id: "pvc-inox", label: "Base PVC Inox" },
          { id: "inox", label: "Inox" },
          { id: "inox-tablero", label: "Inox con Tablero" },
          { id: "inox-can", label: "Inox con Canastilla" }
        ]
      }
    ],

    variants: [
      {
        sku: "ps-met",
        attrs: { modelo: "met" },
        name: "Metálico",
        description: "Base de 4 patas en tubo cuadrado LAF de 1½\" × 1.2 mm × 46 cm. Parante en tubo LAF redondo de 1¼\" × 1.2 mm × 111 cm. Varilla inox 304-2B con altura regulable 114–205 cm mediante perilla.",
        price: 97.2,
        image: "/images/mobiliario/PS_MET.png"
      },
      {
        sku: "ps-crom",
        attrs: { modelo: "crom" },
        name: "Cromado",
        description: "Base cromada con patas de 45 cm. Varilla de 2 ganchos × 100 cm de largo. Garruchas de nylon y perilla de acero. Altura regulable: 110–198 cm.",
        price: 144,
        image: "/images/mobiliario/PS_CROM.png"
      },
      {
        sku: "ps-pvc-pint",
        attrs: { modelo: "pvc-pint" },
        name: "Base PVC Pintado",
        description: "Base pentagonal de polímero resistente con 5 ruedas omnidireccionales de PVC. Parante en tubo LAF redondo de 1¼\" × 1.2 mm × 111 cm. Varilla inox 304-2B regulable 114–205 cm. Acabado electrostático poliéster-epoxy blanco o marfil al horno 200°C.",
        price: 285.6,
        image: "/images/mobiliario/PS_PVC_PINT.png"
      },
      {
        sku: "ps-pvc-inox",
        attrs: { modelo: "pvc-inox" },
        name: "Base PVC Inox",
        description: "Base pentagonal de polímero resistente con 5 ruedas omnidireccionales de PVC. Parante de tubo inox redondo de 1¼\" × 1.2 mm × 111 cm. Varilla inox 304-2B de 4 ganchos regulable 114–205 cm mediante perilla.",
        price: 333.6,
        image: "/images/mobiliario/PS_PVC_INOX.png"
      },
      {
        sku: "ps-inox",
        attrs: { modelo: "inox" },
        name: "Inox",
        description: "Base de 5 patas en tubo inox de 1½\" × 1.2 mm con acabado media luna y garruchas metálicas. Parante de tubo inox redondo de 1¼\" × 1.2 mm × 111 cm. Varilla inox 304-2B de 4 ganchos regulable 114–205 cm mediante perilla.",
        price: 403.2,
        image: "/images/mobiliario/PS_INOX.png"
      },
      {
        sku: "ps-inox-tablero",
        attrs: { modelo: "inox-tablero" },
        name: "Inox con Tablero",
        description: "Base de 4 patas en tubo inox de 1½\" × 1.2 mm con garruchas de PVC. Parante de tubo inox de 1¼\" × 1.2 mm × 111 cm. Varilla inox 304-2B de 4 ganchos regulable 114–205 cm. Tablero de acero inoxidable de 30 × 40 cm.",
        price: 588,
        image: "/images/mobiliario/PS_INOX_TAB.png"
      },
      {
        sku: "ps-inox-can",
        attrs: { modelo: "inox-can" },
        name: "Inox con Canastilla",
        description: "Base de 5 patas en tubo inox de 1½\" × 1.2 mm con acabado media luna y garruchas metálicas. Parante de tubo inox de 1¼\" × 1.2 mm × 111 cm. Varilla inox 304-2B de 4 ganchos regulable 114–205 cm. Canastilla de acero inoxidable de 20 × 30 × 15 cm.",
        price: 594,
        image: "/images/mobiliario/PS_INOX_CAN.png"
      }
    ]
  },

  {
    id: "silla-toma-muestras",
    name: "SILLA PARA TOMA DE MUESTRAS",
    type: "Mobiliario",
    description: "Silla para toma de muestras fabricada en tubo cuadrado de 1\" × 1.2 mm. Asiento y respaldo con espuma indeformable de 3\" tapizado en marroquí resistente. Soldadura MIG con acabado electrostático al horno 180–200°C. Disponible con 1 brazo, 2 brazos o con gabinete incorporado.",
    image: "/images/mobiliario/SILLA_TM_1B.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "1-brazo", label: "1 Brazo Regulable" },
          { id: "2-brazos", label: "2 Brazos Regulables" },
          { id: "gabinete", label: "Con Gabinete" }
        ]
      }
    ],

    variants: [
      {
        sku: "silla-tm-1b",
        attrs: { modelo: "1-brazo" },
        name: "1 Brazo Regulable",
        description: "Posa brazo regulable mediante perilla, altura regulable 50–78 cm. Asiento y respaldo con espuma indeformable 3\" en marroquí resistente. Dimensiones: 77 × 76 × 95 cm. Alto hasta asiento: 49 cm.",
        price: 210,
        image: "/images/mobiliario/SILLA_TM_1B.png"
      },
      {
        sku: "silla-tm-2b",
        attrs: { modelo: "2-brazos" },
        name: "2 Brazos Regulables",
        description: "Dos posa brazos regulables mediante perilla, altura regulable 50–78 cm. Asiento y respaldo con espuma indeformable 3\" en marroquí resistente. Dimensiones: 77 × 76 × 95 cm. Alto hasta asiento: 49 cm.",
        price: 234,
        image: "/images/mobiliario/SILLA_TM_2B.png"
      },
      {
        sku: "silla-tm-gab",
        attrs: { modelo: "gabinete" },
        name: "Con Gabinete",
        description: "Silla con brazo regulable integrada a gabinete lateral con tablero y barandilla. Dimensiones totales: 120 × 65 × 133 cm. Silla: 77 × 76 cm, alto asiento 49 cm, alto con espaldar 95 cm. Gabinete: 40 × 39 cm, alto tablero 81 cm (87 cm con barandilla).",
        price: 675.6,
        image: "/images/mobiliario/SILLA_TM_GAB.png"
      }
    ]
  },


  // ══════════════════════════════════════════════
  // VITRINA HOSPITALARIA
  // ══════════════════════════════════════════════
  {
    id: "vitrina-hospitalaria",
    name: "VITRINA HOSPITALARIA",
    type: "Mobiliario",
    description: "Vitrina hospitalaria para instrumental y material estéril. Disponible en estructura metálica y acero inoxidable AISI 304-2B, en modelos de 1 y 2 cuerpos.",
    image: "/images/mobiliario/VIT_MET_1C.png",

    attributeOrder: ["material", "cuerpos"],

    attributes: [
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "metalica", label: "Metálica" },
          { id: "inoxidable", label: "Acero Inoxidable" }
        ]
      },
      {
        id: "cuerpos",
        label: "Cuerpos",
        type: "single",
        dependsOn: {
          material: {
            metalica: ["1-cuerpo", "2-cuerpos"],
            inoxidable: ["1-cuerpo", "2-cuerpos"]
          }
        },
        values: [
          { id: "1-cuerpo", label: "1 Cuerpo" },
          { id: "2-cuerpos", label: "2 Cuerpos" }
        ]
      }
    ],

    variants: [
      {
        sku: "vit-met-1c",
        attrs: { material: "metalica", cuerpos: "1-cuerpo" },
        name: "1 Cuerpo",
        description: "Plancha LAF de 0.6 mm. Puerta superior con vidrio doble de 4 mm y cerradura tipo Yale. 2 divisiones regulables interiores. Cajón deslizable con tirador cromado de 3\". Puerta inferior metálica con llave. Acabado esmaltado al horno en blanco o marfil. Dimensiones: 50 × 30 × 173 cm.",
        price: 405.6,
        image: "/images/mobiliario/VIT_MET_1C.png"
      },
      {
        sku: "vit-met-2c",
        attrs: { material: "metalica", cuerpos: "2-cuerpos" },
        name: "2 Cuerpos",
        description: "Plancha LAF de 0.6 mm. 2 puertas superiores de vidrio doble 4 mm con llave. 2 cajones corredizos horizontales. 2 puertas inferiores metálicas con cerradura. 2 divisiones regulables por compartimiento superior y 1 en inferior. Tiradores tipo asa cromada. Acabado electrostático al horno 200°C. Dimensiones: 80 × 37 × 173 cm.",
        price: 538.8,
        image: "/images/mobiliario/VIT_MET_2C.png"
      },
      {
        sku: "vit-inox-1c",
        attrs: { material: "inoxidable", cuerpos: "1-cuerpo" },
        name: "1 Cuerpo",
        description: "Plancha de acero inoxidable AISI 304-2B de 0.8 mm. Puerta superior con vidrio doble 4 mm y 3 divisiones interiores de vidrio de 6 mm regulables. Cajón con corredera telescópica de extracción total. Puerta inferior inox con tablero interior. Cerraduras tipo Yale con 2 llaves. Patas inox perfiladas con jebe. Tiradores inox. Dimensiones: 680 × 450 × 1700 mm.",
        price: 3072,
        image: "/images/mobiliario/VIT_INOX_1C.png"
      },
      {
        sku: "vit-inox-2c",
        attrs: { material: "inoxidable", cuerpos: "2-cuerpos" },
        name: "2 Cuerpos",
        description: "Plancha de acero inoxidable AISI 304-2B de 0.8 mm. 2 puertas superiores con vidrio de 6 mm y 3 divisiones de vidrio regulables. 2 cajones centrales con correderas telescópicas. 2 puertas inferiores inox con tablero interior. Tiradores tipo asa inox de 150 mm. 4 patas piramidales inox con banda de jebe. Soldadura eléctrica garantizada. Dimensiones: 1040 × 450 × 1700 mm.",
        price: 4428,
        image: "/images/mobiliario/VIT_INOX_2C.png"
      }
    ]
  },



  {
    id: "colchon-articulado-cama-clinica",
    name: "COLCHÓN ARTICULADO PARA CAMA CLÍNICA",
    type: "Mobiliario",
    description: "Colchón articulado para cama clínica de 4\" de espesor. Disponible en 1 plaza y 1 plaza y media.",
    image: "/images/mobiliario/COLCHON_CLIN.png",

    attributeOrder: ["tamano"],

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "1plaza", label: "1 Plaza – 90 × 180 cm" },
          { id: "1plaza-med", label: "1 Plaza y Media – 115 × 180 cm" }
        ]
      }
    ],

    variants: [
      {
        sku: "colchon-clin-1plaza",
        attrs: { tamano: "1plaza" },
        name: "1 Plaza – 90 × 180 cm",
        description: "Colchón articulado para cama clínica. Ancho: 90 cm / Largo: 180 cm / Espesor: 4\".",
        price: 271.2,
        image: "/images/mobiliario/COLCHON_CLIN.png"
      },
      {
        sku: "colchon-clin-1plaza-med",
        attrs: { tamano: "1plaza-med" },
        name: "1 Plaza y Media – 115 × 180 cm",
        description: "Colchón articulado para cama clínica. Ancho: 115 cm / Largo: 180 cm / Espesor: 4\".",
        price: 330,
        image: "/images/mobiliario/COLCHON_CLIN.png"
      }
    ]
  },
  {
    id: "colchon-antiescaras",
    name: "COLCHÓN ANTIESCARAS",
    type: "Mobiliario",
    description: "Colchón antiescaras con motor compresor de aire de trabajo continuo 24 horas. Alimentación: 220V / 60Hz. Salida de aire ≥ 5 L/min. Consumo: 7W. Color beige. Incluye kit de reparación. Dimensiones del colchón: 298 × 92 × 6.5 cm. Dimensiones del motor: 23.5 × 11.2 × 10.8 cm. Peso motor: 1 kg.",
    price: 240,
    image: "/images/mobiliario/COLCHON_ANTIESCARAS.png"
  },
  {
    id: "asiento-de-gel-rodete-de-gel-45-cm-di-metro-02-azules-01-rojo-medicaltex",
    name: "ASIENTO DE GEL – RODETE DE GEL 45 cm DIÁMETRO 02 AZULES (01) ROJO MEDICALTEX",
    description: "ASIENTO DE GEL – RODETE DE GEL 45 cm DIÁMETRO 02 AZULES (01) ROJO MEDICALTEX",
    price: 154.8,
    image: "/images/mobiliario/placeholder.png"
  },
  {
    id: "asiento-de-gel-rodete-de-gel-45-cm-di-metro-marca-dolphin-relax",
    name: "ASIENTO DE GEL – RODETE DE GEL 45 cm DIÁMETRO MARCA DOLPHIN RELAX",
    description: "ASIENTO DE GEL – RODETE DE GEL 45 cm DIÁMETRO MARCA DOLPHIN RELAX",
    price: 84,
    image: "/images/mobiliario/placeholder.png"
  },
  {
    id: "almohadilla-de-cabeza-herradura-modelo-40205-pediatrico-action",
    name: "ALMOHADILLA DE CABEZA HERRADURA MODELO 40205 PEDIATRICO ACTION",
    description: "ALMOHADILLA DE CABEZA HERRADURA MODELO 40205 PEDIATRICO ACTION",
    price: 780,
    image: "/images/mobiliario/placeholder.png"
  },


  {
    id: "sabanas-para-camillero-s-banas-para-camilla-de-4-pzas-algod-n-bramante",
    name: "SABANAS PARA CAMILLERO (SÁBANAS PARA CAMILLA DE 4 PZAS ALGODÓN BRAMANTE)",
    description: "SABANAS PARA CAMILLERO (SÁBANAS PARA CAMILLA DE 4 PZAS ALGODÓN BRAMANTE)",
    price: 120,
    image: "/images/mobiliario/placeholder.png"
  },
  {
    id: "polimero-de-gel-para-la-cabeza-50-30-cm-23-25-5-7-cm",
    name: "POLIMERO DE GEL PARA LA CABEZA 50 × 30 cm***23 × 25 × 5.7 cm***",
    description: "POLIMERO DE GEL PARA LA CABEZA 50 × 30 cm***23 × 25 × 5.7 cm***",
    price: 840,
    image: "/images/mobiliario/placeholder.png"
  },
  {
    id: "polimero-gel-p-cabeza-material-hidrogel-tipo-picaron-20-5-25-5-7-cm",
    name: "POLIMERO GEL P/ CABEZA, MATERIAL HIDROGEL , TIPO PICARON***20.5 × 25 × 5.7 cm***",
    description: "POLIMERO GEL P/ CABEZA, MATERIAL HIDROGEL , TIPO PICARON***20.5 × 25 × 5.7 cm***",
    price: 960,
    image: "/images/mobiliario/placeholder.png"
  },
  {
    id: "almohadilla-de-cabeza-dona-modelo-40201",
    name: "ALMOHADILLA DE CABEZA DONA MODELO 40201",
    description: "ALMOHADILLA DE CABEZA DONA MODELO 40201",
    price: 960,
    image: "/images/mobiliario/placeholder.png"
  },
  {
    id: "almohadilla-de-cabeza-herradura-modelo-40204-adulto",
    name: "ALMOHADILLA DE CABEZA HERRADURA MODELO 40204 ADULTO",
    description: "ALMOHADILLA DE CABEZA HERRADURA MODELO 40204 ADULTO",
    price: 960,
    image: "/images/mobiliario/placeholder.png"
  },
  {
    id: "almohadilla-posicionamiento-modelo-40713",
    name: "ALMOHADILLA POSICIONAMIENTO MODELO 40713",
    description: "ALMOHADILLA POSICIONAMIENTO MODELO 40713",
    price: 2400,
    image: "/images/mobiliario/placeholder.png"
  },
  {
    id: "almohadilla-protector-de-talon-modelo-40401",
    name: "ALMOHADILLA PROTECTOR DE TALON MODELO 40401",
    description: "ALMOHADILLA PROTECTOR DE TALON MODELO 40401",
    price: 720,
    image: "/images/mobiliario/placeholder.png"
  },
  {
    id: "cubierta-quirurgica-mediana-modelo-40100",
    name: "CUBIERTA QUIRURGICA MEDIANA MODELO 40100",
    description: "CUBIERTA QUIRURGICA MEDIANA MODELO 40100",
    price: 5400,
    image: "/images/mobiliario/placeholder.png"
  },
  {
    id: "rollos-de-pecho-para-adulto-modelo-40617",
    name: "ROLLOS DE PECHO PARA ADULTO MODELO 40617",
    description: "ROLLOS DE PECHO PARA ADULTO MODELO 40617",
    price: 1440,
    image: "/images/mobiliario/placeholder.png"
  },
  {
    id: "rollos-de-pecho-para-adulto-modelo-40618",
    name: "ROLLOS DE PECHO PARA ADULTO MODELO 40618",
    description: "ROLLOS DE PECHO PARA ADULTO MODELO 40618",
    price: 1800,
    image: "/images/mobiliario/placeholder.png"
  },
];

