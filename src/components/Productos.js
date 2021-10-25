import React, { useEffect } from "react";
import Producto from "./Producto";
import { useDispatch, useSelector } from "react-redux";
//actions de redux
import { obtenerProductos } from "../actions/productoActions";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const obtener = () => dispatch(obtenerProductos());
    obtener();
    // eslint-disable-next-line
  }, []);

  const productos = useSelector((state) => state.productos.productos);
  const loading = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  return (
    <>
      <h2 className="text-center my-5">Listado de productos</h2>
      {loading ? <p>Cargando ...</p> : null}
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? "No hay productos"
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Productos;
