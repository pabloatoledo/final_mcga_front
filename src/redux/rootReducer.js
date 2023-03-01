import { combineReducers } from "redux";
import reducer from './Productos/prod.reducer';

const rootReducer = combineReducers({
    Reduc: reducer,
});

export default rootReducer;
