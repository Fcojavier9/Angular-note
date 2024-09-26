// creamos un interfaz note para que todos los que lo implementen
// tengan que rellenar los campos id, title y text
export interface Note {
id: number;
title: string;
text: string;
}

// creamos un array de objetos de tipo Note
// y lo exportamos para que pueda ser utilizado en otros ficheros
export const NOTES: Note[] = [
{
    id: 1,
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
},
{
    id: 2,
    title: 'Shakespeare',
    text: 'To be, or not to be: that is the question.',
},
];