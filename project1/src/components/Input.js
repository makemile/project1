import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Inputs = (props) => {
  const {
    state = {
      empty: "",
      validate: null,
    },
    updateState,
    label,
    placeholder,
    type,
    name,
    error,
    succes,
    iconUser,
    iconLock,
    regexInput,
    iconPhone,
    iconEmail,
    validatePassW,
  } = props;

  const onChange = (e) => {
    updateState({ ...state, empty: e.target.value });
  };

  const validation = () => {
    if (regexInput) {
      regexInput.test(state.empty)
        ? updateState({ ...state, validate: "true" })
        : updateState({ ...state, validate: "false" });
    }
    if (validatePassW) {
      validatePassW();
    }
  };

  return (
    <div className="form-input">
      <label htmlFor={name} validate={state.validate}>
        {label}
      </label>
      <div className="form-input__user">
        <FontAwesomeIcon className="icon-first" icon={iconUser} />
        <FontAwesomeIcon className="icon-lock" icon={iconLock} />
        <FontAwesomeIcon className="icon-phone" icon={iconPhone} />
        <FontAwesomeIcon className="icon-email" icon={iconEmail} />
        <input
          type={type}
          placeholder={placeholder}
          id={name}
          defaultValue={state.empty}
          onChange={onChange}
          onKeyUp={validation}
          onBlur={validation}
          validate={state.validate}
        />
        {state.validate === "true" ? (
          <FontAwesomeIcon className="icon-check" icon={faCircleCheck} />
        ) : (
          <FontAwesomeIcon className="icon-mark" icon={faCircleXmark} />
        )}
      </div>
      {state.validate === "true" ? <p>{succes}</p> : <p>{error}</p>}
    </div>
  );
};

export default Inputs;
