export const modelosAnatomicosYSimuladoresProducts = [
{
  id: "musculatura-del-cuerpo-humano",
  name: "MUSCULATURA DEL CUERPO HUMANO",
  description:
    "Modelos anatómicos del sistema muscular humano diseñados para el estudio detallado de la musculatura corporal, su relación con órganos internos y la disposición topográfica de los principales grupos musculares en cuerpo completo.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  image: "/images/maquetas/musculos-cuerpo-humano.png",

  attributeOrder: ["tipo", "tamano"],

  attributes: [
    {
      id: "tipo",
      label: "Tipo",
      type: "single",
      values: [
        { id: "muscular-i", label: "Cuerpo Muscular I" },
        { id: "muscular-ii", label: "Cuerpo Muscular II" },
        { id: "muscular-iv", label: "Cuerpo Muscular III" }
      ]
    },
    {
      id: "tamano",
      label: "Tamaño",
      type: "single",
      values: [
        { id: "50cm", label: "50 cm" },
        { id: "80cm", label: "80 cm" },
        { id: "170cm", label: "170 cm" }
      ]
    }
  ],

  variants: [
    /* ===============================
       CUERPO MUSCULAR I
       =============================== */
    {
      sku: "lp-a10001",
      attrs: { tipo: "muscular-i", tamano: "170cm" },
      name: "CUERPO HUMANO MUSCULAR 170 CM",
      description:
      "**CUERPO HUMANO ** anatómico con sistema muscular y órganos internos **desmontables de 28 piezas** y **240 estructuras anatómicas** claramente identificables y marcadas; como: Pulmones, corazón, hígado, estómago, intestinos, pancreas, deltoides, biceps, triceps, flexores y extensores, recto abdominal y musculos oblicuos, segmentos musculares de muslo y pierna. || **Modelo: A10001**.",
      price: 6000,
      images: 
      [
        "/images/maquetas/A10001-1.png",
        "/images/maquetas/A10001-2.png",
        "/images/maquetas/A10001-3.png",
        "/images/maquetas/A10001-4.png",
        "/images/maquetas/A10001-5.png",
        "/images/maquetas/A10001-6.png"
        
      ]
    },

    /* ===============================
       CUERPO MUSCULAR II
       =============================== */
    {
      sku: "A11301-1",
      attrs: { tipo: "muscular-ii", tamano: "80cm" },
      name: "Sistema Muscular y Órganos Internos – Versión de Mesa",
      description:
      "Maqueta de **80cm** que representa el **SISTEMA MUSCULAR SUPERFICIAL Y PROFUNDO**, junto con órganos y musculos **desmontables (27)** y **238 estructuras anatómicas**. Entre ellos: Bóveda craneal, Cerebro (2 hemisferios), Pulmones, Corazón, Hígado, Estómago, Intestinos, Musculatura abdominal y torácica, Deltoides, Triceps, Biceps, Flexores, Extensores, Cuadriceps, Isquiotibiales, Pantorrillas, Pectorales y más.  **|| Modelo: A11301**.",
      price: 1600,
      images: 
      [
        "/images/maquetas/A11301-1.png",
        "/images/maquetas/A11301-2.png",
        "/images/maquetas/A11301-4.png",
        
      ]
    },
    {
      sku: "A11301-2",
      attrs: { tipo: "muscular-ii", tamano: "170cm" },
      name: "Sistema Muscular y Órganos Internos – Tamaño Completo",
      description:
      "Maqueta de **170cm** que representa el **SISTEMA MUSCULAR SUPERFICIAL Y PROFUNDO**, junto con órganos y musculos **desmontables (27)** y **238 estructuras anatómicas**. Entre ellos: Bóveda craneal, Cerebro (2 hemisferios), Pulmones, Corazón, Hígado, Estómago, Intestinos, Musculatura abdominal y torácica, Deltoides, Triceps, Biceps, Flexores, Extensores, Cuadriceps, Isquiotibiales, Pantorrillas, Pectorales y más.  **|| Modelo: A11301**.",
      price: 3500,
      images: 
      [
        "/images/maquetas/A11301-3.png",
        "/images/maquetas/A11301-2.png",
        "/images/maquetas/A11301-4.png"
        
      ]
    },

    /* ===============================
       CUERPO MUSCULAR III
       =============================== */
    {
      sku: "lp-a11303",
      attrs: { tipo: "muscular-iv", tamano: "50cm" },
      name: "Topografía Muscular Masculina",
      description:
      "Maqueta de **TOPOGRAFIA MUSCULAR MASCULINA** elaborada para el estudio detallado del sistema muscular humano en estado funcional. El modelo permite una visualización tipo tomográfica de los músculos, mostrando su disposición, relación y continuidad a lo largo del cuerpo. **Incluye 69 posiciones anatómicas identificables**, que abarcan músculos de la cabeza, cuello, tronco, extremidades superiores e inferiores, así como tendones y referencias óseas clave. **Dimensiones:** 50 x 25 x 10 || **Modelo: A11303**.",
      price: 750,
      images: 
      [
        "/images/maquetas/A11303-1.png",
        "/images/maquetas/A11303-2.png",
        "/images/maquetas/A11303-3.png",
        "/images/maquetas/A11303-4.png"
        
      ]
    }
  ]
},

{
  id: "musculatura-de-extremidades",
  name: "MUSCULATURA DE EXTREMIDADES",
  description:
    "Modelos anatómicos diseñados para el estudio detallado de la musculatura de las extremidades superiores e inferiores, incluyendo la relación con vasos sanguíneos, nervios y estructuras ligamentarias.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  image: "/images/maquetas/musculos-extremidades.png",

  attributes: [
    {
      id: "tipo",
      label: "Extremidad",
      type: "single",
      values: [
        { id: "brazo", label: "Brazo" },
        { id: "pierna", label: "Pierna" },
        { id: "mano", label: "Mano" },
        { id: "pie", label: "Pie" }
      ]
    }
  ],

  variants: [
    {
      sku: "lp-a11305",
      attrs: { tipo: "brazo" },
      name: "MÚSCULOS DEL BRAZO CON VASOS Y NERVIOS",
      description:
      "**MÚSCULOS DEL BRAZO CON VASOS Y NERVIOS** diseñado para el estudio detallado de los músculos, vasos sanguíneos y nervios de la extremidad superior derecha. Representa con precisión estructuras musculares clave como el **braquiorradial, pronador redondo, flexor superficial de los dedos**, así como los músculos **extensores corto y largo de la muñeca**, permitiendo una visualización clara de la anatomía funcional del brazo. La maqueta está separada en **6 partes desmontables y presenta 87 posiciones anatómicas** claramente señalizadas, facilitando el aprendizaje y la identificación de las estructuras musculares y neurovasculares. **Dimensiones:** 85 x 23 x 18 || **Modelo: A11305**.",
      price: 1100,
      image: "/images/maquetas/A11305.png"
     },

    {
      sku: "lp-a11308",
      attrs: { tipo: "pierna" },
      name: "MUSCULATURA DE LA PIERNA CON VASOS Y NERVIOS",
      description:
      "**MUSCULATURA DE LA PIERNA CON VASOS Y NERVIOS** diseñado para el *estudio detallado de los músculos, vasos sanguíneos y nervios principales de la extremidad inferior izquierda. El modelo representa con precisión estructuras musculares clave como el **glúteo mayor, tensor de la fascia lata, sartorio, bíceps femoral, semimembranoso, semitendinoso**, así como músculos de la pierna y pantorrilla, incluyendo el **tríceps sural y músculos extensores del pie**. La maqueta está separada en **10 partes desmontables y presenta 82 posiciones anatómicas** claramente marcadas, lo que facilita la identificación y el aprendizaje progresivo de las estructuras musculares y neurovasculares.**Dimensiones:** 87 x 12 x 17 || **Modelo: A11308**.",
      price: 900,
      images: [
        "/images/maquetas/A11308-1.png",
        "/images/maquetas/A11308-2.png",
        "/images/maquetas/A11308-3.png",
        "/images/maquetas/A11308-4.png"
      ]
    },

    {
      sku: "lp-a11307",
      attrs: { tipo: "mano" },
      name: "MUSCULATURA DE LA MANO CON VASOS Y NERVIOS",
      description:
      "**MUSCULATURA DE LA MANO CON VASOS Y NERVIOS** presenta un **sistema desmontable** por capas, compuesto por **cinco partes**. Incluye una **capa muscular palmar** superficial, **músculos intrínsecos de los dedos** en segmentos independientes, y una **sección palmar profunda** donde se visualizan los tendones largos, el aparato ligamentoso y las estructuras óseas de soporte. Al retirar las capas musculares, se exponen con claridad las **redes vasculares, los nervios**, y la relación anatómica entre músculos, ligamentos y huesos. **Dimensiones:** 22 x 14 x 6 || **Modelo: A11307**.",
      price: 600,
      images: [
        "/images/maquetas/A11307-1.png",
        "/images/maquetas/A11307-2.png"
      ]
    },

    {
      sku: "lp-a11309",
      attrs: { tipo: "pie" },
      name: "MUSCULATURA DEL PIE CON VASOS Y NERVIOS",
      description:
      "**MUSCULATURA DEL PIE CON VASOS Y NERVIOS** muestra los músculos del pie y la pierna distal, consta de **9 partes**, de las cuales **8 son desmontables**, lo que permite un análisis progresivo por capas. La estructura principal incluye los **huesos del pie**, la **tibia** y el **peroné**, así como los principales **vasos sanguíneos y nervios**. Las piezas desmontables representan los músculos de la pantorrilla y del pie, entre ellos el músculo **gastrocnemio**, el **extensor largo de los dedos**, los **flexores largos y cortos del pie**, el **retináculo flexor**, el músculo del dedo pequeño del pie y el **músculo cuadrado plantar**. El modelo cuenta con **52 indicadores anatómicos**. **Dimensiones:** 20 x 9 x 33 || **Modelo: A11309**.",
      price: 800,
      images: [
        "/images/maquetas/A11309-1.png",
        "/images/maquetas/A11309-2.png",
        "/images/maquetas/A11309-3.png"
      ]
    }
  ]
},



{
  id: "torso-humano",
  name: "TORSOS HUMANOS",
  description:
    "Modelos anatómicos de torso humano diseñados para la enseñanza y demostración de los principales órganos, sistemas y relaciones anatómicas del cuerpo humano. Incluye versiones duales y transparentes según el nivel de detalle requerido.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  // 👉 Imagen conceptual IA de la familia (NO es variante)
  image: "/images/maquetas/torso-humano.png",

  attributes: [
    {
      id: "modelo",
      label: "Modelo de torso",
      type: "single",
      values: [
        {
          id: "a10002",
          label: "Torso 27 partes"
        },
        {
          id: "a10004",
          label: "Torso transparente I"
        },
        {
          id: "a10005",
          label: "Torso transparente II"
        }
      ]
    }
  ],

  variants: [
    {
      sku: "lp-a10002",
      attrs: { modelo: "a10002" },
      name: "TORSO HUMANO DUAL 27 PARTES",
      description:
      "**TORSO ANATÓMICO DE 27 PARTES** representa la anatomía interna del cuerpo humano con **27 componentes desmontables** y estructuras anatómicas claramente identificables. Incluye la **anatomía de la cabeza**, cuello y torso, con cráneo, músculos masetero y temporal, **globos oculares**, **sección sagital de la cabeza** con el hemisferio derecho del cerebro, **laringe**, **glotis** y glándula **tiroides** con **paratiroides**. Tambien nos muestra los **pulmones** en secciones, **tráquea** y **bronquios**, **corazón** disecado en dos partes, vasos cardiovasculares principales como la **aorta** y las **venas cavas**, además de órganos abdominales como **hígado**, **estómago**, **páncreas**, **bazo**, **intestino grueso**, **sección cecal** y **riñón**. Incorpora **órganos reproductores** masculinos y femeninos intercambiables, sección de **12 vértebras torácicas con médula espinal**, esternón, timo y musculatura superficial y profunda del torso y la espalda. **Dimensiones: **90 x 40 x 20 || **Modelo: A10002**.",
      price: 1800,
      images: [ "/images/maquetas/A10002-1.png",
              "/images/maquetas/A10002-2.png",
              "/images/maquetas/A10002-3.png",
              "/images/maquetas/A10002-4.png"
              ],
    },

    {
      sku: "lp-a10004",
      attrs: { modelo: "a10004" },
      name: "TORSO TRANSPARENTE CON ÓRGANOS INTERNOS",
      description:
      "**TORSO TRANSPARENTE CON ÓRGANOS INTERNOS** representa la estructura interna del tronco humano, mostrando de forma clara la posición, forma y relación espacial de los órganos internos. El modelo consta de **23 piezas** y presenta **53 estructuras** anatómicas **señalizadas**. Incluye cabeza y torso con cerebro, tráquea, esófago, estómago, aorta, nervios de la columna y columna vertebral expuesta, permitiendo observar órganos como el corazón, hígado e intestinos a través de su **carcasa transparente, sin obstrucciones visuales**. Su diseño ofrece una visualización intuitiva de las capas anatómicas y la disposición real de las vísceras. **Dimensiones:** 100 x 40 x 20 || **Modelo: A10004**.",
      price: 4600,
      image: "/images/maquetas/A10004.png"
    },
    {
      sku: "lp-a10005",
      attrs: { modelo: "a10005" },
      name: "TORSO TRANSPARENTE CON ESTRUCTURAS NEURALES Y VASCULARES",
      description:
      "**TORSO TRANSPARENTE CON ESTRUCTURAS NEURALES Y VASCULARES**, que representa la anatomía interna del tronco humano, mostrando de forma clara la disposición y **recorrido** de los principales **nervios, arterias y venas** del busto. El modelo presenta **82 posiciones** anatómicas señalizadas, permitiendo identificar con precisión las **estructuras neurovasculares** en relación con el esqueleto del torso. La carcasa transparente permite observar la columna vertebral, la caja torácica, la pelvis y el **trayecto completo del sistema nervioso y vascular**, facilitando la comprensión de las relaciones espaciales entre huesos, nervios y vasos sanguíneos. **Dimensiones:** 100 x 40 x 20 || **Modelo: A10005**.",
      price: 4200,
      image: "/images/maquetas/A10005.png"
    }
  ]
},

{
  id: "sistema-respiratorio-humano",
  name: "SISTEMA RESPIRATORIO HUMANO",
  description:
    "Modelos anatómicos del sistema respiratorio humano diseñados para el estudio de las vías aéreas superiores e inferiores, pulmones y estructuras torácicas asociadas. Permiten comprender la anatomía y el funcionamiento del proceso respiratorio en distintos niveles de detalle.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  // 👉 Imagen conceptual genérica (NO es variante)
  image: "/images/maquetas/sistema-respiratorio-humano.png",

  attributes: [
    {
      id: "modelo",
      label: "Modelo respiratorio",
      type: "single",
      values: [
        { id: "vias-superiores", label: "Cavidad nasal" },
        { id: "pulmones", label: "Pulmones transparentes" },
        { id: "arbol-bronquial", label: "Árbol bronquial" },
        { id: "alveolos", label: "Lóbulos y alveolos pulmonares" },
        { id: "mediastino", label: "Mediastino y corazón" },
        { id: "sistema-completo", label: "Cavidad torácica completa" }
      ]
    }
  ],

  variants: [
    {
      sku: "lp-a13001",
      attrs: { modelo: "vias-superiores" },
      name: "CAVIDADES NASALES",
      description:
      "Modelo anatómico desarmable de cavidad nasal y orofaríngea, que representa la anatomía de la **apertura nasal** y la **cavidad laríngea** con **10 partes** y **113 estructuras** anatómicas identificables. Muestra la cabeza y el cuello en sección sagital, incluyendo **cráneo, fosas nasales, tabique nasal, senos, paladar, cavidad bucal, faringe y laringe**. Permite observar los músculos de la expresión facial, músculo **masetero**, músculos **faríngeos**, **lengua** libre, **glotis** y estructuras del tracto respiratorio superior, con representación clara de estructuras óseas, musculares y glandulares. **Dimensiones:** 42 x 25 x 23. || **Modelo: A13001**.",
      price: 1100,
      images: [ "/images/maquetas/A13001-1.png",
              "/images/maquetas/A13001-2.png",
              "/images/maquetas/A13001-3.png",
              "/images/maquetas/A13001-4.png"
      ],
    },



    {
      sku: "lp-a13007",
      attrs: { modelo: "arbol-bronquial" },
      name: "ÁRBOL BRONQUIAL",
      description:
      "Representa la anatomía de la tráquea y las vías respiratorias, **mostrando** los **bronquios principales** izquierdo y derecho, los bronquios **lobulares** y los bronquios **segmentarios**. El modelo cuenta con **26 posiciones** anatómicas marcadas, facilitando la identificación de las estructuras del sistema respiratorio inferior. **Dimensiones:** 20 x 16,5 x 8,5 cm || **Modelo: A13007**.",
      price: 430,
      image: "/images/maquetas/A13007.png"
    },

    {
      sku: "lp-a13009",
      attrs: { modelo: "pulmones" },
      name: "SEGMENTOS PULMONARES",
      description:
      "Modelo anatómico que permite identificar los segmentos pulmonares y su organización estructural dentro de los pulmones. **Dimensiones:** 40 x 30 x 25 || **Modelo: A13009**.",
      price: 300,
      image: "/images/maquetas/A13009.png"
    },

    {
      sku: "lp-a13011",
      attrs: { modelo: "alveolos" },
      name: "ALVÉOLOS Y LOBULILLO PULMONAR",
      description:
      "**MODELO ANATÓMICO DEL LÓBULO Y ALVEOLO DEL PULMÓN** que representa la estructura microscópica y funcional del sistema respiratorio, mostrando las **ramas** pequeñas **del bronquio** principal, el **bronquiolo sin cartílago**, la relación entre los alvéolos y los bronquios terminales, así como el **conducto alveolar** y el **saco alveolar**. Permite observar con claridad la **red capilar alveolar**, facilitando la comprensión del intercambio gaseoso. **Dimensiones:** 21 × 15 × 23 cm.|| **Modelo: A13011**.",
      price: 650,
      images: [ "/images/maquetas/A13011-1.png",
              "/images/maquetas/A13011-2.png",
              "/images/maquetas/A13011-3.png",
              "/images/maquetas/A13011-4.png"
      ],
    },

    {
      sku: "lp-a13014",
      attrs: { modelo: "mediastino" },
      name: "MEDIASTINO",
      description:
      "**MODELO DE ANATOMÍA DEL MEDIASTINO Y CORAZON HUMANO**, muestra el corazón con grandes vasos, la tráquea, el esófago, el timo y las estructuras mediastínicas principales, con codificación de colores para una identificación clara. El modelo cuenta con **5 partes retirables**, que incluyen el **corazón desmontable en dos mitades** (permitiendo observar ventrículos, válvulas y cavidades internas), el **esternón**, el **timo** y los componentes del mediastino que exponen la disposición espacial de los órganos torácicos. **Dimensiones:** 40 x 30 x 31 || **Modelo: A13014**.",
      price: 500,
      images: [ "/images/maquetas/A13014-1.png",
              "/images/maquetas/A13014-2.png",
              "/images/maquetas/A13014-3.png"
       ],
    },

    {
      sku: "lp-a13016",
      attrs: { modelo: "sistema-completo" },
      name: "SISTEMA RESPIRATORIO COMPLETO",
      description:
      "Modelo de la **cavidad torácica** compuesto por **15 partes**, incluyendo pulmones, corazón, aurículas cardíacas, tráquea y **costillas removibles**, junto con estructuras fijas de alto nivel de detalle como la **columna vertebral**, **músculos espinales** profundos, **discos intervertebrales**, hígado e intestino grueso. **Dimensiones:** 38 × 25 × 50 cm || **Modelo: A13016**.",
      price: 1600,
      images: [ "/images/maquetas/A13016-1.png",
              "/images/maquetas/A13016-2.png",
              "/images/maquetas/A13016-3.png",
              "/images/maquetas/A13016-4.png"
       ],
    }
  ]
},

{
  id: "sistema-cardiovascular-humano",
  name: "SISTEMA CARDIOVASCULAR HUMANO",
  description:
    "Modelos anatómicos del sistema cardiovascular diseñados para el estudio del corazón, la circulación sanguínea, los vasos y el sistema linfático, permitiendo comprender la organización y funcionamiento del sistema circulatorio humano.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  image: "/images/maquetas/sistema-cardiovascular-humano.png",

  attributeOrder: ["categoria", "tipo"],

  attributes: [
    {
      id: "categoria",
      label: "Categoría",
      type: "single",
      values: [
        { id: "simuladores-circulacion", label: "Simuladores de circulación" },
        { id: "corazones-venas", label: "Corazones y venas" },
        { id: "sistemas-complejos", label: "Sistemas complejos" }
      ]
    },
    {
      id: "tipo",
      label: "Tipo",
      type: "single",
      values: [
        { id: "circulacion-electrica", label: "Circulación eléctrica" },
        { id: "circulacion-portal", label: "Circulación portal" },

        { id: "arteria-vena", label: "Arteria y vena" },
        { id: "corazon-adulto", label: "Corazón adulto" },
        { id: "corazon-ampliado", label: "Corazón ampliado" },
        { id: "corazon-infantil", label: "Corazón infantil" },

        { id: "sistema-circulatorio", label: "Sistema circulatorio" },
        { id: "sistema-linfatico", label: "Sistema linfático" }
      ]
    }
  ],

  variants: [
    /* ===============================
       SIMULADORES DE CIRCULACIÓN
       =============================== */

    {
      sku: "lp-a16003",
      attrs: {
        categoria: "simuladores-circulacion",
        tipo: "circulacion-electrica"
      },
      name: "CIRCULACIÓN SANGUÍNEA ELÉCTRICA",
      description:
        "Este modelo eléctrico del corazón humano permite demostrar el ciclo cardíaco completo y el funcionamiento de la circulación mayor y menor mediante simulación eléctrica del estado pulsátil del corazón y el recorrido dinámico de la sangre. **Dimensiones:** 55 × 25 × 104 cm || **Modelo: A16003**.",
      price: 5300,
      image: "/images/maquetas/A16003.png"
    },

    {
      sku: "lp-a16010",
      attrs: {
        categoria: "simuladores-circulacion",
        tipo: "circulacion-portal"
      },
      name: "CIRCULACIÓN PORTAL COMPENSATORIA",
      description:
        "Modelo anatómico diseñado para la demostración dinámica del sistema de circulación portal y los mecanismos de compensación circulatoria. **Dimensiones:** 51 × 23 × 86 cm || **Modelo: A16010**.",
      price: 6250,
      image: "/images/maquetas/A16010.png"
    },

    /* ===============================
       CORAZONES Y VENAS
       =============================== */

    {
      sku: "lp-a16002",
      attrs: {
        categoria: "corazones-venas",
        tipo: "arteria-vena"
      },
      name: "ARTERIA Y VENA AMPLIADAS",
      description:
        "Modelo anatómico ampliado que permite la visualización detallada de la estructura interna de una arteria y una vena mediante un diseño seccionado a escala aumentada. **Dimensiones:** 57 × 31 × 21 cm || **Modelo: A16002**.",
      price: 840,
      image: "/images/maquetas/A16002.png"
    },

    {
      sku: "lp-a16006",
      attrs: {
        categoria: "corazones-venas",
        tipo: "corazon-adulto"
      },
      name: "CORAZÓN ADULTO",
      description:
        "Modelo anatómico del corazón humano ampliado a **cuatro veces su tamaño real**, desmontable en tres partes para el estudio detallado de aurículas y ventrículos, permitiendo observar vistas anterior, posterior e interior. **Dimensiones:** 22 × 22 × 22 cm || **Modelo: A16006**.",
      price: 540,
      images: [
        "/images/maquetas/A16006-1.png",
        "/images/maquetas/A16006-2.png"
      ]
    },

    {
      sku: "lp-a16007",
      attrs: {
        categoria: "corazones-venas",
        tipo: "corazon-ampliado"
      },
      name: "CORAZÓN ADULTO AMPLIADO",
      description:
        "Modelo anatómico del corazón humano ampliado a 1,5 veces su tamaño real que muestra el arco aórtico, la sección coronaria del atrio y el ventrículo, así como la aurícula derecha e izquierda. **Dimensiones:** 22 × 22 × 17 cm || **Modelo: A16007**.",
      price: 500,
      images: [
        "/images/maquetas/A16007-1.png",
        "/images/maquetas/A16007-2.png"
      ]
    },

    {
      sku: "lp-a16008",
      attrs: {
        categoria: "corazones-venas",
        tipo: "corazon-infantil"
      },
      name: "CORAZÓN INFANTIL",
      description:
        "Modelo anatómico del corazón infantil desmontable en dos piezas que muestra la sección coronal del atrio y el ventrículo, presentando 25 posiciones anatómicas claramente identificables. **Dimensiones:** 21 × 11 × 11 cm || **Modelo: A16008**.",
      price: 550,
      images: [
        "/images/maquetas/A16008-1.png",
        "/images/maquetas/A16008-2.png"
      ]
    },

    /* ===============================
       SISTEMAS COMPLEJOS
       =============================== */

    {
      sku: "lp-a16001",
      attrs: {
        categoria: "sistemas-complejos",
        tipo: "sistema-circulatorio"
      },
      name: "SISTEMA CIRCULATORIO",
      description:
        "Modelo anatómico del sistema circulatorio humano que permite una visualización clara de las principales arterias y venas del cuerpo, mostrando 81 posiciones anatómicas en un relieve a media escala. **Dimensiones:** 86 × 30 × 5 cm || **Modelo: A16001**.",
      price: 600,
      image: "/images/maquetas/A16001.png"
    },

    {
      sku: "lp-a16011",
      attrs: {
        categoria: "sistemas-complejos",
        tipo: "sistema-linfatico"
      },
      name: "SISTEMA LINFÁTICO",
      description:
        "Modelo anatómico del sistema linfático humano que permite comprender la distribución de los vasos linfáticos, ganglios y su relación con los órganos principales, facilitando el estudio de su función inmunológica y de drenaje corporal. **Dimensiones:** 76 × 50 × 9 cm || **Modelo: A16011**.",
      price: 800,
      images: [
        "/images/maquetas/A16011-1.png",
        "/images/maquetas/A16011-2.png",
        "/images/maquetas/A16011-3.png",
        "/images/maquetas/A16011-4.png"
      ]
    }
  ]
},


{
  id: "modelos-de-cerebro",
  name: "MODELOS DE CEREBRO",
  description:
    "Modelos anatómicos del cerebro diseñados para el estudio estructural, funcional y neurovascular del sistema nervioso central. Incluye versiones desmontables, funcionales y especializadas según el nivel de análisis requerido.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  
  image: "/images/maquetas/modelos-de-cerebro.png",

  attributes: [
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "a18203", label: "En 15 partes" },
        { id: "a18201", label: "En 8 partes" },
        { id: "a18204", label: "Con coloracion I" },
        { id: "a18205", label: "Con coloracion II" },
        { id: "a18220", label: "Con red arterial I" },
        { id: "a18219", label: "Con red arterial II" },
        { id: "a18213", label: "Tálamo 5x" }
        
      ]
    }
  ],

  variants: [
    {
      sku: "lp-a18203",
      attrs: { modelo: "a18203" },
      name: "CEREBRO DESMONTABLE EN 15 PARTES",
      description:
      "Este modelo anatómico del **CEREBRO HUMANO** a escala real **(1:1)** está diseñado para el estudio visual de las principales estructuras del sistema nervioso central. El modelo **se desmonta en 15 partes**, lo que facilita la observación interna de los **hemisferios cerebrales y las estructuras profundas**. En la maqueta se identifican el hemisferio cerebral, los lóbulos temporales y occipitales con el sistema límbico, el lóbulo frontal, el cuerpo calloso, la ínsula, el cuerpo estriado, el núcleo lentiforme, la cápsula interna, el sistema ventricular, el cerebelo y el tronco encefálico, incluyendo mesencéfalo, puente y médula oblonga. **Dimensiones:** 23 × 15 × 18 || **Modelo: A18203**.",
      price: 950,
      images: [ "/images/maquetas/A18203-1.png",
              "/images/maquetas/A18203-2.png",
              "/images/maquetas/A18203-3.png"
              ],

    },
    {
      sku: "lp-a18201",
      attrs: { modelo: "a18201" },
      name: "CEREBRO DESMONTABLE EN 8 PARTES",
      description:
      "Este modelo anatómico del **CEREBRO HUMANO** a tamaño real **(1:1)** está diseñado para el estudio detallado de la anatomía cerebral en contextos educativos y clínicos. El modelo se desmonta en **8 partes**, lo que permite una visualización clara de la **sección sagital del cerebro**, el **hemicerebro**, el **cerebelo** y el **tronco encefálico**. En la maqueta se identifican con precisión las **principales estructuras** del **sistema nervioso central**, incluyendo el **hemicerebrum**, el intercerebro **(diencéfalo)**, el **cerebelo**, el **mesencéfalo**, el **puente cerebral y la médula**, facilitando la comprensión de su organización y continuidad anatómica. El modelo presenta **98 posiciones anatómicas** claramente identificables, lo que lo convierte en una herramienta didáctica de alto nivel para el aprendizaje estructural del cerebro humano. **Dimensiones:** 14 x 12 x 16 cm || **Modelo: A18201**.",
      price: 400,
      images: [ "/images/maquetas/A18201-1.png",
              "/images/maquetas/A18201-2.png",
              "/images/maquetas/A18201-3.png"
              ],
    },
    {
      sku: "lp-a18204",
      attrs: { modelo: "a18204" },
      name: "LÓBULOS CEREBRALES",
      description:
      "Este modelo anatómico del **CEREBRO HUMANO**  está diseñado para el estudio visual de los **LÓBULOS CEREBRALES** y la organización externa del encéfalo. El modelo se desmonta en **8 partes**, permitiendo separar y observar los **hemisferios** derecho e izquierdo con **diferenciación cromática** de los lóbulos cerebrales, incluyendo el **lóbulo frontal**, lóbulo **parietal**, lóbulo **temporal** y lóbulo **occipital** de forma clara. **Dimensiones:** 14 x 13 x 17 || **Modelo: A18204**.",
      price: 1100,
      images: [ "/images/maquetas/A18204-1.png",
              "/images/maquetas/A18204-2.png"
              ],
    },
    {
      sku: "lp-a18220",
      attrs: { modelo: "a18220" },
      name: "CEREBRO CON RED ARTERIAL",
      description:
      "Este modelo anatómico del **CEREBRO HUMANO** a escala real **(1:1)** está diseñado para el estudio visual detallado de la **anatomía cerebral y su red arterial principal**. La maqueta se desmonta en **8 partes**, permitiendo la observación clara de la organización externa e interna del encéfalo, así como de la distribución de los **principales vasos sanguíneos**. En el modelo se identifican los **lóbulos frontal y parietal**, los **lóbulos temporal y occipital**, el **tronco cerebral**, el **cerebelo y la arteria basilar**, representados mediante una **codificación cromática** que facilita la diferenciación anatómica. La superficie cerebral muestra el **trayecto de la red arterial**, permitiendo reconocer la **irrigación** del encéfalo y su relación con las distintas regiones funcionales. En total, el modelo señala **127 posiciones anatómicas**. **Dimensiones:** 14 x 13 x 17 || **Modelo: A18220**.",
      price: 550,
      images: [ "/images/maquetas/A18220-1.png",
              "/images/maquetas/A18220-2.png",
              "/images/maquetas/A18220-3.png"
              ],
    },
    {
      sku: "lp-a18219",
      attrs: { modelo: "a18219" },
      name: "CEREBRO CON ARTERIAS Y NERVIOS CRANEALES",
      description:
      "Representación **en 8 partes** del **CEREBRO HUMANO** que permite el estudio de la irrigación encefálica y la disposición de los nervios craneales, facilitando la comprensión de las relaciones neurovasculares y su relevancia anatómica y clínica. **Dimensiones:** 19 x 17 x 20 || **Modelo: A18219**.",
      price: 600,
      images: [ "/images/maquetas/A18219-1.png",
              "/images/maquetas/A18219-2.png",
              "/images/maquetas/A18219-3.png"
              ],
    },
    {
      sku: "lp-a18213",
      attrs: { modelo: "a18213" },
      name: "TÁLAMO AMPLIADO",
      description:
      "Este modelo anatómico del **TÁLAMO HUMANO** con aumento **5X** está diseñado para el estudio detallado de las **estructuras nucleares profundas del diencéfalo**, permitiendo una visualización clara de regiones que no son distinguibles en especímenes a tamaño real. El modelo se **desmonta en 7 partes**, facilitando el análisis individual de los principales **núcleos talámicos**. En la maqueta se identifican el **núcleo medial del núcleo anterior del tálamo**, los **núcleos dorsal y ventral** del núcleo lateral talámico, el **núcleo ventroposterior** medial y el **tálamo pulvinar**, entre otras estructuras centrales. El diseño modular permite explicar de manera didáctica las regiones funcionales del tálamo, mientras que la codificación por colores favorece la rápida identificación anatómica durante la enseñanza. **Dimensiones:** 18 x 11 x 11 cm || **Modelo: A18213**.",
      price: 450,
      images: [ "/images/maquetas/A18213-1.png",
              "/images/maquetas/A18213-2.png"
              ],
    },
    {
      sku: "lp-a18205",
      attrs: { modelo: "a18205" },
      name: "ÁREAS CORTICALES DEL CEREBRO",
      description:
      "Este modelo anatómico del **CEREBRO HUMANO** a tamaño natural **(1:1)**, utiliza un sistema de codificación por colores que permite identificar con claridad las distintas **regiones corticales y subcorticales**. La maqueta se desmonta **en 2 partes**, facilitando la observación de la superficie cerebral y la relación entre las áreas funcionales principales. En el modelo se identifican el **lóbulo frontal, lóbulo parietal, lóbulo occipital y lóbulo temporal**, así como regiones funcionales específicas como la **corteza motora, la corteza somatosensorial, la corteza marginal, además del cerebelo y el tronco encefálico**. **Dimensiones:** 20 x 17 x 15 || **Modelo: A18205**.",
      price: 300,
      images: [ "/images/maquetas/A18205-1.png",
              "/images/maquetas/A18205-2.png"
              ],
    }

  ]
},

