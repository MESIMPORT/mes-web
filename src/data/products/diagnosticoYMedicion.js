export const diagnosticoYMedicionProducts = [

{
  id: "seca-700",
  name: "BALANZA MECÁNICA SECA 700",
  description:
    "Balanza mecánica médica de alta precisión, diseñada para uso continuo en clínicas, hospitales y consultorios. Cuenta con estructura robusta, lectura analógica confiable y compatibilidad con tallímetro SECA 220 como accesorio opcional para evaluación antropométrica.",

  price: 1740,

  // Imagen base (estado inicial del PDP)
  image: "/images/diagnostico/SECA 700/seca700-1.png",

  // Galería base
  images: [
    "/images/diagnostico/SECA 700/seca700-1.png",
    "/images/diagnostico/SECA 700/seca700-2.png",
  ],

  attributes: [
    {
      id: "accessories",
      label: "Accesorios",
      type: "multi",
      values: [
        {
          id: "220",
          label: "+ TALLIMETRO 220",
          images: [
            
            "/images/diagnostico/SECA 700/seca700-tallimetro-2.png",
          ],
          priceDelta: 400
        }
      ]
    }
  ],

  technicalSections: {
    features: [
      "Capacidad de pesaje hasta 220 kg",
      "Alta precisión con divisiones finas (50 g / 100 g)",
      "Lectura analógica mediante dial de fácil visualización",
      "Construcción robusta para uso clínico intensivo",
      "Funcionamiento sin necesidad de energía eléctrica",
      "Bajo mantenimiento y alta durabilidad",
      "Compatible con tallímetro SECA 220 (accesorio opcional)"
    ]
  }
},

{
  id: "seca-703",
  name: "BALANZA DIGITAL SECA 703",
  description:
    "Equipo de pesaje médico profesional, diseñado para uso continuo en clínicas, hospitales y consultorios. Ofrece mediciones precisas y estables, con estructura robusta y compatibilidad con tallímetro SECA 220 para evaluación antropométrica completa.",

  price: 3260,

  image: "/images/diagnostico/SECA 703/seca703-1.png",

  // Galería BASE (siempre visible)
  images: [
    "/images/diagnostico/SECA 703/seca703-1.png",
    "/images/diagnostico/SECA 703/seca703-2.png",
  ],

  attributes: [
    {
      id: "accessories",
      label: "Accesorios",
      type: "multi",
      values: [
        {
          id: "220",
          label: "+ TALLIMETRO 220",
          images: [
            "/images/diagnostico/SECA 703/seca703-tallimetro.png",
            "/images/diagnostico/SECA 703/seca220.png",
          ],
          priceDelta: 400
        }
      ]
    }
  ],

  technicalSections: {
    features: [
      "Capacidad de pesaje hasta 300 kg",
      "Resolución de 50 g hasta 150 kg y 100 g por encima de 150 kg",
      "Cálculo automático de índice de masa corporal (IMC)",
      "Funciones HOLD y Auto-HOLD para retención de peso estable",
      "Función madre + niño para pesaje pediátrico",
      "Funciones TARE y Pre-TARE para descontar peso adicional",
      "Amortiguación en tres niveles para minimizar fluctuaciones",
      "Cambio de unidades: kg / lb / st",
      "Permite transmisión inalámbrica de datos de pesaje",
      "Compatible con tallímetro SECA 220 (accesorio opcional)"
    ]
  }
},

{
  id: "seca-777",
  name: "BALANZA DIGITAL C/TALLIMETRO SECA 777",
  description:
    "Báscula médica digital de columna con capacidad de 250 kg y graduación de 100 g. Integra estadímetro de 10–230 cm, pantalla a la altura de los ojos, cálculo de IMC, función HOLD, conmutación kg/lb, interfaz USB y plataforma metálica estable. Sus ruedas con recubrimiento de caucho facilitan el traslado y admite accesorios opcionales para mayor seguridad y personalización.",

  price: 2800,

  images: [
  "/images/diagnostico/SECA 777/seca777-1.png",
  "/images/diagnostico/SECA 777/seca777-2.png"
],


  technicalSections: {
    features: [
      "Capacidad de pesaje hasta 250 kg",
      "Alta precisión con graduación de 100 g",
      "Plataforma metálica robusta y de perfil bajo para mayor estabilidad",
      "Columna sólida con pantalla ubicada a la altura de los ojos",
      "Ruedas grandes con recubrimiento de caucho para fácil transporte",
      "Funciones TARA, HOLD y cambio de unidades kg / lb",
      "Cálculo automático del índice de masa corporal (IMC)",
      "Interfaz USB para transmisión de datos a PC o sistemas médicos",
      "Diseñada para uso clínico intensivo en hospitales y consultorios",
      "Cumple con normativa Medical Device Regulation (MDR)"
    ]
  },

  attributes: [
    {
      id: "accessories",
      label: "Accesorios",
      type: "multi",
      values: [
        {
          id: "401",
          label: "+ ADAPTADOR 401",
          images: [
            "/images/diagnostico/SECA 777/seca401.png"
          ]
        },
        {
          id: "459",
          label: "+ OSO PANDA 459",
          images: [
            "/images/diagnostico/SECA 777/seca459-1.png",
            "/images/diagnostico/SECA 777/seca459-2.png"
          ]
        },
        {
          id: "477",
          label: "+ PASAMANOS 477",
          images: [
            "/images/diagnostico/SECA 777/seca477-1.png",
            "/images/diagnostico/SECA 777/seca477-2.png"
          ]
        }
      ]
    }
  ]
},

{
  id: "seca-354",
  name: "BALANZA DIGITAL SECA 354",
  description:
    "Balanza digital electrónica de uso médico, diseñada para el pesaje preciso de recién nacidos y lactantes. Cuenta con diseño compacto, alta precisión, artesa ergonómica y funciones clínicas especializadas para uso hospitalario y consultorios pediátricos.",

  price: 960,

  // Imagen base (la que debe verse al entrar al PDP)
  image: "/images/diagnostico/SECA 354/seca354-1.png",

  technicalSections: {
    features: [
      "Capacidad de pesaje hasta 20 kg",
      "Diseño 2 en 1: bandeja removible para uso como balanza plana",
      "Alta precisión con divisiones de 5 g y 10 g según el peso",
      "Función HOLD y Auto-HOLD para retención del peso estable",
      "Función TARA para descontar pañales o mantas",
      "Bandeja ergonómica con bordes elevados para mayor seguridad",
      "Funcionamiento a pilas con autonomía de hasta 20,000 pesajes",
      "Cambio de unidades: kg / lb",
      "Diseño compacto, ligero y fácil de transportar",
      "Función BMIF para medición de ingesta de leche materna"
    ]
  },

  // 👇 NUEVO MODELO (igual que SECA 334)
  attributes: [
    {
      id: "accessories",
      label: "Accesorios",
      type: "multi",
      values: [
        {
          id: "413",
          label: "+ MOCHILA 413",
          images: [
            "/images/diagnostico/SECA 354/seca413-1.png",
            "/images/diagnostico/SECA 354/seca413-2.png",
            "/images/diagnostico/SECA 354/seca413-3.png"
          ]
        }
      ]
    }
  ]
},


{
  id: "seca-725",
  name: "BALANZA MECÁNICA SECA 725",
  description:
    "Balanza mecánica de uso médico, diseñada especialmente para el pesaje preciso de recién nacidos y lactantes. Ofrece mediciones confiables mediante sistema analógico, sin necesidad de energía eléctrica, ideal para hospitales, clínicas y consultorios pediátricos.",

  price: 1260,

  image: "/images/diagnostico/SECA 725/seca725-1.png",

  images: [
    "/images/diagnostico/SECA 725/seca725-1.png",
    "/images/diagnostico/SECA 725/seca725-2.png",
  ],

  technicalSections: {
    features: [
      "Capacidad de pesaje hasta 16 kg",
      "Sistema mecánico con pesas deslizantes de alta precisión",
      "Lectura analógica clara y confiable, sin necesidad de energía eléctrica",
      "Diseñada especialmente para el pesaje de recién nacidos y lactantes",
      "Bandeja amplia y ergonómica para una colocación segura del bebé",
      "Construcción robusta y estable para uso clínico continuo",
      "Alta precisión en rangos bajos de peso, ideal para control neonatal",
      "Funcionamiento sin baterías ni componentes electrónicos",
      "Fácil ajuste a cero para mediciones exactas",
      "Bajo mantenimiento y larga vida útil",
    ],
  },
},

{
  id: "seca-334",
  name: "BALANZA DIGITAL SECA 334",
  description:
    "Balanza electrónica portátil para recién nacidos y lactantes, con alta precisión y función BMIF para control clínico neonatal. Alimentación por pilas AA y opción de adaptador de corriente externo (opcional).",
  price: 2200,

  image: "/images/diagnostico/SECA 334/seca334.png",

  technicalSections: {
    features: [
      "Capacidad de pesaje hasta 20 kg",
      "Alta precisión con división de 5 g hasta 10 kg y 10 g por encima",
      "Función BMIF para medición de ingesta de leche materna",
      "Bandeja amplia y ergonómica para mayor confort del bebé",
      "Pantalla LCD iluminada de fácil lectura",
      "Funciones TARA, auto-HOLD, cambio kg/lb y apagado automático",
      "Diseño portátil y ligero (2.8 kg)",
      "Funcionamiento con pilas o alimentación eléctrica opcional",
      "Auto-amortiguación del movimiento para resultados confiables"
    ]
  },

 attributes: [
  {
    id: "accessories",
    label: "Accesorios",
    type: "multi",
    values: [
      {
        id: "428",
        label: "+ MOCHILA 428",
        images: [
          "/images/diagnostico/SECA 334/seca428-1.png",
          "/images/diagnostico/SECA 334/seca428-2.png"
        ]
      },
      {
        id: "447",
        label: "+ ADAPTADOR 447",
        images: ["/images/diagnostico/SECA 334/seca447.png"]
      },
      {
        id: "400",
        label: "+ ADAPTADOR 400",
        images: ["/images/diagnostico/SECA 334/seca400.png"]
      },
      {
        id: "419",
        label: "+ TOPE 419",
        images: ["/images/diagnostico/SECA 334/seca419.png"]
      },
      {
        id: "232",
        label: "+ TALLIMETRO 232",
        images: [
          "/images/diagnostico/SECA 334/seca232.png",
          "/images/diagnostico/SECA 334/seca232-1.png"
        ]
      }
    ]
  }
],

rules: {
  incompatible: [
    ["447", "400"],
    ["419", "232"]
  ]
},
},

{
  id: "seca-374",
  name: "BALANZA DIGITAL SECA 374",
  description:
    "Balanza electrónica pediátrica diseñada para el pesaje preciso y seguro de recién nacidos y niños pequeños. Incorpora funciones avanzadas como BMIF, TARA y HOLD, además de conectividad inalámbrica para integración clínica.",

  price: 2200,

  image: "/images/diagnostico/SECA 374/seca374.png",

  technicalSections: {
    features: [
      "Capacidad de pesaje hasta 20 kg (44 lb)",
      "Alta precisión para control clínico neonatal y pediátrico",
      "Función BMIF para medición de ingesta de leche materna",
      "Funciones TARA, HOLD y auto-HOLD para mayor facilidad de uso",
      "Bandeja amplia con paredes laterales elevadas para mayor seguridad",
      "Pantalla LCD de fácil lectura",
      "Conectividad inalámbrica 360° wireless para transmisión de datos",
      "Diseño ergonómico, robusto y fácil de limpiar",
      "Funcionamiento mediante pilas o adaptador de corriente opcional"
    ]
  },

  attributes: [
    {
      id: "accessories",
      label: "Accesorios",
      type: "multi",
      values: [
        {
          id: "233",
          label: "+ TALLIMETRO 233",
          images: [
            "/images/diagnostico/SECA 374/seca233-1.png",
            "/images/diagnostico/SECA 374/seca233-2.png"
          ]
        },
        {
          id: "418",
          label: "+ TOPE DE CABEZA Y PIES 418",
          images: [
            "/images/diagnostico/SECA 374/seca418-1.png",
            "/images/diagnostico/SECA 374/seca418-2.png"
          ]
        },
        {
          id: "400",
          label: "+ ADAPTADOR 400",
          images: [
            "/images/diagnostico/SECA 374/seca400.png"
          ]
        }
      ]
    }
  ],

},

{
  id: "seca-803",
  name: "BALANZA DIGITAL PLATAFORMA SECA 803",
  description:
    "Balanza digital de plataforma diseñada para el control preciso y confiable del peso corporal en entornos clínicos y domiciliarios. Su diseño ultraplano con superficie antideslizante, manejo intuitivo y pantalla LCD de fácil lectura la convierten en una solución práctica, robusta y segura para el pesaje de pacientes adultos.",

  price: 450, 

  image: "/images/diagnostico/SECA 803/seca803-1.png",
  images: [
    "/images/diagnostico/SECA 803/seca803-1.png",
    "/images/diagnostico/SECA 803/seca803-2.png",
    "/images/diagnostico/SECA 803/seca803-3.png",
    "/images/diagnostico/SECA 803/seca803-4.png"
  ],

  technicalSections: {
    features: [
      "Capacidad de pesaje hasta 150 kg",
      "Alta precisión clínica con división de 100 g",
      "Diseño ultraplano que facilita el acceso y la estabilidad del paciente",
      "Superficie antideslizante para mayor seguridad durante el pesaje",
      "Pantalla LCD grande y de fácil lectura",
      "Encendido automático al subir a la plataforma (Tap-on)",
      "Apagado automático para ahorro de energía",
      "Medición en kilogramos y libras",
      "Estructura robusta y duradera para uso diario",
      "Uso ideal en clínicas, consultorios médicos y hogares"
    ]
  }
},

{
  id: "seca-813",
  name: "BALANZA DIGITAL PLATAFORMA SECA 813",
  description:
    "Balanza digital de plataforma diseñada para el pesaje preciso y confiable de pacientes adultos en entornos clínicos y domiciliarios. Cuenta con una plataforma amplia y antideslizante, alta capacidad de carga y una pantalla LCD de fácil lectura que garantiza mediciones seguras y estables.",

  price: 530,

  image: "/images/diagnostico/SECA 813/seca813-1.png",
  images: [
    "/images/diagnostico/SECA 813/seca813-1.png",
    "/images/diagnostico/SECA 813/seca813-2.png"
  ],

  technicalSections: {
    features: [
      "Capacidad de pesaje hasta 200 kg",
      "Alta precisión clínica con división de 100 g",
      "Plataforma amplia y superficie antideslizante para mayor seguridad",
      "Pantalla LCD de gran tamaño y fácil lectura",
      "Función HOLD para una lectura estable del peso",
      "Encendido automático al subir a la plataforma",
      "Apagado automático para ahorro de energía",
      "Diseño robusto, estable y fácil de transportar",
      "Uso ideal en clínicas, consultorios médicos y uso domiciliario"
    ]
  },

},

  {
  id: "seca-220",
  name: "TALLIMETRO SECA 220",
  description:
  "Accesorio clínico compatible con múltiples balanzas de columna SECA, como los modelos 700, 703, 709, 710 y 711, diseñado para integrar la medición de talla en un solo punto de atención. Ideal para entornos médicos que requieren eficiencia operativa y confiabilidad en el uso diario.",
  price: 400,
  image: "/images/diagnostico/SECA 220/seca700-tallimetro-2.png",

  technicalSections: {
  features: [
    "Rango de medición de estatura hasta 200 cm",
    "División de lectura precisa de 1 mm",
    "Diseño telescópico extensible y retráctil",
    "Instalación mural estable y segura",
    "Fabricado en aluminio resistente y duradero",
    "Cursor deslizante suave para mediciones exactas",
    "Lectura clara y fácil incluso en uso frecuente",
    "Ideal para uso clínico, hospitalario y consultorios médicos",
    "Compatible con balanzas médicas SECA para estaciones de medición"
  ]
},
},

{
  id: "seca-232",
  name: "TALLIMETRO SECA 232",
  description:
    "Accesorio clínico diseñado para integrar la medición de longitud corporal en el pesabebés SECA 334. La barra de medición SECA 232 permite realizar controles antropométricos completos de forma práctica y segura durante evaluaciones pediátricas y neonatales.",
  price: 400,
  image: "/images/diagnostico/SECA 232/seca232-1.png",
  images: [
    "/images/diagnostico/SECA 232/seca232-1.png",
    "/images/diagnostico/SECA 232/seca232-2.png"
  ],

  technicalSections: {
    features: [
      "Barra de medición original SECA",
      "Diseñada para integrar medición de longitud en pesabebés",
      "Compatible con pesabebés SECA 334",
      "Permite medición de longitud corporal en lactantes",
      "Facilita evaluaciones antropométricas completas",
      "Uso práctico y seguro en entorno clínico",
      "Fácil instalación y desmontaje",
      "Accesorio ideal para controles pediátricos y neonatales"
    ]
  },
},

{
  id: "seca-233",
  name: "TALLÍMETRO SECA 233",
  description:
    "Accesorio clínico diseñado para integrar la medición de longitud corporal en básculas pesabebés SECA. El tallímetro SECA 233 permite realizar evaluaciones antropométricas completas de forma práctica y segura durante controles pediátricos y neonatales.",
  price: 400,
  image: "/images/diagnostico/SECA 233/seca233-1.png",
  images: [
    "/images/diagnostico/SECA 233/seca233-1.png",
    "/images/diagnostico/SECA 233/seca233-2.png"
  ],

  technicalSections: {
    features: [
      "Tallímetro original SECA",
      "Compatible con básculas pesabebés SECA 376 y SECA 374",
      "Permite medición de longitud corporal en lactantes",
      "Facilita evaluaciones antropométricas completas",
      "Uso práctico y seguro en entorno clínico",
      "Diseñado para controles pediátricos y neonatales",
      "Instalación sencilla sobre el equipo compatible",
      "Accesorio ideal para hospitales y consultorios pediátricos"
    ]
  },
},

{
  id: "seca-400",
  name: "ADAPTADOR DE CORRIENTE SECA 400",
  description:
    "Adaptador de corriente original SECA para conexión a red eléctrica, diseñado para proporcionar una alimentación estable y segura a equipos médicos compatibles. El SECA 400 es ideal para entornos clínicos que requieren operación continua y confiable del equipo.",
  price: 400,
  image: "/images/diagnostico/SECA 400/seca400.png",

  technicalSections: {
    features: [
      "Adaptador de corriente original SECA",
      "Diseñado para conexión a red eléctrica",
      "Proporciona alimentación estable y segura al equipo",
      "Compatible con equipos médicos SECA seleccionados",
      "Ideal para uso continuo en entornos clínicos",
      "Fabricación robusta y duradera",
      "Accesorio esencial para el funcionamiento del equipo"
    ]
  },
},


{
  id: "seca-401",
  name: "ADAPTADOR DE CORRIENTE SECA 401",
  description:
    "Adaptador de corriente original SECA diseñado para suministrar energía estable y segura a las balanzas SECA 787 y SECA 777. El SECA 401 es ideal para entornos clínicos que requieren funcionamiento continuo y confiable del equipo.",
  price: 400,
  image: "/images/diagnostico/SECA 401/seca401.png",

  technicalSections: {
    features: [
      "Adaptador de corriente original SECA",
      "Compatible con balanzas SECA 787 y SECA 777",
      "Proporciona alimentación eléctrica estable y segura",
      "Diseñado para uso continuo en entornos clínicos",
      "Protege el equipo frente a variaciones de energía",
      "Fabricación robusta para mayor durabilidad",
      "Accesorio esencial para el correcto funcionamiento del equipo"
    ]
  },
},

{
  id: "seca-418",
  name: "TOPES PARA PIES Y CABEZA SECA 418",
  description:
    "Accesorio clínico diseñado para asegurar la correcta posición del lactante durante el pesaje y la medición en pesabebés SECA. Los topes SECA 418 mejoran la estabilidad del paciente y contribuyen a obtener mediciones más precisas en controles pediátricos y neonatales.",
  price: 400,
  image: "/images/diagnostico/SECA 418/seca418-1.png",
  images: [
    "/images/diagnostico/SECA 418/seca418-1.png",
    "/images/diagnostico/SECA 418/seca418-2.png"
  ],

  technicalSections: {
    features: [
      "Topes para pies y cabeza originales SECA",
      "Compatibles con pesabebés SECA 376, SECA 375 y SECA 374",
      "Ayudan a mantener una posición correcta del lactante",
      "Mejoran la estabilidad durante el pesaje y la medición",
      "Diseñados para uso pediátrico y neonatal",
      "Fáciles de instalar y retirar",
      "Fabricación robusta para uso clínico frecuente",
      "Accesorio ideal para hospitales y consultorios pediátricos"
    ]
  },
},

{
  id: "seca-419",
  name: "TOPE PARA CABEZA SECA 419",
  description:
    "Accesorio clínico diseñado para asegurar una correcta posición de la cabeza durante el pesaje y medición en pesabebés SECA. El tope SECA 419 mejora la estabilidad del paciente y la precisión del procedimiento en controles pediátricos y neonatales.",
  price: 400,
  image: "/images/diagnostico/SECA 419/seca419.png",

  technicalSections: {
    features: [
      "Tope para cabeza original SECA",
      "Compatible con pesabebés SECA 334 y SECA 336",
      "Ayuda a mantener una posición correcta del lactante",
      "Mejora la precisión durante el pesaje y la medición",
      "Diseñado para uso pediátrico y neonatal",
      "Fácil de instalar y retirar",
      "Fabricación robusta para uso clínico frecuente",
      "Accesorio ideal para hospitales y consultorios pediátricos"
    ]
  },
},


{
  id: "seca-459",
  name: "CINTA MÉTRICA SECA 459",
  description:
    "Accesorio clínico diseñado para la medición rápida y precisa de perímetros corporales en evaluaciones médicas y nutricionales. La cinta métrica SECA 459 es ideal para controles antropométricos en consultorios, hospitales y programas de salud que requieren mediciones confiables y repetibles.",
  price: 400,
  image: "/images/diagnostico/SECA 459/seca459-1.png",
  images: [
    "/images/diagnostico/SECA 459/seca459-1.png",
    "/images/diagnostico/SECA 459/seca459-2.png"
  ],

  technicalSections: {
    features: [
      "Diseñada para medición de perímetros corporales",
      "Lectura clara y precisa para uso clínico",
      "Material flexible y resistente para uso frecuente",
      "Sistema de medición fácil de manipular",
      "Ideal para evaluaciones nutricionales y antropométricas",
      "Permite mediciones rápidas y repetibles",
      "Compacta y fácil de transportar",
      "Adecuada para hospitales, clínicas y consultorios médicos"
    ]
  },
},

{
  id: "seca-477",
  name: "PASAMANOS SECA 477",
  description:
    "Accesorio de apoyo diseñado para brindar mayor estabilidad y seguridad al paciente durante el proceso de pesaje. El pasamanos SECA 477 es ideal para entornos clínicos que atienden adultos mayores, pacientes con movilidad reducida o en rehabilitación, optimizando la experiencia de uso y reduciendo riesgos.",
  price: 400,
  image: "/images/diagnostico/SECA 477/seca477-1.png",
  images: [
    "/images/diagnostico/SECA 477/seca477-1.png",
    "/images/diagnostico/SECA 477/seca477-2.png"
  ],

  technicalSections: {
    features: [
      "Diseñado para proporcionar apoyo adicional durante el pesaje",
      "Mejora la estabilidad y seguridad del paciente",
      "Construcción robusta para uso clínico intensivo",
      "Diseño ergonómico y funcional",
      "Fácil integración con balanzas médicas compatibles SECA",
      "Ideal para adultos mayores y pacientes con movilidad reducida",
      "Adecuado para hospitales, clínicas y centros de rehabilitación"
    ]
  },
},

{
  id: "seca-413",
  name: "MOCHILA DE TRANSPORTE SECA 413",
  description:
    "Accesorio diseñado para facilitar el transporte seguro y cómodo de balanzas pediátricas SECA en actividades extramurales. La mochila SECA 413 es ideal para programas de salud, visitas domiciliarias y campañas de control infantil, ofreciendo practicidad y protección durante el traslado.",
  price: 400,
  image: "/images/diagnostico/SECA 413/seca413-1.png",
  images: [
    "/images/diagnostico/SECA 413/seca413-1.png",
    "/images/diagnostico/SECA 413/seca413-2.png",
    "/images/diagnostico/SECA 413/seca413-3.png"
  ],

  technicalSections: {
    features: [
      "Diseñada para el transporte de balanzas pediátricas SECA",
      "Permite un traslado seguro y cómodo del equipo",
      "Material resistente para uso frecuente en campo",
      "Diseño ergonómico tipo mochila",
      "Facilita actividades extramurales y visitas domiciliarias",
      "Protege el equipo durante el transporte",
      "Ideal para programas de salud materno-infantil",
      "Uso recomendado en hospitales, centros de salud y brigadas médicas"
    ]
  },
},

{
  id: "seca-428",
  name: "MOCHILA DE TRANSPORTE SECA 428",
  description:
    "Accesorio de transporte diseñado para el traslado seguro del infantómetro SECA 417 en actividades extramurales. La mochila SECA 428 facilita el trabajo en campo, visitas domiciliarias y campañas de salud, protegiendo el equipo y mejorando la movilidad del personal sanitario.",
  price: 400,
  image: "/images/diagnostico/SECA 428/seca428-1.png",
  images: [
    "/images/diagnostico/SECA 428/seca428-1.png",
    "/images/diagnostico/SECA 428/seca428-2.png"
  ],

  technicalSections: {
    features: [
      "Diseñada para el transporte del infantómetro SECA 417",
      "Protege el equipo durante el traslado",
      "Material resistente para uso frecuente en campo",
      "Diseño práctico para visitas domiciliarias",
      "Facilita campañas de salud y controles extramurales",
      "Mejora la movilidad del personal sanitario",
      "Accesorio ideal para programas materno-infantiles"
    ]
  },
},

{
  id: "seca-447",
  name: "ADAPTADOR DE CORRIENTE SECA 447",
  description:
    "Adaptador de corriente original SECA diseñado para suministrar energía estable y confiable a equipos médicos compatibles. El SECA 447 es ideal para entornos clínicos que requieren operación continua y segura de balanzas y dispositivos SECA.",
  price: 400,
  image: "/images/diagnostico/SECA 447/seca447.png",

  technicalSections: {
    features: [
      "Adaptador de corriente original SECA",
      "Proporciona alimentación eléctrica estable y segura",
      "Diseñado para equipos médicos SECA compatibles",
      "Ideal para uso continuo en entornos clínicos",
      "Fabricación de alta calidad para mayor durabilidad",
      "Accesorio esencial para el funcionamiento del equipo",
      "Uso recomendado en hospitales, clínicas y consultorios"
    ]
  },
},

{
  id: "cms-tcs200lp",
  name: "BALANZA DIGITAL CMS TCS200LP",
  description:
    "Balanza digital clínica con tallímetro integrado, diseñada para la medición simultánea de peso y estatura en entornos médicos profesionales. La CMS TCS200LP ofrece una solución práctica y eficiente para consultorios, clínicas y centros de salud que requieren evaluaciones antropométricas confiables en un solo equipo.",
  price: 650,
  image: "/images/diagnostico/CMS TCS200LP/TCS200LP.png",

  technicalSections: {
    features: [
      "Balanza digital con tallímetro integrado",
      "Medición simultánea de peso y estatura",
      "Diseño de columna estable y resistente",
      "Plataforma amplia para mayor seguridad del paciente",
      "Pantalla digital de fácil lectura",
      "Ideal para evaluaciones antropométricas clínicas",
      "Uso recomendado en hospitales, clínicas y consultorios",
      "Equipo confiable para uso profesional continuo"
    ]
  }
},

{
  id: "rice-lake-150-10-5",
  name: "BALANZA DIGITAL RICE LAKE 150-10-5",
  description:
    "Balanza digital clínica de grado profesional diseñada para entornos médicos exigentes, esta incorpora tecnología Motiontrap™ para obtener mediciones precisas incluso con pacientes en movimiento, junto con conectividad EMR/EHR que permite integrar los datos directamente a los registros médicos electrónicos. Su construcción robusta y funciones avanzadas la convierten en una solución confiable para hospitales, clínicas y centros de salud modernos.",
  price: 2000,
  image: "/images/diagnostico/RICE LAKE 150-10-5/RL150105-1.png",
  images: [
    "/images/diagnostico/RICE LAKE 150-10-5/RL150105-1.png",
    "/images/diagnostico/RICE LAKE 150-10-5/RL150105-2.png"
  ],

  technicalSections: {
    features: [
      "Tecnología Motiontrap™ que compensa el movimiento involuntario del paciente",
      "Capacidad de pesaje hasta 250 kg con precisión de 0.1 kg",
      "Construcción con columna de aluminio y base metálica sólida",
      "Tallímetro integrado con rango de medición de 70 a 208 cm",
      "Cálculo automático del Índice de Masa Corporal (IMC)",
      "Pantalla LCD de gran tamaño ubicada a la altura de la vista",
      "Conectividad EMR/EHR mediante USB y Bluetooth opcional",
      "Función de bloqueo para mantener el peso en pantalla",
      "Incluye ruedas traseras para fácil transporte entre consultorios",
      "Doble alimentación: baterías AA incluidas o adaptador de corriente opcional"
    ]
  }
},

{
  id: "rice-lake-rl-dbs",
  name: "BALANZA DIGITAL RICE LAKE RL-DBS",
  description:
    "Balanza pediátrica digital diseñada para el pesaje preciso de lactantes en entornos clínicos y domiciliarios. La RICE LAKE RL-DBS incorpora tecnología Motiontrap™ para compensar el movimiento del bebé, junto con cinta métrica integrada y función recall, permitiendo mediciones confiables y prácticas durante el control de crecimiento infantil.",
  price: 869,
  image: "/images/diagnostico/RICE LAKE RL-DBS/RLDBS.png",

  technicalSections: {
    features: [
      "Capacidad de pesaje hasta 20 kg con precisión de 10 g",
      "Pantalla LCD digital de gran tamaño y fácil lectura",
      "Cinta métrica integrada para referencia de longitud de 0 a 57 cm",
      "Función recall para visualizar la última medición registrada",
      "Cambio de unidades entre kg y lb/oz con bloqueo de unidad",
      "Plataforma amplia y estable de fácil limpieza",
      "Doble alimentación: pilas AA o adaptador de corriente incluido",
      "Apagado automático para ahorro de energía",
      "Diseño duradero e higiénico para uso clínico y domiciliario",
      "Tecnología Motiontrap para compensación de movimiento del bebé"
    ]
  }
},


{
  id: "rice-lake-rl-mis",
  name: "BALANZA MECANICA RICE LAKE RL-MIS",
  description:
    "Balanza mecánica pediátrica diseñada para el pesaje preciso de recién nacidos, lactantes y niños pequeños en entornos clínicos. La RICE LAKE RL-MIS destaca por su construcción robusta en acero esmaltado y viga de lectura dual, ofreciendo mediciones confiables sin necesidad de alimentación eléctrica, ideal para hospitales, clínicas y áreas de neonatología.",
  price: 750,
  image: "/images/diagnostico/RICE LAKE RL-MIS/RLMIS.png",

  technicalSections: {
    features: [
      "Capacidad de pesaje hasta 62 kg",
      "Graduación precisa de 20 g",
      "Sistema mecánico sin requerimiento de energía eléctrica",
      "Viga de lectura dual para kg y lb",
      "Estructura de acero esmaltado de alta durabilidad",
      "Bandeja plástica ABS amplia y fácil de limpiar",
      "Cinta métrica integrada con rango de 0 a 58 cm",
      "Dimensiones de bandeja aproximadas de 24 x 16 x 3 pulgadas",
      "Diseñada para uso clínico en hospitales y consultorios pediátricos"
    ]
  }
},

{
  id: "omron-hbf-514c",
  name: "BALANZA CORPORAL OMRON HBF-514C",
  description:
    "Monitor avanzado de composición corporal con tecnología de sensor de cuerpo completo mano-a-pie, diseñado para ofrecer mediciones más precisas que las básculas convencionales. El OMRON HBF-514C permite un análisis integral del estado corporal mediante múltiples indicadores de salud, siendo ideal para el seguimiento del bienestar, control físico y uso familiar en el hogar.",
  price: 479,
  image: "/images/diagnostico/OMROM HBF/OMRON.png",

  technicalSections: {
    features: [
      "Medición más precisa de la composición corporal total",
      "Análisis de siete indicadores clave de salud corporal",
      "Cálculo de metabolismo en reposo y edad corporal",
      "Función de memoria para seguimiento de resultados hasta 180 días",
      "Almacenamiento de datos para hasta cuatro perfiles de usuario",
      "Incluye modo invitado para mediciones ocasionales",
      "Pantalla digital amplia y de fácil lectura",
      "Diseño intuitivo para uso doméstico",
      "Tecnología de sensor de cuerpo completo mano a pie con ocho electrodos",
      "Medición de grasa corporal, grasa visceral, IMC y músculo esquelético"
    ]
  }
},

{
  id: "riester-1350",
  name: "TENSIÓMETRO ANEROIDE RIESTER EXACTA 1350",
  description:
    "Tensiómetro aneroide profesional diseñado para la medición precisa y confiable de la presión arterial en entornos clínicos. El Riester Exacta 1350 ofrece distintas configuraciones según el tipo de brazalete, adaptándose a pacientes adultos, pediátricos y con perímetros de brazo amplio.",

  price: 400,

  // Imagen base
  image: "/images/diagnostico/RIESTER 1350/riester1350.png",

  // Galería BASE
  images: [
    "/images/diagnostico/RIESTER 1350/riester1350.png"
  ],

  attributes: [
    {
      id: "accessories",
      label: "Configuración",
      type: "single",
      values: [
        {
          id: "1350",
          label: "Adulto estándar",
          images: [
            "/images/diagnostico/RIESTER 1350/riester1350.png"
          ],
          priceDelta: 0
        },
        {
          id: "1350-123",
          label: "Adulto obeso",
          images: [
            "/images/diagnostico/RIESTER 1350/riester1350.png"
          ],
          priceDelta: 0
        },
        {
          id: "1350-130",
          label: "Pediátrico",
          images: [
            "/images/diagnostico/RIESTER 1350/riester1350.png"
          ],
          priceDelta: 0
        },
        {
          id: "1350-100",
          label: "Solo manómetro",
          images: [
            "/images/diagnostico/RIESTER 1350/riester1350.png"
          ],
          priceDelta: 0
        }
      ]
    }
  ],

  technicalSections: {
    features: [
      "Tensiómetro aneroide de alta precisión",
      "Manómetro de lectura clara y confiable",
      "Construcción robusta para uso clínico intensivo",
      "Sistema mecánico sin necesidad de energía eléctrica",
      "Configuraciones disponibles según tipo de brazalete",
      "Uso profesional en hospitales, clínicas y consultorios"
    ]
  }
},



{
  id: "littmann-classic-iii",
  name: "Estetoscopio Littmann Classic III DualCare 3M",
  description:
    "Estetoscopio profesional diseñado para la evaluación precisa de pacientes adultos y pediátricos en entornos clínicos no críticos. El Littmann Classic III permite detectar sonidos normales y anormales del corazón y los pulmones con alta fidelidad acústica, siendo ideal para consultorios médicos, salas generales, OB/GYN, clínicas ambulatorias y servicios de urgencias. Su diseño liviano, colores vibrantes y fabricación en Estados Unidos lo convierten en un estándar de referencia para profesionales de la salud.",

  price: 400,

  image: "/images/diagnostico/LITTMAN 3M/LITTMAN.png",


  attributes: [
    {
      id: "color",
      label: "Color",
      type: "single",
      values: [
        {
          id: "negro",
          label: "Negro",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-NEGRO.png"
          ],
          priceDelta: 450
        },
        {
          id: "azul-marino",
          label: "Azul marino",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-AZULMARINO.png"
          ],
          priceDelta: 450
        },
        {
          id: "azul-cielo",
          label: "Azul cielo",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-AZULCIELO.png"
          ],
          priceDelta: 450
        },
        {
          id: "azul-caribe",
          label: "Azul caribe",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-CARIBE.png"
          ],
          priceDelta: 450
        },
        {
          id: "borgona",
          label: "Borgoña",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-BORGONA.png"
          ],
          priceDelta: 450
        },
        {
          id: "ciruela",
          label: "Ciruela",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-CIRUELA.png"
          ],
          priceDelta: 450
        },
        {
          id: "lavanda",
          label: "Lavanda",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-VIOLETASUAVE.png"
          ],
          priceDelta: 450
        },
        {
          id: "rosa-perla",
          label: "Rosa perla",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSAPERLA.png"
          ],
          priceDelta: 450
        },
        {
          id: "rosa-champan",
          label: "Rosa champán",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSACHAMPAGNE.png"
          ],
          priceDelta: 450
        },
        {
          id: "frambuesa",
          label: "Frambuesa",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-ROSAINTENSO.png"
          ],
          priceDelta: 450
        },
        {
          id: "verde-lima",
          label: "Verde lima",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-AMARILLONEON.png"
          ],
          priceDelta: 450
        },
        {
          id: "turquesa",
          label: "Turquesa",
          images: [
            "/images/diagnostico/LITTMAN 3M/LITTMAN-TURQUESA.png"
          ],
          priceDelta: 450
        }
      ]
    }
  ],

  technicalSections: {
    features: [
      "Permite evaluar una amplia gama de pacientes adultos y pediátricos",
      "Más del doble de volumen frente a otros estetoscopios",
      "Excelente rendimiento en frecuencias bajas (<120 Hz)",
      "Campana abierta o cerrada con aro anti-frío",
      "Olivas suaves con sellado hermético para óptima comodidad",
      "Diseño liviano que reduce la fatiga",
      "Colores vibrantes para personalización",
      "Fabricado en Estados Unidos con materiales de origen global",
      "Garantía oficial de 5 años",
      "Pieza torácica de acero inoxidable de doble cara con diafragma sintonizable"
    ]
  }
},

{
  id: "tensiometro-1468",
  name: "Tensiometro rodante Riester Bigben 1468",
  description:
  "Destaca por su gran esfera de 147 mm de diámetro, que permite una visualización clara incluso a distancia. Su estructura robusta está pensada para un uso intensivo en 	consultorios, hospitales y centros médicos.",
  price: 950,
  image: "/images/diagnostico/1468.png",

},

];
