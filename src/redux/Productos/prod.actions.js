import {ADD_PROD, EDIT_PROD, REM_PROD, GET_PROD_CLOUD} from './prod.types';
import { useDispatch } from 'react-redux';

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

// export const getProdCloud = () => async dispatch => {

// }