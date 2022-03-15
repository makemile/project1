import "./sass/main.scss";
import React, { useState } from "react";
import Input from "./components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  // faCircleCheck,
  faExclamationTriangle,
  // faCircleXmark,
  faLock,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [user, updateUser] = useState({ empty: "", validate: null });
  const [name, updateName] = useState({ empty: "", validate: null });
  const [password, updatePassword] = useState({ empty: "", validate: null });
  const [password2, updatePassword2] = useState({ empty: "", validate: null });
  const [email, updateemail] = useState({ empty: "", validate: null });
  const [phone, updatePhone] = useState({ empty: "", validate: null });
  const [termns, updateTermns] = useState(false);
  const [formValidate, updateFormValidate] = useState(null);

  const expresiones = {
    users: /^[a-zA-Z0-9._-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    names: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    passwords: /^.{4,12}$/, // 4 a 12 digitos.
    emails: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phones: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const validatePassword2 = () => {
    if (password.empty.length > 0) {
      if (password.empty !== password2.empty) {
        updatePassword2((prevState) => {
          return { ...prevState, validate: "false" };
        });
      } else {
        updatePassword2((prevState) => {
          return { ...prevState, validate: "true" };
        });
      }
    }
  };

  const onchangeTermns = (event) => {
    updateTermns(event.target.checked);
  };

  const onSubmit = (event) => {
    console.log(event.preventDefault());

    if (
      user.validate === "true" &&
      name.validate === "true" &&
      password.validate === "true" &&
      password2.validate === "true" &&
      email.validate === "true" &&
      phone.validate === "true" &&
      termns
    ) {
      updateFormValidate(true);
      updateUser({ empty: "", validate: null });
      updateName({ empty: "", validate: null });
      updatePassword({ empty: "", validate: null });
      updatePassword2({ empty: "", validate: null });
      updateemail({ empty: "", validate: null });
      updatePhone({ empty: "", validate: null });
    } else {
      updateFormValidate(false);
    }
  };

  return (
    <main>
      <form action="" onSubmit={onSubmit}>
        <div className="form-container">
          <Input
            state={user}
            updateState={updateUser}
            iconUser={faUser}
            type="text"
            label="Usuario"
            placeholder="Carla123"
            name="usuario"
            error="no menor de 4 caracteres y no mayor a 14 caracteres,
          solo puede contener, numeros, letras y guion bajo"
            succes="campo correcto"
            // iconCheck={faCircleCheck}
            // iconMark={faCircleXmark}
            regexInput={expresiones.users}
          />

          <Input
            state={name}
            updateState={updateName}
            iconUser={faUser}
            type="name"
            label="Name"
            placeholder="Carla"
            name="usuario"
            error="El nombre solo puede contener letras y espacios"
            regexInput={expresiones.names}
            // iconCheck={faCircleCheck}
            // iconMark={faCircleXmark}
          />

          <Input
            state={password}
            updateState={updatePassword}
            iconLock={faLock}
            type="password"
            label="Contraseña"
            name="password1"
            error="La contraseña debe ser de 4 a 12 digitos"
            regexInput={expresiones.passwords}
            // iconCheck={faCircleCheck}
            // iconMark={faCircleXmark}
          />

          <Input
            state={password2}
            updateState={updatePassword2}
            iconLock={faLock}
            type="password"
            label="Repetir Contraseña"
            name="password2"
            error="ambas contraseñas deben ser iguales"
            validatePassW={validatePassword2}
            // iconCheck={faCircleCheck}
            // iconMark={faCircleXmark}
          />

          <Input
            state={email}
            updateState={updateemail}
            iconEmail={faAt}
            type="email"
            label="email"
            placeholder="carla@email.com"
            name="email"
            error="el correo solo puede contener, letras, numeros y puntos"
            regexInput={expresiones.emails}
            // iconCheck={faCircleCheck}
            // iconMark={faCircleXmark}
          />

          <Input
            state={phone}
            updateState={updatePhone}
            iconPhone={faPhone}
            type="text"
            label="Phone"
            placeholder="4826645"
            name="phone"
            error="sólo puede contener números  maximo de 14 digitos menor 7 digitos "
            regexInput={expresiones.phones}
            // iconCheck={faCircleCheck}
            // iconMark={faCircleXmark}
          />

          <div className="terminos">
            <label className="terminos__label">
              <input
                className="terminos__input"
                type="checkbox"
                name="terminos"
                id="terminos"
                checked={termns}
                onChange={onchangeTermns}
              ></input>
              Acepto los terminos y condiciones
            </label>
          </div>
          {formValidate === false && (
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
            {formValidate === true && (
              <p className="container-btn__msmexito">
                formulario enviado con exito
              </p>
            )}
          </div>
        </div>
      </form>
    </main>
  );
}

export default App;
