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
124-130

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




//variable shadows
//undeclared variable inside a function,
will be global and used outside after the function's call
and if duplicated without declaration will overwrite the global value
but if name duplicated and declared, it will overwrite inside the function only


let z = 5;
func();
function func () {
    z = 0;
    //let z = 0;
    z = 1+2;
}
console.log(z); // 3, 5

// a good programming practice to use
local variables unless absolutely needed globals


*/




