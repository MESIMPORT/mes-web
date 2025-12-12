// src/data/products/proteccionRadiologica.js

export const proteccionRadiologicaProducts = [

{
      id: "gorro-emplomado-kiran",
      name: "Gorro craneal emplomado Kiran",
      description:
      "Diseñado para reducir la exposición a la radiación dispersa en la cabeza durante procedimientos radiológicos. Ofrece una equivalencia de 0.50 mm Pb, garantizando 	máxima protección con un diseño ligero y ergonómico que brinda confort durante el uso prolongado.",
      price: 500,
      image: "/images/radiologia/gorro.png",

    },

  {
    id: "collarin-emplomado-kiran",
    name: "Collarín emplomado Kiran",
    description:
    "Protección cervical para minimizar la exposición de la tiroides. Ajuste por velcro y recubrimiento lavable. Disponible en talla adulto y pediátrica.",
    image: "/images/radiologia/collarin.png",
    variants: [
      {
        code: "ADULTO",
        label: "Adulto",
        price: 270,
      },
    {
      code: "PEDIATRICO",
      label: "Pediátrica",
      price: 270,
    },
],
},

{
  id: "protector-gonadal-emplomado-masc",
  name: "Protector gonadal masculino emplomado Kiran",
  description:
  "Diseñado para proteger los órganos reproductivos masculinos contra la radiación dispersa durante procedimientos radiológicos. Fabricado con una equivalencia de 0.50 mm 	Pb conforme a las normas EN 61331-1 y EN 61331-3, brinda una cobertura anatómica efectiva con ajuste ergonómico y materiales resistentes de larga duración.",
  price: 270,
  image:
  "/images/radiologia/gonadalmasc.png",

},

{
  id: "protector-gonadal-emplomado-fem",
  name: "Protector gonadal femenino emplomado Kiran",
  description:
  "Dispositivo diseñado para proteger los órganos reproductivos femeninos de la radiación dispersa. Fabricado con equivalencia de 0.50 mm Pb conforme a las normas EN 	61331-1 y EN 61331-3, ofrece una cobertura anatómica precisa, ajuste cómodo y alta durabilidad",
  price: 270,
  image: "/images/radiologia/gonadalhembra.png",

},

{
  id: "guantes-emplomados-kiran",
  name: "Guantes emplomados Kiran Duo",
  description:
  "Fabricados con material suave y flexible, los guantes Kiran Duo ofrecen excelente protección, confort y durabilidad. Su diseño de doble capa, con revestimiento externo 	sin costuras y forro interno desmontable y lavable, garantiza higiene y larga vida útil. Proveen un equivalente de plomo de 0.50 mm Pb, medido a 150 kVp según normas EN 	61331-1:2014 y EN 61331-3:2014, asegurando eficaz protección frente a radiación dispersa.",
  price: 870,
  image: "/images/radiologia/guantes.png",

},
{
  id: "lentes-emplomados-kiran",
  name: "Lentes emplomados Kiran",
  description:
  "Línea de lentes emplomados Kiran en 6 modelos (Front, Front & Side, Fit Over, Max 10, Aviators y Max 30), todos con protección equivalente a 0.75 mm Pb frontal según EN 61331-1 y EN 61331-3.",
  basePrice: 860, // o null si prefieres que salga de la variante
  image: "/images/radiologia/lentes-front-side.png", // imagen “principal” para la lista
  variants: [
    {
      code: "FRONT",
      label: "Front",
      image: "/images/radiologia/lentes-front.png",
      shortDescription: "Protección frontal completa. Estilo clásico.",
      price: 860,
    },
  {
    code: "FRONT_SIDE",
    label: "Front & Side",
    image: "/images/radiologia/lentes-front-side.png",
    shortDescription: "Protección frontal y lateral.",
    price: 960,
  },
{
  code: "FIT_OVER",
  label: "Fit Over",
  image: "/images/radiologia/lentes-fit-over.png",
  shortDescription: "Diseñados para usar sobre lentes de medida.",
  price: 1060,
},
{
  code: "MAX10",
  label: "Max 10",
  image: "/images/radiologia/lentes-max10.png",
  shortDescription: "Marco con acolchado en sienes y puente.",
  price: 1060,
},
{
  code: "AVIATORS",
  label: "Aviators",
  image: "/images/radiologia/lentes-aviators.png",
  shortDescription: "Estilo aviador envolvente y ligero.",
  price: 860,
},
{
  code: "MAX30",
  label: "Max 30",
  image: "/images/radiologia/lentes-max30.png",
  shortDescription: "Modelo unisex que se adapta a todo tipo de rostro.",
  price: 860,
},
],
},

  {
    id: "mandil-emplomado-sin-collarin-adulto-kiran", // mantenemos el mismo id para que la URL siga funcionando
    name: "Mandil emplomado",
    description:
      "Mandil emplomado en versiones adulto y pediátrico, con y sin collarín. Equivalente 0.50 mm Pb.",
    basePrice: 800 ,
    image: "/images/radiologia/mandil.png",
    variants: [
      {
        code: "ADULTO_SIN",
        label: "Adulto · sin collarín",
        patientType: "Adulto",
        collarin: "Sin collarín",
        price: 1000,
        image: "/images/radiologia/mandil.png",
      },
      {
        code: "ADULTO_CON",
        label: "Adulto · con collarín",
        patientType: "Adulto",
        collarin: "Con collarín",
        price: 1280,
        image: "/images/radiologia/mandil.png",
      },
      {
        code: "PEDIATRICO_SIN",
        label: "Pediátrico · sin collarín",
        patientType: "Pediátrico",
        collarin: "Sin collarín",
        price: 800,
        image: "/images/radiologia/mandil.png",
      },
      {
        code: "PEDIATRICO_CON",
        label: "Pediátrico · con collarín",
        patientType: "Pediátrico",
        collarin: "Con collarín",
        price: 1070,
        image: "/images/radiologia/mandil.png",
      },
    ],
  },

{
  id: "biombo-emplomado",
  name: "Biombo emplomado",
  description:
  "Pantalla movil con ventana opcional, montada en ruedas para resguardar al personal.",
  price: 3750,
  image: "/images/radiologia/biombo.png",

},
{
  id: "falda-emplomada-kiran",
  name: "Falda emplomada Kiran",
  description:
  "Proteccion de zona inferior (cadera, muslos, piernas) en procedimientos con rayos X.",
  price: 1050,
  image: "/images/radiologia/falda.png",

},
];
