import Kutya from "./Kutya.js";

/*jelenítsd meg a kutyát az oldalon, megjelenít metódus */
const kutya = {
    kep:"kepek/kutyi.jpg",
    nev:"Corgi"
}

const szuloElem = document.querySelector(".tarolo");

const dog = new Kutya(kutya,szuloElem);//példányosítom a Kutya osztályt
//dog.megjelenit();
//console.log(dog.szuloElem);
//console.log(dog.getObj());//getterrel el tudom olvsani az obj értékét

const kutya2 = {
    kep:"kepek/bodri.jpg",
    nev:"Bodri"
}

const dog2= new Kutya(kutya2,szuloElem);

//minden kutya ha oltást kap, akkor legyen egy olyan tulajdonsága hogy, oltott
dog2.setObj("oltott");
dog.setObj("nem oltott");