{
  id: "sistema-digestivo-humano",
  name: "SISTEMA DIGESTIVO HUMANO",
  description:
    "Modelos anatómicos del sistema digestivo humano diseñados para el estudio detallado de los órganos digestivos, su estructura interna y las relaciones funcionales entre estómago, intestinos, hígado, páncreas y órganos asociados. Incluye modelos completos y órganos individuales para distintos niveles de análisis anatómico.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  image: "/images/maquetas/sistema-digestivo-humano.png",

  attributeOrder: ["categoria", "modelo"],

  attributes: [
    {
      id: "categoria",
      label: "Tipo de modelo",
      type: "single",
      values: [
        { id: "sistema-completo", label: "Sistema completo" },
        { id: "organos", label: "Órganos digestivos" }
      ]
    },
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "sistema-completo", label: "Sistema digestivo completo" },

        { id: "estomago", label: "Estómago" },
        { id: "estomago-corte", label: "Pared del estómago" },
        { id: "pancreas", label: "Páncreas con bazo y duodeno" },
        { id: "intestino-delgado", label: "Yeyuno" },
        { id: "intestino-grueso", label: "Ciego y apéndice" },
        { id: "higado", label: "Hígado" },
        { id: "higado-vesicula", label: "Hígado y vesícula biliar" }
      ]
    }
  ],

  variants: [
    /* ===============================
       SISTEMA DIGESTIVO COMPLETO
       =============================== */

    {
      sku: "lp-a12001",
      attrs: {
        categoria: "sistema-completo",
        modelo: "sistema-completo"
      },
      name: "SISTEMA DIGESTIVO HUMANO",
      description:
        "Modelo anatómico que permite la visualización integral del sistema digestivo humano, mostrando la disposición y relación entre los principales órganos digestivos para estudio anatómico general. **Modelo: A12001**.",
      price: 600,
      image: "/images/maquetas/A12001.png"
    },

    /* ===============================
       ÓRGANOS DIGESTIVOS
       =============================== */

    {
      sku: "lp-a12002",
      attrs: {
        categoria: "organos",
        modelo: "estomago"
      },
      name: "ESTÓMAGO HUMANO",
      description:
        "Representación anatómica del estómago que permite estudiar su forma externa, regiones principales y relaciones anatómicas dentro del sistema digestivo. **Modelo: A12002**.",
      price: 220,
      image: "/images/maquetas/A12002.png"
    },

    {
      sku: "lp-a12003",
      attrs: {
        categoria: "organos",
        modelo: "estomago-corte"
      },
      name: "PARED DEL ESTÓMAGO EN CORTE",
      description:
        "Modelo diseñado para observar la estructura interna de la pared gástrica mediante un corte seccional, facilitando el estudio de sus capas y organización histológica. **Modelo: A12003**.",
      price: 520,
      image: "/images/maquetas/A12003.png"
    },

    {
      sku: "lp-a12004",
      attrs: {
        categoria: "organos",
        modelo: "pancreas"
      },
      name: "PÁNCREAS CON BAZO Y DUODENO",
      description:
        "Representación anatómica que permite estudiar el páncreas junto con el bazo y el duodeno, facilitando la comprensión de sus relaciones anatómicas y funcionales. **Modelo: A12004**.",
      price: 200,
      image: "/images/maquetas/A12004.png"
    },

    {
      sku: "lp-a12005",
      attrs: {
        categoria: "organos",
        modelo: "intestino-delgado"
      },
      name: "SUPERFICIE INTERNA DEL YEYUNO",
      description:
        "Modelo anatómico que permite observar la superficie interna del intestino delgado, destacando pliegues y estructuras relacionadas con la absorción intestinal. **Modelo: A12005**.",
      price: 380,
      image: "/images/maquetas/A12005.png"
    },

    {
      sku: "lp-a12006",
      attrs: {
        categoria: "organos",
        modelo: "intestino-grueso"
      },
      name: "CIEGO Y APÉNDICE",
      description:
        "Representación anatómica del ciego y el apéndice que facilita el estudio de su morfología, ubicación y relación dentro del intestino grueso. **Modelo: A12006**.",
      price: 280,
      image: "/images/maquetas/A12006.png"
    },

    {
      sku: "lp-a12008",
      attrs: {
        categoria: "organos",
        modelo: "higado"
      },
      name: "HÍGADO HUMANO",
      description:
        "Modelo anatómico del hígado que permite identificar su forma, lóbulos principales y relaciones anatómicas dentro del sistema digestivo. **Modelo: A12008**.",
      price: 250,
      image: "/images/maquetas/A12008.png"
    },

    {
      sku: "lp-a12009",
      attrs: {
        categoria: "organos",
        modelo: "higado-vesicula"
      },
      name: "HÍGADO Y VESÍCULA BILIAR",
      description:
        "Representación anatómica que integra el hígado y la vesícula biliar, facilitando el estudio de la anatomía hepática y del sistema biliar. **Modelo: A12009**.",
      price: 250,
      image: "/images/maquetas/A12009.png"
    }
  ]
},



