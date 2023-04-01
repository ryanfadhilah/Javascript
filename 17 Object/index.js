const ex_object = {
    name: "ryan",
    alive: true,
    age: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "coffe",
        afternoon: "Iced Tea"
    },
    action: function () {
        return `hello ${this.name}`
    },
    greet: function (argument) {
        return `greeting ${argument}`
    }
}

console.log(ex_object)

console.log(ex_object.alive)

console.log(ex_object["age"])

console.log(ex_object["hobbies"][0])

console.log(ex_object.hobbies[0])

console.log(ex_object.beverage.morning)

console.log(ex_object["beverage"].morning)

console.log(ex_object["beverage"]["morning"])

console.log(ex_object.action())

console.log(ex_object.greet("ryannnnnnn"))