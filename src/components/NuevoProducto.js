import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions de redux
import { crearProducto } from "../actions/productoActions";

const NuevoProductos = () => {
  //state del componente
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  //se crea dispatch para llamar actions
  const dispatch = useDispatch();

  const agregar = (producto) => {
    //se llama al action de productoActions
    dispatch(crearProducto(producto));
  };

  const crearProductoSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }
    agregar({ nombre, precio });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Producto
            </h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProductos;
