//Exercise Ship1 - page 84-



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
