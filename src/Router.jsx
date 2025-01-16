import { Routes,Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { RegisterTask } from './pages/RegisterTask';
import { UpdateTask } from './pages/UpdateTask';

export const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/register_task' element={<RegisterTask/>}/>
            <Route path='/update_task/:id' element={<UpdateTask/>}/>
        </Routes>
    )
}