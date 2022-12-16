/*
JS The Definitive Guide
JS Enlightenment

C/C++/java, compiled, 
takes code and produces a machine efficient representation of it, 
usually optimized for runtime performance 
scripting languages, interpreted, browser runs each line as it get it, 
less priority to runtime performance, more towards prototyping/interactive coding, 
flexibility, 

JS is a scripting language, with performance close to that of native compiled languages.
JS is also used to script applications like Adobe Photoshop, OpenOffice and Google Apps, 
and is even used as a server-side programming language.

JS 1.0 (Netscape) then Livescript/Javascript (addition ability) 1995
JS 1.3 ECMA script 2000
2005 google maps with JS
JS 1.8.5 2012



functions, reusable, makes code manageable


HTML, markup text
CSS, set of rules
JS, statements, case sensitive






console.log(
*/

//setTimeout (functionName, 5000);


var dog = { name: "Rover", weight: 35 };
//console.log(dog.weight);

// (Math.PI) * X;


/*    Variables and naming    */
/*/////////////////////////////////////////////////////////////////////////////*/
//var winners; //undeclared variable, value of undefined
//var winners = 2(numbers); or "name"(strings) or false or true(boolean values)

/*name variables beginning with a letter, _ , $ and be aware not to use reserved names(i.e keywords) */
/* CamelCase */
/* be consistent in choosing ' or ", 
white space does not matter between code*/

////var name = price - price * ( discount / 100 );
//statement, the whole line
// name, the variable
// = assignment
//expression, the right side

//"text" + "concatenate" + StringOrNumberValueHere


/* gives true or false */
/*
age < 14            
cost >=3.99         
animal == "bear"    
*/

/*p56

/*/////////////////////////////////////////////////////////////////////////////*/

/*
while, if

document.write ("Another scoop <br>");   //block
alert("scoops > 5");
= set value , == equality test

*/

//NOTES
//console.log(1000+"108"); //108 is a string, never gets added
//primitive types, that is, numbers, strings and booleans.
//HTML put <script> in html end of body, so page can load the DOM before JS
//HTML <script type="text/javascript" >
//a script tag with a file reference cant be used for code lines, make another script tag

//Number(true) gives 1 , string of numbers /boolean converter
//first 0 is avoided
//Number(x) == === 2; true/false
//+'string of numbers'; does the same thing

//parseInt('32px'); // 32 , takes integers, 
//also has a second parameter numerical type

//let name = "Sheriff Koder" > SheriffKoder
//let name2 = name.replace(/\s+/g, ''); // replace space with no input


//let scoops = 5;

/*
while ( scoops > 0 ) {                        //conditional   
    document.write ("Another scoop <br>");   //block
    scoops = scoops -1;
}                                            //loop again while conditional true
document.write("Icecream finished!");          //when loop finishes, continue here
*/

/*
if ( scoops >= 5 ) {
    alert("scoops > 5");
}
else if ( scoops < 3 ) {
    alert("scoops getting low");
}
else if ( scoops < 2 ) {
    alert("scoops getting low");
}
else {
    alert("scoops available");

}
*/

/*56-65,65-79,79-87 18/09 30p/30p / 87:logic 

/*/////////////////////////////////////////////////////////////////////////////*/


/*87-91, new file*/

//console.log(function); adds to the calculations for the file


//let twentytwo_09 = prompt("enter value"); // returns null if cancelled

/*
check if valid input  
if (guess < 0 || guess > 6) { 

> logical operators, returns true or false
    || or
    && and
    ! not (results in true if the expression is false)

> boolean operators used in boolean expressions
  which results in true or false

    ==      if equal in value to (comparison)
    ===     if exactly equal in value to
    <=      less than or equal
    >=      greater than or equal
    !=      not equal to


if (guess == location1 || guess == location2 || guess == location3)

if ((user_inputx !=NaN) && (user_inputx > 0) && (user_inputx <= 6) ) in range
alternative look
if (user_inputx < 0 || user_inputx > 6) //out of range , else do

if (inStock == true && (onSale == true || price < 60))
    true/false (true/false)


var kb = 1200;
var x = ( kb > 1000 ); //x = true
if (x); //true?


Math.random(); 0 - > 0.99


/*/////////////////////////////////////////////////////////////////////////////*/
/*
124-148

function name (parameter) {
    body;
}

////////////////////////
//passing to functions//

var name = "rover"; or
bark("rover" , 20, 50); 
//50 is ignored, if put as "20" treated like a number
bark("rover"); 
//weight is undefined

> function bark(name, weight)

bark ( name, 100/4, (name == "ashley") ) 
//can put numeric expressions, boolean returning true or false



//there are built in functions like alert, prompt
//a function can return values, do closures, and be used with objects,
//you define a function with parameters and call it with "arguments"


//pass by value//
let x = 1;
function doIt(x) {
 x = 2;
}
console.log(param); // 1, because the parameter is used/changed locally
//pass by value, the parameter takes a copy and the parameter is only what changes



//functions can return

function fun () {
    let x = 1;
    return x;
}
var y = fun(); //y is 1

//tracing the flow of execution


//variable declared inside a function: local
used only in the function
//variable declared outside a function: global
used anywhere in the code

functions without return, has a value of undefined


//variable shadows
//undeclared variable inside a function,
will be global and used outside after the function's call
and if duplicated without declaration will overwrite the global value
but if name duplicated and declared, it will overwrite inside the function only
//If you forget to declare a local variable using var, that variable will be global, which could have unintended consequences in your program
so be aware, shadow can change the new parameter and not the global


//let z = 5;
func();
function func () {
    z = 0; (first time undeclared mention becomes global )
    //let z = 0; (shadow)
    z = 1+2;
}
console.log(z); // 3, 5

// a good programming practice to use
local variables unless absolutely needed globals


*/
/*/////////////////////////////////////////////////////////////////////////////*/
/*

 JavaScript creates
all local variables at the beginning of a function whether you
declare them or not (this is called “hoisting”

you can put your functions anywhere in your JavaScript file.
because js passes two times over code
first pass, reads all the function definitions
second pass, begins executing codes

global variables, at top of code
keep functions in one place 
local variables at top of function


function setup(width, height) {
 centerX = width/2;
 centerY = height/2;
}
 
computeDistance(x, y, centerX, centerY) {
 var dx = x1 - x2;
 var dy = y1 - y2;
 var d2 = (dx * dx) + (dy * dy);
 var d = Math.sqrt(d2);
 return d;
}



/* Arrays */ /*

let array = []; //empty array, add later 

let array = ['a', 'b', 'c']; // positions 0, 1, 2
array[0]; // a
array.length; // = 3 positions, one more than the last index

var rand1 = Math.floor(Math.random() * words1.length);
if length is 5, it creates 0->4 remember?, exact positions

how many things in an array is determined by the memory of the computer
can put objects in arrays

[1, 2, “fido”, 4, 5]. 
what happens when you check to see if “fido” is greater than 2 ? be aware
try to keep types of values the same

array[-1] or [length+x] undefined


array = ['x','y'];
array.push('z');
now the array = ['x','y','z'];

array = [];
array[0] = 'a';
array[100] = 'b';
//this array has two values in it all other positions are undefined


148-176
*/

