// import './Button.css';


function Button(props) {



  return (
    <button 
			className={`button-${props.class}`}
			onClick={props.onClick}
			value={props.value}
		>
      {props.value}
    </button>
  );
}

export default Button;