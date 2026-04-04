export const diagnosticoYMedicionProducts = [

  {
    id: "balanzas-pediatricas",
    name: "BALANZAS PEDIÁTRICAS",
    type: "Balanzas",
    description: "Balanzas pediátricas digitales y mecánicas para el control de peso en neonatos, lactantes y niños pequeños. Disponibles en seis modelos de distintas marcas y tecnologías: SECA 334 (bandeja curva plegable para campo), SECA 354 (bandeja transparente extra-ancha para consultorio), SECA 374 (alta precisión 5 g para neonatos), SECA 725 (mecánica sin electricidad), Rice Lake RL-DBS (digital con cinta métrica integrada) y Rice Lake RL-MIS (mecánica robusta con regla de 58 cm). Todos los modelos SECA son compatibles con accesorios originales de la marca.",
    image: "/images/diagnostico/CARDS/PEDIATRICAS.png",

    priceRange: {
      min: 750,
      max: 4700
    },

    attributeOrder: ["modelo", "accesorios"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "seca-334", label: "SECA 334" },
          { id: "seca-354", label: "SECA 354" },
          { id: "seca-374", label: "SECA 374" },
          { id: "seca-725", label: "SECA 725" },
          { id: "rice-lake-rl-dbs", label: "RICE LAKE RL-DBS" },
          { id: "rice-lake-rl-mis", label: "RICE LAKE RL-MIS" }
        ]
      },
      {
        id: "accesorios",
        label: "Accesorios",
        type: "multi",
        values: [
          {
            id: "mochila-428",
            label: "Mochila SECA 428",
            name: "Mochila SECA 428",
            priceDelta: 400,
            compatibleWith: ["seca-334"],
            image:
              "/images/diagnostico/ACCESORIOS/seca428-1.png"
          },
          {
            id: "adaptador-447",
            label: "Adaptador SECA 447",
            name: "Adaptador SECA 447",
            priceDelta: 400,
            compatibleWith: ["seca-334"],
            image: "/images/diagnostico/ACCESORIOS/seca447.png"
          },
          {
            id: "adaptador-400",
            label: "Adaptador SECA 400",
            name: "Adaptador SECA 400",
            priceDelta: 400,
            compatibleWith: ["seca-334", "seca-374"],
            image: "/images/diagnostico/ACCESORIOS/seca400.png"
          },
          {
            id: "tope-419",
            label: "Tope SECA 419",
            name: "Tope SECA 419",
            priceDelta: 400,
            compatibleWith: ["seca-334"],
            image: "/images/diagnostico/ACCESORIOS/seca419.png"
          },
          {
            id: "tallimetro-232",
            label: "Tallímetro SECA 232",
            name: "Tallímetro SECA 232",
            priceDelta: 500,
            compatibleWith: ["seca-334"],
            image:

              "/images/diagnostico/ACCESORIOS/seca232-2.png"

          },
          {
            id: "mochila-413",
            label: "Mochila SECA 413",
            name: "Mochila SECA 413",
            priceDelta: 400,
            compatibleWith: ["seca-354"],
            image: "/images/diagnostico/ACCESORIOS/seca413-3.png"

          },
          {
            id: "tallimetro-233",
            label: "Infantómetro SECA 233",
            name: "Infantómetro SECA 233",
            priceDelta: 400,
            compatibleWith: ["seca-374"],
            image: "/images/diagnostico/ACCESORIOS/seca233-2.png"

          },
          {
            id: "tope-418",
            label: "Topes SECA 418",
            name: "Topes SECA 418",
            priceDelta: 400,
            compatibleWith: ["seca-374"],
            image:
              "/images/diagnostico/ACCESORIOS/seca418-2.png"

          }
        ]
      }
    ],

    rules: {
      incompatible: [
        ["adaptador-447", "adaptador-400"],
        ["tope-419", "tallimetro-232"],
        ["tallimetro-233", "tope-418"]
      ]
    },

    variants: [
      {
        sku: "SECA-334",
        attrs: { modelo: "seca-334" },
        name: "SECA 334",
        description: "Balanza pediátrica digital con bandeja curva plegable que permite pesar al bebé en posición acostada o sentada. Función Tara/Hold para pesaje preciso incluso con bebés en movimiento. Compatible con tallímetro SECA 232, mochila de transporte SECA 428, tope cefálico SECA 419 y adaptadores de corriente SECA 400 y 447. Diseñada especialmente para trabajo de campo y visitas domiciliarias. || **Tipo:** Digital | **Capacidad:** 20 kg | **Precisión:** 10 g | **Bandeja:** Curva plegable.",
        price: 2400,
        image: "/images/diagnostico/BALANZAS PEDIATRICAS/seca334.png"
      },
      {
        sku: "SECA-354",
        attrs: { modelo: "seca-354" },
        name: "SECA 354",
        description: "Balanza pediátrica digital con bandeja transparente extra-ancha que facilita la supervisión visual del bebé durante el pesaje. Diseño ergonómico con bordes protectores elevados y apoyabrazos integrados para mayor seguridad. Compatible con mochila de transporte SECA 413 para trabajo de campo. Ideal para controles de crecimiento en consultorios pediátricos. || **Tipo:** Digital | **Capacidad:** 20 kg | **Precisión:** 10 g | **Bandeja:** Transparente extra-ancha.",
        price: 900,
        image: "/images/diagnostico/BALANZAS PEDIATRICAS/seca354-1.png"
      },
      {
        sku: "SECA-374",
        attrs: { modelo: "seca-374" },
        name: "SECA 374",
        description: "Balanza pediátrica digital de alta precisión diseñada para el control de peso en recién nacidos y lactantes. Bandeja ergonómica amplia que brinda seguridad durante el pesaje con funciones TARA y HOLD para mediciones exactas incluso con el bebé en movimiento. Pantalla LCD de fácil lectura y diseño compacto. Compatible con infantómetro SECA 233, topes SECA 418 y adaptador de corriente SECA 400 opcionales. || **Tipo:** Digital | **Capacidad:** 20 kg | **Graduación:** 5 g | **Dimensiones:** 552 × 156 × 332 mm.",
        price: 2900,
        image: "/images/diagnostico/BALANZAS PEDIATRICAS/seca374.png"
      },
      {
        sku: "SECA-725",
        attrs: { modelo: "seca-725" },
        name: "SECA 725",
        description: "Báscula pediátrica mecánica con pesas deslizantes de precisión suave y confiable para el control de peso en neonatos y bebés pequeños. Bandeja de curvatura ligera para soporte seguro y cómodo. Función de ajuste a cero para descontar mantas o pañales. Acabado resistente a golpes y rayaduras de fácil limpieza. Operación completamente mecánica sin necesidad de energía eléctrica para mayor durabilidad y simplicidad. || **Tipo:** Mecánica | **Capacidad:** 16 kg | **Graduación:** 5 g | **Dimensiones:** 550 × 180 × 290 mm | **Peso neto:** 6,4 kg.",
        price: 4700,
        image: "/images/diagnostico/BALANZAS PEDIATRICAS/seca725-1.png"
      },
      {
        sku: "RL-DBS",
        attrs: { modelo: "rice-lake-rl-dbs" },
        name: "RICE LAKE RL-DBS",
        description: "Báscula digital pediátrica para pesajes precisos de recién nacidos y lactantes. Pantalla LCD amplia con visualización en unidades métricas o imperiales y función Recall para ver la última medición tras retirar al bebé. Plataforma con cinta métrica integrada para medir longitud hasta 57 cm. Operable con pilas AA o adaptador de corriente (ambos incluidos) con apagado automático para conservar la batería. || **Tipo:** Digital | **Capacidad:** 20 kg | **Longitud integrada:** Hasta 57 cm | **Alimentación:** Pilas AA o adaptador incluidos | **Funciones:** Recall, kg/lb.",
        price: 1440,
        image: "/images/diagnostico/BALANZAS PEDIATRICAS/RLDBS.png"
      },
      {
        sku: "RL-MIS",
        attrs: { modelo: "rice-lake-rl-mis" },
        name: "RICE LAKE RL-MIS",
        description: "Báscula mecánica robusta para pesaje manual de bebés e infantes en entornos clínicos que requieren una solución simple y duradera sin dependencia eléctrica. Cuerpo de acero esmaltado con bandeja de plástico ABS de fácil limpieza. Regla de medición integrada de 58 cm para referencia de longitud sin equipos adicionales. Lectura mediante sistema de balancín mecánico con pesas deslizantes. || **Tipo:** Mecánica | **Capacidad:** 62 kg | **Precisión:** 20 g | **Longitud integrada:** 58 cm | **Material:** Acero esmaltado y bandeja ABS.",
        price: 1200,
        image: "/images/diagnostico/BALANZAS PEDIATRICAS/RLMIS.png"
      }
    ]
  },
  {
    id: "balanzas-adulto",
    name: "BALANZAS ADULTO",
    type: "Balanzas",
    description: "Balanzas de columna para uso clínico en adultos, disponibles en modelos mecánicos y digitales con y sin tallímetro integrado. La gama cubre desde básculas mecánicas de hierro fundido (SECA 700) hasta plataformas digitales de alta precisión con conectividad USB y compensación de movimiento (Rice Lake 150-10-5). Incluye modelos de marcas SECA, Reybal, CMS, Rice Lake y Tscale para distintos presupuestos y niveles de uso clínico.",
    image: "/images/diagnostico/CARDS/ADULTO.png",

    priceRange: {
      min: 890,
      max: 3600
    },

    attributeOrder: ["modelo", "accesorios"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "seca-700", label: "SECA 700" },
          { id: "seca-703", label: "SECA 703" },
          { id: "seca-777", label: "SECA 777 C/TALLÍMETRO" },
          { id: "reybal-rbd300k", label: "REYBAL RBD300K" },
          { id: "cms-tcs200lp", label: "CMS TCS200LP" },
          { id: "rice-lake-150-10-5", label: "RICE LAKE 150-10-5" },
          { id: "tscale-m301", label: "TSCALE M301" }
        ]
      },
      {
        id: "accesorios",
        label: "Accesorios",
        type: "multi",
        values: [
          {
            id: "tallimetro-220",
            label: "Tallímetro SECA 220",
            name: "Tallímetro SECA 220",
            priceDelta: 400,
            compatibleWith: ["seca-700", "seca-703"],
            image: "/images/diagnostico/ACCESORIOS/TALLIMETRO220.png"
          },
          {
            id: "adaptador-401",
            label: "Adaptador SECA 401",
            name: "Adaptador SECA 401",
            priceDelta: 400,
            compatibleWith: ["seca-777"],
            image: "/images/diagnostico/ACCESORIOS/seca401.png"
          },
          {
            id: "oso-panda-459",
            label: "Oso Panda SECA 459",
            name: "Oso Panda SECA 459",
            priceDelta: 400,
            compatibleWith: ["seca-777"],
            image:
              "/images/diagnostico/ACCESORIOS/seca459-1.png"
          }
        ]
      }
    ],

    variants: [
      {
        sku: "SECA-700",
        attrs: { modelo: "seca-700" },
        name: "SECA 700",
        description: "Báscula mecánica de columna con barras de pesas deslizantes, plataforma amplia de bajo acceso y construcción robusta de hierro fundido con ruedas integradas para uso intensivo y transporte sencillo en entornos clínicos. Graduación fina y gran capacidad para pacientes de distintas complexiones. Compatible con tallímetro SECA 220 opcional para medir peso y talla en una sola estación. || **Tipo:** Mecánica | **Capacidad:** 220 kg | **División:** 50 g | **Dimensiones:** 520 × 1556 × 520 mm | **Peso neto:** 16,2 kg.",
        price: 890,
        image:
          "/images/diagnostico/BALANZAS ADULTO/seca700-1.png"


      },
      {
        sku: "SECA-703",
        attrs: { modelo: "seca-703" },
        name: "SECA 703",
        description: "Báscula digital de columna de alta capacidad ideal para hospitales y consultorios que requieren medición precisa de peso y cálculo de BMI en un solo equipo. Plataforma amplia y base robusta para pacientes con sobrepeso. Incorpora funciones TARE, HOLD, Auto-HOLD, madre/bebé y Pre-TARE, además de conmutación kg/lb y apagado automático. Compatible con tallímetro SECA 220 opcional. || **Tipo:** Digital | **Capacidad:** 300 kg | **Graduación:** 50 g (<150 kg) / 100 g (>150 kg) | **Dimensiones:** 360 × 930 × 520 mm.",
        price: 2160,
        image:
          "/images/diagnostico/BALANZAS ADULTO/seca703-1.png",


      },
      {
        sku: "SECA-777",
        attrs: { modelo: "seca-777" },
        name: "SECA 777 CON TALLÍMETRO",
        description: "Báscula digital de columna con tallímetro integrado para medir peso y estatura en una sola estación de trabajo. Incorpora funciones TARE, HOLD y cálculo de BMI, además de conexión USB para integración con sistemas clínicos. Ruedas posteriores para desplazamiento sencillo dentro del consultorio o centro médico. Compatible con adaptador de corriente SECA 401 e indicador infantil SECA 459 opcionales. || **Tipo:** Digital con tallímetro | **Capacidad:** 250 kg | **Graduación:** 100 g | **Rango de talla:** 10–230 cm | **Dimensiones:** 410 × 1356 × 576 mm.",
        price: 2400,
        image:
          "/images/diagnostico/BALANZAS ADULTO/seca777-1.png"


      },
      {
        sku: "REYBAL-RBD300K",
        attrs: { modelo: "reybal-rbd300k" },
        name: "REYBAL RBD300K",
        description: "Báscula digital de columna con tallímetro integrado para medir peso y estatura en centros de salud, escuelas, empresas e instalaciones deportivas. Plataforma de acero inoxidable con protector antideslizante y niveladores en la base para posición estable durante la medición. Pintura electrostática resistente al desgaste para uso frecuente. || **Tipo:** Digital con tallímetro | **Capacidad:** 300 kg | **Graduación:** 100 g | **Rango de altura:** 60–200 cm | **Material:** Acero inoxidable.",
        price: 1440,
        image: "/images/diagnostico/BALANZAS ADULTO/REYBAL.png"
      },
      {
        sku: "CMS-TCS200LP",
        attrs: { modelo: "cms-tcs200lp" },
        name: "CMS TCS200LP",
        description: "Báscula digital con tallímetro integrado para medir peso, estatura e índice de masa corporal (BMI) en una sola estación de evaluación. Pantalla LCD amplia retroiluminada de fácil lectura y plataforma resistente con superficie antideslizante. Microprocesador interno para respuestas rápidas y precisas en valoraciones corporales completas. Ideal para consultorios, clínicas, gimnasios y centros de salud. || **Tipo:** Digital con tallímetro | **Capacidad:** 200 kg | **Graduación:** 50 g | **Rango de altura:** 60–210 cm | **Plataforma:** 29,5 × 39,5 cm | **Funciones:** Peso, altura y BMI.",
        price: 1800,
        image: "/images/diagnostico/BALANZAS ADULTO/TCS200LP.png"
      },
      {
        sku: "RL-150-10-5",
        attrs: { modelo: "rice-lake-150-10-5" },
        name: "RICE LAKE 150-10-5",
        description: "Báscula digital con tallímetro integrado en la columna para evaluaciones completas de peso y estatura en una sola estación. Ruedas posteriores para traslado sencillo en consultorios y hospitales. Tecnología Motiontrap™ de compensación de movimiento para lecturas fiables con pacientes en movimiento. Operable con pilas AA o adaptador de corriente con integración de datos vía USB o comunicación serial compatible con registros electrónicos de salud. || **Tipo:** Digital con tallímetro | **Capacidad:** 250 kg | **Graduación:** 0,1 kg | **Rango de altura:** 70–208 cm | **Funciones:** BMI, retención, kg/lb, Motiontrap™.",
        price: 2400,
        image:
          "/images/diagnostico/BALANZAS ADULTO/RL150105-1.png"


      },
      {
        sku: "TSCALE-M301",
        attrs: { modelo: "tscale-m301" },
        name: "TSCALE M301",
        description: "Balanza digital de columna compacta y ergonómica diseñada para consultorios de espacio reducido. Pantalla LCD extragrande con iluminación posterior, función kilo/libra y memoria de último pesaje. Cuatro patas de nivelación ajustables y superficie de acero inoxidable de fácil limpieza. Ideal para clínicas de atención primaria y centros de diagnóstico. || **Tipo:** Digital | **Capacidad:** 200 kg | **Precisión:** 50 g | **Superficie:** Acero inoxidable.",
        price: 1680,
        image:
          "/images/diagnostico/BALANZAS ADULTO/TSCALE-1.png"


      }
    ]
  },
  {
    id: "balanzas-de-plataforma",
    name: "BALANZAS DE PLATAFORMA",
    type: "Balanzas",
    description: "Básculas de plataforma para uso personal, clínico y de laboratorio. Disponibles en cinco modelos según el nivel de uso y las funcionalidades requeridas: SECA 803 (vidrio templado, diseño minimalista, blanco y negro), SECA 813 (plataforma extragrande de alta capacidad), Omron HBF-514C (monitor de composición corporal con BIA), Beurer PS160 (ultradelgada premium Step-on) y Gramera Genérica 10 kg (precisión para nutrición y laboratorio).",
    image: "/images/diagnostico/CARDS/PLATAFORMA.png",

    priceRange: {
      min: 95,
      max: 530
    },

    attributeOrder: ["modelo", "color"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "seca-803", label: "SECA 803" },
          { id: "seca-813", label: "SECA 813" },
          { id: "omron-hbf-514c", label: "OMRON HBF-514C" },
          { id: "beurer-ps160", label: "BEURER PS160" },
          { id: "gramera-generica-10kg", label: "Gramera 10 kg" }
        ]
      },
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "blanco", label: "Blanco" },
          { id: "negro", label: "Negro" }
        ]
      }
    ],

    attributeRules: {
      "seca-803": { color: ["blanco", "negro"] },
      "seca-813": { color: [] },
      "omron-hbf-514c": { color: [] },
      "beurer-ps160": { color: [] },
      "gramera-generica-10kg": { color: [] }
    },

    variants: [
      {
        sku: "SECA-803-W",
        attrs: { modelo: "seca-803", color: "blanco" },
        name: "SECA 803 – BLANCO",
        description: "Báscula personal electrónica SECA 803 en acabado blanco con plataforma de vidrio templado de alta resistencia. Función de encendido automático por pisada, pantalla LCD de dígitos gran formato y apagado automático de ahorro de energía. Superficie tratada antideslizante para mayor seguridad. Diseño plano minimalista de alta estética para consultorios modernos. || **Capacidad:** 200 kg | **Precisión:** 100 g | **Color:** Blanco.",
        price: 450,
        image: "/images/diagnostico/BALANZAS PLATAFORMA/seca803-3.png"
      },
      {
        sku: "SECA-803-B",
        attrs: { modelo: "seca-803", color: "negro" },
        name: "SECA 803 – NEGRO",
        description: "Báscula personal electrónica SECA 803 en acabado negro con plataforma de vidrio templado de alta resistencia. Función de encendido automático por pisada, pantalla LCD de dígitos gran formato y apagado automático de ahorro de energía. Superficie tratada antideslizante para mayor seguridad. Diseño plano minimalista de alta estética para consultorios modernos. || **Capacidad:** 200 kg | **Precisión:** 100 g | **Color:** Negro.",
        price: 450,
        image: "/images/diagnostico/BALANZAS PLATAFORMA/seca803-1.png"
      },
      {
        sku: "SECA-813",
        attrs: { modelo: "seca-813" },
        name: "SECA 813",
        description: "Báscula personal SECA 813 de alta capacidad con plataforma rectangular extragrande para mayor estabilidad y comodidad durante el pesaje. Pantalla LCD de gran tamaño con retroiluminación, función Hold para lectura congelada y memoria de último pesaje. Construcción robusta en ABS de alto impacto con cuatro sensores de carga de precisión distribuidos para una medición uniforme. || **Capacidad:** 220 kg | **Precisión:** 100 g | **Plataforma:** Rectangular extragrande.",
        price: 530,
        image: "/images/diagnostico/BALANZAS PLATAFORMA/seca813-1.png"
      },
      {
        sku: "OMRON-HBF-514C",
        attrs: { modelo: "omron-hbf-514c" },
        name: "OMRON HBF-514C",
        description: "Monitor de composición corporal Omron HBF-514C con báscula integrada que mide grasa corporal, grasa visceral, masa muscular, agua corporal e IMC en una sola lectura mediante tecnología de Impedancia Bioeléctrica (BIA) de 4 electrodos a 50 kHz. Memoria para 4 usuarios, pantalla LCD multisegmento y clasificación del estado físico en modo Normal y Atlético. || **Capacidad:** 150 kg | **Precisión:** 100 g | **Tecnología:** BIA 4 electrodos 50 kHz | **Métricas:** Grasa corporal, grasa visceral, masa muscular, agua corporal e IMC.",
        price: 210,
        image: "/images/diagnostico/BALANZAS PLATAFORMA/OMRON.png"
      },
      {
        sku: "BEURER-PS160",
        attrs: { modelo: "beurer-ps160" },
        name: "BEURER PS160",
        description: "Báscula personal Beurer PS160 de diseño ultradelgado premium con pantalla LCD retroiluminada de fácil lectura. Tecnología Step-on de encendido instantáneo por pisada sin demoras ni botones. Superficie de vidrio templado de seguridad con garantía anti-rotura y funciones de cambio kg/lb/st con apagado automático. Ideal para uso domiciliario de alta gama y consultorios de estética y nutrición. || **Capacidad:** 180 kg | **Precisión:** 100 g | **Tecnología:** Step-on instantáneo | **Unidades:** kg / lb / st.",
        price: 180,
        image: "/images/diagnostico/BALANZAS PLATAFORMA/BEURERPS160.png"
      },
      {
        sku: "GRAMERA-10KG",
        attrs: { modelo: "gramera-generica-10kg" },
        name: "GRAMERA GENÉRICA 10 KG",
        description: "Balanza de precisión genérica para pesaje de muestras alimentarias, nutricionales e ingredientes farmacéuticos. Plataforma removible de acero inoxidable con pantalla LCD de lectura simultánea en múltiples unidades (g, kg, oz, lb). Función de tara dinámica, modo de conteo unitario y memorias de calibración guardadas. Ideal para laboratorios de nutrición, dietistas y dispensación de fórmulas. || **Capacidad:** 10 kg | **Precisión:** 1 g | **Unidades:** g, kg, oz, lb | **Plataforma:** Acero inoxidable removible.",
        price: 95,
        image: "/images/diagnostico/BALANZAS PLATAFORMA/GRAMERAGEN.png"
      }
    ]
  },

  {
    id: "accesorios-seca",
    name: "ACCESORIOS SECA",
    type: "Accesorios-Seca",
    description: "Accesorios originales SECA para ampliar las funcionalidades de las balanzas y equipos de medición antropométrica de la línea SECA. Incluye tallímetros e infantómetros, adaptadores de corriente, mochilas de transporte, topes de posicionamiento y accesorios complementarios. Todos los accesorios son originales SECA, garantizando compatibilidad, precisión y durabilidad con los equipos de la marca.",
    image: "/images/diagnostico/CARDS/ACCESORIOS.png",

    attributeOrder: ["categoria", "accesorio"],

    attributes: [
      {
        id: "categoria",
        label: "Tipo de accesorio",
        type: "single",
        values: [
          { id: "tallimetros", label: "Tallímetros e Infantómetros" },
          { id: "adaptadores", label: "Adaptadores de corriente" },
          { id: "mochilas", label: "Mochilas de transporte" },
          { id: "topes", label: "Topes de posicionamiento" },
          { id: "otros", label: "Otros accesorios" }
        ]
      },
      {
        id: "accesorio",
        label: "Modelo",
        type: "single",
        values: [
          { id: "seca-220", label: "Tallímetro SECA 220" },
          { id: "seca-232", label: "Tallímetro SECA 232" },
          { id: "seca-233", label: "Infantómetro SECA 233" },
          { id: "seca-400", label: "Adaptador SECA 400" },
          { id: "seca-401", label: "Adaptador SECA 401" },
          { id: "seca-447", label: "Adaptador SECA 447" },
          { id: "seca-413", label: "Mochila SECA 413" },
          { id: "seca-428", label: "Mochila SECA 428" },
          { id: "seca-418", label: "Topes SECA 418" },
          { id: "seca-419", label: "Tope SECA 419" },
          { id: "seca-459", label: "Indicador SECA 459" },
          { id: "seca-477", label: "Pasamanos SECA 477" }
        ]
      }
    ],

    attributeRules: {
      "tallimetros": { accesorio: ["seca-220", "seca-232", "seca-233"] },
      "adaptadores": { accesorio: ["seca-400", "seca-401", "seca-447"] },
      "mochilas": { accesorio: ["seca-413", "seca-428"] },
      "topes": { accesorio: ["seca-418", "seca-419"] },
      "otros": { accesorio: ["seca-459", "seca-477"] }
    },

    variants: [

      // ─── TALLÍMETROS E INFANTÓMETROS ──────────────────────────────────────────
      {
        sku: "seca-220",
        attrs: { categoria: "tallimetros", accesorio: "seca-220" },
        name: "TALLÍMETRO SECA 220",
        description: "Tallímetro clínico original SECA 220 compatible con balanzas de columna SECA 700 y 703, para medición precisa de estatura en posición bípeda. Escala graduada en mm con cursor deslizante de lectura directa. Se acopla firmemente al mástil de la balanza sin herramientas. Ideal para consultorios y centros de salud que requieren medición de peso y talla en una sola estación. || **Compatible con:** SECA 700, SECA 703 | **Ref.:** SECA 220.",
        price: 400,
        image: "/images/diagnostico/ACCESORIOS/TALLIMETRO220.png"
      },
      {
        sku: "seca-232",
        attrs: { categoria: "tallimetros", accesorio: "seca-232" },
        name: "TALLÍMETRO SECA 232",
        description: "Tallímetro original SECA 232 para medición de longitud corporal en posición supina en lactantes y menores de 2 años. Se acopla directamente a la balanza pediátrica SECA 334, permitiendo medir longitud y peso en una sola estación de trabajo. Escala graduada en mm con tope cefálico fijo y cursor podálico deslizante. || **Compatible con:** SECA 334 | **Ref.:** SECA 232.",
        price: 400,
        image:
          "/images/diagnostico/ACCESORIOS/seca232-1.png"


      },
      {
        sku: "seca-233",
        attrs: { categoria: "tallimetros", accesorio: "seca-233" },
        name: "INFANTÓMETRO SECA 233",
        description: "Infantómetro original SECA 233 para medición de longitud corporal en posición supina en lactantes y menores de 2 años. Compatible con la balanza pediátrica SECA 374, integrando en una sola estación la medición de peso y longitud corporal. Escala graduada en mm con tope cefálico fijo y cursor podálico deslizante de alta precisión. || **Compatible con:** SECA 374 | **Ref.:** SECA 233.",
        price: 400,
        image:
          "/images/diagnostico/ACCESORIOS/seca233-1.png"


      },

      // ─── ADAPTADORES DE CORRIENTE ─────────────────────────────────────────────
      {
        sku: "seca-400",
        attrs: { categoria: "adaptadores", accesorio: "seca-400" },
        name: "ADAPTADOR DE CORRIENTE SECA 400",
        description: "Adaptador de corriente original SECA 400 para alimentación eléctrica continua de balanzas pediátricas SECA, eliminando la dependencia de baterías en entornos con toma de corriente disponible. Compatible con SECA 334 y SECA 374. Garantiza operación estable y protección contra fluctuaciones de voltaje. || **Compatible con:** SECA 334, SECA 374 | **Ref.:** SECA 400.",
        price: 400,
        image: "/images/diagnostico/ACCESORIOS/seca400.png"
      },
      {
        sku: "seca-401",
        attrs: { categoria: "adaptadores", accesorio: "seca-401" },
        name: "ADAPTADOR DE CORRIENTE SECA 401",
        description: "Adaptador de corriente original SECA 401 para alimentación eléctrica continua de balanzas de columna SECA de gama media-alta. Compatible con SECA 777 y SECA 787, eliminando la dependencia de baterías en consultorios y centros de salud con toma de corriente disponible. || **Compatible con:** SECA 777, SECA 787 | **Ref.:** SECA 401.",
        price: 400,
        image: "/images/diagnostico/ACCESORIOS/seca401.png"
      },
      {
        sku: "seca-447",
        attrs: { categoria: "adaptadores", accesorio: "seca-447" },
        name: "ADAPTADOR DE CORRIENTE SECA 447",
        description: "Adaptador de corriente original SECA 447 para alimentación eléctrica continua de balanzas pediátricas SECA 334. Permite operar el equipo conectado a la red eléctrica en entornos clínicos de uso intensivo, reduciendo el consumo de baterías y garantizando una operación ininterrumpida. || **Compatible con:** SECA 334 | **Ref.:** SECA 447.",
        price: 400,
        image: "/images/diagnostico/ACCESORIOS/seca447.png"
      },

      // ─── MOCHILAS DE TRANSPORTE ───────────────────────────────────────────────
      {
        sku: "seca-413",
        attrs: { categoria: "mochilas", accesorio: "seca-413" },
        name: "MOCHILA DE TRANSPORTE SECA 413",
        description: "Mochila de transporte original SECA 413 diseñada específicamente para la balanza pediátrica SECA 354, con compartimentos acolchados que protegen el equipo durante el traslado a visitas domiciliarias, trabajo de campo y brigadas de salud. Correas de hombro ergonómicas y cierre hermético para mayor seguridad. || **Compatible con:** SECA 354 | **Ref.:** SECA 413.",
        price: 400,
        image:

          "/images/diagnostico/ACCESORIOS/seca413-3.png"

      },
      {
        sku: "seca-428",
        attrs: { categoria: "mochilas", accesorio: "seca-428" },
        name: "MOCHILA DE TRANSPORTE SECA 428",
        description: "Mochila de transporte original SECA 428 diseñada para la balanza pediátrica SECA 334, con compartimentos acolchados para proteger el equipo y su tallímetro accesorio durante el traslado. Ideal para trabajo de campo, visitas domiciliarias y brigadas de nutrición. Correas de hombro ergonómicas y cierre de seguridad. || **Compatible con:** SECA 334 | **Ref.:** SECA 428.",
        price: 400,
        image:
          "/images/diagnostico/ACCESORIOS/seca428-1.png"


      },

      // ─── TOPES DE POSICIONAMIENTO ─────────────────────────────────────────────
      {
        sku: "seca-418",
        attrs: { categoria: "topes", accesorio: "seca-418" },
        name: "TOPES SECA 418",
        description: "Topes de posicionamiento originales SECA 418 para pies y cabeza, compatibles con la balanza pediátrica SECA 374. Garantizan la correcta alineación corporal del lactante durante la medición de longitud, reduciendo el error por mala posición y mejorando la reproducibilidad de las mediciones. Material acolchado de fácil limpieza. || **Compatible con:** SECA 374 | **Ref.:** SECA 418.",
        price: 400,
        image:
          "/images/diagnostico/ACCESORIOS/seca418-1.png"


      },
      {
        sku: "seca-419",
        attrs: { categoria: "topes", accesorio: "seca-419" },
        name: "TOPE CEFÁLICO SECA 419",
        description: "Tope cefálico original SECA 419 para la correcta posición de la cabeza del lactante durante la medición de longitud corporal en la balanza pediátrica SECA 334. Garantiza el plano de Frankfurt estándar para mediciones antropométricas reproducibles y comparables. Material acolchado suave y de fácil limpieza. || **Compatible con:** SECA 334 | **Ref.:** SECA 419.",
        price: 400,
        image: "/images/diagnostico/ACCESORIOS/seca419.png"
      },

      // ─── OTROS ACCESORIOS ─────────────────────────────────────────────────────
      {
        sku: "seca-459",
        attrs: { categoria: "otros", accesorio: "seca-459" },
        name: "INDICADOR DE LECTURA INFANTIL SECA 459",
        description: "Indicador de lectura infantil original SECA 459, accesorio visual en forma de oso panda diseñado para la balanza pediátrica SECA 777, que distrae al niño durante el pesaje facilitando la obtención de mediciones precisas con menor movimiento del paciente. Se acopla directamente al mástil de la balanza. || **Compatible con:** SECA 777 | **Ref.:** SECA 459.",
        price: 400,
        image:
          "/images/diagnostico/ACCESORIOS/seca459-1.png"


      },
      {
        sku: "seca-477",
        attrs: { categoria: "otros", accesorio: "seca-477" },
        name: "PASAMANOS SECA 477",
        description: "Pasamanos de apoyo original SECA 477 para mayor estabilidad y seguridad del paciente durante el pesaje en balanzas de columna SECA. Especialmente útil para adultos mayores, pacientes con problemas de equilibrio o movilidad reducida. Fabricado en acero inoxidable de alta resistencia con acabado antideslizante. || **Compatible con:** Balanzas de columna SECA | **Ref.:** SECA 477.",
        price: 400,
        image:

          "/images/diagnostico/ACCESORIOS/seca477-2.png"

      }
    ]
  },

  {
    id: "infantometros-pediatricos-madera",
    name: "INFANTÓMETROS Y TALLÍMETROS",
    type: "Antropometria",
    description: "Instrumentos antropométricos de madera diseñados para la medición precisa de la longitud y estatura de niñas, niños y adultos en diferentes etapas de crecimiento. Incluye modelos específicos para menores de dos años (110 cm), tallímetros móviles para menores de cinco años (132 cm) y versiones para uso en población adulta (199 cm). Fabricados en triplay reforzado con diseño plegable y transportable, manteniendo estabilidad, durabilidad y exactitud en entornos clínicos y trabajo de campo. Disponibles con o sin mochila de transporte.",
    image: "/images/diagnostico/CARDS/INFANTOMETROS.png",

    attributeOrder: ["tipo", "accesorio"],

    attributes: [
      {
        id: "tipo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "menores-2-anos", label: "110 cm (menores de 2 años)" },
          { id: "menores-5-anos", label: "132 cm (menores de 5 años)" },
          { id: "tallimetro-t2", label: "199 cm (adulto y pediátrico)" }
        ]
      },
      {
        id: "accesorio",
        label: "Accesorio",
        type: "single",
        values: [
          { id: "sin-mochila", label: "Sin mochila" },
          { id: "mochila-transporte", label: "Con mochila de transporte" }
        ]
      }
    ],

    variants: [

      // ─── 110 CM – MENORES DE 2 AÑOS ───────────────────────────────────────────
      {
        sku: "INF-MAD-2A",
        attrs: { tipo: "menores-2-anos", accesorio: "sin-mochila" },
        name: "INFANTÓMETRO 110 CM – SIN MOCHILA",
        description: "Infantómetro de madera triplay reforzado de 110 cm para la medición de longitud corporal en decúbito supino en menores de 2 años. Escala graduada en mm con tope cefálico fijo y tope podálico móvil deslizante. Diseño plegable y ligero para uso clínico y trabajo de campo. Incluye nivel de burbuja para correcta nivelación. || **Rango:** 0–110 cm | **Uso:** Menores de 2 años | **Material:** Triplay reforzado.",
        price: 320,
        image: "/images/diagnostico/INFANTOMETROS MADERA/i2.png"
      },
      {
        sku: "INF-MAD-2A-MOCHILA",
        attrs: { tipo: "menores-2-anos", accesorio: "mochila-transporte" },
        name: "INFANTÓMETRO 110 CM – CON MOCHILA",
        description: "Infantómetro de madera triplay reforzado de 110 cm para la medición de longitud corporal en decúbito supino en menores de 2 años. Escala graduada en mm con tope cefálico fijo y tope podálico móvil deslizante. Incluye mochila de transporte acolchada para traslado seguro en trabajo de campo y visitas domiciliarias. || **Rango:** 0–110 cm | **Uso:** Menores de 2 años | **Material:** Triplay reforzado | **Incluye:** Mochila de transporte.",
        price: 400,
        images: [
          "/images/diagnostico/INFANTOMETROS MADERA/i2.png",
          "/images/diagnostico/INFANTOMETROS MADERA/MOCHILA.png"
        ]
      },

      // ─── 132 CM – MENORES DE 5 AÑOS ───────────────────────────────────────────
      {
        sku: "TALL-T1-5A",
        attrs: { tipo: "menores-5-anos", accesorio: "sin-mochila" },
        name: "TALLÍMETRO 132 CM – SIN MOCHILA",
        description: "Tallímetro móvil de madera triplay reforzado de 132 cm para la medición de estatura en posición bípeda en niños de 2 a 5 años. Escala graduada en mm con tope cefálico deslizante y base estable antideslizante. Diseño plegable y ligero para uso clínico y trabajo de campo. Incluye nivel de burbuja para correcta nivelación. || **Rango:** 0–132 cm | **Uso:** Niños de 2 a 5 años | **Material:** Triplay reforzado.",
        price: 430,
        image: "/images/diagnostico/INFANTOMETROS MADERA/t1.png"
      },
      {
        sku: "TALL-T1-5A-MOCHILA",
        attrs: { tipo: "menores-5-anos", accesorio: "mochila-transporte" },
        name: "TALLÍMETRO 132 CM – CON MOCHILA",
        description: "Tallímetro móvil de madera triplay reforzado de 132 cm para la medición de estatura en posición bípeda en niños de 2 a 5 años. Escala graduada en mm con tope cefálico deslizante y base estable antideslizante. Incluye mochila de transporte acolchada para traslado seguro en trabajo de campo y visitas domiciliarias. || **Rango:** 0–132 cm | **Uso:** Niños de 2 a 5 años | **Material:** Triplay reforzado | **Incluye:** Mochila de transporte.",
        price: 510,
        images: [
          "/images/diagnostico/INFANTOMETROS MADERA/t1.png",
          "/images/diagnostico/INFANTOMETROS MADERA/MOCHILA.png"
        ]
      },

      // ─── 199 CM – ADULTO Y PEDIÁTRICO ─────────────────────────────────────────
      {
        sku: "TALL-T2-AD",
        attrs: { tipo: "tallimetro-t2", accesorio: "sin-mochila" },
        name: "TALLÍMETRO 199 CM – SIN MOCHILA",
        description: "Tallímetro plegable de madera triplay reforzado de 199 cm para la medición de estatura en posición bípeda en población pediátrica mayor y adulta. Escala graduada en mm con tope cefálico deslizante, base estable antideslizante y diseño compacto al plegar para transporte. Adecuado para uso clínico, trabajo de campo y evaluaciones nutricionales en terreno. || **Rango:** 0–199 cm | **Uso:** Pediátrico mayor y adulto | **Material:** Triplay reforzado.",
        price: 480,
        image: "/images/diagnostico/INFANTOMETROS MADERA/t2.png"
      },
      {
        sku: "TALL-T2-AD-MOCHILA",
        attrs: { tipo: "tallimetro-t2", accesorio: "mochila-transporte" },
        name: "TALLÍMETRO 199 CM – CON MOCHILA",
        description: "Tallímetro plegable de madera triplay reforzado de 199 cm para la medición de estatura en posición bípeda en población pediátrica mayor y adulta. Escala graduada en mm con tope cefálico deslizante y base estable antideslizante. Incluye mochila de transporte acolchada para traslado seguro en trabajo de campo, brigadas de salud y evaluaciones nutricionales en terreno. || **Rango:** 0–199 cm | **Uso:** Pediátrico mayor y adulto | **Material:** Triplay reforzado | **Incluye:** Mochila de transporte.",
        price: 560,
        images: [
          "/images/diagnostico/INFANTOMETROS MADERA/t2.png",
          "/images/diagnostico/INFANTOMETROS MADERA/MOCHILA.png"
        ]
      }
    ]
  },
  {
    id: "tensiometros-riester",
    name: "TENSIÓMETROS RIESTER",
    type: "Diagnostico clinico",
    description: "Tensiómetros aneroides Riester de referencia clínica mundial, disponibles en cuatro modelos según el nivel de uso y la instalación requerida. Exacta (portátil de entrada, ideal para consultorios), ri-Champion (portátil de alta precisión con válvula de acero inoxidable), Shock-n-Proof (resistente a impactos para trabajo de campo y urgencias) y Big Ben (gama estacionaria en versiones de mesa, pared y pedestal con manómetro redondo o cuadrado). Todos incluyen brazalete para el tamaño seleccionado y cumplen normas de precisión médica europeas.",
    image: "/images/diagnostico/CARDS/TENSIOMETROS.png",

    priceRange: {
      min: 250,
      max: 1470
    },

    attributeOrder: ["modelo", "instalacion", "forma", "brazalete"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "riester-1350", label: "EXACTA" },
          { id: "ri-champion-1725", label: "RI-CHAMPION" },
          { id: "shock-proof", label: "SHOCK-N-PROOF" },
          { id: "big-ben", label: "BIG BEN" }
        ]
      },
      {
        id: "instalacion",
        label: "Tipo de instalación",
        type: "single",
        values: [
          { id: "portatil", label: "Portátil" },
          { id: "mesa", label: "Mesa" },
          { id: "pared", label: "Pared" },
          { id: "pedestal", label: "Pedestal" }
        ]
      },
      {
        id: "forma",
        label: "Forma del manómetro",
        type: "single",
        values: [
          { id: "estandard", label: "Estándar" },
          { id: "redondo", label: "Redondo" },
          { id: "cuadrado", label: "Cuadrado" }
        ]
      },
      {
        id: "brazalete",
        label: "Tamaño del brazalete",
        type: "single",
        values: [
          { id: "recien-nacido", label: "Recién nacido" },
          { id: "pediatrico", label: "Pediátrico" },
          { id: "adulto", label: "Adulto" },
          { id: "adulto-grande", label: "Adulto grande" }
        ]
      }
    ],

    attributeRules: {
      // Modelo → Instalación
      "riester-1350": { instalacion: ["portatil"] },
      "ri-champion-1725": { instalacion: ["portatil"] },
      "shock-proof": { instalacion: ["portatil"] },
      "big-ben": { instalacion: ["mesa", "pared", "pedestal"] },

      // Instalación → Forma
      "portatil": { forma: ["estandard"] },
      "mesa": { forma: ["redondo", "cuadrado"] },
      "pared": { forma: ["redondo", "cuadrado"] },
      "pedestal": { forma: ["redondo", "cuadrado"] },

      // Modelo → Brazalete
      "riester-1350": { brazalete: ["pediatrico", "adulto", "adulto-grande"] },
      "ri-champion-1725": { brazalete: ["pediatrico", "adulto", "adulto-grande"] },
      "shock-proof": { brazalete: ["recien-nacido", "pediatrico", "adulto", "adulto-grande"] },
      "big-ben": { brazalete: ["pediatrico", "adulto", "adulto-grande"] }
    },

    variants: [

      // ─── EXACTA 1350 ──────────────────────────────────────────────────────────
      {
        sku: "RIESTER-1350-ADULTO",
        attrs: { modelo: "riester-1350", instalacion: "portatil", forma: "estandard", brazalete: "adulto" },
        name: "EXACTA – PORTÁTIL ADULTO",
        description: "Tensiómetro aneroide portátil Riester Exacta con brazalete estándar para adulto. Manómetro de alta precisión con escala de 0 a 300 mmHg, válvula de control de deflación suave y estuche de transporte incluido. Ideal para consultorios de medicina general y uso domiciliario profesional. || **Modelo:** Exacta | **Instalación:** Portátil | **Brazalete:** Adulto | **Ref.:** 1350.",
        price: 350,
        image: "/images/diagnostico/RIESTER 1350/riester1350.png"
      },
      {
        sku: "RIESTER-1350-130",
        attrs: { modelo: "riester-1350", instalacion: "portatil", forma: "estandard", brazalete: "pediatrico" },
        name: "EXACTA – PORTÁTIL PEDIÁTRICO",
        description: "Tensiómetro aneroide portátil Riester Exacta con brazalete pediátrico de menor longitud y anchura para medición precisa en niños. Manómetro de alta precisión con escala de 0 a 300 mmHg, válvula de control de deflación suave y estuche de transporte incluido. Ideal para pediatría ambulatoria y consultorios de medicina general. || **Modelo:** Exacta | **Instalación:** Portátil | **Brazalete:** Pediátrico | **Ref.:** 1350-130.",
        price: 350,
        image: "/images/diagnostico/RIESTER 1350/riester1350.png"
      },
      {
        sku: "RIESTER-1350-123",
        attrs: { modelo: "riester-1350", instalacion: "portatil", forma: "estandard", brazalete: "adulto-grande" },
        name: "EXACTA – PORTÁTIL ADULTO GRANDE",
        description: "Tensiómetro aneroide portátil Riester Exacta con brazalete de mayor longitud para adultos con circunferencia de brazo amplia. Manómetro de alta precisión con escala de 0 a 300 mmHg, válvula de control de deflación suave y estuche de transporte incluido. Indicado para pacientes con sobrepeso u obesidad en consultorios y trabajo de campo. || **Modelo:** Exacta | **Instalación:** Portátil | **Brazalete:** Adulto grande | **Ref.:** 1350-123.",
        price: 350,
        image: "/images/diagnostico/RIESTER 1350/riester1350.png"
      },

      // ─── RI-CHAMPION 1725 ─────────────────────────────────────────────────────
      {
        sku: "RIESTER-1725-ADULTO",
        attrs: { modelo: "ri-champion-1725", instalacion: "portatil", forma: "estandard", brazalete: "adulto" },
        name: "RI-CHAMPION – PORTÁTIL ADULTO",
        description: "Tensiómetro aneroide portátil Riester ri-Champion de alta precisión con brazalete estándar para adulto. Válvula de acero inoxidable de larga duración, manómetro sellado antipolvo con escala de 0 a 300 mmHg y estuche de transporte de alta calidad. Mayor durabilidad y fiabilidad respecto al modelo Exacta. Referente en consultorios y clínicas de uso intensivo. || **Modelo:** ri-Champion | **Instalación:** Portátil | **Brazalete:** Adulto | **Ref.:** 1725-145.",
        price: 450,
        image: "/images/diagnostico/RI-CHAMPION/RI-CHAMPION.png"
      },
      {
        sku: "RIESTER-1725-PEDIATRICO",
        attrs: { modelo: "ri-champion-1725", instalacion: "portatil", forma: "estandard", brazalete: "pediatrico" },
        name: "RI-CHAMPION – PORTÁTIL PEDIÁTRICO",
        description: "Tensiómetro aneroide portátil Riester ri-Champion de alta precisión con brazalete pediátrico. Válvula de acero inoxidable de larga duración, manómetro sellado antipolvo con escala de 0 a 300 mmHg y estuche de transporte de alta calidad. Indicado para pediatría ambulatoria y consultorios de uso intensivo. || **Modelo:** ri-Champion | **Instalación:** Portátil | **Brazalete:** Pediátrico | **Ref.:** 1725.",
        price: 450,
        image: "/images/diagnostico/RI-CHAMPION/RI-CHAMPION.png"
      },
      {
        sku: "RIESTER-1725-ADULTO-GRANDE",
        attrs: { modelo: "ri-champion-1725", instalacion: "portatil", forma: "estandard", brazalete: "adulto-grande" },
        name: "RI-CHAMPION – PORTÁTIL ADULTO GRANDE",
        description: "Tensiómetro aneroide portátil Riester ri-Champion de alta precisión con brazalete de mayor longitud para adultos con circunferencia de brazo amplia. Válvula de acero inoxidable de larga duración, manómetro sellado antipolvo con escala de 0 a 300 mmHg y estuche de transporte de alta calidad. || **Modelo:** ri-Champion | **Instalación:** Portátil | **Brazalete:** Adulto grande | **Ref.:** 1725.",
        price: 450,
        image: "/images/diagnostico/RI-CHAMPION/RI-CHAMPION.png"
      },

      // ─── SHOCK-N-PROOF ────────────────────────────────────────────────────────
      {
        sku: "RIESTER-1364-RECIEN-NACIDO",
        attrs: { modelo: "shock-proof", instalacion: "portatil", forma: "estandard", brazalete: "recien-nacido" },
        name: "SHOCK-N-PROOF – PORTÁTIL RECIÉN NACIDO",
        description: "Tensiómetro aneroide Riester Shock-n-Proof con brazalete para recién nacido, diseñado para resistir caídas e impactos en entornos de trabajo exigente. Carcasa de protección reforzada con manómetro de precisión sellado, escala de 0 a 300 mmHg y válvula de deflación controlada. Único modelo de la gama con brazalete neonatal. Ideal para neonatología, pediatría hospitalaria y trabajo de campo. || **Modelo:** Shock-n-Proof | **Brazalete:** Recién nacido | **Ref.:** 1364.",
        price: 450,
        image: "/images/diagnostico/SHOCK PROOF/1364.png"
      },
      {
        sku: "RIESTER-1364-107",
        attrs: { modelo: "shock-proof", instalacion: "portatil", forma: "estandard", brazalete: "adulto" },
        name: "SHOCK-N-PROOF – PORTÁTIL ADULTO",
        description: "Tensiómetro aneroide Riester Shock-n-Proof con brazalete estándar para adulto, diseñado para resistir caídas e impactos en entornos de trabajo exigente como urgencias, visitas domiciliarias y trabajo de campo. Carcasa de protección reforzada con manómetro de precisión sellado y escala de 0 a 300 mmHg. || **Modelo:** Shock-n-Proof | **Brazalete:** Adulto | **Ref.:** 1364-107.",
        price: 450,
        image: "/images/diagnostico/SHOCK PROOF/1364-107.png"
      },
      {
        sku: "RIESTER-1364-122",
        attrs: { modelo: "shock-proof", instalacion: "portatil", forma: "estandard", brazalete: "adulto-grande" },
        name: "SHOCK-N-PROOF – PORTÁTIL ADULTO GRANDE",
        description: "Tensiómetro aneroide Riester Shock-n-Proof con brazalete de mayor longitud para adultos con circunferencia de brazo amplia, diseñado para resistir caídas e impactos en entornos exigentes. Carcasa de protección reforzada con manómetro de precisión sellado y escala de 0 a 300 mmHg. || **Modelo:** Shock-n-Proof | **Brazalete:** Adulto grande | **Ref.:** 1364-122.",
        price: 450,
        image: "/images/diagnostico/SHOCK PROOF/1364-122.png"
      },
      {
        sku: "RIESTER-1364-129",
        attrs: { modelo: "shock-proof", instalacion: "portatil", forma: "estandard", brazalete: "pediatrico" },
        name: "SHOCK-N-PROOF – PORTÁTIL PEDIÁTRICO",
        description: "Tensiómetro aneroide Riester Shock-n-Proof con brazalete pediátrico, diseñado para resistir caídas e impactos en entornos de trabajo exigente. Carcasa de protección reforzada con manómetro de precisión sellado y escala de 0 a 300 mmHg. Ideal para pediatría en campo, urgencias pediátricas y visitas domiciliarias. || **Modelo:** Shock-n-Proof | **Brazalete:** Pediátrico | **Ref.:** 1364-129.",
        price: 450,
        image: "/images/diagnostico/SHOCK PROOF/1364-129.png"
      },
      // ─── BIG BEN – MESA REDONDO ───────────────────────────────────────────────
      {
        sku: "RIESTER-1453",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "redondo", brazalete: "adulto" },
        name: "BIG BEN – MESA REDONDO ADULTO",
        description: "Tensiómetro aneroide de mesa Riester Big Ben con manómetro redondo de gran formato y brazalete estándar para adulto. Base estable de mesa con soporte de brazalete integrado, válvula de alta precisión y escala de fácil lectura de 0 a 300 mmHg. Diseño clásico de alta visibilidad para consultorios y puestos de enfermería. || **Modelo:** Big Ben | **Instalación:** Mesa | **Manómetro:** Redondo | **Brazalete:** Adulto | **Ref.:** 1453.",
        price: 750,
        image: "/images/diagnostico/BIG BEN/1453-REDONDO-MESA.png"
      },
      {
        sku: "RIESTER-1453-123",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "redondo", brazalete: "adulto-grande" },
        name: "BIG BEN – MESA REDONDO ADULTO GRANDE",
        description: "Tensiómetro aneroide de mesa Riester Big Ben con manómetro redondo de gran formato y brazalete de mayor longitud para adultos con circunferencia de brazo amplia. Base estable de mesa con soporte de brazalete integrado y válvula de alta precisión. || **Modelo:** Big Ben | **Instalación:** Mesa | **Manómetro:** Redondo | **Brazalete:** Adulto grande | **Ref.:** 1453-123.",
        price: 750,
        image: "/images/diagnostico/BIG BEN/1453-REDONDO-MESA.png"
      },
      {
        sku: "RIESTER-1453-130",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "redondo", brazalete: "pediatrico" },
        name: "BIG BEN – MESA REDONDO PEDIÁTRICO",
        description: "Tensiómetro aneroide de mesa Riester Big Ben con manómetro redondo de gran formato y brazalete pediátrico. Base estable de mesa con soporte de brazalete integrado y válvula de alta precisión. Ideal para consultorios pediátricos y puestos de enfermería con atención mixta. || **Modelo:** Big Ben | **Instalación:** Mesa | **Manómetro:** Redondo | **Brazalete:** Pediátrico | **Ref.:** 1453-130.",
        price: 750,
        image: "/images/diagnostico/BIG BEN/1453-REDONDO-MESA.png"
      },

      // ─── BIG BEN – MESA CUADRADO ──────────────────────────────────────────────
      {
        sku: "RIESTER-1456",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "cuadrado", brazalete: "adulto" },
        name: "BIG BEN – MESA CUADRADO ADULTO",
        description: "Tensiómetro aneroide de mesa Riester Big Ben con manómetro cuadrado de diseño moderno y brazalete estándar para adulto. Base estable de mesa con soporte de brazalete integrado, válvula de alta precisión y escala de 0 a 300 mmHg. Estética contemporánea para consultorios de diseño moderno. || **Modelo:** Big Ben | **Instalación:** Mesa | **Manómetro:** Cuadrado | **Brazalete:** Adulto | **Ref.:** 1456.",
        price: 750,
        image: "/images/diagnostico/BIG BEN/1456-CUADRADO-MESA.png"
      },
      {
        sku: "RIESTER-1456-123",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "cuadrado", brazalete: "adulto-grande" },
        name: "BIG BEN – MESA CUADRADO ADULTO GRANDE",
        description: "Tensiómetro aneroide de mesa Riester Big Ben con manómetro cuadrado de diseño moderno y brazalete de mayor longitud para adultos con circunferencia de brazo amplia. Base estable de mesa con soporte de brazalete integrado y válvula de alta precisión. || **Modelo:** Big Ben | **Instalación:** Mesa | **Manómetro:** Cuadrado | **Brazalete:** Adulto grande | **Ref.:** 1456-123.",
        price: 750,
        image: "/images/diagnostico/BIG BEN/1456-CUADRADO-MESA.png"
      },
      {
        sku: "RIESTER-1456-130",
        attrs: { modelo: "big-ben", instalacion: "mesa", forma: "cuadrado", brazalete: "pediatrico" },
        name: "BIG BEN – MESA CUADRADO PEDIÁTRICO",
        description: "Tensiómetro aneroide de mesa Riester Big Ben con manómetro cuadrado de diseño moderno y brazalete pediátrico. Base estable de mesa con soporte de brazalete integrado y válvula de alta precisión. Ideal para consultorios pediátricos de diseño contemporáneo. || **Modelo:** Big Ben | **Instalación:** Mesa | **Manómetro:** Cuadrado | **Brazalete:** Pediátrico | **Ref.:** 1456-130.",
        price: 750,
        image: "/images/diagnostico/BIG BEN/1456-CUADRADO-MESA.png"
      },

      // ─── BIG BEN – PARED REDONDO ──────────────────────────────────────────────
      {
        sku: "RIESTER-1459",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "redondo", brazalete: "adulto" },
        name: "BIG BEN – PARED REDONDO ADULTO",
        description: "Tensiómetro aneroide de pared Riester Big Ben con manómetro redondo de gran formato y brazalete estándar para adulto. Soporte de montaje en pared incluido con riel portabrazalete y válvula de alta precisión. Instalación fija ideal para boxes de enfermería, urgencias y consultorios de alta rotación. || **Modelo:** Big Ben | **Instalación:** Pared | **Manómetro:** Redondo | **Brazalete:** Adulto | **Ref.:** 1459.",
        price: 700,
        image: "/images/diagnostico/BIG BEN/1459-REDONDO-PARED.png"
      },
      {
        sku: "RIESTER-1459-123",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "redondo", brazalete: "adulto-grande" },
        name: "BIG BEN – PARED REDONDO ADULTO GRANDE",
        description: "Tensiómetro aneroide de pared Riester Big Ben con manómetro redondo de gran formato y brazalete de mayor longitud para adultos con circunferencia de brazo amplia. Soporte de montaje en pared incluido con riel portabrazalete y válvula de alta precisión. || **Modelo:** Big Ben | **Instalación:** Pared | **Manómetro:** Redondo | **Brazalete:** Adulto grande | **Ref.:** 1459-123.",
        price: 700,
        image: "/images/diagnostico/BIG BEN/1459-REDONDO-PARED.png"
      },
      {
        sku: "RIESTER-1459-130",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "redondo", brazalete: "pediatrico" },
        name: "BIG BEN – PARED REDONDO PEDIÁTRICO",
        description: "Tensiómetro aneroide de pared Riester Big Ben con manómetro redondo de gran formato y brazalete pediátrico. Soporte de montaje en pared incluido con riel portabrazalete y válvula de alta precisión. Ideal para boxes de pediatría y consultorios pediátricos con instalación fija. || **Modelo:** Big Ben | **Instalación:** Pared | **Manómetro:** Redondo | **Brazalete:** Pediátrico | **Ref.:** 1459-130.",
        price: 700,
        image: "/images/diagnostico/BIG BEN/1459-REDONDO-PARED.png"
      },

      // ─── BIG BEN – PARED CUADRADO ─────────────────────────────────────────────
      {
        sku: "RIESTER-1465",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "cuadrado", brazalete: "adulto" },
        name: "BIG BEN – PARED CUADRADO ADULTO",
        description: "Tensiómetro aneroide de pared Riester Big Ben con manómetro cuadrado de diseño moderno y brazalete estándar para adulto. Soporte de montaje en pared incluido con riel portabrazalete y válvula de alta precisión. Estética contemporánea para instalaciones hospitalarias y consultorios de diseño moderno. || **Modelo:** Big Ben | **Instalación:** Pared | **Manómetro:** Cuadrado | **Brazalete:** Adulto | **Ref.:** 1465.",
        price: 700,
        image: "/images/diagnostico/BIG BEN/1465-CUADRADO-PARED.png"
      },
      {
        sku: "RIESTER-1465-123",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "cuadrado", brazalete: "adulto-grande" },
        name: "BIG BEN – PARED CUADRADO ADULTO GRANDE",
        description: "Tensiómetro aneroide de pared Riester Big Ben con manómetro cuadrado de diseño moderno y brazalete de mayor longitud para adultos con circunferencia de brazo amplia. Soporte de montaje en pared incluido con riel portabrazalete y válvula de alta precisión. || **Modelo:** Big Ben | **Instalación:** Pared | **Manómetro:** Cuadrado | **Brazalete:** Adulto grande | **Ref.:** 1465-123.",
        price: 700,
        image: "/images/diagnostico/BIG BEN/1465-CUADRADO-PARED.png"
      },
      {
        sku: "RIESTER-1465-130",
        attrs: { modelo: "big-ben", instalacion: "pared", forma: "cuadrado", brazalete: "pediatrico" },
        name: "BIG BEN – PARED CUADRADO PEDIÁTRICO",
        description: "Tensiómetro aneroide de pared Riester Big Ben con manómetro cuadrado de diseño moderno y brazalete pediátrico. Soporte de montaje en pared incluido con riel portabrazalete y válvula de alta precisión. Ideal para boxes de pediatría con instalación fija y estética contemporánea. || **Modelo:** Big Ben | **Instalación:** Pared | **Manómetro:** Cuadrado | **Brazalete:** Pediátrico | **Ref.:** 1465-130.",
        price: 700,
        image: "/images/diagnostico/BIG BEN/1465-CUADRADO-PARED.png"
      },

      // ─── BIG BEN – PEDESTAL REDONDO ───────────────────────────────────────────
      {
        sku: "RIESTER-1468",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "redondo", brazalete: "adulto" },
        name: "BIG BEN – PEDESTAL REDONDO ADULTO",
        description: "Tensiómetro aneroide Riester Big Ben sobre pedestal móvil con ruedas giratorias, manómetro redondo de gran formato y brazalete estándar para adulto. Pedestal de acero regulable en altura con base de cinco apoyos y ruedas con freno para posicionamiento preciso. Solución estacionaria móvil para salas de espera, pasillos hospitalarios y boxes de enfermería. || **Modelo:** Big Ben | **Instalación:** Pedestal móvil | **Manómetro:** Redondo | **Brazalete:** Adulto | **Ref.:** 1468.",
        price: 1450,
        image: "/images/diagnostico/BIG BEN/1468-REDONDO-PEDESTAL.png"
      },
      {
        sku: "RIESTER-1468-123",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "redondo", brazalete: "adulto-grande" },
        name: "BIG BEN – PEDESTAL REDONDO ADULTO GRANDE",
        description: "Tensiómetro aneroide Riester Big Ben sobre pedestal móvil con ruedas giratorias, manómetro redondo de gran formato y brazalete de mayor longitud para adultos con circunferencia de brazo amplia. Pedestal de acero regulable en altura con base de cinco apoyos y ruedas con freno. || **Modelo:** Big Ben | **Instalación:** Pedestal móvil | **Manómetro:** Redondo | **Brazalete:** Adulto grande | **Ref.:** 1468-123.",
        price: 1450,
        image: "/images/diagnostico/BIG BEN/1468-REDONDO-PEDESTAL.png"
      },
      {
        sku: "RIESTER-1468-130",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "redondo", brazalete: "pediatrico" },
        name: "BIG BEN – PEDESTAL REDONDO PEDIÁTRICO",
        description: "Tensiómetro aneroide Riester Big Ben sobre pedestal móvil con ruedas giratorias, manómetro redondo de gran formato y brazalete pediátrico. Pedestal de acero regulable en altura con base de cinco apoyos y ruedas con freno. Solución móvil ideal para pediatría hospitalaria y salas de espera pediátricas. || **Modelo:** Big Ben | **Instalación:** Pedestal móvil | **Manómetro:** Redondo | **Brazalete:** Pediátrico | **Ref.:** 1468-130.",
        price: 1450,
        image: "/images/diagnostico/BIG BEN/1468-REDONDO-PEDESTAL.png"
      },

      // ─── BIG BEN – PEDESTAL CUADRADO ──────────────────────────────────────────
      {
        sku: "RIESTER-1478",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "cuadrado", brazalete: "adulto" },
        name: "BIG BEN – PEDESTAL CUADRADO ADULTO",
        description: "Tensiómetro aneroide Riester Big Ben sobre pedestal móvil con ruedas giratorias, manómetro cuadrado de diseño moderno y brazalete estándar para adulto. Pedestal de acero regulable en altura con base de cinco apoyos y ruedas con freno. Combinación de estética contemporánea y movilidad para entornos hospitalarios modernos. || **Modelo:** Big Ben | **Instalación:** Pedestal móvil | **Manómetro:** Cuadrado | **Brazalete:** Adulto | **Ref.:** 1478.",
        price: 1450,
        image: "/images/diagnostico/BIG BEN/1478-CUADRADO-PEDESTAL.png"
      },
      {
        sku: "RIESTER-1478-123",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "cuadrado", brazalete: "adulto-grande" },
        name: "BIG BEN – PEDESTAL CUADRADO ADULTO GRANDE",
        description: "Tensiómetro aneroide Riester Big Ben sobre pedestal móvil con ruedas giratorias, manómetro cuadrado de diseño moderno y brazalete de mayor longitud para adultos con circunferencia de brazo amplia. Pedestal de acero regulable en altura con base de cinco apoyos y ruedas con freno. || **Modelo:** Big Ben | **Instalación:** Pedestal móvil | **Manómetro:** Cuadrado | **Brazalete:** Adulto grande | **Ref.:** 1478-123.",
        price: 1450,
        image: "/images/diagnostico/BIG BEN/1478-CUADRADO-PEDESTAL.png"
      },
      {
        sku: "RIESTER-1478-130",
        attrs: { modelo: "big-ben", instalacion: "pedestal", forma: "cuadrado", brazalete: "pediatrico" },
        name: "BIG BEN – PEDESTAL CUADRADO PEDIÁTRICO",
        description: "Tensiómetro aneroide Riester Big Ben sobre pedestal móvil con ruedas giratorias, manómetro cuadrado de diseño moderno y brazalete pediátrico. Pedestal de acero regulable en altura con base de cinco apoyos y ruedas con freno. Solución móvil de diseño contemporáneo para pediatría hospitalaria. || **Modelo:** Big Ben | **Instalación:** Pedestal móvil | **Manómetro:** Cuadrado | **Brazalete:** Pediátrico | **Ref.:** 1478-130.",
        price: 1450,
        image: "/images/diagnostico/BIG BEN/1478-CUADRADO-PEDESTAL.png"
      }
    ]
  },

  {
    id: "tensiometros-digitales-omron",
    name: "TENSIÓMETROS DIGITALES OMRON",
    type: "Diagnostico clinico",
    description: "Tensiómetros digitales automáticos Omron para el automonitoreo de la presión arterial en el hogar y la consulta. La gama cubre desde el modelo de entrada HEM-7120 hasta el Omron Complete BP7900, el único monitor domiciliario que combina medición de presión arterial con EKG de canal único para detección de fibrilación auricular, taquicardia y bradicardia en una sola medición. Todos sincronizan con la app OMRON Connect vía Bluetooth, excepto el HEM-7120 y HEM-7121 que operan de forma autónoma.",
    image: "/images/diagnostico/CARDS/TENS OMRON.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "hem-7120", label: "HEM-7120" },
          { id: "hem-7121", label: "HEM-7121" },
          { id: "bp5465", label: "BP5465" },
          { id: "bp7900", label: "BP7900" }
        ]
      }
    ],

    variants: [
      {
        sku: "OMRON-HEM-7120",
        attrs: { modelo: "hem-7120" },
        name: "HEM-7120 DE BRAZO",
        description: "Tensiómetro digital de brazo Omron HEM-7120, el modelo de mayor rotación en el mercado peruano por su equilibrio entre precio, precisión y facilidad de uso. Medición automática de presión sistólica, diastólica y frecuencia cardíaca mediante tecnología IntelliSense de inflado inteligente. Detector de latido irregular, guía de ajuste del brazalete y almacenamiento de la última medición. Brazalete universal de 22 a 42 cm. Funciona con 4 pilas AA. || **Método:** Oscilométrico | **Brazalete:** Universal 22–42 cm | **Memoria:** 1 lectura | **Detección:** Latido irregular | **Alimentación:** 4 pilas AA.",
        price: 200,
        image: "/images/diagnostico/TENSIOMETROS OMROM/7120.png"
      },
      {
        sku: "OMRON-HEM-7121",
        attrs: { modelo: "hem-7121" },
        name: "HEM-7121 DE BRAZO CON MEMORIA",
        description: "Tensiómetro digital de brazo Omron HEM-7121, versión mejorada del HEM-7120 con memoria ampliada para seguimiento continuo de la presión arterial. Medición automática con tecnología IntelliSense, detector de latido irregular, indicador de nivel de presión arterial con código de colores y almacenamiento de hasta 60 lecturas con fecha y hora. Guía de ajuste del brazalete LED. Brazalete universal de 22 a 42 cm. Funciona con 4 pilas AA. || **Método:** Oscilométrico | **Brazalete:** Universal 22–42 cm | **Memoria:** 60 lecturas con fecha y hora | **Detección:** Latido irregular | **Indicador:** Código de colores de nivel de presión.",
        price: 300,
        image: "/images/diagnostico/TENSIOMETROS OMROM/7121.png"
      },
      {
        sku: "OMRON-BP5465",
        attrs: { modelo: "bp5465" },
        name: "PLATINUM BP5465 – AFIB + BLUETOOTH",
        description: "Tensiómetro con detección de Fibrilación Auricular (AFib) en cada medición que identifica automáticamente posibles irregularidades del ritmo cardíaco. Incorpora TruRead con 3 lecturas automáticas y promedio, indicador de presión matutina (High Morning Average), pantalla dual retroiluminada, 200 memorias para 2 usuarios y conectividad Bluetooth con app OMRON Connect compatible con Apple Health y Google Fit. Incluye adaptador de corriente y estuche. Garantía 6 años. || Método: Oscilométrico | Detección: AFib + Latido irregular | Brazalete: D-Ring 22–42 cm | Tecnología: TruRead + AFib Screening.",
        price: 680,
        image: "/images/diagnostico/TENSIOMETROS OMROM/BP5465.png"
      },
      {
        sku: "OMRON-BP7900",
        attrs: { modelo: "bp7900" },
        name: "BP7900 – PRESIÓN ARTERIAL + EKG",
        description: "Omron Complete BP7900, monitor domiciliario avanzado que integra medición de presión arterial y EKG de canal único en un solo equipo. Permite tres modos de uso: presión, EKG o ambos simultáneamente. El EKG se analiza automáticamente en la app OMRON Connect para detectar fibrilación auricular, taquicardia, bradicardia y ritmo sinusal, con validación por electrofisiólogos cardíacos. Recomendado para pacientes con arritmia o alto riesgo cardiovascular. Incluye brazalete D-Ring de 22 a 42 cm y conectividad Bluetooth para registro y seguimiento. || Modalidades: PA, EKG o simultáneo | Método PA: Oscilométrico | Brazalete: D-Ring 22–42 cm | Conectividad: Bluetooth + OMRON Connect.",
        price: 875,
        images: ["/images/diagnostico/TENSIOMETROS OMROM/BP7900.png", "/images/diagnostico/TENSIOMETROS OMROM/BP7900_2.png"]
      }
    ]
  },
  {
    id: "estetoscopios",
    name: "ESTETOSCOPIOS",
    type: "Diagnostico clinico",
    description: "Estetoscopios de uso clínico profesional disponibles en dos marcas de referencia mundial: Riester Duplex (aluminio e inoxidable, en tamaños adulto, pediátrico y neonatal) y 3M Littmann Classic III (cabezal inox con membrana de aluminio, uso universal en adulto y pediátrico). La línea Riester ofrece doble campana con membrana intercambiable; la línea Littmann incorpora tecnología de doble frecuencia para auscultación de sonidos de alta y baja frecuencia sin cambiar de lado el cabezal.",
    image: "/images/diagnostico/CARDS/ESTETOSCOPIOS.png",

    priceRange: {
      min: 180,
      max: 690
    },

    attributeOrder: ["marca", "modelo", "tamaño", "color"],

    attributes: [
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "riester", label: "RIESTER DUPLEX" },
          { id: "littmann", label: "3M LITTMANN" }
        ]
      },
      {
        id: "modelo",
        label: "Material",
        type: "single",
        values: [
          { id: "aluminio", label: "Aluminio" },
          { id: "inox", label: "Inox" },
          { id: "inox-aluminio", label: "Inox con aluminio" }
        ]
      },
      {
        id: "tamaño",
        label: "Tamaño",
        type: "single",
        values: [
          { id: "universal", label: "Universal" },
          { id: "adulto", label: "Adulto" },
          { id: "pediatrico", label: "Pediátrico" },
          { id: "neonatal", label: "Neonatal" }
        ]
      },
      {
        id: "color",
        label: "Color",
        type: "single",
        values: [
          { id: "negro", label: "Negro" },
          { id: "azul", label: "Azul" },
          { id: "gris", label: "Gris" },
          { id: "verde", label: "Verde" },
          { id: "rojo", label: "Rojo" },
          { id: "azul-marino", label: "Azul marino" },
          { id: "azul-cielo", label: "Azul cielo" },
          { id: "azul-caribe", label: "Azul caribe" },
          { id: "borgona", label: "Borgoña" },
          { id: "ciruela", label: "Ciruela" },
          { id: "lavanda", label: "Lavanda" },
          { id: "rosa-perla", label: "Rosa perla" },
          { id: "rosa-champan", label: "Rosa champán" },
          { id: "frambuesa", label: "Frambuesa" },
          { id: "verde-lima", label: "Verde lima" },
          { id: "turquesa", label: "Turquesa" }
        ]
      }
    ],

    attributeRules: {
      // Marca → Material
      "riester": { modelo: ["aluminio", "inox"] },
      "littmann": { modelo: ["inox-aluminio"] },

      // Material → Tamaño
      "aluminio": { tamaño: ["adulto", "pediatrico", "neonatal"] },
      "inox": { tamaño: ["adulto", "pediatrico", "neonatal"] },
      "inox-aluminio": { tamaño: ["universal"] },

      // Material → Color
      "aluminio": { color: ["negro", "azul", "gris"] },
      "inox": { color: ["negro", "azul", "verde", "rojo"] },
      "inox-aluminio": { color: ["negro", "azul-marino", "azul-cielo", "azul-caribe", "borgona", "ciruela", "lavanda", "rosa-perla", "rosa-champan", "frambuesa", "verde-lima", "turquesa"] }
    },

    variants: [

      // ─── RIESTER DUPLEX – ALUMINIO – ADULTO ───────────────────────────────────
      {
        sku: "RIESTER-4001-ADULTO-NEGRO",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "adulto", color: "negro" },
        name: "DUPLEX ALUMINIO – ADULTO NEGRO",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de aluminio en color negro para uso en adultos. Membrana de alta sensibilidad intercambiable con campana libre para auscultación de sonidos de baja frecuencia. Olivas suaves ergonómicas incluidas. Membrana de repuesto en caja. || **Material:** Aluminio | **Tamaño:** Adulto | **Color:** Negro | **Ref.:** 4001.",
        price: 180,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4001.png"
      },
      {
        sku: "RIESTER-4001-ADULTO-AZUL",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "adulto", color: "azul" },
        name: "DUPLEX ALUMINIO – ADULTO AZUL",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de aluminio en color azul para uso en adultos. Membrana de alta sensibilidad intercambiable con campana libre para auscultación de sonidos de baja frecuencia. Olivas suaves ergonómicas incluidas. Membrana de repuesto en caja. || **Material:** Aluminio | **Tamaño:** Adulto | **Color:** Azul | **Ref.:** 4001.",
        price: 180,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4001.png"
      },
      {
        sku: "RIESTER-4001-ADULTO-GRIS",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "adulto", color: "gris" },
        name: "DUPLEX ALUMINIO – ADULTO GRIS",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de aluminio en color gris para uso en adultos. Membrana de alta sensibilidad intercambiable con campana libre para auscultación de sonidos de baja frecuencia. Olivas suaves ergonómicas incluidas. Membrana de repuesto en caja. || **Material:** Aluminio | **Tamaño:** Adulto | **Color:** Gris | **Ref.:** 4001.",
        price: 180,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4001.png"
      },

      // ─── RIESTER DUPLEX – ALUMINIO – PEDIÁTRICO ───────────────────────────────
      {
        sku: "RIESTER-4041-PEDIATRICO-NEGRO",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "pediatrico", color: "negro" },
        name: "DUPLEX ALUMINIO – PEDIÁTRICO NEGRO",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de aluminio reducido para uso pediátrico en color negro. Campana y membrana de menor diámetro adaptadas a la anatomía infantil para mayor precisión en la auscultación pediátrica. Olivas suaves ergonómicas y membrana de repuesto incluidas. || **Material:** Aluminio | **Tamaño:** Pediátrico | **Color:** Negro | **Ref.:** 4041.",
        price: 180,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4041.png"
      },
      {
        sku: "RIESTER-4041-PEDIATRICO-AZUL",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "pediatrico", color: "azul" },
        name: "DUPLEX ALUMINIO – PEDIÁTRICO AZUL",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de aluminio reducido para uso pediátrico en color azul. Campana y membrana de menor diámetro adaptadas a la anatomía infantil para mayor precisión en la auscultación pediátrica. Olivas suaves ergonómicas y membrana de repuesto incluidas. || **Material:** Aluminio | **Tamaño:** Pediátrico | **Color:** Azul | **Ref.:** 4041.",
        price: 180,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4041.png"
      },
      {
        sku: "RIESTER-4041-PEDIATRICO-GRIS",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "pediatrico", color: "gris" },
        name: "DUPLEX ALUMINIO – PEDIÁTRICO GRIS",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de aluminio reducido para uso pediátrico en color gris. Campana y membrana de menor diámetro adaptadas a la anatomía infantil para mayor precisión en la auscultación pediátrica. Olivas suaves ergonómicas y membrana de repuesto incluidas. || **Material:** Aluminio | **Tamaño:** Pediátrico | **Color:** Gris | **Ref.:** 4041.",
        price: 180,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4041.png"
      },

      // ─── RIESTER DUPLEX – ALUMINIO – NEONATAL ────────────────────────────────
      {
        sku: "RIESTER-4051-NEONATAL-NEGRO",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "neonatal", color: "negro" },
        name: "DUPLEX ALUMINIO – NEONATAL NEGRO",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de aluminio de diámetro mínimo para uso neonatal en color negro. Diseñado para la auscultación cardíaca y pulmonar en recién nacidos y prematuros con máxima sensibilidad acústica. Olivas suaves y membrana de repuesto incluidas. || **Material:** Aluminio | **Tamaño:** Neonatal | **Color:** Negro | **Ref.:** 4051.",
        price: 180,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4051.png"
      },
      {
        sku: "RIESTER-4051-NEONATAL-AZUL",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "neonatal", color: "azul" },
        name: "DUPLEX ALUMINIO – NEONATAL AZUL",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de aluminio de diámetro mínimo para uso neonatal en color azul. Diseñado para la auscultación cardíaca y pulmonar en recién nacidos y prematuros con máxima sensibilidad acústica. Olivas suaves y membrana de repuesto incluidas. || **Material:** Aluminio | **Tamaño:** Neonatal | **Color:** Azul | **Ref.:** 4051.",
        price: 180,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4051.png"
      },
      {
        sku: "RIESTER-4051-NEONATAL-GRIS",
        attrs: { marca: "riester", modelo: "aluminio", tamaño: "neonatal", color: "gris" },
        name: "DUPLEX ALUMINIO – NEONATAL GRIS",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de aluminio de diámetro mínimo para uso neonatal en color gris. Diseñado para la auscultación cardíaca y pulmonar en recién nacidos y prematuros con máxima sensibilidad acústica. Olivas suaves y membrana de repuesto incluidas. || **Material:** Aluminio | **Tamaño:** Neonatal | **Color:** Gris | **Ref.:** 4051.",
        price: 180,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4051.png"
      },

      // ─── RIESTER DUPLEX – INOX – ADULTO ──────────────────────────────────────
      {
        sku: "RIESTER-4210-ADULTO-NEGRO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "adulto", color: "negro" },
        name: "DUPLEX INOX – ADULTO NEGRO",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable en color negro para uso en adultos. Mayor durabilidad y resistencia a la corrosión respecto al modelo de aluminio, con idéntica calidad acústica. Membrana de alta sensibilidad intercambiable, campana libre y olivas suaves ergonómicas. Membrana de repuesto incluida. || **Material:** Acero inoxidable | **Tamaño:** Adulto | **Color:** Negro | **Ref.:** 4210.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4210.png"
      },
      {
        sku: "RIESTER-4210-ADULTO-AZUL",
        attrs: { marca: "riester", modelo: "inox", tamaño: "adulto", color: "azul" },
        name: "DUPLEX INOX – ADULTO AZUL",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable en color azul para uso en adultos. Mayor durabilidad y resistencia a la corrosión respecto al modelo de aluminio, con idéntica calidad acústica. Membrana de alta sensibilidad intercambiable, campana libre y olivas suaves ergonómicas. Membrana de repuesto incluida. || **Material:** Acero inoxidable | **Tamaño:** Adulto | **Color:** Azul | **Ref.:** 4210.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4210.png"
      },
      {
        sku: "RIESTER-4210-ADULTO-VERDE",
        attrs: { marca: "riester", modelo: "inox", tamaño: "adulto", color: "verde" },
        name: "DUPLEX INOX – ADULTO VERDE",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable en color verde para uso en adultos. Mayor durabilidad y resistencia a la corrosión respecto al modelo de aluminio, con idéntica calidad acústica. Membrana de alta sensibilidad intercambiable, campana libre y olivas suaves ergonómicas. Membrana de repuesto incluida. || **Material:** Acero inoxidable | **Tamaño:** Adulto | **Color:** Verde | **Ref.:** 4210.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4210.png"
      },
      {
        sku: "RIESTER-4210-ADULTO-ROJO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "adulto", color: "rojo" },
        name: "DUPLEX INOX – ADULTO ROJO",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable en color rojo para uso en adultos. Mayor durabilidad y resistencia a la corrosión respecto al modelo de aluminio, con idéntica calidad acústica. Membrana de alta sensibilidad intercambiable, campana libre y olivas suaves ergonómicas. Membrana de repuesto incluida. || **Material:** Acero inoxidable | **Tamaño:** Adulto | **Color:** Rojo | **Ref.:** 4210.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4210.png"
      },

      // ─── RIESTER DUPLEX – INOX – PEDIÁTRICO ──────────────────────────────────
      {
        sku: "RIESTER-4220-PEDIATRICO-NEGRO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "pediatrico", color: "negro" },
        name: "DUPLEX INOX – PEDIÁTRICO NEGRO",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable reducido para uso pediátrico en color negro. Construcción inoxidable de mayor durabilidad con campana y membrana de diámetro adaptado a la anatomía infantil. Olivas suaves ergonómicas y membrana de repuesto incluidas. || **Material:** Acero inoxidable | **Tamaño:** Pediátrico | **Color:** Negro | **Ref.:** 4220.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4220.png"
      },
      {
        sku: "RIESTER-4220-PEDIATRICO-AZUL",
        attrs: { marca: "riester", modelo: "inox", tamaño: "pediatrico", color: "azul" },
        name: "DUPLEX INOX – PEDIÁTRICO AZUL",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable reducido para uso pediátrico en color azul. Construcción inoxidable de mayor durabilidad con campana y membrana de diámetro adaptado a la anatomía infantil. Olivas suaves ergonómicas y membrana de repuesto incluidas. || **Material:** Acero inoxidable | **Tamaño:** Pediátrico | **Color:** Azul | **Ref.:** 4220.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4220.png"
      },
      {
        sku: "RIESTER-4220-PEDIATRICO-VERDE",
        attrs: { marca: "riester", modelo: "inox", tamaño: "pediatrico", color: "verde" },
        name: "DUPLEX INOX – PEDIÁTRICO VERDE",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable reducido para uso pediátrico en color verde. Construcción inoxidable de mayor durabilidad con campana y membrana de diámetro adaptado a la anatomía infantil. Olivas suaves ergonómicas y membrana de repuesto incluidas. || **Material:** Acero inoxidable | **Tamaño:** Pediátrico | **Color:** Verde | **Ref.:** 4220.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4220.png"
      },
      {
        sku: "RIESTER-4220-PEDIATRICO-ROJO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "pediatrico", color: "rojo" },
        name: "DUPLEX INOX – PEDIÁTRICO ROJO",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable reducido para uso pediátrico en color rojo. Construcción inoxidable de mayor durabilidad con campana y membrana de diámetro adaptado a la anatomía infantil. Olivas suaves ergonómicas y membrana de repuesto incluidas. || **Material:** Acero inoxidable | **Tamaño:** Pediátrico | **Color:** Rojo | **Ref.:** 4220.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4220.png"
      },

      // ─── RIESTER DUPLEX – INOX – NEONATAL ────────────────────────────────────
      {
        sku: "RIESTER-4230-NEONATAL-NEGRO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "neonatal", color: "negro" },
        name: "DUPLEX INOX – NEONATAL NEGRO",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable de diámetro mínimo para uso neonatal en color negro. Construcción inoxidable con máxima sensibilidad acústica para auscultación cardíaca y pulmonar en recién nacidos y prematuros. Olivas suaves y membrana de repuesto incluidas. || **Material:** Acero inoxidable | **Tamaño:** Neonatal | **Color:** Negro | **Ref.:** 4230.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4230.png"
      },
      {
        sku: "RIESTER-4230-NEONATAL-AZUL",
        attrs: { marca: "riester", modelo: "inox", tamaño: "neonatal", color: "azul" },
        name: "DUPLEX INOX – NEONATAL AZUL",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable de diámetro mínimo para uso neonatal en color azul. Construcción inoxidable con máxima sensibilidad acústica para auscultación cardíaca y pulmonar en recién nacidos y prematuros. Olivas suaves y membrana de repuesto incluidas. || **Material:** Acero inoxidable | **Tamaño:** Neonatal | **Color:** Azul | **Ref.:** 4230.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4230.png"
      },
      {
        sku: "RIESTER-4230-NEONATAL-VERDE",
        attrs: { marca: "riester", modelo: "inox", tamaño: "neonatal", color: "verde" },
        name: "DUPLEX INOX – NEONATAL VERDE",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable de diámetro mínimo para uso neonatal en color verde. Construcción inoxidable con máxima sensibilidad acústica para auscultación cardíaca y pulmonar en recién nacidos y prematuros. Olivas suaves y membrana de repuesto incluidas. || **Material:** Acero inoxidable | **Tamaño:** Neonatal | **Color:** Verde | **Ref.:** 4230.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4230.png"
      },
      {
        sku: "RIESTER-4230-NEONATAL-ROJO",
        attrs: { marca: "riester", modelo: "inox", tamaño: "neonatal", color: "rojo" },
        name: "DUPLEX INOX – NEONATAL ROJO",
        description: "Estetoscopio Riester Duplex de doble campana con cabezal de acero inoxidable de diámetro mínimo para uso neonatal en color rojo. Construcción inoxidable con máxima sensibilidad acústica para auscultación cardíaca y pulmonar en recién nacidos y prematuros. Olivas suaves y membrana de repuesto incluidas. || **Material:** Acero inoxidable | **Tamaño:** Neonatal | **Color:** Rojo | **Ref.:** 4230.",
        price: 290,
        image: "/images/diagnostico/ESTETOSCOPIOS RIESTER/4230.png"
      },
      // ─── 3M LITTMANN CLASSIC III ──────────────────────────────────────────────
      {
        sku: "LITT-CL3-NEGRO",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "negro" },
        name: "LITTMANN CLASSIC III – NEGRO",
        description: "Estetoscopio 3M Littmann Classic III en color negro con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Negro.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-NEGRO.png"
      },
      {
        sku: "LITT-CL3-AZUL-MARINO",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "azul-marino" },
        name: "LITTMANN CLASSIC III – AZUL MARINO",
        description: "Estetoscopio 3M Littmann Classic III en color azul marino con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Azul marino.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-AZULMARINO.png"
      },
      {
        sku: "LITT-CL3-AZUL-CIELO",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "azul-cielo" },
        name: "LITTMANN CLASSIC III – AZUL CIELO",
        description: "Estetoscopio 3M Littmann Classic III en color azul cielo con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Azul cielo.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-AZULCIELO.png"
      },
      {
        sku: "LITT-CL3-AZUL-CARIBE",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "azul-caribe" },
        name: "LITTMANN CLASSIC III – AZUL CARIBE",
        description: "Estetoscopio 3M Littmann Classic III en color azul caribe con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Azul caribe.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-CARIBE.png"
      },
      {
        sku: "LITT-CL3-BORGONA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "borgona" },
        name: "LITTMANN CLASSIC III – BORGOÑA",
        description: "Estetoscopio 3M Littmann Classic III en color borgoña con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Borgoña.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-BORGONA.png"
      },
      {
        sku: "LITT-CL3-CIRUELA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "ciruela" },
        name: "LITTMANN CLASSIC III – CIRUELA",
        description: "Estetoscopio 3M Littmann Classic III en color ciruela con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Ciruela.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-CIRUELA.png"
      },
      {
        sku: "LITT-CL3-LAVANDA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "lavanda" },
        name: "LITTMANN CLASSIC III – LAVANDA",
        description: "Estetoscopio 3M Littmann Classic III en color lavanda con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Lavanda.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-VIOLETASUAVE.png"
      },
      {
        sku: "LITT-CL3-ROSA-PERLA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "rosa-perla" },
        name: "LITTMANN CLASSIC III – ROSA PERLA",
        description: "Estetoscopio 3M Littmann Classic III en color rosa perla con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Rosa perla.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSAPERLA.png"
      },
      {
        sku: "LITT-CL3-ROSA-CHAMPAN",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "rosa-champan" },
        name: "LITTMANN CLASSIC III – ROSA CHAMPÁN",
        description: "Estetoscopio 3M Littmann Classic III en color rosa champán con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Rosa champán.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSACHAMPAGNE.png"
      },
      {
        sku: "LITT-CL3-FRAMBUESA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "frambuesa" },
        name: "LITTMANN CLASSIC III – FRAMBUESA",
        description: "Estetoscopio 3M Littmann Classic III en color frambuesa con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Frambuesa.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSAINTENSO.png"
      },
      {
        sku: "LITT-CL3-VERDE-LIMA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "verde-lima" },
        name: "LITTMANN CLASSIC III – VERDE LIMA",
        description: "Estetoscopio 3M Littmann Classic III en color verde lima con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Verde lima.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-AMARILLONEON.png"
      },
      {
        sku: "LITT-CL3-TURQUESA",
        attrs: { marca: "littmann", modelo: "inox-aluminio", tamaño: "universal", color: "turquesa" },
        name: "LITTMANN CLASSIC III – TURQUESA",
        description: "Estetoscopio 3M Littmann Classic III en color turquesa con cabezal de acero inoxidable y membrana de aluminio de doble frecuencia. Permite auscultar sonidos de alta y baja frecuencia presionando el cabezal con mayor o menor fuerza, sin necesidad de girarlo. Tubo de PVC de alta densidad para transmisión acústica superior. Apto para adulto y pediátrico con membrana reversible. || **Material:** Inox + aluminio | **Tecnología:** Doble frecuencia | **Color:** Turquesa.",
        price: 690,
        image: "/images/diagnostico/LITTMAN 3M/LITTMAN-TURQUESA.png"
      }
    ]
  },

  {
    "id": "riester-ri-pen",
    "name": "LINTERNA RIESTER RI-PEN",
    "description":
      "Linterna diagnóstica tipo lapicero diseñada para la evaluación clínica de pupilas y exploración general en entornos médicos. El ri-pen de Riester ofrece una iluminación LED potente, homogénea y libre de radiación UV, validada fotobiológicamente para el examen pupilar según la norma EN 62471. Incorpora un medidor de pupilas de 2 mm a 9 mm y una regla integrada de 8 cm, convirtiéndola en una herramienta práctica y precisa para consultorios, hospitales y servicios de urgencias. Su carcasa de aluminio con clip metálico garantiza durabilidad y portabilidad en el uso diario.",
    brand: "RIESTER",
    type: "Diagnostico clinico",

    image: "/images/diagnostico/CARDS/LINTERNAS.png",


    // =========================
    // ATTRIBUTES (SOLO SELECTORES)
    // =========================
    "attributes": [
      {
        "id": "color",
        "label": "Color",
        "type": "single",
        "values": [
          { "id": "negro", "label": "Negro" },
          { "id": "plateado", "label": "Plateado" },
          { "id": "rojo", "label": "Rojo" },
          { "id": "azul", "label": "Azul" },
          { "id": "purpura", "label": "Púrpura" },
          { "id": "verde", "label": "Verde" }
        ]
      }
    ],

    // =========================
    // VARIANTS (SKU-BASED)
    // =========================
    "variants": [
      {
        "sku": "RIE-RIPEN-5075-526",
        "attrs": { "color": "negro" },
        "price": 80,
        "image": "/images/diagnostico/RI-PEN/BLACK 5075-526.png"
      },
      {
        "sku": "RIE-RIPEN-5074-526",
        "attrs": { "color": "plateado" },
        "price": 80,
        "image": "/images/diagnostico/RI-PEN/SILVER 5074-526.png"
      },
      {
        "sku": "RIE-RIPEN-5077-526",
        "attrs": { "color": "rojo" },
        "price": 80,
        "image": "/images/diagnostico/RI-PEN/RED 5077-526.png"
      },
      {
        "sku": "RIE-RIPEN-5071-526",
        "attrs": { "color": "azul" },
        "price": 80,
        "image": "/images/diagnostico/RI-PEN/BLUE 5071-526.png"
      },
      {
        "sku": "RIE-RIPEN-5078-526",
        "attrs": { "color": "purpura" },
        "price": 80,
        "image": "/images/diagnostico/RI-PEN/PURPLE 5078-526.png"
      },
      {
        "sku": "RIE-RIPEN-5072-526",
        "attrs": { "color": "verde" },
        "price": 80,
        "image": "/images/diagnostico/RI-PEN/GREEN 5072-526.png"
      }
    ],

  },

  {
    id: "riester-otoscopios",
    name: "OTOSCOPIOS RIESTER",
    type: "Exploración ORL y Visual",
    description: "Otoscopios Riester diseñados para la exploración del conducto auditivo externo y la evaluación clínica ORL. Disponibles en cuatro familias: e-scope® (pocket de alta gama), ri-mini® (compacto de entrada), ri-scope® L2 (clínico estándar) y ri-scope® L3 (clínico avanzado con óptica superior). Cada familia ofrece distintas tecnologías de iluminación por fibra óptica LED o xenón, adaptándose a diferentes niveles de exigencia clínica.",
    image: "/images/diagnostico/CARDS/OTOSCOPIOS.png",

    attributeOrder: ["familia", "iluminacion"],

    attributes: [
      {
        id: "familia",
        label: "Familia",
        type: "single",
        values: [
          { id: "e-scope", label: "e-scope®" },
          { id: "ri-mini", label: "ri-mini®" },
          { id: "ri-scope-l2", label: "ri-scope® L2" },
          { id: "ri-scope-l3", label: "ri-scope® L3" }
        ]
      },
      {
        id: "iluminacion",
        label: "Iluminación",
        type: "single",
        values: [
          { id: "fo-led-3-7v", label: "F.O. LED 3.7V" },
          { id: "fo-led-3-5v", label: "F.O. LED 3.5V" },
          { id: "fo-xenon-2-5v", label: "F.O. Xenón 2.5V" },
          { id: "fo-xenon-3-5v", label: "F.O. Xenón 3.5V" }
        ]
      }
    ],

    attributeRules: {
      "e-scope": { iluminacion: ["fo-led-3-7v", "fo-xenon-2-5v"] },
      "ri-mini": { iluminacion: ["fo-xenon-2-5v"] },
      "ri-scope-l2": { iluminacion: ["fo-led-3-5v", "fo-xenon-2-5v", "fo-xenon-3-5v"] },
      "ri-scope-l3": { iluminacion: ["fo-led-3-5v", "fo-xenon-2-5v", "fo-xenon-3-5v"] }
    },

    variants: [
      // ─── E-SCOPE ──────────────────────────────────────────────────────────────
      {
        sku: "2111-203",
        attrs: { familia: "e-scope", iluminacion: "fo-led-3-7v" },
        name: "E-SCOPE® – F.O. LED 3.7V",
        description: "Otoscopio Riester e-scope® con iluminación de fibra óptica LED 3.7V. Diseño pocket de alta gama con óptica de precisión y luz LED de larga duración para exploración del conducto auditivo externo. Mango de baterías AA incluido, cabezal intercambiable compatible con el sistema Riester. Espéculos desechables incluidos. Ideal para consultorios, urgencias y uso clínico diario intensivo. || **Familia:** e-scope® | **Iluminación:** F.O. LED 3.7V | **Modelo: 2111-203**.",
        price: 1,
        image: "/images/diagnostico/RIESTER-OTOSCOPIOS/E-SCOPE-CAJA.png"
      },
      {
        sku: "2111-203-XE",
        attrs: { familia: "e-scope", iluminacion: "fo-xenon-2-5v" },
        name: "E-SCOPE® – F.O. XENÓN 2.5V",
        description: "Otoscopio Riester e-scope® con iluminación de fibra óptica Xenón 2.5V. Diseño pocket de alta gama con luz xenón de alta temperatura de color para una visualización más natural y brillante del conducto auditivo. Mango de baterías AA incluido, cabezal intercambiable compatible con el sistema Riester. Espéculos desechables incluidos. || **Familia:** e-scope® | **Iluminación:** F.O. Xenón 2.5V. | **Modelo: 2111-203-XE**",
        price: 1,
        image: "/images/diagnostico/RIESTER-OTOSCOPIOS/E-SCOPE-CAJA.png"
      },

      // ─── RI-MINI ──────────────────────────────────────────────────────────────
      {
        sku: "3010",
        attrs: { familia: "ri-mini", iluminacion: "fo-xenon-2-5v" },
        name: "RI-MINI® – F.O. XENÓN 2.5V",
        description: "Otoscopio Riester ri-mini® con iluminación de fibra óptica Xenón 2.5V (ref. 3010). Modelo de entrada compacto y ligero, ideal para médicos en formación, visitas domiciliarias y consultorios de bajo volumen. Óptica de fibra óptica para iluminación homogénea del conducto auditivo. Funciona con 2 pilas AA. Espéculos desechables incluidos. || **Familia:** ri-mini® | **Iluminación:** F.O. Xenón 2.5V | **Ref.:** 3010.",
        price: 1,
        image: "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-MINI-CAJA.png"
      },

      // ─── RI-SCOPE L2 ──────────────────────────────────────────────────────────
      {
        sku: "10565",
        attrs: { familia: "ri-scope-l2", iluminacion: "fo-led-3-5v" },
        name: "RI-SCOPE® L2 – F.O. LED 3.5V",
        description: "Otoscopio Riester ri-scope® L2 con iluminación de fibra óptica LED 3.5V (ref. 10565). Equipo clínico estándar de gama media-alta con óptica de alta definición y luz LED de larga duración. Compatible con mangos recargables y de baterías Riester 3.5V. Incluye espéculos desechables y cabezal intercambiable. Referente en consultorios de medicina general, pediatría y ORL. || **Familia:** ri-scope® L2 | **Iluminación:** F.O. LED 3.5V | **Ref.:** 10565.",
        price: 1,
        image: "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      },
      {
        sku: "10582",
        attrs: { familia: "ri-scope-l2", iluminacion: "fo-xenon-2-5v" },
        name: "RI-SCOPE® L2 – F.O. XENÓN 2.5V",
        description: "Otoscopio Riester ri-scope® L2 con iluminación de fibra óptica Xenón 2.5V (ref. 10582). Equipo clínico estándar con luz xenón de alta temperatura de color para visualización más natural del conducto auditivo. Compatible con mangos Riester 2.5V. Incluye espéculos desechables y cabezal intercambiable. || **Familia:** ri-scope® L2 | **Iluminación:** F.O. Xenón 2.5V | **Ref.:** 10582.",
        price: 1,
        image: "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      },
      {
        sku: "10580",
        attrs: { familia: "ri-scope-l2", iluminacion: "fo-xenon-3-5v" },
        name: "RI-SCOPE® L2 – F.O. XENÓN 3.5V",
        description: "Otoscopio Riester ri-scope® L2 con iluminación de fibra óptica Xenón 3.5V (ref. 10580). Equipo clínico estándar con luz xenón de mayor voltaje para mayor luminosidad en la exploración del conducto auditivo. Compatible con mangos Riester 3.5V recargables o de baterías. Incluye espéculos desechables y cabezal intercambiable. || **Familia:** ri-scope® L2 | **Iluminación:** F.O. Xenón 3.5V | **Ref.:** 10580.",
        price: 1,
        image: "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      },

      // ─── RI-SCOPE L3 ──────────────────────────────────────────────────────────
      {
        sku: "10567",
        attrs: { familia: "ri-scope-l3", iluminacion: "fo-led-3-5v" },
        name: "RI-SCOPE® L3 – F.O. LED 3.5V",
        description: "Otoscopio Riester ri-scope® L3 con iluminación de fibra óptica LED 3.5V (ref. 10567). Equipo clínico avanzado de gama alta con óptica superior de mayor campo visual y definición que el L2, ideal para ORL y medicina de alta complejidad. Compatible con mangos recargables Riester 3.5V. Incluye espéculos desechables y cabezal intercambiable de precisión. || **Familia:** ri-scope® L3 | **Iluminación:** F.O. LED 3.5V | **Ref.:** 10567.",
        price: 1,
        image: "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      },
      {
        sku: "10583",
        attrs: { familia: "ri-scope-l3", iluminacion: "fo-xenon-2-5v" },
        name: "RI-SCOPE® L3 – F.O. XENÓN 2.5V",
        description: "Otoscopio Riester ri-scope® L3 con iluminación de fibra óptica Xenón 2.5V (ref. 10583). Equipo clínico avanzado de gama alta con óptica superior y luz xenón de alta temperatura de color para exploración ORL de precisión. Compatible con mangos Riester 2.5V. Incluye espéculos desechables y cabezal intercambiable. || **Familia:** ri-scope® L3 | **Iluminación:** F.O. Xenón 2.5V | **Ref.:** 10583.",
        price: 1,
        image: "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      },
      {
        sku: "10581",
        attrs: { familia: "ri-scope-l3", iluminacion: "fo-xenon-3-5v" },
        name: "RI-SCOPE® L3 – F.O. XENÓN 3.5V",
        description: "Otoscopio Riester ri-scope® L3 con iluminación de fibra óptica Xenón 3.5V (ref. 10581). Versión de mayor luminosidad de la gama alta Riester, con óptica L3 de campo ampliado y luz xenón 3.5V para exploración ORL exigente en hospitales y servicios de especialidad. Compatible con mangos recargables Riester 3.5V. || **Familia:** ri-scope® L3 | **Iluminación:** F.O. Xenón 3.5V | **Ref.:** 10581.",
        price: 1,
        image: "/images/diagnostico/RIESTER-OTOSCOPIOS/RI-SCOPE-L2-CAJA.png"
      }
    ]
  },
  {
    id: "termometros",
    name: "TERMÓMETROS",
    type: "Diagnostico clinico",

    image: "/images/diagnostico/CARDS/TERMOMETROS.png",

    attributeOrder: ["tipo-medicion", "marca"],

    priceRange: {
      min: 40,
      max: 1000
    },

    attributes: [
      {
        id: "tipo-medicion",
        label: "Tipo de medición",
        type: "single",
        values: [
          { id: "contacto", label: "De contacto" },
          { id: "infrarrojo", label: "Infrarrojo" },
          { id: "sonda", label: "Sonda" }
        ]
      },
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "riester", label: "RIESTER", visibleWhen: { "tipo-medicion": ["digital"] } },
          { id: "omron", label: "OMRON", visibleWhen: { "tipo-medicion": ["digital"] } },
          { id: "beurer", label: "BEURER", visibleWhen: { "tipo-medicion": ["digital"] } },
          { id: "contec", label: "CONTEC", visibleWhen: { "tipo-medicion": ["infrarrojo"] } },
          { id: "deltatrak", label: "DELTATRAK", visibleWhen: { "tipo-medicion": ["sonda"] } },
          { id: "thermapen", label: "THERMAPEN", visibleWhen: { "tipo-medicion": ["sonda"] } }
        ]
      }
    ],

    variants: [
      // ======================
      // DIGITAL
      // ======================
      {
        sku: "RIESTER-1851",
        attrs: { "tipo-medicion": "contacto", marca: "riester" },
        name: "RIESTER RI-DIGITAL ",
        description: "Termómetro digital de alta precisión para medición oral, axilar y rectal. Pantalla LCD clara, memoria de última lectura y apagado automático. || **Modelo: 1850**",
        brand: "RIESTER",
        type: "termometro",
        price: 70,
        images: [
          "/images/diagnostico/RI-DIGITAL/1851.png"
        ]
      },
      {
        sku: "OMRON-246LA",
        attrs: { "tipo-medicion": "contacto", marca: "omron" },
        name: "OMRON 246LA",
        description: "Termómetro digital compacto y preciso para uso oral, axilar y rectal. Lectura rápida en 60 segundos con señal acústica de finalización.",
        brand: "OMRON",
        type: "termometro",
        price: 60,
        images: [
          "/images/diagnostico/OMRON TERMO/246.png"
        ]
      },
      {
        sku: "BEURER-FT90",
        attrs: { "tipo-medicion": "infrarrojo", marca: "beurer" },
        name: "BEURER FT-90",
        description: "Termómetro digital de alta gama con pantalla retroiluminada y medición rápida. Incluye estuche protector y punta flexible para mayor comodidad.",
        brand: "BEURER",
        type: "termometro",
        price: 200,
        images: [
          "/images/diagnostico/BEURER FT90/FT90.png"
        ]
      },


      {
        sku: "CONTEC-TP500",
        attrs: { "tipo-medicion": "infrarrojo", marca: "contec" },
        name: "CONTEC TP500",
        description: "Termómetro infrarrojo digital CONTEC TP500 para medición rápida y sin contacto de la temperatura corporal. Ideal para uso clínico, domiciliario e institucional, ofrece lectura instantánea, pantalla digital clara y operación sencilla.",
        brand: "CONTEC",
        type: "termometro",
        price: 80,
        images: [
          "/images/diagnostico/CONTEC TP500/TP500.png"
        ]
      },

      // ======================
      // SONDA
      // ======================
      {
        sku: "DELTATRAK-15051",
        attrs: { "tipo-medicion": "sonda", marca: "deltatrak" },
        name: "DeltaTrak 15051",
        description: "Termómetro de sonda plegable impermeable DeltaTrak 15051, ideal para medición rápida y precisa de temperaturas internas en alimentos. Cuenta con sonda plegable de acero inoxidable ajustable 0°-180° para seguridad y flexibilidad, pantalla LCD de doble escala retroiluminada y funciones de retención, mínimo/máximo y cambio °F/°C. Resistente al agua (IP67), desinfectable y conforme al Código de Alimentos de la FDA 4-203.11, es perfecto para la industria alimentaria y entornos exigentes.",
        brand: "DELTATRAK",
        type: "termometro",
        price: 400,
        images: [
          "/images/diagnostico/DELTATRAK/15051.png"
        ]
      },
      {
        sku: "THERMAPEN-228065",
        attrs: { "tipo-medicion": "sonda", marca: "thermapen" },
        name: "Thermapen IR 228065",
        description: "Thermapen IR, termómetro infrarrojo profesional con sonda plegable diseñado para ofrecer lecturas de temperatura altamente precisas y rápidas. Combina medición sin contacto con sonda retráctil para mayor versatilidad en aplicaciones alimentarias, industriales y médicas. Cuenta con pantalla digital clara, ergonomía premium y respuesta ultrarápida para mediciones confiables en segundos.",
        brand: "THERMAPEN",
        type: "termometro",
        price: 550,
        images: [
          "/images/diagnostico/THERMAPEN/228065.png"
        ]
      }
    ]
  },
  {
    id: "oximetros",
    name: "OXÍMETROS",
    type: "Respiratorio y Circulatorio",
    description: "Oxímetros de pulso para la medición no invasiva de la saturación de oxígeno en sangre (SpO₂) y la frecuencia cardíaca. Disponibles en cuatro categorías según el uso clínico: de dedo portátil (Riester ri-FOX, Beurer PO 60, ChoiceMed, Contec), de sobremesa para uso hospitalario continuo (Nellcor Bedside, Contec CMS60D, Masimo Rad-97, Nonin 9560 Envoy), pediátrico con sonda flexible (Masimo, Nonin) y de muñeca para monitoreo nocturno continuo (Contec CMS50M, Wellue O2Ring). Ideales para uso domiciliario, clínico y hospitalario.",
    image: "/images/diagnostico/CARDS/OXIMETROS.png",

    attributeOrder: ["tipo", "modelo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "dedo", label: "Dedo" },
          { id: "sobremesa", label: "Clínico" },
          { id: "pediatrico", label: "Pediátrico" },
          { id: "muneca", label: "Nocturno" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          // Dedo
          { id: "riester-rifox", label: "Riester" },
          { id: "beurer-po60", label: "Beurer" },
          { id: "choicemed", label: "ChoiceMMed" },
          { id: "contec-dedo", label: "Contec" },
          // Sobremesa
          { id: "nellcor", label: "Nellcor" },
          { id: "contec-cms60d", label: "Contec" },

          // Pediátrico

          { id: "nonin-pediatrico", label: "Nonin" },
          // Muñeca
          { id: "wellue-o2ring", label: "Wellue" }
        ]
      }
    ],

    attributeRules: {
      "dedo": { modelo: ["riester-rifox", "beurer-po60", "choicemed", "contec-dedo"] },
      "sobremesa": { modelo: ["nellcor", "contec-cms60d"] },
      "pediatrico": { modelo: ["nonin-pediatrico"] },
      "muneca": { modelo: ["wellue-o2ring"] }
    },

    variants: [

      // ─── DEDO ─────────────────────────────────────────────────────────────────
      {
        sku: "RIESTER-RIFOX",
        attrs: { tipo: "dedo", modelo: "riester-rifox" },
        name: "RIESTER RI-FOX",
        description: "Diseñado para medición rápida y confiable de **SpO₂ y frecuencia cardíaca** en entornos clínicos y domiciliarios. Permite **visualización clara de parámetros y curva pletismográfica en tiempo real**. Su construcción robusta de **grado médico** y sistema de clip ergonómico permiten una colocación firme para lecturas estables. Cuenta con **apagado automático** para optimización del consumo de batería. || Pantalla: OLED | **Modelo: ri-FOX**",
        price: 450,
        image: "/images/diagnostico/OXIMETROS/RIESTER_RIFOX.png"
      },
      {
        sku: "BEURER-PO60",
        attrs: { tipo: "dedo", modelo: "beurer-po60" },
        name: "BEURER PO60",
        description: "Diseñado para medición confiable de **SpO₂ y frecuencia cardíaca** con registro continuo de datos. Incorpora **pantalla OLED con rotación automática de 360°**. Cuenta con **conectividad Bluetooth** para sincronización con la app HealthManager Pro, permitiendo visualización, almacenamiento y seguimiento histórico de mediciones. Dispone de **memoria interna** para registro continuo de hasta 24 horas y **sistema de alarma configurable para valores fuera de rango**. || **Modelo: PO60**",
        price: 500,
        image: "/images/diagnostico/OXIMETROS/BEURER_PO60.png"
      },
      {
        sku: "CHOICEMED-DEDO",
        attrs: { tipo: "dedo", modelo: "choicemed" },
        name: "CHOICEMED",
        description: "Diseñado para medición rápida y confiable de **SpO₂ y frecuencia cardíaca**. Incorpora **pantalla OLED** de doble color **con rotación**. Permite **visualización simultánea de parámetros y barra de pulso** en tiempo real. Funciona con baterías AAA y cuenta con **apagado automático** para optimización del consumo de energía. **Incluye lanyard para transporte**. || **Modelo: MD300C19**.",
        price: 100,
        image: "/images/diagnostico/OXIMETROS/CHOICEMED.png"
      },
      {
        sku: "CONTEC-DEDO",
        attrs: { tipo: "dedo", modelo: "contec-dedo" },
        name: "CONTEC",
        description: "Oxímetro de pulso de dedo Contec de nivel básico, con pantalla LED y visualización de SpO₂ y frecuencia cardíaca. Diseño compacto, ligero y de fácil operación, ideal para primer uso domiciliario o seguimiento ocasional. Funciona con 2 pilas AAA con apagado automático. Lanyard incluido para transporte. || **Medición:** SpO₂ y frecuencia cardíaca | **Pantalla:** LED | **Uso:** Domiciliario básico | **Modelo: CMS50D**",
        price: 60,
        image: "/images/diagnostico/OXIMETROS/CONTEC.png"
      },

      // ─── SOBREMESA ────────────────────────────────────────────────────────────
      {
        sku: "NELLCOR-BEDSIDE",
        attrs: { tipo: "sobremesa", modelo: "nellcor" },
        name: "NELLCOR BEDSIDE",
        description: "Diseñado para monitoreo continuo de SpO₂ y frecuencia cardíaca en entornos hospitalarios. Incorpora **tecnología OxiMax®** con algoritmos avanzados que permiten **lecturas precisas incluso en condiciones de movimiento, baja perfusión o vasoconstricción**. Cuenta con pantalla de gran formato para visualización clara de parámetros y curva pletismográfica en tiempo real. Dispone de sistema de **alarmas configurables y registro de tendencias** para seguimiento clínico. Compatible con sensores OxiMax desechables y reutilizables para paciente adulto, pediátrico y neonatal. Indicado para uso en UCI, recuperación postoperatoria, urgencias y hospitalización. || **Modelo: BEDSIDE**.",
        price: 8500,
        image: "/images/diagnostico/OXIMETROS/NELLCOR.png"
      },
      {
        sku: "CONTEC-CMS60D",
        attrs: { tipo: "sobremesa", modelo: "contec-cms60d" },
        name: "CONTEC CMS60D",
        description: "Diseñado para monitoreo continuo de **SpO₂ y frecuencia cardíaca** en entornos clínicos intermedios. Incorpora pantalla TFT a color de gran formato con **visualización clara de parámetros y curva pletismográfica** en tiempo real. Dispone de sistema de **alarmas visuales y sonoras configurables** y memoria interna con posibilidad de **descarga de datos a PC** para análisis y seguimiento. Compatible con sondas de dedo para paciente adulto y pediátrico. Cuenta con **batería recargable** integrada que** permite operación portátil** sin conexión permanente a red eléctrica. || **Modelo: CMS60D**.",
        price: 1500,
        image: "/images/diagnostico/OXIMETROS/CONTEC_CMS60D.png"
      },



      // ─── PEDIÁTRICO ───────────────────────────────────────────────────────────

      {
        sku: "NONIN-PEDIATRICO",
        attrs: { tipo: "pediatrico", modelo: "nonin-pediatrico" },
        name: "NONIN PalmSAT 2500",
        description: "Diseñado para medición confiable de **SpO₂ y frecuencia cardíaca** en pacientes **pediátricos y neonatales**. Incorpora tecnología PureLight® con algoritmos clínicamente validados que permiten **lecturas precisas incluso en condiciones de baja perfusión y movimiento**. Utiliza **sensores externos pediátricos** de envoltura suave para **adaptación segura en dedos pequeños**. Su diseño portátil con unidad principal independiente facilita el uso en entornos clínicos, hospitalarios y domiciliarios. Construcción robusta orientada a uso continuo. || **Modelo: PalmSAT 2500**",
        price: 1,
        image: "/images/diagnostico/OXIMETROS/NONIN_PEDIATRICO.png"
      },

      // ─── MUÑECA ───────────────────────────────────────────────────────────────
      {
        sku: "WELLUE-O2RING",
        attrs: { tipo: "muneca", modelo: "wellue-o2ring" },
        name: "WELLUE O2RING",
        description: "Diseñado para **monitoreo continuo** de SpO₂ y frecuencia cardíaca durante el **sueño o periodos prolongados**. Su diseño ergonómico en silicona suave se adapta cómodamente al dedo. Incorpora **conectividad Bluetooth** con la aplicación ViHealth para visualización en tiempo real, **análisis de tendencias y generación de reportes** exportables. Cuenta con **sistema de vibración inteligente** que se activa ante desaturaciones por debajo del umbral configurado. Batería recargable con autonomía de hasta **16 horas**. || Formato: Anillo de silicona | **Modelo: O2Ring**",
        price: 850,
        image: "/images/diagnostico/OXIMETROS/WELLUE_O2RING.png"
      }
    ]
  },

  {
    id: "oftalmoscopios",
    name: "OFTALMOSCOPIOS",
    type: "Exploración ORL y Visual",
    description: "Oftalmoscopios profesionales para exploración del fondo de ojo, disponibles en dos categorías según su tecnología óptica. Panópticos: campo de visión ampliado hasta 5× para exploración sin dilatación pupilar (Welch Allyn PanOptic). Directos tradicionales: estándar clínico de precisión en distintas gamas y marcas de referencia mundial (Riester L2 2050, HEINE K180, Welch Allyn 11720-L Coaxial, HEINE Beta 200, HEINE Beta X). Ideales para médicos generales, internistas y oftalmólogos en consulta.",
    image: "/images/diagnostico/OFTALMOSCOPIOS/CARD.png",

    attributeOrder: ["tipo", "modelo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "panoptico", label: "Panóptico" },
          { id: "directo", label: "Directo" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "welch-allyn-panoptic", label: "Welch Allyn PanOptic" },
          { id: "riester-l2-2050", label: "Riester L2 2050" },
          { id: "heine-k180", label: "HEINE K180" },
          { id: "welch-allyn-11720", label: "Welch Allyn 11720-L Coaxial" },
          { id: "heine-beta-200", label: "HEINE Beta 200" },
          { id: "heine-beta-x", label: "HEINE Beta X" }
        ]
      }
    ],

    attributeRules: {
      "panoptico": { modelo: ["welch-allyn-panoptic"] },
      "directo": { modelo: ["riester-l2-2050", "heine-k180", "welch-allyn-11720", "heine-beta-200", "heine-beta-x"] }
    },

    variants: [
      // ─── PANÓPTICOS ───────────────────────────────────────────────────────────
      {
        sku: "WELCH-ALLYN-PANOPTIC",
        attrs: { tipo: "panoptico", modelo: "welch-allyn-panoptic" },
        name: "WELCH ALLYN PANOPTIC",
        description: "Oftalmoscopio PanOptic de Welch Allyn con campo de visión hasta 5× mayor que los oftalmoscopios convencionales, permitiendo una exploración del fondo de ojo más completa y eficiente. Facilita la visualización incluso a través de pupilas sin dilatar, reduciendo los reflejos de córnea para una imagen más nítida. Mango ergonómico compatible con las fuentes de luz Welch Allyn. Ideal para médicos generales, internistas y oftalmólogos que requieren una exploración ocular de alto rendimiento en consulta. || **Tipo:** Panóptico | **Marca:** Welch Allyn | **Campo de visión:** Hasta 5× mayor que oftalmoscopios estándar.",
        price: 1,
        image: "/images/diagnostico/OFTALMOSCOPIOS/WELCH_PANOPTIC.png"
      },

      // ─── DIRECTOS ─────────────────────────────────────────────────────────────
      {
        sku: "RIESTER-L2-2050",
        attrs: { tipo: "directo", modelo: "riester-l2-2050" },
        name: "RIESTER L2 2050",
        description: "Oftalmoscopio Riester L2 2050 de uso profesional para exploración del fondo de ojo con iluminación LED (3,7 V, hasta 20.000 h) o Xenón (2,5 V), ofreciendo visualización clara y precisa. Mango ergonómico con baterías, espéculos reutilizables y estuche rígido para transporte seguro. Compacto y resistente, ideal para consultorios, clínicas y hospitales. || **Tipo:** Directo | **Marca:** Riester | **Iluminación:** LED 3,7 V (20.000 h) / Xenón 2,5 V.",
        price: 950,
        image: "/images/diagnostico/OFTALMOSCOPIOS/RIESTER1.png",
      },
      {
        sku: "HEINE-K180",
        attrs: { tipo: "directo", modelo: "heine-k180" },
        name: "HEINE K180",
        description: "Oftalmoscopio directo HEINE K180, referente de la gama media-alta de HEINE, reconocido por su óptica de alto contraste y su iluminación LED de espectro completo que reproduce los colores del fondo de ojo con máxima fidelidad. Diseño ergonómico con mango intercambiable compatible con el sistema de mangos HEINE. Rueda de lentes con amplio rango dióptrico para una exploración precisa en pacientes con o sin corrección óptica. Ideal para médicos generales y especialistas en oftalmología. || **Tipo:** Directo | **Marca:** HEINE | **Iluminación:** LED de espectro completo. | **Mango recargable - Rueda 1**",
        price: 1,
        image: "/images/diagnostico/OFTALMOSCOPIOS/HEINE_K180.png"
      },
      {
        sku: "WELCH-ALLYN-11720-L",
        attrs: { tipo: "directo", modelo: "welch-allyn-11720" },
        name: "WELCH ALLYN 11720-L COAXIAL",
        description: "Oftalmoscopio coaxial Welch Allyn 11720-L, con diseño óptico coaxial que alinea el eje de iluminación y observación para minimizar el reflejo corneal y mejorar la visibilidad del fondo de ojo. Iluminación de halógeno de alto brillo con apertura de pupila grande para una exploración más amplia. Rueda de lentes con rango de +20 a -25 D. Compatible con mangos de 3,5 V de la línea Welch Allyn. Estándar en clínicas y servicios de urgencias. || **Tipo:** Directo coaxial | **Marca:** Welch Allyn | **Rango dióptrico:** +20 a −25 D.| **Incluye:** Mango y bateria recargables",
        price: 1,
        image: "/images/diagnostico/OFTALMOSCOPIOS/WELCH_11720.png"
      },
      {
        sku: "HEINE-BETA-200",
        attrs: { tipo: "directo", modelo: "heine-beta-200" },
        name: "HEINE BETA 200",
        description: "Oftalmoscopio directo HEINE Beta 200, de la reconocida línea Beta de HEINE, con iluminación LED de larga duración y óptica de precisión para una exploración del fondo de ojo clara y detallada. Su diseño compacto y ergonómico, junto con el mango compatible con el sistema Beta de HEINE, lo convierte en una herramienta fiable para el uso diario en consulta. Amplia rueda de lentes con rango dióptrico completo. Ideal para médicos de atención primaria y especialistas. || **Tipo:** Directo | **Marca:** HEINE | **Línea:** Beta | **Iluminación:** LED. | **Incluye**: Mango recargable, cable USB y fuente de alimentacion de enchufe",
        price: 1,
        image: "/images/diagnostico/OFTALMOSCOPIOS/HEINE_200.png"
      },
      {
        sku: "HEINE-BETA-X",
        attrs: { tipo: "directo", modelo: "heine-beta-x" },
        name: "HEINE BETA X",
        description: "Oftalmoscopio directo HEINE Beta X, versión avanzada de la línea Beta de HEINE con tecnología xHL (Xenon-Halogen Light) que ofrece una luz de alta intensidad y temperatura de color similar a la luz diurna para una reproducción cromática superior del fondo de ojo. Compatible con el sistema de mangos recargables Beta 4 NT de HEINE para un uso sostenible y de bajo costo operativo. Rueda de lentes de gran rango dióptrico. Referente en hospitales y servicios de oftalmología. || **Tipo:** Directo | **Marca:** HEINE | **Línea:** Beta X | **Iluminación:** xHL (Xenon-Halogen) | **Incluye**: Estuche, cable USB y fuente de alimentacion de enchufe.",
        price: 1,
        image: "/images/diagnostico/OFTALMOSCOPIOS/HEINE_X.png"
      }
    ]
  },
  {
    id: "composicion-corporal",
    name: "COMPOSICIÓN CORPORAL",
    type: "Antropometria",
    description: "Instrumentos para la evaluación y seguimiento de la composición corporal en entornos clínicos, nutricionales y deportivos. Disponibles en cuatro opciones: Cinta Lufkin W606PM (estándar ISAK para circunferencias), Plicómetro (medición de pliegues cutáneos y estimación de grasa corporal), Cinta Métrica Corporal (mediciones de circunferencias generales) y Monitor Omron HBF-306INT (análisis por impedancia bioeléctrica con cálculo de IMC e Índice FIT).",
    image: "/images/diagnostico/LUFKIN/CARD.png",

    attributeOrder: ["instrumento"],

    attributes: [
      {
        id: "instrumento",
        label: "Instrumento",
        type: "single",
        values: [
          { id: "lufkin", label: "Cinta Lufkin" },
          { id: "plicometro", label: "Plicómetro" },
          { id: "cinta", label: "Cinta Métrica" },
          { id: "omron", label: "Monitor Omron" }
        ]
      }
    ],

    variants: [
      {
        sku: "LUFKIN-W606PM",
        attrs: { instrumento: "lufkin" },
        name: "CINTA ANTROPOMÉTRICA LUFKIN W606PM",
        description: "La Lufkin W606PM establece el estándar para cintas métricas antropométricas en mediciones de circunferencia. Cuenta con hoja de acero flexible y plana para mayor durabilidad sin estiramiento, estuche cromado pulido atractivo y duradero, y tensión de resorte con retracción fuerte que devuelve fácilmente la hoja al estuche. Cumple con los requisitos ISAK para cintas antropométricas. || **Especificaciones:** Rango 2 m | Ancho 6 mm | Material: acero con estuche cromado | Resolución 1 mm | Espacio en blanco antes del cero 8 cm | Escala superior en cm/mm | Escala inferior con conversión de diámetro.",
        price: 180,
        image: "/images/diagnostico/LUFKIN/CINTA.png"
      },
      {
        sku: "PLICOMETRO-GRASA",
        attrs: { instrumento: "plicometro" },
        name: "PLICÓMETRO MEDIDOR DE GRASA",
        description: "Plicómetro de alta precisión fabricado en PVC de alta calidad, diseñado para la medición del pliegue cutáneo y la estimación del porcentaje de grasa corporal. Rango de medición de 0 a 60 mm con escala clara y fácil lectura. Herramienta esencial para evaluaciones antropométricas, nutrición deportiva y seguimiento clínico de composición corporal. Ligero, resistente y de uso profesional. || **Especificaciones:** Rango 0–60 mm | Material: PVC de alta calidad.",
        price: 40,
        image: "/images/diagnostico/PLICOMETRO/PLICOMETRO.png"
      },
      {
        sku: "CINTA-METRICA-CORPORAL",
        attrs: { instrumento: "cinta" },
        name: "CINTA MÉTRICA CORPORAL",
        description: "Cinta métrica corporal flexible de 1.5 metros de longitud, ideal para mediciones antropométricas de circunferencias corporales como cintura, cadera, tórax y extremidades. Fabricada con material resistente y de fácil lectura, con escala en centímetros y milímetros. Compacta, liviana y de uso clínico o deportivo, perfecta para llevar en cualquier bolso o kit de evaluación física. || **Especificaciones:** Longitud 1,5 m | Escala en cm y mm.",
        price: 40,
        image: "/images/diagnostico/PLICOMETRO/CINTA.png"
      },
      {
        sku: "OMRON-HBF-306INT",
        attrs: { instrumento: "omron" },
        name: "MONITOR DE GRASA CORPORAL OMRON HBF-306INT",
        description: "Monitor que estima el porcentaje de grasa corporal en segundos mediante tecnología de Impedancia Bioeléctrica (BIA) y calcula el Índice de Masa Corporal (IMC), clasificándolo en bajo, normal, elevado o muy elevado para una interpretación sencilla. Permite evaluar la calidad del peso perdido o ganado diferenciando grasa y masa muscular. Incluye guía con rangos recomendados según edad y sexo, cálculo del Índice FIT y modos de medición NORMAL y ATLÉTICO para mayor precisión según el perfil del usuario. || **Tecnología:** Impedancia Bioeléctrica (BIA) | **Métricas:** % grasa corporal, IMC, Índice FIT | **Modos:** Normal y Atlético.",
        price: 300,
        image:
          "/images/diagnostico/OMROM HBF/OMROM_1.png"

      }
    ]
  },




  {
    id: "diagnostico-neurologico",
    name: "DIAGNÓSTICO NEUROLÓGICO",
    type: "Diagnostico clinico",
    description: "Instrumentos de diagnóstico neurológico para la evaluación de reflejos osteotendinosos y sensibilidad cutánea en entornos clínicos y de campo. Disponibles en tres modelos: Rueda Wartenberg (exploración de sensibilidad cutánea), Martillo Taylor Riester (evaluación clásica de reflejos) y Martillo Buck 3 en 1 (con punta Babinski, cepillo retráctil y percusor de doble mazo). Todos fabricados con materiales de grado médico para uso profesional.",
    image: "/images/diagnostico/MARTILLOS/CARD.png",

    attributeOrder: ["instrumento", "opcion"],

    attributes: [
      {
        id: "instrumento",
        label: "Instrumento",
        type: "single",
        values: [
          { id: "wartenberg", label: "Rueda Wartenberg" },
          { id: "taylor", label: "Martillo Taylor" },
          { id: "buck", label: "Martillo Buck" }
        ]
      },
      {
        id: "opcion",
        label: "Opción",
        type: "single",
        values: [
          { id: "1-row", label: "1 Row" },
          { id: "kit-1-3-5-7", label: "1, 3, 5 y 7 Rows" },
          { id: "unico", label: "Único" }
        ]
      }
    ],

    attributeRules: {
      "wartenberg": { opcion: ["1-row", "kit-1-3-5-7"] },
      "taylor": { opcion: ["unico"] },
      "buck": { opcion: ["unico"] }
    },

    variants: [
      {
        sku: "WART-INOX-1ROW",
        attrs: { instrumento: "wartenberg", opcion: "1-row" },
        name: "RUEDA WARTENBERG – 1 ROW",
        description: "Cabezal de 1 fila de puntas de acero inoxidable para exploración de sensibilidad cutánea y estimulación nerviosa. Construcción completamente inoxidable, impermeable y resistente al óxido, de fácil limpieza y esterilización. Mango antideslizante con retroalimentación táctil precisa. Las puntas estimulan la piel sin dañarla, siguiendo el estándar utilizado por neurólogos. || **Material:** Acero inoxidable | **Filas:** 1.",
        price: 150,
        image: "/images/diagnostico/MARTILLOS/WARTENBERG-1ROW.png"
      },
      {
        sku: "WART-INOX-KIT-1-3-5-7",
        attrs: { instrumento: "wartenberg", opcion: "kit-1-3-5-7" },
        name: "RUEDA WARTENBERG – KIT 1, 3, 5 Y 7 ROWS",
        description: "Set de 4 cabezales de acero inoxidable con 1, 3, 5 y 7 filas de puntas para evaluación neurológica integral. Cada rueda ofrece una densidad de estimulación diferente, permitiendo mapear con precisión la sensibilidad táctil y discriminativa del paciente. Construcción 100% inoxidable, impermeable y de limpieza sencilla. Ideal para neurólogos y fisioterapeutas que requieren un estudio completo de la sensibilidad cutánea. || **Material:** Acero inoxidable | **Filas incluidas:** 1, 3, 5 y 7.",
        price: 300,
        image: "/images/diagnostico/MARTILLOS/WARTENBERG-KIT.png"
      },
      {
        sku: "TAYLOR-RIESTER",
        attrs: { instrumento: "taylor", opcion: "unico" },
        name: "MARTILLO NEUROLÓGICO TAYLOR RIESTER",
        description: "Martillo neurológico Taylor de la marca Riester, fabricado con materiales de alta calidad médica. Diseño clásico triangular de acero inoxidable con mango ergonómico cromado para evaluación precisa de reflejos osteotendinosos. Peso balanceado para respuestas reflejas óptimas en examen neurológico profesional. || **Marca:** Riester | **Material:** Acero inoxidable cromado.",
        price: 150,
        image: "/images/diagnostico/MARTILLOS/TAYLOR-RIESTER.png"
      },
      {
        sku: "BUCK-3EN1",
        attrs: { instrumento: "buck", opcion: "unico" },
        name: "MARTILLO DE REFLEJOS BUCK 3 EN 1",
        description: "Martillo neurológico 3 en 1 que integra punta Babinski, percusor de doble mazo, punta puntiaguda y cepillo retráctil en un diseño compacto. Fabricado en aleación de zinc con mazos de silicona suave para mayor durabilidad y comodidad del paciente. Mango ergonómico antideslizante y diseño equilibrado para evaluaciones neurológicas y musculoesqueléticas precisas. || **Material:** Aleación de zinc con mazos de silicona | **Incluye:** Punta Babinski, doble mazo, punta puntiaguda y cepillo retráctil.",
        price: 150,
        image: "/images/diagnostico/MARTILLOS/BUCK.png"
      }
    ]
  },

  {
    id: "espirometros-portatiles",
    name: "ESPIRÓMETROS PORTÁTILES",
    type: "Respiratorio y Circulatorio",
    description: "Espirómetros portátiles para la evaluación de la función pulmonar en consultorios, clínicas y trabajo de campo. Miden los principales parámetros de espirometría forzada (FVC, FEV1, FEV1/FVC, PEF) para el diagnóstico y seguimiento de enfermedades respiratorias como asma, EPOC y fibrosis pulmonar. Disponibles en dos niveles: el Contec SP80B para médicos generales y seguimiento domiciliario post-COVID, y el MIR Spirobank II Smart para uso clínico avanzado con conectividad multiplataforma y software de gestión de pacientes.",
    image: "/images/diagnostico/CARDS/ESPIROMETROS.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "contec-sp80b", label: "Contec SP80B" },
          { id: "mir-spirobank-ii", label: "MIR Spirobank II Smart" }
        ]
      }
    ],

    variants: [
      {
        sku: "CONTEC-SP80B",
        attrs: { modelo: "contec-sp80b" },
        name: "CONTEC SP80B",
        description: "Espirómetro portátil Contec SP80B con tecnología infrarroja para evaluación de la función pulmonar en consultorios, clínicas y domicilio. Configurable con datos del paciente para comparación con valores predichos y clasificación automática del estado pulmonar. Indicado para seguimiento de EPOC, asma y rehabilitación post-COVID. Incluye software de gestión de casos para PC y boquilla desechable. || Parámetros: FVC, FEV1, FEV1/FVC, PEF, FEF25-75 | Memoria: 9,999 registros | Conectividad: Bluetooth + USB | Batería: Li-ion recargable 2,200 mAh.",
        price: 1,
        image: "/images/diagnostico/ESPIROMETROS/SP80B.png"
      },
      {
        sku: "MIR-SPIROBANK-II",
        attrs: { modelo: "mir-spirobank-ii" },
        name: "MIR SPIROBANK II SMART",
        description: "Espirómetro portátil clínico MIR Spirobank II Smart para evaluación precisa de la función pulmonar según estándares ATS/ERS. Turbina digital desechable o reutilizable, pantalla gráfica LCD retroiluminada con animaciones de incentivo pediátrico y pruebas PRE/POST broncodilatador. Conectividad Bluetooth BLE con app MIR Spiro para transferencia en estándar HL7 e integración con historia clínica electrónica. Software WinSpiroPRO para PC incluido. || Parámetros: más de 30 (FVC, FEV1, PEF, MVV, edad pulmonar y otros) | Memoria: 10,000 exámenes | Conectividad: Bluetooth BLE + USB + app iOS/Android | Garantía: 2 años.",
        price: 1,
        image: "/images/diagnostico/ESPIROMETROS/SPIROBANK.png"
      }
    ]
  },
  {
    id: "dermatoscopios",
    name: "DERMATOSCOPIOS",
    type: "Exploración ORL y Visual",
    description: "Dermatoscopios de bolsillo para la exploración no invasiva de lesiones cutáneas pigmentadas y vasculares. Disponibles en dos marcas de referencia mundial: Dermlite (línea DL100, DL200 Hybrid, DL3N y DL4) y HEINE (DELTAone y Delta 30). Todos ofrecen iluminación LED polarizada para eliminación de reflejos y visualización de estructuras dérmicas profundas. Los modelos avanzados incorporan iluminación no polarizada adicional, conectividad con smartphone y sistemas de documentación digital para seguimiento de lesiones.",
    image: "/images/diagnostico/CARDS/DERMATOSCOPIOS.png",

    attributeOrder: ["marca", "modelo"],

    attributes: [
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "dermlite", label: "Dermlite" },
          { id: "heine", label: "HEINE" }
        ]
      },
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          // Dermlite
          { id: "dl100", label: "DL100" },
          { id: "dl200-hybrid", label: "DL200 Hybrid" },
          { id: "dl4", label: "DL4" },
          { id: "dl5", label: "DL5" },
          // HEINE
          { id: "deltaone", label: "DELTAone" },
          { id: "delta-30", label: "Delta 30" }
        ]
      }
    ],

    attributeRules: {
      "dermlite": { modelo: ["dl100", "dl200-hybrid", "dl4", "dl5"] },
      "heine": { modelo: ["deltaone", "delta-30"] }
    },

    variants: [

      // ─── DERMLITE ─────────────────────────────────────────────────────────────
      {
        sku: "DERMLITE-DL100",
        attrs: { marca: "dermlite", modelo: "dl100" },
        name: "DERMLITE DL100",
        description: "Dermatoscopio de bolsillo de entrada con iluminación LED polarizada para exploración no invasiva de lesiones cutáneas sin necesidad de fluidos de inmersión. Ultracompacto y ligero, ideal para médicos generales e internistas que requieren un instrumento de fácil transporte. Incluye cubierta protectora y lanyard. || Alimentación: Pilas AAA | Conectividad: Smartphone vía adaptador MagnetiConnect (opcional)",
        price: 2800,
        image: "/images/diagnostico/DERMATOSCOPIOS/DL100.png"
      },
      {
        sku: "DERMLITE-DL200-HYBRID",
        attrs: { marca: "dermlite", modelo: "dl200-hybrid" },
        name: "DERMLITE DL200 HYBRID",
        description: "Dermatoscopio de bolsillo con **iluminación polarizada y no polarizada** en un solo dispositivo, permitiendo evaluar estructuras pigmentadas y vasculares con o sin fluido de inmersión según criterio clínico. Cuerpo metálico ergonómico de fácil limpieza con placa de contacto de vidrio extraíble. Incluye cable USB, funda de silicona, lanyard y muestra de IceCaps. || **Lente: 25 mm** | Alimentación: Batería recargable | Conectividad: MagnetiConnect para smartphone | Control infecciones: IceCaps desechables.",
        price: 7300,
        image: "/images/diagnostico/DERMATOSCOPIOS/DL200HYBRID.png"
      },
      {
        sku: "DERMLITE-DL4",
        attrs: { marca: "dermlite", modelo: "dl4" },
        name: "DERMLITE DL4",
        description: "Dermatoscopio de bolsillo con **lente de 30 mm** e iluminación PigmentBoost® Plus para **visualización profunda** de estructuras pigmentadas. Cuerpo de aluminio ergonómico con placa de vidrio retráctil, alternancia instantánea entre modos polarizado y no polarizado** con un solo toque e IceCaps desechables para control de infecciones. Incluye cargador USB, funda de cuero Napa, funda de silicona y 5 IceCaps. || Brillo: 2 niveles ajustables | Conectividad: MCC para smartphone.",
        price: 12000,
        image: "/images/diagnostico/DERMATOSCOPIOS/DL4.png"
      },
      {
        sku: "DERMLITE-DL5",
        attrs: { marca: "dermlite", modelo: "dl5" },
        name: "DERMLITE DL5",
        description: "Dermatoscopio de bolsillo con el **primer sistema de polarización variable en un equipo híbrido, permitiendo recorrer en tiempo real todo el rango desde polarización cruzada profunda hasta polarización paralela superficial**. Incorpora iluminación UV de 365 nm integrada equivalente a lámpara de Wood, PigmentBoost® y LED torch de alta potencia. Batería de 3,000 mAh con más del doble de autonomía que el DL4. Incluye base de carga de escritorio, funda de cuero, funda de cinturón, adaptador MCC, IceCap, ocular y regla de 100 mm. || **Lente: 32 mm** | **Magnificación: 10x real** | Brillo: 3 niveles ajustables en todos los modos | Conectividad: MCC para smartphone | Control infecciones: IceCaps desechables.",
        price: 13300,
        image: "/images/diagnostico/DERMATOSCOPIOS/DL5.png"
      },

      // ─── HEINE ────────────────────────────────────────────────────────────────
      {
        sku: "HEINE-DELTAONE",
        attrs: { marca: "heine", modelo: "deltaone" },
        name: "HEINE DELTAONE",
        description: "Equipo con óptica acromática de alta definición e iluminación LEDHQ de excelente rendimiento cromático para visualización fiel de los colores de las lesiones. Función toggle para alternancia entre luz polarizada y no polarizada con un solo botón. Disco de contacto extraíble con marcas de escala. Compatible con la app HEINE DERManager para gestión y documentación de imágenes. Incluye cable USB, fuente de alimentación de uso médico y estuche. || Conectividad: Universal Smartphone Connector HEINE | Alimentación: Li-ion recargable | Garantía: 2 años.",
        price: 1,
        image: "/images/diagnostico/DERMATOSCOPIOS/DELTAONE.png"
      },
      {
        sku: "HEINE-DELTA30",
        attrs: { marca: "heine", modelo: "delta-30" },
        name: "HEINE DELTA 30",
        description: "Equipo con óptica acromática, lente de 32 mm y campo de visión real de 30 mm para imagen espacial y nítida en cualquier distancia de trabajo. Iluminación LEDHQ con disposición angular y direccional de mayor penetración en capas profundas de la piel. Función toggle instantánea entre luz polarizada y no polarizada, tres niveles de intensidad ajustables y placa de contacto autoclavable con escala. Compatible con HEINE Cube System para documentación inalámbrica de hasta 10 dermatoscopios y con la app DERManager para gestión de pacientes, bodymap y teleinterconsulta. || Autonomía: 6 días típicos | Garantía: 2 años.",
        price: 16800,
        image: "/images/diagnostico/DERMATOSCOPIOS/DELTA30.png"
      }
    ]
  },
  {
    id: "glucometro-accu-chek",
    name: "GLUCÓMETROS ACCU-CHEK",
    type: "Glucometría",
    description: "Glucómetros Accu-Chek de Roche para la medición rápida y precisa de glucosa en sangre capilar. Disponibles en tres modelos según las necesidades del paciente: Instant (resultados en 4 segundos, compatible con app mySugr), Performa (memoria para 500 resultados con fecha y hora, detección automática de tira) y Active (pantalla de dígitos grandes, extracción desde dedo, antebrazo o palma, ideal para pacientes que se inician en el automonitoreo). Todos los kits incluyen todo lo necesario para comenzar desde el primer día. || **Incluye:** 1 glucómetro | 10 tiras reactivas | 1 lancetero Softclix | 10 lancetas | Pilas | Manual de instrucciones.",
    image: "/images/diagnostico/CARDS/GLUCOMETROS.png",

    attributeOrder: ["modelo"],

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "instant", label: "Instant" },
          { id: "performa", label: "Performa" },
          { id: "active", label: "Active" }
        ]
      }
    ],

    variants: [
      {
        sku: "accu-chek-instant",
        attrs: { modelo: "instant" },
        name: "ACCU-CHEK INSTANT",
        description: "Glucómetro Accu-Chek Instant con resultados en 4 segundos, muestra mínima de 0,6 µL, pantalla iluminada con código de colores y compatibilidad con la app mySugr para seguimiento digital de la glucemia. || **Incluye:** 1 glucómetro Instant | 10 tiras reactivas | 1 lancetero Softclix | 10 lancetas | Pilas | Manual.",
        price: 140,
        image: "/images/diagnostico/GLUCOMETROS/INSTANT.png"
      },
      {
        sku: "accu-chek-performa",
        attrs: { modelo: "performa" },
        name: "ACCU-CHEK PERFORMA",
        description: "Glucómetro Accu-Chek Performa con resultados en 5 segundos, muestra mínima de 0,6 µL, memoria para 500 resultados con fecha y hora y detección automática de tira para resultados reproducibles. || **Incluye:** 1 glucómetro Performa | 10 tiras reactivas | 1 lancetero Softclix | 10 lancetas | Pilas | Manual.",
        price: 180,
        image: "/images/diagnostico/GLUCOMETROS/PERFORMA.png"
      },
      {
        sku: "accu-chek-active",
        attrs: { modelo: "active" },
        name: "ACCU-CHEK ACTIVE",
        description: "Glucómetro Accu-Chek Active con resultados en 5 segundos, muestra mínima de 1 µL, extracción desde dedo, antebrazo o palma y pantalla de dígitos grandes. Diseño compacto ideal para pacientes que se inician en el automonitoreo glucémico. || **Incluye:** 1 glucómetro Active | 10 tiras reactivas | 1 lancetero Softclix | 10 lancetas | Pilas | Manual.",
        price: 180,
        image: "/images/diagnostico/GLUCOMETROS/ACTIVE.png"
      }
    ]
  },
  {
    id: "tiras-reactivas-glucometro",
    name: "TIRAS REACTIVAS ACCU CHECK",
    type: "Glucometría",
    description: "Tiras reactivas para medición de glucosa en sangre. Compatibles con glucómetros de sus respectivas marcas. Caja por 50 unidades. Para uso en diagnóstico domiciliario y clínico.",
    image: "/images/diagnostico/CARDS/TIRAS.png",

    attributeOrder: ["marca"],

    attributes: [
      {
        id: "marca",
        label: "Modelo",
        type: "single",
        values: [
          { id: "active", label: "Active" },
          { id: "instant", label: "Instant" },
          { id: "performa", label: "Performa" }

        ]
      }
    ],

    variants: [
      {
        sku: "tiras-accuchek-active",
        attrs: { marca: "active" },
        name: "Accu-Chek Active",
        description: "Tiras reactivas originales Accu-Chek Active. Compatibles exclusivamente con glucómetro Accu-Chek Active. Tecnología de fotometría de reflexión. Requieren una pequeña muestra de sangre. Resultados en segundos. Caja x 50 unidades.",
        price: 100,
        image: "/images/diagnostico/TIRAS REACTIVAS/ACTIVE.png"
      },
      {
        sku: "tiras-accuchek-instant",
        attrs: { marca: "instant" },
        name: "Accu-Chek Instant",
        description: "Tiras reactivas originales Accu-Chek Instant. Compatibles exclusivamente con glucómetro Accu-Chek Instant. Tecnología electroquímica para resultados precisos y rápidos. Sin codificación manual. Caja x 50 unidades.",
        price: 100,
        image: "/images/diagnostico/TIRAS REACTIVAS/INSTANT.png"
      },
      {
        sku: "tiras-accuchek-performa",
        attrs: { marca: "performa" },
        name: "Accu-Chek Performa",
        description: "Tiras reactivas originales Accu-Chek Performa. Compatibles exclusivamente con glucómetro Accu-Chek Performa. Tecnología electroquímica para resultados precisos y rápidos. Sin codificación manual. Caja x 50 unidades.",
        price: 100,
        image: "/images/diagnostico/TIRAS REACTIVAS/PERFORMA.png"
      }
    ]
  },

  {
    id: "lancetas-accu-chek-softclix",
    name: "LANCETAS ACCU-CHEK SOFTCLIX",
    type: "Glucometría",
    description: "Lancetas originales Accu-Chek Softclix para punción capilar en el control de glucosa en sangre. Punta cónica de ultraprecisión con tecnología de corte láser para una punción prácticamente indolora. Compatibles exclusivamente con el lancetero Accu-Chek Softclix incluido en los glucómetros Accu-Chek Active, Performa e Instant. Disponibles en presentaciones de 25, 100 y 200 unidades.",
    image: "/images/diagnostico/CARDS/LANCETAS.png",

    attributeOrder: ["presentacion"],

    attributes: [
      {
        id: "presentacion",
        label: "Presentación",
        type: "single",
        values: [
          { id: "25u", label: "25 unidades" },
          { id: "100u", label: "100 unidades" },
          { id: "200u", label: "200 unidades" }
        ]
      }
    ],

    variants: [
      {
        sku: "SOFTCLIX-25U",
        attrs: { presentacion: "25u" },
        name: "SOFTCLIX – 25 UNIDADES",
        description: "Lancetas originales Accu-Chek Softclix en presentación de 25 unidades. Punta cónica de ultraprecisión con tecnología de corte láser para una punción prácticamente indolora en la yema del dedo. Compatibles exclusivamente con el lancetero Accu-Chek Softclix. Estériles e individuales para uso único. || **Contenido:** 25 lancetas | **Compatible con:** Lancetero Accu-Chek Softclix | **Uso:** Único, estéril.",
        price: 20,
        image: "/images/diagnostico/LANCETAS/SOFTCLIX-25.png"
      },
      {
        sku: "SOFTCLIX-100U",
        attrs: { presentacion: "100u" },
        name: "SOFTCLIX – 100 UNIDADES",
        description: "Lancetas originales Accu-Chek Softclix en presentación de 100 unidades. Punta cónica de ultraprecisión con tecnología de corte láser para una punción prácticamente indolora en la yema del dedo. Compatibles exclusivamente con el lancetero Accu-Chek Softclix. Estériles e individuales para uso único. Presentación estándar para seguimiento mensual de glucosa. || **Contenido:** 100 lancetas | **Compatible con:** Lancetero Accu-Chek Softclix | **Uso:** Único, estéril.",
        price: 50,
        image: "/images/diagnostico/LANCETAS/SOFTCLIX-100.png"
      },
      {
        sku: "SOFTCLIX-200U",
        attrs: { presentacion: "200u" },
        name: "SOFTCLIX – 200 UNIDADES",
        description: "Lancetas originales Accu-Chek Softclix en presentación de 200 unidades. Punta cónica de ultraprecisión con tecnología de corte láser para una punción prácticamente indolora en la yema del dedo. Compatibles exclusivamente con el lancetero Accu-Chek Softclix. Estériles e individuales para uso único. Presentación de mayor rendimiento para pacientes con control frecuente de glucosa o compra familiar. || **Contenido:** 200 lancetas | **Compatible con:** Lancetero Accu-Chek Softclix | **Uso:** Único, estéril.",
        price: 120,
        image: "/images/diagnostico/LANCETAS/SOFTCLIX-200.png"
      }
    ]
  },


];