/*////////////////////////////////////////////////////////////////////*/
/*

For loops

for ( ;answer != "forty-two"; )  same as while ( answer != "forty-two")

i=i+1; same as i++;
post increment operator



176-203
/*////////////////////////////////////////////////////////////////////*/
/*

Arrays are a data structure for ordered data

The while loop is most often used when
you don’t know how many times you
need to loop, and you’re looping until a
condition is met.

to get the last item in an array
let i = array.length - 1 ;
var recent = array [i];

an undefined array is called, sparse array


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

Objects
make a list, 
separate by comma (the last comma is unsupported in old browsers)
{},
put var name =

make: chevy
"make": chevy
model: deville
year: 1960
color: red
    
let car = {

make: "chevy"
"make2": "chevy"
model: "deville"
year: "1960"
color: "red"

};

accessing a property 
car.make = "chevy";
car["make"] = "chevy"
car["ma"+"ke"] = "chevy"
var brand = car.make;



adding a new property any place inside the code
car.needsWashing = true;

removing a property
delete car.needsWashing
removes the property and its value
(returns true wether its in the object or not, only if protected will return false 

variables given names hold a reference/pointer to the object's address
var object // object in #2919
reference value



in functions we pass a copy of value for vars 
but here pass a copy of the reference 
in vars changes happen to the parameter
but here any changes do happen to the original object
function FUN ( object_input ) {

    if (object_input.answer == true ) {

    }

}

//Example//
function makecar () {
    var brand = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    
    var rand1 = Math.floor(Math.random() * brand.length );

    var car = {
        brand: brand[rand1],  //each function call it creates a different brand
    };

    return car;
}

var rand5 = Math.floor(Math.random() * 5) + 1;
//to have from 1 to 5 instead of 0 to 4



// Object functions //
// letting an object worry about how it gets things done.
let car = {

            advice: ["yes", "no", "maybe", "not a chance"],

            drive:  function () { //name of function/method is the name of the property
                                if (this.keyOn) {
                                    alert.log("zoom zoom");
                                }
                    },

            start: function () {
                        this.keyOn = true;   
                    },

            //use the object property with referring to the object by this.
                    
            stop: function (parameter) {
                    this.keyOn = false;
                    this.output = parameter + this.advice.length;
                    //output value is changed every function call
                    this.restart();
                    },


};

accessing a property function, called method
outside object > car.drive();
inside object > this.drive();

this. is a keyword


220-242
/*////////////////////////////////////////////////////////////////////*/
/*



//looping through each prop/property in chevy/object
for (var prop in objectX) {
    console.log (prop + ": " + objectX[prop]);
}

>> code looking like this
fiat.addFuel(2);
fiat.start();  to make drive work
fiat.drive(); fuel-- , works relevant to fuel
fiat.drive(); fuel-- , works relevant to fuel
fiat.addFuel(2);
fiat.drive(); fuel-- , works relevant to fuel
fiat.drive(); fuel-- , works relevant to fuel
fiat.stop();   drive condition not met, not work


with JSON you can exchange javascript objects with other applications

built in objects: Date, Math, RegExp(patterns in strings), Document, Window, Console 

console.log();
document.getElementById
access.innerHTML
object.method();

242-254
/*////////////////////////////////////////////////////////////////////*/
/*

var element_1 = document.getElementById("code9");
var code = element_1.innerHTML;
code = code + "text string";

document > represents the entire page in browser and contains the complete DOM
ask the document to

the web page is a "Data structure"
js can access, read, change content or structure of the page


page load, it creates the objects that represent the markup
these objects are stored in the DOM
javascript interact with the DOM to get access to the elements
and browser updates dynamically


> getElementById
grab an element from the dom, return the element object that has that id
if element not exist it returns null


change/read/add/remove attribute, change content, get content

getElementsByClassName
getElementsByTagName // p , div etc
returns collection of elements

add the code/script tag at the end of the html page
to execute the code only after the page is fully loaded

The window object will call any function you’ve
assigned to its onload property(event), but only after the page is fully loaded
//not calling the function; just assigning the function value 
to the window.onload property.


callback, also known as an event handler
 
function to object knows about event
  call function       <    object notified and call             <  occurs 


p294

*/
/*////////////////////////////////////////////////////////////////////*/
/*







let planet = document.createElement("div");

//planet.setAttribute("class", "redtext");
//if the attribute doesn't exist a new one will be created in the element

let class2 = planet.getAttribute("class");
//if attribute does not exist, null is returned



//can create, add, remove, move in elements in the dom

//objects supplied by JS like Math.Object
//objects supplied by the browser like document object

// undefined
returned from a function when there is no return statement.
variable haven't been assigned a value
array item value that doesn't exist in a sparse array
value of a property that doesn't exist or deleted
value that can't be assigned to a property when create an object


//check variable/array etc. declaration with undefined, handy
// typeof (undefined);  // undefined
// typeof (Array)       // object
// let value = null;    
// typeof(null)         //object

//undefined, not defined yet
//null definition, doesn't exist yet

//if ( x == undefined ) { get the customer number }
//if (weather != null)  { create content} 

// NaN != NaN, typeof(NaN) is number
// but NaN as its not a value, use if (isNaN(myNumber) ) //true/false
//NaN is a number cannot be represented 


var a = 0/0; //NaN 
var b = 10/0 is infinity (exceed upper limit on computer floating point numbers)
var c = "food" * 1000; //NaN
var d = Math.sqrt(-9); //NaN

let e = Infinity - Infinity; //NaN
let f = Infinity + Infinity; //Infinity

console.log(d);



//// equality ////
if (99 == "99") {
    console.log("number equals a string"); 
}
//JavaScript converts the string to a number (if possible).
//and then tries the comparison again, 

//when you compare different values that have different types
//javascript will convert one type in order to compare them

// 99 == "vanilla" , vanilla converted to NaN
// 11 == true , true converted to number

// "1" == true , string to boolean
// "1" == 1, boolean is converted to 1
// 1 == 1,  then string is converted to 1
// true, then comparison happens

// undefined == null // both values represent "no value"
// null != null

// empty string equates to 0 
// 1 == "", // equates to 1 == 0 //false

//"true" == true;       //false
//true === (1 == "1")   //true
//true === (1 === "1")  //false because 2nd condition is false, not strictly equal
// (1.2 == "1.2")       //true, float comparison

// 99 <= "100"      //true
// 0 < true         //true converted to 1
// !== and !===     are correct


//as we compare letter strings with unicode
// "b" is smaller than "m"
//if first letters are equal move to next letter for comparison


//p321

//// strict equality ////
/*
two values have the same "type" and the same "value"


var addition = 1 + "3";
// equals 13, number converted to string
//but in other operations, strings are converted to numbers like equality

var order = 1 + 2 + "pizzas"; 
//3pizzas because operation from left to right

// -true is -1
true + "hey";       // truehey

//object == object       // equality look for reference, remember ?
//so when changing an object value, we are changing its reference, like what happened in resetting clever prog cards



//truthy and falsely//

//quite false examples yet cause no errors
var testThis; //undefined
var testThis = document.getElementById("elementNotExist"); //null

if (testThis) //null or undefined 
if (0)
if ("")
if (NaN)

//null,undefined, 0, nothing, NaN .. otherwise is quite true
//i.e run and cause no error

if ([])
if (1)
if (string)




/////////////////////////////////
//p336

vars are permeative
objects have states and behaviors / properties and methods
string are permeative and can be an object when called in a string-method


 for(var i = 0; i < input.length; i++) {
 if (input.charAt(i) === "@") {             //at location


 var phrase = "the cat in the hat";
var index = phrase.indexOf("cat, 0");       // location of, starting 0
//returns -1 if not found


var val = data.substring(5, 10); //returns string between 5 and 9
var val = data.substring(5);     //returns string from 5 onwards

let string = "we,are,here"
let new_String  = string.split(",");      //returns an array of the string splits
console.log(new_String);
result = ["we", "are" , "here"];


    let string = "we,are,here"
    let new_String  = string.split(",");      //returns an array of the string splits
    console.log("the result" , new_String); // comma to keep it an array not string

text.toLowerCase();
text.lastIndexOf("text");
text.replace("text");
console.log(text.slice(1,3)); //takes out from 1 to 2


let numX = "123-4567";

if ( numX.length !=8|| isNaN(numX.slice(0,3)) || numX.charAt(3)!="-"  || isNaN(numX.slice(4,8))      ) {
    console.log("not accepted");
}
else {
    console.log("input accepted");

}
//split - , isNaN


//primitives are numbers, string, boolean and undefined
//anything else is an object

typeof typeofs
var test1 = "abcdef"; //string
var test2 = 123; //number
var test3 = true; //boolean
var test4 = {}; //object
var test5 = []; //object
var test6; //undefined
var test7 = {"abcdef": 123}; //object
var test8 = ["abcdef", 123]; //object
function test9(x){return "abcdef"}; //function
var test10 = new test9(x); //object
var test10 = null; //object

//null means no object
//expecting an object and this object does not exist

//p358

/*
let x21s = "1" - "1"    ;
var testThis = document.getElementById("elementNotExist");

    if ("hey") {
        console.log( "ok");

    }
    else {
        console.log( "not ok");

    }

let text = "there is no pain without gan";
//console.log(text.slice(1,3)); //takes out from 1 to 2


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


/* 
Whenever there’s an event, there is an opportunity to handle it.

kinds of events:
page loaded
track of clicks
form submits
keyboard presses
focus
mouse movement
clock, timers, timed events
additional data retrieve
page resized or scrolled
network based events
timer events

timeStamp
touches     //how many fingers touched the screen

mouse click, 
clientX, clientY > browser window
screenX, screenY > user's screen
pageX, pageY     > browser's page 



when an event occurs, its handler function is called

order of defining functions in js does not matter


image.src = "";     //set new source
image.onclick = showAnswer;
image.onmouseover
image.onload


click
keypress
mouseout
touchstart  //when touch and hold an element, touch devices

touch end
load
unload      //close browser or navigate away
resize

play        //when play a video
pause

dragstart   //when drag an element in the page, you'll generate this event
drop        //when drop an element been dragging

//reveal image on scroll
//mouse movement, create a drawing application right in the browser



API-specific events, like events generated by JavaScript APIs
including Geolocation, LocalStorage, Web Workers, and so on 
events related to
I/O: like when request data from a web service 
using XmlHttpRequest or web sockets
see Head First HTML5 Programming for more


*/

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* call all images, access the one clicked and unblur*/