{
  id: "modelos-de-cabeza-y-cuello",
  name: "MODELOS DE CABEZA Y CUELLO",
  description:
    "Modelos anatómicos de cabeza y cuello diseñados para el estudio de las estructuras óseas, musculares, nerviosas, vasculares y de las vías aero-digestivas superiores. Permiten una comprensión integral de la anatomía de la región craneofacial y cervical en distintos niveles de detalle.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  
  image: "/images/maquetas/cabeza-y-cuello.png",

  attributes: [
    {
      id: "tipo",
      label: "Tipo de modelo",
      type: "single",
      values: [
        { id: "corte-sagital", label: "Cabeza en corte sagital" },
        { id: "vasos-nervios", label: "Cabeza con vasos y nervios" },
        { id: "musculatura", label: "Cabeza con musculatura" },
        { id: "cabeza-cuello", label: "Cabeza y cuello completos" },
        { id: "cavidad-oral", label: "Cavidad oral y vías superiores" },
        { id: "craneo-facial", label: "Cráneo facial con nervios y vasos" }
      ]
    }
  ],

  variants: [
    {
      sku: "lp-a18202",
      attrs: { tipo: "corte-sagital" },
      name: "Cabeza en Corte Sagital",
      description:
        "Modelo anatómico que permite observar las estructuras internas de la cabeza mediante un corte sagital, facilitando el estudio de cavidades, órganos y relaciones anatómicas **|| Modelo: A18202**.",
      price: 200,
      image: "/images/maquetas/A18202.png"
    },

    {
      sku: "lp-a18210",
      attrs: { tipo: "vasos-nervios" },
      name: "Cabeza con Vasos y Nervios",
      description:
        "Modelo de cabeza seccionada que integra vasos sanguíneos y nervios principales, facilitando la comprensión de las relaciones neurovasculares de la región craneal **|| Modelo: A18210**.",
      price: 820,
      image: "/images/maquetas/A18210.png"
    },

    {
      sku: "lp-a18211",
      attrs: { tipo: "musculatura" },
      name: "Cabeza con Musculatura Desmontable",
      description:
        "Modelo anatómico desmontable que permite el estudio de la musculatura superficial y profunda de la cabeza, útil para la enseñanza de anatomía craneofacial **|| Modelo: A18211**.",
      price: 980,
      image: "/images/maquetas/A18211.png"
    },

    {
      sku: "lp-a18212",
      attrs: { tipo: "cabeza-cuello" },
      name: "Cabeza y Cuello con Vasos y Nervios",
      description:
        "Modelo anatómico que integra cabeza y cuello con representación de nervios, vasos sanguíneos y encéfalo, permitiendo una visión completa de la región craneocervical **|| Modelo: A18212**.",
      price: 1600,
      image: "/images/maquetas/A18212.png"
    },

    {
      sku: "lp-a18108",
      attrs: { tipo: "cavidad-oral" },
      name: "Cavidad Oral y Vías Aero-digestivas Superiores",
      description:
        "Modelo anatómico diseñado para el estudio de la cavidad oral, faringe y laringe, facilitando la comprensión de las vías aero-digestivas superiores **|| Modelo: A18108**.",
      price: 350,
      image: "/images/maquetas/A18108.png"
    },

    {
      sku: "lp-a18109",
      attrs: { tipo: "craneo-facial" },
      name: "Cráneo Facial con Nervios y Vasos",
      description:
        "Modelo anatómico que representa los nervios y vasos del cráneo facial, permitiendo el estudio detallado de la inervación y vascularización facial **|| Modelo: A18109**.",
      price: 600,
      image: "/images/maquetas/A18109.png"
    }
  ]
},

