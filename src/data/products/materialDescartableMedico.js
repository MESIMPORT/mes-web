// src/data/products/materialDescartableMedico.js

export const materialDescartableMedicoProducts = [

  {
    id: "guantes-de-latex-descartables",
    name: "GUANTES DE LÁTEX DESCARTABLES",
    description: "Guantes descartables de látex natural sin polvo, caja × 100 unidades. Disponibles en tallas S, M y L.",
    image: "/images/descartable/GUANTES/LATEX.png",

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "s", label: "S" },
          { id: "m", label: "M" },
          { id: "l", label: "L" }
        ]
      }
    ],

    variants: [
      {
        sku: "guantes-latex-s",
        attrs: { talla: "s" },
        name: "GUANTES DE LÁTEX – TALLA S (CAJA × 100U)",
        description: "Guantes descartables de látex natural sin polvo, talla S. Caja × 100 unidades.",
        price: 20,
        image: "/images/descartable/GUANTES/LATEX.png"
      },
      {
        sku: "guantes-latex-m",
        attrs: { talla: "m" },
        name: "GUANTES DE LÁTEX – TALLA M (CAJA × 100U)",
        description: "Guantes descartables de látex natural sin polvo, talla M. Caja × 100 unidades.",
        price: 20,
        image: "/images/descartable/GUANTES/LATEX.png"
      },
      {
        sku: "guantes-latex-l",
        attrs: { talla: "l" },
        name: "GUANTES DE LÁTEX – TALLA L (CAJA × 100U)",
        description: "Guantes descartables de látex natural sin polvo, talla L. Caja × 100 unidades.",
        price: 20,
        image: "/images/descartable/GUANTES/LATEX.png"
      }
    ]
  },

  {
    id: "guantes-de-nitrilo-descartables",
    name: "GUANTES DE NITRILO DESCARTABLES",
    description: "Guantes descartables de nitrilo sin polvo, caja × 100 unidades. Disponibles en tallas S, M y L.",
    image: "/images/descartable/GUANTES/NITRILE.png",

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "s", label: "S" },
          { id: "m", label: "M" },
          { id: "l", label: "L" }
        ]
      }
    ],

    variants: [
      {
        sku: "guantes-nitrilo-s",
        attrs: { talla: "s" },
        name: "GUANTES DE NITRILO – TALLA S (CAJA × 100U)",
        description: "Guantes descartables de nitrilo sin polvo, talla S. Caja × 100 unidades.",
        price: 22.8,
        image: "/images/descartable/GUANTES/NITRILE.png"
      },
      {
        sku: "guantes-nitrilo-m",
        attrs: { talla: "m" },
        name: "GUANTES DE NITRILO – TALLA M (CAJA × 100U)",
        description: "Guantes descartables de nitrilo sin polvo, talla M. Caja × 100 unidades.",
        price: 22.8,
        image: "/images/descartable/GUANTES/NITRILE.png"
      },
      {
        sku: "guantes-nitrilo-l",
        attrs: { talla: "l" },
        name: "GUANTES DE NITRILO – TALLA L (CAJA × 100U)",
        description: "Guantes descartables de nitrilo sin polvo, talla L. Caja × 100 unidades.",
        price: 22.8,
        image: "/images/descartable/GUANTES/NITRILE.png"
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

  {
    id: "frasco-plastico-para-examen-de-orina",
    name: "FRASCO PLÁSTICO PARA EXAMEN DE ORINA",
    type: "Utensilios de laboratorio",
    description: "Frasco plástico de boca ancha con tapa hermética, diseñado para la recolección, transporte y conservación segura de muestras de orina. Su cierre hermético previene derrames y contaminación cruzada, garantizando la integridad de la muestra desde la toma hasta el análisis. Fabricado en material plástico resistente y transparente que facilita la visualización del contenido, de uso único, ideal para laboratorios clínicos, centros de salud y hospitales.",
    image: "/images/laboratorio/UTENSILIOS/FRASCO_ORINACARD.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "unidad", label: "Unidad" },
          { id: "caja-250", label: "Caja × 250 und" }
        ]
      }
    ],

    variants: [
      {
        sku: "frasco-orina-unidad",
        attrs: { presentacion: "unidad" },
        name: "UNIDAD",
        description: "Frasco plástico de boca ancha con tapa hermética para recolección y transporte seguro de muestras de orina, de uso único. || **Presentación:** Unidad.",
        price: 1.20,
        image: "/images/laboratorio/UTENSILIOS/FRASCO_ORINA.png"
      },
      {
        sku: "frasco-orina-caja-250",
        attrs: { presentacion: "caja-250" },
        name: "CAJA × 250 UND",
        description: "Frasco plástico de boca ancha con tapa hermética para recolección y transporte seguro de muestras de orina, de uso único. || **Presentación:** Caja × 250 unidades.",
        price: 192,
        image: "/images/laboratorio/UTENSILIOS/FRASCO_ORINACARD.png"
      }
    ]
  },
  {
    id: "frasco-con-espatula-para-muestra-heces",
    name: "FRASCO CON ESPÁTULA PARA MUESTRA DE HECES",
    type: "Utensilios de laboratorio",
    description: "Frasco plástico hermético con espátula integrada en la tapa, diseñado para la recolección, transporte y conservación segura de muestras de heces. Su cierre hermético previene derrames y contaminación cruzada, garantizando la integridad de la muestra desde la toma hasta el análisis. Fabricado en material plástico resistente, de uso único, ideal para laboratorios clínicos, centros de salud y hospitales.",
    image: "/images/laboratorio/UTENSILIOS/FRASCO_SAMPLIX250.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "unidad", label: "Unidad" },
          { id: "caja-250", label: "Caja × 250 und" }
        ]
      }
    ],

    variants: [
      {
        sku: "frasco-espatula-heces-unidad",
        attrs: { presentacion: "unidad" },
        name: "UNIDAD",
        description: "Frasco plástico hermético con espátula integrada para recolección y transporte seguro de muestras de heces, de uso único. || **Presentación:** Unidad.",
        price: 0.50,
        image: "/images/laboratorio/UTENSILIOS/FRASCO_SAMPLIX.png"
      },
      {
        sku: "frasco-espatula-heces-caja-250",
        attrs: { presentacion: "caja-250" },
        name: "CAJA × 250 UND",
        description: "Frasco plástico hermético con espátula integrada para recolección y transporte seguro de muestras de heces, de uso único. || **Presentación:** Caja × 250 unidades.",
        price: 100,
        image: "/images/laboratorio/UTENSILIOS/FRASCO_SAMPLIX250.png"
      }
    ]
  },


];

