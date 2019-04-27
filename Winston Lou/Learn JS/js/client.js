var x = Math.floor(Math.random() * 20) + 1;
var turns = 5;
var hint = "Guess my number! It is between 1 and 20";

for (var turns = 5; turns > 0; turns--)
{
    {
        var guess = prompt(hint + ' you have ' + turns + ' guesses left. ');
    }

    guess = Number(guess);
    if (guess == x)
    {
        document.write("<p>You WIN!!!!</p>");
        turns = 0;
    }
    else 
    {
        hint = "Nope, try again.";
        if(guess < x) hint += ' Too small! ';
        if(guess > x) hint += ' Too big! ';
    }
}

alert(' The secret number was ' + x + '.')