import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

//actions de redux
import { useDispatch } from "react-redux";
import {
  eliminarProducto,
  obtenerProductoEditar,
} from "../actions/productoActions";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();
  const history = useHistory();

  const eliminar = (_id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(eliminarProducto(_id));
      }
    });
  };

  const editar = (_producto) => {
    dispatch(obtenerProductoEditar(_producto));
    history.push(`/productos/editar/${_producto.id}`);
  };
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">{precio}</span>
      </td>
      <td className="acciones">
        <button
          to={`/productos/editar/${id}`}
          className="btn btn-primary mr-2"
          onClick={() => editar(producto)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => eliminar(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
