import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Boton from "../../Components/SharedComponents/Boton";
import { editProd } from '../../redux/Productos/prod.actions';

const EditProd = () => {
  
  const [selectedProd, setSelectedProd] = useState({});
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Reduc.products);
  const currentId = useParams();

  const navigate = useNavigate();
  const onSubmitHandler = () => {
    dispatch(editProd(selectedProd));
    navigate("/productos");
  };

  useEffect(() => {
    const prodDetail = products.filter(prod => prod.id === currentId.id);
    setSelectedProd(prodDetail[0]);
  }, [currentId]);

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
        <label>Nombre:</label>
        <input
          type="text"
          onChange = {(e) => setSelectedProd({...selectedProd, name: e.target.value})}
          value={selectedProd.name}
          name="name"
          placeholder="Enter Name"
        />
        <label>Precio:</label>
        <input
          type="text"
          onChange = {(e) => setSelectedProd({...selectedProd, price: e.target.value})}
          value={selectedProd.price}
          name="price"
          placeholder="Ingrese el precio"
        />
        <label>Stock:</label>
        <input
          type="text"
          onChange = {(e) => setSelectedProd({...selectedProd, stock: e.target.value})}
          value={selectedProd.stock}
          name="stock"
          placeholder="Ingrese el stock"
        />
        <label>Descripcion:</label>
        <input
          type="text"
          onChange = {(e) => setSelectedProd({...selectedProd, description: e.target.value})}
          value={selectedProd.description}
          name="description"
          placeholder="Ingrese la descripcion"
        />
        <Boton 
          tipo='prodABM'
          texto='Guardar' />
    </form>
    </div>
  );
};

export default EditProd;