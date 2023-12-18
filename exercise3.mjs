"use strict";

// Question 3a: Class Student
export class Student {
    constructor(lastName, firstName, id) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.id = id;
    }

    // Question 3b: Ajouter la methode toString
    toString() {
        return "student: " + this.lastName + ", " + this.firstName + ", " + this.id;
    }
}

// Question 3c: Class ForStudent etends la Class Student 
export class ForStudent extends Student {
    constructor(lastName, firstName, id, nationality) {
        super(lastName, firstName, id);
        this.nationality = nationality;
    }

    // La surchage de la methode toString afin d'ajouter la nationalite.
    toString() {
        return `${super.toString()}, ${this.nationality}`;
    }
}
