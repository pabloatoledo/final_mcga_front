import { ADD_PROD, EDIT_PROD, REM_PROD, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from './prod.types';

const INITIAL_STATE = {
    products: [],
    loading: false,
    productAdded: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PROD:
            return {
                products: [...state.products, action.payload]
            };

        case EDIT_PROD:
            const updProdDetail = action.payload;
            const updProd = state.products.map((product) => {
            if (product.id === updProdDetail.id) {
                return updProdDetail;
            } else {
                return product;
            }
            });
            return { products: updProd };

        case REM_PROD:
            return {
                products: state.products.filter((product) => {
                  return product.id !== action.payload;
                })
            };
        
        case ADD_PRODUCT_REQUEST:
            return {
                loading: true,
                productAdded: false,
            };

        case ADD_PRODUCT_SUCCESS:
            return {
                loading: false,
                productAdded: true,
            };

        default: return state;
    }
};

export default reducer;  