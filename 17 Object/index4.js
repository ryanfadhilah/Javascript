const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul JOnes",
    drums: "John Bonham",
}

// destructuring 
const {
    vocals: my_vocal,
    guitar: my_guitar,
    bass,
    drums,
} = band

console.log(my_vocal)
console.log(my_guitar)
console.log(bass)
console.log(drums)
