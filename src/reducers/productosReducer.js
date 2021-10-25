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

//cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
    case OBTENER_PRODUCTOS:
    case EDITAR_PRODUCTO:
      return {
        ...state,
        loading: true,
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };
    case AGREGAR_PRODUCTO_ERROR:
    case OBTENER_PRODUCTOS_ERROR:
    case OBTENER_ELIMINAR_ERROR:
    case EDITAR_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
      };
    case OBTENER_ELIMINAR:
      return {
        ...state,
        productoEliminar: action.payload,
      };
    case OBTENER_ELIMINAR_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoEliminar
        ),
        productoEliminar: null,
      };
    case EDITAR:
      return {
        ...state,
        productoEditar: action.payload,
      };
    case EDITAR_EXITO:
      return {
        ...state,
        loading: false,
        productoEditar: null,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        ),
      };
    default:
      return state;
  }
}
