class Car {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    information () { return `This ${this.name} is a ${this.type} car`}
    
}

const saloonCar = new Car("Tayota", "Saloon")

console.log(saloonCar.information())


class Model extends Car {
    constructor(name, type, color) {
        super(name, type)
        this.color = color
    }

    speck () {return `You just won a ${this.color} ${this.name} ${this.type} car`}
}

const model = new Model("Venza", "SUV", "White",)
console.log(model.speck())