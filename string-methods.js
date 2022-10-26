

console.log("//////////////////");
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

//Wrapper Methods
//better use concatenate tags it may not be supported in future versions

//methods output the string as an html element to be used in innerHtml

//anchor, link
//big
//blink, 
//bold, 
//fixed <tt>,
//font color  <font color="red"></font>, 
//font size
//italics <i> </i>
//small
//strike
//sub
//sup


let text2210 = "Hello world";
let text22102 = text2210.sup("red");
//console.log(text22102);

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/



//HTML DOM EVENTS



//media loading issues : onabrot, onerror, onsuspend
//.afterprint

//on-canplay    //when browser has buffered media and ready to play it
//on-canplaythrough     //without stopping for buffering, fully loaded




/*////////////////////////////////////////////////////////////////////*/
//Css animation related .animationstart, .animationiteration, .animationend

//onclick this function

let myDiv2410 = document.getElementById("animation_event");

myDiv2410.addEventListener("click", clickFunction);

function clickFunction (para) {
    
    let myDivHere = para.target;
    myDivHere.style.animation = "animation1 2s 2";


    myDivHere.addEventListener("animationstart", startFunction );
    myDivHere.addEventListener("animationiteration", repeatFunction );
    myDivHere.addEventListener("animationend", endFunction );


    function startFunction () {
        myDivHere.style.background = "red";
        myDivHere.style.color = "white";

    }

    function repeatFunction () {
        myDivHere.style.background = "red";
        myDivHere.style.color = "lime";

    }

    function endFunction () {
        myDivHere.style.background = "purple";
        myDivHere.style.color = "grey";

    }

}

/*////////////////////////////////////////////////////////////////////*/


//before print, about to be printed

//before unload, before the document becomes unloaded, custom message
    //<body onbeforeunload="return unloadfunction();">

    function unloadfunction () {
        return "message here will be displayer only in IE else default";
    }


//onfocus, onblur/onfocusout











console.log("//////////////////");
