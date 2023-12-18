"use strict";

// Fonction pour compter les occurrences de chaque mot dans une chaîne
export function wc(s) {
    const wordMap = new Map();
    const words = s.split(" ");

    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    return wordMap;
}

// Classe WordL avec un constructeur prenant une chaîne en entrée
export class WordList {
    constructor(s) {
        this.wordMap = wc(s);
    }

    // Retourne un tableau de mots triés lexicographiquement et sans doublons
    getWords() {
        return [...new Set([...this.wordMap.keys()])].sort();
    }

    // Retourne le mot avec le plus grand nombre d'occurrences
    maxCountWord() {
        let maxWord = "";
        let maxCount = 0;

        for (const [word, count] of this.wordMap) {
            if (count > maxCount) {
                maxCount = count;
                maxWord = word;
            }
        }

        return maxWord;
    }

    // Retourne le mot avec le plus petit nombre d'occurrences
    minCountWord() {
        let minWord = "";
        let minCount = Number.MAX_VALUE;

        for (const [word, count] of this.wordMap) {
            if (count < minCount) {
                minCount = count;
                minWord = word;
            }
        }

        return minWord;
    }

    // Retourne le nombre d'occurrences d'un mot donné
    getCount(word) {
        return this.wordMap.get(word);
    }

    // Applique une fonction à chaque mot dans l'ordre lexicographique et retourne un tableau des résultats
    applyWordFunc(f) {
        const words = this.getWords();
        return words.map(f);
    }
}
