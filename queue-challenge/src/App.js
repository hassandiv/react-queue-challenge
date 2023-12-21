import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [products, setProducts] = useState(null);
	const [queue, setQueue] = useState([[10, 5, 7], [1], [2], [3], [4]]);

	const addPersonToQueue = (e) => {
		e.preventDefault();
		let leastProductsAmount = 1e9;
		let leastQueue = undefined;

		for (let eachQueue of queue) {
			const totalInQueue = eachQueue.reduce((sum, value) => sum + value, 0);
			if (totalInQueue < leastProductsAmount) {
				leastProductsAmount = totalInQueue;
				leastQueue = eachQueue;
			}
		}
		console.log("leastQueue", leastQueue);

		setQueue((prevQueue) =>
			prevQueue.map((queue) =>
				queue === leastQueue ? [...queue, Number(products)] : queue
			)
		);

		console.log("queue", queue);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setQueue((prevQueue) =>
				prevQueue.map((queue) =>
					[queue[0] - 1, ...queue.slice(1)].filter((value) => value > 0)
				)
			);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="App">
			<form onSubmit={addPersonToQueue}>
				<input
					type="number"
					name="checkout"
					onChange={(e) => setProducts(e.target.value)}
				/>
				<button type="submit">Checkout</button>
			</form>
			<div className="Queue">
				{queue?.map((queue, idx) => (
					<div key={idx} className="EachQueue">
						{queue.map((products, idx) => (
							<div key={idx}>{products}</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
