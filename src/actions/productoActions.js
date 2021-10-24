import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";
import clienteAxios from "../config/axios";

export function crearProducto(producto) {
  return async (dispatch) => {
    dispatch({ type: AGREGAR_PRODUCTO });
    try {
      await clienteAxios.post("/productos", producto);
      //todo bien => se cambia el state
      dispatch({ type: AGREGAR_PRODUCTO_EXITO, payload: producto });
    } catch (error) {
      console.log(error);
      dispatch({ type: AGREGAR_PRODUCTO_ERROR, payload: true });
    }
  };
}
