class Car {

    constructor(name,brand) {
        this.name = name;
        this.brand = brand;
    }

    get Name() { return this.name ; }
    set Name(name) { this.name = name; }

    get Brand() { return this.brand ; }
    set Brand(brand) { this.brand = brand; }

    show() {
        return `I have a - ${this.name} of brand ${this.brand}`;
    }
}

class CarOwner extends Car {

    constructor(name,brand,owner) {
        super(name,brand);
        this.owner = owner;
    }
    
    get Owner() { return this.owner ; }
    set Owner(owner) { this.owner = owner; }

    show() {
        return `The Override - ${this.name} of brand ${this.brand}`;
    }

    show1() {
        return super.show();
    }

    run () {
        return this.show() +" , & owner is - "+ this.owner;
    }
}

let carOne = new CarOwner("Ford","Mustang","john smith");

console.log(carOne.run());
console.log(carOne.show1());