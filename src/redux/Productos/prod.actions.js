import {ADD_PROD, EDIT_PROD, REM_PROD } from './prod.types';

export const addProd = (prod) => async dispatch => {
  try {
    await fetch ( "https://final-mcga-back.vercel.app/final_mcga/products", 
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
    .then(async function(respuesta) {
      if (respuesta.ok) {
        const dataNewProd = await respuesta.json()
        console.log(dataNewProd.data)
        dispatch({
          type: ADD_PROD,
          payload: prod
        })
      }
      else {
      console.log("fallo la subida")
      }
    })
  } catch (error) {
    console.log(error)
  }
};
  
export const editProd = (prod) => async dispatch => {
  try {
    await fetch ("https://final-mcga-back.vercel.app/final_mcga/products/" + prod.id, 
    {
    method: 
        "PUT",
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
        dispatch({
          type: EDIT_PROD,
          payload: prod
        }) 
      } else {
        console.log("fallo la edición")
      }
    })
  } catch (error) {
    console.log(error)
  }
};
  
export const remProd = (prod) => async dispatch => {
  try {
    await fetch ('https://final-mcga-back.vercel.app/final_mcga/products/' + prod.id,
    {
      method: "DELETE"
    })
    .then(function(respuesta) {
      console.log(respuesta)
      if (respuesta.ok) {
        dispatch({
            type: REM_PROD,
            payload: prod.id
          })
      } else {
        console.log("fallo al borrar")
      }
    })
  } catch (error) {
    console.log(error)
  }
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