const vehicle = {
    wheels: "4 wheels",
    engine: function () {
        return "vroom"
    }
}

const car = Object.create(vehicle)
car.doors = "4 doors";
car.engine = function () {
    return "fwoosh"
}

console.log(car)
console.log(car.wheels)
console.log(car.doors)
console.log(car.engine())


const tesla = Object.create(car)
tesla.engine = () => {
    return "silent"
}

console.log(tesla)
console.log(tesla.wheels)
console.log(tesla.doors)
console.log(tesla.engine())