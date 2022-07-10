let firstName = prompt("What is your first name?");
console.log(firstName);
document.write(firstName + ", welcome to a little sneak peek on my life!")

function customMessage(){
    let message = "";
    if (firstName == "Jason"){
        message = " sup my bestie, mr. jason cameron lee."
        document.write(message);
    } else if (firstName == "marcus"){
        message = " marcus bad, marcus so so bad!"
        document.write(message);
    } else if (firstName == "natalie"){
        message = " nat so so stinky <3."
        document.write(message);
    } else if (firstName == "cam"){
        message = " nat is mine, camspy muahahhahahaha."
        document.write(message);
    }
}
let age = prompt("How are old are you?")
console.log(age);
document.write(" you are " + age + " years old.")

let icecream = prompt("What is your favorite icecream flavor?")
console.log(icecream);
document.write(" that icecream flavor is foul.")