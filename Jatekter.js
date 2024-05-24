import Elem from "./Elem.js";

export class Jatekter{
    #aktElem="X";
    #lista=[" ", " ", " ", " ", " ", " ", " ", " ", " "]
    constructor(){
        this.#megjelenit()

        /** feliratkozunk a saját lepes eseményünkre */
        $(window).on("lepes",(event)=>{
            console.log(event.detail)
            let id=event.detail
            this.#beallit(id)
        })
    }

    #beallit(id){
        this.#lista[id]=this.#aktElem;
        /*if(this.#aktElem==="X"){
            this.#aktElem="O"
        }else{
            this.#aktElem="X"
        }*/
        this.#aktElem==="X"?this.#aktElem="O":this.#aktElem="X"
        this.#megjelenit()
    }


    #megjelenit(){
        /** kirak 9db elemet a játéktérre */
        let szuloElem = $(".jatekter")
        szuloElem.empty()
        this.#lista.forEach((listaelem, index)=>{
            new Elem(index, listaelem, szuloElem)
        })
    }
    
    #ell(){
        // szorgalmi hf
    }
}