// src/data/products/dermoesteticaYCuidadoPersonal.js

export const dermoesteticaYCuidadoPersonalProducts = [

    {
        id: "lampara-lupa-estetica",
        name: "LÁMPARA LUPA ESTÉTICA – LED",
        type: "Lamparas-esteticas",
        description: "Lámpara lupa LED de luz fría para uso profesional en estética, dermatología y procedimientos de precisión. Iluminación uniforme sin sombras ni generación de calor, con lente de vidrio óptico disponible en 3, 5 y 8 dioptrías para distintos niveles de aumento según el tratamiento. Disponible en versión con pie y ruedas para uso junto a camilla, o versión de sobremesa con mordaza para fijación en mesa o carrito de belleza. Brazo articulado con muelles internos que mantienen la posición. Indicada para extensiones de pestañas, faciales, análisis de piel, depilación y micropigmentación.",
        image: "/images/CUIDADO PERSONAL/LAMPARA LUPA/CARD.png",

        attributeOrder: ["base", "dioptria"],

        attributes: [
            {
                id: "base",
                label: "Tipo de base",
                type: "single",
                values: [
                    { id: "pie-ruedas", label: "Pie con ruedas" },
                    { id: "sobremesa", label: "Sobremesa (mordaza)" }
                ]
            },
            {
                id: "dioptria",
                label: "Dioptrías (aumento)",
                type: "single",
                values: [
                    { id: "3d", label: "3D – Uso general" },
                    { id: "5d", label: "5D – Precisión media" },
                    { id: "8d", label: "8D – Alta precisión" }
                ]
            }
        ],

        attributeRules: {
            "pie-ruedas": { dioptria: ["3d", "5d", "8d"] },
            "sobremesa": { dioptria: ["3d", "5d", "8d"] }
        },

        variants: [
            // ─── PIE CON RUEDAS ───────────────────────────────────────────────────────
            {
                sku: "lampara-lupa-pie-3d",
                attrs: { base: "pie-ruedas", dioptria: "3d" },
                name: "PIE CON RUEDAS – 3 DIOPTRÍAS",
                description: "Lámpara lupa LED de luz fría con pie y base de 5 ruedas para máxima movilidad junto a camilla. Lente de 3 dioptrías para uso general en tratamientos faciales, depilación y análisis de piel. Brazo articulado regulable con muelles internos. || Dioptrías: 3D | Base: Pie con 5 ruedas | Luz: LED fría sin calor | Uso: Faciales, depilación, análisis de piel.",
                price: 5,
                image: "/images/CUIDADO PERSONAL/LAMPARA LUPA/LUPA_RUEDA.png"
            },
            {
                sku: "lampara-lupa-pie-5d",
                attrs: { base: "pie-ruedas", dioptria: "5d" },
                name: "PIE CON RUEDAS – 5 DIOPTRÍAS",
                description: "Lámpara lupa LED de luz fría con pie y base de 5 ruedas para máxima movilidad junto a camilla. Lente de 5 dioptrías para precisión media en extensiones de pestañas, cejas y tratamientos faciales de detalle. Brazo articulado regulable. || Dioptrías: 5D | Base: Pie con 5 ruedas | Luz: LED fría sin calor | Uso: Extensiones de pestañas, cejas, faciales de detalle.",
                price: 5,
                image: "/images/CUIDADO PERSONAL/LAMPARA LUPA/LUPA_RUEDA2.png"
            },
            {
                sku: "lampara-lupa-pie-8d",
                attrs: { base: "pie-ruedas", dioptria: "8d" },
                name: "PIE CON RUEDAS – 8 DIOPTRÍAS",
                description: "Lámpara lupa LED de luz fría con pie y base de 5 ruedas para máxima movilidad junto a camilla. Lente de 8 dioptrías de alta precisión para micropigmentación, microblading y procedimientos que requieren máximo detalle. Brazo articulado regulable. || Dioptrías: 8D | Base: Pie con 5 ruedas | Luz: LED fría sin calor | Uso: Micropigmentación, microblading, alta precisión.",
                price: 5,
                image: "/images/CUIDADO PERSONAL/LAMPARA LUPA/LUPA_RUEDA3.png"
            },

            // ─── SOBREMESA ────────────────────────────────────────────────────────────
            {
                sku: "lampara-lupa-mesa-3d",
                attrs: { base: "sobremesa", dioptria: "3d" },
                name: "SOBREMESA – 3 DIOPTRÍAS",
                description: "Lámpara lupa LED de luz fría con mordaza para fijación en mesa o carrito de belleza. Lente de 3 dioptrías para uso general en tratamientos de precisión en espacios reducidos. Brazo articulado compacto. || Dioptrías: 3D | Base: Mordaza de mesa | Luz: LED fría sin calor | Uso: Manicura, cejas, trabajos de mesa.",
                price: 5,
                image: "/images/CUIDADO PERSONAL/LAMPARA LUPA/LUPA_MESA1.png"
            },
            {
                sku: "lampara-lupa-mesa-5d",
                attrs: { base: "sobremesa", dioptria: "5d" },
                name: "SOBREMESA – 5 DIOPTRÍAS",
                description: "Lámpara lupa LED de luz fría con mordaza para fijación en mesa o carrito de belleza. Lente de 5 dioptrías para precisión media en nail art, diseño de cejas y trabajos de detalle en superficie plana. Brazo articulado compacto. || Dioptrías: 5D | Base: Mordaza de mesa | Luz: LED fría sin calor | Uso: Nail art, cejas, detalle.",
                price: 5,
                image: "/images/CUIDADO PERSONAL/LAMPARA LUPA/LUPA_MESA2.png"
            },
            {
                sku: "lampara-lupa-mesa-8d",
                attrs: { base: "sobremesa", dioptria: "8d" },
                name: "SOBREMESA – 8 DIOPTRÍAS",
                description: "Lámpara lupa LED de luz fría con mordaza para fijación en mesa o carrito de belleza. Lente de 8 dioptrías de alta precisión para micropigmentación de mesa, nail art fino y trabajos que requieren máximo detalle en posición fija. || Dioptrías: 8D | Base: Mordaza de mesa | Luz: LED fría sin calor | Uso: Micropigmentación de mesa, nail art fino.",
                price: 5,
                image: "/images/CUIDADO PERSONAL/LAMPARA LUPA/LUPA_MESA3.png"
            }
        ]
    },

    {
        id: "vaporizador-facial-ozono",
        name: "VAPORIZADOR FACIAL CON OZONO",
        type: "Dispositivos-faciales",
        description: "Vaporizador facial profesional con generador de ozono integrado para apertura de poros, hidratación profunda y efecto bactericida y antiséptico durante la vaporización. El vapor tibio dilata los poros facilitando la extracción de impurezas y mejorando la absorción de principios activos, mientras el ozono elimina bacterias y hongos de la superficie cutánea. Especialmente indicado para pieles con acné, seborreicas o con tendencia infecciosa. Disponible en versión estándar y en versión 2 en 1 con lupa LED 5x integrada sobre pedestal con ruedas para iluminación y magnificación durante el tratamiento. Ideal para centros de estética, spas y consultas de medicina estética.",
        image: "/images/CUIDADO PERSONAL/VAPORIZADOR/CARD.png",

        attributeOrder: ["version"],

        attributes: [
            {
                id: "version",
                label: "Versión",
                type: "single",
                values: [
                    { id: "solo", label: "Solo vaporizador" },
                    { id: "con-lampara", label: "Con lupa LED 5x" }
                ]
            }
        ],

        variants: [
            {
                sku: "vaporizador-ozono",
                attrs: { version: "solo" },
                name: "VAPORIZADOR CON OZONO",
                description: "Vaporizador facial con generador de ozono integrado para efecto bactericida y antiséptico durante la vaporización. El ozono elimina bacterias y hongos de la superficie cutánea, siendo especialmente indicado para pieles con acné, seborreicas o con tendencia infecciosa. Brazo articulado flexible y depósito extraíble. || Tipo: Vapor + ozono | Función bactericida: Sí | Uso: Pieles acnéicas, seborreicas, antisepsia | Potencia: aprox. 300 W.",
                price: 380,
                image: "/images/CUIDADO PERSONAL/VAPORIZADOR/VAPO.png"
            },
            {
                sku: "vaporizador-ozono-lampara",
                attrs: { version: "con-lampara" },
                name: "VAPORIZADOR CON OZONO + LUPA LED 5X",
                description: "Equipo 2 en 1 sobre pedestal con ruedas que integra vaporizador con ozono y lupa LED 5x en brazos articulados independientes. El vaporizador aporta vapor con efecto bactericida para pieles acnéicas y seborreicas, mientras la lupa LED 5x proporciona iluminación fría y magnificación precisa para una valoración detallada de la piel durante el tratamiento. Base con 5 ruedas para fácil desplazamiento en cabina. || Tipo: Vapor + ozono + lupa | Aumento: 5x | Iluminación: LED frío | Base: Pedestal con ruedas | Brazos: Independientes articulados | Uso: Estética profesional, valoración y tratamiento simultáneo.",
                price: 500,
                image: "/images/CUIDADO PERSONAL/VAPORIZADOR/VAPO_LAMP.png"
            }
        ]
    },
    {
        id: "plasma-pen-fibroblasto",
        name: "PLASMA PEN – FIBROBLASTO",
        type: "Dermapen-y-Microneedling",
        description: "Dispositivo de plasma pen para tratamientos de fibroblasto, técnica no invasiva que utiliza la ionización del gas atmosférico para generar un arco de plasma que contrae y estimula la regeneración del tejido cutáneo sin contacto directo con la piel. Indicado para lifting no quirúrgico de párpados, eliminación de manchas, fibromas, queratosis, cicatrices y líneas de expresión. Disponible en versión básica portátil para tratamiento directo y económico, y versión profesional 2 en 1 con función de ozono integrada para tratamiento y recuperación en cabina.",
        image: "/images/accesorios/CARDS/PLASMA_PEN_CARD.png",

        attributeOrder: ["version"],

        attributes: [
            {
                id: "version",
                label: "Versión",
                type: "single",
                values: [
                    { id: "basico", label: "Básico – Portátil" },
                    { id: "profesional", label: "Profesional – Plasma + Ozono" }
                ]
            }
        ],

        variants: [
            {
                sku: "plasma-pen-basico",
                attrs: { version: "basico" },
                name: "PLASMA PEN FIBROBLAST – BÁSICO (PORTÁTIL)",
                description: "Plasma pen fibroblasto portátil y compacto para tratamientos estéticos de precisión mediante micro arco de plasma, orientado al lifting localizado y mejora de imperfecciones superficiales como manchas y líneas de expresión. Diseño ligero y ergonómico de fácil manejo, ideal para uso en cabina o práctica independiente. Incorpora control digital con 9 niveles de intensidad ajustables y pantalla LCD para una regulación precisa del tratamiento. Funciona con batería recargable vía USB, ofreciendo practicidad y autonomía. Compatible con puntas desechables de precisión tipo aguja disponibles en catálogo. || Función: Fibroblasto por arco de plasma | Niveles: 9 ajustables | Pantalla: LCD | Alimentación: USB recargable | Diseño: Portátil ergonómico | Uso: Lifting localizado y tratamiento estético superficial",
                price: 5,
                image: "/images/CUIDADO PERSONAL/PLASMA PEN/PLASMA_PEN.png"
            },
            {
                sku: "plasma-pen-profesional",
                attrs: { version: "profesional" },
                name: "PLASMA PEN FIBROBLAST PROFESIONAL – PLASMA + OZONO",
                description: "Equipo profesional 2 en 1 que combina tecnología de fibroblasto por arco de plasma con función de ozono integrada, diseñado para tratamientos estéticos más completos en cabina. El plasma permite trabajar de forma localizada sobre la piel, mientras que la función de ozono complementa el procedimiento favoreciendo las condiciones de la piel durante el proceso postratamiento. Incorpora control de intensidad ajustable y configuración orientada a un uso más preciso y continuo en entornos profesionales. || Función: Fibroblasto por arco de plasma + ozono | Uso: Tratamiento estético y complemento postratamiento | Intensidad: Ajustable | Diseño: Profesional de cabina | Aplicación: Uso estético avanzado",
                price: 5,
                image: "/images/CUIDADO PERSONAL/PLASMA PEN/COLD_PLASMA.png"
            }
        ]
    },

    {
        id: "dermapen-dr-pen",
        name: "DERMAPENS DR PEN",
        type: "Dermapen-y-Microneedling",
        description: "Dermaпens profesionales Dr Pen para tratamientos estéticos de microneedling mediante microperforaciones controladas que estimulan la regeneración cutánea y la producción de colágeno. Disponibles en dos modelos: M9 de microneedling profesional portátil con control digital multinivel, y H6 Hydra Pen con sistema de infusión de suero integrado, fototerapia LED dual rojo/azul y pantalla LED a color en tiempo real. Ambos inalámbricos, ergonómicos y compatibles con cartuchos desechables de diferentes configuraciones.",
        image: "/images/CUIDADO PERSONAL/DERMAPEN/CARD.png",

        attributeOrder: ["modelo"],

        attributes: [
            {
                id: "modelo",
                label: "Modelo",
                type: "single",
                values: [
                    { id: "m9", label: "DR PEN M9" },
                    { id: "h6", label: "DR PEN H6 – HYDRA PEN" }
                ]
            }
        ],

        variants: [
            {
                sku: "dr-pen-m9",
                attrs: { modelo: "m9" },
                name: "MICRONEEDLING",
                description: "Dispositivo diseñado para tratamientos estéticos mediante microperforaciones controladas en la piel, orientado a mejorar la textura, apariencia y absorción de activos cosméticos. Su sistema de agujas desechables genera microcanales que estimulan la regeneración cutánea y favorecen la producción de colágeno. Incorpora control digital con múltiples niveles de velocidad y ajuste de profundidad de aguja, permitiendo adaptar el tratamiento según la zona y el objetivo. Diseño inalámbrico, ligero y ergonómico para uso cómodo en cabina estética o práctica profesional independiente. Compatible con cartuchos desechables de diferentes configuraciones. || Función: Microneedling por microperforación controlada | Velocidad: Ajustable en múltiples niveles | Profundidad: Regulable | Alimentación: Inalámbrico recargable | Diseño: Portátil ergonómico | Aplicación: Mejora de textura, regeneración cutánea y absorción de activos.",
                price: 5,
                image: "/images/CUIDADO PERSONAL/DERMAPEN/PEN_M9.png"
            },
            {
                sku: "dr-pen-h6",
                attrs: { modelo: "h6" },
                name: "MICRONEEDLING + INFUSION DE SUERO + LED",
                description: "Dermapen profesional Dr Pen H6 (Hydra Pen) con sistema de infusión de suero integrado, microneedling y fototerapia LED dual en un solo equipo. El cartucho dual con depósito de 3 ml y chip inteligente permite la infusión controlada de activos cosméticos durante el microneedling, maximizando la absorción cutánea. LED rojo (630 nm) para producción de colágeno y LED azul (470 nm) para reducir enrojecimiento postratamiento. Profundidad ajustable de 0 a 2 mm, 6 niveles de velocidad y pantalla LED a color en tiempo real. Compatible con cartuchos H18, H36, H42, nanoneedling redondo y cuadrado. Inalámbrico con 4–5 horas de autonomía. || Función: Microneedling + infusión de suero + LED dual | Profundidad: 0–2 mm | Velocidad: 6 niveles | LED: Rojo 630 nm + Azul 470 nm | Depósito suero: 3 ml | Flujo suero: 3 niveles ajustables | Cartuchos: H18 / H36 / H42 / Nano redondo / Nano cuadrado | Autonomía: 4–5 h | Garantía: 1 año.",
                price: 5,
                image: "/images/CUIDADO PERSONAL/DERMAPEN/PEN_H6.png"
            }
        ]
    },
    {
        id: "alta-frecuencia-estetica",
        name: "DARSONVAL",
        type: "Dispositivos-faciales",
        description: "Equipo de alta frecuencia para tratamientos estéticos faciales y corporales que utiliza corriente de Tesla a alta frecuencia (100.000–250.000 Hz) para generar ozono superficial sobre la piel. Produce efecto bactericida, oxigenante y antiinflamatorio sin contacto directo mediante electrodos de vidrio con gas interno. Indicado para acné, piel seborreica, caída del cabello, estimulación de la circulación y penetración superficial de activos cosméticos. Disponible en versión portátil de 4 electrodos y versión profesional de 7 electrodos para mayor versatilidad de tratamientos.",
        image: "/images/CUIDADO PERSONAL/DARSONVAL/CARD.png",

        attributeOrder: ["version"],

        attributes: [
            {
                id: "version",
                label: "Versión",
                type: "single",
                values: [
                    { id: "portatil", label: "Portátil – 4 electrodos" },
                    { id: "profesional", label: "Profesional – 7 electrodos" }
                ]
            }
        ],

        variants: [
            {
                sku: "alta-frecuencia-portatil-4e",
                attrs: { version: "portatil" },
                name: "PORTÁTIL – 4 ELECTRODOS",
                description: "Equipo de alta frecuencia portátil con 4 electrodos de vidrio intercambiables para tratamientos faciales y capilares. Intensidad regulable, diseño compacto y ligero para uso en cabina y domiciliario. Incluye electrodo tipo hongo (facial general), naranja (áreas pequeñas), peine (cuero cabelludo) y tubo recto (cuello y cuerpo). || Versión: Portátil | Electrodos: 4 | Frecuencia: 100,000–250,000 Hz | Uso: Facial, capilar, antibacteriano.",
                price: 120,
                image: "/images/CUIDADO PERSONAL/DARSONVAL/4.png"
            },
            {
                sku: "alta-frecuencia-profesional-7e",
                attrs: { version: "profesional" },
                name: "PROFESIONAL – 7 ELECTRODOS",
                description: "Equipo de alta frecuencia profesional con 7 electrodos de vidrio intercambiables para cobertura completa de tratamientos faciales, capilares y corporales. Intensidad regulable con pantalla de control. Incluye electrodo tipo hongo, naranja, peine, tubo recto, espátula, punta fina y curvo para contorno de ojos. || Versión: Profesional | Electrodos: 7 | Frecuencia: 100,000–250,000 Hz | Uso: Facial completo, capilar, corporal, contorno de ojos.",
                price: 300,
                image: "/images/CUIDADO PERSONAL/DARSONVAL/7.png"
            }
        ]
    },

    // ─── 1. LÁMPARA LASHISTA ──────────────────────────────────────────────────────
    {
        id: "lampara-lashista",
        name: "LÁMPARA PARA LASHISTA",
        type: "Lamparas-esteticas",
        description: "Equipo de iluminación semicircular LED de 28\" para camilla, ideal para extensiones de pestañas, cejas, faciales y procedimientos estéticos. Distribución uniforme de luz sin sombras, 45 W, vida útil >40,000 h, controles touch laterales de intensidad y color, estructura metálica regulable de 101 a 171 cm. Disponible en cuatro colores con acabado sin brillo o con brillo.",
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
                values: [
                    { id: "solo", label: "Sin brillo" },
                    { id: "brillo", label: "Con brillo" }
                ]
            }
        ],

        attributeRules: {
            "dorado": { acabado: ["solo", "brillo"] },
            "rosado": { acabado: ["solo", "brillo"] },
            "blanco": { acabado: ["solo", "brillo"] },
            "negro": { acabado: ["solo", "brillo"] }
        },

        variants: [
            {
                sku: "lashista-dorado-solo",
                attrs: { color: "dorado", acabado: "solo" },
                name: "DORADO – SIN BRILLO",
                description: "Lámpara semicircular LED 28\" para lashista. Color dorado con acabado sin brillo. 45 W, vida útil >40,000 h, regulable de 101 a 171 cm. || Color: Dorado | Acabado: Sin brillo | Potencia: 45 W | Altura: 101–171 cm.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/ORO_SOLO.png"
            },
            {
                sku: "lashista-dorado-brillo",
                attrs: { color: "dorado", acabado: "brillo" },
                name: "DORADO – CON BRILLO",
                description: "Lámpara semicircular LED 28\" para lashista. Color dorado con acabado con brillo. 45 W, vida útil >40,000 h, regulable de 101 a 171 cm. || Color: Dorado | Acabado: Con brillo | Potencia: 45 W | Altura: 101–171 cm.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/ORO_BRILLO.png"
            },
            {
                sku: "lashista-rosado-solo",
                attrs: { color: "rosado", acabado: "solo" },
                name: "ROSADO – SIN BRILLO",
                description: "Lámpara semicircular LED 28\" para lashista. Color rosado con acabado sin brillo. 45 W, vida útil >40,000 h, regulable de 101 a 171 cm. || Color: Rosado | Acabado: Sin brillo | Potencia: 45 W | Altura: 101–171 cm.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/ROSA_SOLO.png"
            },
            {
                sku: "lashista-rosado-brillo",
                attrs: { color: "rosado", acabado: "brillo" },
                name: "ROSADO – CON BRILLO",
                description: "Lámpara semicircular LED 28\" para lashista. Color rosado con acabado con brillo. 45 W, vida útil >40,000 h, regulable de 101 a 171 cm. || Color: Rosado | Acabado: Con brillo | Potencia: 45 W | Altura: 101–171 cm.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/ROSA_BRILLO.png"
            },
            {
                sku: "lashista-blanco-solo",
                attrs: { color: "blanco", acabado: "solo" },
                name: "BLANCO – SIN BRILLO",
                description: "Lámpara semicircular LED 28\" para lashista. Color blanco con acabado sin brillo. 45 W, vida útil >40,000 h, regulable de 101 a 171 cm. || Color: Blanco | Acabado: Sin brillo | Potencia: 45 W | Altura: 101–171 cm.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/BLANCO_SOLO.png"
            },
            {
                sku: "lashista-blanco-brillo",
                attrs: { color: "blanco", acabado: "brillo" },
                name: "BLANCO – CON BRILLO",
                description: "Lámpara semicircular LED 28\" para lashista. Color blanco con acabado con brillo. 45 W, vida útil >40,000 h, regulable de 101 a 171 cm. || Color: Blanco | Acabado: Con brillo | Potencia: 45 W | Altura: 101–171 cm.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/BLANCO_BRILLO.png"
            },
            {
                sku: "lashista-negro-solo",
                attrs: { color: "negro", acabado: "solo" },
                name: "NEGRO – SIN BRILLO",
                description: "Lámpara semicircular LED 28\" para lashista. Color negro con acabado sin brillo. 45 W, vida útil >40,000 h, regulable de 101 a 171 cm. || Color: Negro | Acabado: Sin brillo | Potencia: 45 W | Altura: 101–171 cm.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/NEGRO_SOLO.png"
            },
            {
                sku: "lashista-negro-brillo",
                attrs: { color: "negro", acabado: "brillo" },
                name: "NEGRO – CON BRILLO",
                description: "Lámpara semicircular LED 28\" para lashista. Color negro con acabado con brillo. 45 W, vida útil >40,000 h, regulable de 101 a 171 cm. || Color: Negro | Acabado: Con brillo | Potencia: 45 W | Altura: 101–171 cm.",
                price: 350,
                image: "/images/accesorios/LASHISTA LAMP/NEGRO_BRILLO.png"
            }
        ]
    },

    // ─── 2. LÁMPARA LUZ DE WOOD ───────────────────────────────────────────────────
    {
        id: "lampara-luz-de-wood",
        name: "LÁMPARA LUZ DE WOOD",
        type: "Lamparas-esteticas",
        description: "Lámpara de luz ultravioleta con aumento de 3 dioptrías diseñada para evaluación dermatológica no invasiva. Identifica alteraciones cutáneas mediante fluorescencia — la piel sana no emite brillo bajo esta luz, mientras que ciertas infecciones fúngicas, trastornos pigmentarios y condiciones dérmicas sí lo hacen. Longitud de onda aproximada de 320–400 nm. Se aplica a 10–12 cm del área a examinar en entorno oscuro. Ideal para consultas de dermatología, estética avanzada y medicina estética. || Longitud de onda: 320–400 nm | Aumento: 3 dioptrías | Uso: Evaluación dermatológica no invasiva.",
        price: 350,
        image: "/images/accesorios/CARDS/LAMP_WOOD.png",
        images: [
            "/images/accesorios/CARDS/LAMP_WOOD.png",
            "/images/accesorios/LAMP WOOD/LAMP_WOOD.png"
        ]
    },

    ,

    // ─── 5. MÁSCARA FACIAL DE GEL ─────────────────────────────────────────────────
    {
        id: "mascara-facial-de-gel",
        name: "MÁSCARA FACIAL DE GEL",
        type: "Dispositivos-faciales",
        description: "Máscara facial de perlas de gel ecológicas para uso frío o caliente. Alivia hinchazón, enrojecimiento, migrañas, dolor sinusal y estrés, y apoya la recuperación postoperatoria cosmética. Las perlas distribuyen la temperatura de forma uniforme sin riesgo de congelar ni quemar la piel. Respaldo ultra suave con banda elástica y velcro para ajuste cómodo. Se enfría en refrigeración 10–30 min o se calienta en microondas 5–10 seg. Reduce bolsas, ojeras y tensión facial.",
        image: "/images/CUIDADO PERSONAL/MASCARA DE GEL/MASCARA_1.png",

        attributeOrder: ["uso"],

        attributes: [
            {
                id: "uso",
                label: "Uso recomendado",
                type: "single",
                values: [
                    { id: "frio", label: "Frío (antiinflamatorio)" },
                    { id: "calor", label: "Calor (relajante)" },
                    { id: "ambos", label: "Frío y calor" }
                ]
            }
        ],

        variants: [
            {
                sku: "mascara-gel-frio",
                attrs: { uso: "frio" },
                name: "USO EN FRÍO",
                description: "Máscara facial de gel para uso en frío. Refrigerar 10–30 min antes de usar. Ideal para reducción de inflamación, bolsas, ojeras y recuperación postoperatoria. || Temperatura: Frío | Preparación: Refrigerar 10–30 min | Uso: Antiinflamatorio, recuperación.",
                price: 30,
                images: [
                    "/images/CUIDADO PERSONAL/MASCARA DE GEL/MASCARA_1.png",
                    "/images/CUIDADO PERSONAL/MASCARA DE GEL/MASCARA_2.png"
                ]
            },
            {
                sku: "mascara-gel-calor",
                attrs: { uso: "calor" },
                name: "USO EN CALOR",
                description: "Máscara facial de gel para uso en calor. Calentar en microondas 5–10 seg antes de usar. Ideal para alivio de migrañas, dolor sinusal y relajación de tensión facial. || Temperatura: Calor | Preparación: Microondas 5–10 seg | Uso: Relajante, migrañas, sinusitis.",
                price: 30,
                images: [
                    "/images/CUIDADO PERSONAL/MASCARA DE GEL/MASCARA_1.png",
                    "/images/CUIDADO PERSONAL/MASCARA DE GEL/MASCARA_2.png"
                ]
            },
            {
                sku: "mascara-gel-ambos",
                attrs: { uso: "ambos" },
                name: "USO EN FRÍO Y CALOR",
                description: "Máscara facial de gel multiuso para frío y calor. Refrigerar 10–30 min para efecto antiinflamatorio o calentar en microondas 5–10 seg para efecto relajante. || Temperatura: Frío y calor | Uso: Antiinflamatorio y relajante | Versatilidad: Máxima.",
                price: 30,
                images: [
                    "/images/CUIDADO PERSONAL/MASCARA DE GEL/MASCARA_1.png",
                    "/images/CUIDADO PERSONAL/MASCARA DE GEL/MASCARA_2.png"
                ]
            }
        ]
    },

    // ─── 6. AGUJA DERMAPEN 36 PINES ───────────────────────────────────────────────
    {
        id: "aguja-dermapen-36-pines-cartucho-esteril",
        name: "AGUJA DERMAPEN 36 PINES",
        type: "Consumibles",
        description: "Cartucho de aguja desechable de 36 pines para dispositivos de microneedling Dr. Pen. Compatible con modelos A1-C, A1-W y A6. Esterilizado mediante radiación gamma y sellado en bolsa hermética para garantizar condiciones óptimas de uso. Aplicación uniforme para estimulación cutánea y tratamientos de rejuvenecimiento.",
        image: "/images/CUIDADO PERSONAL/DERMAPEN/AGUJA.png",

        attributeOrder: ["cantidad"],

        attributes: [
            {
                id: "cantidad",
                label: "Cantidad",
                type: "single",
                values: [
                    { id: "1u", label: "1 unidad" },
                    { id: "50u", label: "Paquete × 50 und" },
                    { id: "100u", label: "Paquete × 100 und" }
                ]
            }
        ],

        variants: [
            {
                sku: "aguja-dermapen-36p-1u",
                attrs: { cantidad: "1u" },
                name: "1 UNIDAD",
                description: "Cartucho desechable de 36 pines esterilizado por radiación gamma. Compatible con Dr. Pen A1-C, A1-W y A6. || Pines: 36 | Esterilización: Radiación gamma | Compatible con: Dr. Pen A1-C, A1-W, A6 | Presentación: 1 unidad.",
                price: 5,
                image: "/images/CUIDADO PERSONAL/DERMAPEN/AGUJA.png"
            },
            {
                sku: "aguja-dermapen-36p-50u",
                attrs: { cantidad: "50u" },
                name: "PAQUETE × 50 UND",
                description: "Paquete de 50 cartuchos desechables de 36 pines esterilizados por radiación gamma. Compatible con Dr. Pen A1-C, A1-W y A6. || Pines: 36 | Esterilización: Radiación gamma | Compatible con: Dr. Pen A1-C, A1-W, A6 | Presentación: 50 unidades.",
                price: 225,
                image: "/images/CUIDADO PERSONAL/DERMAPEN/AGUJA.png"
            },
            {
                sku: "aguja-dermapen-36p-100u",
                attrs: { cantidad: "100u" },
                name: "PAQUETE × 100 UND",
                description: "Paquete de 100 cartuchos desechables de 36 pines esterilizados por radiación gamma. Compatible con Dr. Pen A1-C, A1-W y A6. || Pines: 36 | Esterilización: Radiación gamma | Compatible con: Dr. Pen A1-C, A1-W, A6 | Presentación: 100 unidades.",
                price: 400,
                image: "/images/CUIDADO PERSONAL/DERMAPEN/AGUJA.png"
            }
        ]
    },

    // ─── 7. AGUJA PLASMA PEN ──────────────────────────────────────────────────────
    {
        id: "aguja-para-plasma-pen-caja",
        name: "AGUJA DE PLASMA PEN FINAS × 100 UND",
        type: "Consumibles",
        description: "Agujas finas desechables para plasma pen en presentación de caja × 100 unidades. Esterilizadas de un solo uso. Disponibles en 4 medidas estándar para adaptarse a distintas zonas y profundidades de tratamiento.",
        image: "/images/CUIDADO PERSONAL/PLASMA PEN/AGUJA.png",

        attributeOrder: ["medida"],

        attributes: [
            {
                id: "medida",
                label: "Medida",
                type: "single",
                values: [
                    { id: "13mm", label: "0.25 × 13 mm" },
                    { id: "25mm", label: "0.25 × 25 mm" },
                    { id: "35mm", label: "0.25 × 35 mm" },
                    { id: "40mm", label: "0.25 × 40 mm" }
                ]
            }
        ],

        variants: [
            {
                sku: "aguja-plasma-pen-025x13mm",
                attrs: { medida: "13mm" },
                name: "0.25 × 13 MM",
                description: "Aguja fina desechable para plasma pen. Indicada para zonas de acceso reducido y tratamientos superficiales. || Medida: 0.25 × 13 mm | Presentación: Caja × 100 und | Uso: Único desechable | Esterilización: Sí.",
                price: 50,
                image: "/images/CUIDADO PERSONAL/PLASMA PEN/AGUJA.png"
            },
            {
                sku: "aguja-plasma-pen-025x25mm",
                attrs: { medida: "25mm" },
                name: "0.25 × 25 MM",
                description: "Aguja fina desechable para plasma pen. Medida estándar para la mayoría de zonas faciales y corporales. || Medida: 0.25 × 25 mm | Presentación: Caja × 100 und | Uso: Único desechable | Esterilización: Sí.",
                price: 50,
                image: "/images/CUIDADO PERSONAL/PLASMA PEN/AGUJA.png"
            },
            {
                sku: "aguja-plasma-pen-025x35mm",
                attrs: { medida: "35mm" },
                name: "0.25 × 35 MM",
                description: "Aguja fina desechable para plasma pen. Indicada para zonas corporales y tratamientos de mayor profundidad. || Medida: 0.25 × 35 mm | Presentación: Caja × 100 und | Uso: Único desechable | Esterilización: Sí.",
                price: 50,
                image: "/images/CUIDADO PERSONAL/PLASMA PEN/AGUJA.png"
            },
            {
                sku: "aguja-plasma-pen-025x40mm",
                attrs: { medida: "40mm" },
                name: "0.25 × 40 MM",
                description: "Aguja fina desechable para plasma pen. Medida de mayor longitud para tratamientos corporales profundos. || Medida: 0.25 × 40 mm | Presentación: Caja × 100 und | Uso: Único desechable | Esterilización: Sí.",
                price: 50,
                image: "/images/CUIDADO PERSONAL/PLASMA PEN/AGUJA.png"
            }
        ]
    },
];
