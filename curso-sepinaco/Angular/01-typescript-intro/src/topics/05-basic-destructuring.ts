
// Desestructuracion de objetos ==================

// interface AudioPlayer {
//     audioVolume: number;
//     songDuration: number;
//     song: string;
//     details: Details;
// }
// interface Details {
//     author: string;
//     year: number;
// }

// const audioPlayer: AudioPlayer = {
//     audioVolume: 90,
//     songDuration: 36,
//     song: "Mess",
//     details: {
//         author: "Ed Sheeran",
//         year: 2015
//     }
// }

// console.log( 'Song: ', audioPlayer.song );
// console.log( 'Author: ', audioPlayer.details.author);


// const { song } = audioPlayer;
// console.log( 'Song: ', song );

// const song = 'New Song';
// const { 
//     song:anotherSong,
//     songDuration: duration,
//     // details: { author } // Es muy facil perderse con esta sintaxis
//     details
//  } = audioPlayer;
//  const { author } = details;
// console.log( 'Song: ', song );
// console.log( 'Song: ', anotherSong );
// console.log( 'Duration: ', duration );
// console.log( 'Author: ', author );


// Desestructuracion de arreglos ==================

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

// console.log( 'Personaje 3:', dbz[2] ); // Trunks
// console.log( 'Personaje 3:', dbz[3] ); // undefined
// console.log( 'Personaje 3:', dbz[3] || 'No hay personaje'  ); // No hay personaje, porque dbz[3] es undefined

// Poner valor por defecto al arreglo si es undefined
// const trunks = dbz[3] || 'No hay personaje';
// console.log(' Personaje 3:', trunks ); // No hay personaje

// const [ p1, p2, trunks ]: string[] = dbz;
// console.log('Personaje 3:', trunks);

// const [ , , trunks ]: string[] = dbz;
// console.log('Personaje 3:', trunks);

// Poner valor por defecto al arreglo si es undefined
const [ , , trunks = 'Not found' ]: string[] = ['Goku','Vegeta'];
console.log('Personaje 3:', trunks); // Not found





export {}