// src/data/products/equipamientoYLaboratorioYReactivos.js

export const equipamientoYLaboratorioYReactivosProducts = [

    {
    id: "piseta-500ml",
    name: "Piseta de 500ml",
    description:
    "Recipiente flexible con tubo dispensador, diseñado para facilitar la dosificación controlada de líquidos en entornos de laboratorio, hospitales, consultorios o áreas 	de limpieza técnica.",
    price: 19,
    image: "/images/laboratorio/piseta.png",

  },
  
{
  id: "frasco-vidrio",
  name: "Frascos de vidrio",
  description:
    "Frascos de vidrio de alta calidad, disponibles en múltiples capacidades, colores y tipos de tapa. Ideales para laboratorios, análisis clínicos, química y almacenamiento seguro.",

  image: "/images/frascos/family.png",
  baseImage: "/images/frascos/family.png",

  priceRange: {
    min: 2.5,
    max: 2.5
  },

  // ======================================================
  // ATTRIBUTES + REGLAS DE INCOMPATIBILIDAD
  // ======================================================
  attributes: [
    // ------------------------------
    // COLOR DE FRASCO
    // ------------------------------
    {
      id: "bottleColor",
      label: "Color de frasco",
      type: "single",
      values: [
        { id: "clear", label: "Transparente" },
        { id: "pavonada", label: "Pavonada" },
        { id: "black", label: "Negra" },
        { id: "green", label: "Verde" },
        { id: "blue", label: "Azul" },
        { id: "amber", label: "Ámbar" }
      ]
    },

    // ------------------------------
    // CAPACIDAD
    // ------------------------------
    {
      id: "capacity",
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
        {
          id: "250ml",
          label: "250 ml",
          disabledWhen: {
            bottleColor: ["pavonada", "black"]
          }
        },
        {
          id: "500ml",
          label: "500 ml",
          disabledWhen: {
            bottleColor: ["pavonada", "black"]
          }
        },
        {
          id: "1000ml",
          label: "1000 ml",
          disabledWhen: {
            bottleColor: ["pavonada", "black"]
          }
        }
      ]
    },

    // ------------------------------
    // TIPO DE TAPA
    // ------------------------------
    {
      id: "capType",
      label: "Tipo de tapa",
      type: "single",
      values: [
        {
          id: "tapa-tapon",
          label: "Tapa y tapón"
        },
        {
          id: "spray",
          label: "Spray",
          disabledWhen: {
            capacity: ["5ml"]
          }
        },
        {
          id: "gotero",
          label: "Gotero"
        },
        {
          id: "esmerilada",
          label: "Esmerilada",
          disabledWhen: {
            bottleColor: ["clear", "green", "blue", "black", "pavonada"],
            capacity: ["5ml", "10ml", "15ml", "20ml", "30ml", "50ml"]
          }
        },
        {
          id: "pistola",
          label: "Pistola",
          disabledWhen: {
            capacity: ["5ml", "10ml", "15ml", "20ml", "30ml"],
            bottleColor: ["black", "pavonada"]
          }
        },
        {
          id: "sifon",
          label: "Sifón",
          disabledWhen: {
            capacity: ["5ml", "10ml", "15ml", "20ml", "30ml"]
          }
        },
        {
          id: "tapa-plastica",
          label: "Tapa plástica",
          disabledWhen: {
            capacity: ["5ml", "10ml", "15ml", "20ml", "30ml", "50ml", "100ml"],
            bottleColor: ["green", "blue", "amber", "black", "pavonada"]
          }
        }
      ]
    },

    // ------------------------------
    // COLOR DE TAPA
    // ------------------------------
    {
      id: "capColor",
      label: "Color de tapa",
      type: "single",
      values: [
        {
          id: "white",
          label: "Blanco",
          disabledWhen: {
            capacity: ["500ml", "1000ml"],
            capType: ["esmerilada", "sifon"]
          }
        },
        {
          id: "black",
          label: "Negro"
        }
      ]
    }
  ],

     "variants": [
    


    { "sku": "FR-CL-5-TTP-BK", "attrs": { "bottleColor": "clear", "capacity": "5ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-5-TTP-BK", "attrs": { "bottleColor": "green", "capacity": "5ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-5-TTP-BK", "attrs": { "bottleColor": "blue", "capacity": "5ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-5-TTP-BK", "attrs": { "bottleColor": "amber", "capacity": "5ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-5-TTP-WH", "attrs": { "bottleColor": "clear", "capacity": "5ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-5-TTP-WH", "attrs": { "bottleColor": "green", "capacity": "5ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-5-TTP-WH", "attrs": { "bottleColor": "blue", "capacity": "5ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-5-TTP-WH", "attrs": { "bottleColor": "amber", "capacity": "5ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-5-SPR-BK", "attrs": { "bottleColor": "clear", "capacity": "5ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-5-SPR-BK", "attrs": { "bottleColor": "green", "capacity": "5ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-5-SPR-BK", "attrs": { "bottleColor": "blue", "capacity": "5ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-5-SPR-BK", "attrs": { "bottleColor": "amber", "capacity": "5ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-5-SPR-WH", "attrs": { "bottleColor": "clear", "capacity": "5ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-5-SPR-WH", "attrs": { "bottleColor": "green", "capacity": "5ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-5-SPR-WH", "attrs": { "bottleColor": "blue", "capacity": "5ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-5-SPR-WH", "attrs": { "bottleColor": "amber", "capacity": "5ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-5-GOT-BK", "attrs": { "bottleColor": "clear", "capacity": "5ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-5-GOT-BK", "attrs": { "bottleColor": "green", "capacity": "5ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-5-GOT-BK", "attrs": { "bottleColor": "blue", "capacity": "5ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-5-GOT-BK", "attrs": { "bottleColor": "amber", "capacity": "5ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-5-GOT-WH", "attrs": { "bottleColor": "clear", "capacity": "5ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-5-GOT-WH", "attrs": { "bottleColor": "green", "capacity": "5ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-5-GOT-WH", "attrs": { "bottleColor": "blue", "capacity": "5ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-5-GOT-WH", "attrs": { "bottleColor": "amber", "capacity": "5ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },

    

    { "sku": "FR-CL-10-TTP-BK", "attrs": { "bottleColor": "clear", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-PV-10-TTP-BK", "attrs": { "bottleColor": "pavonada", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BK-10-TTP-BK", "attrs": { "bottleColor": "black", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-10-TTP-BK", "attrs": { "bottleColor": "green", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-10-TTP-BK", "attrs": { "bottleColor": "blue", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-10-TTP-BK", "attrs": { "bottleColor": "amber", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-10-TTP-WH", "attrs": { "bottleColor": "clear", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-PV-10-TTP-WH", "attrs": { "bottleColor": "pavonada", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BK-10-TTP-WH", "attrs": { "bottleColor": "black", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-10-TTP-WH", "attrs": { "bottleColor": "green", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-10-TTP-WH", "attrs": { "bottleColor": "blue", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-10-TTP-WH", "attrs": { "bottleColor": "amber", "capacity": "10ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-10-SPR-BK", "attrs": { "bottleColor": "clear", "capacity": "10ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-PV-10-SPR-BK", "attrs": { "bottleColor": "pavonada", "capacity": "10ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BK-10-SPR-BK", "attrs": { "bottleColor": "black", "capacity": "10ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-10-SPR-BK", "attrs": { "bottleColor": "green", "capacity": "10ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-10-SPR-BK", "attrs": { "bottleColor": "blue", "capacity": "10ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-10-SPR-BK", "attrs": { "bottleColor": "amber", "capacity": "10ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-10-SPR-WH", "attrs": { "bottleColor": "clear", "capacity": "10ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-PV-10-SPR-WH", "attrs": { "bottleColor": "pavonada", "capacity": "10ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BK-10-SPR-WH", "attrs": { "bottleColor": "black", "capacity": "10ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-10-SPR-WH", "attrs": { "bottleColor": "green", "capacity": "10ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-10-SPR-WH", "attrs": { "bottleColor": "blue", "capacity": "10ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-10-SPR-WH", "attrs": { "bottleColor": "amber", "capacity": "10ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-10-GOT-BK", "attrs": { "bottleColor": "clear", "capacity": "10ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-PV-10-GOT-BK", "attrs": { "bottleColor": "pavonada", "capacity": "10ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BK-10-GOT-BK", "attrs": { "bottleColor": "black", "capacity": "10ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-10-GOT-BK", "attrs": { "bottleColor": "green", "capacity": "10ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-10-GOT-BK", "attrs": { "bottleColor": "blue", "capacity": "10ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-10-GOT-BK", "attrs": { "bottleColor": "amber", "capacity": "10ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-10-GOT-WH", "attrs": { "bottleColor": "clear", "capacity": "10ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-PV-10-GOT-WH", "attrs": { "bottleColor": "pavonada", "capacity": "10ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BK-10-GOT-WH", "attrs": { "bottleColor": "black", "capacity": "10ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-10-GOT-WH", "attrs": { "bottleColor": "green", "capacity": "10ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-10-GOT-WH", "attrs": { "bottleColor": "blue", "capacity": "10ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-10-GOT-WH", "attrs": { "bottleColor": "amber", "capacity": "10ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },

    

    { "sku": "FR-CL-15-TTP-BK", "attrs": { "bottleColor": "clear", "capacity": "15ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-15-TTP-BK", "attrs": { "bottleColor": "green", "capacity": "15ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-15-TTP-BK", "attrs": { "bottleColor": "blue", "capacity": "15ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-15-TTP-BK", "attrs": { "bottleColor": "amber", "capacity": "15ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-15-TTP-WH", "attrs": { "bottleColor": "clear", "capacity": "15ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-15-TTP-WH", "attrs": { "bottleColor": "green", "capacity": "15ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-15-TTP-WH", "attrs": { "bottleColor": "blue", "capacity": "15ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-15-TTP-WH", "attrs": { "bottleColor": "amber", "capacity": "15ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-15-SPR-BK", "attrs": { "bottleColor": "clear", "capacity": "15ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-15-SPR-BK", "attrs": { "bottleColor": "green", "capacity": "15ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-15-SPR-BK", "attrs": { "bottleColor": "blue", "capacity": "15ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-15-SPR-BK", "attrs": { "bottleColor": "amber", "capacity": "15ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-15-SPR-WH", "attrs": { "bottleColor": "clear", "capacity": "15ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-15-SPR-WH", "attrs": { "bottleColor": "green", "capacity": "15ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-15-SPR-WH", "attrs": { "bottleColor": "blue", "capacity": "15ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-15-SPR-WH", "attrs": { "bottleColor": "amber", "capacity": "15ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-15-GOT-BK", "attrs": { "bottleColor": "clear", "capacity": "15ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-15-GOT-BK", "attrs": { "bottleColor": "green", "capacity": "15ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-15-GOT-BK", "attrs": { "bottleColor": "blue", "capacity": "15ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-15-GOT-BK", "attrs": { "bottleColor": "amber", "capacity": "15ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-15-GOT-WH", "attrs": { "bottleColor": "clear", "capacity": "15ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-15-GOT-WH", "attrs": { "bottleColor": "green", "capacity": "15ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-15-GOT-WH", "attrs": { "bottleColor": "blue", "capacity": "15ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-15-GOT-WH", "attrs": { "bottleColor": "amber", "capacity": "15ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },



    { "sku": "FR-CL-20-TTP-BK", "attrs": { "bottleColor": "clear", "capacity": "20ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-20-TTP-BK", "attrs": { "bottleColor": "green", "capacity": "20ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-20-TTP-BK", "attrs": { "bottleColor": "blue", "capacity": "20ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-20-TTP-BK", "attrs": { "bottleColor": "amber", "capacity": "20ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-20-TTP-WH", "attrs": { "bottleColor": "clear", "capacity": "20ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-20-TTP-WH", "attrs": { "bottleColor": "green", "capacity": "20ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-20-TTP-WH", "attrs": { "bottleColor": "blue", "capacity": "20ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-20-TTP-WH", "attrs": { "bottleColor": "amber", "capacity": "20ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-20-SPR-BK", "attrs": { "bottleColor": "clear", "capacity": "20ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-20-SPR-BK", "attrs": { "bottleColor": "green", "capacity": "20ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-20-SPR-BK", "attrs": { "bottleColor": "blue", "capacity": "20ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-20-SPR-BK", "attrs": { "bottleColor": "amber", "capacity": "20ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-20-SPR-WH", "attrs": { "bottleColor": "clear", "capacity": "20ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-20-SPR-WH", "attrs": { "bottleColor": "green", "capacity": "20ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-20-SPR-WH", "attrs": { "bottleColor": "blue", "capacity": "20ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-20-SPR-WH", "attrs": { "bottleColor": "amber", "capacity": "20ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-20-GOT-BK", "attrs": { "bottleColor": "clear", "capacity": "20ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-20-GOT-BK", "attrs": { "bottleColor": "green", "capacity": "20ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-20-GOT-BK", "attrs": { "bottleColor": "blue", "capacity": "20ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-20-GOT-BK", "attrs": { "bottleColor": "amber", "capacity": "20ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-20-GOT-WH", "attrs": { "bottleColor": "clear", "capacity": "20ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-20-GOT-WH", "attrs": { "bottleColor": "green", "capacity": "20ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-20-GOT-WH", "attrs": { "bottleColor": "blue", "capacity": "20ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-20-GOT-WH", "attrs": { "bottleColor": "amber", "capacity": "20ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },

  

   
    { "sku": "FR-CL-30-TTP-BK", "attrs": { "bottleColor": "clear", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-PV-30-TTP-BK", "attrs": { "bottleColor": "pavonada", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BK-30-TTP-BK", "attrs": { "bottleColor": "black", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-30-TTP-BK", "attrs": { "bottleColor": "green", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-30-TTP-BK", "attrs": { "bottleColor": "blue", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-30-TTP-BK", "attrs": { "bottleColor": "amber", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-30-TTP-WH", "attrs": { "bottleColor": "clear", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-PV-30-TTP-WH", "attrs": { "bottleColor": "pavonada", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BK-30-TTP-WH", "attrs": { "bottleColor": "black", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-30-TTP-WH", "attrs": { "bottleColor": "green", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-30-TTP-WH", "attrs": { "bottleColor": "blue", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-30-TTP-WH", "attrs": { "bottleColor": "amber", "capacity": "30ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-30-SPR-BK", "attrs": { "bottleColor": "clear", "capacity": "30ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-PV-30-SPR-BK", "attrs": { "bottleColor": "pavonada", "capacity": "30ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BK-30-SPR-BK", "attrs": { "bottleColor": "black", "capacity": "30ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-30-SPR-BK", "attrs": { "bottleColor": "green", "capacity": "30ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-30-SPR-BK", "attrs": { "bottleColor": "blue", "capacity": "30ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-30-SPR-BK", "attrs": { "bottleColor": "amber", "capacity": "30ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-30-SPR-WH", "attrs": { "bottleColor": "clear", "capacity": "30ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-PV-30-SPR-WH", "attrs": { "bottleColor": "pavonada", "capacity": "30ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BK-30-SPR-WH", "attrs": { "bottleColor": "black", "capacity": "30ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-30-SPR-WH", "attrs": { "bottleColor": "green", "capacity": "30ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-30-SPR-WH", "attrs": { "bottleColor": "blue", "capacity": "30ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-30-SPR-WH", "attrs": { "bottleColor": "amber", "capacity": "30ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-30-GOT-BK", "attrs": { "bottleColor": "clear", "capacity": "30ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-PV-30-GOT-BK", "attrs": { "bottleColor": "pavonada", "capacity": "30ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BK-30-GOT-BK", "attrs": { "bottleColor": "black", "capacity": "30ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-30-GOT-BK", "attrs": { "bottleColor": "green", "capacity": "30ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-30-GOT-BK", "attrs": { "bottleColor": "blue", "capacity": "30ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-30-GOT-BK", "attrs": { "bottleColor": "amber", "capacity": "30ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-30-GOT-WH", "attrs": { "bottleColor": "clear", "capacity": "30ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-PV-30-GOT-WH", "attrs": { "bottleColor": "pavonada", "capacity": "30ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BK-30-GOT-WH", "attrs": { "bottleColor": "black", "capacity": "30ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-30-GOT-WH", "attrs": { "bottleColor": "green", "capacity": "30ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-30-GOT-WH", "attrs": { "bottleColor": "blue", "capacity": "30ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-30-GOT-WH", "attrs": { "bottleColor": "amber", "capacity": "30ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },

    



    { "sku": "FR-CL-50-TTP-BK", "attrs": { "bottleColor": "clear", "capacity": "50ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-50-TTP-BK", "attrs": { "bottleColor": "green", "capacity": "50ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-50-TTP-BK", "attrs": { "bottleColor": "blue", "capacity": "50ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-50-TTP-BK", "attrs": { "bottleColor": "amber", "capacity": "50ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-50-TTP-WH", "attrs": { "bottleColor": "clear", "capacity": "50ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-50-TTP-WH", "attrs": { "bottleColor": "green", "capacity": "50ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-50-TTP-WH", "attrs": { "bottleColor": "blue", "capacity": "50ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-50-TTP-WH", "attrs": { "bottleColor": "amber", "capacity": "50ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-50-SPR-BK", "attrs": { "bottleColor": "clear", "capacity": "50ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-50-SPR-BK", "attrs": { "bottleColor": "green", "capacity": "50ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-50-SPR-BK", "attrs": { "bottleColor": "blue", "capacity": "50ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-50-SPR-BK", "attrs": { "bottleColor": "amber", "capacity": "50ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-50-SPR-WH", "attrs": { "bottleColor": "clear", "capacity": "50ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-50-SPR-WH", "attrs": { "bottleColor": "green", "capacity": "50ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-50-SPR-WH", "attrs": { "bottleColor": "blue", "capacity": "50ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-50-SPR-WH", "attrs": { "bottleColor": "amber", "capacity": "50ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-50-GOT-BK", "attrs": { "bottleColor": "clear", "capacity": "50ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-50-GOT-BK", "attrs": { "bottleColor": "green", "capacity": "50ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-50-GOT-BK", "attrs": { "bottleColor": "blue", "capacity": "50ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-50-GOT-BK", "attrs": { "bottleColor": "amber", "capacity": "50ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-50-GOT-WH", "attrs": { "bottleColor": "clear", "capacity": "50ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-50-GOT-WH", "attrs": { "bottleColor": "green", "capacity": "50ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-50-GOT-WH", "attrs": { "bottleColor": "blue", "capacity": "50ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-50-GOT-WH", "attrs": { "bottleColor": "amber", "capacity": "50ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },

    


    { "sku": "FR-CL-100-TTP-BK", "attrs": { "bottleColor": "clear", "capacity": "100ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-100-TTP-BK", "attrs": { "bottleColor": "green", "capacity": "100ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-100-TTP-BK", "attrs": { "bottleColor": "blue", "capacity": "100ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-100-TTP-BK", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-100-TTP-WH", "attrs": { "bottleColor": "clear", "capacity": "100ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-100-TTP-WH", "attrs": { "bottleColor": "green", "capacity": "100ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-100-TTP-WH", "attrs": { "bottleColor": "blue", "capacity": "100ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-100-TTP-WH", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-100-SPR-BK", "attrs": { "bottleColor": "clear", "capacity": "100ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-100-SPR-BK", "attrs": { "bottleColor": "green", "capacity": "100ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-100-SPR-BK", "attrs": { "bottleColor": "blue", "capacity": "100ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-100-SPR-BK", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-100-SPR-WH", "attrs": { "bottleColor": "clear", "capacity": "100ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-100-SPR-WH", "attrs": { "bottleColor": "green", "capacity": "100ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-100-SPR-WH", "attrs": { "bottleColor": "blue", "capacity": "100ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-100-SPR-WH", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-100-GOT-BK", "attrs": { "bottleColor": "clear", "capacity": "100ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-100-GOT-BK", "attrs": { "bottleColor": "green", "capacity": "100ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-100-GOT-BK", "attrs": { "bottleColor": "blue", "capacity": "100ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-100-GOT-BK", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "gotero", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-100-GOT-WH", "attrs": { "bottleColor": "clear", "capacity": "100ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-100-GOT-WH", "attrs": { "bottleColor": "green", "capacity": "100ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-100-GOT-WH", "attrs": { "bottleColor": "blue", "capacity": "100ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-100-GOT-WH", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "gotero", "capColor": "white" }, "price": 2.5 },

    
    { "sku": "FR-AM-100-ESM-BK", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "esmerilada", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-100-ESM-WH", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "esmerilada", "capColor": "white" }, "price": 2.5 },
   
    { "sku": "FR-AM-100-PIS-BK", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "pistola", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-100-PIS-WH", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "pistola", "capColor": "white" }, "price": 2.5 }, 

    { "sku": "FR-AM-100-SIF-BK", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "sifon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-100-SIF-WH", "attrs": { "bottleColor": "amber", "capacity": "100ml", "capType": "sifon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-250-TPL-BK", "attrs": { "bottleColor": "clear", "capacity": "250ml", "capType": "tapa-plastica", "capColor": "black" }, "price": 2.5 }, 
    { "sku": "FR-CL-250-TPL-WH", "attrs": { "bottleColor": "clear", "capacity": "250ml", "capType": "tapa-plastica", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-250-TTP-BK", "attrs": { "bottleColor": "clear", "capacity": "250ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-250-TTP-BK", "attrs": { "bottleColor": "green", "capacity": "250ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-250-TTP-BK", "attrs": { "bottleColor": "blue", "capacity": "250ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-250-TTP-BK", "attrs": { "bottleColor": "amber", "capacity": "250ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-250-TTP-WH", "attrs": { "bottleColor": "clear", "capacity": "250ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-250-TTP-WH", "attrs": { "bottleColor": "green", "capacity": "250ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-250-TTP-WH", "attrs": { "bottleColor": "blue", "capacity": "250ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-250-TTP-WH", "attrs": { "bottleColor": "amber", "capacity": "250ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-250-SPR-BK", "attrs": { "bottleColor": "clear", "capacity": "250ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-250-SPR-BK", "attrs": { "bottleColor": "green", "capacity": "250ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-250-SPR-BK", "attrs": { "bottleColor": "blue", "capacity": "250ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-250-SPR-BK", "attrs": { "bottleColor": "amber", "capacity": "250ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-250-SPR-WH", "attrs": { "bottleColor": "clear", "capacity": "250ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-250-SPR-WH", "attrs": { "bottleColor": "green", "capacity": "250ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-250-SPR-WH", "attrs": { "bottleColor": "blue", "capacity": "250ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-250-SPR-WH", "attrs": { "bottleColor": "amber", "capacity": "250ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },


    { "sku": "FR-AM-250-ESM-BK", "attrs": { "bottleColor": "amber", "capacity": "250ml", "capType": "esmerilada", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-250-ESM-WH", "attrs": { "bottleColor": "amber", "capacity": "250ml", "capType": "esmerilada", "capColor": "white" }, "price": 2.5 },
   
    { "sku": "FR-CL-250-PIS-BK", "attrs": { "bottleColor": "clear", "capacity": "250ml", "capType": "pistola", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-250-PIS-BK", "attrs": { "bottleColor": "green", "capacity": "250ml", "capType": "pistola", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-250-PIS-BK", "attrs": { "bottleColor": "blue", "capacity": "250ml", "capType": "pistola", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-250-PIS-BK", "attrs": { "bottleColor": "amber", "capacity": "250ml", "capType": "pistola", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-250-PIS-WH", "attrs": { "bottleColor": "clear", "capacity": "250ml", "capType": "pistola", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-250-PIS-WH", "attrs": { "bottleColor": "green", "capacity": "250ml", "capType": "pistola", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-250-PIS-WH", "attrs": { "bottleColor": "blue", "capacity": "250ml", "capType": "pistola", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-250-PIS-WH", "attrs": { "bottleColor": "amber", "capacity": "250ml", "capType": "pistola", "capColor": "white" }, "price": 2.5 }, 

    { "sku": "FR-CL-250-SIF-BK", "attrs": { "bottleColor": "clear", "capacity": "250ml", "capType": "sifon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-GR-250-SIF-BK", "attrs": { "bottleColor": "green", "capacity": "250ml", "capType": "sifon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-250-SIF-BK", "attrs": { "bottleColor": "blue", "capacity": "250ml", "capType": "sifon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-250-SIF-BK", "attrs": { "bottleColor": "amber", "capacity": "250ml", "capType": "sifon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-250-SIF-WH", "attrs": { "bottleColor": "clear", "capacity": "250ml", "capType": "sifon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-GR-250-SIF-WH", "attrs": { "bottleColor": "green", "capacity": "250ml", "capType": "sifon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-250-SIF-WH", "attrs": { "bottleColor": "blue", "capacity": "250ml", "capType": "sifon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-250-SIF-WH", "attrs": { "bottleColor": "amber", "capacity": "250ml", "capType": "sifon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-500-TPL-BK", "attrs": { "bottleColor": "clear", "capacity": "500ml", "capType": "tapa-plastica", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-CL-500-TPL-WH", "attrs": { "bottleColor": "clear", "capacity": "500ml", "capType": "tapa-plastica", "capColor": "white" }, "price": 2.5 },


    { "sku": "FR-BL-500-TTP-BK", "attrs": { "bottleColor": "blue", "capacity": "500ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-500-TTP-BK", "attrs": { "bottleColor": "amber", "capacity": "500ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-BL-500-TTP-WH", "attrs": { "bottleColor": "blue", "capacity": "500ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-500-TTP-WH", "attrs": { "bottleColor": "amber", "capacity": "500ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-500-SPR-BK", "attrs": { "bottleColor": "clear", "capacity": "500ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-500-SPR-BK", "attrs": { "bottleColor": "blue", "capacity": "500ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-500-SPR-BK", "attrs": { "bottleColor": "amber", "capacity": "500ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-500-SPR-WH", "attrs": { "bottleColor": "clear", "capacity": "500ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-500-SPR-WH", "attrs": { "bottleColor": "blue", "capacity": "500ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-500-SPR-WH", "attrs": { "bottleColor": "amber", "capacity": "500ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },



    { "sku": "FR-AM-500-ESM-BK", "attrs": { "bottleColor": "amber", "capacity": "500ml", "capType": "esmerilada", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-500-ESM-WH", "attrs": { "bottleColor": "amber", "capacity": "500ml", "capType": "esmerilada", "capColor": "white" }, "price": 2.5 },
   
    { "sku": "FR-CL-500-PIS-BK", "attrs": { "bottleColor": "clear", "capacity": "500ml", "capType": "pistola", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-500-PIS-BK", "attrs": { "bottleColor": "blue", "capacity": "500ml", "capType": "pistola", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-500-PIS-BK", "attrs": { "bottleColor": "amber", "capacity": "500ml", "capType": "pistola", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-500-PIS-WH", "attrs": { "bottleColor": "clear", "capacity": "500ml", "capType": "pistola", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-500-PIS-WH", "attrs": { "bottleColor": "blue", "capacity": "500ml", "capType": "pistola", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-500-PIS-WH", "attrs": { "bottleColor": "amber", "capacity": "500ml", "capType": "pistola", "capColor": "white" }, "price": 2.5 }, 

    { "sku": "FR-CL-500-SIF-BK", "attrs": { "bottleColor": "clear", "capacity": "500ml", "capType": "sifon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-BL-500-SIF-BK", "attrs": { "bottleColor": "blue", "capacity": "500ml", "capType": "sifon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-500-SIF-BK", "attrs": { "bottleColor": "amber", "capacity": "500ml", "capType": "sifon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-500-SIF-WH", "attrs": { "bottleColor": "clear", "capacity": "500ml", "capType": "sifon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-BL-500-SIF-WH", "attrs": { "bottleColor": "blue", "capacity": "500ml", "capType": "sifon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-500-SIF-WH", "attrs": { "bottleColor": "amber", "capacity": "500ml", "capType": "sifon", "capColor": "white" }, "price": 2.5 },


    { "sku": "FR-CL-1000-TPL-BK", "attrs": { "bottleColor": "clear", "capacity": "1000ml", "capType": "tapa-plastica", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-CL-1000-TPL-WH", "attrs": { "bottleColor": "clear", "capacity": "1000ml", "capType": "tapa-plastica", "capColor": "white" }, "price": 2.5 },



    { "sku": "FR-AM-1000-TTP-BK", "attrs": { "bottleColor": "amber", "capacity": "1000ml", "capType": "tapa-tapon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-1000-TTP-WH", "attrs": { "bottleColor": "amber", "capacity": "1000ml", "capType": "tapa-tapon", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-CL-1000-SPR-BK", "attrs": { "bottleColor": "clear", "capacity": "1000ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-1000-SPR-BK", "attrs": { "bottleColor": "amber", "capacity": "1000ml", "capType": "spray", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-1000-SPR-WH", "attrs": { "bottleColor": "clear", "capacity": "1000ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-1000-SPR-WH", "attrs": { "bottleColor": "amber", "capacity": "1000ml", "capType": "spray", "capColor": "white" }, "price": 2.5 },

    { "sku": "FR-AM-1000-ESM-BK", "attrs": { "bottleColor": "amber", "capacity": "1000ml", "capType": "esmerilada", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-1000-ESM-WH", "attrs": { "bottleColor": "amber", "capacity": "1000ml", "capType": "esmerilada", "capColor": "white" }, "price": 2.5 },
   
    { "sku": "FR-CL-1000-PIS-BK", "attrs": { "bottleColor": "clear", "capacity": "1000ml", "capType": "pistola", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-1000-PIS-BK", "attrs": { "bottleColor": "amber", "capacity": "1000ml", "capType": "pistola", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-1000-PIS-WH", "attrs": { "bottleColor": "clear", "capacity": "1000ml", "capType": "pistola", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-1000-PIS-WH", "attrs": { "bottleColor": "amber", "capacity": "1000ml", "capType": "pistola", "capColor": "white" }, "price": 2.5 }, 

    { "sku": "FR-CL-1000-SIF-BK", "attrs": { "bottleColor": "clear", "capacity": "1000ml", "capType": "sifon", "capColor": "black" }, "price": 2.5 },
    { "sku": "FR-AM-1000-SIF-BK", "attrs": { "bottleColor": "amber", "capacity": "1000ml", "capType": "sifon", "capColor": "black" }, "price": 2.5 },

    { "sku": "FR-CL-1000-SIF-WH", "attrs": { "bottleColor": "clear", "capacity": "1000ml", "capType": "sifon", "capColor": "white" }, "price": 2.5 },
    { "sku": "FR-AM-1000-SIF-WH", "attrs": { "bottleColor": "amber", "capacity": "1000ml", "capType": "sifon", "capColor": "white" }, "price": 2.5 }

        
  ]
}
];