{
  id: "esqueleto-humano",
  name: "ESQUELETO HUMANO",
  description:
    "Modelos anatómicos del esqueleto humano diseñados para el estudio integral del sistema óseo. Incluye esqueletos completos en distintos tamaños, versiones con musculatura pintada y conjuntos de huesos desarticulados para análisis detallado de cada componente óseo.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  // 👉 Imagen conceptual del card (NO es variante)
  image: "/images/maquetas/sistema-oseo-humano.png",

  attributes: [
    {
      id: "modelo",
      label: "Modelo de esqueleto",
      type: "single",
      values: [
        { id: "completo-173", label: "Esqueleto 173 cm" },
        { id: "completo-85", label: "Esqueleto 85 cm" },
        { id: "musculos-pintados", label: "Con músculos pintados" },
        { id: "desarticulado", label: "Huesos desarticulados" }
      ]
    }
  ],

  variants: [
    {
      sku: "A11101",
      attrs: { modelo: "completo-173" },
      name: "ESQUELETO HUMANO COMPLETO 173 CM",
      description:
        "Permite la visualización integral del sistema óseo humano a escala real, incluyendo articulaciones móviles y extremidades desmontables para un estudio anatómico claro y preciso en docencia y demostración. **Modelo: A11101**.",
      price: 980,
      image: "/images/maquetas/A11101.png"
    },

    {
      sku: "A11101-3",
      attrs: { modelo: "completo-85" },
      name: "ESQUELETO HUMANO COMPLETO 85 CM",
      description:
        "Permite la visualización de la estructura ósea humana en formato compacto, manteniendo postura erecta normal y extremidades desmontables, ideal para espacios educativos reducidos. **Modelo: A11101-3**.",
      price: 200,
      image: "/images/maquetas/A11101-3.png"
    },

    {
      sku: "A11102",
      attrs: { modelo: "musculos-pintados" },
      name: "ESQUELETO HUMANO CON MÚSCULOS PINTADOS (UN LADO)",
      description:
        "Permite el estudio comparativo entre el sistema óseo y la musculatura superficial mediante la representación muscular pintada en un solo lado, facilitando la comprensión de su relación anatómica. **Modelo: A11102**.",
      price: 1300,
      image: "/images/maquetas/A11102.png"
    },

    {
      sku: "A11103",
      attrs: { modelo: "desarticulado" },
      name: "HUESOS HUMANOS DESARTICULADOS",
      description:
        "Conjunto de piezas óseas individuales que facilita el estudio detallado de cada hueso de forma independiente. Presentado en maletín para almacenamiento ordenado y transporte seguro en contextos académicos. **Modelo: A11103**.",
      price: 700,
      image: "/images/maquetas/A11103.png"
    }
  ]
},



{
  id: "columna-y-pelvis",
  name: "COLUMNA, VÉRTEBRAS Y PELVIS",
  description:
    "Modelos anatómicos de la columna vertebral, vértebras y pelvis diseñados para el estudio estructural y funcional del eje axial humano. Incluye representaciones completas, seccionadas y segmentadas que facilitan la comprensión de la biomecánica, postura y relaciones anatómicas.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  image: "/images/maquetas/columna-y-pelvis.png",

  attributeOrder: ["tipo", "modelo"],

  attributes: [
    {
      id: "tipo",
      label: "Tipo",
      type: "single",
      values: [
        { id: "columna", label: "Columna" },
        { id: "vertebras", label: "Vértebras" },
        { id: "pelvis", label: "Pelvis" }
      ]
    },
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "tipo-a", label: "Tipo A" },
        { id: "tipo-b", label: "Tipo B" },
        { id: "tipo-c", label: "Tipo C" },
        { id: "tipo-d", label: "Tipo D" },
        { id: "tipo-e", label: "Tipo E" }
      ]
    }
  ],

  variants: [
    /* ===============================
       COLUMNA
       =============================== */
    {
      sku: "A11104",
      attrs: { tipo: "columna", modelo: "tipo-a" },
      name: "COLUMNA VERTEBRAL COMPLETA",
      description:
        "Modelo anatómico de la columna vertebral humana en tamaño real que permite observar su estructura completa y curvaturas fisiológicas. **|| Modelo: A11104**.",
      price: 350,
      image: "/images/maquetas/A11104.png"
    },
    {
      sku: "A11105",
      attrs: { tipo: "columna", modelo: "tipo-b" },
      name: "COLUMNA VERTEBRAL FLEXIBLE",
      description:
        "Modelo articulado que permite demostrar la movilidad natural de la columna vertebral. **|| Modelo: A11105**.",
      price: 280,
      image: "/images/maquetas/A11105.png"
    },
    {
      sku: "A11106",
      attrs: { tipo: "columna", modelo: "tipo-c" },
      name: "COLUMNA VERTEBRAL SECCIONADA",
      description:
        "Modelo seccionado que permite observar vértebras, discos intervertebrales y médula espinal. **|| Modelo: A11106**.",
      price: 330,
      image: "/images/maquetas/A11106.png"
    },

    /* ===============================
       VÉRTEBRAS
       =============================== */
    {
      sku: "A11107",
      attrs: { tipo: "vertebras", modelo: "tipo-a" },
      name: "VÉRTEBRAS CERVICALES",
      description:
        "Modelo ampliado de vértebras cervicales para el análisis anatómico de la región cervical. **|| Modelo: A11107**.",
      price: 150,
      image: "/images/maquetas/A11107.png"
    },
    {
      sku: "A11108",
      attrs: { tipo: "vertebras", modelo: "tipo-b" },
      name: "VÉRTEBRAS LUMBARES",
      description:
        "Modelo ampliado de vértebras lumbares para el estudio de la región lumbar. **|| Modelo: A11108**.",
      price: 150,
      image: "/images/maquetas/A11108.png"
    },
    {
      sku: "A11109",
      attrs: { tipo: "vertebras", modelo: "tipo-c" },
      name: "VÉRTEBRAS TORÁCICAS",
      description:
        "Modelo anatómico de vértebras torácicas para estudio estructural. **|| Modelo: A11109**.",
      price: 220,
      image: "/images/maquetas/A11109.png"
    },

    /* ===============================
       PELVIS
       =============================== */
    {
      sku: "A11127",
      attrs: { tipo: "pelvis", modelo: "tipo-a" },
      name: "PELVIS ÓSEA HUMANA",
      description:
        "Modelo anatómico de la pelvis humana que incluye ilion, isquion y pubis. **|| Modelo: A11127**.",
      price: 550,
      image: "/images/maquetas/A11127.png"
    },
    {
      sku: "A11128",
      attrs: { tipo: "pelvis", modelo: "tipo-b" },
      name: "PELVIS CON SACRO Y CÓCCIX",
      description:
        "Modelo anatómico que integra la pelvis con sacro y cóccix. **|| Modelo: A11128**.",
      price: 550,
      image: "/images/maquetas/A11128.png"
    },
    {
      sku: "A15106",
      attrs: { tipo: "pelvis", modelo: "tipo-c" },
      name: "PELVIS MASCULINA EN SECCIÓN",
      description:
        "Modelo seccionado que permite observar las relaciones anatómicas pélvicas masculinas. **|| Modelo: A15106**.",
      price: 700,
      image: "/images/maquetas/A15106.png"
    },
    {
      sku: "A15107",
      attrs: { tipo: "pelvis", modelo: "tipo-d" },
      name: "PELVIS FEMENINA EN SECCIÓN",
      description:
        "Modelo seccionado de pelvis femenina para estudio anatómico detallado. **|| Modelo: A15107**.",
      price: 700,
      image: "/images/maquetas/A15107.png"
    },
    {
      sku: "A11129",
      attrs: { tipo: "pelvis", modelo: "tipo-e" },
      name: "COLUMNA VERTEBRAL CON PELVIS",
      description:
        "Modelo que combina la columna vertebral completa con la pelvis, ofreciendo una visión integral del eje axial humano. **|| Modelo: A11129**.",
      price: 1100,
      image: "/images/maquetas/A11129.png"
    }
  ]
},

