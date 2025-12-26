// ================================
// IMPORTS POR CADA CATEGORÍA
// ================================

import { accesoriosYMiscelaneosProducts } from "./accesoriosYMiscelaneos";
import { emergenciaYSoporteVitalProducts } from "./emergenciaYSoporteVital";
import { esterilizacionYCadenaDeFrioProducts } from "./esterilizacionYCadenaDeFrio";
import { gestanteYNeonatosProducts } from "./gestanteYNeonatos";
import { laboratorioYReactivosProducts } from "./laboratorioYReactivos";
import { materialDescartableMedicoProducts } from "./materialDescartableMedico";
import { mobiliarioYComfortProducts } from "./mobiliarioYComfort";
import { oftalmologiaYOptometriaProducts } from "./oftalmologiaYOptometria";
import { proteccionRadiologicaProducts } from "./proteccionRadiologica";
import { rehabilitacionYFisioterapiaProducts } from "./rehabilitacionYFisioterapia";
import { equipamientoYLaboratorioYReactivosProducts } from "./equipamientoYLaboratorioYReactivos";
import { modelosAnatomicosYSimuladoresProducts } from "./modelosAnatomicosYSimuladores";
import { soporteRespiratorioProducts } from "./soporteRespiratorio";
import { diagnosticoYMedicionProducts } from "./diagnosticoYMedicion";
import { instrumentalYEquiposQuirurgicosProducts } from "./instrumentalYEquiposQuirurgicos";









// ================================
// LABELS BONITOS PARA UI
// ================================

export const CATEGORY_LABELS = {
  "proteccion-radiologica": "Protección radiológica",
  "oftalmologia-y-optometria": "Oftalmología y optometría",
  "emergencia-y-soporte-vital": "Emergencia y soporte vital",
  "esterilizacion-y-cadena-de-frio": "Esterilización y cadena de frío",
  "cuidado-de-gestante-y-neonatos": "Cuidado de gestante y neonatos",
  "laboratorio-y-reactivos": "Laboratorio y reactivos",
  "material-descartable-medico": "Material descartable médico",
  "mobiliario-y-comfort": "Mobiliario y comfort",
  "accesorios-y-miscelaneos": "Accesorios y misceláneos",
  "rehabilitacion-y-fisioterapia": "Rehabilitación y fisioterapia",
  "modelos-anatomicos-y-simuladores-de-entrenamiento":   "Modelos anatómicos y simuladores",
  "soporte-respiratorio": "Soporte respiratorio",
  "diagnostico-y-medicion": "Diagnóstico y medición",
  "instrumental-y-equipos-quirurgicos": "Instrumental y equipos quirúrgicos",





};


// ================================
// MAPEO SLUG → LISTA DE PRODUCTOS
// ================================

export const PRODUCTS_BY_CATEGORY = {
  "proteccion-radiologica": proteccionRadiologicaProducts,
  "oftalmologia-y-optometria": oftalmologiaYOptometriaProducts,
  "emergencia-y-soporte-vital": emergenciaYSoporteVitalProducts,
  "esterilizacion-y-cadena-de-frio": esterilizacionYCadenaDeFrioProducts,
  "cuidado-de-gestante-y-neonatos": gestanteYNeonatosProducts,
  "laboratorio-y-reactivos": [
  ...laboratorioYReactivosProducts,
  ...equipamientoYLaboratorioYReactivosProducts,
],
  "material-descartable-medico": materialDescartableMedicoProducts,
  "mobiliario-y-comfort": mobiliarioYComfortProducts,
  "accesorios-y-miscelaneos": accesoriosYMiscelaneosProducts,
  "rehabilitacion-y-fisioterapia": rehabilitacionYFisioterapiaProducts,
    "modelos-anatomicos-y-simuladores-de-entrenamiento": modelosAnatomicosYSimuladoresProducts,
  "soporte-respiratorio": soporteRespiratorioProducts,
  "diagnostico-y-medicion": diagnosticoYMedicionProducts,
  "instrumental-y-equipos-quirurgicos": instrumentalYEquiposQuirurgicosProducts,






};


// ================================
// EXPORT POR DEFECTO
// ================================
export default PRODUCTS_BY_CATEGORY;
