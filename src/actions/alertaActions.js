import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

export function mostrarAlerta(alerta) {
  return (dispatch) => {
    dispatch({ type: MOSTRAR_ALERTA, payload: alerta });
  };
}
export function ocultarAlerta() {
  return (dispatch) => {
    dispatch({ type: OCULTAR_ALERTA });
  };
}
