// src/data/products/accesoriosYMiscelaneos.js

export const accesoriosYMiscelaneosProducts = [
  {
    id: "botiqu-n-de-tela-con-logo-35-20-25-cm-con-cinta-reflectiva",
    name: "BOTIQUÍN DE TELA CON LOGO Y CINTA REFLECTIVA",
    description: "Medidas 35 × 20 × 25 cm",
    type: "Botiquin",
    price: 72,
    images: ["/images/accesorios/MALETIN/MALETIN.png",
      "/images/accesorios/MALETIN/MALETIN2.png"]
  },

  {
    id: "botiquin-polipropileno",
    name: "BOTIQUÍN DE POLIPROPILENO ",
    type: "Accesorios",
    description: "Caja organizadora de gran tamaño para accesorios médicos, súper resistente para el fácil transporte. Con doble broche, compartimentos en la tapa, bandeja y asa plegable. Dimensiones: 24 × 51 × 24.2 cm.",
    price: 60,
    image: "/images/accesorios/BOTIQUIN_20.png"
  },

  {
    id: "extintor-acetato-buckeye-2-5-gln",
    name: "EXTINTOR BUCKEYE ACETATO 2.5 GLN",
    description: "EXTINTOR ACETATO BUCKEYE 2.5 GLN",
    type: "Extintores",
    price: 840,
    image: "/images/accesorios/EXTINTORES/BUCK_ACE_2LB.png"
  },
  {
    id: "extintor-buckeye-co2-20lb",
    name: "EXTINTOR BUCKEYE CO2 20LB",
    description: "EXTINTOR BUCKEYE CO2 20LB",
    type: "Extintores",
    price: 1080,
    image: "/images/accesorios/EXTINTORES/BUCK_CO2_20LB.png"
  },
  {
    id: "extintor-buckeye-pqs-20lb",
    name: "EXTINTOR BUCKEYE PQS 20LB",
    description: "EXTINTOR BUCKEYE PQS 20LB",
    type: "Extintores",
    price: 576,
    image: "/images/accesorios/EXTINTORES/BUCK_PQS_20LB.png"
  },
  {
    id: "extintor-co2-buckeye-10lb",
    name: "EXTINTOR BUCKEYE CO2 10LB",
    description: "EXTINTOR BUCKEYE CO2 10LB",
    type: "Extintores",
    price: 540,
    image: "/images/accesorios/EXTINTORES/BUCK_CO2_10LB.png"
  },


  {
    id: "pedestal-para-extintor-con-base",
    name: "PEDESTAL PARA EXTINTOR CON BASE",
    description: "Pedestal metálico con base para soporte de extintores. Disponible en capacidad de 6 KG y 9 KG.",
    type: "Extintores",
    image: "/images/accesorios/EXTINTORES/PEDESTAL.png",

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "6kg", label: "6 KG" },
          { id: "9kg", label: "9 KG" }
        ]
      }
    ],

    variants: [
      {
        sku: "pedestal-extintor-6kg",
        attrs: { capacidad: "6kg" },
        name: "PEDESTAL PARA EXTINTOR CON BASE – 6 KG",
        description: "Pedestal metálico con base para extintor de 6 KG.",
        price: 50,
        image: "/images/accesorios/EXTINTORES/PEDESTAL.png"
      },
      {
        sku: "pedestal-extintor-9kg",
        attrs: { capacidad: "9kg" },
        name: "PEDESTAL PARA EXTINTOR CON BASE – 9 KG",
        description: "Pedestal metálico con base para extintor de 9 KG.",
        price: 60,
        image: "/images/accesorios/EXTINTORES/PEDESTAL.png"
      }
    ]
  },
  {
    id: "senalitica-fotoluminiscente",
    name: "SEÑALETICAS FOTOLUMINISCENTES",
    description: "Señaléticas fotoluminiscentes en Celtex de 3 mm – 20 × 30 cm. Disponibles en distintos modelos para emergencias, evacuación y seguridad contra incendios.",
    type: "Señaleticas",
    image: "/images/accesorios/CARDS/SEÑALETICAS.png",

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "alarma-ci", label: "Alarma Contra Incendios" },
          { id: "extintor-co2", label: "Extintor CO2" },
          { id: "extintor-pqs", label: "Extintor PQS" },
          { id: "salida", label: "Salida" },
          { id: "salida-der", label: "Salida Derecha" },
          { id: "salida-izq", label: "Salida Izquierda" },
          { id: "zona-segura", label: "Zona Segura" }
        ]
      }
    ],

    variants: [
      {
        sku: "senaletica-alarma-ci",
        attrs: { modelo: "alarma-ci" },
        name: "ALARMA CONTRA INCENDIOS",
        description: "Celtex 3 mm – 20 × 30 cm.",
        price: 7,
        image: "/images/accesorios/SEÑALETICAS/ALARM_CI.png"
      },
      {
        sku: "senaletica-extintor-co2",
        attrs: { modelo: "extintor-co2" },
        name: "EXTINTOR CO2",
        description: "Celtex 3 mm – 20 × 30 cm.",
        price: 7,
        image: "/images/accesorios/SEÑALETICAS/CO2.png"
      },
      {
        sku: "senaletica-extintor-pqs",
        attrs: { modelo: "extintor-pqs" },
        name: "EXTINTOR PQS",
        description: "Celtex 3 mm – 20 × 30 cm.",
        price: 7,
        image: "/images/accesorios/SEÑALETICAS/PQS.png"
      },
      {
        sku: "senaletica-salida",
        attrs: { modelo: "salida" },
        name: "SALIDA",
        description: "Celtex 3 mm – 30 × 20 cm.",
        price: 7,
        image: "/images/accesorios/SEÑALETICAS/SALIDA.png"
      },
      {
        sku: "senaletica-salida-der",
        attrs: { modelo: "salida-der" },
        name: "SALIDA DERECHA",
        description: "Celtex 3 mm – 20 × 30 cm.",
        price: 7,
        image: "/images/accesorios/SEÑALETICAS/SALIDA_DER.png"
      },
      {
        sku: "senaletica-salida-izq",
        attrs: { modelo: "salida-izq" },
        name: "SALIDA IZQUIERDA",
        description: "Celtex 3 mm – 20 × 30 cm.",
        price: 7,
        image: "/images/accesorios/SEÑALETICAS/SALIDA_IZQ.png"
      },
      {
        sku: "senaletica-zona-segura",
        attrs: { modelo: "zona-segura" },
        name: "ZONA SEGURA",
        description: "Celtex 3 mm – 20 × 30 cm.",
        price: 7,
        image: "/images/accesorios/SEÑALETICAS/ZONA_SEGURA.png"
      }
    ]
  },
  {
    id: "recortador-quirurgico-clipper-3m",
    name: "RECORTADOR QUIRÚRGICO 3M",
    description: "Recortador quirúrgico Clipper 3M para rasurado preoperatorio. Incluye recortador 3M 9681, cargador de mango 3M 9682 y 50 unidades de cuchillas 9680 3M.",
    type: "Herramientas-quirurgicas",
    image: "/images/accesorios/RECORTADORA/KIT.png",

    attributeOrder: ["tipo", "cuchillas"],

    attributes: [
      {
        id: "tipo",
        label: "¿Qué deseas pedir?",
        type: "single",
        values: [
          { id: "kit", label: "Kit Completo" },
          { id: "cuchillas", label: "Cuchillas adicionales" }
        ]
      },
      {
        id: "cuchillas",
        label: "Presentación",
        type: "single",
        cascadeFrom: "tipo",
        values: [
          { id: "caja-50u", label: "Caja 50 U", cascadeValue: "cuchillas" }
        ]
      }
    ],

    variants: [
      {
        sku: "clipper-3m-kit",
        attrs: { tipo: "kit" },
        name: "KIT COMPLETO",
        description: "**Incluye:** recortador 3M 9681, cargador de mango 3M 9682 y 50 unidades de cuchillas 9680 3M.",
        price: 1750,
        image: "/images/accesorios/RECORTADORA/KIT.png"
      },
      {
        sku: "clipper-3m-cuchillas-50u",
        attrs: { tipo: "cuchillas", cuchillas: "caja-50u" },
        name: "CUCHILLAS CLIPPER 3M 9680 – CAJA 50 U",
        description: "Cuchillas de repuesto Clipper Next Generation 3M 9680. Presentación: caja de 50 unidades.",
        price: 1200,
        image: "/images/accesorios/RECORTADORA/CUCHILLA.png"
      }
    ]
  },

  {
    id: "moledor-d-pastillas-triturador-tookan",
    name: "TRITURADOR DE PASTILLAS TOOKAN®",
    description: "Triturador de pastillas Tookan® que reduce comprimidos a polvo fino con mínimo esfuerzo. Incluye bolsitas individuales para evitar pérdidas y contaminación cruzada. Base de acero con tratamiento epoxy, pieza trituradora de aluminio anodizado y ejes de inox.",
    type: "Trituradores",
    image: "/images/accesorios/MOLEDOR TOOKAN/TOOKAN.png",

    attributeOrder: ["tipo", "bolsitas"],

    attributes: [
      {
        id: "tipo",
        label: "¿Qué deseas pedir?",
        type: "single",
        values: [
          { id: "kit", label: "Kit Completo" },
          { id: "bolsitas", label: "Bolsitas adicionales" }
        ]
      },
      {
        id: "bolsitas",
        label: "Presentación",
        type: "single",
        cascadeFrom: "tipo",
        values: [
          { id: "1000u", label: "1000 U", cascadeValue: "bolsitas" }
        ]
      }
    ],

    variants: [
      {
        sku: "tookan-kit",
        attrs: { tipo: "kit" },
        name: "KIT COMPLETO",
        description: "Triturador Tookan® completo. **Incluye:** base de chapa de acero epoxy, asa de poliamida, pieza trituradora de aluminio anodizado, ejes de inox y bolsitas de polietileno transparente (espesor 180/200 µm). || **Dimensiones:** 265 × 75 × 90 mm",
        price: 700,
        image: "/images/accesorios/MOLEDOR TOOKAN/TOOKAN.png"
      },
      {
        sku: "tookan-bolsitas-1000u",
        attrs: { tipo: "bolsitas", bolsitas: "1000u" },
        name: "BOLSITAS TOOKAN® – 1000 U",
        description: "Lote de 1000 bolsitas de repuesto para triturador Tookan®. Polietileno transparente de baja densidad, espesor 180/200 µm. Respetuosas del medio ambiente. || **Dimensiones:** 50 × 100 mm",
        price: 150,
        image: "/images/accesorios/MOLEDOR TOOKAN/BOLSA.png"
      }
    ]
  },
  {
    id: "moledor-partidor-d-pastillas-gen",
    name: "MOLEDOR/PARTIDOR D/PASTILLAS",
    description: "Herramienta práctica y funcional con diseño dos en uno: permite triturar comprimidos y también almacenarlos en un mismo dispositivo.",
    type: "Trituradores",
    image: "/images/accesorios/CARDS/MOLEDOR_GEN.png",

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "tipo-i", label: "Tipo I" },
          { id: "tipo-ii", label: "Tipo II" }
        ]
      }
    ],

    variants: [
      {
        sku: "moledor-accu-care-tipo-i",
        attrs: { tipo: "tipo-i" },
        name: "TIPO I",
        description: "Herramienta práctica y funcional con diseño dos en uno: permite triturar comprimidos y también almacenarlos en un mismo dispositivo. La parte superior está destinada a moler las tabletas hasta convertirlas en polvo fino, ideal para mezclarlas con líquidos o alimentos blandos, mientras que el compartimento inferior sirve como pastillero para guardarlas de forma segura. Incorpora una cubierta de molienda antideslizante que brinda mayor estabilidad y seguridad durante el uso. Es compacta, resistente y fácil de limpiar, ideal para el hogar, hospitales o viajes.",
        price: 15,
        images: [
          "/images/accesorios/MOLEDOR GENERICO/MOLEDOR_GEN.png",
          "/images/accesorios/MOLEDOR GENERICO/MOLEDOR_GEN2.png"
        ]
      },
      {
        sku: "moledor-accu-care-tipo-ii",
        attrs: { tipo: "tipo-ii" },
        name: "TIPO II",
        description: "Dispositivo compacto fabricado en plástico PS resistente con cuchilla de acero inoxidable, diseñado para dividir tabletas con precisión y almacenarlas en un mismo compartimento. Su formato rectangular integra corte, guardado y dispensación en una sola unidad portátil, ideal para el uso diario y especialmente práctico para adultos mayores. Ofrece un sistema de apertura segura, variedad de colores y precisión de corte de hasta 0,1–0,2 cm.",
        price: 15,
        images: [
          "/images/accesorios/MOLEDOR GENERICO/MOLEDOR_GEN3.png"
        ]
      }
    ]
  },

  {
    id: "pilas-eneloop-panasonic",
    name: "PILAS ENELOOP PANASONIC",
    description: "Baterías recargables Ni-MH precargadas en fábrica con energía solar. Fabricadas en Japón, recargables hasta 2 100 veces y listas para usar desde el primer momento.",
    type: "Pilas-y-energia",
    image: "/images/accesorios/CARDS/ENELOOP.png",

    attributeOrder: ["tipo", "paquete"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo de pila",
        type: "single",
        values: [
          { id: "aa", label: "AA" },
          { id: "aaa", label: "AAA" }
        ]
      },
      {
        id: "paquete",
        label: "Paquete",
        type: "single",
        cascadeFrom: "tipo",
        values: [
          { id: "8u", label: "8u", cascadeValue: ["aa", "aaa"] },
          { id: "16u", label: "16u", cascadeValue: ["aa", "aaa"] },
          { id: "24u", label: "24u", cascadeValue: ["aa", "aaa"] }
        ]
      }
    ],

    variants: [
      {
        sku: "eneloop-aa-8",
        attrs: { tipo: "aa", paquete: "8u" },
        name: "AA – 8 PILAS",
        description: "**RENDIMIENTO DE LARGA DURACIÓN:** Recarga hasta 2 100 veces. || **Potencia:** Hasta 2 100 mAh típica · 2 000 mAh mínimo (Ni-MH). || **Precargadas y listas para usar:** Cargadas en fábrica con energía solar; mantienen hasta el 70% de carga tras 10 años sin uso. || **Temperaturas extremas:** Uso desde −20 °C (−4 °F). || **Calidad garantizada:** Fabricadas en Japón. || Ideales para controles remotos, linternas, juguetes, dispositivos inalámbricos, autos RC, flashes de cámara y controladores de juegos.",
        price: 165,
        image: "/images/accesorios/PILAS ENELOOP/AA8.png"
      },
      {
        sku: "eneloop-aa-16",
        attrs: { tipo: "aa", paquete: "16u" },
        name: "AA – 16 PILAS",
        description: "**RENDIMIENTO DE LARGA DURACIÓN:** Recarga hasta 2 100 veces. || **Potencia:** Hasta 2 100 mAh típica · 2 000 mAh mínimo (Ni-MH). || **Precargadas y listas para usar:** Cargadas en fábrica con energía solar; mantienen hasta el 70% de carga tras 10 años sin uso. || **Temperaturas extremas:** Uso desde −20 °C (−4 °F). || **Calidad garantizada:** Fabricadas en Japón. || Ideales para controles remotos, linternas, juguetes, dispositivos inalámbricos, autos RC, flashes de cámara y controladores de juegos.",
        price: 305,
        image: "/images/accesorios/PILAS ENELOOP/AA16.png"
      },
      {
        sku: "eneloop-aa-24",
        attrs: { tipo: "aa", paquete: "24u" },
        name: "AA – 24 PILAS",
        description: "**RENDIMIENTO DE LARGA DURACIÓN:** Recarga hasta 2 100 veces. || **Potencia:** Hasta 2 100 mAh típica · 2 000 mAh mínimo (Ni-MH). || **Precargadas y listas para usar:** Cargadas en fábrica con energía solar; mantienen hasta el 70% de carga tras 10 años sin uso. || **Temperaturas extremas:** Uso desde −20 °C (−4 °F). || **Calidad garantizada:** Fabricadas en Japón. || Ideales para controles remotos, linternas, juguetes, dispositivos inalámbricos, autos RC, flashes de cámara y controladores de juegos.",
        price: 490,
        image: "/images/accesorios/PILAS ENELOOP/AA24.png"
      },
      {
        sku: "eneloop-aaa-8",
        attrs: { tipo: "aaa", paquete: "8u" },
        name: "AAA – 8 PILAS",
        description: "**RENDIMIENTO DURADERO:** Recarga hasta 2 100 veces. || **Potencia:** Hasta 850 mAh típica · 800 mAh mínimo (Ni-MH). || **Precargadas y listas para usar:** Cargadas en fábrica con energía solar; mantienen hasta el 70% de carga tras 10 años sin uso. || **Temperaturas extremas:** Uso desde −20 °C (−4 °F). || **Calidad garantizada:** Fabricadas en Japón. || Ideales para controles remotos, linternas, juguetes, dispositivos inalámbricos, autos RC, flashes de cámara y controladores de juegos.",
        price: 110,
        image: "/images/accesorios/PILAS ENELOOP/AAA8.png"
      },
      {
        sku: "eneloop-aaa-16",
        attrs: { tipo: "aaa", paquete: "16u" },
        name: "AAA – 16 PILAS",
        description: "**RENDIMIENTO DURADERO:** Recarga hasta 2 100 veces. || **Potencia:** Hasta 850 mAh típica · 800 mAh mínimo (Ni-MH). || **Precargadas y listas para usar:** Cargadas en fábrica con energía solar; mantienen hasta el 70% de carga tras 10 años sin uso. || **Temperaturas extremas:** Uso desde −20 °C (−4 °F). || **Calidad garantizada:** Fabricadas en Japón. || Ideales para controles remotos, linternas, juguetes, dispositivos inalámbricos, autos RC, flashes de cámara y controladores de juegos.",
        price: 210,
        image: "/images/accesorios/PILAS ENELOOP/AAA16.png"
      },
      {
        sku: "eneloop-aaa-24",
        attrs: { tipo: "aaa", paquete: "24u" },
        name: "AAA – 24 PILAS",
        description: "**RENDIMIENTO DURADERO:** Recarga hasta 2 100 veces. || **Potencia:** Hasta 850 mAh típica · 800 mAh mínimo (Ni-MH). || **Precargadas y listas para usar:** Cargadas en fábrica con energía solar; mantienen hasta el 70% de carga tras 10 años sin uso. || **Temperaturas extremas:** Uso desde −20 °C (−4 °F). || **Calidad garantizada:** Fabricadas en Japón. || Ideales para controles remotos, linternas, juguetes, dispositivos inalámbricos, autos RC, flashes de cámara y controladores de juegos.",
        price: 300,
        image: "/images/accesorios/PILAS ENELOOP/AAA24.png"
      }
    ]
  },

  {
    id: "cargador-pilas-eneloop-panasonic",
    name: "CARGADOR DE PILAS ENELOOP PANASONIC",
    description: "Cargadores inteligentes Panasonic compatibles con baterías recargables Eneloop y Eneloop Pro AA y AAA. Gestión individual por celda y corte automático al llegar a carga completa.",
    type: "Pilas-y-energia",
    image: "/images/accesorios/CARDS/CARGADOR.png",

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "cc63", label: "BQ-CC63" },
          { id: "cc17", label: "BQ-CC17" },
          { id: "cc55", label: "BQ-CC55" }
        ]
      }
    ],

    variants: [
      {
        sku: "cargador-eneloop-bq-cc63",
        attrs: { modelo: "cc63" },
        name: "BQ-CC63",
        description: "El cargador Panasonic CC63 ofrece carga rápida y eficiente para hasta ocho baterías Eneloop AA o AAA al mismo tiempo, alcanzando tiempos aproximados de 5 horas para AA y 3 horas para AAA. Incorpora tecnología Smart Charge que supervisa y carga cada batería de forma individual, detectando su voltaje y deteniendo el proceso al llegar a la capacidad óptima para prolongar su vida útil. Cuenta con ocho indicadores LED independientes que muestran el estado de cada celda y un práctico cable de alimentación de 6 pies para mayor comodidad. Está optimizado para baterías Eneloop y Eneloop Pro, e incluye el cargador CC63 en un empaque seguro (baterías no incluidas).",
        price: 300,
        images: [
          "/images/accesorios/CARGADOR ENELOOP/BQ-CC63.png",
          "/images/accesorios/CARGADOR ENELOOP/BQ-CC63_2.png"
        ]
      },
      {
        sku: "cargador-eneloop-bq-cc17",
        attrs: { modelo: "cc17" },
        name: "BQ-CC17SBA",
        description: "El cargador Panasonic CC17 está diseñado para recargar baterías Eneloop y Eneloop Pro AA y AAA de manera segura y eficiente. Incorpora un sistema de carga individual que analiza cada batería al instalarla y finaliza automáticamente el proceso cuando alcanza su capacidad total, garantizando un rendimiento óptimo. Dispone de cuatro indicadores LED independientes que muestran el estado de cada estación de carga y un práctico enchufe de CA retráctil que facilita su almacenamiento y transporte. Ofrece tiempos aproximados de carga de 7 horas para baterías AA y hasta 6 horas para AAA completamente descargadas.",
        price: 150,
        images: [
          "/images/accesorios/CARGADOR ENELOOP/BQ-CC17.png",
          "/images/accesorios/CARGADOR ENELOOP/BQ-CC17_2.png"
        ]
      },
      {
        sku: "cargador-eneloop-bq-cc55",
        attrs: { modelo: "cc55" },
        name: "BQ-CC55",
        description: "Este paquete incluye baterías recargables Eneloop AA y AAA junto con el cargador rápido Panasonic CC55, ofreciendo un rendimiento duradero de hasta 2 100 ciclos de recarga. Las pilas AA cuentan con una capacidad típica de 2 000 mAh (mínimo 1 900 mAh) y las AAA con 800 mAh (mínimo 750 mAh), vienen precargadas con energía solar y pueden conservar hasta el 70% de su carga después de 10 años sin uso. El cargador CC55 gestiona cada batería de forma individual para una carga óptima, incorpora cuatro indicadores LED de color que muestran el nivel restante y permite tiempos de carga aproximados de 3 horas para 4 AA y 1,5 horas para 2 AA o 2 AAA. El set se entrega en empaque seguro e incluye 8 baterías AA, 4 AAA y el cargador rápido.",
        price: 380,
        images: [
          "/images/accesorios/CARGADOR ENELOOP/BQ-CC55.png",
          "/images/accesorios/CARGADOR ENELOOP/BQ-CC55_2.png"
        ]
      }
    ]
  },
  {
    id: "cortadora-de-gasa-maimin-59",
    name: "CORTADORA DE GASA MAIMIN 59",
    description: "Es una máquina industrial de cuchilla circular diseñada para realizar cortes precisos y eficientes en materiales textiles y no tejidos, como gasa, algodón, telas sintéticas y otros insumos utilizados en el sector médico e industrial. Equipada con una cuchilla de 5 ¼ pulgadas, ofrece una excelente relación potencia-peso que permite trabajar materiales ligeros y de densidad media con estabilidad y control. Su construcción robusta y componentes de alta calidad garantizan durabilidad, rendimiento constante y cortes limpios en procesos continuos. Es ideal para talleres, plantas de producción y áreas de preparación de material que requieren rapidez, precisión y confiabilidad en cada corte.",
    type: "Cortadoras-de-gasa",
    price: 5000,
    image: "/images/accesorios/CORTADORA MAIMIN/59.png"
  },
  {
    id: "medidor-de-ph-hanna-hi98103",
    name: "MEDIDOR DE PH HANNA HI98103",
    description: "Equipo digital portátil tipo lápiz, diseñado para realizar mediciones rápidas y confiables del nivel de pH en soluciones acuosas, incluyendo agua de piscinas, laboratorios, acuarios y procesos industriales. Ofrece un rango de medición de 0.0 a 14.0 pH con precisión de ±0.2 pH, pantalla LCD de fácil lectura y sistema de calibración manual sencilla. Su diseño compacto y liviano facilita el transporte y uso en campo, convirtiéndolo en una herramienta práctica para el monitoreo rutinario de la calidad del agua.",
    type: "Equipo-de-laboratorio",
    price: 300,
    image: "/images/accesorios/HANNA HI98103/PH.png"
  },
  {
    id: "bomba-de-vacio-pobel-r300",
    name: "BOMBA DE VACÍO POBEL R300 EXENTA DE ACEITE CON CÁNULA",
    description: "Equipo compacto y eficiente diseñado para aplicaciones médicas y clínicas que requieren succión segura y constante. Su sistema exento de aceite garantiza un funcionamiento limpio, silencioso y de bajo mantenimiento, reduciendo el riesgo de contaminación en entornos sanitarios. Es ideal para procedimientos de aspiración de fluidos, apoyo en curaciones, drenajes, pequeñas intervenciones ambulatorias y trabajos de laboratorio clínico que requieran vacío controlado. Incluye cánula para conexión directa, facilitando su uso inmediato en consultorios, centros médicos y áreas hospitalarias donde se necesita un equipo confiable, portátil y de fácil operación.",
    type: "Herramientas-quirurgicas",
    price: 4200,
    image: "/images/accesorios/BOMBA POBEL/POBEL.png"
  },
  {
    id: "colorimetro-hanna-hi701",
    name: "COLORÍMETRO HANNA HI701",
    description: "Colorímetro portátil Hanna HI701 Checker HC para medición de cloro libre en agua. Incluye el equipo y reactivos compatibles HI93701-01.",
    type: "Equipo-de-laboratorio",
    image: "/images/accesorios/COLORIMETRO HANNA/HI701.png",

    attributeOrder: ["tipo", "reactivos"],

    attributes: [
      {
        id: "tipo",
        label: "¿Qué deseas pedir?",
        type: "single",
        values: [
          { id: "kit", label: "Kit Completo" },
          { id: "reactivos", label: "Reactivos adicionales" }
        ]
      },
      {
        id: "reactivos",
        label: "Presentación",
        type: "single",
        cascadeFrom: "tipo",
        values: [
          { id: "100-tests", label: "100 Tests", cascadeValue: "reactivos" }
        ]
      }
    ],

    variants: [
      {
        sku: "hanna-hi701-kit",
        attrs: { tipo: "kit" },
        name: "KIT COMPLETO – HI701",
        description: "El HI701 Checker HC es un colorímetro portátil para medir cloro libre en agua con mayor precisión que los kits químicos convencionales y a menor costo que análisis profesionales. Cuenta con operación de un solo botón y pantalla LCD digital que facilita una lectura clara y rápida, sin interpretación visual de colores. Utiliza el método DPD aprobado por la EPA y es ideal para piscinas, spas, agua potable y control ambiental. Mide en un rango de 0.00 a 2.50 ppm con resolución de 0.01 ppm y alta exactitud. Compacto y ligero, incluye cubetas, reactivos iniciales, batería AAA y accesorios básicos para su uso inmediato.",
        price: 480,
        images: [
          "/images/accesorios/COLORIMETRO HANNA/HI701.png",
          "/images/accesorios/COLORIMETRO HANNA/HI701_2.png"
        ]
      },
      {
        sku: "hanna-hi93701-01-100-tests",
        attrs: { tipo: "reactivos", reactivos: "100-tests" },
        name: "REACTIVOS DE CLORO LIBRE (100 TESTS) – HI93701-01",
        description: "Los HI93701-01 son reactivos diseñados para la determinación colorimétrica de cloro libre mediante el método DPD. Ofrecen capacidad para realizar hasta 100 pruebas y son compatibles con fotómetros portátiles y de mesa de Hanna Instruments. Fabricados bajo altos estándares de calidad, cada paquete está identificado con número de lote y fecha de vencimiento para garantizar trazabilidad y confiabilidad en los resultados.",
        price: 280,
        image: "/images/accesorios/COLORIMETRO HANNA/HI93701-01.png"
      }
    ]
  },
  {
    id: "cortadora-de-gasa-rcs",
    name: "CORTADORA DE GASA RCS",
    description: "Máquina compacta y liviana, 60% más ligera y 50% más pequeña que modelos tradicionales, lo que facilita su manejo y reduce el esfuerzo. Incorpora servomotor de cobre con ahorro energético de hasta 80% y cinco velocidades ajustables que permiten mayor eficiencia y potencia según el tipo de corte, memorizando la configuración al apagarse. No requiere desmontar la cuchilla para afilar, gracias a su sistema integrado de muela abrasiva. Cuenta con base reforzada, rodillo de cobre para deslizamiento suave y diseño que evita atascos. Su batería de 2500 mAh ofrece 2–3 horas de trabajo continuo con carga aproximada de 2 horas.",
    type: "Cortadoras-de-gasa",
    price: 470,
    image: "/images/accesorios/CORTADORA RCS/RCS.png"
  },
  {
    id: "marcador-quirurgico-de-piel",
    name: "MARCADOR QUIRÚRGICO DE PIEL",
    description: "Este bolígrafo médico fue diseñado para marcar regiones específicas de la piel antes de procedimientos clínicos, diagnósticos o quirúrgicos. Cuenta con punta(s) de fibra de poliéster que permiten realizar líneas claras y precisas sobre la piel del paciente o superficies de etiquetas, ayudando a planificar sitios de incisión, demarcar zonas de tratamiento y asegurar la correcta identificación anatómica. Fabricado con estructura de polipropileno y tinta médica no tóxica, cuenta con doble punta, una ultrafina para detalles y otra estándar para marcas visibles.",
    type: "Herramientas-quirurgicas",
    price: 30,
    images: [
      "/images/accesorios/DERMO MARKER/MARKER.png",
      "/images/accesorios/DERMO MARKER/MARKER_2.png"
    ]
  },


  {
    id: "lampara-cuello-de-ganso-ks-q7",
    name: "LÁMPARA CUELLO DE GANSO KS-Q7",
    description: "Lámpara de examen de alto rendimiento con tecnología LED y brazo flexible tipo cuello de ganso de 360°. Disponible en versión de pedestal rodante y montaje en pared.",
    type: "Lamparas-de-examen",
    image: "/images/accesorios/CARDS/KSQ7.png",

    attributes: [
      {
        id: "tipo",
        label: "Tipo de montaje",
        type: "single",
        values: [
          { id: "pedestal", label: "Pedestal rodante" },
          { id: "pared", label: "Montaje en pared" }
        ]
      }
    ],

    variants: [
      {
        sku: "ks-q7-pedestal",
        attrs: { tipo: "pedestal" },
        name: "PEDESTAL RODANTE",
        description: "Lámpara de examen sobre base móvil con brazo cuello de ganso de 360° de 76 cm. Ideal para UCI, cirugía menor, emergencias y ginecología. || **Potencia:** 10 W · 7× LED || **Intensidad:** 65 000 lx (D=50 cm) · 22 000 lx (D=100 cm) || **Temperatura de color:** 4 800–5 500 K · **CRI:** 90 Ra || **Vida útil LED:** 50 000 h || **Voltaje:** 110–260 V 50/60 Hz · **Base:** DM02 metal desmontable",
        price: 500,
        image: "/images/accesorios/KSQ7/RODANTE.png"
      },
      {
        sku: "ks-q7-pared",
        attrs: { tipo: "pared" },
        name: "MONTAJE EN PARED",
        description: "Lámpara de examen de pared con 7 LEDs sin IR, cabezal ancho y mango extendido para cirugía exigente. Brazo articulado de largo alcance sin ángulo muerto. Ideal para E.N.T., Oftalmología, Ginecología, cirugía menor y consultorios. || **Potencia:** 15 W · 7× LED || **Intensidad:** 100 000 lx (D=50 cm) · 22 000 lx (D=100 cm) || **Temperatura de color:** 3 500–5 000 K · **CRI:** 90 Ra || **Brazo:** Cuello de ganso 760 cm + poste acero inox. 74 cm || **Voltaje:** 100–260 V 50/60 Hz · **Enchufe:** AC/DC intercambiable (Q7E)",
        price: 600,
        image: "/images/accesorios/KSQ7/PARED.png"
      }
    ]
  },
  {
    id: "lampara-cuello-tipo-ganso-ks-q6",
    name: "LAMPARA CUELLO TIPO GANSO KS-Q6",
    description: "La lámpara de Wood es un equipo de luz ultravioleta diseñado para la evaluación dermatológica. Cuenta con aumento de 3 dioptrías y permite identificar alteraciones cutáneas mediante fluorescencia, ya que la piel sana no emite brillo bajo esta luz, mientras que ciertas infecciones y trastornos pigmentarias sí lo hacen. Funciona con una longitud de onda aproximada entre 320 y 400 nm, lo que facilita la detección de cambios sutiles en la pigmentación. Es un método no invasivo utilizado por profesionales, aplicando la lámpara a unos 10–12 cm del área a examinar en un entorno oscuro.",
    type: "Lamparas-de-examen",
    price: 168,
    images: ["/images/accesorios/KSQ6/LAMP_GANSO.png",
      "/images/accesorios/KSQ6/LAMP_GANSO2.png"]
  },
  {
    id: "test-desarrollo-psicomotor",
    name: "TEST DE DESARROLLO PSICOMOTOR",
    type: "Diagnóstico",
    description: "Kits de evaluación del desarrollo psicomotor infantil. Disponible en versiones EEDP (0–21 meses), TEPSI (2–5 años) y TAP (Test Abreviado Peruano).",
    image: "/images/accesorios/TESTS/TEST_EEDP.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Test",
        type: "single",
        values: [
          { id: "eedp", label: "EEDP (0–21 meses)" },
          { id: "tepsi", label: "TEPSI (2–5 años)" },
          { id: "tap", label: "TAP" }
        ]
      }
    ],

    variants: [
      {
        sku: "test-eedp",
        attrs: { modelo: "eedp" },
        name: "EEDP – Escala de Evaluación del Desarrollo Psicomotor (0–21 meses)",
        description: "Kit completo que incluye: campanilla de metal, argolla roja de 12 cm con cordel, cuchara de plástico, 10 cubos rojos de madera, pastilla de plástico, pañal, botella, hoja de papel, lápiz de cera, palo desglosable de 41 cm, muñeca en papel plastificado y caja de madera con tapa o mochila de lona.",
        price: 186,
        image: "/images/accesorios/TESTS/TEST_EEDP.png"
      },
      {
        sku: "test-tepsi",
        attrs: { modelo: "tepsi" },
        name: "TEPSI – Test de Desarrollo Psicomotor (2–5 años)",
        description: "Kit completo que incluye: 2 vasos de plástico, pelota de tenis, 12 cubos de madera, estuche de tela con botones, aguja de lana, hilo de nylon, tableros de madera, cordón, lápiz, bolsas de tela con relleno, 3 cuadrados de colores, cuadernillo de 17 láminas, 3 globos y maletín con 3 divisiones.",
        price: 210,
        image: "/images/accesorios/TESTS/TEST_TEPSI.png"
      },
      {
        sku: "test-tap",
        attrs: { modelo: "tap" },
        name: "TAP – Test Abreviado Peruano",
        description: "Kit completo que incluye: pelota de plástico, 7 cubos de madera rojos, pañal de algodón, frijoles, caja de cartón, frasco acrílico transparente, linterna tipo lapicero, espejo de 40×40 cm, hoja A4, 2 plumones, campanilla de bronce, juguete con ruedas, carrito de plástico, sonaja, juego de vástago con 6 aros multicolor y libro de figuras plásticas A4.",
        price: 234,
        image: "/images/accesorios/TESTS/TEST_TAP.png"
      }
    ]
  },

  {
    id: "esterilizador-cuchillos-uv",
    name: "ESTERILIZADOR DE CUCHILLOS UV",
    type: "Accesorios",
    description: "Gabinete esterilizador de cuchillos por tecnología UV-C para uso comercial y hospitalario. Elimina el 99.9% de bacterias, virus y microorganismos. Disponible en 3 modelos.",
    image: "/images/accesorios/CORTADOR/ESTERILIZADOR_CUCHILLOS.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "mod1", label: "Modelo 1 – Vertical Multifunción" },
          { id: "mod2", label: "Modelo 2 – Acero Inoxidable Mural" },
          { id: "mod3", label: "Modelo 3 – Heavybao" }
        ]
      }
    ],

    variants: [
      {
        sku: "esteril-uv-mod1",
        attrs: { modelo: "mod1" },
        name: "Modelo 1 ",
        description: "Gabinete esterilizador vertical portátil de uso comercial. Tecnología UV-C con ciclo de esterilización de 30 minutos. Puerta con panel acrílico anti-radiación que bloquea la salida de luz UV. Apagado automático al abrir la puerta. Temporizador ajustable. Estructura metálica con acabado inoxidable. Ideal para cocinas comerciales, hospitales y laboratorios.",
        price: 1800,
        image: "/images/accesorios/CORTADOR/ESTERILIZADOR_CUCHILLOS.png"
      },
      {
        sku: "esteril-uv-mod2",
        attrs: { modelo: "mod2" },
        name: "Modelo 2 ",
        description: "Gabinete esterilizador de acero inoxidable para montaje en pared. Lámpara UV germicidal de 15W. Temporizador de 0 a 60 minutos (tiempo recomendado: 30 min). Puerta de acrílico filtrante anti-UV. Sistema de corte automático al abrir la puerta. 3 orificios para fijación mural. Rack o barra magnética para soporte de cuchillos.",
        price: 1200,
        image: "/images/accesorios/CORTADOR/ESTERILIZADOR_CUCHILLOS_3.png"
      },
      {
        sku: "esteril-uv-mod3",
        attrs: { modelo: "mod3" },
        name: "Modelo 3",
        description: "Gabinete esterilizador de sobremesa. Tecnología UV-C + ozono que elimina el 99.9% de microorganismos. Control semiintegrado de fácil uso. Estructura en acero inoxidable SS 201 con puerta de acrílico anti-radiación. Ciclo de desinfección de 10 a 30 minutos. Certificación CE y RoHS. Dimensiones: 350 × 125 × 590 mm.",
        price: 1200,
        image: "/images/accesorios/CORTADOR/ESTERILIZADOR_CUCHILLOS_2.png"
      }
    ]
  },
];

