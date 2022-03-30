import cake from '../images/cake.jpeg';

const Jumbotron = () => {
	return (
		<div>
			<h1>I love Cake!</h1>

			<div className="jumbertron">
				<img src={cake} />
			</div>
		</div>
	);
};

export default Jumbotron;
