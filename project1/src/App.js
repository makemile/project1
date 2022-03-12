import "./sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCircleCheck,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <main>
      <form action="">
        <div className="input">
          <label htmlFor="">Usuario</label>
          <div className="input__user">
            <FontAwesomeIcon className="icon-first" icon={faUser} />
            <input type="text" placeholder="usuario" />
            <FontAwesomeIcon className="icon-check" icon={faCircleCheck} />
          </div>

          <p>lorem</p>
        </div>

        {/* <div>
        <label htmlFor="">Nombre</label>
        <div>
        <input type="text" placeholder="Nombre"/>
        </div>
          
          <p>lorem</p>
        </div>
        {/*---------*/}
        {/* <div>
        <label htmlFor="">Contraseña</label>
        <div>
        <input type="text" placeholder="Contraseña"/>
        </div>
         
          
          <p>lorem</p>
        </div>
        {/*-----------*/}
        {/* <div>
        <label htmlFor="">Repetir contraseña</label>
        <div>
        <input type="text" placeholder="contraseña"/>
        </div>

          <p>lorem</p>
        </div> */}
        {/*-----------*/}
        {/* <div>
        <label htmlFor="">correo electronico</label>
        <div>
        <input type="text" placeholder="email"/>
        </div>
          
          <p>lorem</p>
        </div> */}
        {/*----------*/}
        {/* <div>
        <label htmlFor="">telefono</label>
        <div>
        <input type="tel"  placeholder="número telefono"/>
        </div>
       
          <p>lorem</p>
        </div>  */}

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
        <div>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellene los campos obligatorios
          </p>
        </div>
        <div className="container-btn">
          <button className="container-btn__submit" type="submit">
            Enviar
          </button>
          <p>formulario enviado con exito</p>
        </div>
      </form>
    </main>
  );
}

export default App;
