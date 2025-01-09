import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";

import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
 
  return (
   <BrowserRouter>
    <GlobalStyle/>
    <Router/>
   </BrowserRouter>
  )
}

export default App