{
  id: "craneos",
  name: "CRÁNEOS",
  description:
    "Modelos anatómicos del cráneo humano para el estudio de su estructura ósea, desarrollo, disección y huesos individuales. Incluye cráneos completos, cráneos diseccionados y huesos craneales específicos para análisis detallado.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  // Imagen genérica del card
  image: "/images/maquetas/generico-craneo.png",

  attributeOrder: ["tipo", "modelo"],

  attributes: [
    {
      id: "tipo",
      label: "Tipo",
      type: "single",
      values: [
        { id: "huesos-craneales", label: "Huesos del cráneo" },
        { id: "craneos-enteros", label: "Cráneos enteros" },
        { id: "craneos-diseccionados", label: "Cráneos diseccionados" }
      ]
    },
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "temporal", label: "Hueso temporal" },
        { id: "alar", label: "Hueso alar" },
        { id: "etmoides", label: "Hueso etmoides" },

        { id: "adulto", label: "Cráneo adulto" },
        { id: "infantil", label: "Cráneo pediatrico" },
        { id: "infante", label: "Cráneo neonatal" },

        { id: "color-2p", label: "A color I" },
        { id: "separacion", label: "A color II" },
        { id: "musculos", label: "Músculos coloreados" },
        { id: "senos", label: "Senos craneales y arterias" },
        { id: "vasos-nervios", label: "Con vasos y nervios" },
        { id: "diseccionado", label: "Multi seccionado" }
        
      ]
    }
  ],

  variants: [
    /* ===============================
       HUESOS DEL CRÁNEO
       =============================== */
    {
      sku: "A11119",
      attrs: { tipo: "huesos-craneales", modelo: "temporal" },
      name: "Hueso Temporal",
      description:
        "Modelo anatómico individual del hueso temporal para el estudio de sus detalles estructurales y relaciones anatómicas. **Modelo: A11119**.",
      price: 220,
      image: "/images/maquetas/A11119.png"
    },
    {
      sku: "A11120",
      attrs: { tipo: "huesos-craneales", modelo: "alar" },
      name: "Hueso Alar Ampliado",
      description:
        "Modelo ampliado del hueso alar que permite identificar con claridad sus detalles estructurales. **Modelo: A11120**.",
      price: 350,
      image: "/images/maquetas/A11120.png"
    },
    {
      sku: "A11121",
      attrs: { tipo: "huesos-craneales", modelo: "etmoides" },
      name: "Hueso Etmoides Ampliado",
      description:
        "Modelo ampliado del hueso etmoides para el análisis detallado de su estructura. **Modelo: A11121**.",
      price: 430,
      image: "/images/maquetas/A11121.png"
    },

    /* ===============================
       CRÁNEOS ENTEROS
       =============================== */
    {
      sku: "A11110",
      attrs: { tipo: "craneos-enteros", modelo: "adulto" },
      name: "Cráneo Humano Adulto",
      description:
        "Modelo anatómico del cráneo humano adulto montado sobre base para el estudio estructural óseo y facial. **Modelo: A11110**.",
      price: 320,
      image: "/images/maquetas/A11110.png"
    },
    {
      sku: "A11114",
      attrs: { tipo: "craneos-enteros", modelo: "infantil" },
      name: "Cráneo Infantil",
      description:
        "Modelo anatómico del cráneo infantil que permite observar el desarrollo óseo en la infancia. **Modelo: A11114**.",
      price: 180,
      image: "/images/maquetas/A11114.png"
    },
    {
      sku: "A11115",
      attrs: { tipo: "craneos-enteros", modelo: "infante" },
      name: "Cráneo de Infante",
      description:
        "Modelo del cráneo de infante para el estudio del desarrollo craneal en etapas tempranas. **Modelo: A11115**.",
      price: 180,
      image: "/images/maquetas/A11115.png"
    },

    /* ===============================
       CRÁNEOS DISECCIONADOS
       =============================== */
    {
      sku: "A11111-1",
      attrs: { tipo: "craneos-diseccionados", modelo: "color-2p" },
      name: "Cráneo a Color (2 Partes)",
      description:
        "Modelo de cráneo desmontable con diferenciación cromática para identificar huesos craneales. **Modelo: A11111-1**.",
      price: 180,
      image: "/images/maquetas/A11111-1.png"
    },
    {
      sku: "A11111-2",
      attrs: { tipo: "craneos-diseccionados", modelo: "musculos" },
      name: "Cráneo con Músculos Coloreados",
      description:
        "Modelo anatómico que muestra la relación entre estructura ósea y musculatura facial. **Modelo: A11111-2**.",
      price: 180,
      image: "/images/maquetas/A11111-2.png"
    },
    {
      sku: "A11112",
      attrs: { tipo: "craneos-diseccionados", modelo: "senos" },
      name: "Senos Craneales y Arterias",
      description:
        "Modelo que permite estudiar los senos craneales y la irrigación arterial del cráneo. **Modelo: A11112**.",
      price: 850,
      image: "/images/maquetas/A11112.png"
    },
    {
      sku: "A11113",
      attrs: { tipo: "craneos-diseccionados", modelo: "vasos-nervios" },
      name: "Cráneo con Vasos y Nervios",
      description:
        "Modelo desmontable que integra vasos sanguíneos y nervios para estudio anatómico avanzado. **Modelo: A11113**.",
      price: 650,
      image: "/images/maquetas/A11113.png"
    },
    {
      sku: "A11116-1",
      attrs: { tipo: "craneos-diseccionados", modelo: "diseccionado" },
      name: "Cráneo Adulto diseccionado",
      description:
        "Modelo de cráneo adulto con despiece anatómico para enseñanza estructural avanzada. **Modelo: A11116-1**.",
      price: 980,
      image: "/images/maquetas/A11116-1.png"
    },
    {
      sku: "A11118",
      attrs: { tipo: "craneos-diseccionados", modelo: "separacion" },
      name: "Separación de Cráneo",
      description:
        "Modelo que permite demostrar la separación de los principales componentes del cráneo humano. **Modelo: A11118**.",
      price: 550,
      image: "/images/maquetas/A11118.png"
    }
  ]
},

{
  id: "extremidades",
  name: "EXTREMIDADES",
  description:
    "Modelos anatómicos correspondientes a extremidades humanas, que incluyen representaciones óseas de miembros superiores e inferiores para el estudio anatómico estructural.",

  brand: "MesImport",
  type: "modelos-anatomicos",

  image: "/images/maquetas/extremidades.png",

  attributeOrder: ["modelo"],

  attributes: [
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "A11123", label: "Brazo con Escápula y Clavícula" },
        { id: "A11124", label: "Huesos del Brazo" },
        { id: "A11130", label: "Huesos de la pierna con cadera" },
        { id: "A11131", label: "Huesos de la pierna" },
        { id: "A11132", label: "Huesos del Pie con Tibia y Peroné" }
      ]
    }
  ],

  variants: [
    {
      sku: "A11123",
      attrs: { modelo: "A11123" },
      name: "Brazo con Escápula y Clavícula",
      description:
        "Modelo anatómico que representa los huesos del brazo junto con la escápula y la clavícula para el estudio de la extremidad superior. **Modelo: A11123**.",
      image: "/images/maquetas/A11123.png",
      price: 180
    },
    {
      sku: "A11124",
      attrs: { modelo: "A11124" },
      name: "Huesos del Brazo",
      description:
        "Modelo anatómico que muestra los huesos del brazo humano para el estudio de su estructura ósea. **Modelo: A11124**.",
      image: "/images/maquetas/A11124.png",
      price: 280
    },
    {
      sku: "A11130",
      attrs: { modelo: "A11130" },
      name: "Huesos de la Extremidad Inferior con Cadera",
      description:
        "Modelo anatómico de la extremidad inferior que incluye la cadera para el estudio de la estructura ósea del miembro inferior. **Modelo: A11130**.",
      image: "/images/maquetas/A11130.png",
      price: 480
    },
    {
      sku: "A11131",
      attrs: { modelo: "A11131" },
      name: "Huesos de la Extremidad Inferior",
      description:
        "Modelo anatómico que representa los huesos de la extremidad inferior humana para su estudio estructural. **Modelo: A11131**.",
      image: "/images/maquetas/A11131.png",
      price: 440
    },
    {
      sku: "A11132",
      attrs: { modelo: "A11132" },
      name: "Huesos del Pie con Tibia y Peroné",
      description:
        "Modelo anatómico que incluye los huesos del pie junto con la tibia y el peroné para el estudio de la extremidad inferior. **Modelo: A11132**.",
      image: "/images/maquetas/A11132.png",
      price: 350
    }
  ]
},

{
  id: "articulaciones",
  name: "ARTICULACIONES",
  description:
    "Modelos anatómicos de articulaciones humanas diseñados para el estudio de la movilidad, estabilidad y relación entre estructuras óseas y musculares de las principales articulaciones del cuerpo.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  image: "/images/maquetas/articulaciones.png",

  attributeOrder: ["modelo"],

  attributes: [
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "A11209-1", label: "Articulación de Hombro" },
        { id: "A11209-2", label: "Articulación de Codo" },
        { id: "A11209-3", label: "Articulación de Cadera" },
        { id: "A11209-4", label: "Articulación de Rodilla" },
        { id: "A11209-5", label: "Articulación de la Mano" },
        { id: "A11209-6", label: "Articulación del Pie" },
        { id: "A11210", label: "Articulación de Codo con Músculos Funcionales" }
      ]
    }
  ],

  variants: [
    {
      sku: "A11209-1",
      attrs: { modelo: "A11209-1" },
      name: "Articulación de Hombro",
      description:
        "Modelo anatómico de la articulación del hombro diseñado para el estudio de su estructura ósea y movilidad. **Modelo: A11209-1**.",
      image: "/images/maquetas/A11209-1.png",
      price: 120
    },
    {
      sku: "A11209-2",
      attrs: { modelo: "A11209-2" },
      name: "Articulación de Codo",
      description:
        "Modelo anatómico de la articulación del codo que permite analizar la relación entre húmero, radio y cúbito. **Modelo: A11209-2**.",
      image: "/images/maquetas/A11209-2.png",
      price: 120
    },
    {
      sku: "A11209-3",
      attrs: { modelo: "A11209-3" },
      name: "Articulación de Cadera",
      description:
        "Modelo anatómico de la articulación de la cadera para el estudio de la cabeza femoral y el acetábulo. **Modelo: A11209-3**.",
      image: "/images/maquetas/A11209-3.png",
      price: 120
    },
    {
      sku: "A11209-4",
      attrs: { modelo: "A11209-4" },
      name: "Articulación de Rodilla",
      description:
        "Modelo anatómico de la articulación de la rodilla que facilita la comprensión de su estructura y funcionalidad. **Modelo: A11209-4**.",
      image: "/images/maquetas/A11209-4.png",
      price: 120
    },
    {
      sku: "A11209-5",
      attrs: { modelo: "A11209-5" },
      name: "Articulación de la Mano",
      description:
        "Modelo anatómico de la articulación de la mano diseñado para el estudio de las articulaciones carpianas y falángicas. **Modelo: A11209-5**.",
      image: "/images/maquetas/A11209-5.png",
      price:  120
    },
    {
      sku: "A11209-6",
      attrs: { modelo: "A11209-6" },
      name: "Articulación del Pie",
      description:
        "Modelo anatómico de la articulación del pie que permite observar la disposición articular de los huesos del tarso y metatarso. **Modelo: A11209-6**.",
      image: "/images/maquetas/A11209-6.png",
      price: 120
    },
    {
      sku: "A11210",
      attrs: { modelo: "A11210" },
      name: "Articulación de Codo con Músculos Funcionales",
      description:
        "Modelo anatómico de la articulación del codo con representación de músculos funcionales para el estudio de la interacción óseo-muscular. **Modelo: A11210**.",
      image: "/images/maquetas/A11210.png",
      price: 280
    }
  ]
},