window.onload = pageLoadedHandler;

pageLoadedHandler();
/*1.A*/
function pageLoadedHandler () {

    var image = document.getElementsByTagName("img");

    //console.log(image[0].id);

    for (let i=0; i<image.length; i++) {
    
        image[i].setAttribute("class", "blur");
        image[i].onmouseover = showAnswer;

    }

}

//TagName returns a nodeList(DOM Object), similar to an array, 
//the object that represents the image in the DOM
//document.getElementbyId() same as the nodeList[0]

//event object is passed to the click handler
//what element, what time, 

//tag name nodeList(DOM Object), event function para.target, direct.setattribute

//queue of events, so keep them short and efficient for speed
//one event at a time


/*1.B*/
function showAnswer (para) {
    console.log("im here");
    //console.log(para.target.id);

    //var image = document.getElementById("zero");
    let image = para.target;
    //newSrc = id + "jpg";

    image.setAttribute("class", "unblur");
    image.onmouseout = pageLoadedHandler;

    setTimeout(rotate, 2000, image);

}

function rotate (para) {

    para.setAttribute("class", "scaleX");
}

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/* on-click get the event's eventObj/para -  x/y coordinates */
//window.onload = init1810;

init1810();
function init1810 () {

    var map = document.getElementById("map");
    map.onclick = showCoords;

}

