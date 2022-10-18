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
JS is also used to script applications like Adobe Photoshop, OpenOffice and Google Apps, and is even used as a server-side programming language.

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
touches

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



*/

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* call all images, access the one clicked and unblur*/

//window.onload = pageLoadedHandler;

function pageLoadedHandler () {

    var image = document.getElementsByTagName("img");

    console.log(image[0].id);

    for (let i=0; i<image.length; i++) {
    
        image[i].setAttribute("class", "blur");
        image[i].onclick = showAnswer;

    }

}

//returns a nodeList(DOM Object), similar to an array, 
//the object that represents the image in the DOM
//is document.getElementbyId() same as the nodeList[0]

//event object is passed to the click handler
//what element, what time, 

//tag name nodeList(DOM Object), event function para.target, direct.setattribute

//queue of events, so keep them short and efficient for speed



function showAnswer (para) {
    console.log("im here");
    //console.log(para.target.id);

    //var image = document.getElementById("zero");
    let image = para.target;
    //newSrc = id + "jpg";

    image.setAttribute("class", "unblur");
    image.onclick = pageLoadedHandler;


}

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/* on-click get the event's eventObj/para -  x/y coordinates */
window.onload = init1810;

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








/*


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




