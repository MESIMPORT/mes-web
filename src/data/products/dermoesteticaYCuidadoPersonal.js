// src/data/products/dermoesteticaYCuidadoPersonal.js

export const dermoesteticaYCuidadoPersonalProducts = [

    {
        id: "lampara-lashista",
        name: "LÁMPARA PARA LASHISTA",
        type: "Lamparas-esteticas",
        description: "Equipo de iluminación semicircular LED de 28\" para camilla, ideal para extensiones de pestañas, cejas, faciales y procedimientos estéticos. Distribución uniforme de luz sin sombras, 45 W, vida útil >40 000 h, controles touch laterales de intensidad y color, estructura metálica regulable de 101 a 171 cm.",
        image: "/images/accesorios/CARDS/LASHISTA.png",

        attributeOrder: ["color", "acabado"],

        attributes: [
            {
                id: "color",
                label: "Color",
                type: "single",
                values: [
                    { id: "dorado", label: "Dorado" },
                    { id: "rosado", label: "Rosado" },
                    { id: "blanco", label: "Blanco" },
                    { id: "negro", label: "Negro" }
                ]
            },
            {
                id: "acabado",
                label: "Acabado",
                type: "single",
                cascadeFrom: "color",
                values: [
                    { id: "solo", label: "Sin Brillo" },
                    { id: "brillo", label: "Con Brillo" }
                ]
            }
        ],

        variants: [
            {
                sku: "lashista-dorado-solo",
                attrs: { color: "dorado", acabado: "solo" },
                name: "DORADO Y SIN BRILLO",
                description: "Lámpara para lashista – Dorado sin brillo.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/ORO_SOLO.png"
            },
            {
                sku: "lashista-dorado-brillo",
                attrs: { color: "dorado", acabado: "brillo" },
                name: "DORADO Y CON BRILLO",
                description: "Lámpara para lashista – Dorado con brillo.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/ORO_BRILLO.png"
            },
            {
                sku: "lashista-rosado-solo",
                attrs: { color: "rosado", acabado: "solo" },
                name: "ROSADO Y SIN BRILLO",
                description: "Lámpara para lashista – Rosado sin brillo.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/ROSA_SOLO.png"
            },
            {
                sku: "lashista-rosado-brillo",
                attrs: { color: "rosado", acabado: "brillo" },
                name: "ROSADO Y CON BRILLO",
                description: "Lámpara para lashista – Rosado con brillo.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/ROSA_BRILLO.png"
            },
            {
                sku: "lashista-blanco-solo",
                attrs: { color: "blanco", acabado: "solo" },
                name: "BLANCO Y SIN BRILLO",
                description: "Lámpara para lashista – Blanco sin brillo.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/BLANCO_SOLO.png"
            },
            {
                sku: "lashista-blanco-brillo",
                attrs: { color: "blanco", acabado: "brillo" },
                name: "BLANCO Y CON BRILLO",
                description: "Lámpara para lashista – Blanco con brillo.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/BLANCO_BRILLO.png"
            },
            {
                sku: "lashista-negro-solo",
                attrs: { color: "negro", acabado: "solo" },
                name: "NEGRO Y SIN BRILLO",
                description: "Lámpara para lashista – Negro sin brillo.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/NEGRO_SOLO.png"
            },
            {
                sku: "lashista-negro-brillo",
                attrs: { color: "negro", acabado: "brillo" },
                name: "NEGRO Y CON BRILLO",
                description: "Lámpara para lashista – Negro con brillo.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/NEGRO_BRILLO.png"
            }
        ]
    },


    {
        id: "lampara-luz-de-wood",
        name: "LAMPARA LUZ DE WOOD",
        type: "Lamparas-esteticas",
        description: "Este equipo de luz ultravioleta está diseñado para la evaluación dermatológica. Cuenta con aumento de 3 dioptrías y permite identificar alteraciones cutáneas mediante fluorescencia, ya que la piel sana no emite brillo bajo esta luz, mientras que ciertas infecciones y trastornos pigmentarios sí lo hacen. Funciona con una longitud de onda aproximada entre 320 y 400 nm, lo que facilita la detección de cambios sutiles en la pigmentación. Es un método no invasivo utilizado por profesionales, aplicando la lámpara a unos 10–12 cm del área a examinar en un entorno oscuro.",
        price: 350,
        image: "/images/accesorios/CARDS/LAMP_WOOD.png",
        images: [

            "/images/accesorios/LAMP WOOD/LAMP_WOOD.png"
        ]
    },

    {
        id: "dermatoscopio-dermlite",
        name: "DERMATOSCOPIO DERMLITE",
        type: "Dermatoscopios",
        description: "Dermatoscopios portátiles DermLite con tecnología de polarización cruzada, iluminación LED blanca y óptica de 10x. Disponibles en modelos DL100 y DL200.",
        image: "/images/CUIDADO PERSONAL/CARDS/DERMLITE.png",
        brand: "DERMLITE",

        attributes: [
            {
                id: "modelo",
                label: "Modelo",
                type: "single",
                values: [
                    { id: "dl100", label: "DL100" },
                    { id: "dl200", label: "DL200" }
                ]
            }
        ],

        variants: [
            {
                sku: "dermatoscopio-dermlite-dl100",
                attrs: { modelo: "dl100" },
                name: "DERMATOSCOPIO DERMLITE DL100",
                description: "El DermLite DL100 es un dermatoscopio de mano con tecnología de polarización cruzada, que permite visualización profunda sin líquido de inmersión en un formato compacto y portátil. Incorpora iluminación LED blanca y lente de 10x de aumento, ofreciendo imágenes claras para una detección temprana más precisa. Al no requerir placa de contacto de vidrio, mejora la visualización de patrones vasculares frente a la dermatoscopía tradicional. Con un peso aproximado de 99 g y autonomía para más de 1200 exámenes, es una herramienta práctica y confiable para uso clínico diario.",
                price: 3000,
                images: [
                    "/images/CUIDADO PERSONAL/DERMATOSCOPIO/DL100.png",
                    "/images/CUIDADO PERSONAL/DERMATOSCOPIO/DL100_2.png"
                ]
            },
            {
                sku: "dermatoscopio-dermlite-dl200",
                attrs: { modelo: "dl200" },
                name: "DERMATOSCOPIO DERMLITE DL200",
                description: "El DermLite DL200 es un dermatoscopio portátil que ofrece visualización clara y profunda de la piel gracias a su iluminación LED blanca y sistema de polarización cruzada, permitiendo evaluaciones sin necesidad de líquidos de inmersión. Su óptica de 10x de aumento facilita la observación detallada de lesiones pigmentadas y patrones vasculares. Ligero y ergonómico, es ideal para la práctica clínica diaria en dermatología y medicina general, brindando una herramienta confiable y eficiente para la evaluación cutánea.",
                price: 5000,
                image: "/images/CUIDADO PERSONAL/DERMATOSCOPIO/DL200.png"
            }
        ]
    },




    {
        id: "dermapen-dr-pen-ultima-m7-w",
        name: "DERMAPEN DR. PEN ULTIMA M7-W",
        type: "Dermapen-y-Microneedling",
        description: "Dispositivo profesional de microneedling que estimula la producción natural de colágeno y elastina mediante microagujas ajustables en profundidad y 5 niveles de velocidad. Permite realizar tratamientos personalizados para mejorar arrugas, líneas finas, cicatrices de acné, poros dilatados y estrías, además de potenciar la absorción de principios activos gracias a la creación de microcanales en la piel. Es compatible con cartuchos de agujas estériles intercambiables (MTS y PMS), funciona en modo inalámbrico o con cable según versión y cuenta con diseño ergonómico metálico para un manejo seguro y preciso. Ofrece resultados visibles, con mínimo daño epidérmico y corto tiempo de recuperación, siendo una opción eficiente y segura para uso profesional estético.",
        price: 200,
        images: [
            "/images/CUIDADO PERSONAL/DERMAPEN/DERMAPEN.png",
            "/images/CUIDADO PERSONAL/DERMAPEN/DERMAPEN_2.png"
        ]
    },
    {
        id: "dispositivo-reafirmacion-facial",
        name: "DISPOSITIVO DE REAFIRMACIÓN FACIAL Y REDUCCIÓN DE ARRUGAS",
        type: "Dispositivos-faciales",
        description: "Diseñado para reafirmar la piel y disminuir arrugas y líneas finas, ayudando a mejorar visiblemente la textura y elasticidad del rostro. Funciona estimulando la producción natural de colágeno y elastina, favoreciendo una apariencia más firme, uniforme y rejuvenecida sin procedimientos invasivos. Su diseño manual, ergonómico y compacto facilita el tratamiento en zonas como rostro, cuello y contorno facial, adaptándose a rutinas de cuidado estético tanto en el hogar como en entornos profesionales.",
        price: 200,
        images: [
            "/images/CUIDADO PERSONAL/VARITA/VARITA.png",
            "/images/CUIDADO PERSONAL/VARITA/VARITA_2.png"
        ]
    },
    {
        id: "mascara-facial-de-gel",
        name: "MÁSCARA FACIAL DE GEL",
        type: "Dispositivos-faciales",
        description: "Ideal para aliviar hinchazón, enrojecimiento, migrañas, dolor sinusal y estrés, además de apoyar la recuperación postoperatoria cosmética. Sus perlas de gel ecológicas distribuyen la temperatura de forma uniforme sin riesgo de congelar ni quemar la piel. Cuenta con respaldo ultra suave y banda elástica con velcro para un ajuste cómodo y seguro. Puede enfriarse en refrigeración de 10 a 30 minutos o calentarse en microondas de 5 a 10 segundos. Ayuda a reducir bolsas, ojeras y tensión facial.",
        price: 30,
        images: [
            "/images/CUIDADO PERSONAL/MASCARA DE GEL/MASCARA_1.png",
            "/images/CUIDADO PERSONAL/MASCARA DE GEL/MASCARA_2.png"
        ]
    },

    {
        id: "aguja-dermapen-36-pines-cartucho-est-ril",
        name: "AGUJA DERMAPEN 36 PINES – CARTUCHO ESTÉRIL",
        type: "Consumibles",
        description: "AGUJA DERMAPEN 36 PINES – CARTUCHO ESTÉRIL",
        price: 3.6,
        image: "/images/descartables/placeholder.png"
    },
    {
        id: "aguja-para-plasma-pen-caja",
        name: "AGUJA PARA PLASMA PEN × CAJA",
        type: "Consumibles",
        description: "AGUJA PARA PLASMA PEN × CAJA",
        price: 27.6,
        image: "/images/descartables/placeholder.png"
    },
];
