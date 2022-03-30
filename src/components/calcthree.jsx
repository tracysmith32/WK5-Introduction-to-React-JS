import { evaluate } from 'mathjs';
import { useState } from 'react';

const Calc = () => {
	// declare variables of buttons and operators
	const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const operators = ['+', '=', '*', '/', 'c', '.'];
	//Set state
	const [input, setInput] = useState('');
	//create functions
	const clickHandler = (event) => {
		const value = event.target.innerText;
		if (value === 'c') {
			setInput('');
		} else if (value === '=') {
			const result = evaluate(input);
			setInput(result);
		} else {
			setInput(input + value);
		}
	};

	return (
		<div>
			<h1>Calculator</h1>
			<div>{input}</div>
			<div>
				{buttons.map((button) => (
					<button id={button} onClick={clickHandler}>
						{button}
					</button>
				))}
			</div>
			<div>
				{operators.map((button) => (
					<button id={button} onClick={clickHandler}>
						{button}
					</button>
				))}
			</div>
		</div>
	);
};

export default Calc;
