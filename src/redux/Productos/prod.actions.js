import {ADD_PROD, EDIT_PROD, REM_PROD, GET_PROD_CLOUD_SUCCESS, GET_PROD_CLOUD_FAIL} from './prod.types';


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
  
  try {
    const resp = await fetch('https://final-mcga-back.vercel.app/exam_01_mcga/products/all')
    console.log(resp)
    if (resp.ok) {
      dispatch({
        type: GET_PROD_CLOUD_SUCCESS,
        payload: resp
      })
    } else {
      dispatch({
        type: GET_PROD_CLOUD_FAIL,
      })
    }
  }
  catch (error) {
    dispatch({
      type: GET_PROD_CLOUD_FAIL,
    })
  }

}