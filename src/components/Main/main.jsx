import React from "react";
import Counter from "../Counter/counter";
import Image from "../Image/image";
import Button from "../Button/Button";

export default class Main extends React.Component {
	state = {
		counterPlus: 0,
		counterMinus: 0,
		currentImage: 0,
	}

	handleOnClick = ({target}) => {
		this.setState((prevState) => {

			++ prevState.currentImage;

			if (target.value === positive) {
				return (++ prevState.counterPlus);
			}
			
			return (++ prevState.counterMinus);
		})
	}

	render () {
		return (
			<div>
				<div className="flex-row counters">
					<Counter
						text={this.state.counterMinus}
					/>
					<Counter
						text={this.state.counterPlus}
					/>
				</div>
				<div className="image">
					<Image
						image={Data[this.state.currentImage].image}
						text={Data[this.state.currentImage].text}
					/>
				</div>
				<div className="flex-row buttons-container">
					<Button 
						className="positive"
						value="Positive"
						onClick={this.handleOnClick}
					/>
					<Button 
						className="negative"
						value="negative"
						onClick={this.handleOnClick}
					/>
				</div>
			</div>
		)
	}
}