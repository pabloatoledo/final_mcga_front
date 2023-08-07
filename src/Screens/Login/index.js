import React, { useState } from "react";
import firebaseAapp from "../../Firebase/credenciales";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const auth = getAuth(firebaseAapp)

const Login = () => {

    const [noUserReg, setNoUserReg] = useState(false)
    const navigate = useNavigate()

    const regNuevoUsuario = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((usuReg) => {
            navigate('/')
        })
        .catch((error) => {
            console.log("Hubo un error")
            console.log(error)
        })
    }

    const inciarSesion = async (email, password) => {
        try {
            console.log("abre el modal de inicio de sesion");
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();
            Cookies.set('firebaseToken', token, { expires: 1 / 24 });     
            console.log("cierra el modal de inicio de sesion");
        } catch (error) {
            console.log("modal pidiendo revisar el login");
        }
    }

    const cerrarSesion = async (e) => {
        console.log("abre modal indicando que cierra sesion")
        await signOut(auth)
        .then((resp) => {
            console.log("cierra el modal de cierre de sesion")
            navigate('/')
        })
    }

    const sumbitHandler = (e) => {
        e.preventDefault()
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        
        if (noUserReg) {
            regNuevoUsuario(email, password)
        } else {
            inciarSesion(email, password)
        }
    }

    return(
        <div>
        <Header />
            <h1>Gestión del perfil</h1>
            {console.log(auth)}
            {auth.currentUser == null ? 
            <>
                {noUserReg ? <><h2>Ingresa los datos para registrarte</h2></>:<><h2>Inicia sesión</h2></>}
                <form onSubmit={sumbitHandler}>
                    <div>
                        <label>Email</label>
                        <input type="email" id="email"></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" id="password"></input>
                    </div>
                    <input
                        type="submit"
                        value={noUserReg ? "Registrar" : "Iniciar sesión"}>
                    </input>
                </form>
                <div>
                <button onClick={() => setNoUserReg(!noUserReg)}>{noUserReg ? "Ya tengo una cuenta" : "Quiero registrarme"}</button>
                </div>
            </>:<>
                <button onClick={() => cerrarSesion()}>Cerrar sesión</button>            
            </>}
            <Footer />
        </div>
    )
}

export default Login;
