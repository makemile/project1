import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Inputs =  (props) => {
    const{label,placeholder, type, name, error, regex, icon} = props;

    return (
        <div className="input">
          <label htmlFor={name}>{label}</label>
          <div className="input__user">
            <FontAwesomeIcon className="icon-first" icon={icon} />
            <input type={type} placeholder={placeholder} id={name} />
            <FontAwesomeIcon className="icon-check" icon={icon} />
          </div>

          <p>{error}</p>
        </div>

    )
     
    

}

export default Inputs;
