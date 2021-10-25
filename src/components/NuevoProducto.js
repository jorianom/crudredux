import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions de redux
import { crearProducto } from "../actions/productoActions";
import { mostrarAlerta, ocultarAlerta } from "../actions/alertaActions";

const NuevoProductos = ({ history }) => {
  //state del componente
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  //se crea dispatch para llamar actions
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const _alerta = useSelector((state) => state.alerta.alerta);

  const agregar = (producto) => {
    //se llama al action de productoActions
    dispatch(crearProducto(producto));
  };

  const crearProductoSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || precio <= 0) {
      const alerta = {
        msg: "Ambos campos son obligatorios",
        styles: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(mostrarAlerta(alerta));
      return;
    }
    dispatch(ocultarAlerta());
    agregar({ nombre, precio });
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Producto
            </h2>
            {_alerta ? <p className={_alerta.styles}>{_alerta.msg}</p> : null}
            <form action="" onSubmit={crearProductoSubmit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => setPrecio(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            {loading ? <p>Cargando...</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProductos;
