



// export function whatsMyType( argument: any ): any {
//     return argument;
// }
// const amIString = whatsMyType('Hola Mundo');
// // Lo malo de poner any es
// // que no tengo la ayuda de los metodos disponibles
// // de la variable amIString
// // porque ts no sabe ni sus metodos ni sus atributos
// // ya que es de tipo any
// console.log(amIString.split(' '));

// Trabajaremos con Genericos para evitar usar any

// Por nomenclatura el primer generico es la letra T (pero puedo nombrarlo como yo quiera)
export function whatsMyType<T>( argument: T ): T {
    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray  = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
