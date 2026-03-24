export function megjelenit(obj={kep,nev},szuloElem) {
    let kod=`<div class="kartya">
            <img src="${obj.kep}" alt="${obj.nev}">
            <p>${obj.nev}</p>
        </div>`;
    szuloElem.innerHTML = kod;
}

/*viselkedni akar valahogy:
kedvencnek akarom jelölni,
 vagy időpont kutyasétáltatáshoz,
 vagy kiválasztom gazdihoz
 vagy mozgatni */