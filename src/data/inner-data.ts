import { CounterType, TagType } from "../types/index";

export const counters: CounterType[] = [
    { id: 1, value: 4, status: true },
    { id: 2, value: 7, status: true },
    { id: 3, value: 0, status: true },
    { id: 4, value: 0, status: true }
];

export const tags: TagType[] = [
    { id: 1, counterId: 1, name: 'tag1' },
    { id: 2, counterId: 3, name: 'tag2' },
    { id: 3, counterId: 3, name: 'tag3' }
];