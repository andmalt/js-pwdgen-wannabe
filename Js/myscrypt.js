var nameCreated = prompt("Qual'è il tuo nome?");
var surnameCreated = prompt("Qual'è il tuo cognome?");
var favoriteColorCreated = prompt("Qual'è il tuo colore preferito?")

var passGen = nameCreated + surnameCreated + favoriteColorCreated + 21;

document.getElementById("pass-gen").innerHTML = passGen; 