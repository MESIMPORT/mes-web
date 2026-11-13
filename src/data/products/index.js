// ================================
// IMPORTS POR CADA CATEGORÍA
// ================================
import { diagnosticoYMedicionProducts } from "./diagnosticoYMedicion";
import { proteccionRadiologicaProducts } from "./proteccionRadiologica";
import { modelosAnatomicosYSimuladoresProducts } from "./modelosAnatomicosYSimuladores";
import { emergenciaYSoporteVitalProducts } from "./emergenciaYSoporteVital";
import { esterilizacionYCadenaDeFrioProducts } from "./esterilizacionYCadenaDeFrio";
import { accesoriosYMiscelaneosProducts } from "./accesoriosYMiscelaneos";
import { gestanteYNeonatosProducts } from "./gestanteYNeonatos";
import { soporteRespiratorioProducts } from "./soporteRespiratorio";
import { rehabilitacionYFisioterapiaProducts } from "./rehabilitacionYFisioterapia";
import { oftalmologiaYOptometriaProducts } from "./oftalmologiaYOptometria";
import { instrumentalYEquiposQuirurgicosProducts } from "./instrumentalYEquiposQuirurgicos";
import { materialDescartableMedicoProducts } from "./materialDescartableMedico";
import { mobiliarioYComfortProducts } from "./mobiliarioYComfort";
import { posicionamientoQuirurgicoProducts } from "./posicionamientoQuirurgico";
import { equipamientoYLaboratorioYReactivosProducts } from "./equipamientoYLaboratorioYReactivos";
import { dermoesteticaYCuidadoPersonalProducts } from "./dermoesteticaYCuidadoPersonal";
import { odontologiaProducts } from "./odontologia";
import { laminasHistologicasProducts } from "./laminasHistologicas";
import { PUBLISHED_IDS } from "./publicados";

// ================================
// LABELS BONITOS PARA UI
// ================================

const ALL_CATEGORY_LABELS = {
  "diagnostico-y-medicion": "Diagnóstico y medición",
  "modelos-anatomicos-y-simuladores": "Modelos anatómicos y simuladores",
  "equipamiento-y-laboratorio-y-reactivos": "Equipamiento, laboratorio y reactivos",
  "proteccion-radiologica": "Protección radiológica",
  "mobiliario-y-comfort": "Mobiliario y comfort",
  "posicionamiento-quirurgico": "Posicionamiento quirúrgico",
  "soporte-respiratorio": "Soporte respiratorio",
  "dermoestetica-y-cuidado-personal": "Dermoestética y cuidado personal",
  "emergencia-y-soporte-vital": "Emergencia y soporte vital",
  "rehabilitacion-y-fisioterapia": "Rehabilitación y fisioterapia",
  "instrumental-y-equipos-quirurgicos": "Instrumental y equipos quirúrgicos",
  "material-descartable-medico": "Material descartable médico",
  "laminas-histologicas": "Láminas histológicas",
  "gestante-y-neonatos": "Gestante y neonatos",
  "esterilizacion-y-cadena-de-frio": "Esterilización y cadena de frío",
  "accesorios-y-miscelaneos": "Accesorios y misceláneos",
  "oftalmologia-y-optometria": "Oftalmología y optometría",
  "odontologia": "Odontología",
};

// ================================
// MAPEO SLUG → LISTA DE PRODUCTOS
// ================================

export const ALL_PRODUCTS_BY_CATEGORY = {
  "diagnostico-y-medicion": diagnosticoYMedicionProducts,
  "proteccion-radiologica": proteccionRadiologicaProducts,
  "modelos-anatomicos-y-simuladores": modelosAnatomicosYSimuladoresProducts,
  "emergencia-y-soporte-vital": emergenciaYSoporteVitalProducts,
  "material-descartable-medico": materialDescartableMedicoProducts,
  "esterilizacion-y-cadena-de-frio": esterilizacionYCadenaDeFrioProducts,
  "accesorios-y-miscelaneos": accesoriosYMiscelaneosProducts,
  "gestante-y-neonatos": gestanteYNeonatosProducts,
  "soporte-respiratorio": soporteRespiratorioProducts,
  "rehabilitacion-y-fisioterapia": rehabilitacionYFisioterapiaProducts,
  "oftalmologia-y-optometria": oftalmologiaYOptometriaProducts,
  "instrumental-y-equipos-quirurgicos": instrumentalYEquiposQuirurgicosProducts,
  "mobiliario-y-comfort": mobiliarioYComfortProducts,
  "posicionamiento-quirurgico": posicionamientoQuirurgicoProducts,
  "equipamiento-y-laboratorio-y-reactivos": equipamientoYLaboratorioYReactivosProducts,
  "dermoestetica-y-cuidado-personal": dermoesteticaYCuidadoPersonalProducts,
  "odontologia": odontologiaProducts,
  "laminas-histologicas": laminasHistologicasProducts.map((p) => ({ cashDiscount: 0.08, ...p })),

};

// ================================
// FILTRO DE PUBLICACIÓN
// Solo se muestran en la web los productos cuyo id está en publicados.js.
// Los demás se quedan guardados en sus archivos, ocultos.
// ================================

export const PRODUCTS_BY_CATEGORY = Object.fromEntries(
  Object.entries(ALL_PRODUCTS_BY_CATEGORY)
    .map(([slug, items]) => [slug, items.filter((p) => PUBLISHED_IDS.has(String(p.id)))])
    .filter(([, items]) => items.length > 0)
);

export const CATEGORY_LABELS = Object.fromEntries(
  Object.entries(ALL_CATEGORY_LABELS).filter(([slug]) => slug in PRODUCTS_BY_CATEGORY)
);

export const CATALOGO_VACIO = Object.keys(PRODUCTS_BY_CATEGORY).length === 0;

// ================================
// EXPORT POR DEFECTO
// ================================
export default PRODUCTS_BY_CATEGORY;
