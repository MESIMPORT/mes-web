// src/data/products/oftalmologiaYOptometria.js

export const oftalmologiaYOptometriaProducts = [

  // ─── 1. TEST DE ISHIHARA ──────────────────────────────────────────────────────
  {
    id: "test-ishihara",
    name: "TEST DE ISHIHARA",
    type: "Tests-visuales",
    description: "Prueba diagnóstica de percepción del color diseñada para detectar deficiencias en la visión cromática, especialmente el daltonismo de tipo rojo-verde. Compuesto por láminas pseudoisocromáticas con figuras numéricas o de trazado ocultas dentro de patrones de puntos de colores, permitiendo identificar con precisión el tipo y grado de deficiencia cromática. Herramienta estándar en consultas oftalmológicas, optométricas, medicina laboral y evaluaciones de ingreso universitario. Edición de 38 láminas en colores fieles al estándar original Ishihara.",
    price: 350,
    image: "/images/optometria/ishihara.jpg"
  },

  // ─── 2. TEST DE STEREOPSIS MOSCA ─────────────────────────────────────────────
  {
    id: "test-stereopsis",
    name: "TEST DE STEREOPSIS MOSCA",
    type: "Tests-visuales",
    description: "Prueba diagnóstica para evaluación de la percepción de profundidad y visión binocular estereoscópica mediante imagen polarizada de mosca en 3D. Permite detectar alteraciones en la coordinación ocular, ambliopía, estrabismo y otros problemas relacionados con la fusión binocular y la visión tridimensional. Incluye láminas de test estereoscópico y gafas polarizadas para su correcta aplicación. Indicado para consultas de oftalmología pediátrica, optometría y programas de detección precoz de ambliopía en universidades.",
    price: 1800,
    image: "/images/optometria/mosca.jpg"
  },

  // ─── 3. OCLUSOR OFTÁLMICO ─────────────────────────────────────────────────────
  {
    id: "oclusores-oftalmico",
    name: "OCLUSOR OFTÁLMICO",
    type: "Accesorios-clinicos",
    description: "Oclusor oftálmico de plástico resistente y liviano diseñado para bloquear completamente la visión de un ojo durante exámenes de agudeza visual, terapia de ambliopía, pruebas de visión binocular y evaluación de motilidad ocular. Color azul opaco que garantiza oclusión total sin filtrado de luz. Diseño ergonómico con mango anatómico para sujeción cómoda por parte del clínico o del paciente. Superficie lisa de fácil limpieza y desinfección para uso clínico diario. Ideal para consultorios oftalmológicos, optométricos y laboratorios de optometría universitaria. || Material: Plástico ABS | Color: Azul opaco | Uso: Examen de agudeza visual, terapia de ambliopía, pruebas binoculares.",
    price: 30,
    image: "/images/optometria/oclusores.png"
  },

  // ─── 4. LENSÓMETRO MBLENS MLM-4 ──────────────────────────────────────────────
  {
    id: "lensometro-de-lectura-externa-mblens-mlm-4",
    name: "LENSÓMETRO DE LECTURA EXTERNA MBLENS MLM-4",
    type: "Equipos-de-refraccion",
    description: "Lensómetro manual de lectura externa MBLens MLM-4 para medición precisa de la potencia esférica, cilíndrica y eje de lentes oftálmicos monofocales, bifocales y progresivos. Permite verificar la graduación de lentes antes y después de la entrega al paciente, y marcar el centro óptico para el montaje correcto en la montura. Óptica de alta definición con iluminación interna uniforme, escala de medición nítida y sistema de bloqueo de lente estable. Indispensable en laboratorios de óptica, consultorios de optometría y prácticas universitarias de ciencias de la visión. || Modelo: MLM-4 | Marca: MBLens | Tipo: Lectura externa manual | Rango esférico: ±20 D | Rango cilíndrico: ±10 D | Paso: 0.25 D | Uso: Verificación de lentes, montaje óptico, laboratorio.",
    price: 1560,
    image: "/images/optometria/lensometro.png"
  },

  // ─── 5. GAFAS DE SEGURIDAD OFTÁLMICAS ────────────────────────────────────────
  {
    id: "gafas-de-seguridad",
    name: "GAFAS DE SEGURIDAD OFTÁLMICAS",
    type: "Accesorios-clinicos",
    description: "Gafas de protección ocular para uso en laboratorios de optometría, prácticas universitarias de ciencias de la visión y procedimientos clínicos donde se manipulan soluciones de limpieza de lentes, reactivos de laboratorio o equipos de luz intensa. Montura ligera en policarbonato con lente panorámico de amplio campo visual, protección lateral integrada y ventilación indirecta para evitar el empañamiento. Compatibles para uso sobre gafas de prescripción. || Material: Policarbonato | Protección: UV y lateral | Ventilación: Indirecta antiempañamiento | Uso: Laboratorio de optometría, clínica, prácticas universitarias.",
    price: 6,
    image: "/images/optometria/gafas-seguridad.png"
  },

  // ─── TESTS VISUALES ───────────────────────────────────────────────────────────

  // 1. TEST DE SNELLEN
  {
    id: "cartilla-agudeza-visual-snellen",
    name: "CARTILLA DE AGUDEZA VISUAL – SNELLEN",
    type: "Tests-visuales",
    description: "Cartilla de agudeza visual de Snellen para evaluación objetiva de la visión lejana en consultas de oftalmología, optometría y medicina general. Disponible en versión cartel impreso estándar para pared, versión panel iluminado retroiluminado para condiciones de luz controlada y versión proyector de optotipos para consultorios equipados. Letras y símbolos en escala logarítmica calibrada a 6 metros, con filas de optotipos desde 20/200 hasta 20/10. La versión para niños sustituye letras por figuras (E de Snellen, figuras de LEA). Herramienta estándar en consultas clínicas, tamizajes universitarios y evaluaciones de ingreso laboral.",
    image: "/images/optometria/SNELLEN_CARD.png",

    attributeOrder: ["version"],

    attributes: [
      {
        id: "version",
        label: "Versión",
        type: "single",
        values: [
          { id: "cartel", label: "Cartel impreso para pared" },
          { id: "iluminado", label: "Panel iluminado retroiluminado" },
          { id: "proyector", label: "Proyector de optotipos" },
          { id: "ninos", label: "Figuras pediátricas (E / LEA)" }
        ]
      }
    ],

    variants: [
      {
        sku: "snellen-cartel",
        attrs: { version: "cartel" },
        name: "CARTEL IMPRESO PARA PARED",
        description: "Cartilla de Snellen impresa en material resistente para montaje en pared. Calibrada para lectura a 6 m. Optotipos desde 20/200 hasta 20/10. Ideal para consultorios con espacio reducido o tamizajes en campo. || Distancia: 6 m | Optotipos: 20/200 – 20/10 | Material: Laminado resistente | Uso: Consulta, tamizaje.",
        price: 5,
        image: "/images/optometria/SNELLEN_CARTEL.png"
      },
      {
        sku: "snellen-iluminado",
        attrs: { version: "iluminado" },
        name: "PANEL ILUMINADO RETROILUMINADO",
        description: "Panel de agudeza visual Snellen con retroiluminación LED uniforme para evaluación en condiciones de iluminación controlada. Luminancia calibrada según estándar ISO. Optotipos desde 20/200 hasta 20/10. || Distancia: 6 m | Iluminación: LED retroiluminado calibrado | Optotipos: 20/200 – 20/10 | Uso: Consulta clínica, optometría.",
        price: 5,
        image: "/images/optometria/SNELLEN_PANEL.png"
      },
      {
        sku: "snellen-proyector",
        attrs: { version: "proyector" },
        name: "PROYECTOR DE OPTOTIPOS",
        description: "Proyector de optotipos con múltiples tablas de agudeza visual (Snellen, ETDRS, LogMAR), filtros de color, rejillas y test binoculares. Control remoto incluido. Compatible con pantalla de proyección estándar. Ideal para consultorios de optometría equipados. || Tablas: Snellen, ETDRS, LogMAR + binoculares | Control: Remoto | Uso: Consulta completa de refracción.",
        price: 5,
        image: "/images/optometria/SNELLEN_PROYECTOR.png"
      },
      {
        sku: "snellen-ninos",
        attrs: { version: "ninos" },
        name: "FIGURAS PEDIÁTRICAS (E / LEA)",
        description: "Cartilla de agudeza visual para niños con optotipos de figura E de Snellen y figuras LEA (casa, manzana, círculo, cuadrado) para evaluación en pacientes no alfabetizados o pediátricos. Calibrada a 3 y 6 m. || Distancia: 3–6 m | Optotipos: E de Snellen + figuras LEA | Uso: Pediatría, tamizaje escolar.",
        price: 5,
        image: "/images/optometria/SNELLEN_NINOS.png"
      }
    ]
  },

  // 2. TEST DE RANDOT
  {
    id: "test-randot-estereopsis",
    name: "TEST DE RANDOT – ESTEREOPSIS",
    type: "Tests-visuales",
    description: "Prueba diagnóstica de estereopsis y visión binocular que utiliza figuras al azar (random dot) en lugar de siluetas reconocibles, eliminando la posibilidad de que el paciente adivine la figura por su contorno monocular. Permite cuantificar el umbral de estereopsis en segundos de arco (40″ a 400″) y detectar ambliopía, estrabismo y alteraciones de la fusión binocular con mayor sensibilidad que los test de estereopsis con contornos. Incluye láminas de test y gafas polarizadas. Indicado para optometría clínica, consultas pediátricas y laboratorios universitarios de visión binocular.",
    price: 5,
    image: "/images/optometria/RANDOT_CARD.png"
  },

  // 3. TEST WORTH 4 DOTS
  {
    id: "test-worth-4-dots",
    name: "TEST WORTH 4 DOTS",
    type: "Tests-visuales",
    description: "Prueba clásica de fusión binocular y supresión ocular que utiliza cuatro puntos luminosos (1 rojo arriba, 2 verdes laterales y 1 blanco abajo) visualizados con gafas rojo-verde. Permite evaluar la fusión binocular, detectar supresión monocular y diplopia, y determinar el ojo dominante. Disponible en versión linterna para evaluación a distancia de trabajo y en versión panel iluminado para evaluación a 6 m. Esencial en optometría clínica, ortóptica y prácticas universitarias de visión binocular. || Incluye: Linterna o panel + gafas rojo-verde | Evaluación: Fusión, supresión, diplopia | Uso: Optometría, ortóptica, universidad.",
    price: 5,
    image: "/images/optometria/WORTH_CARD.png"
  },

  // ─── EQUIPOS ──────────────────────────────────────────────────────────────────

  // 4. RETINOSCOPIO
  {
    id: "retinoscopio",
    name: "RETINOSCOPIO",
    type: "Equipos-de-refraccion",
    description: "Retinoscopio de raya para evaluación objetiva del error refractivo sin necesidad de respuesta del paciente. Proyecta un haz de luz en raya sobre la retina permitiendo al examinador determinar la esfera, cilindro y eje del error refractivo mediante el análisis del reflejo pupilar. Indispensable en optometría clínica, oftalmología pediátrica y en el examen de pacientes no colaboradores. Disponible en tres marcas de referencia: Welch Allyn Elite HPX (2.8× más luminosidad que estándar), Heine Beta 200 y Riester ri-scope. Todos compatibles con mangos recargables de 3.5 V.",
    image: "/images/optometria/RETINOSCOPIO_CARD.png",

    attributeOrder: ["marca"],

    attributes: [
      {
        id: "marca",
        label: "Marca",
        type: "single",
        values: [
          { id: "welch-allyn", label: "Welch Allyn Elite HPX" },
          { id: "heine", label: "Heine Beta 200" },
          { id: "riester", label: "Riester ri-scope XL" }
        ]
      }
    ],

    variants: [
      {
        sku: "retinoscopio-welch-allyn",
        attrs: { marca: "welch-allyn" },
        name: "WELCH ALLYN ELITE HPX",
        description: "Retinoscopio Welch Allyn Elite HPX de raya halógena 3.5 V. Luminosidad 2.8× superior a retinoscopios estándar para refracciones más rápidas incluso en pupilas pequeñas. Filtro polarizador lineal cruzado que elimina reflejos de lentes de prueba. Control externo de enfoque, óptica sellada libre de polvo y diseño modular intercambiable entre franja y punto. Compatible con todas las fuentes 3.5 V Welch Allyn. || Modelo: Elite HPX | Ref: 18245 | Voltaje: 3.5 V | Iluminación: Halógena HPX | Compatible: Mangos recargables 3.5 V Welch Allyn.",
        price: 5,
        image: "/images/optometria/RETINOSCOPIO_WA.png"
      },
      {
        sku: "retinoscopio-heine",
        attrs: { marca: "heine" },
        name: "HEINE BETA 200",
        description: "Retinoscopio Heine Beta 200 de raya con óptica de fibra óptica para iluminación homogénea y sin deslumbramiento. Sistema de enfoque integrado con rotación suave del espejo, franja nítida y bien definida para retinoscopia precisa. Compatible con mangos Beta 4 USB recargables y mangos de pilas estándar 3.5 V. || Modelo: Beta 200 | Marca: Heine | Óptica: Fibra óptica | Compatible: Mangos Beta 4 USB + 3.5 V.",
        price: 5,
        image: "/images/optometria/RETINOSCOPIO_HEINE.png"
      },
      {
        sku: "retinoscopio-riester",
        attrs: { marca: "riester" },
        name: "RIESTER RI-SCOPE XL",
        description: "Retinoscopio Riester ri-scope XL de raya con lámpara de fibra óptica 3.5 V. Franja brillante y uniforme, sistema de rotación del espejo de precisión y cabezal de diseño compacto. Compatible con mango tipo C recargable a la red y mango estándar de pilas 3.5 V. || Modelo: ri-scope XL | Marca: Riester | Voltaje: 3.5 V | Óptica: Fibra óptica | Compatible: Mango tipo C recargable.",
        price: 5,
        image: "/images/optometria/RETINOSCOPIO_RIESTER.png"
      }
    ]
  },

  // 5. LÁMPARA DE HENDIDURA
  {
    id: "lampara-de-hendidura",
    name: "LÁMPARA DE HENDIDURA (BIOMICROSCOPIO OCULAR)",
    type: "Equipos-de-diagnostico",
    description: "Lámpara de hendidura o biomicroscopio ocular para examen del segmento anterior y posterior del ojo con iluminación de raya ajustable y microscopio binocular estereoscópico de alta definición. Permite examinar párpados, conjuntiva, córnea, iris, cristalino y, con lentes accesorias, la retina y el nervio óptico. Imprescindible en toda consulta de oftalmología y optometría clínica. Disponible en versión de mesa estacionaria con soporte y mesa de elevación, y versión portátil para trabajo en campo o visitas domiciliarias. Compatible con tonómetro de Goldmann y cámara fotográfica mediante adaptador.",
    image: "/images/optometria/HENDIDURA_CARD.png",

    attributeOrder: ["version"],

    attributes: [
      {
        id: "version",
        label: "Versión",
        type: "single",
        values: [
          { id: "estacionaria", label: "Estacionaria con mesa" },
          { id: "portatil", label: "Portátil" }
        ]
      }
    ],

    variants: [
      {
        sku: "hendidura-estacionaria",
        attrs: { version: "estacionaria" },
        name: "ESTACIONARIA CON MESA",
        description: "Lámpara de hendidura estacionaria con mesa de elevación motorizada o manual. Microscopio binocular galileo con 2–3 aumentos (10×, 16×, 25×), iluminación halógena o LED calibrada, ancho de raya ajustable 0–9 mm, altura 1–13 mm y ángulo 0–180°. Filtros: calor, gris, rojo libre y azul cobalto. Compatible con tonómetro de Goldmann y adaptador de cámara. || Aumentos: 10×, 16×, 25× | Iluminación: Halógena/LED | Ancho raya: 0–9 mm | Filtros: Calor, gris, rojo libre, azul cobalto | Incluye: Mesa de elevación.",
        price: 5,
        image: "/images/optometria/HENDIDURA_MESA.png"
      },
      {
        sku: "hendidura-portatil",
        attrs: { version: "portatil" },
        name: "PORTÁTIL",
        description: "Lámpara de hendidura portátil con batería recargable para examen ocular en campo, visitas domiciliarias, pediatría y urgencias. Microscopio binocular compacto con iluminación LED, raya ajustable y filtros básicos. Ligera y de fácil transporte sin perder capacidad diagnóstica esencial. || Iluminación: LED recargable | Portabilidad: Alta | Uso: Campo, domicilio, pediatría, urgencias.",
        price: 5,
        image: "/images/optometria/HENDIDURA_PORTATIL.png"
      }
    ]
  },

  // 6. TONÓMETRO
  {
    id: "tonometro-presion-intraocular",
    name: "TONÓMETRO – PRESIÓN INTRAOCULAR",
    type: "Equipos-de-diagnostico",
    description: "Tonómetro para medición de la presión intraocular (PIO), parámetro clave en el diagnóstico y seguimiento del glaucoma. Disponible en dos tecnologías: tonómetro de no contacto o de aire (neumotonómetro), que mide sin tocar la córnea mediante soplo de aire sin necesidad de anestesia tópica, y tonómetro de aplanación de Goldmann, estándar de oro para mediciones de mayor precisión, que requiere contacto con la córnea previamente anestesiada y se acopla a la lámpara de hendidura. Ambos indicados para clínicas oftalmológicas y programas de detección de glaucoma en universidades.",
    image: "/images/optometria/TONOMETRO_CARD.png",

    attributeOrder: ["tipo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "no-contacto", label: "No contacto (neumotonómetro)" },
          { id: "goldmann", label: "Aplanación Goldmann" }
        ]
      }
    ],

    variants: [
      {
        sku: "tonometro-no-contacto",
        attrs: { tipo: "no-contacto" },
        name: "TONÓMETRO DE NO CONTACTO (NEUMOTONÓMETRO)",
        description: "Neumotonómetro para medición de presión intraocular sin contacto con la córnea mediante soplo de aire calibrado. No requiere anestesia tópica ni contacto directo, eliminando el riesgo de transmisión de infecciones. Medición rápida y bien tolerada por el paciente. Pantalla digital con lectura automática y memoria de mediciones. Ideal para tamizajes, consulta general y pediatría. || Método: Soplo de aire | Anestesia: No requerida | Lectura: Digital automática | Uso: Tamizaje, consulta general, pediatría.",
        price: 5,
        image: "/images/optometria/TONOMETRO_AIRE.png"
      },
      {
        sku: "tonometro-goldmann",
        attrs: { tipo: "goldmann" },
        name: "TONÓMETRO DE APLANACIÓN GOLDMANN",
        description: "Tonómetro de aplanación Goldmann, estándar de oro internacional para medición de presión intraocular. Se acopla a la lámpara de hendidura y mide la fuerza necesaria para aplanar un área corneal de 3.06 mm con fluoresceína. Requiere anestesia tópica y es el método de referencia para diagnóstico y seguimiento de glaucoma. || Método: Aplanación corneal | Acoplamiento: Lámpara de hendidura | Anestesia: Tópica requerida | Estándar: ISO / OMS | Uso: Glaucoma, oftalmología clínica.",
        price: 5,
        image: "/images/optometria/TONOMETRO_GOLDMANN.png"
      }
    ]
  },

  // 7. CAJA DE PRUEBA CON LENTES
  {
    id: "caja-prueba-lentes-optometria",
    name: "CAJA DE PRUEBA CON LENTES – OPTOMETRÍA",
    type: "Equipos-de-refraccion",
    description: "Caja de prueba con set completo de lentes oftálmicos para refracción subjetiva manual. Incluye lentes esféricas positivas y negativas, lentes cilíndricas, prismas, filtros y accesorios montados en aros de metal pulido de alta precisión. Compatible con montura de prueba estándar. Esencial para práctica clínica en optometría y como material de enseñanza en laboratorios universitarios de ciencias de la visión. Disponible en set estándar de 266 lentes y set completo universitario de 360 lentes.",
    image: "/images/optometria/CAJA_PRUEBA_CARD.png",

    attributeOrder: ["set"],

    attributes: [
      {
        id: "set",
        label: "Set",
        type: "single",
        values: [
          { id: "266", label: "Set estándar – 266 lentes" },
          { id: "360", label: "Set universitario – 360 lentes" }
        ]
      }
    ],

    variants: [
      {
        sku: "caja-prueba-266",
        attrs: { set: "266" },
        name: "SET ESTÁNDAR – 266 LENTES",
        description: "Caja de prueba con 266 lentes oftálmicos de precisión en aros de metal pulido. Incluye esféricas +/- de 0.12 D a 20 D, cilíndricas de 0.12 D a 6 D, prismas de 1Δ a 10Δ, filtros de color y accesorios. Con montura de prueba incluida y estuche de almacenamiento. || Lentes: 266 | Rango esférico: 0.12–20 D | Cilíndricas: 0.12–6 D | Prismas: 1–10Δ | Incluye: Montura de prueba + estuche.",
        price: 5,
        image: "/images/optometria/CAJA_266.png"
      },
      {
        sku: "caja-prueba-360",
        attrs: { set: "360" },
        name: "SET UNIVERSITARIO – 360 LENTES",
        description: "Caja de prueba completa con 360 lentes oftálmicos de alta precisión para laboratorios universitarios de optometría. Cobertura extendida de potencias esféricas, cilíndricas y prismáticas para práctica docente completa. Incluye lentes de Maddox, pinhole, filtros polarizados y neutros, y montura de prueba ajustable. || Lentes: 360 | Incluye: Lentes de Maddox, pinhole, filtros polarizados | Uso: Laboratorio universitario, práctica docente.",
        price: 5,
        image: "/images/optometria/CAJA_360.png"
      }
    ]
  },

  // 8. FORÓPTERO
  {
    id: "foroptero-refraccion-subjetiva",
    name: "FORÓPTERO",
    type: "Equipos-de-refraccion",
    description: "Foróptero para refracción subjetiva del paciente en consulta de optometría y oftalmología. Contiene una batería organizada de lentes esféricas, cilíndricas, prismas, filtros y accesorios que permiten al examinador realizar cambios rápidos de potencia mientras el paciente compara la agudeza visual a través del optotipo, determinando la graduación con máxima precisión y comodidad. Disponible en versión manual de precisión mecánica y versión digital con conectividad a sistemas de gestión clínica.",
    image: "/images/optometria/FOROPTERO_CARD.png",

    attributeOrder: ["tipo"],

    attributes: [
      {
        id: "tipo",
        label: "Tipo",
        type: "single",
        values: [
          { id: "manual", label: "Manual" },
          { id: "digital", label: "Digital" }
        ]
      }
    ],

    variants: [
      {
        sku: "foroptero-manual",
        attrs: { tipo: "manual" },
        name: "FORÓPTERO MANUAL",
        description: "Foróptero manual de precisión mecánica con rango esférico de ±20 D, cilíndrico de ±6 D, prismas hasta 20Δ y DIP ajustable de 48–80 mm. Ruedas de selección de lentes de acción suave con pasos de 0.25 D. Brazo articulado para montaje en columna de refracción. Robusto, de bajo mantenimiento y sin dependencia de energía eléctrica. || Rango esférico: ±20 D | Cilíndrico: ±6 D | Prismas: hasta 20Δ | DIP: 48–80 mm | Pasos: 0.25 D.",
        price: 5,
        image: "/images/optometria/FOROPTERO_MANUAL.png"
      },
      {
        sku: "foroptero-digital",
        attrs: { tipo: "digital" },
        name: "FORÓPTERO DIGITAL",
        description: "Foróptero digital motorizado con control remoto o tablet, cambios de lente silenciosos y precisos en 0.01 D. Compatible con proyector de optotipos digital para flujo de trabajo integrado. Exportación de resultados a software de gestión clínica. Rango esférico extendido hasta ±29 D. Ideal para consultas de alta productividad y universidades con laboratorio digital. || Rango esférico: hasta ±29 D | Paso: 0.01 D | Control: Remoto / tablet | Conectividad: Software clínico | Uso: Consulta digital, laboratorio universitario.",
        price: 5,
        image: "/images/optometria/FOROPTERO_DIGITAL.png"
      }
    ]
  },

  // 9. PRISMAS OFTÁLMICOS
  {
    id: "prismas-oftalmicos",
    name: "PRISMAS OFTÁLMICOS",
    type: "Equipos-de-refraccion",
    description: "Prismas oftálmicos para evaluación y medición de estrabismo, desviaciones oculares, diplopia y trastornos de la motilidad ocular. Desvían el rayo luminoso sin modificar la potencia focal, permitiendo neutralizar la desviación ocular del paciente y cuantificarla en dioptrías prismáticas (Δ). Disponibles en formato de barra de prismas para medición secuencial y en prismas sueltos de potencia individual para uso en montura de prueba o caja de refracción.",
    image: "/images/optometria/PRISMAS_CARD.png",

    attributeOrder: ["formato"],

    attributes: [
      {
        id: "formato",
        label: "Formato",
        type: "single",
        values: [
          { id: "barra", label: "Barra de prismas" },
          { id: "sueltos", label: "Prismas sueltos (set)" }
        ]
      }
    ],

    variants: [
      {
        sku: "prismas-barra",
        attrs: { formato: "barra" },
        name: "BARRA DE PRISMAS",
        description: "Barra de prismas oftálmicos para medición de desviaciones oculares en estrabismo y diplopia. Prismas montados en barra de plástico óptico de alta transparencia en potencias secuenciales de 1Δ a 40Δ. Disponible en barra horizontal (desviaciones horizontales) y vertical (desviaciones verticales). || Rango: 1–40Δ | Material: Plástico óptico | Orientación: Horizontal / vertical | Uso: Estrabismo, diplopia, ortóptica.",
        price: 5,
        image: "/images/optometria/PRISMAS_BARRA.png"
      },
      {
        sku: "prismas-sueltos",
        attrs: { formato: "sueltos" },
        name: "PRISMAS SUELTOS (SET)",
        description: "Set de prismas oftálmicos sueltos en aros de metal pulido para uso en montura de prueba o caja de refracción. Potencias individuales de 0.5Δ a 20Δ en pasos de 0.5 y 1 Δ. Vidrio óptico de alta transmitancia. || Rango: 0.5–20Δ | Material: Vidrio óptico | Aro: Metal pulido | Compatible: Montura de prueba, caja de refracción.",
        price: 5,
        image: "/images/optometria/PRISMAS_SUELTOS.png"
      }
    ]
  },

];