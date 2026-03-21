// src/data/products/equipamientoYLaboratorioYReactivos.js

export const equipamientoYLaboratorioYReactivosProducts = [

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
    id: "tiras-reactivas-glucometro",
    name: "TIRAS REACTIVAS PARA GLUCÓMETRO x 50 UND",
    type: "Laboratorio",
    description: "Tiras reactivas para medición de glucosa en sangre. Compatibles con glucómetros de sus respectivas marcas. Caja por 50 unidades. Para uso en diagnóstico domiciliario y clínico.",
    image: "/images/laboratorio/TIRAS_CARD.png",

    attributeOrder: ["marca"],

    attributes: [
      {
        id: "marca",
        label: "Marca / Modelo",
        type: "single",
        values: [
          { id: "active", label: "Accu-Chek Active" },
          { id: "instant", label: "Accu-Chek Instant" },
          { id: "nipro", label: "Nipro" }
        ]
      }
    ],

    variants: [
      {
        sku: "tiras-accuchek-active",
        attrs: { marca: "active" },
        name: "Accu-Chek Active",
        description: "Tiras reactivas originales Accu-Chek Active. Compatibles exclusivamente con glucómetro Accu-Chek Active. Tecnología de fotometría de reflexión. Requieren una pequeña muestra de sangre. Resultados en segundos. Caja x 50 unidades.",
        price: 90,
        image: "/images/laboratorio/TIRAS_ACTIVE.png"
      },
      {
        sku: "tiras-accuchek-instant",
        attrs: { marca: "instant" },
        name: "Accu-Chek Instant",
        description: "Tiras reactivas originales Accu-Chek Instant. Compatibles exclusivamente con glucómetro Accu-Chek Instant. Tecnología electroquímica para resultados precisos y rápidos. Sin codificación manual. Caja x 50 unidades.",
        price: 73,
        image: "/images/laboratorio/TIRAS_INSTANT.png"
      },
      {
        sku: "tiras-nipro",
        attrs: { marca: "nipro" },
        name: "Nipro",
        description: "Tiras reactivas Nipro para glucómetro de la misma marca. Tecnología electroquímica con enzima GDH-FAD de alta precisión. Mínimo volumen de muestra requerido. Resultados confiables para monitoreo diario de glucosa. Caja x 50 unidades.",
        price: 67,
        image: "/images/laboratorio/TIRAS_NIPRO.png"
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
    description: "Beaker de vidrio borosilicato graduado, diseñado para medición, mezcla, calentamiento y preparación de soluciones en entornos de laboratorio. Fabricado en vidrio borosilicato de alta resistencia térmica y química, con graduación visible para una lectura práctica y pico vertedor para un vaciado controlado. Disponible en múltiples capacidades para adaptarse a diferentes procedimientos de laboratorio.",
    image: "/images/laboratorio/UTENSILIOS/BEAKERCARD.png",

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
          { id: "600-ml", label: "600 ml" },
          { id: "1000-ml", label: "1000 ml" }
        ]
      }
    ],

    variants: [

      {
        sku: "isolab-beaker-50ml",
        attrs: { capacidad: "50-ml" },
        name: "CAPACIDAD 50 ml",
        description: "Beaker de vidrio borosilicato graduado, ideal para medición, mezcla y calentamiento de soluciones en procedimientos de laboratorio. Fabricado en vidrio de alta resistencia térmica y química, con graduación visible y pico vertedor para un vaciado controlado. || **Capacidad:** 50 ml.",
        price: 15,
        image: "/images/laboratorio/UTENSILIOS/BEAKER50.png"
      },
      {
        sku: "isolab-beaker-100ml",
        attrs: { capacidad: "100-ml" },
        name: "CAPACIDAD 100 ml",
        description: "Beaker de vidrio borosilicato graduado, diseñado para preparación, mezcla y calentamiento de soluciones en laboratorio. Fabricado en vidrio de alta resistencia térmica y química, con graduación visible y pico vertedor que facilita el trasvase del contenido. || **Capacidad:** 100 ml.",
        price: 25,
        image: "/images/laboratorio/UTENSILIOS/BEAKER100.png"
      },
      {
        sku: "isolab-beaker-250ml",
        attrs: { capacidad: "250-ml" },
        name: "CAPACIDAD 250 ml",
        description: "Beaker de vidrio borosilicato graduado, adecuado para medición aproximada, mezcla, calentamiento y preparación de reactivos en laboratorio. Fabricado en vidrio de alta resistencia térmica y química, con graduación visible y pico vertedor para un vertido seguro. || **Capacidad:** 250 ml.",
        price: 40,
        image: "/images/laboratorio/UTENSILIOS/BEAKER250.png"
      },
      {
        sku: "isolab-beaker-600ml",
        attrs: { capacidad: "600-ml" },
        name: "CAPACIDAD 600 ml",
        description: "Beaker de vidrio borosilicato graduado, ideal para preparación, mezcla y calentamiento de volúmenes intermedios en laboratorio. Fabricado en vidrio de alta resistencia térmica y química, con graduación visible y pico vertedor para un vaciado controlado. || **Capacidad:** 600 ml.",
        price: 60,
        image: "/images/laboratorio/UTENSILIOS/BEAKER600.png"
      },
      {
        sku: "isolab-beaker-1000ml",
        attrs: { capacidad: "1000-ml" },
        name: "CAPACIDAD 1000 ml",
        description: "Beaker de vidrio borosilicato graduado, diseñado para mezcla, calentamiento y preparación de soluciones de mayor volumen en laboratorio. Fabricado en vidrio de alta resistencia térmica y química, con graduación visible y pico vertedor que facilita el manejo del contenido. || **Capacidad:** 1000 ml.",
        price: 80,
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
          { id: "100-ml", label: "100 ml" }
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
    id: "aceite-de-inmersion-para-microscopia",
    name: "ACEITE DE INMERSIÓN PARA MICROSCOPÍA",
    type: "Reactivos",
    description: "Aceite de inmersión para microscopía de la marca Oxford, diseñado para optimizar la resolución óptica en objetivos de inmersión. Su formulación garantiza un índice de refracción estable, baja fluorescencia y alta transparencia, siendo ideal para aplicaciones en laboratorios clínicos, académicos y de investigación. Conservar el envase bien cerrado en un lugar fresco y ventilado, a una temperatura entre 18 °C y 32 °C.",
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
        sku: "aceite-inmersion-oxford-30ml",
        attrs: { volumen: "30-ml" },
        name: "30 ML",
        description: "Aceite de inmersión Oxford para microscopía con índice de refracción estable y alta transparencia, ideal para objetivos de inmersión en laboratorios clínicos y de investigación. Conservar el envase bien cerrado en un lugar fresco y ventilado, a una temperatura entre 18 °C y 32 °C. || **Marca:** Oxford Lab Fine Chem LLP | **Volumen:** 30 ml.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/INMERSION30.png"
      },
      {
        sku: "aceite-inmersion-oxford-100ml",
        attrs: { volumen: "100-ml" },
        name: "100 ML",
        description: "Aceite de inmersión Oxford para microscopía con índice de refracción estable y alta transparencia, ideal para objetivos de inmersión en laboratorios clínicos y de investigación. Conservar el envase bien cerrado en un lugar fresco y ventilado, a una temperatura entre 18 °C y 32 °C. || **Marca:** Oxford Lab Fine Chem LLP | **Volumen:** 100 ml.",
        price: 60,
        image: "/images/laboratorio/REACTIVOS/INMERSION100.png"
      },
      {
        sku: "aceite-inmersion-oxford-500ml",
        attrs: { volumen: "500-ml" },
        name: "500 ML",
        description: "Aceite de inmersión Oxford para microscopía con índice de refracción estable y alta transparencia, ideal para objetivos de inmersión en laboratorios clínicos y de investigación. Conservar el envase bien cerrado en un lugar fresco y ventilado, a una temperatura entre 18 °C y 32 °C. || **Marca:** Oxford Lab Fine Chem LLP | **Volumen:** 500 ml.",
        price: 5,
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
          { id: "1-kg", label: "1 kg" },
          { id: "4-kg", label: "4 kg" },
          { id: "30-kg", label: "30 kg" }
        ]
      }
    ],

    variants: [
      {
        sku: "acido-acetico-glacial-1kg",
        attrs: { presentacion: "1-kg" },
        name: "1 KG",
        description: "Ácido acético glacial de alta pureza para uso como reactivo químico, disolvente y síntesis orgánica en laboratorio. || **Presentación:** 1 kg.",
        price: 78,
        image: "/images/laboratorio/REACTIVOS/ACETICO1.png"
      },
      {
        sku: "acido-acetico-glacial-4kg",
        attrs: { presentacion: "4-kg" },
        name: "4 KG",
        description: "Ácido acético glacial de alta pureza para uso como reactivo químico, disolvente y síntesis orgánica en laboratorio. || **Presentación:** 4 kg.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/ACETICO4.png"
      },
      {
        sku: "acido-acetico-glacial-30kg",
        attrs: { presentacion: "30-kg" },
        name: "30 KG",
        description: "Ácido acético glacial de alta pureza para uso como reactivo químico, disolvente y síntesis orgánica en laboratorio. || **Presentación:** 30 kg.",
        price: 5,
        image: "/images/laboratorio/REACTIVOS/ACETICO30.png"
      }
    ]
  },
  {
    id: "cido-b-rico-1-kg",
    name: "ÁCIDO BÓRICO – 1 kg",
    description: "ÁCIDO BÓRICO – 1 kg",
    price: 108,
    image: "/images/laboratorio/REACTIVOS/BORICOCARD.png"
  },

  {
    id: "cido-clorobenzoico-al-99-500-g",
    name: "ÁCIDO CLOROBENZOICO AL 99% – 500 g",
    description: "ÁCIDO CLOROBENZOICO AL 99% – 500 g",
    price: 1.2,
    image: "/images/laboratorio/REACTIVOS/CLOROBENZOICOCARD.png"
  },

  {
    id: "cido-fosf-rico-100-ml",
    name: "ÁCIDO FOSFÓRICO – 100 ml",
    description: "ÁCIDO FOSFÓRICO – 100 ml",
    price: 18,
    image: "/images/laboratorio/REACTIVOS/FOSFORICOCARD.png"
  },


  {
    id: "agar-bacteriologico-en-polvo-500gr",
    name: "AGAR BACTERIOLOGICO EN POLVO 500GR",
    description: "AGAR BACTERIOLOGICO EN POLVO 500GR",
    price: 1.2,
    image: "/images/laboratorio/REACTIVOS/AGAR.png"
  },
  {
    id: "agua-desionizada-4lt",
    name: "AGUA DESIONIZADA 4LT",
    description: "AGUA DESIONIZADA 4LT",
    price: 22.8,
    image: "/images/laboratorio/REACTIVOS/DESIONIZADA_4LT.png"
  },
  {
    id: "agua-destilada",
    name: "AGUA DESTILADA",
    type: "Reactivos de laboratorio",
    description: "Agua destilada de alta pureza obtenida por proceso de destilación, libre de minerales, impurezas y microorganismos. Ideal para uso en laboratorios clínicos, académicos e industriales donde se requiere agua de calidad controlada para preparación de soluciones, diluciones y limpieza de material.",
    image: "/images/laboratorio/REACTIVOS/DESTILADA_CARD.png",

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
        price: 8,
        image: "/images/laboratorio/REACTIVOS/DESTILADA_1LT.png"
      },
      {
        sku: "agua-destilada-4lt",
        attrs: { capacidad: "4-lt" },
        name: "4 LT",
        description: "Agua destilada de alta pureza libre de minerales e impurezas, ideal para preparación de soluciones y uso en laboratorio. || **Capacidad:** 4 lt.",
        price: 30,
        image: "/images/laboratorio/REACTIVOS/DESTILADA_4LT.png"
      },
      {
        sku: "agua-destilada-20lt",
        attrs: { capacidad: "20-lt" },
        name: "20 LT",
        description: "Agua destilada de alta pureza libre de minerales e impurezas, ideal para preparación de soluciones y uso en laboratorio. || **Capacidad:** 20 lt.",
        price: 120,
        image: "/images/laboratorio/REACTIVOS/DESTILADA_20LT.png"
      }
    ]
  },

  {
    id: "alcohol-laboratorio",
    name: "ALCOHOLES Y ANTISÉPTICOS",
    type: "Reactivos de laboratorio",
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
    id: "barra-de-zinc-lamina",
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
    id: "biftalato-cido-de-potasio-500-g",
    name: "BIFTALATO ÁCIDO DE POTASIO – 500 g",
    description: "BIFTALATO ÁCIDO DE POTASIO – 500 g",
    price: 288,
    image: "/images/laboratorio/REACTIVOS/BIFTALATO.png"
  },
  {
    id: "buffer-fosfato",
    name: "BUFFER FOSFATO",
    type: "Reactivos de laboratorio",
    description: "Buffer fosfato para uso en laboratorio, diseñado para mantener el pH estable en soluciones y medios de cultivo. Ampliamente utilizado en técnicas analíticas, preparación de reactivos y procesos bioquímicos en laboratorios clínicos, académicos y de investigación.",
    image: "/images/laboratorio/REACTIVOS/BUFFER_FOSFACARD.png",

    attributeOrder: ["capacidad"],

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "100-ml", label: "100 ml" },
          { id: "250-ml", label: "250 ml" }
        ]
      }
    ],

    variants: [
      {
        sku: "buffer-fosfato-100ml",
        attrs: { capacidad: "100-ml" },
        name: "100 ML",
        description: "Buffer fosfato para estabilización de pH en soluciones y medios de cultivo en laboratorio. || **Capacidad:** 100 ml.",
        price: 1.2,
        image: "/images/laboratorio/REACTIVOS/BUFFER_100.png"
      },
      {
        sku: "buffer-fosfato-250ml",
        attrs: { capacidad: "250-ml" },
        name: "250 ML",
        description: "Buffer fosfato para estabilización de pH en soluciones y medios de cultivo en laboratorio. || **Capacidad:** 250 ml.",
        price: 1.2,
        image: "/images/laboratorio/REACTIVOS/BUFFER_250.png"
      }
    ]
  },

  {
    id: "carbonato-de-sodio-na-co-200-g",
    name: "CARBONATO DE SODIO 500 g",
    description: "CARBONATO DE SODIO 200 g",
    price: 96,
    image: "/images/laboratorio/REACTIVOS/CARBONATO_SODIO.png"
  },
  {
    id: "ciclohexano-100-ml-marcas-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "CICLOHEXANO 100 ml MARCAS: HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "CICLOHEXANO 100 ml MARCAS: HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 108,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "clorato-de-potasio-por-500-grs",
    name: "CLORATO DE POTASIO POR 500 GRS",
    description: "CLORATO DE POTASIO POR 500 GRS",
    price: 264,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "cloruro-de-bario-100-g-marcas-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "CLORURO DE BARIO 100 g MARCAS: HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "CLORURO DE BARIO 100 g MARCAS: HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 104.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "cloruro-de-bismuto-iii-100-g-marcas-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "CLORURO DE BISMUTO III × 100 g MARCAS: HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "CLORURO DE BISMUTO III × 100 g MARCAS: HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "cloruro-de-cobalto-6-hidratos-500-gr",
    name: "CLORURO DE COBALTO 6 HIDRATOS 500 GR",
    description: "CLORURO DE COBALTO 6 HIDRATOS 500 GR",
    price: 504,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "cloruro-de-sodio",
    name: "CLORURO DE SODIO",
    type: "Reactivos de laboratorio",
    description: "Cloruro de sodio de alta pureza para uso en laboratorio, ampliamente utilizado en preparación de soluciones fisiológicas, medios de cultivo, técnicas analíticas y procesos bioquímicos. Ideal para laboratorios clínicos, académicos e industriales.",
    image: "/images/laboratorio/REACTIVOS/CLORUROCARD.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "100-gr", label: "100 g" },
          { id: "1-kg", label: "1 kg" }
        ]
      }
    ],

    variants: [
      {
        sku: "cloruro-sodio-100gr",
        attrs: { presentacion: "100-gr" },
        name: "100 G",
        description: "Cloruro de sodio de alta pureza para preparación de soluciones y uso analítico en laboratorio. || **Presentación:** 100 g.",
        price: 7.2,
        image: "/images/laboratorio/REACTIVOS/CLORURO_100.png"
      },

      {
        sku: "cloruro-sodio-1kg",
        attrs: { presentacion: "1-kg" },
        name: "1 KG",
        description: "Cloruro de sodio de alta pureza para preparación de soluciones y uso analítico en laboratorio. || **Presentación:** 1 kg.",
        price: 48,
        image: "/images/laboratorio/REACTIVOS/CLORURO_1000.png"
      }
    ]
  },

  {
    id: "cloruro-f-rrico-0-5-kg-marcas-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "CLORURO FÉRRICO 0.5 kg MARCAS: HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "CLORURO FÉRRICO 0.5 kg MARCAS: HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 198,
    image: "/images/laboratorio/placeholder.png"
  },

  {
    id: "cromato-de-potasio-ppr-500-grs",
    name: "CROMATO DE POTASIO PPR 500 GRS",
    description: "CROMATO DE POTASIO PPR 500 GRS",
    price: 384,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "dicromato-de-potasio-k2cr2o7-250-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "DICROMATO DE POTASIO (K2CR2O7) 250 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "DICROMATO DE POTASIO (K2CR2O7) 250 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 216,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "dicromato-de-potasio-por-grs",
    name: "DICROMATO DE POTASIO POR GRS",
    description: "DICROMATO DE POTASIO POR GRS",
    price: 156,
    image: "/images/laboratorio/placeholder.png"
  },

  {
    id: "embudo-de-separaci-n-bushner-200-ml-con-tap-n-horado-para-conecci-n-a-kitasato-vidrio-de-borosilicato",
    name: "EMBUDO DE SEPARACIÓN BUSHNER 200 ml CON TAPÓN HORADO PARA CONECCIÓN A KITASATO VIDRIO DE BOROSILICATO",
    description: "EMBUDO DE SEPARACIÓN BUSHNER 200 ml CON TAPÓN HORADO PARA CONECCIÓN A KITASATO VIDRIO DE BOROSILICATO",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },

  {
    id: "equipo-de-destilaci-n-de-vidrio-completo-1000-ml-vidrio-de-borosilicato-14-piezas",
    name: "EQUIPO DE DESTILACIÓN DE VIDRIO COMPLETO 1000 ml VIDRIO DE BOROSILICATO 14 PIEZAS",
    description: "EQUIPO DE DESTILACIÓN DE VIDRIO COMPLETO 1000 ml VIDRIO DE BOROSILICATO 14 PIEZAS",
    price: 5.52,
    image: "/images/laboratorio/placeholder.png"
  },


  {
    id: "fluoruro-de-sodio-sabor-chicle-fluofar-240-ml",
    name: "FLUORURO DE SODIO SABOR CHICLE FLUOFAR 240 ml",
    description: "FLUORURO DE SODIO SABOR CHICLE FLUOFAR 240 ml",
    price: 19.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "fluoruro-de-sodio-sin-sabor-fluofar-200-ml",
    name: "FLUORURO DE SODIO SIN SABOR FLUOFAR 200 ml",
    description: "FLUORURO DE SODIO SIN SABOR FLUOFAR 200 ml",
    price: 21.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "formol-concentrado-500-ml-marcas-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "FORMOL CONCENTRADO × 500 ml MARCAS: HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "FORMOL CONCENTRADO × 500 ml MARCAS: HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 33.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-c-espatula-p-muestra-heces-250-und-marca-samplix",
    name: "FRASCO C/ESPATULA P/MUESTRA HECES × 250 UND, MARCA: SAMPLIX",
    description: "FRASCO C/ESPATULA P/MUESTRA HECES × 250 UND, MARCA: SAMPLIX",
    price: 72,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-con-pipeta-500-ml-color-transparente",
    name: "FRASCO CON PIPETA 500 ml COLOR TRANSPARENTE",
    description: "FRASCO CON PIPETA 500 ml COLOR TRANSPARENTE",
    price: 10.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-d-vidrio-ambar-250-ml-c-tapa-syfon-negro",
    name: "FRASCO D/VIDRIO AMBAR 250 ml C/TAPA SYFON NEGRO",
    description: "FRASCO D/VIDRIO AMBAR 250 ml C/TAPA SYFON NEGRO",
    price: 3.84,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-1-kg-naoh-3-1-kg-spectrum",
    name: "FRASCO DE 1 kg NAOH 3 × 1 kg SPECTRUM",
    description: "FRASCO DE 1 kg NAOH 3 × 1 kg SPECTRUM",
    price: 456,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-aspiracion-de-vidrio-1lt-con-t",
    name: "FRASCO DE ASPIRACION DE VIDRIO 1LT CON T",
    description: "FRASCO DE ASPIRACION DE VIDRIO 1LT CON T",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-aspiraci-n-vidrio-c-tapa-700-ml",
    name: "FRASCO DE ASPIRACIÓN VIDRIO C/TAPA 700 ml",
    description: "FRASCO DE ASPIRACIÓN VIDRIO C/TAPA 700 ml",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-azul-de-metileno-100-ml",
    name: "FRASCO DE AZUL DE METILENO 100 ml",
    description: "FRASCO DE AZUL DE METILENO 100 ml",
    price: 12,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-plastico-blanco-1lt-c-tapa-dispensador",
    name: "FRASCO DE PLASTICO BLANCO 1LT C TAPA DISPENSADOR",
    description: "FRASCO DE PLASTICO BLANCO 1LT C TAPA DISPENSADOR",
    price: 6.24,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-plastico-p-examen-de-orina-x250-und-marca-samplix",
    name: "FRASCO DE PLASTICO P/EXAMEN DE ORINA X250 UND,MARCA: SAMPLIX",
    description: "FRASCO DE PLASTICO P/EXAMEN DE ORINA X250 UND,MARCA: SAMPLIX",
    price: 192,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-soluci-n-de-azul-de-metileno-100-ml",
    name: "FRASCO DE SOLUCIÓN DE AZUL DE METILENO 100 ml",
    description: "FRASCO DE SOLUCIÓN DE AZUL DE METILENO 100 ml",
    price: 12,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-vidrio-ambar-de-250-ml",
    name: "FRASCO DE VIDRIO AMBAR DE 250 ml",
    description: "FRASCO DE VIDRIO AMBAR DE 250 ml",
    price: 7.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-vidrio-ambar-de-250-ml-tapa-azul-autoclavable",
    name: "FRASCO DE VIDRIO AMBAR DE 250 ml / TAPA AZUL AUTOCLAVABLE",
    description: "FRASCO DE VIDRIO AMBAR DE 250 ml / TAPA AZUL AUTOCLAVABLE",
    price: 18,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-vidrio-ambar-de-250-ml-c-tapa-syfon",
    name: "FRASCO DE VIDRIO AMBAR DE 250 ml C/TAPA SYFON",
    description: "FRASCO DE VIDRIO AMBAR DE 250 ml C/TAPA SYFON",
    price: 4.08,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-vidrio-ambar-de-500-ml",
    name: "FRASCO DE VIDRIO AMBAR DE 500 ml",
    description: "FRASCO DE VIDRIO AMBAR DE 500 ml",
    price: 4.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-vidrio-ambar-de-500-ml-c-tapa-syfon",
    name: "FRASCO DE VIDRIO AMBAR DE 500 ml C/ TAPA SYFON",
    description: "FRASCO DE VIDRIO AMBAR DE 500 ml C/ TAPA SYFON",
    price: 4.44,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-gotero-ambar-100-ml",
    name: "FRASCO GOTERO AMBAR × 100 ml",
    description: "FRASCO GOTERO AMBAR × 100 ml",
    price: 6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-goteros-ambar-30-ml-vidrio-de-borosilicato",
    name: "FRASCO GOTEROS AMBAR × 30 ml VIDRIO DE BOROSILICATO",
    description: "FRASCO GOTEROS AMBAR × 30 ml VIDRIO DE BOROSILICATO",
    price: 3.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-humidificador-c-tapa-metal-500-ml",
    name: "FRASCO HUMIDIFICADOR C/TAPA METAL 500 ml",
    description: "FRASCO HUMIDIFICADOR C/TAPA METAL 500 ml",
    price: 30,
    image: "/images/laboratorio/placeholder.png"
  },

  {
    id: "nuez-de-buretas-pinza-para-bureta-tipo-mariposa-de-pl-stico-vidrio-de-borosilicato-chino",
    name: "NUEZ DE BURETAS (PINZA PARA BURETA) – TIPO MARIPOSA DE PLÁSTICO VIDRIO DE BOROSILICATO CHINO",
    description: "NUEZ DE BURETAS (PINZA PARA BURETA) – TIPO MARIPOSA DE PLÁSTICO VIDRIO DE BOROSILICATO CHINO",
    price: 24,
    image: "/images/instrumental/placeholder.png"
  },
  {
    id: "nuez-para-soporte-universal-con-pinzas-para-soportar-buretas-balones-2-dedos-metalica",
    name: "NUEZ PARA SOPORTE UNIVERSAL, CON PINZAS PARA SOPORTAR BURETAS, BALONES 2 DEDOS METALICA",
    description: "NUEZ PARA SOPORTE UNIVERSAL, CON PINZAS PARA SOPORTAR BURETAS, BALONES 2 DEDOS METALICA",
    price: 45.6,
    image: "/images/instrumental/placeholder.png"
  },

  {
    id: "cables-con-pinza-tipo-caiman",
    name: "CABLES CON PINZA TIPO CAIMAN",
    description: "CABLES CON PINZA TIPO CAIMAN",
    price: 1.2,
    image: "/images/instrumental/placeholder.png"
  },


  {
    id: "gradilla-de-tubos-autoclavable",
    name: "GRADILLA DE TUBOS AUTOCLAVABLE",
    description: "GRADILLA DE TUBOS AUTOCLAVABLE",
    price: 45.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "gradillas-de-18-tubos-de-plastico",
    name: "GRADILLAS DE 18 TUBOS DE PLASTICO",
    description: "GRADILLAS DE 18 TUBOS DE PLASTICO",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "gradillas-de-24-tubos-de-plastico-isolab",
    name: "GRADILLAS DE 24 TUBOS DE PLASTICO ISOLAB",
    description: "GRADILLAS DE 24 TUBOS DE PLASTICO ISOLAB",
    price: 45.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "gradillas-de-tubos-autoclavable",
    name: "GRADILLAS DE TUBOS AUTOCLAVABLE",
    description: "GRADILLAS DE TUBOS AUTOCLAVABLE",
    price: 45.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "granallas-de-zinc-por-500-gr",
    name: "GRANALLAS DE ZINC POR 500 GR",
    description: "GRANALLAS DE ZINC POR 500 GR",
    price: 198,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "hidroxido-de-sodio-naoh-soda-caustica",
    name: "HIDROXIDO DE SODIO NAOH (SODA CAUSTICA)",
    description: "HIDROXIDO DE SODIO NAOH (SODA CAUSTICA)",
    price: 456,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "hidr-xido-de-magnesio-por-500-grs",
    name: "HIDRÓXIDO DE MAGNESIO POR 500 GRS",
    description: "HIDRÓXIDO DE MAGNESIO POR 500 GRS",
    price: 144,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "hidr-xido-de-potasio-500-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "HIDRÓXIDO DE POTASIO 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "HIDRÓXIDO DE POTASIO 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 168,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "hidr-xido-de-potasio-en-lentejas-por-500-grs",
    name: "HIDRÓXIDO DE POTASIO EN LENTEJAS POR 500 GRS",
    description: "HIDRÓXIDO DE POTASIO EN LENTEJAS POR 500 GRS",
    price: 234,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "hidr-xido-de-zinc-0-5-kg-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "HIDRÓXIDO DE ZINC 0.5 kg MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "HIDRÓXIDO DE ZINC 0.5 kg MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "hipoclorito-de-sodio-al-5",
    name: "HIPOCLORITO DE SODIO AL 5%",
    description: "HIPOCLORITO DE SODIO AL 5%",
    price: 9.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "indicador-azul-de-bromofenol-10-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "INDICADOR AZUL DE BROMOFENOL 10 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "INDICADOR AZUL DE BROMOFENOL 10 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "indicador-fenolfaleina-200-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "INDICADOR FENOLFALEINA 200 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "INDICADOR FENOLFALEINA 200 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 204,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "kit-de-magenetos-para-disoluci-n-de-reactivos-2-5-met-lico-plastificado",
    name: "KIT DE MAGENETOS PARA DISOLUCIÓN DE REACTIVOS: 2.5 METÁLICO PLASTIFICADO",
    description: "KIT DE MAGENETOS PARA DISOLUCIÓN DE REACTIVOS: 2.5 METÁLICO PLASTIFICADO",
    price: 30,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "kit-de-magenetos-para-disoluci-n-de-reactivos-3-cm-met-lico-plastificado",
    name: "KIT DE MAGENETOS PARA DISOLUCIÓN DE REACTIVOS: 3 cm METÁLICO PLASTIFICADO",
    description: "KIT DE MAGENETOS PARA DISOLUCIÓN DE REACTIVOS: 3 cm METÁLICO PLASTIFICADO",
    price: 34.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "kit-de-soluciones-buffer-ph-10-01-7-0-4-0-500-ml-hanna-instruments",
    name: "KIT DE SOLUCIONES BUFFER: PH 10.01, 7.0 , 4.0 500 ml HANNA INSTRUMENTS",
    description: "KIT DE SOLUCIONES BUFFER: PH 10.01, 7.0 , 4.0 500 ml HANNA INSTRUMENTS",
    price: 186,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "kitasato-cono-imhoff-de-vidrio-con-llave-1000-ml-vidrio-de-borosilicato",
    name: "KITASATO CONO IMHOFF DE VIDRIO CON LLAVE 1000 ml VIDRIO DE BOROSILICATO",
    description: "KITASATO CONO IMHOFF DE VIDRIO CON LLAVE 1000 ml VIDRIO DE BOROSILICATO",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "laminas-porta-objeto-50und",
    name: "LAMINAS PORTA OBJETO × 50UND",
    description: "LAMINAS PORTA OBJETO × 50UND",
    price: 6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "lugol-1000-ml",
    name: "LUGOL 1000 ml",
    description: "LUGOL 1000 ml",
    price: 144,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "lugol-al-1-unidades-100-ml",
    name: "LUGOL AL 1% UNIDADES × 100 ml",
    description: "LUGOL AL 1% UNIDADES × 100 ml",
    price: 46.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "lugol-al-1-100-ml",
    name: "LUGOL AL 1% × 100 ml",
    description: "LUGOL AL 1% × 100 ml",
    price: 46.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "lugol-parasitologico-500-ml-marca-diagtest",
    name: "LUGOL PARASITOLOGICO × 500 ml,MARCA DIAGTEST",
    description: "LUGOL PARASITOLOGICO × 500 ml,MARCA DIAGTEST",
    price: 72,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "lugol-1000-ml",
    name: "LUGOL × 1000 ml",
    description: "LUGOL × 1000 ml",
    price: 144,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "luna-de-reloj-100-ml-vidrio-de-borosilicato-10-cm",
    name: "LUNA DE RELOJ 100 ml VIDRIO DE BOROSILICATO 10 cm",
    description: "LUNA DE RELOJ 100 ml VIDRIO DE BOROSILICATO 10 cm",
    price: 12,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "l-minas-portaobjeto-50u",
    name: "LÁMINAS PORTAOBJETO 50U",
    description: "LÁMINAS PORTAOBJETO 50U",
    price: 6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "matraz-de-de-vidrio-100-ml-erlenmeyer-graduados-vidrio-de-borosilicato-isolab",
    name: "MATRAZ DE DE VIDRIO × 100 ml (ERLENMEYER)GRADUADOS VIDRIO DE BOROSILICATO ISOLAB",
    description: "MATRAZ DE DE VIDRIO × 100 ml (ERLENMEYER)GRADUADOS VIDRIO DE BOROSILICATO ISOLAB",
    price: 39.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "matraz-de-de-vidrio-50-ml-erlenmeyer-graduados-vidrio-de-borosilicato-isolab",
    name: "MATRAZ DE DE VIDRIO × 50 ml (ERLENMEYER) GRADUADOS VIDRIO DE BOROSILICATO ISOLAB",
    description: "MATRAZ DE DE VIDRIO × 50 ml (ERLENMEYER) GRADUADOS VIDRIO DE BOROSILICATO ISOLAB",
    price: 38.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "matraz-de-de-vidrio-500-ml-erlenmeyer-graduados-vidrio-de-borosilicato-isolab",
    name: "MATRAZ DE DE VIDRIO × 500 ml (ERLENMEYER)GRADUADOS VIDRIO DE BOROSILICATO ISOLAB",
    description: "MATRAZ DE DE VIDRIO × 500 ml (ERLENMEYER)GRADUADOS VIDRIO DE BOROSILICATO ISOLAB",
    price: 50.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "matraz-erlenmeyer-1000-ml",
    name: "MATRAZ ERLENMEYER 1000 ml",
    description: "MATRAZ ERLENMEYER 1000 ml",
    price: 30,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "matraz-erlenmeyer-250-ml",
    name: "MATRAZ ERLENMEYER 250 ml",
    description: "MATRAZ ERLENMEYER 250 ml",
    price: 14.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "matraz-erlenmeyer-500-ml",
    name: "MATRAZ ERLENMEYER 500 ml",
    description: "MATRAZ ERLENMEYER 500 ml",
    price: 21.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "mechero-de-alcohol-tapa-de-metal-vidrio-de-borosilicato",
    name: "MECHERO DE ALCOHOL TAPA DE METAL VIDRIO DE BOROSILICATO",
    description: "MECHERO DE ALCOHOL TAPA DE METAL VIDRIO DE BOROSILICATO",
    price: 10.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "mecheros-de-alcohol-con-tapa-de-metal",
    name: "MECHEROS DE ALCOHOL CON TAPA DE METAL",
    description: "MECHEROS DE ALCOHOL CON TAPA DE METAL",
    price: 10.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "mecheros-de-alcohol-tapa-metal",
    name: "MECHEROS DE ALCOHOL TAPA METAL",
    description: "MECHEROS DE ALCOHOL TAPA METAL",
    price: 10.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "nitrato-de-potasio-0-5-kg-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "NITRATO DE POTASIO 0.5 kg MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "NITRATO DE POTASIO 0.5 kg MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 84,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pera-de-separaci-n-embudo-f-de-pera-3-de-500-ml-vidrio-de-borosilicato-isolab",
    name: "PERA DE SEPARACIÓN (EMBUDO F/ DE PERA) 3 DE 500 ml VIDRIO DE BOROSILICATO ISOLAB",
    description: "PERA DE SEPARACIÓN (EMBUDO F/ DE PERA) 3 DE 500 ml VIDRIO DE BOROSILICATO ISOLAB",
    price: 414,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pera-de-separaci-n-embudo-f-de-pera-4-de-250-ml-vidrio-de-borosilicato-isolab",
    name: "PERA DE SEPARACIÓN (EMBUDO F/ DE PERA) 4 DE 250 ml VIDRIO DE BOROSILICATO ISOLAB",
    description: "PERA DE SEPARACIÓN (EMBUDO F/ DE PERA) 4 DE 250 ml VIDRIO DE BOROSILICATO ISOLAB",
    price: 336,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "permanganato-de-potasio-kmno4-250-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "PERMANGANATO DE POTASIO (KMNO4) × 250 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "PERMANGANATO DE POTASIO (KMNO4) × 250 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 468,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-1-ml",
    name: "PIPETA 1 ml",
    description: "PIPETA 1 ml",
    price: 8.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-10-ml",
    name: "PIPETA 10 ml",
    description: "PIPETA 10 ml",
    price: 8.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-2-ml",
    name: "PIPETA 2 ml",
    description: "PIPETA 2 ml",
    price: 8.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-5-ml",
    name: "PIPETA 5 ml",
    description: "PIPETA 5 ml",
    price: 8.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-de-vidrio-graduada-1-ml-vidrio-de-borosilicato-importado",
    name: "PIPETA DE VIDRIO GRADUADA × 1 ml VIDRIO DE BOROSILICATO IMPORTADO",
    description: "PIPETA DE VIDRIO GRADUADA × 1 ml VIDRIO DE BOROSILICATO IMPORTADO",
    price: 8.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-de-vidrio-graduada-10-ml-caja-10u-vidrio-de-borosilicato-isolab",
    name: "PIPETA DE VIDRIO GRADUADA × 10 ml CAJA 10U VIDRIO DE BOROSILICATO ISOLAB",
    description: "PIPETA DE VIDRIO GRADUADA × 10 ml CAJA 10U VIDRIO DE BOROSILICATO ISOLAB",
    price: 234,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-de-vidrio-graduada-5-ml-vidrio-de-borosilicato-importado",
    name: "PIPETA DE VIDRIO GRADUADA × 5 ml VIDRIO DE BOROSILICATO IMPORTADO",
    description: "PIPETA DE VIDRIO GRADUADA × 5 ml VIDRIO DE BOROSILICATO IMPORTADO",
    price: 8.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-volumetrica-de-1-ml-vidrio-de-borosilicato",
    name: "PIPETA VOLUMETRICA DE 1 ml VIDRIO DE BOROSILICATO",
    description: "PIPETA VOLUMETRICA DE 1 ml VIDRIO DE BOROSILICATO",
    price: 39.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-volumetrica-de-2-ml-vidrio-de-borosilicato",
    name: "PIPETA VOLUMETRICA DE 2 ml VIDRIO DE BOROSILICATO",
    description: "PIPETA VOLUMETRICA DE 2 ml VIDRIO DE BOROSILICATO",
    price: 40.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-1-ml",
    name: "PIPETA × 1 ml",
    description: "PIPETA × 1 ml",
    price: 7.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-10-ml",
    name: "PIPETA × 10 ml",
    description: "PIPETA × 10 ml",
    price: 7.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-2-ml",
    name: "PIPETA × 2 ml",
    description: "PIPETA × 2 ml",
    price: 7.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipeta-5-ml",
    name: "PIPETA × 5 ml",
    description: "PIPETA × 5 ml",
    price: 7.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipetas-unidades-1-ml",
    name: "PIPETAS UNIDADES × 1 ml",
    description: "PIPETAS UNIDADES × 1 ml",
    price: 7.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipetas-unidades-10-ml",
    name: "PIPETAS UNIDADES × 10 ml",
    description: "PIPETAS UNIDADES × 10 ml",
    price: 7.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipetas-unidades-2-ml",
    name: "PIPETAS UNIDADES × 2 ml",
    description: "PIPETAS UNIDADES × 2 ml",
    price: 7.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "pipetas-unidades-5-ml",
    name: "PIPETAS UNIDADES × 5 ml",
    description: "PIPETAS UNIDADES × 5 ml",
    price: 7.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "piseta-500-ml-con-agua-destilada-elegir-tama-o",
    name: "PISETA 500 ml CON AGUA DESTILADA (ELEGIR TAMAÑO)",
    description: "PISETA 500 ml CON AGUA DESTILADA (ELEGIR TAMAÑO)",
    price: 10.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "piseta-con-agua-destilada-1000-ml",
    name: "PISETA CON AGUA DESTILADA 1000 ml",
    description: "PISETA CON AGUA DESTILADA 1000 ml",
    price: 12.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "piseta-con-agua-destilada-250-ml",
    name: "PISETA CON AGUA DESTILADA 250 ml",
    description: "PISETA CON AGUA DESTILADA 250 ml",
    price: 8.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "piseta-con-agua-destilada-500-ml",
    name: "PISETA CON AGUA DESTILADA 500 ml",
    description: "PISETA CON AGUA DESTILADA 500 ml",
    price: 10.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "piseta-de-agua-o-frasco-lavador-250-ml-isolab",
    name: "PISETA DE AGUA O FRASCO LAVADOR 250 ml ISOLAB",
    description: "PISETA DE AGUA O FRASCO LAVADOR 250 ml ISOLAB",
    price: 21.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "potasio-cromato-ts-al-5-nile-chemicals-100-g",
    name: "POTASIO CROMATO TS AL 5% – NILE CHEMICALS × 100 g",
    description: "POTASIO CROMATO TS AL 5% – NILE CHEMICALS × 100 g",
    price: 192,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-1000-ml",
    name: "PROBETA 1000 ml",
    description: "PROBETA 1000 ml",
    price: 78,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-1000-ml-de-plastico",
    name: "PROBETA 1000 ml DE PLASTICO",
    description: "PROBETA 1000 ml DE PLASTICO",
    price: 60,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-25-ml",
    name: "PROBETA 25 ml",
    description: "PROBETA 25 ml",
    price: 10.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-250-ml",
    name: "PROBETA 250 ml",
    description: "PROBETA 250 ml",
    price: 36,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-50-ml",
    name: "PROBETA 50 ml",
    description: "PROBETA 50 ml",
    price: 19.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-de-vidrio-1-l-graduadas-plastico-isolab",
    name: "PROBETA DE VIDRIO × 1 l GRADUADAS PLASTICO ISOLAB",
    description: "PROBETA DE VIDRIO × 1 l GRADUADAS PLASTICO ISOLAB",
    price: 294,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-de-vidrio-10-ml-graduadas-vidrio-de-borosilicato-isolab",
    name: "PROBETA DE VIDRIO × 10 ml GRADUADAS VIDRIO DE BOROSILICATO ISOLAB",
    description: "PROBETA DE VIDRIO × 10 ml GRADUADAS VIDRIO DE BOROSILICATO ISOLAB",
    price: 72,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-de-vidrio-100-ml-graduadas-vidrio-de-borosilicato-isolab",
    name: "PROBETA DE VIDRIO × 100 ml GRADUADAS VIDRIO DE BOROSILICATO ISOLAB",
    description: "PROBETA DE VIDRIO × 100 ml GRADUADAS VIDRIO DE BOROSILICATO ISOLAB",
    price: 84,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-de-vidrio-25-ml-graduadas-vidrio-de-borosilicato-isolab",
    name: "PROBETA DE VIDRIO × 25 ml GRADUADAS VIDRIO DE BOROSILICATO ISOLAB",
    description: "PROBETA DE VIDRIO × 25 ml GRADUADAS VIDRIO DE BOROSILICATO ISOLAB",
    price: 69.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-de-vidrio-50-ml-graduadas-vidrio-de-borosilicato-isolab",
    name: "PROBETA DE VIDRIO × 50 ml GRADUADAS VIDRIO DE BOROSILICATO ISOLAB",
    description: "PROBETA DE VIDRIO × 50 ml GRADUADAS VIDRIO DE BOROSILICATO ISOLAB",
    price: 96,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-graduada-cetificada-biohall-10-ml",
    name: "PROBETA GRADUADA CETIFICADA BIOHALL 10 ml",
    description: "PROBETA GRADUADA CETIFICADA BIOHALL 10 ml",
    price: 33.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-graduada-cetificada-biohall-100-ml",
    name: "PROBETA GRADUADA CETIFICADA BIOHALL 100 ml",
    description: "PROBETA GRADUADA CETIFICADA BIOHALL 100 ml",
    price: 45.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-graduada-cetificada-biohall-1000-ml",
    name: "PROBETA GRADUADA CETIFICADA BIOHALL 1000 ml",
    description: "PROBETA GRADUADA CETIFICADA BIOHALL 1000 ml",
    price: 162,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-graduada-cetificada-biohall-50-ml",
    name: "PROBETA GRADUADA CETIFICADA BIOHALL 50 ml",
    description: "PROBETA GRADUADA CETIFICADA BIOHALL 50 ml",
    price: 36,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-plastico-100-ml",
    name: "PROBETA PLASTICO × 100 ml",
    description: "PROBETA PLASTICO × 100 ml",
    price: 14.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-vidrio-100-ml",
    name: "PROBETA VIDRIO × 100 ml",
    description: "PROBETA VIDRIO × 100 ml",
    price: 21.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-100-ml",
    name: "PROBETA × 100 ml",
    description: "PROBETA × 100 ml",
    price: 22.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-100-ml-plastico",
    name: "PROBETA × 100 ml (PLASTICO)",
    description: "PROBETA × 100 ml (PLASTICO)",
    price: 14.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "probeta-100-ml-vidrio",
    name: "PROBETA × 100 ml (VIDRIO)",
    description: "PROBETA × 100 ml (VIDRIO)",
    price: 21.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "reactivo-de-fehling-a-unidades-100-ml",
    name: "REACTIVO DE FEHLING A UNIDADES × 100 ml",
    description: "REACTIVO DE FEHLING A UNIDADES × 100 ml",
    price: 18,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "reactivo-de-fehling-a-100-ml",
    name: "REACTIVO DE FEHLING A × 100 ml",
    description: "REACTIVO DE FEHLING A × 100 ml",
    price: 18,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "reactivo-de-fehling-b-unidades-100-ml",
    name: "REACTIVO DE FEHLING B UNIDADES × 100 ml",
    description: "REACTIVO DE FEHLING B UNIDADES × 100 ml",
    price: 19.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "reactivo-de-fehling-b-100-ml",
    name: "REACTIVO DE FEHLING B × 100 ml",
    description: "REACTIVO DE FEHLING B × 100 ml",
    price: 19.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "reactivo-de-licor-de-fehling-100-ml-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "REACTIVO DE LICOR DE FEHLING 100 ml MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "REACTIVO DE LICOR DE FEHLING 100 ml MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 18,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "reactivo-de-molish-500-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "REACTIVO DE MOLISH 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "REACTIVO DE MOLISH 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "reactivo-de-tollens-100-ml-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "REACTIVO DE TOLLENS 100 ml MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "REACTIVO DE TOLLENS 100 ml MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 81.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "solucion-de-fenolftaleina-al-1-100-ml",
    name: "SOLUCION DE FENOLFTALEINA AL 1% 100 ml",
    description: "SOLUCION DE FENOLFTALEINA AL 1% 100 ml",
    price: 14.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "soluci-n-de-fenolftale-na-1-100-ml",
    name: "SOLUCIÓN DE FENOLFTALEÍNA 1% 100 ml",
    description: "SOLUCIÓN DE FENOLFTALEÍNA 1% 100 ml",
    price: 14.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "soluci-n-de-sulfato-de-cobre-100-ml-unidades-100-ml",
    name: "SOLUCIÓN DE SULFATO DE COBRE (100 ml) UNIDADES × 100 ml",
    description: "SOLUCIÓN DE SULFATO DE COBRE (100 ml) UNIDADES × 100 ml",
    price: 24,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "soporte-porta-capsula-o-el-tri-ngulo-de-vidrio-vidrio-de-borosilicato",
    name: "SOPORTE PORTA CAPSULA O EL TRIÁNGULO DE VIDRIO VIDRIO DE BOROSILICATO",
    description: "SOPORTE PORTA CAPSULA O EL TRIÁNGULO DE VIDRIO VIDRIO DE BOROSILICATO",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "sulfato-de-cobre-1-kg-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "SULFATO DE COBRE 1 kg MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "SULFATO DE COBRE 1 kg MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 96,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "sulfato-de-cobre-5-hidratos-por-500-grs",
    name: "SULFATO DE COBRE 5 HIDRATOS POR 500 GRS",
    description: "SULFATO DE COBRE 5 HIDRATOS POR 500 GRS",
    price: 102,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "sulfato-de-cobre-ii-500-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "SULFATO DE COBRE II 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "SULFATO DE COBRE II 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "sulfato-de-cobre-pentahidratado-500gr",
    name: "SULFATO DE COBRE PENTAHIDRATADO 500GR",
    description: "SULFATO DE COBRE PENTAHIDRATADO 500GR",
    price: 114,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "sulfato-de-cobre-pentahidratado-al-99-500-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "SULFATO DE COBRE PENTAHIDRATADO AL 99% × 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "SULFATO DE COBRE PENTAHIDRATADO AL 99% × 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 84,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "sulfato-de-cobre-100-ml",
    name: "SULFATO DE COBRE × 100 ml",
    description: "SULFATO DE COBRE × 100 ml",
    price: 24,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "sulfato-de-hierro-heptahidratado-al-99-500-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "SULFATO DE HIERRO HEPTAHIDRATADO AL 99% × 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "SULFATO DE HIERRO HEPTAHIDRATADO AL 99% × 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 198,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "sulfato-de-n-quel-hexadritado-al-99-500-g",
    name: "SULFATO DE NÍQUEL HEXADRITADO AL 99% × 500 g",
    description: "SULFATO DE NÍQUEL HEXADRITADO AL 99% × 500 g",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "sulfato-de-n-quel-hexadritado-al-99-500-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "SULFATO DE NÍQUEL HEXADRITADO AL 99% × 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "SULFATO DE NÍQUEL HEXADRITADO AL 99% × 500 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 184.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "sulfato-de-zinc-0-5-kg-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "SULFATO DE ZINC 0.5 kg MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "SULFATO DE ZINC 0.5 kg MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 60,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tetracloruro-de-carb-n-200-ml",
    name: "TETRACLORURO DE CARBÓN (200 ml)",
    description: "TETRACLORURO DE CARBÓN (200 ml)",
    price: 192,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tetracloruro-de-carb-n-200-ml-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "TETRACLORURO DE CARBÓN (200 ml) MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "TETRACLORURO DE CARBÓN (200 ml) MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tiocianato-de-potasio-100-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "TIOCIANATO DE POTASIO 100 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "TIOCIANATO DE POTASIO 100 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 174,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubo-de-pasta-profilactica-frasco-eufar-50gramos",
    name: "TUBO DE PASTA PROFILACTICA FRASCO ***EUFAR 50GRAMOS***",
    description: "TUBO DE PASTA PROFILACTICA FRASCO ***EUFAR 50GRAMOS***",
    price: 18,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "varilla-de-zinc-se-usa-para-el-electrodo-nodo",
    name: "VARILLA DE ZINC ( SE USA PARA EL ELECTRODO ÁNODO)",
    description: "VARILLA DE ZINC ( SE USA PARA EL ELECTRODO ÁNODO)",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-precipitado-100-ml",
    name: "VASO PRECIPITADO 100 ml",
    description: "VASO PRECIPITADO 100 ml",
    price: 7.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-precipitado-250-ml",
    name: "VASO PRECIPITADO 250 ml",
    description: "VASO PRECIPITADO 250 ml",
    price: 9.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-precipitado-500-ml",
    name: "VASO PRECIPITADO 500 ml",
    description: "VASO PRECIPITADO 500 ml",
    price: 15.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "yoduro-de-potasio-por-500-grs",
    name: "YODURO DE POTASIO POR 500 GRS",
    description: "YODURO DE POTASIO POR 500 GRS",
    price: 696,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "zinc-met-lico-polvo-por-500-grs",
    name: "ZINC METÁLICO POLVO POR 500 GRS",
    description: "ZINC METÁLICO POLVO POR 500 GRS",
    price: 162,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "xido-de-zinc-0-5-kg-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "ÓXIDO DE ZINC 0.5 kg MARCAS: BIOPECK, HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "ÓXIDO DE ZINC 0.5 kg MARCAS: BIOPECK, HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 84,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tripode-para-mechero-bunsen-metalico",
    name: "TRIPODE PARA MECHERO BUNSEN METALICO",
    description: "TRIPODE PARA MECHERO BUNSEN METALICO",
    price: 24,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "cido-sulfosalic-lico-100-ml",
    name: "ÁCIDO SULFOSALICÍLICO 100 ML",
    description: "ÁCIDO SULFOSALICÍLICO 100 ML",
    price: 48,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "cido-sulf-rico-concentrado-1lt",
    name: "ÁCIDO SULFÚRICO CONCENTRADO 1LT",
    description: "ÁCIDO SULFÚRICO CONCENTRADO 1LT",
    price: 264,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "capsulas-de-loza-de-porcelana",
    name: "CAPSULAS DE LOZA DE PORCELANA",
    description: "CAPSULAS DE LOZA DE PORCELANA",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "cloroformo-1-litro-grado-para-an-lisis",
    name: "CLOROFORMO × 1 LITRO (GRADO PARA ANÁLISIS)",
    description: "CLOROFORMO × 1 LITRO (GRADO PARA ANÁLISIS)",
    price: 108,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "crisol-25-ml-de-porcelana",
    name: "CRISOL 25 ml DE PORCELANA",
    description: "CRISOL 25 ml DE PORCELANA",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "diagnostico-d-embarazo-tubo-25-tiras-prueba-cualitativa-de-hcg-en-orina-suero-marca-ctk",
    name: "DIAGNOSTICO D/EMBARAZO (TUBO × 25 TIRAS),PRUEBA CUALITATIVA DE HCG EN ORINA/SUERO MARCA: CTK",
    description: "DIAGNOSTICO D/EMBARAZO (TUBO × 25 TIRAS),PRUEBA CUALITATIVA DE HCG EN ORINA/SUERO MARCA: CTK",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "electrodo-de-hierro",
    name: "ELECTRODO DE HIERRO",
    description: "ELECTRODO DE HIERRO",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "embudo-de-75-mm-vastago-corto",
    name: "EMBUDO DE 75 mm (VASTAGO CORTO)",
    description: "EMBUDO DE 75 mm (VASTAGO CORTO)",
    price: 10.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "embudo-de-v-stago-corto-75-mm",
    name: "EMBUDO DE VÁSTAGO CORTO 75 mm",
    description: "EMBUDO DE VÁSTAGO CORTO 75 mm",
    price: 10.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "embudo-de-vidrio-100-mm",
    name: "EMBUDO DE VIDRIO 100 mm",
    description: "EMBUDO DE VIDRIO 100 mm",
    price: 15.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "embudo-de-vidrio-60-m",
    name: "EMBUDO DE VIDRIO 60 m",
    description: "EMBUDO DE VIDRIO 60 m",
    price: 8.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "embudo-de-vidrio-75-mm",
    name: "EMBUDO DE VIDRIO 75 mm",
    description: "EMBUDO DE VIDRIO 75 mm",
    price: 9.6,
    image: "/images/laboratorio/placeholder.png"
  },

  {
    id: "fiola-100-ml",
    name: "FIOLA 100 ml",
    description: "FIOLA 100 ml",
    price: 24,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "fiola-250-ml",
    name: "FIOLA 250 ml",
    description: "FIOLA 250 ml",
    price: 45.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "fiola-50-ml",
    name: "FIOLA 50 ml",
    description: "FIOLA 50 ml",
    price: 22.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "fiola-500-ml",
    name: "FIOLA 500 ml",
    description: "FIOLA 500 ml",
    price: 54,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "fiola-de-1000-ml",
    name: "FIOLA DE 1000 ml",
    description: "FIOLA DE 1000 ml",
    price: 72,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "glucosa-anhidra-500-g-de-farmacia",
    name: "GLUCOSA ANHIDRA × 500 g DE FARMACIA",
    description: "GLUCOSA ANHIDRA × 500 g DE FARMACIA",
    price: 45.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "glucosa-anhidra-kg",
    name: "GLUCOSA ANHIDRA × KG",
    description: "GLUCOSA ANHIDRA × KG",
    price: 72,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "glucosa-anhidra-unidades-1-kilo",
    name: "GLUCOSA ANHIDRA UNIDADES × 1 KILO",
    description: "GLUCOSA ANHIDRA UNIDADES × 1 KILO",
    price: 72,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "hexano-al-98-1-l-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "HEXANO AL 98% × 1 l MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "HEXANO AL 98% × 1 l MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 294,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "hidr-xido-de-amonio-100-ml-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "HIDRÓXIDO DE AMONIO × 100 ml MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "HIDRÓXIDO DE AMONIO × 100 ml MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 96,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "hidr-xido-de-s-dio-1-kg-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "HIDRÓXIDO DE SÓDIO 1 kg MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "HIDRÓXIDO DE SÓDIO 1 kg MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 468,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "kit-de-grupo-sangu-neo",
    name: "KIT DE GRUPO SANGUÍNEO",
    description: "KIT DE GRUPO SANGUÍNEO",
    price: 108,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "kit-de-grupo-sangu-neo-kits",
    name: "KIT DE GRUPO SANGUÍNEO KITS",
    description: "KIT DE GRUPO SANGUÍNEO KITS",
    price: 108,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "laminillas-cubre-objetos-100und",
    name: "LAMINILLAS CUBRE OBJETOS × 100UND",
    description: "LAMINILLAS CUBRE OBJETOS × 100UND",
    price: 6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "laminillas-cubreobjetos-100u",
    name: "LAMINILLAS CUBREOBJETOS 100U",
    description: "LAMINILLAS CUBREOBJETOS 100U",
    price: 6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "luna-de-relo-p-laboratorio-boro-3-3-de-100-mm",
    name: "LUNA DE RELO P/LABORATORIO BORO 3.3 DE 100 mm",
    description: "LUNA DE RELO P/LABORATORIO BORO 3.3 DE 100 mm",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "mechero",
    name: "MECHERO",
    description: "MECHERO",
    price: 9.6,
    image: "/images/laboratorio/placeholder.png"
  },

  {
    id: "nitrato-de-cadmio-por-500-grs",
    name: "NITRATO DE CADMIO POR 500 GRS",
    description: "NITRATO DE CADMIO POR 500 GRS",
    price: 384,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "nitrato-de-plata-solucion-agno3-al-3-100-ml",
    name: "NITRATO DE PLATA (SOLUCION AGNO3) AL 3% × 100 ml",
    description: "NITRATO DE PLATA (SOLUCION AGNO3) AL 3% × 100 ml",
    price: 204,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "nitrato-de-plata-al-3-100-ml",
    name: "NITRATO DE PLATA AL 3% × 100 ml",
    description: "NITRATO DE PLATA AL 3% × 100 ml",
    price: 180,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "nitrato-f-rrico-100-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "NITRATO FÉRRICO 100 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "NITRATO FÉRRICO 100 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "placas-petri-36und-presentacion-caja-por-36-unidades",
    name: "PLACAS PETRI × 36UND (PRESENTACION CAJA POR 36 UNIDADES)",
    description: "PLACAS PETRI × 36UND (PRESENTACION CAJA POR 36 UNIDADES)",
    price: 288,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "placas-petri-36u",
    name: "PLACAS PETRI 36U",
    description: "PLACAS PETRI 36U",
    price: 288,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "soluci-n-de-nitrato-de-plata-al-3-unidades-100-ml",
    name: "SOLUCIÓN DE NITRATO DE PLATA AL 3% UNIDADES × 100 ml",
    description: "SOLUCIÓN DE NITRATO DE PLATA AL 3% UNIDADES × 100 ml",
    price: 180,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "soporte-universal-metalico-base-pesada",
    name: "SOPORTE UNIVERSAL METALICO BASE PESADA",
    description: "SOPORTE UNIVERSAL METALICO BASE PESADA",
    price: 66,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tiras-para-glucosa-marca-accuchek-instant-cja-de-50-unidades",
    name: "TIRAS PARA GLUCOSA MARCA ACCUCHEK INSTANT CJA DE 50 UNIDADES",
    description: "TIRAS PARA GLUCOSA MARCA ACCUCHEK INSTANT CJA DE 50 UNIDADES",
    price: 84,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tiras-para-glucosa-marca-accuchek-performa-cja-de-50-unidades",
    name: "TIRAS PARA GLUCOSA MARCA ACCUCHEK PERFORMA CJA DE 50 UNIDADES",
    description: "TIRAS PARA GLUCOSA MARCA ACCUCHEK PERFORMA CJA DE 50 UNIDADES",
    price: 96,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tiras-reactivas-accu-check-performa-25u",
    name: "TIRAS REACTIVAS ACCU CHECK PERFORMA 25U",
    description: "TIRAS REACTIVAS ACCU CHECK PERFORMA 25U",
    price: 84,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tiras-reactivas-d-orina-fco-100-und-marca-meditest-combi-11",
    name: "TIRAS REACTIVAS D/ORINA FCO × 100 UND,MARCA MEDITEST COMBI 11",
    description: "TIRAS REACTIVAS D/ORINA FCO × 100 UND,MARCA MEDITEST COMBI 11",
    price: 78,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tiras-reactivas-del-hemoglobinometro-marca-hemo-control-cja-de-50-test",
    name: "TIRAS REACTIVAS DEL HEMOGLOBINOMETRO MARCA HEMO CONTROL CJA DE 50 TEST",
    description: "TIRAS REACTIVAS DEL HEMOGLOBINOMETRO MARCA HEMO CONTROL CJA DE 50 TEST",
    price: 190.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubo-de-ensayo-10-75-mm",
    name: "TUBO DE ENSAYO 10 × 75 mm",
    description: "TUBO DE ENSAYO 10 × 75 mm",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubo-de-ensayo-de-vidrio-12-75-mm",
    name: "TUBO DE ENSAYO DE VIDRIO 12 × 75 mm",
    description: "TUBO DE ENSAYO DE VIDRIO 12 × 75 mm",
    price: 0.84,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubo-de-ensayo-de-vidrio-13-150-mm",
    name: "TUBO DE ENSAYO DE VIDRIO 13 × 150 mm",
    description: "TUBO DE ENSAYO DE VIDRIO 13 × 150 mm",
    price: 0.84,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubo-de-ensayo-de-vidrio-13-x100-mm-250-und",
    name: "TUBO DE ENSAYO DE VIDRIO 13 X100 mm × 250 UND",
    description: "TUBO DE ENSAYO DE VIDRIO 13 X100 mm × 250 UND",
    price: 204,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubos-de-ensayo-c-tapa-rosca",
    name: "TUBOS DE ENSAYO C/TAPA ROSCA",
    description: "TUBOS DE ENSAYO C/TAPA ROSCA",
    price: 348,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubos-de-ensayo-c-tapa-rosca-100und",
    name: "TUBOS DE ENSAYO C/TAPA ROSCA × 100UND",
    description: "TUBOS DE ENSAYO C/TAPA ROSCA × 100UND",
    price: 348,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubos-de-ensayo-con-tapa-rosca",
    name: "TUBOS DE ENSAYO CON TAPA ROSCA",
    description: "TUBOS DE ENSAYO CON TAPA ROSCA",
    price: 348,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubos-de-ensayo-de-vidrio-13x100-mm",
    name: "TUBOS DE ENSAYO DE VIDRIO 13X100 mm",
    description: "TUBOS DE ENSAYO DE VIDRIO 13X100 mm",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitacion-100-ml",
    name: "VASO DE PRECIPITACION 100 ml",
    description: "VASO DE PRECIPITACION 100 ml",
    price: 7.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitacion-50-ml",
    name: "VASO DE PRECIPITACION 50 ml",
    description: "VASO DE PRECIPITACION 50 ml",
    price: 6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitaci-n-unidades-100-ml",
    name: "VASO DE PRECIPITACIÓN UNIDADES × 100 ml",
    description: "VASO DE PRECIPITACIÓN UNIDADES × 100 ml",
    price: 7.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitaci-n-unidades-50-ml",
    name: "VASO DE PRECIPITACIÓN UNIDADES × 50 ml",
    description: "VASO DE PRECIPITACIÓN UNIDADES × 50 ml",
    price: 6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitado-100-ml-c-certificado",
    name: "VASO DE PRECIPITADO 100 ml C/CERTIFICADO",
    description: "VASO DE PRECIPITADO 100 ml C/CERTIFICADO",
    price: 16.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitado-100-ml-s-certificado",
    name: "VASO DE PRECIPITADO 100 ml S/CERTIFICADO",
    description: "VASO DE PRECIPITADO 100 ml S/CERTIFICADO",
    price: 7.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitado-1000-ml-c-certificado",
    name: "VASO DE PRECIPITADO 1000 ml C/CERTIFICADO",
    description: "VASO DE PRECIPITADO 1000 ml C/CERTIFICADO",
    price: 54,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitado-1000-ml-s-certificado",
    name: "VASO DE PRECIPITADO 1000 ml S/CERTIFICADO",
    description: "VASO DE PRECIPITADO 1000 ml S/CERTIFICADO",
    price: 21.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitado-250-ml-c-certificado",
    name: "VASO DE PRECIPITADO 250 ml C/CERTIFICADO",
    description: "VASO DE PRECIPITADO 250 ml C/CERTIFICADO",
    price: 28.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitado-250-ml-s-certificado",
    name: "VASO DE PRECIPITADO 250 ml S/CERTIFICADO",
    description: "VASO DE PRECIPITADO 250 ml S/CERTIFICADO",
    price: 8.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitado-500-ml-c-certificado",
    name: "VASO DE PRECIPITADO 500 ml C/CERTIFICADO",
    description: "VASO DE PRECIPITADO 500 ml C/CERTIFICADO",
    price: 42,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "vaso-de-precipitado-500-ml-s-certificado",
    name: "VASO DE PRECIPITADO 500 ml S/CERTIFICADO",
    description: "VASO DE PRECIPITADO 500 ml S/CERTIFICADO",
    price: 14.4,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "verde-de-bromocresol-ppr-100-grs",
    name: "VERDE DE BROMOCRESOL PPR 100 GRS",
    description: "VERDE DE BROMOCRESOL PPR 100 GRS",
    price: 288,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "viruta-de-hierro-100-gramos",
    name: "VIRUTA DE HIERRO 100 GRAMOS",
    description: "VIRUTA DE HIERRO 100 GRAMOS",
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
    id: "criostato-de-pie-modelo-cm-1860-uv-marca-fresenius-medical",
    name: "CRIOSTATO DE PIE MODELO CM 1860 UV MARCA: FRESENIUS MEDICAL",
    description: "CRIOSTATO DE PIE MODELO CM 1860 UV MARCA: FRESENIUS MEDICAL",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "dispositivo-con-control-de-temperatura-marca-granding-modelo-china",
    name: "DISPOSITIVO CON CONTROL DE TEMPERATURA, MARCA: GRANDING, MODELO CHINA",
    description: "DISPOSITIVO CON CONTROL DE TEMPERATURA, MARCA: GRANDING, MODELO CHINA",
    price: 1164,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "frasco-de-aspiraci-n-vidrio-c-tapa-700-ml-p-marca-thomas-modelo-1366gl",
    name: "FRASCO DE ASPIRACIÓN VIDRIO C/TAPA 700 ml P/MARCA THOMAS MODELO 1366GL",
    description: "FRASCO DE ASPIRACIÓN VIDRIO C/TAPA 700 ml P/MARCA THOMAS MODELO 1366GL",
    price: 1.2,
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
    id: "bomba-de-vac-o-pobel-r300-exenta-de-aceite-c-nula",
    name: "BOMBA DE VACÍO POBEL R300 EXENTA DE ACEITE + CÁNULA",
    description: "BOMBA DE VACÍO POBEL R300 EXENTA DE ACEITE + CÁNULA",
    price: 4560,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "capilares-con-heparina-rojo-100-und-marca-marienfeld",
    name: "CAPILARES CON HEPARINA (ROJO) × 100 UND – MARCA MARIENFELD",
    description: "CAPILARES CON HEPARINA (ROJO) × 100 UND – MARCA MARIENFELD",
    price: 21.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "cubeta-de-plastico-juego",
    name: "CUBETA DE PLASTICO JUEGO",
    description: "CUBETA DE PLASTICO JUEGO",
    price: 18,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "espatula-de-laboratorio-de-metal-de-17-cm-mango-madera",
    name: "ESPATULA DE LABORATORIO DE METAL DE 17 cm MANGO MADERA",
    description: "ESPATULA DE LABORATORIO DE METAL DE 17 cm MANGO MADERA",
    price: 10.8,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "filtro-de-membrana-0-45-um-47-mm-caja-200-und-syvet",
    name: "FILTRO DE MEMBRANA 0,45 UM × 47 mm CAJA × 200 UND – SYVET",
    description: "FILTRO DE MEMBRANA 0,45 UM × 47 mm CAJA × 200 UND – SYVET",
    price: 420,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "indicador-azul-de-timo-10-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "INDICADOR AZUL DE TIMO 10 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "INDICADOR AZUL DE TIMO 10 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "indicador-naranja-de-metilo-10-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "INDICADOR NARANJA DE METILO 10 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "INDICADOR NARANJA DE METILO 10 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 84,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "indicador-rojo-de-cresol-10-g-marcas-biopeck-himedia-hanna-sigma-aldrich-chemicals-o-solutest",
    name: "INDICADOR ROJO DE CRESOL 10 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    description: "INDICADOR ROJO DE CRESOL 10 g MARCAS: BIOPECK HIMEDIA, HANNA SIGMA ALDRICH , CHEMICALS O SOLUTEST )",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "per-xido-de-hidr-geno-al-30-por-500-ml",
    name: "PERÓXIDO DE HIDRÓGENO AL 30% POR 500 ml",
    description: "PERÓXIDO DE HIDRÓGENO AL 30% POR 500 ml",
    price: 78,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "rejilla-metalica-con-centro-de-ceramico-de-15-15-cm",
    name: "REJILLA METALICA CON CENTRO DE CERAMICO DE 15*15 cm)",
    description: "REJILLA METALICA CON CENTRO DE CERAMICO DE 15*15 cm)",
    price: 7.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "soluci-n-agno3-al-3-unidades-100-ml",
    name: "SOLUCIÓN AGNO3 AL 3% UNIDADES 100 ml",
    description: "SOLUCIÓN AGNO3 AL 3% UNIDADES 100 ml",
    price: 204,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tina-de-400-ml",
    name: "TINA DE 400 ml",
    description: "TINA DE 400 ml",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tira-de-ph-x100-tiras-china",
    name: "TIRA DE PH X100 TIRAS CHINA",
    description: "TIRA DE PH X100 TIRAS CHINA",
    price: 21.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tira-de-ph-x100-tiras-merck",
    name: "TIRA DE PH X100 TIRAS MERCK",
    description: "TIRA DE PH X100 TIRAS MERCK",
    price: 180,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tub-vacutainer-4-ml-tapa-lila-con-edta-4-ml-x-100-und-marca-vacustest",
    name: "TUB. VACUTAINER 4 ml (TAPA LILA CON EDTA 4 ml)X 100 UND,MARCA: VACUSTEST",
    description: "TUB. VACUTAINER 4 ml (TAPA LILA CON EDTA 4 ml)X 100 UND,MARCA: VACUSTEST",
    price: 45.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubo-anticoagulante-p-muestra-de-sangre-100und",
    name: "TUBO ANTICOAGULANTE P/MUESTRA DE SANGRE × 100UND",
    description: "TUBO ANTICOAGULANTE P/MUESTRA DE SANGRE × 100UND",
    price: 45.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubo-para-muestra-de-sangre-con-anticoagulante-100u",
    name: "TUBO PARA MUESTRA DE SANGRE CON ANTICOAGULANTE 100U",
    description: "TUBO PARA MUESTRA DE SANGRE CON ANTICOAGULANTE 100U",
    price: 45.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubo-vacutainer-tapa-amarilla-c-gel-5-ml-100-und-marca-vacustest",
    name: "TUBO VACUTAINER TAPA AMARILLA C/ GEL 5 ml × 100 UND,MARCA: VACUSTEST",
    description: "TUBO VACUTAINER TAPA AMARILLA C/ GEL 5 ml × 100 UND,MARCA: VACUSTEST",
    price: 48,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubos-recolector-de-extraccion-al-vacio-golden-plus-100-u",
    name: "TUBOS (RECOLECTOR) DE EXTRACCION AL VACIO GOLDEN PLUS 100 U",
    description: "TUBOS (RECOLECTOR) DE EXTRACCION AL VACIO GOLDEN PLUS 100 U",
    price: 36,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubos-capilares-sin-heparina-100u",
    name: "TUBOS CAPILARES SIN HEPARINA × 100U",
    description: "TUBOS CAPILARES SIN HEPARINA × 100U",
    price: 9.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "tubos-capilares-sin-heparina-100und",
    name: "TUBOS CAPILARES SIN HEPARINA × 100UND",
    description: "TUBOS CAPILARES SIN HEPARINA × 100UND",
    price: 9.6,
    image: "/images/laboratorio/placeholder.png"
  },
  {
    id: "ut33b-multimetro-digital-prueba-de-baterias-rango-hasta-600-v",
    name: "UT33B+ MULTIMETRO DIGITAL, PRUEBA DE BATERIAS, RANGO HASTA 600 V",
    description: "UT33B+ MULTIMETRO DIGITAL, PRUEBA DE BATERIAS, RANGO HASTA 600 V",
    price: 1.2,
    image: "/images/laboratorio/placeholder.png"
  },
];

