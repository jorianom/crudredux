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
  }, []);

  const productos = useSelector((state) => state.productos.productos);

  return (
    <>
      <h2 className="text-center my-5">Listado de productos</h2>
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
