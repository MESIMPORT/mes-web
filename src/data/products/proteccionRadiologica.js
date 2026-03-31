// src/data/products/proteccionRadiologica.js

export const proteccionRadiologicaProducts = [
  {
    id: "delantal-doble-cara-kiran",
    name: "DELANTAL DOBLE KIRAN",
    type: "Proteccion corporal",
    description: "Delantal de protección radiológica de doble cara fabricado por Kiran, diseñado para brindar protección tanto frontal como dorsal durante procedimientos de radiología intervencionista, cardiología y cirugía. Fabricado con materiales de última generación disponibles en ZeroLead®, Ultralite® y LeadLite®, combinando el mayor nivel de atenuación de radiación con un diseño ergonómico y ligero que reduce la fatiga en uso prolongado. Cumple con las normas EN 61331-1:2014, ASTM F 2547-06 y certificaciones CE, FDA e ISO 13485.",
    image: "/images/radiologia/DOBLECARA_CARD.png",

    attributeOrder: ["modelo", "material", "equivalencia"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "optima", label: "Óptima" },
          { id: "maxima", label: "Máxima" }
        ]
      },
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "zerolead", label: "ZeroLead® (sin plomo)" },
          { id: "ultralite", label: "Ultralite® (peso optimizado)" },
          { id: "leadlite", label: "LeadLite® (más ligero con plomo)" }
        ]
      },
      {
        id: "equivalencia",
        label: "Equivalencia de Plomo",
        type: "single",
        values: [
          { id: "0-35-frontal-0-25-dorsal", label: "0,35 mm Pb frontal / 0,25 mm Pb dorsal" },
          { id: "0-50-frontal-0-25-dorsal", label: "0,50 mm Pb frontal / 0,25 mm Pb dorsal" }
        ]
      }
    ],

    variants: [
      {
        sku: "delantal-dc-optima-zerolead-035",
        attrs: { modelo: "optima", material: "zerolead", equivalencia: "0-35-frontal-0-25-dorsal" },
        name: "ÓPTIMA – ZEROLEAD® 0,35/0,25 mm Pb",
        description: "Delantal de doble cara Óptima en material ZeroLead® ecológico sin plomo. Superposición frontal de 15 cm, aberturas laterales para mejor movilidad, paneles de velcro ajustables, cinturón elástico incorporado y hombreras antideslizantes. || **Modelo:** Óptima | **Material:** ZeroLead® | **Equivalencia:** 0,35 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_OPTIMA.png"
      },
      {
        sku: "delantal-dc-optima-zerolead-050",
        attrs: { modelo: "optima", material: "zerolead", equivalencia: "0-50-frontal-0-25-dorsal" },
        name: "ÓPTIMA – ZEROLEAD® 0,50/0,25 mm Pb",
        description: "Delantal de doble cara Óptima en material ZeroLead® ecológico sin plomo. Superposición frontal de 15 cm, aberturas laterales para mejor movilidad, paneles de velcro ajustables, cinturón elástico incorporado y hombreras antideslizantes. || **Modelo:** Óptima | **Material:** ZeroLead® | **Equivalencia:** 0,50 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_OPTIMA.png"
      },
      {
        sku: "delantal-dc-optima-ultralite-035",
        attrs: { modelo: "optima", material: "ultralite", equivalencia: "0-35-frontal-0-25-dorsal" },
        name: "ÓPTIMA – ULTRALITE® 0,35/0,25 mm Pb",
        description: "Delantal de doble cara Óptima en material Ultralite® de peso optimizado. Superposición frontal de 15 cm, aberturas laterales para mejor movilidad, paneles de velcro ajustables, cinturón elástico incorporado y hombreras antideslizantes. || **Modelo:** Óptima | **Material:** Ultralite® | **Equivalencia:** 0,35 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_OPTIMA.png"
      },
      {
        sku: "delantal-dc-optima-ultralite-050",
        attrs: { modelo: "optima", material: "ultralite", equivalencia: "0-50-frontal-0-25-dorsal" },
        name: "ÓPTIMA – ULTRALITE® 0,50/0,25 mm Pb",
        description: "Delantal de doble cara Óptima en material Ultralite® de peso optimizado. Superposición frontal de 15 cm, aberturas laterales para mejor movilidad, paneles de velcro ajustables, cinturón elástico incorporado y hombreras antideslizantes. || **Modelo:** Óptima | **Material:** Ultralite® | **Equivalencia:** 0,50 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_OPTIMA.png"
      },
      {
        sku: "delantal-dc-optima-leadlite-035",
        attrs: { modelo: "optima", material: "leadlite", equivalencia: "0-35-frontal-0-25-dorsal" },
        name: "ÓPTIMA – LEADLITE® 0,35/0,25 mm Pb",
        description: "Delantal de doble cara Óptima en material LeadLite®, el material con plomo más ligero disponible. Superposición frontal de 15 cm, aberturas laterales para mejor movilidad, paneles de velcro ajustables, cinturón elástico incorporado y hombreras antideslizantes. || **Modelo:** Óptima | **Material:** LeadLite® | **Equivalencia:** 0,35 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_OPTIMA.png"
      },
      {
        sku: "delantal-dc-optima-leadlite-050",
        attrs: { modelo: "optima", material: "leadlite", equivalencia: "0-50-frontal-0-25-dorsal" },
        name: "ÓPTIMA – LEADLITE® 0,50/0,25 mm Pb",
        description: "Delantal de doble cara Óptima en material LeadLite®, el material con plomo más ligero disponible. Superposición frontal de 15 cm, aberturas laterales para mejor movilidad, paneles de velcro ajustables, cinturón elástico incorporado y hombreras antideslizantes. || **Modelo:** Óptima | **Material:** LeadLite® | **Equivalencia:** 0,50 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_OPTIMA.png"
      },
      {
        sku: "delantal-dc-maxima-zerolead-035",
        attrs: { modelo: "maxima", material: "zerolead", equivalencia: "0-35-frontal-0-25-dorsal" },
        name: "MÁXIMA – ZEROLEAD® 0,35/0,25 mm Pb",
        description: "Delantal de doble cara Máxima en material ZeroLead® ecológico sin plomo. Superposición frontal completa para mejor ajuste, protección igual en ambos paneles de hombros, cinturón elástico ancho ajustable y cierre de abertura lateral para evitar exposición accidental. || **Modelo:** Máxima | **Material:** ZeroLead® | **Equivalencia:** 0,35 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_MAXIMA.png"
      },
      {
        sku: "delantal-dc-maxima-zerolead-050",
        attrs: { modelo: "maxima", material: "zerolead", equivalencia: "0-50-frontal-0-25-dorsal" },
        name: "MÁXIMA – ZEROLEAD® 0,50/0,25 mm Pb",
        description: "Delantal de doble cara Máxima en material ZeroLead® ecológico sin plomo. Superposición frontal completa para mejor ajuste, protección igual en ambos paneles de hombros, cinturón elástico ancho ajustable y cierre de abertura lateral para evitar exposición accidental. || **Modelo:** Máxima | **Material:** ZeroLead® | **Equivalencia:** 0,50 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_MAXIMA.png"
      },
      {
        sku: "delantal-dc-maxima-ultralite-035",
        attrs: { modelo: "maxima", material: "ultralite", equivalencia: "0-35-frontal-0-25-dorsal" },
        name: "MÁXIMA – ULTRALITE® 0,35/0,25 mm Pb",
        description: "Delantal de doble cara Máxima en material Ultralite® de peso optimizado. Superposición frontal completa para mejor ajuste, protección igual en ambos paneles de hombros, cinturón elástico ancho ajustable y cierre de abertura lateral para evitar exposición accidental. || **Modelo:** Máxima | **Material:** Ultralite® | **Equivalencia:** 0,35 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_MAXIMA.png"
      },
      {
        sku: "delantal-dc-maxima-ultralite-050",
        attrs: { modelo: "maxima", material: "ultralite", equivalencia: "0-50-frontal-0-25-dorsal" },
        name: "MÁXIMA – ULTRALITE® 0,50/0,25 mm Pb",
        description: "Delantal de doble cara Máxima en material Ultralite® de peso optimizado. Superposición frontal completa para mejor ajuste, protección igual en ambos paneles de hombros, cinturón elástico ancho ajustable y cierre de abertura lateral para evitar exposición accidental. || **Modelo:** Máxima | **Material:** Ultralite® | **Equivalencia:** 0,50 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_MAXIMA.png"
      },
      {
        sku: "delantal-dc-maxima-leadlite-035",
        attrs: { modelo: "maxima", material: "leadlite", equivalencia: "0-35-frontal-0-25-dorsal" },
        name: "MÁXIMA – LEADLITE® 0,35/0,25 mm Pb",
        description: "Delantal de doble cara Máxima en material LeadLite®, el material con plomo más ligero. Superposición frontal completa para mejor ajuste, protección igual en ambos paneles de hombros, cinturón elástico ancho ajustable y cierre de abertura lateral para evitar exposición accidental. || **Modelo:** Máxima | **Material:** LeadLite® | **Equivalencia:** 0,35 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_MAXIMA.png"
      },
      {
        sku: "delantal-dc-maxima-leadlite-050",
        attrs: { modelo: "maxima", material: "leadlite", equivalencia: "0-50-frontal-0-25-dorsal" },
        name: "MÁXIMA – LEADLITE® 0,50/0,25 mm Pb",
        description: "Delantal de doble cara Máxima en material LeadLite®, el material con plomo más ligero. Superposición frontal completa para mejor ajuste, protección igual en ambos paneles de hombros, cinturón elástico ancho ajustable y cierre de abertura lateral para evitar exposición accidental. || **Modelo:** Máxima | **Material:** LeadLite® | **Equivalencia:** 0,50 mm Pb frontal / 0,25 mm Pb dorsal.",
        price: 5,
        image: "/images/radiologia/DOBLECARA_MAXIMA.png"
      }
    ]
  },

  {
    id: "falda-chaleco-kiran",
    name: "FALDA Y CHALECO KIRAN",
    type: "Proteccion corporal",
    description: "Sistema de protección radiológica de dos piezas (falda + chaleco) fabricado por Kiran, que distribuye el peso equitativamente entre hombros y cintura para reducir la fatiga en procedimientos prolongados. El chaleco se superpone a la falda hasta 15 cm garantizando protección continua de todo el cuerpo. Disponible en materiales ZeroLead®, Ultraligero® y LeadLite®. Cumple normas EN 61331-1:2014, ASTM F 2547-06 y certificaciones CE, FDA e ISO 13485.",
    image: "/images/radiologia/FALDACHALECO_CARD.png",

    attributeOrder: ["modelo", "material", "equivalencia"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "optima", label: "Óptima" },
          { id: "maxima", label: "Máxima" }
        ]
      },
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "zerolead", label: "ZeroLead® (sin plomo)" },
          { id: "ultraligero", label: "Ultraligero® (peso optimizado)" },
          { id: "leadlite", label: "LeadLite® (más ligero con plomo)" }
        ]
      },
      {
        id: "equivalencia",
        label: "Equivalencia de Plomo",
        type: "single",
        values: [
          { id: "0-35-frontal-0-25-dorsal", label: "0,35 mm Pb frontal / 0,25 mm Pb dorsal" },
          { id: "0-50-frontal-0-25-dorsal", label: "0,50 mm Pb frontal / 0,25 mm Pb dorsal" }
        ]
      }
    ],

    variants: [
      { sku: "falda-chaleco-optima-zerolead-035", attrs: { modelo: "optima", material: "zerolead", equivalencia: "0-35-frontal-0-25-dorsal" }, name: "ÓPTIMA – ZEROLEAD® 0,35/0,25 mm Pb", description: "Falda y chaleco Óptima en ZeroLead®. Paneles de velcro ajustables, falda completamente superpuesta y distribución equitativa del peso. El chaleco cubre la falda 15 cm adicionales. || **Modelo:** Óptima | **Material:** ZeroLead® | **Equivalencia:** 0,35/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_OPTIMA.png" },
      { sku: "falda-chaleco-optima-zerolead-050", attrs: { modelo: "optima", material: "zerolead", equivalencia: "0-50-frontal-0-25-dorsal" }, name: "ÓPTIMA – ZEROLEAD® 0,50/0,25 mm Pb", description: "Falda y chaleco Óptima en ZeroLead®. Paneles de velcro ajustables, falda completamente superpuesta y distribución equitativa del peso. El chaleco cubre la falda 15 cm adicionales. || **Modelo:** Óptima | **Material:** ZeroLead® | **Equivalencia:** 0,50/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_OPTIMA.png" },
      { sku: "falda-chaleco-optima-ultraligero-035", attrs: { modelo: "optima", material: "ultraligero", equivalencia: "0-35-frontal-0-25-dorsal" }, name: "ÓPTIMA – ULTRALIGERO® 0,35/0,25 mm Pb", description: "Falda y chaleco Óptima en Ultraligero®. Paneles de velcro ajustables, falda completamente superpuesta y distribución equitativa del peso. El chaleco cubre la falda 15 cm adicionales. || **Modelo:** Óptima | **Material:** Ultraligero® | **Equivalencia:** 0,35/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_OPTIMA.png" },
      { sku: "falda-chaleco-optima-ultraligero-050", attrs: { modelo: "optima", material: "ultraligero", equivalencia: "0-50-frontal-0-25-dorsal" }, name: "ÓPTIMA – ULTRALIGERO® 0,50/0,25 mm Pb", description: "Falda y chaleco Óptima en Ultraligero®. Paneles de velcro ajustables, falda completamente superpuesta y distribución equitativa del peso. El chaleco cubre la falda 15 cm adicionales. || **Modelo:** Óptima | **Material:** Ultraligero® | **Equivalencia:** 0,50/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_OPTIMA.png" },
      { sku: "falda-chaleco-optima-leadlite-035", attrs: { modelo: "optima", material: "leadlite", equivalencia: "0-35-frontal-0-25-dorsal" }, name: "ÓPTIMA – LEADLITE® 0,35/0,25 mm Pb", description: "Falda y chaleco Óptima en LeadLite®. Paneles de velcro ajustables, falda completamente superpuesta y distribución equitativa del peso. El chaleco cubre la falda 15 cm adicionales. || **Modelo:** Óptima | **Material:** LeadLite® | **Equivalencia:** 0,35/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_OPTIMA.png" },
      { sku: "falda-chaleco-optima-leadlite-050", attrs: { modelo: "optima", material: "leadlite", equivalencia: "0-50-frontal-0-25-dorsal" }, name: "ÓPTIMA – LEADLITE® 0,50/0,25 mm Pb", description: "Falda y chaleco Óptima en LeadLite®. Paneles de velcro ajustables, falda completamente superpuesta y distribución equitativa del peso. El chaleco cubre la falda 15 cm adicionales. || **Modelo:** Óptima | **Material:** LeadLite® | **Equivalencia:** 0,50/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_OPTIMA.png" },
      { sku: "falda-chaleco-maxima-zerolead-035", attrs: { modelo: "maxima", material: "zerolead", equivalencia: "0-35-frontal-0-25-dorsal" }, name: "MÁXIMA – ZEROLEAD® 0,35/0,25 mm Pb", description: "Falda y chaleco Máxima en ZeroLead®. Apertura frontal para facilitar su uso, disponible con cerradura magnética, chaleco totalmente superpuesto y distribución equitativa del peso. || **Modelo:** Máxima | **Material:** ZeroLead® | **Equivalencia:** 0,35/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_MAXIMA.png" },
      { sku: "falda-chaleco-maxima-zerolead-050", attrs: { modelo: "maxima", material: "zerolead", equivalencia: "0-50-frontal-0-25-dorsal" }, name: "MÁXIMA – ZEROLEAD® 0,50/0,25 mm Pb", description: "Falda y chaleco Máxima en ZeroLead®. Apertura frontal para facilitar su uso, disponible con cerradura magnética, chaleco totalmente superpuesto y distribución equitativa del peso. || **Modelo:** Máxima | **Material:** ZeroLead® | **Equivalencia:** 0,50/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_MAXIMA.png" },
      { sku: "falda-chaleco-maxima-ultraligero-035", attrs: { modelo: "maxima", material: "ultraligero", equivalencia: "0-35-frontal-0-25-dorsal" }, name: "MÁXIMA – ULTRALIGERO® 0,35/0,25 mm Pb", description: "Falda y chaleco Máxima en Ultraligero®. Apertura frontal para facilitar su uso, disponible con cerradura magnética, chaleco totalmente superpuesto y distribución equitativa del peso. || **Modelo:** Máxima | **Material:** Ultraligero® | **Equivalencia:** 0,35/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_MAXIMA.png" },
      { sku: "falda-chaleco-maxima-ultraligero-050", attrs: { modelo: "maxima", material: "ultraligero", equivalencia: "0-50-frontal-0-25-dorsal" }, name: "MÁXIMA – ULTRALIGERO® 0,50/0,25 mm Pb", description: "Falda y chaleco Máxima en Ultraligero®. Apertura frontal para facilitar su uso, disponible con cerradura magnética, chaleco totalmente superpuesto y distribución equitativa del peso. || **Modelo:** Máxima | **Material:** Ultraligero® | **Equivalencia:** 0,50/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_MAXIMA.png" },
      { sku: "falda-chaleco-maxima-leadlite-035", attrs: { modelo: "maxima", material: "leadlite", equivalencia: "0-35-frontal-0-25-dorsal" }, name: "MÁXIMA – LEADLITE® 0,35/0,25 mm Pb", description: "Falda y chaleco Máxima en LeadLite®. Apertura frontal para facilitar su uso, disponible con cerradura magnética, chaleco totalmente superpuesto y distribución equitativa del peso. || **Modelo:** Máxima | **Material:** LeadLite® | **Equivalencia:** 0,35/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_MAXIMA.png" },
      { sku: "falda-chaleco-maxima-leadlite-050", attrs: { modelo: "maxima", material: "leadlite", equivalencia: "0-50-frontal-0-25-dorsal" }, name: "MÁXIMA – LEADLITE® 0,50/0,25 mm Pb", description: "Falda y chaleco Máxima en LeadLite®. Apertura frontal para facilitar su uso, disponible con cerradura magnética, chaleco totalmente superpuesto y distribución equitativa del peso. || **Modelo:** Máxima | **Material:** LeadLite® | **Equivalencia:** 0,50/0,25 mm Pb.", price: 5, image: "/images/radiologia/FALDACHALECO_MAXIMA.png" }
    ]
  },

  {
    id: "coat-apron-kiran",
    name: "DELANTAL TIPO BATA KIRAN",
    type: "Proteccion corporal",
    description: "Delantal tipo bata de protección radiológica fabricado por Kiran, que combina la protección frontal completa con la comodidad de un diseño tipo abrigo médico. Disponible en modelos básico (protección frontal, ideal para duraciones cortas) y completo (fácil de poner y quitar, con tiroides adjunta opcional). Fabricado en materiales ZeroLead®, Ultralite® y LeadLite®. Cumple normas EN 61331-1:2014, CE, FDA e ISO 13485.",
    image: "/images/radiologia/COATAPRON_CARD.png",

    attributeOrder: ["modelo", "material", "equivalencia"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "basico", label: "Básico (protección frontal)" },
          { id: "completo", label: "Completo (fácil poner/quitar)" }
        ]
      },
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "zerolead", label: "ZeroLead® (sin plomo)" },
          { id: "ultralite", label: "Ultralite® (peso optimizado)" },
          { id: "leadlite", label: "LeadLite® (más ligero con plomo)" }
        ]
      },
      {
        id: "equivalencia",
        label: "Equivalencia de Plomo",
        type: "single",
        values: [
          { id: "0-25", label: "0,25 mm Pb" },
          { id: "0-35", label: "0,35 mm Pb" },
          { id: "0-50", label: "0,50 mm Pb" }
        ]
      }
    ],

    variants: [
      { sku: "coat-apron-basico-zerolead-025", attrs: { modelo: "basico", material: "zerolead", equivalencia: "0-25" }, name: "BÁSICO – ZEROLEAD® 0,25 mm Pb", description: "Coat apron básico en ZeroLead®. Protección frontal completa, hombros acolchados para reducir tensión y distribución equitativa del peso. Ideal para procedimientos de corta duración. || **Modelo:** Básico | **Material:** ZeroLead® | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_BASICO.png" },
      { sku: "coat-apron-basico-zerolead-035", attrs: { modelo: "basico", material: "zerolead", equivalencia: "0-35" }, name: "BÁSICO – ZEROLEAD® 0,35 mm Pb", description: "Coat apron básico en ZeroLead®. Protección frontal completa, hombros acolchados para reducir tensión y distribución equitativa del peso. Ideal para procedimientos de corta duración. || **Modelo:** Básico | **Material:** ZeroLead® | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_BASICO.png" },
      { sku: "coat-apron-basico-zerolead-050", attrs: { modelo: "basico", material: "zerolead", equivalencia: "0-50" }, name: "BÁSICO – ZEROLEAD® 0,50 mm Pb", description: "Coat apron básico en ZeroLead®. Protección frontal completa, hombros acolchados para reducir tensión y distribución equitativa del peso. Ideal para procedimientos de corta duración. || **Modelo:** Básico | **Material:** ZeroLead® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_BASICO.png" },
      { sku: "coat-apron-basico-ultralite-025", attrs: { modelo: "basico", material: "ultralite", equivalencia: "0-25" }, name: "BÁSICO – ULTRALITE® 0,25 mm Pb", description: "Coat apron básico en Ultralite®. Protección frontal completa, hombros acolchados para reducir tensión y distribución equitativa del peso. Ideal para procedimientos de corta duración. || **Modelo:** Básico | **Material:** Ultralite® | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_BASICO.png" },
      { sku: "coat-apron-basico-ultralite-035", attrs: { modelo: "basico", material: "ultralite", equivalencia: "0-35" }, name: "BÁSICO – ULTRALITE® 0,35 mm Pb", description: "Coat apron básico en Ultralite®. Protección frontal completa, hombros acolchados para reducir tensión y distribución equitativa del peso. Ideal para procedimientos de corta duración. || **Modelo:** Básico | **Material:** Ultralite® | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_BASICO.png" },
      { sku: "coat-apron-basico-ultralite-050", attrs: { modelo: "basico", material: "ultralite", equivalencia: "0-50" }, name: "BÁSICO – ULTRALITE® 0,50 mm Pb", description: "Coat apron básico en Ultralite®. Protección frontal completa, hombros acolchados para reducir tensión y distribución equitativa del peso. Ideal para procedimientos de corta duración. || **Modelo:** Básico | **Material:** Ultralite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_BASICO.png" },
      { sku: "coat-apron-basico-leadlite-025", attrs: { modelo: "basico", material: "leadlite", equivalencia: "0-25" }, name: "BÁSICO – LEADLITE® 0,25 mm Pb", description: "Coat apron básico en LeadLite®. Protección frontal completa, hombros acolchados para reducir tensión y distribución equitativa del peso. Ideal para procedimientos de corta duración. || **Modelo:** Básico | **Material:** LeadLite® | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_BASICO.png" },
      { sku: "coat-apron-basico-leadlite-035", attrs: { modelo: "basico", material: "leadlite", equivalencia: "0-35" }, name: "BÁSICO – LEADLITE® 0,35 mm Pb", description: "Coat apron básico en LeadLite®. Protección frontal completa, hombros acolchados para reducir tensión y distribución equitativa del peso. Ideal para procedimientos de corta duración. || **Modelo:** Básico | **Material:** LeadLite® | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_BASICO.png" },
      { sku: "coat-apron-basico-leadlite-050", attrs: { modelo: "basico", material: "leadlite", equivalencia: "0-50" }, name: "BÁSICO – LEADLITE® 0,50 mm Pb", description: "Coat apron básico en LeadLite®. Protección frontal completa, hombros acolchados para reducir tensión y distribución equitativa del peso. Ideal para procedimientos de corta duración. || **Modelo:** Básico | **Material:** LeadLite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_BASICO.png" },
      { sku: "coat-apron-completo-zerolead-025", attrs: { modelo: "completo", material: "zerolead", equivalencia: "0-25" }, name: "COMPLETO – ZEROLEAD® 0,25 mm Pb", description: "Coat apron completo en ZeroLead®. Fácil de poner y quitar, disponible con opción de protector de tiroides adjunto, inserto elástico ancho con cierre de velcro para ajuste perfecto. || **Modelo:** Completo | **Material:** ZeroLead® | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_COMPLETO.png" },
      { sku: "coat-apron-completo-zerolead-035", attrs: { modelo: "completo", material: "zerolead", equivalencia: "0-35" }, name: "COMPLETO – ZEROLEAD® 0,35 mm Pb", description: "Coat apron completo en ZeroLead®. Fácil de poner y quitar, disponible con opción de protector de tiroides adjunto, inserto elástico ancho con cierre de velcro para ajuste perfecto. || **Modelo:** Completo | **Material:** ZeroLead® | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_COMPLETO.png" },
      { sku: "coat-apron-completo-zerolead-050", attrs: { modelo: "completo", material: "zerolead", equivalencia: "0-50" }, name: "COMPLETO – ZEROLEAD® 0,50 mm Pb", description: "Coat apron completo en ZeroLead®. Fácil de poner y quitar, disponible con opción de protector de tiroides adjunto, inserto elástico ancho con cierre de velcro para ajuste perfecto. || **Modelo:** Completo | **Material:** ZeroLead® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_COMPLETO.png" },
      { sku: "coat-apron-completo-ultralite-025", attrs: { modelo: "completo", material: "ultralite", equivalencia: "0-25" }, name: "COMPLETO – ULTRALITE® 0,25 mm Pb", description: "Coat apron completo en Ultralite®. Fácil de poner y quitar, disponible con opción de protector de tiroides adjunto, inserto elástico ancho con cierre de velcro para ajuste perfecto. || **Modelo:** Completo | **Material:** Ultralite® | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_COMPLETO.png" },
      { sku: "coat-apron-completo-ultralite-035", attrs: { modelo: "completo", material: "ultralite", equivalencia: "0-35" }, name: "COMPLETO – ULTRALITE® 0,35 mm Pb", description: "Coat apron completo en Ultralite®. Fácil de poner y quitar, disponible con opción de protector de tiroides adjunto, inserto elástico ancho con cierre de velcro para ajuste perfecto. || **Modelo:** Completo | **Material:** Ultralite® | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_COMPLETO.png" },
      { sku: "coat-apron-completo-ultralite-050", attrs: { modelo: "completo", material: "ultralite", equivalencia: "0-50" }, name: "COMPLETO – ULTRALITE® 0,50 mm Pb", description: "Coat apron completo en Ultralite®. Fácil de poner y quitar, disponible con opción de protector de tiroides adjunto, inserto elástico ancho con cierre de velcro para ajuste perfecto. || **Modelo:** Completo | **Material:** Ultralite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_COMPLETO.png" },
      { sku: "coat-apron-completo-leadlite-025", attrs: { modelo: "completo", material: "leadlite", equivalencia: "0-25" }, name: "COMPLETO – LEADLITE® 0,25 mm Pb", description: "Coat apron completo en LeadLite®. Fácil de poner y quitar, disponible con opción de protector de tiroides adjunto, inserto elástico ancho con cierre de velcro para ajuste perfecto. || **Modelo:** Completo | **Material:** LeadLite® | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_COMPLETO.png" },
      { sku: "coat-apron-completo-leadlite-035", attrs: { modelo: "completo", material: "leadlite", equivalencia: "0-35" }, name: "COMPLETO – LEADLITE® 0,35 mm Pb", description: "Coat apron completo en LeadLite®. Fácil de poner y quitar, disponible con opción de protector de tiroides adjunto, inserto elástico ancho con cierre de velcro para ajuste perfecto. || **Modelo:** Completo | **Material:** LeadLite® | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_COMPLETO.png" },
      { sku: "coat-apron-completo-leadlite-050", attrs: { modelo: "completo", material: "leadlite", equivalencia: "0-50" }, name: "COMPLETO – LEADLITE® 0,50 mm Pb", description: "Coat apron completo en LeadLite®. Fácil de poner y quitar, disponible con opción de protector de tiroides adjunto, inserto elástico ancho con cierre de velcro para ajuste perfecto. || **Modelo:** Completo | **Material:** LeadLite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/COATAPRON_COMPLETO.png" }
    ]
  },


  {
    id: "protector-tiroides-kiran",
    name: "PROTECTOR DE TIROIDES KIRAN",
    type: "Proteccion localizada",
    description: "Protector de tiroides Kiran fabricado para resguardar la sensible glándula tiroidea de la radiación dispersa durante procedimientos radiológicos. Disponible en cuatro diseños — Clásico, Elegante, Slim y Armonía — que se adaptan a distintas preferencias y necesidades clínicas. Todos los modelos cuentan con amplia área de cobertura y sistemas de ajuste cómodos. Equivalencia de plomo: 0,25 mm Pb a 1,00 mm Pb según modelo. Certificado CE.",
    image: "/images/radiologia/TIROIDESCARD.png",

    attributeOrder: ["modelo", "equivalencia"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "classic", label: "Classic" },
          { id: "elegant", label: "Elegant" },
          { id: "slimline", label: "Slimline" },
          { id: "harmony", label: "Harmony" }
        ]
      },
      {
        id: "equivalencia",
        label: "Equivalencia de Plomo",
        type: "single",
        values: [
          { id: "0-25", label: "0,25 mm Pb" },
          { id: "0-35", label: "0,35 mm Pb" },
          { id: "0-50", label: "0,50 mm Pb" },
          { id: "1-00", label: "1,00 mm Pb" }
        ]
      }
    ],

    attributeRules: {
      "classic": { equivalencia: ["0-25", "0-35", "0-50", "1-00"] },
      "elegant": { equivalencia: ["0-25", "0-35", "0-50", "1-00"] },
      "slimline": { equivalencia: ["0-25", "0-35", "0-50", "1-00"] },
      "harmony": { equivalencia: ["0-25", "0-35", "0-50", "1-00"] }
    },

    variants: [
      { sku: "tiroides-classic-025", attrs: { modelo: "classic", equivalencia: "0-25" }, name: "CLASSIC – 0,25 mm Pb", description: "Protector de tiroides Clásico, el diseño más popular. Amplia área de cobertura, talla única, de fácil colocación. || **Modelo:** Clásico | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_CLASICO.png" },
      { sku: "tiroides-classic-035", attrs: { modelo: "classic", equivalencia: "0-35" }, name: "CLASSIC – 0,35 mm Pb", description: "Protector de tiroides Clásico, el diseño más popular. Amplia área de cobertura, talla única, de fácil colocación. || **Modelo:** Clásico | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_CLASICO.png" },
      { sku: "tiroides-classic-050", attrs: { modelo: "classic", equivalencia: "0-50" }, name: "CLASSIC – 0,50 mm Pb", description: "Protector de tiroides Clásico, el diseño más popular. Amplia área de cobertura, talla única, de fácil colocación. || **Modelo:** Clásico | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_CLASICO.png" },
      { sku: "tiroides-classic-100", attrs: { modelo: "classic", equivalencia: "1-00" }, name: "CLASSIC – 1,00 mm Pb", description: "Protector de tiroides Clásico, el diseño más popular. Amplia área de cobertura, talla única, de fácil colocación. || **Modelo:** Clásico | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_CLASICO.png" },
      { sku: "tiroides-elegant-025", attrs: { modelo: "elegant", equivalencia: "0-25" }, name: "ELEGANT – 0,25 mm Pb", description: "Protector de tiroides Elegante con cierre ajustable. Se adhiere fácilmente al delantal o chaleco. Compatible con delantales de doble cara. || **Modelo:** Elegante | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_ELEGANTE.png" },
      { sku: "tiroides-elegant-035", attrs: { modelo: "elegant", equivalencia: "0-35" }, name: "ELEGANT – 0,35 mm Pb", description: "Protector de tiroides Elegante con cierre ajustable. Se adhiere fácilmente al delantal o chaleco. Compatible con delantales de doble cara. || **Modelo:** Elegante | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_ELEGANTE.png" },
      { sku: "tiroides-elegant-050", attrs: { modelo: "elegant", equivalencia: "0-50" }, name: "ELEGANT – 0,50 mm Pb", description: "Protector de tiroides Elegante con cierre ajustable. Se adhiere fácilmente al delantal o chaleco. Compatible con delantales de doble cara. || **Modelo:** Elegante | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_ELEGANTE.png" },
      { sku: "tiroides-elegante-100", attrs: { modelo: "elegant", equivalencia: "1-00" }, name: "ELEGANT – 1,00 mm Pb", description: "Protector de tiroides Elegante con cierre ajustable. Se adhiere fácilmente al delantal o chaleco. Compatible con delantales de doble cara. || **Modelo:** Elegante | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_ELEGANTE.png" },
      { sku: "tiroides-slimline-025", attrs: { modelo: "slimline", equivalencia: "0-25" }, name: "SLIMLINE – 0,25 mm Pb", description: "Protector de tiroides Slim de perfil bajo y discreto. Proporciona ajuste y protección perfectos. Se adhiere fácilmente a todos los delantales. || **Modelo:** Slim | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_SLIM.png" },
      { sku: "tiroides-slimline-035", attrs: { modelo: "slimline", equivalencia: "0-35" }, name: "SLIMLINE – 0,35 mm Pb", description: "Protector de tiroides Slim de perfil bajo y discreto. Proporciona ajuste y protección perfectos. Se adhiere fácilmente a todos los delantales. || **Modelo:** Slim | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_SLIM.png" },
      { sku: "tiroides-slimline-050", attrs: { modelo: "slimline", equivalencia: "0-50" }, name: "SLIMLINE – 0,50 mm Pb", description: "Protector de tiroides Slim de perfil bajo y discreto. Proporciona ajuste y protección perfectos. Se adhiere fácilmente a todos los delantales. || **Modelo:** Slim | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_SLIM.png" },
      { sku: "tiroides-slimline-100", attrs: { modelo: "slimline", equivalencia: "1-00" }, name: "SLIMLINE – 1,00 mm Pb", description: "Protector de tiroides Slim de perfil bajo y discreto. Proporciona ajuste y protección perfectos. Se adhiere fácilmente a todos los delantales. || **Modelo:** Slim | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_SLIM.png" },
      { sku: "tiroides-harmony-025", attrs: { modelo: "harmony", equivalencia: "0-25" }, name: "ARMONÍA – 0,25 mm Pb", description: "Protector de tiroides Armonía con diseño anatómico que se adapta perfectamente a la glándula tiroides. Amplia cobertura y ajuste natural al cuello. || **Modelo:** Armonía | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_ARMONIA.png" },
      { sku: "tiroides-harmony-035", attrs: { modelo: "harmony", equivalencia: "0-35" }, name: "ARMONÍA – 0,35 mm Pb", description: "Protector de tiroides Armonía con diseño anatómico que se adapta perfectamente a la glándula tiroides. Amplia cobertura y ajuste natural al cuello. || **Modelo:** Armonía | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_ARMONIA.png" },
      { sku: "tiroides-harmony-050", attrs: { modelo: "harmony", equivalencia: "0-50" }, name: "ARMONÍA – 0,50 mm Pb", description: "Protector de tiroides Armonía con diseño anatómico que se adapta perfectamente a la glándula tiroides. Amplia cobertura y ajuste natural al cuello. || **Modelo:** Armonía | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_ARMONIA.png" },
      { sku: "tiroides-harmony-100", attrs: { modelo: "harmony", equivalencia: "1-00" }, name: "ARMONÍA – 1,00 mm Pb", description: "Protector de tiroides Armonía con diseño anatómico que se adapta perfectamente a la glándula tiroides. Amplia cobertura y ajuste natural al cuello. || **Modelo:** Armonía | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/TIROIDES_ARMONIA.png" }
    ]
  },

  {
    id: "escudo-cabeza-kiran",
    name: "PROTECTOR DE CABEZA KIRAN",
    type: "Proteccion localizada",
    description: "Escudo de protección radiológica para cabeza y oídos fabricado por Kiran, diseñado para proteger las estructuras craneales y auditivas de la radiación dispersa durante procedimientos radiológicos. Construcción flexible y ligera que facilita su colocación y extracción. Disponible en tallas adulto y niño. Equivalencia de plomo: 0,25 mm Pb a 1,00 mm Pb. Certificado CE.",
    image: "/images/radiologia/ESCUDO_CABEZA.png",

    attributeOrder: ["talla", "equivalencia"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "adulto", label: "Adulto" },
          { id: "nino", label: "Niño" }
        ]
      },
      {
        id: "equivalencia",
        label: "Equivalencia de Plomo",
        type: "single",
        values: [
          { id: "0-25", label: "0,25 mm Pb" },
          { id: "0-35", label: "0,35 mm Pb" },
          { id: "0-50", label: "0,50 mm Pb" },
          { id: "1-00", label: "1,00 mm Pb" }
        ]
      }
    ],

    variants: [
      { sku: "escudo-cabeza-adulto-025", attrs: { talla: "adulto", equivalencia: "0-25" }, name: "ADULTO – 0,25 mm Pb", description: "Escudo de cabeza y oídos para adulto, flexible y de fácil colocación/extracción. Protección completa de cráneo y región auricular. || **Talla:** Adulto | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_CABEZA.png" },
      { sku: "escudo-cabeza-adulto-035", attrs: { talla: "adulto", equivalencia: "0-35" }, name: "ADULTO – 0,35 mm Pb", description: "Escudo de cabeza y oídos para adulto, flexible y de fácil colocación/extracción. Protección completa de cráneo y región auricular. || **Talla:** Adulto | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_CABEZA.png" },
      { sku: "escudo-cabeza-adulto-050", attrs: { talla: "adulto", equivalencia: "0-50" }, name: "ADULTO – 0,50 mm Pb", description: "Escudo de cabeza y oídos para adulto, flexible y de fácil colocación/extracción. Protección completa de cráneo y región auricular. || **Talla:** Adulto | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_CABEZA.png" },
      { sku: "escudo-cabeza-adulto-100", attrs: { talla: "adulto", equivalencia: "1-00" }, name: "ADULTO – 1,00 mm Pb", description: "Escudo de cabeza y oídos para adulto, flexible y de fácil colocación/extracción. Protección completa de cráneo y región auricular. || **Talla:** Adulto | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_CABEZA.png" },
      { sku: "escudo-cabeza-nino-025", attrs: { talla: "nino", equivalencia: "0-25" }, name: "NIÑO – 0,25 mm Pb", description: "Escudo de cabeza y oídos talla infantil, flexible y de fácil colocación/extracción. Protección completa de cráneo y región auricular para pacientes pediátricos. || **Talla:** Niño | **Equivalencia:** 0,25 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_CABEZA.png" },
      { sku: "escudo-cabeza-nino-035", attrs: { talla: "nino", equivalencia: "0-35" }, name: "NIÑO – 0,35 mm Pb", description: "Escudo de cabeza y oídos talla infantil, flexible y de fácil colocación/extracción. Protección completa de cráneo y región auricular para pacientes pediátricos. || **Talla:** Niño | **Equivalencia:** 0,35 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_CABEZA.png" },
      { sku: "escudo-cabeza-nino-050", attrs: { talla: "nino", equivalencia: "0-50" }, name: "NIÑO – 0,50 mm Pb", description: "Escudo de cabeza y oídos talla infantil, flexible y de fácil colocación/extracción. Protección completa de cráneo y región auricular para pacientes pediátricos. || **Talla:** Niño | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_CABEZA.png" },
      { sku: "escudo-cabeza-nino-100", attrs: { talla: "nino", equivalencia: "1-00" }, name: "NIÑO – 1,00 mm Pb", description: "Escudo de cabeza y oídos talla infantil, flexible y de fácil colocación/extracción. Protección completa de cráneo y región auricular para pacientes pediátricos. || **Talla:** Niño | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_CABEZA.png" }
    ]
  },

  {
    id: "escudo-ovarico-kiran",
    name: "PROTECTOR OVARICO KIRAN",
    type: "Proteccion localizada",
    description: "Escudo de protección radiológica para órganos reproductores femeninos fabricado por Kiran. Diseñado para proteger los ovarios de la radiación dispersa durante procedimientos de radiodiagnóstico. Cinturón ajustable para un buen ajuste, disponible en talla única y talla infantil. Fácil de colocar y retirar. Equivalencia de plomo: 1,00 mm Pb. Certificado CE.",
    image: "/images/radiologia/OVARICACARD.png",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "adulto", label: "Adulto (talla única)" },
          { id: "nino", label: "Infantil" }
        ]
      }
    ],

    variants: [
      {
        sku: "escudo-ovarico-adulto",
        attrs: { talla: "adulto" },
        name: "ADULTO – 1,00 mm Pb",
        description: "Escudo ovárico para adulto con cinturón ajustable. Protege eficazmente los órganos reproductores femeninos durante procedimientos de radiodiagnóstico. || **Talla:** Adulto | **Equivalencia:** 1,00 mm Pb.",
        price: 5,
        image: "/images/radiologia/ESCUDO_OVARICO.png"
      },
      {
        sku: "escudo-ovarico-nino",
        attrs: { talla: "nino" },
        name: "INFANTIL – 1,00 mm Pb",
        description: "Escudo ovárico talla infantil con cinturón ajustable. Diseñado para proteger los órganos reproductores femeninos de pacientes pediátricas durante procedimientos de radiodiagnóstico. || **Talla:** Infantil | **Equivalencia:** 1,00 mm Pb.",
        price: 5,
        image: "/images/radiologia/ESCUDO_OVARICO_KID.png"
      }
    ]
  },

  {
    id: "escudo-gonadal-kiran",
    name: "PROTECTOR GONADAL KIRAN",
    type: "Proteccion localizada",
    description: "Escudo de protección radiológica para órganos reproductores masculinos fabricado por Kiran. Diseñado para proteger las gónadas de la radiación dispersa durante procedimientos de radiodiagnóstico. Paneles de velcro ajustables para un buen ajuste, disponible en talla única y talla infantil. Fácil de colocar y retirar. Equivalencia de plomo: 0,50 mm Pb y 1,00 mm Pb. Certificado CE.",
    image: "/images/radiologia/GONADALCARD.png",

    attributeOrder: ["talla", "equivalencia"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "adulto", label: "Adulto (talla única)" },
          { id: "nino", label: "Infantil" }
        ]
      },
      {
        id: "equivalencia",
        label: "Equivalencia de Plomo",
        type: "single",
        values: [
          { id: "0-50", label: "0,50 mm Pb" },
          { id: "1-00", label: "1,00 mm Pb" }
        ]
      }
    ],

    variants: [
      { sku: "escudo-gonadal-adulto-050", attrs: { talla: "adulto", equivalencia: "0-50" }, name: "ADULTO – 0,50 mm Pb", description: "Escudo gonadal para adulto con paneles de velcro ajustables. Protege eficazmente los órganos reproductores masculinos durante radiodiagnóstico. || **Talla:** Adulto | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_GONADAL.png" },
      { sku: "escudo-gonadal-adulto-100", attrs: { talla: "adulto", equivalencia: "1-00" }, name: "ADULTO – 1,00 mm Pb", description: "Escudo gonadal para adulto con paneles de velcro ajustables. Protege eficazmente los órganos reproductores masculinos durante radiodiagnóstico. || **Talla:** Adulto | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_GONADAL.png" },
      { sku: "escudo-gonadal-nino-050", attrs: { talla: "nino", equivalencia: "0-50" }, name: "INFANTIL – 0,50 mm Pb", description: "Escudo gonadal talla infantil con paneles de velcro ajustables. Protege los órganos reproductores masculinos de pacientes pediátricos durante radiodiagnóstico. || **Talla:** Infantil | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_GONADALKID.png" },
      { sku: "escudo-gonadal-nino-100", attrs: { talla: "nino", equivalencia: "1-00" }, name: "INFANTIL – 1,00 mm Pb", description: "Escudo gonadal talla infantil con paneles de velcro ajustables. Protege los órganos reproductores masculinos de pacientes pediátricos durante radiodiagnóstico. || **Talla:** Infantil | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/ESCUDO_GONADALKID.png" }
    ]
  },

  {
    id: "delantal-paciente-kiran",
    name: "DELANTAL PARA PACIENTE KIRAN",
    type: "Proteccion corporal",
    description: "Delantal de protección radiológica para pacientes fabricado por Kiran, disponible en una amplia gama de colores y tamaños. Diseñado para uso universal como escudo gonadal y ovárico, proporciona protección completa de la parte inferior del cuerpo durante procedimientos de radiodiagnóstico. Correa trasera ajustable para ajuste perfecto, disponible con y sin cinturón. La versión pediátrica presenta estampados coloridos y diseño ergonómico especialmente concebido para niños. Fabricado en materiales ZeroLead®, Ultralite® y LeadLite®. Equivalencia de plomo: 0,50 mm a 1,00 mm Pb. Certificado CE.",
    image: "/images/radiologia/DELANTAL_CARD.png",

    attributeOrder: ["talla", "material", "equivalencia"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "30x30", label: "30 × 30 cm" },
          { id: "40x40", label: "40 × 40 cm" },
          { id: "50x50", label: "50 × 50 cm" },
          { id: "pediatrico", label: "Pediátrico" }
        ]
      },
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "zerolead", label: "ZeroLead® (sin plomo)" },
          { id: "ultralite", label: "Ultralite® (peso optimizado)" },
          { id: "leadlite", label: "LeadLite® (más ligero con plomo)" }
        ]
      },
      {
        id: "equivalencia",
        label: "Equivalencia de Plomo",
        type: "single",
        values: [
          { id: "0-50", label: "0,50 mm Pb" },
          { id: "1-00", label: "1,00 mm Pb" }
        ]
      }
    ],

    attributeRules: {
      "pediatrico": { equivalencia: ["0-50"] },
      "30x30": { equivalencia: ["0-50", "1-00"] },
      "40x40": { equivalencia: ["0-50", "1-00"] },
      "50x50": { equivalencia: ["0-50", "1-00"] }
    },

    variants: [
      // ─── 30 × 30 ──────────────────────────────────────────────────────────────
      { sku: "delantal-paciente-30x30-zerolead-050", attrs: { talla: "30x30", material: "zerolead", equivalencia: "0-50" }, name: "30×30 – ZEROLEAD® 0,50 mm Pb", description: "Delantal para paciente 30×30 cm en ZeroLead®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 30×30 cm | **Material:** ZeroLead® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL30X30.png" },
      { sku: "delantal-paciente-30x30-zerolead-100", attrs: { talla: "30x30", material: "zerolead", equivalencia: "1-00" }, name: "30×30 – ZEROLEAD® 1,00 mm Pb", description: "Delantal para paciente 30×30 cm en ZeroLead®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 30×30 cm | **Material:** ZeroLead® | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL30X30.png" },
      { sku: "delantal-paciente-30x30-ultralite-050", attrs: { talla: "30x30", material: "ultralite", equivalencia: "0-50" }, name: "30×30 – ULTRALITE® 0,50 mm Pb", description: "Delantal para paciente 30×30 cm en Ultralite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 30×30 cm | **Material:** Ultralite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL30X30.png" },
      { sku: "delantal-paciente-30x30-ultralite-100", attrs: { talla: "30x30", material: "ultralite", equivalencia: "1-00" }, name: "30×30 – ULTRALITE® 1,00 mm Pb", description: "Delantal para paciente 30×30 cm en Ultralite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 30×30 cm | **Material:** Ultralite® | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL30X30.png" },
      { sku: "delantal-paciente-30x30-leadlite-050", attrs: { talla: "30x30", material: "leadlite", equivalencia: "0-50" }, name: "30×30 – LEADLITE® 0,50 mm Pb", description: "Delantal para paciente 30×30 cm en LeadLite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 30×30 cm | **Material:** LeadLite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL30X30.png" },
      { sku: "delantal-paciente-30x30-leadlite-100", attrs: { talla: "30x30", material: "leadlite", equivalencia: "1-00" }, name: "30×30 – LEADLITE® 1,00 mm Pb", description: "Delantal para paciente 30×30 cm en LeadLite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 30×30 cm | **Material:** LeadLite® | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL30X30.png" },

      // ─── 40 × 40 ──────────────────────────────────────────────────────────────
      { sku: "delantal-paciente-40x40-zerolead-050", attrs: { talla: "40x40", material: "zerolead", equivalencia: "0-50" }, name: "40×40 – ZEROLEAD® 0,50 mm Pb", description: "Delantal para paciente 40×40 cm en ZeroLead®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 40×40 cm | **Material:** ZeroLead® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL40X40.png" },
      { sku: "delantal-paciente-40x40-zerolead-100", attrs: { talla: "40x40", material: "zerolead", equivalencia: "1-00" }, name: "40×40 – ZEROLEAD® 1,00 mm Pb", description: "Delantal para paciente 40×40 cm en ZeroLead®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 40×40 cm | **Material:** ZeroLead® | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL40X40.png" },
      { sku: "delantal-paciente-40x40-ultralite-050", attrs: { talla: "40x40", material: "ultralite", equivalencia: "0-50" }, name: "40×40 – ULTRALITE® 0,50 mm Pb", description: "Delantal para paciente 40×40 cm en Ultralite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 40×40 cm | **Material:** Ultralite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL40X40.png" },
      { sku: "delantal-paciente-40x40-ultralite-100", attrs: { talla: "40x40", material: "ultralite", equivalencia: "1-00" }, name: "40×40 – ULTRALITE® 1,00 mm Pb", description: "Delantal para paciente 40×40 cm en Ultralite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 40×40 cm | **Material:** Ultralite® | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL40X40.png" },
      { sku: "delantal-paciente-40x40-leadlite-050", attrs: { talla: "40x40", material: "leadlite", equivalencia: "0-50" }, name: "40×40 – LEADLITE® 0,50 mm Pb", description: "Delantal para paciente 40×40 cm en LeadLite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 40×40 cm | **Material:** LeadLite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL40X40.png" },
      { sku: "delantal-paciente-40x40-leadlite-100", attrs: { talla: "40x40", material: "leadlite", equivalencia: "1-00" }, name: "40×40 – LEADLITE® 1,00 mm Pb", description: "Delantal para paciente 40×40 cm en LeadLite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 40×40 cm | **Material:** LeadLite® | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL40X40.png" },

      // ─── 50 × 50 ──────────────────────────────────────────────────────────────
      { sku: "delantal-paciente-50x50-zerolead-050", attrs: { talla: "50x50", material: "zerolead", equivalencia: "0-50" }, name: "50×50 – ZEROLEAD® 0,50 mm Pb", description: "Delantal para paciente 50×50 cm en ZeroLead®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 50×50 cm | **Material:** ZeroLead® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL50X50.png" },
      { sku: "delantal-paciente-50x50-zerolead-100", attrs: { talla: "50x50", material: "zerolead", equivalencia: "1-00" }, name: "50×50 – ZEROLEAD® 1,00 mm Pb", description: "Delantal para paciente 50×50 cm en ZeroLead®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 50×50 cm | **Material:** ZeroLead® | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL50X50.png" },
      { sku: "delantal-paciente-50x50-ultralite-050", attrs: { talla: "50x50", material: "ultralite", equivalencia: "0-50" }, name: "50×50 – ULTRALITE® 0,50 mm Pb", description: "Delantal para paciente 50×50 cm en Ultralite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 50×50 cm | **Material:** Ultralite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL50X50.png" },
      { sku: "delantal-paciente-50x50-ultralite-100", attrs: { talla: "50x50", material: "ultralite", equivalencia: "1-00" }, name: "50×50 – ULTRALITE® 1,00 mm Pb", description: "Delantal para paciente 50×50 cm en Ultralite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 50×50 cm | **Material:** Ultralite® | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL50X50.png" },
      { sku: "delantal-paciente-50x50-leadlite-050", attrs: { talla: "50x50", material: "leadlite", equivalencia: "0-50" }, name: "50×50 – LEADLITE® 0,50 mm Pb", description: "Delantal para paciente 50×50 cm en LeadLite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 50×50 cm | **Material:** LeadLite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL50X50.png" },
      { sku: "delantal-paciente-50x50-leadlite-100", attrs: { talla: "50x50", material: "leadlite", equivalencia: "1-00" }, name: "50×50 – LEADLITE® 1,00 mm Pb", description: "Delantal para paciente 50×50 cm en LeadLite®. Protección de la parte inferior del cuerpo, correa ajustable, disponible con y sin cinturón. || **Talla:** 50×50 cm | **Material:** LeadLite® | **Equivalencia:** 1,00 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL50X50.png" },

      // ─── PEDIÁTRICO ───────────────────────────────────────────────────────────
      { sku: "delantal-paciente-pediatrico-zerolead-050", attrs: { talla: "pediatrico", material: "zerolead", equivalencia: "0-50" }, name: "PEDIÁTRICO – ZEROLEAD® 0,50 mm Pb", description: "Delantal pediátrico en ZeroLead®, con estampados coloridos y diseño ergonómico para niños. Ligero y cómodo para procedimientos de radiodiagnóstico infantil. || **Talla:** Pediátrico | **Material:** ZeroLead® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL_NINO.png" },
      { sku: "delantal-paciente-pediatrico-ultralite-050", attrs: { talla: "pediatrico", material: "ultralite", equivalencia: "0-50" }, name: "PEDIÁTRICO – ULTRALITE® 0,50 mm Pb", description: "Delantal pediátrico en Ultralite®, con estampados coloridos y diseño ergonómico para niños. Ligero y cómodo para procedimientos de radiodiagnóstico infantil. || **Talla:** Pediátrico | **Material:** Ultralite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL_NINO.png" },
      { sku: "delantal-paciente-pediatrico-leadlite-050", attrs: { talla: "pediatrico", material: "leadlite", equivalencia: "0-50" }, name: "PEDIÁTRICO – LEADLITE® 0,50 mm Pb", description: "Delantal pediátrico en LeadLite®, con estampados coloridos y diseño ergonómico para niños. Ligero y cómodo para procedimientos de radiodiagnóstico infantil. || **Talla:** Pediátrico | **Material:** LeadLite® | **Equivalencia:** 0,50 mm Pb.", price: 5, image: "/images/radiologia/DELANTAL_NINO.png" }
    ]
  },



  {
    id: "guantes-proteccion-radiologica-kiran",
    name: "GUANTES DE PROTECCIÓN KIRAN",
    type: "Accesorios de proteccion",
    description: "Guantes de protección radiológica Kiran, imprescindibles cuando las manos se encuentran en el campo de haz activo durante procedimientos de radioscopia intervencionista. Fabricados con material suave y flexible, no estériles, cómodos y reutilizables. Disponibles en modelo Dúo (doble capa desmontable y limpiable) y Mittens (manopla protectora con acceso para manos desnudas). Equivalencia de plomo: 0,25 mm a 0,50 mm Pb.",
    image: "/images/radiologia/GUANTES_CARD.png",

    attributeOrder: ["modelo", "equivalencia"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "duo", label: "Dúo (doble capa desmontable)" },
          { id: "mittens", label: "Mittens (manopla con acceso directo)" }
        ]
      },
      {
        id: "equivalencia",
        label: "Equivalencia de Plomo",
        type: "single",
        values: [
          { id: "0-25", label: "0,25 mm Pb" },
          { id: "0-35", label: "0,35 mm Pb" },
          { id: "0-50", label: "0,50 mm Pb" }
        ]
      }
    ],

    attributeRules: {
      "duo": { equivalencia: ["0-50"] },
      "mittens": { equivalencia: ["0-25", "0-35", "0-50"] }
    },

    variants: [
      {
        sku: "guantes-duo-050",
        attrs: { modelo: "duo", equivalencia: "0-50" },
        name: "DÚO – 0,50 mm Pb",
        description: "Guantes Dúo de doble capa con cubierta externa sin costuras y forro interno desmontable y limpiable. Fabricados con material suave y flexible para uso en radioscopia intervencionista. || **Modelo:** Dúo | **Equivalencia:** 0,50 mm Pb | **Talla disponible:** L | **Longitud:** 38 cm.",
        price: 5,
        image: "/images/radiologia/GUANTES_DUO.png"
      },
      {
        sku: "guantes-mittens-025",
        attrs: { modelo: "mittens", equivalencia: "0-25" },
        name: "MITTENS – 0,25 mm Pb",
        description: "Guantes Mittens tipo manopla que permiten al usuario usar sus manos desnudas directamente en el campo del haz gracias al diseño de protección con apertura. Disponibles en materiales Ultralite®, LeadLite® y ZeroLead®. || **Modelo:** Mittens | **Equivalencia:** 0,25 mm Pb | **Talla disponible:** L | **Longitud:** 38 cm.",
        price: 5,
        image: "/images/radiologia/GUANTES_MITTENS.png"
      },
      {
        sku: "guantes-mittens-035",
        attrs: { modelo: "mittens", equivalencia: "0-35" },
        name: "MITTENS – 0,35 mm Pb",
        description: "Guantes Mittens tipo manopla que permiten al usuario usar sus manos desnudas directamente en el campo del haz gracias al diseño de protección con apertura. Disponibles en materiales Ultralite®, LeadLite® y ZeroLead®. || **Modelo:** Mittens | **Equivalencia:** 0,35 mm Pb | **Talla disponible:** L | **Longitud:** 38 cm.",
        price: 5,
        image: "/images/radiologia/GUANTES_MITTENS.png"
      },
      {
        sku: "guantes-mittens-050",
        attrs: { modelo: "mittens", equivalencia: "0-50" },
        name: "MITTENS – 0,50 mm Pb",
        description: "Guantes Mittens tipo manopla que permiten al usuario usar sus manos desnudas directamente en el campo del haz gracias al diseño de protección con apertura. Disponibles en materiales Ultralite®, LeadLite® y ZeroLead®. || **Modelo:** Mittens | **Equivalencia:** 0,50 mm Pb | **Talla disponible:** L | **Longitud:** 38 cm.",
        price: 5,
        image: "/images/radiologia/GUANTES_MITTENS.png"
      }
    ]
  },


  {
    id: "gafas-proteccion-radiologica-kiran",
    name: "GAFAS DE PROTECCIÓN KIRAN",
    type: "Accesorios de proteccion",
    description: "Gama de gafas de protección radiológica Kiran, especialmente diseñadas para proteger el sensible ojo humano de los efectos nocivos de la radiación dispersa durante procedimientos radiológicos. Fabricadas con vidrio de plomo europeo que absorbe el 99% de la radiación, ligeras y cómodas para uso prolongado. Disponibles en 5 modelos que se adaptan a distintas necesidades y preferencias. Equivalencia de plomo mínima: 0,75 mm Pb a 150 kVp según norma EN 61331-1:2014 y EN 61331-3:2014. Certificado CE.",
    image: "/images/radiologia/GAFAS_CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "front", label: "Front" },
          { id: "front-side", label: "Front Side" },
          { id: "fit-over", label: "Fit Over" },
          { id: "max-10", label: "Max 10" },
          { id: "aviators", label: "Aviators" },
          { id: "max-30", label: "Max 30" }
        ]
      }
    ],

    variants: [
      {
        sku: "gafas-front",
        attrs: { modelo: "front" },
        name: "FRENTE – PROTECCIÓN FRONTAL",
        description: "Gafas de protección radiológica con protección frontal perfecta. Diseño clásico de montura tipo gafas ópticas con vidrio de plomo europeo. Ideales para procedimientos con exposición frontal. || **Protección:** Frontal | **Equiv. plomo:** Mín. 0,75 mm Pb @150kVp.",
        price: 5,
        image: "/images/radiologia/front.png"
      },
      {
        sku: "gafas-front-side",
        attrs: { modelo: "front-side" },
        name: "FRENTE Y LATERAL – PROTECCIÓN TOTAL",
        description: "Gafas de protección radiológica con protección frontal y lateral completa. Diseño de montura envolvente que protege el ojo de radiación dispersa en todos los ángulos. Ideales para procedimientos con alta exposición lateral. || **Protección:** Frontal y lateral | **Equiv. plomo:** Mín. 0,75 mm Pb @150kVp.",
        price: 5,
        image: "/images/radiologia/front-side.png"
      },
      {
        sku: "gafas-fit-over",
        attrs: { modelo: "fit-over" },
        name: "AJUSTAR SOBRE – SOBRE GAFAS EXISTENTES",
        description: "Gafas de protección radiológica diseñadas para ajustarse perfectamente sobre las gafas graduadas existentes del usuario. Permiten a los profesionales que usan corrección óptica beneficiarse de protección radiológica sin necesidad de lentes especiales. || **Protección:** Frontal y lateral | **Equiv. plomo:** Mín. 0,75 mm Pb @150kVp.",
        price: 5,
        image: "/images/radiologia/fit-over.png"
      },
      {
        sku: "gafas-max-10",
        attrs: { modelo: "max-10" },
        name: "MÁXIMO 10 – ACOLCHADO SIENES Y NARIZ",
        description: "Gafas de protección radiológica Máximo 10 con acolchado en sienes y puente nasal para máxima comodidad en procedimientos prolongados. Protección frontal y lateral con ajuste ergonómico. || **Protección:** Frontal y lateral | **Equiv. plomo:** Mín. 0,75 mm Pb @150kVp.",
        price: 5,
        image: "/images/radiologia/max-10.png"
      },
      {
        sku: "gafas-aviators",
        attrs: { modelo: "aviators" },
        name: "AVIADORES – ESTILO ENVOLVENTE",
        description: "Gafas de protección radiológica estilo aviador con diseño envolvente que combina protección frontal y lateral con un acabado estético elegante. Modelo unisex adecuado para distintas aplicaciones radiológicas. || **Protección:** Frontal y lateral | **Equiv. plomo:** Mín. 0,75 mm Pb @150kVp.",
        price: 5,
        image: "/images/radiologia/aviators.png"
      },
      {
        sku: "gafas-max-30",
        attrs: { modelo: "max-30" },
        name: "MÁXIMO 30 – UNISEX UNIVERSAL",
        description: "Gafas de protección radiológica Máximo 30, modelo unisex de diseño deportivo que se adapta a todos los rostros y formas. Máxima protección frontal con cobertura envolvente y ajuste universal. || **Protección:** Frontal | **Equiv. plomo:** Mín. 0,75 mm Pb @150kVp.",
        price: 5,
        image: "/images/radiologia/max-30.png"
      }
    ]
  },

];

