// Loads the html document first
document.addEventListener('DOMContentLoaded', function() {
    // Adds an event listener for the submit button
    document.querySelector('form').addEventListener('submit', function(e) {
        // Checks if there wasn't a game put into the textbox after submitting
                if(document.querySelector('#game-name').value=="")
                {
                    // sends an alert if the user didn't put in anything into the textbox 
                    alert("Why didn't you put in a game")
                }

                else
                {
                    alert(document.querySelector('#game-name').value + " is a great game!");
                }
        e.preventDefault();
        });
});