function showCoords (para) {
    var mapText = document.getElementById("coords");

    var x1810 =  para.clientX;
    var y1810 =  para.clientY;

    mapText.innerHTML = "Map coordinates: " + x1810 + " , " + y1810;

}

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


/* stopwatch using "setTimeout" and repeating function with setInterval */
let counter = 0;

/* function called every 1000ms, count+, when count reaches 5, it stops */
function timerHandler () {
    console.log("Heeeey ! time up");
    counter++;
    console.log(counter);

    if ( counter >= 5 )  {

        clearInterval(intervalReturnedObject);
    
    }
    

}

//setTimeout(timerHandler, 1000); //stop watch
//a reference to a function (timerHandler) passed to another function (setTimeout)
//returns 1
//example of passing a function to function

//let intervalReturnedObject = setInterval(timerHandler, 1000); //every 1000ms, call the function
//clearInterval(intervalReturnedObject); //stops the interval timer
 
/* we can use window.setTimeout, but as the window is a global object
we can omit the object name and just use set Timeout

can create as many handlers as wanted, the browser keeps track


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

window.onresize = rotate;
//onresize, will do this function

window.onresize = function () {

        console.log("resized window");
}


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/



    //so browser go through html, creates the dom
    //then when go to js go through functions declarations ..?


    //x = new Function_name
    //x = Function_name(vard)


    ////////////////////////////////////////////////////////
    //function name () {}
    //**function declaration**
    //does not evaluate a function reference, has name
    //read "before" code evaluated
        //browser first code pass look for declarations to take references from to put to variables
        //before anything else 
        //then stored away for later use, by making its name a variable to hold its reference

        //on second pass, the declaration is skipped
//4    //the condition variable has been set to true for example* var ordering imp in case of let remember
        //now when the function is called, we already have its reference *from first code pass
            //the function is brought, then pass a copy of the parameter and execute

        //x = new Function_name
        //declaration, reference to a variable in the function name



    ////////////////////////////////////////////////////////
    //var x = function ()
    //**function expression**
    //reference to a function, no name
    //read "while" code evaluated, runtime, so position is important not to call before its statement
    //expression because evaluates to a function reference 
        //when pass through code in its second time, going through variables
        //it declares the variable
        //and stores the function in a reference
        //then assign the reference to the variable

        //4        

        //x = Function_name(vard)
        //expression, by yourself the reference to the var, 


    ////////////////////////////////////////////////////////
    //work the same way because references are references 
    //no matter the method be it declaration or expression



    //can pass to functions, return from them, assign to variables
    //functions are values, can be assigned to variables




    ////////////////////////

    var addOne = function (x) {
                    return x+1;
                };



    var six = addOne;
    var seven = addOne(6);


    console.log("here " + six(5));
    console.log("here " + seven);


    console.log(addOne);    //the whole function
    console.log(typeof addOne); //function
    
    /*////////////////////////////////////////////////////////////////////*/
    /*////////////////////////////////////////////////////////////////////*/
    //using a function in another function


    function output2210 (inputFunction) {

        //let x2210 = prompt("enter a number and it shall be returned");
        //console.log("inputFunction " + inputFunction(Number(x2210)));

    }

    //output2210(addOne);

    ////////////////////////


    

    /*
    first class values, numbers, booleans, strings, objects
    and now functions also

    assign a value to a variable
    pass/return value to/from a function
    store in objects or arrays


    */

    /*////////////////////////////////////////////////////////////////////*/
    
    var passengers = [

        {name: "Jane Doloop", paid: true, ticket: "businessclass" },
        {name: "Dr.Evel", paid: true, ticket: "firstclass"},
        {name: "John Funcall", paid: false, ticket: "businessclass"}
    ];

    //.paid
    //onNoFlyList

    let Fly =  processPassengers (passengers, checkNoFlyList);
    
    function processPassengers (passedPassengersList, testFunction) {

        for (var i=0; i < passedPassengersList.length; i++) {

            if (testFunction(passedPassengersList[i])) {
                return false;
            }
        }

        return true;

    }

    console.log("Fly is " + Fly);



    function checkNoFlyList (passedPassenger) {
        return (passedPassenger.name === "Dr.Evel"); //in case of dr evel will return true, so will false the parent function
    }

    function checkNotPaid (passedPassenger) {
        return (!passengers.paid); // if passenger paid, return false, so in parent function return true
    }


    /*////////////////////////////////////////////////////////////////////*/
    /*////////////////////////////////////////////////////////////////////*/
    //returning a function from another function

    serveCustomer(passengers);

    function serveCustomer (passedPassenger) {

        //create drink order
        var Drink = createDrinkOrder (passedPassenger); //returns a function

        Drink(); //call the returned function

        //get dinner

        //pickup trash


    }

    /* if this, then the returned function will be X  and return its address*/
    function createDrinkOrder (passedPassenger) {

        var orderFunction;  // a var to place place the conditioned the function in

        if (passedPassenger.ticket === "firstclass") {
            orderFunction = function () {
                console.log("First Class Order");
            };

        }
        else {
            orderFunction = function () {
                console.log("Business Class Order");
 
            };
        }

        return orderFunction; //return a function with a specific behavior

    }



    function addN(n) {

        var adder = function(x) {
                       return n + x;
        };

        return adder;
       }

       let x22101 = addN(2); //returns function which returns 2+x
       console.log(x22101(1));  //set x, get the return







    /*////////////////////////////////////////////////////////////////////*/
    /*////////////////////////////////////////////////////////////////////*/


       var numbersArray = [60, 50, 62, 58, 54, 54];

       numbersArray.sort(compareNumbers);

       console.log ("numbersArray " + numbersArray);


       /* function related to sort method
       swap num1/2 in function for descending */
       function compareNumbers (num1, num2) {

            if (num1 > num2) {
                return 1;
            }

            else if (num1 === num2) {
                return 0;
            }

            else if (num1 < num2) {
                return -1;
            }

       }

       /* { return num1-num2; } */

    /*////////////////////////////////////////////////////////////////////*/
    


    var products = [ 
        { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
        { name: "Orange", calories: 160, color: "orange", sold: 12101 },
        { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    ];

    let text2310 = "";
    for (i=0; i< products.length; i++){
        text2310 += products[i].name + " ";
    }
 
    console.log ("products " + text2310);

    //////

    //products.sort(compareSold);
    products.sort(compareName);

    let text2310_1 = "";
    for (i=0; i< products.length; i++){
        text2310_1 += products[i].name + " ";
    }
 
    console.log ("products " + text2310_1);


    /* will compare two inputs of an array
    and BASED on their .sold property */
    function compareSold (colaA, colaB) {

         if (colaB.sold > colaA.sold) {
             return 1;
         }

         else if (colaB.sold === colaA.sold) {
             return 0;
         }

         else if (colaB.sold < colaA.sold) {
             return -1;
         }

    }
    /* or just return num1-num2; */


    /* can also arrange by letters */
    function compareName (colaA, colaB) {

        if (colaA.name > colaB.name) {
            return 1;
        }

        else if (colaA.name === colaB.name) {
            return 0;
        }

        else if (colaA.name < colaB.name) {
            return -1;
        }

   }



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* asynchronous functions, closures

because some functions are used only one time
we can use it without name, thus cleaner code


anywhere you might put a function reference(name)
you can put a function expression


    window.onload = function () {

    };


    setTimeout ( function () {}, ms   );

Local function to a function
placing a function inside another function is just a matter of scope
with regards to it being declaration or expression (defined after function is evaluated)



/*////////////////////////////////////////////////////////////////////*/
/*
/*lexical scope
rules for scoping are based on the structure of code, not dynamic runtime


/* Function Environments
when a function is declared, all its variables are stored in an environment
a function returns with the environment attached to it,
contains any function locals and parameters
any un-local and used variable in the function is a free-variable

//contains the actual env, so changes are permanent
//any changes happen in the env, affects the nested items


/*closing a function
when a function has its free-variables provided and and environment that binds these variables together
it is a closed function
named function reference + free variables + environment of variable = closure





var justVar = "global";

function TestFunction () {

    var justVar = "function local";

        function inner () {
            return justVar; //whenever inner is returned, "function local" is in the environment
        }

    return inner(); 1)
    return inner;   2)    
}

1)
var result = TestFunction();   //result local

        var result = inner();
        //the function is called within Testfunction justVar local is returned

2)
var innerFunction = TestFunction();  
var result = innerFunction(); //result local


        var innerFunction = inner; thus
        //a reference to a function + environment is returned


//incase of inner(), the function is returned 


then we can create a chain of environments of all the nested functions from inner to outer
a variable is found from the most nested to the first layer nesting, otherwise its global


whenever reference to a function that has free variables, also a closure exists







*/



/* using function environment to make a counter without global */
function makeCounter() {
    var count = 0;

    function counter() {
        count = count + 1;
        return count;
    }

    return counter; /* wake the counter within its env */

   }


   var doCount = makeCounter(); /* counter here */
   console.log(doCount); /* counter in its env */
   console.log(doCount); /* counter in its env */
   console.log(doCount); /* counter in its env */


/////////////////
function makeCounter() {
    var count = 0;

    return {                       //opened an object, returns a method
        increment: function () {  // object method
            count++;
            return count;         //increment returns the count
        }
    }

   }


   var doCount = makeCounter(); /*returns an object to be used */
   console.log( doCount.increment() );
   console.log( doCount.increment() );
   console.log( doCount.increment() );

   
/*
   button.onclick = function() {
    count++;
    div.innerHTML = message + count + " times!";
    };
    //three free variables, message, message, count;

   




/*closure from a nested function */ 
function makeTimer ( doneMessage, n1, n2) {
        /*
        setTimeout (function(){ alert(doneMessage); }, n1);
        //function with free vaiables, has env, Timeout keeps these
        //closure created before the calling
        //


        setTimeout (function () { doneMessage = "hmm";}, 1000);
        //doneMessage = "hmm";
        //changes the value in the env used by setTimeout after 1000

        setTimeout (function(){ alert(doneMessage); }, n2);
        //so now output is hmm
        */
}


makeTimer("done!!", 500, 5000);

/*********************//*
if example about function declared outside 
function handler (){ 
    alert(doneMessage); 
}

function makeTimer ( doneMessage, n) {

        setTimeout (handler, n);
        //handler has no env created?
}
*//*********************/

    function makePassword(password) {

        return function (passwordGuess) {
            return (passwordGuess === password);
        };
    }


    //var tryGuess = makePassword("secret"); 
        //secret is stored in env in password variable
        //tryGuess is the function guess with password secret

    //console.log("Guessing 'nope': " + tryGuess("nope"));
        //nope === secret ?

    //console.log("Guessing 'secret': " + tryGuess("secret"));




    
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/



/* Variable functions

//x = new Function_name
//x = Function_name(vard)

function Duck (sound) {

    this.sound = sound;
    this.quack = function () {
                    console.log(this.sound);
                }
}


var toy = new Duck ("quack"); // new copy of Duck is named accessed by the name toy
console.log (typeof toy); //object !!
console.log (toy instanceof Duck); //true

console.log(Duck.sound); //undefined
console.log(toy.sound); //quack

/////////////////////////////////////////

/*prototype adds a new property to an object on the fly 
object.prototype.name = value
*/

function Person (first, last, eye) {

    this.firstname = first;
    this.lastname = last;
    this.eyecolor = eye;
}

Person.prototype.nationality;


const myFather = new Person ("john", "doe", "blue");

myFather.nationality = "english";
console.log(myFather.eyecolor);

/*new Function local variables = const */





/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/*
object literal previously used
now we learn object constructors
design blueprint
//good for reusing object models

similar to a function that returns an object

can use the constructor like any function
but it returns by default the this's
so any other kind of return, will not output the object
? as said in the book

//some extra things happen when keyword "new" is used
//when using new, value of this is set to the new object

//next when we call object methods, ths will refer to the method's object




*/

let barkTone = function () {
    console.log("Woof Woof");

}

//object constructor
//conventionally first letter is capital
function Dog (name1, breed1, weight1, BarkFunctionInput) {
    this.name = name1;
    this.breed = breed1;
    this.weight = weight1;
    this.bark = function () {
                    console.log("Woofer Woofer");
                }
    this.barkFunc = BarkFunctionInput;

}

var fido = new Dog ("Fido", "Mixed", 38);
var dido = new Dog ("Dido", "Ger", 37, barkTone);

var dogs = [fido,dido];


//console.log("Dog name " + dogs[1].name);
//console.log("Dog bark " + dogs[1].bark()); //prints return ?
//console.log("Dog bark2 " + dogs[1].barkFunc()); //this ex before the line above ?


//////////////////////////////////

//object constructors used simultaneously
function widget (name1, size1, view1) {
    this.name = name1;
    this.size = size1; //widget of size 300x300px
    this.view = view1; //widget in desktop or sidebar
}

function release (date1, targeted1) {
    this.date = date1;
    this.targeted = targeted1;
}

var weather = new widget ("weather", "300x300","sidebar");
var update = new release ("26/10", weather);

console.log("targeted " + update.date);
console.log("targeted " + update.targeted);//
console.log("update " + update.targeted.name);
console.log("update " + update.targeted.size);
console.log("update " + update.targeted.view);


/*////////////////////////////////////////////////////////////////////*/
/*27/10*/


/*
new first creates a new object before assigning it to this
new creates a new object

new is an operator, operates on its operands, this case a function call
the new object created is returned from the constructor

*/


//can pass an object and use its properties as inputs
function Car (para) {
    this.make = para.make;
    this.model = para.model;
    this.year = para.year;
    this.color = para.color;
    this.passengers = para.passengers;
    this.convertible = para.convertible;
    this.mileage = para.mileage;
    this.started = false;
    this.start = function() {
                    this.started = true;
                };
    //rest of the methods here
   }



//var cadi = new Car ("GM", "Cadillac", "1955", "tan");

var cadiParas = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan"
}

var cadi = new Car (cadiParas);

console.log("cadiPara >> " + cadi.make);
console.log("cadiPara >> " + typeof cadi); //object

//we cant know the object is type car, but can know its constructor

if (cadi instanceof Car) {
    console.log ("Cadi is a Car");
}



///////////
/*
if dogCatcher (dogs[i]) {
}

dogCatcher (obj) {
    if (obj instanceof Dog) {
        return true;
    }
}




/*////////////////////////////////////////////////////////////////////*/
//object after being created by a constructor it can be altered
//adding properties or methods to a specific object
//and still an instanceof Car constructor

cadi.avgspeed = 130; //avg speed did not exist before

    console.log("Cadi avg speed " + cadi.avgspeed);

delete cadi.avgspeed;   //remove

    console.log("Cadi avg speed " + cadi.avgspeed);



cadi.driver = function (person) {       //add a function
    return (person === "Bob");          //return true if bob = bob
};

var right_owner_check = cadi.driver("Bob");

    console.log("Cadi check driver bob " + right_owner_check);



/*////////////////////////////////////////////////////////////////////*/
/*
//28/10

javascript comes with some objects assisting in
date, time ,patterns in text, 


*/

////Date and its methods
let now = new Date();       //full date
console.log("now " + now);

console.log("now " + now.toString());
console.log("now " + now.getFullYear());
console.log("now " + now.getDay());

//setting a variable of type Date, new Date
let new_date = new Date("Oct 30, 08:03 pm, 2022 "); //no order
console.log("now " + new_date);


////Array and its methods

let emptyArray = new Array();               //array with length of zero
emptyArray[0] = "1";
emptyArray[1] = "3";

console.log(  emptyArray.reverse()  );      //reverse the array
console.log(  emptyArray.join(" - ")  );    //in a string form separated by _-_
//works on [] array and new array()

//let n = numberOfWidgets;
//let emptyArray = new Array(n);               //array with length of zero
//so can set the array by a defined number


////every, takes a function, 
//tests each value of the array, to see if the function returns true or false
//if true for all array items, then it outputs true

let oddCheck = function (x) {
    return ( (x % 2) !== 0 );
}

var areAllOdd = emptyArray.every( oddCheck );  //oddCheck every passes x or function right away
console.log(areAllOdd); //true or false

//a look at JavaScript: The Definitive Guide to fully explore the array object. 
// var newObj = new Object();

// Error constructor

/*////////////////////////////////////////////////////////////////////*/
/*
29/10

//a constructor is a function


//object-model

use 1: save space as prototype is not copied with new
use2: can be added in runtime
prototype inherited/seen


prototypes are inherited
1) to have a general method not specific to definitions
prototypes are used
code looks when called in the object, if not found checks the prototype space

2) constructors duplicate definitions with each creation


//js secret, functions and arrays are bottom line objects
//so a constructor (function) can have a property like 
//.prototype to access its prototype section

//separate the specific and reused properties from the common reused properties 
using prototype


*/


function Dog(name, breed, weight) {
    this.name = name;       //[general property]
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function () {  
        //this still refers to the original object
        if (this.weight > 25) {
            console.log(this.name + " says Woof!"); 
        } else {
            console.log(this.name + " says Yip!");
        }
}


Dog.prototype.run = function() {
    console.log("Run!");
   };


var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

spot.bark();

//special function to spot, as it comes after it 
//will override the prototype due to its position in code
spot.bark = function () {               //[custom property]
    console.log(this.name + " says Woof!");

}

spot.bark();
fido.bark();

//any methods added even after objects are created, all objects will inherit the method/behavior
Dog.prototype.wag = function() {    //all inherit this
    console.log("Wag!");
   };



console.log (Dog);              //this contains the name,breed,weight
console.log (Dog.prototype);    //this contains the function etc.

//we recreate a new Dog with its names
//object does not have methods
//so when a method is called, and not found in the object
//then we look in the prototypes and invoke it


/*


*/

Dog.sitting = true;
Dog.prototype.sitting = false;  //sitting prototype, replaces object's

Dog.prototype.sit = function () {
    if (this.sitting) {                 //if spot.sitting
        console.log(this.name + " is already sitting");
    }
    else {
        this.sitting = true; 
        //new sitting is created which replaces the prototype
        //sitting added to the object itself, on the fly
        console.log(this.name + " is now sitting");

    }
}

console.log(fido.sitting);  //false
fido.sit();
console.log(fido.sitting); //true, for fido only


console.log(spot.sitting);  //false
spot.sit();
console.log(spot.sitting);  //true

console.log("species in object ? " + spot.hasOwnProperty("species"));
//species created in a prototype
//no species is not its own object, then its a prototype

/*////////////////////////////////////////////////////////////////////*/
/*


show dog prototype that inherits from the dog prototype

dog object to inherit from the dog prototype 


*/

//var aDog = new Dog(); //not care about specifics, just need inheritance from prototype

function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
   }

   ShowDog.prototype = new Dog();   //or aDog;
   //ShowDog.prototype.constructor = ShowDog; explained below
   ShowDog.prototype.league = "Webville";
   ShowDog.prototype.stack = function() {
        console.log("Stack");
    };

    //ShowDog.prototype.Dog.prototype.sit();
    //i.e
    //ShowDog.sit();

    console.log("////[][][]////");
    var scotty = new ShowDog ("Scotty", "Terrier", 15, "Cookie");
    console.log(scotty.league);
    console.log(scotty.species); //instance of dog prototype prototype
    scotty.stack();
    scotty.bark();  //instance of dog prototype prototype

   //showDog.name
   //showDog.Dog.sitting;

   let fido2 = new ShowDog("fido","35");
   console.log(fido2.sit());

   //output instance of both true, instance look for all objects we inherit from
   if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
   }
   if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
   }

   //////////////////////////////////////////
   //output Dog even though showDog first created it
   //console.log("Scotty constructor is " + scotty.constructor);

   //to fix that set it manually not cause confusion
   ShowDog.prototype.constructor = ShowDog;
   console.log("Scotty constructor is " + scotty.constructor);


   //confusion, the new dog will use the prototype of its constructor
   //if the new dog is defined before referring to the right constructor
   //default object with the ShowDog (constructor). 
   //And that object doesn’t have any of the Dog prototype’s properties.
   
   //assign the show dog prototype first after the constr. is created
   //and before anything added to the prototype or instances of showdog



    //////////////////////////////////////////
   //////////////////////////////////////////
   //root Object and overriding its methods

   function ShowDog2 (name, breed, weight, handler) {
    
        Dog.call(this, name, breed, weight);    
        //call reuse these parameters here to be processed
        //invokes Dog, passes it to use as this, 
        //pass ShowDog2 parameters to the Dog parameters
        this.handler = handler;


   }


   //dog has its own prototype, Object
   //every chain created will end in Object
   //because the default prototype for any instance created is Object
   //all objects inherit from Object

   //it implements a few key methods that are a cor part of the js object system

   // Object < Dog Prototype < ShowDog Prototype < ShowDog

   //methods inherited from Object like hasOwnProperty, toString
   //toString, string representation of any object


   //override methods in those objects, like toString
   //method of object, as all objects inherit from Obj, they can all use it
   //but it does not work, so we make a proto with its name for our use

    var dog3010 = new Dog ("fido", "38", "mixed");
    console.log(dog3010.toString());

    Dog.prototype.toString = function () {
        return this.name + " Dog weight " + this.weight;
    }
    console.log(dog3010.toString()); //override method 


    console.log("Dog is " + dog3010 );  
    //toString gets used whenever + concatenate is used on an object
    //in an attempt to convert object to a string

    //Avoid overriding these methods
    // constructor, hasOwnProperty, isPrototypeOF, propertyIsEnumerable
    //isPrototypeOF: check if an object is a prototype of another object
    //propertyIsEnumerable, if a property can be accessed by iterating through all the properties of an object

    //Ok to override
    //toString, toLocaleString, valueOf(gives the object you call it on)


    //////////////////////////////////////////
    //////////////////////////////////////////

    //extending built in objects
    //add new functionality to all instances/builtin objects of that prototype
    //add to the String prototype, 
    //cliche that returns true if the string contains a known cliche


    String.prototype.cliche = function () {

        var clicheV = ["lock and load", "touch base", "open the kimono"];

        for (var i=0; i<clicheV.length; i++) {
            var index = this.indexOf( clicheV[i] );
                if (index >= 0 ) {
                    return true;
                }
        }
            return false;

    };


    var sentences = ["I'll send my car around to pick you up.",
                    "Let's touch base in the morning and see where we are",
                    "We don't want to open the kimono, we just want to inform them."];

    for (var i = 0; i < sentences.length; i++) {
        var phrase = sentences[i];
        if (phrase.cliche()) {
            console.log("CLICHE ALERT: " + phrase);
        }
    }



    //////////////////////////////////////////
    //////////////////////////////////////////

    /*
    experience designing and coding web applications or any kind of js app

    everything is an object
    primitives
    arrays, like objects at times
    functions, have properties and methods like objects
    constructors, part function, part object

    console.log(functionName instanceof Object); = true
    //functions can be assigned to variables, can pass arguments to, can return them from functions all like objects

    Dog.constructor

    //method is a property in an object that is set to an anonymous function expression
    ?

    // constructors, closures, creating objects with behavior that 
    // we can reuse and extend, parameterize the behavior of functions

    // almost everything is an object, including functions, arrays, 
    many built-in objects, and all the custom objects you make yourself.






    */


    // all instances created from that object inherit those properties

    // If you use your own prototype object, make sure you set 
    //the constructor function correctly to the constructor property 
    //for consistency.

    // Object is the object that all prototypes and instances ultimately inherit from. like toString and hasOwnProperty methods
    


    function Game (levelin) {
        this.level = levelin;
    }

    let newGame = new Game;

    newGame.level++;

    Game.prototype.story = "Intro";
    Game.prototype.func1 = function () {
        let x;
        console.log("X is", x);
        console.log(this.level);
       // x = prompt("enter a value");
        console.log("X is", x);
    }


    let PC1 = new Game("one");

    console.log(Game);
    console.log(Game.prototype);   //proto is in Game

    console.log(PC1);       // game object is only copied" 
    console.log(PC1.story); //proto taken from game, but pc1 not have property yet

    PC1.func1();
    console.log(PC1);       // game object is only copied" 
    console.log(PC1.story); //proto taken from game, but pc1 not have property yet
    console.log(PC1.prototype); //undefined


    let PC2 = new Game("two");
    PC2.func1();    //x is still undefined not changed from prev use
    console.log(PC2.prototype); //undefined

    PC2.prototype = new Game();   //want this prototype to inherit from Game's prototype properties, as if we copy,


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

