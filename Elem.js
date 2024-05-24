export default class Elem{
    #ertek=""
    #szuloElem;
    #divElem;
    #id=0;
    constructor(id, ertek, szuloElem){
        this.#id=id;
        this.#ertek=ertek;

        this.#szuloElem=szuloElem;
        this.#megjelenit()
        /**eseménykezelő a divre */
        this.#divElem=this.#szuloElem.children("div:last-child")
        /** A this fnction névtelen függvényen belül használva arra az elemre mutat, amelyik az eseményt kiváltotta, tehát egy html elem lesz. => függvény esetén pedig az objektumpéldányra fog mutatni */
        this.#divElem.on("click",() => {
            /**this - példány? */
            console.log(this.#id)
            
            if(this.#ertek===" "){
                this.#trigger("lepes")
            };
        })
    }

    #megjelenit(){
        let txt=`<div><p>${this.#ertek}</p></div>`
        this.#szuloElem.append(txt)
    }

    /**az osztály úgy tud információt adni magáról egy adott esemény bekövetkeztekor, hogy létrehozunk egy saját eseményt, amire a másik osztály fel tud iratkozni */
    #trigger(esemenynev){
        /** létrehozunk egy új eseményt és átadunk információkat az objektumról {detail: } */
        const e = new CustomEvent(esemenynev, {detail:this.#id})
        window.dispatchEvent(e);
    }   
}