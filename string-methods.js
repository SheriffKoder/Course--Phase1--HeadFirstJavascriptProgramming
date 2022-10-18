


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

//// localeCompare, returns a value based on a/b precedence

//localeCompare(compareString, locales, options);

// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0

// numeric using options:
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1


const items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//eval executes a string calculation
//should not be used in security because it exposes code
let x = 10;
let y = 20;
let text11 = "x + y";
let result = eval(text11);


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

//match() returns number of occurances

let text2 = " here we are here";
let result2 = text2.match(/ere/g); //search global or gi case-insenstive
console.log(result2);

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//str1.padEnd(25, '.');
// expected output: "Breaded Mushrooms........"

//console.log(str2.padEnd(5));
// expected output: "  200" total string length is 5, spaces placed by default

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//let new_text = text3.repeat(2); //returns the text repeated n times


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/* returns new string with all matches of pattern/string/RegExp
*/

//p = "quickly jump over the box of the box";

//console.log ( p.replaceAll('box','box2') ); 

//console.log ( p.replace('box','box2') );  //first occurrence only

//console.log ( p.search("ui"));  //search beginning of string


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//takes a string and output a string
//let string2 = string.valueOf();

//let text = String.fromCharCode(65);   //outputs A
//let result = text.includes("world"); //returns true if found

/*////////////////////////////////////////////////////////////////////*/

