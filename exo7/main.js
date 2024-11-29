// Demande des valeurs à l'utilisateur
var n = parseFloat(prompt("Entrez une première valeur")); 
var i = parseFloat(prompt("Entrez une deuxième valeur"));

// Déclare la fonction pour additionner les valeurs
function additionner(a, b) {
    return a + b; // Retourne la somme
}

// Appelle la fonction et affiche le résultat
var resultat = additionner(n, i);
alert("La somme des 2 valeurs est : " + resultat);
