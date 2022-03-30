import finger from '../images/finger.jpeg';
import funfetti from '../images/funfetti.jpeg';
import kitkat from '../images/kitkat.jpeg';
import unicorn from '../images/Unicorn.jpeg';

const Carousel = () => {
	const Cake = (props) => {
		return (
			<div>
				<img className="cake" src={props.image} alt="" />
				<p className="cake-description">{props.description}</p>
			</div>
		);
	};

	return (
		<div className="carousel">
			<Cake image={finger} description="Chocolate finger cake" />
			<Cake image={funfetti} description="Funfetti Cake" />
			<Cake image={kitkat} description="Kitkat Cake" />
			<Cake image={unicorn} description="Unicorn Cake" />
		</div>
	);
};

export default Carousel;
