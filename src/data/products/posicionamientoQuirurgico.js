// src/data/products/posicionamientoQuirurgico.js

export const posicionamientoQuirurgicoProducts = [

  {
    id: "action-donut-head-pad",
    name: "DONUT HEAD PAD",
    type: "Cabeza, cuello y cara",
    description: "Almohadilla donut diseñada para proteger y sostener la cabeza del paciente, brindando fácil acceso al área quirúrgica de cabeza y cuello. Apta para procedimientos de otorrinolaringologia, cirugía plástica, cirugía general y oftalmología. Polímero AKTON® viscoelástico.",
    image: "/images/mobiliario/ACTION/DONUT HEAD/CARD.png",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "adult", label: "Adulto" },
          { id: "adult-high", label: "Adulto Alto" },
          { id: "adult-wide", label: "Adulto Ancho" },
          { id: "pediatric", label: "Pediátrico" },
          { id: "ped-neonatal", label: "Pediátrico/Neonatal" },
          { id: "neonatal", label: "Neonatal" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40201",
        attrs: { talla: "adult" },
        name: "TALLA ADULTO - CODIGO 40201",
        description: "Almohadilla donut diseñada para proteger y sostener la cabeza del paciente, brindando fácil acceso al área quirúrgica de cabeza y cuello. Apta para procedimientos de otorrinolaringologia, cirugía plástica, cirugía general y oftalmología. Polímero AKTON® viscoelástico. || **Dimensiones: 20.3 cm x 7.6 cm x 4.5 cm**.",
        price: 1,
        images: [
          "/images/mobiliario/ACTION/DONUT HEAD/40201.png",
          "/images/mobiliario/ACTION/DONUT HEAD/40201_2.png"
        ]
      },
      {
        sku: "action-40212",
        attrs: { talla: "adult-high" },
        name: "TALLA ADULTO ALTO - CODIGO 40212",
        description: "Almohadilla donut diseñada para proteger y sostener la cabeza del paciente, brindando fácil acceso al área quirúrgica de cabeza y cuello. Apta para procedimientos de otorrinolaringologia, cirugía plástica, cirugía general y oftalmología. Polímero AKTON® viscoelástico. || **Dimensiones: 20.3 cm x 7.6 cm x 7.6 cm**.",
        price: 1,
        images: [
          "/images/mobiliario/ACTION/DONUT HEAD/40212.png",
          "/images/mobiliario/ACTION/DONUT HEAD/40212_2.png"
        ]
      },
      {
        sku: "action-40218",
        attrs: { talla: "adult-wide" },
        name: "TALLA ADULTO ANCHO - CODIGO 40218",
        description: "Almohadilla donut diseñada para proteger y sostener la cabeza del paciente, brindando fácil acceso al área quirúrgica de cabeza y cuello. Apta para procedimientos de otorrinolaringologia, cirugía plástica, cirugía general y oftalmología. Polímero AKTON® viscoelástico. || **Dimensiones: 20.3 cm x 11.4 cm x 4.5 cm**.",
        price: 1,
        images: [
          "/images/mobiliario/ACTION/DONUT HEAD/40218.png",
          "/images/mobiliario/ACTION/DONUT HEAD/40218_2.png"
        ]
      },
      {
        sku: "action-40202",
        attrs: { talla: "pediatric" },
        name: "TALLA PEDIÁTRICA - CODIGO 40202",
        description: "Almohadilla donut diseñada para proteger y sostener la cabeza del paciente, brindando fácil acceso al área quirúrgica de cabeza y cuello. Apta para procedimientos de otorrinolaringologia, cirugía plástica, cirugía general y oftalmología. Polímero AKTON® viscoelástico. || **Dimensiones: 14 cm x 5.7 cm x 3.2 cm**.",
        price: 1,
        images: [
          "/images/mobiliario/ACTION/DONUT HEAD/40202.png",
          "/images/mobiliario/ACTION/DONUT HEAD/40202_2.png"
        ]
      },
      {
        sku: "action-40219",
        attrs: { talla: "ped-neonatal" },
        name: "TALLA PEDIÁTRICA/NEONATAL - CODIGO 40219",
        description: "Almohadilla donut diseñada para proteger y sostener la cabeza del paciente, brindando fácil acceso al área quirúrgica de cabeza y cuello. Apta para procedimientos de otorrinolaringologia, cirugía plástica, cirugía general y oftalmología. Polímero AKTON® viscoelástico. || **Dimensiones: 11.4 cm x 5.1 cm x 2.5 cm**.",
        price: 1,
        images: [
          "/images/mobiliario/ACTION/DONUT HEAD/40219.png",
          "/images/mobiliario/ACTION/DONUT HEAD/40219_2.png"
        ]
      },
      {
        sku: "action-40203",
        attrs: { talla: "neonatal" },
        name: "TALLA NEONATAL - CODIGO 40203",
        description: "Almohadilla donut diseñada para proteger y sostener la cabeza del paciente, brindando fácil acceso al área quirúrgica de cabeza y cuello. Apta para procedimientos de otorrinolaringologia, cirugía plástica, cirugía general y oftalmología. Polímero AKTON® viscoelástico. || **Dimensiones: 8.3 cm x 3.8 cm x 2 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/DONUT HEAD/40203.png",
          "/images/mobiliario/ACTION/DONUT HEAD/40203_2.png",
        ]
      }
    ]
  },


  {
    id: "action-horseshoe-head-pad",
    name: "HORSESHOE HEAD PAD",
    type: "Cabeza, cuello y cara",
    description: "Almohadilla cefálica en herradura que proporciona vía aérea despejada y asiste al anestesiólogo con el paciente en posición lateral y prona con la cabeza de lado. Polímero AKTON® viscoelástico.",
    image: "/images/mobiliario/ACTION/HORSESHOE HEAD/CARD.png",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "adult", label: "Adulto" },
          { id: "adult-high", label: "Adulto Alto" },
          { id: "pediatric", label: "Pediátrico" },
          { id: "ped-neonatal", label: "Pediátrico/Neonatal" },
          { id: "neonatal", label: "Neonatal" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40204",
        attrs: { talla: "adult" },
        name: "TALLA ADULTO - CODIGO 40204",
        description: "Almohadilla cefálica en herradura que proporciona vía aérea despejada y asiste al anestesiólogo con el paciente en posición lateral y prona con la cabeza de lado. Polímero AKTON® viscoelástico. || **Dimensiones: 20.3 cm x 7.6 cm x 4.5 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/HORSESHOE HEAD/40204.png",
          "/images/mobiliario/ACTION/HORSESHOE HEAD/40204_2.png",
        ]
      },
      {
        sku: "action-40211",
        attrs: { talla: "adult-high" },
        name: "TALLA ADULTO ALTO - CODIGO 40211",
        description: "Almohadilla cefálica en herradura que proporciona vía aérea despejada y asiste al anestesiólogo con el paciente en posición lateral y prona con la cabeza de lado. Polímero AKTON® viscoelástico. || **Dimensiones: 20.3 cm x 7.6 cm x 7.6 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/HORSESHOE HEAD/40211.png",
          "/images/mobiliario/ACTION/HORSESHOE HEAD/40211_2.png",
        ]
      },
      {
        sku: "action-40205",
        attrs: { talla: "pediatric" },
        name: "TALLA PEDIÁTRICA - CODIGO 40205",
        description: "Almohadilla cefálica en herradura que proporciona vía aérea despejada y asiste al anestesiólogo con el paciente en posición lateral y prona con la cabeza de lado. Polímero AKTON® viscoelástico. || **Dimensiones: 14 cm x 5.7 cm x 3.2 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/HORSESHOE HEAD/40205.png",
          "/images/mobiliario/ACTION/HORSESHOE HEAD/40205_2.png",
        ]
      },
      {
        sku: "action-40220",
        attrs: { talla: "ped-neonatal" },
        name: "TALLA PEDIÁTRICA/NEONATAL - CODIGO 40220",
        description: "Almohadilla cefálica en herradura que proporciona vía aérea despejada y asiste al anestesiólogo con el paciente en posición lateral y prona con la cabeza de lado. Polímero AKTON® viscoelástico. || **Dimensiones: 11.4 cm x 5.1 cm x 2.5 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/HORSESHOE HEAD/40220.png",
          "/images/mobiliario/ACTION/HORSESHOE HEAD/40220_2.png",
        ]
      },
      {
        sku: "action-40206",
        attrs: { talla: "neonatal" },
        name: "TALLA NEONATAL - CODIGO 40206",
        description: "Almohadilla cefálica en herradura que proporciona vía aérea despejada y asiste al anestesiólogo con el paciente en posición lateral y prona con la cabeza de lado. Polímero AKTON® viscoelástico. || **Dimensiones: 8.3 cm x 3.8 cm x 2 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/HORSESHOE HEAD/40206.png",
          "/images/mobiliario/ACTION/HORSESHOE HEAD/40206_2.png",
        ]
      }
    ]
  },

  {
    id: "action-head-pad-center-dish",
    name: "CENTER DISH HEAD PAD",
    type: "Cabeza, cuello y cara",
    description: "Almohadilla cefálica con concavidad central diseñada para posición lateral. Reduce la presión sobre el costado del rostro y la oreja del paciente. Fabricada con polímero AKTON® viscoelástico propietario de Action Products. Reutilizable, radiolúcida y segura para uso en quirófano.",
    image: "/images/mobiliario/ACTION/CENTER DISH HEAD/CARD.png",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "adult", label: "Adulto" },
          { id: "pediatric", label: "Pediátrico" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40207",
        attrs: { talla: "adult" },
        name: "TALLA ADULTO - CODIGO 40207",
        description: "Almohadilla cefálica con concavidad central diseñada para posición lateral. Reduce la presión sobre el costado del rostro y la oreja del paciente. Fabricada con polímero AKTON® viscoelástico propietario de Action Products. Reutilizable, radiolúcida y segura para uso en quirófano. || **Dimensiones: 22.9 cm x 25.4 cm x 2.5 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/CENTER DISH HEAD/40207.png",
          "/images/mobiliario/ACTION/CENTER DISH HEAD/40207_2.png",
        ]
      },
      {
        sku: "action-40221",
        attrs: { talla: "pediatric" },
        name: "TALLA PEDIÁTRICA - CODIGO 40221",
        description: "Almohadilla cefálica con concavidad central diseñada para posición lateral. Reduce la presión sobre el costado del rostro y la oreja del paciente. Fabricada con polímero AKTON® viscoelástico propietario de Action Products. Reutilizable, radiolúcida y segura para uso en quirófano. || **Dimensiones: 15.2 cm x 15.2 cm x 2.5 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/CENTER DISH HEAD/40221.png",
          "/images/mobiliario/ACTION/CENTER DISH HEAD/40221_2.png",
        ]
      }
    ]
  },

  // ==============================================
  // SUPINE HEAD PAD
  // ==============================================
  {
    id: "action-supine-head-pad",
    name: "SUPINE HEAD PAD",
    type: "Cabeza, cuello y cara",
    description: "Cabezal de construcción dual espuma-polímero. La base de espuma tiene una abertura circular de 6\" posicionada bajo la almohadilla de polímero flexible. La abertura permite que el polímero cóncavo de 1\" sumerja el occipucio en la almohadilla, creando un efecto de cuna que incrementa el contacto superficial, reduce la presión y posiciona suavemente la cabeza. Todo el cabezal está encapsulado en una funda de film flexible resistente a fluidos que protege la espuma y no debe retirarse. || **Dimensiones: 25.4 cm x 22.9 cm x 5.7 cm**.",
    price: 1,
    images: ["/images/mobiliario/ACTION/SUPINE HEAD/40200.png",
      "/images/mobiliario/ACTION/SUPINE HEAD/40200_2.png",
    ]
  },

  // ==============================================
  // CONTOURED HEAD PAD
  // ==============================================
  {
    id: "action-contoured-head-pad",
    name: "CONTOURED HEAD PAD",
    type: "Cabeza, cuello y cara",
    description: "Almohadilla cefálica contorneada que proporciona estabilidad de la cabeza del paciente en posición supina. Contorno de 1½\" de profundidad. Polímero AKTON® viscoelástico. || **Dimensiones: 19.4 × 19.4 × 7.6 cm**.",
    price: 1,
    images: ["/images/mobiliario/ACTION/CONTOURED HEAD/40213.png",
      "/images/mobiliario/ACTION/CONTOURED HEAD/40213_2.png",
    ]
  },

  // ==============================================
  // OPHTHALMIC CRADLE HEADREST
  // ==============================================
  {
    id: "action-ophthalmic-cradle-headrest",
    name: "OPHTHALMIC CRADLE HEADREST",
    type: "Cabeza, cuello y cara",
    description: "Cabezal con contornos únicos que ofrece soporte amplio para el cuello del paciente posicionando la cabeza en una concavidad oval central para reducir presión y mejorar estabilidad cefálica. Apto para la mayoría de procedimientos en posición supina. Originalmente diseñado para cirugías oftálmicas prolongadas, con dos zonas elevadas a cada lado para apoyo blando de las manos del cirujano. Idóneo para pacientes que requieren soporte cervical adicional. Polímero AKTON® viscoelástico.",
    image: "/images/mobiliario/ACTION/OPHTALMIC CRADLE HEAD/CARD.png",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "adult", label: "Adulto" },
          { id: "pediatric", label: "Pediátrico" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40217",
        attrs: { talla: "adult" },
        name: "TALLA ADULTO - CODIGO 40217",
        description: "Cabezal con contornos únicos que ofrece soporte amplio para el cuello del paciente posicionando la cabeza en una concavidad oval central para reducir presión y mejorar estabilidad cefálica. Apto para la mayoría de procedimientos en posición supina. Originalmente diseñado para cirugías oftálmicas prolongadas, con dos zonas elevadas a cada lado para apoyo blando de las manos del cirujano. Idóneo para pacientes que requieren soporte cervical adicional. Polímero AKTON® viscoelástico. || **Dimensiones: 26.7 cm x 22.9 cm x 6.7 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/OPHTALMIC CRADLE HEAD/40217.png",
          "/images/mobiliario/ACTION/OPHTALMIC CRADLE HEAD/40217_2.png",
        ]
      },
      {
        sku: "action-40217P",
        attrs: { talla: "pediatric" },
        name: "TALLA PEDIÁTRICA - CODIGO 40217P",
        description: "Cabezal con contornos únicos que ofrece soporte amplio para el cuello del paciente posicionando la cabeza en una concavidad oval central para reducir presión y mejorar estabilidad cefálica. Apto para la mayoría de procedimientos en posición supina. Originalmente diseñado para cirugías oftálmicas prolongadas, con dos zonas elevadas a cada lado para apoyo blando de las manos del cirujano. Idóneo para pacientes que requieren soporte cervical adicional. Polímero AKTON® viscoelástico. || **Dimensiones: 21.6 cm x 19 cm x 5.7 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/OPHTALMIC CRADLE HEAD/40217P.png",
          "/images/mobiliario/ACTION/OPHTALMIC CRADLE HEAD/40217P_2.png",
        ]
      }
    ]
  },

  // ==============================================
  // PRONE HEADRESTS
  // ==============================================
  {
    id: "action-prone-headrest",
    name: "PRONE HEADREST",
    type: "Cabeza, cuello y cara",
    description: "Cabezal para posición prona diseñado para sostener la cabeza del paciente en posición recta y neutra durante procedimientos en prono. Abertura central esculpida para evitar presión sobre ojos, nariz y cara. Superficie de polímero AKTON® blando reduce el cizallamiento en frente y mentón. Canales en la parte superior e inferior del pad permiten el acceso de tubos para el anestesiólogo.",
    image: "/images/mobiliario/ACTION/PRONE HEAD/CARD.png",

    attributeOrder: ["tamano"],

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "medium", label: "Medium" },
          { id: "large", label: "Large" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40216M",
        attrs: { tamano: "medium" },
        name: "TALLA MEDIUM - CODIGO 40216M",
        description: "Cabezal para posición prona diseñado para sostener la cabeza del paciente en posición recta y neutra durante procedimientos en prono. Abertura central esculpida para evitar presión sobre ojos, nariz y cara. Superficie de polímero AKTON® blando reduce el cizallamiento en frente y mentón. Canales en la parte superior e inferior del pad permiten el acceso de tubos para el anestesiólogo. || **Dimensiones: 22.2 cm x 19.7 cm x 12 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/PRONE HEAD/40216.png",
          "/images/mobiliario/ACTION/PRONE HEAD/40216M.png",
        ]
      },
      {
        sku: "action-40216L",
        attrs: { tamano: "large" },
        name: "TALLA LARGE - CODIGO 40216L",
        description: "Cabezal para posición prona diseñado para sostener la cabeza del paciente en posición recta y neutra durante procedimientos en prono. Abertura central esculpida para evitar presión sobre ojos, nariz y cara. Superficie de polímero AKTON® blando reduce el cizallamiento en frente y mentón. Canales en la parte superior e inferior del pad permiten el acceso de tubos para el anestesiólogo. || **Dimensiones: 27 cm x 22.9 cm x 14 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/PRONE HEAD/40216.png",
          "/images/mobiliario/ACTION/PRONE HEAD/40216L.png",
        ]
      }
    ]
  },

  // ==============================================
  // OPHTHALMIC HEADRESTS
  // ==============================================
  {
    id: "action-ophthalmic-headrest",
    name: "OPHTHALMIC HEADREST",
    type: "Cabeza, cuello y cara",
    description: "Cabezal oftálmico con abertura contorneada profunda que sostiene la cabeza y mejora la estabilidad. Sus lados robustos y blandos están diseñados para reducir la fatiga del cirujano y ofrecer soporte de muñeca y mano durante procedimientos oftálmicos, faciales u orales. Polímero AKTON® viscoelástico.",
    image: "/images/mobiliario/ACTION/OPHTALMIC HEAD/CARD.png",

    attributeOrder: ["tamano"],

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "medium", label: "Medium" },
          { id: "large", label: "Large" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40210",
        attrs: { tamano: "medium" },
        name: "TALLA MEDIUM - CODIGO 40210",
        description: "Cabezal oftálmico con abertura contorneada profunda que sostiene la cabeza y mejora la estabilidad. Sus lados robustos y blandos están diseñados para reducir la fatiga del cirujano y ofrecer soporte de muñeca y mano durante procedimientos oftálmicos, faciales u orales. Polímero AKTON® viscoelástico. || **Dimensiones: 25.4 cm x 30.5 cm x 7.3 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/OPHTALMIC HEAD/40210.png",
          "/images/mobiliario/ACTION/OPHTALMIC HEAD/40210_2.png",
        ]
      },
      {
        sku: "action-40209",
        attrs: { tamano: "large" },
        name: "TALLA LARGE - CODIGO 40209",
        description: "Cabezal oftálmico con abertura contorneada profunda que sostiene la cabeza y mejora la estabilidad. Sus lados robustos y blandos están diseñados para reducir la fatiga del cirujano y ofrecer soporte de muñeca y mano durante procedimientos oftálmicos, faciales u orales. Polímero AKTON® viscoelástico. || **Dimensiones: 25.4 cm x 30.5 cm x 9.8 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/OPHTALMIC HEAD/40209.png",
          "/images/mobiliario/ACTION/OPHTALMIC HEAD/40209_2.png",
        ]
      }
    ]
  },

  // ==============================================
  // FOREHEAD PROTECTOR
  // ==============================================
  {
    id: "action-forehead-protector",
    name: "FOREHEAD PROTECTOR",
    type: "Cabeza, cuello y cara",
    description: "Protector frontal semicircular con base plana para proteger la frente de pacientes pediátricos e infantiles de la presión ejercida por tubos de oxígeno. Polímero AKTON® viscoelástico. Ref. 40208. Dimensiones: 2½\" L × 1⅝\" W × ⅝\" H (6.4 × 4.1 × 1.6 cm).",
    price: 1,
    images: [
      "/images/mobiliario/ACTION/FOREHEAD/40208.png",
      "/images/mobiliario/ACTION/FOREHEAD/40208_1.png",
      "/images/mobiliario/ACTION/FOREHEAD/40208_2.png",
    ]
  },

  // ==============================================
  // SECCION 2 - PEDIATRIC & NEONATAL
  // ==============================================

  // ==============================================
  // PEDIATRIC POSITIONER SET (4 piezas)
  // ==============================================
  {
    id: "action-pediatric-positioner-set",
    name: "PEDIATRIC POSITIONER SET",
    type: "Cuerpo entero pediatrico",
    description: "Set versátil de 4 piezas diseñado para posicionar y proteger neonatos, lactantes y niños pequeños en una variedad de procedimientos. Usado plano y solo, el posicionador canalizado estabiliza al paciente en supino. Con un chest roll bajo la almohadilla en área torácica permite extensión del tórax para procedimientos anteriores. Con chest roll pequeño en tórax y grande en sacro mejora el acceso para procedimientos posteriores como resección de tumor espinal. Incluye: 1× Horseshoe Head Pad 40205, 1× Chest Roll 40642, 1× Chest Roll 40646, 1× Rectangular Channel Pad 40647. Polímero AKTON® viscoelástico.",
    price: 1,
    images: ["/images/mobiliario/ACTION/PEDIATRIC POSITIONER/CARD.png",
      "/images/mobiliario/ACTION/PEDIATRIC POSITIONER/40647_1.png",
      "/images/mobiliario/ACTION/PEDIATRIC POSITIONER/40647_2.png",
    ],
  },



  // ==============================================
  // PEDIATRIC / NEO-NATAL POSITIONERS
  // ==============================================
  {
    id: "action-pediatric-neonatal-positioner",
    name: "POSICIONADOR PEDIÁTRICO/NEONATAL",
    type: "Cuerpo entero pediatrico",
    description: "Posicionadores para lactantes y neonatos que reemplazan el uso de paños enrollados u otros improvisados. Polímero AKTON® viscoelástico.",
    image: "/images/mobiliario/ACTION/PEDIATRIC POSITIONER 2/CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "40648", label: "40648" },
          { id: "40649", label: "40649" },
          { id: "40650", label: "40650" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40648",
        attrs: { modelo: "40648" },
        name: "MODELO 40648",
        description: "Posicionadores para lactantes y neonatos que reemplazan el uso de paños enrollados u otros improvisados. Polímero AKTON® viscoelástico. || **Dimensiones: 15 cm (largo) × 3.8 cm (ancho) × 2 cm (altura).**",
        price: 1,
        image: "/images/mobiliario/ACTION/PEDIATRIC POSITIONER 2/40648.png"
      },
      {
        sku: "action-40649",
        attrs: { modelo: "40649" },
        name: "MODELO 40649",
        description: "Posicionadores para lactantes y neonatos que reemplazan el uso de paños enrollados u otros improvisados. Polímero AKTON® viscoelástico. || **Dimensiones: 15 cm (largo) × 2.5 cm (ancho) × 2.5 cm (altura).**",
        price: 1,
        image: "/images/mobiliario/ACTION/PEDIATRIC POSITIONER 2/40649.png"
      },
      {
        sku: "action-40650",
        attrs: { modelo: "40650" },
        name: "MODELO 40650",
        description: "Posicionadores para lactantes y neonatos que reemplazan el uso de paños enrollados u otros improvisados. Polímero AKTON® viscoelástico. || **Dimensiones: 15 cm (largo) × 3.8 cm (ancho) × 3.8 cm (altura).**",
        price: 1,
        image: "/images/mobiliario/ACTION/PEDIATRIC POSITIONER 2/40650.png"
      }
    ]
  },

  // ==============================================
  // NICU PADS
  // ==============================================
  {
    id: "action-nicu-pads",
    name: "PADS PARA UCIN",
    type: "Cuerpo entero pediatrico",
    description: "Almohadillas de polímero AKTON® de ½\" que proporcionan superficie de manejo de presión y cizallamiento para pacientes pediátricos y neonatales. Disponibles en modelos para incubadora (isolette) y cunero (bassinet).",
    image: "/images/mobiliario/ACTION/UCIN PADS/CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "isolette-l", label: "66 x 40.6 x 1.3 cm" },
          { id: "isolette", label: "74 x 48.2 x 1.3 cm" },
          { id: "bassinet", label: "66 x 30.5 x 1.3 cm" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40120L",
        attrs: { modelo: "isolette-l" },
        name: "MODELO 40120L",
        description: "Almohadillas de polímero AKTON® de ½ que proporcionan superficie de manejo de presión y cizallamiento para pacientes pediátricos y neonatales. Disponibles en modelos para incubadora (isolette) y cunero (bassinet). || **Dimensiones: 66 x 40.6 x 1.3 cm.**",
        price: 1,
        images: ["/images/mobiliario/ACTION/UCIN PADS/CARD.png",
          "/images/mobiliario/ACTION/UCIN PADS/40120L.png",
        ],
      },
      {
        sku: "action-40121",
        attrs: { modelo: "isolette" },
        name: "MODELO 40121",
        description: "Almohadillas de polímero AKTON® de ½ que proporcionan superficie de manejo de presión y cizallamiento para pacientes pediátricos y neonatales. Disponibles en modelos para incubadora (isolette) y cunero (bassinet). || **Dimensiones: 74 x 48.2 x 1.3 cm.**",
        price: 1,
        images: ["/images/mobiliario/ACTION/UCIN PADS/CARD.png",
          "/images/mobiliario/ACTION/UCIN PADS/40121.png",
        ],
      },
      {
        sku: "action-40120",
        attrs: { modelo: "bassinet" },
        name: "MODELO 40120",
        description: "Almohadillas de polímero AKTON® de ½ que proporcionan superficie de manejo de presión y cizallamiento para pacientes pediátricos y neonatales. Disponibles en modelos para incubadora (isolette) y cunero (bassinet). || **Dimensiones: 66 x 30.5 x 1.3 cm.**",
        price: 1,
        images: ["/images/mobiliario/ACTION/UCIN PADS/CARD.png",
          "/images/mobiliario/ACTION/UCIN PADS/40120.png",
        ],
      }
    ]
  },

  // ==============================================
  // SECCION 3 - ARM / SHOULDER
  // ==============================================

  // ==============================================
  // ULNAR NERVE PROTECTOR
  // ==============================================
  {
    id: "action-ulnar-nerve-protector",
    name: "ULNAR NERVE PROTECTOR",
    type: "Brazos, hombros y codos",
    description: "Almohadilla de polímero AKTON® que protege el nervio cubital del paciente proporcionando mayor visibilidad y acceso para vía IV o línea arterial al anestesiólogo. Se coloca alrededor del codo y se asegura con velcro integrado.",
    image: "/images/mobiliario/ACTION/ULNAR/CARD.png",

    attributeOrder: ["talla"],

    attributes: [
      {
        id: "talla",
        label: "Talla",
        type: "single",
        values: [
          { id: "pediatric", label: "Pediátrico" },
          { id: "small", label: "Small" },
          { id: "large", label: "Large" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40304",
        attrs: { talla: "small" },
        name: "MODELO 40304",
        description: "Almohadilla de polímero AKTON® que protege el nervio cubital del paciente proporcionando mayor visibilidad y acceso para vía IV o línea arterial al anestesiólogo. Se coloca alrededor del codo y se asegura con velcro integrado. || **Dimensiones**: 40 × 15.24 × 1.27 cm. || **Circunferencia máxima aprox.** 15.75\" ",
        price: 1,
        images: ["/images/mobiliario/ACTION/ULNAR/40304.png", "/images/mobiliario/ACTION/ULNAR/40304_2.png"]
      },
      {
        sku: "action-40304L",
        attrs: { talla: "large" },
        name: "MODELO 40304L",
        description: "Almohadilla de polímero AKTON® que protege el nervio cubital del paciente proporcionando mayor visibilidad y acceso para vía IV o línea arterial al anestesiólogo. Se coloca alrededor del codo y se asegura con velcro integrado. || **Dimensiones**: 40 × 15.24 × 1.27 cm. || **Circunferencia máxima aprox.** 15.75\" ",
        price: 1,
        images: ["/images/mobiliario/ACTION/ULNAR/40304L.png", "/images/mobiliario/ACTION/ULNAR/40304L_2.png"]
      },
      {
        sku: "action-40304P",
        attrs: { talla: "pediatric" },
        name: "MODELO 40304P",
        description: "Almohadilla de polímero AKTON® que protege el nervio cubital del paciente proporcionando mayor visibilidad y acceso para vía IV o línea arterial al anestesiólogo. Se coloca alrededor del codo y se asegura con velcro integrado. || **Dimensiones**: 40 × 15.24 × 1.27 cm. || **Circunferencia máxima aprox.** 15.75",
        price: 1,
        images: ["/images/mobiliario/ACTION/ULNAR/40304P.png", "/images/mobiliario/ACTION/ULNAR/40304P_2.png"]
      }
    ]
  },

  // ==============================================
  // ULNAR / FOREARM PROTECTOR
  // ==============================================
  {
    id: "action-ulnar-forearm-protector",
    name: "ULNAR / FOREARM PROTECTOR",
    type: "Brazos, hombros y codos",
    description: "Almohadilla de polímero AKTON® 40303 que protege el nervio cubital y el antebrazo completo del paciente contra daño por presión o cizallamiento. Diseñada para envolverse alrededor del brazo y asegurarse con velcro integrado. || **Dimensiones**: 45.72 × 33.02 × 0.64 cm.",
    price: 1,
    images: ["/images/mobiliario/ACTION/ULNAR FOREARM/1.png", "/images/mobiliario/ACTION/ULNAR FOREARM/2.png", "/images/mobiliario/ACTION/ULNAR FOREARM/3.png"]
  },

  // ==============================================
  // HAND / WRIST SUPPORT PAD
  // ==============================================
  {
    id: "action-hand-wrist-support-pad",
    name: "HAND / WRIST SUPPORT PAD – ACTION",
    type: "Brazos, hombros y codos",
    description: "Almohadilla de polímero AKTON® 40321 reutilizable para posicionamiento estable y cómodo de mano y muñeca. Reemplaza toallas enrolladas. Ideal para túnel carpiano, canulación arterial, diálisis e inserción de vía IV o línea arterial. || **Dimensiones**: 27.94 × 8.89 × 5.7 cm.",
    price: 1,
    images: ["/images/mobiliario/ACTION/WRIST/1.png", "/images/mobiliario/ACTION/WRIST/2.png"]
  },

  // ==============================================
  // CONTOURED ARMBOARD PADS
  // ==============================================
  {
    id: "action-contoured-armboard-pad",
    name: "CONTOURED ARMBOARD PAD – ACTION",
    type: "Brazos, hombros y codos",
    description: "Almohadilla contorneada para brazo con diseño que abraza el miembro superior brindando protección total del bíceps, codo y antebrazo. Bordes ligeramente elevados para mantener el brazo correctamente posicionado. Polímero AKTON® viscoelástico. Canal central de 3/4\" de profundidad. Reutilizable.",
    image: "/images/mobiliario/ACTION/CONTOURED ARMBOARD/CARD.png",

    attributeOrder: ["tamano"],

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "small", label: "Small" },
          { id: "medium", label: "Medium" },
          { id: "large", label: "Large" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40307",
        attrs: { tamano: "small" },
        name: "MODELO 40307",
        description: "Almohadilla contorneada para brazo con diseño que abraza el miembro superior brindando protección total del bíceps, codo y antebrazo. Bordes ligeramente elevados para mantener el brazo correctamente posicionado. Polímero AKTON® viscoelástico. Canal central de 3/4 de profundidad. || **Dimensiones**: 40.64 × 14.61 × 5.72 cm.",
        price: 1,
        images: ["/images/mobiliario/ACTION/CONTOURED ARMBOARD/40307.png", "/images/mobiliario/ACTION/CONTOURED ARMBOARD/4.png"],
      },
      {
        sku: "action-40310",
        attrs: { tamano: "medium" },
        name: "MODELO 40310",
        description: "Almohadilla contorneada para brazo con diseño que abraza el miembro superior brindando protección total del bíceps, codo y antebrazo. Bordes ligeramente elevados para mantener el brazo correctamente posicionado. Polímero AKTON® viscoelástico. Canal central de 3/4 de profundidad. || **Dimensiones**: 50.8 × 14.6 × 5.72 cm.",
        price: 1,
        images: ["/images/mobiliario/ACTION/CONTOURED ARMBOARD/40310.png", "/images/mobiliario/ACTION/CONTOURED ARMBOARD/4.png"],
      },
      {
        sku: "action-40306",
        attrs: { tamano: "large" },
        name: "MODELO 40306",
        description: "Almohadilla contorneada para brazo con diseño que abraza el miembro superior brindando protección total del bíceps, codo y antebrazo. Bordes ligeramente elevados para mantener el brazo correctamente posicionado. Polímero AKTON® viscoelástico. Canal central de 3/4 de profundidad. || **Dimensiones**: 60.96 × 14.6 × 5.72 cm.",
        price: 1,
        images: ["/images/mobiliario/ACTION/CONTOURED ARMBOARD/40306.png", "/images/mobiliario/ACTION/CONTOURED ARMBOARD/4.png"],
      }
    ]
  },

  // ==============================================
  // ARMBOARD PADS & STABILIZER STRAPS
  // ==============================================
  {
    id: "action-arm-straps",
    name: "ARM STRAPS",
    type: "Brazos, hombros y codos",
    description: "Esta correa reutilizable incorpora una sección de polímero suave diseñada para proteger la piel del paciente, proporcionando al mismo tiempo estabilización del brazo o la mano durante el procedimiento. La correa se fija mediante un sistema de cierre tipo hook-and-loop (gancho y bucle) integrado.",
    image: "/images/mobiliario/ACTION/HAND STRAPS/CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "short", label: "Short" },
          { id: "long", label: "Long" },
        ]
      }
    ],

    variants: [
      {
        sku: "action-40315",
        attrs: { modelo: "short" },
        name: "MODELO 40315",
        description: "Correa reutilizable incorpora una sección de polímero suave diseñada para proteger la piel del paciente, proporcionando al mismo tiempo estabilización del brazo o la mano durante el procedimiento. La correa se fija mediante un sistema de cierre tipo hook-and-loop (gancho y bucle) integrado. || **Dimensiones**: 63.5 × 5.08 × 0.64 cm.",
        images: ["/images/mobiliario/ACTION/HAND STRAPS/40315.png", "/images/mobiliario/ACTION/HAND STRAPS/1.png", "/images/mobiliario/ACTION/HAND STRAPS/2.png"],
        price: 1,
      },
      {
        sku: "action-40317",
        attrs: { modelo: "long" },
        name: "MODELO 40317",
        description: "Correa reutilizable incorpora una sección de polímero suave diseñada para proteger la piel del paciente, proporcionando al mismo tiempo estabilización del brazo o la mano durante el procedimiento. La correa se fija mediante un sistema de cierre tipo hook-and-loop (gancho y bucle) integrado. || **Dimensiones**: 91.44 × 5.08 × 0.64 cm.",
        images: ["/images/mobiliario/ACTION/HAND STRAPS/40317.png", "/images/mobiliario/ACTION/HAND STRAPS/1.png", "/images/mobiliario/ACTION/HAND STRAPS/2.png"],
        price: 1,
      }
    ]
  },

  {
    id: "action-armboard-pads",
    name: "ARMBOARD PADS",
    type: "Brazos, hombros y codos",
    description: "Para uso en extensiones estándar de mesa quirúrgica para brazo (armboard), diseñado para proteger las áreas del bíceps, codo y antebrazo del paciente. Fabricado con polímero viscoelástico AKTON®..",
    images: [
      "/images/mobiliario/ACTION/ARMBOARD PADS/CARD.png",
    ],

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "short", label: "Short" },
          { id: "long", label: "Long" },
          { id: "wide-short", label: "Wide Short" },
          { id: "wide-long", label: "Wide Long" },
        ]
      }
    ],

    variants: [
      {
        sku: "action-40300",
        attrs: { modelo: "short" },
        name: "MODELO 40300",
        description: "Para uso en extensiones estándar de mesa quirúrgica para brazo (armboard), diseñado para proteger las áreas del bíceps, codo y antebrazo del paciente. Fabricado con polímero viscoelástico AKTON®. || **Dimensiones**: 38.1 × 10.16 × 0.64 cm.",
        price: 1,
        images: [
          "/images/mobiliario/ACTION/ARMBOARD PADS/40300.png",
          "/images/mobiliario/ACTION/ARMBOARD PADS/2.png",
        ]
      },
      {
        sku: "action-40301",
        attrs: { modelo: "long" },
        name: "MODELO 40301",
        description: "Para uso en extensiones estándar de mesa quirúrgica para brazo (armboard), diseñado para proteger las áreas del bíceps, codo y antebrazo del paciente. Fabricado con polímero viscoelástico AKTON®. || **Dimensiones**: 60.96 × 10.16 × 0.95 cm.",
        price: 1,
        images: [
          "/images/mobiliario/ACTION/ARMBOARD PADS/40301.png",
          "/images/mobiliario/ACTION/ARMBOARD PADS/2.png",
        ]
      },
      {
        sku: "action-40309",
        attrs: { modelo: "wide-short" },
        name: "MODELO 40309",
        description: "Para uso en extensiones estándar de mesa quirúrgica para brazo (armboard), diseñado para proteger las áreas del bíceps, codo y antebrazo del paciente. Fabricado con polímero viscoelástico AKTON®. || **Dimensiones**: 38.1 × 16.51 × 0.64 cm.",
        price: 1,
        images: [
          "/images/mobiliario/ACTION/ARMBOARD PADS/40309.png",
          "/images/mobiliario/ACTION/ARMBOARD PADS/2.png",
        ]
      },
      {
        sku: "action-40308",
        attrs: { modelo: "wide-long" },
        name: "MODELO 40308",
        description: "Para uso en extensiones estándar de mesa quirúrgica para brazo (armboard), diseñado para proteger las áreas del bíceps, codo y antebrazo del paciente. Fabricado con polímero viscoelástico AKTON®. || **Dimensiones**: 60.96 × 16.51 × 0.95 cm.",
        price: 1,
        images: [
          "/images/mobiliario/ACTION/ARMBOARD PADS/40308.png",
          "/images/mobiliario/ACTION/ARMBOARD PADS/2.png",
        ]
      },
    ]
  },



  // ==============================================
  // SHOULDER BRACE 2-PIECE SET
  // ==============================================
  {
    id: "action-shoulder-brace-pad-set",
    name: "SHOULDER BRACE PAD SET – ACTION",
    type: "Pecho, torso y cadera",
    description: "Set de 2 almohadillas reutilizables de polímero AKTON® de 1\" de grosor diseñadas para férulas básicas de hombro. Ajustables, se envuelven alrededor de la férula y se aseguran con velcro. Se venden en par.40302 Dimensiones por unidad: 12.7 × 15.24 × 2.54 cm.",
    price: 1,
    image: "/images/mobiliario/ACTION/SHOULDER BRACE/1.png"
  },

  // ==============================================
  // BREAST BIOPSY TABLE PAD
  // ==============================================
  {
    id: "action-breast-biopsy-table-pad",
    name: "BREAST BIOPSY TABLE PAD",
    type: "Pecho, torso y cadera",
    description: "Almohadilla de polímero AKTON® que mejora el confort del paciente y protege la piel y prominencias óseas en posición prona durante procedimientos de biopsia de mama. Incluye abertura circular de 9⅜\" de diámetro. || **Dimensiones:** 76.2 × 57.79 × 0.95 cm con corte de 23.81 cm.",
    price: 1,
    image: "/images/mobiliario/ACTION/BREAST/CARD.png",
    images: ["/images/mobiliario/ACTION/BREAST/1.png"]
  },

  // ==============================================
  // SECCION 4 - CHEST / PRONE / TORSO
  // ==============================================

  // ==============================================
  // CHEST ROLLS
  // ==============================================
  {
    id: "action-chest-roll",
    name: "CHEST ROLLS",
    type: "Pecho, torso y cadera",
    description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente, desde adultos hasta neonatos. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC.",
    image: "/images/mobiliario/ACTION/CHEST ROLLS/CARD.png",

    attributeOrder: ["paciente", "modelo"],

    attributes: [
      {
        id: "paciente",
        label: "Paciente",
        type: "single",
        values: [
          { id: "adult", label: "Adulto" },
          { id: "pediatric", label: "Pediátrico" }
        ]
      },
      {
        id: "modelo",
        label: "Tamaño",
        type: "single",
        dependsOn: "paciente",
        values: [
          { id: "40616", label: "31.75 x 11.11 x 8.57 cm", parentValue: "adult" },
          { id: "40617", label: "41.91 x 11.11 x 8.57 cm", parentValue: "adult" },
          { id: "40618", label: "52.07 x 11.11 x 8.57 cm", parentValue: "adult" },
          { id: "40619", label: "30.48 x 15.24 x 12.7 cm", parentValue: "adult" },
          { id: "40620", label: "40.64 x 15.24 x 12.7 cm", parentValue: "adult" },
          { id: "40621", label: "50.8 x 15.24 x 12.7 cm", parentValue: "adult" },
          { id: "40639", label: "15.24 x 5.08 x 5.08 cm", parentValue: "pediatric" },
          { id: "40640", label: "20.32 x 5.08 x 5.08 cm", parentValue: "pediatric" },
          { id: "40641", label: "25.4 x 5.08 x 5.08 cm", parentValue: "pediatric" },
          { id: "40642", label: "30.48 x 5.08 x 5.08 cm", parentValue: "pediatric" },
          { id: "40643", label: "15.24 x 7.62 x 7.62 cm", parentValue: "pediatric" },
          { id: "40644", label: "20.32 x 7.62 x 7.62 cm", parentValue: "pediatric" },
          { id: "40645", label: "25.4 x 7.62 x 7.62 cm", parentValue: "pediatric" },
          { id: "40646", label: "30.48 x 7.62 x 7.62 cm", parentValue: "pediatric" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40616",
        attrs: { paciente: "adult", modelo: "40616" },
        name: "Adulto – 40616",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente adulto. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 31.75 cm (largo) × 11.11 cm (ancho) × 8.57 cm (altura)** || Funda desechable compatible: 40616DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/ADULTOS.png"
      },
      {
        sku: "action-40617",
        attrs: { paciente: "adult", modelo: "40617" },
        name: "Adulto – 40617",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente adulto. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 41.91 cm (largo) × 11.11 cm (ancho) × 8.57 cm (altura)** || Funda desechable compatible: 40617DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/ADULTOS.png"
      },
      {
        sku: "action-40618",
        attrs: { paciente: "adult", modelo: "40618" },
        name: "Adulto – 40618",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente adulto. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 52.07 cm (largo) × 11.11 cm (ancho) × 8.57 cm (altura)** || Funda desechable compatible: 40618DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/ADULTOS.png"
      },
      {
        sku: "action-40619",
        attrs: { paciente: "adult", modelo: "40619" },
        name: "Adulto – 40619",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente adulto. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 30.48 cm (largo) × 15.24 cm (ancho) × 12.7 cm (altura)** || Funda desechable compatible: 40619DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/ADULTOS.png"
      },
      {
        sku: "action-40620",
        attrs: { paciente: "adult", modelo: "40620" },
        name: "Adulto – 40620",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente adulto. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 40.64 cm (largo) × 15.24 cm (ancho) × 12.7 cm (altura)** || Funda desechable compatible: 40620DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/ADULTOS.png"
      },
      {
        sku: "action-40621",
        attrs: { paciente: "adult", modelo: "40621" },
        name: "Adulto – 40621",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente adulto. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 50.8 cm (largo) × 15.24 cm (ancho) × 12.7 cm (altura)** || Funda desechable compatible: 40621DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/ADULTOS.png"
      },
      {
        sku: "action-40639",
        attrs: { paciente: "pediatric", modelo: "40639" },
        name: "Pediátrico – 40639",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente pediátrico. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 15.24 cm (largo) × 5.08 cm (ancho) × 5.08 cm (altura)** || Funda desechable compatible: 40639DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/PEDIATRICOS.png"
      },
      {
        sku: "action-40640",
        attrs: { paciente: "pediatric", modelo: "40640" },
        name: "Pediátrico – 40640",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente pediátrico. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 20.32 cm (largo) × 5.08 cm (ancho) × 5.08 cm (altura)** || Funda desechable compatible: 40640DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/PEDIATRICOS.png"
      },
      {
        sku: "action-40641",
        attrs: { paciente: "pediatric", modelo: "40641" },
        name: "Pediátrico – 40641",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente pediátrico. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 25.4 cm (largo) × 5.08 cm (ancho) × 5.08 cm (altura)** || Funda desechable compatible: 40641DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/PEDIATRICOS.png"
      },
      {
        sku: "action-40642",
        attrs: { paciente: "pediatric", modelo: "40642" },
        name: "Pediátrico – 40642",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente pediátrico. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 30.48 cm (largo) × 5.08 cm (ancho) × 5.08 cm (altura)** || Funda desechable compatible: 40642DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/PEDIATRICOS.png"
      },
      {
        sku: "action-40643",
        attrs: { paciente: "pediatric", modelo: "40643" },
        name: "Pediátrico – 40643",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente pediátrico. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 15.24 cm (largo) × 7.62 cm (ancho) × 7.62 cm (altura)** || Funda desechable compatible: 40643DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/PEDIATRICOS.png"
      },
      {
        sku: "action-40644",
        attrs: { paciente: "pediatric", modelo: "40644" },
        name: "Pediátrico – 40644",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente pediátrico. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 20.32 cm (largo) × 7.62 cm (ancho) × 7.62 cm (altura)** || Funda desechable compatible: 40644DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/PEDIATRICOS.png"
      },
      {
        sku: "action-40645",
        attrs: { paciente: "pediatric", modelo: "40645" },
        name: "Pediátrico – 40645",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente pediátrico. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 25.4 cm (largo) × 7.62 cm (ancho) × 7.62 cm (altura)** || Funda desechable compatible: 40645DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/PEDIATRICOS.png"
      },
      {
        sku: "action-40646",
        attrs: { paciente: "pediatric", modelo: "40646" },
        name: "Pediátrico – 40646",
        description: "Rollo de tórax de base plana diseñado para proporcionar soporte estable en posición prona. Disponible en amplia variedad de alturas y longitudes para adaptarse a cualquier paciente pediátrico. Polímero AKTON® viscoelástico. Compatible con fundas desechables serie DC. || **Dimensiones: 30.48 cm (largo) × 7.62 cm (ancho) × 7.62 cm (altura)** || Funda desechable compatible: 40646DC.",
        price: 1,
        image: "/images/mobiliario/ACTION/CHEST ROLLS/PEDIATRICOS.png"
      }
    ]
  },

  // ==============================================
  // DISPOSABLE CHEST ROLL COVERS
  // ==============================================
  {
    id: "action-disposable-chest-roll-cover",
    name: "FUNDAS DESECHABLES PARA CHEST ROLL",
    type: "Desechables",
    description: "Fundas desechables no estériles resistentes a fluidos para rollos de tórax (chest rolls) ACTION. Fabricadas en film blando y flexible. Diseñadas para extender la vida útil del chest roll y reducir la exposición a fluidos durante el uso. El diseño slip-on imita el tamaño y la forma del rollo con solapa de film superpuesta a lo largo de la base plana. Caja de 25 unidades.",
    image: "/images/mobiliario/ACTION/DISPOSABLE COVERS/CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Para Chest Roll",
        type: "single",
        values: [
          { id: "40616", label: "40616" },
          { id: "40617", label: "40617" },
          { id: "40618", label: "40618" },
          { id: "40619", label: "40619" },
          { id: "40620", label: "40620" },
          { id: "40621", label: "40621" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40616DC",
        attrs: { modelo: "40616" },
        name: "MODELO 40616DC",
        description: "Funda desechable no estéril resistente a fluidos para chest rolls ACTION. Fabricadas en film blando y flexible, diseñadas para **extender la vida útil** del chest roll y reducir la exposición a fluidos durante el uso. El diseño slip-on imita el tamaño y la forma del rollo con solapa de film superpuesta a lo largo de la base plana. **Caja de 25 unidades.** Para Chest Roll 40616.",
        price: 1,
        images: ["/images/mobiliario/ACTION/DISPOSABLE COVERS/1.png",
          "/images/mobiliario/ACTION/DISPOSABLE COVERS/2.png",
        ]
      },
      {
        sku: "action-40617DC",
        attrs: { modelo: "40617" },
        name: "MODELO 40617DC",
        description: "Funda desechable no estéril resistente a fluidos para chest rolls ACTION. Fabricadas en film blando y flexible, diseñadas para **extender la vida útil** del chest roll y reducir la exposición a fluidos durante el uso. El diseño slip-on imita el tamaño y la forma del rollo con solapa de film superpuesta a lo largo de la base plana. **Caja de 25 unidades.** Para Chest Roll 40617.",
        price: 1,
        images: ["/images/mobiliario/ACTION/DISPOSABLE COVERS/1.png",
          "/images/mobiliario/ACTION/DISPOSABLE COVERS/2.png",
        ]
      },
      {
        sku: "action-40618DC",
        attrs: { modelo: "40618" },
        name: "MODELO 40618DC",
        description: "Funda desechable no estéril resistente a fluidos para chest rolls ACTION. Fabricadas en film blando y flexible, diseñadas para **extender la vida útil** del chest roll y reducir la exposición a fluidos durante el uso. El diseño slip-on imita el tamaño y la forma del rollo con solapa de film superpuesta a lo largo de la base plana. **Caja de 25 unidades.** Para Chest Roll 40618.",
        price: 1,
        images: ["/images/mobiliario/ACTION/DISPOSABLE COVERS/1.png",
          "/images/mobiliario/ACTION/DISPOSABLE COVERS/2.png",
        ]
      },
      {
        sku: "action-40619DC",
        attrs: { modelo: "40619" },
        name: "MODELO 40619DC",
        description: "Funda desechable no estéril resistente a fluidos para chest rolls ACTION. Fabricadas en film blando y flexible, diseñadas para **extender la vida útil** del chest roll y reducir la exposición a fluidos durante el uso. El diseño slip-on imita el tamaño y la forma del rollo con solapa de film superpuesta a lo largo de la base plana. **Caja de 25 unidades.** Para Chest Roll 40619.",
        price: 1,
        images: ["/images/mobiliario/ACTION/DISPOSABLE COVERS/1.png",
          "/images/mobiliario/ACTION/DISPOSABLE COVERS/2.png",
        ]
      },
      {
        sku: "action-40620DC",
        attrs: { modelo: "40620" },
        name: "MODELO 40620DC",
        description: "Funda desechable no estéril resistente a fluidos para chest rolls ACTION. Fabricadas en film blando y flexible, diseñadas para **extender la vida útil** del chest roll y reducir la exposición a fluidos durante el uso. El diseño slip-on imita el tamaño y la forma del rollo con solapa de film superpuesta a lo largo de la base plana. **Caja de 25 unidades.** Para Chest Roll 40620.",
        price: 1,
        images: ["/images/mobiliario/ACTION/DISPOSABLE COVERS/1.png",
          "/images/mobiliario/ACTION/DISPOSABLE COVERS/2.png",
        ]
      },
      {
        sku: "action-40621DC",
        attrs: { modelo: "40621" },
        name: "MODELO 40621DC",
        description: "Funda desechable no estéril resistente a fluidos para chest rolls ACTION. Fabricadas en film blando y flexible, diseñadas para **extender la vida útil** del chest roll y reducir la exposición a fluidos durante el uso. El diseño slip-on imita el tamaño y la forma del rollo con solapa de film superpuesta a lo largo de la base plana. **Caja de 25 unidades.** Para Chest Roll 40621.",
        price: 1,
        images: ["/images/mobiliario/ACTION/DISPOSABLE COVERS/1.png",
          "/images/mobiliario/ACTION/DISPOSABLE COVERS/2.png",
        ]
      }
    ]
  },

  // ==============================================
  // CHEST ROLL COVER (reutilizable)
  // ==============================================
  {
    id: "action-chest-roll-cover",
    name: "CHEST ROLL COVER REUTILIZABLE",
    type: "Pecho, torso y cadera",
    description: "Funda reutilizable de polímero AKTON® de ½\" tipo wrap-around para rollos de tórax de espuma básicos. Mejora la protección del rollo estándar. Ajustable y asegurada con velcro. Ref. 40600. || **Dimensiones: 45.72 × 45.72 × 1.27 cm**.",
    price: 1,
    image: "/images/mobiliario/ACTION/CHEST ROLLS/COVER.png"
  },

  // ==============================================
  // AXILLARY ROLL COVER (reutilizable)
  // ==============================================
  {
    id: "action-axillary-roll-cover",
    name: "AXILLARY ROLL COVER REUTILIZABLE 40601",
    type: "Pecho, torso y cadera",
    description: "Funda reutilizable de polímero AKTON® de ½\" tipo wrap-around diseñada para mejorar rollos de posicionamiento axilares de espuma básicos. Ajustable y asegurada con velcro. || **Dimensiones: 43.18 × 30.48 × 1.27 cm**.",
    price: 1,
    image: "/images/mobiliario/ACTION/ROLL COVER/COVER.png"
  },

  // ==============================================
  // CHEST POSITIONING SET
  // ==============================================
  {
    id: "action-chest-positioning-set",
    name: "CHEST POSITIONING SET",
    type: "Pecho, torso y cadera",
    description: "Posicionadores con diseño contorneado para adaptarse uniformemente al área de hombro a tórax del paciente, con bordes moldeados para la axila. Proporcionan posicionamiento del tronco superior aliviando la presión en el área torácica. Se venden por unidad (izquierdo o derecho). Polímero AKTON® viscoelástico. || **Dimensiones: 71.12 × 58.42 × 20.32 × 7.62 × 6.35 cm**.",
    image: "/images/mobiliario/ACTION/CHEST POSITIONING SET/CARD.png",

    attributeOrder: ["lado"],

    attributes: [
      {
        id: "lado",
        label: "Lado",
        type: "single",
        values: [
          { id: "left", label: "Izquierdo" },
          { id: "right", label: "Derecho" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40625",
        attrs: { lado: "left" },
        name: "MODELO 40625",
        description: "Posicionadores con diseño contorneado para adaptarse uniformemente al área de hombro a tórax del paciente, con bordes moldeados para la axila. Proporcionan posicionamiento del tronco superior aliviando la presión en el área torácica. Lado izquierdo. || **Dimensiones: 71.12 x 58.42 x 20.32 x 7.62 x 6.35 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/CHEST POSITIONING SET/LEFT.png",
          "/images/mobiliario/ACTION/CHEST POSITIONING SET/2.png",
        ]
      },
      {
        sku: "action-40626",
        attrs: { lado: "right" },
        name: "MODELO 40626",
        description: "Posicionadores con diseño contorneado para adaptarse uniformemente al área de hombro a tórax del paciente, con bordes moldeados para la axila. Proporcionan posicionamiento del tronco superior aliviando la presión en el área torácica. Lado derecho. || **Dimensiones: 71.12 x 58.42 x 20.32 x 7.62 x 6.35 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/CHEST POSITIONING SET/RIGHT.png",
          "/images/mobiliario/ACTION/CHEST POSITIONING SET/2.png",
        ]
      }
    ]
  },

  // ==============================================
  // GRADUATED THORACIC POSITIONER
  // ==============================================
  {
    id: "action-graduated-thoracic-positioner",
    name: "GRADUATED THORACIC POSITIONER",
    type: "Pecho, torso y cadera",
    description: "Posicionador torácico con perfil graduado (inclinado) que favorece la extensión completa del tórax. Diseñado para procedimientos cardiovasculares o torácicos que requieren hiperextensión completa del tórax. Polímero AKTON® viscoelástico. 40604 || **Dimensiones: 35.56 × 22.86 × 5.08–3.81 cm**.",
    price: 1,
    images: ["/images/mobiliario/ACTION/GRADUATED POSITIONER/1.png",
      "/images/mobiliario/ACTION/GRADUATED POSITIONER/2.png",
    ]
  },

  // ==============================================
  // PEG BOARD PAD SET
  // ==============================================
  {
    id: "action-peg-board-pad-set",
    name: "PEG BOARD PAD SET – ACTION",
    type: "Pecho, torso y cadera",
    description: "Set complementario para la mayoría de sistemas estándar de posicionamiento con peg board. Diseñado para proteger la piel y tejidos blandos del paciente de fuerzas de presión y cizallamiento en posición lateral de alta presión. El overlay medium (40100) se coloca sobre el peg board bajo el paciente, mientras que las almohadillas para postes se envuelven alrededor de los pernos y se aseguran con velcro. Disponible como set completo o piezas individuales. El peg board y los postes NO están incluidos.",
    image: "/images/mobiliario/ACTION/PEG BOARD SET/CARD.png",

    attributeOrder: ["opcion"],

    attributes: [
      {
        id: "opcion",
        label: "Opción",
        type: "single",
        values: [
          { id: "set", label: "Set Completo – 40719" },
          { id: "post-short", label: "Short Post Pad – 40719A" },
          { id: "post-tall", label: "Tall Post Pad – 40719B" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40719",
        attrs: { opcion: "set" },
        name: "Set Completo MODELO 40719",
        description: "Set complementario para la mayoría de sistemas estándar de posicionamiento con peg board. Diseñado para **proteger** la **piel** y **tejidos blandos** del paciente de **fuerzas de presión y cizallamiento** en **posición lateral de alta presión**. El overlay medium se coloca sobre el peg board bajo el paciente, mientras que las almohadillas para postes se envuelven alrededor de los pernos y se aseguran con velcro. **Incluye**: 1 × **Medium Overlay 40100**: 116.8 cm × 50.8 cm × 1.3 cm. 4 × **Short Post Pad 40719A**: 14 cm altura. 4 × **Tall Post Pad 40719B**: 21.6 cm altura.",
        price: 1,
        image: "/images/mobiliario/ACTION/PEG BOARD SET/CARD.png"
      },
      {
        sku: "action-40719A",
        attrs: { opcion: "post-short" },
        name: "SHORT POST PAD MODELO 40719A",
        description: "Dimensiones: 13.97 cm. **Unidad individual**.",
        price: 1,
        image: "/images/mobiliario/ACTION/PEG BOARD SET/SHORT.png"
      },
      {
        sku: "action-40719B",
        attrs: { opcion: "post-tall" },
        name: "TALL POST PAD MODELO 40719B",
        description: "Dimensiones: 20.32 cm. **Unidad individual**.",
        price: 1,
        image: "/images/mobiliario/ACTION/PEG BOARD SET/TALL.png"
      }
    ]
  },

  // ==============================================
  // PATIENT AXILLARY POSITIONER
  // ==============================================
  {
    id: "action-patient-axillary-positioner",
    name: "PATIENT AXILLARY POSITIONER",
    type: "Pecho, torso y cadera",
    description: "Posicionador axilar recomendado por AORN en reemplazo de sacos de arena o bolsas IV. Versátil para múltiples procedimientos. Protege al paciente en posición lateral, acomoda hombro y brazo superior, proporciona alivio de presión y protección nerviosa. Base de espuma ligera con overlay de polímero AKTON®.",
    image: "/images/mobiliario/ACTION/AXILLARY POSITIONER/CARD.png",

    attributeOrder: ["tamano"],

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "small", label: "Small" },
          { id: "long", label: "Long" },
          { id: "extra-long", label: "Extra Long" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40602",
        attrs: { tamano: "small" },
        name: "MODELO 40602",
        description: "Posicionador axilar recomendado por AORN en reemplazo de sacos de arena o bolsas IV. Versátil para múltiples procedimientos. Protege al paciente en posición lateral, acomoda hombro y brazo superior, proporciona alivio de presión y protección nerviosa. Base de espuma ligera con overlay de polímero AKTON®.|| **Dimensiones: 25.4 × 10.8 × 4.76 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/AXILLARY POSITIONER/CARD.png",
          "/images/mobiliario/ACTION/AXILLARY POSITIONER/2.png",
        ]
      },
      {
        sku: "action-40605",
        attrs: { tamano: "long" },
        name: "MODELO 40605",
        description: "Posicionador axilar recomendado por AORN en reemplazo de sacos de arena o bolsas IV. Versátil para múltiples procedimientos. Protege al paciente en posición lateral, acomoda hombro y brazo superior, proporciona alivio de presión y protección nerviosa. Base de espuma ligera con overlay de polímero AKTON®.|| **Dimensiones: 35.56 × 10.16 × 5.08 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/AXILLARY POSITIONER/CARD.png",
          "/images/mobiliario/ACTION/AXILLARY POSITIONER/2.png",
        ]
      },
      {
        sku: "action-40615",
        attrs: { tamano: "extra-long" },
        name: "MODELO 40615",
        description: "Posicionador axilar recomendado por AORN en reemplazo de sacos de arena o bolsas IV. Versátil para múltiples procedimientos. Protege al paciente en posición lateral, acomoda hombro y brazo superior, proporciona alivio de presión y protección nerviosa. Base de espuma ligera con overlay de polímero AKTON®.|| **Dimensiones: 45.72 × 10.16 × 5.08 cm**.",
        price: 1,
        images: ["/images/mobiliario/ACTION/AXILLARY POSITIONER/CARD.png",
          "/images/mobiliario/ACTION/AXILLARY POSITIONER/2.png",
        ]
      }
    ]
  },

  // ==============================================
  // LATERAL POSITIONER
  // ==============================================
  {
    id: "action-lateral-positioner",
    name: "LATERAL POSITIONER – ACTION",
    type: "Pecho, torso y cadera",
    description: "Posicionador lateral diseñado para proteger al paciente en posición lateral. Acomoda tanto el hombro como el brazo superior. Proporciona alivio de presión y protección nerviosa. Incluye base de espuma ligera con overlay de polímero AKTON® viscoelástico. Ref. 40610.",
    price: 1,
    image: "/images/mobiliario/ACTION/LATERAL POSITIONER/CARD.png",
    images: ["/images/mobiliario/ACTION/LATERAL POSITIONER/1.png",
      "/images/mobiliario/ACTION/LATERAL POSITIONER/2.png"
    ]

  },

  // ==============================================
  // SECCION 5 - LEG / LITHOTOMY
  // ==============================================

  // ==============================================
  // HEEL SUPPORT
  // ==============================================
  {
    id: "action-heel-support",
    name: "HEEL SUPPORT",
    type: "Pierna, tobillo y pie",
    description: "Soporte de talón reutilizable de polímero AKTON® diseñado para elevar los talones sobre la superficie de la mesa en posición supina. Incluye muesca en V para acomodar el tendón de Aquiles y copa moldeada para sostener y posicionar el pie en posición neutra. Ref. 40502. Dimensiones: 6\" L × 3¼\" W × 1¾\" H (15 × 8.3 × 4.5 cm).",
    price: 1,
    image: "/images/mobiliario/ACTION/HEEL SUPP/CARD.png",
    images: ["/images/mobiliario/ACTION/HEEL SUPP/1.png", "/images/mobiliario/ACTION/HEEL SUPP/2.png"]
  },




  // ==============================================
  // DOME-SHAPED POSITIONERS
  // ==============================================
  {
    id: "action-dome-shaped-positioner",
    name: "DOME-SHAPED POSITIONER",
    type: "Pierna, tobillo y pie",
    description: "Posicionador semicircular con base plana para protección de presión bajo las rodillas en posición supina. Protege al paciente contra el pie caído (foot drop) en posición prona. Puede utilizarse bajo el metatarso, bajo el pie contra el tablero, o en posición semi-Fowler.",
    image: "/images/mobiliario/ACTION/DOME POSITIONERS/CARD.png",


    attributeOrder: ["tamano"],

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "standard", label: "Standard" },
          { id: "large", label: "Large" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40603",
        attrs: { tamano: "standard" },
        name: "MODELO 40603",
        description: "Posicionador semicircular con base plana para protección de presión bajo las rodillas en posición supina. Protege al paciente contra el pie caído (foot drop) en posición prona. Puede utilizarse bajo el metatarso, bajo el pie contra el tablero, o en posición semi-Fowler. || **Dimensiones**: 36 × 15 × 7.6 cm.",
        price: 1,
        images: ["/images/mobiliario/ACTION/DOME POSITIONERS/1.png", "/images/mobiliario/ACTION/DOME POSITIONERS/2.png"],
      },
      {
        sku: "action-40603L",
        attrs: { tamano: "large" },
        name: "MODELO 40603L",
        description: "Posicionador semicircular con base plana para protección de presión bajo las rodillas en posición supina. Protege al paciente contra el pie caído (foot drop) en posición prona. Puede utilizarse bajo el metatarso, bajo el pie contra el tablero, o en posición semi-Fowler. || **Dimensiones**: 250.8 × 15 × 7.6 cm.",
        price: 1,
        images: ["/images/mobiliario/ACTION/DOME POSITIONERS/1.png", "/images/mobiliario/ACTION/DOME POSITIONERS/2.png"],
      }
    ]
  },

  // ==============================================
  // KNEE CRUTCH PADS
  // ==============================================
  {
    id: "action-knee-crutch-pad",
    name: "KNEE CRUTCH PAD – ACTION",
    type: "Pierna, tobillo y pie",
    description: "Almohadillas para muletas de rodilla que reducen presión y cizallamiento en el espacio poplíteo. Tres tamaños y espesores: Small (más delgada, soporte ligero para urología, OB/GIN y procedimientos pediátricos), Medium (85% más grande que la Small, soporte intermedio ¼\" para urología y OB/GIN), Large (peso pesado ½\", 22 × 20\", para muletas de rodilla grandes). Polímero AKTON® viscoelástico.",
    image: "/images/mobiliario/ACTION/KNEE CRUTCH/CARD.png",

    attributeOrder: ["tamano"],

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "small", label: "Small" },
          { id: "medium", label: "Medium" },
          { id: "large", label: "Large" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40402",
        attrs: { tamano: "small" },
        name: "MODELO 40402",
        description: "Almohadillas para muletas de rodilla que reducen presión y cizallamiento en el espacio poplíteo, de Small (más delgada, soporte ligero para urología, OB/GIN y procedimientos pediátricos). || **Dimensiones**: 27.9 × 22.9 × 0.95 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/KNEE CRUTCH/1.png"
      },
      {
        sku: "action-40403",
        attrs: { tamano: "medium" },
        name: "MODELO 40403",
        description: "Almohadillas para muletas de rodilla que reducen presión y cizallamiento en el espacio poplíteo, de Medium (85% más grande que la Small, soporte intermedio para urología y OB/GIN). || **Dimensiones**: 43 × 27.9 × 0.6 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/KNEE CRUTCH/1.png"
      },
      {
        sku: "action-40404",
        attrs: { tamano: "large" },
        name: "MODELO 40404",
        description: "Almohadillas para muletas de rodilla que reducen presión y cizallamiento en el espacio poplíteo, de Large (peso pesado para muletas de rodilla grandes). || **Dimensiones**: 56 × 50 × 1.2 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/KNEE CRUTCH/1.png"
      }
    ]
  },



  // ==============================================
  // SECCION 6 - OVERLAYS / SURFACES
  // ==============================================

  // ==============================================
  // OVERLAYS – ACTION O.R.
  // ==============================================
  {
    id: "action-overlay-or",
    name: "OVERLAY DE QUIRÓFANO",
    type: "Mesa quirurgica",
    description: "Almohadilla de polímero AKTON® versátil para una amplia gama de procedimientos. Sus cualidades reductoras de cizallamiento combinadas con la capacidad de distribuir calor y presión la convierten en una herramienta valiosa de manejo de presión. Ideal para procedimientos prolongados o pacientes con piel frágil. Portátil, intercambiable entre quirófanos. Disponible en todos los tamaños estándar de mesa quirúrgica en grosor de ½\". Radiolúcida, libre de látex, reutilizable.",
    image: "/images/mobiliario/ACTION/OVERLAY/CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "small", label: "Small" },
          { id: "medium", label: "Medium" },
          { id: "medium-large", label: "Medium Large" },
          { id: "full-length", label: "Full Length" },
          { id: "perineal", label: "Perineal Cutout" },
          { id: "3piece", label: "3-Piece Set" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40105",
        attrs: { modelo: "small" },
        name: "MODELO 40105",
        description: "Almohadilla de polímero AKTON® versátil para una amplia gama de procedimientos. Sus cualidades reductoras de cizallamiento combinadas con la capacidad de distribuir calor y presión la convierten en una herramienta valiosa de manejo de presión. Ideal para procedimientos prolongados o pacientes con piel frágil. Portátil, intercambiable entre quirófanos. || **Dimensiones:** 50.8 × 50.8 × 1.3 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/OVERLAY/40105.png"
      },
      {
        sku: "action-40100",
        attrs: { modelo: "medium" },
        name: "MODELO 40100",
        description: "Almohadilla de polímero AKTON® versátil para una amplia gama de procedimientos. Sus cualidades reductoras de cizallamiento combinadas con la capacidad de distribuir calor y presión la convierten en una herramienta valiosa de manejo de presión. Ideal para procedimientos prolongados o pacientes con piel frágil. Portátil, intercambiable entre quirófanos. || **Dimensiones:** 117 × 50 × 1.3 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/OVERLAY/40100.png"
      },
      {
        sku: "action-40109",
        attrs: { modelo: "medium-large" },
        name: "MODELO 40109",
        description: "Almohadilla de polímero AKTON® versátil para una amplia gama de procedimientos. Sus cualidades reductoras de cizallamiento combinadas con la capacidad de distribuir calor y presión la convierten en una herramienta valiosa de manejo de presión. Ideal para procedimientos prolongados o pacientes con piel frágil. Portátil, intercambiable entre quirófanos. || **Dimensiones:** 160 × 50 × 1.3 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/OVERLAY/40109.png"
      },
      {
        sku: "action-40101",
        attrs: { modelo: "full-length" },
        name: "MODELO 40101",
        description: "Almohadilla de polímero AKTON® versátil para una amplia gama de procedimientos. Sus cualidades reductoras de cizallamiento combinadas con la capacidad de distribuir calor y presión la convierten en una herramienta valiosa de manejo de presión. Ideal para procedimientos prolongados o pacientes con piel frágil. Portátil, intercambiable entre quirófanos. || **Dimensiones:** 183 × 50 × 1.3 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/OVERLAY/40101.png"
      },
      {
        sku: "action-40103",
        attrs: { modelo: "perineal" },
        name: "MODELO 40103",
        description: "Almohadilla de polímero AKTON® versátil para una amplia gama de procedimientos. Sus cualidades reductoras de cizallamiento combinadas con la capacidad de distribuir calor y presión la convierten en una herramienta valiosa de manejo de presión. Ideal para procedimientos prolongados o pacientes con piel frágil. Portátil, intercambiable entre quirófanos. || **Dimensiones:** 117 × 50.8 × 1.3 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/OVERLAY/40103.png"
      },
      {
        sku: "action-40104",
        attrs: { modelo: "3piece" },
        name: "MODELO 40104",
        description: "Almohadilla de polímero AKTON® versátil para una amplia gama de procedimientos. Sus cualidades reductoras de cizallamiento combinadas con la capacidad de distribuir calor y presión la convierten en una herramienta valiosa de manejo de presión. Ideal para procedimientos prolongados o pacientes con piel frágil. Portátil, intercambiable entre quirófanos. || **Set de 3 piezas:** Cabeza 40104A (22.9 cm × 50.8 cm × 1.3 cm), Torso con corte perineal 40104B (100.3 cm × 50.8 cm × 1.3 cm), Pie con corte perineal 40104C (50.8 cm × 50.8 cm × 1.3 cm). Cubre la longitud completa de la mesa en secciones.",
        price: 1,
        image: "/images/mobiliario/ACTION/OVERLAY/40104.png"
      }
    ]
  },

  // ==============================================
  // DISPOSABLE OVERLAY COVERS
  // ==============================================
  {
    id: "action-disposable-overlay-cover",
    name: "FUNDA DESECHABLE PARA OVERLAY",
    type: "Desechables",
    description: "Fundas desechables no estériles resistentes a fluidos fabricadas en film blando y flexible. Diseñadas para reducir la exposición a fluidos y prolongar la vida útil del overlay. Disponibles en dos estilos: estilo \"pillowcase\" (cierra en un extremo, cubre totalmente el overlay) y estilo \"fitted sheet\" (cubre la superficie superior con bolsillos en los extremos y drape de 4\" a los costados). Caja de 25 unidades.",
    image: "/images/mobiliario/ACTION/DISPOSABLE OVERLAY/40800.png",

    attributeOrder: ["estilo", "modelo"],

    attributes: [
      {
        id: "estilo",
        label: "Estilo",
        type: "single",
        values: [
          { id: "fitted", label: "Fitted Sheet" },
          { id: "pillowcase", label: "Pillowcase" }
        ]
      },
      {
        id: "modelo",
        label: "Para overlay",
        type: "single",
        dependsOn: "estilo",
        values: [
          { id: "40100-fs", label: "Medium (40100)", parentValue: "fitted" },
          { id: "40101-fs", label: "Full Length (40101)", parentValue: "fitted" },
          { id: "40103-fs", label: "Perineal Cutout (40103)", parentValue: "fitted" },
          { id: "40105-fs", label: "Small (40105)", parentValue: "fitted" },
          { id: "40100-pc", label: "Medium / Full Length (40100 & 40101)", parentValue: "pillowcase" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40800",
        attrs: { estilo: "fitted", modelo: "40100-fs" },
        name: "MODELO 40800",
        description: "Para overlay Medium 40100. Caja de 25 unidades.",
        price: 1,
        image: "/images/mobiliario/ACTION/DISPOSABLE OVERLAY/40801.png"
      },
      {
        sku: "action-40801",
        attrs: { estilo: "fitted", modelo: "40101-fs" },
        name: "MODELO 40801",
        description: "Para overlay Full Length 40101. Caja de 25 unidades.",
        price: 1,
        image: "/images/mobiliario/ACTION/DISPOSABLE OVERLAY/40801.png"
      },
      {
        sku: "action-40803",
        attrs: { estilo: "fitted", modelo: "40103-fs" },
        name: "MODELO 40803",
        description: "Para overlay Perineal Cutout 40103. Caja de 25 unidades.",
        price: 1,
        image: "/images/mobiliario/ACTION/DISPOSABLE OVERLAY/40801.png"
      },
      {
        sku: "action-40805",
        attrs: { estilo: "fitted", modelo: "40105-fs" },
        name: "MODELO 40805",
        description: "Para overlay Small 40105. Caja de 25 unidades.",
        price: 1,
        image: "/images/mobiliario/ACTION/DISPOSABLE OVERLAY/40801.png"
      },
      {
        sku: "action-40102",
        attrs: { estilo: "pillowcase", modelo: "40100-pc" },
        name: "MODELO 40102",
        description: "Para overlays Medium 40100 y Full Length 40101. Caja de 25 unidades.",
        price: 1,
        images: [
          "/images/mobiliario/ACTION/DISPOSABLE OVERLAY/40102_1.png",
          "/images/mobiliario/ACTION/DISPOSABLE OVERLAY/40102_2.png"
        ]
      }
    ]
  },

  // ==============================================
  // VAC-PAC® COVERS
  // ==============================================
  {
    id: "action-vac-pac-cover",
    name: "VAC-PAC® COVER",
    type: "Pecho, torso y cadera",
    description: "Forro interior para posicionador Vac-Pac® (bean bag) diseñado para reducir la presión y el cizallamiento del paciente en posición lateral. Aplicable para procedimientos ortopédicos, torácicos o urológicos que requieren posición lateral estable. Polímero AKTON® viscoelástico. Vac-Pac® es marca registrada de Natus Medical Incorporated.",
    image: "/images/mobiliario/ACTION/VAC PAC/CARD.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "medium-30", label: "Medium Size 30" },
          { id: "large-31", label: "Large Size 31" },
          { id: "tshape-35", label: "T-Shape Size 35" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40612",
        attrs: { modelo: "medium-30" },
        name: "MODELO 40612",
        description: "Forro interior para posicionador Vac-Pac® (bean bag) diseñado para reducir la presión y el cizallamiento del paciente en posición lateral. Aplicable para procedimientos ortopédicos, torácicos o urológicos que requieren posición lateral estable. Polímero AKTON® viscoelástico. Vac-Pac® es marca registrada de Natus Medical Incorporated. || **Dimensiones:** 93.98 × 71.12 × 1.27 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/VAC PAC/medium.png"
      },
      {
        sku: "action-40612-31",
        attrs: { modelo: "large-31" },
        name: "MODELO 40612-31",
        description: "Forro interior para posicionador Vac-Pac® (bean bag) diseñado para reducir la presión y el cizallamiento del paciente en posición lateral. Aplicable para procedimientos ortopédicos, torácicos o urológicos que requieren posición lateral estable. Polímero AKTON® viscoelástico. Vac-Pac® es marca registrada de Natus Medical Incorporated. || **Dimensiones:** 90.17 × 98.43 × 1.27 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/VAC PAC/large.png"
      },
      {
        sku: "action-40613",
        attrs: { modelo: "tshape-35" },
        name: "MODELO 40613",
        description: "Forro interior para posicionador Vac-Pac® (bean bag) diseñado para reducir la presión y el cizallamiento del paciente en posición lateral. Aplicable para procedimientos ortopédicos, torácicos o urológicos que requieren posición lateral estable. Polímero AKTON® viscoelástico. Vac-Pac® es marca registrada de Natus Medical Incorporated. || **Dimensiones:** 38.1 × 86.36 × 1.27 cm. Parte superior: 22.86 × 58.42 × 1.27 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/VAC PAC/tshape.png"
      }
    ]
  },

  // ==============================================
  // POSITIONING STRAP
  // ==============================================
  {
    id: "action-positioning-strap",
    name: "POSITIONING STRAP – ACTION",
    type: "Pecho, torso y cadera",
    description: "Correa de posicionamiento con costuras soldadas y film resistente a fluidos combinado con superficie suave hacia el paciente. Radiolúcida y segura para RMN. Fijación mediante velcro a mesas estándar. No diseñada para restringir al paciente. Polímero AKTON®.",
    image: "/images/mobiliario/ACTION/STRAPS/CARD.png",

    attributeOrder: ["tamano"],

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "standard", label: "Standard" },
          { id: "large", label: "Large" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40713",
        attrs: { tamano: "standard" },
        name: "MODELO 40713",
        description: "Correa de posicionamiento con costuras soldadas y film resistente a fluidos combinado con superficie suave hacia el paciente. Radiolúcida y segura para RMN. Fijación mediante velcro a mesas estándar. No diseñada para restringir al paciente. Polímero AKTON®. || **Dimensiones:** 144.78 × 10.16 × 0.64 cm. **Rango ajustable:** 71.12–109.22 cm.",
        price: 1,
        images: ["/images/mobiliario/ACTION/STRAPS/40713.png", "/images/mobiliario/ACTION/STRAPS/1.png"]

      },
      {
        sku: "action-40713L",
        attrs: { tamano: "large" },
        name: "MODELO 40713L",
        description: "Correa de posicionamiento con costuras soldadas y film resistente a fluidos combinado con superficie suave hacia el paciente. Radiolúcida y segura para RMN. Fijación mediante velcro a mesas estándar. No diseñada para restringir al paciente. Polímero AKTON®. || **Dimensiones:** 228.6 × 10.16 × 0.64 cm. **Rango ajustable:** 151.13–201.93 cm.",
        price: 1,
        images: ["/images/mobiliario/ACTION/STRAPS/40713L.png", "/images/mobiliario/ACTION/STRAPS/1.png"]
      }
    ]
  },

  // ==============================================
  // UNIVERSAL SPOT PROTECTORS
  // ==============================================
  {
    id: "action-universal-spot-protectors",
    name: "UNIVERSAL SPOT PROTECTORS – ACTION",
    type: "Cabeza, cuello y cara",
    description: "Serie de almohadillas redondas delgadas (¼\" de grosor) de polímero AKTON® diseñadas para proteger zonas de difícil acceso según las necesidades de cada paciente. Su forma circular mejora la redistribución de presión y el rendimiento ante el cizallamiento. Solución adaptativa para áreas específicas del cuerpo.",
    image: "/images/mobiliario/ACTION/SPOT PROTEC/CARD.png",

    attributeOrder: ["tamano"],

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "mini", label: "Mini" },
          { id: "small", label: "Small" },
          { id: "large", label: "Large" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-40405",
        attrs: { tamano: "mini" },
        name: "MODELO 40405",
        description: "Serie de almohadillas redondas delgadas ¼ de grosor de polímero AKTON® diseñadas para proteger zonas de difícil acceso según las necesidades de cada paciente. Su forma circular mejora la redistribución de presión y el rendimiento ante el cizallamiento. Solución adaptativa para áreas específicas del cuerpo. || **Diámetro:** 4.1 cm D × 0.6 cm. Paquete de 12 unidades.",
        price: 1,
        images: ["/images/mobiliario/ACTION/SPOT PROTEC/1.png", "/images/mobiliario/ACTION/SPOT PROTEC/2.png", "/images/mobiliario/ACTION/SPOT PROTEC/mini.png"]

      },
      {
        sku: "action-40406",
        attrs: { tamano: "small" },
        name: "MODELO 40406",
        description: "Serie de almohadillas redondas delgadas ¼ de grosor de polímero AKTON® diseñadas para proteger zonas de difícil acceso según las necesidades de cada paciente. Su forma circular mejora la redistribución de presión y el rendimiento ante el cizallamiento. Solución adaptativa para áreas específicas del cuerpo. || **Diámetro:** 8.3 cm D × 0.6 cm. Paquete de 12 unidades.",
        price: 1,
        images: ["/images/mobiliario/ACTION/SPOT PROTEC/1.png", "/images/mobiliario/ACTION/SPOT PROTEC/2.png", "/images/mobiliario/ACTION/SPOT PROTEC/small.png"]
      },
      {
        sku: "action-40407",
        attrs: { tamano: "large" },
        name: "MODELO 40407",
        description: "Serie de almohadillas redondas delgadas ¼ de grosor de polímero AKTON® diseñadas para proteger zonas de difícil acceso según las necesidades de cada paciente. Su forma circular mejora la redistribución de presión y el rendimiento ante el cizallamiento. Solución adaptativa para áreas específicas del cuerpo. || **Diámetro:** 14 cm D × 0.6 cm. Paquete de 6 unidades.",
        price: 1,
        images: ["/images/mobiliario/ACTION/SPOT PROTEC/1.png", "/images/mobiliario/ACTION/SPOT PROTEC/2.png", "/images/mobiliario/ACTION/SPOT PROTEC/large.png"]
      }
    ]
  },

  // ==============================================
  // SECCION 7 - HIP / ORTHOPEDIC
  // ==============================================

  // ==============================================
  // ORTHOPEDIC HIP POSITIONER
  // ==============================================
  {
    id: "action-orthopedic-hip-positioner",
    name: "ORTHOPEDIC HIP POSITIONER",
    type: "Pecho, torso y cadera",
    description: "Posicionador de cadera diseñado para complementar el abordaje supino anterior en reemplazo total de cadera (THR). Desarrollado para proporcionar acceso quirúrgico consistente y óptimo con estabilidad del paciente, protegiendo la integridad cutánea. Polímero AKTON® viscoelástico. Ref. 41740. Dimensiones: 8½\" L × 16\" W × 2.63\" H (21.59 × 40.64 × 6.68 cm).",
    price: 1,
    images: ["/images/mobiliario/ACTION/HIP POSITIONER/1.png", "/images/mobiliario/ACTION/HIP POSITIONER/2.png"]
  },


  // ==============================================
  // SECCION 8 - FRAMES / SYSTEMS
  // ==============================================

  // ==============================================
  // MANTENIMIENTO
  // ==============================================

  // ==============================================
  // RESURFACING KITS
  // ==============================================
  {
    id: "action-resurfacing-kit",
    name: "RESURFACING KIT – ACTION AKTON®",
    type: "Mantenimiento",
    description: "Kit para reparación rápida y sencilla de cortes o abrasiones menores en cualquier superficie de polímero AKTON®. Permite extender la vida útil de los productos Action. Para información detallada consultar la Guía de Cuidado y Uso (IFU) en www.actionproducts.com.",
    image: "/images/mobiliario/ACTION/RESURFACING/1.png",

    attributeOrder: ["tamano"],

    attributes: [
      {
        id: "tamano",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "small", label: "Pequeño" },
          { id: "large", label: "Grande" }
        ]
      }
    ],

    variants: [
      {
        sku: "action-KIT002",
        attrs: { tamano: "small" },
        name: "MODELO KIT002",
        description: "Kit para reparación rápida y sencilla de cortes o abrasiones menores en cualquier superficie de polímero AKTON®. Permite extender la vida útil de los productos Action. || **Dimensiones:** 10 × 10 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/RESURFACING/1.png"
      },
      {
        sku: "action-KIT003",
        attrs: { tamano: "large" },
        name: "MODELO KIT003",
        description: "Kit para reparación rápida y sencilla de cortes o abrasiones menores en cualquier superficie de polímero AKTON®. Permite extender la vida útil de los productos Action. || **Dimensiones:** 91.4 × 10 cm.",
        price: 1,
        image: "/images/mobiliario/ACTION/RESURFACING/1.png"
      }
    ]
  },
];

