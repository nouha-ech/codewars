function sommeCarres(nombres) {
  let sommeCarres = 0;
  for (let i = 0; i < nombres.length; i++) {
    sommeCarres += nombres[i] * nombres[i]; 
  }
  return sommeCarres;
}

let nombres = [1, 7, 3,9];
let resultat = sommeCarres(nombres);
console.log(resultat);