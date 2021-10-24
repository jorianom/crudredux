import React from "react";

const Productos = () => {
  return (
    <>
      <h2 className="text-center my-5">
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
        </table>
      </h2>
    </>
  );
};

export default Productos;
