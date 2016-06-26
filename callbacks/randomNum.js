/*
* Think of callbacks as a set of instructions 
* It determines how it is going to handle (respond) to a client request to a particular endpoint 
* Below is the flow of code of how this works
*/

function add(a, b) {
    return a + b;
}

function addTheSameNumbers() {
    console.log(3 + 7);
}


function getAsyncNumbers(callback) {
    // STEP 2: this is the second thing that happens that it fires off setTimeout with a timeout of 500ms 
    setTimeout(function () { //anon function is execueted once successful
        
        //STEP 3: this is the third thing that happens we are setting first number and second number as a 
        //random number between 1 and 100
        var firstNumber = Math.floor(Math.random() * 100);
        var secondNumber = Math.floor(Math.random() * 100);

        //STEP 4: this is the fourth thing that happens where we are setting the numbers for addAndLog 
        callback(firstNumber, secondNumber);
    }, 500);
}

function addAndLog(a, b) {
    var sum = add(a, b);
    //FINAL STEP: this is the final thing where we sum the two numbers that we set in getAsyncNumbers(); 
    // then log it into the console
    console.log(sum);
}

//STEP 1: this is what gets fired off first 
//functionName(callback = addAndLog);
getAsyncNumbers(addAndLog);
