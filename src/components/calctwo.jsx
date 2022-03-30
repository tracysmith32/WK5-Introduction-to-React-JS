import React, { useState } from 'react';

const CalcTwo = () => {
	const [list, setList] = useState([]);

	const handleForm = (item) => {
		setList([...list, item.toUpperCase()]);
	};

	return (
		<div>
			<h1>How to handle forms and user inputs</h1>
			<CustomForm handleForm={handleForm} name />
			<ul>
				{list.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	);
};

const CustomForm = ({ handleForm, name }) => {
	const [userInput, setUserInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		handleForm(userInput);
		setUserInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={(e) => setUserInput(e.target.value)}
				value={userInput}
			/>

			<button type="submit">Submit</button>
		</form>
	);
};

export default CalcTwo;
