// src/data/products/rehabilitacionYFisioterapia.js

export const rehabilitacionYFisioterapiaProducts = [

  // ─── 1. COJÍN DE FLOTACIÓN ───────────────────────────────────────────────────
  {
    id: "cojin-flotacion-hidroterapia",
    name: "COJÍN DE FLOTACIÓN PARA HIDROTERAPIA",
    type: "Hidroterapia",
    description: "Cojín de flotación cervical para sesiones de hidroterapia y rehabilitación acuática. Fabricado en espuma de polietileno de celda cerrada resistente al agua y de fácil limpieza y desinfección. Proporciona soporte y estabilidad en el agua facilitando ejercicios terapéuticos de movilidad articular, fortalecimiento muscular y relajación en descarga. Apto para uso en piscinas terapéuticas, programas de fisioterapia acuática, rehabilitación neurológica y recreación terapéutica. || Material: Espuma de polietileno celda cerrada | Uso: Hidroterapia, rehabilitación acuática, fisioterapia neurológica | Resistencia: Agua clorada y salada.",
    price: 150,
    image: "/images/rehab/FLOTADOR CERVICAL/CARD.png",
    images: [
      "/images/rehab/FLOTADOR CERVICAL/CARD.png",
      "/images/rehab/FLOTADOR CERVICAL/WATER FUN.png",
      "/images/rehab/FLOTADOR CERVICAL/WATER FUN_2.png"
    ]
  },

  // ─── 2. BANDAS THERABAND KIT x3 ──────────────────────────────────────────────
  {
    id: "bandas-theraband-kit-x3",
    name: "BANDAS THERABAND x3 UNIDADES",
    type: "Rehabilitacion",
    description: "Kit de 3 bandas elásticas de resistencia Theraband codificadas por color para entrenamiento de fuerza progresivo, rehabilitación, fisioterapia, pilates, yoga y tonificación muscular. Disponible en nivel principiante (amarillo, rojo, verde) con látex o sin látex, y nivel avanzado (azul, negro, plata) con látex. Cada banda mide 5 pies de largo.",
    image: "/images/rehab/KIT 3/CARD.png",

    attributeOrder: ["nivel", "material"],

    attributes: [
      {
        id: "nivel",
        label: "Nivel",
        type: "single",
        values: [
          { id: "principiante", label: "Principiante" },
          { id: "avanzado", label: "Avanzado" }
        ]
      },
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "latex", label: "Con látex" },
          { id: "sin-latex", label: "Sin látex" }
        ]
      }
    ],

    attributeRules: {
      "principiante": { material: ["latex", "sin-latex"] },
      "avanzado": { material: ["latex"] }
    },

    variants: [
      {
        sku: "kit3-principiante-latex",
        attrs: { nivel: "principiante", material: "latex" },
        name: "PRINCIPIANTE – CON LÁTEX",
        description: "Kit 3 bandas Theraband principiante con látex para entrenamiento de fuerza de bajo impacto, rehabilitación y fisioterapia. Incluye 3 bandas abiertas de látex natural 5 pies × 5 pulgadas: amarillo (3–4.3 lb), rojo (3.7–5.5 lb) y verde (4.6–6.7 lb). || Material: Látex natural | Medidas: 5 pies × 5 pulg | Resistencias: Amarillo, Rojo, Verde.",
        price: 120,
        image: "/images/rehab/KIT 3/LATEX_1.png",
        images: [
          "/images/rehab/KIT 3/LATEX_1.png",
          "/images/rehab/KIT 3/LATEX_2.png"
        ]
      },
      {
        sku: "kit3-principiante-sin-latex",
        attrs: { nivel: "principiante", material: "sin-latex" },
        name: "PRINCIPIANTE – SIN LÁTEX",
        description: "Kit 3 bandas Theraband principiante sin látex para entrenamiento de bajo impacto, ideal para usuarios con sensibilidad al látex o instituciones con política latex-free. Incluye 3 bandas abiertas 5 pies × 4 pulgadas: amarillo (3–4.3 lb), rojo (3.7–5.5 lb) y verde (4.6–6.7 lb). || Material: Sin látex | Medidas: 5 pies × 4 pulg | Resistencias: Amarillo, Rojo, Verde.",
        price: 120,
        image: "/images/rehab/KIT 3/NOLATEX_1.png",
        images: [
          "/images/rehab/KIT 3/NOLATEX_1.png",
          "/images/rehab/KIT 3/NOLATEX_2.png"
        ]
      },
      {
        sku: "kit3-avanzado-latex",
        attrs: { nivel: "avanzado", material: "latex" },
        name: "AVANZADO – CON LÁTEX",
        description: "Kit 3 bandas Theraband avanzado con látex para entrenamiento de fuerza progresivo, rehabilitación y acondicionamiento físico. Incluye 3 bandas abiertas de látex natural 5 pies × 4 pulgadas: azul (5.8–8.5 lb), negro (7.3–10.2 lb) y plata (10.2–15.3 lb). || Material: Látex natural | Medidas: 5 pies × 4 pulg | Resistencias: Azul, Negro, Plata.",
        price: 150,
        image: "/images/rehab/KIT 3/CARD_AV.png",
        images: [
          "/images/rehab/KIT 3/AV_1.png",
          "/images/rehab/KIT 3/AV_2.png"
        ]
      }
    ]
  },

  // ─── 3. BANDAS THERABAND 23 MT ───────────────────────────────────────────────
  {
    id: "banda-theraband-23mt",
    name: "BANDAS THERABAND 23 MT – SIN LÁTEX",
    type: "Rehabilitacion",
    description: "Rollo de banda elástica de resistencia Theraband sin látex de 25 yardas (≈23 m) × 4 pulgadas. Fabricada en material libre de látex, sin olor ni polvo, ideal para usuarios con sensibilidad al látex o instituciones con política latex-free. Permite cortar longitudes personalizadas para cada paciente o ejercicio. Disponible en 7 niveles de resistencia codificados por color desde ligero hasta máximo.",
    image: "/images/rehab/23 MT/CARD.png",

    attributeOrder: ["color"],

    attributes: [
      {
        id: "color",
        label: "Nivel de resistencia",
        type: "single",
        values: [
          { id: "amarillo", label: "Amarillo – Ligero" },
          { id: "rojo", label: "Rojo – Medio" },
          { id: "verde", label: "Verde – Pesado" },
          { id: "azul", label: "Azul – Extra fuerte" },
          { id: "negro", label: "Negro – Muy fuerte" },
          { id: "plata", label: "Plata – Súper fuerte" },
          { id: "oro", label: "Oro – Máximo" }
        ]
      }
    ],

    variants: [
      {
        sku: "theraband-23mt-amarillo",
        attrs: { color: "amarillo" },
        name: "AMARILLO – LIGERO",
        description: "Rollo Theraband sin látex 23 m, nivel ligero. Resistencia: 3 lb al 100% de elongación y 4.3 lb al 200%. Ideal para rehabilitación inicial y ejercicios de baja intensidad. || Medidas: 25 yardas × 4 pulg | Sin látex.",
        price: 320,
        image: "/images/rehab/23 MT/YELLOW_25.png",
        images: ["/images/rehab/23 MT/YELLOW_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-rojo",
        attrs: { color: "rojo" },
        name: "ROJO – MEDIO",
        description: "Rollo Theraband sin látex 23 m, nivel medio. Resistencia: 3.7 lb al 100% y 5.5 lb al 200%. Para fortalecimiento progresivo, fisioterapia y pilates. || Medidas: 25 yardas × 4 pulg | Sin látex.",
        price: 320,
        image: "/images/rehab/23 MT/RED_25.png",
        images: ["/images/rehab/23 MT/RED_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-verde",
        attrs: { color: "verde" },
        name: "VERDE – PESADO",
        description: "Rollo Theraband sin látex 23 m, nivel pesado. Resistencia: 4.6 lb al 100% y 6.7 lb al 200%. Para fortalecimiento, fisioterapia y estiramientos. || Medidas: 25 yardas × 4 pulg | Sin látex.",
        price: 320,
        image: "/images/rehab/23 MT/GREEN_25.png",
        images: ["/images/rehab/23 MT/GREEN_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-azul",
        attrs: { color: "azul" },
        name: "AZUL – EXTRA FUERTE",
        description: "Rollo Theraband sin látex 23 m, nivel extra fuerte. Resistencia: 5.8 lb al 100% y 8.6 lb al 200%. Para entrenamiento de fuerza moderado y rehabilitación. || Medidas: 25 yardas × 4 pulg | Sin látex.",
        price: 320,
        image: "/images/rehab/23 MT/BLUE_25.png",
        images: ["/images/rehab/23 MT/BLUE_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-negro",
        attrs: { color: "negro" },
        name: "NEGRO – MUY FUERTE",
        description: "Rollo Theraband sin látex 23 m, nivel muy fuerte. Resistencia: 7.3 lb al 100% y 10.2 lb al 200%. Para entrenamiento moderado-avanzado y fisioterapia. || Medidas: 25 yardas × 4 pulg | Sin látex.",
        price: 320,
        image: "/images/rehab/23 MT/BLACK_25.png",
        images: ["/images/rehab/23 MT/BLACK_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-plata",
        attrs: { color: "plata" },
        name: "PLATA – SÚPER FUERTE",
        description: "Rollo Theraband sin látex 23 m, nivel súper fuerte. Resistencia: 10.2 lb al 100% y 15.3 lb al 200%. Para fuerza avanzada y acondicionamiento muscular. || Medidas: 25 yardas × 4 pulg | Sin látex.",
        price: 320,
        image: "/images/rehab/23 MT/SILVER_25.png",
        images: ["/images/rehab/23 MT/SILVER_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-oro",
        attrs: { color: "oro" },
        name: "ORO – MÁXIMO",
        description: "Rollo Theraband sin látex 23 m, nivel máximo. Resistencia: 14.2 lb al 100% y 21.3 lb al 200%. Para entrenamiento intensivo, fortalecimiento avanzado y funcional. || Medidas: 25 yardas × 4 pulg | Sin látex.",
        price: 320,
        image: "/images/rehab/23 MT/GOLD_25.png",
        images: ["/images/rehab/23 MT/GOLD_25.png", "/images/rehab/23 MT/INFO.png"]
      }
    ]
  },

  // ─── 4. BANDAS THERABAND 5.5 MT ──────────────────────────────────────────────
  {
    id: "banda-theraband-5-5mt-latex",
    name: "BANDAS THERABAND 5.5 MT – CON LÁTEX",
    type: "Rehabilitacion",
    description: "Rollo de banda elástica de resistencia Theraband con látex natural de alta calidad de 6 yardas (≈5.5 m) × 5 pulgadas. Permite mejorar la fuerza, rango de movimiento y flexibilidad mediante ejercicios de bajo a alto impacto. Longitud ideal para cortar porciones de trabajo individuales o usar el rollo completo en sesiones grupales. Disponible en 8 niveles de resistencia codificados por color.",
    image: "/images/rehab/5.5 MT/CARD.png",

    attributeOrder: ["color"],

    attributes: [
      {
        id: "color",
        label: "Nivel de resistencia",
        type: "single",
        values: [
          { id: "rosa", label: "Rosa – Extra ligero" },
          { id: "amarillo", label: "Amarillo – Ligero" },
          { id: "rojo", label: "Rojo – Medio" },
          { id: "verde", label: "Verde – Fuerte" },
          { id: "azul", label: "Azul – Extra fuerte" },
          { id: "negro", label: "Negro – Muy fuerte" },
          { id: "plata", label: "Plata – Súper fuerte" },
          { id: "oro", label: "Oro – Máximo" }
        ]
      }
    ],

    variants: [
      {
        sku: "theraband-6y-rosa",
        attrs: { color: "rosa" },
        name: "ROSA – EXTRA LIGERO",
        description: "Rollo Theraband con látex 5.5 m, nivel extra ligero. Resistencia: 2.4 lb al 100% y 3.4 lb al 200%. Para pacientes en recuperación o inicio de entrenamiento. || Medidas: 6 yardas × 5 pulg | Con látex.",
        price: 80,
        image: "/images/rehab/5.5 MT/PINK_6.png",
        images: ["/images/rehab/5.5 MT/PINK_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-amarillo",
        attrs: { color: "amarillo" },
        name: "AMARILLO – LIGERO",
        description: "Rollo Theraband con látex 5.5 m, nivel ligero. Resistencia: 3.0 lb al 100% y 4.3 lb al 200%. Para inicio de programas de entrenamiento y recuperación. || Medidas: 6 yardas × 5 pulg | Con látex.",
        price: 80,
        image: "/images/rehab/5.5 MT/YELLOW_6.png",
        images: ["/images/rehab/5.5 MT/YELLOW_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-rojo",
        attrs: { color: "rojo" },
        name: "ROJO – MEDIO",
        description: "Rollo Theraband con látex 5.5 m, nivel medio. Resistencia: 3.7 lb al 100% y 5.5 lb al 200%. Para resistencia ligera y terapia física. || Medidas: 6 yardas × 5 pulg | Con látex.",
        price: 80,
        image: "/images/rehab/5.5 MT/RED_6.png",
        images: ["/images/rehab/5.5 MT/RED_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-verde",
        attrs: { color: "verde" },
        name: "VERDE – FUERTE",
        description: "Rollo Theraband con látex 5.5 m, nivel fuerte. Resistencia: 4.6 lb al 100% y 6.7 lb al 200%. Para resistencia ligera a moderada y terapia física. || Medidas: 6 yardas × 5 pulg | Con látex.",
        price: 80,
        image: "/images/rehab/5.5 MT/GREEN_6.png",
        images: ["/images/rehab/5.5 MT/GREEN_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-azul",
        attrs: { color: "azul" },
        name: "AZUL – EXTRA FUERTE",
        description: "Rollo Theraband con látex 5.5 m, nivel extra fuerte. Resistencia: 5.8 lb al 100% y 8.6 lb al 200%. Para entrenamiento de resistencia medio y terapia física. || Medidas: 6 yardas × 5 pulg | Con látex.",
        price: 80,
        image: "/images/rehab/5.5 MT/BLUE_6.png",
        images: ["/images/rehab/5.5 MT/BLUE_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-negro",
        attrs: { color: "negro" },
        name: "NEGRO – MUY FUERTE",
        description: "Rollo Theraband con látex 5.5 m, nivel muy fuerte. Resistencia: 7.3 lb al 100% y 10.2 lb al 200%. Para entrenamiento de alto nivel y terapia física avanzada. || Medidas: 6 yardas × 5 pulg | Con látex.",
        price: 80,
        image: "/images/rehab/5.5 MT/BLACK_6.png",
        images: ["/images/rehab/5.5 MT/BLACK_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-plata",
        attrs: { color: "plata" },
        name: "PLATA – SÚPER FUERTE",
        description: "Rollo Theraband con látex 5.5 m, nivel súper fuerte. Resistencia: 10.2 lb al 100% y 15.3 lb al 200%. Excelente alternativa al entrenamiento con pesas. || Medidas: 6 yardas × 5 pulg | Con látex.",
        price: 80,
        image: "/images/rehab/5.5 MT/SILVER_6.png",
        images: ["/images/rehab/5.5 MT/SILVER_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-oro",
        attrs: { color: "oro" },
        name: "ORO – MÁXIMO",
        description: "Rollo Theraband con látex 5.5 m, nivel máximo. Resistencia: 14.2 lb al 100% y 21.3 lb al 200%. Para ejercicios de alta intensidad y alternativa al entrenamiento con pesas. || Medidas: 6 yardas × 5 pulg | Con látex.",
        price: 80,
        image: "/images/rehab/5.5 MT/GOLD_6.png",
        images: ["/images/rehab/5.5 MT/GOLD_6.png", "/images/rehab/5.5 MT/INFO.png"]
      }
    ]
  },

  // ─── 5. BANDAS THERABAND KIT x7 ──────────────────────────────────────────────
  {
    id: "bandas-elasticas-latex-x7",
    name: "BANDAS THERABAND x7 UNIDADES",
    type: "Rehabilitacion",
    description: "Kit completo de 7 bandas elásticas de resistencia Theraband con látex natural para entrenamiento de fuerza progresivo, rehabilitación y fisioterapia. Incluye los 7 niveles de resistencia codificados por color: amarillo (3 lb), rojo (3.7 lb), verde (4.6 lb), azul (5.8 lb), negro (7.3 lb), plata (10.2 lb) y oro (14.2 lb), permitiendo una progresión gradual completa desde nivel inicial hasta avanzado. Cada banda mide 6 pies × 5 pulgadas de látex natural de alta calidad.",
    price: 250,
    image: "/images/rehab/KIT 7/CARD.png",
    images: [
      "/images/rehab/KIT 7/KIT7.png",
      "/images/rehab/KIT 7/INFO.png"
    ]
  },

  // ─── 6. BANDAS THERABAND LOOP ─────────────────────────────────────────────────
  {
    id: "bandas-theraband-loop-x4",
    name: "BANDAS THERABAND LOOP",
    type: "Rehabilitacion",
    description: "Bandas tipo loop Theraband de diseño continuo para entrenamiento funcional, fortalecimiento muscular y programas de rehabilitación. Su forma de aro evita anudar bandas planas, proporcionando mayor comodidad, estabilidad y facilidad de uso en clínica, gimnasio o en casa. Disponibles en kit x4 de resistencia estándar (principiante-intermedio) y kit x3 de resistencia elevada (avanzado).",
    image: "/images/rehab/KIT LOOPS/CARD.png",

    attributeOrder: ["kit"],

    attributes: [
      {
        id: "kit",
        label: "Kit",
        type: "single",
        values: [
          { id: "x4", label: "x4 Unidades – Resistencia estándar" },
          { id: "x3", label: "x3 Unidades – Resistencia elevada" }
        ]
      }
    ],

    variants: [
      {
        sku: "loop-kit-x4",
        attrs: { kit: "x4" },
        name: "x4 UNIDADES – RESISTENCIA ESTÁNDAR",
        description: "Kit 4 bandas loop Theraband para progresión de resistencia en pilates, yoga, fisioterapia y entrenamiento de tren inferior y superior. Medidas: 18 pulgadas × 3 pulgadas. Resistencias: Amarilla 6 lb | Roja 7.4 lb | Verde 9.2 lb | Azul 11.6 lb. || Bandas: 4 | Medidas: 18 × 3 pulg | Nivel: Principiante a intermedio.",
        price: 150,
        image: "/images/rehab/KIT LOOPS/KIT 4.png",
        images: [
          "/images/rehab/KIT LOOPS/KIT 4.png",
          "/images/rehab/KIT LOOPS/INFO.png"
        ]
      },
      {
        sku: "loop-kit-x3",
        attrs: { kit: "x3" },
        name: "x3 UNIDADES – RESISTENCIA ELEVADA",
        description: "Kit 3 bandas loop Theraband de látex para trabajo de glúteos, rodillas, caderas y musculatura de tren superior e inferior en fisioterapia y entrenamiento avanzado. Medidas: 18 pulgadas × 3 pulgadas. Resistencias: Negro 7.3 lb | Plateado 10.2 lb | Oro 14.2 lb. || Bandas: 3 | Medidas: 18 × 3 pulg | Nivel: Avanzado.",
        price: 200,
        image: "/images/rehab/KIT LOOPS/KIT 3.png",
        images: [
          "/images/rehab/KIT LOOPS/KIT 3.png",
          "/images/rehab/KIT LOOPS/INFO.png"
        ]
      }
    ]
  },

  // ─── 7. SET DE GONIÓMETRO ─────────────────────────────────────────────────────
  {
    id: "set-goniometro-6-pzas",
    name: "SET DE GONIÓMETRO 6 PZAS",
    type: "Antropometria",
    description: "Set profesional de 6 goniómetros de PVC transparente de alta calidad en distintos tamaños (6\", 8\" y 12\") para medición del rango de movimiento articular en todas las articulaciones del cuerpo. Incluye goniómetros de brazo largo para caderas, rodillas y hombros, de brazo corto para muñecas, tobillos y dedos, goniómetro para flexión lumbar y goniómetro de dedo para evaluaciones de rango articular fino. Escala de 0° a 360° con graduaciones en negro y rojo de fácil lectura. Ligeros, resistentes y de uso clínico diario en fisioterapia, traumatología y rehabilitación.",
    price: 50,
    image: "/images/diagnostico/GONIOMETRO/GONIOMETRO.png"
  },

  // ─── 8. PESA TOBILLERA ────────────────────────────────────────────────────────
  {
    id: "pesa-tobillera",
    name: "PESA TOBILLERA CON VELCRO",
    type: "Rehabilitacion",
    description: "Pesa tobillera con cierre de velcro ajustable para ejercicios de rehabilitación, fortalecimiento muscular de tren inferior y entrenamiento funcional. Disponible en tres materiales: arena (económica y moldeable), metal (peso concentrado y compacto) y neoprene (suave, confortable y resistente al sudor). Cada material disponible en distintos pesos para progresión gradual.",
    image: "/images/rehab/placeholder.png",

    attributeOrder: ["material", "peso"],

    attributes: [
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "arena", label: "Arena" },
          { id: "metal", label: "Metal" },
          { id: "neoprene", label: "Neoprene" }
        ]
      },
      {
        id: "peso",
        label: "Peso",
        type: "single",
        values: [
          { id: "0.5kg", label: "0.5 kg" },
          { id: "1kg", label: "1 kg" },
          { id: "2kg", label: "2 kg" }
        ]
      }
    ],

    attributeRules: {
      "arena": { peso: ["0.5kg", "1kg"] },
      "metal": { peso: ["0.5kg", "1kg"] },
      "neoprene": { peso: ["1kg", "2kg"] }
    },

    variants: [
      {
        sku: "tobillera-arena-0.5kg",
        attrs: { material: "arena", peso: "0.5kg" },
        name: "ARENA – 0.5 KG",
        description: "Pesa tobillera de 0.5 kg rellena de arena con cierre de velcro ajustable. Económica y moldeable al tobillo para mayor comodidad durante el ejercicio. || Material: Arena | Peso: 0.5 kg | Cierre: Velcro ajustable | Uso: Rehabilitación, fortalecimiento de tren inferior.",
        price: 14.4,
        image: "/images/rehab/placeholder.png"
      },
      {
        sku: "tobillera-arena-1kg",
        attrs: { material: "arena", peso: "1kg" },
        name: "ARENA – 1 KG",
        description: "Pesa tobillera de 1 kg rellena de arena con cierre de velcro ajustable. Económica y moldeable al tobillo para mayor comodidad durante el ejercicio. || Material: Arena | Peso: 1 kg | Cierre: Velcro ajustable | Uso: Rehabilitación, fortalecimiento de tren inferior.",
        price: 18,
        image: "/images/rehab/placeholder.png"
      },
      {
        sku: "tobillera-metal-0.5kg",
        attrs: { material: "metal", peso: "0.5kg" },
        name: "METAL – 0.5 KG",
        description: "Pesa tobillera de 0.5 kg de metal con cierre de velcro ajustable. Peso concentrado y compacto para ejercicios de precisión y rehabilitación. || Material: Metal | Peso: 0.5 kg | Cierre: Velcro ajustable | Uso: Rehabilitación, entrenamiento funcional.",
        price: 66,
        image: "/images/rehab/placeholder.png"
      },
      {
        sku: "tobillera-metal-1kg",
        attrs: { material: "metal", peso: "1kg" },
        name: "METAL – 1 KG",
        description: "Pesa tobillera de 1 kg de metal con cierre de velcro ajustable. Peso concentrado y compacto para ejercicios de resistencia y rehabilitación avanzada. || Material: Metal | Peso: 1 kg | Cierre: Velcro ajustable | Uso: Rehabilitación avanzada, fortalecimiento.",
        price: 78,
        image: "/images/rehab/placeholder.png"
      },
      {
        sku: "tobillera-neoprene-1kg",
        attrs: { material: "neoprene", peso: "1kg" },
        name: "NEOPRENE – 1 KG",
        description: "Pesa tobillera de 1 kg de neoprene con cierre de velcro ajustable. Suave, confortable y resistente al sudor para uso prolongado en rehabilitación y entrenamiento. || Material: Neoprene | Peso: 1 kg | Cierre: Velcro ajustable | Uso: Rehabilitación, uso prolongado.",
        price: 21,
        image: "/images/rehab/placeholder.png"
      },
      {
        sku: "tobillera-neoprene-2kg",
        attrs: { material: "neoprene", peso: "2kg" },
        name: "NEOPRENE – 2 KG",
        description: "Pesa tobillera de 2 kg de neoprene con cierre de velcro ajustable. Suave, confortable y resistente al sudor para entrenamiento de mayor intensidad y fortalecimiento avanzado. || Material: Neoprene | Peso: 2 kg | Cierre: Velcro ajustable | Uso: Fortalecimiento avanzado, entrenamiento funcional.",
        price: 27.48,
        image: "/images/rehab/placeholder.png"
      }
    ]
  },

  // ─── 9. EQUIPO SLEM BETTER – CONSOLIDADO ─────────────────────────────────────
  {
    id: "equipo-electroestimulacion-slem-better",
    name: "EQUIPO DE ELECTROESTIMULACIÓN SLEM BETTER",
    type: "Electroestimulacion",
    description: "Equipo de electroestimulación muscular Slem Better para fisioterapia y rehabilitación física. Combina tecnología de ondas rusas (corriente sinusoidal de media frecuencia 2500 Hz modulada a baja frecuencia) para estimulación muscular profunda e hipertrofia terapéutica, vacuumterapia para drenaje linfático y movilización de tejidos blandos, y gimnasia pasiva (EMS) para contracción muscular involuntaria en pacientes con limitación de movilidad. Disponible en cuatro configuraciones según los módulos incluidos.",
    image: "/images/rehabilitacion/SLEM/SLEM_CARD.png",

    attributeOrder: ["configuracion"],

    attributes: [
      {
        id: "configuracion",
        label: "Configuración",
        type: "single",
        values: [
          { id: "or-gp", label: "Ondas rusas O Gimnasia pasiva" },
          { id: "or-vacuum", label: "Ondas rusas + Vacuum" },
          { id: "or-gp-pack", label: "Pack Ondas rusas + Gimnasia pasiva" },
          { id: "or-vac-gp", label: "Pack Ondas rusas + Vacuum + Gimnasia pasiva" }
        ]
      }
    ],

    variants: [
      {
        sku: "slem-or-gp",
        attrs: { configuracion: "or-gp" },
        name: "ONDAS RUSAS O GIMNASIA PASIVA",
        description: "Equipo Slem Better con un solo módulo a elección: ondas rusas (corriente sinusoidal 2500 Hz) o gimnasia pasiva (EMS). Ideal para clínicas que requieren una sola función de electroestimulación. || Módulos: 1 (OR o GP) | Tecnología: Ondas rusas 2500 Hz / EMS | Marca: Slem Better.",
        price: 958.8,
        image: "/images/rehabilitacion/SLEM/OR_GP.png"
      },
      {
        sku: "slem-or-vacuum",
        attrs: { configuracion: "or-vacuum" },
        name: "ONDAS RUSAS + VACUUM",
        description: "Equipo Slem Better con módulo de ondas rusas (corriente sinusoidal 2500 Hz para estimulación muscular profunda) y módulo de vacuumterapia (drenaje linfático y movilización de tejidos blandos). || Módulos: Ondas rusas + Vacuum | Tecnología: OR 2500 Hz + Vacuumterapia | Marca: Slem Better.",
        price: 1678.8,
        image: "/images/rehabilitacion/SLEM/OR_VAC.png"
      },
      {
        sku: "slem-or-gp-pack",
        attrs: { configuracion: "or-gp-pack" },
        name: "PACK ONDAS RUSAS + GIMNASIA PASIVA",
        description: "Equipo Slem Better con módulo de ondas rusas (corriente sinusoidal 2500 Hz) y módulo de gimnasia pasiva (EMS para contracción muscular involuntaria en pacientes con limitación de movilidad). || Módulos: Ondas rusas + Gimnasia pasiva | Tecnología: OR 2500 Hz + EMS | Marca: Slem Better.",
        price: 1678.8,
        image: "/images/rehabilitacion/SLEM/OR_GP_PACK.png"
      },
      {
        sku: "slem-or-vac-gp",
        attrs: { configuracion: "or-vac-gp" },
        name: "PACK ONDAS RUSAS + VACUUM + GIMNASIA PASIVA",
        description: "Equipo Slem Better completo con los tres módulos integrados: ondas rusas (corriente sinusoidal 2500 Hz), vacuumterapia (drenaje linfático) y gimnasia pasiva (EMS). La configuración más completa para clínicas de fisioterapia y centros de rehabilitación. || Módulos: Ondas rusas + Vacuum + Gimnasia pasiva | Tecnología: OR 2500 Hz + Vacuumterapia + EMS | Marca: Slem Better.",
        price: 2158.8,
        image: "/images/rehabilitacion/SLEM/OR_VAC_GP.png"
      }
    ]
  },

  // ─── ELECTROTERAPIA ───────────────────────────────────────────────────────────

  // 1. ULTRASONIDO TERAPÉUTICO
  {
    id: "ultrasonido-terapeutico",
    name: "ULTRASONIDO TERAPÉUTICO",
    type: "Electroestimulacion",
    description: "Equipo de ultrasonido terapéutico para fisioterapia que utiliza ondas acústicas de alta frecuencia para producir efectos térmicos y mecánicos en los tejidos profundos. Indicado para el tratamiento de contracturas musculares, tendinopatías, cicatrices, bursitis, artritis y procesos inflamatorios crónicos. Disponible en frecuencia de 1 MHz para tejidos profundos y 3 MHz para tejidos superficiales, con cabezales de 1 cm² y 5 cm² para diferentes zonas de tratamiento. Modos continuo y pulsado ajustables.",
    image: "/images/rehab/ULTRASONIDO/CARD.png",

    attributeOrder: ["frecuencia", "cabezal"],

    attributes: [
      {
        id: "frecuencia",
        label: "Frecuencia",
        type: "single",
        values: [
          { id: "1mhz", label: "1 MHz – Tejidos profundos" },
          { id: "3mhz", label: "3 MHz – Tejidos superficiales" },
          { id: "dual", label: "Dual 1 y 3 MHz" }
        ]
      },
      {
        id: "cabezal",
        label: "Cabezal",
        type: "single",
        values: [
          { id: "1cm2", label: "1 cm²" },
          { id: "5cm2", label: "5 cm²" }
        ]
      }
    ],

    attributeRules: {
      "1mhz": { cabezal: ["1cm2", "5cm2"] },
      "3mhz": { cabezal: ["1cm2"] },
      "dual": { cabezal: ["1cm2", "5cm2"] }
    },

    variants: [
      {
        sku: "us-1mhz-1cm2",
        attrs: { frecuencia: "1mhz", cabezal: "1cm2" },
        name: "1 MHz – CABEZAL 1 CM²",
        description: "Ultrasonido terapéutico 1 MHz con cabezal de 1 cm² para tratamiento de zonas pequeñas y tejidos profundos. Modos continuo y pulsado, intensidad ajustable 0–3 W/cm². || Frecuencia: 1 MHz | Cabezal: 1 cm² | Intensidad: 0–3 W/cm² | Modos: Continuo / pulsado.",
        price: 5,
        image: "/images/rehab/ULTRASONIDO/1MHZ_1CM.png"
      },
      {
        sku: "us-1mhz-5cm2",
        attrs: { frecuencia: "1mhz", cabezal: "5cm2" },
        name: "1 MHz – CABEZAL 5 CM²",
        description: "Ultrasonido terapéutico 1 MHz con cabezal de 5 cm² para tratamiento de zonas amplias y tejidos profundos como espalda, muslo y glúteo. Modos continuo y pulsado, intensidad ajustable 0–3 W/cm². || Frecuencia: 1 MHz | Cabezal: 5 cm² | Intensidad: 0–3 W/cm² | Modos: Continuo / pulsado.",
        price: 5,
        image: "/images/rehab/ULTRASONIDO/1MHZ_5CM.png"
      },
      {
        sku: "us-3mhz-1cm2",
        attrs: { frecuencia: "3mhz", cabezal: "1cm2" },
        name: "3 MHz – CABEZAL 1 CM²",
        description: "Ultrasonido terapéutico 3 MHz con cabezal de 1 cm² para tratamiento de tejidos superficiales como tendones, ligamentos y cicatrices. Modos continuo y pulsado, intensidad ajustable 0–3 W/cm². || Frecuencia: 3 MHz | Cabezal: 1 cm² | Intensidad: 0–3 W/cm² | Modos: Continuo / pulsado.",
        price: 5,
        image: "/images/rehab/ULTRASONIDO/3MHZ_1CM.png"
      },
      {
        sku: "us-dual-1cm2",
        attrs: { frecuencia: "dual", cabezal: "1cm2" },
        name: "DUAL 1 Y 3 MHz – CABEZAL 1 CM²",
        description: "Ultrasonido terapéutico dual con selección de 1 MHz y 3 MHz en un solo equipo, con cabezal de 1 cm². Mayor versatilidad para tratamiento de tejidos superficiales y profundos sin cambiar de equipo. || Frecuencias: 1 MHz y 3 MHz | Cabezal: 1 cm² | Intensidad: 0–3 W/cm² | Modos: Continuo / pulsado.",
        price: 5,
        image: "/images/rehab/ULTRASONIDO/DUAL_1CM.png"
      },
      {
        sku: "us-dual-5cm2",
        attrs: { frecuencia: "dual", cabezal: "5cm2" },
        name: "DUAL 1 Y 3 MHz – CABEZAL 5 CM²",
        description: "Ultrasonido terapéutico dual con selección de 1 MHz y 3 MHz y cabezal de 5 cm² para mayor cobertura de zona de tratamiento. Ideal para clínicas con alto volumen de pacientes. || Frecuencias: 1 MHz y 3 MHz | Cabezal: 5 cm² | Intensidad: 0–3 W/cm² | Modos: Continuo / pulsado.",
        price: 5,
        image: "/images/rehab/ULTRASONIDO/DUAL_5CM.png"
      }
    ]
  },

  // 2. TENS / EMS
  {
    id: "tens-ems-electroestimulacion",
    name: "TENS / EMS – ELECTROESTIMULACIÓN",
    type: "Electroestimulacion",
    description: "Equipo de electroestimulación neuromuscular con tecnología TENS (Transcutaneous Electrical Nerve Stimulation) para alivio del dolor agudo y crónico mediante corriente de baja frecuencia, y EMS (Electrical Muscle Stimulation) para contracción muscular activa en rehabilitación y fortalecimiento. Disponible en versión portátil de 2 canales para uso domiciliario y profesional básico, y versión clínica de 4 canales para tratamiento simultáneo de múltiples grupos musculares. Incluye electrodos autoadhesivos y cables.",
    image: "/images/rehab/TENS/CARD.png",

    attributeOrder: ["tecnologia", "canales"],

    attributes: [
      {
        id: "tecnologia",
        label: "Tecnología",
        type: "single",
        values: [
          { id: "tens", label: "TENS – Solo analgesia" },
          { id: "ems", label: "EMS – Solo musculación" },
          { id: "tens-ems", label: "TENS + EMS combinado" }
        ]
      },
      {
        id: "canales",
        label: "Canales",
        type: "single",
        values: [
          { id: "2ch", label: "2 canales" },
          { id: "4ch", label: "4 canales" }
        ]
      }
    ],

    attributeRules: {
      "tens": { canales: ["2ch", "4ch"] },
      "ems": { canales: ["2ch", "4ch"] },
      "tens-ems": { canales: ["2ch", "4ch"] }
    },

    variants: [
      {
        sku: "tens-solo-2ch",
        attrs: { tecnologia: "tens", canales: "2ch" },
        name: "TENS – 2 CANALES",
        description: "Equipo TENS portátil de 2 canales para alivio del dolor agudo y crónico. Múltiples programas de frecuencia y ancho de pulso, intensidad independiente por canal. Incluye 4 electrodos autoadhesivos y cables. || Tecnología: TENS | Canales: 2 | Uso: Analgesia, dolor crónico y agudo.",
        price: 5,
        image: "/images/rehab/TENS/TENS_2CH.png"
      },
      {
        sku: "tens-solo-4ch",
        attrs: { tecnologia: "tens", canales: "4ch" },
        name: "TENS – 4 CANALES",
        description: "Equipo TENS clínico de 4 canales para tratamiento simultáneo de múltiples zonas dolorosas. Programas avanzados de frecuencia y modulación, intensidad independiente por canal. Incluye 8 electrodos autoadhesivos y cables. || Tecnología: TENS | Canales: 4 | Uso: Analgesia clínica, dolor crónico multilocalizado.",
        price: 5,
        image: "/images/rehab/TENS/TENS_4CH.png"
      },
      {
        sku: "ems-solo-2ch",
        attrs: { tecnologia: "ems", canales: "2ch" },
        name: "EMS – 2 CANALES",
        description: "Equipo EMS de 2 canales para contracción muscular activa en rehabilitación y fortalecimiento. Programas de contracción-relajación ajustables, intensidad por canal independiente. Incluye 4 electrodos autoadhesivos y cables. || Tecnología: EMS | Canales: 2 | Uso: Rehabilitación muscular, fortalecimiento.",
        price: 5,
        image: "/images/rehab/TENS/EMS_2CH.png"
      },
      {
        sku: "ems-solo-4ch",
        attrs: { tecnologia: "ems", canales: "4ch" },
        name: "EMS – 4 CANALES",
        description: "Equipo EMS clínico de 4 canales para electroestimulación muscular simultánea de múltiples grupos. Programas de contracción-relajación avanzados, intensidad por canal independiente. || Tecnología: EMS | Canales: 4 | Uso: Rehabilitación clínica, gimnasia pasiva.",
        price: 5,
        image: "/images/rehab/TENS/EMS_4CH.png"
      },
      {
        sku: "tens-ems-2ch",
        attrs: { tecnologia: "tens-ems", canales: "2ch" },
        name: "TENS + EMS – 2 CANALES",
        description: "Equipo combinado TENS y EMS de 2 canales para analgesia y estimulación muscular en un solo dispositivo. Mayor versatilidad para clínicas y uso domiciliario. Incluye 4 electrodos autoadhesivos y cables. || Tecnología: TENS + EMS | Canales: 2 | Uso: Dolor + rehabilitación muscular.",
        price: 5,
        image: "/images/rehab/TENS/TENS_EMS_2CH.png"
      },
      {
        sku: "tens-ems-4ch",
        attrs: { tecnologia: "tens-ems", canales: "4ch" },
        name: "TENS + EMS – 4 CANALES",
        description: "Equipo combinado TENS y EMS de 4 canales para tratamiento completo de dolor y rehabilitación muscular simultánea en múltiples zonas. La opción más completa para clínicas de fisioterapia. Incluye 8 electrodos autoadhesivos y cables. || Tecnología: TENS + EMS | Canales: 4 | Uso: Clínica de fisioterapia completa.",
        price: 5,
        image: "/images/rehab/TENS/TENS_EMS_4CH.png"
      }
    ]
  },

  // 3. LÁSER TERAPÉUTICO
  {
    id: "laser-terapeutico",
    name: "LÁSER TERAPÉUTICO (FOTOBIOMODULACIÓN)",
    type: "Electroestimulacion",
    description: "Equipo de láser terapéutico de baja potencia (LLLT) para fotobiomodulación tisular. Estimula la regeneración celular, reduce la inflamación y el dolor, y acelera la cicatrización mediante emisión de luz coherente en longitudes de onda roja e infrarroja. Indicado para tendinopatías, cicatrices, úlceras crónicas, artritis, herpes zóster y procesos inflamatorios agudos y crónicos. Disponible en versión de sonda puntual para zonas localizadas y versión de cabezal escáner para áreas extensas.",
    image: "/images/rehab/LASER/CARD.png",

    attributeOrder: ["tipo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo de aplicación",
        type: "single",
        values: [
          { id: "puntual", label: "Sonda puntual" },
          { id: "escaner", label: "Cabezal escáner (área extensa)" },
          { id: "combo", label: "Puntual + escáner" }
        ]
      }
    ],

    variants: [
      {
        sku: "laser-puntual",
        attrs: { tipo: "puntual" },
        name: "SONDA PUNTUAL",
        description: "Láser terapéutico LLLT con sonda puntual para tratamiento localizado de puntos gatillo, tendones, articulaciones y cicatrices. Longitud de onda 650–980 nm, potencia ajustable, dosimetría programable en J/cm². Incluye gafas de protección. || Tipo: Sonda puntual | Longitud de onda: 650–980 nm | Uso: Puntos gatillo, tendones, cicatrices.",
        price: 5,
        image: "/images/rehab/LASER/PUNTUAL.png"
      },
      {
        sku: "laser-escaner",
        attrs: { tipo: "escaner" },
        name: "CABEZAL ESCÁNER – ÁREA EXTENSA",
        description: "Láser terapéutico LLLT con cabezal escáner de múltiples diodos para tratamiento de áreas extensas como espalda, muslo o rodilla en una sola sesión. Longitud de onda 650–980 nm, dosimetría programable. Incluye gafas de protección. || Tipo: Escáner multilaser | Longitud de onda: 650–980 nm | Uso: Áreas extensas, espalda, grandes articulaciones.",
        price: 5,
        image: "/images/rehab/LASER/ESCANER.png"
      },
      {
        sku: "laser-combo",
        attrs: { tipo: "combo" },
        name: "PUNTUAL + ESCÁNER",
        description: "Láser terapéutico LLLT con sonda puntual y cabezal escáner intercambiables para cobertura completa de tratamientos localizados y de área extensa en un solo equipo. Longitud de onda 650–980 nm, dosimetría programable. Incluye gafas de protección. || Tipo: Puntual + escáner | Longitud de onda: 650–980 nm | Uso: Clínica completa.",
        price: 5,
        image: "/images/rehab/LASER/COMBO.png"
      }
    ]
  },

  // 4. MAGNETOTERAPIA
  {
    id: "magnetoterapia",
    name: "MAGNETOTERAPIA",
    type: "Electroestimulacion",
    description: "Equipo de magnetoterapia para la aplicación de campos magnéticos pulsados de baja frecuencia sobre los tejidos. Estimula la regeneración ósea, reduce el dolor e inflamación, mejora la microcirculación y acelera la consolidación de fracturas. Indicado para osteoporosis, artrosis, fracturas de lenta consolidación, edemas y patologías reumatológicas. Disponible en versión de aplicador local para zonas pequeñas y versión de solenoides para extremidades completas.",
    image: "/images/rehab/MAGNETO/CARD.png",

    attributeOrder: ["version"],

    attributes: [
      {
        id: "version",
        label: "Versión",
        type: "single",
        values: [
          { id: "local", label: "Aplicador local" },
          { id: "solenoide", label: "Solenoides para extremidades" },
          { id: "completo", label: "Completo (local + solenoides)" }
        ]
      }
    ],

    variants: [
      {
        sku: "magneto-local",
        attrs: { version: "local" },
        name: "APLICADOR LOCAL",
        description: "Equipo de magnetoterapia con aplicador local para tratamiento de zonas específicas como rodilla, tobillo, muñeca y hombro. Intensidad de campo 1–100 Gauss, frecuencia 1–100 Hz, programas preestablecidos y modo manual. || Versión: Aplicador local | Campo: 1–100 Gauss | Frecuencia: 1–100 Hz | Uso: Zonas específicas.",
        price: 5,
        image: "/images/rehab/MAGNETO/LOCAL.png"
      },
      {
        sku: "magneto-solenoide",
        attrs: { version: "solenoide" },
        name: "SOLENOIDES PARA EXTREMIDADES",
        description: "Equipo de magnetoterapia con solenoides cilíndricos para envolver extremidades completas (pierna, brazo). Tratamiento uniforme de toda la extremidad en fracturas, edemas y patologías óseas. Intensidad 1–100 Gauss, frecuencia 1–100 Hz. || Versión: Solenoides | Campo: 1–100 Gauss | Frecuencia: 1–100 Hz | Uso: Fracturas, osteoporosis, edemas.",
        price: 5,
        image: "/images/rehab/MAGNETO/SOLENOIDE.png"
      },
      {
        sku: "magneto-completo",
        attrs: { version: "completo" },
        name: "COMPLETO – LOCAL + SOLENOIDES",
        description: "Equipo de magnetoterapia completo con aplicador local y solenoides intercambiables para cobertura total de tratamientos localizados y de extremidad completa. La opción más versátil para clínicas de fisioterapia y rehabilitación. || Versión: Completo | Incluye: Aplicador local + solenoides | Campo: 1–100 Gauss | Uso: Clínica completa.",
        price: 5,
        image: "/images/rehab/MAGNETO/COMPLETO.png"
      }
    ]
  },

  // 5. INFRARROJO TERAPÉUTICO
  {
    id: "infrarrojo-terapeutico",
    name: "LÁMPARA INFRARROJA TERAPÉUTICA",
    type: "Electroestimulacion",
    description: "Lámpara de infrarrojos terapéutica para fisioterapia que emite radiación infrarroja de onda corta y media para producir calor profundo en los tejidos. Indicada para contracturas musculares, artritis, articulaciones rígidas, rehabilitación de fracturas y procesos circulatorios crónicos. El calor profundo aumenta la circulación local, relaja la musculatura y facilita el movimiento articular. Disponible en versión de pie con cabezal articulado regulable y versión de mesa para uso localizado.",
    image: "/images/rehab/INFRARROJO/CARD.png",

    attributeOrder: ["tipo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "pie", label: "De pie – Cabezal articulado" },
          { id: "mesa", label: "De mesa – Uso localizado" }
        ]
      }
    ],

    variants: [
      {
        sku: "infrarrojo-pie",
        attrs: { tipo: "pie" },
        name: "DE PIE – CABEZAL ARTICULADO",
        description: "Lámpara infrarroja terapéutica de pie con cabezal articulado de 360° regulable en altura y ángulo para tratamiento de cualquier zona corporal con el paciente en camilla o silla. Potencia 250–275 W, temporizador incorporado. || Tipo: De pie | Potencia: 250–275 W | Cabezal: Articulado 360° | Temporizador: Sí | Uso: Camilla, consulta.",
        price: 5,
        image: "/images/rehab/INFRARROJO/PIE.png"
      },
      {
        sku: "infrarrojo-mesa",
        attrs: { tipo: "mesa" },
        name: "DE MESA – USO LOCALIZADO",
        description: "Lámpara infrarroja terapéutica de mesa compacta para tratamiento localizado de manos, pies y zonas pequeñas. Potencia 150–250 W, diseño portátil para uso en consulta o domicilio. || Tipo: De mesa | Potencia: 150–250 W | Uso: Manos, pies, zonas pequeñas, domicilio.",
        price: 5,
        image: "/images/rehab/INFRARROJO/MESA.png"
      }
    ]
  },

  // ─── ACCESORIOS DE REHABILITACIÓN ─────────────────────────────────────────────

  // 6. PELOTAS TERAPÉUTICAS BOBATH
  {
    id: "pelota-terapeutica-bobath",
    name: "PELOTA TERAPÉUTICA BOBATH",
    type: "Accesorios-rehab",
    description: "Pelota terapéutica Bobath de PVC antiexplosivo para ejercicios de rehabilitación, fisioterapia neurológica, mejora del equilibrio, fortalecimiento del core y ejercicios propioceptivos. Su superficie ligeramente texturizada proporciona agarre seguro y su diseño antiexplosivo garantiza la seguridad del paciente en caso de pérdida de presión. Disponible en tres diámetros para adaptarse a la estatura del paciente y al tipo de ejercicio.",
    image: "/images/rehab/BOBATH/CARD.png",

    attributeOrder: ["diametro"],

    attributes: [
      {
        id: "diametro",
        label: "Diámetro",
        type: "single",
        values: [
          { id: "55cm", label: "55 cm – Talla S (hasta 1.60 m)" },
          { id: "65cm", label: "65 cm – Talla M (1.60–1.75 m)" },
          { id: "75cm", label: "75 cm – Talla L (más de 1.75 m)" }
        ]
      }
    ],

    variants: [
      {
        sku: "bobath-55cm",
        attrs: { diametro: "55cm" },
        name: "55 CM – TALLA S",
        description: "Pelota Bobath de PVC antiexplosivo de 55 cm, indicada para pacientes hasta 1.60 m. Incluye bomba de inflado. || Diámetro: 55 cm | Material: PVC antiexplosivo | Incluye: Bomba | Uso: Rehabilitación, equilibrio, core.",
        price: 5,
        image: "/images/rehab/BOBATH/55CM.png"
      },
      {
        sku: "bobath-65cm",
        attrs: { diametro: "65cm" },
        name: "65 CM – TALLA M",
        description: "Pelota Bobath de PVC antiexplosivo de 65 cm, la más utilizada en clínica para pacientes de 1.60–1.75 m. Incluye bomba de inflado. || Diámetro: 65 cm | Material: PVC antiexplosivo | Incluye: Bomba | Uso: Rehabilitación, equilibrio, fisioterapia neurológica.",
        price: 5,
        image: "/images/rehab/BOBATH/65CM.png"
      },
      {
        sku: "bobath-75cm",
        attrs: { diametro: "75cm" },
        name: "75 CM – TALLA L",
        description: "Pelota Bobath de PVC antiexplosivo de 75 cm para pacientes de más de 1.75 m o ejercicios que requieren mayor superficie de apoyo. Incluye bomba de inflado. || Diámetro: 75 cm | Material: PVC antiexplosivo | Incluye: Bomba | Uso: Rehabilitación, pacientes altos.",
        price: 5,
        image: "/images/rehab/BOBATH/75CM.png"
      }
    ]
  },

  // 7. RODILLOS DE ESPUMA (FOAM ROLLER)
  {
    id: "rodillo-espuma-foam-roller",
    name: "RODILLO DE ESPUMA (FOAM ROLLER)",
    type: "Accesorios-rehab",
    description: "Rodillo de espuma para automasaje miofascial, recuperación muscular, mejora de la flexibilidad y movilidad articular en fisioterapia y rehabilitación. Permite liberar tensiones musculares, reducir la densidad de puntos gatillo y mejorar la circulación en zonas de difícil acceso. Disponible en densidad estándar para usuarios en rehabilitación y densidad alta para deportistas y usuarios avanzados, en diámetros de 15 cm (compacto) y 33 cm (estándar clínico).",
    image: "/images/rehab/FOAM/CARD.png",

    attributeOrder: ["diametro", "densidad"],

    attributes: [
      {
        id: "diametro",
        label: "Longitud",
        type: "single",
        values: [
          { id: "30cm", label: "30 cm – Compacto" },
          { id: "45cm", label: "45 cm – Estándar" },
          { id: "90cm", label: "90 cm – Largo" }
        ]
      },
      {
        id: "densidad",
        label: "Densidad",
        type: "single",
        values: [
          { id: "suave", label: "Suave – Rehabilitación" },
          { id: "dura", label: "Dura – Deportivo" }
        ]
      }
    ],

    attributeRules: {
      "30cm": { densidad: ["suave", "dura"] },
      "45cm": { densidad: ["suave", "dura"] },
      "90cm": { densidad: ["suave", "dura"] }
    },

    variants: [
      { sku: "foam-30-suave", attrs: { diametro: "30cm", densidad: "suave" }, name: "30 CM – SUAVE", description: "Rodillo de espuma compacto 30 cm, densidad suave para rehabilitación y usuarios iniciales. || Longitud: 30 cm | Densidad: Suave | Uso: Rehabilitación.", price: 5, image: "/images/rehab/FOAM/30_SUAVE.png" },
      { sku: "foam-30-dura", attrs: { diametro: "30cm", densidad: "dura" }, name: "30 CM – DURA", description: "Rodillo de espuma compacto 30 cm, densidad alta para deportistas y usuarios avanzados. || Longitud: 30 cm | Densidad: Alta | Uso: Deportivo, avanzado.", price: 5, image: "/images/rehab/FOAM/30_DURA.png" },
      { sku: "foam-45-suave", attrs: { diametro: "45cm", densidad: "suave" }, name: "45 CM – SUAVE", description: "Rodillo de espuma estándar 45 cm, densidad suave para rehabilitación clínica. || Longitud: 45 cm | Densidad: Suave | Uso: Rehabilitación clínica.", price: 5, image: "/images/rehab/FOAM/45_SUAVE.png" },
      { sku: "foam-45-dura", attrs: { diametro: "45cm", densidad: "dura" }, name: "45 CM – DURA", description: "Rodillo de espuma estándar 45 cm, densidad alta para deportistas. || Longitud: 45 cm | Densidad: Alta | Uso: Deportivo.", price: 5, image: "/images/rehab/FOAM/45_DURA.png" },
      { sku: "foam-90-suave", attrs: { diametro: "90cm", densidad: "suave" }, name: "90 CM – SUAVE", description: "Rodillo de espuma largo 90 cm, densidad suave para columna vertebral completa y ejercicios de apertura torácica. || Longitud: 90 cm | Densidad: Suave | Uso: Columna, apertura torácica.", price: 5, image: "/images/rehab/FOAM/90_SUAVE.png" },
      { sku: "foam-90-dura", attrs: { diametro: "90cm", densidad: "dura" }, name: "90 CM – DURA", description: "Rodillo de espuma largo 90 cm, densidad alta para automasaje intensivo de columna y tren inferior. || Longitud: 90 cm | Densidad: Alta | Uso: Automasaje intensivo.", price: 5, image: "/images/rehab/FOAM/90_DURA.png" }
    ]
  },

  // 8. CUÑAS Y RAMPAS DE POSICIONAMIENTO
  {
    id: "cunas-rampas-posicionamiento",
    name: "CUÑAS Y RAMPAS DE POSICIONAMIENTO",
    type: "Accesorios-rehab",
    description: "Cuñas y rampas de espuma de alta densidad para posicionamiento terapéutico de pacientes en camilla durante sesiones de fisioterapia, rehabilitación neurológica y tratamiento postural. Permiten mantener posiciones de trabajo específicas, facilitar el acceso del terapeuta y mejorar la comodidad del paciente. Cubiertas en vinilo resistente al agua y de fácil limpieza. Disponibles en cuña estándar de 30°, cuña de 45° y rampa de posicionamiento para columna.",
    image: "/images/rehab/CUNAS/CARD.png",

    attributeOrder: ["tipo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "cuna-30", label: "Cuña 30°" },
          { id: "cuna-45", label: "Cuña 45°" },
          { id: "rampa", label: "Rampa de posicionamiento" },
          { id: "set", label: "Set completo (cuña 30° + 45° + rampa)" }
        ]
      }
    ],

    variants: [
      {
        sku: "posicionamiento-cuna-30",
        attrs: { tipo: "cuna-30" },
        name: "CUÑA 30°",
        description: "Cuña de posicionamiento de 30° en espuma de alta densidad cubierta en vinilo. Para elevación de miembros inferiores, posicionamiento lumbar y facilitación de acceso terapéutico. || Ángulo: 30° | Material: Espuma alta densidad + vinilo | Uso: Miembros inferiores, lumbar.",
        price: 5,
        image: "/images/rehab/CUNAS/CUNA_30.png"
      },
      {
        sku: "posicionamiento-cuna-45",
        attrs: { tipo: "cuna-45" },
        name: "CUÑA 45°",
        description: "Cuña de posicionamiento de 45° en espuma de alta densidad cubierta en vinilo. Para posicionamiento de hombro, cadera y facilitación de técnicas manuales. || Ángulo: 45° | Material: Espuma alta densidad + vinilo | Uso: Hombro, cadera, técnicas manuales.",
        price: 5,
        image: "/images/rehab/CUNAS/CUNA_45.png"
      },
      {
        sku: "posicionamiento-rampa",
        attrs: { tipo: "rampa" },
        name: "RAMPA DE POSICIONAMIENTO",
        description: "Rampa de posicionamiento en espuma de alta densidad cubierta en vinilo para soporte de columna vertebral completa y decúbito prono cómodo. || Tipo: Rampa | Material: Espuma alta densidad + vinilo | Uso: Columna, decúbito prono.",
        price: 5,
        image: "/images/rehab/CUNAS/RAMPA.png"
      },
      {
        sku: "posicionamiento-set",
        attrs: { tipo: "set" },
        name: "SET COMPLETO",
        description: "Set completo de posicionamiento con cuña 30°, cuña 45° y rampa de columna en espuma de alta densidad cubierta en vinilo. Para dotación completa de camilla terapéutica. || Incluye: Cuña 30° + Cuña 45° + Rampa | Material: Espuma alta densidad + vinilo.",
        price: 5,
        image: "/images/rehab/CUNAS/SET.png"
      }
    ]
  },

  // 9. COLCHONETAS DE REHABILITACIÓN
  {
    id: "colchoneta-rehabilitacion",
    name: "COLCHONETA DE REHABILITACIÓN",
    type: "Accesorios-rehab",
    description: "Colchoneta de rehabilitación en espuma de alta densidad cubierta en vinilo resistente al agua para ejercicios en suelo, fisioterapia neurológica, técnicas de movilización y trabajo postural. Superficie antideslizante en la base para mayor seguridad. Fácil limpieza y desinfección con productos hospitalarios. Disponible en grosor estándar de 5 cm y grosor extra de 8 cm para mayor amortiguación.",
    image: "/images/rehab/COLCHONETA/CARD.png",

    attributeOrder: ["grosor", "medida"],

    attributes: [
      {
        id: "grosor",
        label: "Grosor",
        type: "single",
        values: [
          { id: "5cm", label: "5 cm – Estándar" },
          { id: "8cm", label: "8 cm – Extra" }
        ]
      },
      {
        id: "medida",
        label: "Medida",
        type: "single",
        values: [
          { id: "180x60", label: "180 × 60 cm" },
          { id: "200x90", label: "200 × 90 cm" }
        ]
      }
    ],

    attributeRules: {
      "5cm": { medida: ["180x60", "200x90"] },
      "8cm": { medida: ["180x60", "200x90"] }
    },

    variants: [
      { sku: "colchoneta-5cm-180x60", attrs: { grosor: "5cm", medida: "180x60" }, name: "5 CM – 180 × 60 CM", description: "Colchoneta de rehabilitación 5 cm grosor, 180 × 60 cm. Espuma alta densidad + vinilo lavable. || Grosor: 5 cm | Medida: 180 × 60 cm | Uso: Fisioterapia, ejercicios en suelo.", price: 5, image: "/images/rehab/COLCHONETA/5CM_180.png" },
      { sku: "colchoneta-5cm-200x90", attrs: { grosor: "5cm", medida: "200x90" }, name: "5 CM – 200 × 90 CM", description: "Colchoneta de rehabilitación 5 cm grosor, 200 × 90 cm. Espuma alta densidad + vinilo lavable. || Grosor: 5 cm | Medida: 200 × 90 cm | Uso: Fisioterapia neurológica, mayor superficie.", price: 5, image: "/images/rehab/COLCHONETA/5CM_200.png" },
      { sku: "colchoneta-8cm-180x60", attrs: { grosor: "8cm", medida: "180x60" }, name: "8 CM – 180 × 60 CM", description: "Colchoneta de rehabilitación 8 cm grosor extra, 180 × 60 cm. Espuma alta densidad + vinilo lavable. Mayor amortiguación para pacientes con dolor. || Grosor: 8 cm | Medida: 180 × 60 cm | Uso: Pacientes con dolor, mayor amortiguación.", price: 5, image: "/images/rehab/COLCHONETA/8CM_180.png" },
      { sku: "colchoneta-8cm-200x90", attrs: { grosor: "8cm", medida: "200x90" }, name: "8 CM – 200 × 90 CM", description: "Colchoneta de rehabilitación 8 cm grosor extra, 200 × 90 cm. La más completa para fisioterapia neurológica y técnicas de suelo. || Grosor: 8 cm | Medida: 200 × 90 cm | Uso: Neurológica, técnicas de suelo avanzadas.", price: 5, image: "/images/rehab/COLCHONETA/8CM_200.png" }
    ]
  },

  // 10. ESCALERAS SUECAS
  {
    id: "escalera-sueca-rehabilitacion",
    name: "ESCALERA SUECA",
    type: "Accesorios-rehab",
    description: "Escalera sueca de madera de alta resistencia para montaje en pared, utilizada en rehabilitación física, fisioterapia y educación física. Permite realizar ejercicios de trepa, estiramiento, fortalecimiento de tren superior e inferior, movilidad de hombro y columna, y ejercicios de propiocepción. Los peldaños redondeados de sección circular garantizan agarre seguro. Disponible en módulo simple y en set doble para instalación en clínicas y gimnasios de rehabilitación.",
    image: "/images/rehab/SUECA/CARD.png",

    attributeOrder: ["version"],

    attributes: [
      {
        id: "version",
        label: "Versión",
        type: "single",
        values: [
          { id: "simple", label: "Módulo simple" },
          { id: "doble", label: "Set doble" }
        ]
      }
    ],

    variants: [
      {
        sku: "sueca-simple",
        attrs: { version: "simple" },
        name: "MÓDULO SIMPLE",
        description: "Escalera sueca de madera módulo simple para montaje en pared. Peldaños redondeados de sección circular, estructura robusta con herrajes de fijación incluidos. || Módulos: 1 | Material: Madera alta resistencia | Montaje: Pared | Incluye: Herrajes de fijación.",
        price: 5,
        image: "/images/rehab/SUECA/SIMPLE.png"
      },
      {
        sku: "sueca-doble",
        attrs: { version: "doble" },
        name: "SET DOBLE",
        description: "Escalera sueca de madera set doble para clínicas y gimnasios de rehabilitación. Dos módulos adyacentes que permiten mayor variedad de ejercicios y trabajo simultáneo de dos pacientes. || Módulos: 2 | Material: Madera alta resistencia | Montaje: Pared | Incluye: Herrajes de fijación.",
        price: 5,
        image: "/images/rehab/SUECA/DOBLE.png"
      }
    ]
  },

  // 11. PARALELAS DE MARCHA
  {
    id: "paralelas-marcha-rehabilitacion",
    name: "PARALELAS DE MARCHA",
    type: "Accesorios-rehab",
    description: "Paralelas de marcha de acero inoxidable o aluminio con regulación de altura y anchura para entrenamiento de la marcha, rehabilitación postquirúrgica de cadera y rodilla, y reeducación del equilibrio. Los pasamanos de PVC antideslizante proporcionan agarre seguro. Base con patas antideslizantes de goma para mayor estabilidad. Disponibles en versión fija estándar y versión plegable para clínicas con espacio limitado.",
    image: "/images/rehab/PARALELAS/CARD.png",

    attributeOrder: ["version"],

    attributes: [
      {
        id: "version",
        label: "Versión",
        type: "single",
        values: [
          { id: "fija", label: "Fija estándar" },
          { id: "plegable", label: "Plegable" }
        ]
      }
    ],

    variants: [
      {
        sku: "paralelas-fija",
        attrs: { version: "fija" },
        name: "FIJA ESTÁNDAR",
        description: "Paralelas de marcha fijas de acero con regulación de altura y anchura. Pasamanos de PVC antideslizante y base con patas de goma. || Tipo: Fija | Material: Acero | Regulación: Altura y anchura | Uso: Reeducación de marcha, rehabilitación postquirúrgica.",
        price: 5,
        image: "/images/rehab/PARALELAS/FIJA.png"
      },
      {
        sku: "paralelas-plegable",
        attrs: { version: "plegable" },
        name: "PLEGABLE",
        description: "Paralelas de marcha plegables de aluminio para clínicas con espacio limitado. Regulación de altura y anchura, pasamanos de PVC antideslizante, plegado compacto para almacenaje. || Tipo: Plegable | Material: Aluminio | Regulación: Altura y anchura | Uso: Clínicas con espacio reducido.",
        price: 5,
        image: "/images/rehab/PARALELAS/PLEGABLE.png"
      }
    ]
  },

  // 12. ANDADORES
  {
    id: "andador-rehabilitacion",
    name: "ANDADOR DE REHABILITACIÓN",
    type: "Accesorios-rehab",
    description: "Andador de rehabilitación de aluminio ligero para apoyo en la marcha y prevención de caídas. Regulable en altura para adaptarse a la estatura del usuario. Disponible en versión fija sin ruedas para mayor estabilidad, versión con 2 ruedas frontales para pacientes que requieren deslizamiento continuo, y versión articulado reciprocante para entrenamiento de marcha alternante en neurológico.",
    image: "/images/rehab/ANDADOR/CARD.png",

    attributeOrder: ["tipo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "fijo", label: "Fijo – Sin ruedas" },
          { id: "2-ruedas", label: "Con 2 ruedas frontales" },
          { id: "articulado", label: "Articulado reciprocante" }
        ]
      }
    ],

    variants: [
      {
        sku: "andador-fijo",
        attrs: { tipo: "fijo" },
        name: "FIJO – SIN RUEDAS",
        description: "Andador fijo de aluminio sin ruedas para máxima estabilidad. Regulable en altura, patas con topes de goma antideslizante. Indicado para pacientes que requieren apoyo total durante la marcha. || Tipo: Fijo | Material: Aluminio | Patas: Goma antideslizante | Uso: Máxima estabilidad.",
        price: 5,
        image: "/images/rehab/ANDADOR/FIJO.png"
      },
      {
        sku: "andador-2-ruedas",
        attrs: { tipo: "2-ruedas" },
        name: "CON 2 RUEDAS FRONTALES",
        description: "Andador de aluminio con 2 ruedas frontales y 2 patas traseras con topes de goma para deslizamiento continuo sin levantar el andador. Regulable en altura. Para pacientes con mayor autonomía de marcha. || Tipo: 2 ruedas | Material: Aluminio | Uso: Marcha continua, mayor autonomía.",
        price: 5,
        image: "/images/rehab/ANDADOR/2RUEDAS.png"
      },
      {
        sku: "andador-articulado",
        attrs: { tipo: "articulado" },
        name: "ARTICULADO RECIPROCANTE",
        description: "Andador articulado reciprocante de aluminio para reeducación de marcha alternante en rehabilitación neurológica. Las dos mitades se mueven de forma independiente replicando el patrón de marcha natural. || Tipo: Articulado | Material: Aluminio | Uso: Rehabilitación neurológica, marcha alternante.",
        price: 5,
        image: "/images/rehab/ANDADOR/ARTICULADO.png"
      }
    ]
  },

  // 13. BASTONES Y MULETAS
  {
    id: "bastones-muletas-rehabilitacion",
    name: "BASTONES Y MULETAS",
    type: "Accesorios-rehab",
    description: "Bastones y muletas de aluminio regulables en altura para apoyo en la marcha durante la rehabilitación postquirúrgica, fracturas y patologías de miembros inferiores. Disponibles en bastón simple de un punto, bastón de cuatro puntos para mayor estabilidad, muleta axilar y muleta de antebrazo (canadiense) para diferentes niveles de descarga y autonomía.",
    image: "/images/rehab/BASTONES/CARD.png",

    attributeOrder: ["tipo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "baston-1p", label: "Bastón 1 punto" },
          { id: "baston-4p", label: "Bastón 4 puntos" },
          { id: "muleta-axilar", label: "Muleta axilar" },
          { id: "muleta-canadiense", label: "Muleta canadiense (antebrazo)" }
        ]
      }
    ],

    variants: [
      {
        sku: "baston-1-punto",
        attrs: { tipo: "baston-1p" },
        name: "BASTÓN 1 PUNTO",
        description: "Bastón de aluminio de un punto regulable en altura con empuñadura ergonómica y tope de goma antideslizante. Para apoyo leve y equilibrio. || Tipo: 1 punto | Material: Aluminio | Regulable: Sí | Uso: Apoyo leve, equilibrio.",
        price: 5,
        image: "/images/rehab/BASTONES/BASTON_1P.png"
      },
      {
        sku: "baston-4-puntos",
        attrs: { tipo: "baston-4p" },
        name: "BASTÓN 4 PUNTOS",
        description: "Bastón de aluminio de cuatro puntos con base cuadrada antideslizante para mayor estabilidad. Regulable en altura, empuñadura ergonómica. Para pacientes con mayor necesidad de apoyo y equilibrio. || Tipo: 4 puntos | Material: Aluminio | Regulable: Sí | Uso: Mayor estabilidad, equilibrio reducido.",
        price: 5,
        image: "/images/rehab/BASTONES/BASTON_4P.png"
      },
      {
        sku: "muleta-axilar",
        attrs: { tipo: "muleta-axilar" },
        name: "MULETA AXILAR",
        description: "Muleta axilar de aluminio con apoyo axilar acolchado y empuñadura ergonómica. Regulable en altura total y en altura de empuñadura. Para descarga parcial o total del miembro inferior. || Tipo: Axilar | Material: Aluminio | Regulable: Altura total + empuñadura | Uso: Descarga de MMII.",
        price: 5,
        image: "/images/rehab/BASTONES/MULETA_AXILAR.png"
      },
      {
        sku: "muleta-canadiense",
        attrs: { tipo: "muleta-canadiense" },
        name: "MULETA CANADIENSE (ANTEBRAZO)",
        description: "Muleta canadiense de aluminio con apoyo de antebrazo regulable y empuñadura ergonómica. Mayor libertad de movimiento que la axilar, indicada para uso prolongado y mayor autonomía del paciente. || Tipo: Canadiense / antebrazo | Material: Aluminio | Uso: Uso prolongado, mayor autonomía.",
        price: 5,
        image: "/images/rehab/BASTONES/MULETA_CANADIENSE.png"
      }
    ]
  },

  // 14. TABLA DE EQUILIBRIO
  {
    id: "tabla-equilibrio-propiocepcion",
    name: "TABLA DE EQUILIBRIO / PROPIOCEPCIÓN",
    type: "Accesorios-rehab",
    description: "Tabla de equilibrio para entrenamiento propioceptivo, rehabilitación de tobillo, rodilla y cadera, y prevención de lesiones deportivas. Estimula los receptores neuromusculares mejorando la estabilidad articular, coordinación y respuesta refleja. Disponible en tabla de madera con base semiesférica (inestabilidad en todos los planos) y disco de equilibrio inflable (inestabilidad ajustable por nivel de inflado).",
    image: "/images/rehab/EQUILIBRIO/CARD.png",

    attributeOrder: ["tipo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "madera", label: "Tabla de madera – Base semiesférica" },
          { id: "inflable", label: "Disco inflable ajustable" }
        ]
      }
    ],

    variants: [
      {
        sku: "equilibrio-madera",
        attrs: { tipo: "madera" },
        name: "TABLA DE MADERA – BASE SEMIESFÉRICA",
        description: "Tabla de equilibrio de madera con base semiesférica para inestabilidad en todos los planos. Superficie antideslizante, resistente hasta 120 kg. Para rehabilitación de tobillo, rodilla y propiocepción general. || Material: Madera | Base: Semiesférica | Capacidad: 120 kg | Uso: Propiocepción, rehabilitación tobillo/rodilla.",
        price: 5,
        image: "/images/rehab/EQUILIBRIO/MADERA.png"
      },
      {
        sku: "equilibrio-inflable",
        attrs: { tipo: "inflable" },
        name: "DISCO INFLABLE AJUSTABLE",
        description: "Disco de equilibrio inflable con nivel de inestabilidad ajustable según el grado de inflado. Superficie con protuberancias para estimulación propioceptiva adicional. Plegable para fácil almacenaje y transporte. || Material: PVC | Inestabilidad: Ajustable por inflado | Uso: Propiocepción, rehabilitación, domicilio.",
        price: 5,
        image: "/images/rehab/EQUILIBRIO/INFLABLE.png"
      }
    ]
  },

  // 15. ESCALONES DE REHABILITACIÓN
  {
    id: "escalon-rehabilitacion",
    name: "ESCALÓN DE REHABILITACIÓN",
    type: "Accesorios-rehab",
    description: "Escalón de rehabilitación de polietileno de alta densidad antideslizante para entrenamiento de subida y bajada de escaleras, fortalecimiento de tren inferior y ejercicios de step en fisioterapia y rehabilitación postquirúrgica. Superficie texturizada antideslizante en la pisada y base con topes de goma. Disponible en altura de 10 cm, 15 cm y 20 cm, y en set ajustable de alturas combinables.",
    image: "/images/rehab/ESCALON/CARD.png",

    attributeOrder: ["altura"],

    attributes: [
      {
        id: "altura",
        label: "Altura",
        type: "single",
        values: [
          { id: "10cm", label: "10 cm" },
          { id: "15cm", label: "15 cm" },
          { id: "20cm", label: "20 cm" },
          { id: "set", label: "Set ajustable (10 + 15 + 20 cm)" }
        ]
      }
    ],

    variants: [
      { sku: "escalon-10cm", attrs: { altura: "10cm" }, name: "10 CM", description: "Escalón de rehabilitación 10 cm en polietileno antideslizante. Para inicio de entrenamiento de escaleras y pacientes con limitación severa. || Altura: 10 cm | Material: Polietileno | Uso: Rehabilitación inicial.", price: 5, image: "/images/rehab/ESCALON/10CM.png" },
      { sku: "escalon-15cm", attrs: { altura: "15cm" }, name: "15 CM", description: "Escalón de rehabilitación 15 cm en polietileno antideslizante. Altura estándar para rehabilitación de rodilla y cadera. || Altura: 15 cm | Material: Polietileno | Uso: Rodilla, cadera.", price: 5, image: "/images/rehab/ESCALON/15CM.png" },
      { sku: "escalon-20cm", attrs: { altura: "20cm" }, name: "20 CM", description: "Escalón de rehabilitación 20 cm en polietileno antideslizante. Para entrenamiento avanzado y acondicionamiento funcional. || Altura: 20 cm | Material: Polietileno | Uso: Entrenamiento avanzado.", price: 5, image: "/images/rehab/ESCALON/20CM.png" },
      { sku: "escalon-set", attrs: { altura: "set" }, name: "SET AJUSTABLE", description: "Set de 3 escalones de rehabilitación combinables (10 + 15 + 20 cm) en polietileno antideslizante. Para progresión completa de altura en un solo set. || Alturas: 10 + 15 + 20 cm | Material: Polietileno | Uso: Progresión completa.", price: 5, image: "/images/rehab/ESCALON/SET.png" }
    ]
  },

  // 16. MANCUERNAS TERAPÉUTICAS
  {
    id: "mancuernas-terapeuticas",
    name: "MANCUERNAS TERAPÉUTICAS",
    type: "Accesorios-rehab",
    description: "Mancuernas terapéuticas de neoprene para ejercicios de fortalecimiento muscular en rehabilitación y fisioterapia. Revestimiento de neoprene suave que proporciona agarre cómodo y no daña superficies. Disponibles en pesos de 0.5 kg a 5 kg para progresión gradual en programas de rehabilitación de extremidades superiores.",
    image: "/images/rehab/MANCUERNAS/CARD.png",

    attributeOrder: ["peso"],

    attributes: [
      {
        id: "peso",
        label: "Peso (par)",
        type: "single",
        values: [
          { id: "0.5kg", label: "0.5 kg" },
          { id: "1kg", label: "1 kg" },
          { id: "2kg", label: "2 kg" },
          { id: "3kg", label: "3 kg" },
          { id: "4kg", label: "4 kg" },
          { id: "5kg", label: "5 kg" }
        ]
      }
    ],

    variants: [
      { sku: "mancuerna-0.5kg", attrs: { peso: "0.5kg" }, name: "PAR 0.5 KG", description: "Par de mancuernas terapéuticas de neoprene 0.5 kg para inicio de rehabilitación y pacientes con limitación severa de fuerza. || Peso: 0.5 kg por unidad | Material: Neoprene | Presentación: Par.", price: 5, image: "/images/rehab/MANCUERNAS/0.5KG.png" },
      { sku: "mancuerna-1kg", attrs: { peso: "1kg" }, name: "PAR 1 KG", description: "Par de mancuernas terapéuticas de neoprene 1 kg para rehabilitación de hombro, codo y muñeca. || Peso: 1 kg por unidad | Material: Neoprene | Presentación: Par.", price: 5, image: "/images/rehab/MANCUERNAS/1KG.png" },
      { sku: "mancuerna-2kg", attrs: { peso: "2kg" }, name: "PAR 2 KG", description: "Par de mancuernas terapéuticas de neoprene 2 kg para fortalecimiento progresivo en rehabilitación de extremidades superiores. || Peso: 2 kg por unidad | Material: Neoprene | Presentación: Par.", price: 5, image: "/images/rehab/MANCUERNAS/2KG.png" },
      { sku: "mancuerna-3kg", attrs: { peso: "3kg" }, name: "PAR 3 KG", description: "Par de mancuernas terapéuticas de neoprene 3 kg para fortalecimiento muscular intermedio en rehabilitación. || Peso: 3 kg por unidad | Material: Neoprene | Presentación: Par.", price: 5, image: "/images/rehab/MANCUERNAS/3KG.png" },
      { sku: "mancuerna-4kg", attrs: { peso: "4kg" }, name: "PAR 4 KG", description: "Par de mancuernas terapéuticas de neoprene 4 kg para fortalecimiento avanzado en rehabilitación y acondicionamiento funcional. || Peso: 4 kg por unidad | Material: Neoprene | Presentación: Par.", price: 5, image: "/images/rehab/MANCUERNAS/4KG.png" },
      { sku: "mancuerna-5kg", attrs: { peso: "5kg" }, name: "PAR 5 KG", description: "Par de mancuernas terapéuticas de neoprene 5 kg, el peso máximo de la línea terapéutica para fortalecimiento avanzado y retorno a la actividad deportiva. || Peso: 5 kg por unidad | Material: Neoprene | Presentación: Par.", price: 5, image: "/images/rehab/MANCUERNAS/5KG.png" }
    ]
  },

  // ─── EVALUACIÓN Y ANTROPOMETRÍA ───────────────────────────────────────────────

  // 17. DINAMÓMETRO JAMAR PLUS DIGITAL
  {
    id: "dinamometro-mano-jamar-plus-digital",
    name: "DINAMÓMETRO DE MANO DIGITAL JAMAR PLUS",
    type: "Antropometria",
    description: "Dinamómetro de mano digital Jamar Plus para medición precisa de la fuerza de prensión isométrica, estándar de oro internacional en evaluación de fuerza de agarre. Reemplaza el sistema hidráulico tradicional por celdas de carga electrónicas de alta precisión sin partes móviles internas ni riesgo de fugas. Mide de 0 a 90 kg (0–200 lb) con mango ajustable en 5 posiciones de 35 a 87 mm para adaptarse a cualquier tamaño de mano. Calcula automáticamente promedio, desviación estándar y coeficiente de variación de hasta 5 pruebas por mano. Pantalla LCD de fácil lectura, cuerpo de aluminio con recubrimiento UV resistente a arañazos, autocorrección a punto cero y desconexión automática. Incluye estuche rígido de protección. || Marca: Jamar | Rango: 0–90 kg / 0–200 lb | Mango: 5 posiciones 35–87 mm | Cálculo: Promedio + DS + CV | Memoria: 5 pruebas por mano | Alimentación: 2 pilas AAA | Certificación: CE.",
    price: 5,
    image: "/images/rehab/JAMAR/JAMAR_PLUS.png"
  },

  // 18. PODOSCOPIO
  {
    id: "podoscopio",
    name: "PODOSCOPIO",
    type: "Antropometria",
    description: "Podoscopio para evaluación de la huella plantar y detección de alteraciones del arco del pie como pie plano, pie cavo y asimetrías de carga. El paciente se coloca de pie sobre la plataforma de vidrio iluminada y el evaluador observa desde abajo la distribución de la presión plantar. Herramienta estándar en podología, fisioterapia, ortopedia y programas de evaluación universitaria. Disponible en versión manual de acero con espejo angled y versión digital con cámara integrada para captura de imagen.",
    image: "/images/rehab/PODOSCOPIO/CARD.png",

    attributeOrder: ["tipo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "manual", label: "Manual con espejo" },
          { id: "digital", label: "Digital con cámara" }
        ]
      }
    ],

    variants: [
      {
        sku: "podoscopio-manual",
        attrs: { tipo: "manual" },
        name: "MANUAL CON ESPEJO",
        description: "Podoscopio manual de acero con plataforma de vidrio iluminada y espejo angled para evaluación visual de la huella plantar. Estructura plegable para fácil almacenaje y transporte. || Tipo: Manual | Iluminación: Sí | Espejo: Angled | Uso: Evaluación plantar clínica.",
        price: 5,
        image: "/images/rehab/PODOSCOPIO/MANUAL.png"
      },
      {
        sku: "podoscopio-digital",
        attrs: { tipo: "digital" },
        name: "DIGITAL CON CÁMARA",
        description: "Podoscopio digital con plataforma de vidrio iluminada y cámara integrada para captura y análisis de imagen de la huella plantar en software de podología. Permite registro fotográfico y seguimiento evolutivo del paciente. || Tipo: Digital | Cámara: Integrada | Uso: Análisis digital, registro evolutivo.",
        price: 5,
        image: "/images/rehab/PODOSCOPIO/DIGITAL.png"
      }
    ]
  },

  // 19. ANTROPÓMETRO HOLWAY – HUESOS LARGOS
  {
    id: "antropometro-holway-huesos-largos",
    name: "ANTROPÓMETRO DE HUESOS LARGOS HOLWAY",
    type: "Antropometria",
    description: "Antropómetro de huesos largos Holway fabricado en aluminio anodizado de primera calidad, diseñado por el antropometrista certificado ISAK IV Francis Holway. Utilizado para medir diámetros óseos de estructuras grandes como la profundidad del tórax y el ancho biacromial de los hombros, esenciales en la evaluación de la composición corporal y el somatotipo. Brazos fijos sin necesidad de configuración adicional, visor de fácil lectura que reduce errores de registro y deslizamiento suave de precisión. Herramienta estándar en protocolos ISAK Nivel 2 para nutricionistas deportivos, preparadores físicos y profesionales de ciencias del deporte. || Marca: Holway | Longitud: 60 cm | Material: Aluminio anodizado | Estándar: ISAK Nivel 2 | Diseñador: Francis Holway ISAK IV.",
    price: 5,
    image: "/images/rehab/HOLWAY/LARGO.png"
  },

  // 20. ANTROPÓMETRO HOLWAY – HUESOS CORTOS
  {
    id: "antropometro-holway-huesos-cortos",
    name: "ANTROPÓMETRO DE HUESOS CORTOS HOLWAY",
    type: "Antropometria",
    description: "Antropómetro de huesos cortos Holway fabricado en aluminio anodizado de alta calidad, diseñado por el antropometrista certificado ISAK IV Francis Holway. Instrumento tipo calibre deslizante para medir el ancho de huesos pequeños como rodilla, codo, muñeca y tobillo, esenciales para la determinación del marco óseo y la estimación de la masa muscular en evaluaciones de composición corporal. Rango de 14–18 cm con visor de fácil lectura. Estándar en protocolos ISAK Nivel 1 y 2. || Marca: Holway | Longitud: 18 cm | Rango: 14–18 cm | Material: Aluminio anodizado | Estándar: ISAK Nivel 1 y 2 | Diseñador: Francis Holway ISAK IV.",
    price: 5,
    image: "/images/rehab/HOLWAY/CORTO.png"
  },

  // 21. SEGMÓMETRO RÍGIDO HOLWAY
  {
    id: "segmometro-rigido-holway",
    name: "SEGMÓMETRO RÍGIDO HOLWAY",
    type: "Antropometria",
    description: "Segmómetro rígido Holway de aluminio anodizado para medición de longitudes óseas como la altura de rodilla, longitud del antebrazo, semibrazada y altura sentado. Diseñado por Francis Holway, antropometrista certificado ISAK IV, con puntas deslizantes de precisión que permiten tomar medidas cómodamente incluso en pacientes en silla de ruedas o en cama. Permite localizar el punto medio del brazo superior para la medición del pliegue cutáneo tricipital y la colocación correcta del manguito de presión arterial. Longitud de 60 cm con visor de fácil lectura. Estándar en cursos de certificación ISAK. || Marca: Holway | Longitud: 60 cm | Material: Aluminio anodizado | Usos: Altura de rodilla, longitud antebrazo, semibrazada | Estándar: ISAK | Diseñador: Francis Holway ISAK IV.",
    price: 5,
    image: "/images/rehab/HOLWAY/SEGMO_RIGIDO.png"
  },

  // 22. SEGMÓMETRO FLEXIBLE CESCORF
  {
    id: "segmometro-flexible-cescorf",
    name: "SEGMÓMETRO FLEXIBLE CESCORF",
    type: "Antropometria",
    description: "Segmómetro flexible Cescorf de acero inoxidable con hoja de 6 mm de ancho para medición de circunferencias y longitudes corporales en antropometría. Hoja plana y flexible con espacio en blanco antes del cero (6–8 cm) para facilitar la correcta colocación en el punto de medición. Sistema métrico, longitud de 3 metros. Permite tomar medidas de longitud y circunferencia con mayor flexibilidad que el segmómetro rígido para segmentos curvos del cuerpo. Estándar en protocolos ISAK y evaluación de composición corporal. || Marca: Cescorf | Longitud: 3 m | Ancho hoja: 6 mm | Material: Acero inoxidable | Estándar: ISAK.",
    price: 5,
    image: "/images/rehab/CESCORF/SEGMO_FLEXIBLE.png"
  },

  // 23. CINTA MÉTRICA HOLWAY
  {
    id: "cinta-metrica-acero-flexible-holway",
    name: "CINTA MÉTRICA DE ACERO FLEXIBLE HOLWAY",
    type: "Antropometria",
    description: "Cinta métrica antropométrica de acero flexible Holway de 2 metros para medición de circunferencias corporales en evaluación antropométrica. Hoja de acero delgada y flexible de 6 mm de ancho con espacio en blanco antes del cero para correcta colocación, sistema métrico y escala de fácil lectura que reduce errores de medición. Diseñada por Francis Holway para uso en protocolos ISAK de composición corporal y somatotipo. Instrumento estándar en kits de antropometría Nivel 1 y 2. || Marca: Holway | Longitud: 2 m | Ancho: 6 mm | Material: Acero flexible | Estándar: ISAK Nivel 1 y 2 | Diseñador: Francis Holway.",
    price: 5,
    image: "/images/rehab/HOLWAY/CINTA.png"
  },

];