jQuery, simplify and reduce code and syntax of js 
to work on DOM and add visual effects to pages
used to talk to web services, has plugins


$(document).ready (function() {                 //doc.onload

    $("#buynowbutton").click( function () {     //id.onclick

    });


    $("a").click( function () {     //any link onclick

    });


    $("#playlist > li").addClass("favorite");   
    //add class to all li children of this id


});




*/

/*////////////////////////////////////////////////////////////////////*/
/*


document.getElementsByClassName
//nodelist of all elements with this class name

document.getElementsByName
//name attribute

document.querySelector
//css selector, first match returned
var li = document.querySelector("#playlist .song");
//find a class song within a playlist id

document.querySelectorAll
//css selector, returns all matches


var newItem = document.createElement("li");
newItem.innerHTML = "Your Random Heart";
var ul = document.getElementById("playlist");
ul.appendChild(newItem);


There’s a lot more you can do with the DOM using JavaScript. For a good
introduction, check out Head First HTML5 Programming

/*////////////////////////////////////////////////////////////////////*/
/*

BOM, Browser object model
through window object
acts as global name space not used in alert, prompt

global variables and function are stored in the window object
alert and window.alert are the same thing

document is also a property of window
w.d.get...

//gets browser's window inner dimensions
window.innerWidth
window.innerHeight

window.close();     closes browser's window
window.print();
window.confirm();   //similar to prompt only it gives the user choice to ok or cancel
window.history      //object containing the browsing history
window.location     //url of the current page, or direct to a new load page



/*////////////////////////////////////////////////////////////////////*/
/*

Arguments object contains every argument passed to your function
can be accessed in an array like manner

can use arguments to create a function accepting many arguments


function nameX (para1) {

    if (para1 === "here") {
  
        for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);     //output the arguments/parameters passed
    
        }
    
    console.log("arg1 " + arguments[1]);
    console.log(arguments);
        
    
    }
}
    
    nameX("here", "we", "are");


*/


