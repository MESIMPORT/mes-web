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
import { equipamientoYLaboratorioYReactivosProducts } from "./equipamientoYLaboratorioYReactivos";
import { dermoesteticaYCuidadoPersonalProducts } from "./dermoesteticaYCuidadoPersonal";
import { odontologiaProducts } from "./odontologia";

// ================================
// LABELS BONITOS PARA UI
// ================================

export const CATEGORY_LABELS = {
  "diagnostico-y-medicion": "Diagnóstico y medición",
  "accesorios-y-miscelaneos": "Accesorios y misceláneos",
  "dermoestetica-y-cuidado-personal": "Dermoestética y cuidado personal",
  "esterilizacion-y-cadena-de-frio": "Esterilización y cadena de frío",
  "modelos-anatomicos-y-simuladores": "Modelos anatómicos y simuladores",
  "emergencia-y-soporte-vital": "Emergencia y soporte vital",
  "soporte-respiratorio": "Soporte respiratorio",
  "rehabilitacion-y-fisioterapia": "Rehabilitación y fisioterapia",
  "gestante-y-neonatos": "Gestante y neonatos",
  "instrumental-y-equipos-quirurgicos": "Instrumental y equipos quirúrgicos",
  "material-descartable-medico": "Material descartable médico",
  "equipamiento-y-laboratorio-y-reactivos": "Equipamiento, laboratorio y reactivos",
  "mobiliario-y-comfort": "Mobiliario y comfort",
  "oftalmologia-y-optometria": "Oftalmología y optometría",
  "proteccion-radiologica": "Protección radiológica",
  "odontologia": "Odontología",
};

// ================================
// MAPEO SLUG → LISTA DE PRODUCTOS
// ================================

export const PRODUCTS_BY_CATEGORY = {
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
  "equipamiento-y-laboratorio-y-reactivos": equipamientoYLaboratorioYReactivosProducts,
  "dermoestetica-y-cuidado-personal": dermoesteticaYCuidadoPersonalProducts,
  "odontologia": odontologiaProducts,

};

// ================================
// EXPORT POR DEFECTO
// ================================
export default PRODUCTS_BY_CATEGORY;
