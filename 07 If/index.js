let cust_is_banned = true
let soup = `chicken soup`
let reply = ``

if (cust_is_banned) {
    reply += `sorry no ${soup} for you`
} else if (soup) {
    reply += `here is your ${soup}`
} else {
    reply += `sorry, we ran out of ${soup}`
}

console.log(reply)