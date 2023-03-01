import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import HeaderSection from '../../Components/Header/Header';
import FooterSection from '../../Components/Footer/Footer';
import Boton from "../../Components/SharedComponents/Boton";
import styles from './Index.module.css'
import Tabla from '../../Components/Table/table'
import TablaCabecera from '../../Components/Table/tableHead'

const Productos = () => {
    const products = useSelector((state) => state.Reduc.products);
    const dispatch = useDispatch();
    return (
        <div> 
        <HeaderSection />
        <div className={styles.botProd}>
            <Link to="/addproduct">
                <Boton 
                    tipo='prodABM'
                    texto='Agregar producto' />
            </Link>
        </div>
        <TablaCabecera />
        <Tabla />
        <FooterSection />
        </div>    
    );
}

export default Productos;