/*////////////////////////////////////////////////////////////////////*/
/*
catch errors 
checking your code regularly for errors

*/

window.onload = function() {

    try {
    
        var message = document.getElementById("messge"); // error supposed to be message
        message.innerHTML = "Here's the message!";
    } catch (error) {
        //console.log("Error! " + error.message);
    }

   };



/*////////////////////////////////////////////////////////////////////*/
/*

adding event handlers with addEventListener

*/

                        //event name, function, bubble
//window.addEventListener("load", init, false);
//window.addEventListener("click", init, false);      //second event
//window.removeEventListener

function init () {
    //page has loaded
    console.log("here 211");
}


//bubble true instead of false
//if parent, child have event on them, 
//the true sets priority to parent
//the false from child to the selected parent, default
//adding in html tag onclick="event.stopPropagation() stops the flow at it


let parent = document.getElementById("dragtarget2");
let child = document.getElementById("dragtarget");


false > child, parent, window
true > window, parent, child
window.addEventListener('click', function(){  
    console.log("window is invoked");  
  },false);

parent.addEventListener('click', function(){  
    console.log("Parent is invoked");  
  },false);

child.addEventListener('click', function(){ 
    console.log("Child is invoked"); }); 


/*////////////////////////////////////////////////////////////////////*/
/*

older browsers support onEvent and use 
(attachEvent instead of addEventListener)
and uses .srcElement instead of .target

so can use 
window.onload = function () {

    if (div.addEventListener) {
        div.addEventListener("click", function);
    }
    else if (div.attachEvent) {
        div.attachEvent("click", function);
    }

};


function handleClick(e) {
    var evt = e || window.event;
    var target;
    
    if (evt.target) {
        target = evt.target;
    } else {
        target = evt.srcElement;
    }
    alert("You clicked on " + target.id);

}

/*////////////////////////////////////////////////////////////////////*/
/*
Regular Expressions

*/

