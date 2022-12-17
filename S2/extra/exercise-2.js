/*Dado el siguiente javascript usa forof y forin para hacer 
la media del volumen de todos los sonidos favoritos que tienen
los usuarios.*/


const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let volumeMean = {sumVolume: 0, totalVolume: 0};
for (const user of users) {
    //console.log(user);
    for (const prop in user.favoritesSounds) {
        const favouriteSound = user.favoritesSounds[prop];
        volumeMean.sumVolume += favouriteSound.volume;
        volumeMean.totalVolume++;
    }
    //console.log(volumeSum);
    /*let volumeSumTtl = 0
    volumeSumTtl += volumeSum.volume; 
    console.log(volumeSumTtl);*/
}
console.log('La media del volumen es: ' + volumeMean.sumVolume / volumeMean.totalVolume)
//let volumeMean = sumVolume/totalVolume;