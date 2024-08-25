

interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Fernando",
}

const passenger2: Passenger = {
    name: "Melissa",
    children: ["Natalia","Elisabeth"],
}

// const printChildren = ( passenger: Passenger ) => {
//     // El codigo comentado lo resumo en una linea aka linea 23
//     // let howManyChildren = passenger.children?.length;
//     // if( !howManyChildren ) {
//     //     howManyChildren = 0;
//     // }
//     // Este codigo resumen el codigo comentado arriba
//     const howManyChildren = passenger.children?.length || 0;
//     console.log( passenger.name, howManyChildren);
// }
// printChildren(passenger1);



// const returnChildrenNumber = ( passenger: Passenger ): number => {
//     if ( !passenger.children ) return 0;
//     // ! aka Non null assertior operator
//     // El simbolo ! indica que estamos seguros que ese atributo esta definido
//     const howManyChildren = passenger.children!.length;
//     console.log( passenger.name, howManyChildren );
//     return howManyChildren;
// }
// returnChildrenNumber( passenger1 );