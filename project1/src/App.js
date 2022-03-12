import "./sass/main.scss";
import Inputs from "./components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
    faCircleCheck,
  faExclamationTriangle,
  faLock
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <main>
      <form action="">
      
        <Inputs
        icon = {faUser}
        type = "text"
        label="Usuario"
        placeholder="Carla123"
        name="usuario"
        error = "Nombre del usuario no mennor de 4 caracteres y no mayor a 14 caracteres, solo puede contener, numeros, letras y guion bajo"
        regex = {faCircleCheck}
        />

        <Inputs 
        icon = {faLock}
        type = "number"
        label = "Contraseña"
        placeholder = "******"
        name="contraseña"
        error = ""
        regex={faCircleCheck}
        />
        


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
       { false && <div className="container-error">
          <p className="container-error__error">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellene los campos obligatorios
          </p>
        </div>}
        <div className="container-btn">
          <button className="container-btn__submit" type="submit">
            Enviar
          </button>
          <p className="container-btn__msmexito">formulario enviado con exito</p>
        </div>
      </form>
    </main>
  );

  
}

export default App;
