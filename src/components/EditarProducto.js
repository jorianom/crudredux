import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
//actions de redux
import { useDispatch, useSelector } from "react-redux";
import { editarProducto } from "../actions/productoActions";

const EditarProductos = () => {
  const [producto, setproducto] = useState({
    nombre: "",
    precio: 0,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const _producto = useSelector((state) => state.productos.productoEditar);

  useEffect(() => {
    setproducto(_producto);
  }, [_producto]);
  if (!_producto) {
    history.push("/");
    return null;
  }

  const { nombre, precio } = producto;
  const onChangeForm = (e) => {
    setproducto({ ...producto, [e.target.name]: [e.target.value] });
  };
  const editar = (e) => {
    e.preventDefault();
    dispatch(editarProducto(producto));
    setTimeout(history.push("/"), 3000)
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form action="" onSubmit={editar}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeForm}
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
                  onChange={onChangeForm}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProductos;
