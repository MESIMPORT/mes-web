// src/data/products/gestanteYNeonatos.js

export const gestanteYNeonatosProducts = [


  {
    id: "cinta-broselow",
    name: "Cinta broselow para coche de paro",
    description:
      "Dispositivo de medición diseñado para estimar rápidamente el peso y calcular dosis de medicamentos, equipos y suministros adecuados para pacientes pediátricos en 	situaciones de emergencia.",
    price: 300,
    image: "/images/gestante/broselow.png",

  },

  {
    id: "gestograma-oms-embarazo",
    name: "GESTOGRAMA OMS D/EMBARAZO",
    description: "Gestograma OMS para cálculo de edad gestacional y fecha probable de parto.",
    price: 96,
    image: "/images/gestante/gestograma.png"
  },

  {
    id: "kit-cepillos-biberones",
    name: "KIT DE CEPILLOS PARA BIBERONES",
    description: "Set de cepillos especializados para limpieza de biberones y accesorios.",
    price: 44.28,
    image: "/images/gestante/cepillos-biberon.png"
  },

  {
    id: "pelota-terapeutica-23cm",
    name: "PELOTA TERAPÉUTICA 23 CM",
    description: "Pelota terapéutica de 23 cm para ejercicios prenatales y fisioterapia.",
    price: 57.6,
    image: "/images/gestante/pelota-terapeutica.png"
  },

  // ─── PRODUCTOS VENDIDOS (cargados desde backoffice) ───
  {
    id: "lentes-fototerapia-eyemax2",
    name: "LENTES DE FOTOTERAPIA EYEMAX2",
    description: "Protectores oculares EyeMax2 para recién nacidos en fototerapia, que protegen los ojos de la luz azul durante el tratamiento.",
    image: "/images/logo.png",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "prematuro", label: "PREMATURO" },
          { id: "regular", label: "REGULAR" }
        ]
      }
    ],

    variants: [
      { sku: "eyemax2-prematuro", attrs: { talla: "prematuro" }, name: "LENTES DE FOTOTERAPIA EYEMAX2 – PREMATURO", description: "Protectores oculares EyeMax2 para recién nacidos en fototerapia, que protegen los ojos de la luz azul durante el tratamiento.", price: 161, image: "/images/logo.png" },
      { sku: "eyemax2-regular", attrs: { talla: "regular" }, name: "LENTES DE FOTOTERAPIA EYEMAX2 – REGULAR", description: "Protectores oculares EyeMax2 para recién nacidos en fototerapia, que protegen los ojos de la luz azul durante el tratamiento.", price: 173.2, image: "/images/logo.png" }
    ]
  },

  {
    id: "escobillas-biberon",
    name: "ESCOBILLAS PARA BIBERÓN",
    description: "Escobillas para la limpieza de biberones y tetinas.",
    image: "/images/logo.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "con-mango-ergonomico", label: "CON MANGO ERGONÓMICO" },
          { id: "avent", label: "AVENT" }
        ]
      }
    ],

    variants: [
      { sku: "escobilla-biberon-mango-ergonomico", attrs: { modelo: "con-mango-ergonomico" }, name: "ESCOBILLAS PARA BIBERÓN – CON MANGO ERGONÓMICO", description: "Escobillas para la limpieza de biberones y tetinas.", price: 47.43, image: "/images/logo.png" },
      { sku: "escobilla-biberon-avent", attrs: { modelo: "avent" }, name: "ESCOBILLA PARA BIBERÓN Y TETINA – PHILIPS AVENT", description: "Escobilla Philips Avent para la limpieza de biberones y tetinas. Cabezal de cerdas suaves que llega al fondo y a las paredes del biberón sin rayarlo, y punta especial para limpiar el interior de las tetinas. Mango largo y ergonómico con agarre antideslizante. Apta para biberones de cuello ancho y estándar. || Marca: Philips Avent | Uso: biberones y tetinas | Contenido: 1 unidad", price: 70, image: "/images/gestante/escobilla-biberon-avent.jpg" }
    ]
  },

];
