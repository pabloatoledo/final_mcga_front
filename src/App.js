import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Productos from './Screens/Productos';
import FormAdd from './Screens/FormAdd';
import FormEdit from './Screens/FormEdit';
import { useDispatch } from "react-redux";
import { addProd } from "./redux/Productos/prod.actions";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/addproduct" element={<FormAdd />} />
      <Route path='/edit/:id' element={<FormEdit />} />
    </Routes>
  );
}

export default App;
