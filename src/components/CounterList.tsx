import { CounterType, TagType } from '../types';
import Counter from './Counter';

interface CounterListProps {
	counters: CounterType[];
	tags: TagType[];
	onDelete: (id: number) => void;
	onIncrement: (counter: CounterType) => void;
	onDecrement: (counter: CounterType) => void;
	onReset: () => void;
}

const CounterList = ({ counters, tags, onDelete, onIncrement, onDecrement, onReset }: CounterListProps) => {
	return (
		<>
			<button onClick={onReset} className="btn btn-primary btn-sm mb-3">
				Reset
			</button>
			{counters.map((counter) => (
				<Counter key={counter.id} counter={counter} tags={tags} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement}>
					<h4>Counter #{counter.id}</h4>
				</Counter>
			))}
		</>
	);
};

export default CounterList;
