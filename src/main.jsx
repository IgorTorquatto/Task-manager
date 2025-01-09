import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Estilos do MDB
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ícones FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap (se necessário)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
