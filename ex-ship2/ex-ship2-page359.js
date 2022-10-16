

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


