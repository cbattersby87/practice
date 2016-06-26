var prompt = require('prompt');
prompt.start();

// --- EXERICSE 1: PRACTICE WITH ANON FUNCTION ---

var friends = ["Mike", "Stacy", "Andy", "Rick"];

function findMeFriends(friends) {
    friends.forEach(function (eachName, index) {
        console.log(index + 1 + ". " + eachName);
    });
}

// findMeFriends(friends);

// --- EXERCISE 2: USING A CALLBACK FUNCTION ---

//initialize the variables to be global 
var allUserData = [];

function logStuff(userData) {
    if (typeof userData === "string") {
        console.log(userData);
    } else if (typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
}

function getInput(options, callback) {

    //push adds new items to an end of an array 
    allUserData.push(options);

    //lets double check to make sure callback is indeed a function 
    //this would be the second parameter, logStuff, in our getInput function 
    if (typeof callback === "function") {
        callback(options);
    }
}

//first param is options, second param is callback which is our function logStuff 
// getInput({ name: "Rich", speciality: "Javascript" }, logStuff);


// -- EXERCISE 3 - MAKE A EMOJI CALLBACK --

function emojiGenerator(emoji, title) {
    console.log("The " + emoji + " means... ");
    console.log(title);
}

//Here the function, getUserInput, will be our callback function that we defined above
function getUserInput(emoji, title, callback) {
    if (typeof callback === "function") {
        callback(emoji, title);
    }
}

//Then we will call the getUserInput and pass emojiGenerator as our callback 
// getUserInput(":-)", "This is a smiley face", emojiGenerator);


// --- EXERCISE 4 - MAKE A CALLBACK WITH A TERNARY IF/ELSE ---

function rollerCoasterSafteyCheck(weight, callback) {
    callback(weight);
}

function rollerCoasterRequirements(weight) {
    var stop = false;

    weight > 90 ? (
        console.log("You may hop on the roller coaster, enjoy the ride!!")
    ) : (
            stop = true,
            console.log("You may NOT get on the roller coaster, you will fly away!!")
        )
}

prompt.get({
    properties: {
        weight: {
            description: "What is your weight?"
        }
    }
}, function (err, result) {
    rollerCoasterSafteyCheck(result.weight, rollerCoasterRequirements);
});






