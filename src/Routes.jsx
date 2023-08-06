import { Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Productos from './Screens/Productos';
import FormAdd from './Screens/FormAdd';
import FormEdit from './Screens/FormEdit';
import Login from "./Screens/Login";


const RoutesAPP = () => {
    return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/addproduct" element={<FormAdd />} />
      <Route path='/edit/:id' element={<FormEdit />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    )
}

export default RoutesAPP;