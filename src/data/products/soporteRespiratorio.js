// src/data/products/soporteRespiratorio.js

export const soporteRespiratorioProducts = [

  {
    id: "empaquetadura-regulador-yocke",
    name: "EMPAQUETADURA DE REGULADOR YOCKE",
    type: "Respiratorio",
    description: "Empaque de latón de alta calidad con Viton para uso con cilindros tipo \"E\" Yocke CGA 870. A diferencia de los empaques de plástico desechables, está diseñado para ser reutilizable entre cambios de tanque de oxígeno, garantizando un sellado hermético que evita fugas entre el tanque y el Yocke.",
    price: 8,
    images: [
      "/images/respiratorio/EMPAQUETADURA.png",
      "/images/respiratorio/EMPAQUETADURA_2.png"
    ]
  },

  {
    id: "casco-cefalico-facem-016",
    name: "CASCO CEFÁLICO FACEM MOD 016",
    type: "Respiratorio",
    description: "Dispositivo médico para la administración controlada de oxígeno en neonatos, utilizado en áreas de neonatología y cuidados intensivos. Su estructura tipo campana de material transparente de grado médico permite la observación continua del paciente durante la oxigenoterapia. Se coloca sobre la cabeza del recién nacido formando un microambiente donde se suministra oxígeno con concentración regulada (FiO₂). Incorpora puertos de conexión para oxígeno y aberturas para la adecuada circulación del aire y eliminación de CO₂, garantizando un suministro seguro.",
    image: "/images/respiratorio/FANEM_3.png",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "menor-1000", label: "Neonatos < 1000 g" },
          { id: "1000-3600", label: "Neonatos 1000 g – 3600 g" },
          { id: "mayor-3600", label: "Neonatos > 3600 g" }
        ]
      }
    ],

    variants: [
      {
        sku: "casco-facem-menor-1000",
        attrs: { talla: "menor-1000" },
        name: "Neonatos < 1000 g",
        description: "Talla para neonatos menores de 1000 g.",
        price: 560,
        image: "/images/respiratorio/1000GR.png"
      },
      {
        sku: "casco-facem-1000-3600",
        attrs: { talla: "1000-3600" },
        name: "Neonatos 1000 g – 3600 g",
        description: "Talla para neonatos entre 1000 g y 3600 g.",
        price: 560,
        image: "/images/respiratorio/1000GR_36000GR.png"
      },
      {
        sku: "casco-facem-mayor-3600",
        attrs: { talla: "mayor-3600" },
        name: "Neonatos > 3600 g",
        description: "Talla para neonatos superiores a 3600 g.",
        price: 560,
        image: "/images/respiratorio/3600GR.png"
      }
    ]
  },

  {
    id: "coche-porta-cilindro-de-3-m3",
    name: "COCHE PORTA CILINDRO",
    type: "Respiratorio",
    description: "Carro porta cilindro con estructura rodable y altura regulable, fabricado en tubo de acero inoxidable AISI 304-2B.",
    image: "/images/respiratorio/Coche_D_E.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "d-e-me", label: "Cilindros D, E, ME" },
          { id: "m60-m90", label: "Cilindros M60, M90" }
        ]
      }
    ],

    variants: [
      {
        sku: "coche-cilindro-d-e-me",
        attrs: { modelo: "d-e-me" },
        name: "Cilindros D, E, ME",
        description: "Con estructura rodable y altura regulable entre 950 y 1100 mm, fabricado en tubo de acero inoxidable AISI 304-2B de 22 mm de diámetro y 1.0 mm de espesor. El extremo superior incorpora empuñadura con recubrimiento de jebe duro negro para un agarre seguro. Dispone de dos apoyos inferiores en forma de \"V\" con regatones de plástico/jebe de alta resistencia. Con anillos de soporte para cilindros tipo D, E, ME. Incorpora ruedas de caucho de 100 mm (4\") de diámetro.",
        price: 300,
        image: "/images/respiratorio/Coche_D_E.png"
      },
      {
        sku: "coche-cilindro-m60-m90",
        attrs: { modelo: "m60-m90" },
        name: "Cilindros M60, M90",
        description: "Con estructura rodable y altura regulable entre 950 y 1100 mm, fabricado en tubo de acero inoxidable AISI 304-2B de 22 mm de diámetro y 1.0 mm de espesor. El extremo superior incorpora empuñadura con recubrimiento de jebe duro negro para un agarre seguro. Dispone de dos apoyos inferiores en forma de \"V\" con regatones de plástico/jebe de alta resistencia. Con anillos de soporte para cilindros tipo M60, M90. Incorpora ruedas de caucho de 100 mm (4\") de diámetro.",
        price: 300,
        image: "/images/respiratorio/Coche_M60_M90.png"
      }
    ]
  },


  {
    id: "manguera-p-trasegado-de-aire-medicinal-1-4-npt-88304-4000-psi-vcv-longitud-1-metro",
    name: "MANGUERA P/TRASEGADO DE AIRE MEDICINAL (1/4 NPT 88304, 4000 PSI, VCV) , LONGITUD : 1 METRO",
    description: "MANGUERA P/TRASEGADO DE AIRE MEDICINAL (1/4 NPT 88304, 4000 PSI, VCV) , LONGITUD : 1 METRO",
    price: 384,
    image: "/images/respiratorio/MANGUERA.png"
  },
  {
    id: "mezclador-de-gases-medicos-marca-ohio",
    name: "MEZCLADOR DE GASES MEDICOS OHIO",
    type: "Respiratorio",
    description: "Dispositivo médico diseñado para combinar aire comprimido y oxígeno medicinal con alta precisión, permitiendo suministrar al paciente una mezcla controlada de gases con concentración ajustable de oxígeno (FiO₂). Especialmente indicado para unidades de cuidados intensivos neonatales, ventilación mecánica y terapias respiratorias, donde se requiere una dosificación exacta de oxígeno. Integra flujómetros de bajo flujo para una regulación precisa del caudal y un sistema interno de balanceo de presión que garantiza mezclas estables entre 21% y 100% de oxígeno, manteniendo un suministro confiable para ventiladores, cánulas nasales u otros dispositivos respiratorios.",
    price: 10200,
    image: "/images/respiratorio/MEZCLADOR_OHIO.png"
  },
  {
    id: "niple-para-nebulizar",
    name: "NIPLE PARA NEBULIZAR",
    type: "Respiratorio",
    description: "Niple para nebulizar compatible con equipos de oxigenoterapia y nebulización. Disponible en plástico y metal.",
    image: "/images/respiratorio/NIPLES.png",

    attributeOrder: ["material"],

    attributes: [
      {
        id: "material",
        label: "Material",
        type: "single",
        values: [
          { id: "plastico", label: "Plástico" },
          { id: "metal", label: "Metal" }
        ]
      }
    ],

    variants: [
      {
        sku: "niple-plastico",
        attrs: { material: "plastico" },
        name: "Plástico",
        description: "Niple para nebulizar de plástico. Compatible con equipos estándar de oxigenoterapia y nebulización.",
        price: 6,
        image: "/images/respiratorio/NIPLE_P.png"
      },
      {
        sku: "niple-metal",
        attrs: { material: "metal" },
        name: "Metal",
        description: "Niple para nebulizar de metal. Mayor durabilidad y resistencia para uso clínico continuo.",
        price: 15,
        image: "/images/respiratorio/NIPLE_M.png"
      }
    ]
  },
  {
    id: "valvula-p-cilindros-sherwood-u18",
    name: "VÁLVULA PARA CILINDROS SHERWOOD U18",
    type: "Respiratorio",
    description: "Válvula diseñada para el control seguro del flujo de oxígeno en cilindros de alta presión, utilizada en aplicaciones médicas e industriales. Fabricada con cuerpo de latón de alta resistencia, ofrece durabilidad, hermeticidad y confiabilidad en sistemas de gases comprimidos. Su conexión estándar CGA 540 garantiza compatibilidad con reguladores de oxígeno y equipos diseñados para este tipo de acople, permitiendo una instalación segura y operación precisa.",
    price: 180,
    image: "/images/respiratorio/CGA540.png"
  },

  {
    id: "balon-oxigeno-medicinal",
    name: "BALÓN DE OXÍGENO MEDICINAL",
    type: "Respiratorio",
    description: "Cilindro de oxígeno medicinal de aluminio de alta resistencia 6061-T6, fabricado bajo norma DOT-3AL. Disponible en versión solo balón o kit completo con regulador, cánula nasal y vaso humidificador.",
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
        dependsOn: {
          presentacion: {
            balon: ["m6", "m9", "d", "e", "me", "m60", "m122", "g", "hk"],
            completo: ["m6", "m9", "d", "e", "me", "m60", "m122", "g", "hk"]
          }
        },
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

    variants: [
      // ── SOLO BALÓN ──────────────────────────────────────
      {
        sku: "balon-m6",
        attrs: { presentacion: "balon", tipo: "m6" },
        name: "M6 – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo M6. Capacidad: 80 L (0.08 m³) de oxígeno gaseoso. Diámetro aprox.: 8–9 cm. Válvula CGA 870. Aleación de aluminio 6061-T6. Norma DOT-3AL. Ideal para uso portátil y traslados.",
        price: 300,
        image: "/images/respiratorio/TIPO_M6.png"
      },
      {
        sku: "balon-m9",
        attrs: { presentacion: "balon", tipo: "m9" },
        name: "M9 – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo M9. Capacidad: 140 L (0.14 m³) de oxígeno gaseoso. Diámetro aprox.: 9–10 cm. Válvula CGA 870. Aleación de aluminio 6061-T6. Norma DOT-3AL. Compacto y ligero para traslados de corta duración.",
        price: 400,
        image: "/images/respiratorio/TIPO_M9.png"
      },
      {
        sku: "balon-d",
        attrs: { presentacion: "balon", tipo: "d" },
        name: "D – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo D. Capacidad: 680 L (0.68 m³) de oxígeno gaseoso. Diámetro aprox.: 11 cm. Válvula CGA 870. Aleación de aluminio 6061-T6. Norma DOT-3AL. Ampliamente utilizado en traslados y urgencias.",
        price: 600,
        image: "/images/respiratorio/TIPO_D.png"
      },
      {
        sku: "balon-e",
        attrs: { presentacion: "balon", tipo: "e" },
        name: "E – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo E. Capacidad: 800 L (0.80 m³) de oxígeno gaseoso. Diámetro aprox.: 11 cm. Válvula CGA 870. Aleación de aluminio 6061-T6. Norma DOT-3AL. Estándar para uso hospitalario y emergencias.",
        price: 700,
        image: "/images/respiratorio/TIPO_E.png"
      },
      {
        sku: "balon-me",
        attrs: { presentacion: "balon", tipo: "me" },
        name: "ME – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo ME. Capacidad: 900 L (0.90 m³) de oxígeno gaseoso. Diámetro aprox.: 11–12 cm. Válvula CGA 870. Aleación de aluminio 6061-T6. Norma DOT-3AL. Mayor autonomía que el tipo E para uso clínico.",
        price: 800,
        image: "/images/respiratorio/TIPO_ME.png"
      },
      {
        sku: "balon-m60",
        attrs: { presentacion: "balon", tipo: "m60" },
        name: "M60 – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo M60. Capacidad: 1330 L (1.33 m³) de oxígeno gaseoso. Diámetro aprox.: 14 cm. Válvula CGA 870. Aleación de aluminio 6061-T6. Norma DOT-3AL. Para terapias de larga duración y uso domiciliario.",
        price: 950,
        image: "/images/respiratorio/TIPO_M60.png"
      },

      {
        sku: "balon-m122",
        attrs: { presentacion: "balon", tipo: "m122" },
        name: "M122 – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo M122. Capacidad: 1480 L (1.48 m³) de oxígeno gaseoso. Diámetro aprox.: 14 cm. Válvula CGA 870. Aleación de aluminio 6061-T6. Norma DOT-3AL. Para terapias de larga duración y uso domiciliario.",
        price: 1000,
        image: "/images/respiratorio/TIPO_M122.png"
      },
      {
        sku: "balon-g",
        attrs: { presentacion: "balon", tipo: "g" },
        name: "G – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo G. Capacidad: 3400 L (3.40 m³) de oxígeno gaseoso. Diámetro aprox.: 20 cm. Válvula CGA 540. Aleación de aluminio 6061-T6. Norma DOT-3AL. Para uso hospitalario estacionario de alto consumo.",
        price: 1500,
        image: "/images/respiratorio/BALON_07.png"
      },
      {
        sku: "balon-hk",
        attrs: { presentacion: "balon", tipo: "hk" },
        name: "H / K – Solo Balón",
        description: "Cilindro de oxígeno medicinal tipo H/K. Capacidad: 7900 L (7.90 m³) de oxígeno gaseoso. Diámetro aprox.: 23 cm. Válvula CGA 540. Aleación de aluminio 6061-T6. Norma DOT-3AL. Mayor capacidad disponible para centrales hospitalarias y uso intensivo.",
        price: 2500,
        image: "/images/respiratorio/BALON_08.png"
      },

      // ── KIT COMPLETO ────────────────────────────────────
      {
        sku: "kit-m6",
        attrs: { presentacion: "completo", tipo: "m6" },
        name: "M6 – Kit Completo",
        description: "Cilindro tipo M6 (80 L / 0.08 m³, diámetro 8–9 cm, válvula CGA 870) + regulador de oxígeno + cánula nasal + vaso humidificador. Listo para uso inmediato.",
        price: 450,
        image: "/images/respiratorio/BALON_01.png"
      },
      {
        sku: "kit-m9",
        attrs: { presentacion: "completo", tipo: "m9" },
        name: "M9 – Kit Completo",
        description: "Cilindro tipo M9 (140 L / 0.14 m³, diámetro 9–10 cm, válvula CGA 870) + regulador de oxígeno + cánula nasal + vaso humidificador. Listo para uso inmediato.",
        price: 550,
        image: "/images/respiratorio/BALON_02.png"
      },
      {
        sku: "kit-d",
        attrs: { presentacion: "completo", tipo: "d" },
        name: "D – Kit Completo",
        description: "Cilindro tipo D (680 L / 0.68 m³, diámetro 11 cm, válvula CGA 870) + regulador de oxígeno + cánula nasal + vaso humidificador. Listo para uso inmediato.",
        price: 750,
        image: "/images/respiratorio/BALON_03.png"
      },
      {
        sku: "kit-e",
        attrs: { presentacion: "completo", tipo: "e" },
        name: "E – Kit Completo",
        description: "Cilindro tipo E (800 L / 0.80 m³, diámetro 11 cm, válvula CGA 870) + regulador de oxígeno + cánula nasal + vaso humidificador. Listo para uso inmediato.",
        price: 850,
        image: "/images/respiratorio/BALON_04.png"
      },
      {
        sku: "kit-me",
        attrs: { presentacion: "completo", tipo: "me" },
        name: "ME – Kit Completo",
        description: "Cilindro tipo ME (900 L / 0.90 m³, diámetro 11–12 cm, válvula CGA 870) + regulador de oxígeno + cánula nasal + vaso humidificador. Listo para uso inmediato.",
        price: 950,
        image: "/images/respiratorio/BALON_05.png"
      }, {
        sku: "kit-m60",
        attrs: { presentacion: "completo", tipo: "m60" },
        name: "M60 – Kit Completo",
        description: "Cilindro tipo M60 (1330 L / 1.33 m³, diámetro 14 cm, válvula CGA 870) + regulador de oxígeno + cánula nasal + vaso humidificador. Listo para uso inmediato.",
        price: 1100,
        image: "/images/respiratorio/BALON_09.png"
      },
      {
        sku: "kit-m122",
        attrs: { presentacion: "completo", tipo: "m122" },
        name: "M122 – Kit Completo",
        description: "Cilindro tipo M122 (1480 L / 1.48 m³, diámetro 14 cm, válvula CGA 870) + regulador de oxígeno + cánula nasal + vaso humidificador. Listo para uso inmediato.",
        price: 1150,
        image: "/images/respiratorio/BALON_06.png"
      },
      {
        sku: "kit-g",
        attrs: { presentacion: "completo", tipo: "g" },
        name: "G – Kit Completo",
        description: "Cilindro tipo G (3400 L / 3.40 m³, diámetro 20 cm, válvula CGA 540) + regulador de oxígeno + cánula nasal + vaso humidificador. Listo para uso inmediato.",
        price: 1650,
        image: "/images/respiratorio/BALON_07.png"
      },
      {
        sku: "kit-hk",
        attrs: { presentacion: "completo", tipo: "hk" },
        name: "H / K – Kit Completo",
        description: "Cilindro tipo H/K (7900 L / 7.90 m³, diámetro 23 cm, válvula CGA 540) + regulador de oxígeno + cánula nasal + vaso humidificador. Listo para uso inmediato.",
        price: 2700,
        image: "/images/respiratorio/BALON_08.png"
      }
    ]
  },
  {
    id: "conexion-en-y-p-puntos-de-oxigeno",
    name: "CONEXION EN Y P/ PUNTOS DE OXIGENO",
    description: "CONEXION EN Y P/ PUNTOS DE OXIGENO",
    price: 84,
    image: "/images/respiratorio/placeholder.png"
  },

  {
    id: "flujometro-oxigeno",
    name: "FLUJÓMETRO DE OXÍGENO 0–15 LPM",
    type: "Respiratorio",
    description: "Flujómetro de oxígeno medicinal con rango de 0 a 15 LPM. Compatible con tomas de oxígeno hospitalarias CGA 870 / DISS. Indicado para el control preciso del caudal de oxígeno en cánulas nasales, mascarillas y nebulizadores.",
    image: "/images/respiratorio/FLUJOMETROS.png",

    attributeOrder: ["marca"],

    attributes: [
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "gentec", label: "Gentec" },
          { id: "amico", label: "Amico" },
          { id: "western", label: "Western Medical" },
          { id: "oxygen", label: "Oxygen" }
        ]
      }
    ],

    variants: [
      {
        sku: "flujometro-gentec",
        attrs: { marca: "gentec" },
        name: "Gentec",
        description: "Flujómetro de oxígeno marca Gentec. Rango 0–15 LPM. Cuerpo de latón cromado con flotador de acero inoxidable. Alta precisión en la lectura del caudal.",
        price: 200,
        image: "/images/respiratorio/FLUJOMETRO_GENTEC.png"
      },
      {
        sku: "flujometro-amico",
        attrs: { marca: "amico" },
        name: "Amico",
        description: "Flujómetro de oxígeno marca Amico. Rango 0–15 LPM. Diseño compacto de uso hospitalario con conexión estándar para tomas de pared y cilindros.",
        price: 200,
        image: "/images/respiratorio/FLUJOMETRO_AMICO.png"
      },
      {
        sku: "flujometro-western",
        attrs: { marca: "western" },
        name: "Western Medical",
        description: "Flujómetro de oxígeno marca Western Medical. Rango 0–15 LPM. Construcción de alta calidad con escala gravimétrica de fácil lectura. Ampliamente utilizado en entornos de cuidados intensivos.",
        price: 350,
        image: "/images/respiratorio/FLUJOMETRO_WESTERN.png"
      },
      {
        sku: "flujometro-oxygen",
        attrs: { marca: "oxygen" },
        name: "Oxygen",
        description: "Flujómetro de oxígeno marca Oxygen. Rango 0–15 LPM. Opción económica para uso clínico y domiciliario con conexión estándar.",
        price: 150,
        image: "/images/respiratorio/FLUJOMETRO_OXYGEN.png"
      }
    ]
  },

  {
    id: "manometro-p-regulador-de-oxigeno-baja",
    name: "MANOMETRO P/REGULADOR DE OXIGENO (BAJA)",
    description: "MANOMETRO P/REGULADOR DE OXIGENO (BAJA)",
    price: 120,
    image: "/images/respiratorio/placeholder.png"
  },
  {
    id: "manometro-p-regulador-de-oxigeno-0-4000-alta",
    name: "MANOMETRO P/REGULADOR DE OXIGENO 0-4000 ALTA",
    description: "MANOMETRO P/REGULADOR DE OXIGENO 0-4000 ALTA",
    price: 216,
    image: "/images/respiratorio/placeholder.png"
  },
  {
    id: "manometro-p-regulador-de-oxigeno-alta-50-psi-cga-870",
    name: "MANOMETRO P/REGULADOR DE OXIGENO(ALTA ) 50 PSI CGA-870",
    description: "MANOMETRO P/REGULADOR DE OXIGENO(ALTA ) 50 PSI CGA-870",
    price: 384,
    image: "/images/respiratorio/placeholder.png"
  },
  {
    id: "manometro-presi-n-diferencial-marca-dwyer-modelo-mark-ii-25",
    name: "MANOMETRO PRESIÓN DIFERENCIAL, MARCA DWYER, MODELO MARK II 25",
    description: "MANOMETRO PRESIÓN DIFERENCIAL, MARCA DWYER, MODELO MARK II 25",
    price: 359.51,
    image: "/images/respiratorio/placeholder.png"
  },

  {
    id: "placa-mural-de-oxigeno",
    name: "PLACA MURAL DE OXIGENO",
    description: "PLACA MURAL DE OXIGENO",
    price: 120,
    image: "/images/respiratorio/placeholder.png"
  },
  {
    id: "regulador-de-nitrogeno-de-2-relojes-alt-marca-morris-marca-victor",
    name: "REGULADOR DE NITROGENO DE 2 RELOJES ALT , MARCA MORRIS***MARCA VICTOR***",
    description: "REGULADOR DE NITROGENO DE 2 RELOJES ALT , MARCA MORRIS***MARCA VICTOR***",
    price: 720,
    image: "/images/respiratorio/placeholder.png"
  },
  {
    id: "regulador-de-nitrogeno-de-2-relojes-alt-marca-enzo",
    name: "REGULADOR DE NITRÓGENO 2 RELOJES – ENZO",
    type: "Respiratorio",
    description: "Regulador de nitrógeno de dos manómetros marca Enzo. Manómetro de baja presión: 0–200 PSI / 0–14 BAR. Manómetro de alta presión: 0–4000 PSI / 0–280 BAR. Indicado para el control y regulación de nitrógeno en aplicaciones médicas e industriales.",
    price: 420,
    image: "/images/respiratorio/NITRO_2R.png"
  },

  {
    id: "regulador-de-oxigeno-con-2-manometros-western-medica-modelo-m1-870-15fg",
    name: "REGULADOR DE OXÍGENO WESTERN MEDICAL M1-870-15FG",
    type: "Respiratorio",
    description: "Fabricado con cuerpo de bronce forjado y cromado, diseñado para trabajar con alta presión y ofrecer gran durabilidad. Cuenta con conexión de ingreso CGA-870 y soporta una presión máxima de entrada de 3000 PSI. Incorpora diafragma de neopreno resistente, filtro sinterizado que prolonga la vida útil del regulador y manómetros analógicos de 2\" para lectura de flujo (0–15 LPM) y presión (0–4000 PSI). Incluye válvula interna de seguridad contra sobrepresión y número de serie impreso en el cuerpo para control y trazabilidad.",
    price: 1150,
    image: "/images/respiratorio/M1_870_15FG.png"
  },
  {
    id: "regulador-de-oxigeno-de-alto-flujo",
    name: "REGULADOR DE OXIGENO DE ALTO FLUJO",
    description: "REGULADOR DE OXIGENO DE ALTO FLUJO",
    price: 414,
    image: "/images/respiratorio/placeholder.png"
  },




  {
    id: "regulador-de-succion-continua-western-medica-0-200-mmhg",
    name: "REGULADOR DE SUCCION CONTINUA WESTERN MEDICA (0-200 MMHG)",
    description: "REGULADOR DE SUCCION CONTINUA WESTERN MEDICA (0-200 MMHG)",
    price: 1.2,
    image: "/images/respiratorio/placeholder.png"
  },
  {
    id: "regulador-western-opl-821",
    name: "REGULADORES DE OXÍGENO CGA-870",
    type: "Respiratorio",
    description: "Regulador para balones de oxígeno con válvula CGA-870. Manómetro de presión hasta 3000 PSI y regulador de flujo de 0 a 15 LPM. Sistema de control tipo clic con incrementos preestablecidos de 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12 y 15 LPM. Cuerpo de aluminio con núcleo interno de latón.",
    image: "/images/respiratorio/WESTERN_CARD.png",

    attributeOrder: ["marca", "modelo"],

    attributes: [
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "western", label: "Western" },
          { id: "oxygen", label: "Oxygen" }
        ]
      },
      {
        id: "modelo",
        label: "Salida",
        type: "single",
        dependsOn: {
          marca: {
            western: ["diss", "barb"],
            oxygen: ["diss", "barb"]
          }
        },
        values: [
          { id: "diss", label: "DISS 1240" },
          { id: "barb", label: "Barb / Espiga" }
        ]
      }
    ],

    variants: [
      {
        sku: "western-opl-821",
        attrs: { marca: "western", modelo: "diss" },
        name: "Western OPL-821 – Salida DISS 1240",
        description: "Regulador para balones de oxígeno con válvula CGA-870. Manómetro hasta 3000 PSI y flujo de 0 a 15 LPM. Sistema clic con incrementos de 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12 y 15 LPM. Dos guías para montaje al cilindro, compatibilidad con válvula tipo yugo, salida DISS 1240. Cuerpo de aluminio con núcleo de latón.",
        price: 300,
        image: "/images/respiratorio/WESTERN_821.png"
      },
      {
        sku: "western-opa-820",
        attrs: { marca: "western", modelo: "barb" },
        name: "Western OPA-820 – Salida Barb/Espiga",
        description: "Regulador para balones de oxígeno con válvula CGA-870. Manómetro hasta 3000 PSI y flujo de 0 a 15 LPM. Sistema clic con incrementos de 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12 y 15 LPM. Dos guías para montaje al cilindro, compatibilidad con válvula tipo yugo, salida Barb/Espiga. Cuerpo de aluminio con núcleo de latón.",
        price: 300,
        image: "/images/respiratorio/WESTERN_820.png"
      },
      {
        sku: "oxygen-821",
        attrs: { marca: "oxygen", modelo: "diss" },
        name: "Oxygen – Salida DISS 1240",
        description: "Regulador para balones de oxígeno con válvula CGA-870. Manómetro hasta 3000 PSI y flujo de 0 a 15 LPM. Sistema clic con incrementos de 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12 y 15 LPM. Dos guías para montaje al cilindro, compatibilidad con válvula tipo yugo, salida DISS 1240. Cuerpo de aluminio con núcleo de latón.",
        price: 200,
        image: "/images/respiratorio/OXYGEN_821.png"
      },
      {
        sku: "oxygen-820",
        attrs: { marca: "oxygen", modelo: "barb" },
        name: "Oxygen – Salida Barb/Espiga",
        description: "Regulador para balones de oxígeno con válvula CGA-870. Manómetro hasta 3000 PSI y flujo de 0 a 15 LPM. Sistema clic con incrementos de 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12 y 15 LPM. Dos guías para montaje al cilindro, compatibilidad con válvula tipo yugo, salida Barb/Espiga. Cuerpo de aluminio con núcleo de latón.",
        price: 200,
        image: "/images/respiratorio/OXYGEN_820.png"
      }
    ]
  },
  {
    id: "reguladores-de-vacio-de-0-300-analogico-cont-882vr-300-00-a",
    name: "REGULADOR DE VACÍO GENTEC 0–300",
    type: "Respiratorio",
    description: "Regulador de vacío continuo diseñado para el control preciso de succión en entornos hospitalarios. Cuenta con vacuómetro de lectura clara con rango de 0 a 300 mmHg, que permite monitorear fácilmente el nivel de vacío aplicado. Incorpora tres modos de operación: REG (vacío regulado), OFF y FULL (vacío total) para adaptarse a distintos procedimientos clínicos. Su perilla frontal permite un ajuste preciso de la succión, mientras que su carcasa resistente y diseño compacto facilitan un uso confiable en sistemas de aspiración médica.",
    price: 800,
    image: "/images/respiratorio/GENTEC_882VR300.png"
  },
  {
    id: "vaso-para-regulador-de-vacio-gentec",
    name: "VASO PARA REGULADOR DE VACIO GENTEC",
    description: "VASO PARA REGULADOR DE VACIO GENTEC",
    price: 156,
    image: "/images/respiratorio/placeholder.png"
  },
];

