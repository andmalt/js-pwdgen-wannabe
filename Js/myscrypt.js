var Name = prompt("Qual'è il tuo nome?");
var Surname = prompt("Qual'è il tuo cognome?");
var favoriteColor = prompt("Qual'è il tuo colore preferito?")

var passGen = Name + Surname + favoriteColor;

document.getElementById("pass-gen").innerHTML = passGen+21; 