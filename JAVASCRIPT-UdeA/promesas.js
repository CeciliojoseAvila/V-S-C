import {getHeroeById} from './MainUdeA.js'
 const getHeroeByIdAsync = (id) => {

return new Promise ((resolve, reject) => {
    setTimeout(() => {
        const p= getHeroeById(id);
        if(p){
            resolve(p);
    }else{
        reject ('no se cumpli{o la promesa-no se encontró el heroe');
    }
 
}, 2000)
});   
}
getHeroeByIdAsync(10)
.then(heroe => console.log('Heroe', heroe))
.catch(err => console.warn(err))
 // node -r esm MainUdeA.js (para ejecutar)