// Séquence de Fibonacci : Implémentez une fonction récursive pour générer le nième nombre de Fibonacci.
//  La suite de Fibonacci commence par 0 et 1, et chaque nombre suivant est la somme des deux nombres 
//  précédents (0, 1, 1, 2, 3, 5, 8, ...).


// FUNCTION fibbonacci(n:INTEGER) : INTEGER
// IF (n=0) THEN
//    RETURN 0;
// ELSE_IF (n=1) THEN
//    RETURN 1
// ELSE
//     RETURN fibbonacci(n-1) + fibbonacci(n-2)
// END_IF
// END

let fibbonacci = (n) =>{
    if(n == 0){
        return 0
    }
    else if(n == 1){
        return 1
    }
    else{
        return fibbonacci(n - 1) + fibbonacci(n - 2)
    }

}
console.log(fibbonacci(10))

// Palindrome Checker : Créez une fonction récursive pour vérifier si une chaîne donnée est un 
// palindrome (se lit de la même manière en avant et à l’envers), en ignorant les espaces, 
// la ponctuation et les majuscules.

// Fonction de puissance : Écrivez une fonction récursive pour calculer le résultat de 
// l’élévation d’un nombre à une puissance donnée.


let puiss = (x,n) =>{
    let result = 0
    if(n == 1){
        return x
    }
    else{
        result = puiss(x, n-1)
        return x*result
    }
}

console.log(puiss(2,3))