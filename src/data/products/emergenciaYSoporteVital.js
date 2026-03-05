// src/data/products/emergenciaYSoporteVital.js

export const emergenciaYSoporteVitalProducts = [

  {
    id: "inmovilizador-de-cabeza-cms-16a",
    name: "INMOVILIZADOR DE CABEZA CMS-16A",
    description: "Diseñado para brindar estabilización segura en pacientes con sospecha de lesión cervical durante traslados y atención prehospitalaria. Fabricado en materiales de alta densidad, ofrece firmeza y resistencia, mientras que sus amplios orificios laterales permiten el monitoreo del canal auditivo sin necesidad de retirar el dispositivo. Es compatible con camilla cuchara y camilla rígida, garantizando versatilidad en distintos escenarios de emergencia.",
    price: 240,
    image: "/images/emergencia/INMOVILIZADOR/CMS.png"
  },

  {
    id: "maletin-de-emergencia",
    name: "MALETÍN DE EMERGENCIA",
    description: "Fabricado en Oxford cloth reforzado, resistente a desgarros, con forro acolchado de espuma PE, costuras reforzadas, cremalleras robustas, pies antideslizantes y bandas reflectantes para mayor seguridad y durabilidad. Incluye 3 divisores acolchados extraíbles, creando 4 secciones organizadas, además de 2 minibolsas desmontables para insumos pequeños. Incorpora múltiples bolsillos: compartimento frontal con bandas elásticas para instrumental, 4 bolsillos transparentes para visualización rápida y amplios bolsillos laterales y traseros. || **Dimensiones: 29 x 45 x 33 cm**",
    image: "/images/emergencia/MALETIN/M1.png",

    attributes: [
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "rojo", label: "Rojo" },
          { id: "azul", label: "Azul" }
        ]
      }
    ],

    variants: [
      {
        sku: "maletin-emergencia-rojo",
        attrs: { color: "rojo" },
        name: "MALETÍN DE EMERGENCIA – ROJO",
        description: "Fabricado en Oxford cloth reforzado, resistente a desgarros, con forro acolchado de espuma PE, costuras reforzadas, cremalleras robustas, pies antideslizantes y bandas reflectantes para mayor seguridad y durabilidad. Incluye 3 divisores acolchados extraíbles, creando 4 secciones organizadas, además de 2 minibolsas desmontables para insumos pequeños. Incorpora múltiples bolsillos: compartimento frontal con bandas elásticas para instrumental, 4 bolsillos transparentes para visualización rápida y amplios bolsillos laterales y traseros. || **Dimensiones: 29 x 45 x 33 cm**",
        price: 150,
        images: [
          "/images/emergencia/MALETIN/M1.png",
          "/images/emergencia/MALETIN/M2.png",
          "/images/emergencia/MALETIN/M3.png"
        ]
      },
      {
        sku: "maletin-emergencia-azul",
        attrs: { color: "azul" },
        name: "MALETÍN DE EMERGENCIA – AZUL",
        description: "Fabricado en Oxford cloth reforzado, resistente a desgarros, con forro acolchado de espuma PE, costuras reforzadas, cremalleras robustas, pies antideslizantes y bandas reflectantes para mayor seguridad y durabilidad. Incluye 3 divisores acolchados extraíbles, creando 4 secciones organizadas, además de 2 minibolsas desmontables para insumos pequeños. Incorpora múltiples bolsillos: compartimento frontal con bandas elásticas para instrumental, 4 bolsillos transparentes para visualización rápida y amplios bolsillos laterales y traseros. || **Dimensiones: 29 x 45 x 33 cm**",
        price: 150,
        image: "/images/emergencia/MALETIN/M4.png"
      }
    ]
  },
  {
    id: "maletin-de-emergencia-plastico-c-divisiones-flambeau",
    name: "MALETIN DE EMERGENCIA PLASTICO C/DIVISIONES FLAMBEAU",
    description: "Sistema de almacenamiento con diseño de 7 bandejas plegables, configurable hasta en 61 compartimentos divisibles, ideal para la organización eficiente de insumos médicos, instrumental, material de curación y pequeños dispositivos. Su capacidad XL permite almacenar suministros adicionales en el espacio interior, e incorpora áreas específicas para herramientas y 2 portavasos moldeados en la tapa que pueden destinarse a soluciones o frascos de uso frecuente. || Dimensiones: 50.8 x 30.5 x 27.3 cm",
    price: 350,
    images: ["/images/emergencia/FLAMBEAU/F1.png",
      "/images/emergencia/FLAMBEAU/F2.png"]
  },

  {
    id: "mochila-de-emergencia-primacare-kp-4183",
    name: "MOCHILA DE EMERGENCIA",
    description: "fabricada en tela Oxford resistente, con base impermeable y cremalleras duraderas que garantizan protección y larga vida útil en entornos exigentes. Incorpora 4 bolsillos externos, ventana para tarjeta de identificación y correas con hebilla a nivel del pecho para mayor estabilidad y comodidad durante el traslado. Su interior está organizado en compartimentos separados con 9 bolsas internas de diferentes colores y vista transparente, facilitando la rápida identificación y clasificación de insumos médicos y equipos. Incluye bandas reflectivas amarillas para mayor visibilidad en situaciones de baja iluminación y es compatible con cilindros de oxígeno M4, M6 y M9, siendo ideal para brigadas médicas, primeros respondedores y unidades de rescate. || Dimensiones: 43 x 15 x 23 cm",
    price: 350,
    images: ["/images/emergencia/PRIMACARE/PK1.png",
      "/images/emergencia/PRIMACARE/PK2.png",
      "/images/emergencia/PRIMACARE/PK3.png"]
  },
  {
    id: "sujetador-inmovilizador-de-brazos-para-cama",
    name: "SUJETADOR DE MANOS Y PIES",
    description: "Dispositivo de inmovilización para extremidades x4 diseñado para ofrecer sujeción segura en muñecas y tobillos durante procedimientos clínicos o situaciones que requieran control del movimiento. Fabricado con esponja gruesa de alta densidad, suave, transpirable y amigable con la piel, brinda comodidad prolongada sin deformarse fácilmente, garantizando durabilidad y larga vida útil. Incorpora anillo metálico de fijación resistente, sistema antideslizante y correa ajustable con velcro, permitiendo un ajuste firme, estable y adaptable a diferentes tamaños, contribuyendo a reducir la tensión y mejorar la seguridad del paciente.",
    price: 50,
    images: ["/images/emergencia/SUJETADOR/S1.png",
      "/images/emergencia/SUJETADOR/S2.png",
      "/images/emergencia/SUJETADOR/S3.png",
      "/images/emergencia/SUJETADOR/S4.png"]
  },

  {
    id: "resucitador-besmed",
    name: "RESUCITADORES BESMED",
    description: "Resucitadores manuales Besmed para adulto, pediátrico y neonatal. Diseñados para ventilación asistida en emergencias con válvula unidireccional y conexión para oxígeno suplementario.",
    image: "/images/emergencia/BESMED/ADULTO.png",

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "adulto", label: "Adulto" },
          { id: "pediatrico", label: "Pediátrico" },
          { id: "neonatal", label: "Neonatal" }
        ]
      }
    ],

    variants: [
      {
        sku: "resucitador-besmed-re-25186-adulto",
        attrs: { tipo: "adulto" },
        name: "ADULTO BESMED RE-25186",
        description: "Fabricado en silicona 100% grado médico, libre de látex y esterilizable en autoclave hasta 134 °C, está diseñado para pacientes adultos. Incluye Resucitador manual silicona reutilizable con asa adulto 1600ml, Mascara de silicona N° 5, Bolsa oxígeno, 2.5L, Tubo de oxígeno desechable de 2M, Válvula peed durable de 5-20cm H2O (15mm) azul y Estuche de almacenamiento.",
        price: 290,
        image: "/images/emergencia/BESMED/ADULTO.png"
      },
      {
        sku: "resucitador-besmed-re-25246-pediatrico",
        attrs: { tipo: "pediatrico" },
        name: "PEDIÁTRICO BESMED RE-25246",
        description: "Fabricado en silicona 100% grado médico, libre de látex y esterilizable en autoclave hasta 134 °C, está diseñado para pacientes pediátricos. Incluye Resucitador manual silicona reutilizable con asa pediátrica 500ml, Mascara de silicona N° 3, Bolsa oxígeno, 2.5L, Tubo de oxígeno desechable de 2M, Válvula peed durable de 2-10cm H2O (15mm) naranja y Estuche de almacenamiento.",
        price: 290,
        image: "/images/emergencia/BESMED/PEDIATRICO.png"
      },
      {
        sku: "resucitador-besmed-re-25346-neonatal",
        attrs: { tipo: "neonatal" },
        name: "NEONATAL BESMED RE-25346",
        description: ".",
        description: "Fabricado en silicona 100% grado médico, libre de látex y esterilizable en autoclave hasta 134 °C, está diseñado para pacientes menores de 7 kg. Incluye Resucitador manual silicona reutilizable con asa neonatal 280ml, Mascara de silicona N° 1, Bolsa oxígeno, 1.0L, Tubo de oxígeno desechable de 2M, Válvula peed durable de 2-10cm H2O (15mm) naranja y Estuche de almacenamiento.",
        price: 290,
        image: "/images/emergencia/BESMED/NEONATAL.png"
      }
    ]
  },

  {
    id: "mascarilla-silicona-resucitador-besmed",
    name: "MASCARILLA DE SILICONA PARA RESUCITADOR BESMED",
    description: "Mascarillas de silicona reutilizables para resucitador Besmed, disponibles en tallas 00 a 05 para neonatos, pediátricos y adultos.",
    image: "/images/emergencia/CARD/ADULTOS.jpg",

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "talla-00", label: "Talla 00" },
          { id: "talla-0", label: "Talla 0" },
          { id: "talla-02", label: "Talla 02" },
          { id: "talla-03", label: "Talla 03" },
          { id: "talla-04", label: "Talla 04" },
          { id: "talla-05", label: "Talla 05" }
        ]
      }
    ],

    variants: [
      {
        sku: "mascarilla-besmed-talla-00",
        attrs: { talla: "talla-00" },
        name: "TALLA 00",
        description: "Mascarilla de silicona para resucitador Besmed – Talla 00 (neonatal).",
        price: 39.6,
        image: "/images/emergencia/BESMED/MENORES.jpg"
      },
      {
        sku: "mascarilla-besmed-talla-0",
        attrs: { talla: "talla-0" },
        name: "TALLA 0",
        description: "Mascarilla de silicona para resucitador Besmed – Talla 0 (neonatal/lactante).",
        price: 42,
        image: "/images/emergencia/BESMED/MENORES.jpg"
      },
      {
        sku: "mascarilla-besmed-talla-02",
        attrs: { talla: "talla-02" },
        name: "TALLA 02",
        description: "Mascarilla de silicona para resucitador Besmed – Talla 02 (pediátrica pequeña).",
        price: 45.6,
        image: "/images/emergencia/BESMED/MENORES.jpg"
      },
      {
        sku: "mascarilla-besmed-talla-03",
        attrs: { talla: "talla-03" },
        name: "TALLA 03",
        description: "Mascarilla de silicona para resucitador Besmed – Talla 03 (pediátrica mediana).",
        price: 50.4,
        image: "/images/emergencia/BESMED/ADULTOS.jpg"
      },
      {
        sku: "mascarilla-besmed-talla-04",
        attrs: { talla: "talla-04" },
        name: "TALLA 04",
        description: "Mascarilla de silicona para resucitador Besmed – Talla 04 (adulto pequeño).",
        price: 54,
        image: "/images/emergencia/BESMED/ADULTOS.jpg"
      },
      {
        sku: "mascarilla-besmed-talla-05",
        attrs: { talla: "talla-05" },
        name: "TALLA 05",
        description: "Mascarilla de silicona para resucitador Besmed – Talla 05 (adulto estándar).",
        price: 54,
        image: "/images/emergencia/BESMED/ADULTOS.jpg"
      }
    ]
  },
  {
    id: "juego-de-ferulas-6-pza",
    name: "JUEGO DE FÉRULAS 6 PZA",
    description: "Kit de 6 férulas para inmovilización de extremidades en situaciones de emergencia. Disponibles en material EVA rígido e inflables.",
    image: "/images/emergencia/FERULAS/F1.png",

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "eva", label: "Férulas EVA" },
          { id: "inflables", label: "Férulas Inflables" }
        ]
      }
    ],

    variants: [
      {
        sku: "ferulas-eva-6pza",
        attrs: { tipo: "eva" },
        name: "FÉRULAS EVA – 6 PZA",
        description: "Fabricado en material EVA de alta resistencia, ligero y fácil de limpiar, diseñado para brindar inmovilización rápida y eficaz en situaciones de primeros auxilios deportivos, rescate contra incendios, accidentes de tránsito y tratamiento de fracturas. El kit incluye 6 tamaños diferentes para una cobertura completa: pierna adulto (83 cm), pierna niño (70 cm), brazo adulto (69 cm), codo adulto (37 cm), brazo niño (33 cm) y antebrazo adulto (33 cm), facilitando una atención versátil en entornos prehospitalarios y de emergencia.",
        price: 200,
        images: [
          "/images/emergencia/FERULAS/F1.png",
          "/images/emergencia/FERULAS/F2.png"
        ]
      },
      {
        sku: "ferulas-inflables-6pza",
        attrs: { tipo: "inflables" },
        name: "FÉRULAS INFLABLES – 6 PZA",
        description: "Permiten inflado y ajuste según la forma del cuerpo, asegurando una fijación firme y precisa en casos de fracturas y lesiones traumáticas. Son fáciles de operar y transportar, requiriendo mínima capacitación para su uso en situaciones de emergencia. Proporcionan efecto analgésico por compresión uniforme, ayudan en la hemostasia y contribuyen a disminuir la aparición de edemas e infecciones. Son permeables a rayos X, permitiendo evaluaciones radiológicas sin necesidad de retirarlas. Su diseño desinflable facilita almacenamiento compacto, y pueden ajustarse para uso pediátrico (media pierna o pierna completa), incorporando cremallera para liberación rápida y segura.",
        price: 200,
        images: [
          "/images/emergencia/FERULAS/F3.png",
          "/images/emergencia/FERULAS/F4.png"
        ]
      }
    ]
  },
  {
    id: "estuche-para-camilla-rigida",
    name: "ESTUCHE PARA CAMILLA RIGIDA",
    description: "Diseñado para resguardar y transportar de forma segura el equipo en entornos de emergencia. Fabricado en material resistente y de alta durabilidad, protege contra polvo, humedad y desgaste durante el almacenamiento o traslado. Cuenta con ventana superior transparente que permite identificar fácilmente el contenido sin necesidad de abrirlo, además de bandas reflectivas que mejoran la visibilidad en condiciones de poca luz. Incorpora sistema de cierre seguro y correas de sujeción para un ajuste firme a la camilla.",
    price: 156,
    image: "/images/emergencia/CAMILLAS/ESTUCHE.png"
  },
  {
    id: "correas-tipo-spider-para-camilla-rigida",
    name: "CORREAS TIPO SPIDER PARA CAMILLA RIGIDA",
    description: "Sistema de inmovilización tipo correa de araña diseñado para proporcionar sujeción corporal completa durante el traslado de pacientes en tabla espinal. Cuenta con diez puntos de fijación, permitiendo una adaptación firme en las áreas de hombros y pies para una estabilización segura y eficiente.",
    price: 60,
    image: "/images/emergencia/CAMILLAS/CORREA.png"
  },
  {
    id: "collarin-cervical-pediatrico-mini-perfit",
    name: "COLLARIN CERVICAL PEDIATRICO MINI PERFIT",
    description: "COLLARIN CERVICAL PEDIATRICO MINI PERFIT",
    price: 127.44,
    image: "/images/emergencia/MINI PERFIT/MINIPERFIT.png"
  },
  {
    id: "collarin-cervical-adulto-ambu-perfit-ace",
    name: "COLLARIN CERVICAL ADULTO AMBU PERFIT ACE",
    description: "COLLARIN CERVICAL ADULTO AMBU PERFIT ACE",
    price: 168,
    image: "/images/emergencia/PERFIT/PERFIT.png"
  },
  {
    id: "collarin-cervical-adulto-ambu-perfit-ace",
    name: "COLLARIN CERVICAL ADULTO AMBU PERFIT ACE",
    description: "COLLARIN CERVICAL ADULTO AMBU PERFIT ACE",
    price: 168,
    image: "/images/emergencia/placeholder.png"
  },
  {
    id: "collarin-cervical-adulto-ambu-perfit-ace",
    name: "COLLARIN CERVICAL ADULTO AMBU PERFIT ACE",
    description: "COLLARIN CERVICAL ADULTO AMBU PERFIT ACE",
    price: 168,
    image: "/images/emergencia/placeholder.png"
  },
  {
    id: "collarin-cervical-adulto-ambu-perfit-ace",
    name: "COLLARIN CERVICAL ADULTO AMBU PERFIT ACE",
    description: "COLLARIN CERVICAL ADULTO AMBU PERFIT ACE",
    price: 168,
    image: "/images/emergencia/placeholder.png"
  },
  {
    id: "collarin-cervical-adulto-ambu-perfit-ace",
    name: "COLLARIN CERVICAL ADULTO AMBU PERFIT ACE",
    description: "COLLARIN CERVICAL ADULTO AMBU PERFIT ACE",
    price: 168,
    image: "/images/emergencia/placeholder.png"
  },
  {
    id: "reservorio-silicona-besmed",
    name: "RESERVORIO DE SILICONA BESMED",
    description: "Reservorios de silicona biocompatible para recolección de fluidos en aplicaciones clínicas, hospitalarias y de emergencia. Disponibles en capacidades de 2.0L y 1.0L.",
    image: "/images/emergencia/BESMED/bolsas.jpg",

    attributes: [
      {
        id: "capacidad",
        label: "Capacidad",
        type: "single",
        values: [
          { id: "2l", label: "2.0 L" },
          { id: "1l", label: "1.0 L" }
        ]
      }
    ],

    variants: [
      {
        sku: "reservorio-besmed-br-62320-2l",
        attrs: { capacidad: "2l" },
        name: "RESERVORIO DE SILICONA 2.0L – BR-62320",
        description: "Con capacidad de 2,0 litros, diseñado para recolección de fluidos en aplicaciones clínicas y hospitalarias. Fabricado en silicona biocompatible, ofrece flexibilidad, resistencia química y durabilidad, ideal para sistemas de succión, drenaje y recolección en procedimientos quirúrgicos, de emergencia y de cuidados intensivos.",
        price: 50,
        image: "/images/emergencia/BESMED/bolsas.jpg"
      },
      {
        sku: "reservorio-besmed-br-62310-1l",
        attrs: { capacidad: "1l" },
        name: "RESERVORIO DE SILICONA 1.0L – BR-62310",
        description: "Con capacidad de 1,0 litro, indicado para recolección de líquidos en procedimientos sanitarios, atención de emergencia y entorno hospitalario. Fabricado en silicona flexible y resistente, proporciona una manipulación segura y alta tolerancia a la deformación, asegurando un rendimiento constante bajo uso clínico continuo.",
        price: 50,
        image: "/images/emergencia/BESMED/bolsas.jpg"
      }
    ]
  },
  {
    id: "cesta-de-evacuaci-n-de-trineo-mediano-mochila-o2-24",
    name: "CESTA DE EVACUACIÓN DE TRINEO MEDIANO + MOCHILA O2 24\"",
    description: "CESTA DE EVACUACIÓN DE TRINEO MEDIANO + MOCHILA O2 24\"",
    price: 1080,
    image: "/images/emergencia/placeholder.png"
  },
  {
    id: "tablero-rigido-columna",
    name: "TABLERO RÍGIDO PARA COLUMNA",
    description: "Tablas espinales rígidas de plástico de alta resistencia para inmovilización y traslado seguro de pacientes con posible lesión de columna. Disponibles en color amarillo y anaranjado.",
    image: "/images/emergencia/CAMILLAS/AMARILLA.png",

    attributes: [
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "amarillo", label: "Amarillo" },
          { id: "anaranjado", label: "Anaranjado" }
        ]
      }
    ],

    variants: [
      {
        sku: "tablero-rigido-amarillo",
        attrs: { color: "amarillo" },
        name: "TABLERO RÍGIDO AMARILLO",
        description: "Tabla espinal rígida de plástico de alta resistencia para inmovilización y traslado seguro de pacientes con posible lesión de columna. Superficie firme y fácil de limpiar, compatible con sistemas de sujeción y accesorios de inmovilización.",
        price: 200,
        image: "/images/emergencia/CAMILLAS/AMARILLA.png"
      },
      {
        sku: "tablero-rigido-anaranjado",
        attrs: { color: "anaranjado" },
        name: "TABLERO RÍGIDO ANARANJADO",
        description: "Tablero espinal ligero y portátil de plástico rígido, diseñado para la inmovilización temporal de pacientes con trauma espinal. Incluye múltiples agarres para facilitar el transporte y es fácil de desinfectar.",
        price: 200,
        image: "/images/emergencia/CAMILLAS/NARANJA.png"
      }
    ]
  },
];

