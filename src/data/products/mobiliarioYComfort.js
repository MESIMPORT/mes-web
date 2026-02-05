// src/data/products/mobiliarioYComfort.js

export const mobiliarioYComfortProducts = [

  // ==================================================
  // 🟢 TIPO 1 — PRODUCTO SIMPLE
  // ==================================================

  {
    id: "colchon-antiescaras",
    name: "Colchón antiescaras",
    description:
      "Colchón diseñado para la prevención de úlceras por presión en pacientes encamados, fabricado con materiales de alta durabilidad.",
    price: 2850,
    image: "/images/mobiliario/colchon-antiescaras.png",
  },

  // ==================================================
  // 🔵 TIPO 3 — CHEST-ROLL ACTION
  // ==================================================

  {
    id: "chest-roll-action",
    name: "Chest Roll Action",
    description:
      "Rodillo de posicionamiento Action® para soporte torácico y distribución de presión.",
    image: "/images/mobiliario/chest-roll.png",

    priceRange: {
      min: 950,
      max: 1550,
    },

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "pequeno", label: "Pequeño" },
          { id: "mediano", label: "Mediano" },
          { id: "grande", label: "Grande" },
        ],
      },
    ],

    variants: [
      {
        sku: "ACT-CR-S",
        attrs: { tamano: "pequeno" },
        price: 950,
        image: "/images/mobiliario/chest-roll2.png",
      },
      {
        sku: "ACT-CR-M",
        attrs: { tamano: "mediano" },
        price: 1250,
        image: "/images/mobiliario/chest-roll2.png",
      },
      {
        sku: "ACT-CR-L",
        attrs: { tamano: "grande" },
        price: 1550,
        image: "/images/mobiliario/chest-roll2.png",
      },
    ],
  },

  // ==================================================
  // 🔵 TIPO 3 — DONA ACTION
  // ==================================================

  {
    id: "dona-action",
    name: "Dona Action",
    description:
      "Cojín en forma de dona Action® para alivio de presión en zonas específicas.",
    image: "/images/mobiliario/dona.png",

    priceRange: {
      min: 780,
      max: 1120,
    },

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "pequeno", label: "Pequeño" },
          { id: "mediano", label: "Mediano" },
          { id: "grande", label: "Grande" },
        ],
      },
    ],

    variants: [
      {
        sku: "ACT-DON-S",
        attrs: { tamano: "pequeno" },
        price: 780,
        image: "/images/mobiliario/dona.png",
      },
      {
        sku: "ACT-DON-M",
        attrs: { tamano: "mediano" },
        price: 950,
        image: "/images/mobiliario/dona.png",
      },
      {
        sku: "ACT-DON-L",
        attrs: { tamano: "grande" },
        price: 1120,
        image: "/images/mobiliario/dona.png",
      },
    ],
  },

  // ==================================================
  // 🔵 TIPO 3 — PAD DE RODILLA ACTION
  // ==================================================

  {
    id: "pad-rodilla-action",
    name: "Pad de rodilla Action",
    description:
      "Pad Action® para soporte y alivio de presión en la zona de la rodilla.",
    image: "/images/mobiliario/pad-rodilla.png",

    priceRange: {
      min: 620,
      max: 920,
    },

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "estandar", label: "Estándar" },
          { id: "grande", label: "Grande" },
        ],
      },
    ],

    variants: [
      {
        sku: "ACT-KP-STD",
        attrs: { tamano: "estandar" },
        price: 620,
        image: "/images/mobiliario/pad-rodilla.png",
      },
      {
        sku: "ACT-KP-L",
        attrs: { tamano: "grande" },
        price: 920,
        image: "/images/mobiliario/pad-rodilla.png",
      },
    ],
  },

  // ==================================================
  // 🔵 TIPO 3 — PADS INCUBADORA ACTION
  // ==================================================

  {
    id: "pads-incubadora-action",
    name: "Pads para incubadora Action",
    description:
      "Pads Action® diseñados para incubadoras neonatales, brindan soporte y confort.",
    image: "/images/mobiliario/pads-incubadora.png",

    priceRange: {
      min: 1450,
      max: 1950,
    },

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "neonato", label: "Neonato" },
          { id: "infantil", label: "Infantil" },
        ],
      },
    ],

    variants: [
      {
        sku: "ACT-IN-NEO",
        attrs: { tamano: "neonato" },
        price: 1450,
        image: "/images/mobiliario/pads-incubadora.png",
      },
      {
        sku: "ACT-IN-INF",
        attrs: { tamano: "infantil" },
        price: 1950,
        image: "/images/mobiliario/pads-incubadora.png",
      },
    ],
  },

  // ==================================================
  // 🔵 TIPO 3 — CORREAS DE POSICIONAMIENTO
  // ==================================================

  {
    id: "correas-posicionamiento-action",
    name: "Correas de posicionamiento Action",
    description:
      "Correas Action® para posicionamiento seguro del paciente.",
    image: "/images/mobiliario/correas-1.png",

    priceRange: {
      min: 420,
      max: 720,
    },

    attributes: [
      {
        id: "longitud",
        label: "Longitud",
        type: "single",
        values: [
          { id: "corta", label: "Corta" },
          { id: "larga", label: "Larga" },
        ],
      },
    ],

    variants: [
      {
        sku: "ACT-STR-S",
        attrs: { longitud: "corta" },
        price: 420,
        image: "/images/mobiliario/correas-2.png",
      },
      {
        sku: "ACT-STR-L",
        attrs: { longitud: "larga" },
        price: 720,
        image: "/images/mobiliario/correas-2.png",
      },
    ],
  },

  // ==================================================
  // 🔵 TIPO 3 — CUBIERTAS DE SUPERFICIE
  // ==================================================

  {
    id: "cubiertas-superficie-action",
    name: "Cubiertas de superficie Action",
    description:
      "Cubiertas Action® para protección y confort en superficies clínicas.",
    image: "/images/mobiliario/cubiertas.png",

    priceRange: {
      min: 980,
      max: 1680,
    },

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "simple", label: "Simple" },
          { id: "doble", label: "Doble" },
        ],
      },
    ],

    variants: [
      {
        sku: "ACT-COV-S",
        attrs: { tamano: "simple" },
        price: 980,
        image: "/images/mobiliario/cubiertas.png",
      },
      {
        sku: "ACT-COV-D",
        attrs: { tamano: "doble" },
        price: 1680,
        image: "/images/mobiliario/cubiertas.png",
      },
    ],
  },

  // ==================================================
  // 🔵 TIPO 3 — SPOT PROTECTORS
  // ==================================================

  {
    id: "spot-protectors-action",
    name: "Spot Protectors Action",
    description:
      "Protectores puntuales Action® para alivio de presión localizada.",
    image: "/images/mobiliario/spot-protectors.png",

    priceRange: {
      min: 380,
      max: 680,
    },

    attributes: [
      {
        id: "diametro",
        label: "Diámetro",
        type: "single",
        values: [
          { id: "pequeno", label: "Pequeño" },
          { id: "grande", label: "Grande" },
        ],
      },
    ],

    variants: [
      {
        sku: "ACT-SP-S",
        attrs: { diametro: "pequeno" },
        price: 380,
        image: "/images/mobiliario/spot-protectors.png",
      },
      {
        sku: "ACT-SP-L",
        attrs: { diametro: "grande" },
        price: 680,
        image: "/images/mobiliario/spot-protectors.png",
      },
    ],
  },

  // ==================================================
  // 🔵 TIPO 3 — RESURFACING KITS
  // ==================================================

  {
    id: "resurfacing-kits-action",
    name: "Resurfacing Kits Action",
    description:
      "Kits Action® para reacondicionamiento de superficies clínicas.",
    image: "/images/mobiliario/resurfacing-kits.png",

    priceRange: {
      min: 1350,
      max: 2150,
    },

    attributes: [
      {
        id: "tipo",
        label: "Tipo de kit",
        type: "single",
        values: [
          { id: "estandar", label: "Estándar" },
          { id: "avanzado", label: "Avanzado" },
        ],
      },
    ],

    variants: [
      {
        sku: "ACT-RK-STD",
        attrs: { tipo: "estandar" },
        price: 1350,
        image: "/images/mobiliario/resurfacing-kits.png",
      },
      {
        sku: "ACT-RK-ADV",
        attrs: { tipo: "avanzado" },
        price: 2150,
        image: "/images/mobiliario/resurfacing-kits.png",
      },
    ],
  },
];
