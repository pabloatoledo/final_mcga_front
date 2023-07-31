import {ADD_PROD, EDIT_PROD, REM_PROD, GET_PROD_CLOUD_SUCCESS, GET_PROD_CLOUD_FAIL} from './prod.types';
import {useState} from 'react'

//const dispatch = useDispatch()

export const addProd = (prod) => {
    return {
      type: ADD_PROD,
      payload: prod
    };
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
  // const config = {
  //   headers: {
  //     'Accept': 'application/json'
  //   }
  // }

  const [getDataCloud, setGetDataCloud] = useState(false)

  try {
    await fetch('https://final-mcga-back.vercel.app/exam_01_mcga/products/all')
    .then(function(respuesta) {
      if (respuesta.ok) {
        setGetDataCloud(true)
      }
      return respuesta.json()
    })
    .then((data) => {
      if (getDataCloud) {
        const prodCloud = data.data
        console.log("entro ok")
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
        dispatch({
          type: GET_PROD_CLOUD_FAIL,
        })
      }
    })
    
  }
  catch (error) {
    dispatch({
      type: GET_PROD_CLOUD_FAIL,
    })
  }

}