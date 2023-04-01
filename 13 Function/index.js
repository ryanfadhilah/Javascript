function add(a, b) {

    return `${a} + ${b} is ${a + b}`

}
console.log(add(2))


const min = (a, b) => {
    return `${a} - ${b} is ${a - b}`
}
console.log(min(1, 2))


const get_user_name = (email) => {
    return email.slice(0, email.indexOf("@"))
}
console.log(get_user_name("ryan.fadhilah@gmail.com"))