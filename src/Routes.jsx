import { Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Productos from './Screens/Productos';
import FormAdd from './Screens/FormAdd';
import FormEdit from './Screens/FormEdit';
import Login from "./Screens/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseAapp from "./Firebase/credenciales";
import { useState } from "react";

const auth = getAuth(firebaseAapp)

const RoutesAPP = () => {
    const [userLogin, setUserLogin] = useState(false)
    onAuthStateChanged(auth, (userFirebase) => {
        if(userFirebase) {
            setUserLogin(true)
        } else {
            setUserLogin(false)
        }
    })

    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path='/login' element={<Login />} />
        {userLogin ? 
        <>
            <Route path="/addproduct" element={<FormAdd />} />
            <Route path='/edit/:id' element={<FormEdit />} />
        </> : <></>}
    </Routes>
    )
}

export default RoutesAPP;