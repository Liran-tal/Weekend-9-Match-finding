import './image.css';


function Image(props) {



  return (
    <div className="image-container">
			<img 
				src={props.image} 
				alt={props.title} 
				className="image-img"
			/>
			<div className="image-text">
				{props.title}
			</div>
    </div>
  );
}

export default Image;

