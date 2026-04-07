// src/data/products/dermoesteticaYCuidadoPersonal.js

export const dermoesteticaYCuidadoPersonalProducts = [

    {
        id: "lampara-lupa-estetica",
        name: "LÁMPARA LUPA ESTÉTICA – LED",
        type: "Lamparas-esteticas",
        description: "Lámpara lupa LED de luz fría para uso profesional en estética, dermatología y procedimientos de precisión. Iluminación uniforme sin sombras ni generación de calor, con lente de vidrio óptico disponible en 3, 5 y 8 dioptrías para distintos niveles de aumento según el tratamiento. Disponible en versión con pie y ruedas para uso junto a camilla, o versión de sobremesa con mordaza para fijación en mesa o carrito de belleza. Brazo articulado con muelles internos que mantienen la posición. Indicada para extensiones de pestañas, faciales, análisis de piel, depilación y micropigmentación.",
        image: "/images/accesorios/CARDS/LAMPARA_LUPA_CARD.png",

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
                image: "/images/accesorios/LAMPARA LUPA/PIE_3D.png"
            },
            {
                sku: "lampara-lupa-pie-5d",
                attrs: { base: "pie-ruedas", dioptria: "5d" },
                name: "PIE CON RUEDAS – 5 DIOPTRÍAS",
                description: "Lámpara lupa LED de luz fría con pie y base de 5 ruedas para máxima movilidad junto a camilla. Lente de 5 dioptrías para precisión media en extensiones de pestañas, cejas y tratamientos faciales de detalle. Brazo articulado regulable. || Dioptrías: 5D | Base: Pie con 5 ruedas | Luz: LED fría sin calor | Uso: Extensiones de pestañas, cejas, faciales de detalle.",
                price: 5,
                image: "/images/accesorios/LAMPARA LUPA/PIE_5D.png"
            },
            {
                sku: "lampara-lupa-pie-8d",
                attrs: { base: "pie-ruedas", dioptria: "8d" },
                name: "PIE CON RUEDAS – 8 DIOPTRÍAS",
                description: "Lámpara lupa LED de luz fría con pie y base de 5 ruedas para máxima movilidad junto a camilla. Lente de 8 dioptrías de alta precisión para micropigmentación, microblading y procedimientos que requieren máximo detalle. Brazo articulado regulable. || Dioptrías: 8D | Base: Pie con 5 ruedas | Luz: LED fría sin calor | Uso: Micropigmentación, microblading, alta precisión.",
                price: 5,
                image: "/images/accesorios/LAMPARA LUPA/PIE_8D.png"
            },

            // ─── SOBREMESA ────────────────────────────────────────────────────────────
            {
                sku: "lampara-lupa-mesa-3d",
                attrs: { base: "sobremesa", dioptria: "3d" },
                name: "SOBREMESA – 3 DIOPTRÍAS",
                description: "Lámpara lupa LED de luz fría con mordaza para fijación en mesa o carrito de belleza. Lente de 3 dioptrías para uso general en tratamientos de precisión en espacios reducidos. Brazo articulado compacto. || Dioptrías: 3D | Base: Mordaza de mesa | Luz: LED fría sin calor | Uso: Manicura, cejas, trabajos de mesa.",
                price: 5,
                image: "/images/accesorios/LAMPARA LUPA/MESA_3D.png"
            },
            {
                sku: "lampara-lupa-mesa-5d",
                attrs: { base: "sobremesa", dioptria: "5d" },
                name: "SOBREMESA – 5 DIOPTRÍAS",
                description: "Lámpara lupa LED de luz fría con mordaza para fijación en mesa o carrito de belleza. Lente de 5 dioptrías para precisión media en nail art, diseño de cejas y trabajos de detalle en superficie plana. Brazo articulado compacto. || Dioptrías: 5D | Base: Mordaza de mesa | Luz: LED fría sin calor | Uso: Nail art, cejas, detalle.",
                price: 5,
                image: "/images/accesorios/LAMPARA LUPA/MESA_5D.png"
            },
            {
                sku: "lampara-lupa-mesa-8d",
                attrs: { base: "sobremesa", dioptria: "8d" },
                name: "SOBREMESA – 8 DIOPTRÍAS",
                description: "Lámpara lupa LED de luz fría con mordaza para fijación en mesa o carrito de belleza. Lente de 8 dioptrías de alta precisión para micropigmentación de mesa, nail art fino y trabajos que requieren máximo detalle en posición fija. || Dioptrías: 8D | Base: Mordaza de mesa | Luz: LED fría sin calor | Uso: Micropigmentación de mesa, nail art fino.",
                price: 5,
                image: "/images/accesorios/LAMPARA LUPA/MESA_8D.png"
            }
        ]
    },

    {
        id: "vaporizador-facial-estetico",
        name: "VAPORIZADOR FACIAL ESTÉTICO",
        type: "Dispositivos-faciales",
        description: "Vaporizador facial profesional para apertura de poros, hidratación profunda y preparación de la piel antes de tratamientos estéticos. El vapor tibio dilata los poros facilitando la extracción de impurezas y mejorando la absorción de principios activos. Disponible en versión estándar de vapor de agua y versión con ozono para efecto bactericida adicional, indicada para pieles con tendencia acnéica. Incluye brazo articulado flexible y depósito de agua extraíble de fácil limpieza. Ideal para centros de estética, spas y consultas de medicina estética.",
        image: "/images/accesorios/CARDS/VAPORIZADOR_CARD.png",

        attributeOrder: ["tipo", "funcion"],

        attributes: [
            {
                id: "tipo",
                label: "Tipo",
                type: "single",
                values: [
                    { id: "estandar", label: "Estándar" },
                    { id: "ozono", label: "Con ozono" }
                ]
            },
            {
                id: "funcion",
                label: "Función adicional",
                type: "single",
                values: [
                    { id: "solo-vapor", label: "Solo vapor" },
                    { id: "vapor-aromaterapia", label: "Vapor + aromaterapia" }
                ]
            }
        ],

        attributeRules: {
            "estandar": { funcion: ["solo-vapor", "vapor-aromaterapia"] },
            "ozono": { funcion: ["solo-vapor"] }
        },

        variants: [
            {
                sku: "vaporizador-estandar-vapor",
                attrs: { tipo: "estandar", funcion: "solo-vapor" },
                name: "ESTÁNDAR – SOLO VAPOR",
                description: "Vaporizador facial estándar de vapor de agua tibio para apertura de poros, hidratación e preparación de la piel antes de limpiezas faciales y tratamientos estéticos. Brazo articulado flexible y depósito extraíble. || Tipo: Vapor de agua | Función: Vapor | Potencia: aprox. 300 W | Uso: Limpieza facial, preparación de piel.",
                price: 5,
                image: "/images/accesorios/VAPORIZADOR/ESTANDAR_VAPOR.png"
            },
            {
                sku: "vaporizador-estandar-aroma",
                attrs: { tipo: "estandar", funcion: "vapor-aromaterapia" },
                name: "ESTÁNDAR – VAPOR + AROMATERAPIA",
                description: "Vaporizador facial estándar con bandeja de aromaterapia para infusión de aceites esenciales en el vapor. Combina apertura de poros con efecto relajante y aromaterapéutico, ideal para tratamientos de spa y bienestar. Brazo articulado flexible y depósito extraíble. || Tipo: Vapor + aromaterapia | Función: Vapor con aceites esenciales | Uso: Spa, tratamientos de bienestar.",
                price: 5,
                image: "/images/accesorios/VAPORIZADOR/ESTANDAR_AROMA.png"
            },
            {
                sku: "vaporizador-ozono-vapor",
                attrs: { tipo: "ozono", funcion: "solo-vapor" },
                name: "CON OZONO",
                description: "Vaporizador facial con generador de ozono integrado para efecto bactericida y antiséptico durante la vaporización. El ozono elimina bacterias y hongos de la superficie cutánea, siendo especialmente indicado para pieles con acné, seborreicas o con tendencia infecciosa. Brazo articulado flexible y depósito extraíble. || Tipo: Vapor + ozono | Función bactericida: Sí | Uso: Pieles acnéicas, seborreicas, antisepsia.",
                price: 5,
                image: "/images/accesorios/VAPORIZADOR/OZONO.png"
            }
        ]
    },

    {
        id: "plasma-pen-fibroblasto",
        name: "PLASMA PEN – FIBROBLASTO",
        type: "Dermapen-y-Microneedling",
        description: "Dispositivo de plasma pen para tratamientos de fibroblasto, técnica no invasiva que utiliza la ionización del gas atmosférico para generar un arco de plasma que contrae y estimula la regeneración del tejido cutáneo sin contacto directo con la piel. Indicado para lifting no quirúrgico de párpados, eliminación de manchas, fibromas, queratosis, cicatrices y líneas de expresión. Incluye agujas finas intercambiables de distintas longitudes. Compatible con las agujas de plasma pen 0.25 mm disponibles en catálogo.",
        image: "/images/accesorios/CARDS/PLASMA_PEN_CARD.png",

        attributeOrder: ["presentacion"],

        attributes: [
            {
                id: "presentacion",
                label: "Presentación",
                type: "single",
                values: [
                    { id: "solo-equipo", label: "Solo equipo" },
                    { id: "kit-basico", label: "Kit básico (equipo + 100 agujas)" },
                    { id: "kit-pro", label: "Kit profesional (equipo + 300 agujas)" }
                ]
            }
        ],

        variants: [
            {
                sku: "plasma-pen-solo-equipo",
                attrs: { presentacion: "solo-equipo" },
                name: "SOLO EQUIPO",
                description: "Plasma pen para fibroblasto solo equipo sin agujas incluidas. Intensidad ajustable en múltiples niveles, pantalla LED de control, carga USB. Compatible con agujas finas 0.25 mm disponibles en catálogo en medidas 13, 25, 35 y 40 mm. || Función: Fibroblasto por arco de plasma | Intensidad: Ajustable | Carga: USB | Incluye: Equipo sin agujas.",
                price: 5,
                image: "/images/accesorios/PLASMA PEN/PLASMA_SOLO.png"
            },
            {
                sku: "plasma-pen-kit-basico",
                attrs: { presentacion: "kit-basico" },
                name: "KIT BÁSICO – EQUIPO + 100 AGUJAS",
                description: "Plasma pen para fibroblasto con 100 agujas finas 0.25 mm incluidas (surtido de medidas). Intensidad ajustable en múltiples niveles, pantalla LED de control, carga USB. || Función: Fibroblasto por arco de plasma | Intensidad: Ajustable | Carga: USB | Incluye: Equipo + 100 agujas 0.25 mm surtidas.",
                price: 5,
                image: "/images/accesorios/PLASMA PEN/PLASMA_KIT_BASICO.png"
            },
            {
                sku: "plasma-pen-kit-pro",
                attrs: { presentacion: "kit-pro" },
                name: "KIT PROFESIONAL – EQUIPO + 300 AGUJAS",
                description: "Plasma pen para fibroblasto con 300 agujas finas 0.25 mm incluidas (surtido de medidas). Ideal para centros de estética con alto volumen de tratamientos. Intensidad ajustable en múltiples niveles, pantalla LED de control, carga USB. || Función: Fibroblasto por arco de plasma | Intensidad: Ajustable | Carga: USB | Incluye: Equipo + 300 agujas 0.25 mm surtidas.",
                price: 5,
                image: "/images/accesorios/PLASMA PEN/PLASMA_KIT_PRO.png"
            }
        ]
    },

    {
        id: "alta-frecuencia-estetica",
        name: "ALTA FRECUENCIA ESTÉTICA",
        type: "Dispositivos-faciales",
        description: "Equipo de alta frecuencia para tratamientos estéticos faciales y corporales que utiliza corriente de Tesla a alta frecuencia (100.000–250.000 Hz) para generar ozono superficial sobre la piel. Produce efecto bactericida, oxigenante y antiinflamatorio sin contacto directo mediante electrodos de vidrio con gas interno. Indicado para acné, piel seborreica, caída del cabello, estimulación de la circulación y penetración superficial de activos cosméticos. Disponible en versión portátil de 4 electrodos y versión profesional de 7 electrodos para mayor versatilidad de tratamientos.",
        image: "/images/accesorios/CARDS/ALTA_FRECUENCIA_CARD.png",

        attributeOrder: ["version", "electrodo"],

        attributes: [
            {
                id: "version",
                label: "Versión",
                type: "single",
                values: [
                    { id: "portatil", label: "Portátil – 4 electrodos" },
                    { id: "profesional", label: "Profesional – 7 electrodos" }
                ]
            },
            {
                id: "electrodo",
                label: "Electrodo incluido",
                type: "single",
                values: [
                    { id: "kit-4", label: "Kit 4 electrodos (hongo, naranja, peine, tubo)" },
                    { id: "kit-7", label: "Kit 7 electrodos (hongo, naranja, peine, tubo, espátula, punto, curvo)" }
                ]
            }
        ],

        attributeRules: {
            "portatil": { electrodo: ["kit-4"] },
            "profesional": { electrodo: ["kit-7"] }
        },

        variants: [
            {
                sku: "alta-frecuencia-portatil-4e",
                attrs: { version: "portatil", electrodo: "kit-4" },
                name: "PORTÁTIL – 4 ELECTRODOS",
                description: "Equipo de alta frecuencia portátil con 4 electrodos de vidrio intercambiables para tratamientos faciales y capilares. Intensidad regulable, diseño compacto y ligero para uso en cabina y domiciliario. Incluye electrodo tipo hongo (facial general), naranja (áreas pequeñas), peine (cuero cabelludo) y tubo recto (cuello y cuerpo). || Versión: Portátil | Electrodos: 4 | Frecuencia: 100,000–250,000 Hz | Uso: Facial, capilar, antibacteriano.",
                price: 5,
                image: "/images/accesorios/ALTA FRECUENCIA/PORTATIL_4E.png"
            },
            {
                sku: "alta-frecuencia-profesional-7e",
                attrs: { version: "profesional", electrodo: "kit-7" },
                name: "PROFESIONAL – 7 ELECTRODOS",
                description: "Equipo de alta frecuencia profesional con 7 electrodos de vidrio intercambiables para cobertura completa de tratamientos faciales, capilares y corporales. Intensidad regulable con pantalla de control. Incluye electrodo tipo hongo, naranja, peine, tubo recto, espátula, punta fina y curvo para contorno de ojos. || Versión: Profesional | Electrodos: 7 | Frecuencia: 100,000–250,000 Hz | Uso: Facial completo, capilar, corporal, contorno de ojos.",
                price: 5,
                image: "/images/accesorios/ALTA FRECUENCIA/PROFESIONAL_7E.png"
            }
        ]
    },

    {
        id: "equipo-multifuncion-estetico",
        name: "EQUIPO MULTIFUNCIÓN ESTÉTICO",
        type: "Dispositivos-faciales",
        description: "Equipos multifunción para tratamientos corporales y faciales no invasivos que combinan las tecnologías más demandadas en centros de estética en un solo equipo. Disponibles en tres configuraciones según el nivel de servicios requerido: 3 en 1 (cavitación, radiofrecuencia y vacumterapia) para reducción de grasa y celulitis, 5 en 1 que agrega radiofrecuencia facial y lipolaser, y 8 en 1 con EMS, martillo frío y fotorrejuvenecimiento para una cobertura completa de tratamientos corporales y faciales. Pantalla táctil, intensidad ajustable y manípulos intercambiables en todos los modelos.",
        image: "/images/accesorios/CARDS/MULTIFUNCION_CARD.png",

        attributeOrder: ["funciones"],

        attributes: [
            {
                id: "funciones",
                label: "Configuración",
                type: "single",
                values: [
                    { id: "3en1", label: "3 en 1 – Básico" },
                    { id: "5en1", label: "5 en 1 – Intermedio" },
                    { id: "8en1", label: "8 en 1 – Profesional" }
                ]
            }
        ],

        variants: [
            {
                sku: "multifuncion-3en1",
                attrs: { funciones: "3en1" },
                name: "3 EN 1 – CAVITACIÓN + RF + VACUM",
                description: "Equipo multifunción básico con 3 tecnologías para reducción de grasa localizada, celulitis y remodelación corporal. Pantalla táctil, intensidad ajustable e incluye 3–4 manípulos intercambiables. Ideal para centros de estética que inician en aparatología corporal. || Funciones: Cavitación 40 kHz + Radiofrecuencia multipolar + Vacumterapia | Manípulos: 3–4 | Pantalla: Táctil | Alimentación: 220V | Uso: Reducción de grasa, celulitis, remodelación corporal.",
                price: 5,
                image: "/images/accesorios/MULTIFUNCION/3EN1.png"
            },
            {
                sku: "multifuncion-5en1",
                attrs: { funciones: "5en1" },
                name: "5 EN 1 – CAVI + RF FACIAL + RF CORPORAL + VACUM + LIPOLASER",
                description: "Equipo multifunción intermedio que agrega radiofrecuencia facial diferenciada y lipolaser para tratamientos tanto faciales como corporales en un solo equipo. Pantalla táctil, intensidad ajustable e incluye 5–6 manípulos y pads de lipolaser. Ideal para centros de estética con demanda de tratamientos faciales y corporales simultáneos. || Funciones: Cavitación 40 kHz + RF facial bipolar + RF corporal multipolar + Vacumterapia + Lipolaser | Manípulos: 5–6 + pads lipolaser | Pantalla: Táctil | Alimentación: 220V | Uso: Facial + corporal.",
                price: 5,
                image: "/images/accesorios/MULTIFUNCION/5EN1.png"
            },
            {
                sku: "multifuncion-8en1",
                attrs: { funciones: "8en1" },
                name: "8 EN 1 – LÍNEA PROFESIONAL COMPLETA",
                description: "Equipo multifunción profesional de línea completa que integra 8 tecnologías para cobertura total de tratamientos corporales y faciales. Incluye cavitación, radiofrecuencia facial y corporal, vacumterapia, lipolaser, electroestimulación EMS, martillo frío y fotorrejuvenecimiento. Pantalla táctil, múltiples programas de trabajo y 8+ manípulos intercambiables. Para centros de estética y spas de mayor nivel de servicio. || Funciones: Cavitación + RF facial + RF corporal + Vacum + Lipolaser + EMS + Martillo frío + Fotorrejuvenecimiento | Manípulos: 8+ | Pantalla: Táctil | Alimentación: 220V | Uso: Tratamientos corporales y faciales completos.",
                price: 5,
                image: "/images/accesorios/MULTIFUNCION/8EN1.png"
            }
        ]
    },

    {
        id: "electro-estimulacion-facial",
        name: "ELECTRO ESTIMULACIÓN FACIAL",
        type: "Dispositivos-faciales",
        description: "Equipos de electro estimulación facial no invasiva para tratamientos de lifting, tonificación muscular y rejuvenecimiento cutáneo mediante corrientes eléctricas de baja intensidad. Disponibles en dos tecnologías: microcorriente (corriente galvánica de baja intensidad que imita la bioelectricidad natural del músculo para lifting y redefinición del óvalo facial) y TENS facial (corriente eléctrica de baja frecuencia para tonificación muscular, reducción de arrugas de expresión y mejora de la circulación). Sin procedimientos invasivos, sin tiempo de recuperación. Aptos para uso profesional en centros de estética y domiciliario.",
        image: "/images/accesorios/CARDS/ELECTRO_FACIAL_CARD.png",

        attributeOrder: ["tecnologia", "zona"],

        attributes: [
            {
                id: "tecnologia",
                label: "Tecnología",
                type: "single",
                values: [
                    { id: "microcorriente", label: "Microcorriente (lifting facial)" },
                    { id: "tens", label: "TENS facial (tonificación muscular)" }
                ]
            },
            {
                id: "zona",
                label: "Zona de tratamiento",
                type: "single",
                values: [
                    { id: "facial", label: "Facial" },
                    { id: "facial-corporal", label: "Facial y corporal" }
                ]
            }
        ],

        attributeRules: {
            "microcorriente": { zona: ["facial", "facial-corporal"] },
            "tens": { zona: ["facial", "facial-corporal"] }
        },

        variants: [
            {
                sku: "electro-microcorriente-facial",
                attrs: { tecnologia: "microcorriente", zona: "facial" },
                name: "MICROCORRIENTE – FACIAL",
                description: "Dispositivo de microcorriente facial que utiliza corriente galvánica de baja intensidad (microamperios) para imitar la bioelectricidad natural del músculo facial, produciendo efecto lifting, redefinición del óvalo y reducción de arrugas sin contacto agresivo. Incluye electrodos de punta redondeada para trabajo por zonas. || Tecnología: Microcorriente galvánica | Zona: Facial | Intensidad: Microamperios | Uso: Lifting, óvalo facial, arrugas de expresión.",
                price: 5,
                image: "/images/accesorios/ELECTRO FACIAL/MICROCORRIENTE_FACIAL.png"
            },
            {
                sku: "electro-microcorriente-facial-corporal",
                attrs: { tecnologia: "microcorriente", zona: "facial-corporal" },
                name: "MICROCORRIENTE – FACIAL Y CORPORAL",
                description: "Dispositivo de microcorriente con electrodos para uso facial y corporal. Corriente galvánica de baja intensidad para lifting facial, tonificación de glúteos, abdomen y muslos. Incluye electrodos de punta para zonas faciales y electrodos de almohadilla para zonas corporales. || Tecnología: Microcorriente galvánica | Zona: Facial + corporal | Intensidad: Microamperios | Uso: Lifting facial, tonificación corporal.",
                price: 5,
                image: "/images/accesorios/ELECTRO FACIAL/MICROCORRIENTE_CORPORAL.png"
            },
            {
                sku: "electro-tens-facial",
                attrs: { tecnologia: "tens", zona: "facial" },
                name: "TENS FACIAL",
                description: "Dispositivo TENS facial con corriente eléctrica de baja frecuencia para tonificación de la musculatura facial, reducción de arrugas de expresión y mejora de la circulación sanguínea cutánea. Incluye electrodos autoadhesivos faciales y control de intensidad ajustable. || Tecnología: TENS baja frecuencia | Zona: Facial | Uso: Tonificación muscular, arrugas de expresión, circulación.",
                price: 5,
                image: "/images/accesorios/ELECTRO FACIAL/TENS_FACIAL.png"
            },
            {
                sku: "electro-tens-facial-corporal",
                attrs: { tecnologia: "tens", zona: "facial-corporal" },
                name: "TENS FACIAL Y CORPORAL",
                description: "Dispositivo TENS con electrodos para uso facial y corporal. Corriente de baja frecuencia para tonificación muscular facial y corporal, reducción de arrugas de expresión y electroestimulación de grupos musculares. Incluye electrodos autoadhesivos faciales y corporales en distintos tamaños. || Tecnología: TENS baja frecuencia | Zona: Facial + corporal | Uso: Tonificación facial y muscular corporal, EMS.",
                price: 5,
                image: "/images/accesorios/ELECTRO FACIAL/TENS_CORPORAL.png"
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

    // ─── 3. DERMAPEN DR. PEN ULTIMA M7-W ─────────────────────────────────────────
    {
        id: "dermapen-dr-pen-ultima-m7-w",
        name: "DERMAPEN DR. PEN ULTIMA M7-W",
        type: "Dermapen-y-Microneedling",
        description: "Dispositivo profesional de microneedling Dr. Pen Ultima M7-W que estimula la producción natural de colágeno y elastina mediante microagujas ajustables en profundidad (0,25–2,5 mm) y 5 niveles de velocidad. Trata arrugas, líneas finas, cicatrices de acné, poros dilatados y estrías, potenciando la absorción de principios activos mediante microcanales. Compatible con cartuchos de agujas estériles intercambiables MTS y PMS. Diseño ergonómico metálico con funcionamiento inalámbrico o con cable.",
        image: "/images/CUIDADO PERSONAL/DERMAPEN/DERMAPEN.png",

        attributeOrder: ["modo"],

        attributes: [
            {
                id: "modo",
                label: "Modo de uso",
                type: "single",
                values: [
                    { id: "sin-aguja", label: "Solo equipo (sin cartuchos)" },
                    { id: "kit-completo", label: "Kit completo (equipo + 10 cartuchos)" }
                ]
            }
        ],

        variants: [
            {
                sku: "dermapen-m7w-solo",
                attrs: { modo: "sin-aguja" },
                name: "SOLO EQUIPO",
                description: "Dr. Pen Ultima M7-W solo equipo sin cartuchos incluidos. 5 velocidades ajustables, profundidad 0,25–2,5 mm, modo inalámbrico y con cable, diseño ergonómico metálico. || Modelo: M7-W | Velocidades: 5 niveles | Profundidad: 0,25–2,5 mm | Modo: Inalámbrico / cable | Compatible con: Cartuchos MTS y PMS.",
                price: 200,
                images: [
                    "/images/CUIDADO PERSONAL/DERMAPEN/DERMAPEN.png",
                    "/images/CUIDADO PERSONAL/DERMAPEN/DERMAPEN_2.png"
                ]
            },
            {
                sku: "dermapen-m7w-kit",
                attrs: { modo: "kit-completo" },
                name: "KIT COMPLETO",
                description: "Dr. Pen Ultima M7-W con 10 cartuchos de agujas 36 pines incluidos. 5 velocidades ajustables, profundidad 0,25–2,5 mm, modo inalámbrico y con cable, diseño ergonómico metálico. || Modelo: M7-W | Velocidades: 5 niveles | Profundidad: 0,25–2,5 mm | Incluye: 10 cartuchos 36 pines | Compatible con: Cartuchos MTS y PMS.",
                price: 250,
                images: [
                    "/images/CUIDADO PERSONAL/DERMAPEN/DERMAPEN.png",
                    "/images/CUIDADO PERSONAL/DERMAPEN/DERMAPEN_2.png"
                ]
            }
        ]
    },

    // ─── 4. DISPOSITIVO DE REAFIRMACIÓN FACIAL ────────────────────────────────────
    {
        id: "dispositivo-reafirmacion-facial",
        name: "DISPOSITIVO DE REAFIRMACIÓN FACIAL Y REDUCCIÓN DE ARRUGAS",
        type: "Dispositivos-faciales",
        description: "Dispositivo manual ergonómico para reafirmación facial y reducción de arrugas y líneas finas. Estimula la producción natural de colágeno y elastina mejorando visiblemente la textura y elasticidad del rostro. Apto para uso en zonas como rostro, cuello y contorno facial. Se adapta a rutinas de cuidado estético domiciliario y entornos profesionales sin procedimientos invasivos.",
        image: "/images/CUIDADO PERSONAL/VARITA/VARITA.png",

        attributeOrder: ["presentacion"],

        attributes: [
            {
                id: "presentacion",
                label: "Presentación",
                type: "single",
                values: [
                    { id: "unidad", label: "Unidad" },
                    { id: "kit-suero", label: "Kit con suero activador" }
                ]
            }
        ],

        variants: [
            {
                sku: "reafirmacion-facial-unidad",
                attrs: { presentacion: "unidad" },
                name: "UNIDAD",
                description: "Dispositivo de reafirmación facial solo equipo. Manual, ergonómico y compacto para uso domiciliario y profesional. || Uso: Rostro, cuello y contorno facial | Tipo: No invasivo | Presentación: Unidad.",
                price: 200,
                images: [
                    "/images/CUIDADO PERSONAL/VARITA/VARITA.png",
                    "/images/CUIDADO PERSONAL/VARITA/VARITA_2.png"
                ]
            },
            {
                sku: "reafirmacion-facial-kit",
                attrs: { presentacion: "kit-suero" },
                name: "KIT CON SUERO ACTIVADOR",
                description: "Dispositivo de reafirmación facial con suero activador incluido para potenciar los resultados del tratamiento. Manual, ergonómico y compacto para uso domiciliario y profesional. || Uso: Rostro, cuello y contorno facial | Tipo: No invasivo | Incluye: Suero activador.",
                price: 5,
                images: [
                    "/images/CUIDADO PERSONAL/VARITA/VARITA.png",
                    "/images/CUIDADO PERSONAL/VARITA/VARITA_2.png"
                ]
            }
        ]
    },

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
