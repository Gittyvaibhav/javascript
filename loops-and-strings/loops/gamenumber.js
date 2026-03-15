let gameNumber=23
let number = prompt("Enter game number:")
while(number!= gameNumber){
    number = prompt("Wrong number. Try again:");
}
console.log("Congratulations! You guessed the correct number.");