{
  id: "manos-y-pies",
  name: "MANOS Y PIES",
  description:
    "Modelos anatómicos de manos y pies humanos para el estudio detallado de su estructura ósea, muscular y ligamentosa en entornos educativos y clínicos.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  image: "/images/maquetas/manos-y-pies.png",

  attributeOrder: ["tipo", "modelo"],

  attributes: [
    {
      id: "tipo",
      label: "Tipo",
      type: "single",
      values: [
        { id: "mano", label: "Mano" },
        { id: "pie", label: "Pie" }
      ]
    },
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "A11125", label: "Huesos de la Mano con Cúbito y Radio" },
        { id: "A11126", label: "Huesos de la Mano" },
        { id: "A11306", label: "Anatomía de la Palma de la Mano" },

        { id: "A11133", label: "Huesos del Pie" },
        { id: "A11310", label: "Comparativo de Pie Normal, Plano y Arqueado" },
        { id: "A11311", label: "Anatomía del Pie" },
        { id: "A11313", label: "Anatomía de la Planta del Pie" }
      ]
    }
  ],

  variants: [
    /* ===============================
       MANO
       =============================== */
    {
      sku: "A11125",
      attrs: { tipo: "mano", modelo: "A11125" },
      name: "Huesos de la Mano con Cúbito y Radio",
      description:
        "Permite observar la estructura ósea de la mano junto con cúbito y radio en tamaño real, facilitando el estudio de la articulación y organización del miembro superior distal. **Modelo: A11125**.",
      price: 315,
      image: "/images/maquetas/A11125.png"
    },
    {
      sku: "A11126",
      attrs: { tipo: "mano", modelo: "A11126" },
      name: "Huesos de la Mano",
      description:
        "Permite la visualización de los huesos del carpo, metacarpo y falanges en tamaño real, facilitando el estudio de la organización ósea de la mano para docencia y demostración osteológica. **Modelo: A11126**.",
      price: 430,
      image: "/images/maquetas/A11126.png"
    },
    {
      sku: "A11306",
      attrs: { tipo: "mano", modelo: "A11306" },
      name: "Anatomía de la Palma de la Mano",
      description:
        "Permite el estudio detallado de las estructuras internas de la palma de la mano, integrando elementos óseos y musculares para docencia y demostración clínica. **Modelo: A11306**.",
      price: 430,
      images: [
        "/images/maquetas/A11306-1.png",
        "/images/maquetas/A11306-2.png"
      ]
    },

    /* ===============================
       PIE
       =============================== */
    {
      sku: "A11133",
      attrs: { tipo: "pie", modelo: "A11133" },
      name: "Huesos del Pie",
      description:
        "Permite la identificación clara de los huesos del tarso, metatarso y falanges en una representación a tamaño real, adecuada para docencia y demostración osteológica. **Modelo: A11133**.",
      price: 220,
      image: "/images/maquetas/A11133.png"
    },
    {
      sku: "A11310",
      attrs: { tipo: "pie", modelo: "A11310" },
      name: "Comparativo de Pie Normal, Plano y Arqueado",
      description:
        "Permite identificar de forma clara las diferencias estructurales entre pie normal, plano y arqueado mediante una representación comparativa en tamaño real, orientada a docencia y demostración clínica. **Modelo: A11310**.",
      price: 460,
      image: "/images/maquetas/A11310.png"
    },
    {
      sku: "A11311",
      attrs: { tipo: "pie", modelo: "A11311" },
      name: "Anatomía del Pie",
      description:
        "Permite el estudio general de la anatomía ósea, muscular y ligamentosa del pie en tamaño real, facilitando la comprensión de su estructura y soporte funcional. **Modelo: A11311**.",
      price: 380,
      image: "/images/maquetas/A11311.png"
    },
    {
      sku: "A11313",
      attrs: { tipo: "pie", modelo: "A11313" },
      name: "Anatomía de la Planta del Pie",
      description:
        "Facilita la visualización de las estructuras anatómicas principales de la planta del pie y su distribución funcional mediante un modelo en tamaño real. **Modelo: A11313**.",
      price: 300,
      image: "/images/maquetas/A11313.png"
    }
  ]
},
{
  id: "modelos-seccionados",
  name: "MODELOS SECCIONADOS",
  description:
    "Modelos anatómicos seccionados diseñados para la observación detallada de estructuras internas, articulaciones y relaciones funcionales del sistema musculoesquelético en contextos educativos y clínicos.",
  brand: "MesImport",
  type: "modelos-anatomicos",

  image: "/images/maquetas/modelos-seccionados.png",

  attributeOrder: ["modelo"],

  attributes: [
    {
      id: "modelo",
      label: "Modelo",
      type: "single",
      values: [
        { id: "A11207", label: "Sección de Pie" },
        { id: "A11312", label: "Sección Sagital Media del Pie" },
        { id: "A11204", label: "Sección de Mano" },
        { id: "A11202", label: "Sección de Articulación de Hombro" },
        { id: "A11203", label: "Sección de Articulación de Codo" },
        { id: "A11206", label: "Sección de Articulación de Rodilla" },
        { id: "A11205", label: "Sección de Articulación de Cadera" }
      ]
    }
  ],

  variants: [
    {
      sku: "A11207",
      attrs: { modelo: "A11207" },
      name: "Sección de Pie",
      description:
        "Facilita la observación de huesos, articulaciones y tejidos del pie a través de diferentes posiciones, siendo útil para docencia y demostración clínica. Tamaño real. **Modelo: A11207**.",
      price: 240,
      image: "/images/maquetas/A11207.png"
    },
    {
      sku: "A11312",
      attrs: { modelo: "A11312" },
      name: "Sección Sagital Media del Pie",
      description:
        "Permite la observación de la disposición interna de huesos, articulaciones y tejidos del pie mediante un corte sagital en tamaño real, facilitando el estudio anatómico detallado. **Modelo: A11312**.",
      price: 180,
      image: "/images/maquetas/A11312.png"
    },
    {
      sku: "A11204",
      attrs: { modelo: "A11204" },
      name: "Sección de Mano",
      description:
        "Permite observar en detalle las estructuras internas de la mano mediante una sección anatómica diseñada para el estudio de articulaciones y relaciones funcionales. **Modelo: A11204**.",
      price: 180,
      image: "/images/maquetas/A11204.png"
    },
    {
      sku: "A11202",
      attrs: { modelo: "A11202" },
      name: "Sección de Articulación de Hombro",
      description:
        "Representación seccionada que permite observar las estructuras internas de la articulación del hombro para enseñanza anatómica avanzada. **Modelo: A11202**.",
      price: 280,
      image: "/images/maquetas/A11202.png"
    },
    {
      sku: "A11203",
      attrs: { modelo: "A11203" },
      name: "Sección de Articulación de Codo",
      description:
        "Permite la observación interna de la articulación del codo mediante una sección anatómica detallada, facilitando el estudio del movimiento articular. **Modelo: A11203**.",
      price: 250,
      image: "/images/maquetas/A11203.png"
    },
    {
      sku: "A11206",
      attrs: { modelo: "A11206" },
      name: "Sección de Articulación de Rodilla",
      description:
        "Permite analizar el movimiento y las estructuras internas de la rodilla mediante una sección que presenta múltiples posiciones funcionales para estudio y demostración. Tamaño real. **Modelo: A11206**.",
      price: 260,
      image: "/images/maquetas/A11206.png"
    },

    {
      sku: "A11205",
      attrs: { modelo: "A11205" },
      name: "Sección de Articulación de Cadera",
      description:
        "Facilita el análisis anatómico y biomecánico de la cadera mediante una sección que expone las principales estructuras articulares. **Modelo: A11205**.",
      price: 260,
      image: "/images/maquetas/A11205.png"
    }
  ]
},



{
  id: "lp-a13003",
  name: "LARINGE CON LENGUA Y DIENTES",
  description:
    "Permite la observación detallada de las estructuras internas relacionadas con la fonación y la vía aérea superior, incluyendo cartílagos, músculos y cavidad laríngea. El diseño seccionado facilita la visualización anatómica de la región orofaríngea y su continuidad con la tráquea, con múltiples puntos anatómicos identificables. Fabricado en PVC avanzado con acabado de pintura realista, es adecuado para demostración profesional y exhibición especializada **Modelo: A13003**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 55,

  image: "/images/maquetas/A13003.png"
},

{
  id: "lp-a13004",
  name: "LARINGE EN SECCIÓN LONGITUDINAL",
  description:
    "Permite la observación detallada de las estructuras internas de la vía aérea superior mediante un corte longitudinal que expone cartílagos, músculos, cavidad interna y componentes vasculonerviosos, incluyendo la glándula tiroides. Su diseño facilita la identificación anatómica de los elementos y su disposición espacial. Fabricado en PVC avanzado con acabado de pintura realista, es adecuado para demostración profesional y exhibición especializada **Modelo: A13004**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 60,

  image: "/images/maquetas/A13004.png"

  
},

{
  id: "lp-a13005",
  name: "LARINGE FUNCIONAL",
  description:
    "Permite la observación detallada de los cartílagos, músculos y cavidad interna mediante un diseño ampliado que facilita la identificación anatómica. Incorpora una articulación móvil que simula la apertura y cierre de la glotis, permitiendo apreciar los cambios estructurales asociados. Presenta múltiples puntos anatómicos identificables y está fabricado en PVC avanzado con acabado de pintura realista para demostración profesional y exhibición especializada **Modelo: A13005**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 65,

  image: "/images/maquetas/A13005.png"
},

{
  id: "lp-a13006",
  name: "LARINGE, TRÁQUEA Y ÁRBOL BRONQUIAL",
  description:
    "Permite la visualización detallada de la continuidad de la vía aérea mediante un corte longitudinal que expone las estructuras internas desde la región superior hasta las ramificaciones bronquiales. El modelo muestra la disposición anatómica de la tráquea, los bronquios principales y segmentarios, facilitando la comprensión de su organización y relaciones espaciales. Fabricado en PVC avanzado con acabado de pintura realista para demostración profesional y exhibición especializada **Modelo: A13006**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 70,

  image: "/images/maquetas/A13006.png"
},





{
  id: "lp-a13010",
  name: "SEGMENTOS PULMONARES",
  description:
    "Permite la visualización anatómica de la organización segmentaria de ambos pulmones, facilitando la identificación y diferenciación de los segmentos del pulmón izquierdo y derecho. El diseño a tamaño real ofrece una referencia clara de la disposición estructural y relaciones internas del sistema respiratorio. Fabricado en PVC avanzado con acabado de pintura realista para demostración profesional y exhibición especializada. **Modelo: A13010**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 85,

  image: "/images/maquetas/A13010.png"
},



{
  id: "lp-a13012",
  name: "LARINGE, CORAZÓN Y PULMONES",
  description:
    "Permite la visualización integrada de estructuras del sistema respiratorio y cardiovascular, mostrando la relación anatómica entre la vía aérea, los pulmones, el corazón y los principales vasos sanguíneos. El diseño facilita la comprensión de la disposición espacial y continuidad funcional entre ambos sistemas mediante múltiples puntos anatómicos identificables. Fabricado en PVC avanzado con acabado de pintura realista para demostración profesional y exhibición especializada. **Modelo: A13012**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 95,

  image: "/images/maquetas/A13012.png"
},

{
  id: "lp-a13013",
  name: "PULMONES TRANSPARENTES CON TRÁQUEA, ÁRBOL BRONQUIAL Y CORAZÓN",
  description:
    "Permite la visualización integrada de estructuras respiratorias y cardiovasculares mediante un diseño transparente que facilita la observación del mediastino, el corazón, los grandes vasos y la continuidad de la vía aérea. El modelo muestra la relación anatómica entre ambos sistemas, destacando la disposición espacial de las estructuras internas y múltiples puntos anatómicos identificables. Fabricado en PVC avanzado con acabado de pintura realista para demostración profesional y exhibición especializada. **Modelo: A13013**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 100,

  image: "/images/maquetas/A13013.png"
},












{
  id: "lp-a17101",
  name: "GLOBO OCULAR AMPLIADO",
  description:
    "Permite la visualización detallada de la estructura interna del ojo mediante un corte longitudinal que expone sus componentes anatómicos. El diseño desmontable en dos partes y la escala aumentada facilitan la identificación de las capas y elementos internos del globo ocular, ofreciendo una referencia clara para demostración y exhibición profesional. Fabricado en PVC avanzado con acabado de pintura realista. **Modelo: A17101**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 160,

  image: "/images/maquetas/A17101.png"
},


{
  id: "lp-a17102",
  name: "GLOBO OCULAR AMPLIADO – 3 PARTES",
  description:
    "Permite la visualización detallada de la anatomía interna del ojo mediante un corte longitudinal que expone sus principales estructuras. El diseño desmontable en tres partes y la escala aumentada facilitan la identificación precisa de las capas y componentes internos del globo ocular, ofreciendo una referencia clara para demostración y exhibición profesional. Fabricado en PVC avanzado con acabado de pintura realista. **Modelo: A17102**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 165,

  image: "/images/maquetas/A17102.png"
},


