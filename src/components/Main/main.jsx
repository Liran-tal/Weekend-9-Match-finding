import React from "react";
import "./main.css";
import Data from "../../api/api";
import { initialState } from "../../api/api";
import Counter from "../Counter/counter";
import Image from "../Image/image";
import Button from "../Button/Button";

export default class Main extends React.Component {
	state = {
		counterPlus: initialState.counterPlus,
		counterMinus: initialState.counterMinus,
		currentImage: initialState.currentImage,
	}

	handleOnClick = ({target}) => {
		const counter = target.value.toLowerCase();
		
		this.setState((prevState) => ({
			...prevState,
			currentImage: prevState.currentImage + 1,
			counterPlus: (counter === 'positive') 
				?	(prevState.counterPlus + 1)
				: prevState.counterPlus,
			counterMinus: (counter === 'negative') 
				? (prevState.counterMinus + 1)
				: prevState.counterMinus,
		}))
	}

	displayElements = () => {
		if (this.state.currentImage >= Data.length) {
			return (<h2>GAME OVER</h2>)
		}

		return (
			<div className="main-wrapper">
				<div className="flex-row counters">
					<Counter
						text="Negative: "
						value={this.state.counterMinus}
					/>
					<Counter
						text="Positive: "
						value={this.state.counterPlus}
					/>
				</div>
				<div className="image">
					<Image
						image={Data[this.state.currentImage].url}
						text={Data[this.state.currentImage].text}
					/>
				</div>
				<div className="flex-row buttons-container">
					<Button 
						className="negative"
						value="Negative"
						onClick={this.handleOnClick}
					/>
					<Button 
						className="positive"
						value="Positive"
						onClick={this.handleOnClick}
					/>
				</div>
			</div>
		)
	}

	render () {
		return (
			<div>
				{this.displayElements()}
			</div>
		)
	}
}