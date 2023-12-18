"use strict";

import {fibonaIt,fiboRec,fibArr,fibMap} from "./exercise1.mjs";
import { wc, WordList } from "./exercise2.mjs";
import { Student,ForStudent } from "./exercise3.mjs";
import { Promotion } from "./exercise4.mjs";
console.log(fibonaIt(8)); // do more that one test per function
console.log(fiboRec(7));
console.log(fibArr([7,8]));
console.log(fibMap([7,8]));

// Test des fonctions de l'exercice 
console.log(wc("ylkövölds öFKYDLXVLDSÖJ YÖDFKCLÖYXKVJDS YDÖFCKYLXKVC<SJ SFJDÖLYXKVCC<L"));
const phraseTest = "Bonjour bonjour hello hello world world world je suis en tp inf203 inf203 inf203 oui oui";
const wordList = new WordList(phraseTest);
console.log("Test de la fonction wc : ");
console.log(wc(phraseTest));

console.log("\nTest de la méthode getWords : ");
console.log(wordList.getWords());

console.log("\nMot avec le plus grand nombre d'occurrences : ");
console.log(wordList.maxCountWord());

console.log("\nMot avec le plus petit nombre d'occurrences : ");
console.log(wordList.minCountWord());

console.log("\nNombre d'occurrences du mot 'hello' : ");
console.log(wordList.getCount('hello'));

console.log("\nApplication de la fonction de longueur sur chaque mot : ");
console.log(wordList.applyWordFunc(word => word.length));


// test exercice 3

let amine = new Student("Benizza", "Mohammed-Amine", 11111);
console.log(amine.toString());
let amineWithNationality = new ForStudent("Benizza", "Mohammed-Amine", 11111, "Moroccan");
console.log(amineWithNationality.toString());
const promotion = new Promotion();

// Ajout des étudiants à la promotion
promotion.add(amine);
promotion.add(amineWithNationality);

// Test de size()
console.log(promotion.size()); // Devrait afficher 2

// Test de get()
console.log(promotion.get(0)); // Devrait afficher les détails de student1

// Test de print()
console.log(promotion.print()); // Devrait afficher les détails de tous les étudiants

// Test de write() et read()
const serializedPromotion = promotion.write();
const serializedString = JSON.stringify(serializedPromotion);

// Test de saveToFile() et readFromFile()
const fileName = 'promotion_data.txt';
promotion.saveToFile(fileName);

const fileContent = fs.readFileSync(fileName, 'utf8');
const restoredPromotion = new Promotion();
restoredPromotion.read(fileContent);

// Affichage des étudiants restaurés
console.log(restoredPromotion.print()); // Devrait afficher les mêmes détails que la promotion initiale
