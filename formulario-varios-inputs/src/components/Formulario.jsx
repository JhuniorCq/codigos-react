import { useState } from "react";

const Formulario = () => {

  const [form, setForm] = useState({
    nameUser: null,
    emailUser: null,
    passwordUser: null
  });

  const manejarCambioInput = ({target}) => {
    const {name, value} = target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const enviarFormulario = (event) => {
    event.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={enviarFormulario}>
      <div>
        <label htmlFor="nameUser">Nombre de Usuario</label>
        <input
          type="text"
          name="nameUser"
          id="nameUser"
          placeholder="Ingrese su nombre de usuario"
          onChange={manejarCambioInput}
        />
      </div>
      <div>
        <label htmlFor="emailUser">Correo Electrónico</label>
        <input
          type="email"
          name="emailUser"
          id="emailUser"
          placeholder="Ingrese su correo electrónico"
          onChange={manejarCambioInput}
        />
      </div>
      <div>
        <label htmlFor="passwordUser">Contraseña</label>
        <input
          type="password"
          name="passwordUser"
          id="passwordUser"
          placeholder="Ingrese su contraseña"
          onChange={manejarCambioInput}
        />
      </div>

      <button>Enviar Formulario</button>
    </form>
  );
};

export default Formulario;
