// src/data/products/soporteRespiratorio.js

export const soporteRespiratorioProducts = [

  {
    id: "regulador-presion-ajustable-oxigeno-m1",
    name: "REGULADORES DE OXIGENO DE SALIDA DE PRESIÓN",
    type: "Respiratorio",
    description: "Tres versiones del mismo regulador de presión ajustable de una etapa Western Medical para oxígeno, con doble manómetro: uno de presión de cilindro (0–4,000 PSI) y uno de presión de salida ajustable (0–100 PSI). Se diferencian únicamente por el tipo de conexión al cilindro. Indicados para conexión a equipos médicos que requieren presión regulada o flujómetros externos. Cuerpo de latón cromado, diafragma de neopreno, filtro sinterizado y válvula interna de seguridad. Garantía 6 años.",
    image: "/images/respiratorio/REGULADORES PRESION/M1_PG_CARD.png",

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
        image: "/images/respiratorio/REGULADORES PRESION/M1_540_PG.png"
      },
      {
        sku: "western-m1-540-pgh",
        attrs: { modelo: "m1-540-pgh" },
        name: "REGULADOR DE PRESION MANUAL CGA 540",
        description: "Regulador de presión ajustable Western M1-540-PGH para balones de oxígeno grandes (G/H/K) con conexión tipo rosca CGA-540 handtight, se ajusta a mano sin necesidad de llave. Presión de salida regulable de 0 a 100 PSI. Mismo desempeño que el M1-540-PG, con la ventaja de una conexión y desconexión más rápida. Uso en hospitales y plantas de oxígeno. || Modelo: M1-540-PGH | Entrada: CGA-540 rosca handtight (sin llave) | Presión salida: 0–100 PSI ajustable | Manómetro cilindro: 0–4,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/REGULADORES PRESION/M1_540_PGH.png"
      },
      {
        sku: "western-m1-870-pg",
        attrs: { modelo: "m1-870-pg" },
        name: "REGULADOR DE PRESION CGA 870",
        description: "Regulador de presión ajustable Western M1-870-PG para cilindros portátiles de oxígeno (D/E/ME) con conexión tipo yugo CGA-870, se fija al cilindro como abrazadera sin rosca. Presión de salida regulable de 0 a 100 PSI. Diseñado para uso portátil en ambulancias, traslados y entornos clínicos que requieren cilindros pequeños. || Modelo: M1-870-PG | Entrada: CGA-870 yugo (abrazadera) | Presión salida: 0–100 PSI ajustable | Manómetro cilindro: 0–4,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/REGULADORES PRESION/M1_870_PG.png"
      }
    ]
  },
  {
    id: "regulador-flujo-oxigeno-flow-gauge-m1",
    name: "REGULADORES DE FLUJO DE OXÍGENO",
    type: "Respiratorio",
    description: "Reguladores de flujo de oxígeno de una etapa Western Medical con doble manómetro: uno de presión de cilindro (0–4,000 PSI) y uno de presión de salida (0–119 PSI), y control de flujo dial de 2 a 15 LPM. Cuerpo de latón cromado con cámara de alta presión de latón, diafragma de neopreno, filtro sinterizado y válvula interna de seguridad. Cuatro modelos que se diferencian únicamente por el tipo de conexión al cilindro y la certificación MR. Garantía 6 años.",
    image: "/images/respiratorio/REGULADORES M1/M1_FG_CARD.png",

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
        image: "/images/respiratorio/REGULADORES M1/M1_540_15FG.png"
      },
      {
        sku: "western-m1-540-15fgh",
        attrs: { modelo: "m1-540-15fgh" },
        name: "M1-540-15FGH HANDTIGHT",
        description: "Regulador de flujo Western M1-540-15FGH para balones de oxígeno grandes (G/H/K) con conexión tipo rosca CGA-540 handtight, se ajusta a mano sin necesidad de llave. Flujo dial de 2 a 15 LPM con doble manómetro. Mismo desempeño que el M1-540-15FG con la ventaja de una conexión y desconexión más rápida. || Modelo: M1-540-15FGH | Flujo: 2–15 LPM | Entrada: CGA-540 handtight (sin llave) | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/REGULADORES M1/M1_540_15FGH.png"
      },
      {
        sku: "western-m1-870-15fg",
        attrs: { modelo: "m1-870-15fg" },
        name: "M1-870-15FG",
        description: "Regulador de flujo Western M1-870-15FG para cilindros portátiles de oxígeno (D/E/ME) con conexión tipo yugo CGA-870, se fija al cilindro como abrazadera sin rosca. Flujo dial de 2 a 15 LPM con doble manómetro. Diseñado para uso portátil en ambulancias, traslados y entornos clínicos con cilindros pequeños. || Modelo: M1-870-15FG | Flujo: 2–15 LPM | Entrada: CGA-870 yugo | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 1150,
        image: "/images/respiratorio/REGULADORES M1/M1_870_15FG.png"
      },
      {
        sku: "western-mr-870-15fg",
        attrs: { modelo: "mr-870-15fg" },
        name: "MR-870-15FG MR CONDITIONAL",
        description: "Regulador de flujo Western MR-870-15FG certificado MR Conditional para uso seguro en salas de resonancia magnética. Conexión tipo yugo CGA-870 para cilindros portátiles (D/E/ME). Flujo dial de 2 a 15 LPM con doble manómetro. Construcción en latón cromado sin componentes ferromagnéticos que puedan interferir con el campo magnético. Indispensable en unidades de RMN que administran oxígeno suplementario durante el estudio. || Modelo: MR-870-15FG | Flujo: 2–15 LPM | Entrada: CGA-870 yugo | Certificación: MR Conditional | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/REGULADORES M1/MR_870_15FG.png"
      }
    ]
  },

  {
    id: "regulador-oxigeno-compacto-click-style-opa",
    name: "REGULADORES COMPACTOS DE OXÍGENO",
    type: "Respiratorio",
    description: "Reguladores de oxígeno compactos Western Medical serie OPA con selector de flujo click-style, diseñados para uso portátil, domiciliario, hospitalario y de emergencia. El sistema de clic garantiza posicionamiento preciso en cada caudal sin riesgo de ajuste entre posiciones. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad contra sobrepresión. Disponibles con conexión CGA-870 yugo para cilindros pequeños (D/E/ME) y CGA-540 rosca handtight para balones grandes (G/H/K). Garantía 2 años.",
    image: "/images/respiratorio/REGULADORES OPA/OPA_CARD.png",

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
        image: "/images/respiratorio/REGULADORES OPA/OPA_810.png"
      },
      {
        sku: "western-opa-820",
        attrs: { cga: "cga-870", modelo: "opa-820" },
        name: "OPA-820",
        description: "Regulador compacto click-style Western OPA-820 con conexión CGA-870 yugo para cilindros D/E/ME. Selector de flujo en 9 posiciones de clic para uso hospitalario, domiciliario y de emergencia. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad. || Modelo: OPA-820 | Flujo: 1/4, 1/2, 1, 2, 3, 4, 6, 8, 10, 15 LPM | Entrada: CGA-870 yugo | Garantía: 2 años.",
        price: 300,
        image: "/images/respiratorio/REGULADORES OPA/OPA_820.png"
      },
      {
        sku: "western-opa-840",
        attrs: { cga: "cga-870", modelo: "opa-840" },
        name: "OPA-840",
        description: "Regulador compacto click-style Western OPA-840 con conexión CGA-870 yugo para cilindros D/E/ME. Selector de flujo en 9 posiciones de clic de rango medio, indicado para oxigenoterapia estándar en clínica y domicilio. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad. || Modelo: OPA-840 | Flujo: 1/2, 1, 1-1/2, 2, 2-1/2, 3, 4, 5, 6, 8 LPM | Entrada: CGA-870 yugo | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/REGULADORES OPA/OPA_840.png"
      },
      {
        sku: "western-opa-850",
        attrs: { cga: "cga-870", modelo: "opa-850" },
        name: "OPA-850",
        description: "Regulador compacto click-style Western OPA-850 de alto flujo con conexión CGA-870 yugo para cilindros D/E/ME. Selector de flujo en 9 posiciones de clic hasta 25 LPM, indicado para mascarillas de reservorio, sistemas Venturi de alto flujo y emergencias. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad. || Modelo: OPA-850 | Flujo: 1/2, 1, 2, 3, 4, 6, 8, 10, 15, 25 LPM | Entrada: CGA-870 yugo | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/REGULADORES OPA/OPA_850.png"
      },

      // ─── CGA-540 NUT AND NIPPLE – HANDTIGHT ───────────────────────────────────

      {
        sku: "western-opa-510",
        attrs: { cga: "cga-540", modelo: "opa-510" },
        name: "OPA-510",
        description: "Regulador compacto click-style Western OPA-510 con conexión CGA-540 rosca handtight para balones grandes (G/H/K), se ajusta a mano sin llave. Selector de flujo en 10 posiciones de clic de bajo caudal, equivalente al OPA-810 para cilindros grandes. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad. || Modelo: OPA-510 | Flujo: 1/64, 1/32, 1/16, 1/8, 1/4, 1/2, 3/4, 1, 1-1/2, 2 LPM | Entrada: CGA-540 handtight | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/REGULADORES OPA/OPA_510.png"
      },
      {
        sku: "western-opa-520",
        attrs: { cga: "cga-540", modelo: "opa-520" },
        name: "OPA-520",
        description: "Regulador compacto click-style Western OPA-520 con conexión CGA-540 rosca handtight para balones grandes (G/H/K), se ajusta a mano sin llave. Selector de flujo en 9 posiciones de clic para uso hospitalario y domiciliario con cilindros de gran capacidad. Equivalente al OPA-820 para CGA-540. || Modelo: OPA-520 | Flujo: 1/4, 1/2, 1, 2, 3, 4, 6, 8, 10, 15 LPM | Entrada: CGA-540 handtight | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/REGULADORES OPA/OPA_520.png"
      },
      {
        sku: "western-opa-540",
        attrs: { cga: "cga-540", modelo: "opa-540" },
        name: "OPA-540",
        description: "Regulador compacto click-style Western OPA-540 con conexión CGA-540 rosca handtight para balones grandes (G/H/K), se ajusta a mano sin llave. Selector de flujo en 9 posiciones de clic de rango medio. Equivalente al OPA-840 para CGA-540. || Modelo: OPA-540 | Flujo: 1/2, 1, 1-1/2, 2, 2-1/2, 3, 4, 5, 6, 8 LPM | Entrada: CGA-540 handtight | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/REGULADORES OPA/OPA_540.png"
      }
    ]
  },
  {
    id: "regulador-oxigeno-extendido-click-style-opl",
    name: "REGULADOR EXTENDIDO DE OXÍGENO",
    type: "Respiratorio",
    description: "Regulador de oxígeno extendido Western Medical OPL-821 con selector de flujo click-style y salida DISS 1240 para conexión directa a frasco humidificador. El cuerpo alargado respecto a la serie OPA incorpora la salida DISS integrada, eliminando la necesidad de adaptadores. Diseñado para oxigenoterapia con humidificación en clínica, hospitalización y domicilio con cilindros portátiles D/E/ME. Cuerpo de aluminio con cámara de alta presión de latón, filtro sinterizado y válvula interna de seguridad. || Modelo: OPL-821 | Flujo: 1/4, 1/2, 1, 2, 3, 4, 6, 8, 10, 15 LPM | Entrada: CGA-870 yugo | Salida: DISS 1240 | Garantía: 2 años.",
    price: 300,
    image: "/images/respiratorio/REGULADORES OPL/OPL_821.png"
  },

  {
    id: "regulador-presion-fija-oxigeno-preset-50psi",
    name: "REGULADORES DE OXÍGENO DE PRESIÓN FIJA",
    type: "Respiratorio",
    description: "Reguladores de presión fija Western Medical preset a 50 PSI para oxígeno medicinal, diseñados para convertir un cilindro en una salida equivalente a la red hospitalaria. Entregan 50 PSI constantes a la salida, permitiendo alimentar directamente ventiladores, máquinas de anestesia, mezcladores aire/oxígeno y equipos de terapia respiratoria que requieren presión de red. No son de administración directa al paciente — la configuración típica es cilindro → regulador preset 50 PSI → flujómetro → paciente. Cuerpo de latón cromado con cámara de alta presión de latón, diafragma de neopreno, filtro sinterizado y válvula interna de seguridad. Disponibles con salida horizontal (conexión en línea, universal) y salida a 90° DISS (espacios reducidos, conexión lateral). Garantía 6 años.",
    image: "/images/respiratorio/REGULADOR PRESION FIJA/PRESET_CARD.png",

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
        image: "/images/respiratorio/REGULADOR PRESION FIJA/M1A_540_P.png"
      },
      {
        sku: "western-m1a-870-p",
        attrs: { salida: "horizontal", modelo: "m1a-870-p" },
        name: "M1A-870-P",
        description: "Regulador preset Western M1A-870-P a 50 PSI con salida horizontal DISS y conexión CGA-870 yugo para cilindros portátiles D/E/ME. Permite usar cilindros pequeños como fuente de presión de red para ventiladores y equipos de terapia respiratoria en traslados y entornos clínicos. || Modelo: M1A-870-P | Presión salida: 50 PSI fijos | Entrada: CGA-870 yugo | Salida: Horizontal DISS | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/REGULADOR PRESION FIJA/M1A_870_P.png"
      },

      // ─── SALIDA 90° ───────────────────────────────────────────────────────────

      {
        sku: "western-m1-540-p",
        attrs: { salida: "90", modelo: "m1-540-p" },
        name: "M1-540-P",
        description: "Regulador preset Western M1-540-P a 50 PSI con salida a 90° DISS y conexión CGA-540 rosca para balones grandes (G/H/K), requiere llave. La salida a 90° facilita la conexión en espacios reducidos y evita doblar mangueras en instalaciones laterales. || Modelo: M1-540-P | Presión salida: 50 PSI fijos | Entrada: CGA-540 rosca (con llave) | Salida: 90° DISS | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/REGULADOR PRESION FIJA/M1_540_P.png"
      },

      {
        sku: "western-m1-870-p",
        attrs: { salida: "90", modelo: "m1-870-p" },
        name: "M1-870-P",
        description: "Regulador preset Western M1-870-P a 50 PSI con salida a 90° DISS y conexión CGA-870 yugo para cilindros portátiles D/E/ME. La salida a 90° es ideal para espacios reducidos en equipos de traslado, ambulancias y camas hospitalarias donde la salida horizontal podría interferir con otros componentes. || Modelo: M1-870-P | Presión salida: 50 PSI fijos | Entrada: CGA-870 yugo | Salida: 90° DISS | Presión entrada máx.: 3,000 PSI | Garantía: 6 años.",
        price: 5,
        image: "/images/respiratorio/REGULADOR PRESION FIJA/M1_870_P.png"
      }
    ]
  },
  {
    id: "flujometros-oxigeno-pared-western",
    name: "FLUJÓMETROS DE OXÍGENO",
    type: "Respiratorio",
    description: "Flujómetros de oxígeno calibrados a 50 PSI de presión de entrada. Compatibles con dos fuentes: toma de pared hospitalaria con conexión DISS, o cilindro con regulador de presión fija preset 50 PSI (línea M1A/M1-P), permitiendo replicar una salida de red hospitalaria desde cualquier cilindro. Tubo flotador de policarbonato interno y externo para mayor durabilidad y precisión de lectura. Disco de ruptura de seguridad integrado (500 PSI nominal). Precisión ±5% a escala completa. Disponibles en tres líneas de cuerpo: FM latón cromado estándar, FME latón slim line y FMA aluminio slim line. Flujo ajustable 1/2–15 LPM. Entrada DISS hex nut estándar o DISS handtight para conexión sin herramienta. Garantía 2 años.",
    image: "/images/respiratorio/FLUJOMETROS/FM_CARD.png",

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
          { id: "fm103", label: "FM103" },
          { id: "fm104", label: "FM104" },
          { id: "fme103", label: "FME103" },
          { id: "fme104", label: "FME104" },
          { id: "fma103", label: "FMA103" },
          { id: "fma104", label: "FMA104" }
        ]
      }
    ],

    attributeRules: {
      "fm": { inlet: ["diss", "diss-handtight"] },
      "fme": { inlet: ["diss", "diss-handtight"] },
      "fma": { inlet: ["diss", "diss-handtight"] },

      "fm-diss": { modelo: ["fm103"] },
      "fm-diss-handtight": { modelo: ["fm104"] },
      "fme-diss": { modelo: ["fme103"] },
      "fme-diss-handtight": { modelo: ["fme104"] },
      "fma-diss": { modelo: ["fma103"] },
      "fma-diss-handtight": { modelo: ["fma104"] }
    },

    variants: [
      {
        sku: "western-fm103",
        attrs: { material: "fm", inlet: "diss", modelo: "fm103" },
        name: "FM103 BRASS BODY",
        description: "Flujómetro Western FM103 de cuerpo latón cromado estándar con entrada DISS hex nut. Compatible con toma de pared hospitalaria o con regulador preset 50 PSI desde cilindro. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. Tubo flotador de policarbonato interno y externo. Precisión ±5% a escala completa. || Modelo: FM103 | Flujo: 1/2–15 LPM | Cuerpo: Latón cromado | Entrada: DISS hex nut | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FLUJOMETROS/FM103.png"
      },
      {
        sku: "western-fm104",
        attrs: { material: "fm", inlet: "diss-handtight", modelo: "fm104" },
        name: "FM104 BRASS BODY",
        description: "Flujómetro Western FM104 de cuerpo latón cromado estándar con entrada DISS handtight para conexión sin herramienta. Compatible con toma de pared hospitalaria o con regulador preset 50 PSI desde cilindro. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. Precisión ±5% a escala completa. || Modelo: FM104 | Flujo: 1/2–15 LPM | Cuerpo: Latón cromado | Entrada: DISS handtight | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FLUJOMETROS/FM104.png"
      },
      {
        sku: "western-fme103",
        attrs: { material: "fme", inlet: "diss", modelo: "fme103" },
        name: "FME103 BRASS SLIM LINE BODY",
        description: "Flujómetro Western FME103 de cuerpo latón slim line con entrada DISS hex nut. Perfil reducido respecto a la línea FM estándar, ideal para instalaciones con espacio limitado entre tomas o en salida de regulador preset. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. || Modelo: FME103 | Flujo: 1/2–15 LPM | Cuerpo: Latón slim line | Entrada: DISS hex nut | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FLUJOMETROS/FME103.png"
      },
      {
        sku: "western-fme104",
        attrs: { material: "fme", inlet: "diss-handtight", modelo: "fme104" },
        name: "FME104 BRASS SLIM LINE BODY",
        description: "Flujómetro Western FME104 de cuerpo latón slim line con entrada DISS handtight. Perfil reducido con conexión sin herramienta. Compatible con toma de pared o regulador preset 50 PSI. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. || Modelo: FME104 | Flujo: 1/2–15 LPM | Cuerpo: Latón slim line | Entrada: DISS handtight | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FLUJOMETROS/FME104.png"
      },
      {
        sku: "western-fma103",
        attrs: { material: "fma", inlet: "diss", modelo: "fma103" },
        name: "FMA103 ALUMINUM SLIM LINE BODY",
        description: "Flujómetro Western FMA103 de cuerpo aluminio slim line con entrada DISS hex nut. Más ligero que las líneas FM y FME, ideal para instalaciones que priorizan peso reducido. Compatible con toma de pared o regulador preset 50 PSI. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. || Modelo: FMA103 | Flujo: 1/2–15 LPM | Cuerpo: Aluminio slim line | Entrada: DISS hex nut | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FLUJOMETROS/FMA103.png"
      },
      {
        sku: "western-fma104",
        attrs: { material: "fma", inlet: "diss-handtight", modelo: "fma104" },
        name: "FMA104 ALUMINUM SLIM LINE BODY",
        description: "Flujómetro Western FMA104 de cuerpo aluminio slim line con entrada DISS handtight. Cuerpo ligero con conexión sin herramienta. Compatible con toma de pared o regulador preset 50 PSI desde cilindro. Flujo ajustable 1/2–15 LPM, calibrado a 50 PSI. || Modelo: FMA104 | Flujo: 1/2–15 LPM | Cuerpo: Aluminio slim line | Entrada: DISS handtight | Calibración: 50 PSI | Garantía: 2 años.",
        price: 5,
        image: "/images/respiratorio/FLUJOMETROS/FMA104.png"
      }
    ]
  },
  {
    id: "valvulas-cilindro-oxigeno-western",
    name: "VÁLVULAS DE CILINDRO DE OXÍGENO",
    type: "Respiratorio",
    description: "Válvulas de cilindro para oxígeno medicinal, instaladas directamente en el cuello del cilindro. Son el punto de conexión al que se acopla el regulador mediante yugo CGA-870 o rosca CGA-540. Permiten abrir y cerrar el flujo de gas del cilindro y funcionan como repuesto cuando la válvula original presenta daño, corrosión o fuga. Disponibles en tres mecanismos de accionamiento: llave (wrench), palanca (toggle) y rueda de mano (spigot). Fabricadas en latón cromado o latón dorado según modelo, con mecanismos de alivio de presión configurados para uso a 2,015 y 2,216 PSI. Presión máxima de cilindro: 3,000 PSI.",
    image: "/images/respiratorio/VALVULAS CILINDRO/CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "mpv-872", label: "MPV-872" },
          { id: "mpv-872-sello", label: "MPV-872 + Sello" },
          { id: "mpv-872t", label: "MPV-872T" },
          { id: "que-9001", label: "QUE-9001" }
        ]
      }
    ],

    variants: [
      {
        sku: "western-mpv-872",
        attrs: { modelo: "mpv-872" },
        name: "MPV-872 – WRENCH VALVE",
        description: "Válvula de cilindro Western MPV-872 tipo wrench (llave) con conexión CGA-870 para cilindros portátiles de oxígeno D/E/M4, M6, ML6, M7 y M9. Se abre y cierra girando con llave de cilindro estándar. Es la válvula más común en cilindros hospitalarios y domiciliarios de tamaño pequeño. Rosca de cuello 3/4\"–16 UNF-2A. Cuerpo de latón cromado con mecanismo de alivio de presión. Repuesto directo para válvulas CGA-870 dañadas o con fuga. || Modelo: MPV-872 | Conexión: CGA-870 | Accionamiento: Llave | Rosca cuello: 3/4\"–16 UNF-2A | Cilindros: D/E/ME | Presión máx.: 3,000 PSI.",
        price: 5,
        image: "/images/respiratorio/VALVULAS CILINDRO/MPV_872.png"
      },
      {
        sku: "western-mpv-872-sello",
        attrs: { modelo: "mpv-872-sello" },
        name: "MPV-872 + SELLO MPV-4027",
        description: "Válvula de cilindro Western MPV-872 tipo wrench (llave) con conexión CGA-870 e incluye sello de seguridad adicional MPV-4027 para mayor hermeticidad en la conexión con el regulador. Indicada cuando se requiere sellado reforzado para prevenir fugas en puntos de conexión frecuente. Rosca de cuello 3/4\"–16 UNF-2A. || Modelo: MPV-872 + MPV-4027 | Conexión: CGA-870 | Accionamiento: Llave | Rosca cuello: 3/4\"–16 UNF-2A | Cilindros: D/E/M4, M6, ML6, M7 y M9 | Presión máx.: 3,000 PSI.",
        price: 5,
        image: "/images/respiratorio/VALVULAS CILINDRO/MPV_872_SELLO.png"
      },
      {
        sku: "western-mpv-872t",
        attrs: { modelo: "mpv-872t" },
        name: "MPV-872T – TOGGLE VALVE",
        description: "Válvula de cilindro Western MPV-872T tipo toggle (palanca) con conexión CGA-870 para cilindros D/E/ME. Se abre y cierra accionando una palanca lateral, sin necesidad de llave — permite operar el cilindro con una sola mano en segundos. Preferida en ambulancias, servicios de emergencias (EMS) y entornos clínicos donde la rapidez de apertura es crítica. Rosca de cuello 3/4\"–16 UNF-2A. Cuerpo de latón cromado. || Modelo: MPV-872T | Conexión: CGA-870 | Accionamiento: Palanca (toggle) | Rosca cuello: 3/4\"–16 UNF-2A | Cilindros: D/E/M4, M6, ML6, M7 y M9 | Presión máx.: 3,000 PSI.",
        price: 5,
        image: "/images/respiratorio/VALVULAS CILINDRO/MPV_872T.png"
      },
      {
        sku: "western-que-9001",
        attrs: { modelo: "que-9001" },
        name: "QUE-9001 – SPIGOT VALVE",
        description: "Válvula de cilindro Western QUE-9001 tipo spigot (rueda de mano) con conexión CGA-540 para cilindros de aluminio grandes M60 y M. Se abre girando la rueda handwheel en sentido antihorario sin herramienta. Diseñada para cilindros de alta capacidad en hospitales, plantas de oxígeno y centrales de gas. Rosca de cuello 1-1/8\"–12 UNF-2A. Cuerpo de latón dorado. || Modelo: QUE-9001 | Conexión: CGA-540 | Accionamiento: Rueda de mano (spigot/handwheel) | Rosca cuello: 1-1/8\"–12 UNF-2A | Cilindros: M60/M aluminio | Presión máx.: 3,000 PSI.",
        price: 5,
        image: "/images/respiratorio/VALVULAS CILINDRO/QUE_9001.png"
      }
    ]
  },
  {
    id: "cilindros-oxigeno-aluminio-western",
    name: "CILINDROS DE OXÍGENO DE ALUMINIO",
    type: "Respiratorio",
    description: "Cilindros de oxígeno medicinal de aluminio, suministrados vacíos con válvula instalada listos para carga con proveedor local de gases medicinales. Fabricados en aluminio de alta resistencia, más ligeros que los cilindros de acero equivalentes. Disponibles en 9 tamaños desde el compacto M4 (113 L) hasta el estacionario M (3,454 L). Los modelos M4 a E utilizan válvula CGA-870 compatible con reguladores de yugo (OPA, OPL, M1-870); los modelos M60 y M utilizan válvula CGA-540 de rosca para reguladores de alta capacidad. El precio corresponde al cilindro vacío — el gas se carga aparte con su proveedor de oxígeno medicinal.",
    image: "/images/respiratorio/CILINDROS/CARD.png",

    attributeOrder: ["tamaño"],

    attributes: [
      {
        id: "tamaño",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "m4", label: "M4 (A)" },
          { id: "m6", label: "M6 (B)" },
          { id: "m6a", label: "M6A (ML6)" },
          { id: "m7", label: "M7" },
          { id: "m9", label: "M9 (C)" },
          { id: "d", label: "D" },
          { id: "e", label: "E" },
          { id: "m60", label: "M60" },
          { id: "m", label: "M" }
        ]
      }
    ],

    variants: [
      {
        sku: "western-cilindro-m4",
        attrs: { tamaño: "m4" },
        name: "113 LTS",
        description: "Cilindro de oxígeno de aluminio M4 (también llamado A), el más compacto de la línea. Ideal para traslados, emergencias pediátricas y equipos portátiles de bajo consumo. Válvula wrench CGA-870 incluida, **compatible con reguladores de yugo OPA, OPL y M1-870**. || **Capacidad: 113 L** | Presión: 2,216 PSI (153 bar) | **Dimensiones: 22.9 cm × 7.6 cm** | Peso sin válvula: 726 g.",
        price: 5,
        image: "/images/respiratorio/CILINDROS/CILINDRO_M4.png"
      },
      {
        sku: "western-cilindro-m6",
        attrs: { tamaño: "m6" },
        name: "164 LTS",
        description: "Cilindro de oxígeno de aluminio tamaño M6 (también llamado B), de tamaño intermedio compacto. Muy utilizado en traslados intrahospitalarios y equipos de oxigenoterapia domiciliaria de corta duración. Válvula toggle CGA-870 incluida — apertura rápida con palanca, sin llave. **Compatible con reguladores de yugo OPA, OPL y M1-870**. || **Capacidad: 164 L** | Presión: 2,216 PSI (153 bar) | **Dimensiones: 29.8 cm × 7.6 cm** | Peso sin válvula: 998 g.",
        price: 5,
        image: "/images/respiratorio/CILINDROS/CILINDRO_M6.png"
      },
      {
        sku: "western-cilindro-m6a",
        attrs: { tamaño: "m6a" },
        name: "170 LTS",
        description: "Cilindro de oxígeno de aluminio tamaño M6A (también llamado ML6), de mayor diámetro que el M6 estándar con capacidad similar. Su formato más bajo y ancho lo hace más estable en portacilindros de camilla y silla de ruedas. Válvula wrench CGA-870 incluida. **Compatible con reguladores de yugo**. || **Capacidad: 170 L** | Presión: 2,015 PSI (139 bar) | **Dimensiones: 19.7 cm × 11.4 cm** | Peso sin válvula: 1,224 g.",
        price: 5,
        image: "/images/respiratorio/CILINDROS/CILINDRO_M6A.png"
      },
      {
        sku: "western-cilindro-m7",
        attrs: { tamaño: "m7" },
        name: "198 LTS",
        description: "Cilindro de oxígeno de aluminio tamaño M7, equilibrio ideal entre autonomía y portabilidad. Ampliamente utilizado en oxigenoterapia domiciliaria y traslados de pacientes con mayor demanda de oxígeno. Válvula wrench CGA-870 incluida. **Compatible con reguladores de yugo OPA, OPL y M1-870**. || **Capacidad: 198 L** | Presión: 2,015 PSI (139 bar) | **Dimensiones: 22.9 cm × 11.4 cm** | Peso sin válvula: 1,406 g.",
        price: 5,
        image: "/images/respiratorio/CILINDROS/CILINDRO_M7.png"
      },
      {
        sku: "western-cilindro-m9",
        attrs: { tamaño: "m9" },
        name: "246 LTS",
        description: "Cilindro de oxígeno de aluminio tamaño M9 (también llamado C), mayor autonomía dentro del rango portátil con válvula CGA-870. Indicado para oxigenoterapia domiciliaria de mayor duración y traslados de larga distancia. Válvula wrench CGA-870 incluida. **Compatible con reguladores de yugo**. || **Capacidad: 246 L** | Presión: 2,015 PSI (139 bar) | **Dimensiones: 26.7 cm × 11.4 cm** | Peso sin válvula: 1,633 g.",
        price: 5,
        image: "/images/respiratorio/CILINDROS/CILINDRO_M9.png"
      },
      {
        sku: "western-cilindro-d",
        attrs: { tamaño: "d" },
        name: "425 LTS",
        description: "Cilindro de oxígeno de aluminio tamaño D, el estándar en ambulancias y emergencias prehospitalarias. Ofrece autonomía significativa manteniendo un peso y tamaño manejable para el personal de EMS. Válvula toggle CGA-870 incluida — apertura rápida con palanca sin llave, crítica en emergencias. **Compatible con reguladores de yugo OPA, OPL y M1-870**. || **Capacidad: 425 L** | Presión: 2,015 PSI (139 bar) | **Dimensiones: 40.6 cm × 11.4 cm** | Peso sin válvula: 2,313 g.",
        price: 5,
        image: "/images/respiratorio/CILINDROS/CILINDRO_D.png"
      },
      {
        sku: "western-cilindro-e",
        attrs: { tamaño: "e" },
        name: "679 LTS",
        description: "Cilindro de oxígeno de aluminio tamaño E, el más utilizado en clínicas, hospitales y servicios de emergencia. Combina alta autonomía con portabilidad en carrito de cilindro estándar. Válvula wrench CGA-870 incluida. **Compatible con reguladores de yugo OPA, OPL y M1-870**. || **Capacidad: 679 L** | Presión: 2,015 PSI (139 bar) | **Dimensiones: 63.5 cm × 11.4 cm** | Peso sin válvula: 3,311 g.",
        price: 5,
        image: "/images/respiratorio/CILINDROS/CILINDRO_E.png"
      },
      {
        sku: "western-cilindro-m60",
        attrs: { tamaño: "m60" },
        name: "1,699 LTS",
        description: "Cilindro de oxígeno de aluminio tamaño M60, de uso estacionario en hospitales, clínicas y centrales de gas medicinal. Alta capacidad para alimentar múltiples puntos de consumo o equipos de alto flujo. Válvula spigot CGA-540 incluida — apertura mediante rueda de mano sin herramienta. **Requiere regulador de rosca CGA-540 (M1-540, OPA-520)**. || **Capacidad: 1,699 L** | Presión: 2,216 PSI (153 bar) | **Dimensiones: 59.7 cm × 18.4 cm** | Peso sin válvula: 10,206 g.",
        price: 5,
        image: "/images/respiratorio/CILINDROS/CILINDRO_M60.png"
      },
      {
        sku: "western-cilindro-m",
        attrs: { tamaño: "m" },
        name: "3,454 LTS",
        description: "Cilindro de oxígeno de aluminio tamaño M, el de mayor capacidad de la línea portátil. Uso estacionario en hospitales, plantas de oxígeno y centrales de distribución de gas medicinal de alto consumo. Válvula spigot CGA-540 incluida — apertura mediante rueda de mano. **Requiere regulador de rosca CGA-540**. || **Capacidad: 3,454 L** | Presión: 2,216 PSI (153 bar) | **Dimensiones: 92.1 cm × 20.3 cm** | Peso sin válvula: 18,189 g.",
        price: 5,
        image: "/images/respiratorio/CILINDROS/CILINDRO_M.png"
      }
    ]
  },

  // ─── ACCESORIOS WESTERN MEDICAL ───────────────────────────────────────────────

  // ══════════════════════════════════════════════════════════════════
  // 1. MEDICIÓN DE FLUJO
  // ══════════════════════════════════════════════════════════════════

  {
    id: "medidor-flujo-en-linea-resone",
    name: "MEDIDOR DE FLUJO TIPO LAPIZ",
    type: "Accesorios-respiratorio",
    description: "Medidor de flujo de oxígeno en línea ResOne formato bolígrafo para verificación rápida y precisa del caudal real entre el regulador y el paciente o equipo. Diseño compacto de 13.5 cm, ligero y portátil para uso en clínica, domicilio y emergencias. Se conecta en línea sin modificar el flujo — solo lo mide. Indicado para verificar calibración de flujómetros, detectar fugas en el circuito y confirmar el flujo real entregado al paciente. Disponible en tres rangos: pediátrico (0–2.5 LPM), estándar adulto (0–8 LPM) y alto flujo (2–15 LPM).",
    image: "/images/respiratorio/MEDIDOR DE FLUJO/CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Litros por minuto",
        type: "single",
        values: [
          { id: "pediatrico", label: "0 a 2.5 lpm" },
          { id: "estandar", label: "0 a 8 lpm" },
          { id: "alto-flujo", label: "2 a 15 lpm" }
        ]
      }
    ],

    variants: [
      {
        sku: "resone-liter-meter-pediatrico",
        attrs: { modelo: "pediatrico" },
        name: "PEDIÁTRICO – 0 A 2.5 LPM",
        description: "Medidor de flujo ResOne pediátrico para verificación de caudales de bajo flujo en neonatos y pacientes pediátricos. Precisión ±0.125 LPM. Se conecta en línea entre el regulador y la cánula o mascarilla sin alterar el flujo. || Marca: ResOne | Rango: 0–2.5 LPM | Precisión: ±0.125 LPM | Formato: Bolígrafo 13.5 cm | Uso: Verificación pediátrica, neonatal.",
        price: 5,
        image: "/images/respiratorio/MEDIDOR DE FLUJO/2LPM.png"
      },
      {
        sku: "resone-liter-meter-estandar",
        attrs: { modelo: "estandar" },
        name: "ESTÁNDAR – 0 A 8 LPM",
        description: "Medidor de flujo ResOne estándar para verificación de caudales adulto de uso habitual en cánula nasal y oxigenoterapia domiciliaria. Precisión ±0.25 LPM. Se conecta en línea entre el regulador y el paciente sin alterar el flujo. || Marca: ResOne | Rango: 0–8 LPM | Precisión: ±0.25 LPM | Formato: Bolígrafo 13.5 cm | Uso: Verificación adulto, cánula nasal.",
        price: 5,
        image: "/images/respiratorio/MEDIDOR DE FLUJO/8LPM.png"
      },
      {
        sku: "resone-liter-meter-alto-flujo",
        attrs: { modelo: "alto-flujo" },
        name: "ALTO FLUJO – 2 A 15 LPM",
        description: "Medidor de flujo ResOne de alto flujo para verificación de caudales elevados en mascarillas de reservorio, sistemas Venturi y flujómetros de pared. Precisión ±0.4 LPM. Se conecta en línea entre el regulador y el equipo sin alterar el flujo. || Marca: ResOne | Rango: 2–15 LPM | Precisión: ±0.4 LPM | Formato: Bolígrafo 13.5 cm | Uso: Mascarilla reservorio, Venturi, flujómetros de pared.",
        price: 5,
        image: "/images/respiratorio/MEDIDOR DE FLUJO/15LPM.png"
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // 2. BOLSOS Y MOCHILAS PORTA CILINDRO
  // ══════════════════════════════════════════════════════════════════

  {
    id: "bolso-porta-cilindro-western",
    name: "BOLSO PORTA CILINDRO CON VISOR DE MONITOREO",
    type: "Accesorios-respiratorio",
    description: "Bolsos de transporte de nylon negro Western Medical para cilindros de oxígeno portátiles. Diseñados para transportar el cilindro con el regulador instalado, con acceso rápido a la válvula y ventilación para seguridad. Disponibles en cuatro modelos según el tamaño del cilindro.",
    image: "/images/respiratorio/MOCHILAS/CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "px-1010", label: "PX-1010" },
          { id: "px-1011", label: "PX-1011" },
          { id: "px-1013", label: "PX-1013" },
          { id: "px-1014", label: "PX-1014" }
        ]
      }
    ],

    variants: [
      {
        sku: "western-px-1010",
        attrs: { modelo: "px-1010" },
        name: "PX-1010 – M4 / M6 / M6A / M9",
        description: "Bolso duffel horizontal de nylon negro Western PX-1010 para cilindros M4 (A), M6 (B), M6A (ML6) y M9 (C). Diseño horizontal para transporte cómodo en bolsa de ambulancia o carrito. || Modelo: PX-1010 | Material: Nylon negro | Cilindros: M4, M6, M6A, M9 | Uso: Transporte portátil.",
        price: 5,
        image: "/images/respiratorio/MOCHILAS/PX-1010.png"
      },
      {
        sku: "western-px-1011",
        attrs: { modelo: "px-1011" },
        name: "PX-1011 – CILINDRO C",
        description: "Bolso de nylon negro Western PX-1011 para cilindro tipo C. Con acceso a válvula y regulador. || Modelo: PX-1011 | Material: Nylon negro | Cilindro: C | Uso: Transporte portátil.",
        price: 5,
        image: "/images/respiratorio/MOCHILAS/PX-1011.png"
      },
      {
        sku: "western-px-1013",
        attrs: { modelo: "px-1013" },
        name: "PX-1013 – CILINDRO D",
        description: "Bolso de nylon negro Western PX-1013 para cilindro tipo D. Con acceso a válvula y regulador. Ideal para ambulancias y traslados. || Modelo: PX-1013 | Material: Nylon negro | Cilindro: D | Uso: Ambulancia, traslados.",
        price: 5,
        image: "/images/respiratorio/MOCHILAS/PX-1013.png"
      },
      {
        sku: "western-px-1014",
        attrs: { modelo: "px-1014" },
        name: "PX-1014 – CILINDRO E",
        description: "Bolso de nylon negro Western PX-1014 para cilindro tipo E, el más utilizado en clínicas y emergencias. Con acceso a válvula y regulador. || Modelo: PX-1014 | Material: Nylon negro | Cilindro: E | Uso: Clínica, emergencias.",
        price: 5,
        image: "/images/respiratorio/MOCHILAS/PX-1014.png"
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // 3. CARRITOS Y SOPORTES PORTA CILINDRO
  // ══════════════════════════════════════════════════════════════════

  {
    id: "carritos-soportes-cilindro-western",
    name: "CARRITOS Y SOPORTES PORTA CILINDRO",
    type: "Accesorios-respiratorio",
    description: "Carritos y soportes Western Medical para almacenamiento y transporte seguro de cilindros de oxígeno. Fabricados en acero resistente con ruedas para fácil movilización o base fija para instalación estacionaria. Disponibles en modelos para cilindros portátiles D/E y para cilindros estacionarios M60/M/H, en distintas capacidades desde 1 hasta 40 cilindros.",
    image: "/images/respiratorio/CARRITOS/CARD.png",

    attributeOrder: ["tipo", "modelo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "carrito", label: "Carrito con ruedas" },
          { id: "soporte", label: "Soporte / Base fija" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          // Carritos
          { id: "px-1020", label: "PX-1020" },
          { id: "hcc5-m", label: "HCC5-M" },
          { id: "hcc1-m", label: "HCC1-M" },
          { id: "hcc2-m", label: "HCC2-M" },
          { id: "hcc3-m", label: "HCC3-M" },
          { id: "mcc1", label: "MCC1" },
          { id: "mcc2", label: "MCC2" },
          // Soportes
          { id: "px-1025", label: "PX-1025" },
          { id: "px-1027", label: "PX-1027" },
          { id: "px-1029", label: "PX-1029" },
          { id: "px-1034", label: "PX-1034" },
          { id: "px-1041", label: "PX-1041" },
          { id: "mcs", label: "MCS" },
          { id: "hcs2-m", label: "HCS2-M" }
        ]
      }
    ],

    attributeRules: {
      "carrito": { modelo: ["px-1020", "hcc5-m", "hcc1-m", "hcc2-m", "hcc3-m", "mcc1", "mcc2"] },
      "soporte": { modelo: ["px-1025", "px-1027", "px-1029", "px-1034", "px-1041", "mcs", "hcs2-m"] }
    },

    variants: [
      // ─── CARRITOS ─────────────────────────────────────────────────
      {
        sku: "western-px-1020",
        attrs: { tipo: "carrito", modelo: "px-1020" },
        name: "CARRITO PARA 1 CILINDRO",
        description: "Carrito porta cilindro con ruedas **para 1 cilindro tipo D o E**. Estructura de acero con soporte vertical, cadena de seguridad y ruedas de fácil desplazamiento. Ideal para movilización en consultorios y pasillos hospitalarios. || Modelo: PX-1020 | **Capacidad: 1 cilindro** | **Compatible: D, E** | Tipo: Carrito con ruedas.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/PX_1020.png"
      },
      {
        sku: "western-hcc5-m",
        attrs: { tipo: "carrito", modelo: "hcc5-m" },
        name: "CARRITO PARA 2 CILINDROS",
        description: "Carrito porta cilindro con ruedas **para 2 cilindros tipo D o E simultáneos**. Permite tener un cilindro en uso y uno de reserva en el mismo carro. Estructura de acero con cadena de seguridad. || Modelo: HCC5-M | **Capacidad: 2 cilindros** | **Compatible: D, E** | Tipo: Carrito con ruedas.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/HCC5_M.png"
      },
      {
        sku: "western-hcc1-m",
        attrs: { tipo: "carrito", modelo: "hcc1-m" },
        name: "CARRITO PARA 1 CILINDRO",
        description: "Carrito porta cilindro con ruedas **para 1 cilindro estacionario tipo M60 o M**. Estructura de acero reforzada para soportar el peso de cilindros de alta capacidad. || Modelo: HCC1-M | **Capacidad: 1 cilindro** | **Compatible: M60, M** | Tipo: Carrito con ruedas.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/HCC1_M.png"
      },
      {
        sku: "western-hcc2-m",
        attrs: { tipo: "carrito", modelo: "hcc2-m" },
        name: "CARRITO PARA 1 CILINDRO",
        description: "Carrito porta cilindro con ruedas **para 1 cilindro de alta capacidad tipo M60, M o H**. Estructura de acero reforzada con sistema de fijación seguro. || Modelo: HCC2-M | **Capacidad: 1 cilindro** | **Compatible: M60, M, H** | Tipo: Carrito con ruedas.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/HCC2_M.png"
      },
      {
        sku: "western-hcc3-m",
        attrs: { tipo: "carrito", modelo: "hcc3-m" },
        name: "CARRITO PARA 1 CILINDRO",
        description: "Carrito porta cilindro con ruedas **para 1 cilindro de alta capacidad tipo M60, M o H**. Estructura de acero reforzada con sistema de fijación seguro. || Modelo: HCC3-M | **Capacidad: 1 cilindro** | **Compatible: M60, M, H** | Tipo: Carrito con ruedas.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/HCC3_M.png"
      },
      {
        sku: "western-mcc1",
        attrs: { tipo: "carrito", modelo: "mcc1" },
        name: "CARRITO PARA 12 CILINDROS",
        description: "Carrito rack con ruedas para almacenamiento y transporte de **hasta 12 cilindros tipo D o E**. Indicado para almacén de gases medicinales y centrales de distribución. || Modelo: MCC1 | **Capacidad: 12 cilindros** | **Compatible: D, E** | Tipo: Carrito rack.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/MCC1.png"
      },
      {
        sku: "western-mcc2",
        attrs: { tipo: "carrito", modelo: "mcc2" },
        name: "CARRITO PARA 28 CILINDROS",
        description: "Carrito rack con ruedas para almacenamiento y transporte de **hasta 28 cilindros tipo D o E**. Para almacenes de gran volumen y plantas de gases medicinales. || Modelo: MCC2 | **Capacidad: 28 cilindros** | **Compatible: D, E** | Tipo: Carrito rack.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/MCC2.png"
      },

      // ─── SOPORTES ─────────────────────────────────────────────────
      {
        sku: "western-px-1025",
        attrs: { tipo: "soporte", modelo: "px-1025" },
        name: "SOPORTE PARA 6 CILINDROS",
        description: "Soporte base fija para **6 cilindros tipo C, D o E**. Instalación estacionaria con cadenas de seguridad individuales por cilindro. || Modelo: PX-1025 | **Capacidad: 6 cilindros** | **Compatible: C, D, E** | Tipo: Base fija.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/PX_1025.png"
      },
      {
        sku: "western-px-1027",
        attrs: { tipo: "soporte", modelo: "px-1027" },
        name: "SOPORTE PARA 12 CILINDROS",
        description: "Soporte base fija para **12 cilindros tipo C, D o E**. Para almacenamiento estacionario de volumen medio en hospitales y clínicas. || Modelo: PX-1027 | **Capacidad: 12 cilindros** | **Compatible: C, D, E** | Tipo: Base fija.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/PX_1027.png"
      },
      {
        sku: "western-px-1029",
        attrs: { tipo: "soporte", modelo: "px-1029" },
        name: "SOPORTE PARA 12 CILINDROS",
        description: "Soporte base fija para **12 cilindros tipo M6 (B)**. Diseñado específicamente para el formato corto y ancho del cilindro M6. || Modelo: PX-1029 | **Capacidad: 12 cilindros** | **Compatible: M6 (B)** | Tipo: Base fija.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/PX_1029.png"
      },
      {
        sku: "western-px-1034",
        attrs: { tipo: "soporte", modelo: "px-1034" },
        name: "SOPORTE PARA 40 CILINDROS",
        description: "Soporte rack base fija para **hasta 40 cilindros tipo D o E**. Para almacenes de gran capacidad en hospitales y distribuidoras de gases medicinales. || Modelo: PX-1034 | **Capacidad: 40 cilindros** | **Compatible: D, E** | Tipo: Rack base fija.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/PX_1034.png"
      },
      {
        sku: "western-px-1041",
        attrs: { tipo: "soporte", modelo: "px-1041" },
        name: "SOPORTE PARA 24 CILINDROS",
        description: "Soporte rack base fija para **hasta 24 cilindros tipo D o E**. Capacidad intermedia entre el PX-1027 y el PX-1034. || Modelo: PX-1041 | **Capacidad: 24 cilindros** | **Compatible: D, E** | Tipo: Rack base fija.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/PX_1041.png"
      },
      {
        sku: "western-mcs",
        attrs: { tipo: "soporte", modelo: "mcs" },
        name: "SOPORTE PARA 1 CILINDRO",
        description: "Soporte individual base fija para **1 cilindro tipo C, D o E**. Instalación en pared o suelo para sujeción segura del cilindro en consultorios y habitaciones de hospitalización. || Modelo: MCS | **Capacidad: 1 cilindro** | **Compatible: C, D, E** | Tipo: Soporte individual.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/MCS.png"
      },
      {
        sku: "western-hcs2-m",
        attrs: { tipo: "soporte", modelo: "hcs2-m" },
        name: "SOPORTE PARA 1 CILINDRO",
        description: "Soporte individual base fija para **1 cilindro de alta capacidad tipo M60, M o H**. Estructura reforzada para soportar el peso de cilindros estacionarios grandes. || Modelo: HCS2-M | **Capacidad: 1 cilindro** | **Compatible: M60, M, H** | Tipo: Soporte individual.",
        price: 5,
        image: "/images/respiratorio/CARRITOS/HCS2_M.png"
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // 4. ACCESORIOS DE ADMINISTRACIÓN DE OXÍGENO
  // ══════════════════════════════════════════════════════════════════

  {
    id: "accesorios-administracion-oxigeno-western",
    name: "ACCESORIOS DE ADMINISTRACIÓN DE OXÍGENO – WESTERN MEDICAL",
    type: "Accesorios-respiratorio",
    description: "Accesorios para la administración de oxígeno al paciente y conexión entre equipos. Incluye frasco humidificador, cánula nasal de doble lumen, mascarillas de oxígeno adulto y pediátrica, junta tórica para yugo, y adaptador tuerca-espiga para conversión de conexiones.",
    image: "/images/respiratorio/ACCESORIOS_O2_CARD.png",

    attributeOrder: ["accesorio"],

    attributes: [
      {
        id: "accesorio",
        label: "Accesorio",
        type: "single",
        values: [
          { id: "humidificador", label: "Frasco humidificador" },
          { id: "canula-dual", label: "Cánula nasal doble lumen – 1.5 m" },
          { id: "mascarilla-adulto", label: "Mascarilla de oxígeno adulto" },
          { id: "mascarilla-ped", label: "Mascarilla de oxígeno pediátrica" },
          { id: "junta-yugo", label: "Junta tórica latón/Viton para yugo CGA-870 – Mod. 2544-2" },
          { id: "adaptador-barb", label: "Adaptador tuerca DISS a espiga cónica (verde) – CGA-870" }
        ]
      }
    ],

    variants: [
      {
        sku: "western-humidificador",
        attrs: { accesorio: "humidificador" },
        name: "FRASCO HUMIDIFICADOR",
        description: "Frasco humidificador para oxígeno medicinal, compatible con salida DISS 1240 de reguladores OPL y flujómetros FM/FMA/FME. Burbujea el oxígeno a través de agua destilada para humidificarlo antes de llegar al paciente, reduciendo la sequedad de mucosas en oxigenoterapia prolongada. || Conexión: DISS 1240 | Uso: Oxigenoterapia con humidificación.",
        price: 5,
        image: "/images/respiratorio/HUMIDIFICADOR.png"
      },
      {
        sku: "western-canula-dual",
        attrs: { accesorio: "canula-dual" },
        name: "CÁNULA NASAL DOBLE LUMEN – 1.5 M",
        description: "Cánula nasal de doble lumen Western de 1.5 m (5 pies) para administración de oxígeno suplementario a bajos flujos. Puntas nasales suaves de silicona para mayor confort en uso prolongado. Compatible con salida barb de reguladores OPA, OPL y flujómetros. || Longitud: 1.5 m | Material: PVC/Silicona | Uso: Oxigenoterapia domiciliaria y clínica.",
        price: 5,
        image: "/images/respiratorio/CANULA_DUAL.png"
      },
      {
        sku: "western-mascarilla-adulto",
        attrs: { accesorio: "mascarilla-adulto" },
        name: "MASCARILLA DE OXÍGENO ADULTO",
        description: "Mascarilla simple de oxígeno para adulto con tubo corrugado de 1.5 m y conector universal para salida barb de reguladores y flujómetros. Cuerpo de PVC transparente con aletas nasales moldeables para sellado facial. || Talla: Adulto | Tubo: 1.5 m | Conector: Universal barb | Uso: Oxigenoterapia clínica y emergencias.",
        price: 5,
        image: "/images/respiratorio/MASCARILLA_ADULTO.png"
      },
      {
        sku: "western-mascarilla-pediatrica",
        attrs: { accesorio: "mascarilla-ped" },
        name: "MASCARILLA DE OXÍGENO PEDIÁTRICA",
        description: "Mascarilla simple de oxígeno pediátrica con tubo corrugado de 1.5 m y conector universal para salida barb. Cuerpo de PVC transparente de menor tamaño adaptado al rostro pediátrico con aletas nasales moldeables. || Talla: Pediátrica | Tubo: 1.5 m | Conector: Universal barb | Uso: Oxigenoterapia pediátrica.",
        price: 5,
        image: "/images/respiratorio/MASCARILLA_PEDIATRICA.png"
      },
      {
        sku: "western-junta-yugo",
        attrs: { accesorio: "junta-yugo" },
        name: "JUNTA TÓRICA LATÓN/VITON PARA YUGO – MOD. 2544-2",
        description: "Junta tórica de sellado Western modelo 2544-2 en latón con sello de Viton para yugo CGA-870. Garantiza el sellado hermético entre el regulador de yugo y la válvula del cilindro. Repuesto esencial — se recomienda reemplazar en cada cambio de cilindro. || Modelo: 2544-2 | Material: Latón + Viton | Compatible: CGA-870 yugo | Uso: Repuesto de sellado.",
        price: 5,
        image: "/images/respiratorio/JUNTA_YUGO.png"
      },
      {
        sku: "western-adaptador-barb",
        attrs: { accesorio: "adaptador-barb" },
        name: "ADAPTADOR TUERCA DISS A ESPIGA CÓNICA (VERDE)",
        description: "Adaptador Western de tuerca DISS a espiga cónica (barb) color verde para oxígeno. Permite conectar accesorios con terminación barb a salidas DISS de reguladores, flujómetros o tomas de pared. || Color: Verde (oxígeno) | Entrada: Tuerca DISS | Salida: Espiga cónica barb | Uso: Adaptación de conexiones.",
        price: 5,
        image: "/images/respiratorio/ADAPTADOR_BARB.png"
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // 5. CONECTORES Y MANÓMETROS DE REPUESTO
  // ══════════════════════════════════════════════════════════════════

  {
    id: "conectores-manometros-repuesto-western",
    name: "CONECTORES Y MANÓMETROS DE REPUESTO – WESTERN MEDICAL",
    type: "Accesorios-respiratorio",
    description: "Conectores Y de oxígeno para derivación de flujo y manómetros de repuesto Western Medical para reguladores de la serie M1. Los conectores Y permiten alimentar dos equipos o pacientes desde una sola toma. Los manómetros son repuestos directos para reguladores M1 con rosca de entrada 1/8\" NPT y diámetro de carátula de 3.8 cm.",
    image: "/images/respiratorio/CONECTORES_MANOMETROS_CARD.png",

    attributeOrder: ["tipo", "modelo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "conector-y", label: "Conector Y de oxígeno" },
          { id: "manometro", label: "Manómetro de repuesto" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "my-1", label: "MY-1 – Entrada DISS hembra / 2 salidas DISS macho" },
          { id: "my-2s", label: "MY-2S – Entrada DISS hembra / 2 salidas DISS con válvula de cierre" },
          { id: "mg-c1", label: "MG-C1 – 0 a 4,000 PSI (presión de cilindro)" },
          { id: "mg-c3", label: "MG-C3 – 0 a 100 PSI (presión de salida)" },
          { id: "mg-c5-barb", label: "MG-C5 – 0 a 15 LPM con buje espiga" },
          { id: "mg-c5-diss", label: "MG-C5 – 0 a 15 LPM con buje DISS" }
        ]
      }
    ],

    attributeRules: {
      "conector-y": { modelo: ["my-1", "my-2s"] },
      "manometro": { modelo: ["mg-c1", "mg-c3", "mg-c5-barb", "mg-c5-diss"] }
    },

    variants: [
      {
        sku: "western-my-1",
        attrs: { tipo: "conector-y", modelo: "my-1" },
        name: "MY-1 – CONECTOR Y DISS",
        description: "Conector Y de oxígeno Western MY-1 con entrada DISS hembra y dos salidas DISS macho. Permite alimentar dos flujómetros o equipos desde una sola toma de pared o regulador. Sin válvulas de cierre individual. || Modelo: MY-1 | Entrada: DISS hembra | Salidas: 2× DISS macho | Uso: Derivación de flujo.",
        price: 5,
        image: "/images/respiratorio/MY_1.png"
      },
      {
        sku: "western-my-2s",
        attrs: { tipo: "conector-y", modelo: "my-2s" },
        name: "MY-2S – CONECTOR Y DISS CON VÁLVULAS DE CIERRE",
        description: "Conector Y de oxígeno Western MY-2S con entrada DISS hembra y dos salidas DISS macho, cada una con válvula de cierre independiente. Permite controlar el flujo a cada equipo o paciente de forma individual sin desconectar la fuente. || Modelo: MY-2S | Entrada: DISS hembra | Salidas: 2× DISS macho con válvula | Uso: Derivación con control independiente.",
        price: 5,
        image: "/images/respiratorio/MY_2S.png"
      },
      {
        sku: "western-mg-c1",
        attrs: { tipo: "manometro", modelo: "mg-c1" },
        name: "MG-C1 – MANÓMETRO 0–4,000 PSI",
        description: "Manómetro de repuesto Western MG-C1 para presión de cilindro en reguladores serie M1. Rango 0–4,000 PSI, rosca de entrada 1/8\" NPT, carátula de 3.8 cm de diámetro. || Modelo: MG-C1 | Rango: 0–4,000 PSI | Rosca: 1/8\" NPT | Carátula: 3.8 cm | Uso: Repuesto manómetro de cilindro.",
        price: 5,
        image: "/images/respiratorio/MG_C1.png"
      },
      {
        sku: "western-mg-c3",
        attrs: { tipo: "manometro", modelo: "mg-c3" },
        name: "MG-C3 – MANÓMETRO 0–100 PSI",
        description: "Manómetro de repuesto Western MG-C3 para presión de salida en reguladores serie M1. Rango 0–100 PSI, rosca de entrada 1/8\" NPT, carátula de 3.8 cm de diámetro. || Modelo: MG-C3 | Rango: 0–100 PSI | Rosca: 1/8\" NPT | Carátula: 3.8 cm | Uso: Repuesto manómetro de salida.",
        price: 5,
        image: "/images/respiratorio/MG_C3.png"
      },
      {
        sku: "western-mg-c5-barb",
        attrs: { tipo: "manometro", modelo: "mg-c5-barb" },
        name: "MG-C5 – MANÓMETRO 0–15 LPM CON BUJE ESPIGA",
        description: "Manómetro de flujo de repuesto Western MG-C5 con buje espiga (barb) para reguladores serie M1. Rango 0–15 LPM, rosca de entrada 1/8\" NPT, carátula de 3.8 cm. || Modelo: MG-C5 | Rango: 0–15 LPM | Buje: Espiga | Rosca: 1/8\" NPT | Uso: Repuesto manómetro de flujo.",
        price: 5,
        image: "/images/respiratorio/MG_C5_BARB.png"
      },
      {
        sku: "western-mg-c5-diss",
        attrs: { tipo: "manometro", modelo: "mg-c5-diss" },
        name: "MG-C5 – MANÓMETRO 0–15 LPM CON BUJE DISS",
        description: "Manómetro de flujo de repuesto Western MG-C5 con buje DISS para reguladores serie M1. Rango 0–15 LPM, rosca de entrada 1/8\" NPT, carátula de 3.8 cm. || Modelo: MG-C5 | Rango: 0–15 LPM | Buje: DISS | Rosca: 1/8\" NPT | Uso: Repuesto manómetro de flujo.",
        price: 5,
        image: "/images/respiratorio/MG_C5_DISS.png"
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // 6. PIGTAILS Y MANGUERAS DE ALTA PRESIÓN
  // ══════════════════════════════════════════════════════════════════

  {
    id: "pigtails-mangueras-alta-presion-western",
    name: "PIGTAILS Y MANGUERAS DE ALTA PRESIÓN – WESTERN MEDICAL",
    type: "Accesorios-respiratorio",
    description: "Pigtails rígidos y mangueras flexibles de alta presión Western Medical para conexión de cilindros de oxígeno CGA-540 a manifolds, reguladores o centrales de gas. Presión máxima de trabajo 3,000 PSI (207 bar). Los pigtails rígidos son de tubo cromado y los flexibles tienen núcleo de PTFE con recubrimiento de acero inoxidable trenzado tipo 304. Disponibles con y sin válvula check (antirretorno) y en cuatro longitudes.",
    image: "/images/respiratorio/PIGTAILS_CARD.png",

    attributeOrder: ["tipo", "longitud", "valvula"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "rigido", label: "Pigtail rígido – Tubo cromado CGA-540" },
          { id: "flexible", label: "Manguera flexible – PTFE + acero inox. trenzado CGA-540" },
          { id: "flexible-ht", label: "Manguera flexible Handtight – PTFE + acero inox. trenzado CGA-540" }
        ]
      },
      {
        id: "longitud",
        label: "Longitud",
        type: "single",
        values: [
          { id: "45cm", label: "45 cm (18\")" },
          { id: "61cm", label: "61 cm (24\")" },
          { id: "69cm", label: "69 cm (27\") – Solo pigtail rígido" },
          { id: "91cm", label: "91 cm (36\")" },
          { id: "122cm", label: "122 cm (48\")" }
        ]
      },
      {
        id: "valvula",
        label: "Válvula check (antirretorno)",
        type: "single",
        values: [
          { id: "sin-check", label: "Sin válvula check" },
          { id: "con-check", label: "Con válvula check (antirretorno)" }
        ]
      }
    ],

    attributeRules: {
      "rigido": { longitud: ["69cm"], valvula: ["sin-check", "con-check"] },
      "flexible": { longitud: ["45cm", "61cm", "91cm", "122cm"], valvula: ["sin-check", "con-check"] },
      "flexible-ht": { longitud: ["45cm", "61cm", "91cm", "122cm"], valvula: ["sin-check", "con-check"] }
    },

    variants: [
      // ─── PIGTAILS RÍGIDOS ─────────────────────────────────────────
      {
        sku: "western-m54-18",
        attrs: { tipo: "rigido", longitud: "69cm", valvula: "sin-check" },
        name: "M54-18 – PIGTAIL RÍGIDO 69 CM – SIN CHECK",
        description: "Pigtail rígido de alta presión Western M54-18 para oxígeno CGA-540. Tubo cromado de 69 cm (27\") con conexión estándar en ambos extremos. Presión máxima 3,000 PSI (207 bar). Para conexión de cilindros a manifolds y reguladores. || Modelo: M54-18 | Tipo: Rígido cromado | Longitud: 69 cm | Conexión: CGA-540 | Presión máx.: 3,000 PSI.",
        price: 5,
        image: "/images/respiratorio/M54_18.png"
      },
      {
        sku: "western-m54-19",
        attrs: { tipo: "rigido", longitud: "69cm", valvula: "con-check" },
        name: "M54-19 – PIGTAIL RÍGIDO 69 CM – CON CHECK",
        description: "Pigtail rígido de alta presión Western M54-19 para oxígeno CGA-540. Tubo cromado de 69 cm (27\") con válvula check (antirretorno) integrada para prevenir el reflujo de gas. Presión máxima 3,000 PSI (207 bar). || Modelo: M54-19 | Tipo: Rígido cromado | Longitud: 69 cm | Válvula: Check antirretorno | Conexión: CGA-540 | Presión máx.: 3,000 PSI.",
        price: 5,
        image: "/images/respiratorio/M54_19.png"
      },

      // ─── MANGUERAS FLEXIBLES MPF-540 ──────────────────────────────
      { sku: "western-mpf-540-45-sin", attrs: { tipo: "flexible", longitud: "45cm", valvula: "sin-check" }, name: "MPF-540 – 45 CM – SIN CHECK", description: "Manguera flexible Western MPF-540 CGA-540, 45 cm, núcleo PTFE + acero inox. trenzado, sin válvula check. Presión trabajo 3,000 PSI. || Longitud: 45 cm | Sin check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540_45.png" },
      { sku: "western-mpf-540-45-con", attrs: { tipo: "flexible", longitud: "45cm", valvula: "con-check" }, name: "MPF-540 – 45 CM – CON CHECK", description: "Manguera flexible Western MPF-540 CGA-540, 45 cm, núcleo PTFE + acero inox. trenzado, con válvula check antirretorno. Presión trabajo 3,000 PSI. || Longitud: 45 cm | Con check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540_45_CV.png" },
      { sku: "western-mpf-540-61-sin", attrs: { tipo: "flexible", longitud: "61cm", valvula: "sin-check" }, name: "MPF-540 – 61 CM – SIN CHECK", description: "Manguera flexible Western MPF-540 CGA-540, 61 cm, núcleo PTFE + acero inox. trenzado, sin válvula check. Presión trabajo 3,000 PSI. || Longitud: 61 cm | Sin check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540_61.png" },
      { sku: "western-mpf-540-61-con", attrs: { tipo: "flexible", longitud: "61cm", valvula: "con-check" }, name: "MPF-540 – 61 CM – CON CHECK", description: "Manguera flexible Western MPF-540 CGA-540, 61 cm, núcleo PTFE + acero inox. trenzado, con válvula check antirretorno. Presión trabajo 3,000 PSI. || Longitud: 61 cm | Con check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540_61_CV.png" },
      { sku: "western-mpf-540-91-sin", attrs: { tipo: "flexible", longitud: "91cm", valvula: "sin-check" }, name: "MPF-540 – 91 CM – SIN CHECK", description: "Manguera flexible Western MPF-540 CGA-540, 91 cm, núcleo PTFE + acero inox. trenzado, sin válvula check. Presión trabajo 3,000 PSI. || Longitud: 91 cm | Sin check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540_91.png" },
      { sku: "western-mpf-540-91-con", attrs: { tipo: "flexible", longitud: "91cm", valvula: "con-check" }, name: "MPF-540 – 91 CM – CON CHECK", description: "Manguera flexible Western MPF-540 CGA-540, 91 cm, núcleo PTFE + acero inox. trenzado, con válvula check antirretorno. Presión trabajo 3,000 PSI. || Longitud: 91 cm | Con check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540_91_CV.png" },
      { sku: "western-mpf-540-122-sin", attrs: { tipo: "flexible", longitud: "122cm", valvula: "sin-check" }, name: "MPF-540 – 122 CM – SIN CHECK", description: "Manguera flexible Western MPF-540 CGA-540, 122 cm, núcleo PTFE + acero inox. trenzado, sin válvula check. Presión trabajo 3,000 PSI. || Longitud: 122 cm | Sin check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540_122.png" },
      { sku: "western-mpf-540-122-con", attrs: { tipo: "flexible", longitud: "122cm", valvula: "con-check" }, name: "MPF-540 – 122 CM – CON CHECK", description: "Manguera flexible Western MPF-540 CGA-540, 122 cm, núcleo PTFE + acero inox. trenzado, con válvula check antirretorno. Presión trabajo 3,000 PSI. || Longitud: 122 cm | Con check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540_122_CV.png" },

      // ─── MANGUERAS FLEXIBLES MPF-540HT (HANDTIGHT) ───────────────
      { sku: "western-mpf-540ht-45-sin", attrs: { tipo: "flexible-ht", longitud: "45cm", valvula: "sin-check" }, name: "MPF-540HT – 45 CM – SIN CHECK", description: "Manguera flexible Western MPF-540HT CGA-540 handtight, 45 cm, núcleo PTFE + acero inox. trenzado, tuercas manuales sin llave, sin válvula check. Presión trabajo 3,000 PSI. || Longitud: 45 cm | Handtight | Sin check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540HT_45.png" },
      { sku: "western-mpf-540ht-45-con", attrs: { tipo: "flexible-ht", longitud: "45cm", valvula: "con-check" }, name: "MPF-540HT – 45 CM – CON CHECK", description: "Manguera flexible Western MPF-540HT CGA-540 handtight, 45 cm, núcleo PTFE + acero inox. trenzado, tuercas manuales sin llave, con válvula check antirretorno. Presión trabajo 3,000 PSI. || Longitud: 45 cm | Handtight | Con check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540HT_45_CV.png" },
      { sku: "western-mpf-540ht-61-sin", attrs: { tipo: "flexible-ht", longitud: "61cm", valvula: "sin-check" }, name: "MPF-540HT – 61 CM – SIN CHECK", description: "Manguera flexible Western MPF-540HT CGA-540 handtight, 61 cm, núcleo PTFE + acero inox. trenzado, tuercas manuales sin llave, sin válvula check. Presión trabajo 3,000 PSI. || Longitud: 61 cm | Handtight | Sin check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540HT_61.png" },
      { sku: "western-mpf-540ht-61-con", attrs: { tipo: "flexible-ht", longitud: "61cm", valvula: "con-check" }, name: "MPF-540HT – 61 CM – CON CHECK", description: "Manguera flexible Western MPF-540HT CGA-540 handtight, 61 cm, núcleo PTFE + acero inox. trenzado, tuercas manuales sin llave, con válvula check antirretorno. Presión trabajo 3,000 PSI. || Longitud: 61 cm | Handtight | Con check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540HT_61_CV.png" },
      { sku: "western-mpf-540ht-91-sin", attrs: { tipo: "flexible-ht", longitud: "91cm", valvula: "sin-check" }, name: "MPF-540HT – 91 CM – SIN CHECK", description: "Manguera flexible Western MPF-540HT CGA-540 handtight, 91 cm, núcleo PTFE + acero inox. trenzado, tuercas manuales sin llave, sin válvula check. Presión trabajo 3,000 PSI. || Longitud: 91 cm | Handtight | Sin check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540HT_91.png" },
      { sku: "western-mpf-540ht-91-con", attrs: { tipo: "flexible-ht", longitud: "91cm", valvula: "con-check" }, name: "MPF-540HT – 91 CM – CON CHECK", description: "Manguera flexible Western MPF-540HT CGA-540 handtight, 91 cm, núcleo PTFE + acero inox. trenzado, tuercas manuales sin llave, con válvula check antirretorno. Presión trabajo 3,000 PSI. || Longitud: 91 cm | Handtight | Con check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540HT_91_CV.png" },
      { sku: "western-mpf-540ht-122-sin", attrs: { tipo: "flexible-ht", longitud: "122cm", valvula: "sin-check" }, name: "MPF-540HT – 122 CM – SIN CHECK", description: "Manguera flexible Western MPF-540HT CGA-540 handtight, 122 cm, núcleo PTFE + acero inox. trenzado, tuercas manuales sin llave, sin válvula check. Presión trabajo 3,000 PSI. || Longitud: 122 cm | Handtight | Sin check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540HT_122.png" },
      { sku: "western-mpf-540ht-122-con", attrs: { tipo: "flexible-ht", longitud: "122cm", valvula: "con-check" }, name: "MPF-540HT – 122 CM – CON CHECK", description: "Manguera flexible Western MPF-540HT CGA-540 handtight, 122 cm, núcleo PTFE + acero inox. trenzado, tuercas manuales sin llave, con válvula check antirretorno. Presión trabajo 3,000 PSI. || Longitud: 122 cm | Handtight | Con check | Presión máx.: 3,000 PSI.", price: 5, image: "/images/respiratorio/MPF_540HT_122_CV.png" }
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

];

