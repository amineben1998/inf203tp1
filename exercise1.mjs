"use strict";

// Suite de Fibonacci de maniere iterative
export function fibonaIt(n) {
    var somme = 0;
    var etat_actuel = 0;
    var etat_suivant = 1;
// test sur n
    if (n <= 1) {
        return n;
    }

    for (var i = 2; i <= n; i++) {
        somme = etat_actuel + etat_suivant;
        etat_actuel = etat_suivant;
        etat_suivant = somme;
    }

    return somme;
}

// La suite de Fibonacci avec recursivite 
export function fiboRec(n) {
    if(n<=1)
    return n;
    else
    return fiboRec(n-1)+fiboRec(n-2);
}


export function fibArr(t){
    var result =[];
    for(var i =0;i<t.length;i++){
        result.push(fiboRec(t[i]));
    }
    return result;
}

export function fibMap(t){
    var result=t.map((num)=>fiboRec(num));
    return result;
}




