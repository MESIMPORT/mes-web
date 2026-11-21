// src/data/products/materialDescartableMedico.js

export const materialDescartableMedicoProducts = [

  // ─── 1. MASCARILLA R&G 3 PLIEGUES CON ELÁSTICO ────────────────────────────────
  {
    id: "mascarilla-rg-3-pliegues-elastico",
    name: "MASCARILLA R&G 3 PLIEGUES CON ELÁSTICO",
    type: "Mascarillas",
    description: "Mascarilla descartable de 3 pliegues con elástico marca R&G, fabricación peruana. Tipo IIR de tela no tejida, talla estándar. Certificada CE y FDA, fabricada bajo normas BPM/GMP y BPA/GPS. Disponible en colores blanco, celeste, rosado y negro. La variante negra se presenta en caja × 40 unidades; el resto en caja × 50 unidades.",
    image: "/images/descartable/MASCARILLAS/MASCARILLA_RG.png",

    attributeOrder: ["color", "presentacion"],

    attributes: [
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "blanco", label: "Blanco" },
          { id: "celeste", label: "Celeste" },
          { id: "rosado", label: "Rosado" },
          { id: "negro", label: "Negro" }
        ]
      },
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "caja-50", label: "Caja × 50 und" },
          { id: "caja-40", label: "Caja × 40 und" },
          { id: "cajon", label: "Cajón completo" }
        ]
      }
    ],

    attributeRules: {
      "blanco": { presentacion: ["caja-50", "cajon"] },
      "celeste": { presentacion: ["caja-50", "cajon"] },
      "rosado": { presentacion: ["caja-50", "cajon"] },
      "negro": { presentacion: ["caja-40", "cajon"] }
    },

    variants: [
      {
        sku: "mascarilla-rg-blanco-caja50",
        attrs: { color: "blanco", presentacion: "caja-50" },
        name: "BLANCO – CAJA × 50 UND",
        description: "Mascarilla R&G 3 pliegues con elástico, color blanco. Tipo IIR, tela no tejida, talla estándar. Fabricación peruana certificada CE y FDA. || Color: Blanco | Tipo: IIR | Presentación: Caja × 50 und | Certificaciones: CE, FDA, BPM, BPA.",
        price: 5,
        image: "/images/descartable/MASCARILLAS/MASCARILLA_RG_BLANCO.png"
      },
      {
        sku: "mascarilla-rg-blanco-cajon",
        attrs: { color: "blanco", presentacion: "cajon" },
        name: "BLANCO – CAJÓN COMPLETO",
        description: "Mascarilla R&G 3 pliegues con elástico, color blanco. Tipo IIR, tela no tejida, talla estándar. Presentación cajón completo para reposición institucional. || Color: Blanco | Tipo: IIR | Presentación: Cajón × cajas | Certificaciones: CE, FDA, BPM, BPA.",
        price: 5,
        image: "/images/descartable/MASCARILLAS/MASCARILLA_RG_BLANCO.png"
      },
      {
        sku: "mascarilla-rg-celeste-caja50",
        attrs: { color: "celeste", presentacion: "caja-50" },
        name: "CELESTE – CAJA × 50 UND",
        description: "Mascarilla R&G 3 pliegues con elástico, color celeste. Tipo IIR, tela no tejida, talla estándar. Fabricación peruana certificada CE y FDA. || Color: Celeste | Tipo: IIR | Presentación: Caja × 50 und | Certificaciones: CE, FDA, BPM, BPA.",
        price: 5,
        image: "/images/descartable/MASCARILLAS/MASCARILLA_RG_CELESTE.png"
      },
      {
        sku: "mascarilla-rg-celeste-cajon",
        attrs: { color: "celeste", presentacion: "cajon" },
        name: "CELESTE – CAJÓN COMPLETO",
        description: "Mascarilla R&G 3 pliegues con elástico, color celeste. Tipo IIR, tela no tejida, talla estándar. Presentación cajón completo para reposición institucional. || Color: Celeste | Tipo: IIR | Presentación: Cajón × cajas | Certificaciones: CE, FDA, BPM, BPA.",
        price: 5,
        image: "/images/descartable/MASCARILLAS/MASCARILLA_RG_CELESTE.png"
      },
      {
        sku: "mascarilla-rg-rosado-caja50",
        attrs: { color: "rosado", presentacion: "caja-50" },
        name: "ROSADO – CAJA × 50 UND",
        description: "Mascarilla R&G 3 pliegues con elástico, color rosado. Tipo IIR, tela no tejida, talla estándar. Fabricación peruana certificada CE y FDA. || Color: Rosado | Tipo: IIR | Presentación: Caja × 50 und | Certificaciones: CE, FDA, BPM, BPA.",
        price: 5,
        image: "/images/descartable/MASCARILLAS/MASCARILLA_RG_ROSADO.png"
      },
      {
        sku: "mascarilla-rg-rosado-cajon",
        attrs: { color: "rosado", presentacion: "cajon" },
        name: "ROSADO – CAJÓN COMPLETO",
        description: "Mascarilla R&G 3 pliegues con elástico, color rosado. Tipo IIR, tela no tejida, talla estándar. Presentación cajón completo para reposición institucional. || Color: Rosado | Tipo: IIR | Presentación: Cajón × cajas | Certificaciones: CE, FDA, BPM, BPA.",
        price: 5,
        image: "/images/descartable/MASCARILLAS/MASCARILLA_RG_ROSADO.png"
      },
      {
        sku: "mascarilla-rg-negro-caja40",
        attrs: { color: "negro", presentacion: "caja-40" },
        name: "NEGRO – CAJA × 40 UND",
        description: "Mascarilla R&G 3 pliegues con elástico, color negro. Tipo IIR, tela no tejida, talla estándar. La variante negra se presenta en caja × 40 unidades. || Color: Negro | Tipo: IIR | Presentación: Caja × 40 und | Certificaciones: CE, FDA, BPM, BPA.",
        price: 5,
        image: "/images/descartable/MASCARILLAS/MASCARILLA_RG_NEGRO.png"
      },
      {
        sku: "mascarilla-rg-negro-cajon",
        attrs: { color: "negro", presentacion: "cajon" },
        name: "NEGRO – CAJÓN COMPLETO",
        description: "Mascarilla R&G 3 pliegues con elástico, color negro. Tipo IIR, tela no tejida, talla estándar. Presentación cajón completo para reposición institucional. || Color: Negro | Tipo: IIR | Presentación: Cajón × cajas | Certificaciones: CE, FDA, BPM, BPA.",
        price: 5,
        image: "/images/descartable/MASCARILLAS/MASCARILLA_RG_NEGRO.png"
      }
    ]
  },

  // ─── 2. MASCARILLA DINOSAURIOS ─────────────────────────────────────────────────
  {
    id: "mascarilla-rg-dinosaurios",
    name: "MASCARILLA R&G DISEÑO DINOSAURIOS – NIÑOS",
    type: "Mascarillas",
    description: "Mascarilla descartable de 3 pliegues con elástico para niños, con diseño de dinosaurios. Fabricada en tela no tejida, talla estándar infantil, color blanco con estampado. Fabricación peruana R&G, certificada CE y FDA. Ideal para uso escolar y pediátrico.",
    image: "/images/descartable/MASCARILLAS/MASCARILLA_DINO.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "caja-50", label: "Caja × 50 und" },
          { id: "cajon", label: "Cajón completo" }
        ]
      }
    ],

    variants: [
      {
        sku: "mascarilla-dino-caja50",
        attrs: { presentacion: "caja-50" },
        name: "CAJA × 50 UND",
        description: "Mascarilla R&G diseño dinosaurios para niños. 3 pliegues con elástico, tela no tejida, talla estándar infantil, color blanco con estampado. || Diseño: Dinosaurios | Talla: Infantil estándar | Presentación: Caja × 50 und | Certificaciones: CE, FDA.",
        price: 5,
        image: "/images/descartable/MASCARILLAS/MASCARILLA_DINO.png"
      },
      {
        sku: "mascarilla-dino-cajon",
        attrs: { presentacion: "cajon" },
        name: "CAJÓN COMPLETO",
        description: "Mascarilla R&G diseño dinosaurios para niños. 3 pliegues con elástico, tela no tejida, talla estándar infantil. Presentación cajón × 48 cajas para distribución institucional. || Diseño: Dinosaurios | Talla: Infantil estándar | Presentación: Cajón × 48 cajas | Certificaciones: CE, FDA.",
        price: 5,
        image: "/images/descartable/MASCARILLAS/MASCARILLA_DINO.png"
      }
    ]
  },

  // ─── 3. TOCA TIPO TIRA ────────────────────────────────────────────────────────
  {
    id: "toca-tipo-tira-rg",
    name: "TOCA TIPO TIRA R&G",
    type: "Indumentaria-descartable",
    description: "Toca tipo tira fabricada en tela no tejida de polipropileno de 10 g/m², talla estándar. Fabricación peruana R&G certificada CE y FDA. Liviana, fresca y cómoda para uso prolongado en entornos hospitalarios, clínicos, alimentarios e industriales. Disponible en cuatro colores. Presentación caja × 100 unidades.",
    image: "/images/descartable/TOCAS/TOCA_TIRA.png",

    attributeOrder: ["color", "presentacion"],

    attributes: [
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "blanco", label: "Blanco" },
          { id: "celeste", label: "Celeste" },
          { id: "verde", label: "Verde" },
          { id: "negro", label: "Negro" }
        ]
      },
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "caja-100", label: "Caja × 100 und" },
          { id: "cajon", label: "Cajón completo" }
        ]
      }
    ],

    attributeRules: {
      "blanco": { presentacion: ["caja-100", "cajon"] },
      "celeste": { presentacion: ["caja-100", "cajon"] },
      "verde": { presentacion: ["caja-100", "cajon"] },
      "negro": { presentacion: ["caja-100", "cajon"] }
    },

    variants: [
      {
        sku: "toca-tira-blanco-caja",
        attrs: { color: "blanco", presentacion: "caja-100" },
        name: "BLANCO – CAJA × 100 UND",
        description: "Toca tipo tira R&G, color blanco. Tela no tejida 10 g/m², talla estándar. Fabricación peruana certificada. || Color: Blanco | Gramaje: 10 g/m² | Presentación: Caja × 100 und.",
        price: 5,
        image: "/images/descartable/TOCAS/TOCA_TIRA_BLANCO.png"
      },
      {
        sku: "toca-tira-blanco-cajon",
        attrs: { color: "blanco", presentacion: "cajon" },
        name: "BLANCO – CAJÓN COMPLETO",
        description: "Toca tipo tira R&G, color blanco. Tela no tejida 10 g/m², talla estándar. Cajón × 24 cajas para reposición institucional. || Color: Blanco | Gramaje: 10 g/m² | Presentación: Cajón × 24 cajas.",
        price: 5,
        image: "/images/descartable/TOCAS/TOCA_TIRA_BLANCO.png"
      },
      {
        sku: "toca-tira-celeste-caja",
        attrs: { color: "celeste", presentacion: "caja-100" },
        name: "CELESTE – CAJA × 100 UND",
        description: "Toca tipo tira R&G, color celeste. Tela no tejida 10 g/m², talla estándar. Fabricación peruana certificada. || Color: Celeste | Gramaje: 10 g/m² | Presentación: Caja × 100 und.",
        price: 5,
        image: "/images/descartable/TOCAS/TOCA_TIRA_CELESTE.png"
      },
      {
        sku: "toca-tira-celeste-cajon",
        attrs: { color: "celeste", presentacion: "cajon" },
        name: "CELESTE – CAJÓN COMPLETO",
        description: "Toca tipo tira R&G, color celeste. Tela no tejida 10 g/m², talla estándar. Cajón × 24 cajas para reposición institucional. || Color: Celeste | Gramaje: 10 g/m² | Presentación: Cajón × 24 cajas.",
        price: 5,
        image: "/images/descartable/TOCAS/TOCA_TIRA_CELESTE.png"
      },
      {
        sku: "toca-tira-verde-caja",
        attrs: { color: "verde", presentacion: "caja-100" },
        name: "VERDE – CAJA × 100 UND",
        description: "Toca tipo tira R&G, color verde. Tela no tejida 10 g/m², talla estándar. Fabricación peruana certificada. || Color: Verde | Gramaje: 10 g/m² | Presentación: Caja × 100 und.",
        price: 5,
        image: "/images/descartable/TOCAS/TOCA_TIRA_VERDE.png"
      },
      {
        sku: "toca-tira-verde-cajon",
        attrs: { color: "verde", presentacion: "cajon" },
        name: "VERDE – CAJÓN COMPLETO",
        description: "Toca tipo tira R&G, color verde. Tela no tejida 10 g/m², talla estándar. Cajón × 24 cajas para reposición institucional. || Color: Verde | Gramaje: 10 g/m² | Presentación: Cajón × 24 cajas.",
        price: 5,
        image: "/images/descartable/TOCAS/TOCA_TIRA_VERDE.png"
      },
      {
        sku: "toca-tira-negro-caja",
        attrs: { color: "negro", presentacion: "caja-100" },
        name: "NEGRO – CAJA × 100 UND",
        description: "Toca tipo tira R&G, color negro. Tela no tejida 10 g/m², talla estándar. Fabricación peruana certificada. || Color: Negro | Gramaje: 10 g/m² | Presentación: Caja × 100 und.",
        price: 5,
        image: "/images/descartable/TOCAS/TOCA_TIRA_NEGRO.png"
      },
      {
        sku: "toca-tira-negro-cajon",
        attrs: { color: "negro", presentacion: "cajon" },
        name: "NEGRO – CAJÓN COMPLETO",
        description: "Toca tipo tira R&G, color negro. Tela no tejida 10 g/m², talla estándar. Cajón × 24 cajas para reposición institucional. || Color: Negro | Gramaje: 10 g/m² | Presentación: Cajón × 24 cajas.",
        price: 5,
        image: "/images/descartable/TOCAS/TOCA_TIRA_NEGRO.png"
      }
    ]
  },

  // ─── 4. MANDILÓN SIMPLE ───────────────────────────────────────────────────────
  {
    id: "mandilon-simple-rg",
    name: "MANDILÓN SIMPLE R&G",
    type: "Indumentaria-descartable",
    description: "Mandilón simple descartable de tela no tejida fabricación peruana R&G. Disponible en color blanco (25 g/m²) y celeste (20 g/m²), talla estándar. Ideal para uso en entornos clínicos, hospitalarios y de visita donde se requiere protección básica desechable. Presentación bolsa × 10 unidades.",
    image: "/images/descartable/MANDIL NOTEX/MANDILON_SIMPLE.png",

    attributeOrder: ["color", "presentacion"],

    attributes: [
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "blanco", label: "Blanco (25 g/m²)" },
          { id: "celeste", label: "Celeste (20 g/m²)" }
        ]
      },
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "bolsa-10", label: "Bolsa × 10 und" },
          { id: "cajon", label: "Cajón completo (× 10 bolsas)" }
        ]
      }
    ],

    attributeRules: {
      "blanco": { presentacion: ["bolsa-10", "cajon"] },
      "celeste": { presentacion: ["bolsa-10", "cajon"] }
    },

    variants: [
      {
        sku: "mandilon-simple-blanco-bolsa",
        attrs: { color: "blanco", presentacion: "bolsa-10" },
        name: "BLANCO – BOLSA × 10 UND",
        description: "Mandilón simple R&G, color blanco. Tela no tejida 25 g/m², talla estándar. || Color: Blanco | Gramaje: 25 g/m² | Presentación: Bolsa × 10 und.",
        price: 5,
        image: "/images/descartable/MANDIL NOTEX/MANDILON_BLANCO.png"
      },
      {
        sku: "mandilon-simple-blanco-cajon",
        attrs: { color: "blanco", presentacion: "cajon" },
        name: "BLANCO – CAJÓN COMPLETO",
        description: "Mandilón simple R&G, color blanco. Tela no tejida 25 g/m², talla estándar. Cajón × 10 bolsas (100 unidades). || Color: Blanco | Gramaje: 25 g/m² | Presentación: Cajón × 100 und.",
        price: 5,
        image: "/images/descartable/MANDIL NOTEX/MANDILON_BLANCO.png"
      },
      {
        sku: "mandilon-simple-celeste-bolsa",
        attrs: { color: "celeste", presentacion: "bolsa-10" },
        name: "CELESTE – BOLSA × 10 UND",
        description: "Mandilón simple R&G, color celeste. Tela no tejida 20 g/m², talla estándar. || Color: Celeste | Gramaje: 20 g/m² | Presentación: Bolsa × 10 und.",
        price: 5,
        image: "/images/descartable/MANDIL NOTEX/MANDILON_CELESTE.png"
      },
      {
        sku: "mandilon-simple-celeste-cajon",
        attrs: { color: "celeste", presentacion: "cajon" },
        name: "CELESTE – CAJÓN COMPLETO",
        description: "Mandilón simple R&G, color celeste. Tela no tejida 20 g/m², talla estándar. Cajón × 10 bolsas (100 unidades). || Color: Celeste | Gramaje: 20 g/m² | Presentación: Cajón × 100 und.",
        price: 5,
        image: "/images/descartable/MANDIL NOTEX/MANDILON_CELESTE.png"
      }
    ]
  },

  // ─── 5. MANDIL ASÉPTICO ───────────────────────────────────────────────────────
  {
    id: "mandil-aseptico-rg",
    name: "MANDIL ASÉPTICO R&G",
    type: "Indumentaria-descartable",
    description: "Mandil aséptico de tela no tejida SMS fabricación peruana R&G. Disponible en gramaje 35 y 40 g/m², colores azul y celeste, tallas M, L y XL. Material SMS de mayor resistencia y barrera que el notex estándar, indicado para procedimientos clínicos, quirúrgicos y laboratorio donde se requiere mayor protección. Presentación bolsa × 1 unidad o cajón × 50 unidades.",
    image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO.png",

    attributeOrder: ["color", "talla", "presentacion"],

    attributes: [
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "azul", label: "Azul (40 g/m²)" },
          { id: "celeste", label: "Celeste (35 g/m²)" }
        ]
      },
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "m", label: "M" },
          { id: "l", label: "L" },
          { id: "xl", label: "XL" }
        ]
      },
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "unidad", label: "Bolsa × 1 und" },
          { id: "cajon", label: "Cajón × 50 und" }
        ]
      }
    ],

    attributeRules: {
      "azul": { talla: ["m", "l", "xl"] },
      "celeste": { talla: ["m", "l", "xl"] },
      "m": { presentacion: ["unidad", "cajon"] },
      "l": { presentacion: ["unidad", "cajon"] },
      "xl": { presentacion: ["unidad", "cajon"] }
    },

    variants: [
      { sku: "mandil-aseptico-azul-m-u", attrs: { color: "azul", talla: "m", presentacion: "unidad" }, name: "AZUL – M – UNIDAD", description: "Mandil aséptico R&G SMS 40 g/m², azul, talla M. || Color: Azul | Gramaje: 40 g/m² | Talla: M | Presentación: Bolsa × 1 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_AZUL.png" },
      { sku: "mandil-aseptico-azul-m-c", attrs: { color: "azul", talla: "m", presentacion: "cajon" }, name: "AZUL – M – CAJÓN × 50", description: "Mandil aséptico R&G SMS 40 g/m², azul, talla M. || Color: Azul | Gramaje: 40 g/m² | Talla: M | Presentación: Cajón × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_AZUL.png" },
      { sku: "mandil-aseptico-azul-l-u", attrs: { color: "azul", talla: "l", presentacion: "unidad" }, name: "AZUL – L – UNIDAD", description: "Mandil aséptico R&G SMS 40 g/m², azul, talla L. || Color: Azul | Gramaje: 40 g/m² | Talla: L | Presentación: Bolsa × 1 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_AZUL.png" },
      { sku: "mandil-aseptico-azul-l-c", attrs: { color: "azul", talla: "l", presentacion: "cajon" }, name: "AZUL – L – CAJÓN × 50", description: "Mandil aséptico R&G SMS 40 g/m², azul, talla L. || Color: Azul | Gramaje: 40 g/m² | Talla: L | Presentación: Cajón × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_AZUL.png" },
      { sku: "mandil-aseptico-azul-xl-u", attrs: { color: "azul", talla: "xl", presentacion: "unidad" }, name: "AZUL – XL – UNIDAD", description: "Mandil aséptico R&G SMS 40 g/m², azul, talla XL. || Color: Azul | Gramaje: 40 g/m² | Talla: XL | Presentación: Bolsa × 1 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_AZUL.png" },
      { sku: "mandil-aseptico-azul-xl-c", attrs: { color: "azul", talla: "xl", presentacion: "cajon" }, name: "AZUL – XL – CAJÓN × 50", description: "Mandil aséptico R&G SMS 40 g/m², azul, talla XL. || Color: Azul | Gramaje: 40 g/m² | Talla: XL | Presentación: Cajón × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_AZUL.png" },
      { sku: "mandil-aseptico-cel-m-u", attrs: { color: "celeste", talla: "m", presentacion: "unidad" }, name: "CELESTE – M – UNIDAD", description: "Mandil aséptico R&G SMS 35 g/m², celeste, talla M. || Color: Celeste | Gramaje: 35 g/m² | Talla: M | Presentación: Bolsa × 1 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_CEL.png" },
      { sku: "mandil-aseptico-cel-m-c", attrs: { color: "celeste", talla: "m", presentacion: "cajon" }, name: "CELESTE – M – CAJÓN × 50", description: "Mandil aséptico R&G SMS 35 g/m², celeste, talla M. || Color: Celeste | Gramaje: 35 g/m² | Talla: M | Presentación: Cajón × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_CEL.png" },
      { sku: "mandil-aseptico-cel-l-u", attrs: { color: "celeste", talla: "l", presentacion: "unidad" }, name: "CELESTE – L – UNIDAD", description: "Mandil aséptico R&G SMS 35 g/m², celeste, talla L. || Color: Celeste | Gramaje: 35 g/m² | Talla: L | Presentación: Bolsa × 1 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_CEL.png" },
      { sku: "mandil-aseptico-cel-l-c", attrs: { color: "celeste", talla: "l", presentacion: "cajon" }, name: "CELESTE – L – CAJÓN × 50", description: "Mandil aséptico R&G SMS 35 g/m², celeste, talla L. || Color: Celeste | Gramaje: 35 g/m² | Talla: L | Presentación: Cajón × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_CEL.png" },
      { sku: "mandil-aseptico-cel-xl-u", attrs: { color: "celeste", talla: "xl", presentacion: "unidad" }, name: "CELESTE – XL – UNIDAD", description: "Mandil aséptico R&G SMS 35 g/m², celeste, talla XL. || Color: Celeste | Gramaje: 35 g/m² | Talla: XL | Presentación: Bolsa × 1 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_CEL.png" },
      { sku: "mandil-aseptico-cel-xl-c", attrs: { color: "celeste", talla: "xl", presentacion: "cajon" }, name: "CELESTE – XL – CAJÓN × 50", description: "Mandil aséptico R&G SMS 35 g/m², celeste, talla XL. || Color: Celeste | Gramaje: 35 g/m² | Talla: XL | Presentación: Cajón × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_ASEPTICO_CEL.png" }
    ]
  },

  // ─── 6. MANDIL PARA PACIENTES MANGA CORTA ─────────────────────────────────────
  {
    id: "mandil-pacientes-manga-corta-rg",
    name: "MANDIL PARA PACIENTES MANGA CORTA R&G",
    type: "Indumentaria-descartable",
    description: "Mandil descartable para pacientes de manga corta fabricado en tela no tejida SMS de fabricación peruana R&G. Disponible en gramaje 35 y 40 g/m², colores azul y celeste, tallas M, L y XL. Diseñado para uso en consultas médicas, procedimientos clínicos y hospitalización donde el paciente requiere vestimenta desechable cómoda e higiénica. Presentación bolsa × 1 unidad o caja × 50 unidades.",
    image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE.png",

    attributeOrder: ["color", "talla", "presentacion"],

    attributes: [
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "azul", label: "Azul (40 g/m²)" },
          { id: "celeste", label: "Celeste (35 g/m²)" }
        ]
      },
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "m", label: "M" },
          { id: "l", label: "L" },
          { id: "xl", label: "XL" }
        ]
      },
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "unidad", label: "Bolsa × 1 und" },
          { id: "caja-50", label: "Caja × 50 und" }
        ]
      }
    ],

    attributeRules: {
      "azul": { talla: ["m", "l", "xl"] },
      "celeste": { talla: ["m", "l", "xl"] },
      "m": { presentacion: ["unidad", "caja-50"] },
      "l": { presentacion: ["unidad", "caja-50"] },
      "xl": { presentacion: ["unidad", "caja-50"] }
    },

    variants: [
      { sku: "mandil-pac-azul-m-u", attrs: { color: "azul", talla: "m", presentacion: "unidad" }, name: "AZUL – M – UNIDAD", description: "Mandil pacientes manga corta R&G SMS 40 g/m², azul, talla M. || Color: Azul | Gramaje: 40 g/m² | Talla: M | Presentación: Unidad.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_AZUL.png" },
      { sku: "mandil-pac-azul-m-c", attrs: { color: "azul", talla: "m", presentacion: "caja-50" }, name: "AZUL – M – CAJA × 50", description: "Mandil pacientes manga corta R&G SMS 40 g/m², azul, talla M. || Color: Azul | Gramaje: 40 g/m² | Talla: M | Presentación: Caja × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_AZUL.png" },
      { sku: "mandil-pac-azul-l-u", attrs: { color: "azul", talla: "l", presentacion: "unidad" }, name: "AZUL – L – UNIDAD", description: "Mandil pacientes manga corta R&G SMS 40 g/m², azul, talla L. || Color: Azul | Gramaje: 40 g/m² | Talla: L | Presentación: Unidad.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_AZUL.png" },
      { sku: "mandil-pac-azul-l-c", attrs: { color: "azul", talla: "l", presentacion: "caja-50" }, name: "AZUL – L – CAJA × 50", description: "Mandil pacientes manga corta R&G SMS 40 g/m², azul, talla L. || Color: Azul | Gramaje: 40 g/m² | Talla: L | Presentación: Caja × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_AZUL.png" },
      { sku: "mandil-pac-azul-xl-u", attrs: { color: "azul", talla: "xl", presentacion: "unidad" }, name: "AZUL – XL – UNIDAD", description: "Mandil pacientes manga corta R&G SMS 40 g/m², azul, talla XL. || Color: Azul | Gramaje: 40 g/m² | Talla: XL | Presentación: Unidad.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_AZUL.png" },
      { sku: "mandil-pac-azul-xl-c", attrs: { color: "azul", talla: "xl", presentacion: "caja-50" }, name: "AZUL – XL – CAJA × 50", description: "Mandil pacientes manga corta R&G SMS 40 g/m², azul, talla XL. || Color: Azul | Gramaje: 40 g/m² | Talla: XL | Presentación: Caja × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_AZUL.png" },
      { sku: "mandil-pac-cel-m-u", attrs: { color: "celeste", talla: "m", presentacion: "unidad" }, name: "CELESTE – M – UNIDAD", description: "Mandil pacientes manga corta R&G SMS 35 g/m², celeste, talla M. || Color: Celeste | Gramaje: 35 g/m² | Talla: M | Presentación: Unidad.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_CEL.png" },
      { sku: "mandil-pac-cel-m-c", attrs: { color: "celeste", talla: "m", presentacion: "caja-50" }, name: "CELESTE – M – CAJA × 50", description: "Mandil pacientes manga corta R&G SMS 35 g/m², celeste, talla M. || Color: Celeste | Gramaje: 35 g/m² | Talla: M | Presentación: Caja × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_CEL.png" },
      { sku: "mandil-pac-cel-l-u", attrs: { color: "celeste", talla: "l", presentacion: "unidad" }, name: "CELESTE – L – UNIDAD", description: "Mandil pacientes manga corta R&G SMS 35 g/m², celeste, talla L. || Color: Celeste | Gramaje: 35 g/m² | Talla: L | Presentación: Unidad.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_CEL.png" },
      { sku: "mandil-pac-cel-l-c", attrs: { color: "celeste", talla: "l", presentacion: "caja-50" }, name: "CELESTE – L – CAJA × 50", description: "Mandil pacientes manga corta R&G SMS 35 g/m², celeste, talla L. || Color: Celeste | Gramaje: 35 g/m² | Talla: L | Presentación: Caja × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_CEL.png" },
      { sku: "mandil-pac-cel-xl-u", attrs: { color: "celeste", talla: "xl", presentacion: "unidad" }, name: "CELESTE – XL – UNIDAD", description: "Mandil pacientes manga corta R&G SMS 35 g/m², celeste, talla XL. || Color: Celeste | Gramaje: 35 g/m² | Talla: XL | Presentación: Unidad.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_CEL.png" },
      { sku: "mandil-pac-cel-xl-c", attrs: { color: "celeste", talla: "xl", presentacion: "caja-50" }, name: "CELESTE – XL – CAJA × 50", description: "Mandil pacientes manga corta R&G SMS 35 g/m², celeste, talla XL. || Color: Celeste | Gramaje: 35 g/m² | Talla: XL | Presentación: Caja × 50 und.", price: 5, image: "/images/descartable/MANDIL NOTEX/MANDIL_PACIENTE_CEL.png" }
    ]
  },

  // ─── 7. MANDILÓN MÉDICO ───────────────────────────────────────────────────────
  {
    id: "mandilon-medico-rg",
    name: "MANDILÓN MÉDICO R&G",
    type: "Indumentaria-descartable",
    description: "Mandilón médico descartable de tela no tejida SMS 35 g/m² fabricación peruana R&G. Color blanco, talla XL. Diseñado para uso del personal médico en consultas, procedimientos y entornos hospitalarios donde se requiere mayor cobertura y protección que un mandil estándar. Certificado CE y FDA. Presentación bolsa × 1 unidad o caja × 50 unidades.",
    image: "/images/descartable/MANDIL NOTEX/MANDILON_MEDICO.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "unidad", label: "Bolsa × 1 und" },
          { id: "caja-50", label: "Caja × 50 und" }
        ]
      }
    ],

    variants: [
      {
        sku: "mandilon-medico-unidad",
        attrs: { presentacion: "unidad" },
        name: "BOLSA × 1 UND",
        description: "Mandilón médico R&G SMS 35 g/m², color blanco, talla XL. Certificado CE y FDA. || Color: Blanco | Gramaje: 35 g/m² | Talla: XL | Presentación: Bolsa × 1 und.",
        price: 5,
        image: "/images/descartable/MANDIL NOTEX/MANDILON_MEDICO.png"
      },
      {
        sku: "mandilon-medico-caja50",
        attrs: { presentacion: "caja-50" },
        name: "CAJA × 50 UND",
        description: "Mandilón médico R&G SMS 35 g/m², color blanco, talla XL. Certificado CE y FDA. Presentación caja × 50 unidades para reposición institucional. || Color: Blanco | Gramaje: 35 g/m² | Talla: XL | Presentación: Caja × 50 und.",
        price: 5,
        image: "/images/descartable/MANDIL NOTEX/MANDILON_MEDICO.png"
      }
    ]
  },

  // ─── 8. CUBREZAPATOS (CONSOLIDADO) ────────────────────────────────────────────
  {
    id: "cubrezapatos-descartable-rg",
    name: "CUBREZAPATOS DESCARTABLE R&G",
    type: "Indumentaria-descartable",
    description: "Cubrezapatos descartables de tela no tejida 25 g/m² fabricación peruana R&G. Disponibles en versión estándar (blanco o celeste) y versión antideslizante (celeste) para mayor seguridad en superficies lisas. Talla estándar adaptable a la mayoría de calzados. Presentación bolsa × 100 unidades, caja dispensadora × 100 unidades o master × 10 bolsas para reposición institucional.",
    image: "/images/descartable/CUBRECALZADO/CUBREZAPATOS_CARD.png",

    attributeOrder: ["tipo", "color", "presentacion"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "estandar", label: "Estándar" },
          { id: "antideslizante", label: "Antideslizante" }
        ]
      },
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "blanco", label: "Blanco" },
          { id: "celeste", label: "Celeste" }
        ]
      },
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "bolsa-100", label: "Bolsa × 100 und" },
          { id: "caja-disp-100", label: "Caja dispensadora × 100 und" },
          { id: "master", label: "Master × 10 bolsas" }
        ]
      }
    ],

    attributeRules: {
      "estandar": { color: ["blanco", "celeste"] },
      "antideslizante": { color: ["celeste"] },
      "blanco": { presentacion: ["bolsa-100", "caja-disp-100", "master"] },
      "celeste": { presentacion: ["bolsa-100", "caja-disp-100", "master"] }
    },

    variants: [
      { sku: "cubrezap-est-blanco-bolsa", attrs: { tipo: "estandar", color: "blanco", presentacion: "bolsa-100" }, name: "ESTÁNDAR BLANCO – BOLSA × 100", description: "Cubrezapatos estándar R&G, blanco, 25 g/m². || Tipo: Estándar | Color: Blanco | Presentación: Bolsa × 100 und.", price: 5, image: "/images/descartable/CUBRECALZADO/EST_BLANCO.png" },
      { sku: "cubrezap-est-blanco-caja", attrs: { tipo: "estandar", color: "blanco", presentacion: "caja-disp-100" }, name: "ESTÁNDAR BLANCO – CAJA DISP. × 100", description: "Cubrezapatos estándar R&G, blanco, 25 g/m². || Tipo: Estándar | Color: Blanco | Presentación: Caja dispensadora × 100 und.", price: 5, image: "/images/descartable/CUBRECALZADO/EST_BLANCO.png" },
      { sku: "cubrezap-est-blanco-mast", attrs: { tipo: "estandar", color: "blanco", presentacion: "master" }, name: "ESTÁNDAR BLANCO – MASTER × 10 BOLSAS", description: "Cubrezapatos estándar R&G, blanco, 25 g/m². || Tipo: Estándar | Color: Blanco | Presentación: Master × 10 bolsas.", price: 5, image: "/images/descartable/CUBRECALZADO/EST_BLANCO.png" },
      { sku: "cubrezap-est-cel-bolsa", attrs: { tipo: "estandar", color: "celeste", presentacion: "bolsa-100" }, name: "ESTÁNDAR CELESTE – BOLSA × 100", description: "Cubrezapatos estándar R&G, celeste, 25 g/m². || Tipo: Estándar | Color: Celeste | Presentación: Bolsa × 100 und.", price: 5, image: "/images/descartable/CUBRECALZADO/EST_CELESTE.png" },
      { sku: "cubrezap-est-cel-caja", attrs: { tipo: "estandar", color: "celeste", presentacion: "caja-disp-100" }, name: "ESTÁNDAR CELESTE – CAJA DISP. × 100", description: "Cubrezapatos estándar R&G, celeste, 25 g/m². || Tipo: Estándar | Color: Celeste | Presentación: Caja dispensadora × 100 und.", price: 5, image: "/images/descartable/CUBRECALZADO/EST_CELESTE.png" },
      { sku: "cubrezap-est-cel-mast", attrs: { tipo: "estandar", color: "celeste", presentacion: "master" }, name: "ESTÁNDAR CELESTE – MASTER × 10 BOLSAS", description: "Cubrezapatos estándar R&G, celeste, 25 g/m². || Tipo: Estándar | Color: Celeste | Presentación: Master × 10 bolsas.", price: 5, image: "/images/descartable/CUBRECALZADO/EST_CELESTE.png" },
      { sku: "cubrezap-anti-cel-bolsa", attrs: { tipo: "antideslizante", color: "celeste", presentacion: "bolsa-100" }, name: "ANTIDESLIZANTE – BOLSA × 100", description: "Cubrezapatos antideslizante R&G, celeste, 25 g/m². Mayor seguridad en superficies lisas. || Tipo: Antideslizante | Color: Celeste | Presentación: Bolsa × 100 und.", price: 5, image: "/images/descartable/CUBRECALZADO/ANTI_CELESTE.png" },
      { sku: "cubrezap-anti-cel-caja", attrs: { tipo: "antideslizante", color: "celeste", presentacion: "caja-disp-100" }, name: "ANTIDESLIZANTE – CAJA DISP. × 100", description: "Cubrezapatos antideslizante R&G, celeste, 25 g/m². Mayor seguridad en superficies lisas. || Tipo: Antideslizante | Color: Celeste | Presentación: Caja dispensadora × 100 und.", price: 5, image: "/images/descartable/CUBRECALZADO/ANTI_CELESTE.png" },
      { sku: "cubrezap-anti-cel-mast", attrs: { tipo: "antideslizante", color: "celeste", presentacion: "master" }, name: "ANTIDESLIZANTE – MASTER × 10 BOLSAS", description: "Cubrezapatos antideslizante R&G, celeste, 25 g/m². Mayor seguridad en superficies lisas. || Tipo: Antideslizante | Color: Celeste | Presentación: Master × 10 bolsas.", price: 5, image: "/images/descartable/CUBRECALZADO/ANTI_CELESTE.png" }
    ]
  },

  // ─── 9. SÁBANA CON ELÁSTICO ───────────────────────────────────────────────────
  {
    id: "sabana-elastico-rg",
    name: "SÁBANA CON ELÁSTICO R&G",
    type: "Ropa-de-cama-descartable",
    description: "Sábana descartable con elástico fabricación peruana R&G para uso en camillas, camas clínicas y mesas de procedimientos. Disponible en dos materiales: tela no tejida SMS 40 g/m² color azul (1.05 × 2.15 m) para uso estándar, y tela no tejida impermeable 55 g/m² color blanco (0.80 × 2.00 m) para procedimientos con riesgo de fluidos. Desechable de un solo uso para garantizar higiene entre pacientes.",
    image: "/images/descartable/SABANAS/SABANA_CARD.png",

    attributeOrder: ["material"],

    attributes: [
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "sms-azul", label: "SMS 40 g/m² – Azul (estándar)" },
          { id: "impermeable-blanco", label: "Impermeable 55 g/m² – Blanco" }
        ]
      }
    ],

    variants: [
      {
        sku: "sabana-elastico-sms-azul",
        attrs: { material: "sms-azul" },
        name: "SMS AZUL – 1.05 × 2.15 M",
        description: "Sábana con elástico R&G de tela no tejida SMS 40 g/m², color azul. Desechable de un solo uso para camillas y camas clínicas. || Material: SMS | Gramaje: 40 g/m² | Color: Azul | Medidas: 1.05 × 2.15 m | Uso: Camillas, camas clínicas.",
        price: 5,
        image: "/images/descartable/SABANAS/SABANA_SMS_AZUL.png"
      },
      {
        sku: "sabana-elastico-imp-blanco",
        attrs: { material: "impermeable-blanco" },
        name: "IMPERMEABLE BLANCO – 0.80 × 2.00 M",
        description: "Sábana con elástico R&G de tela no tejida impermeable 55 g/m², color blanco. Para procedimientos con riesgo de fluidos y líquidos. || Material: Impermeable | Gramaje: 55 g/m² | Color: Blanco | Medidas: 0.80 × 2.00 m | Uso: Procedimientos con fluidos.",
        price: 5,
        image: "/images/descartable/SABANAS/SABANA_IMP_BLANCO.png"
      }
    ]
  },

  // ─── 10. CAMPO MÉDICO ESTÉRIL ─────────────────────────────────────────────────
  {
    id: "campo-medico-esteril-rg",
    name: "CAMPO MÉDICO ESTÉRIL R&G",
    type: "Ropa-de-cama-descartable",
    description: "Campo médico estéril fabricado en tela no tejida SMS fabricación peruana R&G. Disponible en gramaje 35 y 40 g/m², colores azul y celeste. Medidas a pedido según requerimiento institucional. Diseñado para delimitar zonas estériles en procedimientos quirúrgicos, curaciones y procedimientos invasivos. Certificado CE y FDA, fabricado bajo normas BPM/GMP.",
    image: "/images/descartable/CAMPOS/CAMPO_MEDICO_CARD.png",

    attributeOrder: ["gramaje", "color"],

    attributes: [
      {
        id: "gramaje",
        label: "Gramaje",
        type: "single",
        values: [
          { id: "35gm2", label: "35 g/m²" },
          { id: "40gm2", label: "40 g/m²" }
        ]
      },
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "azul", label: "Azul" },
          { id: "celeste", label: "Celeste" }
        ]
      }
    ],

    attributeRules: {
      "35gm2": { color: ["azul", "celeste"] },
      "40gm2": { color: ["azul", "celeste"] }
    },

    variants: [
      {
        sku: "campo-medico-35-azul",
        attrs: { gramaje: "35gm2", color: "azul" },
        name: "35 G/M² – AZUL",
        description: "Campo médico estéril R&G SMS 35 g/m², color azul. Medidas a pedido. Certificado CE y FDA. || Gramaje: 35 g/m² | Color: Azul | Medidas: A pedido | Uso: Cirugía, procedimientos invasivos.",
        price: 5,
        image: "/images/descartable/CAMPOS/CAMPO_35_AZUL.png"
      },
      {
        sku: "campo-medico-35-celeste",
        attrs: { gramaje: "35gm2", color: "celeste" },
        name: "35 G/M² – CELESTE",
        description: "Campo médico estéril R&G SMS 35 g/m², color celeste. Medidas a pedido. Certificado CE y FDA. || Gramaje: 35 g/m² | Color: Celeste | Medidas: A pedido | Uso: Cirugía, procedimientos invasivos.",
        price: 5,
        image: "/images/descartable/CAMPOS/CAMPO_35_CEL.png"
      },
      {
        sku: "campo-medico-40-azul",
        attrs: { gramaje: "40gm2", color: "azul" },
        name: "40 G/M² – AZUL",
        description: "Campo médico estéril R&G SMS 40 g/m², color azul. Mayor gramaje para procedimientos de mayor exigencia. Medidas a pedido. Certificado CE y FDA. || Gramaje: 40 g/m² | Color: Azul | Medidas: A pedido | Uso: Cirugía de mayor exigencia.",
        price: 5,
        image: "/images/descartable/CAMPOS/CAMPO_40_AZUL.png"
      },
      {
        sku: "campo-medico-40-celeste",
        attrs: { gramaje: "40gm2", color: "celeste" },
        name: "40 G/M² – CELESTE",
        description: "Campo médico estéril R&G SMS 40 g/m², color celeste. Mayor gramaje para procedimientos de mayor exigencia. Medidas a pedido. Certificado CE y FDA. || Gramaje: 40 g/m² | Color: Celeste | Medidas: A pedido | Uso: Cirugía de mayor exigencia.",
        price: 5,
        image: "/images/descartable/CAMPOS/CAMPO_40_CEL.png"
      }
    ]
  },

  {
    id: "guantes-de-latex-descartables",
    name: "GUANTES DE LÁTEX DESCARTABLES",
    description: "Guantes descartables de látex natural sin polvo, caja × 100 unidades. Disponibles en tallas S, M y L.",
    image: "/images/descartable/GUANTES/LATEX.png",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "talla-m-caja-100-und", label: "TALLA M – CAJA × 100 UND" },
          { id: "talla-l-caja-100-und", label: "TALLA L – CAJA × 100 UND" }
        ]
      }
    ],

    variants: [
      { sku: "guantes-latex-m", attrs: { talla: "talla-m-caja-100-und" }, name: "GUANTES DE LÁTEX DESCARTABLES – TALLA M – CAJA × 100 UND", description: "Guantes descartables de látex natural sin polvo, talla M. Caja × 100 unidades.", price: 18.36, image: "/images/descartable/GUANTES/LATEX.png" },
      { sku: "guantes-latex-l", attrs: { talla: "talla-l-caja-100-und" }, name: "GUANTES DE LÁTEX DESCARTABLES – TALLA L – CAJA × 100 UND", description: "Guantes descartables de látex natural sin polvo, talla L. Caja × 100 unidades.", price: 18.36, image: "/images/descartable/GUANTES/LATEX.png" }
    ]
  },

  {
    id: "guantes-de-nitrilo-descartables",
    name: "GUANTES DE NITRILO DESCARTABLES",
    description: "Guantes descartables de nitrilo color azul cobalto, sin látex natural, ambidiestros, con puño con reborde y ajuste ergonómico. Ideales para procedimientos clínicos, laboratorio, odontología y manipulación de muestras. || Material: Nitrilo | Color: Azul cobalto | Tallas: XS, S, M, L | Presentación: Caja × 50 pares (100 unidades) | Libre de látex natural",
    price: 16,
    image: "/images/descartable/GUANTES/NITRILO_S.png",
    images: ["/images/descartable/GUANTES/NITRILO_XS.png", "/images/descartable/GUANTES/NITRILO_S.png", "/images/descartable/GUANTES/NITRILO_M.png", "/images/descartable/GUANTES/NITRILO_L.png"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "xs", label: "XS" },
          { id: "s", label: "S" },
          { id: "m", label: "M" },
          { id: "l", label: "L" }
        ]
      }
    ],

    variants: [
      {
        sku: "guantes-nitrilo-xs",
        attrs: { talla: "xs" },
        name: "Talla XS · caja × 50 pares",
        description: "Guantes descartables de nitrilo color azul cobalto, sin látex natural, ambidiestros, con puño con reborde y ajuste ergonómico. Ideales para procedimientos clínicos, laboratorio, odontología y manipulación de muestras. || Material: Nitrilo | Color: Azul cobalto | Talla: XS | Presentación: Caja × 50 pares (100 unidades) | Libre de látex natural",
        price: 16, cashPrice: 15,
        image: "/images/descartable/GUANTES/NITRILO_XS.png"
      },
      {
        sku: "guantes-nitrilo-s",
        attrs: { talla: "s" },
        name: "Talla S · caja × 50 pares",
        description: "Guantes descartables de nitrilo color azul cobalto, sin látex natural, ambidiestros, con puño con reborde y ajuste ergonómico. Ideales para procedimientos clínicos, laboratorio, odontología y manipulación de muestras. || Material: Nitrilo | Color: Azul cobalto | Talla: S | Presentación: Caja × 50 pares (100 unidades) | Libre de látex natural",
        price: 16, cashPrice: 15,
        image: "/images/descartable/GUANTES/NITRILO_S.png"
      },
      {
        sku: "guantes-nitrilo-m",
        attrs: { talla: "m" },
        name: "Talla M · caja × 50 pares",
        description: "Guantes descartables de nitrilo color azul cobalto, sin látex natural, ambidiestros, con puño con reborde y ajuste ergonómico. Ideales para procedimientos clínicos, laboratorio, odontología y manipulación de muestras. || Material: Nitrilo | Color: Azul cobalto | Talla: M | Presentación: Caja × 50 pares (100 unidades) | Libre de látex natural",
        price: 16, cashPrice: 15,
        image: "/images/descartable/GUANTES/NITRILO_M.png"
      },
      {
        sku: "guantes-nitrilo-l",
        attrs: { talla: "l" },
        name: "Talla L · caja × 50 pares",
        description: "Guantes descartables de nitrilo color azul cobalto, sin látex natural, ambidiestros, con puño con reborde y ajuste ergonómico. Ideales para procedimientos clínicos, laboratorio, odontología y manipulación de muestras. || Material: Nitrilo | Color: Azul cobalto | Talla: L | Presentación: Caja × 50 pares (100 unidades) | Libre de látex natural",
        price: 16, cashPrice: 15,
        image: "/images/descartable/GUANTES/NITRILO_L.png"
      }
    ]
  },


  {
    id: "mandil-notex-descartable",
    name: "MANDIL NOTEX DESCARTABLE",
    description: "Mandil descartable de material no tejido (notex), talla estándar. Ideal para uso en procedimientos clínicos, laboratorio y entornos hospitalarios donde se requiere protección desechable.",
    image: "/images/descartable/MANDIL NOTEX/MANDIL.png",

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "unidad", label: "Unidad" },
          { id: "caja-50u", label: "Caja × 50 U" }
        ]
      }
    ],

    variants: [
      {
        sku: "mandil-notex-unidad",
        attrs: { presentacion: "unidad" },
        name: "MANDIL NOTEX DESCARTABLE – UNIDAD",
        description: "Mandil descartable de material no tejido (notex), talla estándar. Presentación: unidad.",
        price: 5,
        image: "/images/descartable/MANDIL NOTEX/MANDIL.png"
      },
      {
        sku: "mandil-notex-caja-50u",
        attrs: { presentacion: "caja-50u" },
        name: "MANDIL NOTEX DESCARTABLE – CAJA × 50 U",
        description: "Mandil descartable de material no tejido (notex), talla estándar. Presentación: caja de 50 unidades.",
        price: 200,
        image: "/images/descartable/MANDIL NOTEX/MANDIL.png"
      }
    ]
  },
  {
    id: "cubre-calzado-descartable",
    name: "CUBRE CALZADO DESCARTABLE 50 PARES",
    description: "Fabricado en tela de polipropileno, diseñado para brindar protección higiénica con un ajuste cómodo gracias a su elástico únicamente en los tobillos, evitando desplazamientos durante el uso. Cuenta con base antideslizante, lo que mejora la seguridad en superficies lisas o de alto tránsito. Sus medidas estándar permiten adaptarse a la mayoría de calzados, convirtiéndolo en una solución práctica para entornos clínicos, industriales o de control sanitario. Se comercializa en empaque de caja y bolsa con 50 pares, facilitando su almacenamiento y distribución en áreas que requieren uso frecuente de protección descartable.",
    price: 15,
    image: "/images/descartable/CUBRECALZADO/CALZADO.png"
  },
  {
    id: "gorro-de-enfermera-descartable",
    name: "GORRO DE ENFERMERA DESCARTABLE 100U",
    description: "De tipo acordeón fabricado en tela no tejida SPP, material fresco, liviano y confortable que brinda protección higiénica en entornos de trabajo. Ideal para uso en hospitales, clínicas, industrias químicas, procesadoras de alimentos y áreas de control de calidad, ayudando a prevenir la contaminación cruzada. || Talla: 21″ • Empaque: caja x 100 unidades • Presentación: cajón x 1000 unidades ||",
    price: 15,
    image: "/images/descartable/TOCAS/GORRO.png"
  },
  {
    id: "mascarilla-descartable-3-capas",
    name: "MASCARILLA DESCARTABLE DE 3 CAPAS",
    description: "Con eficiencia de filtración bacteriana ≥96%. Diseño ergonómico con clip nasal plástico y sujetadores elásticos que brindan ajuste cómodo y seguro. Material atóxico, aséptico, resistente a fluidos y de fácil respiración, ideal para minimizar el riesgo de contagio al cubrir nariz y boca. || **Tamaño:** 17.5 × 9.5 cm · Longitud extendida: 16 cm · BFE ≥96%",
    price: 30,
    image: "/images/descartable/MASCARILLAS/MASCARILLAS.png"
  },

  // ─── PRODUCTOS VENDIDOS (cargados desde backoffice) ───
  {
    id: "agujas-vacutainer-x100",
    name: "AGUJAS VACUTAINER × 100 UND",
    description: "Agujas para extracción de sangre al vacío, compatibles con holder estándar, para toma de muestras múltiples. Caja de 100 unidades.",
    image: "/images/logo.png",
    price: 39.78
  },

  {
    id: "tubo-tapa-amarilla-gel-5ml-x100",
    name: "TUBOS AL VACÍO TAPA AMARILLA CON GEL 5 ML × 100",
    description: "Tubos al vacío con activador de coágulo y gel separador, tapa amarilla, 13 × 100 mm y 5 ml, para obtención de suero en análisis de bioquímica y serología. Paquete de 100 unidades.",
    image: "/images/logo.png",
    price: 68.87
  },

  {
    id: "algodon-hidrofilo",
    name: "ALGODÓN HIDRÓFILO",
    description: "Algodón hidrófilo de alta absorción para uso médico, curaciones, limpieza y aplicación de antisépticos.",
    image: "/images/logo.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "50-g", label: "50 G" },
          { id: "500-g", label: "500 G" }
        ]
      }
    ],

    variants: [
      { sku: "algodon-50g", attrs: { presentacion: "50-g" }, name: "ALGODÓN HIDRÓFILO – 50 G", description: "Algodón hidrófilo de alta absorción para uso médico, curaciones, limpieza y aplicación de antisépticos.", price: 3.83, image: "/images/logo.png" },
      { sku: "algodon-500g", attrs: { presentacion: "500-g" }, name: "ALGODÓN HIDRÓFILO – 500 G", description: "Algodón hidrófilo de alta absorción para uso médico, curaciones, limpieza y aplicación de antisépticos.", price: 23.72, image: "/images/logo.png" }
    ]
  },

  {
    id: "gasa-esteril-10x10",
    name: "GASA ESTÉRIL 10 × 10 CM",
    description: "Gasa estéril de 10 × 10 cm para curaciones, limpieza y cobertura de heridas.",
    image: "/images/logo.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "aposito-de-gasa-esteril-10-10", label: "APÓSITO DE GASA ESTÉRIL 10 × 10" },
          { id: "paquete-20-und", label: "PAQUETE × 20 UND" }
        ]
      }
    ],

    variants: [
      { sku: "aposito-gasa-esteril-10x10", attrs: { presentacion: "aposito-de-gasa-esteril-10-10" }, name: "GASA ESTÉRIL 10 × 10 CM – APÓSITO DE GASA ESTÉRIL 10 × 10", description: "Gasa estéril de 10 × 10 cm para curaciones, limpieza y cobertura de heridas.", price: 22.95, image: "/images/logo.png" },
      { sku: "gasa-esteril-10x10-x20", attrs: { presentacion: "paquete-20-und" }, name: "GASA ESTÉRIL 10 × 10 CM – PAQUETE × 20 UND", description: "Gasa estéril de 10 × 10 cm para curaciones, limpieza y cobertura de heridas.", price: 21.42, image: "/images/logo.png" }
    ]
  },

  {
    id: "bajalenguas-madera-x100",
    name: "BAJALENGUAS DE MADERA × 100 UND",
    description: "Bajalenguas de madera para exploración de la cavidad oral y faringe. Caja de 100 unidades. || Marca: Alkhofar.",
    image: "/images/logo.png",
    price: 19.89
  },

  {
    id: "bolsa-vomito-descartable",
    name: "BOLSA PARA VÓMITO DESCARTABLE",
    description: "Bolsa descartable para emesis con cierre, para uso en ambulancias, hospitales y traslados.",
    image: "/images/logo.png",
    price: 2.13
  },

  {
    id: "caja-bioseguridad-7l",
    name: "CAJA DE BIOSEGURIDAD 7 LT (ROJA)",
    description: "Contenedor rígido de bioseguridad de 7 litros para el desecho seguro de punzocortantes, color rojo.",
    image: "/images/logo.png",
    price: 7.65
  },

  {
    id: "curitas-x100",
    name: "CURITAS × 100 UND",
    description: "Banditas adhesivas para la protección de heridas pequeñas. Caja de 100 unidades.",
    image: "/images/logo.png",
    price: 5.36
  },

  {
    id: "esparadrapo-3m-1pulg",
    name: "ESPARADRAPO 3M 1\" × 10 YD",
    description: "Esparadrapo 3M de 1 pulgada × 10 yardas para fijación de apósitos, gasas y dispositivos médicos. || Marca: 3M.",
    image: "/images/logo.png",
    price: 6.12
  },

  {
    id: "especulo-vaginal-descartable",
    name: "ESPÉCULO VAGINAL DESCARTABLE",
    description: "Espéculo vaginal descartable de plástico para exploración ginecológica y toma de muestras.",
    image: "/images/logo.png",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "mediano-m", label: "MEDIANO (M)" },
          { id: "virginal-s", label: "VIRGINAL (S)" }
        ]
      }
    ],

    variants: [
      { sku: "especulo-vaginal-m", attrs: { talla: "mediano-m" }, name: "ESPÉCULO VAGINAL DESCARTABLE – MEDIANO (M)", description: "Espéculo vaginal descartable de plástico para exploración ginecológica y toma de muestras.", price: 2.3, image: "/images/logo.png" },
      { sku: "especulo-vaginal-s-virginal", attrs: { talla: "virginal-s" }, name: "ESPÉCULO VAGINAL DESCARTABLE – VIRGINAL (S)", description: "Espéculo vaginal descartable de plástico para exploración ginecológica y toma de muestras.", price: 1.5, image: "/images/logo.png" }
    ]
  },

  {
    id: "gorro-desechable-x100",
    name: "GORRO DESECHABLE × 100 UND",
    type: "Indumentaria-descartable",
    description: "Gorro descartable tipo oruga para uso clínico, laboratorio y áreas de manipulación. Paquete de 100 unidades.",
    image: "/images/logo.png",
    price: 12.24
  },

  {
    id: "guantes-esteriles-t7",
    name: "GUANTES ESTÉRILES TALLA 7 (PAR)",
    type: "Indumentaria-descartable",
    description: "Guantes quirúrgicos estériles de látex, talla 7, para procedimientos que requieren técnica aséptica. Precio por par.",
    image: "/images/logo.png",
    price: 1.1
  },

  {
    id: "hisopos-de-madera",
    name: "HISOPOS DE MADERA",
    description: "Hisopos con palillo de madera y punta de algodón para toma de muestras, limpieza y aplicación de soluciones.",
    image: "/images/logo.png",
    price: 6.12
  },

  {
    id: "torunda-algodon-trenzado-x20",
    name: "TORUNDA DE ALGODÓN TRENZADO × 20 UND",
    description: "Torundas de algodón trenzado para limpieza y antisepsia. Paquete de 20 unidades.",
    image: "/images/logo.png",
    price: 48.96
  },

  {
    id: "vendas-elasticas",
    name: "VENDAS ELÁSTICAS",
    description: "Vendas elásticas de 5 yardas para soporte, compresión e inmovilización de articulaciones y fijación de apósitos.",
    image: "/images/logo.png",

    attributeOrder: ["ancho"],

    attributes: [
      {
        id: "ancho",
        label: "Ancho",
        type: "single",
        values: [
          { id: "2-5-yd", label: "2\" × 5 YD" },
          { id: "5-5-yd", label: "5\" × 5 YD" }
        ]
      }
    ],

    variants: [
      { sku: "venda-elastica-2x5", attrs: { ancho: "2-5-yd" }, name: "VENDAS ELÁSTICAS – 2\" × 5 YD", description: "Vendas elásticas de 5 yardas para soporte, compresión e inmovilización de articulaciones y fijación de apósitos.", price: 1.53, image: "/images/logo.png" },
      { sku: "venda-elastica-5x5", attrs: { ancho: "5-5-yd" }, name: "VENDAS ELÁSTICAS – 5\" × 5 YD", description: "Vendas elásticas de 5 yardas para soporte, compresión e inmovilización de articulaciones y fijación de apósitos.", price: 2.6, image: "/images/logo.png" }
    ]
  },

];
