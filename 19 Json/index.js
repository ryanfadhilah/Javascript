// JSON Javascript Object Notation

// Used to send and revieve data

// JSON Tesxt format is independent 

const my_obj = {
    name: "ryan",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("hello")
    },
}
console.log("call Regular Object")
console.log(my_obj)
console.log(typeof my_obj)


const send_json = JSON.stringify(my_obj)
console.log("call Stringfy Object")
console.log(send_json)
console.log(typeof send_json)

const recieve_json = JSON.stringify(send_json)
