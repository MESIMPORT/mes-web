// src/data/products/instrumentalYEquiposQuirurgicos.js

export const instrumentalYEquiposQuirurgicosProducts = [

  {
    id: "lavatorio-de-acero-quirgico-36-cm",
    name: "LAVATORIO DE ACERO QUIRGICO 36 cm",
    description: "xx",
    price: 96,
    image: "/images/instrumental/INOX/LAVATORIO.png"
  },
  {
    id: "porta-lavatorio-rodable",
    name: "PORTA LAVATORIO RODABLE",
    type: "Mobiliario",
    description: "Porta lavatorio rodable hospitalario con lavatorio de acero inoxidable. Disponible en base metálica y base inoxidable AISI 304-2B, en modelos simple, doble y doble con gabinetes. Cuatro garruchas hospitalarias giratorias 360° de 2\".",
    image: "/images/instrumental/INOX/LVT_MET_1.png",

    attributeOrder: ["material", "modelo"],

    attributes: [
      {
        id: "material",
        label: "Material de Base",
        type: "single",
        values: [
          { id: "metalico", label: "Metálico" },
          { id: "inoxidable", label: "Inoxidable" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        dependsOn: {
          material: {
            metalico: ["simple", "doble", "doble-gabinete"],
            inoxidable: ["simple", "doble", "doble-gabinete"]
          }
        },
        values: [
          { id: "simple", label: "Simple (1 Lavatorio)" },
          { id: "doble", label: "Doble (2 Lavatorios)" },
          { id: "doble-gabinete", label: "Doble con Gabinetes" }
        ]
      }
    ],

    variants: [
      // ── METÁLICO ──
      {
        sku: "porta-lvt-met-simple",
        attrs: { material: "metalico", modelo: "simple" },
        name: "Simple (1 Lavatorio)",
        description: "Base de tubo de acero electrosoldado con aro superior de 310 mm para sostener lavatorio inoxidable de 350 mm de diámetro. Cuatro garruchas hospitalarias giratorias 360° de 2\". Acabado en polvo electrostático poliéster-epoxy blanco o marfil curado en horno. Dimensiones: 410 × 380 × 880 mm.",
        price: 210,
        image: "/images/instrumental/INOX/LVT_MET_1.png"
      },
      {
        sku: "porta-lvt-met-doble",
        attrs: { material: "metalico", modelo: "doble" },
        name: "Doble (2 Lavatorios)",
        description: "Base de tubo de acero electrosoldado con dos aros superiores de 310 mm para sostener dos lavatorios inoxidables de 350 mm de diámetro. Cuatro garruchas hospitalarias giratorias 360° de 2\". Acabado en polvo electrostático poliéster-epoxy blanco o marfil curado en horno. Dimensiones: 800 × 380 × 880 mm.",
        price: 330,
        image: "/images/instrumental/INOX/LVT_MET_2.png"
      },
      {
        sku: "porta-lvt-met-doble-gabinete",
        attrs: { material: "metalico", modelo: "doble-gabinete" },
        name: "Doble con Gabinetes",
        description: "Base de tubo de acero electrosoldado con dos aros superiores de 310 mm. Gabinete inferior con dos puertas batientes en plancha de acero inoxidable de 0.8 mm con tirador incorporado. Cuatro garruchas hospitalarias giratorias 360° de 2\". Acabado en polvo electrostático poliéster-epoxy blanco o marfil curado en horno. Dimensiones: 800 × 380 × 880 mm.",
        price: 642,
        image: "/images/instrumental/INOX/LVT_MET_GAB.png"
      },
      // ── INOXIDABLE ──
      {
        sku: "porta-lvt-inox-simple",
        attrs: { material: "inoxidable", modelo: "simple" },
        name: "Simple (1 Lavatorio)",
        description: "Base de tubo de acero inoxidable AISI 304-2B con aro superior de 310 mm para sostener lavatorio inoxidable de 350 mm de diámetro. Cuatro garruchas metálicas hospitalarias giratorias 360° de 2\". Dimensiones: 410 × 380 × 880 mm.",
        price: 357.6,
        image: "/images/instrumental/INOX/LVT_INOX_1.png"
      },
      {
        sku: "porta-lvt-inox-doble",
        attrs: { material: "inoxidable", modelo: "doble" },
        name: "Doble (2 Lavatorios)",
        description: "Base de tubo de acero inoxidable AISI 304-2B con dos aros superiores de 310 mm para sostener dos lavatorios inoxidables de 350 mm de diámetro. Cuatro garruchas metálicas hospitalarias giratorias 360° de 2\". Acabado en polvo electrostático poliéster-epoxy blanco o marfil. Dimensiones: 800 × 360 × 850 mm.",
        price: 672,
        image: "/images/instrumental/INOX/LVT_INOX_2.png"
      },
      {
        sku: "porta-lvt-inox-doble-gabinete",
        attrs: { material: "inoxidable", modelo: "doble-gabinete" },
        name: "Doble con Gabinetes",
        description: "Base de tubo de acero inoxidable con dos aros superiores de 310 mm para dos lavatorios. Gabinete inferior con dos puertas batientes en plancha de acero inoxidable de 0.8 mm con tirador incorporado. Cuatro garruchas hospitalarias giratorias 360° de 2\", dos con freno. Dimensiones: 800 × 380 × 850 mm.",
        price: 1296,
        image: "/images/instrumental/INOX/LVT_INOX_GAB.png"
      }
    ]
  },
  {
    id: "tambor-acero-inoxidable",
    name: "TAMBOR DE ACERO INOXIDABLE",
    type: "Recipientes-y-contenedores",
    description: "Tambor de acero inoxidable para esterilización y almacenamiento de material e instrumental médico. Disponible en acero inoxidable calidad 430 y acero quirúrgico calidad 304-2B. Superficie satinada o brillante. Tolerancia en dimensión del instrumental +/- 5%.",
    image: "/images/instrumental/INOX/TAMBOR.png",

    attributeOrder: ["tipo", "tamano", "medida"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "inoxidable", label: "Acero Inoxidable" },
          { id: "quirurgico", label: "Acero Quirúrgico" }
        ]
      },
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        dependsOn: {
          tipo: {
            inoxidable: ["pequeno", "mediano", "grande"],
            quirurgico: ["pequeno", "mediano", "grande"]
          }
        },
        values: [
          { id: "pequeno", label: "Pequeño" },
          { id: "mediano", label: "Mediano" },
          { id: "grande", label: "Grande" }
        ]
      },
      {
        id: "medida",
        label: "Medida (diámetro × altura)",
        type: "single",
        dependsOn: {
          tamano: {
            // Acero Inoxidable
            pequeno: ["7x7", "8x8", "9x9", "10x10", "12x12"],
            mediano: ["15x10", "15x15", "15x16-5", "18x18", "20x10"],
            grande: ["20x12", "20x20", "24x24", "30x30"],
            // Acero Quirúrgico (mismos ids de tamano, las medidas se filtran por variante)
          }
        },
        values: [
          // Inoxidable – Pequeño
          { id: "7x7", label: "7 × 7 cm" },
          { id: "8x8", label: "8 × 8 cm" },
          { id: "9x9", label: "9 × 9 cm" },
          { id: "10x10", label: "10 × 10 cm" },
          { id: "12x12", label: "12 × 12 cm" },
          // Inoxidable – Mediano
          { id: "15x10", label: "15 × 10 cm" },
          { id: "15x15", label: "15 × 15 cm" },
          { id: "15x16-5", label: "15 × 16.5 cm" },
          { id: "18x18", label: "18 × 18 cm" },
          { id: "20x10", label: "20 × 10 cm" },
          // Inoxidable – Grande
          { id: "20x12", label: "20 × 12 cm" },
          { id: "20x20", label: "20 × 20 cm" },
          { id: "24x24", label: "24 × 24 cm" },
          { id: "30x30", label: "30 × 30 cm" },
          // Quirúrgico – Pequeño
          { id: "q-9x9", label: "9 × 9 cm" },
          { id: "q-10x10", label: "10 × 10 cm" },
          { id: "q-10x12-5", label: "10 × 12.5 cm" },
          { id: "q-10x15", label: "10 × 15 cm" },
          { id: "q-12x10", label: "12 × 10 cm" },
          { id: "q-12x12", label: "12 × 12 cm" },
          // Quirúrgico – Mediano
          { id: "q-15x15", label: "15 × 15 cm" },
          { id: "q-15x16-5", label: "15 × 16.5 cm" },
          { id: "q-17x17", label: "17 × 17 cm" },
          { id: "q-18x18", label: "18 × 18 cm" },
          { id: "q-19x16", label: "19 × 16 cm" },
          { id: "q-20x10", label: "20 × 10 cm" },
          // Quirúrgico – Grande
          { id: "q-20x14", label: "20 × 14 cm" },
          { id: "q-20x15", label: "20 × 15 cm" },
          { id: "q-20x16", label: "20 × 16 cm" },
          { id: "q-20x20", label: "20 × 20 cm" },
          { id: "q-20x34", label: "20 × 34 cm" },
          { id: "q-21x28", label: "21 × 28 cm" },
          { id: "q-24x24", label: "24 × 24 cm" },
          { id: "q-30x30", label: "30 × 30 cm" }
        ]
      }
    ],

    variants: [
      // ══════════════════════════════
      // ACERO INOXIDABLE – PEQUEÑO
      // ══════════════════════════════
      {
        sku: "tambor-inox-7x7",
        attrs: { tipo: "inoxidable", tamano: "pequeno", medida: "7x7" },
        name: "7 × 7 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 13,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      {
        sku: "tambor-inox-8x8",
        attrs: { tipo: "inoxidable", tamano: "pequeno", medida: "8x8" },
        name: "8 × 8 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 14,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      {
        sku: "tambor-inox-9x9",
        attrs: { tipo: "inoxidable", tamano: "pequeno", medida: "9x9" },
        name: "9 × 9 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 15,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      {
        sku: "tambor-inox-10x10",
        attrs: { tipo: "inoxidable", tamano: "pequeno", medida: "10x10" },
        name: "10 × 10 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 17,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      {
        sku: "tambor-inox-12x12",
        attrs: { tipo: "inoxidable", tamano: "pequeno", medida: "12x12" },
        name: "12 × 12 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 22,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      // ══════════════════════════════
      // ACERO INOXIDABLE – MEDIANO
      // ══════════════════════════════
      {
        sku: "tambor-inox-15x10",
        attrs: { tipo: "inoxidable", tamano: "mediano", medida: "15x10" },
        name: "15 × 10 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 28,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      {
        sku: "tambor-inox-15x15",
        attrs: { tipo: "inoxidable", tamano: "mediano", medida: "15x15" },
        name: "15 × 15 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 32,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      {
        sku: "tambor-inox-15x16-5",
        attrs: { tipo: "inoxidable", tamano: "mediano", medida: "15x16-5" },
        name: "15 × 16.5 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 35,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      {
        sku: "tambor-inox-18x18",
        attrs: { tipo: "inoxidable", tamano: "mediano", medida: "18x18" },
        name: "18 × 18 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 46,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      {
        sku: "tambor-inox-20x10",
        attrs: { tipo: "inoxidable", tamano: "mediano", medida: "20x10" },
        name: "20 × 10 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 44,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      // ══════════════════════════════
      // ACERO INOXIDABLE – GRANDE
      // ══════════════════════════════
      {
        sku: "tambor-inox-20x12",
        attrs: { tipo: "inoxidable", tamano: "grande", medida: "20x12" },
        name: "20 × 12 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 49,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      {
        sku: "tambor-inox-20x20",
        attrs: { tipo: "inoxidable", tamano: "grande", medida: "20x20" },
        name: "20 × 20 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 56,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      {
        sku: "tambor-inox-24x24",
        attrs: { tipo: "inoxidable", tamano: "grande", medida: "24x24" },
        name: "24 × 24 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 79,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      {
        sku: "tambor-inox-30x30",
        attrs: { tipo: "inoxidable", tamano: "grande", medida: "30x30" },
        name: "30 × 30 cm",
        description: "Tambor de acero inoxidable calidad 430, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 185,
        image: "/images/instrumental/INOX/TAMBOR.png"
      },
      // ══════════════════════════════
      // ACERO QUIRÚRGICO – PEQUEÑO
      // ══════════════════════════════
      {
        sku: "tambor-q-9x9",
        attrs: { tipo: "quirurgico", tamano: "pequeno", medida: "q-9x9" },
        name: "9 × 9 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 38,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-10x10",
        attrs: { tipo: "quirurgico", tamano: "pequeno", medida: "q-10x10" },
        name: "10 × 10 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 49,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-10x12-5",
        attrs: { tipo: "quirurgico", tamano: "pequeno", medida: "q-10x12-5" },
        name: "10 × 12.5 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 53,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-10x15",
        attrs: { tipo: "quirurgico", tamano: "pequeno", medida: "q-10x15" },
        name: "10 × 15 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 70,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-12x10",
        attrs: { tipo: "quirurgico", tamano: "pequeno", medida: "q-12x10" },
        name: "12 × 10 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 52,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-12x12",
        attrs: { tipo: "quirurgico", tamano: "pequeno", medida: "q-12x12" },
        name: "12 × 12 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 63,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      // ══════════════════════════════
      // ACERO QUIRÚRGICO – MEDIANO
      // ══════════════════════════════
      {
        sku: "tambor-q-15x15",
        attrs: { tipo: "quirurgico", tamano: "mediano", medida: "q-15x15" },
        name: "15 × 15 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 81,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-15x16-5",
        attrs: { tipo: "quirurgico", tamano: "mediano", medida: "q-15x16-5" },
        name: "15 × 16.5 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 85,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-17x17",
        attrs: { tipo: "quirurgico", tamano: "mediano", medida: "q-17x17" },
        name: "17 × 17 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 110,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-18x18",
        attrs: { tipo: "quirurgico", tamano: "mediano", medida: "q-18x18" },
        name: "18 × 18 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 120,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-19x16",
        attrs: { tipo: "quirurgico", tamano: "mediano", medida: "q-19x16" },
        name: "19 × 16 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 110,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-20x10",
        attrs: { tipo: "quirurgico", tamano: "mediano", medida: "q-20x10" },
        name: "20 × 10 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 80,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      // ══════════════════════════════
      // ACERO QUIRÚRGICO – GRANDE
      // ══════════════════════════════
      {
        sku: "tambor-q-20x14",
        attrs: { tipo: "quirurgico", tamano: "grande", medida: "q-20x14" },
        name: "20 × 14 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 112,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-20x15",
        attrs: { tipo: "quirurgico", tamano: "grande", medida: "q-20x15" },
        name: "20 × 15 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 120,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-20x16",
        attrs: { tipo: "quirurgico", tamano: "grande", medida: "q-20x16" },
        name: "20 × 16 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 130,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-20x20",
        attrs: { tipo: "quirurgico", tamano: "grande", medida: "q-20x20" },
        name: "20 × 20 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 140,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-20x34",
        attrs: { tipo: "quirurgico", tamano: "grande", medida: "q-20x34" },
        name: "20 × 34 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 168,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-21x28",
        attrs: { tipo: "quirurgico", tamano: "grande", medida: "q-21x28" },
        name: "21 × 28 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 170,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-24x24",
        attrs: { tipo: "quirurgico", tamano: "grande", medida: "q-24x24" },
        name: "24 × 24 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 224,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      },
      {
        sku: "tambor-q-30x30",
        attrs: { tipo: "quirurgico", tamano: "grande", medida: "q-30x30" },
        name: "30 × 30 cm",
        description: "Tambor de acero quirúrgico calidad 304-2B, superficie satinada o brillante. Apto para esterilización y almacenamiento de material médico.",
        price: 364,
        image: "/images/instrumental/INOX/TAMBOR_Q.png"
      }
    ]
  },

  {
    id: "set-cirugia-menor",
    name: "SET DE CIRUGÍA MENOR",
    type: "Instrumental",
    description: "Set de instrumental quirúrgico para cirugía menor. Disponible en distintas configuraciones de piezas y marcas.",
    image: "/images/instrumental/INSTRUMENTAL/9PZA.png",

    attributes: [
      {
        id: "variante",
        label: "Variante",
        type: "single",
        values: [
          { id: "nopa-9pzas", label: "NOPA – 9 Piezas" },
          { id: "nopa-10pzas", label: "NOPA – 10 Piezas" },
          { id: "nopa-12pzas", label: "NOPA – 12 Piezas" },
          { id: "nopa-cir-mano-8pzas", label: "NOPA – Cirugía de Mano 8 Piezas" },
          { id: "kls-martin-13pzas", label: "KLS Martin – 13 Piezas" }
        ]
      }
    ],

    variants: [
      {
        sku: "set-cirugia-menor-nopa-9pzas",
        attrs: { variante: "nopa-9pzas" },
        name: "NOPA – 9 Piezas",
        description: "Set de cirugía menor NOPA de 9 piezas. Incluye: 1 Tijera Standard aguda/roma curva AC 021/14, 1 Estilete abotonado 2mm 14.5cm, 1 Sonda acanalada AL 015/14, 1 Tijera Standard aguda/roma recta AC 020/14, 1 Porta agujas Mayo/Hegar con ranura AE 100/14, 1 Pinza de disección Standard Dressing recta AB 050/16, 1 Mango de bisturí AD 010/03, 1 Pinza de disección Standard Tissue recta AB 060/16, 1 Mango de bisturí AD 010/04.",
        price: 300,
        image: "/images/instrumental/INSTRUMENTAL/9PZA.png"
      },
      {
        sku: "set-cirugia-menor-nopa-10pzas",
        attrs: { variante: "nopa-10pzas" },
        name: "NOPA – 10 Piezas",
        description: "Set de cirugía menor NOPA de 10 piezas. Incluye: 1 Pinza Mosquito Curva 12cm AA 151/12, 1 Pinza Disección c/d 14cm AB 060/14, 1 Pinza Disección Standard s/d 16cm AB 050/16, 1 Porta Aguja Mayo-Hegar 14cm AE 100/14, 1 Mango para Bisturí No.3 AD 010/03, 1 Pinza Ochsner Kocher Recta c/d 1:2 18cm AA 210/18, 1 Pinza Mosquito Recta 12cm AA 150/12, 1 Pinza Adson sin Diente 12cm AB 100/12, 1 Tijera Mayo Recta 14cm AC 070/14, 1 Sonda Acanalada Recta 14.5cm.",
        price: 300,
        image: "/images/instrumental/INSTRUMENTAL/9PZA.png"
      },
      {
        sku: "set-cirugia-menor-nopa-12pzas",
        attrs: { variante: "nopa-12pzas" },
        name: "NOPA – 12 Piezas",
        description: "Set de cirugía básico mayor NOPA de 12 piezas. Incluye: 1 Backhaus Pinza de Campo 13cm AA 751/13, 1 Pinza Allis 15cm KD 055/15, 1 Pinza Mosquito Curva 12cm AA 151/12, 1 Tijera Mayo Recta 17cm AC 070/17, 1 Tijera Mayo Curva 17cm AC 071/17, 1 Tijera Metzenbaum Nelson Curva 18cm AC 110/18, 1 Pinza Disección c/d 14cm AB 060/14, 1 Pinza Disección Standard s/d 16cm AB 050/16, 1 Pinza Disección Standard s/d 20cm AB 050/20, 1 Pinza Disección Standard c/d 16cm AB 060/16, 1 Porta Aguja Mayo-Hegar 14cm AE 100/14, 1 Mango para Bisturí No.4 AD 010/04.",
        price: 300,
        image: "/images/instrumental/INSTRUMENTAL/9PZA.png"
      },
      {
        sku: "set-cirugia-menor-nopa-cir-mano-8pzas",
        attrs: { variante: "nopa-cir-mano-8pzas" },
        name: "NOPA – Cirugía de Mano 8 Piezas",
        description: "Set de instrumental NOPA para cirugía de mano de 8 piezas. Incluye: 1 Pinza Adson sin Diente 12cm AB 100/12, 1 Tijera Metzenbaum Curva 14cm AC 101/14, 1 Backhaus Pinza de Campo 13cm AA 751/13, 1 Pinza Mosquito Curva 12cm AA 151/12, 1 Gancho 1 Garfio Agudo Joseph 16cm AK 070/16, 1 Gancho 2 Garfios Agudo Joseph 16cm AK 072/02, 1 Separador Senn Miller 16cm Agudo AK 122/16, 1 Tijera Mayo Recta 14cm AC 070/14, 1 Mango para Bisturí No.3 AD 010/03.",
        price: 300,
        image: "/images/instrumental/INSTRUMENTAL/9PZA.png"
      },
      {
        sku: "set-cirugia-menor-kls-martin-13pzas",
        attrs: { variante: "kls-martin-13pzas" },
        name: "KLS Martin – 13 Piezas (Modelo Alemán)",
        description: "Set de cirugía menor KLS de 13 piezas. Incluye: 1 Escalpelo n°4 (Porta Bisturí), 1 Sonda acanalada, 1 Porta agujas Mayo Hegar 14cm, 1 Pinza Thumb anatómica 14cm, 1 Pinza diente de ratón 14cm, 1 Tijera Mayo curva 13cm, 1 Tijera Mayo recta 13cm, 1 Tijera Spencer saca puntos 14cm, 1 Pinza Mosquito recta 12.5cm, 1 Pinza Mosquito curva 12.5cm, 1 Pinza Crillé recta 14cm, 1 Pinza Crillé curva 14cm, 1 Caja de acero 17×7.5×3cm.",
        price: 300,
        image: "/images/instrumental/INSTRUMENTAL/13PZA.png"
      }
    ]
  },
  {
    id: "balde-con-porta-balde-ac-quirurgico",
    name: "BALDE CON PORTA BALDE AC QUIRÚRGICO 0.8 mm",
    type: "Recipientes-y-contenedores",
    description: "Balde con porta balde de acero quirúrgico 0.8 mm. Disponible en 3 capacidades: 12, 15 y 20 litros.",
    image: "/images/instrumental/INOX/CUBETA.png",

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "12lt", label: "12 LT" },
          { id: "15lt", label: "15 LT" },
          { id: "20lt", label: "20 LT" }
        ]
      }
    ],

    variants: [
      {
        sku: "balde-porta-balde-12lt",
        attrs: { capacidad: "12lt" },
        name: "12 LT",
        description: "Balde con porta balde de acero quirúrgico 0.8 mm – 12 litros.",
        price: 312,
        image: "/images/instrumental/INOX/CUBETA.png"
      },
      {
        sku: "balde-porta-balde-15lt",
        attrs: { capacidad: "15lt" },
        name: "15 LT",
        description: "Balde con porta balde de acero quirúrgico 0.8 mm – 15 litros.",
        price: 336,
        image: "/images/instrumental/INOX/CUBETA.png"
      },
      {
        sku: "balde-porta-balde-20lt",
        attrs: { capacidad: "20lt" },
        name: "20 LT",
        description: "Balde con porta balde de acero quirúrgico 0.8 mm – 20 litros.",
        price: 372,
        image: "/images/instrumental/INOX/CUBETA.png"
      }
    ]
  },
  {
    id: "bandeja-metalica-acanalada-ac-inox",
    name: "BANDEJA METÁLICA ACANALADA DE AC INOX",
    type: "Recipientes-y-contenedores",
    description: "Bandeja metálica acanalada de acero inoxidable. Disponible en distintas medidas.",
    image: "/images/instrumental/INOX/BANDEJA.png",

    attributes: [
      {
        id: "medida",
        label: "Medida",
        type: "single",
        values: [
          { id: "21x11x1", label: "21 x 11 x 1" },
          { id: "24x16x3-5", label: "24 x 16 x 3.5" }
        ]
      }
    ],

    variants: [
      {
        sku: "bandeja-inox-21x11x1",
        attrs: { medida: "21x11x1" },
        name: "21 × 11 × 1 cm",
        description: "Bandeja metálica acanalada de acero inoxidable – 21 × 11 × 1 cm.",
        price: 18,
        image: "/images/instrumental/INOX/BANDEJA.png"
      },
      {
        sku: "bandeja-inox-24x16x3-5",
        attrs: { medida: "24x16x3-5" },
        name: "24 × 16 × 3.5 cm",
        description: "Bandeja metálica acanalada de acero inoxidable – 24 × 16 × 3.5 cm.",
        price: 20,
        image: "/images/instrumental/INOX/BANDEJA.png"
      }
    ]
  },

  {
    id: "chata-acero-inoxidable",
    name: "CHATA DE ACERO INOXIDABLE",
    type: "Recipientes-y-contenedores",
    description: "Chata fabricada íntegramente en acero inoxidable calidad 304-2B. Forma de pera con bordes redondeados y biselados. Resistente a descontaminantes químicos y autoclavado. Disponible en talla adulto y pediátrica.",
    image: "/images/instrumental/INOX/CHATA.png",

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "adulto", label: "Adulto" },
          { id: "pediatrica", label: "Pediátrica" }
        ]
      }
    ],

    variants: [
      {
        sku: "chata-inox-adulto",
        attrs: { tamano: "adulto" },
        name: "Adulto",
        description: "Chata de acero inoxidable calidad 304-2B, forma de pera con bordes redondeados y biselados. Resistente a descontaminantes químicos y autoclavado.",
        price: 130.8,
        image: "/images/instrumental/INOX/CHATA.png"
      },
      {
        sku: "chata-inox-pediatrica",
        attrs: { tamano: "pediatrica" },
        name: "Pediátrica",
        description: "Chata de acero inoxidable calidad 304-2B, forma de pera con bordes redondeados y biselados. Resistente a descontaminantes químicos y autoclavado.",
        price: 120,
        image: "/images/instrumental/INOX/CHATA.png"
      }
    ]
  },
  {
    id: "chata-pico-de-pato-acero-inoxidable",
    name: "CHATA PICO DE PATO DE ACERO INOXIDABLE",
    type: "Recipientes-y-contenedores",
    description: "Chata pico de pato fabricada íntegramente en acero inoxidable calidad 304-2B. Con bordes redondeados y biselados. Resistente a descontaminantes químicos y autoclavado.",
    price: 141.6,
    image: "/images/instrumental/INOX/CHATA_PATO.png"
  },

  {
    id: "hoja-de-bisturi-15c-100und",
    name: "HOJA DE BISTURI 15C × 100UND",
    description: "HOJA DE BISTURI 15C × 100UND",
    price: 21.6,
    image: "/images/instrumental/INSTRUMENTAL/HOJA15.png"
  },
  {
    id: "mango-de-bisturi-nopa",
    name: "MANGO DE BISTURÍ NOPA",
    type: "Instrumental",
    description: "Mango de bisturí de acero inoxidable marca NOPA. Disponible en distintos números.",
    image: "/images/instrumental/INSTRUMENTAL/BISTURI_3.png",

    attributes: [
      {
        id: "numero",
        label: "Número",
        type: "single",
        values: [
          { id: "3", label: "# 3" },
          { id: "4", label: "# 4" },
          { id: "7", label: "# 7" }
        ]
      }
    ],

    variants: [
      {
        sku: "mango-bisturi-nopa-3",
        attrs: { numero: "3" },
        name: "MANGO DE BISTURÍ # 3 NOPA",
        description: "Mango de bisturí # 3 marca NOPA. Acero inoxidable quirúrgico.",
        price: 66,
        image: "/images/instrumental/INSTRUMENTAL/BISTURI_3.png"
      },
      {
        sku: "mango-bisturi-nopa-4",
        attrs: { numero: "4" },
        name: "MANGO DE BISTURÍ # 4 NOPA",
        description: "Mango de bisturí # 4 marca NOPA. Acero inoxidable quirúrgico.",
        price: 72,
        image: "/images/instrumental/INSTRUMENTAL/BISTURI_4.png"
      },
      {
        sku: "mango-bisturi-nopa-7",
        attrs: { numero: "7" },
        name: "MANGO DE BISTURÍ # 7 NOPA",
        description: "Mango de bisturí # 7 marca NOPA. Acero inoxidable quirúrgico.",
        price: 72,
        image: "/images/instrumental/INSTRUMENTAL/BISTURI_7.png"
      }
    ]
  },


  // ─────────────────────────────────────────────
  // RIÑONERA  (todos consolidados, 1 atributo: volumen/material)
  // ─────────────────────────────────────────────
  {
    id: "rinionera",
    name: "RIÑONERA DE ACERO INOXIDABLE",
    type: "Recipientes-y-contenedores",
    description: "Instrumental fabricado en acero inoxidable quirúrgico con acabado satinado o mate. Permite ser lavado con detergentes enzimáticos de pH neutro bacteriostáticos, y es resistente a golpes, agentes corrosivos y altas temperaturas de calor seco y húmedo. Cumple con normas AISI calidad 304-2B.",
    image: "/images/instrumental/INOX/RINIONERA.png",

    attributes: [
      {
        id: "medida",
        label: "Medida",
        type: "single",
        values: [
          { id: "15-5x9x2-5", label: "15.5 × 9 × 2.5 cm" },
          { id: "19x10-5x3-2", label: "19 × 10.5 × 3.2 cm" },
          { id: "22x12x3-2", label: "22 × 12 × 3.2 cm" },
          { id: "24-5x14x4", label: "24.5 × 14 × 4 cm" },
          { id: "31x18x5-5", label: "31 × 18 × 5.5 cm" }
        ]
      }
    ],

    variants: [
      {
        sku: "rinionera-15-5x9x2-5",
        attrs: { medida: "15-5x9x2-5" },
        name: "15.5 × 9 × 2.5 cm",
        description: "Riñonera de acero inoxidable quirúrgico calidad 304-2B. Acabado satinado, resistente a esterilización y agentes corrosivos.",
        price: 13,
        image: "/images/instrumental/INOX/RINIONERA.png"
      },
      {
        sku: "rinionera-19x10-5x3-2",
        attrs: { medida: "19x10-5x3-2" },
        name: "19 × 10.5 × 3.2 cm",
        description: "Riñonera de acero inoxidable quirúrgico calidad 304-2B. Acabado satinado, resistente a esterilización y agentes corrosivos.",
        price: 15,
        image: "/images/instrumental/INOX/RINIONERA.png"
      },
      {
        sku: "rinionera-22x12x3-2",
        attrs: { medida: "22x12x3-2" },
        name: "22 × 12 × 3.2 cm",
        description: "Riñonera de acero inoxidable quirúrgico calidad 304-2B. Acabado satinado, resistente a esterilización y agentes corrosivos.",
        price: 17,
        image: "/images/instrumental/INOX/RINIONERA.png"
      },
      {
        sku: "rinionera-24-5x14x4",
        attrs: { medida: "24-5x14x4" },
        name: "24.5 × 14 × 4 cm",
        description: "Riñonera de acero inoxidable quirúrgico calidad 304-2B. Acabado satinado, resistente a esterilización y agentes corrosivos.",
        price: 21,
        image: "/images/instrumental/INOX/RINIONERA.png"
      },
      {
        sku: "rinionera-31x18x5-5",
        attrs: { medida: "31x18x5-5" },
        name: "31 × 18 × 5.5 cm",
        description: "Riñonera de acero inoxidable quirúrgico calidad 304-2B. Acabado satinado, resistente a esterilización y agentes corrosivos.",
        price: 53,
        image: "/images/instrumental/INOX/RINIONERA.png"
      }
    ]
  },



  // ─────────────────────────────────────────────
  // TIJERA LISTER TRAUMA
  // ─────────────────────────────────────────────
  {
    id: "tijera-lister-trauma",
    name: "TIJERA LISTER TRAUMA",
    type: "Instrumental",
    description: "Tijera Lister trauma. Disponible en distintos tamaños y marcas.",
    image: "/images/instrumental/placeholder.png",

    attributes: [
      {
        id: "tipo",
        label: "Tipo / Marca",
        type: "single",
        values: [
          { id: "china-18", label: "18 cm China" },
          { id: "nopa-14", label: "14 cm NOPA" },
          { id: "nopa-18", label: "18 cm NOPA" }
        ]
      }
    ],

    variants: [
      {
        sku: "tijera-lister-china-18",
        attrs: { tipo: "china-18" },
        name: "TIJERA LISTER TRAUMA CHINA 18 cm",
        description: "Tijera Lister trauma – 18 cm. Fabricación China.",
        price: 30,
        image: "/images/instrumental/placeholder.png"
      },
      {
        sku: "tijera-lister-nopa-14",
        attrs: { tipo: "nopa-14" },
        name: "TIJERA LISTER TRAUMA NOPA 14 cm",
        description: "Tijera Lister trauma – 14 cm. Marca NOPA.",
        price: 198,
        image: "/images/instrumental/placeholder.png"
      },
      {
        sku: "tijera-lister-nopa-18",
        attrs: { tipo: "nopa-18" },
        name: "TIJERA LISTER TRAUMA NOPA 18 cm",
        description: "Tijera Lister trauma – 18 cm. Marca NOPA.",
        price: 210,
        image: "/images/instrumental/placeholder.png"
      }
    ]
  },


  {
    id: "papagayo-acero-inoxidable",
    name: "PAPAGAYO DE ACERO INOXIDABLE",
    type: "Recipientes-y-contenedores",
    description: "Urinario papagayo de tamaño adulto estándar. Fabricado íntegramente en acero inoxidable calidad 304-2B, resistente a descontaminantes químicos y autoclavado. Bordes redondeados/biselados para mayor seguridad. Capacidad aproximada de 1 litro.",
    price: 60,
    image: "/images/instrumental/INOX/PAPAGAYO.png"
  },

  {
    id: "bowl-acero-quirurgico",
    name: "BOWL DE ACERO INOXIDABLE",
    type: "Recipientes-y-contenedores",
    description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
    image: "/images/instrumental/INOX/BOWL.png",

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "600ml", label: "600 ml" },
          { id: "750ml", label: "750 ml" },
          { id: "1l", label: "1 L" },
          { id: "1-5l", label: "1.5 L" },
          { id: "2l", label: "2 L" },
          { id: "2-5l", label: "2.5 L" },
          { id: "3l", label: "3 L" },
          { id: "4-5l", label: "4.5 L" },
          { id: "5l", label: "5 L" },
          { id: "6l", label: "6 L" },
          { id: "7l", label: "7 L" },
          { id: "8l", label: "8 L" },
          { id: "9l", label: "9 L" }
        ]
      }
    ],

    variants: [
      {
        sku: "bowl-inox-600ml",
        attrs: { capacidad: "600ml" },
        name: "600 ml – Ø16 × 7 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 18.75,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-750ml",
        attrs: { capacidad: "750ml" },
        name: "750 ml – Ø18 × 8 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 33.75,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-1l",
        attrs: { capacidad: "1l" },
        name: "1 L – Ø20 × 8.5 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 37.5,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-1-5l",
        attrs: { capacidad: "1-5l" },
        name: "1.5 L – Ø22 × 8.5 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 45,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-2l",
        attrs: { capacidad: "2l" },
        name: "2 L – Ø24 × 9 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 56.25,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-2-5l",
        attrs: { capacidad: "2-5l" },
        name: "2.5 L – Ø26 × 9.5 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 63.75,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-3l",
        attrs: { capacidad: "3l" },
        name: "3 L – Ø28 × 9.5 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 75,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-4-5l",
        attrs: { capacidad: "4-5l" },
        name: "4.5 L – Ø30 × 10.5 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 82.5,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-5l",
        attrs: { capacidad: "5l" },
        name: "5 L – Ø32 × 12 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 90,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-6l",
        attrs: { capacidad: "6l" },
        name: "6 L – Ø34 × 12 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 97.5,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-7l",
        attrs: { capacidad: "7l" },
        name: "7 L – Ø36 × 13 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 105,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-8l",
        attrs: { capacidad: "8l" },
        name: "8 L – Ø38 × 13 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 112.5,
        image: "/images/instrumental/INOX/BOWL.png"
      },
      {
        sku: "bowl-inox-9l",
        attrs: { capacidad: "9l" },
        name: "9 L – Ø40 × 13.5 cm",
        description: "Bowl de acero inoxidable 304-2B, apto para uso quirúrgico y esterilización.",
        price: 120,
        image: "/images/instrumental/INOX/BOWL.png"
      }
    ]
  },
  {
    id: "cubeta-con-tapa-acero",
    name: "CUBETA CON TAPA DE ACERO",
    type: "Recipientes-y-contenedores",
    description: "Cubeta con tapa de acero inoxidable quirúrgico. Disponible en distintas medidas.",
    image: "/images/instrumental/INOX/CANASTILLA.png",

    attributeOrder: ["tamano", "medida"],
    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "pequeno", label: "Pequeño" },
          { id: "mediano", label: "Mediano" },
          { id: "grande", label: "Grande" }
        ]
      },
      {
        id: "medida",
        label: "Medida (largo × ancho × alto cm)",
        type: "single",
        dependsOn: {
          tamano: {
            pequeno: ["17x7x4", "18x8x4", "20x5x4", "20x10x4", "20x10x6", "22x9x5"],
            mediano: ["25x15x6", "30x15x6", "30x15x10", "30x20x6", "30x20x10", "32x22x8"],
            grande: ["36x27x7", "36x27x10", "38x30x8", "40x30x10", "40x30x15", "48x30x8"]
          }
        },
        values: [
          // Pequeño
          { id: "17x7x4", label: "17 × 7 × 4" },
          { id: "18x8x4", label: "18 × 8 × 4" },
          { id: "20x5x4", label: "20 × 5 × 4" },
          { id: "20x10x4", label: "20 × 10 × 4" },
          { id: "20x10x6", label: "20 × 10 × 6" },
          { id: "22x9x5", label: "22 × 9 × 5" },
          // Mediano
          { id: "25x15x6", label: "25 × 15 × 6" },
          { id: "30x15x6", label: "30 × 15 × 6" },
          { id: "30x15x10", label: "30 × 15 × 10" },
          { id: "30x20x6", label: "30 × 20 × 6" },
          { id: "30x20x10", label: "30 × 20 × 10" },
          { id: "32x22x8", label: "32 × 22 × 8" },
          // Grande
          { id: "36x27x7", label: "36 × 27 × 7" },
          { id: "36x27x10", label: "36 × 27 × 10" },
          { id: "38x30x8", label: "38 × 30 × 8" },
          { id: "40x30x10", label: "40 × 30 × 10" },
          { id: "40x30x15", label: "40 × 30 × 15" },
          { id: "48x30x8", label: "48 × 30 × 8" }
        ]
      }
    ],

    variants: [
      // ── PEQUEÑO ──
      {
        sku: "cubeta-tapa-17x7x4",
        attrs: { tamano: "pequeno", medida: "17x7x4" },
        name: "17 × 7 × 4 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 20.4,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-18x8x4",
        attrs: { tamano: "pequeno", medida: "18x8x4" },
        name: "18 × 8 × 4 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 22.8,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-20x5x4",
        attrs: { tamano: "pequeno", medida: "20x5x4" },
        name: "20 × 5 × 4 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 24,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-20x10x4",
        attrs: { tamano: "pequeno", medida: "20x10x4" },
        name: "20 × 10 × 4 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 28.8,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-20x10x6",
        attrs: { tamano: "pequeno", medida: "20x10x6" },
        name: "20 × 10 × 6 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 31.2,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-22x9x5",
        attrs: { tamano: "pequeno", medida: "22x9x5" },
        name: "22 × 9 × 5 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 37.2,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      // ── MEDIANO ──
      {
        sku: "cubeta-tapa-25x15x6",
        attrs: { tamano: "mediano", medida: "25x15x6" },
        name: "25 × 15 × 6 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 67.2,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-30x15x6",
        attrs: { tamano: "mediano", medida: "30x15x6" },
        name: "30 × 15 × 6 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 80.4,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-30x15x10",
        attrs: { tamano: "mediano", medida: "30x15x10" },
        name: "30 × 15 × 10 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 104.4,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-30x20x6",
        attrs: { tamano: "mediano", medida: "30x20x6" },
        name: "30 × 20 × 6 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 92.4,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-30x20x10",
        attrs: { tamano: "mediano", medida: "30x20x10" },
        name: "30 × 20 × 10 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 117.6,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-32x22x8",
        attrs: { tamano: "mediano", medida: "32x22x8" },
        name: "32 × 22 × 8 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 109.2,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      // ── GRANDE ──
      {
        sku: "cubeta-tapa-36x27x7",
        attrs: { tamano: "grande", medida: "36x27x7" },
        name: "36 × 27 × 7 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 98.4,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-36x27x10",
        attrs: { tamano: "grande", medida: "36x27x10" },
        name: "36 × 27 × 10 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 106.8,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-38x30x8",
        attrs: { tamano: "grande", medida: "38x30x8" },
        name: "38 × 30 × 8 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 176.4,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-40x30x10",
        attrs: { tamano: "grande", medida: "40x30x10" },
        name: "40 × 30 × 10 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 132,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-40x30x15",
        attrs: { tamano: "grande", medida: "40x30x15" },
        name: "40 × 30 × 15 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 144,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      },
      {
        sku: "cubeta-tapa-48x30x8",
        attrs: { tamano: "grande", medida: "48x30x8" },
        name: "48 × 30 × 8 cm",
        description: "Cubeta con tapa de acero inoxidable quirúrgico, apta para esterilización.",
        price: 184.8,
        image: "/images/instrumental/INOX/CANASTILLA.png"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // CLIP DE ESTERILIZACIÓN MOD. MAYO
  // ─────────────────────────────────────────────
  {
    id: "clip-esterilizacion-mayo",
    name: "CLIP DE ESTERILIZACIÓN MOD. MAYO",
    type: "Mobiliario",
    description: "Clip de esterilización modelo Mayo. Disponible en 75 mm y 100 mm.",
    image: "/images/instrumental/INOX/CLIP.png",

    attributes: [
      {
        id: "medida",
        label: "Medida",
        type: "single",
        values: [
          { id: "75mm", label: "75 mm" },
          { id: "100mm", label: "100 mm" }
        ]
      }
    ],

    variants: [
      {
        sku: "clip-esterilizacion-mayo-75",
        attrs: { medida: "75mm" },
        name: "CLIP DE ESTERILIZACIÓN MOD. MAYO 75 mm",
        description: "Clip de esterilización modelo Mayo – 75 mm.",
        price: 18,
        image: "/images/instrumental/INOX/CLIP.png"
      },
      {
        sku: "clip-esterilizacion-mayo-100",
        attrs: { medida: "100mm" },
        name: "CLIP DE ESTERILIZACIÓN MOD. MAYO 100 mm",
        description: "Clip de esterilización modelo Mayo – 100 mm.",
        price: 24,
        image: "/images/instrumental/INOX/CLIP.png"
      }
    ]
  },
];
