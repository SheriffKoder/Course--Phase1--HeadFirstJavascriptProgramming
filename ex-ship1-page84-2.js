

let hits = 0;
let inputs = 0;
let missout = 0;
let ship_positions = [1,6];
let hit_record = [0];
let user_input; //user guess is undefined




//take_input();
console.log("Result");
console.log("inputs" + inputs);
console.log("hits" + hits);
console.log("misses" + missout);








function take_input () {
    generate_random_locations();

    //console.log(check_location());// do not use here, adds to the calculations for the file
    while (user_input !== null && hits < ship_positions.length ) {
        
        user_input = prompt('guess from 1 to 6');
        inputs++;

        check_if_number_within_range();
        if ( check_location() && check_if_put_before() && check_if_number_within_range() ) {
        
                hits++;
                hit_record.push(user_input);           
            
        }
    }
}


function generate_random_locations () {

    //generate starting location from 0->4
    let location0 = Math.floor ( Math.random() * 5 );
    //let location1 = location0+1;
    //let location2 = location1+1;

    let j = 0;
    for (i=0; i<3; i++) {

        ship_positions[i] = location0 + j ;
        j++;
    }
    console.log (ship_positions);
}


function check_if_number_within_range () {

    let user_inputx = user_input;

    //enter 'number' from 1 to ship_positions.length
    if ((user_inputx !=NaN) && (user_inputx > 0) && (user_inputx <= 6) ) {
        console.log("in range");
        return true;
    }

    else {
        console.log("out of range");
        alert('please enter a valid number');
        return false;
    }

}


// true > location exists / false > not exist
function check_location () {

    let miss1 = 0;

    for ( i=0; i<ship_positions.length; i++ ) {
            

        if (user_input == ship_positions[i]) {
            return true;
        }
        else {
            console.log("not found at" + i);
            miss1++;
            console.log(miss1);
        }

    }
        if (miss1 == ship_positions.length) {
            missout++;
            return false;
        }

}

// true > not hit before / false > hit before
function check_if_put_before () {

    let not_put = 0;

    for (i=0; i<hit_record.length; i++) {
        if (user_input !== hit_record[i]) {

            not_put++;
        }
    }    

    if (not_put == hit_record.length) {
        //console.log("not put");
        return true;
    }

    else if (not_put !== hit_record.length) {
        //console.log("did put");
        alert('location has been hit before');
        missout++;
        return false;
    }
}


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*Example bubbles */


/////////////////////////check//
let a = [ 11 , 11 , 2 , 11 ];
let cost = [ 4 , 2 , 6 , 0 ];
let x = [0]; /* place to store highest value locations */


/////////////////////////cost//
let highest_cost = 0;
let lowest_cost;
let best_scores_positions = x; //['1', '3', '5'];
let lowest_cost_postition;

        get_highest_cost();
        check_if_larger();
        determine_lowest_cost();




/////////////////////////check//
console.log(x); /* highest score locations */
console.log(a[x[0]]); /* highest score */


/////////////////////////cost//
console.log("lowest cost is in score position "+ lowest_cost_postition);
console.log("with cost " + lowest_cost);

/*approach2:  pass over to get high score, another separate pass on all scores to push if equal the high score */

    function get_highest_cost () {
        for (i=0; i < cost.length; i++) {
            if (cost[i] > highest_cost) {
                highest_cost = cost[i];
            }


        }
    }

    function determine_lowest_cost () {
        
        
        for (i=0; i<best_scores_positions.length; i++) {
        
            if (cost[ best_scores_positions[i] ] < highest_cost) {
        
                lowest_cost = cost[ best_scores_positions[i] ];
                lowest_cost_postition = best_scores_positions[i];
        
            }
            
        
        }
    }
        
        


    function check_if_larger () {

        for (i=0; i<a.length; i++) {
        
            if (a[i] >  a[ x[0] ]) {
                console.log("greater");
                x[0] = i;
                console.log("x now is " + x);

                /* starting position is highest at first count
                so if */

            }

            else if ( (a[i] == a[ x[0] ]) && (i !==0)  ) {

                x.push(i);
                console.log("x now is " + x);

                /*if equal in value */
            }

            else {
                console.log("not greater");

            }
        }
    }


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