{
  id: "lp-a17103",
  name: "GLOBO OCULAR AMPLIADO – 7 PARTES",
  description:
    "Permite la visualización detallada de la anatomía interna del ojo mediante un corte horizontal que expone sus principales estructuras. El modelo incorpora componentes desmontables como la córnea, el iris, el cristalino y el cuerpo vítreo, facilitando la identificación precisa de los elementos internos. Se presenta montado sobre base y a escala aumentada para una observación clara y ordenada. Fabricado en PVC avanzado con acabado de pintura realista para demostración y exhibición profesional. **Modelo: A17103**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 170,

  image: "/images/maquetas/A17103.png"
},


{
  id: "lp-a17104",
  name: "GLOBO OCULAR CON ÓRBITA Y NERVIO ÓPTICO",
  description:
    "Permite la visualización detallada de la relación anatómica entre el ojo, la cavidad orbitaria y las estructuras asociadas mediante un corte horizontal. El modelo expone los músculos oculares y el trayecto del nervio óptico hacia el interior del cráneo, facilitando la comprensión de la disposición espacial y funcional de estos componentes. Presenta un alto nivel de despiece para una observación precisa y ordenada. Fabricado en PVC avanzado con acabado de pintura realista para demostración y exhibición profesional. **Modelo: A17104**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 175,

  image: "/images/maquetas/A17104.png"
},

{
  id: "lp-a17105",
  name: "GLOBO OCULAR Y ÓRBITA CON VASOS Y NERVIOS",
  description:
    "Permite la visualización anatómica detallada de las estructuras que conforman el sistema ocular mediante un modelo de alta complejidad. El conjunto expone la cavidad orbitaria, las capas del globo ocular, la musculatura extraocular, así como los principales vasos y nervios asociados, facilitando la comprensión de sus relaciones espaciales y funcionales. Presenta un alto nivel de despiece para una observación precisa y ordenada. Fabricado en PVC avanzado con acabado de pintura realista para demostración y exhibición profesional. **Modelo: A17105**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 180,

  image: "/images/maquetas/A17105.png"
},

{
  id: "lp-a17110",
  name: "MODELO DE PATOLOGÍAS OCULARES",
  description:
    "Permite la demostración visual comparativa de diversas afecciones del sistema ocular mediante representaciones detalladas de diferentes condiciones patológicas. El conjunto facilita la identificación y explicación de alteraciones oculares a través de imágenes anatómicas montadas en un formato portátil, adecuado para demostración clínica, docencia y exhibición especializada. Fabricado en PVC importado con pintura de acabado realista y alta calidad visual. **Modelo: A17110**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 185,

  image: "/images/maquetas/A17110.png"
},

{
  id: "lp-a17201",
  name: "ANATOMÍA DEL OÍDO",
  description:
    "Permite la visualización anatómica completa de las estructuras que conforman el sistema auditivo, abarcando oído externo, medio e interno en un modelo a escala aumentada. Incluye componentes desmontables que facilitan la identificación de elementos clave como el tímpano, los huesecillos del oído, la cóclea y el laberinto con sus nervios asociados, favoreciendo una comprensión clara de su organización y relación espacial. Se presenta montado sobre base y fabricado en PVC avanzado con acabado de pintura realista para demostración y exhibición profesional. **Modelo: A17201**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 190,

  image: "/images/maquetas/A17201.png"
},

{
  id: "lp-a17202",
  name: "OÍDO AMPLIADO",
  description:
    "Permite la visualización detallada de las estructuras del sistema auditivo mediante un modelo a escala aumentada que abarca oído externo, medio e interno. Incorpora múltiples componentes desmontables que facilitan la identificación de elementos como el pabellón auricular, el conducto auditivo externo, el tímpano, los huesecillos del oído y el laberinto, favoreciendo una comprensión clara de su organización anatómica y relaciones espaciales. Fabricado en PVC avanzado con acabado de pintura realista y montado sobre base para demostración y exhibición profesional. **Modelo: A17202**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 195,

  image: "/images/maquetas/A17202.png"
},

{
  id: "lp-a17203",
  name: "HUESECILLOS DEL OÍDO",
  description:
    "Permite la visualización ampliada de los elementos óseos que conforman la cadena de transmisión del oído medio. El modelo representa el martillo, yunque y estribo de manera individual y claramente diferenciada, facilitando la comprensión de su disposición anatómica y relación funcional. Presentado a escala aumentada y montado sobre base para una observación estable y precisa. Fabricado en PVC avanzado con acabado de pintura realista para demostración y exhibición profesional. **Modelo: A17203**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 200,

  image: "/images/maquetas/A17203.png"
},

{
  id: "lp-a17204",
  name: "OÍDO INTERNO CON HUESECILLOS Y MEMBRANA TIMPÁNICA",
  description:
    "Permite la visualización integrada de las principales estructuras implicadas en la audición mediante un conjunto que reúne el oído interno, la cadena de huesecillos y la membrana timpánica. El modelo facilita la comprensión de la relación anatómica y funcional entre estos componentes, ofreciendo una referencia clara para la demostración de los mecanismos de transmisión del sonido. Presentado a escala aumentada y montado sobre base para una observación estable. Fabricado en PVC avanzado con acabado de pintura realista para demostración y exhibición profesional. **Modelo: A17204**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 205,

  image: "/images/maquetas/A17204.png"
},

{
  id: "lp-a17205",
  name: "LABERINTO DEL OÍDO INTERNO",
  description:
    "Permite la visualización ampliada de las estructuras del sistema vestibular mediante un modelo del oído interno a gran escala. El diseño muestra los canales semicirculares y el vestíbulo abiertos, permitiendo observar componentes como el sáculo y el utrículo, facilitando la comprensión de su disposición anatómica y función relacionada con el equilibrio. Presentado montado sobre base para una observación estable y precisa. Fabricado en PVC avanzado con acabado de pintura realista para demostración y exhibición profesional. **Modelo: A17205**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 210,

  image: "/images/maquetas/A17205.png"
},

{
  id: "lp-a18001",
  name: "NEURONA AMPLIADA",
  description:
    "Permite la visualización detallada de la estructura celular del sistema nervioso mediante un modelo de neurona representado a gran escala. El conjunto muestra el cuerpo neuronal y la fibra nerviosa, facilitando la identificación de componentes como el axón, el cono axónico, el arbor dendrítico y los elementos estructurales asociados. Presentado en dos partes para una observación clara y ordenada. Fabricado en PVC avanzado con acabado de pintura realista para demostración y exhibición profesional. **Modelo: A18001**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 215,

  image: "/images/maquetas/A18001.png"
},

{
  id: "lp-a18002",
  name: "MÉDULA ESPINAL AMPLIADA",
  description:
    "Permite la visualización detallada de la estructura microanatómica del tejido nervioso dentro del canal vertebral mediante un modelo representado a gran escala. El diseño facilita la identificación de componentes celulares como axones, membranas presinápticas, vesículas sinápticas, mitocondrias y neurofilamentos, ofreciendo una referencia clara de la organización interna del sistema nervioso. Presentado montado sobre base para una observación estable y ordenada. Fabricado en PVC avanzado con acabado de pintura realista para demostración y exhibición profesional. **Modelo: A18002**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 220,

  image: "/images/maquetas/A18002.png"
},

{
  id: "lp-a18003",
  name: "FIBRA MUSCULAR ESQUELÉTICA CON PLACA MOTORA",
  description:
    "Permite la visualización detallada de la estructura microanatómica de la fibra muscular esquelética y su relación con la inervación motora. El modelo representa componentes internos como la membrana de la fibra, los núcleos celulares, las miofibrillas y los filamentos contráctiles, así como la unión neuromuscular con sus elementos presinápticos y postsinápticos. La escala aumentada facilita la comprensión de los mecanismos de transmisión del impulso nervioso hacia el músculo. Fabricado en PVC avanzado con acabado de pintura realista para demostración y exhibición profesional. **Modelo: A18003**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 225,

  image: "/images/maquetas/A18003.png"
},

{
  id: "A18101",
  name: "Sistema Nervioso Humano",
  description:
    "Representación a media escala que integra el sistema nervioso central y periférico, mostrando la distribución de los nervios espinales desde el eje central hacia las extremidades y el resto del cuerpo. Facilita la comprensión de la organización general de las vías nerviosas y su relación con las diferentes regiones anatómicas. **Modelo: A18101**",
  brand: "MesImport",
  type: "Sistema-nervioso",
  price: 230,
  image: "/images/maquetas/A18101.png"
},
{
  id: "A18102",
  name: "Médula Espinal en Canal Vertebral",
  description:
    "Representación detallada que permite observar el encéfalo, los nervios craneales y su continuidad con las estructuras nerviosas que recorren el canal vertebral. Facilita el análisis de la relación estructural entre el eje central y las ramificaciones periféricas en un contexto didáctico. **Modelo: A18102**",
  brand: "MesImport",
  type: "Sistema-nervioso",
  price: 235,
  image: "/images/maquetas/A18102.png"
},
{
  id: "A18103",
  name: "Médula Espinal con Ramificaciones Nerviosas",
  description:
    "Conjunto ampliado que combina una vista tridimensional y una vista en plano, permitiendo identificar con claridad las ramificaciones nerviosas y su disposición estructural. La escala aumentada favorece el estudio preciso de las conexiones y la morfología del tejido nervioso. **Modelo: A18103**",
  brand: "MesImport",
  type: "Sistema-nervioso",
  price: 240,
  image: "/images/maquetas/A18103.png"
},
{
  id: "A18104",
  name: "Vértebra Cervical C5 con Médula y Nervio",
  description:
    "Representación ampliada de la quinta vértebra cervical que permite observar la relación entre la estructura ósea y los componentes neurovasculares asociados, como nervios y vasos. Diseñada para el análisis anatómico preciso de la región cervical en entornos académicos. **Modelo: A18104**",
  brand: "MesImport",
  type: "Sistema-nervioso",
  price: 245,
  image: "/images/maquetas/A18104.png"
},
{
  id: "A18105",
  name: "Vértebra Cervical con Médula Espinal",
  description:
    "Representación que muestra la interacción entre una vértebra cervical y las estructuras nerviosas y vasculares asociadas, facilitando la comprensión de la anatomía cervical y su organización funcional. Adecuada para demostración y estudio especializado. **Modelo: A18105**",
  brand: "MesImport",
  type: "Sistema-nervioso",
  price: 250,
  image: "/images/maquetas/A18105.png"
},
{
  id: "A18106",
  name: "Vértebra Torácica con Médula Espinal",
  description:
    "Representación en corte transversal que permite observar la disposición interna del canal vertebral, incluyendo nervios espinales y ganglio espinal en la región torácica. Facilita el estudio de la relación entre las estructuras óseas y nerviosas en esta zona. **Modelo: A18106**",
  brand: "MesImport",
  type: "Sistema-nervioso",
  price: 255,
  image: "/images/maquetas/A18106.png"
},
{
  id: "A18107",
  name: "Vértebra Lumbar con Médula y Cola de Caballo",
  description:
    "Representación ampliada de la región lumbar que permite comprender la transición anatómica entre el extremo del eje nervioso central y las raíces que conforman la cola de caballo, así como su disposición dentro del canal vertebral. **Modelo: A18107**",
  brand: "MesImport",
  type: "Sistema-nervioso",
  price: 260,
  image: "/images/maquetas/A18107.png"
},



{
  id: "A18110",
  name: "Sistema Nervioso Autónomo",
  description:
    "Representación destinada al estudio de las vías autonómicas que regulan funciones involuntarias, mostrando de forma diferenciada los trayectos simpáticos y parasimpáticos mediante codificación cromática. Facilita la comprensión de su distribución y función reguladora sobre órganos y sistemas. **Modelo: A18110**",
  brand: "MesImport",
  type: "Sistema-nervioso",
  price: 275,
  image: "/images/maquetas/A18110.png"
},








{
  id: "A18215",
  name: "Tronco Encefálico en Sección Sagital",
  description:
    "Permite la visualización de las estructuras del tronco encefálico mediante secciones sagitales derecha e izquierda, facilitando el análisis de sus componentes y conexiones nerviosas con el encéfalo y la médula espinal. **Modelo: A18215**.",
  brand: "MesImport",
  type: "Sistema-nervioso",
  price: 330,
  image: "/images/maquetas/A18215.png"
},


