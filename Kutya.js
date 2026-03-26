export default class Kutya{
    /*új osztály ami megjeleníti a kutya adatait, és hozzá rendel valamilyen viselkedést
    egységbe zárjuk az adatokat és a hozzájuk tartozó adattagokat és tagfüggvényeket */
    /*adattag lehet privát vagy publikus */
    #obj = {}//privát adattag
    #index=0;
    constructor(obj={kep,nev},index,szuloElem){
        /*this.kep = obj.kep;
        this.nev = obj.nev;*/

        /*this.obj = obj;//publikus*/

        this.#obj = obj;
        this.szuloElem = szuloElem;
        console.log(this.szuloElem)
        this.#index = index;
        this.megjelenit();

        this.esemenykezelo();
    }

    sajatEsemeny(){
        //létrehozok saját eseményt
        const e = new CustomEvent("kedvenc",{detail:this.#index});
        window.dispatchEvent(e);
    }

    esemenykezelo(){
        const buttonElem=document.querySelector(".kartya:last-child button");
        console.log(buttonElem);
        buttonElem.addEventListener("click", (event)=>{
            console.log("event.target",event.target);
            console.log("this",this);
            this.sajatEsemeny()
        });
    }
    //this a konkrét osztály pédányra mutat, de egy esemény kezelőben a function névtelen függvényt használunk, akkor a this az a html dom elem, amely az eseményt kiváltotta (=>)nyíl függvény esetén viszont a konkrét osztály pédány
    

    megjelenit() {
    //az osztály tagfüggvénye, az osztály adattagjain dolgozik
    let kod=`<div class="kartya">
                <img src="${this.#obj.kep}" alt="${this.#obj.nev}">
                <p>${this.#obj.nev}</p>
                <button>Kedvenc ${this.#obj.nev}</button>
            </div>
            `;
    this.szuloElem.insertAdjacentHTML("beforeend", kod);
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
            console.log("Nem megfelelő az érték!");
        }
    }
}