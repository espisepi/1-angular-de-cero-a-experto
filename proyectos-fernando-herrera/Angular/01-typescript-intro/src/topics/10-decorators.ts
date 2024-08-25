

// Decoradores
// Un decorador es una simple funcion
// que puede modificar el comportamiento
// de clases, propiedades y metodos
function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) { 
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}



@classDecorator
class SuperClass {

    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo');
    }
}

// Estoy mostrando la definicion de la clase
// NO Estoy mostrando una instancia de esa clase ( es decir, un objeto creado de esa clase )
console.log( SuperClass );

const myClass = new SuperClass();

// Estoy mostrando la instancia de la clase
console.log( myClass );

