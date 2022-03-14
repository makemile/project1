import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    icon,
    iconMark,
    iconCheck,
    regexInput,
  } = props;
  console.log(state);
  const onChange = (e) => {
    updateState({ ...state, empty: e.target.value });
  };

  const validation = () =>
    regexInput.test(state.empty)
      ? updateState({ ...state, validate: "true" })
      : updateState({ ...state, validate: "false" });

  return (
    <div className="form-input">
      <label htmlFor={name} validate={state.validate}>
        {label}
      </label>
      <div className="form-input__user">
        <FontAwesomeIcon className="icon-first" icon={icon} />
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
          <FontAwesomeIcon className="icon-check" icon={iconCheck} />
        ) : (
          <FontAwesomeIcon className="icon-mark" icon={iconMark} />
        )}
      </div>
      {state.validate === "true" ? <p>{succes}</p> : <p>{error}</p>}
    </div>
  );
};

export default Inputs;
