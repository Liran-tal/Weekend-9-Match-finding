// import './Image.css';


function Counter(props) {



  return (
    <div className="counter-container">
			<div className="counter-text">
				{props.text}{props.value}
			</div>
    </div>
  );
}

export default Counter;

