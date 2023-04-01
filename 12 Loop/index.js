let stars = ''
let count = 7

for (let i = 0; i < count; i++) {
    console.log(stars)
    stars += " *"
}


let stars1 = ''
for (let i = 0; i < count; i++) {

    for (let j = 0; j < count - i; j++) {
        stars1 += " *"
    }
    stars1 += "\n"


}
console.log(stars1)