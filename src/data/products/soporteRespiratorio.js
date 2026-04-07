// src/data/products/soporteRespiratorio.js

export const soporteRespiratorioProducts = [

  {
    id: "regulador-presion-ajustable-oxigeno-m1",
    name: "REGULADORES DE PRESIÓN DE SALIDA AJUSTABLE DE OXÍGENO – UNA ETAPA",
    type: "Respiratorio",
    description: "Tres versiones del mismo regulador de presión ajustable de una etapa Western Medical para oxígeno, con doble manómetro: uno de presión de cilindro (0–4,000 PSI) y uno de presión de salida ajustable (0–100 PSI). Se diferencian únicamente por el tipo de conexión al cilindro. Indicados para conexión a equipos médicos que requieren presión regulada o flujómetros externos. Cuerpo de latón cromado, diafragma de neopreno, filtro sinterizado y válvula interna de seguridad. Garantía 6 años.",
    image: "/images/respiratorio/M1_PG_CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "m1-540-pg", label: "M1-540-PG" },
          { id: "m1-540-pgh", label: "M1-540-PGH" },
          { id: "m1-870-pg", label: "M1-870-PG" }
        ]
      }
    ],

    variants: [
      {
        sku: "western-m1-540-pg",
        attrs: { modelo: "m1-540-pg" },
        name: "REGULADOR DE PRESION CGA 540",
        description: "Regulador de presión ajustable Western M1-540-PG para balones de oxígeno grandes (G/H/K) con conexión tipo rosca CGA-540, requiere llave para el ajuste. Presión de salida regulable de 0 a 100 PSI mediante perilla de control. Uso habitual en hospitales, plantas de oxígeno y centrales de gas con cilindros de gran capacidad. || Modelo: M1-540-PG | Entrada: CGA-540 rosca (con llave) | Presión salida: 0–100 PSI ajustable | Manómetro cilindro: 0–4,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/M1_540_PG.png"
      },
      {
        sku: "western-m1-540-pgh",
        attrs: { modelo: "m1-540-pgh" },
        name: "REGULADOR DE PRESION MANUAL CGA 540",
        description: "Regulador de presión ajustable Western M1-540-PGH para balones de oxígeno grandes (G/H/K) con conexión tipo rosca CGA-540 handtight, se ajusta a mano sin necesidad de llave. Presión de salida regulable de 0 a 100 PSI. Mismo desempeño que el M1-540-PG, con la ventaja de una conexión y desconexión más rápida. Uso en hospitales y plantas de oxígeno. || Modelo: M1-540-PGH | Entrada: CGA-540 rosca handtight (sin llave) | Presión salida: 0–100 PSI ajustable | Manómetro cilindro: 0–4,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/M1_540_PGH.png"
      },
      {
        sku: "western-m1-870-pg",
        attrs: { modelo: "m1-870-pg" },
        name: "REGULADOR DE PRESION CGA 870",
        description: "Regulador de presión ajustable Western M1-870-PG para cilindros portátiles de oxígeno (D/E/ME) con conexión tipo yugo CGA-870, se fija al cilindro como abrazadera sin rosca. Presión de salida regulable de 0 a 100 PSI. Diseñado para uso portátil en ambulancias, traslados y entornos clínicos que requieren cilindros pequeños. || Modelo: M1-870-PG | Entrada: CGA-870 yugo (abrazadera) | Presión salida: 0–100 PSI ajustable | Manómetro cilindro: 0–4,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/M1_870_PG.png"
      }
    ]
  },
  {
    id: "regulador-flujo-oxigeno-flow-gauge-m1",
    name: "REGULADORES DE FLUJO DE OXÍGENO FLOW GAUGE – UNA ETAPA",
    type: "Respiratorio",
    description: "Reguladores de flujo de oxígeno de una etapa Western Medical con doble manómetro: uno de presión de cilindro (0–4,000 PSI) y uno de presión de salida (0–119 PSI), y control de flujo dial de 2 a 15 LPM. Cuerpo de latón cromado con cámara de alta presión de latón, diafragma de neopreno, filtro sinterizado y válvula interna de seguridad. Cuatro modelos que se diferencian únicamente por el tipo de conexión al cilindro y la certificación MR. Garantía 6 años.",
    image: "/images/respiratorio/M1_FG_CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "m1-540-15fg", label: "M1-540-15FG" },
          { id: "m1-540-15fgh", label: "M1-540-15FGH" },
          { id: "m1-870-15fg", label: "M1-870-15FG" },
          { id: "mr-870-15fg", label: "MR-870-15FG" }
        ]
      }
    ],

    variants: [
      {
        sku: "western-m1-540-15fg",
        attrs: { modelo: "m1-540-15fg" },
        name: "M1-540-15FG",
        description: "Regulador de flujo Western M1-540-15FG para balones de oxígeno grandes (G/H/K) con conexión tipo rosca CGA-540, requiere llave para el ajuste. Flujo dial de 2 a 15 LPM con manómetro de cilindro (0–4,000 PSI) y manómetro de salida (0–119 PSI). Uso habitual en hospitales, plantas de oxígeno y centrales de gas con cilindros de gran capacidad. || Modelo: M1-540-15FG | Flujo: 2–15 LPM | Entrada: CGA-540 rosca (con llave) | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/M1_540_15FG.png"
      },
      {
        sku: "western-m1-540-15fgh",
        attrs: { modelo: "m1-540-15fgh" },
        name: "M1-540-15FGH HANDTIGHT",
        description: "Regulador de flujo Western M1-540-15FGH para balones de oxígeno grandes (G/H/K) con conexión tipo rosca CGA-540 handtight, se ajusta a mano sin necesidad de llave. Flujo dial de 2 a 15 LPM con doble manómetro. Mismo desempeño que el M1-540-15FG con la ventaja de una conexión y desconexión más rápida. || Modelo: M1-540-15FGH | Flujo: 2–15 LPM | Entrada: CGA-540 handtight (sin llave) | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/M1_540_15FGH.png"
      },
      {
        sku: "western-m1-870-15fg",
        attrs: { modelo: "m1-870-15fg" },
        name: "M1-870-15FG",
        description: "Regulador de flujo Western M1-870-15FG para cilindros portátiles de oxígeno (D/E/ME) con conexión tipo yugo CGA-870, se fija al cilindro como abrazadera sin rosca. Flujo dial de 2 a 15 LPM con doble manómetro. Diseñado para uso portátil en ambulancias, traslados y entornos clínicos con cilindros pequeños. || Modelo: M1-870-15FG | Flujo: 2–15 LPM | Entrada: CGA-870 yugo | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 1150,
        image: "/images/respiratorio/M1_870_15FG.png"
      },
      {
        sku: "western-mr-870-15fg",
        attrs: { modelo: "mr-870-15fg" },
        name: "MR-870-15FG MR CONDITIONAL",
        description: "Regulador de flujo Western MR-870-15FG certificado MR Conditional para uso seguro en salas de resonancia magnética. Conexión tipo yugo CGA-870 para cilindros portátiles (D/E/ME). Flujo dial de 2 a 15 LPM con doble manómetro. Construcción en latón cromado sin componentes ferromagnéticos que puedan interferir con el campo magnético. Indispensable en unidades de RMN que administran oxígeno suplementario durante el estudio. || Modelo: MR-870-15FG | Flujo: 2–15 LPM | Entrada: CGA-870 yugo | Certificación: MR Conditional | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/MR_870_15FG.png"
      }
    ]
  },

  {
    id: "regulador-oxigeno-compacto-click-style-opa",
    name: "REGULADORES DE OXÍGENO COMPACTOS – SELECTOR DE FLUJO (CLICK-STYLE)",
    type: "Respiratorio",
    description: "Reguladores de oxígeno compactos Western Medical serie OPA con selector de flujo click-style, diseñados para uso portátil, domiciliario, hospitalario y de emergencia. El sistema de clic garantiza posicionamiento preciso en cada caudal sin riesgo de ajuste entre posiciones. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad contra sobrepresión. Disponibles con conexión CGA-870 yugo para cilindros pequeños (D/E/ME) y CGA-540 rosca handtight para balones grandes (G/H/K). Garantía 2 años.",
    image: "/images/respiratorio/OPA_CARD.png",

    attributeOrder: ["cga", "modelo"],

    attributes: [
      {
        id: "cga",
        label: "Conexión",
        type: "single",
        values: [
          { id: "cga-870", label: "CGA-870" },
          { id: "cga-540", label: "CGA-540" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "opa-810", label: "OPA-810" },
          { id: "opa-820", label: "OPA-820" },
          { id: "opa-840", label: "OPA-840" },
          { id: "opa-850", label: "OPA-850" },
          { id: "opa-510", label: "OPA-510" },
          { id: "opa-520", label: "OPA-520" },
          { id: "opa-540", label: "OPA-540" }
        ]
      }
    ],

    attributeRules: {
      "cga-870": { modelo: ["opa-810", "opa-820", "opa-840", "opa-850"] },
      "cga-540": { modelo: ["opa-510", "opa-520", "opa-540"] }
    },

    variants: [

      // ─── CGA-870 YOKE ─────────────────────────────────────────────────────────

      {
        sku: "western-opa-810",
        attrs: { cga: "cga-870", modelo: "opa-810" },
        name: "OPA-810",
        description: "Regulador compacto click-style Western OPA-810 con conexión CGA-870 yugo para cilindros D/E/ME. Selector de flujo en 10 posiciones de clic de bajo caudal, indicado para uso pediátrico, domiciliario y portátil. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad. || Modelo: OPA-810 | Flujo: 1/64, 1/32, 1/16, 1/8, 1/4, 1/2, 3/4, 1, 1-1/2, 2 LPM | Entrada: CGA-870 yugo | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/OPA_810.png"
      },
      {
        sku: "western-opa-820",
        attrs: { cga: "cga-870", modelo: "opa-820" },
        name: "OPA-820",
        description: "Regulador compacto click-style Western OPA-820 con conexión CGA-870 yugo para cilindros D/E/ME. Selector de flujo en 9 posiciones de clic para uso hospitalario, domiciliario y de emergencia. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad. || Modelo: OPA-820 | Flujo: 1/4, 1/2, 1, 2, 3, 4, 6, 8, 10, 15 LPM | Entrada: CGA-870 yugo | Garantía: 2 años.",
        price: 300,
        image: "/images/respiratorio/OPA_820.png"
      },
      {
        sku: "western-opa-840",
        attrs: { cga: "cga-870", modelo: "opa-840" },
        name: "OPA-840",
        description: "Regulador compacto click-style Western OPA-840 con conexión CGA-870 yugo para cilindros D/E/ME. Selector de flujo en 9 posiciones de clic de rango medio, indicado para oxigenoterapia estándar en clínica y domicilio. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad. || Modelo: OPA-840 | Flujo: 1/2, 1, 1-1/2, 2, 2-1/2, 3, 4, 5, 6, 8 LPM | Entrada: CGA-870 yugo | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/OPA_840.png"
      },
      {
        sku: "western-opa-850",
        attrs: { cga: "cga-870", modelo: "opa-850" },
        name: "OPA-850",
        description: "Regulador compacto click-style Western OPA-850 de alto flujo con conexión CGA-870 yugo para cilindros D/E/ME. Selector de flujo en 9 posiciones de clic hasta 25 LPM, indicado para mascarillas de reservorio, sistemas Venturi de alto flujo y emergencias. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad. || Modelo: OPA-850 | Flujo: 1/2, 1, 2, 3, 4, 6, 8, 10, 15, 25 LPM | Entrada: CGA-870 yugo | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/OPA_850.png"
      },

      // ─── CGA-540 NUT AND NIPPLE – HANDTIGHT ───────────────────────────────────

      {
        sku: "western-opa-510",
        attrs: { cga: "cga-540", modelo: "opa-510" },
        name: "OPA-510",
        description: "Regulador compacto click-style Western OPA-510 con conexión CGA-540 rosca handtight para balones grandes (G/H/K), se ajusta a mano sin llave. Selector de flujo en 10 posiciones de clic de bajo caudal, equivalente al OPA-810 para cilindros grandes. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad. || Modelo: OPA-510 | Flujo: 1/64, 1/32, 1/16, 1/8, 1/4, 1/2, 3/4, 1, 1-1/2, 2 LPM | Entrada: CGA-540 handtight | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/OPA_510.png"
      },
      {
        sku: "western-opa-520",
        attrs: { cga: "cga-540", modelo: "opa-520" },
        name: "OPA-520",
        description: "Regulador compacto click-style Western OPA-520 con conexión CGA-540 rosca handtight para balones grandes (G/H/K), se ajusta a mano sin llave. Selector de flujo en 9 posiciones de clic para uso hospitalario y domiciliario con cilindros de gran capacidad. Equivalente al OPA-820 para CGA-540. || Modelo: OPA-520 | Flujo: 1/4, 1/2, 1, 2, 3, 4, 6, 8, 10, 15 LPM | Entrada: CGA-540 handtight | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/OPA_520.png"
      },
      {
        sku: "western-opa-540",
        attrs: { cga: "cga-540", modelo: "opa-540" },
        name: "OPA-540",
        description: "Regulador compacto click-style Western OPA-540 con conexión CGA-540 rosca handtight para balones grandes (G/H/K), se ajusta a mano sin llave. Selector de flujo en 9 posiciones de clic de rango medio. Equivalente al OPA-840 para CGA-540. || Modelo: OPA-540 | Flujo: 1/2, 1, 1-1/2, 2, 2-1/2, 3, 4, 5, 6, 8 LPM | Entrada: CGA-540 handtight | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/OPA_540.png"
      }
    ]
  },
  {
    id: "regulador-oxigeno-extendido-click-style-opl",
    name: "REGULADOR DE OXÍGENO EXTENDIDO – SELECTOR DE FLUJO (CLICK-STYLE)",
    type: "Respiratorio",
    description: "Regulador de oxígeno extendido Western Medical OPL-821 con selector de flujo click-style y salida DISS 1240 para conexión directa a frasco humidificador. El cuerpo alargado respecto a la serie OPA incorpora la salida DISS integrada, eliminando la necesidad de adaptadores. Diseñado para oxigenoterapia con humidificación en clínica, hospitalización y domicilio con cilindros portátiles D/E/ME. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad. || Modelo: OPL-821 | Flujo: 1/4, 1/2, 1, 2, 3, 4, 6, 8, 10, 15 LPM | Entrada: CGA-870 yugo | Salida: DISS 1240 | Garantía: 2 años.",
    price: 300,
    image: "/images/respiratorio/OPL_821.png"
  },

  {
    id: "regulador-presion-fija-oxigeno-preset-50psi",
    name: "REGULADORES DE PRESIÓN FIJA DE OXÍGENO – UNA ETAPA (PRESET 50 PSI)",
    type: "Respiratorio",
    description: "Reguladores de presión fija Western Medical preset a 50 PSI para oxígeno medicinal, diseñados para convertir un cilindro en una salida equivalente a la red hospitalaria. Entregan 50 PSI constantes a la salida, permitiendo alimentar directamente ventiladores, máquinas de anestesia, mezcladores aire/oxígeno y equipos de terapia respiratoria que requieren presión de red. No son de administración directa al paciente — la configuración típica es cilindro → regulador preset 50 PSI → flujómetro → paciente. Cuerpo de latón cromado con cámara de alta presión de latón, diafragma de neopreno, filtro sinterizado y válvula interna de seguridad. Disponibles con salida horizontal (conexión en línea, universal) y salida a 90° DISS (espacios reducidos, conexión lateral). Garantía 6 años.",
    image: "/images/respiratorio/PRESET_CARD.png",

    attributeOrder: ["salida", "modelo"],

    attributes: [
      {
        id: "salida",
        label: "Orientación de salida",
        type: "single",
        values: [
          { id: "horizontal", label: "Salida horizontal" },
          { id: "90", label: "Salida 90°" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "m1a-540-p", label: "M1A-540-P" },
          { id: "m1a-870-p", label: "M1A-870-P" },
          { id: "m1-540-p", label: "M1-540-P" },
          { id: "m1-870-p", label: "M1-870-P" }
        ]
      }
    ],

    attributeRules: {
      "horizontal": { modelo: ["m1a-540-p", "m1a-870-p"] },
      "90": { modelo: ["m1-540-p", "m1-870-p"] }
    },

    variants: [

      // ─── SALIDA HORIZONTAL ────────────────────────────────────────────────────

      {
        sku: "western-m1a-540-p",
        attrs: { salida: "horizontal", modelo: "m1a-540-p" },
        name: "M1A-540-P",
        description: "Regulador preset Western M1A-540-P a 50 PSI con salida horizontal DISS y conexión CGA-540 rosca para balones grandes (G/H/K), requiere llave. Salida horizontal ideal para flujómetros en línea y equipos médicos de conexión directa. Indicado para hospitales y plantas con cilindros de gran capacidad. || Modelo: M1A-540-P | Presión salida: 50 PSI fijos | Entrada: CGA-540 rosca (con llave) | Salida: Horizontal DISS | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/M1A_540_P.png"
      },
      {
        sku: "western-m1a-870-p",
        attrs: { salida: "horizontal", modelo: "m1a-870-p" },
        name: "M1A-870-P",
        description: "Regulador preset Western M1A-870-P a 50 PSI con salida horizontal DISS y conexión CGA-870 yugo para cilindros portátiles D/E/ME. Permite usar cilindros pequeños como fuente de presión de red para ventiladores y equipos de terapia respiratoria en traslados y entornos clínicos. || Modelo: M1A-870-P | Presión salida: 50 PSI fijos | Entrada: CGA-870 yugo | Salida: Horizontal DISS | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/M1A_870_P.png"
      },

      // ─── SALIDA 90° ───────────────────────────────────────────────────────────

      {
        sku: "western-m1-540-p",
        attrs: { salida: "90", modelo: "m1-540-p" },
        name: "M1-540-P",
        description: "Regulador preset Western M1-540-P a 50 PSI con salida a 90° DISS y conexión CGA-540 rosca para balones grandes (G/H/K), requiere llave. La salida a 90° facilita la conexión en espacios reducidos y evita doblar mangueras en instalaciones laterales. || Modelo: M1-540-P | Presión salida: 50 PSI fijos | Entrada: CGA-540 rosca (con llave) | Salida: 90° DISS | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/M1_540_P.png"
      },

      {
        sku: "western-m1-870-p",
        attrs: { salida: "90", modelo: "m1-870-p" },
        name: "M1-870-P",
        description: "Regulador preset Western M1-870-P a 50 PSI con salida a 90° DISS y conexión CGA-870 yugo para cilindros portátiles D/E/ME. La salida a 90° es ideal para espacios reducidos en equipos de traslado, ambulancias y camas hospitalarias donde la salida horizontal podría interferir con otros componentes. || Modelo: M1-870-P | Presión salida: 50 PSI fijos | Entrada: CGA-870 yugo | Salida: 90° DISS | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/M1_870_P.png"
      }
    ]
  },
  {
    id: "flujometros-oxigeno-pared-western",
    name: "FLUJÓMETROS DE OXÍGENO PARA PARED – WESTERN MEDICAL",
    type: "Respiratorio",
    description: "Flujómetros de oxígeno Western Medical para tomas de pared hospitalarias, calibrados a 50 PSI de presión de entrada. Tubo flotador de policarbonato interno y externo para mayor durabilidad y precisión de lectura. Disco de ruptura de seguridad integrado (500 PSI nominal). Precisión ±5% a escala completa. Disponibles en tres líneas de cuerpo: FM latón cromado estándar, FME latón slim line y FMA aluminio slim line. Dos rangos de flujo: 1/2–15 LPM para adultos y 1/2–7 LPM para uso pediátrico o flujos reducidos. Entrada DISS hex nut estándar o DISS handtight para conexión sin herramienta. Garantía 2 años.",
    image: "/images/respiratorio/FM_CARD.png",

    attributeOrder: ["material", "inlet", "modelo"],

    attributes: [
      {
        id: "material",
        label: "Línea",
        type: "single",
        values: [
          { id: "fm", label: "FM" },
          { id: "fme", label: "FME" },
          { id: "fma", label: "FMA" }
        ]
      },
      {
        id: "inlet",
        label: "Entrada",
        type: "single",
        values: [
          { id: "diss", label: "DISS" },
          { id: "diss-handtight", label: "DISS Handtight" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          // FM DISS
          { id: "fm103", label: "FM103" },
          // FM DISS Handtight
          { id: "fm104", label: "FM104" },
          // FME DISS
          { id: "fme103", label: "FME103" },
          // FME DISS Handtight
          { id: "fme104", label: "FME104" },
          // FMA DISS
          { id: "fma103", label: "FMA103" },
          // FMA DISS Handtight
          { id: "fma104", label: "FMA104" }
        ]
      }
    ],

    attributeRules: {
      // Material → Inlet (todos admiten ambos)
      "fm": { inlet: ["diss", "diss-handtight"] },
      "fme": { inlet: ["diss", "diss-handtight"] },
      "fma": { inlet: ["diss", "diss-handtight"] },

      // Material + Inlet → Modelo
      "fm-diss": { modelo: ["fm103"] },
      "fm-diss-handtight": { modelo: ["fm104"] },
      "fme-diss": { modelo: ["fme103"] },
      "fme-diss-handtight": { modelo: ["fme104"] },
      "fma-diss": { modelo: ["fma103"] },
      "fma-diss-handtight": { modelo: ["fma104"] }
    },

    variants: [

      // ─── FM – DISS HEX NUT ────────────────────────────────────────────────────
      {
        sku: "western-fm103",
        attrs: { material: "fm", inlet: "diss", modelo: "fm103" },
        name: "FM103 BRASS BODY",
        description: "Flujómetro Western FM103 de cuerpo latón cromado estándar para toma de pared DISS hex nut. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. Tubo flotador de policarbonato interno y externo. Precisión ±5% a escala completa. || Modelo: FM103 | Flujo: 1/2–15 LPM | Cuerpo: Latón cromado | Entrada: DISS hex nut | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FM103.png"
      },

      // ─── FM – DISS HANDTIGHT ──────────────────────────────────────────────────
      {
        sku: "western-fm104",
        attrs: { material: "fm", inlet: "diss-handtight", modelo: "fm104" },
        name: "FM104 BRASS BODY",
        description: "Flujómetro Western FM104 de cuerpo latón cromado estándar con entrada DISS handtight para conexión a toma de pared sin herramienta. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. Tubo flotador de policarbonato. Precisión ±5% a escala completa. || Modelo: FM104 | Flujo: 1/2–15 LPM | Cuerpo: Latón cromado | Entrada: DISS handtight | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FM104.png"
      },


      // ─── FME – DISS HEX NUT ───────────────────────────────────────────────────
      {
        sku: "western-fme103",
        attrs: { material: "fme", inlet: "diss", modelo: "fme103" },
        name: "FME103 BRASS SLIM LINE BODY",
        description: "Flujómetro Western FME103 de cuerpo latón slim line para toma de pared DISS hex nut. Perfil reducido respecto a la línea FM estándar, ideal para instalaciones con espacio limitado entre tomas. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. || Modelo: FME103 | Flujo: 1/2–15 LPM | Cuerpo: Latón slim line | Entrada: DISS hex nut | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FME103.png"
      },


      // ─── FME – DISS HANDTIGHT ─────────────────────────────────────────────────
      {
        sku: "western-fme104",
        attrs: { material: "fme", inlet: "diss-handtight", modelo: "fme104" },
        name: "FME104 BRASS SLIM LINE BODY",
        description: "Flujómetro Western FME104 de cuerpo latón slim line con entrada DISS handtight. Perfil reducido con conexión sin herramienta. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. || Modelo: FME104 | Flujo: 1/2–15 LPM | Cuerpo: Latón slim line | Entrada: DISS handtight | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FME104.png"
      },


      // ─── FMA – DISS HEX NUT ───────────────────────────────────────────────────
      {
        sku: "western-fma103",
        attrs: { material: "fma", inlet: "diss", modelo: "fma103" },
        name: "FMA103 ALUMINUM SLIM LINE BODY",
        description: "Flujómetro Western FMA103 de cuerpo aluminio slim line para toma de pared DISS hex nut. Más ligero que la línea FM y FME, ideal para instalaciones que priorizan peso reducido. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. || Modelo: FMA103 | Flujo: 1/2–15 LPM | Cuerpo: Aluminio slim line | Entrada: DISS hex nut | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FMA103.png"
      },


      // ─── FMA – DISS HANDTIGHT ─────────────────────────────────────────────────
      {
        sku: "western-fma104",
        attrs: { material: "fma", inlet: "diss-handtight", modelo: "fma104" },
        name: "FMA104 ALUMINUM SLIM LINE BODY",
        description: "Flujómetro Western FMA104 de cuerpo aluminio slim line con entrada DISS handtight. Cuerpo ligero con conexión sin herramienta. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. || Modelo: FMA104 | Flujo: 1/2–15 LPM | Cuerpo: Aluminio slim line | Entrada: DISS handtight | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FMA104.png"
      }

    ]
  },
  {
    id: "balon-oxigeno-medicinal",
    name: "BALÓN DE OXÍGENO MEDICINAL",
    type: "Respiratorio",
    description: "Cilindro de oxígeno medicinal de aluminio de alta resistencia 6061-T6, fabricado bajo norma DOT-3AL. Disponible en versión solo balón o kit completo con regulador, cánula nasal y vaso humidificador. Presentaciones desde el compacto M6 portátil hasta el H/K de máxima capacidad para uso hospitalario intensivo.",
    image: "/images/respiratorio/BALONES.png",

    attributeOrder: ["presentacion", "tipo"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "balon", label: "Solo Balón" },
          { id: "completo", label: "Kit Completo" }
        ]
      },
      {
        id: "tipo",
        label: "Tipo de Cilindro",
        type: "single",
        values: [
          { id: "m6", label: "M6" },
          { id: "m9", label: "M9" },
          { id: "d", label: "D" },
          { id: "e", label: "E" },
          { id: "me", label: "ME" },
          { id: "m60", label: "M60" },
          { id: "m122", label: "M122" },
          { id: "g", label: "G" },
          { id: "hk", label: "H / K" }
        ]
      }
    ],

    attributeRules: {
      "balon": { tipo: ["m6", "m9", "d", "e", "me", "m60", "m122", "g", "hk"] },
      "completo": { tipo: ["m6", "m9", "d", "e", "me", "m60", "m122", "g", "hk"] }
    },

    variants: [

      // ─── SOLO BALÓN ───────────────────────────────────────────────────────────
      {
        sku: "balon-m6",
        attrs: { presentacion: "balon", tipo: "m6" },
        name: "M6 – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo M6 de aluminio 6061-T6 bajo norma DOT-3AL. Ideal para uso portátil y traslados de corta duración. || Capacidad: 80 L (0,08 m³) | Válvula: CGA 870 | Diámetro: 8–9 cm.",
        price: 300,
        image: "/images/respiratorio/TIPO_M6.png"
      },
      {
        sku: "balon-m9",
        attrs: { presentacion: "balon", tipo: "m9" },
        name: "M9 – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo M9 de aluminio 6061-T6 bajo norma DOT-3AL. Compacto y ligero para traslados de corta duración. || Capacidad: 140 L (0,14 m³) | Válvula: CGA 870 | Diámetro: 9–10 cm.",
        price: 400,
        image: "/images/respiratorio/TIPO_M9.png"
      },
      {
        sku: "balon-d",
        attrs: { presentacion: "balon", tipo: "d" },
        name: "D – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo D de aluminio 6061-T6 bajo norma DOT-3AL. Ampliamente utilizado en traslados y urgencias. || Capacidad: 680 L (0,68 m³) | Válvula: CGA 870 | Diámetro: 11 cm.",
        price: 600,
        image: "/images/respiratorio/TIPO_D.png"
      },
      {
        sku: "balon-e",
        attrs: { presentacion: "balon", tipo: "e" },
        name: "E – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo E de aluminio 6061-T6 bajo norma DOT-3AL. Estándar para uso hospitalario y emergencias. || Capacidad: 800 L (0,80 m³) | Válvula: CGA 870 | Diámetro: 11 cm.",
        price: 700,
        image: "/images/respiratorio/TIPO_E.png"
      },
      {
        sku: "balon-me",
        attrs: { presentacion: "balon", tipo: "me" },
        name: "ME – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo ME de aluminio 6061-T6 bajo norma DOT-3AL. Mayor autonomía que el tipo E para uso clínico continuo. || Capacidad: 900 L (0,90 m³) | Válvula: CGA 870 | Diámetro: 11–12 cm.",
        price: 800,
        image: "/images/respiratorio/TIPO_ME.png"
      },
      {
        sku: "balon-m60",
        attrs: { presentacion: "balon", tipo: "m60" },
        name: "M60 – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo M60 de aluminio 6061-T6 bajo norma DOT-3AL. Para terapias de larga duración y uso domiciliario. || Capacidad: 1,330 L (1,33 m³) | Válvula: CGA 870 | Diámetro: 14 cm.",
        price: 950,
        image: "/images/respiratorio/TIPO_M60.png"
      },
      {
        sku: "balon-m122",
        attrs: { presentacion: "balon", tipo: "m122" },
        name: "M122 – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo M122 de aluminio 6061-T6 bajo norma DOT-3AL. Para terapias de larga duración y uso domiciliario de alto requerimiento. || Capacidad: 1,480 L (1,48 m³) | Válvula: CGA 870 | Diámetro: 14 cm.",
        price: 1000,
        image: "/images/respiratorio/TIPO_M122.png"
      },
      {
        sku: "balon-g",
        attrs: { presentacion: "balon", tipo: "g" },
        name: "G – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo G de aluminio 6061-T6 bajo norma DOT-3AL. Para uso hospitalario estacionario de alto consumo. || Capacidad: 3,400 L (3,40 m³) | Válvula: CGA 540 | Diámetro: 20 cm.",
        price: 1500,
        image: "/images/respiratorio/BALON_07.png"
      },
      {
        sku: "balon-hk",
        attrs: { presentacion: "balon", tipo: "hk" },
        name: "H / K – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo H/K de aluminio 6061-T6 bajo norma DOT-3AL. Mayor capacidad disponible para centrales hospitalarias y uso intensivo. || Capacidad: 7,900 L (7,90 m³) | Válvula: CGA 540 | Diámetro: 23 cm.",
        price: 2500,
        image: "/images/respiratorio/BALON_08.png"
      },

      // ─── KIT COMPLETO ─────────────────────────────────────────────────────────
      {
        sku: "kit-m6",
        attrs: { presentacion: "completo", tipo: "m6" },
        name: "M6 – Kit Completo",
        description: "Cilindro tipo M6 listo para uso inmediato. Incluye regulador de oxígeno, cánula nasal y vaso humidificador. || Capacidad: 80 L (0,08 m³) | Válvula: CGA 870 | Incluye: Regulador + cánula + humidificador.",
        price: 450,
        image: "/images/respiratorio/BALON_01.png"
      },
      {
        sku: "kit-m9",
        attrs: { presentacion: "completo", tipo: "m9" },
        name: "M9 – Kit Completo",
        description: "Cilindro tipo M9 listo para uso inmediato. Incluye regulador de oxígeno, cánula nasal y vaso humidificador. || Capacidad: 140 L (0,14 m³) | Válvula: CGA 870 | Incluye: Regulador + cánula + humidificador.",
        price: 550,
        image: "/images/respiratorio/BALON_02.png"
      },
      {
        sku: "kit-d",
        attrs: { presentacion: "completo", tipo: "d" },
        name: "D – Kit Completo",
        description: "Cilindro tipo D listo para uso inmediato. Incluye regulador de oxígeno, cánula nasal y vaso humidificador. || Capacidad: 680 L (0,68 m³) | Válvula: CGA 870 | Incluye: Regulador + cánula + humidificador.",
        price: 750,
        image: "/images/respiratorio/BALON_03.png"
      },
      {
        sku: "kit-e",
        attrs: { presentacion: "completo", tipo: "e" },
        name: "E – Kit Completo",
        description: "Cilindro tipo E listo para uso inmediato. Incluye regulador de oxígeno, cánula nasal y vaso humidificador. || Capacidad: 800 L (0,80 m³) | Válvula: CGA 870 | Incluye: Regulador + cánula + humidificador.",
        price: 850,
        image: "/images/respiratorio/BALON_04.png"
      },
      {
        sku: "kit-me",
        attrs: { presentacion: "completo", tipo: "me" },
        name: "ME – Kit Completo",
        description: "Cilindro tipo ME listo para uso inmediato. Incluye regulador de oxígeno, cánula nasal y vaso humidificador. || Capacidad: 900 L (0,90 m³) | Válvula: CGA 870 | Incluye: Regulador + cánula + humidificador.",
        price: 950,
        image: "/images/respiratorio/BALON_05.png"
      },
      {
        sku: "kit-m60",
        attrs: { presentacion: "completo", tipo: "m60" },
        name: "M60 – Kit Completo",
        description: "Cilindro tipo M60 listo para uso inmediato. Incluye regulador de oxígeno, cánula nasal y vaso humidificador. || Capacidad: 1,330 L (1,33 m³) | Válvula: CGA 870 | Incluye: Regulador + cánula + humidificador.",
        price: 1100,
        image: "/images/respiratorio/BALON_09.png"
      },
      {
        sku: "kit-m122",
        attrs: { presentacion: "completo", tipo: "m122" },
        name: "M122 – Kit Completo",
        description: "Cilindro tipo M122 listo para uso inmediato. Incluye regulador de oxígeno, cánula nasal y vaso humidificador. || Capacidad: 1,480 L (1,48 m³) | Válvula: CGA 870 | Incluye: Regulador + cánula + humidificador.",
        price: 1150,
        image: "/images/respiratorio/BALON_06.png"
      },
      {
        sku: "kit-g",
        attrs: { presentacion: "completo", tipo: "g" },
        name: "G – Kit Completo",
        description: "Cilindro tipo G listo para uso inmediato. Incluye regulador de oxígeno, cánula nasal y vaso humidificador. || Capacidad: 3,400 L (3,40 m³) | Válvula: CGA 540 | Incluye: Regulador + cánula + humidificador.",
        price: 1650,
        image: "/images/respiratorio/BALON_07.png"
      },
      {
        sku: "kit-hk",
        attrs: { presentacion: "completo", tipo: "hk" },
        name: "H / K – Kit Completo",
        description: "Cilindro tipo H/K listo para uso inmediato. Incluye regulador de oxígeno, cánula nasal y vaso humidificador. || Capacidad: 7,900 L (7,90 m³) | Válvula: CGA 540 | Incluye: Regulador + cánula + humidificador.",
        price: 2700,
        image: "/images/respiratorio/BALON_08.png"
      }
    ]
  },


  {
    id: "accesorios-instalacion-oxigeno",
    name: "ACCESORIOS DE INSTALACIÓN",
    type: "Respiratorio",
    description: "Accesorios para la instalación, soporte y conexión de sistemas de oxígeno medicinal y gases comprimidos. Incluye carros porta cilindro para traslado seguro, válvulas y conexiones para el armado del sistema, mangueras de trasegado de alta presión y frascos humidificadores para oxigenoterapia. Compatibles con cilindros de oxígeno medicinal de aluminio y acero, reguladores CGA-870 y CGA-540, y tomas de pared hospitalarias.",
    image: "/images/respiratorio/placeholder.png",

    attributeOrder: ["categoria", "producto"],

    attributes: [
      {
        id: "categoria",
        label: "Categoría",
        type: "single",
        values: [
          { id: "soporte", label: "Soporte y transporte" },
          { id: "conexiones", label: "Válvulas y conexiones" },
          { id: "transferencia", label: "Transferencia de gas" },
          { id: "humidificacion", label: "Humidificación" },
          { id: "instrumentos", label: "Instrumentos de medición" }
        ]
      },
      {
        id: "producto",
        label: "Producto",
        type: "single",
        values: [
          // Soporte
          { id: "coche-d-e-me", label: "Coche porta cilindro D/E/ME" },
          { id: "coche-m60-m90", label: "Coche porta cilindro M60/M90" },
          // Conexiones
          { id: "valvula-sherwood", label: "Válvula Sherwood CGA-540" },
          { id: "conexion-y", label: "Conexión en Y" },
          { id: "placa-mural", label: "Placa mural de oxígeno" },
          { id: "empaquetadura", label: "Empaquetadura regulador Yocke" },
          { id: "niple-plastico", label: "Niple nebulizador plástico" },
          { id: "niple-metal", label: "Niple nebulizador metal" },
          // Transferencia
          { id: "manguera-trasegado", label: "Manguera trasegado aire medicinal 1m" },
          // Humidificación
          { id: "frasco-humidificador", label: "Frasco humidificador 500ml" },

          { id: "dwyer-mark-ii", label: "Manómetro diferencial Dwyer Mark II 25" }
        ]
      }
    ],

    attributeRules: {
      "soporte": { producto: ["coche-d-e-me", "coche-m60-m90"] },
      "conexiones": { producto: ["valvula-sherwood", "conexion-y", "placa-mural", "empaquetadura", "niple-plastico", "niple-metal"] },
      "transferencia": { producto: ["manguera-trasegado"] },
      "humidificacion": { producto: ["frasco-humidificador"] },
      "instrumentos": { producto: ["dwyer-mark-ii"] }
    },

    variants: [

      // ─── SOPORTE Y TRANSPORTE ─────────────────────────────────────────────────
      {
        sku: "coche-cilindro-d-e-me",
        attrs: { categoria: "soporte", producto: "coche-d-e-me" },
        name: "COCHE PORTA CILINDRO – D / E / ME",
        description: "Carro porta cilindro de acero inoxidable AISI 304-2B para cilindros tipo D, E y ME. Estructura rodable con altura regulable entre 950 y 1,100 mm, empuñadura con recubrimiento de jebe duro negro y dos apoyos inferiores en V con regatones de alta resistencia. Ruedas de caucho de 100 mm para desplazamiento seguro en entornos hospitalarios. || Material: Acero inoxidable AISI 304-2B | Altura regulable: 950–1,100 mm | Ruedas: Caucho 100 mm | Compatible con: Cilindros D, E, ME.",
        price: 300,
        image: "/images/respiratorio/Coche_D_E.png"
      },
      {
        sku: "coche-cilindro-m60-m90",
        attrs: { categoria: "soporte", producto: "coche-m60-m90" },
        name: "COCHE PORTA CILINDRO – M60 / M90",
        description: "Carro porta cilindro de acero inoxidable AISI 304-2B para cilindros tipo M60 y M90. Estructura rodable con altura regulable entre 950 y 1,100 mm, empuñadura con recubrimiento de jebe duro negro y anillos de soporte reforzados para cilindros de mayor diámetro. Ruedas de caucho de 100 mm para desplazamiento seguro. || Material: Acero inoxidable AISI 304-2B | Altura regulable: 950–1,100 mm | Ruedas: Caucho 100 mm | Compatible con: Cilindros M60, M90.",
        price: 300,
        image: "/images/respiratorio/Coche_M60_M90.png"
      },

      // ─── VÁLVULAS Y CONEXIONES ────────────────────────────────────────────────
      {
        sku: "valvula-sherwood-cga540",
        attrs: { categoria: "conexiones", producto: "valvula-sherwood" },
        name: "VÁLVULA SHERWOOD CGA-540",
        description: "Válvula Sherwood U18 para cilindros de oxígeno de alta presión con conexión estándar CGA-540. Cuerpo de latón de alta resistencia para uso en aplicaciones médicas e industriales. Garantiza hermeticidad y confiabilidad en sistemas de gases comprimidos con válvula de seguridad interna. || Conexión: CGA-540 | Material: Latón de alta resistencia | Presión máx.: 3,000 PSI | Uso: Médico e industrial.",
        price: 180,
        image: "/images/respiratorio/CGA540.png"
      },
      {
        sku: "conexion-y-oxigeno",
        attrs: { categoria: "conexiones", producto: "conexion-y" },
        name: "CONEXIÓN EN Y PARA PUNTOS DE OXÍGENO",
        description: "Conexión en Y para puntos de oxígeno medicinal que permite derivar el suministro de un punto de pared hacia dos salidas simultáneas. Fabricada en materiales compatibles con oxígeno medicinal para uso hospitalario. || Uso: Puntos de oxígeno de pared | Salidas: 2 simultáneas.",
        price: 84,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "placa-mural-oxigeno",
        attrs: { categoria: "conexiones", producto: "placa-mural" },
        name: "PLACA MURAL DE OXÍGENO",
        description: "Placa mural para instalación de puntos de oxígeno medicinal en pared hospitalaria. Permite la conexión de flujómetros y reguladores mediante toma DISS estándar. Fabricada en materiales compatibles con oxígeno medicinal para instalación fija en boxes y habitaciones. || Uso: Instalación fija en pared | Conexión: DISS estándar.",
        price: 120,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "empaquetadura-yocke",
        attrs: { categoria: "conexiones", producto: "empaquetadura" },
        name: "EMPAQUETADURA REGULADOR YOCKE",
        description: "Empaque de latón con Viton reutilizable para cilindros tipo E con válvula CGA-870 Yocke. A diferencia de los empaques plásticos desechables, está diseñado para reutilizarse entre cambios de cilindro garantizando sellado hermético y eliminando fugas entre el balón y el regulador. || Material: Latón con Viton | Compatible con: Cilindros tipo E CGA-870 Yocke | Uso: Reutilizable.",
        price: 8,
        image: "/images/respiratorio/EMPAQUETADURA.png"
      },
      {
        sku: "niple-nebulizador-plastico",
        attrs: { categoria: "conexiones", producto: "niple-plastico" },
        name: "NIPLE NEBULIZADOR – PLÁSTICO",
        description: "Niple para nebulizar de plástico compatible con equipos estándar de oxigenoterapia y nebulización. Conexión entre el flujómetro y el vaso nebulizador o mascarilla. Desechable de un solo uso para control de infecciones. || Material: Plástico | Uso: Conexión flujómetro–nebulizador | Tipo: Desechable.",
        price: 6,
        image: "/images/respiratorio/NIPLE_P.png"
      },
      {
        sku: "niple-nebulizador-metal",
        attrs: { categoria: "conexiones", producto: "niple-metal" },
        name: "NIPLE NEBULIZADOR – METAL",
        description: "Niple para nebulizar de metal para uso clínico continuo. Mayor durabilidad y resistencia a la corrosión respecto al modelo plástico. Compatible con equipos estándar de oxigenoterapia y nebulización. || Material: Metal | Uso: Conexión flujómetro–nebulizador | Tipo: Reutilizable.",
        price: 15,
        image: "/images/respiratorio/NIPLE_M.png"
      },

      // ─── TRANSFERENCIA DE GAS ─────────────────────────────────────────────────
      {
        sku: "manguera-trasegado-1m",
        attrs: { categoria: "transferencia", producto: "manguera-trasegado" },
        name: "MANGUERA TRASEGADO AIRE MEDICINAL 1 METRO",
        description: "Manguera de alta presión para trasegado de aire medicinal con conexiones 1/4\" NPT 88304. Soporta presiones de hasta 4,000 PSI con válvula de cierre rápido (VCV) integrada. Longitud de 1 metro para operaciones de llenado y transferencia de gas entre cilindros en instalaciones hospitalarias e industriales. || Conexión: 1/4\" NPT 88304 | Presión máx.: 4,000 PSI | Longitud: 1 metro | Válvula: VCV integrada.",
        price: 384,
        image: "/images/respiratorio/MANGUERA.png"
      },

      // ─── HUMIDIFICACIÓN ───────────────────────────────────────────────────────
      {
        sku: "frasco-humidificador-500ml",
        attrs: { categoria: "humidificacion", producto: "frasco-humidificador" },
        name: "FRASCO HUMIDIFICADOR 500ML – TAPA METAL",
        description: "Frasco humidificador de 500 ml con tapa metálica para humidificación y burbujeo de oxígeno en equipos de oxigenoterapia. Construcción resistente con cierre hermético y tapa de metal para conexión estable con reguladores y flujómetros con salida DISS 1240. De fácil limpieza y esterilización para uso clínico y hospitalario. || Capacidad: 500 ml | Tapa: Metal | Conexión: Compatible con salida DISS 1240 | Uso: Oxigenoterapia clínica y hospitalaria.",
        price: 30,
        image: "/images/respiratorio/FRASCO_HUMIDIFICADOR_500ML.png"
      },
      {
        sku: "dwyer-mark-ii-25",
        attrs: { categoria: "instrumentos", producto: "dwyer-mark-ii" },
        name: "MANÓMETRO DIFERENCIAL DWYER MARK II 25",
        description: "Manómetro de presión diferencial Dwyer serie Mark II modelo 25 de tipo inclinado-vertical para medición de presiones positivas, negativas y diferenciales en instalaciones de gases medicinales, salas limpias y sistemas HVAC hospitalarios. Construcción de plástico moldeado resistente con tubo indicador inclinado-vertical para rangos más altos y lectura más fácil en valores bajos. Disponible en configuración estacionaria y portátil. || Rango: 0–30 mm c.a. | Exactitud: ±3% escala completa | Temp. máx.: 60°C | Presión máx.: 10 PSI (70 kPa) | Peso: 472 g | Marca: Dwyer.",
        price: 359.51,
        image: "/images/respiratorio/placeholder.png"
      }
    ]
  },

  {
    id: "administracion-oxigeno-paciente",
    name: "ADMINISTRACIÓN DE OXÍGENO AL PACIENTE",
    type: "Respiratorio",
    description: "Dispositivos para la administración de oxígeno medicinal directamente al paciente. Incluye cánulas nasales (neonatal, pediátrico y adulto), mascarillas de oxígeno en tres modalidades (simple, Venturi con FiO₂ fija y reservorio de alto flujo) y tubing de extensión y nebulización. Disponibles en versiones desechables para uso único y reutilizables para uso clínico continuo.",
    image: "/images/respiratorio/placeholder.png",

    attributeOrder: ["dispositivo", "paciente", "tipo"],

    attributes: [
      {
        id: "dispositivo",
        label: "Dispositivo",
        type: "single",
        values: [
          { id: "canula", label: "Cánula nasal" },
          { id: "mascarilla-simple", label: "Mascarilla simple" },
          { id: "mascarilla-venturi", label: "Mascarilla Venturi" },
          { id: "mascarilla-reservorio", label: "Mascarilla con reservorio" },
          { id: "tubing", label: "Tubing / Extensión" }
        ]
      },
      {
        id: "paciente",
        label: "Paciente",
        type: "single",
        values: [
          { id: "neonatal", label: "Neonatal" },
          { id: "pediatrico", label: "Pediátrico" },
          { id: "adulto", label: "Adulto" },
          { id: "universal", label: "Universal" }
        ]
      },
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "desechable", label: "Desechable" },
          { id: "reutilizable", label: "Reutilizable" },
          // Venturi FiO₂
          { id: "fio2-24", label: "FiO₂ 24%" },
          { id: "fio2-28", label: "FiO₂ 28%" },
          { id: "fio2-31", label: "FiO₂ 31%" },
          { id: "fio2-35", label: "FiO₂ 35%" },
          { id: "fio2-40", label: "FiO₂ 40%" },
          { id: "fio2-60", label: "FiO₂ 60%" },
          // Tubing longitudes
          { id: "tubing-nebulizacion", label: "Nebulización" },
          { id: "tubing-1-8m", label: "Extensión 1,8 m" },
          { id: "tubing-3m", label: "Extensión 3 m" },
          { id: "tubing-7m", label: "Extensión 7 m" },
          { id: "tubing-15m", label: "Extensión 15 m" }
        ]
      }
    ],

    attributeRules: {
      // Dispositivo → Paciente
      "canula": { paciente: ["neonatal", "pediatrico", "adulto"] },
      "mascarilla-simple": { paciente: ["pediatrico", "adulto"] },
      "mascarilla-venturi": { paciente: ["adulto"] },
      "mascarilla-reservorio": { paciente: ["adulto"] },
      "tubing": { paciente: ["universal"] },

      // Dispositivo → Tipo
      "canula": { tipo: ["desechable", "reutilizable"] },
      "mascarilla-simple": { tipo: ["desechable", "reutilizable"] },
      "mascarilla-venturi": { tipo: ["fio2-24", "fio2-28", "fio2-31", "fio2-35", "fio2-40", "fio2-60"] },
      "mascarilla-reservorio": { tipo: ["desechable", "reutilizable"] },
      "tubing": { tipo: ["tubing-nebulizacion", "tubing-1-8m", "tubing-3m", "tubing-7m", "tubing-15m"] }
    },

    variants: [

      // ─── CÁNULA NASAL – NEONATAL ──────────────────────────────────────────────
      {
        sku: "canula-neonatal-desechable",
        attrs: { dispositivo: "canula", paciente: "neonatal", tipo: "desechable" },
        name: "CÁNULA NASAL NEONATAL – DESECHABLE",
        description: "Cánula nasal de bajo flujo para administración de oxígeno en neonatos. Puntas nasales de diámetro mínimo adaptadas a la anatomía neonatal con tubo flexible de PVC suave. Diseño de uso único para control de infecciones en unidades de neonatología y UCI neonatal. || Paciente: Neonatal | Flujo recomendado: 0,1–1 LPM | Material: PVC suave | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "canula-neonatal-reutilizable",
        attrs: { dispositivo: "canula", paciente: "neonatal", tipo: "reutilizable" },
        name: "CÁNULA NASAL NEONATAL – REUTILIZABLE",
        description: "Cánula nasal de bajo flujo reutilizable para administración de oxígeno en neonatos. Puntas nasales de silicona suave de diámetro mínimo adaptadas a la anatomía neonatal. Resistente a la desinfección y esterilización para uso clínico continuo en neonatología. || Paciente: Neonatal | Flujo recomendado: 0,1–1 LPM | Material: Silicona | Uso: Reutilizable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── CÁNULA NASAL – PEDIÁTRICO ────────────────────────────────────────────
      {
        sku: "canula-pediatrica-desechable",
        attrs: { dispositivo: "canula", paciente: "pediatrico", tipo: "desechable" },
        name: "CÁNULA NASAL PEDIÁTRICA – DESECHABLE",
        description: "Cánula nasal de bajo flujo para administración de oxígeno en niños. Puntas nasales de PVC suave de diámetro reducido adaptadas a la anatomía pediátrica. Diseño de uso único para control de infecciones en consultorios y hospitalización pediátrica. || Paciente: Pediátrico | Flujo recomendado: 0,5–3 LPM | Material: PVC suave | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "canula-pediatrica-reutilizable",
        attrs: { dispositivo: "canula", paciente: "pediatrico", tipo: "reutilizable" },
        name: "CÁNULA NASAL PEDIÁTRICA – REUTILIZABLE",
        description: "Cánula nasal de bajo flujo reutilizable para administración de oxígeno en niños. Puntas nasales de silicona suave de diámetro reducido adaptadas a la anatomía pediátrica. Resistente a la desinfección para uso clínico continuo. || Paciente: Pediátrico | Flujo recomendado: 0,5–3 LPM | Material: Silicona | Uso: Reutilizable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── CÁNULA NASAL – ADULTO ────────────────────────────────────────────────
      {
        sku: "canula-adulto-desechable",
        attrs: { dispositivo: "canula", paciente: "adulto", tipo: "desechable" },
        name: "CÁNULA NASAL ADULTO – DESECHABLE",
        description: "Cánula nasal de bajo flujo para administración de oxígeno en adultos. Puntas nasales de PVC suave con tubo flexible de 2,1 m para conexión directa al flujómetro o regulador. Diseño de uso único para control de infecciones en hospitalización y domicilio. || Paciente: Adulto | Flujo recomendado: 1–6 LPM | Material: PVC suave | Longitud: 2,1 m | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "canula-adulto-reutilizable",
        attrs: { dispositivo: "canula", paciente: "adulto", tipo: "reutilizable" },
        name: "CÁNULA NASAL ADULTO – REUTILIZABLE",
        description: "Cánula nasal de bajo flujo reutilizable para administración de oxígeno en adultos. Puntas nasales de silicona suave con tubo flexible para conexión al flujómetro o regulador. Resistente a la desinfección y esterilización para uso clínico continuo y domiciliario de largo plazo. || Paciente: Adulto | Flujo recomendado: 1–6 LPM | Material: Silicona | Uso: Reutilizable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── MASCARILLA SIMPLE – PEDIÁTRICO ──────────────────────────────────────
      {
        sku: "mascarilla-simple-pediatrica-desechable",
        attrs: { dispositivo: "mascarilla-simple", paciente: "pediatrico", tipo: "desechable" },
        name: "MASCARILLA SIMPLE PEDIÁTRICA – DESECHABLE",
        description: "Mascarilla de oxígeno simple pediátrica de uso único para administración de oxígeno a flujo libre en niños. Cuerpo de PVC transparente con clips nasal ajustable y elástico de sujeción. Suministra FiO₂ de 35–50% a flujos de 5–8 LPM. Compatible con tubing estándar de oxígeno. || Paciente: Pediátrico | FiO₂ aprox.: 35–50% | Flujo: 5–8 LPM | Material: PVC transparente | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "mascarilla-simple-pediatrica-reutilizable",
        attrs: { dispositivo: "mascarilla-simple", paciente: "pediatrico", tipo: "reutilizable" },
        name: "MASCARILLA SIMPLE PEDIÁTRICA – REUTILIZABLE",
        description: "Mascarilla de oxígeno simple pediátrica reutilizable para administración de oxígeno a flujo libre en niños. Cuerpo de silicona transparente con clips nasal ajustable. Resistente a la desinfección y esterilización para uso clínico continuo. Compatible con tubing estándar de oxígeno. || Paciente: Pediátrico | FiO₂ aprox.: 35–50% | Flujo: 5–8 LPM | Material: Silicona | Uso: Reutilizable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── MASCARILLA SIMPLE – ADULTO ───────────────────────────────────────────
      {
        sku: "mascarilla-simple-adulto-desechable",
        attrs: { dispositivo: "mascarilla-simple", paciente: "adulto", tipo: "desechable" },
        name: "MASCARILLA SIMPLE ADULTO – DESECHABLE",
        description: "Mascarilla de oxígeno simple adulto de uso único para administración de oxígeno a flujo libre. Cuerpo de PVC transparente con clips nasal ajustable y elástico de sujeción. Suministra FiO₂ de 35–50% a flujos de 5–10 LPM. Compatible con tubing estándar de oxígeno. || Paciente: Adulto | FiO₂ aprox.: 35–50% | Flujo: 5–10 LPM | Material: PVC transparente | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "mascarilla-simple-adulto-reutilizable",
        attrs: { dispositivo: "mascarilla-simple", paciente: "adulto", tipo: "reutilizable" },
        name: "MASCARILLA SIMPLE ADULTO – REUTILIZABLE",
        description: "Mascarilla de oxígeno simple adulto reutilizable para administración de oxígeno a flujo libre. Cuerpo de silicona transparente con clips nasal ajustable y elástico regulable. Resistente a la desinfección y esterilización para uso clínico continuo. || Paciente: Adulto | FiO₂ aprox.: 35–50% | Flujo: 5–10 LPM | Material: Silicona | Uso: Reutilizable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── MASCARILLA VENTURI ───────────────────────────────────────────────────
      {
        sku: "mascarilla-venturi-24",
        attrs: { dispositivo: "mascarilla-venturi", paciente: "adulto", tipo: "fio2-24" },
        name: "MASCARILLA VENTURI – FiO₂ 24%",
        description: "Mascarilla Venturi adulto con dilutador fijo al 24% de FiO₂ para administración de oxígeno controlado en pacientes con EPOC e insuficiencia respiratoria crónica donde se requiere concentración precisa y baja de oxígeno. Cuerpo de PVC transparente con puerto Venturi codificado por color. || FiO₂: 24% fija | Flujo recomendado: 2 LPM | Paciente: Adulto | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "mascarilla-venturi-28",
        attrs: { dispositivo: "mascarilla-venturi", paciente: "adulto", tipo: "fio2-28" },
        name: "MASCARILLA VENTURI – FiO₂ 28%",
        description: "Mascarilla Venturi adulto con dilutador fijo al 28% de FiO₂ para administración de oxígeno controlado. Puerto Venturi codificado por color. Indicada para pacientes con requerimiento leve-moderado de oxígeno suplementario con concentración precisa. || FiO₂: 28% fija | Flujo recomendado: 4 LPM | Paciente: Adulto | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "mascarilla-venturi-31",
        attrs: { dispositivo: "mascarilla-venturi", paciente: "adulto", tipo: "fio2-31" },
        name: "MASCARILLA VENTURI – FiO₂ 31%",
        description: "Mascarilla Venturi adulto con dilutador fijo al 31% de FiO₂. Puerto Venturi codificado por color. Indicada para pacientes con requerimiento moderado de oxígeno suplementario con concentración controlada. || FiO₂: 31% fija | Flujo recomendado: 6 LPM | Paciente: Adulto | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "mascarilla-venturi-35",
        attrs: { dispositivo: "mascarilla-venturi", paciente: "adulto", tipo: "fio2-35" },
        name: "MASCARILLA VENTURI – FiO₂ 35%",
        description: "Mascarilla Venturi adulto con dilutador fijo al 35% de FiO₂. Puerto Venturi codificado por color. Indicada para pacientes con requerimiento moderado-alto de oxígeno suplementario con concentración precisa. || FiO₂: 35% fija | Flujo recomendado: 8 LPM | Paciente: Adulto | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "mascarilla-venturi-40",
        attrs: { dispositivo: "mascarilla-venturi", paciente: "adulto", tipo: "fio2-40" },
        name: "MASCARILLA VENTURI – FiO₂ 40%",
        description: "Mascarilla Venturi adulto con dilutador fijo al 40% de FiO₂. Puerto Venturi codificado por color. Indicada para pacientes con hipoxemia moderada que requieren concentración controlada y elevada de oxígeno. || FiO₂: 40% fija | Flujo recomendado: 8–10 LPM | Paciente: Adulto | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "mascarilla-venturi-60",
        attrs: { dispositivo: "mascarilla-venturi", paciente: "adulto", tipo: "fio2-60" },
        name: "MASCARILLA VENTURI – FiO₂ 60%",
        description: "Mascarilla Venturi adulto con dilutador fijo al 60% de FiO₂ para administración de alta concentración controlada de oxígeno. Puerto Venturi codificado por color. Indicada para pacientes con hipoxemia severa en entornos de urgencias y UCI. || FiO₂: 60% fija | Flujo recomendado: 12–15 LPM | Paciente: Adulto | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── MASCARILLA RESERVORIO ────────────────────────────────────────────────
      {
        sku: "mascarilla-reservorio-desechable",
        attrs: { dispositivo: "mascarilla-reservorio", paciente: "adulto", tipo: "desechable" },
        name: "MASCARILLA CON RESERVORIO – DESECHABLE",
        description: "Mascarilla de oxígeno con bolsa reservorio de uso único para administración de alta concentración de oxígeno (FiO₂ 90–95%) en emergencias y UCI. La bolsa reservorio acumula oxígeno puro durante la espiración para suministrar alta concentración en cada inspiración. Incluye válvulas unidireccionales para evitar reinhalación de CO₂. || FiO₂ aprox.: 90–95% | Flujo: 10–15 LPM | Paciente: Adulto | Uso: Único desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "mascarilla-reservorio-reutilizable",
        attrs: { dispositivo: "mascarilla-reservorio", paciente: "adulto", tipo: "reutilizable" },
        name: "MASCARILLA CON RESERVORIO – REUTILIZABLE",
        description: "Mascarilla de oxígeno con bolsa reservorio reutilizable para administración de alta concentración de oxígeno en entornos clínicos de uso continuo. Cuerpo y bolsa de silicona médica resistente a la desinfección y esterilización. Válvulas unidireccionales para evitar reinhalación de CO₂. || FiO₂ aprox.: 90–95% | Flujo: 10–15 LPM | Paciente: Adulto | Material: Silicona médica | Uso: Reutilizable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── TUBING ───────────────────────────────────────────────────────────────
      {
        sku: "tubing-nebulizacion",
        attrs: { dispositivo: "tubing", paciente: "universal", tipo: "tubing-nebulizacion" },
        name: "TUBING DE NEBULIZACIÓN",
        description: "Tubo conector de PVC para nebulización, compatible con equipos de nebulización por compresor y nebulizadores de malla. Conecta el vaso nebulizador a la mascarilla o boquilla de administración. De uso único para control de infecciones. || Uso: Nebulización | Material: PVC | Tipo: Desechable.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "tubing-extension-1-8m",
        attrs: { dispositivo: "tubing", paciente: "universal", tipo: "tubing-1-8m" },
        name: "TUBING EXTENSIÓN OXÍGENO – 1,8 M",
        description: "Tubo de extensión de oxígeno de 1,8 metros para aumentar la distancia entre el flujómetro o regulador y el dispositivo de administración al paciente. PVC médico flexible compatible con cánulas, mascarillas y nebulizadores. || Longitud: 1,8 m | Material: PVC médico | Uso: Extensión de oxígeno.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "tubing-extension-3m",
        attrs: { dispositivo: "tubing", paciente: "universal", tipo: "tubing-3m" },
        name: "TUBING EXTENSIÓN OXÍGENO – 3 M",
        description: "Tubo de extensión de oxígeno de 3 metros para mayor libertad de movimiento del paciente respecto al punto de suministro. PVC médico flexible compatible con cánulas, mascarillas y nebulizadores. || Longitud: 3 m | Material: PVC médico | Uso: Extensión de oxígeno.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "tubing-extension-7m",
        attrs: { dispositivo: "tubing", paciente: "universal", tipo: "tubing-7m" },
        name: "TUBING EXTENSIÓN OXÍGENO – 7 M",
        description: "Tubo de extensión de oxígeno de 7 metros para uso domiciliario que permite al paciente moverse libremente entre habitaciones mientras recibe oxigenoterapia continua. PVC médico flexible. || Longitud: 7 m | Material: PVC médico | Uso: Extensión domiciliaria.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "tubing-extension-15m",
        attrs: { dispositivo: "tubing", paciente: "universal", tipo: "tubing-15m" },
        name: "TUBING EXTENSIÓN OXÍGENO – 15 M",
        description: "Tubo de extensión de oxígeno de 15 metros de máxima longitud para uso domiciliario de alto alcance. Permite al paciente circular libremente por el hogar durante oxigenoterapia continua con concentrador o balón. PVC médico flexible. || Longitud: 15 m | Material: PVC médico | Uso: Extensión domiciliaria máximo alcance.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      }
    ]
  },

  {
    id: "nebulizadores",
    name: "NEBULIZADORES",
    type: "Respiratorio",
    description: "Nebulizadores para la administración de medicamentos líquidos en forma de aerosol fino directamente a las vías respiratorias. Indicados para el tratamiento de asma, bronquitis, EPOC, sinusitis y otras afecciones respiratorias. Disponibles en tecnología de compresor de pistón (mayor flujo y estabilidad, ideales para uso domiciliario y clínico) y malla ultrasónica portátil (silenciosos, compactos y sin medicamento residual). Marcas: Omron, Beurer, Citizen y Yuwell.",
    image: "/images/respiratorio/placeholder.png",

    attributeOrder: ["tecnologia", "marca", "modelo"],

    attributes: [
      {
        id: "tecnologia",
        label: "Tecnología",
        type: "single",
        values: [
          { id: "compresor", label: "Compresor de pistón" },
          { id: "malla", label: "Malla ultrasónica portátil" }
        ]
      },
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "omron", label: "Omron" },
          { id: "beurer", label: "Beurer" },
          { id: "citizen", label: "Citizen" },
          { id: "yuwell", label: "Yuwell" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "ne-c801", label: "NE-C801" },
          { id: "ne-c803", label: "NE-C803" },
          { id: "ih-21", label: "IH-21" },
          { id: "gc806", label: "GC806" },
          { id: "403d", label: "403D" },
          { id: "malla-portatil", label: "Portátil de malla" }
        ]
      }
    ],

    attributeRules: {
      // Tecnología → Marca
      "compresor": { marca: ["omron", "beurer", "citizen", "yuwell"] },
      "malla": { marca: ["omron"] },

      // Marca → Modelo
      "omron": { modelo: ["ne-c801", "ne-c803", "malla-portatil"] },
      "beurer": { modelo: ["ih-21"] },
      "citizen": { modelo: ["gc806"] },
      "yuwell": { modelo: ["403d"] }
    },

    variants: [

      // ─── OMRON – COMPRESOR ────────────────────────────────────────────────────
      {
        sku: "omron-ne-c801",
        attrs: { tecnologia: "compresor", marca: "omron", modelo: "ne-c801" },
        name: "OMRON NE-C801",
        description: "Nebulizador de compresor Omron NE-C801 con tecnología Virtual Valve Technology (V.V.T.) que reduce el desperdicio de medicamento y el tiempo de administración a 0,3 ml/min. El más silencioso de su categoría con solo 46 dB, compacto y liviano con 270 g para fácil transporte. Apto para niños y adultos. Incluye mascarilla adulto, mascarilla pediátrica, boquilla, tubo de aire 100 cm, filtros de repuesto y estuche de almacenamiento. || Tecnología: V.V.T. compresor | Partículas: 3 µm MMAD | Tasa nebulización: 0,3 ml/min | Capacidad vaso: 7 ml | Ruido: 46 dB | Peso: 270 g | Operación: 20 min intermitente.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "omron-ne-c803",
        attrs: { tecnologia: "compresor", marca: "omron", modelo: "ne-c803" },
        name: "OMRON NE-C803",
        description: "Nebulizador de compresor Omron NE-C803 con tecnología V.V.T. mejorada — el más silencioso de la línea Omron con menos de 45 dB. Mayor autonomía y rendimiento respecto al NE-C801 para tratamientos más prolongados. Apto para niños y adultos. Incluye mascarilla adulto, mascarilla pediátrica, boquilla, tubo de aire, filtros de repuesto y estuche de transporte. || Tecnología: V.V.T. compresor | Partículas: 3 µm MMAD | Ruido: < 45 dB | Capacidad vaso: 7 ml | Operación: Uso continuo mejorado.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── OMRON – MALLA ULTRASÓNICA ────────────────────────────────────────────
      {
        sku: "omron-malla-portatil",
        attrs: { tecnologia: "malla", marca: "omron", modelo: "malla-portatil" },
        name: "OMRON – NEBULIZADOR DE MALLA PORTÁTIL",
        description: "Nebulizador de malla ultrasónica portátil Omron para uso en cualquier posición — acostado, sentado o de pie — sin derrame de medicamento. Silencioso y compacto para uso domiciliario y en viajes. Batería recargable con autonomía para múltiples sesiones. Partículas ultrafinas de 3 µm para penetración profunda en vías respiratorias bajas. Apto para niños y adultos. || Tecnología: Malla ultrasónica | Posición de uso: Cualquiera | Alimentación: Batería recargable | Partículas: 3 µm | Ruido: Mínimo.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── BEURER – COMPRESOR ───────────────────────────────────────────────────
      {
        sku: "beurer-ih-21",
        attrs: { tecnologia: "compresor", marca: "beurer", modelo: "ih-21" },
        name: "BEURER IH-21",
        description: "Nebulizador de compresor Beurer IH-21 con tecnología de aire comprimido que produce partículas de 3,07 µm para penetración profunda en vías respiratorias. Tasa de nebulización de 0,3 ml/min con bajo desperdicio de medicamento. Compartimento integrado para guardar accesorios. Incluye mascarilla adulto, mascarilla pediátrica, boquilla nasal, boquilla bucal, tubo de aire extralargo y filtro. || Tecnología: Compresor CA | Partículas: 3,07 µm MMAD | Tasa nebulización: 0,3 ml/min | Peso: 1,65 kg | Dimensiones: 30×18×10 cm | Alimentación: 230V 50Hz.",
        price: 259,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── CITIZEN – COMPRESOR ──────────────────────────────────────────────────
      {
        sku: "citizen-gc806",
        attrs: { tecnologia: "compresor", marca: "citizen", modelo: "gc806" },
        name: "CITIZEN GC806",
        description: "Nebulizador de compresor pistón Citizen GC806 de procedencia japonesa, compacto y liviano para uso domiciliario y clínico. Apto para niños y adultos con partículas de 3,07 µm MMAD para tratamiento eficaz de vías respiratorias superiores e inferiores. Válvula de alta eficiencia sin lubricación diaria. Vida útil esperada de 1,000 horas. Incluye boquilla, tubo de aire, mascarilla adulto, mascarilla pediátrica, pieza nasal y filtros de repuesto. || Tecnología: Compresor pistón | Partículas: 3,07 µm MMAD | Tasa nebulización: 0,35 ml/min | Presión máx.: 2,2 bar | Capacidad vaso: 8 ml | Ruido: 52 dB | Vida útil: 1,000 h.",
        price: 220,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── YUWELL – COMPRESOR ───────────────────────────────────────────────────
      {
        sku: "yuwell-403d",
        attrs: { tecnologia: "compresor", marca: "yuwell", modelo: "403d" },
        name: "YUWELL 403D",
        description: "Nebulizador de compresor Yuwell 403D para uso domiciliario y clínico. Sin aceite y sin lubricación diaria gracias a su válvula de alta eficiencia. Mayor flujo de bomba (≥10 L/min) y presión de salida (≥21 PSI) que los modelos estándar, lo que garantiza mayor estabilidad en el tratamiento. Bajo nivel de ruido (≤65 dB). Apto para todo tipo de pacientes. || Tecnología: Compresor pistón | Partículas: 3,9 µm | Tasa nebulización: 0,1 ml/min | Flujo bomba: ≥10 L/min | Presión: ≥21 PSI | Capacidad vaso: 7 ml | Ruido: ≤65 dB | Peso: ≤1,5 kg.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      }
    ]
  },

  {
    id: "concentradores-oxigeno",
    name: "CONCENTRADORES DE OXÍGENO",
    type: "Respiratorio",
    description: "Concentradores de oxígeno medicinal que extraen y concentran el oxígeno del aire ambiente mediante tecnología PSA (Pressure Swing Adsorption), suministrando oxígeno con pureza de 93% ±3% de forma continua sin necesidad de recargas. Disponibles en versión estacionaria domiciliaria (5 LPM), estacionaria de alto requerimiento (10 LPM) y portátil de flujo a pulso para pacientes activos. Indicados para EPOC, fibrosis pulmonar, insuficiencia respiratoria crónica y oxigenoterapia domiciliaria de largo plazo.",
    image: "/images/respiratorio/placeholder.png",

    attributeOrder: ["uso", "marca", "modelo"],

    attributes: [
      {
        id: "uso",
        label: "Uso",
        type: "single",
        values: [
          { id: "estacionario-5", label: "Estacionario domiciliario (0,5–5 LPM)" },
          { id: "estacionario-10", label: "Estacionario alto requerimiento (1–10 LPM)" },
          { id: "portatil", label: "Portátil a pulso" }
        ]
      },
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "philips", label: "Philips Respironics" },
          { id: "varon", label: "Varon" },
          { id: "inogen", label: "Inogen" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "everflo", label: "EverFlo 5 LPM" },
          { id: "everflo-10", label: "EverFlo 10 LPM" },
          { id: "ae-10", label: "AE-10" },
          { id: "nt-1", label: "NT-1" },
          { id: "nt-02", label: "NT-02" },
          { id: "inogen-g3", label: "One G3" },
          { id: "inogen-g4", label: "One G4" }
        ]
      }
    ],

    attributeRules: {
      // Uso → Marca
      "estacionario-5": { marca: ["philips", "varon"] },
      "estacionario-10": { marca: ["philips", "varon"] },
      "portatil": { marca: ["inogen", "varon"] },

      // Marca + Uso → Modelo
      "philips": { modelo: ["everflo", "everflo-10"] },
      "varon": { modelo: ["ae-10", "nt-1", "nt-02"] },
      "inogen": { modelo: ["inogen-g3", "inogen-g4"] },

      // Uso → Modelo refinamiento
      "estacionario-5": { modelo: ["everflo", "ae-10"] },
      "estacionario-10": { modelo: ["everflo-10", "ae-10"] },
      "portatil": { modelo: ["nt-1", "nt-02", "inogen-g3", "inogen-g4"] }
    },

    variants: [

      // ─── ESTACIONARIO 5 LPM ───────────────────────────────────────────────────
      {
        sku: "philips-everflo-5",
        attrs: { uso: "estacionario-5", marca: "philips", modelo: "everflo" },
        name: "PHILIPS RESPIRONICS EVERFLO – 5 LPM",
        description: "Concentrador de oxígeno estacionario Philips Respironics EverFlo, el más compacto y silencioso del mercado domiciliario con solo 43 dBA. Tecnología PSA de flujo continuo hasta 5 LPM con pureza de 93% ±3%. Diseño ergonómico de 14,5 kg con plataforma compatible con todos los estilos de humidificador. Sin filtros de mantenimiento para el paciente y salida de oxígeno metálica de alta durabilidad. Indicado para oxigenoterapia domiciliaria en EPOC, fibrosis pulmonar e insuficiencia respiratoria crónica. || Flujo: 0,5–5 LPM continuo | Pureza: 93% ±3% | Ruido: 43 dBA | Peso: 14,5 kg | Consumo: 230 W | Altitud máx.: 2,286 m | Alimentación: 220V 50Hz.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "varon-ae-10-5lpm",
        attrs: { uso: "estacionario-5", marca: "varon", modelo: "ae-10" },
        name: "VARON AE-10 – 5 LPM",
        description: "Concentrador de oxígeno estacionario Varon AE-10 en configuración de 5 LPM. Tecnología PSA con pureza de 93% ±3%, filtro HEPA, alarmas de fallo de energía, temperatura y concentración baja de oxígeno. Diseñado para funcionamiento continuo de 24 horas con vida útil de 20,000 horas. Opción de excelente relación precio-valor para oxigenoterapia domiciliaria y clínica. || Flujo: 1–5 LPM continuo | Pureza: 93% ±3% | Ruido: ≤50 dBA | Filtro: HEPA | Funcionamiento: 24 h continuo | Vida útil: 20,000 h | Alarmas: Energía, temperatura, concentración.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── ESTACIONARIO 10 LPM ──────────────────────────────────────────────────
      {
        sku: "philips-everflo-10",
        attrs: { uso: "estacionario-10", marca: "philips", modelo: "everflo-10" },
        name: "PHILIPS RESPIRONICS EVERFLO – 10 LPM",
        description: "Concentrador de oxígeno estacionario Philips Respironics EverFlo de alta capacidad para pacientes con requerimiento elevado de oxígeno. Flujo continuo hasta 10 LPM con pureza de 93% ±3%. Tecnología PSA con bajo mantenimiento, salida metálica de oxígeno y sistema de diagnóstico integrado. Indicado para pacientes con EPOC severo, fibrosis pulmonar avanzada y uso clínico de alto consumo. || Flujo: 1–10 LPM continuo | Pureza: 93% ±3% | Tecnología: PSA | Alimentación: 220V 50Hz.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "varon-ae-10",
        attrs: { uso: "estacionario-10", marca: "varon", modelo: "ae-10" },
        name: "VARON AE-10 – 10 LPM",
        description: "Concentrador de oxígeno estacionario Varon AE-10 de alta capacidad para pacientes con requerimiento elevado. Tecnología PSA con pureza 93% ±3%, filtro HEPA y alarmas múltiples de seguridad. Funcionamiento continuo de 24 horas con vida útil de 20,000 horas. Presión de salida 45 ±10% kPa. Opción de alto rendimiento a precio accesible para clínicas y uso domiciliario intensivo. || Flujo: 1–10 LPM continuo | Pureza: 93% ±3% | Ruido: ≤50 dBA | Consumo: 610 W | Peso: 24 kg | Dimensiones: 372×340×612 mm | Vida útil: 20,000 h.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── PORTÁTIL – VARON ─────────────────────────────────────────────────────
      {
        sku: "varon-nt-1",
        attrs: { uso: "portatil", marca: "varon", modelo: "nt-1" },
        name: "VARON NT-1 – PORTÁTIL PULSO",
        description: "Concentrador de oxígeno portátil Varon NT-1 con flujo a pulso de 6 niveles para pacientes activos que requieren oxigenoterapia fuera del hogar. Batería recargable integrada de 92 Wh para uso sin conexión a red. Tecnología PSA con pureza de 93% ±3%. Liviano y compacto con bolsa de transporte incluida. || Flujo: 6 niveles a pulso | Pureza: 93% ±3% | Batería: 92 Wh / 6,4 Ah | Peso: 2,9 kg | Ruido: ≤58 dBA | Alimentación: AC 100–240V 50/60 Hz | Potencia: 75 W.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "varon-nt-02",
        attrs: { uso: "portatil", marca: "varon", modelo: "nt-02" },
        name: "VARON NT-02 – PORTÁTIL PULSO",
        description: "Concentrador de oxígeno portátil Varon NT-02 de segunda generación con flujo a pulso y batería removible de doble capacidad. Peso de 2,2 kg con bolsa multiuso para usar como mochila, bandolera o de mano. Temporizador programable de 1 a 240 min con apagado automático. Sistema de alerta inteligente para bajo nivel de batería, ausencia de respiración, baja concentración de oxígeno y temperatura elevada. Filtro PSA con tamiz molecular de alta calidad. || Flujo: 6 niveles a pulso | Pureza: 93% ±3% | Batería: 92 Wh (8 celdas) 3–4 h / (16 celdas) hasta 6 h | Peso: 2,2 kg | Temporizador: 1–240 min | Alertas: 4 condiciones monitoreadas.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── PORTÁTIL – INOGEN ────────────────────────────────────────────────────
      {
        sku: "inogen-one-g3",
        attrs: { uso: "portatil", marca: "inogen", modelo: "inogen-g3" },
        name: "INOGEN ONE G3 – PORTÁTIL PULSO",
        description: "Concentrador de oxígeno portátil Inogen One G3 fabricado en EE.UU., referente mundial en oxigenoterapia portátil de alta pureza. Flujo a pulso con 6 niveles desde 1 hasta 6 LPM equivalentes. Pureza superior al 95% en todos sus niveles. Batería grande con hasta 13 horas de autonomía. Aprobado por la FAA para uso en aeronaves en todas las aerolíneas internacionales. Garantía completa del fabricante. || Flujo: 6 niveles a pulso | Pureza: >95% | Autonomía: Hasta 13 h (batería grande) | Peso: 2 kg | Origen: EE.UU. | Aprobación: FAA para vuelos.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "inogen-one-g4",
        attrs: { uso: "portatil", marca: "inogen", modelo: "inogen-g4" },
        name: "INOGEN ONE G4 – PORTÁTIL PULSO",
        description: "Concentrador de oxígeno portátil Inogen One G4, el más compacto y ligero de la línea Inogen. Flujo a pulso hasta 3 LPM equivalentes con pureza superior al 95%. Diseño ultracompacto ideal para pacientes con requerimiento bajo a moderado que priorizan movilidad y discreción. Aprobado por la FAA para uso en aeronaves. Garantía completa del fabricante. || Flujo: Hasta 3 LPM a pulso | Pureza: >95% | Origen: EE.UU. | Aprobación: FAA para vuelos | Uso: Movilidad máxima.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      }
    ]
  },
  {
    id: "reguladores-vacio",
    name: "REGULADORES DE VACÍO",
    type: "Respiratorio",
    description: "Reguladores de vacío medicinal para el control preciso de succión en sistemas de aspiración hospitalaria. Disponibles en línea Western Medical (SR/SRA continuo y SRQ continuo-intermitente, garantía 3 años) y Gentec (882VR continuo 0–300 mmHg con modos REG/OFF/FULL). Indicados para aspiración de secreciones en adultos, pacientes traqueostomizados, neonatos y aplicaciones gástricas. Conexión a toma de vacío de pared hospitalaria DISS 1220.",
    image: "/images/respiratorio/placeholder.png",

    attributeOrder: ["marca", "tipo", "rango"],

    attributes: [
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "western", label: "Western Medical" },
          { id: "gentec", label: "Gentec" }
        ]
      },
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "continuo", label: "Continuo" },
          { id: "continuo-intermitente", label: "Continuo / Intermitente" },
          { id: "accesorio", label: "Accesorio" }
        ]
      },
      {
        id: "rango",
        label: "Rango / Aplicación",
        type: "single",
        values: [
          { id: "adulto-200", label: "Adulto 0–200 mmHg" },
          { id: "adulto-300", label: "Adulto 0–300 mmHg" },
          { id: "nursery-80", label: "Nursery 0–80 mmHg" },
          { id: "vaso-colector", label: "Vaso colector" }
        ]
      }
    ],

    attributeRules: {
      // Marca → Tipo
      "western": { tipo: ["continuo", "continuo-intermitente"] },
      "gentec": { tipo: ["continuo", "accesorio"] },

      // Tipo → Rango
      "continuo": { rango: ["adulto-200", "adulto-300", "nursery-80"] },
      "continuo-intermitente": { rango: ["adulto-200"] },
      "accesorio": { rango: ["vaso-colector"] },

      // Marca → Rango refinamiento
      "western": { rango: ["adulto-200", "nursery-80"] },
      "gentec": { rango: ["adulto-300", "vaso-colector"] }
    },

    variants: [

      // ─── WESTERN – CONTINUO ───────────────────────────────────────────────────
      {
        sku: "western-sr-continuo-adulto",
        attrs: { marca: "western", tipo: "continuo", rango: "adulto-200" },
        name: "WESTERN SR – VACÍO CONTINUO ADULTO 0–200 mmHg",
        description: "Regulador de vacío continuo Western Medical serie SR para aspiración de secreciones en adultos. Carcasa de plástico durable con perilla de control de fácil operación, vacuómetro analógico de 2,5\" y selector REG/OFF/FULL VACUUM. Conexión de entrada estándar 1/4\" NPT hembra con múltiples opciones de salida DISS. Garantía 3 años. || Modelo: SR-2507 | Tipo: Continuo | Rango: 0–200 mmHg | Flujo: 0–80 LPM | Conexión entrada: 1/4\" NPT hembra | Salida: DISS 1220 | Incluye: Regulador + cap + frasco colector | Garantía: 3 años.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "western-sr-continuo-nursery",
        attrs: { marca: "western", tipo: "continuo", rango: "nursery-80" },
        name: "WESTERN SR – VACÍO CONTINUO NURSERY 0–80 mmHg",
        description: "Regulador de vacío continuo Western Medical serie SR en versión nursery para aspiración neonatal con rango reducido de presión para máxima seguridad del paciente. Carcasa de plástico durable con perilla de control, vacuómetro analógico de 2,5\" y selector REG/OFF/FULL. Conexión DISS 1220. Garantía 3 años. || Modelo: SR-2701 | Tipo: Continuo Nursery | Rango: 0–80 mmHg | Flujo: 0–30 LPM | Conexión entrada: 1/4\" NPT hembra | Salida: DISS 1220 | Garantía: 3 años.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── WESTERN – CONTINUO/INTERMITENTE ──────────────────────────────────────
      {
        sku: "western-srq-cont-interm-adulto",
        attrs: { marca: "western", tipo: "continuo-intermitente", rango: "adulto-200" },
        name: "WESTERN SRQ – VACÍO CONTINUO/INTERMITENTE ADULTO 0–200 mmHg",
        description: "Regulador de vacío Western Medical serie SRQ con modos continuo e intermitente seleccionables para adultos. El modo intermitente cicla la succión automáticamente para procedimientos que requieren aspiración pulsada. Carcasa plástica durable con selector rápido REG/OFF/FULL VACUUM, vacuómetro de 2,5\" y diseño mecánico interno simplificado. Garantía 1 año. || Modelo: SRQ-2107 | Tipo: Continuo/Intermitente | Rango: 0–200 mmHg | Flujo: 0–80 LPM | Conexión entrada: DISS handtight | Salida: DISS 1220 | Modos: REG / OFF / FULL VACUUM | Garantía: 1 año.",
        price: 1.2,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── GENTEC – CONTINUO ────────────────────────────────────────────────────
      {
        sku: "gentec-882vr-300-continuo",
        attrs: { marca: "gentec", tipo: "continuo", rango: "adulto-300" },
        name: "GENTEC 882VR – VACÍO CONTINUO 0–300 mmHg",
        description: "Regulador de vacío continuo Gentec modelo 882VR-300 para el control preciso de succión en entornos hospitalarios. Vacuómetro de lectura clara con rango 0–300 mmHg y tres modos de operación: REG (vacío regulado), OFF y FULL (vacío total). Perilla frontal de ajuste preciso con carcasa resistente y diseño compacto para montaje en toma de pared. || Modelo: 882VR-300-00-A | Tipo: Continuo | Rango: 0–300 mmHg | Modos: REG / OFF / FULL | Conexión: DISS pared | Incluye: Regulador sin vaso colector | Garantía: según modelo.",
        price: 800,
        image: "/images/respiratorio/GENTEC_882VR300.png"
      },

      // ─── GENTEC – ACCESORIO ───────────────────────────────────────────────────
      {
        sku: "gentec-vaso-colector",
        attrs: { marca: "gentec", tipo: "accesorio", rango: "vaso-colector" },
        name: "GENTEC – VASO COLECTOR DE SUCCIÓN",
        description: "Vaso colector de succión Gentec compatible con reguladores de vacío serie 882VR. Recolecta las secreciones aspiradas durante los procedimientos de succión médica. Fabricado en policarbonato transparente de alta resistencia para visualización del contenido. Conexión DISS 1220 para acople directo al regulador de vacío de pared. || Compatible con: Regulador Gentec 882VR | Material: Policarbonato transparente | Conexión: DISS 1220 | Uso: Recolección de secreciones.",
        price: 156,
        image: "/images/respiratorio/placeholder.png"
      }
    ]
  },

  {
    id: "equipos-clinicos-especiales",
    name: "EQUIPOS CLÍNICOS ESPECIALES",
    type: "Respiratorio",
    description: "Equipos clínicos especializados para administración y mezcla controlada de gases medicinales en entornos de cuidados críticos. Incluye el casco cefálico FACEM para oxigenoterapia neonatal con FiO₂ controlada en neonatología y UCI neonatal, y el mezclador de gases Ohio Medical para la combinación precisa de aire medicinal y oxígeno en terapias respiratorias avanzadas, ventilación mecánica y soporte vital neonatal.",
    image: "/images/respiratorio/placeholder.png",

    attributeOrder: ["equipo", "variante"],

    attributes: [
      {
        id: "equipo",
        label: "Equipo",
        type: "single",
        values: [
          { id: "casco-cefalico", label: "Casco cefálico FACEM MOD 016" },
          { id: "mezclador-ohio", label: "Mezclador de gases Ohio Medical" }
        ]
      },
      {
        id: "variante",
        label: "Variante",
        type: "single",
        values: [
          // Casco cefálico
          { id: "menor-1000", label: "Neonatos < 1,000 g" },
          { id: "1000-3600", label: "Neonatos 1,000 g – 3,600 g" },
          { id: "mayor-3600", label: "Neonatos > 3,600 g" },
          // Mezclador Ohio
          { id: "neo2-blend", label: "NEO2 Blend – NICU (0–15 + 0–3,5 LPM)" },
          { id: "low-flow", label: "Low Flow – Propósito general (0–30 LPM)" }
        ]
      }
    ],

    attributeRules: {
      "casco-cefalico": { variante: ["menor-1000", "1000-3600", "mayor-3600"] },
      "mezclador-ohio": { variante: ["neo2-blend", "low-flow"] }
    },

    variants: [

      // ─── CASCO CEFÁLICO FACEM ─────────────────────────────────────────────────
      {
        sku: "casco-facem-menor-1000",
        attrs: { equipo: "casco-cefalico", variante: "menor-1000" },
        name: "CASCO CEFÁLICO FACEM – NEONATOS < 1,000 g",
        description: "Casco cefálico FACEM MOD 016 para neonatos de extremo bajo peso menor a 1,000 g. Estructura tipo campana de material transparente de grado médico que permite la observación continua del paciente durante la oxigenoterapia. Forma un microambiente sobre la cabeza del recién nacido donde se suministra oxígeno con FiO₂ regulada. Incorpora puertos de conexión para oxígeno y aberturas para circulación de aire y eliminación de CO₂. || Modelo: FACEM 016 | Talla: < 1,000 g | Material: Plástico transparente grado médico | FiO₂: Regulada externamente | Uso: Neonatología / UCI neonatal.",
        price: 560,
        image: "/images/respiratorio/1000GR.png"
      },
      {
        sku: "casco-facem-1000-3600",
        attrs: { equipo: "casco-cefalico", variante: "1000-3600" },
        name: "CASCO CEFÁLICO FACEM – NEONATOS 1,000 g – 3,600 g",
        description: "Casco cefálico FACEM MOD 016 para neonatos entre 1,000 g y 3,600 g. Estructura tipo campana de material transparente de grado médico que permite la observación continua durante la oxigenoterapia. Forma un microambiente controlado con suministro de oxígeno a FiO₂ regulada. Puertos de conexión para oxígeno y aberturas para circulación de aire y eliminación de CO₂. || Modelo: FACEM 016 | Talla: 1,000–3,600 g | Material: Plástico transparente grado médico | FiO₂: Regulada externamente | Uso: Neonatología / UCI neonatal.",
        price: 560,
        image: "/images/respiratorio/1000GR_36000GR.png"
      },
      {
        sku: "casco-facem-mayor-3600",
        attrs: { equipo: "casco-cefalico", variante: "mayor-3600" },
        name: "CASCO CEFÁLICO FACEM – NEONATOS > 3,600 g",
        description: "Casco cefálico FACEM MOD 016 para neonatos de mayor peso superiores a 3,600 g. Estructura tipo campana de mayor diámetro en material transparente de grado médico para observación continua del paciente. Forma un microambiente controlado con oxígeno a FiO₂ regulada. Puertos de conexión para oxígeno y aberturas para circulación de aire y eliminación de CO₂. || Modelo: FACEM 016 | Talla: > 3,600 g | Material: Plástico transparente grado médico | FiO₂: Regulada externamente | Uso: Neonatología / UCI neonatal.",
        price: 560,
        image: "/images/respiratorio/3600GR.png"
      },

      // ─── MEZCLADOR OHIO – NEO2 BLEND ──────────────────────────────────────────
      {
        sku: "ohio-neo2-blend",
        attrs: { equipo: "mezclador-ohio", variante: "neo2-blend" },
        name: "MEZCLADOR OHIO MEDICAL – NEO2 BLEND NICU",
        description: "Mezclador de gases Ohio Medical NEO2 Blend diseñado específicamente para la Unidad de Cuidados Intensivos Neonatales (NICU). Combina aire medicinal comprimido y oxígeno para entregar gas mezclado con FiO₂ de 21% a 100% con alta precisión. Incorpora dos flujómetros integrados: izquierdo de 1–15 LPM para cánula nasal de alto flujo o CPAP, y derecho de 0,1–1 LPM para bajo flujo neonatal. Interruptor de purga ON/OFF exclusivo para conservar gas cuando no se requiere flujo de purga de 3 LPM. || Modelo: Ohio NEO2 Blend | FiO₂: 21%–100% | Flujómetro izq.: 1–15 LPM | Flujómetro der.: 0,1–1 LPM | Purga: 3 LPM con interruptor ON/OFF | Uso: NICU / UCI neonatal | Aplicaciones: CPAP, cánula nasal alto flujo, ventilación neonatal.",
        price: 10200,
        image: "/images/respiratorio/MEZCLADOR_OHIO.png"
      },

      // ─── MEZCLADOR OHIO – LOW FLOW ────────────────────────────────────────────
      {
        sku: "ohio-low-flow",
        attrs: { equipo: "mezclador-ohio", variante: "low-flow" },
        name: "MEZCLADOR OHIO MEDICAL – LOW FLOW PROPÓSITO GENERAL",
        description: "Mezclador de gases Ohio Medical de bajo flujo para propósito general hospitalario. Combina aire medicinal y oxígeno comprimido para suministrar mezcla gaseosa con FiO₂ de 21% a 100% ajustable por el usuario. Flujo total de 0 a 30 LPM indicado para terapia respiratoria de rutina, suministro de gas a ventiladores y procedimientos de soporte vital en adultos y pediatría. Incluye flujómetros integrados de bajo flujo y sistema interno de balanceo de presión para mezclas estables. || Modelo: Ohio Low Flow | FiO₂: 21%–100% | Flujo: 0–30 LPM | Aplicaciones: Ventiladores, cánulas nasales, terapia respiratoria adulto/pediátrico | Uso: UCI / hospitalización general.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      }
    ]
  },

  {
    id: "oxytote-ng-western",
    name: "OXYTOTE NG – WESTERN MEDICAL",
    type: "Respiratorio",
    description: "Sistema portátil de oxígeno OxyTOTE NG de Western Medical — la nueva generación de reguladores con válvula integrada diseñados para EMS y traslado hospitalario. Válvula de cilindro y regulador de flujo integrados en una sola unidad que permite iniciar el suministro de oxígeno en dos pasos sin llaves, arandelas ni accesorios adicionales. Función SureClick™ para asegurar el caudal seleccionado, manómetro de contenido de 1,5\" siempre activo y cubierta protectora de alto impacto. Flujo ajustable de 0,5 a 25 LPM con 11 posiciones discretas. Disponible como solo cabezal regulador o sistema completo con cilindro D o E. Garantía 5 años.",
    image: "/images/respiratorio/placeholder.png",

    attributeOrder: ["presentacion", "cilindro", "shutoff"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "cabezal", label: "Solo cabezal regulador" },
          { id: "sistema", label: "Sistema completo con cilindro" },
          { id: "accesorio", label: "Accesorio de humidificación" }
        ]
      },
      {
        id: "cilindro",
        label: "Cilindro",
        type: "single",
        values: [
          { id: "sin-cilindro", label: "Sin cilindro" },
          { id: "d-425l", label: "Cilindro D – 425 L" },
          { id: "e-679l", label: "Cilindro E – 679 L (MR Conditional)" },
          { id: "na", label: "N/A" }
        ]
      },
      {
        id: "shutoff",
        label: "Válvula shut-off",
        type: "single",
        values: [
          { id: "con-shutoff", label: "Con válvula shut-off" },
          { id: "sin-shutoff", label: "Sin válvula shut-off" },
          { id: "na", label: "N/A" }
        ]
      }
    ],

    attributeRules: {
      // Presentación → Cilindro
      "cabezal": { cilindro: ["sin-cilindro"] },
      "sistema": { cilindro: ["d-425l", "e-679l"] },
      "accesorio": { cilindro: ["na"] },

      // Presentación → Shut-off
      "cabezal": { shutoff: ["con-shutoff", "sin-shutoff"] },
      "sistema": { shutoff: ["con-shutoff", "sin-shutoff"] },
      "accesorio": { shutoff: ["na"] },

      // Cilindro → Shut-off
      "sin-cilindro": { shutoff: ["con-shutoff", "sin-shutoff"] },
      "d-425l": { shutoff: ["con-shutoff", "sin-shutoff"] },
      "e-679l": { shutoff: ["con-shutoff", "sin-shutoff"] },
      "na": { shutoff: ["na"] }
    },

    variants: [

      // ─── SOLO CABEZAL ─────────────────────────────────────────────────────────
      {
        sku: "oxytote-ng-mnr-600",
        attrs: { presentacion: "cabezal", cilindro: "sin-cilindro", shutoff: "con-shutoff" },
        name: "OXYTOTE NG – SOLO CABEZAL CON SHUT-OFF",
        description: "Cabezal regulador OxyTOTE NG Western Medical con válvula shut-off integrada para montaje en cilindros de aluminio con rosca 3/4\"-16UNF. Función SureClick™ para asegurar el caudal seleccionado, manómetro de contenido de 1,5\" siempre activo y cubierta de alto impacto. Salida DISS demand valve a 50 PSI. Ideal para reemplazo de cabezal o armado de sistemas propios. || Modelo: MNR-600 | Flujo: 0,5–25 LPM (11 posiciones) | Salida: DISS demand valve 50 PSI | Rosca: 3/4\"-16UNF | Puerto llenado: CGA-540 | Shut-off: Sí | Garantía: 5 años.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "oxytote-ng-mnr-800",
        attrs: { presentacion: "cabezal", cilindro: "sin-cilindro", shutoff: "sin-shutoff" },
        name: "OXYTOTE NG – SOLO CABEZAL SIN SHUT-OFF",
        description: "Cabezal regulador OxyTOTE NG Western Medical sin válvula shut-off para montaje en cilindros de aluminio con rosca 3/4\"-16UNF. Función SureClick™, manómetro de contenido de 1,5\" siempre activo y cubierta de alto impacto. Salida DISS demand valve a 50 PSI. Versión simplificada para sistemas que no requieren válvula de cierre independiente. || Modelo: MNR-800 | Flujo: 0,5–25 LPM (11 posiciones) | Salida: DISS demand valve 50 PSI | Rosca: 3/4\"-16UNF | Puerto llenado: CGA-540 | Shut-off: No | Garantía: 5 años.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── SISTEMA COMPLETO – CILINDRO D ────────────────────────────────────────
      {
        sku: "oxytote-ng-mns-602",
        attrs: { presentacion: "sistema", cilindro: "d-425l", shutoff: "con-shutoff" },
        name: "OXYTOTE NG – SISTEMA CILINDRO D CON SHUT-OFF",
        description: "Sistema completo OxyTOTE NG Western Medical con cilindro D de aluminio de 425 L y cabezal regulador con válvula shut-off integrada. Listo para uso inmediato en EMS y traslado hospitalario sin herramientas ni accesorios adicionales. SureClick™, manómetro activo y cubierta de alto impacto. Cabe horizontalmente en la mayoría de camillas hospitalarias y bolsas EMS. || Modelo: MNS-602 | Cilindro: D aluminio 425 L | Flujo: 0,5–25 LPM (11 posiciones) | Sistema: 21-5/8\" × 4-1/2\" | Peso sistema: 7,4 lb (3,4 kg) | Salida: DISS demand valve | Puerto llenado: CGA-540 | Shut-off: Sí | Garantía: 5 años.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "oxytote-ng-mns-802",
        attrs: { presentacion: "sistema", cilindro: "d-425l", shutoff: "sin-shutoff" },
        name: "OXYTOTE NG – SISTEMA CILINDRO D SIN SHUT-OFF",
        description: "Sistema completo OxyTOTE NG Western Medical con cilindro D de aluminio de 425 L y cabezal regulador sin válvula shut-off. Listo para uso inmediato en EMS y traslado hospitalario. SureClick™, manómetro activo y cubierta protectora de alto impacto. Versión simplificada para operaciones donde no se requiere válvula de cierre independiente. || Modelo: MNS-802 | Cilindro: D aluminio 425 L | Flujo: 0,5–25 LPM (11 posiciones) | Sistema: 21-5/8\" × 4-1/2\" | Peso sistema: 7,4 lb (3,4 kg) | Salida: DISS demand valve | Puerto llenado: CGA-540 | Shut-off: No | Garantía: 5 años.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── SISTEMA COMPLETO – CILINDRO E ────────────────────────────────────────
      {
        sku: "oxytote-ng-mns-603",
        attrs: { presentacion: "sistema", cilindro: "e-679l", shutoff: "con-shutoff" },
        name: "OXYTOTE NG – SISTEMA CILINDRO E CON SHUT-OFF",
        description: "Sistema completo OxyTOTE NG Western Medical con cilindro E de aluminio de 679 L y cabezal regulador con válvula shut-off. Mayor autonomía que el sistema D para traslados de mayor duración. MR Conditional para uso a 1,5 pies o más fuera del bore de equipos de resonancia magnética de hasta 3,0 Tesla. || Modelo: MNS-603 | Cilindro: E aluminio 679 L | Flujo: 0,5–25 LPM (11 posiciones) | Sistema: 30-5/8\" × 4-1/2\" | Peso sistema: 9,8 lb (4,4 kg) | Salida: DISS demand valve | Puerto llenado: CGA-540 | Shut-off: Sí | MR Conditional: ≤3,0 Tesla a ≥1,5 pies | Garantía: 5 años.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "oxytote-ng-mns-803",
        attrs: { presentacion: "sistema", cilindro: "e-679l", shutoff: "sin-shutoff" },
        name: "OXYTOTE NG – SISTEMA CILINDRO E SIN SHUT-OFF",
        description: "Sistema completo OxyTOTE NG Western Medical con cilindro E de aluminio de 679 L y cabezal regulador sin válvula shut-off. Mayor autonomía para traslados de mayor duración. MR Conditional para uso a 1,5 pies o más fuera del bore de equipos de resonancia magnética de hasta 3,0 Tesla. || Modelo: MNS-803 | Cilindro: E aluminio 679 L | Flujo: 0,5–25 LPM (11 posiciones) | Sistema: 30-5/8\" × 4-1/2\" | Peso sistema: 9,8 lb (4,4 kg) | Salida: DISS demand valve | Puerto llenado: CGA-540 | Shut-off: No | MR Conditional: ≤3,0 Tesla a ≥1,5 pies | Garantía: 5 años.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },

      // ─── ACCESORIOS DE HUMIDIFICACIÓN ─────────────────────────────────────────
      {
        sku: "oxytote-ng-px-1044",
        attrs: { presentacion: "accesorio", cilindro: "na", shutoff: "na" },
        name: "OXYTOTE NG – MANGA DE HUMIDIFICACIÓN PX-1044",
        description: "Manga de sujeción para humidificación OxyTOTE NG Western Medical. Permite acoplar un frasco humidificador al sistema OxyTOTE NG para administración de oxígeno humidificado sin modificar el diseño compacto del sistema. Compatible con todos los modelos OxyTOTE NG. || Modelo: PX-1044 | Compatible con: Todos los modelos OxyTOTE NG | Uso: Humidificación de oxígeno en traslado.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      },
      {
        sku: "oxytote-ng-px-1045",
        attrs: { presentacion: "accesorio", cilindro: "na", shutoff: "na" },
        name: "OXYTOTE NG – MANGUERA DE HUMIDIFICACIÓN PX-1045",
        description: "Manguera de humidificación OxyTOTE NG Western Medical para conexión del frasco humidificador al sistema portátil. Compatible con manga de humidificación PX-1044. Permite administrar oxígeno humidificado durante traslados y emergencias sin perder la compacidad del sistema. || Modelo: PX-1045 | Compatible con: PX-1044 + todos los modelos OxyTOTE NG | Uso: Extensión de humidificación en traslado.",
        price: 5,
        image: "/images/respiratorio/placeholder.png"
      }
    ]
  },



  {
    id: "regulador-de-nitrogeno-de-2-relojes-alt-marca-enzo",
    name: "REGULADOR DE NITRÓGENO 2 RELOJES – ENZO",
    type: "Respiratorio",
    description: "Regulador de nitrógeno de dos manómetros marca Enzo. Manómetro de baja presión: 0–200 PSI / 0–14 BAR. Manómetro de alta presión: 0–4000 PSI / 0–280 BAR. Indicado para el control y regulación de nitrógeno en aplicaciones médicas e industriales.",
    price: 420,
    image: "/images/respiratorio/NITRO_2R.png"
  },




];

