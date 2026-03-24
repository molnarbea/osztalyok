export default class Kutya{
    /*új osztály ami megjeleníti a kutya adatait, és hozzá rendel valamilyen viselkedést
    egységbe zárjuk az adatokat és a hozzájuk tartozó adattagokat és tagfüggvényeket */
    /*adattag lehet privát vagy publikus */
    #obj = {}//privát adattag
    constructor(obj={kep,nev},szuloElem){
        /*this.kep = obj.kep;
        this.nev = obj.nev;*/

        /*this.obj = obj;//publikus*/

        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.megjelenit();

        const buttonElem=document.querySelector(".kartya:last-child button");
        console.log(buttonElem)
        buttonElem.addEventListener("click", function(event){
            console.log(event.target);
        })
    }

    megjelenit() {
    //az osztály tagfüggvénye, az osztály adattagjain dolgozik
    let kod=`<div class="kartya">
                <img src="${this.#obj.kep}" alt="${this.#obj.nev}">
                <p>${this.#obj.nev}</p>
                <button>Kedvenc ${this.#obj.nev}</button>
            </div>
            `;
    this.szuloElem.innerHTML += kod;
    }

    getObj(){
        return this.#obj;
    }

    setObj(ertek){
        //adattag értékét beállítjuk és ellenőrizzük
        if (ertek == "oltott"){
            this.#obj.oltott = true;
        }else if(ertek == "nem oltott"){
            this.#obj.oltott = false;
        }else{
            console.log("Nem megfelelő az érték!")
        }
    }
}