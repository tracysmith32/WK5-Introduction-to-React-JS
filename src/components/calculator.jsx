import { useState } from 'react';
import { evaluate } from 'mathjs';

const insertBeforeLast = (arr, elements) => {
	let mutatedArr = arr;
	elements.forEach((e) => {
		mutatedArr.splice(mutatedArr.length - 1, 0, e);
	});
	return mutatedArr;
};

const Calculator = () => {
	// an array of buttons and map through them
	const numberedButtons = Array.from({ length: 10 }, (_, i) => i + 0).reverse();
	const keypad = insertBeforeLast(numberedButtons, ['c', '.']);
	const operationButtons = ['+', '-', '*', '/'];
	// a useState hook for my input
	const [input, setInput] = useState('');

	const clickHandler = (event) => {
		const value = event.target.outerText;
		switch (value) {
			case 'c': {
				setInput('');
				break;
			}
			case '=': {
				const result = evaluate(input);
				setInput(result);
				break;
			}
			default: {
				setInput(input + value);
				break;
			}
		}
	};

	return (
		<div className="container">
			<div className="form-container">
				<span className="input-text">{input}</span>
			</div>
			<div className="row operations">
				{operationButtons.map((button) => (
					<button key={button} onClick={clickHandler}>
						{button}
					</button>
				))}
			</div>
			<div className="row">
				<div className="numbered-buttons">
					{keypad.map((button) => (
						<button key={button} onClick={clickHandler}>
							{button}
						</button>
					))}
				</div>
				<div className="equals">
					<button key={'='} onClick={clickHandler}>
						{'='}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
