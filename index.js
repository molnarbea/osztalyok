import { KUTYALISTA } from "./adat.js";
import Kutyak from "./Kutyak.js";

/*jelenítsd meg a kutyát az oldalon, megjelenít metódus */


const szuloElem = document.querySelector(".tarolo");
const kedvencElem = document.querySelector(".kedvenc");

//const dog = new Kutya(kutya,szuloElem);//példányosítom a Kutya osztályt
//dog.megjelenit();
//console.log(dog.szuloElem);
//console.log(dog.getObj());//getterrel el tudom olvsani az obj értékét

new Kutyak(KUTYALISTA,szuloElem)

//const dog2= new Kutya(kutya2,szuloElem);

//minden kutya ha oltást kap, akkor legyen egy olyan tulajdonsága hogy, oltott


const KEDVENCLISTA = [];
//kiválosztott kutya adatainak a megjelenítése

window.addEventListener("kedvenc",function(event) {
    //felirakozok a sajátEsemény-re
    console.log(event.detail);
    KEDVENCLISTA.push(KUTYALISTA[event.detail]);
    new Kutyak(KEDVENCLISTA,kedvencElem);
})