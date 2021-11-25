import {writable} from 'svelte/store';

export const questionResults = writable(null);
export const selectedDiseases = writable(Array(10).fill(1));