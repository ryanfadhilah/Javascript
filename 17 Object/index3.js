const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul JOnes",
    drums: "John Bonham",
}

console.log(Object.keys(band))
console.log(Object.values(band))

for (let i in band) {
    console.log(`on ${i} its ${band[i]}`)
}

delete band.drums

console.log(band.hasOwnProperty("drums"))