var areaCode = new RegExp(/[0-9]{3}/);

var codeInput = "012";
var result211 = codeInput.match(areaCode); //returns the string or null

//console.log(result211);


/*////////////////////////////////////////////////////////////////////*/


//recursion, function call within a function

//function has name, call that function within the function



//cases that do not rely on previous fibonacci numbers to compute

function fibo (n) {
    if (n === 0 || n === 1) { //base case to not exe forever
        return 1;
    } else {
        return (fibo(n-1) + fibo(n-2));

    }
    
}

for (var i=0; i<10; i++) {
    //console.log("The fibonacci of " + i + " is " + fibo(i));
}




/*////////////////////////////////////////////////////////////////////*/
/*

JSON, Javascript Object Notation

allows representing an object as a string 
that can be stored and transmitted
effective for primitive types not methods


*/


var fidoString = '{ "name": "Fido", "breed":"Mixed", "weight": 38     }';

var fido811 = JSON.parse(fidoString);

console.log("JSON parse fido is " + fido811);

//var fidoString2 = JSON.stringify(fido811);
//console.log("JSON string fido is " + fidoString2);


/*////////////////////////////////////////////////////////////////////*/
/*

Node.js Server side javascript

web and cloud(internet server) services used on the internet

> includes its own runtime enviroment and set of libraries
libraries in the same way the js uses the browser's libraries

> single treaded model, one thread of execution can happen at a time 
like js async and loop events

*/



//method: webserver listening for incoming web requests,
//takes a handler that is responsible for handling requests when occured
//sending back the string hello world

/*
http.createServer811 ( function ( request, resonse ) {

        response.writeHead(200, {"Content-Type" : "text/plain"}  );
        resonse.write("Hello World");
        resonse.end();

    }
).listen(8888);
*/

//more info on nodejs.org


/*////////////////////////////////////////////////////////////////////*/


/*

select_menu.addEventListener('change', () => select.value === 'black'
  ? update_function('black', 'white')
  : update_function('white', 'black')
);

/*theme switch */
/*
function update_function (bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

calendar example 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals



*/







