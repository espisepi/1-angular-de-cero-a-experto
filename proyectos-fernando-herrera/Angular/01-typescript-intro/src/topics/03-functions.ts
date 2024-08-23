
// "void" significa que no hay un return en nuestra function
// function addNumbers():void {}
// "undefined" signidica que nuestra funcion regresa un return undefined
// function addNumbers():undefined {}



function addNumbers( a: number, b: number ) {
    return a + b;
}
const result: number = addNumbers(1, 2);
console.log({result});


const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}
const result2: string = addNumbersArrow(1, 2);
console.log({result2})

// Este es el orden de parametros de buenas practicas:
// Primero van los parametros obligatorios
// Segundo van los parametros opcionales
// Tercero van los parametros con valores por defecto
function multiply( firstNumber: number, secondNumber?: number, base: number = 2 ) {
    return firstNumber * base;
}
const multiplyResult: number = multiply(5);
console.log({multiplyResult});


// Funciones con objetos como argumento
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}
const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
}
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}
healCharacter( strider, 10 );
strider.showHp();



export {}