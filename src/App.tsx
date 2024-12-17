import CounterList from './components/CounterList';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { CounterType } from './types';
import { counters as initialCounters, tags } from './data/inner-data';

function App() {
	// State for counters
	const [counters, setCounters] = useState<CounterType[]>(initialCounters);

	// Event handlers
	const handleIncrement = (counter: CounterType) => {
		setCounters((prevCounters) => prevCounters.map((c) => (c.id === counter.id ? { ...c, value: c.value + 1 } : c)));
	};

	const handleDecrement = (counter: CounterType) => {
		setCounters((prevCounters) => prevCounters.map((c) => (c.id === counter.id && c.value > 0 ? { ...c, value: c.value - 1 } : c)));
	};

	const handleDelete = (id: number) => {
		setCounters((prevCounters) => prevCounters.filter((c) => c.id !== id));
	};

	const handleReset = () => {
		setCounters(initialCounters);
	};

	return (
		<>
			<Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
			<main className="container">
				<CounterList
					counters={counters}
					tags={tags}
					onReset={handleReset}
					onDelete={handleDelete}
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
				/>
			</main>
		</>
	);
}

export default App;
