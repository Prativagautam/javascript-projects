let rnumber = Math.floor(Math.random() * 10) + 1;
function guess()
{
    do{
        let guessed = parseInt(document.getElementById("guessinput").value); // Convert input value to integer

        if (isNaN(guessed)) {
            document.getElementById("numberguess").innerHTML = "Please enter a valid number!";
        } else {
            if (rnumber < guessed) {
                document.getElementById("numberguess").innerHTML = `Too high `;
            } else if (rnumber > guessed) {
                document.getElementById("numberguess").innerHTML = `Too low`;
            } else {
                document.getElementById("numberguess").innerHTML = `You guessed it right! ${rnumber}`;
                break;
            }
        }}
        while(false);
    }
