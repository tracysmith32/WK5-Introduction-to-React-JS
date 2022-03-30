import './App.css';
import Calc from './components/calcthree';
import CalcTwo from './components/calctwo';
import Calculator from './components/calculator';
import Carousel from './components/carousel';
import Footer from './components/footer';
import Hook from './components/hook';
import Jumbotron from './components/jumbotron';
import Navbar from './components/nav';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hook />
			<Jumbotron />
			<Carousel />
			<Calculator />
			<CalcTwo />
			<Calc />
			<Footer />
		</div>
	);
}

export default App;
