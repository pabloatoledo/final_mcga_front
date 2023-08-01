import { useNavigate } from 'react-router-dom';
import {ADD_PROD, EDIT_PROD, REM_PROD } from './prod.types';
import {useState} from 'react'

export const addProd = (prod) => dispatch => {

  try {
    fetch ( "https://final-mcga-back.vercel.app/final_mcga/products", 
    {
    method: 
        "POST",
    headers: 
        {"Content-Type": "application/json"},
    body: 
        JSON.stringify({
            id: prod.id,
            name: prod.name,
            price: prod.price,
            stock: prod.stock,
            description: prod.description})
    })
    .then(function(respuesta) {
      console.log(respuesta)
      if (respuesta.ok) {
        return {
          type: ADD_PROD,
          payload: prod
        };
      } else {
        console.log("fallo la subida")
      }
    })
    } catch (error) {
      console.log(error)
    }
};
  
export const editProd = (prod) => {
    return {
      type: EDIT_PROD,
      payload: prod
    };
};
  
export const remProd = (id) => {
    return {
      type: REM_PROD,
      payload: id
    };
};

export const getProdCloud = () => async dispatch => {
  let respOk = false

  try {
    await fetch('https://final-mcga-back.vercel.app/final_mcga/products/all')
    .then(function(respuesta) {
      if (respuesta.ok) {
        respOk = true
      }
      return respuesta.json()
    })
    .then((data) => {
      if (respOk) {
        const prodCloud = data.data
        console.log(prodCloud)

        if (prodCloud.length > 0) {
          prodCloud.map((producto) => {
            dispatch({
              type: ADD_PROD,
              payload: producto
            })
          })
        }
      } else {
        console.log("fallo la conexion")
      }
    })
  }
  catch (error) {
    console.log(error)
  }
}