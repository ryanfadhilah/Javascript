let player_one = "rock"
let computer = "scissors"

switch (player_one) {

    case computer:
        console.log("tie game")
        break;


    case "rock":
        if (computer === "paper") {
            console.log("computer wins")
        } else {
            console.log("player_one wins")
        }
        break;

    case "paper":
        if (computer === "scissors") {
            console.log("computer wins")
        } else {
            console.log("player_one wins")
        }
        break;

    case "scissors":
        if (computer === "rock") {
            console.log("computer wins")
        } else {
            console.log("player_one wins")
        }
        break;


    default:
        console.log("error")
        break;
}

