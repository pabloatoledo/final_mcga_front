import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProd } from "../../redux/Productos/prod.actions";
import ProdInput from "../SharedComponents/Input";
import Boton from "../SharedComponents/Boton";
import styles from './Form.module.css';

const Formulario = () => {
    const [datos, setItem] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const addItem = (item) => {
        setItem({id: item.id, name: item.name, price: item.price})
    }

    const {register, formState: {errors}, handleSubmit} = useForm()
    const product = (data) => {
        addItem(data)
        console.log(data)
        dispatch(addProd(data));
        navigate('/productos')
    }

    return (
    <div className={styles.frmProd}>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(product)}>
            <div>
                <label>Id</label>
                <ProdInput
                    register={register}
                    type="text"
                    placeholder="id"
                    name="id"
                    rules={{
                        //required: 'ingrese número de ID'
                    }}
                />
                {errors.id && <span className={styles.claseError}>{errors.id.message}</span>}
            </div>
            <div>
                <label>Nombre:</label>
                <ProdInput
                    register={register}
                    type="text"
                    placeholder="nombre"
                    name="name"
                    rules={{
                        required: 'ingrese nombre'
                    }}
                />
                {errors.name && <span className={styles.claseError}>{errors.name.message}</span>}
            </div>
            <div>
                <label>Precio:</label>
                <ProdInput
                    register={register}
                    type="text"
                    placeholder="precio"
                    name="price"
                    rules={{
                        required: 'ingrese precio'
                    }}
                />
                {errors.price && <span className={styles.claseError}>{errors.price.message}</span>}
            </div>
            <div>
                <label>Stock:</label>
                <ProdInput
                    register={register}
                    type="text"
                    placeholder="stock"
                    name="stock"
                    rules={{
                        required: 'ingrese cantidad en Stock'
                    }}
                />
                {errors.stock && <span className={styles.claseError}>{errors.stock.message}</span>}
            </div>
            <div>
                <label>Descripcion:</label>
                <ProdInput
                    register={register}
                    type="text"
                    placeholder="descripcion"
                    name="description"
                    rules={{
                        required: 'ingrese descripción'
                    }}
                />
                {errors.description && <span className={styles.claseError}>{errors.description.message}</span>}
            </div>
            <Boton 
                tipo='prodABM'
                texto='Enviar' />
        </form>
    </div>
    )
}

export default Formulario;