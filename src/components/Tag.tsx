import { TagType } from '../types';

interface TagProps {
	tags: TagType[];
	counterId: number;
}

const Tag = ({ counterId, tags }: TagProps) => {
	console.log('Tag - Rendered');

	const filteredTags = tags.filter((tag) => tag.counterId === counterId);

	if (filteredTags.length === 0) return <p>There are no tags for this counter!</p>;

	return (
		<>
			{filteredTags.map((tag) => (
				<li key={tag.id}>{tag.name}</li>
			))}
		</>
	);
};

export default Tag;
