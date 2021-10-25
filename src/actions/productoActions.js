import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PRODUCTOS_ERROR,
  OBTENER_ELIMINAR,
  OBTENER_ELIMINAR_EXITO,
  OBTENER_ELIMINAR_ERROR,
  EDITAR,
  EDITAR_PRODUCTO,
  EDITAR_EXITO,
  EDITAR_ERROR,
} from "../types";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

export function crearProducto(producto) {
  return async (dispatch) => {
    dispatch({ type: AGREGAR_PRODUCTO });
    try {
      await clienteAxios.post("/productos", producto);
      //todo bien => se cambia el state
      dispatch({ type: AGREGAR_PRODUCTO_EXITO, payload: producto });
      Swal.fire("Exito", "El producto se agrego correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch({ type: AGREGAR_PRODUCTO_ERROR });
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta nuevamente",
      });
    }
  };
}

export function obtenerProductos() {
  return async (dispatch) => {
    dispatch({ type: OBTENER_PRODUCTOS });
    try {
      const res = await clienteAxios.get("/productos");
      dispatch({ type: OBTENER_PRODUCTOS_EXITO, payload: res.data });
    } catch (error) {
      dispatch({ type: OBTENER_PRODUCTOS_ERROR });
    }
  };
}

export function eliminarProducto(id) {
  return async (dispatch) => {
    dispatch({ type: OBTENER_ELIMINAR, payload: id });
    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch({ type: OBTENER_ELIMINAR_EXITO });
      Swal.fire("Eliminado!", "El producto fue eliminado.", "success");
    } catch (error) {
      console.log(error);
      dispatch({ type: OBTENER_ELIMINAR_ERROR });
    }
  };
}

export function obtenerProductoEditar(producto) {
  return (dispatch) => {
    dispatch({ type: EDITAR, payload: producto });
  };
}

export function editarProducto(producto) {
  return (dispatch) => {
    dispatch({ type: EDITAR_PRODUCTO });
    try {
      clienteAxios.put(`/productos/${producto.id}`, producto);
      dispatch({ type: EDITAR_EXITO, payload: producto });
    } catch (error) {
      console.log(error);
      dispatch({ type: EDITAR_ERROR });
    }
  };
}
