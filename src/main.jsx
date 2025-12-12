import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // ⬅️ añade esto
import './index.css'
// Opción A: si estás usando el archivo que te pasé (MESStoreMockup.jsx)
import MESStoreMockup from './MESStoreMockup.jsx'

// Opcional B: si prefieres mantener App.jsx como raíz, entonces
// importa App en vez de MESStoreMockup y asegúrate de que App renderiza las <Routes />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MESStoreMockup />  {/* o <App /> si tu rutas están en App.jsx */}
    </BrowserRouter>
  </StrictMode>,
)
