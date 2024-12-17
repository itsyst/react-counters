import { TagType, CounterType } from '../types/index';
import { ReactNode } from 'react';
import Tag from './Tag';

interface CounterProps {
	counter: CounterType;
	tags: TagType[];
	onIncrement: (counter: CounterType) => void;
	onDecrement: (counter: CounterType) => void;
	onDelete: (id: number) => void;
	children: ReactNode;
}

const Counter = ({ children, counter, tags, onIncrement, onDecrement, onDelete }: CounterProps) => {
	console.log('Counter - Rendered');

	const getBadgeClasses = () => {
		let classes = 'fs-5 p-2 badge bg-pill bg-';
		classes += counter.value === 0 ? 'warning' : 'primary';
		return classes;
	};

	const formatCount = () => {
		return counter.value === 0 ? 'Zero' : counter.value;
	};

	return (
		<>
			{children}
			<div className="row">
				<div className="col-sm-2">
					<span className={getBadgeClasses()}>{formatCount()}</span>
				</div>
				<div className="col">
					<button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm">
						+
					</button>
					<button onClick={() => onDecrement(counter)} className="btn btn-secondary btn-sm mx-2" disabled={counter.value === 0}>
						-
					</button>
					<button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm">
						delete
					</button>
					<ul className="list-unstyled">
						<Tag tags={tags} counterId={counter.id} />
					</ul>
				</div>
			</div>
		</>
	);
};

export default Counter;
