import { createContext } from 'react';

export const dataContext = createContext({
	mail: "name@example.com",
	text: "some text"
});