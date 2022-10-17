

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
view.displayMiss("00");
view.displayHit("01");

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
        locations: ["10", "20", "30"],
        hits: ["", "", ""]
    },

    {
        locations: ["32", "33", "34"],
        hits: ["", "", ""]
    },

    {
        locations: ["63", "64", "65"],
        hits: ["", "", ""]
    },

    ],


    fire: function(guess) {

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
    }


}; //end of model object


model.fire("42");



//////////////////////////////////////////////////////////
//the controller glues everything together and gives and watches states

var controller = {

    guesses: 0,

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

    processGuess: function () {

        var location = this.parseGuess(guess);
        if (location) {  //null is a falsey value

        }


    }

}; //end of controller object


console.log(controller.processGuess("H0"));