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

/*87-91, */

let hits = 0;
let inputs = 0;
let missout = 0;
let ship_positions = [5,6];
let ship_hits = [];
let user_guess;
//let guess_positions = Array(7);

//console.log(ship_positions);
//console.log(guess_positions.length);

//let user_guess = prompt('guess from 1 to 7');
//let user_guess = 5;
//console.log(user_guess);

hitandcheck();
console.log("Result");
console.log("inputs" + inputs);
console.log("hits" + hits);
console.log("misses" + missout);



function hitandcheck ( ) { 
    
    while (hits < ship_positions.length && user_guess !== 'x') {


        user_guess = prompt('guess from 1 to 7');
        inputs++;

        let miss1 = 0;

        for ( i=0; i<ship_positions.length; i++ ) {
            

            if (user_guess == ship_positions[i]) {
                checkSink(user_guess);

            }
            else {
                console.log("not found at" + i);
                miss1++;
                console.log(miss1);
            }

            if (miss1 == ship_positions.length) {
                missout++;
            }

        }
    }




        function checkSink (user_input) {

            let all_good = 0;

            for (i=0; i<ship_hits.length; i++) {
                if (user_input !== ship_hits[i]) {

                    all_good++;
                }
            }    
            console.log(all_good);
            console.log(ship_hits.length);

            if (all_good == ship_hits.length) {

                console.log("location exist and not hit before");

                console.log("ship hits was" + ship_hits);
                ship_hits.push(user_input);
                console.log("ship hits now" + ship_hits);

                console.log("hits was " + hits);
                hits++;
                console.log("hits now " + hits);


            }

            else if ( all_good !== ship_hits.length) {
                console.log("location exist but hit before");

            }
        }
        
    }

/*


*/