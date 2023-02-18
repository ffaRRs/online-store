import { makeAutoObservable } from "mobx";

export default class dropMenuStore{
    column = 'Настольные игры';
    openDropMenu = false;
    currentElement = 'Настольные игры';


    constructor(){
        makeAutoObservable(this)
    }

    division(e){
        this.column = e.target?.childNodes[0]?.innerHTML;
    }

    closeDropMenu(){
        this.openDropMenu = false;
    }

    chageOpenDropMenu(){
        this.openDropMenu = !this.openDropMenu;
    }

    setCurrentElement(nameElement){
        this.currentElement = nameElement;
    }
}