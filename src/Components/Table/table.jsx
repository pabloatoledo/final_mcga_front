import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Boton from "../SharedComponents/Boton";
import styles from './Table.module.css';
import { removeProd } from '../../redux/Productos/prod.actions';

const Tabla = () => {
  const products = useSelector((state) => state.Reduc.products);
  const dispatch = useDispatch();
  return (
    <div>
      
    {products.length > 0 ? (
      <div>
          {products.map((product) => (
            <table className={styles.Table} key={product.id}>
                
                <tbody>
                    <tr>
                        <td className={styles.tdDatos}>{product.id}</td>
                        <td className={styles.tdDatos}>{product.name}</td>
                        <td className={styles.tdDatos}>{product.price}</td>
                        <td className={styles.tdDatos}>{product.stock}</td>
                        <td className={styles.tdDatos}>{product.description}</td>
                        <td className={styles.tdBotones}>
                          <Link to={`/edit/${product.id}`}>
                          <Boton
                                tipo='editProd'
                                texto='Editar' />
                          </Link>
                          <button className={styles.elimProd} onClick={() => dispatch(removeProd(product.id))}> Eliminar </button>
                        </td>
                    </tr>
                </tbody>
            </table>
          ))}
        </div>
      ) : (
        <h4>No hay productos cargados</h4>
      )}
    </div>
  );
};
export default Tabla;
