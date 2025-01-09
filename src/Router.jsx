import { Routes,Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Register } from './pages/Register';


export const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    )
}