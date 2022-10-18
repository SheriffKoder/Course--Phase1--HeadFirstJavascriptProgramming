

//////////////////////////////////////////////////////////

//add display functions
var view = {

    displayMessage : function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;

    },

    displayHit: function (location) {

        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }

};

//test display functions
//view.displayMiss("00");
//view.displayHit("01");

//////////////////////////////////////////////////////////
/* then we can look it all up and make it by ourselves */

var model = {

    boardSize : 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,


//add other values and nest ships with them in an object
//add 3 ships then combine into a single 0,1,2 array
    ships : [
    {
        locations: ["00", "00", "00"], /* locations: ["10", "20", "30"], */
        hits: ["", "", ""]
    },

    {
        locations: ["00", "00", "00"], /* locations: ["32", "33", "34"]*/
        hits: ["", "", ""]
    },

    {
        locations: ["00", "00", "00"], /* locations: ["63", "64", "65"], */
        hits: ["", "", ""]
    },

    ],


    fire: function(guess) {

        console.log(guess);

        for (var i=0; i < this.numShips; i++) {
            var ship = this.ships[i];

            /*
            var locations = ship.locations;
            var index = locations.indexOf(guess); //if there isn't a matching location will return a value of -1
            */
            var index = ship.locations.indexOf(guess); //combined the prev 2 lines, called chaining, keeps code short but use to chain 2-3 levels most to readability

            if (index >= 0) {
                //we have a hit
                ship.hits[index] = "hit";

                ////(2)
                view.displayHit(guess);
                view.displayMessage("HIT");

                ///(1)
                if (this.isSunk(ship)) {

                    this.shipsSunk++;
                    ////(2)
                    view.displayMessage("you sank my battleship!");
                }

                return true;
            }
        }

        ////(2)
        view.displayMiss(guess);
        view.displayMessage("you missed");

        return false; //if passed through all ships and no hit

    },

    ///(1)
    isSunk : function (ship) {

        for (var i=0; i<this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false; //if any location not hit, ship is not sunk
            }
        }
        return true;    //all locations hit, then isSunk == true
    },

/*////////////////////////////////////////////////////////////////////*/

    generateShipLocations: function () {

        var locations;
        for (var i=0; i < this.numShips; i++) {
            //ship0,ship1,ship2

            do {
                locations = this.generateShip();


            } while (this.collision(locations));

            this.ships[i].locations = locations;
        }

    },


    generateShip : function () {

        var direction = Math.floor(Math.random() * 2 );
        var row, col;

        if (direction === 1) {
            //generate horizontal ship
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength) );
        }

        else {
            //generate vertical ship
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength) );
            col = Math.floor(Math.random() * this.boardSize);

        }

        var newShipLocations = [];
        for (var i=0; i< this.shipLength; i++) {
            if (direction === 1) {
                //add location array for the horizontal ship
                newShipLocations.push(row + "" + (col + i) );
            }
    
            else {
                //add location array for the vertical ship
                newShipLocations.push( (row + i) + "" + col );

            }
    
        }
        return newShipLocations;

    },


    /*takes each saved ship and checks through its locations 
    for all generated location slots separately */
    collision : function (locations) {

        for (var i = 0; i < this.numShips; i++ ) {
            var ship = model.ships[i];
        

            for (var j=0; j < locations.length; j++) {
                if ( ship.locations.indexOf(locations[j]) >= 0 ) {
                    return true; //collision
                }

            }

        }
        return false; //no collision in all ships

    },


}; //end of model object


//model.fire("42");



//////////////////////////////////////////////////////////
//the controller glues everything together and gives and watches states

var controller = {

    guesses: 0,


    /* output a number string */
    parseGuess: function (guess) {

        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

        /* null and length check */
        if (guess === null || guess.length !== 2) {
            alert("Oops, please enter a letter and a number on the board.");
        } 

        else { /* else cont. on processing the input */
            firstChar = guess.charAt(0); //get first char from guess
            var row = alphabet.indexOf(firstChar); //location in alphabet
            var column = guess.charAt(1);


            /* NaN and range check */
            if (isNaN(row) || isNaN(column)) {
                alert ("that isnt' on the board");
            } 
            else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                alert ("that is outside the board");
            }
            else {
                return row + column; //returns a string
            }


        }

        return null;



    },

    /* take guess, increase var_guess, put into fire method */
    processGuess: function (guess) {

        var location = this.parseGuess(guess);
        if (location) {  //null is a falsey value
            this.guesses++;
            var hit = model.fire(location);

            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all battleships, in " + this.guesses + " guesses");
            }

        }
        


    }

}; //end of controller object



controller.processGuess("D0");



//////////////////////////////////////////////////////////
/* initial acts as a start button, deals with Html */

let initial = {

    /* start function */
    init: function () {
        var fireButton = document.getElementById("fireButton");
        fireButton.onclick = this.handleFireButton; // no ()
    
        var guessInput = document.getElementById("guessInput");
        guessInput.onkeypress = this.handleKeyPress;

        model.generateShipLocations();
        console.log(model.ships);
    
    },


    /* ENTER initialize start function */
    handleKeyPress: function (passedKey) {
        var fireButton = document.getElementById("fireButton");

        if (passedKey.keyCode === 13 ) {
            fireButton.click();
            return false;
        }
    
    },

    /* get guess and push to controller */
    handleFireButton : function () {
        var guessInput = document.getElementById("guessInput");
        var guess = guessInput.value;
        controller.processGuess(guess);
    
        guessInput.value = ""; //resets the input element
    
    },




}; //end of initial object



initial.init();