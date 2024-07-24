const readlineSync = require('readline-sync');


function estPalindrome(chaine) {
    // pour Supprimer les caractères non alphanumériques 
    const chaineOg = chaine.replace(/[^A-Za-z0-9]/g, '');
    // pour renvoyer la chaîne en minuscule
    const chaineminuscule = chaineOg.toLowerCase();
    // pour renverser la chaîne nettoyée
    const chaineInverse = chaineminuscule.split("").reverse().join("");

    return chaineOg === chaineInverse;  // renvoie true si la chaîne est un palindrome
}

// vérification
console.log(estPalindrome("Bonjour"));

console.log(estPalindrome("été"));

// faut installer le package readline-sync avant
// npm install readline-sync
const mot = readlineSync.question("Entrez un mot : ");

if (estPalindrome(mot)) {
    alert(`${mot} est un palindrome`);
} else {
    alert(`${mot} n'est pas un palindrome`);
};

