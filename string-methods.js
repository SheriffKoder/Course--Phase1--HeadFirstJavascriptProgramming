


//// //// //// //// //// ////
//// localeCompare, returns a value based on a/b precedence

localeCompare(compareString, locales, options);

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

//// //// //// //// //// ////

//eval executes a string calculation
//should not be used in security because it exposes code
let x = 10;
let y = 20;
let text = "x + y";
let result = eval(text);

