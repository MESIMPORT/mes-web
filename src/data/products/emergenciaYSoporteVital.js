// src/data/products/emergenciaYSoporteVital.js

export const emergenciaYSoporteVitalProducts = [

  // ─── 1. INMOVILIZADOR DE CABEZA CMS-16A ─────────────────────────────────────
  {
    id: "inmovilizador-de-cabeza-cms-16a",
    name: "INMOVILIZADOR DE CABEZA CMS-16A",
    type: "Inmovilizacion",
    description: "Dispositivo de inmovilización cefálica diseñado para brindar estabilización segura en pacientes con sospecha de lesión cervical durante traslados y atención prehospitalaria. Fabricado en materiales de alta densidad que ofrecen firmeza y resistencia, con amplios orificios laterales que permiten el monitoreo del canal auditivo sin necesidad de retirar el dispositivo. Compatible con camilla cuchara y camilla rígida, garantizando versatilidad en distintos escenarios de emergencia.",
    price: 240,
    image: "/images/emergencia/INMOVILIZADOR/CMS.png"
  },

  // ─── 2. MALETÍN DE EMERGENCIA ────────────────────────────────────────────────
  {
    id: "maletin-de-emergencia",
    name: "MALETÍN DE EMERGENCIA",
    type: "Maletines-y-mochilas",
    description: "Maletín de emergencia fabricado en Oxford cloth reforzado, resistente a desgarros, con forro acolchado de espuma PE, costuras reforzadas, cremalleras robustas, pies antideslizantes y bandas reflectantes. Incluye 3 divisores acolchados extraíbles que crean 4 secciones organizadas, 2 minibolsas desmontables para insumos pequeños, compartimento frontal con bandas elásticas para instrumental, 4 bolsillos transparentes para visualización rápida y amplios bolsillos laterales y traseros. || Dimensiones: 29 × 45 × 33 cm | Colores: Rojo / Azul.",
    image: "/images/emergencia/MALETIN/M1.png",

    attributeOrder: ["color"],

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
        description: "Maletín de emergencia Oxford cloth reforzado, color rojo. 3 divisores extraíbles, 4 secciones, 2 minibolsas desmontables, bolsillos transparentes y bandas reflectantes. || Color: Rojo | Dimensiones: 29 × 45 × 33 cm.",
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
        description: "Maletín de emergencia Oxford cloth reforzado, color azul. 3 divisores extraíbles, 4 secciones, 2 minibolsas desmontables, bolsillos transparentes y bandas reflectantes. || Color: Azul | Dimensiones: 29 × 45 × 33 cm.",
        price: 150,
        image: "/images/emergencia/MALETIN/M4.png"
      }
    ]
  },

  // ─── 3. MALETÍN FLAMBEAU ─────────────────────────────────────────────────────
  {
    id: "maletin-de-emergencia-plastico-c-divisiones-flambeau",
    name: "MALETIN DE EMERGENCIA PLASTICO C/DIVISIONES FLAMBEAU",
    type: "Maletines-y-mochilas",
    description: "Sistema de almacenamiento Flambeau con diseño de 7 bandejas plegables, configurable hasta en 61 compartimentos divisibles, ideal para organización eficiente de insumos médicos, instrumental, material de curación y pequeños dispositivos. Capacidad XL para suministros adicionales en el espacio interior, áreas específicas para herramientas y 2 portavasos moldeados en la tapa para soluciones o frascos de uso frecuente. || Dimensiones: 50.8 × 30.5 × 27.3 cm.",
    price: 350,
    images: [
      "/images/emergencia/FLAMBEAU/F1.png",
      "/images/emergencia/FLAMBEAU/F2.png"
    ]
  },

  // ─── 4. MOCHILA DE EMERGENCIA PRIMACARE ──────────────────────────────────────
  {
    id: "mochila-de-emergencia-primacare-kp-4183",
    name: "MOCHILA DE EMERGENCIA PRIMACARE KP-4183",
    type: "Maletines-y-mochilas",
    description: "Mochila de emergencia Primacare KP-4183 fabricada en tela Oxford resistente con base impermeable y cremalleras duraderas. Incorpora 4 bolsillos externos, ventana para tarjeta de identificación y correas con hebilla a nivel del pecho para estabilidad durante el traslado. Interior organizado en compartimentos separados con 9 bolsas internas de diferentes colores y vista transparente para identificación rápida de insumos. Incluye bandas reflectivas amarillas para visibilidad en baja iluminación. Compatible con cilindros de oxígeno M4, M6 y M9. || Dimensiones: 43 × 15 × 23 cm.",
    price: 350,
    images: [
      "/images/emergencia/PRIMACARE/PK1.png",
      "/images/emergencia/PRIMACARE/PK2.png",
      "/images/emergencia/PRIMACARE/PK3.png"
    ]
  },

  // ─── 5. SUJETADOR DE MANOS Y PIES ────────────────────────────────────────────
  {
    id: "sujetador-inmovilizador-de-brazos-para-cama",
    name: "SUJETADOR DE MANOS Y PIES",
    type: "Inmovilizacion",
    description: "Dispositivo de inmovilización para extremidades × 4 unidades, diseñado para sujeción segura de muñecas y tobillos durante procedimientos clínicos o situaciones que requieran control del movimiento. Fabricado con esponja gruesa de alta densidad, suave, transpirable y amigable con la piel. Incorpora anillo metálico de fijación resistente, sistema antideslizante y correa ajustable con velcro para ajuste firme y adaptable a diferentes tamaños.",
    price: 50,
    images: [
      "/images/emergencia/SUJETADOR/S1.png",
      "/images/emergencia/SUJETADOR/S2.png",
      "/images/emergencia/SUJETADOR/S3.png",
      "/images/emergencia/SUJETADOR/S4.png"
    ]
  },

  // ─── 6. RESUCITADORES BESMED ─────────────────────────────────────────────────
  {
    id: "resucitador-besmed",
    name: "RESUCITADORES BESMED",
    type: "Resucitadores",
    description: "Resucitadores manuales Besmed fabricados en silicona 100% grado médico, libres de látex y esterilizables en autoclave hasta 134 °C. Disponibles en versión adulto (1600 ml), pediátrico (500 ml) y neonatal (280 ml) para ventilación asistida en emergencias. Incluyen válvula unidireccional PEEP, bolsa de oxígeno, tubo de oxígeno y mascarilla de silicona según talla. Compatibles con oxígeno suplementario.",
    image: "/images/emergencia/BESMED/ADULTO.png",

    attributeOrder: ["tipo"],

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
        description: "Resucitador manual Besmed para adulto, silicona 100% grado médico, libre de látex, esterilizable en autoclave hasta 134 °C. Incluye resucitador con asa 1600 ml, mascarilla silicona N° 5, bolsa oxígeno 2.5 L, tubo oxígeno desechable 2 m, válvula PEEP 5–20 cmH2O (azul) y estuche de almacenamiento. || Modelo: RE-25186 | Volumen: 1600 ml | Mascarilla: N° 5 | Válvula PEEP: 5–20 cmH2O | Esterilización: Autoclave 134 °C.",
        price: 290,
        image: "/images/emergencia/BESMED/ADULTO.png"
      },
      {
        sku: "resucitador-besmed-re-25246-pediatrico",
        attrs: { tipo: "pediatrico" },
        name: "PEDIÁTRICO BESMED RE-25246",
        description: "Resucitador manual Besmed para pacientes pediátricos, silicona 100% grado médico, libre de látex, esterilizable en autoclave hasta 134 °C. Incluye resucitador con asa 500 ml, mascarilla silicona N° 3, bolsa oxígeno 2.5 L, tubo oxígeno desechable 2 m, válvula PEEP 2–10 cmH2O (naranja) y estuche de almacenamiento. || Modelo: RE-25246 | Volumen: 500 ml | Mascarilla: N° 3 | Válvula PEEP: 2–10 cmH2O | Esterilización: Autoclave 134 °C.",
        price: 290,
        image: "/images/emergencia/BESMED/PEDIATRICO.png"
      },
      {
        sku: "resucitador-besmed-re-25346-neonatal",
        attrs: { tipo: "neonatal" },
        name: "NEONATAL BESMED RE-25346",
        description: "Resucitador manual Besmed para neonatos menores de 7 kg, silicona 100% grado médico, libre de látex, esterilizable en autoclave hasta 134 °C. Incluye resucitador con asa 280 ml, mascarilla silicona N° 1, bolsa oxígeno 1.0 L, tubo oxígeno desechable 2 m, válvula PEEP 2–10 cmH2O (naranja) y estuche de almacenamiento. || Modelo: RE-25346 | Volumen: 280 ml | Mascarilla: N° 1 | Válvula PEEP: 2–10 cmH2O | Esterilización: Autoclave 134 °C.",
        price: 290,
        image: "/images/emergencia/BESMED/NEONATAL.png"
      }
    ]
  },

  // ─── 7. MASCARILLA SILICONA BESMED ───────────────────────────────────────────
  {
    id: "mascarilla-silicona-resucitador-besmed",
    name: "MASCARILLA DE SILICONA PARA RESUCITADOR BESMED",
    type: "Resucitadores",
    description: "Mascarillas de silicona reutilizables de repuesto para resucitador Besmed. Disponibles en tallas 00 a 05 para cobertura completa desde neonatos hasta adultos. Silicona grado médico, esterilizables en autoclave, con sello facial anatómico para sellado hermético durante la ventilación.",
    image: "/images/emergencia/CARD/ADULTOS.jpg",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "talla-00", label: "Talla 00 – Neonatal" },
          { id: "talla-0", label: "Talla 0 – Neonatal / Lactante" },
          { id: "talla-02", label: "Talla 02 – Pediátrica pequeña" },
          { id: "talla-03", label: "Talla 03 – Pediátrica mediana" },
          { id: "talla-04", label: "Talla 04 – Adulto pequeño" },
          { id: "talla-05", label: "Talla 05 – Adulto estándar" }
        ]
      }
    ],

    variants: [
      {
        sku: "mascarilla-besmed-talla-00",
        attrs: { talla: "talla-00" },
        name: "TALLA 00 – NEONATAL",
        description: "Mascarilla de silicona grado médico para resucitador Besmed, talla 00. Indicada para neonatos prematuros y de muy bajo peso. Esterilizable en autoclave. || Talla: 00 | Uso: Neonatal prematuro | Material: Silicona grado médico.",
        price: 39.6,
        image: "/images/emergencia/BESMED/MENORES.jpg"
      },
      {
        sku: "mascarilla-besmed-talla-0",
        attrs: { talla: "talla-0" },
        name: "TALLA 0 – NEONATAL / LACTANTE",
        description: "Mascarilla de silicona grado médico para resucitador Besmed, talla 0. Indicada para neonatos a término y lactantes pequeños. Esterilizable en autoclave. || Talla: 0 | Uso: Neonatal / lactante | Material: Silicona grado médico.",
        price: 42,
        image: "/images/emergencia/BESMED/MENORES.jpg"
      },
      {
        sku: "mascarilla-besmed-talla-02",
        attrs: { talla: "talla-02" },
        name: "TALLA 02 – PEDIÁTRICA PEQUEÑA",
        description: "Mascarilla de silicona grado médico para resucitador Besmed, talla 02. Indicada para pacientes pediátricos de menor tamaño. Esterilizable en autoclave. || Talla: 02 | Uso: Pediátrico pequeño | Material: Silicona grado médico.",
        price: 45.6,
        image: "/images/emergencia/BESMED/MENORES.jpg"
      },
      {
        sku: "mascarilla-besmed-talla-03",
        attrs: { talla: "talla-03" },
        name: "TALLA 03 – PEDIÁTRICA MEDIANA",
        description: "Mascarilla de silicona grado médico para resucitador Besmed, talla 03. Indicada para pacientes pediátricos de tamaño mediano. Esterilizable en autoclave. || Talla: 03 | Uso: Pediátrico mediano | Material: Silicona grado médico.",
        price: 50.4,
        image: "/images/emergencia/BESMED/ADULTOS.jpg"
      },
      {
        sku: "mascarilla-besmed-talla-04",
        attrs: { talla: "talla-04" },
        name: "TALLA 04 – ADULTO PEQUEÑO",
        description: "Mascarilla de silicona grado médico para resucitador Besmed, talla 04. Indicada para adultos de complexión pequeña o adultos mayores con estructuras faciales reducidas. Esterilizable en autoclave. || Talla: 04 | Uso: Adulto pequeño | Material: Silicona grado médico.",
        price: 54,
        image: "/images/emergencia/BESMED/ADULTOS.jpg"
      },
      {
        sku: "mascarilla-besmed-talla-05",
        attrs: { talla: "talla-05" },
        name: "TALLA 05 – ADULTO ESTÁNDAR",
        description: "Mascarilla de silicona grado médico para resucitador Besmed, talla 05. Talla estándar para adultos. Esterilizable en autoclave. || Talla: 05 | Uso: Adulto estándar | Material: Silicona grado médico.",
        price: 54,
        image: "/images/emergencia/BESMED/ADULTOS.jpg"
      }
    ]
  },

  // ─── 8. JUEGO DE FÉRULAS ─────────────────────────────────────────────────────
  {
    id: "juego-de-ferulas-6-pza",
    name: "JUEGO DE FÉRULAS 6 PZA",
    type: "Inmovilizacion",
    description: "Kit de 6 férulas para inmovilización de extremidades en situaciones de emergencia prehospitalaria. Disponibles en versión EVA rígido para inmovilización firme y férulas inflables para ajuste anatómico con efecto analgésico por compresión. Ambas versiones cubren pierna adulto, pierna niño, brazo adulto, codo adulto, brazo niño y antebrazo adulto.",
    image: "/images/emergencia/FERULAS/F1.png",

    attributeOrder: ["tipo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "eva", label: "Férulas EVA rígidas" },
          { id: "inflables", label: "Férulas inflables" }
        ]
      }
    ],

    variants: [
      {
        sku: "ferulas-eva-6pza",
        attrs: { tipo: "eva" },
        name: "FÉRULAS EVA – 6 PZA",
        description: "Kit de 6 férulas de material EVA de alta resistencia, ligeras y fáciles de limpiar, para inmovilización rápida en primeros auxilios, rescate y fracturas. Incluye: pierna adulto 83 cm, pierna niño 70 cm, brazo adulto 69 cm, codo adulto 37 cm, brazo niño 33 cm y antebrazo adulto 33 cm. || Material: EVA | Piezas: 6 tallas | Uso: Primeros auxilios, fracturas, rescate prehospitalario.",
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
        description: "Kit de 6 férulas inflables que se ajustan a la forma del cuerpo para fijación firme en fracturas y lesiones traumáticas. Efecto analgésico por compresión uniforme, ayuda en hemostasia y reducción de edemas. Permeables a rayos X — no requieren retiro para evaluación radiológica. Diseño desinflable para almacenamiento compacto, ajustables para uso pediátrico, con cremallera para liberación rápida. || Material: PVC inflable | Piezas: 6 | Uso: Fracturas, trauma, emergencia prehospitalaria | Compatible: Rayos X.",
        price: 200,
        images: [
          "/images/emergencia/FERULAS/F3.png",
          "/images/emergencia/FERULAS/F4.png"
        ]
      }
    ]
  },

  // ─── 9. ESTUCHE PARA CAMILLA RÍGIDA ─────────────────────────────────────────
  {
    id: "estuche-para-camilla-rigida",
    name: "ESTUCHE PARA CAMILLA RÍGIDA",
    type: "Camillas-y-traslado",
    description: "Estuche para transporte y resguardo de camilla rígida fabricado en material resistente y de alta durabilidad, con protección contra polvo, humedad y desgaste. Cuenta con ventana superior transparente para identificar el contenido sin abrir, bandas reflectivas para visibilidad en baja iluminación, sistema de cierre seguro y correas de sujeción para ajuste firme a la camilla.",
    price: 156,
    image: "/images/emergencia/CAMILLAS/ESTUCHE.png"
  },

  // ─── 10. CORREAS TIPO SPIDER ─────────────────────────────────────────────────
  {
    id: "correas-tipo-spider-para-camilla-rigida",
    name: "CORREAS TIPO SPIDER PARA CAMILLA RÍGIDA",
    type: "Camillas-y-traslado",
    description: "Sistema de inmovilización tipo araña con diez puntos de fijación para sujeción corporal completa durante el traslado de pacientes en tabla espinal rígida. Fijación diferenciada en zonas de hombros y pies para estabilización segura y eficiente durante el traslado prehospitalario.",
    price: 60,
    image: "/images/emergencia/CAMILLAS/CORREA.png"
  },

  // ─── 11. COLLARIN PEDIÁTRICO MINI PERFIT ACE ─────────────────────────────────
  {
    id: "collarin-cervical-pediatrico-mini-perfit",
    name: "COLLARIN CERVICAL PEDIÁTRICO AMBU MINI PERFIT ACE",
    type: "Collarines",
    description: "Collarín cervical pediátrico Ambu Mini Perfit ACE, único dispositivo ajustable de una pieza para inmovilización rígida de columna cervical en pacientes infantiles y adultos de cuello pequeño. Ofrece 12 configuraciones precisas dentro de tres tallas estándar (infant, pediátrico y neckless), garantizando el ajuste más exacto posible. Fabricado en polipropileno con espuma interna de polietileno. Compatible con TC, RM y rayos X sin necesidad de retiro. Incluye sistema flip de mentón para facilitar intubación y almacenamiento plano, shell posterior ventilado para drenaje de fluidos y sistema de latches con dos botones de seguridad para bloqueo seguro. Combinado con el Perfit ACE adulto cubre 28 tallas totales para niños y adultos. || Tallas: 12 configuraciones (infant, pediátrico, neckless) | Material: Polipropileno + espuma polietileno | Dimensiones: 44 × 18 × 1.5 cm | Compatibilidad: TC, RM, rayos X | Uso: Trauma cervical pediátrico, atención prehospitalaria.",
    price: 127.44,
    image: "/images/emergencia/MINI PERFIT/MINIPERFIT.png"
  },

  // ─── 12. COLLARIN ADULTO AMBU PERFIT ACE ─────────────────────────────────────
  {
    id: "collarin-cervical-adulto-ambu-perfit-ace",
    name: "COLLARIN CERVICAL ADULTO AMBU PERFIT ACE",
    type: "Collarines",
    description: "Collarín cervical adulto Ambu Perfit ACE, único dispositivo ajustable de una pieza para inmovilización rígida de columna cervical en adultos. Ofrece 16 configuraciones precisas dentro de cuatro tallas estándar adulto (neckless, short, regular y tall), siendo el único collarín adulto de una sola pieza con ese nivel de ajuste. Fabricado en polietileno con espuma interna. Compatible con TC, RM y rayos X sin necesidad de retiro. Incluye sistema flip de mentón para facilitar intubación y almacenamiento plano, shell posterior ventilado para drenaje de fluidos y sistema de latches con dos botones de seguridad para bloqueo seguro. Combinado con el Mini Perfit ACE pediátrico cubre 28 tallas totales para niños y adultos. || Tallas: 16 configuraciones (neckless, short, regular, tall) | Material: Polietileno + espuma interna | Dimensiones: 56 × 18 × 1.5 cm | Compatibilidad: TC, RM, rayos X | Uso: Trauma cervical adulto, extricación, traslado prehospitalario.",
    price: 168,
    image: "/images/emergencia/PERFIT/PERFIT.png"
  },

  // ─── 13. RESERVORIO SILICONA BESMED ──────────────────────────────────────────
  {
    id: "reservorio-silicona-besmed",
    name: "RESERVORIO DE SILICONA BESMED",
    type: "Resucitadores",
    description: "Reservorios de silicona biocompatible Besmed para recolección de fluidos en aplicaciones clínicas, hospitalarias y de emergencia. Fabricados en silicona flexible y resistente químicamente, ideales para sistemas de succión, drenaje y recolección en procedimientos quirúrgicos y de cuidados intensivos. Disponibles en capacidades 2.0 L y 1.0 L.",
    image: "/images/emergencia/BESMED/bolsas.jpg",

    attributeOrder: ["capacidad"],

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
        name: "RESERVORIO SILICONA 2.0 L – BR-62320",
        description: "Reservorio de silicona biocompatible Besmed de 2.0 L para recolección de fluidos en aplicaciones clínicas y hospitalarias. Flexible, resistente químicamente, ideal para sistemas de succión, drenaje quirúrgico y cuidados intensivos. || Modelo: BR-62320 | Capacidad: 2.0 L | Material: Silicona biocompatible | Uso: Succión, drenaje quirúrgico, UCI.",
        price: 50,
        image: "/images/emergencia/BESMED/bolsas.jpg"
      },
      {
        sku: "reservorio-besmed-br-62310-1l",
        attrs: { capacidad: "1l" },
        name: "RESERVORIO SILICONA 1.0 L – BR-62310",
        description: "Reservorio de silicona biocompatible Besmed de 1.0 L para recolección de líquidos en procedimientos sanitarios y atención de emergencia. Flexible y resistente, con alta tolerancia a la deformación para rendimiento constante bajo uso clínico continuo. || Modelo: BR-62310 | Capacidad: 1.0 L | Material: Silicona biocompatible | Uso: Emergencia, procedimientos clínicos.",
        price: 50,
        image: "/images/emergencia/BESMED/bolsas.jpg"
      }
    ]
  },

  // ─── 14. TABLERO RÍGIDO PARA COLUMNA ─────────────────────────────────────────
  {
    id: "tablero-rigido-columna",
    name: "TABLERO RÍGIDO PARA COLUMNA",
    type: "Camillas-y-traslado",
    description: "Tablas espinales rígidas de plástico de alta resistencia para inmovilización y traslado seguro de pacientes con posible lesión de columna vertebral. Superficie firme y fácil de desinfectar, con múltiples agarres laterales para facilitar el transporte en equipo. Compatible con sistemas de sujeción tipo spider, correas y accesorios de inmovilización. Disponibles en color amarillo y anaranjado.",
    image: "/images/emergencia/CAMILLAS/AMARILLA.png",

    attributeOrder: ["color"],

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
        description: "Tabla espinal rígida amarilla de plástico de alta resistencia para inmovilización y traslado de pacientes con trauma espinal. Superficie firme de fácil limpieza, múltiples agarres laterales y compatible con correas tipo spider y accesorios de inmovilización. || Color: Amarillo | Material: Plástico alta resistencia | Uso: Trauma espinal, traslado prehospitalario.",
        price: 200,
        image: "/images/emergencia/CAMILLAS/AMARILLA.png"
      },
      {
        sku: "tablero-rigido-anaranjado",
        attrs: { color: "anaranjado" },
        name: "TABLERO RÍGIDO ANARANJADO",
        description: "Tabla espinal rígida anaranjada de plástico ligero para inmovilización temporal de pacientes con trauma espinal. Múltiples agarres laterales para transporte en equipo y fácil desinfección. Compatible con correas tipo spider y accesorios de inmovilización. || Color: Anaranjado | Material: Plástico alta resistencia | Uso: Trauma espinal, traslado prehospitalario.",
        price: 200,
        image: "/images/emergencia/CAMILLAS/NARANJA.png"
      }
    ]
  },

  // ─── 15. DEA ─────────────────────────────────────────────────────────────────
  {
    id: "desfibrilador-externo-automatico-dea",
    name: "DESFIBRILADOR EXTERNO AUTOMÁTICO (DEA)",
    type: "DEA",
    description: "Desfibriladores externos automáticos (DEA) para respuesta a paro cardíaco súbito en entornos públicos, empresariales y prehospitalarios. Analizan el ritmo cardíaco automáticamente y administran descarga eléctrica solo cuando es necesario, guiando al rescatador con instrucciones de voz en español paso a paso. Disponibles en modelos Zoll y Philips con tecnología bifásica, compatibilidad pediátrica y autoevaluaciones periódicas para garantizar disponibilidad inmediata. Incluyen electrodos preconectados, batería y estuche de transporte.",
    image: "/images/emergencia/DEA/DEA_CARD.png",

    attributeOrder: ["marca", "modelo"],

    attributes: [
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "zoll", label: "Zoll" },
          { id: "philips", label: "Philips" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "aed-plus", label: "AED Plus" },
          { id: "aed-3", label: "AED 3" },
          { id: "heartstart-hs1", label: "HeartStart HS1" },
          { id: "heartstart-frx", label: "HeartStart FRx" }
        ]
      }
    ],

    attributeRules: {
      "zoll": { modelo: ["aed-plus", "aed-3"] },
      "philips": { modelo: ["heartstart-hs1", "heartstart-frx"] }
    },

    variants: [
      {
        sku: "dea-zoll-aed-plus",
        attrs: { marca: "zoll", modelo: "aed-plus" },
        name: "ZOLL AED PLUS",
        description: "DEA Zoll AED Plus semiautomático con tecnología Real CPR Help que monitorea en tiempo real la profundidad y frecuencia de las compresiones durante la RCP, siendo el único DEA con retroalimentación de calidad de compresiones. Instrucciones de voz claras en español, electrodos CPR-D con sensor de compresión integrado, batería de litio de 5 años y pantalla LCD de estado. Compatible con modo pediátrico mediante electrodos pediátricos. || Marca: Zoll | Modo: Semiautomático | Tecnología: Real CPR Help | Batería: 5 años | Instrucciones: Voz en español | Incluye: Electrodos CPR-D + batería + estuche.",
        price: 5,
        image: "/images/emergencia/DEA/ZOLL_AED_PLUS.png"
      },
      {
        sku: "dea-zoll-aed-3",
        attrs: { marca: "zoll", modelo: "aed-3" },
        name: "ZOLL AED 3",
        description: "DEA Zoll AED 3 semiautomático de última generación con pantalla a color, retroalimentación de RCP en tiempo real, instrucciones de voz y visuales en español, diseño resistente IP55, modo pediátrico integrado y Bluetooth para transferencia de datos. Batería de 5 años. || Marca: Zoll | Modo: Semiautomático | Pantalla: Color | Protección: IP55 | Batería: 5 años | Conectividad: Bluetooth | Incluye: Electrodos + batería + estuche.",
        price: 5,
        image: "/images/emergencia/DEA/ZOLL_AED_3.png"
      },
      {
        sku: "dea-philips-heartstart-hs1",
        attrs: { marca: "philips", modelo: "heartstart-hs1" },
        name: "PHILIPS HEARTSTART HS1",
        description: "DEA Philips HeartStart HS1, el más vendido del mundo para rescatadores inexpertos. Instrucciones de voz en español, tecnología SMART Bifásica, electrodos SMART II preconectados para adultos y niños, batería de 4 años y garantía de fabricante de 8 años. || Marca: Philips | Tecnología: SMART Bifásica | Batería: 4 años | Garantía: 8 años | Incluye: Electrodos SMART II + batería + kit rescate.",
        price: 5,
        image: "/images/emergencia/DEA/PHILIPS_HS1.png"
      },
      {
        sku: "dea-philips-heartstart-frx",
        attrs: { marca: "philips", modelo: "heartstart-frx" },
        name: "PHILIPS HEARTSTART FRx",
        description: "DEA Philips HeartStart FRx para primeros respondedores y entornos de alto riesgo. Resistente a temperaturas extremas, polvo y humedad. Con llave pediátrica ajusta automáticamente energía e instrucciones para niños sin cambiar electrodos. Más de 85 pruebas de autodiagnóstico periódicas. Compatible con equipos EMS para transferencia directa. || Marca: Philips | Resistencia: IP — temperaturas extremas, polvo, humedad | Batería: 4 años | Modo pediátrico: Llave pediátrica | Incluye: Electrodos SMART II + batería + estuche.",
        price: 5,
        image: "/images/emergencia/DEA/PHILIPS_FRX.png"
      }
    ]
  },

  // ─── GAP 1. CAMILLA CUCHARA ───────────────────────────────────────────────────
  {
    id: "camilla-cuchara-scoop",
    name: "CAMILLA CUCHARA (SCOOP STRETCHER)",
    type: "Camillas-y-traslado",
    description: "Camilla tipo cuchara de aleación de aluminio de alta resistencia para recogida y traslado seguro de pacientes con sospecha de fractura o lesión espinal. Su diseño en dos mitades articuladas permite deslizarla bajo el paciente y cerrarla como tijera sin necesidad de rodarlo ni levantarlo, minimizando el riesgo de agravar lesiones. Longitud ajustable telescópicamente para adaptarse a diferentes estaturas, lado de pies más angosto para maniobrar en espacios confinados, diseño centro-abierto compatible con rayos X y plegable para almacenaje compacto. Compatible con inmovilizador de cabeza CMS-16A. Incluye 3 correas de sujeción de paciente. Disponible en versión aluminio estándar y versión polímero radiotransparente Ferno.",
    image: "/images/emergencia/CAMILLAS/CUCHARA_CARD.png",

    attributeOrder: ["version"],

    attributes: [
      {
        id: "version",
        label: "Versión",
        type: "single",
        values: [
          { id: "aluminio", label: "Aluminio estándar" },
          { id: "ferno", label: "Ferno EXL – Polímero radiotransparente" }
        ]
      }
    ],

    variants: [
      {
        sku: "camilla-cuchara-aluminio",
        attrs: { version: "aluminio" },
        name: "CAMILLA CUCHARA – ALUMINIO",
        description: "Camilla cuchara de aleación de aluminio de alta resistencia. Bisagras articuladas en ambos extremos, longitud telescópica ajustable, diseño centro-abierto compatible con rayos X, plegable para almacenaje compacto. Incluye 3 correas de sujeción. || Material: Aleación de aluminio | Largo extendida: 165–202 cm | Largo plegada: aprox. 120 cm | Ancho: 43 cm | Capacidad: 180 kg | Incluye: 3 correas de sujeción | Compatible: Rayos X.",
        price: 5,
        image: "/images/emergencia/CAMILLAS/CUCHARA_ALUMINIO.png"
      },
      {
        sku: "camilla-cuchara-ferno",
        attrs: { version: "ferno" },
        name: "FERNO EXL – POLÍMERO RADIOTRANSPARENTE",
        description: "Camilla cuchara Ferno Scoop EXL de polímero radiotransparente con tratamiento térmico para temperatura uniforme y mayor confort del paciente. Sistema Twin Safety Lock (TSL) para acople y desacople suave. Longitud ajustable en 4 posiciones, superficie impermeable de fácil limpieza y desinfección. Plegable a 120 cm para almacenaje. Compatible con TC, RM y rayos X sin artefactos. || Marca: Ferno | Material: Polímero radiotransparente | Largo extendida: 165 cm | Largo plegada: 120 cm | Ancho: 43.2 cm | Peso: 8 kg | Capacidad: 159 kg | Sistema: TSL doble seguro | Incluye: 3 correas de sujeción | Compatible: TC, RM, rayos X.",
        price: 5,
        image: "/images/emergencia/CAMILLAS/CUCHARA_FERNO.png"
      }
    ]
  },

  // ─── GAP 2. MALETÍN DE PARTO ──────────────────────────────────────────────────
  {
    id: "maletin-kit-parto-emergencia",
    name: "KIT DE PARTO DE EMERGENCIA",
    type: "Maletines-y-mochilas",
    description: "Kit de parto de emergencia prehospitalario con todos los elementos necesarios para asistir a la madre y al recién nacido en un parto no planificado fuera del entorno hospitalario. Presentado en bolsas estériles dentro de caja compacta ideal para ambulancias, brigadas médicas y unidades de primera respuesta. Incluye material para el parto, primeros cuidados del recién nacido y protección del personal interviniente. Disponible en versión básica y versión completa con resucitador neonatal.",
    image: "/images/emergencia/PARTO/PARTO_CARD.png",

    attributeOrder: ["version"],

    attributes: [
      {
        id: "version",
        label: "Versión",
        type: "single",
        values: [
          { id: "basico", label: "Kit básico" },
          { id: "completo", label: "Kit completo (+ resucitador neonatal)" }
        ]
      }
    ],

    variants: [
      {
        sku: "kit-parto-basico",
        attrs: { version: "basico" },
        name: "KIT DE PARTO – BÁSICO",
        description: "Kit de parto de emergencia prehospitalario en presentación estéril. Incluye: bata no tejida, delantal plástico, sábana azul 120×150 cm, 2 mascarillas, 2 pares guantes quirúrgicos, 8 toallas de papel, 12 compresas de gasa 10×10 cm, 2 clamps umbilicales, tijera umbilical, pera de goma neonatal, compresa postparto, sábana para recién nacido 90×70 cm, 4 toallitas limpiadoras, 4 toallitas con povidona yodada y 2 bolsas para residuos sanitarios. || Presentación: Bolsas estériles | Dimensiones caja: 27 × 20 × 11 cm | Uso: Ambulancias, brigadas, primera respuesta.",
        price: 5,
        image: "/images/emergencia/PARTO/KIT_BASICO.png"
      },
      {
        sku: "kit-parto-completo",
        attrs: { version: "completo" },
        name: "KIT DE PARTO – COMPLETO (+ RESUCITADOR NEONATAL)",
        description: "Kit de parto de emergencia prehospitalario completo que incluye todos los elementos del kit básico más resucitador manual neonatal de silicona 280 ml con mascarilla N° 1, para atención inmediata del recién nacido en caso de depresión respiratoria. || Incluye: Todo el kit básico + resucitador neonatal 280 ml + mascarilla silicona N° 1 | Presentación: Bolsas estériles | Uso: Ambulancias, brigadas con capacidad de reanimación neonatal.",
        price: 5,
        image: "/images/emergencia/PARTO/KIT_COMPLETO.png"
      }
    ]
  },

  // ─── GAP 3. COLLARÍN CERVICAL TALLAS FIJAS ────────────────────────────────────
  {
    id: "collarin-cervical-tallas-fijas",
    name: "COLLARÍN CERVICAL TALLAS FIJAS",
    type: "Collarines",
    description: "Collarines cervicales rígidos de talla fija para inmovilización cervical en atención prehospitalaria y emergencias. A diferencia del Ambu Perfit ACE ajustable, estos collarines de talla fija en una sola pieza garantizan un ajuste más preciso para cada morfología de cuello cuando el rescatador conoce la talla del paciente, reduciendo el tiempo de colocación en situaciones críticas. Fabricados en polietileno con espuma interna, apertura traqueal para monitoreo y acceso a vía aérea, y sistema de cierre velcro reforzado. Compatibles con TC, RM y rayos X. Disponibles en tallas Pediátrico, Short, Regular y Tall para adultos.",
    image: "/images/emergencia/COLLARINES/TALLAS_CARD.png",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "pediatrico", label: "Pediátrico" },
          { id: "short", label: "Short (adulto cuello corto)" },
          { id: "regular", label: "Regular (adulto estándar)" },
          { id: "tall", label: "Tall (adulto cuello largo)" }
        ]
      }
    ],

    variants: [
      {
        sku: "collarin-fijo-pediatrico",
        attrs: { talla: "pediatrico" },
        name: "PEDIÁTRICO",
        description: "Collarín cervical rígido de talla fija pediátrico para inmovilización cervical en niños. Polietileno con espuma interna, apertura traqueal, cierre velcro reforzado. Compatible con TC, RM y rayos X. || Talla: Pediátrico | Material: Polietileno + espuma | Apertura: Traqueal | Compatibilidad: TC, RM, rayos X.",
        price: 5,
        image: "/images/emergencia/COLLARINES/PEDIATRICO_FIJO.png"
      },
      {
        sku: "collarin-fijo-short",
        attrs: { talla: "short" },
        name: "SHORT – ADULTO CUELLO CORTO",
        description: "Collarín cervical rígido de talla fija Short para adultos de cuello corto. Polietileno con espuma interna, apertura traqueal, cierre velcro reforzado. Compatible con TC, RM y rayos X. || Talla: Short | Material: Polietileno + espuma | Apertura: Traqueal | Compatibilidad: TC, RM, rayos X.",
        price: 5,
        image: "/images/emergencia/COLLARINES/SHORT_FIJO.png"
      },
      {
        sku: "collarin-fijo-regular",
        attrs: { talla: "regular" },
        name: "REGULAR – ADULTO ESTÁNDAR",
        description: "Collarín cervical rígido de talla fija Regular para adultos de cuello estándar — la talla de mayor rotación en emergencias prehospitalarias. Polietileno con espuma interna, apertura traqueal, cierre velcro reforzado. Compatible con TC, RM y rayos X. || Talla: Regular | Material: Polietileno + espuma | Apertura: Traqueal | Compatibilidad: TC, RM, rayos X.",
        price: 5,
        image: "/images/emergencia/COLLARINES/REGULAR_FIJO.png"
      },
      {
        sku: "collarin-fijo-tall",
        attrs: { talla: "tall" },
        name: "TALL – ADULTO CUELLO LARGO",
        description: "Collarín cervical rígido de talla fija Tall para adultos de cuello largo. Polietileno con espuma interna, apertura traqueal, cierre velcro reforzado. Compatible con TC, RM y rayos X. || Talla: Tall | Material: Polietileno + espuma | Apertura: Traqueal | Compatibilidad: TC, RM, rayos X.",
        price: 5,
        image: "/images/emergencia/COLLARINES/TALL_FIJO.png"
      }
    ]
  },

];