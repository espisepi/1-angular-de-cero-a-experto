
// Las clases en typescript son distintas a las clases de javascript
// porque en el tsconfig.json puedo decirle que compile a ecmascript5
// y eso hace que transforme las clases a funciones
// ya que esa version de javascript es muy antigua
// y no soporta clases

// Las clases en typescript tienen mas sentido semantico que las de javascript

// Una clase es como un molde para crear objetos de esa clase

// Forma LARGA de definir clases en ts ============
// export class Person {
//     // public name: string | undefined;
//     // public name?: string;
//     public name: string;
//     private address: string;

//     constructor(name: string, address: string) {
//         // this.name = 'Fernando';
//         // this.address = 'New York';
//         this.name = name;
//         this.address = address;
//     }
// }
// const ironMan = new Person('Ironman','New York');
// console.log(ironMan);


// Forma CORTA de definir clases en ts ============
export class Person {
    // public name: string;
    // private address: string;

    // Poner los parametros del constructor de esta forma
    // significa crear los atributos de la clase y asignarlos automaticamente
    constructor(
        public name: string,
        private address: string = 'No Address'
    ) {

    }
}
// const ironMan = new Person('Ironman','New York');
// console.log(ironMan);

// Extendemos la clase Person ========
// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'New York');
//     }
// }

// Priorizamos la composicion a la herencia
export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        // inyeccion de dependencia
        public person: Person
    ) {
        // No lo vamos a hacer asi
        // Sino que lo pasaremos por parametro AKA inyeccion de dependencias
        // this.person = new Person(realName);
    }
}

const tonyPerson = new Person('Tony Stark', 'New York');
const ironMan = new Hero('Ironman', 45, 'Tony', tonyPerson);

console.log(ironMan);