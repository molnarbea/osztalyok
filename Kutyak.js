//végigmegy a listán és példányosítja a kutyát annyiszor ahány eleme van a listának

import Kutya from "./Kutya.js";

export default class Kutyak{
    #lista = [];
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML = "";
        this.megjelenit();
    }

    megjelenit(){
        this.#lista.forEach(
            (elem, index)=>{
                new Kutya(elem, index, this.szuloElem)
            }
        )
    }
}