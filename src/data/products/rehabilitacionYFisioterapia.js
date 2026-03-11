// src/data/products/rehabilitacionYFisioterapia.js

export const rehabilitacionYFisioterapiaProducts = [

  {
    id: "cojin-flotacion-hidroterapia",
    name: "COJÍN DE FLOTACIÓN PARA HIDROTERAPIA",
    type: "Rehabilitación",
    description: "Cojín de flotación diseñado para sesiones de hidroterapia y rehabilitación acuática. Proporciona soporte y estabilidad en el agua, facilitando ejercicios terapéuticos y de movilidad. Apto para uso en piscinas terapéuticas, fisioterapia acuática y recreación.",
    price: 150,
    image: "/images/rehab/FLOTADOR CERVICAL/CARD.png",
    images: [
      "/images/rehab/FLOTADOR CERVICAL/CARD.png",
      "/images/rehab/FLOTADOR CERVICAL/WATER FUN.png",
      "/images/rehab/FLOTADOR CERVICAL/WATER FUN_2.png"
    ]
  },

  {
    id: "bandas-theraband-kit-x3",
    name: "BANDAS THERABAND x3 UNIDADES",
    type: "Rehabilitación",
    description: "Kit de 3 bandas elásticas de resistencia THERABAND codificadas por color. Disponible en nivel principiante (con látex o sin látex) y nivel avanzado con látex. Ideales para rehabilitación, fisioterapia, pilates, yoga y tonificación muscular.",
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
        dependsOn: {
          nivel: {
            principiante: ["latex", "sin-latex"],
            avanzado: ["latex"]
          }
        },
        values: [
          { id: "latex", label: "Con Látex" },
          { id: "sin-latex", label: "Sin Látex" }
        ]
      }
    ],

    variants: [
      {
        sku: "kit3-principiante-latex",
        attrs: { nivel: "principiante", material: "latex" },
        name: "Principiante – Con Látex",
        description: "Diseñado para entrenamiento de fuerza de bajo impacto, ideal para rehabilitación, fisioterapia, pilates, yoga y tonificación muscular. Incluye 3 bandas abiertas de látex natural de 5 pies × 5 pulgadas: amarillo (3–4.3 lb), rojo (3.7–5.5 lb) y verde (4.6–6.7 lb). Fáciles de limpiar y resistentes a estiramientos repetidos.",
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
        name: "Principiante – Sin Látex",
        description: "Sin látex, diseñado para entrenamiento de fuerza de bajo impacto, ideal para rehabilitación, fisioterapia, pilates, yoga y tonificación muscular, especialmente en entornos con políticas libres de látex o para pieles sensibles. Incluye 3 bandas abiertas de 5 pies × 4 pulgadas: amarillo (3–4.3 lb), rojo (3.7–5.5 lb) y verde (4.6–6.7 lb). Fáciles de limpiar y resistentes a estiramientos repetidos.",
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
        name: "Avanzado – Con Látex",
        description: "Diseñado para entrenamiento de fuerza progresivo, rehabilitación y acondicionamiento físico. Incluye 3 bandas abiertas de látex natural de 5 pies × 4 pulgadas: azul (5.8–8.5 lb), negro (7.3–10.2 lb) y plata (10.2–15.3 lb). Fáciles de limpiar y resistentes a estiramientos repetidos.",
        price: 150,
        image: "/images/rehab/KIT 3/CARD_AV.png",
        images: [
          "/images/rehab/KIT 3/AV_1.png",
          "/images/rehab/KIT 3/AV_2.png"
        ]
      }
    ]
  },
  {
    id: "banda-theraband-23mt",
    name: "BANDAS THERABAND 23 MT – SIN LÁTEX",
    type: "Rehabilitación",
    description: "Rollo de banda elástica de resistencia THERABAND sin látex de 25 yardas × 4 pulgadas. Fabricada con material libre de látex, sin olor ni polvo, ideal para usuarios con sensibilidad al látex o instituciones con políticas \"latex free\". Apta para cortar longitudes personalizadas. Disponible en 7 niveles de resistencia codificados por color.",
    image: "/images/rehab/23 MT/CARD.png",

    attributeOrder: ["color"],

    attributes: [
      {
        id: "color",
        label: "Nivel de Resistencia",
        type: "single",
        values: [
          { id: "amarillo", label: "Amarillo – Ligero" },
          { id: "rojo", label: "Rojo – Medio" },
          { id: "verde", label: "Verde – Pesado" },
          { id: "azul", label: "Azul – Extra Fuerte" },
          { id: "negro", label: "Negro – Muy Fuerte" },
          { id: "plata", label: "Plata – Súper Fuerte" },
          { id: "oro", label: "Oro – Máximo" }
        ]
      }
    ],

    variants: [
      {
        sku: "theraband-23mt-amarillo",
        attrs: { color: "amarillo" },
        name: "Amarillo – Ligero",
        description: "Nivel ligero (amarillo). Proporciona 3 lb al 100% de elongación y 4.3 lb al 200%. Ideal para rehabilitación y ejercicios de baja intensidad. Medidas: 25 yardas × 4 pulgadas.",
        price: 320,
        image: "/images/rehab/23 MT/YELLOW_25.png",
        images: ["/images/rehab/23 MT/YELLOW_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-rojo",
        attrs: { color: "rojo" },
        name: "Rojo – Medio",
        description: "Nivel medio (rojo). Proporciona 3.7 lb al 100% de elongación y 5.5 lb al 200%. Para fortalecimiento progresivo, fisioterapia y pilates. Medidas: 25 yardas × 4 pulgadas.",
        price: 320,
        image: "/images/rehab/23 MT/RED_25.png",
        images: ["/images/rehab/23 MT/RED_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-verde",
        attrs: { color: "verde" },
        name: "Verde – Pesado",
        description: "Nivel pesado (verde). Proporciona 4.6 lb al 100% de elongación y 6.7 lb al 200%. Para fortalecimiento, fisioterapia y estiramientos. Medidas: 25 yardas × 4 pulgadas.",
        price: 320,
        image: "/images/rehab/23 MT/GREEN_25.png",
        images: ["/images/rehab/23 MT/GREEN_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-azul",
        attrs: { color: "azul" },
        name: "Azul – Extra Fuerte",
        description: "Nivel extra fuerte (azul). Proporciona 5.8 lb al 100% de elongación y 8.6 lb al 200%. Para entrenamiento de fuerza moderado y rehabilitación. Medidas: 25 yardas × 4 pulgadas.",
        price: 320,
        image: "/images/rehab/23 MT/BLUE_25.png",
        images: ["/images/rehab/23 MT/BLUE_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-negro",
        attrs: { color: "negro" },
        name: "Negro – Muy Fuerte",
        description: "Nivel muy fuerte (negro). Proporciona 7.3 lb al 100% de elongación y 10.2 lb al 200%. Para entrenamiento moderado-avanzado y fisioterapia. Medidas: 25 yardas × 4 pulgadas.",
        price: 320,
        image: "/images/rehab/23 MT/BLACK_25.png",
        images: ["/images/rehab/23 MT/BLACK_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-plata",
        attrs: { color: "plata" },
        name: "Plata – Súper Fuerte",
        description: "Nivel súper fuerte (plata). Proporciona 10.2 lb al 100% de elongación y 15.3 lb al 200%. Para fuerza avanzada y acondicionamiento muscular. Medidas: 25 yardas × 4 pulgadas.",
        price: 320,
        image: "/images/rehab/23 MT/SILVER_25.png",
        images: ["/images/rehab/23 MT/SILVER_25.png", "/images/rehab/23 MT/INFO.png"]
      },
      {
        sku: "theraband-23mt-oro",
        attrs: { color: "oro" },
        name: "Oro – Máximo",
        description: "Nivel máximo (oro). Proporciona 14.2 lb al 100% de elongación y 21.3 lb al 200%. Para entrenamiento intensivo, fortalecimiento avanzado y entrenamiento funcional. Medidas: 25 yardas × 4 pulgadas.",
        price: 320,
        image: "/images/rehab/23 MT/GOLD_25.png",
        images: ["/images/rehab/23 MT/GOLD_25.png", "/images/rehab/23 MT/INFO.png"]
      }
    ]
  },

  {
    id: "banda-theraband-5-5mt-latex",
    name: "BANDA THERABAND 5.5 MT – CON LÁTEX",
    type: "Rehabilitación",
    description: "Rollo de banda elástica de resistencia THERABAND con látex natural de alta calidad. Medidas: 6 yardas × 5 pulgadas. Permite mejorar la fuerza, rango de movimiento y flexibilidad mediante ejercicios de bajo a alto impacto. Disponible en 8 niveles de resistencia codificados por color.",
    image: "/images/rehab/5.5 MT/CARD.png",

    attributeOrder: ["color"],

    attributes: [
      {
        id: "color",
        label: "Nivel de Resistencia",
        type: "single",
        values: [
          { id: "rosa", label: "Rosa – Extra Ligero" },
          { id: "amarillo", label: "Amarillo – Ligero" },
          { id: "rojo", label: "Rojo – Medio" },
          { id: "verde", label: "Verde – Fuerte" },
          { id: "azul", label: "Azul – Extra Fuerte" },
          { id: "negro", label: "Negro – Muy Fuerte" },
          { id: "plata", label: "Plata – Súper Fuerte" },
          { id: "oro", label: "Oro – Máximo" }
        ]
      }
    ],

    variants: [
      {
        sku: "theraband-6y-rosa",
        attrs: { color: "rosa" },
        name: "Rosa – Extra Ligero",
        description: "Nivel extra ligero (rosa). Proporciona 2.4 lb al 100% de elongación y 3.4 lb al 200%. Ideal para pacientes en recuperación o usuarios que inician entrenamiento. Medidas: 6 yardas × 5 pulgadas.",
        price: 80,
        image: "/images/rehab/5.5 MT/PINK_6.png",
        images: ["/images/rehab/5.5 MT/PINK_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-amarillo",
        attrs: { color: "amarillo" },
        name: "Amarillo – Ligero",
        description: "Nivel ligero (amarillo). Proporciona 3.0 lb al 100% de elongación y 4.3 lb al 200%. Ideal para pacientes en recuperación o usuarios que inician programas de entrenamiento. Medidas: 6 yardas × 5 pulgadas.",
        price: 80,
        image: "/images/rehab/5.5 MT/YELLOW_6.png",
        images: ["/images/rehab/5.5 MT/YELLOW_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-rojo",
        attrs: { color: "rojo" },
        name: "Rojo – Medio",
        description: "Nivel medio (rojo). Proporciona 3.7 lb al 100% de elongación y 5.5 lb al 200%. Ideal para ejercicios de resistencia ligera y terapia física. Medidas: 6 yardas × 5 pulgadas.",
        price: 80,
        image: "/images/rehab/5.5 MT/RED_6.png",
        images: ["/images/rehab/5.5 MT/RED_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-verde",
        attrs: { color: "verde" },
        name: "Verde – Fuerte",
        description: "Nivel fuerte (verde). Proporciona 4.6 lb al 100% de elongación y 6.7 lb al 200%. Ideal para ejercicios de resistencia ligera a moderada y terapia física. Medidas: 6 yardas × 5 pulgadas.",
        price: 80,
        image: "/images/rehab/5.5 MT/GREEN_6.png",
        images: ["/images/rehab/5.5 MT/GREEN_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-azul",
        attrs: { color: "azul" },
        name: "Azul – Extra Fuerte",
        description: "Nivel extra fuerte (azul). Proporciona 5.8 lb al 100% de elongación y 8.6 lb al 200%. Ideal para entrenamiento de resistencia de nivel medio y terapia física. Medidas: 6 yardas × 5 pulgadas.",
        price: 80,
        image: "/images/rehab/5.5 MT/BLUE_6.png",
        images: ["/images/rehab/5.5 MT/BLUE_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-negro",
        attrs: { color: "negro" },
        name: "Negro – Muy Fuerte",
        description: "Nivel muy fuerte (negro). Proporciona 7.3 lb al 100% de elongación y 10.2 lb al 200%. Ideal para entrenamiento de resistencia de nivel alto y terapia física avanzada. Medidas: 6 yardas × 5 pulgadas.",
        price: 80,
        image: "/images/rehab/5.5 MT/BLACK_6.png",
        images: ["/images/rehab/5.5 MT/BLACK_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-plata",
        attrs: { color: "plata" },
        name: "Plata – Súper Fuerte",
        description: "Nivel súper fuerte (plata). Proporciona 10.2 lb al 100% de elongación y 15.3 lb al 200%. Excelente alternativa al entrenamiento con pesas. Medidas: 6 yardas × 5 pulgadas.",
        price: 80,
        image: "/images/rehab/5.5 MT/SILVER_6.png",
        images: ["/images/rehab/5.5 MT/SILVER_6.png", "/images/rehab/5.5 MT/INFO.png"]
      },
      {
        sku: "theraband-6y-oro",
        attrs: { color: "oro" },
        name: "Oro – Máximo",
        description: "Nivel máximo (oro). Proporciona 14.2 lb al 100% de elongación y 21.3 lb al 200%. Ideal para ejercicios de alta intensidad y alternativa al entrenamiento con pesas. Medidas: 6 yardas × 5 pulgadas.",
        price: 80,
        image: "/images/rehab/5.5 MT/GOLD_6.png",
        images: ["/images/rehab/5.5 MT/GOLD_6.png", "/images/rehab/5.5 MT/INFO.png"]
      }
    ]
  },
  {
    id: "bandas-elasticas-latex-x7",
    name: "BANDAS THERABAND CON LÁTEX x7 UNIDADES",
    type: "Rehabilitación",
    description: "Kit de 7 bandas elásticas de resistencia THERABAND con látex, diseñado para entrenamiento de fuerza progresivo, rehabilitación y ejercicios de movilidad. Incluye 7 bandas planas codificadas por color, que abarcan los niveles de resistencia desde 3 lb (amarillo) hasta 14.2 lb (oro), permitiendo una progresión gradual en programas de fisioterapia, pilates o entrenamiento funcional. Cada banda mide 6 pies de largo × 5 pulgadas de ancho, fabricadas en látex natural de alta calidad, ofreciendo durabilidad, elasticidad constante y uso portátil en clínica, gimnasio o en casa.",
    price: 250,
    image: "/images/rehab/KIT 7/CARD.png",
    images: [
      "/images/rehab/KIT 7/KIT7.png",
      "/images/rehab/KIT 7/INFO.png"
    ]
  },

  {
    id: "bandas-theraband-loop-x4",
    name: "BANDAS THERABAND LOOP",
    type: "Rehabilitación",
    description: "Bandas tipo loop THERABAND diseñadas para entrenamiento funcional, fortalecimiento muscular y programas de rehabilitación física. Su diseño continuo evita tener que anudar bandas planas, proporcionando mayor comodidad, estabilidad y facilidad de uso en clínica, gimnasio o en casa.",
    image: "/images/rehab/KIT LOOPS/CARD.png",

    attributeOrder: ["kit"],

    attributes: [
      {
        id: "kit",
        label: "Kit",
        type: "single",
        values: [
          { id: "x4", label: "x4 Unidades" },
          { id: "x3", label: "x3 Unidades" }
        ]
      }
    ],

    variants: [
      {
        sku: "loop-kit-x4",
        attrs: { kit: "x4" },
        name: "x4 Unidades – Resistencia Estándar",
        description: "Incluye 4 bandas codificadas por color para progresión de resistencia en ejercicios de pilates, yoga, fisioterapia y entrenamiento de tren inferior y superior. Cada banda mide 18 pulgadas × 3 pulgadas. Resistencias: Amarilla 6 lb | Roja 7.4 lb | Verde 9.2 lb | Azul 11.6 lb.",
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
        name: "x3 Unidades – Resistencia Elevada",
        description: "Incluye 3 bandas tipo loop de látex THERABAND codificadas por color para trabajar progresivamente glúteos, rodillas, caderas y musculatura del tren superior e inferior. Ideales para fisioterapia, pilates y entrenamiento de bajo impacto. Cada banda mide 18 pulgadas × 3 pulgadas. Resistencias: Negro 7.3 lb | Plateado 10.2 lb | Oro 14.2 lb.",
        price: 200,
        image: "/images/rehab/KIT LOOPS/KIT 3.png",
        images: [
          "/images/rehab/KIT LOOPS/KIT 3.png",
          "/images/rehab/KIT LOOPS/INFO.png"
        ]
      }
    ]
  },
  {
    id: "ondas-rusas-vacuum-marca-slem-better",
    name: "ONDAS RUSAS + VACUUM MARCA: SLEM BETTER",
    description: "ONDAS RUSAS + VACUUM MARCA: SLEM BETTER",
    price: 1678.8,
    image: "/images/rehabilitacion/placeholder.png"
  },
  {
    id: "pack-ondas-rusas-gimnasia-pasiva-marca-slem-better",
    name: "PACK ONDAS RUSAS + GIMNASIA PASIVA MARCA: SLEM BETTER",
    description: "PACK ONDAS RUSAS + GIMNASIA PASIVA MARCA: SLEM BETTER",
    price: 1678.8,
    image: "/images/rehabilitacion/placeholder.png"
  },
  {
    id: "pack-ondas-rusas-vacuum-gimnasia-pasiva-marca-slem-better",
    name: "PACK ONDAS RUSAS + VACUUM + GIMNASIA PASIVA MARCA: SLEM BETTER",
    description: "PACK ONDAS RUSAS + VACUUM + GIMNASIA PASIVA MARCA: SLEM BETTER",
    price: 2158.8,
    image: "/images/rehabilitacion/placeholder.png"
  },
  {
    id: "pack-ondas-rusas-o-gimnasia-pasiva-marca-slem-better",
    name: "PACK ONDAS RUSAS O GIMNASIA PASIVA MARCA: SLEM BETTER",
    description: "PACK ONDAS RUSAS O GIMNASIA PASIVA MARCA: SLEM BETTER",
    price: 958.8,
    image: "/images/rehabilitacion/placeholder.png"
  },
  {
    id: "pesa-de-metal-con-velcro-para-tobillo-1-kg",
    name: "PESA DE METAL CON VELCRO PARA TOBILLO × 1 kg",
    description: "PESA DE METAL CON VELCRO PARA TOBILLO × 1 kg",
    price: 78,
    image: "/images/rehabilitacion/placeholder.png"
  },
  {
    id: "pesa-neoprene-con-velcro-p-tobillo-peso-1-kg",
    name: "PESA NEOPRENE CON VELCRO P/ TOBILLO PESO 1 kg",
    description: "PESA NEOPRENE CON VELCRO P/ TOBILLO PESO 1 kg",
    price: 21,
    image: "/images/rehabilitacion/placeholder.png"
  },
  {
    id: "pesa-neoprene-con-velcro-p-tobillo-peso-2-kg",
    name: "PESA NEOPRENE CON VELCRO P/ TOBILLO PESO 2 kg",
    description: "PESA NEOPRENE CON VELCRO P/ TOBILLO PESO 2 kg",
    price: 27.48,
    image: "/images/rehabilitacion/placeholder.png"
  },
  {
    id: "pesa-tobillera-0-5-kg-arena-azul",
    name: "PESA TOBILLERA × 0.5 kg ARENA AZUL",
    description: "PESA TOBILLERA × 0.5 kg ARENA AZUL",
    price: 14.4,
    image: "/images/rehabilitacion/placeholder.png"
  },
  {
    id: "pesa-tobillera-0-5-kg-metal-azul",
    name: "PESA TOBILLERA × 0.5 kg METAL AZUL",
    description: "PESA TOBILLERA × 0.5 kg METAL AZUL",
    price: 66,
    image: "/images/rehabilitacion/placeholder.png"
  },
  {
    id: "pesa-tobillera-1-kg-arena-azul",
    name: "PESA TOBILLERA × 1 kg ARENA AZUL",
    description: "PESA TOBILLERA × 1 kg ARENA AZUL",
    price: 18,
    image: "/images/rehabilitacion/placeholder.png"
  },
  {
    id: "pesa-tobillera-1-kg-metal-negro",
    name: "PESA TOBILLERA × 1 kg METAL NEGRO",
    description: "PESA TOBILLERA × 1 kg METAL NEGRO",
    price: 78,
    image: "/images/rehabilitacion/placeholder.png"
  },


];

