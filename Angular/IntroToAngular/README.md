#Introduction to Angular JS

#In this directory you find an intro to 
- Controllers
- Directives and Views 
- Services
- Routing

** Entire app is run through app.js on the root level by typing node app.js in a command prompt

# Javascript Patterns to be aware of

# Functions as Abstractions
- Purpose is to abstract away some sort of operation that needs to be performed
    - we do this by creating a work function and then assign it to a variable called work 
    - see image below 
    ![abstraction](public/img/functionsAsAbstractions.png)

# Functions to Build Modules
- Allows us to create objects that have data and methods attached to it
    - Can be seen from the client perspective
        - Someone who is going to use an object that exposes methods and data
    - see image below 
    ![modules](public/img/functionsAsModules.png)

# Functions to Avoid Global Variables (IIFE)
- Global variables are bad since they are very overridable and can be defined by someone else and vice versa
    - this should be avoided at all costs!!
- In the example above (functions to build modules) the variable, worker, is a global variable because it is defined outside of our code (function) 
- The example below shows there is a way to define all the code that we have and be able to execute without creating any global variables
    - worker and create worker are now defined inside of a Immediately Invoked Function Expression (IIFE)
        - This will allow us to have the function immediately invoke itself and kick off 
    - see image below 
    ![iife](public/img/functionsAsIife.png)