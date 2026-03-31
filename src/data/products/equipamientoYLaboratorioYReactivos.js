// src/data/products/equipamientoYLaboratorioYReactivos.js

export const equipamientoYLaboratorioYReactivosProducts = [



  {
    id: "aceite-de-inmersion-para-microscopia",
    name: "ACEITE DE INMERSIÓN PARA MICROSCOPÍA",
    type: "Reactivos",
    description: "Aceite de inmersión para microscopía de alta pureza, diseñado para optimizar la resolución óptica en objetivos de inmersión. Su formulación garantiza un índice de refracción estable (n=1.515), baja fluorescencia y alta transparencia óptica, eliminando la interfase de aire entre el objetivo y la laminilla para obtener imágenes nítidas y con máximo detalle. Compatible con microscopios de campo claro, fluorescencia y contraste de fases. Conservar el envase bien cerrado en un lugar fresco y ventilado, a una temperatura entre 18 °C y 32 °C.",
    image: "/images/laboratorio/REACTIVOS/INMERSIONCARD.png",

    attributeOrder: ["volumen"],

    attributes: [
      {
        id: "volumen",
        label: "Volumen",
        type: "single",
        values: [
          { id: "30-ml", label: "30 ml" },
          { id: "100-ml", label: "100 ml" },
          { id: "500-ml", label: "500 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "aceite-inmersion-30ml",
        attrs: { volumen: "30-ml" },
        name: "30 ML",
        description: "Aceite de inmersión de alta pureza para microscopía con índice de refracción estable (n=1.515), baja fluorescencia y alta transparencia óptica. Compatible con microscopios de campo claro, fluorescencia y contraste de fases. Conservar el envase bien cerrado en un lugar fresco y ventilado, a una temperatura entre 18 °C y 32 °C. || **Volumen:** 30 ml.",
        price: 65,
        image: "/images/laboratorio/REACTIVOS/INMERSION30.png"
      },
      {
        sku: "aceite-inmersion-100ml",
        attrs: { volumen: "100-ml" },
        name: "100 ML",
        description: "Aceite de inmersión de alta pureza para microscopía con índice de refracción estable (n=1.515), baja fluorescencia y alta transparencia óptica. Compatible con microscopios de campo claro, fluorescencia y contraste de fases. Conservar el envase bien cerrado en un lugar fresco y ventilado, a una temperatura entre 18 °C y 32 °C. || **Volumen:** 100 ml.",
        price: 80,
        image: "/images/laboratorio/REACTIVOS/INMERSION100.png"
      },
      {
        sku: "aceite-inmersion-500ml",
        attrs: { volumen: "500-ml" },
        name: "500 ML",
        description: "Aceite de inmersión de alta pureza para microscopía con índice de refracción estable (n=1.515), baja fluorescencia y alta transparencia óptica. Compatible con microscopios de campo claro, fluorescencia y contraste de fases. Conservar el envase bien cerrado en un lugar fresco y ventilado, a una temperatura entre 18 °C y 32 °C. || **Volumen:** 500 ml.",
        price: 240,
        image: "/images/laboratorio/REACTIVOS/INMERSION500.png"
      }
    ]
  },
  {
    id: "acido-acetico-glacial",
    name: "ÁCIDO ACÉTICO GLACIAL",
    type: "Reactivos",
    description: "Ácido acético glacial de alta pureza para uso en laboratorio, ampliamente utilizado como reactivo químico, disolvente y en síntesis orgánica. Apto para aplicaciones en laboratorios clínicos, industriales y de investigación.",
    image: "/images/laboratorio/REACTIVOS/ACETICOCARD.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "1-lt", label: "1 lt" },
          { id: "4-lt", label: "4 lt" },
          { id: "30-lt", label: "30 lt" }
        ]
      }
    ],

    variants: [
      {
        sku: "acido-acetico-glacial-1lt",
        attrs: { presentacion: "1-lt" },
        name: "1 LT",
        description: "Ácido acético glacial de alta pureza para uso como reactivo químico, disolvente y síntesis orgánica en laboratorio. || **Presentación:** 1 lt.",
        price: 50,
        image: "/images/laboratorio/REACTIVOS/ACETICO1.png"
      },
      {
        sku: "acido-acetico-glacial-4lt",
        attrs: { presentacion: "4-lt" },
        name: "4 LT",
        description: "Ácido acético glacial de alta pureza para uso como reactivo químico, disolvente y síntesis orgánica en laboratorio. || **Presentación:** 4 lt.",
        price: 100,
        image: "/images/laboratorio/REACTIVOS/ACETICO4.png"
      },
      {
        sku: "acido-acetico-glacial-30lt",
        attrs: { presentacion: "30-lt" },
        name: "30 LT",
        description: "Ácido acético glacial de alta pureza para uso como reactivo químico, disolvente y síntesis orgánica en laboratorio. || **Presentación:** 30 lt.",
        price: 650,
        image: "/images/laboratorio/REACTIVOS/ACETICO30.png"
      }
    ]
  },
  {
    id: "acido-borico",
    name: "ÁCIDO BÓRICO",
    type: "Reactivos",
    description: "Ácido bórico de alta pureza, utilizado como reactivo analítico en volumetrías de nitrógeno por el método Kjeldahl, preparación de soluciones tampón de pH ácido y como agente conservante en muestras biológicas. Sus propiedades antisépticas y fungistáticas lo hacen también útil en aplicaciones farmacéuticas y microbiológicas. Requiere almacenamiento en lugar fresco, seco y bien ventilado, alejado de bases fuertes. Ideal para laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/REACTIVOS/BORICOCARD.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "250-g", label: "250 g" },
          { id: "500-g", label: "500 g" },
          { id: "1-kg", label: "1 kg" }
        ]
      }
    ],

    variants: [
      {
        sku: "acido-borico-250g",
        attrs: { presentacion: "250-g" },
        name: "250 G",
        description: "Ácido bórico de alta pureza para volumetrías de nitrógeno, soluciones tampón y conservación de muestras biológicas en laboratorio. || **Presentación:** 250 g.",
        price: 1,
        image: "/images/laboratorio/REACTIVOS/BORICO250.png"
      },
      {
        sku: "acido-borico-500g",
        attrs: { presentacion: "500-g" },
        name: "500 G",
        description: "Ácido bórico de alta pureza para volumetrías de nitrógeno, soluciones tampón y conservación de muestras biológicas en laboratorio. || **Presentación:** 500 g.",
        price: 1,
        image: "/images/laboratorio/REACTIVOS/BORICO500.png"
      },
      {
        sku: "acido-borico-1kg",
        attrs: { presentacion: "1-kg" },
        name: "1 KG",
        description: "Ácido bórico de alta pureza para volumetrías de nitrógeno, soluciones tampón y conservación de muestras biológicas en laboratorio. || **Presentación:** 1 kg.",
        price: 1,
        image: "/images/laboratorio/REACTIVOS/BORICO1KG.png"
      }
    ]
  },

  {
    id: "acido-fosforico-85",
    name: "ÁCIDO FOSFÓRICO AL 85%",
    type: "Reactivos",
    description: "Ácido fosfórico al 85% de concentración para uso en laboratorio, ampliamente utilizado como reactivo analítico en la determinación colorimétrica de fosfatos, preparación de soluciones tampón de pH controlado y como agente acidulante en síntesis química. Su carácter triprotónico permite trabajar en un amplio rango de pH, siendo esencial en técnicas de espectrofotometría, cromatografía y análisis de aguas. Por su naturaleza corrosiva, requiere manipulación con equipos de protección personal adecuados y almacenamiento en recipiente hermético alejado de bases. Ideal para laboratorios clínicos, académicos e industriales. || **Presentación:** 1 lt.",
    price: 30,
    image: "/images/laboratorio/REACTIVOS/ACIDO_FOSFORICO.png"
  },

  {
    id: "agar-bacteriologico-en-polvo-500gr",
    name: "AGAR BACTERIOLÓGICO EN POLVO 500 GR",
    type: "Reactivos",
    description: "Agar bacteriológico en polvo de alta pureza en presentación de 500 g, utilizado como agente solidificante en la preparación de medios de cultivo para el crecimiento y aislamiento de microorganismos. Obtenido a partir de algas rojas, es químicamente inerte y no es metabolizado por la mayoría de las bacterias, lo que garantiza la estabilidad del medio. Su punto de gelificación controlado permite trabajar con una amplia variedad de medios selectivos, diferenciales y enriquecidos. Esencial en microbiología clínica, control de calidad alimentario y laboratorios de investigación.",
    price: 1.2,
    image: "/images/laboratorio/REACTIVOS/AGAR.png"
  },
  {
    id: "agua-desionizada-4lt",
    name: "AGUA DESIONIZADA 4 LT",
    type: "Reactivos",
    description: "Agua desionizada en presentación de 4 litros, obtenida mediante proceso de intercambio iónico que elimina prácticamente la totalidad de sales minerales, iones y contaminantes disueltos, garantizando una conductividad eléctrica mínima. A diferencia del agua destilada, el proceso de desionización preserva las propiedades físicas del agua eliminando selectivamente los iones cargados, siendo ideal para preparación de soluciones de alta pureza, diluciones críticas, calibración de equipos, enjuague de material analítico y aplicaciones donde la presencia de iones podría interferir con los resultados. Ideal para laboratorios clínicos, analíticos, académicos e industriales.",
    price: 22.8,
    image: "/images/laboratorio/REACTIVOS/DESIONIZADA_4LT.png"
  },
  {
    id: "agua-destilada",
    name: "AGUA DESTILADA",
    type: "Reactivos",
    description: "Agua destilada de alta pureza obtenida por proceso de destilación, libre de minerales, impurezas y microorganismos. Ideal para uso en laboratorios clínicos, académicos e industriales donde se requiere agua de calidad controlada para preparación de soluciones, diluciones y limpieza de material.",
    image: "/images/laboratorio/REACTIVOS/DESTILADACARD.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "1-lt", label: "1 lt" },
          { id: "4-lt", label: "4 lt" },
          { id: "20-lt", label: "20 lt" }
        ]
      }
    ],

    variants: [
      {
        sku: "agua-destilada-1lt",
        attrs: { capacidad: "1-lt" },
        name: "1 LT",
        description: "Agua destilada de alta pureza libre de minerales e impurezas, ideal para preparación de soluciones y uso en laboratorio. || **Capacidad:** 1 lt.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/DESTILADA1LT.png"
      },
      {
        sku: "agua-destilada-4lt",
        attrs: { capacidad: "4-lt" },
        name: "4 LT",
        description: "Agua destilada de alta pureza libre de minerales e impurezas, ideal para preparación de soluciones y uso en laboratorio. || **Capacidad:** 4 lt.",
        price: 15,
        image: "/images/laboratorio/REACTIVOS/DESTILADA_4LT.png"
      },
      {
        sku: "agua-destilada-20lt",
        attrs: { capacidad: "20-lt" },
        name: "20 LT",
        description: "Agua destilada de alta pureza libre de minerales e impurezas, ideal para preparación de soluciones y uso en laboratorio. || **Capacidad:** 20 lt.",
        price: 35,
        image: "/images/laboratorio/REACTIVOS/DESTILADA_20LT.png"
      }
    ]
  },

  {
    id: "alcohol-laboratorio",
    name: "ALCOHOLES Y ANTISÉPTICOS",
    type: "Reactivos",
    description: "Línea completa de alcoholes para uso en laboratorio, disponibles en distintos tipos y concentraciones según la aplicación requerida. Incluye alcohol yodado, en gel, puro, medicinal e isopropílico, ideales para desinfección, antisepsia, limpieza de material y aplicaciones técnicas en laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/REACTIVOS/ALCOHOLESCARD.png",

    attributeOrder: ["tipo", "capacidad"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "yodado", label: "Alcohol Yodado" },
          { id: "gel-70", label: "Alcohol en Gel 70°" },
          { id: "puro-96", label: "Alcohol Puro 96°" },
          { id: "medicinal-70", label: "Alcohol Medicinal 70°" },
          { id: "isopropilico", label: "Alcohol Isopropílico" }
        ]
      },
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "30-ml", label: "30 ml" },
          { id: "60-ml", label: "60 ml" },
          { id: "120-ml", label: "120 ml" },
          { id: "150-ml", label: "150 ml" },
          { id: "250-ml", label: "250 ml" },
          { id: "360-ml", label: "360 ml" },
          { id: "500-ml", label: "500 ml" },
          { id: "650-ml", label: "650 ml" },
          { id: "1-lt", label: "1 lt" },
          { id: "3800-ml", label: "3800 ml" },
          { id: "4-lt", label: "4 lt" },
          { id: "20-lt", label: "20 lt" }
        ]
      }
    ],

    attributeRules: {
      "yodado": { capacidad: ["30-ml", "60-ml", "120-ml", "500-ml", "1-lt"] },
      "gel-70": { capacidad: ["150-ml", "360-ml", "500-ml", "1-lt", "4-lt"] },
      "puro-96": { capacidad: ["120-ml", "250-ml", "500-ml", "1-lt", "4-lt", "20-lt"] },
      "medicinal-70": { capacidad: ["120-ml", "250-ml", "500-ml", "1-lt", "4-lt", "20-lt"] },
      "isopropilico": { capacidad: ["650-ml", "3800-ml"] }
    },

    variants: [

      // ─── ALCOHOL YODADO ───────────────────────────────────────
      { sku: "alcohol-yodado-30ml", attrs: { tipo: "yodado", capacidad: "30-ml" }, name: "YODADO 30 ML", description: "Alcohol yodado para antisepsia y desinfección de heridas y superficies en laboratorio y uso clínico. || **Tipo:** Yodado | **Capacidad:** 30 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_YOD_30.png" },
      { sku: "alcohol-yodado-60ml", attrs: { tipo: "yodado", capacidad: "60-ml" }, name: "YODADO 60 ML", description: "Alcohol yodado para antisepsia y desinfección de heridas y superficies en laboratorio y uso clínico. || **Tipo:** Yodado | **Capacidad:** 60 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_YOD_60.png" },
      { sku: "alcohol-yodado-120ml", attrs: { tipo: "yodado", capacidad: "120-ml" }, name: "YODADO 120 ML", description: "Alcohol yodado para antisepsia y desinfección de heridas y superficies en laboratorio y uso clínico. || **Tipo:** Yodado | **Capacidad:** 120 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_YOD_120.png" },
      { sku: "alcohol-yodado-500ml", attrs: { tipo: "yodado", capacidad: "500-ml" }, name: "YODADO 500 ML", description: "Alcohol yodado para antisepsia y desinfección de heridas y superficies en laboratorio y uso clínico. || **Tipo:** Yodado | **Capacidad:** 500 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_YOD_500.png" },
      { sku: "alcohol-yodado-1lt", attrs: { tipo: "yodado", capacidad: "1-lt" }, name: "YODADO 1 LT", description: "Alcohol yodado para antisepsia y desinfección de heridas y superficies en laboratorio y uso clínico. || **Tipo:** Yodado | **Capacidad:** 1 lt.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_YOD_1000.png" },

      // ─── ALCOHOL EN GEL 70° ───────────────────────────────────
      { sku: "alcohol-gel70-150ml", attrs: { tipo: "gel-70", capacidad: "150-ml" }, name: "GEL 70° 150 ML", description: "Alcohol en gel al 70° para desinfección de manos y superficies, con fórmula de acción rápida y secado sin residuos. || **Tipo:** Gel 70° | **Capacidad:** 150 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_GEL_150.png" },
      { sku: "alcohol-gel70-360ml", attrs: { tipo: "gel-70", capacidad: "360-ml" }, name: "GEL 70° 360 ML", description: "Alcohol en gel al 70° para desinfección de manos y superficies, con fórmula de acción rápida y secado sin residuos. || **Tipo:** Gel 70° | **Capacidad:** 360 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_GEL_360.png" },
      { sku: "alcohol-gel70-500ml", attrs: { tipo: "gel-70", capacidad: "500-ml" }, name: "GEL 70° 500 ML", description: "Alcohol en gel al 70° para desinfección de manos y superficies, con fórmula de acción rápida y secado sin residuos. || **Tipo:** Gel 70° | **Capacidad:** 500 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_GEL_500.png" },
      { sku: "alcohol-gel70-1lt", attrs: { tipo: "gel-70", capacidad: "1-lt" }, name: "GEL 70° 1 LT", description: "Alcohol en gel al 70° para desinfección de manos y superficies, con fórmula de acción rápida y secado sin residuos. || **Tipo:** Gel 70° | **Capacidad:** 1 lt.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_GEL_1000.png" },
      { sku: "alcohol-gel70-4lt", attrs: { tipo: "gel-70", capacidad: "4-lt" }, name: "GEL 70° 4 LT", description: "Alcohol en gel al 70° para desinfección de manos y superficies, con fórmula de acción rápida y secado sin residuos. || **Tipo:** Gel 70° | **Capacidad:** 4 lt.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_GEL_4000.png" },

      // ─── ALCOHOL PURO 96° ─────────────────────────────────────
      { sku: "alcohol-puro96-120ml", attrs: { tipo: "puro-96", capacidad: "120-ml" }, name: "PURO 96° 120 ML", description: "Alcohol puro al 96° de alta concentración para uso técnico, limpieza de instrumental y preparación de soluciones en laboratorio. || **Tipo:** Puro 96° | **Capacidad:** 120 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_96_120.png" },
      { sku: "alcohol-puro96-250ml", attrs: { tipo: "puro-96", capacidad: "250-ml" }, name: "PURO 96° 250 ML", description: "Alcohol puro al 96° de alta concentración para uso técnico, limpieza de instrumental y preparación de soluciones en laboratorio. || **Tipo:** Puro 96° | **Capacidad:** 250 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_96_250.png" },
      { sku: "alcohol-puro96-500ml", attrs: { tipo: "puro-96", capacidad: "500-ml" }, name: "PURO 96° 500 ML", description: "Alcohol puro al 96° de alta concentración para uso técnico, limpieza de instrumental y preparación de soluciones en laboratorio. || **Tipo:** Puro 96° | **Capacidad:** 500 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_96_500.png" },
      { sku: "alcohol-puro96-1lt", attrs: { tipo: "puro-96", capacidad: "1-lt" }, name: "PURO 96° 1 LT", description: "Alcohol puro al 96° de alta concentración para uso técnico, limpieza de instrumental y preparación de soluciones en laboratorio. || **Tipo:** Puro 96° | **Capacidad:** 1 lt.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_96_1000.png" },
      { sku: "alcohol-puro96-4lt", attrs: { tipo: "puro-96", capacidad: "4-lt" }, name: "PURO 96° 4 LT", description: "Alcohol puro al 96° de alta concentración para uso técnico, limpieza de instrumental y preparación de soluciones en laboratorio. || **Tipo:** Puro 96° | **Capacidad:** 4 lt.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_96_4000.png" },
      { sku: "alcohol-puro96-20lt", attrs: { tipo: "puro-96", capacidad: "20-lt" }, name: "PURO 96° 20 LT", description: "Alcohol puro al 96° de alta concentración para uso técnico, limpieza de instrumental y preparación de soluciones en laboratorio. || **Tipo:** Puro 96° | **Capacidad:** 20 lt.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_96_20000.png" },

      // ─── ALCOHOL MEDICINAL 70° ────────────────────────────────
      { sku: "alcohol-medicinal70-120ml", attrs: { tipo: "medicinal-70", capacidad: "120-ml" }, name: "MEDICINAL 70° 120 ML", description: "Alcohol medicinal al 70° para desinfección de piel, heridas y superficies en laboratorio y uso clínico. || **Tipo:** Medicinal 70° | **Capacidad:** 120 ml.", price: 9.6, image: "/images/laboratorio/REACTIVOS/ALCOHOL_70_120.png" },
      { sku: "alcohol-medicinal70-250ml", attrs: { tipo: "medicinal-70", capacidad: "250-ml" }, name: "MEDICINAL 70° 250 ML", description: "Alcohol medicinal al 70° para desinfección de piel, heridas y superficies en laboratorio y uso clínico. || **Tipo:** Medicinal 70° | **Capacidad:** 250 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_70_250.png" },
      { sku: "alcohol-medicinal70-500ml", attrs: { tipo: "medicinal-70", capacidad: "500-ml" }, name: "MEDICINAL 70° 500 ML", description: "Alcohol medicinal al 70° para desinfección de piel, heridas y superficies en laboratorio y uso clínico. || **Tipo:** Medicinal 70° | **Capacidad:** 500 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_70_500.png" },
      { sku: "alcohol-medicinal70-1lt", attrs: { tipo: "medicinal-70", capacidad: "1-lt" }, name: "MEDICINAL 70° 1 LT", description: "Alcohol medicinal al 70° para desinfección de piel, heridas y superficies en laboratorio y uso clínico. || **Tipo:** Medicinal 70° | **Capacidad:** 1 lt.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_70_1000.png" },
      { sku: "alcohol-medicinal70-4lt", attrs: { tipo: "medicinal-70", capacidad: "4-lt" }, name: "MEDICINAL 70° 4 LT", description: "Alcohol medicinal al 70° para desinfección de piel, heridas y superficies en laboratorio y uso clínico. || **Tipo:** Medicinal 70° | **Capacidad:** 4 lt.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_70_4000.png" },
      { sku: "alcohol-medicinal70-20lt", attrs: { tipo: "medicinal-70", capacidad: "20-lt" }, name: "MEDICINAL 70° 20 LT", description: "Alcohol medicinal al 70° para desinfección de piel, heridas y superficies en laboratorio y uso clínico. || **Tipo:** Medicinal 70° | **Capacidad:** 20 lt.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_70_20000.png" },

      // ─── ALCOHOL ISOPROPÍLICO ─────────────────────────────────
      { sku: "alcohol-isopropilico-650ml", attrs: { tipo: "isopropilico", capacidad: "650-ml" }, name: "ISOPROPÍLICO 650 ML", description: "Alcohol isopropílico para limpieza de superficies, instrumental óptico y electrónico, y uso técnico en laboratorio. || **Tipo:** Isopropílico | **Capacidad:** 650 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_ISOP_650.png" },
      { sku: "alcohol-isopropilico-3800ml", attrs: { tipo: "isopropilico", capacidad: "3800-ml" }, name: "ISOPROPÍLICO 3800 ML", description: "Alcohol isopropílico para limpieza de superficies, instrumental óptico y electrónico, y uso técnico en laboratorio. || **Tipo:** Isopropílico | **Capacidad:** 3800 ml.", price: 5, image: "/images/laboratorio/REACTIVOS/ALCOHOL_ISOP_4000.png" }
    ]
  },

  {
    id: "biftalato-acido-de-potasio-500-g",
    name: "BIFTALATO ÁCIDO DE POTASIO – 500 G",
    type: "Reactivos",
    description: "Biftalato ácido de potasio (KHC₈H₄O₄) de alta pureza en presentación de 500 g, ampliamente utilizado como patrón primario de referencia en volumetrías ácido-base para la estandarización de soluciones de hidróxido de sodio y otras bases fuertes. Su alta estabilidad química, bajo contenido de humedad y peso molecular exacto lo convierten en uno de los patrones primarios más confiables en química analítica. También empleado como solución tampón de pH 4.0 en la calibración de electrodos y pHmetros. Debe almacenarse en recipiente hermético, en lugar seco y a temperatura ambiente. Ideal para laboratorios analíticos, clínicos, académicos y de control de calidad.",
    price: 288,
    image: "/images/laboratorio/REACTIVOS/BIFTALATO.png"
  },
  {
    id: "buffer-fosfato-ph-7-4",
    name: "BUFFER FOSFATO pH 7.4",
    type: "Reactivos",
    description: "Solución buffer de fosfato a pH 7.4 para uso en laboratorio, formulada para mantener el pH estable en condiciones fisiológicas, siendo esencial en técnicas de biología molecular, inmunohistoquímica, citología, fijación de tejidos y lavado de muestras biológicas. Su valor de pH coincide con el pH fisiológico humano, lo que la convierte en una solución de referencia indispensable en procedimientos clínicos y de investigación. Ampliamente utilizada en preparación de reactivos, dilución de anticuerpos, cultivos celulares y análisis bioquímicos. Ideal para laboratorios clínicos, académicos y de investigación.",
    image: "/images/laboratorio/REACTIVOS/BUFFER_FOSFACARD.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "250-ml", label: "250 ml" },
          { id: "500-ml", label: "500 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "buffer-fosfato-74-250ml",
        attrs: { capacidad: "250-ml" },
        name: "250 ML",
        description: "Solución buffer de fosfato a pH 7.4 para estabilización de pH fisiológico en técnicas clínicas, biología molecular e inmunohistoquímica en laboratorio. || **pH:** 7.4 | **Capacidad:** 250 ml.",
        price: 1.2,
        image: "/images/laboratorio/REACTIVOS/BUFFER_250.png"
      },
      {
        sku: "buffer-fosfato-74-500ml",
        attrs: { capacidad: "500-ml" },
        name: "500 ML",
        description: "Solución buffer de fosfato a pH 7.4 para estabilización de pH fisiológico en técnicas clínicas, biología molecular e inmunohistoquímica en laboratorio. || **pH:** 7.4 | **Capacidad:** 500 ml.",
        price: 1.2,
        image: "/images/laboratorio/REACTIVOS/BUFFER_500.png"
      }
    ]
  },
  {
    id: "carbonato-de-sodio-500-g",
    name: "CARBONATO DE SODIO 500 G",
    type: "Reactivos",
    description: "Carbonato de sodio de alta pureza en presentación de 500 g, ampliamente utilizado como reactivo alcalino en análisis químicos, neutralización de ácidos, preparación de soluciones tampón y procesos de titulación. Su alta solubilidad en agua y su carácter básico lo convierten en un insumo esencial en laboratorios clínicos, académicos e industriales, siendo también empleado en síntesis química, tratamiento de aguas y como agente desengrasante en limpieza de material de vidrio.",
    price: 96,
    image: "/images/laboratorio/REACTIVOS/CARBONATO_SODIO.png"
  },


  {
    id: "cloruro-de-bario-100-g",
    name: "CLORURO DE BARIO 100 G",
    type: "Reactivos",
    description: "Cloruro de bario de alta pureza en presentación de 100 g, utilizado como reactivo analítico en la detección e identificación de sulfatos mediante precipitación, formando sulfato de bario insoluble de color blanco. Ampliamente empleado en análisis gravimétricos, preparación de soluciones patrón y síntesis de compuestos de bario. Por su toxicidad, debe manipularse con los equipos de protección personal adecuados y seguir los protocolos de seguridad establecidos. Ideal para laboratorios clínicos, académicos e industriales.",
    price: 104.4,
    image: "/images/laboratorio/REACTIVOS/CLORURO_BARIO.png"
  },
  {
    id: "cloruro-de-bismuto-iii-100-g",
    name: "CLORURO DE BISMUTO III × 100 G",
    type: "Reactivos",
    description: "Cloruro de bismuto III (BiCl₃) de alta pureza en presentación de 100 g, utilizado como reactivo en síntesis orgánica e inorgánica, catálisis y preparación de compuestos de bismuto. Destaca por su aplicación en la reacción de Dragendorff para la detección de alcaloides, así como en análisis de identificación de compuestos nitrogenados en muestras biológicas y farmacéuticas. Su alta reactividad con el agua requiere almacenamiento en condiciones secas y herméticas, alejado de fuentes de humedad. Ideal para laboratorios analíticos, farmacéuticos y de investigación.",
    price: 1.2,
    image: "/images/laboratorio/REACTIVOS/CLORURO_BISMUTO.png"
  },
  {
    id: "cloruro-de-cobalto-hexahidratado-500-gr",
    name: "CLORURO DE COBALTO HEXAHIDRATADO 500 GR",
    type: "Reactivos",
    description: "Cloruro de cobalto hexahidratado de alta pureza en presentación de 500 g, reconocible por su característico color rosa-rojizo que vira a azul al perder agua, propiedad ampliamente utilizada como indicador de humedad en sílicagel y otros desecantes. Empleado como reactivo en síntesis inorgánica, preparación de soluciones patrón, electrodeposición de cobalto y como catalizador en diversas reacciones químicas. Requiere manipulación con equipos de protección personal adecuados dado su potencial efecto irritante. Ideal para laboratorios analíticos, académicos e industriales.",
    price: 504,
    image: "/images/laboratorio/REACTIVOS/CLORURO_COBALTO.png"
  },
  {
    id: "cloruro-de-sodio",
    name: "CLORURO DE SODIO",
    type: "Reactivos",
    description: "Cloruro de sodio (NaCl) sólido de alta pureza ≥99% para uso en laboratorio, presentado en forma de cristales o polvo fino de fácil disolución. Reactivo esencial para la preparación de soluciones fisiológicas (suero salino), soluciones estándar y de calibración, medios de cultivo microbiológico y soluciones tampón. Su alta pureza garantiza resultados reproducibles y confiables en técnicas analíticas, procesos bioquímicos y ensayos clínicos. Debe almacenarse en recipiente hermético en lugar fresco y seco. Ideal para laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/REACTIVOS/CLORUROCARD.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "250-g", label: "250 g" },
          { id: "500-g", label: "500 g" },
          { id: "1-kg", label: "1 kg" }
        ]
      }
    ],

    variants: [
      {
        sku: "cloruro-sodio-250g",
        attrs: { presentacion: "250-g" },
        name: "250 G",
        description: "Cloruro de sodio sólido de alta pureza ≥99% para preparación de soluciones fisiológicas, estándares y reactivos en laboratorio. || **Pureza:** ≥99% NaCl | **Forma:** Sólido | **Presentación:** 250 g.",
        price: 7.2,
        image: "/images/laboratorio/REACTIVOS/CLORURO250.png"
      },
      {
        sku: "cloruro-sodio-500g",
        attrs: { presentacion: "500-g" },
        name: "500 G",
        description: "Cloruro de sodio sólido de alta pureza ≥99% para preparación de soluciones fisiológicas, estándares y reactivos en laboratorio. || **Pureza:** ≥99% NaCl | **Forma:** Sólido | **Presentación:** 500 g.",
        price: 42,
        image: "/images/laboratorio/REACTIVOS/CLORURO500.png"
      },
      {
        sku: "cloruro-sodio-1kg",
        attrs: { presentacion: "1-kg" },
        name: "1 KG",
        description: "Cloruro de sodio sólido de alta pureza ≥99% para preparación de soluciones fisiológicas, estándares y reactivos en laboratorio. || **Pureza:** ≥99% NaCl | **Forma:** Sólido | **Presentación:** 1 kg.",
        price: 48,
        image: "/images/laboratorio/REACTIVOS/CLORURO1000.png"
      }
    ]
  },
  {
    id: "cloruro-ferrico",
    name: "CLORURO FÉRRICO",
    type: "Reactivos",
    description: "Cloruro férrico (FeCl₃) sólido de alta pureza, ampliamente utilizado como reactivo oxidante en análisis químicos, coagulante en tratamiento de aguas y agente de grabado en circuitos electrónicos. En laboratorio se emplea en la detección de fenoles y compuestos aromáticos, síntesis inorgánica y como catalizador en reacciones de oxidación. Su naturaleza higroscópica requiere almacenamiento en recipiente hermético y lugar seco, alejado de la humedad. Ideal para laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/REACTIVOS/CLORURO_FERRICOCARD.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "250-g", label: "250 g" },
          { id: "500-g", label: "500 g" }
        ]
      }
    ],

    variants: [
      {
        sku: "cloruro-ferrico-250g",
        attrs: { presentacion: "250-g" },
        name: "250 G",
        description: "Cloruro férrico sólido de alta pureza para uso como reactivo oxidante, coagulante y agente de detección de fenoles en laboratorio. || **Forma:** Sólido | **Presentación:** 250 g.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/CLORUROFERRICO250.png"
      },
      {
        sku: "cloruro-ferrico-500g",
        attrs: { presentacion: "500-g" },
        name: "500 G",
        description: "Cloruro férrico sólido de alta pureza para uso como reactivo oxidante, coagulante y agente de detección de fenoles en laboratorio. || **Forma:** Sólido | **Presentación:** 500 g.",
        price: 198,
        image: "/images/laboratorio/REACTIVOS/CLORUROFERRICO500.png"
      }
    ]
  },


  {
    id: "azul-de-metileno",
    name: "AZUL DE METILENO",
    type: "Reactivos",
    description: "Azul de metileno en estado sólido (polvo), colorante básico de amplio uso en técnicas de tinción histológica y microbiológica para la identificación de bacterias, núcleos celulares y estructuras tisulares. Su presentación en polvo permite preparar soluciones a la concentración requerida según cada aplicación. Empleado en la coloración de frotis sanguíneos, tinción de bacterias gram negativas y como indicador redox en análisis químicos. Su versatilidad lo hace también útil en pruebas de viabilidad celular y como antídoto en intoxicaciones por metahemoglobinemia en entornos clínicos. Ideal para laboratorios de microbiología, histología, clínicos y de investigación.",
    image: "/images/laboratorio/REACTIVOS/AZUL_METILENO_CARD.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "100-g", label: "100 g" },
          { id: "250-g", label: "250 g" }
        ]
      }
    ],

    variants: [
      {
        sku: "azul-metileno-100g",
        attrs: { presentacion: "100-g" },
        name: "100 G",
        description: "Azul de metileno en polvo para preparación de soluciones de tinción histológica, microbiológica y uso como indicador redox en laboratorio. || **Estado:** Sólido | **Presentación:** 100 g.",
        price: 12,
        image: "/images/laboratorio/REACTIVOS/AZUL_METILENO_100G.png"
      },
      {
        sku: "azul-metileno-250g",
        attrs: { presentacion: "250-g" },
        name: "250 G",
        description: "Azul de metileno en polvo para preparación de soluciones de tinción histológica, microbiológica y uso como indicador redox en laboratorio. || **Estado:** Sólido | **Presentación:** 250 g.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/AZUL_METILENO_250G.png"
      }
    ]
  },


  {
    id: "granallas-de-zinc-por-500-gr",
    name: "GRANALLAS DE ZINC 500 GR",
    type: "Utensilios",
    description: "Granallas de zinc de alta pureza en presentación de 500 g, utilizadas como material reductor en análisis químicos cuantitativos, determinaciones de metales pesados y reacciones de reducción en laboratorio. Su forma granular facilita el dosificado preciso y una reacción controlada, siendo ampliamente empleadas en técnicas analíticas como la determinación de nitratos, sulfatos y otros compuestos por vía húmeda. Ideales para laboratorios clínicos, académicos e industriales.",
    price: 198,
    image: "/images/laboratorio/REACTIVOS/GRANALLA_ZINC.png"
  },

  {
    id: "hidróxido-de-magnesio-por-500-grs",
    name: "HIDRÓXIDO DE MAGNESIO 500 GRS",
    type: "Reactivos",
    description: "Hidróxido de magnesio de alta pureza en presentación de 500 g, utilizado como reactivo base en análisis químicos, neutralización de ácidos y preparación de soluciones tamponadas. Sus propiedades antiácidas y su baja solubilidad en agua lo hacen ideal para aplicaciones en síntesis química, tratamiento de efluentes y procesos industriales. Ampliamente empleado en laboratorios clínicos, académicos e industriales donde se requiere un agente alcalinizante de acción controlada.",
    price: 144,
    image: "/images/laboratorio/REACTIVOS/HIDROXIDO_MAGNESIO.png"
  },

  {
    id: "hidróxido-de-zinc-0-5-kg",
    name: "HIDRÓXIDO DE ZINC 500 GRS",
    type: "Reactivos",
    description: "Hidróxido de zinc de alta pureza en presentación de 500 g, utilizado como reactivo en análisis químicos, síntesis de compuestos de zinc y preparación de soluciones. Su carácter anfótero le permite reaccionar tanto con ácidos como con bases, siendo ampliamente empleado en procesos de precipitación, purificación de soluciones y como precursor en la fabricación de óxido de zinc. Ideal para laboratorios clínicos, académicos e industriales donde se requiere un reactivo versátil y de acción controlada.",
    price: 1.2,
    image: "/images/laboratorio/REACTIVOS/HIDROXIDO_ZINC.png"
  },
  {
    id: "hipoclorito-de-sodio-al-5",
    name: "HIPOCLORITO DE SODIO AL 5% 1LT",
    type: "Reactivos",
    description: "Hipoclorito de sodio al 5% de concentración, ampliamente utilizado como agente desinfectante, blanqueador y oxidante en laboratorio. Su acción bactericida, viricida y fungicida lo convierte en un insumo esencial para la descontaminación de superficies, material de trabajo y tratamiento de efluentes biológicos. Empleado también en la preparación de soluciones de desinfección y como reactivo en análisis químicos de cloro disponible. Por su naturaleza corrosiva e irritante, debe manipularse con equipos de protección personal adecuados y almacenarse en lugar fresco, oscuro y ventilado. Ideal para laboratorios clínicos, microbiológicos y de investigación.",
    price: 9.6,
    image: "/images/laboratorio/REACTIVOS/HIPOCLORITO_SODIO.png"
  },

  {
    id: "indicador-azul-de-bromofenol-10-g",
    name: "INDICADOR AZUL DE BROMOFENOL 10 GRS",
    type: "Reactivos",
    description: "Azul de bromofenol en estado sólido (polvo) en presentación de 10 g, indicador de pH ampliamente utilizado en volumetrías ácido-base para señalar el punto de viraje en el rango de pH 3.0 a 4.6, pasando de amarillo a azul-violeta. Su forma sólida permite preparar soluciones indicadoras a la concentración requerida con alta reproducibilidad. Empleado también como colorante de seguimiento en electroforesis de proteínas y ácidos nucleicos en geles de agarosa y poliacrilamida, facilitando la visualización del frente de migración. Debe almacenarse en recipiente hermético, en lugar fresco y seco. Ideal para laboratorios analíticos, bioquímicos, académicos y de investigación.",
    price: 1.2,
    image: "/images/laboratorio/REACTIVOS/AZUL_BROMOFENOL.png"
  },

  {
    id: "indicador-fenolfaleina-200-g",
    name: "INDICADOR FENOLFTALEÍNA 200 GRS",
    type: "Reactivos",
    description: "Fenolftaleína en presentación de 200 g, indicador de pH clásico en análisis volumétrico ácido-base, con rango de viraje entre pH 8.2 y 10.0, pasando de incoloro a rosa-fucsia intenso. Ampliamente utilizado en titulaciones alcalimétricas, determinación de acidez en alimentos, aguas y productos industriales, así como en la preparación de soluciones indicadoras para prácticas de laboratorio. Debe almacenarse en lugar fresco, seco y protegido de la luz para preservar su estabilidad. Ideal para laboratorios analíticos, académicos e industriales.",
    price: 204,
    image: "/images/laboratorio/REACTIVOS/FENOLFTALEINA.png"
  },

  {
    id: "kit-soluciones-buffer-hanna-instruments",
    name: "KIT DE SOLUCIONES BUFFER pH 4.0 / 7.0 / 10.01 × 500 ML – HANNA INSTRUMENTS",
    type: "Reactivos",
    description: "Kit de soluciones buffer de calibración marca Hanna Instruments, compuesto por tres soluciones de referencia de pH 4.0, 7.0 y 10.01 en presentaciones de 500 ml cada una. Formuladas con alta precisión y estabilidad, garantizan una calibración confiable y trazable de electrodos de pH, pHmetros y sistemas de medición electroquímica. Su amplio rango de valores cubre los puntos de calibración más utilizados en análisis de rutina, control de calidad y procesos industriales. La marca Hanna Instruments asegura consistencia lote a lote y cumplimiento con estándares internacionales. Ideal para laboratorios clínicos, ambientales, alimentarios, académicos e industriales.",
    price: 186,
    image: "/images/laboratorio/REACTIVOS/KIT_BUFFER_HANNA.png"
  },

  {
    id: "lugol-al-1-porciento",
    name: "LUGOL AL 1%",
    type: "Reactivos",
    description: "Solución de Lugol al 1% (yodo-yoduro de potasio), ampliamente utilizada como reactivo de identificación de almidones y glucógeno, colorante en técnicas microbiológicas y como suplemento de yodo en medios de cultivo. Su característica reacción de color azul-negro con el almidón la convierte en un reactivo esencial en microbiología, histología y análisis de alimentos. Debe almacenarse en frasco ámbar, en lugar fresco y alejado de la luz para preservar su estabilidad. Ideal para laboratorios clínicos, microbiológicos, académicos y de investigación.",
    image: "/images/laboratorio/REACTIVOS/LUGOL_100.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "100-ml", label: "100 ml" },
          { id: "1000-ml", label: "1000 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "lugol-1pct-100ml",
        attrs: { capacidad: "100-ml" },
        name: "100 ML",
        description: "Solución de Lugol al 1% para identificación de almidones, coloración microbiológica y análisis de laboratorio. || **Concentración:** 1% | **Capacidad:** 100 ml.",
        price: 46.8,
        image: "/images/laboratorio/REACTIVOS/LUGOL_100.png"
      },
      {
        sku: "lugol-1pct-1000ml",
        attrs: { capacidad: "1000-ml" },
        name: "1000 ML",
        description: "Solución de Lugol al 1% para identificación de almidones, coloración microbiológica y análisis de laboratorio. || **Concentración:** 1% | **Capacidad:** 1000 ml.",
        price: 144,
        image: "/images/laboratorio/REACTIVOS/LUGOL_1000.png"
      }
    ]
  },

  {
    id: "lugol-parasitologico-500-ml",
    name: "LUGOL PARASITOLÓGICO × 500 ML",
    type: "Reactivos",
    description: "Solución de Lugol parasitológico en presentación de 500 ml, formulada específicamente para la identificación y diferenciación de quistes y trofozoítos de protozoos intestinales en muestras de heces. Su concentración de yodo tiñe selectivamente el glucógeno y los núcleos de los parásitos, facilitando su visualización al microscopio en exámenes coproparasitológicos. Esencial en laboratorios clínicos y de parasitología para el diagnóstico de infecciones por Entamoeba, Giardia y otros protozoos intestinales. Debe almacenarse en frasco ámbar y lugar protegido de la luz.",
    price: 72,
    image: "/images/laboratorio/REACTIVOS/LUGOL_PARASITOLOGICO.png"
  },
  {
    id: "kit-barras-magneticas-rotilabo-ptfe",
    name: "KIT DE BARRAS MAGNÉTICAS ROTILABO® – PTFE",
    type: "Utensilios",
    description: "Kits de barras magnéticas recubiertas en PTFE (teflón) de la línea Rotilabo®, diseñados para agitación y disolución de reactivos en laboratorio. Disponibles en tres configuraciones según el número de piezas, variedad de tamaños y nivel de rendimiento requerido. Todas las barras presentan alta resistencia química frente a ácidos, bases y solventes, con superficie lisa antiadherente que facilita la limpieza y evita la contaminación de la muestra. Compatibles con agitadores magnéticos estándar, ideales para laboratorios clínicos, universitarios, industriales y de investigación.",
    image: "/images/laboratorio/REACTIVOS/MAGNETOSCARD.png",

    attributeOrder: ["kit"],

    attributes: [
      {
        id: "kit",
        label: "Kit",
        type: "single",
        values: [
          { id: "kit-1", label: "10 PZA" },
          { id: "kit-2", label: "18 PZA" },
          { id: "kit-3", label: "14 PZA" }
        ]
      }
    ],

    variants: [
      {
        sku: "rotilabo-kit-1",
        attrs: { kit: "kit-1" },
        name: "SET BÁSICO",
        description: "Kit de barras magnéticas recubiertas en PTFE con núcleo AlNiCo, compuesto por 10 piezas para agitación estándar en laboratorio. Alta resistencia química, superficie lisa antiadherente y estuche organizador de poliestireno incluido. No apto para autoclave. Ideal para uso educativo, académico y ensayos de rutina. || **Piezas:** 10 | **Núcleo:** AlNiCo | **Autoclavable:** No | **Dimensiones incluidas:** (1) 1.5 cm, (2) 2 cm, (2) 2.5 cm, (1) 3 cm, (2) 4 cm, (2) 5 cm.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/KIT_MAGNETOS_1.png"
      },
      {
        sku: "rotilabo-kit-2",
        attrs: { kit: "kit-2" },
        name: "SET COMPLETO",
        description: "Kit de barras magnéticas recubiertas en PTFE con núcleo AlNiCo, compuesto por 18 piezas en amplia variedad de tamaños para adaptarse a diferentes recipientes y volúmenes de trabajo. Alta resistencia química, superficie lisa antiadherente y estuche organizador robusto incluido. No apto para autoclave. Recomendado para laboratorios clínicos, universitarios e industriales que requieren versatilidad operativa. || **Piezas:** 18 | **Núcleo:** AlNiCo | **Autoclavable:** No | **Dimensiones incluidas:** (2) 1 cm, (2) 1.5 cm, (2) 2 cm, (2) 2.5 cm, (2) 3 cm, (2) 4 cm, (2) 5 cm, (2) 6 cm, (2) 8 cm.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/KIT_MAGNETOS_2.png"
      },
      {
        sku: "rotilabo-kit-3",
        attrs: { kit: "kit-3" },
        name: "SET TURBOMAGNET AUTOCLAVABLE",
        description: "Kit de barras magnéticas de alto rendimiento recubiertas en PTFE con núcleo de samario-cobalto (SmCo), compuesto por 14 piezas que ofrecen mayor fuerza magnética y estabilidad en soluciones de mayor viscosidad o volumen. Las barras son aptas para esterilización en autoclave, ideales para entornos que requieren condiciones controladas. Estuche organizador incluido (no autoclavable). Recomendado para laboratorios de investigación, control de calidad y aplicaciones especializadas. || **Piezas:** 14 | **Núcleo:** Samario-Cobalto (SmCo) | **Autoclavable:** Sí (barras) | **Dimensiones incluidas:** (2) 0.8 cm, (2) 1.2 cm, (2) 2 cm, (2) 2.5 cm, (2) 3 cm, (2) 4 cm, (1) 5 cm, (1) 6 cm.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/KIT_MAGNETOS_3.png"
      }
    ]
  },
  {
    id: "pinza-bureta-mariposa-con-nuez",
    name: "PINZA PARA BURETA TIPO MARIPOSA CON NUEZ DE FIJACIÓN",
    type: "Utensilios",
    description: "Pinza para bureta tipo mariposa fabricada en polipropileno de alta resistencia, equipada con nuez metálica de fijación para montaje en soporte universal, que permite una sujeción firme y estable durante procesos de titulación y análisis volumétrico. Presenta diseño ergonómico con sistema de ajuste por presión que evita daños al vidrio, asegurando una manipulación segura. Material resistente a la acción de agentes químicos y de fácil limpieza, adecuada para laboratorios clínicos, educativos e industriales.",
    price: 5,
    image: "/images/laboratorio/UTENSILIOS/PINZA_BURETA_MARIPOSA_NUEZ.png"
  },
  {
    id: "pinza-universal-2-dedos-metalica-con-nuez",
    name: "PINZA UNIVERSAL DE 2 DEDOS METÁLICA CON NUEZ DE FIJACIÓN",
    type: "Utensilios",
    description: "Pinza universal de laboratorio tipo 2 dedos, fabricada en metal de alta resistencia, equipada con nuez de fijación para montaje en soporte universal. Diseñada para la sujeción segura y regulable de diversos elementos como buretas, matraces, condensadores y otros materiales de vidrio de laboratorio. Cuenta con sistema de ajuste mediante tornillo que permite un agarre firme sin dañar el material, ofreciendo estabilidad durante procedimientos experimentales. Construcción robusta, resistente al uso continuo y a agentes químicos, ideal para laboratorios clínicos, educativos e industriales.",
    price: 5,
    image: "/images/laboratorio/UTENSILIOS/PINZA_UNIVERSAL_2DEDOS_NUEZ.png"
  },
  {
    id: "mortero-pilon-porcelana",
    name: "MORTERO Y PILÓN DE PORCELANA",
    type: "Utensilios",
    description: "Mortero y pilón de porcelana para uso múltiple, especialmente en laboratorio. Resistente y de fácil limpieza. Disponible en distintos tamaños.",
    image: "/images/laboratorio/UTENSILIOS/MORTEROCARD.png",

    attributeOrder: ["tamano"],

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "60mm", label: "60 mm" },
          { id: "80mm", label: "80 mm" },
          { id: "100mm", label: "100 mm" },
          { id: "130mm", label: "130 mm" },
          { id: "160mm", label: "160 mm" }
        ]
      }
    ],

    variants: [
      {
        sku: "mortero-60mm",
        attrs: { tamano: "60mm" },
        name: "60 mm",
        description: "Mortero y pilón de porcelana – 60 mm de diámetro.",
        price: 30,
        image: "/images/laboratorio/MORTERO.png"
      },
      {
        sku: "mortero-80mm",
        attrs: { tamano: "80mm" },
        name: "80 mm",
        description: "Mortero y pilón de porcelana – 80 mm de diámetro.",
        price: 35,
        image: "/images/laboratorio/MORTERO.png"
      },
      {
        sku: "mortero-100mm",
        attrs: { tamano: "100mm" },
        name: "100 mm",
        description: "Mortero y pilón de porcelana – 100 mm de diámetro.",
        price: 40,
        image: "/images/laboratorio/MORTERO.png"
      },
      {
        sku: "mortero-130mm",
        attrs: { tamano: "130mm" },
        name: "130 mm",
        description: "Mortero y pilón de porcelana – 130 mm de diámetro.",
        price: 45,
        image: "/images/laboratorio/MORTERO.png"
      },
      {
        sku: "mortero-160mm",
        attrs: { tamano: "160mm" },
        name: "160 mm",
        description: "Mortero y pilón de porcelana – 160 mm de diámetro.",
        price: 50,
        image: "/images/laboratorio/MORTERO.png"
      }
    ]
  },

  {
    id: "embudos-vidrio-de-borosilicato",
    name: "EMBUDOS DE VIDRIO DE BOROSILICATO",
    type: "Utensilios",
    description: "Embudos fabricados en vidrio de borosilicato (Boro 3.3), diseñados para filtración, trasvase y separación de líquidos en laboratorio. Su estructura resistente ofrece alta tolerancia química y térmica, siendo ideales para laboratorios clínicos, universitarios y de investigación.",
    image: "/images/laboratorio/UTENSILIOS/EMBUDOCARD.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "30-ml", label: "30 ml / Ø 65 mm" },
          { id: "50-ml", label: "50 ml / Ø 120 mm" },
          { id: "75-ml", label: "75 ml / Ø 150 mm" }
        ]
      }
    ],

    variants: [
      {
        sku: "embudo-30ml",
        attrs: { capacidad: "30-ml" },
        name: "CAPACIDAD 30 ML",
        description: "Embudo de vidrio de borosilicato para filtración y trasvase de líquidos en laboratorio, con alta resistencia química y térmica. || **Capacidad:** 30 ml | **Diámetro:** 65 mm.",
        price: 1.2,
        image: "/images/laboratorio/UTENSILIOS/EMBUDO30.png"
      },
      {
        sku: "embudo-50ml",
        attrs: { capacidad: "50-ml" },
        name: "CAPACIDAD 50 ML",
        description: "Embudo de vidrio de borosilicato para uso en laboratorio, ideal para filtración y manejo de soluciones con excelente resistencia química. || **Capacidad:** 50 ml | **Diámetro:** 120 mm.",
        price: 1.2,
        image: "/images/laboratorio/UTENSILIOS/EMBUDO50.png"
      },
      {
        sku: "embudo-75ml",
        attrs: { capacidad: "75-ml" },
        name: "CAPACIDAD 75 ML",
        description: "Embudo de vidrio de borosilicato de mayor capacidad, diseñado para trasvase y filtración de volúmenes medios en laboratorio. || **Capacidad:** 75 ml | **Diámetro:** 150 mm.",
        price: 1.2,
        image: "/images/laboratorio/UTENSILIOS/EMBUDO75.png"
      }
    ]
  },
  {
    id: "bagueta-de-vidrio-de-borosilicato",
    name: "BAGUETA DE VIDRIO DE BOROSILICATO",
    type: "Utensilios",
    description: "Bagueta fabricada en vidrio de borosilicato (Boro 3.3), diseñada para agitación y mezcla de soluciones en laboratorio. Su alta resistencia química y térmica la hace ideal para uso en laboratorios clínicos, universitarios y de investigación.",
    image: "/images/laboratorio/UTENSILIOS/BAGUETASCARD.png",

    attributeOrder: ["longitud", "diametro"],

    attributes: [
      {
        id: "longitud",
        label: "Longitud",
        type: "single",
        values: [
          { id: "20-cm", label: "20 cm" },
          { id: "25-cm", label: "25 cm" },
          { id: "30-cm", label: "30 cm" },
          { id: "40-cm", label: "40 cm" },
          { id: "50-cm", label: "50 cm" }
        ]
      },
      {
        id: "diametro",
        label: "Diámetro",
        type: "single",
        values: [
          { id: "5-mm", label: "5 mm" },
          { id: "6-mm", label: "6 mm" },
          { id: "8-mm", label: "8 mm" }
        ]
      }
    ],

    attributeRules: {
      "20-cm": { diametro: ["6-mm"] },
      "25-cm": { diametro: ["5-mm", "6-mm"] },
      "30-cm": { diametro: ["8-mm"] },
      "40-cm": { diametro: ["8-mm"] },
      "50-cm": { diametro: ["8-mm"] }
    },

    variants: [
      {
        sku: "bagueta-6mm-20cm",
        attrs: { longitud: "20-cm", diametro: "6-mm" },
        name: "20 cm – Ø6 mm",
        description: "Bagueta de vidrio de borosilicato para agitación y mezcla de soluciones en laboratorio. || **Longitud:** 20 cm | **Diámetro:** 6 mm.",
        price: 6,
        image: "/images/laboratorio/UTENSILIOS/BAGUETA30.png"
      },
      {
        sku: "bagueta-5mm-25cm",
        attrs: { longitud: "25-cm", diametro: "5-mm" },
        name: "25 cm – Ø5 mm",
        description: "Bagueta de vidrio de borosilicato para agitación y mezcla de soluciones en laboratorio. || **Longitud:** 25 cm | **Diámetro:** 5 mm.",
        price: 6,
        image: "/images/laboratorio/UTENSILIOS/BAGUETA30.png"
      },
      {
        sku: "bagueta-6mm-25cm",
        attrs: { longitud: "25-cm", diametro: "6-mm" },
        name: "25 cm – Ø6 mm",
        description: "Bagueta de vidrio de borosilicato para agitación y mezcla de soluciones en laboratorio. || **Longitud:** 25 cm | **Diámetro:** 6 mm.",
        price: 6,
        image: "/images/laboratorio/UTENSILIOS/BAGUETA30.png"
      },
      {
        sku: "bagueta-8mm-30cm",
        attrs: { longitud: "30-cm", diametro: "8-mm" },
        name: "30 cm – Ø8 mm",
        description: "Bagueta de vidrio de borosilicato para agitación y mezcla de soluciones en laboratorio. || **Longitud:** 30 cm | **Diámetro:** 8 mm.",
        price: 6,
        image: "/images/laboratorio/UTENSILIOS/BAGUETA30.png"
      },
      {
        sku: "bagueta-8mm-40cm",
        attrs: { longitud: "40-cm", diametro: "8-mm" },
        name: "40 cm – Ø8 mm",
        description: "Bagueta de vidrio de borosilicato para agitación y mezcla de soluciones en laboratorio. || **Longitud:** 40 cm | **Diámetro:** 8 mm.",
        price: 6,
        image: "/images/laboratorio/UTENSILIOS/BAGUETA30.png"
      },
      {
        sku: "bagueta-8mm-50cm",
        attrs: { longitud: "50-cm", diametro: "8-mm" },
        name: "50 cm – Ø8 mm",
        description: "Bagueta de vidrio de borosilicato para agitación y mezcla de soluciones en laboratorio. || **Longitud:** 50 cm | **Diámetro:** 8 mm.",
        price: 6,
        image: "/images/laboratorio/UTENSILIOS/BAGUETA30.png"
      }
    ]
  },

  {
    id: "beaker-de-vidrio-borosilicato-graduado",
    name: "BEAKER DE VIDRIO BOROSILICATO GRADUADO",
    type: "Utensilios",
    description: "Beaker de vidrio borosilicato graduado, diseñado para medición, mezcla, calentamiento y preparación de soluciones en entornos de laboratorio. Fabricado en vidrio borosilicato de alta resistencia térmica y química, con graduación visible para una lectura práctica y pico vertedor para un vaciado controlado. Disponible con o sin certificado de calidad, y en múltiples capacidades para adaptarse a diferentes procedimientos de laboratorio.",
    image: "/images/laboratorio/UTENSILIOS/BEAKERCARD.png",

    attributeOrder: ["certificado", "capacidad"],

    attributes: [
      {
        id: "certificado",
        label: "Certificado",
        type: "single",
        values: [
          { id: "sin-certificado", label: "Sin certificado" },
          { id: "con-certificado", label: "Con certificado" }
        ]
      },
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "50-ml", label: "50 ml" },
          { id: "100-ml", label: "100 ml" },
          { id: "250-ml", label: "250 ml" },
          { id: "500-ml", label: "500 ml" },
          { id: "600-ml", label: "600 ml" },
          { id: "1000-ml", label: "1000 ml" }
        ]
      }
    ],

    // 50 ml solo existe sin certificado / 600 ml solo existe sin certificado
    attributeRules: {
      "sin-certificado": { capacidad: ["50-ml", "100-ml", "250-ml", "500-ml", "600-ml", "1000-ml"] },
      "con-certificado": { capacidad: ["100-ml", "250-ml", "500-ml", "1000-ml"] }
    },

    variants: [

      // ─── SIN CERTIFICADO ──────────────────────────────────────
      {
        sku: "beaker-sc-50ml",
        attrs: { certificado: "sin-certificado", capacidad: "50-ml" },
        name: "50 ML – SIN CERTIFICADO",
        description: "Beaker de vidrio borosilicato graduado para medición, mezcla y calentamiento de soluciones en laboratorio, con pico vertedor para vaciado controlado. || **Capacidad:** 50 ml | **Certificado:** No.",
        price: 6,
        image: "/images/laboratorio/UTENSILIOS/BEAKER50.png"
      },
      {
        sku: "beaker-sc-100ml",
        attrs: { certificado: "sin-certificado", capacidad: "100-ml" },
        name: "100 ML – SIN CERTIFICADO",
        description: "Beaker de vidrio borosilicato graduado para preparación, mezcla y calentamiento de soluciones en laboratorio, con pico vertedor que facilita el trasvase del contenido. || **Capacidad:** 100 ml | **Certificado:** No.",
        price: 7.2,
        image: "/images/laboratorio/UTENSILIOS/BEAKER100.png"
      },
      {
        sku: "beaker-sc-250ml",
        attrs: { certificado: "sin-certificado", capacidad: "250-ml" },
        name: "250 ML – SIN CERTIFICADO",
        description: "Beaker de vidrio borosilicato graduado para medición, mezcla y preparación de reactivos en laboratorio, con pico vertedor para un vertido seguro. || **Capacidad:** 250 ml | **Certificado:** No.",
        price: 8.4,
        image: "/images/laboratorio/UTENSILIOS/BEAKER250.png"
      },
      {
        sku: "beaker-sc-500ml",
        attrs: { certificado: "sin-certificado", capacidad: "500-ml" },
        name: "500 ML – SIN CERTIFICADO",
        description: "Beaker de vidrio borosilicato graduado para preparación, mezcla y calentamiento de volúmenes medios en laboratorio, con pico vertedor para vaciado controlado. || **Capacidad:** 500 ml | **Certificado:** No.",
        price: 14.4,
        image: "/images/laboratorio/UTENSILIOS/BEAKER500.png"
      },
      {
        sku: "beaker-sc-600ml",
        attrs: { certificado: "sin-certificado", capacidad: "600-ml" },
        name: "600 ML – SIN CERTIFICADO",
        description: "Beaker de vidrio borosilicato graduado para preparación, mezcla y calentamiento de volúmenes intermedios en laboratorio, con pico vertedor para vaciado controlado. || **Capacidad:** 600 ml | **Certificado:** No.",
        price: 60,
        image: "/images/laboratorio/UTENSILIOS/BEAKER600.png"
      },
      {
        sku: "beaker-sc-1000ml",
        attrs: { certificado: "sin-certificado", capacidad: "1000-ml" },
        name: "1000 ML – SIN CERTIFICADO",
        description: "Beaker de vidrio borosilicato graduado para mezcla, calentamiento y preparación de soluciones de mayor volumen en laboratorio, con pico vertedor que facilita el manejo del contenido. || **Capacidad:** 1000 ml | **Certificado:** No.",
        price: 21.6,
        image: "/images/laboratorio/UTENSILIOS/BEAKER1000.png"
      },

      // ─── CON CERTIFICADO ──────────────────────────────────────
      {
        sku: "beaker-cc-100ml",
        attrs: { certificado: "con-certificado", capacidad: "100-ml" },
        name: "100 ML – CON CERTIFICADO",
        description: "Beaker de vidrio borosilicato graduado con certificado de calidad, para preparación, mezcla y calentamiento de soluciones en laboratorio donde se requiere trazabilidad metrológica. || **Capacidad:** 100 ml | **Certificado:** Sí.",
        price: 16.8,
        image: "/images/laboratorio/UTENSILIOS/BEAKER100.png"
      },
      {
        sku: "beaker-cc-250ml",
        attrs: { certificado: "con-certificado", capacidad: "250-ml" },
        name: "250 ML – CON CERTIFICADO",
        description: "Beaker de vidrio borosilicato graduado con certificado de calidad, para medición, mezcla y preparación de reactivos en laboratorio donde se requiere trazabilidad metrológica. || **Capacidad:** 250 ml | **Certificado:** Sí.",
        price: 28.8,
        image: "/images/laboratorio/UTENSILIOS/BEAKER250.png"
      },
      {
        sku: "beaker-cc-500ml",
        attrs: { certificado: "con-certificado", capacidad: "500-ml" },
        name: "500 ML – CON CERTIFICADO",
        description: "Beaker de vidrio borosilicato graduado con certificado de calidad, para preparación, mezcla y calentamiento de volúmenes medios en laboratorio donde se requiere trazabilidad metrológica. || **Capacidad:** 500 ml | **Certificado:** Sí.",
        price: 42,
        image: "/images/laboratorio/UTENSILIOS/BEAKER500.png"
      },
      {
        sku: "beaker-cc-1000ml",
        attrs: { certificado: "con-certificado", capacidad: "1000-ml" },
        name: "1000 ML – CON CERTIFICADO",
        description: "Beaker de vidrio borosilicato graduado con certificado de calidad, para mezcla, calentamiento y preparación de soluciones de mayor volumen en laboratorio donde se requiere trazabilidad metrológica. || **Capacidad:** 1000 ml | **Certificado:** Sí.",
        price: 54,
        image: "/images/laboratorio/UTENSILIOS/BEAKER1000.png"
      }
    ]
  },

  {
    id: "bureta-de-vidrio-de-borosilicato-c-llave-de-teflon",
    name: "BURETA DE VIDRIO DE BOROSILICATO C/LLAVE DE TEFLÓN",
    type: "Utensilios",
    description: "Bureta de vidrio de borosilicato con llave de teflón, diseñada para titulaciones y dosificación precisa de líquidos en procedimientos de laboratorio. Fabricada en vidrio de alta resistencia química y térmica, con graduación clara para lectura confiable y sistema de llave de teflón que permite un control preciso del flujo. Disponible en distintas capacidades para adaptarse a diversas aplicaciones analíticas.",
    image: "/images/laboratorio/UTENSILIOS/BURETACARD.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "10-ml", label: "10 ml" },
          { id: "50-ml", label: "50 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "bureta-teflon-10ml",
        attrs: { capacidad: "10-ml" },
        name: "CAPACIDAD 10ML",
        description: "Bureta de vidrio de borosilicato con llave de teflón, ideal para titulaciones y dosificación precisa de líquidos en laboratorio. Fabricada en vidrio resistente al ataque químico y al uso continuo, con graduación visible y sistema de apertura de teflón para un control uniforme del flujo. || **Capacidad:** 10 ml.",
        price: 250,
        image: "/images/laboratorio/UTENSILIOS/BURETA10.png"
      },
      {
        sku: "bureta-teflon-50ml",
        attrs: { capacidad: "50-ml" },
        name: "CAPACIDAD 50ML",
        description: "Bureta de vidrio de borosilicato con llave de teflón, diseñada para titulaciones y dispensación precisa de líquidos en procedimientos analíticos de laboratorio. Fabricada en vidrio de alta resistencia química y térmica, con graduación clara y llave de teflón para un control preciso del vaciado. || **Capacidad:** 50 ml.",
        price: 150,
        image: "/images/laboratorio/UTENSILIOS/BURETA50.png"
      }
    ]
  },

  {
    id: "cristalizador-forma-redonda-vidrio-de-borosilicato",
    name: "CRISTALIZADOR REDONDO DE BORO 3.3",
    type: "Utensilios",
    description: "Cristalizador de forma redonda fabricado en vidrio de borosilicato (Boro 3.3), diseñado para procesos de evaporación, cristalización y manejo de soluciones en laboratorio. Su estructura abierta y resistente permite una distribución uniforme del calor y una alta resistencia química, ideal para aplicaciones en laboratorios clínicos, universitarios y de investigación.",
    image: "/images/laboratorio/UTENSILIOS/CRISTALIZADORCARD.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "60-mm", label: "60 mm" },
          { id: "70-mm", label: "70 mm" },
          { id: "90-mm", label: "90 mm" },
          { id: "100-mm", label: "100 mm" },
          { id: "125-mm", label: "125 mm" }
        ]
      }
    ],

    variants: [
      {
        sku: "cristalizador-60mm",
        attrs: { capacidad: "60-mm" },
        name: "CAPACIDAD 60MM",
        description: "Cristalizador de vidrio de borosilicato ideal para procesos de evaporación y cristalización en laboratorio, con excelente resistencia química y térmica. || **Diámetro:** 60 mm.",
        price: 1.2,
        image: "/images/laboratorio/UTENSILIOS/CRISTALIZADOR60.png"
      },
      {
        sku: "cristalizador-70mm",
        attrs: { capacidad: "70-mm" },
        name: "CAPACIDAD 70MM",
        description: "Cristalizador de vidrio de borosilicato para uso en laboratorio, diseñado para evaporación controlada y cristalización de soluciones. || **Diámetro:** 70 mm.",
        price: 1.2,
        image: "/images/laboratorio/UTENSILIOS/CRISTALIZADOR70.png"
      },
      {
        sku: "cristalizador-90mm",
        attrs: { capacidad: "90-mm" },
        name: "CAPACIDAD 90MM",
        description: "Cristalizador de vidrio de borosilicato con excelente resistencia térmica y química, ideal para aplicaciones de laboratorio. || **Diámetro:** 90 mm.",
        price: 1.2,
        image: "/images/laboratorio/UTENSILIOS/CRISTALIZADOR90.png"
      },
      {
        sku: "cristalizador-100mm",
        attrs: { capacidad: "100-mm" },
        name: "CAPACIDAD 100MM",
        description: "Cristalizador de laboratorio fabricado en vidrio de borosilicato, diseñado para procesos de evaporación y cristalización. || **Diámetro:** 100 mm.",
        price: 1.2,
        image: "/images/laboratorio/UTENSILIOS/CRISTALIZADOR100.png"
      },
      {
        sku: "cristalizador-125mm",
        attrs: { capacidad: "125-mm" },
        name: "CAPACIDAD 125MM",
        description: "Cristalizador de vidrio de borosilicato de mayor capacidad, ideal para aplicaciones que requieren mayor volumen de trabajo. || **Diámetro:** 125 mm.",
        price: 1.2,
        image: "/images/laboratorio/UTENSILIOS/CRISTALIZADOR125.png"
      }
    ]
  },
  {
    id: "matraz-aforado-con-tapa-vidrio-de-borosilicato",
    name: "MATRAZ AFORADO CON TAPA DE BOROSILICATO",
    type: "Utensilios",
    description: "Matraz aforado con tapa, fabricado en vidrio de borosilicato (Boro 3.3), diseñado para la preparación y dilución de soluciones con alta precisión volumétrica. Su línea de aforo grabada y tapa esmerilada garantizan exactitud y hermeticidad, siendo ideales para laboratorios clínicos, universitarios y de investigación.",
    image: "/images/laboratorio/UTENSILIOS/MATRAZCARD.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "5-ml", label: "5 ml" },
          { id: "50-ml", label: "50 ml" },
          { id: "100-ml", label: "100 ml" },
          { id: "250-ml", label: "250 ml" },
          { id: "500-ml", label: "500 ml" },
          { id: "1000-ml", label: "1000 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "matraz-5ml",
        attrs: { capacidad: "5-ml" },
        name: "CAPACIDAD 5 ML",
        description: "Matraz de vidrio de borosilicato con tapa esmerilada para preparación de soluciones de precisión en laboratorio. || **Capacidad:** 5 ml.",
        price: 78,
        image: "/images/laboratorio/UTENSILIOS/MATRAZ5.png"
      },
      {
        sku: "matraz-50ml",
        attrs: { capacidad: "50-ml" },
        name: "CAPACIDAD 50 ML",
        description: "Matraz de vidrio de borosilicato con tapa esmerilada, ideal para diluciones y preparación volumétrica en laboratorio. || **Capacidad:** 50 ml.",
        price: 90,
        image: "/images/laboratorio/UTENSILIOS/MATRAZ50.png"
      },
      {
        sku: "matraz-100ml",
        attrs: { capacidad: "100-ml" },
        name: "CAPACIDAD 100 ML",
        description: "Matraz de vidrio de borosilicato con tapa esmerilada para preparación y dilución de soluciones con alta precisión volumétrica. || **Capacidad:** 100 ml.",
        price: 102,
        image: "/images/laboratorio/UTENSILIOS/MATRAZ100.png"
      },
      {
        sku: "matraz-250ml",
        attrs: { capacidad: "250-ml" },
        name: "CAPACIDAD 250 ML",
        description: "Matraz de vidrio de borosilicato con tapa esmerilada para preparación y dilución de soluciones con alta precisión volumétrica. || **Capacidad:** 250 ml.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/MATRAZ250.png"
      },
      {
        sku: "matraz-500ml",
        attrs: { capacidad: "500-ml" },
        name: "CAPACIDAD 500 ML",
        description: "Matraz de vidrio de borosilicato con tapa esmerilada para preparación y dilución de soluciones con alta precisión volumétrica. || **Capacidad:** 500 ml.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/MATRAZ500.png"
      },
      {
        sku: "matraz-1000ml",
        attrs: { capacidad: "1000-ml" },
        name: "CAPACIDAD 1000 ML",
        description: "Matraz de vidrio de borosilicato con tapa esmerilada para preparación y dilución de soluciones de mayor volumen con alta precisión volumétrica. || **Capacidad:** 1000 ml.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/MATRAZ1000.png"
      }
    ]
  },
  {
    id: "escobillas-para-laboratorio",
    name: "ESCOBILLAS PARA LABORATORIO",
    type: "Utensilios",
    description: "Escobillas para limpieza de material de vidrio de laboratorio. Disponibles en distintos tipos, diámetros, longitudes y materiales, diseñadas para adaptarse a la forma interna de tubos, balones, pipetas y botellas. Garantizan una limpieza eficiente sin dañar las superficies, siendo ideales para laboratorios clínicos, universitarios y de investigación.",
    image: "/images/laboratorio/UTENSILIOS/ESCOBILLASCARD.png",

    attributeOrder: ["tipo", "diametro", "longitud", "material"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "pipeta", label: "Pipeta" },
          { id: "tubular", label: "Tubular" },
          { id: "balon", label: "Balón" },
          { id: "botella", label: "Botella" }
        ]
      },
      {
        id: "diametro",
        label: "Diámetro del cepillo",
        type: "single",
        values: [
          { id: "2-mm", label: "2 mm" },
          { id: "3-mm", label: "3 mm" },
          { id: "5-mm", label: "5 mm" },
          { id: "10-mm", label: "10 mm" },
          { id: "20-mm", label: "20 mm" },
          { id: "30-mm", label: "30 mm" },
          { id: "40-mm", label: "40 mm" },
          { id: "60-mm", label: "60 mm" },
          { id: "80-mm", label: "80 mm" }
        ]
      },
      {
        id: "longitud",
        label: "Longitud",
        type: "single",
        values: [
          { id: "20-cm", label: "20 cm" },
          { id: "30-cm", label: "30 cm" },
          { id: "50-cm", label: "50 cm" }
        ]
      },
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "nylon", label: "Nylon" },
          { id: "acero", label: "Acero" }
        ]
      }
    ],

    attributeRules: {
      pipeta: { diametro: ["2-mm", "3-mm", "5-mm"], longitud: ["30-cm", "50-cm"], material: ["nylon"] },
      tubular: { diametro: ["5-mm", "10-mm", "20-mm", "40-mm"], longitud: ["20-cm", "30-cm"], material: ["nylon"] },
      balon: { diametro: ["20-mm", "30-mm", "40-mm", "60-mm"], longitud: ["30-cm", "50-cm"], material: ["nylon"] },
      botella: { diametro: ["30-mm", "40-mm", "60-mm", "80-mm"], longitud: ["30-cm", "50-cm"], material: ["nylon", "acero"] }
    },

    variants: [

      // ─── PIPETA ───────────────────────────────────────────────
      { sku: "escobilla-pipeta-2mm-30cm-nylon", attrs: { tipo: "pipeta", diametro: "2-mm", longitud: "30-cm", material: "nylon" }, name: "PIPETA Ø2mm 30cm", description: "Escobilla tipo pipeta de nylon para limpieza de vidrio fino. || **Tipo:** Pipeta | **Diámetro:** 2 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_PIP_2_30.png" },
      { sku: "escobilla-pipeta-2mm-50cm-nylon", attrs: { tipo: "pipeta", diametro: "2-mm", longitud: "50-cm", material: "nylon" }, name: "PIPETA Ø2mm 50cm", description: "Escobilla tipo pipeta de nylon para limpieza de vidrio fino. || **Tipo:** Pipeta | **Diámetro:** 2 mm | **Longitud:** 50 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_PIP_2_50.png" },
      { sku: "escobilla-pipeta-3mm-30cm-nylon", attrs: { tipo: "pipeta", diametro: "3-mm", longitud: "30-cm", material: "nylon" }, name: "PIPETA Ø3mm 30cm", description: "Escobilla tipo pipeta de nylon para limpieza de vidrio fino. || **Tipo:** Pipeta | **Diámetro:** 3 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_PIP_3_30.png" },
      { sku: "escobilla-pipeta-3mm-50cm-nylon", attrs: { tipo: "pipeta", diametro: "3-mm", longitud: "50-cm", material: "nylon" }, name: "PIPETA Ø3mm 50cm", description: "Escobilla tipo pipeta de nylon para limpieza de vidrio fino. || **Tipo:** Pipeta | **Diámetro:** 3 mm | **Longitud:** 50 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_PIP_3_50.png" },
      { sku: "escobilla-pipeta-5mm-30cm-nylon", attrs: { tipo: "pipeta", diametro: "5-mm", longitud: "30-cm", material: "nylon" }, name: "PIPETA Ø5mm 30cm", description: "Escobilla tipo pipeta de nylon para limpieza de vidrio fino. || **Tipo:** Pipeta | **Diámetro:** 5 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_PIP_5_30.png" },
      { sku: "escobilla-pipeta-5mm-50cm-nylon", attrs: { tipo: "pipeta", diametro: "5-mm", longitud: "50-cm", material: "nylon" }, name: "PIPETA Ø5mm 50cm", description: "Escobilla tipo pipeta de nylon para limpieza de vidrio fino. || **Tipo:** Pipeta | **Diámetro:** 5 mm | **Longitud:** 50 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_PIP_5_50.png" },

      // ─── TUBULAR ──────────────────────────────────────────────

      { sku: "escobilla-tubular-10mm-20cm-nylon", attrs: { tipo: "tubular", diametro: "10-mm", longitud: "20-cm", material: "nylon" }, name: "TUBULAR Ø10mm 20cm", description: "Escobilla tubular de nylon para limpieza de tubos de laboratorio. || **Tipo:** Tubular | **Diámetro:** 10 mm | **Longitud:** 20 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_TUB_10_20.png" },
      { sku: "escobilla-tubular-10mm-30cm-nylon", attrs: { tipo: "tubular", diametro: "10-mm", longitud: "30-cm", material: "nylon" }, name: "TUBULAR Ø10mm 30cm", description: "Escobilla tubular de nylon para limpieza de tubos de laboratorio. || **Tipo:** Tubular | **Diámetro:** 10 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_TUB_10_30.png" },
      { sku: "escobilla-tubular-20mm-20cm-nylon", attrs: { tipo: "tubular", diametro: "20-mm", longitud: "20-cm", material: "nylon" }, name: "TUBULAR Ø20mm 20cm", description: "Escobilla tubular de nylon para limpieza de tubos de laboratorio. || **Tipo:** Tubular | **Diámetro:** 20 mm | **Longitud:** 20 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_TUB_20_20.png" },
      { sku: "escobilla-tubular-20mm-30cm-nylon", attrs: { tipo: "tubular", diametro: "20-mm", longitud: "30-cm", material: "nylon" }, name: "TUBULAR Ø20mm 30cm", description: "Escobilla tubular de nylon para limpieza de tubos de laboratorio. || **Tipo:** Tubular | **Diámetro:** 20 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_TUB_20_30.png" },
      { sku: "escobilla-tubular-40mm-20cm-nylon", attrs: { tipo: "tubular", diametro: "40-mm", longitud: "20-cm", material: "nylon" }, name: "TUBULAR Ø40mm 20cm", description: "Escobilla tubular de nylon para limpieza de tubos y probetas grandes. || **Tipo:** Tubular | **Diámetro:** 40 mm | **Longitud:** 20 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_TUB_40_20.png" },
      { sku: "escobilla-tubular-40mm-30cm-nylon", attrs: { tipo: "tubular", diametro: "40-mm", longitud: "30-cm", material: "nylon" }, name: "TUBULAR Ø40mm 30cm", description: "Escobilla tubular de nylon para limpieza de tubos y probetas grandes. || **Tipo:** Tubular | **Diámetro:** 40 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/UTENSILIOS/ESCOB_TUB_40_30.png" },

      // ─── BALÓN ────────────────────────────────────────────────
      { sku: "escobilla-balon-20mm-30cm-nylon", attrs: { tipo: "balon", diametro: "20-mm", longitud: "30-cm", material: "nylon" }, name: "BALÓN Ø20mm 30cm", description: "Escobilla tipo balón de nylon para limpieza de matraces de laboratorio. || **Tipo:** Balón | **Diámetro:** 20 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/balon-20mm-30cm-nylon.png" },
      { sku: "escobilla-balon-20mm-50cm-nylon", attrs: { tipo: "balon", diametro: "20-mm", longitud: "50-cm", material: "nylon" }, name: "BALÓN Ø20mm 50cm", description: "Escobilla tipo balón de nylon para limpieza de matraces de laboratorio. || **Tipo:** Balón | **Diámetro:** 20 mm | **Longitud:** 50 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/balon-20mm-50cm-nylon.png" },
      { sku: "escobilla-balon-30mm-30cm-nylon", attrs: { tipo: "balon", diametro: "30-mm", longitud: "30-cm", material: "nylon" }, name: "BALÓN Ø30mm 30cm", description: "Escobilla tipo balón de nylon para limpieza de matraces de laboratorio. || **Tipo:** Balón | **Diámetro:** 30 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/balon-30mm-30cm-nylon.png" },
      { sku: "escobilla-balon-30mm-50cm-nylon", attrs: { tipo: "balon", diametro: "30-mm", longitud: "50-cm", material: "nylon" }, name: "BALÓN Ø30mm 50cm", description: "Escobilla tipo balón de nylon para limpieza de matraces de laboratorio. || **Tipo:** Balón | **Diámetro:** 30 mm | **Longitud:** 50 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/balon-30mm-50cm-nylon.png" },
      { sku: "escobilla-balon-40mm-30cm-nylon", attrs: { tipo: "balon", diametro: "40-mm", longitud: "30-cm", material: "nylon" }, name: "BALÓN Ø40mm 30cm", description: "Escobilla tipo balón de nylon para limpieza de matraces de laboratorio. || **Tipo:** Balón | **Diámetro:** 40 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/balon-40mm-30cm-nylon.png" },
      { sku: "escobilla-balon-40mm-50cm-nylon", attrs: { tipo: "balon", diametro: "40-mm", longitud: "50-cm", material: "nylon" }, name: "BALÓN Ø40mm 50cm", description: "Escobilla tipo balón de nylon para limpieza de matraces de laboratorio. || **Tipo:** Balón | **Diámetro:** 40 mm | **Longitud:** 50 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/balon-40mm-50cm-nylon.png" },
      { sku: "escobilla-balon-60mm-30cm-nylon", attrs: { tipo: "balon", diametro: "60-mm", longitud: "30-cm", material: "nylon" }, name: "BALÓN Ø60mm 30cm", description: "Escobilla tipo balón de nylon para limpieza de matraces grandes de laboratorio. || **Tipo:** Balón | **Diámetro:** 60 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/balon-60mm-30cm-nylon.png" },
      { sku: "escobilla-balon-60mm-50cm-nylon", attrs: { tipo: "balon", diametro: "60-mm", longitud: "50-cm", material: "nylon" }, name: "BALÓN Ø60mm 50cm", description: "Escobilla tipo balón de nylon para limpieza de matraces grandes de laboratorio. || **Tipo:** Balón | **Diámetro:** 60 mm | **Longitud:** 50 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/balon-60mm-50cm-nylon.png" },

      // ─── BOTELLA ──────────────────────────────────────────────
      { sku: "escobilla-botella-30mm-30cm-nylon", attrs: { tipo: "botella", diametro: "30-mm", longitud: "30-cm", material: "nylon" }, name: "BOTELLA Ø30mm 30cm NYLON", description: "Escobilla tipo botella de nylon para limpieza de botellas de laboratorio. || **Tipo:** Botella | **Diámetro:** 30 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-30mm-30cm-nylon.png" },
      { sku: "escobilla-botella-30mm-30cm-acero", attrs: { tipo: "botella", diametro: "30-mm", longitud: "30-cm", material: "acero" }, name: "BOTELLA Ø30mm 30cm ACERO", description: "Escobilla tipo botella de acero para limpieza intensiva de botellas de laboratorio. || **Tipo:** Botella | **Diámetro:** 30 mm | **Longitud:** 30 cm | **Material:** Acero.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-30mm-30cm-acero.png" },
      { sku: "escobilla-botella-30mm-50cm-nylon", attrs: { tipo: "botella", diametro: "30-mm", longitud: "50-cm", material: "nylon" }, name: "BOTELLA Ø30mm 50cm NYLON", description: "Escobilla tipo botella de nylon para limpieza de botellas de laboratorio. || **Tipo:** Botella | **Diámetro:** 30 mm | **Longitud:** 50 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-30mm-50cm-nylon.png" },
      { sku: "escobilla-botella-30mm-50cm-acero", attrs: { tipo: "botella", diametro: "30-mm", longitud: "50-cm", material: "acero" }, name: "BOTELLA Ø30mm 50cm ACERO", description: "Escobilla tipo botella de acero para limpieza intensiva de botellas de laboratorio. || **Tipo:** Botella | **Diámetro:** 30 mm | **Longitud:** 50 cm | **Material:** Acero.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-30mm-50cm-acero.png" },
      { sku: "escobilla-botella-40mm-30cm-nylon", attrs: { tipo: "botella", diametro: "40-mm", longitud: "30-cm", material: "nylon" }, name: "BOTELLA Ø40mm 30cm NYLON", description: "Escobilla tipo botella de nylon para limpieza de botellas de laboratorio. || **Tipo:** Botella | **Diámetro:** 40 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-40mm-30cm-nylon.png" },
      { sku: "escobilla-botella-40mm-30cm-acero", attrs: { tipo: "botella", diametro: "40-mm", longitud: "30-cm", material: "acero" }, name: "BOTELLA Ø40mm 30cm ACERO", description: "Escobilla tipo botella de acero para limpieza intensiva de botellas de laboratorio. || **Tipo:** Botella | **Diámetro:** 40 mm | **Longitud:** 30 cm | **Material:** Acero.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-40mm-30cm-acero.png" },
      { sku: "escobilla-botella-40mm-50cm-nylon", attrs: { tipo: "botella", diametro: "40-mm", longitud: "50-cm", material: "nylon" }, name: "BOTELLA Ø40mm 50cm NYLON", description: "Escobilla tipo botella de nylon para limpieza de botellas de laboratorio. || **Tipo:** Botella | **Diámetro:** 40 mm | **Longitud:** 50 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-40mm-50cm-nylon.png" },
      { sku: "escobilla-botella-40mm-50cm-acero", attrs: { tipo: "botella", diametro: "40-mm", longitud: "50-cm", material: "acero" }, name: "BOTELLA Ø40mm 50cm ACERO", description: "Escobilla tipo botella de acero para limpieza intensiva de botellas de laboratorio. || **Tipo:** Botella | **Diámetro:** 40 mm | **Longitud:** 50 cm | **Material:** Acero.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-40mm-50cm-acero.png" },
      { sku: "escobilla-botella-60mm-30cm-nylon", attrs: { tipo: "botella", diametro: "60-mm", longitud: "30-cm", material: "nylon" }, name: "BOTELLA Ø60mm 30cm NYLON", description: "Escobilla tipo botella de nylon para limpieza de botellas grandes de laboratorio. || **Tipo:** Botella | **Diámetro:** 60 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-60mm-30cm-nylon.png" },
      { sku: "escobilla-botella-60mm-30cm-acero", attrs: { tipo: "botella", diametro: "60-mm", longitud: "30-cm", material: "acero" }, name: "BOTELLA Ø60mm 30cm ACERO", description: "Escobilla tipo botella de acero para limpieza intensiva de botellas grandes de laboratorio. || **Tipo:** Botella | **Diámetro:** 60 mm | **Longitud:** 30 cm | **Material:** Acero.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-60mm-30cm-acero.png" },
      { sku: "escobilla-botella-60mm-50cm-nylon", attrs: { tipo: "botella", diametro: "60-mm", longitud: "50-cm", material: "nylon" }, name: "BOTELLA Ø60mm 50cm NYLON", description: "Escobilla tipo botella de nylon para limpieza de botellas grandes de laboratorio. || **Tipo:** Botella | **Diámetro:** 60 mm | **Longitud:** 50 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-60mm-50cm-nylon.png" },
      { sku: "escobilla-botella-60mm-50cm-acero", attrs: { tipo: "botella", diametro: "60-mm", longitud: "50-cm", material: "acero" }, name: "BOTELLA Ø60mm 50cm ACERO", description: "Escobilla tipo botella de acero para limpieza intensiva de botellas grandes de laboratorio. || **Tipo:** Botella | **Diámetro:** 60 mm | **Longitud:** 50 cm | **Material:** Acero.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-60mm-50cm-acero.png" },
      { sku: "escobilla-botella-80mm-30cm-nylon", attrs: { tipo: "botella", diametro: "80-mm", longitud: "30-cm", material: "nylon" }, name: "BOTELLA Ø80mm 30cm NYLON", description: "Escobilla tipo botella de nylon para limpieza de botellas grandes de laboratorio. || **Tipo:** Botella | **Diámetro:** 80 mm | **Longitud:** 30 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-80mm-30cm-nylon.png" },
      { sku: "escobilla-botella-80mm-30cm-acero", attrs: { tipo: "botella", diametro: "80-mm", longitud: "30-cm", material: "acero" }, name: "BOTELLA Ø80mm 30cm ACERO", description: "Escobilla tipo botella de acero para limpieza intensiva de botellas grandes de laboratorio. || **Tipo:** Botella | **Diámetro:** 80 mm | **Longitud:** 30 cm | **Material:** Acero.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-80mm-30cm-acero.png" },
      { sku: "escobilla-botella-80mm-50cm-nylon", attrs: { tipo: "botella", diametro: "80-mm", longitud: "50-cm", material: "nylon" }, name: "BOTELLA Ø80mm 50cm NYLON", description: "Escobilla tipo botella de nylon para limpieza de botellas grandes de laboratorio. || **Tipo:** Botella | **Diámetro:** 80 mm | **Longitud:** 50 cm | **Material:** Nylon.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-80mm-50cm-nylon.png" },
      { sku: "escobilla-botella-80mm-50cm-acero", attrs: { tipo: "botella", diametro: "80-mm", longitud: "50-cm", material: "acero" }, name: "BOTELLA Ø80mm 50cm ACERO", description: "Escobilla tipo botella de acero para limpieza intensiva de botellas grandes de laboratorio. || **Tipo:** Botella | **Diámetro:** 80 mm | **Longitud:** 50 cm | **Material:** Acero.", price: 5, image: "/images/laboratorio/ESCOBILLAS/botella-80mm-50cm-acero.png" }
    ]
  },
  {
    id: "frascos-vidrio",
    name: "FRASCOS DE VIDRIO",
    type: "Utensilios",
    description: "Frascos de vidrio para laboratorio y farmacia con múltiples variantes combinables. Disponibles en distintos colores, capacidades, tipos de tapa y colores de tapa, ideales para almacenamiento, dispensación y manejo de soluciones en laboratorios clínicos, universitarios y de investigación.",
    image: "/images/laboratorio/UTENSILIOS/FRASCOS.png",

    attributeOrder: ["colorFrasco", "capacidad", "tipTapa", "colorTapa"],

    attributes: [
      {
        id: "colorFrasco",
        label: "Color de frasco",
        type: "single",
        values: [
          { id: "transparente", label: "Transparente" },
          { id: "pavonada", label: "Pavonada" },
          { id: "negra", label: "Negra" },
          { id: "verde", label: "Verde" },
          { id: "azul", label: "Azul" },
          { id: "ambar", label: "Ámbar" }
        ]
      },
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "5ml", label: "5 ml" },
          { id: "10ml", label: "10 ml" },
          { id: "15ml", label: "15 ml" },
          { id: "20ml", label: "20 ml" },
          { id: "30ml", label: "30 ml" },
          { id: "50ml", label: "50 ml" },
          { id: "100ml", label: "100 ml" },
          { id: "250ml", label: "250 ml" },
          { id: "500ml", label: "500 ml" },
          { id: "1000ml", label: "1000 ml" }
        ]
      },
      {
        id: "tipoTapa",
        label: "Tipo de tapa",
        type: "single",
        values: [
          { id: "tapa-tapon", label: "Tapa y tapón" },
          { id: "spray", label: "Spray" },
          { id: "gotero", label: "Gotero" },
          { id: "esmerilada", label: "Esmerilada" },
          { id: "pistola", label: "Pistola" },
          { id: "sifon", label: "Sifón" },
          { id: "tapa-plastica", label: "Tapa plástica" }
        ]
      },
      {
        id: "colorTapa",
        label: "Color de tapa",
        type: "single",
        values: [
          { id: "blanco", label: "Blanco" },
          { id: "negro", label: "Negro" }
        ]
      }
    ],

    variants: [

      // ─── 5 ml ─────────────────────────────────────────────────
      { sku: "FR-CL-5-TTP-BK", attrs: { colorFrasco: "transparente", capacidad: "5ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-5-TTP-BK", attrs: { colorFrasco: "verde", capacidad: "5ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-5-TTP-BK", attrs: { colorFrasco: "azul", capacidad: "5ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-5-TTP-BK", attrs: { colorFrasco: "ambar", capacidad: "5ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-5-TTP-WH", attrs: { colorFrasco: "transparente", capacidad: "5ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-5-TTP-WH", attrs: { colorFrasco: "verde", capacidad: "5ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-5-TTP-WH", attrs: { colorFrasco: "azul", capacidad: "5ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-5-TTP-WH", attrs: { colorFrasco: "ambar", capacidad: "5ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-5-SPR-BK", attrs: { colorFrasco: "transparente", capacidad: "5ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-5-SPR-BK", attrs: { colorFrasco: "verde", capacidad: "5ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-5-SPR-BK", attrs: { colorFrasco: "azul", capacidad: "5ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-5-SPR-BK", attrs: { colorFrasco: "ambar", capacidad: "5ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-5-SPR-WH", attrs: { colorFrasco: "transparente", capacidad: "5ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-5-SPR-WH", attrs: { colorFrasco: "verde", capacidad: "5ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-5-SPR-WH", attrs: { colorFrasco: "azul", capacidad: "5ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-5-SPR-WH", attrs: { colorFrasco: "ambar", capacidad: "5ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-5-GOT-BK", attrs: { colorFrasco: "transparente", capacidad: "5ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-5-GOT-BK", attrs: { colorFrasco: "verde", capacidad: "5ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-5-GOT-BK", attrs: { colorFrasco: "azul", capacidad: "5ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-5-GOT-BK", attrs: { colorFrasco: "ambar", capacidad: "5ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-5-GOT-WH", attrs: { colorFrasco: "transparente", capacidad: "5ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-5-GOT-WH", attrs: { colorFrasco: "verde", capacidad: "5ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-5-GOT-WH", attrs: { colorFrasco: "azul", capacidad: "5ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-5-GOT-WH", attrs: { colorFrasco: "ambar", capacidad: "5ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },

      // ─── 10 ml ────────────────────────────────────────────────
      { sku: "FR-CL-10-TTP-BK", attrs: { colorFrasco: "transparente", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-PV-10-TTP-BK", attrs: { colorFrasco: "pavonada", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BK-10-TTP-BK", attrs: { colorFrasco: "negra", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-10-TTP-BK", attrs: { colorFrasco: "verde", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-10-TTP-BK", attrs: { colorFrasco: "azul", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-10-TTP-BK", attrs: { colorFrasco: "ambar", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-10-TTP-WH", attrs: { colorFrasco: "transparente", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-PV-10-TTP-WH", attrs: { colorFrasco: "pavonada", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BK-10-TTP-WH", attrs: { colorFrasco: "negra", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-10-TTP-WH", attrs: { colorFrasco: "verde", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-10-TTP-WH", attrs: { colorFrasco: "azul", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-10-TTP-WH", attrs: { colorFrasco: "ambar", capacidad: "10ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-10-SPR-BK", attrs: { colorFrasco: "transparente", capacidad: "10ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-PV-10-SPR-BK", attrs: { colorFrasco: "pavonada", capacidad: "10ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BK-10-SPR-BK", attrs: { colorFrasco: "negra", capacidad: "10ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-10-SPR-BK", attrs: { colorFrasco: "verde", capacidad: "10ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-10-SPR-BK", attrs: { colorFrasco: "azul", capacidad: "10ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-10-SPR-BK", attrs: { colorFrasco: "ambar", capacidad: "10ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-10-SPR-WH", attrs: { colorFrasco: "transparente", capacidad: "10ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-PV-10-SPR-WH", attrs: { colorFrasco: "pavonada", capacidad: "10ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BK-10-SPR-WH", attrs: { colorFrasco: "negra", capacidad: "10ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-10-SPR-WH", attrs: { colorFrasco: "verde", capacidad: "10ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-10-SPR-WH", attrs: { colorFrasco: "azul", capacidad: "10ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-10-SPR-WH", attrs: { colorFrasco: "ambar", capacidad: "10ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-10-GOT-BK", attrs: { colorFrasco: "transparente", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-PV-10-GOT-BK", attrs: { colorFrasco: "pavonada", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BK-10-GOT-BK", attrs: { colorFrasco: "negra", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-10-GOT-BK", attrs: { colorFrasco: "verde", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-10-GOT-BK", attrs: { colorFrasco: "azul", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-10-GOT-BK", attrs: { colorFrasco: "ambar", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-10-GOT-WH", attrs: { colorFrasco: "transparente", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-PV-10-GOT-WH", attrs: { colorFrasco: "pavonada", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BK-10-GOT-WH", attrs: { colorFrasco: "negra", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-10-GOT-WH", attrs: { colorFrasco: "verde", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-10-GOT-WH", attrs: { colorFrasco: "azul", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-10-GOT-WH", attrs: { colorFrasco: "ambar", capacidad: "10ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },

      // ─── 15 ml ────────────────────────────────────────────────
      { sku: "FR-CL-15-TTP-BK", attrs: { colorFrasco: "transparente", capacidad: "15ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-15-TTP-BK", attrs: { colorFrasco: "verde", capacidad: "15ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-15-TTP-BK", attrs: { colorFrasco: "azul", capacidad: "15ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-15-TTP-BK", attrs: { colorFrasco: "ambar", capacidad: "15ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-15-TTP-WH", attrs: { colorFrasco: "transparente", capacidad: "15ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-15-TTP-WH", attrs: { colorFrasco: "verde", capacidad: "15ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-15-TTP-WH", attrs: { colorFrasco: "azul", capacidad: "15ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-15-TTP-WH", attrs: { colorFrasco: "ambar", capacidad: "15ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-15-SPR-BK", attrs: { colorFrasco: "transparente", capacidad: "15ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-15-SPR-BK", attrs: { colorFrasco: "verde", capacidad: "15ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-15-SPR-BK", attrs: { colorFrasco: "azul", capacidad: "15ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-15-SPR-BK", attrs: { colorFrasco: "ambar", capacidad: "15ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-15-SPR-WH", attrs: { colorFrasco: "transparente", capacidad: "15ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-15-SPR-WH", attrs: { colorFrasco: "verde", capacidad: "15ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-15-SPR-WH", attrs: { colorFrasco: "azul", capacidad: "15ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-15-SPR-WH", attrs: { colorFrasco: "ambar", capacidad: "15ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-15-GOT-BK", attrs: { colorFrasco: "transparente", capacidad: "15ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-15-GOT-BK", attrs: { colorFrasco: "verde", capacidad: "15ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-15-GOT-BK", attrs: { colorFrasco: "azul", capacidad: "15ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-15-GOT-BK", attrs: { colorFrasco: "ambar", capacidad: "15ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-15-GOT-WH", attrs: { colorFrasco: "transparente", capacidad: "15ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-15-GOT-WH", attrs: { colorFrasco: "verde", capacidad: "15ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-15-GOT-WH", attrs: { colorFrasco: "azul", capacidad: "15ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-15-GOT-WH", attrs: { colorFrasco: "ambar", capacidad: "15ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },

      // ─── 20 ml ────────────────────────────────────────────────
      { sku: "FR-CL-20-TTP-BK", attrs: { colorFrasco: "transparente", capacidad: "20ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-20-TTP-BK", attrs: { colorFrasco: "verde", capacidad: "20ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-20-TTP-BK", attrs: { colorFrasco: "azul", capacidad: "20ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-20-TTP-BK", attrs: { colorFrasco: "ambar", capacidad: "20ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-20-TTP-WH", attrs: { colorFrasco: "transparente", capacidad: "20ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-20-TTP-WH", attrs: { colorFrasco: "verde", capacidad: "20ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-20-TTP-WH", attrs: { colorFrasco: "azul", capacidad: "20ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-20-TTP-WH", attrs: { colorFrasco: "ambar", capacidad: "20ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-20-SPR-BK", attrs: { colorFrasco: "transparente", capacidad: "20ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-20-SPR-BK", attrs: { colorFrasco: "verde", capacidad: "20ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-20-SPR-BK", attrs: { colorFrasco: "azul", capacidad: "20ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-20-SPR-BK", attrs: { colorFrasco: "ambar", capacidad: "20ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-20-SPR-WH", attrs: { colorFrasco: "transparente", capacidad: "20ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-20-SPR-WH", attrs: { colorFrasco: "verde", capacidad: "20ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-20-SPR-WH", attrs: { colorFrasco: "azul", capacidad: "20ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-20-SPR-WH", attrs: { colorFrasco: "ambar", capacidad: "20ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-20-GOT-BK", attrs: { colorFrasco: "transparente", capacidad: "20ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-20-GOT-BK", attrs: { colorFrasco: "verde", capacidad: "20ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-20-GOT-BK", attrs: { colorFrasco: "azul", capacidad: "20ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-20-GOT-BK", attrs: { colorFrasco: "ambar", capacidad: "20ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-20-GOT-WH", attrs: { colorFrasco: "transparente", capacidad: "20ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-20-GOT-WH", attrs: { colorFrasco: "verde", capacidad: "20ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-20-GOT-WH", attrs: { colorFrasco: "azul", capacidad: "20ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-20-GOT-WH", attrs: { colorFrasco: "ambar", capacidad: "20ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },

      // ─── 30 ml ────────────────────────────────────────────────
      { sku: "FR-CL-30-TTP-BK", attrs: { colorFrasco: "transparente", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-PV-30-TTP-BK", attrs: { colorFrasco: "pavonada", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BK-30-TTP-BK", attrs: { colorFrasco: "negra", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-30-TTP-BK", attrs: { colorFrasco: "verde", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-30-TTP-BK", attrs: { colorFrasco: "azul", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-30-TTP-BK", attrs: { colorFrasco: "ambar", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-30-TTP-WH", attrs: { colorFrasco: "transparente", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-PV-30-TTP-WH", attrs: { colorFrasco: "pavonada", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BK-30-TTP-WH", attrs: { colorFrasco: "negra", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-30-TTP-WH", attrs: { colorFrasco: "verde", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-30-TTP-WH", attrs: { colorFrasco: "azul", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-30-TTP-WH", attrs: { colorFrasco: "ambar", capacidad: "30ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-30-SPR-BK", attrs: { colorFrasco: "transparente", capacidad: "30ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-PV-30-SPR-BK", attrs: { colorFrasco: "pavonada", capacidad: "30ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BK-30-SPR-BK", attrs: { colorFrasco: "negra", capacidad: "30ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-30-SPR-BK", attrs: { colorFrasco: "verde", capacidad: "30ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-30-SPR-BK", attrs: { colorFrasco: "azul", capacidad: "30ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-30-SPR-BK", attrs: { colorFrasco: "ambar", capacidad: "30ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-30-SPR-WH", attrs: { colorFrasco: "transparente", capacidad: "30ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-PV-30-SPR-WH", attrs: { colorFrasco: "pavonada", capacidad: "30ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BK-30-SPR-WH", attrs: { colorFrasco: "negra", capacidad: "30ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-30-SPR-WH", attrs: { colorFrasco: "verde", capacidad: "30ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-30-SPR-WH", attrs: { colorFrasco: "azul", capacidad: "30ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-30-SPR-WH", attrs: { colorFrasco: "ambar", capacidad: "30ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-30-GOT-BK", attrs: { colorFrasco: "transparente", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-PV-30-GOT-BK", attrs: { colorFrasco: "pavonada", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BK-30-GOT-BK", attrs: { colorFrasco: "negra", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-30-GOT-BK", attrs: { colorFrasco: "verde", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-30-GOT-BK", attrs: { colorFrasco: "azul", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-30-GOT-BK", attrs: { colorFrasco: "ambar", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-30-GOT-WH", attrs: { colorFrasco: "transparente", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-PV-30-GOT-WH", attrs: { colorFrasco: "pavonada", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BK-30-GOT-WH", attrs: { colorFrasco: "negra", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-30-GOT-WH", attrs: { colorFrasco: "verde", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-30-GOT-WH", attrs: { colorFrasco: "azul", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-30-GOT-WH", attrs: { colorFrasco: "ambar", capacidad: "30ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },

      // ─── 50 ml ────────────────────────────────────────────────
      { sku: "FR-CL-50-TTP-BK", attrs: { colorFrasco: "transparente", capacidad: "50ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-50-TTP-BK", attrs: { colorFrasco: "verde", capacidad: "50ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-50-TTP-BK", attrs: { colorFrasco: "azul", capacidad: "50ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-50-TTP-BK", attrs: { colorFrasco: "ambar", capacidad: "50ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-50-TTP-WH", attrs: { colorFrasco: "transparente", capacidad: "50ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-50-TTP-WH", attrs: { colorFrasco: "verde", capacidad: "50ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-50-TTP-WH", attrs: { colorFrasco: "azul", capacidad: "50ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-50-TTP-WH", attrs: { colorFrasco: "ambar", capacidad: "50ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-50-SPR-BK", attrs: { colorFrasco: "transparente", capacidad: "50ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-50-SPR-BK", attrs: { colorFrasco: "verde", capacidad: "50ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-50-SPR-BK", attrs: { colorFrasco: "azul", capacidad: "50ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-50-SPR-BK", attrs: { colorFrasco: "ambar", capacidad: "50ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-50-SPR-WH", attrs: { colorFrasco: "transparente", capacidad: "50ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-50-SPR-WH", attrs: { colorFrasco: "verde", capacidad: "50ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-50-SPR-WH", attrs: { colorFrasco: "azul", capacidad: "50ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-50-SPR-WH", attrs: { colorFrasco: "ambar", capacidad: "50ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-50-GOT-BK", attrs: { colorFrasco: "transparente", capacidad: "50ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-50-GOT-BK", attrs: { colorFrasco: "verde", capacidad: "50ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-50-GOT-BK", attrs: { colorFrasco: "azul", capacidad: "50ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-50-GOT-BK", attrs: { colorFrasco: "ambar", capacidad: "50ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-50-GOT-WH", attrs: { colorFrasco: "transparente", capacidad: "50ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-50-GOT-WH", attrs: { colorFrasco: "verde", capacidad: "50ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-50-GOT-WH", attrs: { colorFrasco: "azul", capacidad: "50ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-50-GOT-WH", attrs: { colorFrasco: "ambar", capacidad: "50ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },

      // ─── 100 ml ───────────────────────────────────────────────
      { sku: "FR-CL-100-TTP-BK", attrs: { colorFrasco: "transparente", capacidad: "100ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-100-TTP-BK", attrs: { colorFrasco: "verde", capacidad: "100ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-100-TTP-BK", attrs: { colorFrasco: "azul", capacidad: "100ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-100-TTP-BK", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-100-TTP-WH", attrs: { colorFrasco: "transparente", capacidad: "100ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-100-TTP-WH", attrs: { colorFrasco: "verde", capacidad: "100ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-100-TTP-WH", attrs: { colorFrasco: "azul", capacidad: "100ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-100-TTP-WH", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-100-SPR-BK", attrs: { colorFrasco: "transparente", capacidad: "100ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-100-SPR-BK", attrs: { colorFrasco: "verde", capacidad: "100ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-100-SPR-BK", attrs: { colorFrasco: "azul", capacidad: "100ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-100-SPR-BK", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-100-SPR-WH", attrs: { colorFrasco: "transparente", capacidad: "100ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-100-SPR-WH", attrs: { colorFrasco: "verde", capacidad: "100ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-100-SPR-WH", attrs: { colorFrasco: "azul", capacidad: "100ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-100-SPR-WH", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-100-GOT-BK", attrs: { colorFrasco: "transparente", capacidad: "100ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-100-GOT-BK", attrs: { colorFrasco: "verde", capacidad: "100ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-100-GOT-BK", attrs: { colorFrasco: "azul", capacidad: "100ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-100-GOT-BK", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "gotero", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-100-GOT-WH", attrs: { colorFrasco: "transparente", capacidad: "100ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-100-GOT-WH", attrs: { colorFrasco: "verde", capacidad: "100ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-100-GOT-WH", attrs: { colorFrasco: "azul", capacidad: "100ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-100-GOT-WH", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "gotero", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-100-ESM-BK", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "esmerilada", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-100-ESM-WH", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "esmerilada", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-100-PIS-BK", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "pistola", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-100-PIS-WH", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "pistola", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-100-SIF-BK", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "sifon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-100-SIF-WH", attrs: { colorFrasco: "ambar", capacidad: "100ml", tipoTapa: "sifon", colorTapa: "blanco" }, price: 2.5 },

      // ─── 250 ml ───────────────────────────────────────────────
      { sku: "FR-CL-250-TPL-BK", attrs: { colorFrasco: "transparente", capacidad: "250ml", tipoTapa: "tapa-plastica", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-250-TPL-WH", attrs: { colorFrasco: "transparente", capacidad: "250ml", tipoTapa: "tapa-plastica", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-250-TTP-BK", attrs: { colorFrasco: "transparente", capacidad: "250ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-250-TTP-BK", attrs: { colorFrasco: "verde", capacidad: "250ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-250-TTP-BK", attrs: { colorFrasco: "azul", capacidad: "250ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-250-TTP-BK", attrs: { colorFrasco: "ambar", capacidad: "250ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-250-TTP-WH", attrs: { colorFrasco: "transparente", capacidad: "250ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-250-TTP-WH", attrs: { colorFrasco: "verde", capacidad: "250ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-250-TTP-WH", attrs: { colorFrasco: "azul", capacidad: "250ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-250-TTP-WH", attrs: { colorFrasco: "ambar", capacidad: "250ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-250-SPR-BK", attrs: { colorFrasco: "transparente", capacidad: "250ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-250-SPR-BK", attrs: { colorFrasco: "verde", capacidad: "250ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-250-SPR-BK", attrs: { colorFrasco: "azul", capacidad: "250ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-250-SPR-BK", attrs: { colorFrasco: "ambar", capacidad: "250ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-250-SPR-WH", attrs: { colorFrasco: "transparente", capacidad: "250ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-250-SPR-WH", attrs: { colorFrasco: "verde", capacidad: "250ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-250-SPR-WH", attrs: { colorFrasco: "azul", capacidad: "250ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-250-SPR-WH", attrs: { colorFrasco: "ambar", capacidad: "250ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-250-ESM-BK", attrs: { colorFrasco: "ambar", capacidad: "250ml", tipoTapa: "esmerilada", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-250-ESM-WH", attrs: { colorFrasco: "ambar", capacidad: "250ml", tipoTapa: "esmerilada", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-250-PIS-BK", attrs: { colorFrasco: "transparente", capacidad: "250ml", tipoTapa: "pistola", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-250-PIS-BK", attrs: { colorFrasco: "verde", capacidad: "250ml", tipoTapa: "pistola", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-250-PIS-BK", attrs: { colorFrasco: "azul", capacidad: "250ml", tipoTapa: "pistola", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-250-PIS-BK", attrs: { colorFrasco: "ambar", capacidad: "250ml", tipoTapa: "pistola", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-250-PIS-WH", attrs: { colorFrasco: "transparente", capacidad: "250ml", tipoTapa: "pistola", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-250-PIS-WH", attrs: { colorFrasco: "verde", capacidad: "250ml", tipoTapa: "pistola", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-250-PIS-WH", attrs: { colorFrasco: "azul", capacidad: "250ml", tipoTapa: "pistola", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-250-PIS-WH", attrs: { colorFrasco: "ambar", capacidad: "250ml", tipoTapa: "pistola", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-250-SIF-BK", attrs: { colorFrasco: "transparente", capacidad: "250ml", tipoTapa: "sifon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-GR-250-SIF-BK", attrs: { colorFrasco: "verde", capacidad: "250ml", tipoTapa: "sifon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-250-SIF-BK", attrs: { colorFrasco: "azul", capacidad: "250ml", tipoTapa: "sifon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-250-SIF-BK", attrs: { colorFrasco: "ambar", capacidad: "250ml", tipoTapa: "sifon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-250-SIF-WH", attrs: { colorFrasco: "transparente", capacidad: "250ml", tipoTapa: "sifon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-GR-250-SIF-WH", attrs: { colorFrasco: "verde", capacidad: "250ml", tipoTapa: "sifon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-250-SIF-WH", attrs: { colorFrasco: "azul", capacidad: "250ml", tipoTapa: "sifon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-250-SIF-WH", attrs: { colorFrasco: "ambar", capacidad: "250ml", tipoTapa: "sifon", colorTapa: "blanco" }, price: 2.5 },

      // ─── 500 ml ───────────────────────────────────────────────
      { sku: "FR-CL-500-TPL-BK", attrs: { colorFrasco: "transparente", capacidad: "500ml", tipoTapa: "tapa-plastica", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-500-TPL-WH", attrs: { colorFrasco: "transparente", capacidad: "500ml", tipoTapa: "tapa-plastica", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-500-TTP-BK", attrs: { colorFrasco: "azul", capacidad: "500ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-500-TTP-BK", attrs: { colorFrasco: "ambar", capacidad: "500ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-500-TTP-WH", attrs: { colorFrasco: "azul", capacidad: "500ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-500-TTP-WH", attrs: { colorFrasco: "ambar", capacidad: "500ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-500-SPR-BK", attrs: { colorFrasco: "transparente", capacidad: "500ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-500-SPR-BK", attrs: { colorFrasco: "azul", capacidad: "500ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-500-SPR-BK", attrs: { colorFrasco: "ambar", capacidad: "500ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-500-SPR-WH", attrs: { colorFrasco: "transparente", capacidad: "500ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-500-SPR-WH", attrs: { colorFrasco: "azul", capacidad: "500ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-500-SPR-WH", attrs: { colorFrasco: "ambar", capacidad: "500ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-500-ESM-BK", attrs: { colorFrasco: "ambar", capacidad: "500ml", tipoTapa: "esmerilada", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-500-ESM-WH", attrs: { colorFrasco: "ambar", capacidad: "500ml", tipoTapa: "esmerilada", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-500-PIS-BK", attrs: { colorFrasco: "transparente", capacidad: "500ml", tipoTapa: "pistola", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-500-PIS-BK", attrs: { colorFrasco: "azul", capacidad: "500ml", tipoTapa: "pistola", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-500-PIS-BK", attrs: { colorFrasco: "ambar", capacidad: "500ml", tipoTapa: "pistola", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-500-PIS-WH", attrs: { colorFrasco: "transparente", capacidad: "500ml", tipoTapa: "pistola", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-500-PIS-WH", attrs: { colorFrasco: "azul", capacidad: "500ml", tipoTapa: "pistola", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-500-PIS-WH", attrs: { colorFrasco: "ambar", capacidad: "500ml", tipoTapa: "pistola", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-500-SIF-BK", attrs: { colorFrasco: "transparente", capacidad: "500ml", tipoTapa: "sifon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-BL-500-SIF-BK", attrs: { colorFrasco: "azul", capacidad: "500ml", tipoTapa: "sifon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-500-SIF-BK", attrs: { colorFrasco: "ambar", capacidad: "500ml", tipoTapa: "sifon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-500-SIF-WH", attrs: { colorFrasco: "transparente", capacidad: "500ml", tipoTapa: "sifon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-BL-500-SIF-WH", attrs: { colorFrasco: "azul", capacidad: "500ml", tipoTapa: "sifon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-500-SIF-WH", attrs: { colorFrasco: "ambar", capacidad: "500ml", tipoTapa: "sifon", colorTapa: "blanco" }, price: 2.5 },

      // ─── 1000 ml ──────────────────────────────────────────────
      { sku: "FR-CL-1000-TPL-BK", attrs: { colorFrasco: "transparente", capacidad: "1000ml", tipoTapa: "tapa-plastica", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-1000-TPL-WH", attrs: { colorFrasco: "transparente", capacidad: "1000ml", tipoTapa: "tapa-plastica", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-1000-TTP-BK", attrs: { colorFrasco: "ambar", capacidad: "1000ml", tipoTapa: "tapa-tapon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-1000-TTP-WH", attrs: { colorFrasco: "ambar", capacidad: "1000ml", tipoTapa: "tapa-tapon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-1000-SPR-BK", attrs: { colorFrasco: "transparente", capacidad: "1000ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-1000-SPR-BK", attrs: { colorFrasco: "ambar", capacidad: "1000ml", tipoTapa: "spray", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-1000-SPR-WH", attrs: { colorFrasco: "transparente", capacidad: "1000ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-1000-SPR-WH", attrs: { colorFrasco: "ambar", capacidad: "1000ml", tipoTapa: "spray", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-1000-ESM-BK", attrs: { colorFrasco: "ambar", capacidad: "1000ml", tipoTapa: "esmerilada", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-1000-ESM-WH", attrs: { colorFrasco: "ambar", capacidad: "1000ml", tipoTapa: "esmerilada", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-1000-PIS-BK", attrs: { colorFrasco: "transparente", capacidad: "1000ml", tipoTapa: "pistola", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-1000-PIS-BK", attrs: { colorFrasco: "ambar", capacidad: "1000ml", tipoTapa: "pistola", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-1000-PIS-WH", attrs: { colorFrasco: "transparente", capacidad: "1000ml", tipoTapa: "pistola", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-1000-PIS-WH", attrs: { colorFrasco: "ambar", capacidad: "1000ml", tipoTapa: "pistola", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-CL-1000-SIF-BK", attrs: { colorFrasco: "transparente", capacidad: "1000ml", tipoTapa: "sifon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-AM-1000-SIF-BK", attrs: { colorFrasco: "ambar", capacidad: "1000ml", tipoTapa: "sifon", colorTapa: "negro" }, price: 2.5 },
      { sku: "FR-CL-1000-SIF-WH", attrs: { colorFrasco: "transparente", capacidad: "1000ml", tipoTapa: "sifon", colorTapa: "blanco" }, price: 2.5 },
      { sku: "FR-AM-1000-SIF-WH", attrs: { colorFrasco: "ambar", capacidad: "1000ml", tipoTapa: "sifon", colorTapa: "blanco" }, price: 2.5 }
    ]
  },
  {
    id: "pipeteadores-para-laboratorio",
    name: "PIPETEADORES PARA LABORATORIO",
    type: "Utensilios",
    description: "Dispositivos para aspiración y dispensación segura de líquidos en pipetas de vidrio. Disponibles en tres tipos según el nivel de control y precisión requerido: desde aspiradores manuales de goma para uso básico, hasta controladores electrónicos motorizados para aplicaciones de alta precisión en laboratorios clínicos, farmacéuticos y de investigación.",
    image: "/images/laboratorio/UTENSILIOS/PROPIPETASCARD.png",

    attributeOrder: ["tipo", "marca", "capacidad"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "propipeta", label: "Propipeta (goma)" },
          { id: "pipette-pump", label: "Pipette Pump (rueda giratoria)" },
          { id: "controlador-electronico", label: "Controlador electrónico" }
        ]
      },
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "generico", label: "Genérico" },
          { id: "labfish", label: "LABFISH" },
          { id: "ep-pro", label: "EP-PRO" }
        ]
      },
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "2-ml", label: "2 ml" },
          { id: "5-ml", label: "5 ml" },
          { id: "10-ml", label: "10 ml" },
          { id: "25-ml", label: "25 ml" }
        ]
      }
    ],

    attributeRules: {
      "propipeta": { marca: [], capacidad: [] },
      "pipette-pump": { marca: ["generico"], capacidad: ["2-ml", "5-ml", "10-ml", "25-ml"] },
      "controlador-electronico": { marca: ["labfish", "ep-pro"], capacidad: [] }
    },

    variants: [
      {
        sku: "pipeteador-propipeta",
        attrs: { tipo: "propipeta" },
        name: "ASPIRADOR DE GOMA (PROPIPETA)",
        description: "Dispositivo manual diseñado para la aspiración y dispensación segura de líquidos en pipetas de vidrio, fabricado en goma flexible de alta resistencia que permite un control básico y eficiente del flujo. Incorpora un sistema de válvulas que regula la entrada y salida de aire, facilitando la succión y liberación del líquido sin necesidad de contacto directo, reduciendo riesgos de contaminación y exposición. Su diseño compacto, ligero y de fácil uso lo convierte en una solución práctica para laboratorios educativos, clínicos y de rutina, especialmente en procedimientos donde no se requiere alta precisión volumétrica pero sí seguridad operativa. || **Tipo:** Manual | **Material:** Goma flexible | **Uso:** Laboratorios educativos, clínicos y de rutina.",
        price: 25,
        image: "/images/laboratorio/UTENSILIOS/PROPIPETAGOMA.png"
      },
      {
        sku: "pipette-pump-2ml",
        attrs: { tipo: "pipette-pump", marca: "generico", capacidad: "2-ml" },
        name: "PIPETTE PUMP 2 ML",
        description: "Instrumento mecánico de mayor precisión que permite el control gradual del volumen aspirado mediante un sistema de rueda giratoria, facilitando movimientos suaves y dosificados del líquido dentro de la pipeta. Fabricado en materiales plásticos resistentes con mecanismo interno de alta durabilidad, ofrece una manipulación más fina en comparación con los aspiradores de goma, reduciendo errores y mejorando la repetibilidad en mediciones. Integra un sistema de liberación rápida para el vaciado del contenido, siendo ideal para aplicaciones en laboratorios clínicos, químicos y educativos donde se requiere mayor control sin necesidad de equipos electrónicos. || **Tipo:** Mecánico | **Capacidad:** 2 ml | **Uso:** Laboratorios clínicos, químicos y educativos.",
        price: 35,
        image: "/images/laboratorio/UTENSILIOS/PUMP2.png"
      },
      {
        sku: "pipette-pump-5ml",
        attrs: { tipo: "pipette-pump", marca: "generico", capacidad: "5-ml" },
        name: "PIPETTE PUMP 5 ML",
        description: "Instrumento mecánico de mayor precisión que permite el control gradual del volumen aspirado mediante un sistema de rueda giratoria, facilitando movimientos suaves y dosificados del líquido dentro de la pipeta. Fabricado en materiales plásticos resistentes con mecanismo interno de alta durabilidad, ofrece una manipulación más fina en comparación con los aspiradores de goma, reduciendo errores y mejorando la repetibilidad en mediciones. Integra un sistema de liberación rápida para el vaciado del contenido, siendo ideal para aplicaciones en laboratorios clínicos, químicos y educativos donde se requiere mayor control sin necesidad de equipos electrónicos. || **Tipo:** Mecánico | **Capacidad:** 5 ml | **Uso:** Laboratorios clínicos, químicos y educativos.",
        price: 35,
        image: "/images/laboratorio/UTENSILIOS/PUMP5.png"
      },
      {
        sku: "pipette-pump-10ml",
        attrs: { tipo: "pipette-pump", marca: "generico", capacidad: "10-ml" },
        name: "PIPETTE PUMP 10 ML",
        description: "Instrumento mecánico de mayor precisión que permite el control gradual del volumen aspirado mediante un sistema de rueda giratoria, facilitando movimientos suaves y dosificados del líquido dentro de la pipeta. Fabricado en materiales plásticos resistentes con mecanismo interno de alta durabilidad, ofrece una manipulación más fina en comparación con los aspiradores de goma, reduciendo errores y mejorando la repetibilidad en mediciones. Integra un sistema de liberación rápida para el vaciado del contenido, siendo ideal para aplicaciones en laboratorios clínicos, químicos y educativos donde se requiere mayor control sin necesidad de equipos electrónicos. || **Tipo:** Mecánico | **Capacidad:** 10 ml | **Uso:** Laboratorios clínicos, químicos y educativos.",
        price: 35,
        image: "/images/laboratorio/UTENSILIOS/PUMP10.png"
      },
      {
        sku: "pipette-pump-25ml",
        attrs: { tipo: "pipette-pump", marca: "generico", capacidad: "25-ml" },
        name: "PIPETTE PUMP 25 ML",
        description: "Instrumento mecánico de mayor precisión que permite el control gradual del volumen aspirado mediante un sistema de rueda giratoria, facilitando movimientos suaves y dosificados del líquido dentro de la pipeta. Fabricado en materiales plásticos resistentes con mecanismo interno de alta durabilidad, ofrece una manipulación más fina en comparación con los aspiradores de goma, reduciendo errores y mejorando la repetibilidad en mediciones. Integra un sistema de liberación rápida para el vaciado del contenido, siendo ideal para aplicaciones en laboratorios clínicos, químicos y educativos donde se requiere mayor control sin necesidad de equipos electrónicos. || **Tipo:** Mecánico | **Capacidad:** 25 ml | **Uso:** Laboratorios clínicos, químicos y educativos.",
        price: 35,
        image: "/images/laboratorio/UTENSILIOS/PUMP25.png"
      },
      {
        sku: "controlador-electronico-labfish",
        attrs: { tipo: "controlador-electronico", marca: "labfish" },
        name: "CONTROLADOR ELECTRÓNICO LABFISH",
        description: "Controlador electrónico para aspiración y dispensación de líquidos, con seis velocidades ajustables y diseño ergonómico para uso con una sola mano. Compatible con volúmenes de 3 mL a 200 mL para pipetas serológicas, volumétricas y tubos Pasteur. Incorpora drenaje por gravedad y motorizado, con descarga de hasta 24 mL en 5 segundos e incluye pantalla LCD. Batería de litio recargable integrada con hasta 8 horas de autonomía y tiempo de carga de 2 a 3 horas. Filtro hidrofóbico de 0.45 micras que evita el retorno de líquidos y protege el sistema interno. || **Marca:** LABFISH | **Rango:** 3 – 200 mL | **Velocidades:** 6 | **Batería:** Litio recargable | **Autonomía:** 8 h | **Filtro:** 0.45 µm | **Uso:** Laboratorios clínicos, académicos y de investigación.",
        price: 5,
        images: ["/images/laboratorio/UTENSILIOS/LABFISH_1.png", "/images/laboratorio/UTENSILIOS/LABFISH_2.png"]
      },
      {
        sku: "controlador-electronico-ep-pro",
        attrs: { tipo: "controlador-electronico", marca: "ep-pro" },
        name: "CONTROLADOR ELECTRÓNICO EP-PRO",
        description: "Controlador electrónico de pipeta con sistema motorizado y diseño ergonómico para manejo preciso de líquidos. Rango de 3 mL a 100 mL, compatible con pipetas serológicas, volumétricas y tubos Pasteur. Cuenta con drenaje por gravedad y motorizado, seis velocidades y descarga de hasta 24 mL en 5 segundos e incluye pantalla LCD. Batería de litio recargable con más de 8 horas de autonomía y carga en 2 a 3 horas. Filtro interno de 0.45 micras que evita el retroceso de líquidos y protege el equipo. || **Marca:** EP-PRO | **Rango:** 3 – 100 mL | **Velocidades:** 6 | **Batería:** Litio recargable | **Autonomía:** +8 h | **Filtro:** 0.45 µm | **Uso:** Laboratorios clínicos, educativos y de investigación.",
        price: 5,
        images: ["/images/laboratorio/UTENSILIOS/EPPRO_1.png", "/images/laboratorio/UTENSILIOS/EPPRO_2.png"]
      }
    ]
  },







  {
    id: "cables-con-pinza-tipo-caiman",
    name: "CABLES CON PINZA DOBLE TIPO CAIMÁN",
    type: "Utensilios",
    description: "Cables de conexión con pinzas tipo caimán en ambos extremos, fabricados con conductores de cobre flexible recubiertos de aislamiento plástico resistente. Sus mordazas dentadas garantizan un contacto eléctrico firme y seguro sobre bornes, terminales y componentes electrónicos. Ideales para conexiones en fuentes de alimentación, electroforesis, pruebas eléctricas y montajes experimentales en laboratorios clínicos, académicos e industriales.",
    price: 1.2,
    image: "/images/laboratorio/UTENSILIOS/CAIMAN_1.png",
    images: [
      "/images/laboratorio/UTENSILIOS/CAIMAN_1.png",
      "/images/laboratorio/UTENSILIOS/CAIMAN_2.png"
    ]
  },

  {
    id: "kit-de-filtracion-al-vacio-borosilicato",
    name: "KIT DE FILTRACIÓN AL VACÍO – VIDRIO BOROSILICATO",
    type: "Utensilios",
    description: "Kit completo para filtración al vacío fabricado en vidrio de borosilicato de alta resistencia, diseñado para la separación eficiente de sólidos y líquidos en laboratorio. Disponible con o sin bomba de vacío eléctrica, y en dos capacidades de matraz Kitasato. Su material resistente a agentes químicos y cambios térmicos garantiza durabilidad y facilidad de limpieza. Ideal para laboratorios clínicos, químicos, educativos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/FILTRACIONCARD.png",

    attributeOrder: ["capacidad", "bomba", "tipoBomba"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad Matraz",
        type: "single",
        values: [
          { id: "1000-ml", label: "1000 ml" },
          { id: "2000-ml", label: "2000 ml" }
        ]
      },
      {
        id: "bomba",
        label: "Bomba de Vacío",
        type: "single",
        values: [
          { id: "sin-bomba", label: "Sin bomba" },
          { id: "con-bomba", label: "Con bomba" }
        ]
      },
      {
        id: "tipoBomba",
        label: "Tipo de Bomba",
        type: "single",
        values: [
          { id: "sin-aceite", label: "Sin aceite" },
          { id: "con-aceite", label: "Con aceite" }
        ]
      }
    ],

    attributeRules: {
      "sin-bomba": { tipoBomba: [] },
      "con-bomba": { tipoBomba: ["sin-aceite", "con-aceite"] }
    },

    variants: [
      // ─── SIN BOMBA ────────────────────────────────────────────
      {
        sku: "kit-filtracion-1000ml-sin-bomba",
        attrs: { capacidad: "1000-ml", bomba: "sin-bomba" },
        name: "MATRAZ 1000 ML – SIN BOMBA",
        description: "Kit de filtración al vacío en vidrio de borosilicato sin bomba incluida, para uso con sistema de vacío propio. || **Incluye:** (1) Embudo Büchner 300 ml, (1) Tapón horadado, (1) Matraz Kitasato 1000 ml y (1) Manguera lateral para vacío.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/A.png"
      },
      {
        sku: "kit-filtracion-2000ml-sin-bomba",
        attrs: { capacidad: "2000-ml", bomba: "sin-bomba" },
        name: "MATRAZ 2000 ML – SIN BOMBA",
        description: "Kit de filtración al vacío en vidrio de borosilicato sin bomba incluida, para uso con sistema de vacío propio. || **Incluye:** (1) Embudo Büchner 300 ml, (1) Tapón horadado, (1) Matraz Kitasato 2000 ml y (1) Manguera lateral para vacío.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/B.png"
      },

      // ─── CON BOMBA SIN ACEITE ─────────────────────────────────
      {
        sku: "kit-filtracion-1000ml-bomba-sin-aceite",
        attrs: { capacidad: "1000-ml", bomba: "con-bomba", tipoBomba: "sin-aceite" },
        name: "MATRAZ 1000 ML – BOMBA SIN ACEITE",
        description: "Kit de filtración al vacío con bomba sin aceite, libre de contaminación por lubricante, ideal para aplicaciones donde se requiere mayor limpieza del proceso. || **Incluye:** (1) Embudo Büchner 300 ml, (1) Tapón horadado, (1) Matraz Kitasato 1000 ml, (1) Manguera lateral para vacío y (1) Bomba de vacío eléctrica sin aceite.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/C.png"
      },
      {
        sku: "kit-filtracion-2000ml-bomba-sin-aceite",
        attrs: { capacidad: "2000-ml", bomba: "con-bomba", tipoBomba: "sin-aceite" },
        name: "MATRAZ 2000 ML – BOMBA SIN ACEITE",
        description: "Kit de filtración al vacío con bomba sin aceite, libre de contaminación por lubricante, ideal para aplicaciones de mayor volumen donde se requiere mayor limpieza del proceso. || **Incluye:** (1) Embudo Büchner 300 ml, (1) Tapón horadado, (1) Matraz Kitasato 2000 ml, (1) Manguera lateral para vacío y (1) Bomba de vacío eléctrica sin aceite.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/D.png"
      },

      // ─── CON BOMBA CON ACEITE ─────────────────────────────────
      {
        sku: "kit-filtracion-1000ml-bomba-con-aceite",
        attrs: { capacidad: "1000-ml", bomba: "con-bomba", tipoBomba: "con-aceite" },
        name: "MATRAZ 1000 ML – BOMBA CON ACEITE",
        description: "Kit de filtración al vacío con bomba de aceite, que proporciona mayor nivel de vacío y rendimiento en procesos de filtración exigentes. || **Incluye:** (1) Embudo Büchner 300 ml, (1) Tapón horadado, (1) Matraz Kitasato 1000 ml, (1) Manguera lateral para vacío y (1) Bomba de vacío eléctrica con aceite.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/E.png"
      },
      {
        sku: "kit-filtracion-2000ml-bomba-con-aceite",
        attrs: { capacidad: "2000-ml", bomba: "con-bomba", tipoBomba: "con-aceite" },
        name: "MATRAZ 2000 ML – BOMBA CON ACEITE",
        description: "Kit de filtración al vacío con bomba de aceite, que proporciona mayor nivel de vacío y rendimiento en procesos de filtración de mayor volumen. || **Incluye:** (1) Embudo Büchner 300 ml, (1) Tapón horadado, (1) Matraz Kitasato 2000 ml, (1) Manguera lateral para vacío y (1) Bomba de vacío eléctrica con aceite.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/F.png"
      }
    ]
  },

  {
    id: "kit-cristaleria-destilacion-boro",
    name: "KITS DE DESTILACIÓN BORO 3.3",
    type: "Utensilios",
    description: "Kits de destilación fabricados en vidrio de borosilicato 3.3, diseñados para soportar altas temperaturas y el uso con reactivos químicos. Sus uniones esmeriladas estándar 24/40 aseguran un sistema hermético que mantiene la pureza del proceso de destilación. Ideales para prácticas universitarias, laboratorios educativos y proyectos de investigación, permitiendo la obtención de agua destilada, aceites esenciales y extractos.",
    image: "/images/laboratorio/UTENSILIOS/DESTILACIONCARD.png",

    attributeOrder: ["kit"],

    attributes: [
      {
        id: "kit",
        label: "Kit",
        type: "single",
        values: [
          { id: "14-pza", label: "14 PZA" },
          { id: "28-pza", label: "28 PZA" },
          { id: "28-pza-calentador", label: "28 PZA C/Calentador" }
        ]
      }
    ],

    variants: [
      {
        sku: "kit-destilacion-boro-14pza",
        attrs: { kit: "14-pza" },
        name: "SOLO CRISTALERIA - 14 PZA",
        description: "Este kit es ideal para prácticas universitarias, experimentación en laboratorio y proyectos de investigación, permitiendo la obtención de agua destilada, extractos y aceites esenciales. || **Incluye:** **(2)** matraces de fondo redondo de una boca (500 mL y 1000 mL), **(1)** condensador recto de vidrio esmerilado 24/40, **(1)** columna de fraccionamiento tipo espiga, **(1)** varilla de agitación, **(1)** termómetro, **(1)** adaptador para termómetro (tapón de vidrio), **(1)** adaptador de destilación con salida lateral (recepción/vacío), **(1)** manguera de látex y **(5)** pinzas plásticas de sujeción.",
        price: 350,
        image: "/images/laboratorio/UTENSILIOS/DESTILACION_1.png",
        images: [
          "/images/laboratorio/UTENSILIOS/DESTILACION_1.png",
          "/images/laboratorio/UTENSILIOS/DESTILACION_2.png",
          "/images/laboratorio/UTENSILIOS/DESTILACION_3.png"
        ]
      },
      {
        sku: "kit-destilacion-boro-28pza",
        attrs: { kit: "28-pza" },
        name: "CON MECHERO ALCOHOL - 28 PZA",
        description: "Este kit es ideal para prácticas universitarias, experimentación en laboratorio y proyectos de investigación, permitiendo la obtención de agua destilada, extractos y aceites esenciales. || **Incluye:** **(1)** matraz de destilación 500 mL, **(1)** embudo de separación 125 mL, **(1)** adaptador tipo cuerno de vaca, **(1)** tapón de goma, **(1)** tapón de vidrio #19, **(1)** malla cerámica, **(1)** matraz cónico 100 mL, **(1)** vaso de precipitados 100 mL, **(1)** condensador serpentín (tubo recto en espiral), **(1)** cepillo de limpieza, **(1)** termómetro, **(1)** pinza para matraz, **(1)** aro metálico de soporte Ø5.1 cm, **(1)** aro metálico de soporte Ø7.3 cm, **(1)** lámpara de alcohol 150 mL, **(1)** cuentagotas de goma, **(1)** papel indicador de pH, **(1)** grasa para vacío, **(1)** pinza de tres dedos, **(1)** manguera de látex 2 m y **(1)** soporte universal de laboratorio 40 cm.",
        price: 450,
        image: "/images/laboratorio/UTENSILIOS/DESTILACION_28_1.png",
        images: [
          "/images/laboratorio/UTENSILIOS/DESTILACION_28_1.png",
          "/images/laboratorio/UTENSILIOS/DESTILACION_28_2.png"
        ]
      },
      {
        sku: "kit-destilacion-boro-28pza-calentador",
        attrs: { kit: "28-pza-calentador" },
        name: "CON CALENTADOR - 28 PZA",
        description: "Este kit es ideal para prácticas universitarias, experimentación en laboratorio y proyectos de investigación, permitiendo la obtención de agua destilada, extractos y aceites esenciales. Incorpora una **placa de calentamiento eléctrica de 1000W** que proporciona un calentamiento uniforme. || **Incluye:** **(1)** matraz de fondo plano de dos bocas 2000 mL, **(1)** matraz de acople 2000 mL, **(1)** tubo de conexión (delivery), **(1)** condensador serpentín de vidrio esmerilado 24/40, **(1)** termómetro, **(1)** matraz cónico 150 mL, **(1)** vaso de precipitados 150 mL, **(1)** embudo de separación 100 mL, **(1)** cepillo de limpieza grande, **(1)** cuentagotas de goma (punta roja), **(1)** frascos ámbar 30 mL, **(1)** pinzas plásticas, **(1)** manguera de látex 2 m, **(1)** adaptador para termómetro, **(1)** tapón de vidrio #24, **(1)** grasa para vacío, **(1)** pinzas tipo cruz, **(1)** aro metálico de soporte, **(1)** placa calefactora eléctrica 1000W, **(1)** pinza para bureta, **(1)** pinza para matraz y **(1)** soporte universal de laboratorio 60 cm.",
        price: 900,
        image: "/images/laboratorio/UTENSILIOS/DESTILACION_28_C_1.png",
        images: [
          "/images/laboratorio/UTENSILIOS/DESTILACION_28_C_1.png",
          "/images/laboratorio/UTENSILIOS/DESTILACION_28_C_2.png"
        ]
      }
    ]
  },

  {
    id: "gradilla-polipropileno-autoclavable",
    name: "GRADILLA DE POLIPROPILENO AUTOCLAVABLE",
    type: "Utensilios",
    description: "Gradilla fabricada en polipropileno de alta resistencia, autoclavable y compatible con la mayoría de reactivos químicos de laboratorio. Diseñada para sostener tubos de ensayo de manera ordenada y segura durante centrifugación, incubación y almacenamiento. Ideal para laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/GRADILLASCARD.png",

    attributeOrder: ["formato"],

    attributes: [
      {
        id: "formato",
        label: "Formato",
        type: "single",
        values: [
          { id: "90h-13mm", label: "90 hoyos – Ø13 mm" },
          { id: "60h-17mm", label: "60 hoyos – Ø17 mm" },
          { id: "40h-21mm", label: "40 hoyos – Ø21 mm" },
          { id: "24h-25mm", label: "24 hoyos – Ø25 mm" },
          { id: "21h-30mm", label: "21 hoyos – Ø30 mm" }
        ]
      }
    ],

    variants: [
      {
        sku: "gradilla-pp-90h-13mm",
        attrs: { formato: "90h-13mm" },
        name: "90 HOYOS – Ø13 MM",
        description: "Gradilla de polipropileno autoclavable para tubos de ensayo, con alta resistencia química y térmica. || **Hoyos:** 90 | **Diámetro:** 13 mm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/GRADILLA_90PP.png"
      },
      {
        sku: "gradilla-pp-60h-17mm",
        attrs: { formato: "60h-17mm" },
        name: "60 HOYOS – Ø17 MM",
        description: "Gradilla de polipropileno autoclavable para tubos de ensayo, con alta resistencia química y térmica. || **Hoyos:** 60 | **Diámetro:** 17 mm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/GRADILLA_60PP.png"
      },
      {
        sku: "gradilla-pp-40h-21mm",
        attrs: { formato: "40h-21mm" },
        name: "40 HOYOS – Ø21 MM",
        description: "Gradilla de polipropileno autoclavable para tubos de ensayo, con alta resistencia química y térmica. || **Hoyos:** 40 | **Diámetro:** 21 mm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/GRADILLA_40PP.png"
      },
      {
        sku: "gradilla-pp-24h-25mm",
        attrs: { formato: "24h-25mm" },
        name: "24 HOYOS – Ø25 MM",
        description: "Gradilla de polipropileno autoclavable para tubos de ensayo, con alta resistencia química y térmica. || **Hoyos:** 24 | **Diámetro:** 25 mm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/GRADILLA_24PP.png"
      },
      {
        sku: "gradilla-pp-21h-30mm",
        attrs: { formato: "21h-30mm" },
        name: "21 HOYOS – Ø30 MM",
        description: "Gradilla de polipropileno autoclavable para tubos de ensayo, con alta resistencia química y térmica. || **Hoyos:** 21 | **Diámetro:** 30 mm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/GRADILLA_21PP.png"
      }
    ]
  },

  {
    id: "soporte-polipropileno-autoclavable",
    name: "SOPORTE DE POLIPROPILENO AUTOCLAVABLE",
    type: "Utensilios",
    description: "Soporte fabricado en polipropileno de alta resistencia, autoclavable y compatible con la mayoría de reactivos químicos de laboratorio. Diseñado para sostener tubos de ensayo invertidos facilitando su secado y almacenamiento ordenado. Ideal para laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/PILARESCARD.png",

    attributeOrder: ["formato"],

    attributes: [
      {
        id: "formato",
        label: "Formato",
        type: "single",
        values: [
          { id: "66-pilares", label: "66 pilares" },
          { id: "102-pilares", label: "102 pilares" }
        ]
      }
    ],

    variants: [
      {
        sku: "soporte-pp-66-pilares",
        attrs: { formato: "66-pilares" },
        name: "66 PILARES",
        description: "Soporte de polipropileno autoclavable para secado y almacenamiento ordenado de tubos de ensayo, con alta resistencia química y térmica. || **Pilares:** 66.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/PILARES_66.png"
      },
      {
        sku: "soporte-pp-102-pilares",
        attrs: { formato: "102-pilares" },
        name: "102 PILARES",
        description: "Soporte de polipropileno autoclavable para secado y almacenamiento ordenado de tubos de ensayo, con alta resistencia química y térmica. || **Pilares:** 102.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/PILARES_102.png"
      }
    ]
  },
  {
    id: "luna-de-reloj-vidrio-borosilicato",
    name: "LUNA DE RELOJ VIDRIO DE BOROSILICATO",
    type: "Utensilios",
    description: "Luna de reloj fabricada en vidrio de borosilicato (Boro 3.3), utilizada como superficie de evaporación, cubierta de vasos de precipitados durante calentamiento, soporte para pesado de pequeñas cantidades de reactivos y como recipiente auxiliar en diversas técnicas de laboratorio. Su forma cóncava canaliza los líquidos hacia el centro, facilitando la recolección de muestras y minimizando pérdidas. Su alta resistencia química y térmica la hace compatible con la mayoría de reactivos y fuentes de calor. Ideal para laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/LUNA_RELOJ_CARD.png",

    attributeOrder: ["diametro"],

    attributes: [
      {
        id: "diametro",
        label: "Diámetro",
        type: "single",
        values: [
          { id: "45-mm", label: "45 mm" },
          { id: "50-mm", label: "50 mm" },
          { id: "60-mm", label: "60 mm" },
          { id: "70-mm", label: "70 mm" },
          { id: "80-mm", label: "80 mm" }
        ]
      }
    ],

    variants: [
      {
        sku: "luna-reloj-45mm",
        attrs: { diametro: "45-mm" },
        name: "45 MM",
        description: "Luna de reloj de vidrio de borosilicato para evaporación, cubierta y pesado de reactivos en laboratorio. || **Diámetro:** 45 mm.",
        price: 12,
        image: "/images/laboratorio/UTENSILIOS/LUNA_RELOJ.png"
      },
      {
        sku: "luna-reloj-50mm",
        attrs: { diametro: "50-mm" },
        name: "50 MM",
        description: "Luna de reloj de vidrio de borosilicato para evaporación, cubierta y pesado de reactivos en laboratorio. || **Diámetro:** 50 mm.",
        price: 12,
        image: "/images/laboratorio/UTENSILIOS/LUNA_RELOJ.png"
      },
      {
        sku: "luna-reloj-60mm",
        attrs: { diametro: "60-mm" },
        name: "60 MM",
        description: "Luna de reloj de vidrio de borosilicato para evaporación, cubierta y pesado de reactivos en laboratorio. || **Diámetro:** 60 mm.",
        price: 12,
        image: "/images/laboratorio/UTENSILIOS/LUNA_RELOJ.png"
      },
      {
        sku: "luna-reloj-70mm",
        attrs: { diametro: "70-mm" },
        name: "70 MM",
        description: "Luna de reloj de vidrio de borosilicato para evaporación, cubierta y pesado de reactivos en laboratorio. || **Diámetro:** 70 mm.",
        price: 12,
        image: "/images/laboratorio/UTENSILIOS/LUNA_RELOJ.png"
      },
      {
        sku: "luna-reloj-80mm",
        attrs: { diametro: "80-mm" },
        name: "80 MM",
        description: "Luna de reloj de vidrio de borosilicato para evaporación, cubierta y pesado de reactivos en laboratorio. || **Diámetro:** 80 mm.",
        price: 12,
        image: "/images/laboratorio/UTENSILIOS/LUNA_RELOJ.png"
      }
    ]
  },
  {
    id: "cono-imhoff-vidrio-borosilicato-1000ml",
    name: "CONO IMHOFF DE VIDRIO DE BOROSILICATO CON LLAVE – 1000 ML",
    type: "Utensilios",
    description: "Cono Imhoff fabricado en vidrio de borosilicato de alta resistencia, diseñado para la determinación de sólidos sedimentables en análisis de aguas. Presenta cuerpo cónico alargado con graduación precisa y llave inferior que permite la recolección y medición controlada de sedimentos. Material resistente a agentes químicos y cambios térmicos, con superficie lisa que facilita la limpieza. Adecuado para laboratorios ambientales, sanitarios y de control de calidad. || **Material:** Vidrio borosilicato | **Capacidad:** 1000 ml | **Accesorio:** Llave inferior.",
    price: 5,
    image: "/images/laboratorio/UTENSILIOS/CONO_IMHOFF_1000ML.png"
  },

  {
    id: "matraz-kitasato-vidrio-borosilicato-500ml",
    name: "MATRAZ KITASATO DE VIDRIO DE BOROSILICATO – 500 ML",
    type: "Utensilios",
    description: "Matraz Kitasato fabricado en vidrio de borosilicato de alta resistencia, diseñado para procesos de filtración al vacío en laboratorio. Presenta cuerpo cónico de paredes gruesas con salida lateral que permite la conexión a sistemas de vacío mediante manguera, facilitando la separación eficiente de sólidos y líquidos. Material resistente a agentes químicos y cambios térmicos, con superficie lisa que favorece la limpieza y durabilidad. Compatible con embudos Büchner y sistemas de filtración estándar, adecuado para laboratorios clínicos, químicos, educativos e industriales. || **Material:** Vidrio borosilicato | **Capacidad:** 500 ml | **Conexión:** Salida lateral para vacío.",
    price: 5,
    image: "/images/laboratorio/UTENSILIOS/MATRAZ_KITASATO_500ML.png"
  },

  {
    id: "laminas-porta-objeto-50u",
    name: "LÁMINAS PORTA OBJETO × 50 UND",
    type: "Utensilios",
    description: "Láminas portaobjetos de vidrio óptico para microscopía, diseñadas para el montaje y observación de muestras biológicas, frotis, cortes histológicos y preparaciones citológicas. Sus bordes pulidos y superficie libre de impurezas garantizan una superficie uniforme para una correcta adhesión de la muestra y una visualización nítida al microscopio. Presentación de 50 unidades. Ideales para laboratorios clínicos, histológicos, microbiológicos y académicos.",
    price: 6,
    image: "/images/laboratorio/UTENSILIOS/PORTA_OBJETO.png"
  },

  {
    id: "laminillas-cubreobjetos-100u",
    name: "LAMINAS CUBRE OBJETOS × 100 UND",
    type: "Utensilios",
    description: "Laminillas cubreobjetos de vidrio óptico ultrafino para microscopía, diseñadas para cubrir y proteger las muestras montadas sobre portaobjetos, evitando la contaminación y el deterioro de la preparación. Su transparencia óptica garantiza una visualización clara y nítida al microscopio sin interferencias. Presentación de 100 unidades. Ideales para laboratorios clínicos, histológicos, microbiológicos y académicos.",
    price: 6,
    image: "/images/laboratorio/UTENSILIOS/CUBREOBJETOS.png"
  },
  {
    id: "matraz-erlenmeyer-graduado-borosilicato",
    name: "MATRAZES ERLENMEYER",
    type: "Utensilios",
    description: "Matraz Erlenmeyer graduado fabricado en vidrio de borosilicato (Boro 3.3), diseñado para mezcla, calentamiento y almacenamiento de soluciones en laboratorio. Su forma cónica característica minimiza la evaporación y reduce el riesgo de derrames durante la agitación. Las graduaciones impresas permiten una estimación rápida del volumen, mientras que su alta resistencia química y térmica lo hace compatible con la mayoría de reactivos y fuentes de calor. Ideal para laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/ERLENMEYER_CARD.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "50-ml", label: "50 ml" },
          { id: "100-ml", label: "100 ml" },
          { id: "250-ml", label: "250 ml" },
          { id: "500-ml", label: "500 ml" },
          { id: "1000-ml", label: "1000 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "erlenmeyer-boro-50ml",
        attrs: { capacidad: "50-ml" },
        name: "50 ML",
        description: "Matraz Erlenmeyer graduado de vidrio de borosilicato para mezcla, calentamiento y almacenamiento de soluciones en laboratorio. || **Capacidad:** 50 ml.",
        price: 38.4,
        image: "/images/laboratorio/UTENSILIOS/ERLENMEYER_50ML.png"
      },
      {
        sku: "erlenmeyer-boro-100ml",
        attrs: { capacidad: "100-ml" },
        name: "100 ML",
        description: "Matraz Erlenmeyer graduado de vidrio de borosilicato para mezcla, calentamiento y almacenamiento de soluciones en laboratorio. || **Capacidad:** 100 ml.",
        price: 39.6,
        image: "/images/laboratorio/UTENSILIOS/ERLENMEYER_100ML.png"
      },
      {
        sku: "erlenmeyer-boro-250ml",
        attrs: { capacidad: "250-ml" },
        name: "250 ML",
        description: "Matraz Erlenmeyer graduado de vidrio de borosilicato para mezcla, calentamiento y almacenamiento de soluciones en laboratorio. || **Capacidad:** 250 ml.",
        price: 14.4,
        image: "/images/laboratorio/UTENSILIOS/ERLENMEYER_250ML.png"
      },
      {
        sku: "erlenmeyer-boro-500ml",
        attrs: { capacidad: "500-ml" },
        name: "500 ML",
        description: "Matraz Erlenmeyer graduado de vidrio de borosilicato para mezcla, calentamiento y almacenamiento de soluciones en laboratorio. || **Capacidad:** 500 ml.",
        price: 50.4,
        image: "/images/laboratorio/UTENSILIOS/ERLENMEYER_500ML.png"
      },
      {
        sku: "erlenmeyer-boro-1000ml",
        attrs: { capacidad: "1000-ml" },
        name: "1000 ML",
        description: "Matraz Erlenmeyer graduado de vidrio de borosilicato para mezcla, calentamiento y almacenamiento de soluciones en laboratorio. || **Capacidad:** 1000 ml.",
        price: 30,
        image: "/images/laboratorio/UTENSILIOS/ERLENMEYER_1000ML.png"
      }
    ]
  },

  {
    id: "mechero-de-alcohol-con-tapa-de-metal",
    name: "MECHERO DE ALCOHOL CON TAPA",
    type: "Utensilios",
    description: "Mechero de alcohol con tapa metálica de seguridad, diseñado para calentamiento, esterilización y combustión controlada en laboratorio. Su depósito de vidrio resistente al calor permite visualizar el nivel de combustible, mientras que la mecha de algodón garantiza una llama estable y uniforme. La tapa metálica apaga la llama de forma segura al cortar el suministro de oxígeno, evitando riesgos de accidente. De fácil recarga con alcohol etílico o isopropílico, su diseño compacto y robusto lo hace ideal para uso en laboratorios clínicos, académicos e industriales.",
    price: 10.8,
    image: "/images/laboratorio/UTENSILIOS/MECHERO_ALCOHOL.png"
  },


  {
    id: "pera-de-separacion-vidrio-borosilicato-isolab",
    name: "PERA DE SEPARACIÓN",
    type: "Utensilios",
    description: "Embudo de pera de separación fabricado en vidrio de borosilicato (Boro 3.3), diseñado para la separación de líquidos inmiscibles por diferencia de densidad en procesos de extracción líquido-líquido. Su llave de paso esmerilada garantiza un cierre hermético y un control preciso del flujo, mientras que su alta resistencia química y térmica lo hace compatible con la mayoría de solventes orgánicos y reactivos. Ideal para laboratorios clínicos, químicos, académicos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/PERACARD.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "250-ml", label: "250 ml" },
          { id: "500-ml", label: "500 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "pera-separacion-250ml",
        attrs: { capacidad: "250-ml" },
        name: "250 ML",
        description: "Pera de separación de vidrio borosilicato Isolab con llave esmerilada para extracción líquido-líquido y separación de fases en laboratorio. || **Marca:** Isolab | **Capacidad:** 250 ml.",
        price: 336,
        image: "/images/laboratorio/UTENSILIOS/PERA250.png"
      },
      {
        sku: "pera-separacion-500ml",
        attrs: { capacidad: "500-ml" },
        name: "500 ML",
        description: "Pera de separación de vidrio borosilicato Isolab con llave esmerilada para extracción líquido-líquido y separación de fases en laboratorio. || **Marca:** Isolab | **Capacidad:** 500 ml.",
        price: 414,
        image: "/images/laboratorio/UTENSILIOS/PERA500.png"
      }
    ]
  },

  {
    id: "pipeta-vidrio-borosilicato-graduada",
    name: "PIPETAS GRADUADAS",
    type: "Utensilios",
    description: "Pipeta fabricada en vidrio de borosilicato (Boro 3.3), diseñada para la medición y transferencia precisa de volúmenes de líquidos en laboratorio. Disponible en tipo Mohr (graduación que no llega al extremo inferior), Serológica (graduación hasta la punta) y Volumétrica (aforo único de máxima precisión). Sus graduaciones claramente marcadas permiten una lectura exacta del volumen, mientras que su alta resistencia química y térmica la hace compatible con la mayoría de reactivos y solventes. Ideal para laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/PIPETACARD.png",

    attributeOrder: ["tipo", "capacidad"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "mohr", label: "Mohr" },
          { id: "serologica", label: "Serológica" },
          { id: "volumetrica", label: "Volumétrica" }
        ]
      },
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "1-ml", label: "1 ml" },
          { id: "2-ml", label: "2 ml" },
          { id: "5-ml", label: "5 ml" },
          { id: "10-ml", label: "10 ml" },
          { id: "25-ml", label: "25 ml" }
        ]
      }
    ],

    attributeRules: {
      "mohr": { capacidad: ["1-ml", "2-ml", "5-ml", "10-ml"] },
      "serologica": { capacidad: ["1-ml", "2-ml", "5-ml", "10-ml"] },
      "volumetrica": { capacidad: ["1-ml", "2-ml", "5-ml", "10-ml", "25-ml"] }
    },

    variants: [

      // ─── MOHR ─────────────────────────────────────────────────
      { sku: "pipeta-mohr-1ml", attrs: { tipo: "mohr", capacidad: "1-ml" }, name: "MOHR 1 ML", description: "Pipeta tipo Mohr de vidrio borosilicato con graduación que no alcanza el extremo inferior, para medición y transferencia precisa de líquidos. || **Tipo:** Mohr | **Capacidad:** 1 ml.", price: 8, image: "/images/laboratorio/UTENSILIOS/PIPETA_MOHR_1ML.png" },
      { sku: "pipeta-mohr-2ml", attrs: { tipo: "mohr", capacidad: "2-ml" }, name: "MOHR 2 ML", description: "Pipeta tipo Mohr de vidrio borosilicato con graduación que no alcanza el extremo inferior, para medición y transferencia precisa de líquidos. || **Tipo:** Mohr | **Capacidad:** 2 ml.", price: 9, image: "/images/laboratorio/UTENSILIOS/PIPETA_MOHR_2ML.png" },
      { sku: "pipeta-mohr-5ml", attrs: { tipo: "mohr", capacidad: "5-ml" }, name: "MOHR 5 ML", description: "Pipeta tipo Mohr de vidrio borosilicato con graduación que no alcanza el extremo inferior, para medición y transferencia precisa de líquidos. || **Tipo:** Mohr | **Capacidad:** 5 ml.", price: 10, image: "/images/laboratorio/UTENSILIOS/PIPETA_MOHR_5ML.png" },
      { sku: "pipeta-mohr-10ml", attrs: { tipo: "mohr", capacidad: "10-ml" }, name: "MOHR 10 ML", description: "Pipeta tipo Mohr de vidrio borosilicato con graduación que no alcanza el extremo inferior, para medición y transferencia precisa de líquidos. || **Tipo:** Mohr | **Capacidad:** 10 ml.", price: 12, image: "/images/laboratorio/UTENSILIOS/PIPETA_MOHR_10ML.png" },

      // ─── SEROLÓGICA ───────────────────────────────────────────
      { sku: "pipeta-sero-1ml", attrs: { tipo: "serologica", capacidad: "1-ml" }, name: "SEROLÓGICA 1 ML", description: "Pipeta tipo Serológica de vidrio borosilicato con graduación hasta la punta para dispensar el volumen total. || **Tipo:** Serológica | **Capacidad:** 1 ml.", price: 8, image: "/images/laboratorio/UTENSILIOS/PIPETA_SERO_1ML.png" },
      { sku: "pipeta-sero-2ml", attrs: { tipo: "serologica", capacidad: "2-ml" }, name: "SEROLÓGICA 2 ML", description: "Pipeta tipo Serológica de vidrio borosilicato con graduación hasta la punta para dispensar el volumen total. || **Tipo:** Serológica | **Capacidad:** 2 ml.", price: 9, image: "/images/laboratorio/UTENSILIOS/PIPETA_SERO_2ML.png" },
      { sku: "pipeta-sero-5ml", attrs: { tipo: "serologica", capacidad: "5-ml" }, name: "SEROLÓGICA 5 ML", description: "Pipeta tipo Serológica de vidrio borosilicato con graduación hasta la punta para dispensar el volumen total. || **Tipo:** Serológica | **Capacidad:** 5 ml.", price: 10, image: "/images/laboratorio/UTENSILIOS/PIPETA_SERO_5ML.png" },
      { sku: "pipeta-sero-10ml", attrs: { tipo: "serologica", capacidad: "10-ml" }, name: "SEROLÓGICA 10 ML", description: "Pipeta tipo Serológica de vidrio borosilicato con graduación hasta la punta para dispensar el volumen total. || **Tipo:** Serológica | **Capacidad:** 10 ml.", price: 12, image: "/images/laboratorio/UTENSILIOS/PIPETA_SERO_10ML.png" },

      // ─── VOLUMÉTRICA ──────────────────────────────────────────
      { sku: "pipeta-vol-1ml", attrs: { tipo: "volumetrica", capacidad: "1-ml" }, name: "VOLUMÉTRICA 1 ML", description: "Pipeta volumétrica de vidrio borosilicato con aforo único para transferencia de un volumen exacto con máxima precisión, indispensable en análisis volumétricos y preparación de soluciones patrón. || **Tipo:** Volumétrica | **Capacidad:** 1 ml.", price: 5, image: "/images/laboratorio/UTENSILIOS/PIPETA_VOL_1ML.png" },
      { sku: "pipeta-vol-2ml", attrs: { tipo: "volumetrica", capacidad: "2-ml" }, name: "VOLUMÉTRICA 2 ML", description: "Pipeta volumétrica de vidrio borosilicato con aforo único para transferencia de un volumen exacto con máxima precisión, indispensable en análisis volumétricos y preparación de soluciones patrón. || **Tipo:** Volumétrica | **Capacidad:** 2 ml.", price: 5, image: "/images/laboratorio/UTENSILIOS/PIPETA_VOL_2ML.png" },
      { sku: "pipeta-vol-5ml", attrs: { tipo: "volumetrica", capacidad: "5-ml" }, name: "VOLUMÉTRICA 5 ML", description: "Pipeta volumétrica de vidrio borosilicato con aforo único para transferencia de un volumen exacto con máxima precisión, indispensable en análisis volumétricos y preparación de soluciones patrón. || **Tipo:** Volumétrica | **Capacidad:** 5 ml.", price: 5, image: "/images/laboratorio/UTENSILIOS/PIPETA_VOL_5ML.png" },
      { sku: "pipeta-vol-10ml", attrs: { tipo: "volumetrica", capacidad: "10-ml" }, name: "VOLUMÉTRICA 10 ML", description: "Pipeta volumétrica de vidrio borosilicato con aforo único para transferencia de un volumen exacto con máxima precisión, indispensable en análisis volumétricos y preparación de soluciones patrón. || **Tipo:** Volumétrica | **Capacidad:** 10 ml.", price: 5, image: "/images/laboratorio/UTENSILIOS/PIPETA_VOL_10ML.png" },
      { sku: "pipeta-vol-25ml", attrs: { tipo: "volumetrica", capacidad: "25-ml" }, name: "VOLUMÉTRICA 25 ML", description: "Pipeta volumétrica de vidrio borosilicato con aforo único para transferencia de un volumen exacto con máxima precisión, indispensable en análisis volumétricos y preparación de soluciones patrón. || **Tipo:** Volumétrica | **Capacidad:** 25 ml.", price: 5, image: "/images/laboratorio/UTENSILIOS/PIPETA_VOL_25ML.png" }
    ]
  },

  {
    id: "piseta",
    name: "PISETA",
    type: "Utensilios",
    description: "Piseta fabricada en polietileno flexible de alta resistencia química, diseñada para la dispensación controlada y precisa de agua destilada, solventes y reactivos en laboratorio. Su tubo interno curvo permite expulsar el líquido con presión manual sin necesidad de invertir el frasco, facilitando el lavado de material, preparación de soluciones y enjuague de instrumental. Compatible con la mayoría de solventes orgánicos e inorgánicos. Ideal para laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/PISETASCARD.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "250-ml", label: "250 ml" },
          { id: "500-ml", label: "500 ml" },
          { id: "1000-ml", label: "1000 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "piseta-250ml",
        attrs: { capacidad: "250-ml" },
        name: "250 ML",
        description: "Piseta de polietileno flexible para dispensación controlada de líquidos y lavado de material en laboratorio. || **Capacidad:** 250 ml.",
        price: 8.4,
        image: "/images/laboratorio/UTENSILIOS/PISETA_250ML.png"
      },
      {
        sku: "piseta-500ml",
        attrs: { capacidad: "500-ml" },
        name: "500 ML",
        description: "Piseta de polietileno flexible para dispensación controlada de líquidos y lavado de material en laboratorio. || **Capacidad:** 500 ml.",
        price: 10.8,
        image: "/images/laboratorio/UTENSILIOS/PISETA_500ML.png"
      },
      {
        sku: "piseta-1000ml",
        attrs: { capacidad: "1000-ml" },
        name: "1000 ML",
        description: "Piseta de polietileno flexible para dispensación controlada de líquidos y lavado de material en laboratorio. || **Capacidad:** 1000 ml.",
        price: 12.6,
        image: "/images/laboratorio/UTENSILIOS/PISETA_1000ML.png"
      }
    ]
  },


  {
    id: "probeta-vidrio-borosilicato",
    name: "PROBETAS",
    type: "Utensilios",
    description: "Probeta graduada fabricada en vidrio de borosilicato (Boro 3.3), diseñada para la medición precisa de volúmenes de líquidos en laboratorio. Sus graduaciones grabadas garantizan durabilidad y legibilidad a largo plazo. Disponible en versión estándar y versión certificada Biohall con trazabilidad metrológica para análisis que requieren alta precisión y confiabilidad. Su alta resistencia química y térmica la hace compatible con la mayoría de reactivos, ácidos y solventes. Ideal para laboratorios clínicos, académicos, de control de calidad e industriales.",
    image: "/images/laboratorio/UTENSILIOS/PROBETASCARD.png",

    attributeOrder: ["certificado", "capacidad"],

    attributes: [
      {
        id: "certificado",
        label: "Certificado",
        type: "single",
        values: [
          { id: "sin-certificado", label: "Sin certificado" },
          { id: "biohall", label: "Certificada" }
        ]
      },
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "10-ml", label: "10 ml" },
          { id: "25-ml", label: "25 ml" },
          { id: "50-ml", label: "50 ml" },
          { id: "100-ml", label: "100 ml" },
          { id: "1000-ml", label: "1000 ml" }
        ]
      }
    ],

    // 25 ml solo existe sin certificado
    attributeRules: {
      "sin-certificado": { capacidad: ["10-ml", "25-ml", "50-ml", "100-ml", "1000-ml"] },
      "biohall": { capacidad: ["10-ml", "50-ml", "100-ml", "1000-ml"] }
    },

    variants: [

      // ─── SIN CERTIFICADO ──────────────────────────────────────
      {
        sku: "probeta-vidrio-sc-10ml",
        attrs: { certificado: "sin-certificado", capacidad: "10-ml" },
        name: "10 ML – SIN CERTIFICADO",
        description: "Probeta graduada de vidrio de borosilicato para medición precisa de volúmenes en laboratorio. || **Capacidad:** 10 ml | **Certificado:** No.",
        price: 72,
        image: "/images/laboratorio/UTENSILIOS/PROBETA_VIDRIO_10ML.png"
      },
      {
        sku: "probeta-vidrio-sc-25ml",
        attrs: { certificado: "sin-certificado", capacidad: "25-ml" },
        name: "25 ML – SIN CERTIFICADO",
        description: "Probeta graduada de vidrio de borosilicato para medición precisa de volúmenes en laboratorio. || **Capacidad:** 25 ml | **Certificado:** No.",
        price: 69.6,
        image: "/images/laboratorio/UTENSILIOS/PROBETA_VIDRIO_25ML.png"
      },
      {
        sku: "probeta-vidrio-sc-50ml",
        attrs: { certificado: "sin-certificado", capacidad: "50-ml" },
        name: "50 ML – SIN CERTIFICADO",
        description: "Probeta graduada de vidrio de borosilicato para medición precisa de volúmenes en laboratorio. || **Capacidad:** 50 ml | **Certificado:** No.",
        price: 96,
        image: "/images/laboratorio/UTENSILIOS/PROBETA_VIDRIO_50ML.png"
      },
      {
        sku: "probeta-vidrio-sc-100ml",
        attrs: { certificado: "sin-certificado", capacidad: "100-ml" },
        name: "100 ML – SIN CERTIFICADO",
        description: "Probeta graduada de vidrio de borosilicato para medición precisa de volúmenes en laboratorio. || **Capacidad:** 100 ml | **Certificado:** No.",
        price: 21.6,
        image: "/images/laboratorio/UTENSILIOS/PROBETA_VIDRIO_100ML.png"
      },
      {
        sku: "probeta-vidrio-sc-1000ml",
        attrs: { certificado: "sin-certificado", capacidad: "1000-ml" },
        name: "1000 ML – SIN CERTIFICADO",
        description: "Probeta graduada de vidrio de borosilicato para medición precisa de volúmenes en laboratorio. || **Capacidad:** 1000 ml | **Certificado:** No.",
        price: 294,
        image: "/images/laboratorio/UTENSILIOS/PROBETA_VIDRIO_1000ML.png"
      },

      // ─── CERTIFICADA BIOHALL ──────────────────────────────────
      {
        sku: "probeta-biohall-10ml",
        attrs: { certificado: "biohall", capacidad: "10-ml" },
        name: "10 ML – CERTIFICADA BIOHALL",
        description: "Probeta graduada certificada Biohall para medición volumétrica de alta precisión y trazabilidad metrológica en laboratorio. || **Capacidad:** 10 ml | **Marca:** Biohall | **Certificado:** Sí.",
        price: 33.6,
        image: "/images/laboratorio/UTENSILIOS/PROBETA_VIDRIO_10ML.png"
      },
      {
        sku: "probeta-biohall-50ml",
        attrs: { certificado: "biohall", capacidad: "50-ml" },
        name: "50 ML – CERTIFICADA BIOHALL",
        description: "Probeta graduada certificada Biohall para medición volumétrica de alta precisión y trazabilidad metrológica en laboratorio. || **Capacidad:** 50 ml | **Marca:** Biohall | **Certificado:** Sí.",
        price: 36,
        image: "/images/laboratorio/UTENSILIOS/PROBETA_VIDRIO_50ML.png"
      },
      {
        sku: "probeta-biohall-100ml",
        attrs: { certificado: "biohall", capacidad: "100-ml" },
        name: "100 ML – CERTIFICADA BIOHALL",
        description: "Probeta graduada certificada Biohall para medición volumétrica de alta precisión y trazabilidad metrológica en laboratorio. || **Capacidad:** 100 ml | **Marca:** Biohall | **Certificado:** Sí.",
        price: 45.6,
        image: "/images/laboratorio/UTENSILIOS/PROBETA_VIDRIO_100ML.png"
      },
      {
        sku: "probeta-biohall-1000ml",
        attrs: { certificado: "biohall", capacidad: "1000-ml" },
        name: "1000 ML – CERTIFICADA BIOHALL",
        description: "Probeta graduada certificada Biohall para medición volumétrica de alta precisión y trazabilidad metrológica en laboratorio. || **Capacidad:** 1000 ml | **Marca:** Biohall | **Certificado:** Sí.",
        price: 162,
        image: "/images/laboratorio/UTENSILIOS/PROBETA_VIDRIO_1000ML.png"
      }
    ]
  },
  {
    id: "triangulo-de-porcelana-para-soporte-de-crisol",
    name: "TRIÁNGULO DE PORCELANA P/SOPORTE DE CRISOL",
    type: "Utensilios",
    description: "Soporte triangular de porcelana diseñado para sostener crisoles de laboratorio durante procesos de calentamiento a altas temperaturas. Su estructura robusta y resistente al calor permite una distribución uniforme del calor y una manipulación segura de los crisoles. Ideal para uso en hornos de mufla, mecheros Bunsen y otras fuentes de calor en laboratorios de química, metalurgia y análisis térmico.",
    price: 1.2,
    image: "/images/laboratorio/UTENSILIOS/TRIANGULO.png"
  },

  {
    id: "tripode-para-mechero-bunsen-metalico",
    name: "TRÍPODE METÁLICO PARA CALENTAMIENTO CON MECHERO BUNSEN",
    type: "Utensilios",
    description: "Trípode metálico de tres patas fabricado en hierro de alta resistencia, diseñado para sostener vasos de precipitados, matraces, crisoles y otros recipientes de laboratorio durante procesos de calentamiento con mechero Bunsen o de alcohol. Su estructura estable y robusta garantiza una base segura y uniforme para el recipiente, permitiendo una distribución homogénea del calor desde la fuente inferior. Generalmente se usa en combinación con una malla de asbesto o cerámica para proteger el material de vidrio de los cambios bruscos de temperatura. Ideal para laboratorios clínicos, académicos e industriales.",
    price: 24,
    image: "/images/laboratorio/UTENSILIOS/TRIPODE_BUNSEN.png"
  },
  {
    id: "crisol-de-porcelana",
    name: "CRISOLES DE PORCELANA",
    type: "Utensilios",
    description: "Crisol de porcelana de alta pureza, diseñado para la fusión, calcinación e incineración de muestras a temperaturas elevadas en laboratorio. Su material cerámico soporta temperaturas de hasta 1200 °C, es químicamente inerte frente a la mayoría de reactivos y presenta una superficie lisa que facilita la recuperación cuantitativa del contenido. Ampliamente utilizado en análisis gravimétricos, determinación de cenizas, ensayos de ignición y procesos de síntesis a alta temperatura. Ideal para laboratorios analíticos, académicos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/CRISOLCARD.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "15-ml", label: "15 ml" },
          { id: "20-ml", label: "20 ml" },
          { id: "25-ml", label: "25 ml" },
          { id: "30-ml", label: "30 ml" },
          { id: "50-ml", label: "50 ml" },
          { id: "100-ml", label: "100 ml" },
          { id: "150-ml", label: "150 ml" }
        ]
      }
    ],

    variants: [
      { sku: "crisol-porcelana-15ml", attrs: { capacidad: "15-ml" }, name: "15 ML", description: "Crisol de porcelana de alta pureza para fusión, calcinación e incineración de muestras a altas temperaturas en laboratorio. || **Capacidad:** 15 ml.", price: 1.2, image: "/images/laboratorio/UTENSILIOS/CRISOL.png" },
      { sku: "crisol-porcelana-20ml", attrs: { capacidad: "20-ml" }, name: "20 ML", description: "Crisol de porcelana de alta pureza para fusión, calcinación e incineración de muestras a altas temperaturas en laboratorio. || **Capacidad:** 20 ml.", price: 1.2, image: "/images/laboratorio/UTENSILIOS/CRISOL.png" },
      { sku: "crisol-porcelana-25ml", attrs: { capacidad: "25-ml" }, name: "25 ML", description: "Crisol de porcelana de alta pureza para fusión, calcinación e incineración de muestras a altas temperaturas en laboratorio. || **Capacidad:** 25 ml.", price: 1.2, image: "/images/laboratorio/UTENSILIOS/CRISOL.png" },
      { sku: "crisol-porcelana-30ml", attrs: { capacidad: "30-ml" }, name: "30 ML", description: "Crisol de porcelana de alta pureza para fusión, calcinación e incineración de muestras a altas temperaturas en laboratorio. || **Capacidad:** 30 ml.", price: 1.2, image: "/images/laboratorio/UTENSILIOS/CRISOL.png" },
      { sku: "crisol-porcelana-50ml", attrs: { capacidad: "50-ml" }, name: "50 ML", description: "Crisol de porcelana de alta pureza para fusión, calcinación e incineración de muestras a altas temperaturas en laboratorio. || **Capacidad:** 50 ml.", price: 1.2, image: "/images/laboratorio/UTENSILIOS/CRISOL.png" },
      { sku: "crisol-porcelana-100ml", attrs: { capacidad: "100-ml" }, name: "100 ML", description: "Crisol de porcelana de alta pureza para fusión, calcinación e incineración de muestras a altas temperaturas en laboratorio. || **Capacidad:** 100 ml.", price: 1.2, image: "/images/laboratorio/UTENSILIOS/CRISOL.png" },
      { sku: "crisol-porcelana-150ml", attrs: { capacidad: "150-ml" }, name: "150 ML", description: "Crisol de porcelana de alta pureza para fusión, calcinación e incineración de muestras a altas temperaturas en laboratorio. || **Capacidad:** 150 ml.", price: 1.2, image: "/images/laboratorio/UTENSILIOS/CRISOL.png" }
    ]
  },




  {
    id: "placas-petri-vidrio-borosilicato",
    name: "PLACAS PETRI – VIDRIO BOROSILICATO",
    Type: "Utensilios ",
    description: "Placas Petri fabricadas en vidrio de borosilicato (Boro 3.3), diseñadas para el cultivo y aislamiento de microorganismos en laboratorio. Su superficie lisa y uniforme permite una distribución homogénea del medio de cultivo, mientras que su alta resistencia térmica facilita la esterilización en autoclave. Disponibles en versión lisa y con divisiones internas que permiten el cultivo simultáneo de múltiples muestras en una misma placa. Ideales para laboratorios clínicos, microbiológicos, académicos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/PETRICARD.png",

    attributeOrder: ["formato"],

    attributes: [
      {
        id: "formato",
        label: "Formato",
        type: "single",
        values: [
          { id: "sin-divisiones", label: "90 × 15 mm – Sin divisiones" },
          { id: "2-divisiones", label: "90 × 15 mm – 2 divisiones" },
          { id: "3-divisiones", label: "90 × 15 mm – 3 divisiones" },
          { id: "4-divisiones", label: "90 × 15 mm – 4 divisiones" }
        ]
      }
    ],

    variants: [
      {
        sku: "placa-petri-90x15-sin-div",
        attrs: { formato: "sin-divisiones" },
        name: "90 × 15 MM – SIN DIVISIONES",
        description: "Placa Petri de vidrio de borosilicato lisa para cultivo de microorganismos en una sola área de siembra, autoclavable y de fácil limpieza. || **Medida:** 90 × 15 mm | **Divisiones:** Sin divisiones.",
        price: 288,
        image: "/images/laboratorio/UTENSILIOS/PETRI_SIN.png"
      },
      {
        sku: "placa-petri-90x15-2-div",
        attrs: { formato: "2-divisiones" },
        name: "90 × 15 MM – 2 DIVISIONES",
        description: "Placa Petri de vidrio de borosilicato con 2 divisiones internas que permiten el cultivo simultáneo de dos muestras distintas en una misma placa, autoclavable y de fácil limpieza. || **Medida:** 90 × 15 mm | **Divisiones:** 2.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/PETRI_2.png"
      },
      {
        sku: "placa-petri-90x15-3-div",
        attrs: { formato: "3-divisiones" },
        name: "90 × 15 MM – 3 DIVISIONES",
        description: "Placa Petri de vidrio de borosilicato con 3 divisiones internas que permiten el cultivo simultáneo de tres muestras distintas en una misma placa, autoclavable y de fácil limpieza. || **Medida:** 90 × 15 mm | **Divisiones:** 3.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/PETRI_3.png"
      },
      {
        sku: "placa-petri-90x15-4-div",
        attrs: { formato: "4-divisiones" },
        name: "90 × 15 MM – 4 DIVISIONES",
        description: "Placa Petri de vidrio de borosilicato con 4 divisiones internas que permiten el cultivo simultáneo de cuatro muestras distintas en una misma placa, autoclavable y de fácil limpieza. || **Medida:** 90 × 15 mm | **Divisiones:** 4.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/PETRI_4.png"
      }
    ]
  },
  {
    id: "soporte-universal-metalico-base-pesada",
    name: "SOPORTE UNIVERSAL METÁLICO BASE PESADA",
    Type: "Utensilios ",
    image: "/images/laboratorio/UTENSILIOS/SOPORTE_UNIVERSAL_CARD.png",

    priceRange: {
      min: 5,
      max: 5
    },

    attributeOrder: ["base", "accesorios", "tamano"],

    attributes: [
      {
        id: "base",
        label: "Modelo",
        type: "single",
        values: [
          { id: "simple", label: "Simple (base + varilla)" }
        ]
      },
      {
        id: "accesorios",
        label: "Accesorios",
        type: "multi",
        values: [
          {
            id: "pinza-doble-nuez",
            label: "Pinza universal con doble nuez",
            name: "Pinza universal con doble nuez",
            priceDelta: 5,
            compatibleWith: ["simple"],
            images: [
              "/images/laboratorio/UTENSILIOS/SOPORTE_PINZA_NUEZ.png"
            ]
          },
          {
            id: "aro-metalico",
            label: "Aro metálico",
            name: "Aro metálico",
            priceDelta: 5,
            compatibleWith: ["simple"],
            images: [
              "/images/laboratorio/UTENSILIOS/SOPORTE_ARO.png"
            ]
          },
          {
            id: "rejilla-ceramica",
            label: "Rejilla metálica con centro cerámico",
            name: "Rejilla metálica con centro cerámico",
            priceDelta: 5,
            compatibleWith: ["simple"],
            images: [
              "/images/laboratorio/UTENSILIOS/SOPORTE_REJILLA.png"
            ]
          }
        ]
      },
      {
        id: "tamano",
        label: "Tamaño",
        type: "multi",
        values: [
          // Tamaños para Aro metálico
          { id: "aro-60mm", label: "Aro – 60 mm", appliesTo: "aro-metalico" },
          { id: "aro-80mm", label: "Aro – 80 mm", appliesTo: "aro-metalico" },
          { id: "aro-100mm", label: "Aro – 100 mm", appliesTo: "aro-metalico" },
          // Tamaños para Rejilla cerámica
          { id: "rejilla-125mm", label: "Rejilla – 12.5 cm", appliesTo: "rejilla-ceramica" },
          { id: "rejilla-150mm", label: "Rejilla – 15 cm", appliesTo: "rejilla-ceramica" },
          { id: "rejilla-200mm", label: "Rejilla – 20 cm", appliesTo: "rejilla-ceramica" }
        ]
      }
    ],

    // tamano solo activo si se selecciona aro o rejilla; pinza no activa tamano
    attributeRules: {
      "pinza-doble-nuez": { tamano: [] },
      "aro-metalico": { tamano: ["aro-60mm", "aro-80mm", "aro-100mm"] },
      "rejilla-ceramica": { tamano: ["rejilla-125mm", "rejilla-150mm", "rejilla-200mm"] }
    },

    variants: [
      {
        sku: "soporte-simple",
        attrs: { base: "simple" },
        name: "SIMPLE – BASE + VARILLA",
        description: "Soporte universal metálico de base pesada con varilla vertical roscada que permite el montaje de accesorios a distintas alturas. Su base de hierro fundido garantiza estabilidad durante procedimientos experimentales que requieren sujeción de buretas, matraces, condensadores y otros equipos de laboratorio. Compatible con pinza universal, aros metálicos y rejillas cerámicas como accesorios opcionales. Ideal para laboratorios clínicos, académicos e industriales. || **Incluye:** Base de hierro fundido y varilla metálica roscada.",
        price: 5,
        images: [
          "/images/laboratorio/UTENSILIOS/SOPORTE_UNIVERSAL_CARD.png"
        ]
      }
    ]
  },
  {
    id: "tubo-de-ensayo-vidrio",
    name: "TUBO DE ENSAYO DE VIDRIO",
    type: "Utensilios",
    description: "Tubos de ensayo fabricados en vidrio de borosilicato, diseñados para la realización de reacciones químicas, cultivos, mezclas y ensayos en laboratorio. Su alta resistencia térmica y química los hace compatibles con la mayoría de reactivos y fuentes de calor. Disponibles en distintas dimensiones y con opción de tapa rosca para mayor hermeticidad. Ideales para laboratorios clínicos, microbiológicos, académicos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/TUBOSCARD.png",

    attributeOrder: ["tipo", "medida"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "abierto", label: "Sin tapa" },
          { id: "tapa-rosca", label: "Con tapa" }
        ]
      },
      {
        id: "medida",
        label: "Medida (Ø × largo)",
        type: "single",
        values: [
          { id: "10x75", label: "10 × 75 mm" },
          { id: "12x75", label: "12 × 75 mm" },
          { id: "13x100", label: "13 × 100 mm" },
          { id: "13x150", label: "13 × 150 mm" },
          { id: "16x150", label: "16 × 150 mm" },
          { id: "18x180", label: "18 × 180 mm" },
          { id: "20x200", label: "20 × 200 mm" },
          { id: "16x125", label: "16 × 125 mm" },
          { id: "18x150", label: "18 × 150 mm" }
        ]
      }
    ],

    attributeRules: {
      "abierto": { medida: ["10x75", "12x75", "13x100", "13x150", "16x150", "18x180", "20x200"] },
      "tapa-rosca": { medida: ["13x100", "16x125", "18x150", "20x200"] }
    },

    variants: [

      // ─── ABIERTO ──────────────────────────────────────────────
      {
        sku: "tubo-ensayo-abierto-10x75",
        attrs: { tipo: "abierto", medida: "10x75" },
        name: "ABIERTO 10 × 75 mm",
        description: "Tubo de ensayo de vidrio borosilicato para reacciones y ensayos en laboratorio. || **Tipo:** Abierto | **Medida:** 10 × 75 mm.",
        price: 1.2,
        image: "/images/laboratorio/UTENSILIOS/TUBO_ENSAYO_ST.png"
      },
      {
        sku: "tubo-ensayo-abierto-12x75",
        attrs: { tipo: "abierto", medida: "12x75" },
        name: "ABIERTO 12 × 75 mm",
        description: "Tubo de ensayo de vidrio borosilicato para reacciones y ensayos en laboratorio. || **Tipo:** Abierto | **Medida:** 12 × 75 mm.",
        price: 0.84,
        image: "/images/laboratorio/UTENSILIOS/TUBO_ENSAYO_ST.png"
      },
      {
        sku: "tubo-ensayo-abierto-13x100",
        attrs: { tipo: "abierto", medida: "13x100" },
        name: "ABIERTO 13 × 100 mm",
        description: "Tubo de ensayo de vidrio borosilicato para reacciones y ensayos en laboratorio. || **Tipo:** Abierto | **Medida:** 13 × 100 mm.",
        price: 1.2,
        image: "/images/laboratorio/UTENSILIOS/TUBO_ENSAYO_ST.png"
      },
      {
        sku: "tubo-ensayo-abierto-13x150",
        attrs: { tipo: "abierto", medida: "13x150" },
        name: "ABIERTO 13 × 150 mm",
        description: "Tubo de ensayo de vidrio borosilicato para reacciones y ensayos en laboratorio. || **Tipo:** Abierto | **Medida:** 13 × 150 mm.",
        price: 0.84,
        image: "/images/laboratorio/UTENSILIOS/TUBO_ENSAYO_ST.png"
      },
      {
        sku: "tubo-ensayo-abierto-16x150",
        attrs: { tipo: "abierto", medida: "16x150" },
        name: "ABIERTO 16 × 150 mm",
        description: "Tubo de ensayo de vidrio borosilicato para reacciones y ensayos en laboratorio. || **Tipo:** Abierto | **Medida:** 16 × 150 mm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/TUBO_ENSAYO_ST.png"
      },
      {
        sku: "tubo-ensayo-abierto-18x180",
        attrs: { tipo: "abierto", medida: "18x180" },
        name: "ABIERTO 18 × 180 mm",
        description: "Tubo de ensayo de vidrio borosilicato para reacciones y ensayos en laboratorio. || **Tipo:** Abierto | **Medida:** 18 × 180 mm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/TUBO_ENSAYO_ST.png"
      },
      {
        sku: "tubo-ensayo-abierto-20x200",
        attrs: { tipo: "abierto", medida: "20x200" },
        name: "ABIERTO 20 × 200 mm",
        description: "Tubo de ensayo de vidrio borosilicato para reacciones y ensayos en laboratorio. || **Tipo:** Abierto | **Medida:** 20 × 200 mm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/TUBO_ENSAYO_ST.png"
      },

      // ─── CON TAPA ROSCA ───────────────────────────────────────
      {
        sku: "tubo-ensayo-rosca-13x100",
        attrs: { tipo: "tapa-rosca", medida: "13x100" },
        name: "TAPA ROSCA 13 × 100 mm × 100 UND",
        description: "Tubo de ensayo de vidrio borosilicato con tapa rosca para mayor hermeticidad en almacenamiento y transporte de muestras. || **Tipo:** Con tapa rosca | **Medida:** 13 × 100 mm | **Presentación:** Caja × 100 und.",
        price: 348,
        image: "/images/laboratorio/UTENSILIOS/TUBO_ENSAYO_ROSCA.png"
      },
      {
        sku: "tubo-ensayo-rosca-16x125",
        attrs: { tipo: "tapa-rosca", medida: "16x125" },
        name: "TAPA ROSCA 16 × 125 mm",
        description: "Tubo de ensayo de vidrio borosilicato con tapa rosca para mayor hermeticidad en almacenamiento y transporte de muestras. || **Tipo:** Con tapa rosca | **Medida:** 16 × 125 mm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/TUBO_ENSAYO_ROSCA.png"
      },
      {
        sku: "tubo-ensayo-rosca-18x150",
        attrs: { tipo: "tapa-rosca", medida: "18x150" },
        name: "TAPA ROSCA 18 × 150 mm",
        description: "Tubo de ensayo de vidrio borosilicato con tapa rosca para mayor hermeticidad en almacenamiento y transporte de muestras. || **Tipo:** Con tapa rosca | **Medida:** 18 × 150 mm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/TUBO_ENSAYO_ROSCA.png"
      },
      {
        sku: "tubo-ensayo-rosca-20x200",
        attrs: { tipo: "tapa-rosca", medida: "20x200" },
        name: "TAPA ROSCA 20 × 200 mm",
        description: "Tubo de ensayo de vidrio borosilicato con tapa rosca para mayor hermeticidad en almacenamiento y transporte de muestras. || **Tipo:** Con tapa rosca | **Medida:** 20 × 200 mm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/TUBO_ENSAYO_ROSCA.png"
      }
    ]
  },


  {
    id: "espatula-de-laboratorio-metal-mango-madera",
    name: "ESPÁTULA ACERO INOX Y MANGO DE MADERA",
    Type: "Utensilios ",
    description: "Espátula de laboratorio fabricada en acero inoxidable con mango de madera, diseñada para la manipulación, trasvase y pesado de reactivos sólidos, polvos y muestras en laboratorio. Su hoja metálica de doble extremo permite raspar, mezclar y transferir materiales con precisión, mientras que el mango de madera proporciona un agarre cómodo y aislado del calor. Resistente a la mayoría de reactivos químicos y de fácil limpieza. Ideal para laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/UTENSILIOS/ESPATULA.png",

    attributeOrder: ["lamina"],

    attributes: [
      {
        id: "lamina",
        label: "Lámina de acero (sin mango)",
        type: "single",
        values: [
          { id: "10-cm", label: "10 cm" },
          { id: "15-cm", label: "15 cm" },
          { id: "20-cm", label: "20 cm" }
        ]
      }
    ],

    variants: [
      {
        sku: "espatula-metal-madera-10cm",
        attrs: { lamina: "10-cm" },
        name: "LÁMINA 10 CM",
        description: "Espátula de acero inoxidable con mango de madera para manipulación y trasvase de reactivos sólidos y polvos en laboratorio. || **Lámina de acero:** 10 cm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/ESPATULA.png"
      },
      {
        sku: "espatula-metal-madera-15cm",
        attrs: { lamina: "15-cm" },
        name: "LÁMINA 15 CM",
        description: "Espátula de acero inoxidable con mango de madera para manipulación y trasvase de reactivos sólidos y polvos en laboratorio. || **Lámina de acero:** 15 cm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/ESPATULA.png"
      },
      {
        sku: "espatula-metal-madera-20cm",
        attrs: { lamina: "20-cm" },
        name: "LÁMINA 20 CM",
        description: "Espátula de acero inoxidable con mango de madera para manipulación y trasvase de reactivos sólidos y polvos en laboratorio. || **Lámina de acero:** 20 cm.",
        price: 5,
        image: "/images/laboratorio/UTENSILIOS/ESPATULA.png"
      }
    ]
  },
  {
    id: "reactivo-de-fehling",
    name: "REACTIVO DE FEHLING",
    type: "Reactivos",
    description: "Reactivo de Fehling para la detección e identificación de azúcares reductores en muestras biológicas, alimentos y soluciones químicas. Se compone de dos soluciones (A y B) que se mezclan en partes iguales antes de su uso, produciendo un precipitado rojo ladrillo en presencia de glucosa y otros monosacáridos reductores. Ampliamente utilizado en análisis clínicos, control de calidad alimentario y prácticas de bioquímica en laboratorios académicos e industriales.",
    image: "/images/laboratorio/REACTIVOS/FEHLING_CARD.png",

    attributeOrder: ["solucion"],

    attributes: [
      {
        id: "solucion",
        label: "Solución",
        type: "single",
        values: [
          { id: "fehling-a", label: "Fehling A" },
          { id: "fehling-b", label: "Fehling B" }
        ]
      }
    ],

    variants: [
      {
        sku: "reactivo-fehling-a-100ml",
        attrs: { solucion: "fehling-a" },
        name: "FEHLING A × 100 ML",
        description: "Solución A del reactivo de Fehling (sulfato de cobre en solución acuosa), utilizada junto con la solución B para la detección de azúcares reductores en muestras biológicas y alimentarias. || **Solución:** Fehling A | **Capacidad:** 100 ml.",
        price: 18,
        image: "/images/laboratorio/REACTIVOS/FEHLING_A.png"
      },
      {
        sku: "reactivo-fehling-b-100ml",
        attrs: { solucion: "fehling-b" },
        name: "FEHLING B × 100 ML",
        description: "Solución B del reactivo de Fehling (tartrato de sodio y potasio en hidróxido de sodio), utilizada junto con la solución A para la detección de azúcares reductores en muestras biológicas y alimentarias. || **Solución:** Fehling B | **Capacidad:** 100 ml.",
        price: 19.2,
        image: "/images/laboratorio/REACTIVOS/FEHLING_B.png"
      }
    ]
  },

  {
    id: "reactivo-de-molish-500-g",
    name: "REACTIVO DE MOLISCH × 500 G",
    type: "Reactivos",
    description: "Reactivo de Molisch en presentación de 500 g, utilizado en la prueba cualitativa general para la detección de carbohidratos en muestras biológicas y soluciones químicas. En presencia de cualquier hidrato de carbono produce un característico anillo púrpura-violeta en la interfase con el ácido sulfúrico concentrado, siendo una de las reacciones más sensibles y universales para la identificación de azúcares. Ampliamente empleado en bioquímica clínica, análisis de alimentos y prácticas de laboratorio académico.",
    price: 1.2,
    image: "/images/laboratorio/REACTIVOS/MOLISCH.png"
  },


  {
    id: "solucion-de-fenolftaleina-al-1-100-ml",
    name: "SOLUCIÓN DE FENOLFTALEÍNA AL 1% × 100 ML",
    type: "Reactivos",
    description: "Solución de fenolftaleína al 1% en presentación de 100 ml, lista para usar como indicador de pH en volumetrías ácido-base. Su rango de viraje entre pH 8.2 y 10.0, pasando de incoloro a rosa-fucsia intenso, la convierte en el indicador estándar para titulaciones alcalimétricas y determinación de acidez en muestras de agua, alimentos y productos industriales. Debe almacenarse en frasco ámbar, protegida de la luz y a temperatura ambiente. Ideal para laboratorios analíticos, clínicos y académicos.",
    price: 14.4,
    image: "/images/laboratorio/REACTIVOS/FENOLFTALEINA_SOL.png"
  },

  {
    id: "sulfato-de-cobre",
    name: "SULFATO DE COBRE",
    type: "Reactivos",
    description: "Sulfato de cobre de alta pureza, disponible en solución lista para usar y en forma sólida pentahidratada en distintas presentaciones. Ampliamente utilizado como reactivo en la reacción de Biuret para detección de proteínas, preparación del reactivo de Fehling, análisis microbiológicos y síntesis química. Su característico color azul intenso facilita su identificación en las reacciones. Debe almacenarse en lugar fresco, seco y alejado de metales reactivos. Ideal para laboratorios clínicos, bioquímicos, académicos e industriales.",
    image: "/images/laboratorio/REACTIVOS/SULFATO_COBRE_CARD.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "solucion-100ml", label: "Solución × 100 ml" },
          { id: "pentahidratado-500g", label: "Pentahidratado 500 g" },
          { id: "pentahidratado-1kg", label: "Pentahidratado 1 kg" }
        ]
      }
    ],

    variants: [
      {
        sku: "sulfato-cobre-solucion-100ml",
        attrs: { presentacion: "solucion-100ml" },
        name: "SOLUCIÓN × 100 ML",
        description: "Solución de sulfato de cobre lista para usar en reacción de Biuret, preparación de reactivo de Fehling y análisis microbiológicos en laboratorio. || **Forma:** Solución | **Capacidad:** 100 ml.",
        price: 24,
        image: "/images/laboratorio/REACTIVOS/SULFATO_COBRE_SOL.png"
      },
      {
        sku: "sulfato-cobre-pentahidratado-500g",
        attrs: { presentacion: "pentahidratado-500g" },
        name: "PENTAHIDRATADO 500 G",
        description: "Sulfato de cobre pentahidratado (CuSO₄·5H₂O) de alta pureza al 99% para uso analítico, síntesis química y preparación de soluciones en laboratorio. || **Forma:** Sólido pentahidratado | **Presentación:** 500 g.",
        price: 84,
        image: "/images/laboratorio/REACTIVOS/SULFATO_COBRE_500G.png"
      },
      {
        sku: "sulfato-cobre-pentahidratado-1kg",
        attrs: { presentacion: "pentahidratado-1kg" },
        name: "PENTAHIDRATADO 1 KG",
        description: "Sulfato de cobre pentahidratado (CuSO₄·5H₂O) de alta pureza al 99% para uso analítico, síntesis química y preparación de soluciones en laboratorio. || **Forma:** Sólido pentahidratado | **Presentación:** 1 kg.",
        price: 96,
        image: "/images/laboratorio/REACTIVOS/SULFATO_COBRE_1KG.png"
      }
    ]
  },
  {
    id: "sulfato-de-hierro-heptahidratado-al-99-500-g",
    name: "SULFATO DE HIERRO HEPTAHIDRATADO AL 99% × 500 G",
    type: "Reactivos",
    description: "Sulfato de hierro (II) heptahidratado de pureza al 99% en presentación de 500 g, conocido también como sulfato ferroso. Ampliamente utilizado como agente reductor en análisis volumétricos, determinación de oxidantes por permanganometría y dichromatometría, así como en la preparación del reactivo de Mohr para determinación de cloruros. Su color verde característico vira a amarillo-marrón por oxidación, siendo este cambio un indicador de su estado de conservación. Debe almacenarse en recipiente hermético, en lugar fresco y seco. Ideal para laboratorios analíticos, académicos e industriales.",
    price: 198,
    image: "/images/laboratorio/REACTIVOS/SULFATO_HIERRO.png"
  },

  {
    id: "sulfato-de-niquel-hexahidratado-al-99-500-g",
    name: "SULFATO DE NÍQUEL HEXAHIDRATADO AL 99% × 500 G",
    type: "Reactivos",
    description: "Sulfato de níquel hexahidratado de pureza al 99% en presentación de 500 g, reconocible por su característico color verde-azulado. Utilizado como reactivo en síntesis inorgánica, electrodeposición de níquel, preparación de soluciones patrón y catálisis química. Por su clasificación como compuesto tóxico y potencialmente cancerígeno, requiere manipulación con equipos de protección personal adecuados y descarte conforme a la normativa de residuos peligrosos. Debe almacenarse en recipiente hermético, en lugar fresco, seco y ventilado. Ideal para laboratorios analíticos, electroquímicos y de investigación.",
    price: 184.8,
    image: "/images/laboratorio/REACTIVOS/SULFATO_NIQUEL.png"
  },

  {
    id: "sulfato-de-zinc-500-grs",
    name: "SULFATO DE ZINC 500 GRS",
    type: "Reactivos",
    description: "Sulfato de zinc de alta pureza en presentación de 500 g, ampliamente utilizado como reactivo en análisis químicos, preparación de soluciones de precipitación y técnicas de concentración de parásitos en coproparasitología (método de flotación de Faust). También empleado en síntesis inorgánica, galvanoplastia y como suplemento mineral en medios de cultivo microbiológico. Debe almacenarse en recipiente hermético en lugar fresco y seco. Ideal para laboratorios clínicos, parasitológicos, académicos e industriales.",
    price: 60,
    image: "/images/laboratorio/REACTIVOS/SULFATO_ZINC.png"
  },

  {
    id: "tetracloruro-de-carbono-200-ml",
    name: "TETRACLORURO DE CARBONO × 200 ML",
    type: "Reactivos",
    description: "Tetracloruro de carbono de alta pureza en presentación de 200 ml, solvente orgánico no polar ampliamente utilizado en extracción de lípidos, grasas y compuestos apolares, así como en espectroscopía infrarroja y análisis cromatográfico. Por su alta densidad y baja miscibilidad con agua es empleado en extracciones líquido-líquido en química analítica. Debido a su toxicidad hepática, potencial cancerígeno y efecto sobre la capa de ozono, debe manipularse estrictamente en campana extractora con equipos de protección personal adecuados y descartarse según normativa de residuos peligrosos. Ideal para laboratorios analíticos y de investigación.",
    price: 192,
    image: "/images/laboratorio/REACTIVOS/TETRACLORURO_CARBONO.png"
  },

  {
    id: "tiocianato-de-potasio-100-g",
    name: "TIOCIANATO DE POTASIO × 100 G",
    type: "Reactivos",
    description: "Tiocianato de potasio de alta pureza en presentación de 100 g, utilizado como reactivo volumétrico en el método de Volhard para la determinación de halógenos por argentometría, así como en la detección colorimétrica de iones hierro (III), con los que forma un complejo rojo sangre característico. Empleado también en síntesis orgánica e inorgánica y como ligando en química de coordinación. Por su toxicidad moderada, debe manipularse con equipos de protección personal adecuados y almacenarse en lugar fresco, seco y alejado de ácidos fuertes. Ideal para laboratorios analíticos, académicos y de investigación.",
    price: 174,
    image: "/images/laboratorio/REACTIVOS/TIOCIANATO_POTASIO.png"
  },


  {
    id: "zinc-metalico-polvo-por-500-grs",
    name: "ZINC METÁLICO POLVO × 500 GRS",
    type: "Reactivos",
    description: "Zinc metálico en polvo de alta pureza en presentación de 500 g, utilizado como agente reductor en análisis químicos cuantitativos, determinación de nitratos y nitritos, y reacciones de reducción en química analítica. Su forma pulverizada maximiza la superficie de reacción, acelerando los procesos de reducción y disolución en medios ácidos. Debe almacenarse en recipiente hermético, en lugar seco y alejado de ácidos y oxidantes. Ideal para laboratorios analíticos, académicos e industriales.",
    price: 162,
    image: "/images/laboratorio/REACTIVOS/ZINC_METALICO_POLVO.png"
  },

  {
    id: "oxido-de-zinc-0-5-kg",
    name: "ÓXIDO DE ZINC × 500 GRS",
    type: "Reactivos",
    description: "Óxido de zinc de alta pureza en presentación de 500 g, utilizado como reactivo en síntesis inorgánica, preparación de pigmentos, análisis químicos y como precursor en la fabricación de compuestos de zinc. Sus propiedades anfóteras le permiten reaccionar tanto con ácidos como con bases, siendo ampliamente empleado en procesos de neutralización, catálisis y como agente desecante. Debe almacenarse en recipiente hermético en lugar fresco, seco y ventilado. Ideal para laboratorios analíticos, académicos e industriales.",
    price: 84,
    image: "/images/laboratorio/REACTIVOS/OXIDO_ZINC.png"
  },

  {
    id: "acido-sulfosalicilico-100-ml",
    name: "ÁCIDO SULFOSALICÍLICO × 100 ML",
    type: "Reactivos",
    description: "Ácido sulfosalicílico en presentación de 100 ml, ampliamente utilizado como reactivo de precipitación de proteínas en orina para la detección semicuantitativa de proteinuria en análisis clínicos. Su reacción con proteínas produce una turbidez proporcional a la concentración proteica, siendo una prueba rápida y sensible en el laboratorio clínico. También empleado como agente quelante y en síntesis orgánica. Debe manipularse con equipos de protección personal adecuados y almacenarse en lugar fresco, seco y protegido de la luz. Ideal para laboratorios clínicos, académicos y de investigación.",
    price: 48,
    image: "/images/laboratorio/REACTIVOS/ACIDO_SULFOSALICILICO.png"
  },

  {
    id: "glucosa-anhidra",
    name: "GLUCOSA ANHIDRA",
    type: "Reactivos",
    description: "Glucosa anhidra de alta pureza, utilizada como reactivo patrón primario en la preparación de soluciones estándar para curvas de calibración, determinación de glucosa en muestras biológicas y control de calidad en métodos enzimáticos y colorimétricos. Su forma anhidra garantiza una pureza superior y mayor estabilidad frente a la forma hidratada, siendo esencial en laboratorios clínicos, bioquímicos y de investigación donde se requiere precisión en la cuantificación de carbohidratos.",
    image: "/images/laboratorio/REACTIVOS/GLUCOSA_ANHIDRA_CARD.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "500-g", label: "500 g" },
          { id: "1-kg", label: "1 kg" }
        ]
      }
    ],

    variants: [
      {
        sku: "glucosa-anhidra-500g",
        attrs: { presentacion: "500-g" },
        name: "500 G",
        description: "Glucosa anhidra de alta pureza para preparación de soluciones estándar y determinación de glucosa en muestras biológicas. || **Presentación:** 500 g.",
        price: 45.6,
        image: "/images/laboratorio/REACTIVOS/GLUCOSA_ANHIDRA500.png"
      },
      {
        sku: "glucosa-anhidra-1kg",
        attrs: { presentacion: "1-kg" },
        name: "1 KG",
        description: "Glucosa anhidra de alta pureza para preparación de soluciones estándar y determinación de glucosa en muestras biológicas. || **Presentación:** 1 kg.",
        price: 72,
        image: "/images/laboratorio/REACTIVOS/GLUCOSA_ANHIDRA1000.png"
      }
    ]
  },

  {
    id: "hidróxido-de-sodio-1000-grs",
    name: "HIDRÓXIDO DE SODIO × 1000 GRS",
    type: "Reactivos",
    description: "Hidróxido de sodio (NaOH) de alta pureza en presentación de 1 kg, uno de los reactivos alcalinos más utilizados en química analítica e industrial. Empleado como agente neutralizante en volumetrías ácido-base, preparación de soluciones tampón, digestión de muestras biológicas y síntesis química. Su fuerte carácter básico y alta solubilidad en agua lo convierten en un insumo esencial en laboratorios clínicos, académicos e industriales. Por su naturaleza extremadamente corrosiva y su reacción exotérmica al disolverse en agua, debe manipularse con equipos de protección personal adecuados y almacenarse en recipiente hermético, en lugar fresco, seco y alejado de ácidos y materiales orgánicos.",
    price: 468,
    image: "/images/laboratorio/REACTIVOS/HIDROXIDO_SODIO.png"
  },

  {
    id: "nitrato-de-cadmio-500-grs",
    name: "NITRATO DE CADMIO × 500 GRS",
    type: "Reactivos",
    description: "Nitrato de cadmio de alta pureza en presentación de 500 g, utilizado como reactivo en síntesis inorgánica, preparación de soluciones de cadmio para análisis espectroscópico y como precursor en la fabricación de pigmentos y semiconductores de cadmio. Por su clasificación como compuesto altamente tóxico, cancerígeno y peligroso para el medio ambiente, requiere manipulación estricta con equipos de protección personal completos y descarte conforme a la normativa de residuos peligrosos. Debe almacenarse en recipiente hermético, en lugar fresco, seco y ventilado, alejado de reductores y materiales orgánicos. Ideal para laboratorios analíticos, de síntesis y de investigación.",
    price: 384,
    image: "/images/laboratorio/REACTIVOS/NITRATO_CADMIO.png"
  },

  {
    id: "nitrato-de-plata-solucion-agno3-al-3-100-ml",
    name: "NITRATO DE PLATA SOLUCIÓN (AgNO₃) AL 3% × 100 ML",
    type: "Reactivos",
    description: "Solución de nitrato de plata al 3% (AgNO₃) en presentación de 100 ml, ampliamente utilizada en volumetrías de precipitación para la determinación de cloruros por el método de Mohr y Volhard, así como en la detección de halogenuros en muestras clínicas, aguas y alimentos. Su acción bactericida la hace también útil en aplicaciones microbiológicas y dermatológicas. Por su sensibilidad a la luz, debe almacenarse en frasco ámbar, en lugar oscuro y fresco. Requiere manipulación con guantes ya que mancha la piel de forma persistente. Ideal para laboratorios analíticos, clínicos y académicos.",
    price: 204,
    image: "/images/laboratorio/REACTIVOS/NITRATO_PLATA_SOL.png"
  },

  {
    id: "nitrato-ferrico-100-g",
    name: "NITRATO FÉRRICO × 100 G",
    type: "Reactivos",
    description: "Nitrato férrico (Fe(NO₃)₃) de alta pureza en presentación de 100 g, utilizado como reactivo oxidante en síntesis orgánica e inorgánica, grabado de metales y como catalizador en diversas reacciones químicas. En análisis cualitativo es empleado para la detección de tiocianatos, con los que forma un complejo rojo sangre característico, y en la identificación de fenoles y compuestos aromáticos. Debe almacenarse en recipiente hermético en lugar fresco, seco y alejado de reductores y materiales orgánicos. Ideal para laboratorios analíticos, académicos e industriales.",
    price: 1.2,
    image: "/images/laboratorio/REACTIVOS/NITRATO_FERRICO.png"
  },
  {
    id: "indicador-azul-de-timol",
    name: "INDICADOR AZUL DE TIMOL",
    type: "Reactivos",
    description: "Azul de timol (timolsulfonftaleína), indicador de doble viraje utilizado en volumetrías ácido-base. Presenta viraje de rojo a amarillo en el rango pH 1.2–2.8 y de amarillo a azul en el rango pH 8.0–9.6, siendo especialmente útil en titulaciones en medios semiacuosos y determinaciones potenciométricas. Disponible en estado sólido para preparación de soluciones a la concentración requerida y en solución lista para usar. Ideal para laboratorios analíticos, académicos y de investigación.",
    image: "/images/laboratorio/REACTIVOS/AZUL_TIMO_CARD.png",

    attributeOrder: ["forma"],

    attributes: [
      {
        id: "forma",
        label: "Presentación",
        type: "single",
        values: [
          { id: "solido-10g", label: "Sólido × 10 g" },
          { id: "solucion-50ml", label: "Solución × 50 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "azul-timol-solido-10g",
        attrs: { forma: "solido-10g" },
        name: "SÓLIDO × 10 G",
        description: "Azul de timol en estado sólido (polvo) para preparación de soluciones indicadoras a la concentración requerida en volumetrías ácido-base y análisis potenciométricos. || **Estado:** Sólido | **Presentación:** 10 g | **Rango pH:** 1.2–2.8 y 8.0–9.6.",
        price: 1.2,
        image: "/images/laboratorio/REACTIVOS/AZUL_TIMO_SOLIDO.png"
      },
      {
        sku: "azul-timol-solucion-50ml",
        attrs: { forma: "solucion-50ml" },
        name: "SOLUCIÓN × 50 ML",
        description: "Azul de timol en solución lista para usar como indicador de pH en volumetrías ácido-base y titulaciones en medios semiacuosos. || **Estado:** Solución | **Presentación:** 50 ml | **Rango pH:** 1.2–2.8 y 8.0–9.6.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/AZUL_TIMO_SOL.png"
      }
    ]
  },

  {
    id: "indicador-naranja-de-metilo",
    name: "INDICADOR NARANJA DE METILO",
    type: "Reactivos",
    description: "Naranja de metilo, indicador de pH ampliamente utilizado en volumetrías ácido-base para señalar el punto de viraje en el rango pH 3.1–4.4, pasando de rojo a naranja-amarillo. Especialmente adecuado para titulaciones de ácidos fuertes con bases fuertes y determinación de acidez en muestras de agua, alimentos y productos industriales. Disponible en estado sólido para preparación de soluciones y en solución lista para usar. Ideal para laboratorios analíticos, académicos e industriales.",
    image: "/images/laboratorio/REACTIVOS/NARANJA_METILO_CARD.png",

    attributeOrder: ["forma"],

    attributes: [
      {
        id: "forma",
        label: "Presentación",
        type: "single",
        values: [
          { id: "solido-10g", label: "Sólido × 10 g" },
          { id: "solucion-100ml", label: "Solución × 100 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "naranja-metilo-solido-10g",
        attrs: { forma: "solido-10g" },
        name: "SÓLIDO × 10 G",
        description: "Naranja de metilo en estado sólido (polvo) para preparación de soluciones indicadoras a la concentración requerida en volumetrías ácido-base. || **Estado:** Sólido | **Presentación:** 10 g | **Rango pH:** 3.1–4.4.",
        price: 84,
        image: "/images/laboratorio/REACTIVOS/NARANJA_METILO_SOLIDO.png"
      },
      {
        sku: "naranja-metilo-solucion-100ml",
        attrs: { forma: "solucion-100ml" },
        name: "SOLUCIÓN × 100 ML",
        description: "Naranja de metilo en solución lista para usar como indicador de pH en volumetrías ácido-base y determinación de acidez en muestras de agua, alimentos y productos industriales. || **Estado:** Solución | **Presentación:** 100 ml | **Rango pH:** 3.1–4.4.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/NARANJA_METILO_SOL.png"
      }
    ]
  },

  {
    id: "indicador-rojo-de-cresol",
    name: "INDICADOR ROJO DE CRESOL",
    type: "Reactivos",
    description: "Rojo de cresol, indicador de pH de doble viraje utilizado en volumetrías ácido-base. Presenta viraje de rojo a amarillo en el rango pH 0.2–1.8 y de amarillo a rojo-púrpura en el rango pH 7.0–8.8, siendo útil para titulaciones en medios ácidos y ligeramente alcalinos. Disponible en estado sólido para preparación de soluciones y en solución lista para usar. Ampliamente empleado en análisis de acidez de muestras biológicas, aguas y productos farmacéuticos. Ideal para laboratorios analíticos, clínicos y académicos.",
    image: "/images/laboratorio/REACTIVOS/ROJO_CRESOL_CARD.png",

    attributeOrder: ["forma"],

    attributes: [
      {
        id: "forma",
        label: "Presentación",
        type: "single",
        values: [
          { id: "solido-10g", label: "Sólido × 10 g" },
          { id: "solucion-50ml", label: "Solución × 50 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "rojo-cresol-solido-10g",
        attrs: { forma: "solido-10g" },
        name: "SÓLIDO × 10 G",
        description: "Rojo de cresol en estado sólido (polvo) para preparación de soluciones indicadoras a la concentración requerida en volumetrías ácido-base. || **Estado:** Sólido | **Presentación:** 10 g | **Rango pH:** 0.2–1.8 y 7.0–8.8.",
        price: 1.2,
        image: "/images/laboratorio/REACTIVOS/ROJO_CRESOL_SOLIDO.png"
      },
      {
        sku: "rojo-cresol-solucion-50ml",
        attrs: { forma: "solucion-50ml" },
        name: "SOLUCIÓN × 50 ML",
        description: "Rojo de cresol en solución lista para usar como indicador de pH en volumetrías ácido-base y análisis de acidez en muestras biológicas y farmacéuticas. || **Estado:** Solución | **Presentación:** 50 ml | **Rango pH:** 0.2–1.8 y 7.0–8.8.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/ROJO_CRESOL_SOL.png"
      }
    ]
  },

  {
    id: "indicador-verde-de-bromocresol",
    name: "VERDE DE BROMOCRESOL PPR",
    type: "Reactivos",
    description: "Verde de bromocresol de grado PPR, indicador de pH con rango de viraje entre pH 3.8 y 5.4, pasando de amarillo a azul-verde. Ampliamente utilizado en volumetrías ácido-base, determinación de acidez en muestras biológicas y alimentarias, y como colorante de seguimiento en electroforesis de proteínas y ácidos nucleicos. Disponible en estado sólido y en solución lista para usar. Su grado de pureza PPR garantiza alta reproducibilidad y fiabilidad en los resultados analíticos. Ideal para laboratorios analíticos, bioquímicos y académicos.",
    image: "/images/laboratorio/REACTIVOS/VERDE_BROMOCRESOL_CARD.png",

    attributeOrder: ["forma"],

    attributes: [
      {
        id: "forma",
        label: "Presentación",
        type: "single",
        values: [
          { id: "solido-100g", label: "Sólido × 100 g" },
          { id: "solucion-100ml", label: "Solución × 100 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "verde-bromocresol-solido-100g",
        attrs: { forma: "solido-100g" },
        name: "SÓLIDO × 100 G",
        description: "Verde de bromocresol PPR en estado sólido (polvo) para preparación de soluciones indicadoras en volumetrías ácido-base y electroforesis de proteínas y ácidos nucleicos. || **Estado:** Sólido | **Grado:** PPR | **Presentación:** 100 g | **Rango pH:** 3.8–5.4.",
        price: 288,
        image: "/images/laboratorio/REACTIVOS/VERDE_BROMOCRESOL_SOLIDO.png"
      },
      {
        sku: "verde-bromocresol-solucion-100ml",
        attrs: { forma: "solucion-100ml" },
        name: "SOLUCIÓN × 100 ML",
        description: "Verde de bromocresol PPR en solución lista para usar como indicador de pH en volumetrías ácido-base y seguimiento de migración en electroforesis. || **Estado:** Solución | **Grado:** PPR | **Presentación:** 100 ml | **Rango pH:** 3.8–5.4.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/VERDE_BROMOCRESOL_SOL.png"
      }
    ]
  },
  {
    id: "barra-de-zinc",
    name: "BARRA DE ZINC",
    type: "Utensilios",
    description: "Versátil y eficiente, esta varilla de zinc es ideal para aplicaciones en construcción, fontanería y fabricación, ofreciendo un material fácil de manipular que puede cortarse con precisión según los requerimientos de cada proyecto. Proporciona soporte estructural y un rendimiento confiable en tareas de ingeniería, mientras que su naturaleza ligera facilita su uso tanto en entornos profesionales como en trabajos de bricolaje. Fabricada bajo estándares exigentes de calidad, garantiza durabilidad, eficiencia y adaptabilidad en diversas aplicaciones técnicas e industriales.",
    image: "/images/laboratorio/UTENSILIOS/BARRA_ZINC.png",

    attributeOrder: ["tamaño"],

    attributes: [
      {
        id: "tamaño",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "10x300", label: "10 x 300 mm" },
          { id: "12x300", label: "12 x 300 mm" },
          { id: "15x300", label: "15 x 300 mm" },
          { id: "16x300", label: "16 x 300 mm" },
          { id: "18x300", label: "18 x 300 mm" },
          { id: "20x300", label: "20 x 300 mm" }
        ]
      }
    ],

    variants: [
      {
        sku: "barra-zinc-10x300",
        attrs: { tamaño: "10x300" },
        name: "10 x 300 mm",
        description: "Versátil y eficiente, esta varilla de zinc es ideal para aplicaciones en construcción, fontanería y fabricación, ofreciendo un material fácil de manipular que puede cortarse con precisión según los requerimientos de cada proyecto. Proporciona soporte estructural y un rendimiento confiable en tareas de ingeniería, mientras que su naturaleza ligera facilita su uso tanto en entornos profesionales como en trabajos de bricolaje. Fabricada bajo estándares exigentes de calidad, garantiza durabilidad, eficiencia y adaptabilidad en diversas aplicaciones técnicas e industriales. || **Dimensiones:** 10 x 300 mm.",
        price: 120,
        image: "/images/laboratorio/UTENSILIOS/BARRA_ZINC.png"
      },
      {
        sku: "barra-zinc-12x300",
        attrs: { tamaño: "12x300" },
        name: "12 x 300 mm",
        description: "Versátil y eficiente, esta varilla de zinc es ideal para aplicaciones en construcción, fontanería y fabricación, ofreciendo un material fácil de manipular que puede cortarse con precisión según los requerimientos de cada proyecto. Proporciona soporte estructural y un rendimiento confiable en tareas de ingeniería, mientras que su naturaleza ligera facilita su uso tanto en entornos profesionales como en trabajos de bricolaje. Fabricada bajo estándares exigentes de calidad, garantiza durabilidad, eficiencia y adaptabilidad en diversas aplicaciones técnicas e industriales. || **Dimensiones:** 12 x 300 mm.",
        price: 160,
        image: "/images/laboratorio/UTENSILIOS/BARRA_ZINC.png"
      },
      {
        sku: "barra-zinc-15x300",
        attrs: { tamaño: "15x300" },
        name: "15 x 300 mm",
        description: "Versátil y eficiente, esta varilla de zinc es ideal para aplicaciones en construcción, fontanería y fabricación, ofreciendo un material fácil de manipular que puede cortarse con precisión según los requerimientos de cada proyecto. Proporciona soporte estructural y un rendimiento confiable en tareas de ingeniería, mientras que su naturaleza ligera facilita su uso tanto en entornos profesionales como en trabajos de bricolaje. Fabricada bajo estándares exigentes de calidad, garantiza durabilidad, eficiencia y adaptabilidad en diversas aplicaciones técnicas e industriales. || **Dimensiones:** 15 x 300 mm.",
        price: 220,
        image: "/images/laboratorio/UTENSILIOS/BARRA_ZINC.png"
      },
      {
        sku: "barra-zinc-16x300",
        attrs: { tamaño: "16x300" },
        name: "16 x 300 mm",
        description: "Versátil y eficiente, esta varilla de zinc es ideal para aplicaciones en construcción, fontanería y fabricación, ofreciendo un material fácil de manipular que puede cortarse con precisión según los requerimientos de cada proyecto. Proporciona soporte estructural y un rendimiento confiable en tareas de ingeniería, mientras que su naturaleza ligera facilita su uso tanto en entornos profesionales como en trabajos de bricolaje. Fabricada bajo estándares exigentes de calidad, garantiza durabilidad, eficiencia y adaptabilidad en diversas aplicaciones técnicas e industriales. || **Dimensiones:** 16 x 300 mm.",
        price: 250,
        image: "/images/laboratorio/UTENSILIOS/BARRA_ZINC.png"
      },
      {
        sku: "barra-zinc-18x300",
        attrs: { tamaño: "18x300" },
        name: "18 x 300 mm",
        description: "Versátil y eficiente, esta varilla de zinc es ideal para aplicaciones en construcción, fontanería y fabricación, ofreciendo un material fácil de manipular que puede cortarse con precisión según los requerimientos de cada proyecto. Proporciona soporte estructural y un rendimiento confiable en tareas de ingeniería, mientras que su naturaleza ligera facilita su uso tanto en entornos profesionales como en trabajos de bricolaje. Fabricada bajo estándares exigentes de calidad, garantiza durabilidad, eficiencia y adaptabilidad en diversas aplicaciones técnicas e industriales. || **Dimensiones:** 18 x 300 mm.",
        price: 290,
        image: "/images/laboratorio/UTENSILIOS/BARRA_ZINC.png"
      },
      {
        sku: "barra-zinc-20x300",
        attrs: { tamaño: "20x300" },
        name: "20 x 300 mm",
        description: "Versátil y eficiente, esta varilla de zinc es ideal para aplicaciones en construcción, fontanería y fabricación, ofreciendo un material fácil de manipular que puede cortarse con precisión según los requerimientos de cada proyecto. Proporciona soporte estructural y un rendimiento confiable en tareas de ingeniería, mientras que su naturaleza ligera facilita su uso tanto en entornos profesionales como en trabajos de bricolaje. Fabricada bajo estándares exigentes de calidad, garantiza durabilidad, eficiencia y adaptabilidad en diversas aplicaciones técnicas e industriales. || **Dimensiones:** 20 x 300 mm.",
        price: 340,
        image: "/images/laboratorio/UTENSILIOS/BARRA_ZINC.png"
      }
    ]
  },

  {
    id: "viruta-de-hierro-100-gramos",
    name: "VIRUTA DE HIERRO × 100 G",
    type: "Reactivos",
    description: "Viruta de hierro metálico en presentación de 100 g, utilizada como agente reductor en reacciones de reducción química, determinación de nitratos por el método de la columna de cadmio-cobre y experimentos de corrosión y electroquímica en laboratorio. Su forma de viruta maximiza la superficie de contacto, favoreciendo reacciones más rápidas y eficientes. Debe almacenarse en recipiente hermético y lugar seco para evitar su oxidación. Ideal para laboratorios analíticos, académicos e industriales.",
    price: 1.2,
    image: "/images/laboratorio/REACTIVOS/VIRUTA_HIERRO.png"
  },

  {
    id: "tira-de-ph-x100-generica",
    name: "TIRAS DE pH × 100 UND – GENÉRICA",
    type: "Utensilios",
    description: "Tiras indicadoras de pH genéricas en presentación de 100 unidades, diseñadas para la determinación rápida y sencilla del pH en soluciones acuosas, reactivos, alimentos, aguas y muestras biológicas. Su sistema colorimétrico permite una lectura inmediata sin necesidad de equipos adicionales, siendo una alternativa económica y práctica para laboratorios con alto volumen de determinaciones de rutina. Ideales para laboratorios clínicos, académicos e industriales donde no se requiere la precisión de marcas certificadas.",
    price: 21.6,
    image: "/images/laboratorio/UTENSILIOS/TIRAS_PH_GENERICA.png"
  },
  {
    id: "tira-de-ph-x100-merck",
    name: "TIRAS DE pH × 100 UND – MERCK",
    type: "Utensilios",
    description: "Tiras indicadoras de pH marca Merck en presentación de 100 unidades, diseñadas para la determinación rápida y sencilla del pH en soluciones acuosas, reactivos, alimentos, aguas y muestras biológicas. Su sistema de múltiples zonas indicadoras permite una lectura colorimétrica precisa en un amplio rango de pH, sin necesidad de equipos adicionales. La calidad Merck garantiza alta reproducibilidad, sensibilidad y confiabilidad en cada medición. Ideales para uso en laboratorios clínicos, académicos, industriales y control de calidad.",
    price: 180,
    image: "/images/laboratorio/UTENSILIOS/TIRAS_PH_MERCK.png"
  },
  {
    id: "bomba-de-vac-o-pobel-r300-exenta-de-aceite-c-nula",
    name: "BOMBA DE VACÍO POBEL R300 EXENTA DE ACEITE + CÁNULA",
    description: "BOMBA DE VACÍO POBEL R300 EXENTA DE ACEITE + CÁNULA",
    price: 4560,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "medidor-de-ph-p-piscina-marca-hanna-instruments-modelo-hi98103",
    name: "MEDIDOR DE PH P/PISCINA MARCA: HANNA INSTRUMENTS MODELO: HI98103",
    description: "MEDIDOR DE PH P/PISCINA MARCA: HANNA INSTRUMENTS MODELO: HI98103",
    price: 389.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "criostato-de-pie-modelo-cm-1860-uv-marca-fresenius-medical",
    name: "CRIOSTATO DE PIE MODELO CM 1860 UV MARCA: FRESENIUS MEDICAL",
    description: "CRIOSTATO DE PIE MODELO CM 1860 UV MARCA: FRESENIUS MEDICAL",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "colorimetro-digital-modelo-checker-hi-701-reactivo-dpd-hi93701-100-test",
    name: "COLORIMETRO DIGITAL MODELO: CHECKER HI 701 + REACTIVO DPD HI93701 100 TEST",
    description: "COLORIMETRO DIGITAL MODELO: CHECKER HI 701 + REACTIVO DPD HI93701 100 TEST",
    price: 814.2,
    image: "/images/laboratorio/placeholder.png"
  },

  {
    id: "ut33b-multimetro-digital-prueba-de-baterias-rango-hasta-600-v",
    name: "UT33B+ MULTIMETRO DIGITAL, PRUEBA DE BATERIAS, RANGO HASTA 600 V",
    description: "UT33B+ MULTIMETRO DIGITAL, PRUEBA DE BATERIAS, RANGO HASTA 600 V",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "filtro-de-membrana-0-45um-47mm-syvet",
    name: "FILTRO DE MEMBRANA 0.45 µm × 47 mm – SYVET × 200 UND",
    type: "Utensilios",
    description: "Filtro de membrana de 0.45 µm de tamaño de poro y 47 mm de diámetro, marca Syvet, en presentación de caja por 200 unidades. Diseñado para la filtración estéril de soluciones, retención de bacterias y partículas en análisis microbiológicos, preparación de medios de cultivo y control de calidad de agua. Su membrana de baja adsorción de proteínas garantiza alta eficiencia de filtración sin comprometer la integridad de la muestra. Compatible con portafiltros estándar de 47 mm. Ideal para laboratorios clínicos, microbiológicos, farmacéuticos y de análisis de aguas.",
    price: 420,
    image: "/images/laboratorio/UTENSILIOS/FILTRO_MEMBRANA_045_SYVET.png"
  },

];

