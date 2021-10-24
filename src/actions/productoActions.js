import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PRODUCTOS_ERROR,
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
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta nuevamente",
      });
    }
  };
}
