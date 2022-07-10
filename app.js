let firstName;
let age;
let icecream;

function askName() {
    let firstName = prompt("What is your first name?");
    console.log(firstName);
    document.write(firstName + ", welcome to a little sneak peek on my life!");
}

askName();

function customMessage(){
    let message = "";
    if (firstName == "Jason"){
        message = " sup my bestie, mr. jason cameron lee.";
        document.write(message);
    } else if (firstName == "marcus"){
        message = " marcus bad, marcus so so bad!";
        document.write(message);
    } else if (firstName == "natalie"){
        message = " nat so so stinky <3.";
        document.write(message);
    } else if (firstName == "cam"){
        message = " nat is mine, camspy muahahhahahaha.";
        document.write(message);
    } else {
        message = " hehe."
        document.write(message);
    }
}

customMessage();

function askAge(){
    let age = prompt("How are old are you?")
    console.log(age);
    document.write(" you are " + age + " years old.")
}

askAge();

// function askIcecream (){
//     let icecream = prompt("What is your favorite icecream flavor?")
//     console.log(icecream);
//     document.write(" that icecream flavor is foul.")
// }

// askIcecream();

// function printName(givenName) {
//     console.log("this is my name:", givenName);
// }


let userAnswer;
function favNum(){
    // let userAnswer = prompt("Guess what my favorite number is between 1 to 10.");
    while (userAnswer !=2){
        userAnswer = prompt("Guess what my favorite number is between 1 to 10")
    if (userAnswer == 2){
        alert("You are correct!");
    } else {
        alert("Wrong, nice try!")
    }
    }
}
favNum();

function ratePage(){
    let userNumber = prompt("How was your experience on my page? 1-5");
    for (let i = 1; i <=userNumber; i++){
        document.write("<img class= 'star-pic' src= 'star.png' />" ); 
    }
}