{
  id: "A18111",
  name: "Nervios Autónomos – Modelo Eléctrico",
  description:
    "Facilita la comprensión de las vías operativas del sistema nervioso autónomo mediante una representación funcional de los trayectos simpáticos y parasimpáticos, permitiendo observar su organización y función reguladora. **Modelo: A18111**.",
  brand: "MesImport",
  type: "Sistema-nervioso",
  price: 345,
  image: "/images/maquetas/A18111.png"
},



{
  id: "A14001",
  name: "Sistema Urinario Humano",
  description:
    "Permite la visualización de riñones, uréteres y vejiga, facilitando la comprensión de la organización y conexión funcional de las estructuras del sistema excretor. **Modelo: A14001**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 390,
  image: "/images/maquetas/A14001.png"
},
{
  id: "A14004",
  name: "Sistema Urinario con Próstata",
  description:
    "Permite la visualización de la vejiga, la próstata y el riñón derecho mediante secciones desmontables que facilitan la observación de sus relaciones anatómicas. Diseñado para el análisis detallado del sistema urinario masculino en contextos educativos y profesionales. **Modelo: A14004**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 395,
  images: [
    "/images/maquetas/A14004-1.png",
    "/images/maquetas/A14004-2.png"
  ]
},
{
  id: "A19002",
  name: "Órganos Endocrinos",
  description:
    "Permite la visualización integrada de las principales glándulas y tejidos endocrinos, incluyendo hipófisis, tiroides, paratiroides, suprarrenales, islotes pancreáticos, testículos y ovarios. Facilita la comprensión de la distribución y función del sistema hormonal. **Modelo: A19002**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 400,
  image: "/images/maquetas/A19002.png"
},
{
  id: "A14002",
  name: "Órgano Urinario Femenino",
  description:
    "Permite la identificación clara de las estructuras principales del aparato urinario femenino, facilitando la comprensión de su disposición general para enseñanza y exhibición profesional. **Modelo: A14002**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 405,
  image: "/images/maquetas/A14002.png"
},
{
  id: "A14003",
  name: "Órgano Urinario Masculino",
  description:
    "Permite comprender la disposición general de las estructuras que conforman el aparato urinario masculino, siendo adecuado para estudio y demostración en contextos educativos. **Modelo: A14003**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 410,
  image: "/images/maquetas/A14003.png"
},
{
  id: "A14005",
  name: "Riñón Ampliado",
  description:
    "Permite observar con detalle la organización interna del riñón a escala aumentada, incluyendo corteza, médula y componentes del sistema colector junto con estructuras vasculares principales. **Modelo: A14005**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 415,
  image: "/images/maquetas/A14005.png"
},
{
  id: "A14006",
  name: "Riñón y Glándula Suprarrenal",
  description:
    "Permite analizar la relación anatómica entre el riñón y la glándula suprarrenal, así como la disposición de sus estructuras internas en un formato ampliado para estudio detallado. **Modelo: A14006**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 420,
  image: "/images/maquetas/A14006.png"
},
{
  id: "A14007",
  name: "Riñón, Nefrón y Glomérulo",
  description:
    "Permite comprender la anatomía renal desde una perspectiva macro y microestructural mediante la integración de una sección renal, un nefrón y un glomérulo en un conjunto didáctico. **Modelo: A14007**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 425,
  image: "/images/maquetas/A14007.png"
},
{
  id: "A15101",
  name: "Pelvis Masculina en Sección Mediana",
  description:
    "Permite observar la relación entre estructuras urinarias y pélvicas mediante una sección mediana presentada sobre tablero, facilitando el estudio anatómico de esta región. **Modelo: A15101**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 430,
  image: "/images/maquetas/A15101.png"
},
{
  id: "A15104",
  name: "Pelvis Femenina en Sección Mediana",
  description:
    "Permite la visualización de estructuras pélvicas femeninas junto con vejiga y recto mediante una sección mediana clara y ordenada para docencia y exhibición especializada. **Modelo: A15104**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 435,
  image: "/images/maquetas/A15104.png"
},
{
  id: "A14008",
  name: "Segmento Renal Transparente",
  description:
    "Permite visualizar la disposición interna de vasos sanguíneos y nervios del riñón gracias a su diseño transparente, facilitando el estudio de la organización vascular renal. **Modelo: A14008**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 440,
  image: "/images/maquetas/A14008.png"
},
{
  id: "A15102",
  name: "Órganos Genitales Masculinos",
  description:
    "Permite estudiar la disposición de los órganos genitales masculinos mediante una sección mediana montada sobre base, incluyendo pene, próstata, vejiga y vesículas seminales. **Modelo: A15102**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 445,
  image: "/images/maquetas/A15102.png"
},
{
  id: "A15103",
  name: "Testículo Ampliado",
  description:
    "Permite observar con detalle la estructura interna del testículo mediante una escala aumentada que facilita la identificación de sus componentes y su organización interna en entornos educativos y profesionales. **Modelo: A15103**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 450,
  image: "/images/maquetas/A15103.png"
},
{
  id: "A15105",
  name: "Órganos Genitales Femeninos",
  description:
    "Permite la visualización integrada de las estructuras genitales femeninas internas y externas a través de un diseño desmontable que facilita su identificación clara y ordenada para estudio y demostración profesional. **Modelo: A15105**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 455,
  image: "/images/maquetas/A15105.png"
},


{
  id: "A15109",
  name: "Útero en Sección Sagital",
  description:
    "Permite observar la relación anatómica del útero con la vejiga, vagina, uréter y ovarios mediante una sección sagital clara, facilitando su estudio en enseñanza y demostración profesional. **Modelo: A15109**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 470,
  image: "/images/maquetas/A15109.png"
},
{
  id: "A15108",
  name: "Órganos Genitales Internos Femeninos",
  description:
    "Facilita el estudio comparativo de las estructuras internas femeninas mostrando en una vista frontal el útero y la vagina, y en la posterior el ovario y el uréter mediante secciones coronales. **Modelo: A15108**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 475,
  image: "/images/maquetas/A15108.png"
},
{
  id: "A15110",
  name: "Glándula Mamaria en Reposo",
  description:
    "Permite identificar la organización estructural de la glándula mamaria durante el período de reposo gracias a su diseño desmontable montado sobre base para observación educativa. **Modelo: A15110**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 480,
  image: "/images/maquetas/A15110.png"
},
{
  id: "A15111",
  name: "Glándula Mamaria en Lactancia",
  description:
    "Permite analizar los cambios estructurales asociados a la función secretora de la glándula mamaria durante la lactancia en un formato didáctico y demostrativo. **Modelo: A15111**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 485,
  image: "/images/maquetas/A15111.png"
},
{
  id: "A15112",
  name: "Periné Masculino",
  description:
    "Permite el estudio anatómico del periné masculino mostrando las regiones urogenital y anal, junto con músculos perineales y órganos genitales en tamaño real. **Modelo: A15112**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 490,
  image: "/images/maquetas/A15112.png"
},
{
  id: "A15113",
  name: "Periné Femenino",
  description:
    "Permite comprender la anatomía del periné femenino mediante la visualización de las regiones urogenital y anal, incluyendo músculos, nervios, vasos y órganos genitales. **Modelo: A15113**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 495,
  image: "/images/maquetas/A15113.png"
},


{
  id: "A127",
  name: "Modelo de Demostración de Parto",
  description:
    "Representación diseñada para la demostración del proceso de parto, integrando pelvis ósea femenina y cráneo fetal articulado mediante sistema flexible que permite múltiples posiciones para análisis didáctico. **Modelo: A127**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 590,
  image: "/images/maquetas/A127.png"
},















{
  id: "A19001",
  name: "Modelo Eléctrico del Sistema Hipotálamo-Hipofisario",
  description:
    "Permite demostrar la relación funcional entre la secreción hormonal del hipotálamo y la hipófisis, así como su acción reguladora sobre distintos órganos diana mediante un sistema eléctrico didáctico. **Modelo: A19001**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 350,
  image: "/images/maquetas/A19001.png"
},
{
  id: "A41001",
  name: "Sección de Piel",
  description:
    "Facilita la identificación de las capas cutáneas, folículo piloso, glándulas sudoríparas y órganos sensoriales mediante una representación seccionada con referencias anatómicas claras. **Modelo: A41001**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 355,
  image: "/images/maquetas/A41001.png"
},
{
  id: "A41002",
  name: "Bloque de Piel del Cuero Cabelludo",
  description:
    "Permite analizar la estructura del cuero cabelludo y la disposición del cabello en distintos planos de sección, mediante una representación ampliada para estudio anatómico detallado. **Modelo: A41002**.",
  brand: "MesImport",
  type: "Sistemas-orgánicos",
  price: 360,
  image: "/images/maquetas/A41002.png"
},
{
  id: "A41003",
  name: "Ovario Ampliado",
  description:
    "Permite observar las distintas etapas del desarrollo ovárico, incluyendo folículos primarios y secundarios, ovulación, cuerpo lúteo y cuerpo albicans, mediante una representación a escala aumentada. **Modelo: A41003**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 365,
   images: [ "/images/maquetas/A41003-1.png",
            "/images/maquetas/A41003-2.png"
            ]
},
{
  id: "A42010-2",
  name: "Placenta Ampliada en Sección Transversal",
  description:
    "Facilita el estudio de la estructura placentaria mediante un corte transversal ampliado que permite identificar sus componentes y relaciones anatómicas principales. **Modelo: A42010-2**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 370,
  image: "/images/maquetas/A42010-2.png"
},
{
  id: "A42002",
  name: "Fecundación Humana y Embriogénesis Temprana",
  description:
    "Presenta el desarrollo desde la fecundación hasta el tercer mes de gestación, permitiendo seguir de forma progresiva las etapas iniciales del desarrollo humano. **Modelo: A42002**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 375,
  image: "/images/maquetas/A42002.png"
},
{
  id: "A42003",
  name: "Fecundación Humana y Embriogénesis Intermedia",
  description:
    "Permite visualizar el proceso de desarrollo embrionario desde la fecundación hasta la cuarta semana, facilitando la comprensión de los cambios morfológicos tempranos. **Modelo: A42003**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 380,
  image: "/images/maquetas/A42003.png"
},
{
  id: "A42001",
  name: "Simulador del Proceso de Fecundación",
  description:
    "Facilita la explicación del proceso de fecundación mediante secciones frontales de los órganos genitales femeninos montadas en tablero didáctico. **Modelo: A42001**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 385,
  image: "/images/maquetas/A42001.png"
},
{
  id: "A42010-1",
  name: "Placenta y Cordón Umbilical",
  description:
    "Permite estudiar la estructura de la placenta y su relación anatómica con el cordón umbilical mediante una representación clara y referenciada. **Modelo: A42010-1**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 390,
  image: "/images/maquetas/A42010-1.png"
},
{
  id: "A42004",
  name: "Embrión – 4 Semanas",
  description:
    "Permite la observación detallada de un embrión humano en etapa temprana de desarrollo, con identificación de estructuras embrionarias iniciales. **Modelo: A42004**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 395,
  image: "/images/maquetas/A42004.png"
},
{
  id: "A42006",
  name: "Pelvis Femenina con Útero – Embarazo de 9 Meses",
  description:
    "Muestra una sección medial de la pelvis femenina con el útero en el noveno mes de gestación, permitiendo identificar referencias anatómicas del feto a término. **Modelo: A42006**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 400,
  image: "/images/maquetas/A42006.png"
},
{
  id: "A42005",
  name: "Desarrollo Embrionario y Fetal",
  description:
    "Permite seguir de forma progresiva el desarrollo prenatal desde el primer hasta el séptimo mes mediante un conjunto secuencial de piezas representativas. **Modelo: A42005**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 405,
  image: "/images/maquetas/A42005.png"
},
{
  id: "A42008",
  name: "Feto con Vísceras y Placenta",
  description:
    "Facilita el estudio de la anatomía fetal avanzada mediante una representación a término con placenta, cordón umbilical y órganos internos visibles. **Modelo: A42008**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 410,
  image: "/images/maquetas/A42008.png"
},
{
  id: "A42009",
  name: "Sistema Circulatorio Fetal",
  description:
    "Permite analizar la circulación fetal mediante la visualización de cavidades torácica y abdominal, corazón, placenta y conductos vasculares característicos. **Modelo: A42009**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 415,
  image: "/images/maquetas/A42009.png"
},
{
  id: "A42007",
  name: "Proceso del Parto",
  description:
    "Facilita la comprensión de las etapas del trabajo de parto mediante un simulador didáctico que integra útero, feto y placenta a escala real. **Modelo: A42007**.",
  brand: "MesImport",
  type: "Reproducción-y-desarrollo",
  price: 420,
  image: "/images/maquetas/A42007.png"
},

];
