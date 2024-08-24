

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}
// console.log( 'Song: ', audioPlayer.song );
// console.log( 'Author: ', audioPlayer.details.author);


// const { song } = audioPlayer;
// console.log( 'Song: ', song );

const song = 'New Song';
const { 
    song:anotherSong,
    songDuration: duration,
    // details: { author } // Es muy facil perderse con esta sintaxis
    details
 } = audioPlayer;
 const { author } = details;
console.log( 'Song: ', song );
console.log( 'Song: ', anotherSong );
console.log( 'Duration: ', duration );
console.log( 'Author: ', author );






export {}