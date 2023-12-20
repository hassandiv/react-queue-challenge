import { useState } from "react";
import "./App.css";

function App() {
	const [products, setProducts] = useState(undefined);
	const [queue, setQueue] = useState([[], [], [], [], []]);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	console.log("products", products);

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<input
					type="number"
					name="checkout"
					onChange={(e) => setProducts(e.target.value)}
				/>
				<button type="submit">Checkout</button>
			</form>
			<div className="Queue">
				{queue?.map((queue, idx) => (
					<div key={idx}>X</div>
				))}
			</div>
		</div>
	);
}

export default App;
