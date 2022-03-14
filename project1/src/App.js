import "./sass/main.scss";
import React, { useState } from "react";
import Inputs from "./components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCircleCheck,
  faExclamationTriangle,
  faCircleXmark,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [user, updateUser] = useState({ empty: "", validate: null });
  // const [name, setStateName] = useState({empty:'' , validate:null});
  // const [password, setStatePassword] = useState({empty:'' , validate:null});
  // const [password2, setStatePassword2] = useState({empty:'' , validate:null});
  // const [email, setStateemail] = useState({empty:'' , validate:null});
  // const [phone, setStatePhone] = useState({empty:'' , validate:null});

  const expresiones = {
    users: /^[a-zA-Z0-9.-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    names: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    passwords: /^.{4,12}$/, // 4 a 12 digitos.
    emails: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phones: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  return (
    <main>
      <form className="form" action="">
        <Inputs
          state={user}
          updateState={updateUser}
          icon={faUser}
          type="text"
          label="Usuario"
          placeholder="Carla123"
          name="usuario"
          error="Nombre del usuario no mennor de 4 caracteres y no mayor a 14 caracteres, solo puede contener, numeros, letras y guion bajo"
          succes="campo correcto"
          iconCheck={faCircleCheck}
          iconMark={faCircleXmark}
          regexInput={expresiones.users}
        />
        {/* 
        <Inputs
          icon={faLock}
          type="number"
          label="Contraseña"
          placeholder="******"
          name="contraseña"
          error=""
          regex={faCircleCheck}
        /> */}

        <div className="terminos">
          <label className="terminos__label">
            <input
              className="terminos__input"
              type="checkbox"
              name="terminos"
              id="terminos"
            ></input>
            Acepto los terminos y condiciones
          </label>
        </div>
        {false && (
          <div className="container-error">
            <p className="container-error__error">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellene los campos obligatorios
            </p>
          </div>
        )}
        <div className="container-btn">
          <button className="container-btn__submit" type="submit">
            Enviar
          </button>
          <p className="container-btn__msmexito">
            formulario enviado con exito
          </p>
        </div>
      </form>
    </main>
  );
}

export default App;
