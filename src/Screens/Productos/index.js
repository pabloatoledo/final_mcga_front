import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderSection from '../../Components/Header/Header';
import FooterSection from '../../Components/Footer/Footer';
import Boton from "../../Components/SharedComponents/Boton";
import styles from './Index.module.css'
import Tabla from '../../Components/Table/table'
import TablaCabecera from '../../Components/Table/tableHead'

import firebaseAapp from "../../Firebase/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth"

const auth = getAuth(firebaseAapp)

const Productos = () => {

    const [userLogin, setUserLogin] = useState(false)

    onAuthStateChanged(auth, (userFirebase) => {
        if(userFirebase) {
            setUserLogin(userFirebase)
        } else {
            setUserLogin(null)
        }
    })

    console.log("El usuario es: ",userLogin)
    return (
        <div> 
        <HeaderSection />
        {userLogin ? 
        <>
            <div className={styles.botProd}>
                <Link to="/addproduct">
                    <Boton 
                        tipo='prodABM'
                        texto='Agregar producto' />
                </Link>
            </div>
            <TablaCabecera />
            <Tabla />
        </> : 
        <>
            <p>Debe iniciar sesión para ingresar a este menú</p>
            <Link to="/login">
                <Boton 
                    tipo='editProd'
                    texto='Iniciar sesión' />
            </Link>
        </>
        }
        <FooterSection />
        </div>    
    );
}

export default Productos;
