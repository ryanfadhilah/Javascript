let coffe = true
let vip = true

let coffeAccess = vip
    ? "free coffe for the VIP!"
    : coffe
        ? "it will be 5 dollars for the coffe"
        : "sorry we ran out of coffe"

console.log(coffeAccess)