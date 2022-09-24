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
124

function name (parameter) {
    body;
}

bark("rover" , 20, 50); //50 is ignored, "20" treated like a number
function bark(name, weight)







*/

bark("rover" , -50); //50 is ignored, "20" treated like a number

function bark(name, weight) {
    if (weight > 20) {
    console.log(name + " says WOOF WOOF");
    }
    
    else {
    console.log(name + " says woof woof");
    }
}




/*
flexible itr
x / / / x / / / x / / /
/ / / / 
x / / / each 4 itr, st/ps
/ x / /
/ / x / 
/ / / x 
/ / / / tue 6-12 grc,ml 12-6 ps 

*/