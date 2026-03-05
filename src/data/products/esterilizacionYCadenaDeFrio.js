// src/data/products/esterilizacionYCadenaDeFrio.js

export const esterilizacionYCadenaDeFrioProducts = [

  {
    id: "portavacunas-kst",
    name: "Termo portavacunas KST 4.35LT",
    type: "Termos-portavacunas",
    description:
      "Esta es una caja conservadora diseñada para mantener la cadena de frío en el transporte de vacunas y biológicos. Cuenta con 4.35 litros de capacidad total y 1.7 litros de capacidad útil interior, ideal para campañas de vacunación, centros de salud y brigadas móviles. Está súper aislado con poliuretano NON-CFC, garantizando máxima eficiencia térmica y respeto por el medio ambiente, mientras que su estructura moldeada en plástico de alto impacto asegura resistencia y larga durabilidad. Incorpora una asa robusta con sistema de cierre hermético en dos posiciones (transporte y almacenamiento), lo que mejora la seguridad del contenido. Su diseño cuadrado permite el apilamiento eficiente, optimizando espacio en almacenamiento y logística. Incluye 4 Ice Packs con tapa de rosca para una adecuada conservación térmica y ofrece una vida fría con retención de temperatura de hasta 43 horas",
    price: 550,
    image: "/images/cadena/termo.jpg",

  },

  {
    id: "portavacunas-kyntel",
    name: "Termo portavacunas KYNTEL 8LT",
    type: "Termos-portavacunas",
    description:
      "Fabricado en polipropileno de alta calidad, cuenta con un área interna aislante de espuma de poliuretano. Ademas, posee seis bloques de gel refrigerante que se  	encuentran ordenadamente en una funda interna. Este termo porta vacunas, cuenta con una tapa hermética, que se fija con clip cómodo y manual, también posee un 	termómetro digital que mostrará la temperatura interna",
    price: 350,
    image: "/images/cadena/kyntel.png",

  },

  {
    id: "termometro-con-sonda",
    name: "Termometro digital con sonda",
    type: "Termometros-cadena-frio",
    description:
      "Diseñado para un control rápido y exacto de la temperatura en diversas aplicaciones industriales, médicas, alimentarias y de laboratorio. Su pantalla digital de fácil 	lectura y su sonda de acero inoxidable garantizan mediciones higiénicas, seguras y eficientes. Sensor interno:-50~+70°C Sensor externo:-50~+110°C",
    price: 40,
    image: "/images/cadena/termometro.png",

  },

  {
    id: "portavacunas-nilkamal",
    name: "PORTAVACUNAS NILKAMAL",
    type: "Termos-portavacunas",
    description: "Cajas térmicas Nilkamal para transporte seguro de vacunas. Fabricadas en polietileno libre de CFC con certificación PQS de la OMS. Disponibles en distintas capacidades.",
    image: "/images/cadena/CARDS/NILKAMAL.png",

    attributes: [
      {
        id: "modelo",
        label: "Modelo",
        type: "single",
        values: [
          { id: "bdvc44-1.7lt", label: "1.7 LT" },
          { id: "bcvc46-2.7lt", label: "2.7 LT" },
          { id: "bdvc46-3.36lt", label: "3.36 LT" },
          { id: "rcb264sl-6lt", label: "6 LT" },
          { id: "rcb244ss", label: "10.7LT" },
          { id: "rcb324ss-15lt", label: "15 LT" },
          { id: "rcb444la", label: "20LT" },
          { id: "rcb444l-23lt", label: "23 LT" }
        ]
      }
    ],

    variants: [
      {
        sku: "nilkamal-bdvc44-1.7lt",
        attrs: { modelo: "bdvc44-1.7lt" },
        name: "NILKAMAL BDVC44",
        description: "Fabricada en polietileno libre de CFC, resistente a la corrosión y diseñada bajo los requisitos de la OMS, con certificación PQS E004/055. Incorpora doble pared con espuma de poliuretano inyectada de 45 mm de espesor que garantiza un aislamiento eficiente y una vida fría superior a 30 horas a +43 °C. Ofrece una capacidad útil de 1.7 L y cuenta con cierre hermético mediante junta de silicona, diseño apilable y estructura cómoda para el transporte. La superficie externa es de HDPE y la interna de HIPS. Sus dimensiones externas son 25.2 × 26.0 × 30.5 cm e internas 17.0 × 17.0 × 16.4 cm, con un peso de 2.6 kg vacía y 3.34 kg completamente cargada. Incluye cuatro icepacks de 0.4 L.",
        price: 230,
        image: "/images/cadena/TRANSPORTADOR NIKAMAL/1.7LT.png"
      },
      {
        sku: "nilkamal-bcvc46-2.7lt",
        attrs: { modelo: "bcvc46-2.7lt" },
        name: "NILKAMAL BCVC46",
        description: "Ofrece una capacidad útil de 2.7 litros para el transporte seguro de vacunas, diluyentes y muestras biológicas, manteniendo una temperatura estable de 0 a 8 °C por hasta 46 horas y 23 minutos a +43 °C sin aperturas. Cuenta con certificación PQS E004/040 de la OMS, está diseñada conforme a las normativas nacionales de cadena de frío y soporta variaciones bruscas de temperatura, ideal para campañas en climas tropicales. Incluye tapa con correa para hombro y cuatro icepacks de 0.6 L. Sus dimensiones son 27 × 27 × 32 cm externas y 19 × 19 × 19 cm internas, con un peso total de 6.4 kg completamente cargada.",
        price: 200,
        image: "/images/cadena/TRANSPORTADOR NIKAMAL/2.7LT.png"
      },
      {
        sku: "nilkamal-bdvc46-3.36lt",
        attrs: { modelo: "bdvc46-3.36lt" },
        name: "NILKAMAL BDVC46",
        description: "Caja térmica para transporte de vacunas fabricada en polietileno libre de CFC, resistente a la corrosión y diseñada conforme a los requisitos de la OMS, con certificación PQS E004/055. Incorpora doble pared con espuma de poliuretano inyectada de 40 mm que garantiza un aislamiento eficiente y una vida fría superior a 30 horas a +43 °C. Ofrece una capacidad útil de 3.36 L, cierre hermético con junta de silicona y diseño apilable que facilita su almacenamiento y traslado. Cuenta con superficie externa de HDPE e interna de HIPS. Sus dimensiones aproximadas son 29.5 × 29.5 × 33.5 cm (externas) y 20.2 × 20.2 × 19.4 cm (internas), con un peso de 2.51 kg vacía y 5.17 kg completamente cargada. Incluye cuatro icepacks de 0.6 L.",
        price: 320,
        image: "/images/cadena/TRANSPORTADOR NIKAMAL/3.36LT.png"
      },
      {
        sku: "nilkamal-rcb264sl-6lt",
        attrs: { modelo: "rcb264sl-6lt" },
        name: "NILKAMAL RCB 264SL",
        description: "Con capacidad de 6 litros para almacenamiento de vacunas, manteniendo un rango eficiente de 2 °C a 8 °C. Ofrece una vida fría de hasta 106 horas a +43 °C sin aperturas y cuenta con certificación PQS E004/034 de la OMS. Está fabricada con exterior e interior en LLDPE resistente a impactos y aislamiento de poliuretano libre de CFC de 10 cm de espesor. Incorpora tapa con bisagras y cierre hermético con opción para candado, cerraduras incrustadas, asas laterales para transporte seguro, paredes reforzadas y base nervada para mayor durabilidad. Sus dimensiones externas son 65 × 53 × 46 cm e internas 40 × 27.8 × 20 cm, con un peso total de 27.54 kg completamente cargada. Incluye 26 icepacks de 0.4 L con certificación PQS.",
        price: 400,
        image: "/images/cadena/TRANSPORTADOR NIKAMAL/6LT.png"
      },
      {
        sku: "nilkamal-rcb244ss",
        attrs: { modelo: "rcb244ss" },
        name: "NILKAMAL RCB 244SS",
        description: "Fabricada en polietileno LLDPE libre de CFC y resistente a la corrosión, diseñada bajo los estándares de la OMS y con certificación PQS E004/056. Incorpora doble pared con espuma de poliuretano inyectada de 61 mm de espesor que garantiza un aislamiento eficiente y una vida fría superior a 73 horas a +43 °C. Cuenta con cierre hermético mediante junta de silicona, diseño apilable y estructura robusta para un transporte seguro. Sus dimensiones externas son 49.3 × 45.5 × 39.7 cm e internas 36.2 × 29.4 × 25.4 cm, con un peso de 8.18 kg vacía y 18.14 kg completamente cargada. Incluye 26 icepacks de 0.4 L.",
        price: 600,
        image: "/images/cadena/TRANSPORTADOR NIKAMAL/10.7LT.png"
      },
      {
        sku: "nilkamal-rcb324ss-15lt",
        attrs: { modelo: "rcb324ss-15lt" },
        name: "NILKAMAL RCB 324SS",
        description: "Con capacidad de 15 litros para almacenamiento de vacunas, diseñada para mantener la cadena de frío por hasta 53 horas y 36 minutos a +43 °C sin aperturas. Cuenta con certificación PQS E004/027 y un peso total de 33.85 kg completamente cargada. Incorpora tapa con bisagras y asas laterales para facilitar el transporte seguro. Sus dimensiones externas son 65 × 65 × 37 cm e internas 48 × 48 × 20 cm. Se suministra con 32 icepacks de 0.4 L como estándar.",
        price: 700,
        image: "/images/cadena/TRANSPORTADOR NIKAMAL/15LT.png"
      },
      {
        sku: "nilkamal-rcb444la",
        attrs: { modelo: "rcb444la" },
        name: "NILKAMAL RCB 444LA",
        description: "Modelo grande de largo alcance con capacidad de 20.25 litros para almacenamiento de vacunas, diseñada para ofrecer una vida fría de hasta 152 horas y 28 minutos a +43 °C sin aperturas. Cuenta con certificación PQS E004/036 y un peso total de 49.70 kg completamente cargada. Incorpora tapa con bisagras y asas laterales que facilitan un transporte seguro y práctico. Sus dimensiones externas son 77.00 × 62.00 × 53.50 cm e internas 51.00 × 36.00 × 27.50 cm. Se suministra con 44 icepacks de 0.4 L como equipamiento estándar.",
        price: 800,
        image: "/images/cadena/TRANSPORTADOR NIKAMAL/20LT.png"
      },
      {
        sku: "nilkamal-rcb444l-23lt",
        attrs: { modelo: "rcb444l-23lt" },
        name: "NILKAMAL RCB 444L",
        description: "De procedencia India, está diseñado para el almacenamiento y transporte seguro de vacunas con una capacidad de 23 litros y rango térmico eficiente de 2 °C a 8 °C. Fabricado en polietileno LLDPE libre de CFC, resistente a la corrosión e impactos, incorpora aislamiento de poliuretano inyectado de 111 mm que garantiza un óptimo desempeño térmico, con una vida fría superior a 96 horas (hasta 130 horas aprox. a +43 °C sin apertura). Cuenta con certificación PQS E004/013 de la OMS, cierre hermético con junta de silicona, diseño apilable, paredes reforzadas, base nervada y asa integrada para transporte cómodo. Sus dimensiones externas son 77.4 × 61.6 × 53 cm e internas 52.8 × 38.2 × 28.2 cm; peso vacío 17 kg y cargado 38 kg. Incluye 44 paquetes fríos (icepacks) de 0.4 L con certificación PQS.",
        price: 2800,
        image: "/images/cadena/TRANSPORTADOR NIKAMAL/23LT.png"
      }
    ]
  }

];
