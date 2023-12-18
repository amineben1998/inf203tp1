import { Student, ForStudent } from "./exercise3.mjs";
import * as fs from "fs"

export class Promotion {
    constructor() {
        this.students = [];
    }

    add(student) {
        this.students.push(student);
    }

    size() {
        return this.students.length;
    }

    get(i) {
        return this.students[i];
    }

    print() {
        this.students.forEach(student => console.log(student.toString()));
        return this.students.map(student => student.toString()).join('\n');
    }

    write() {
        return this.students.map(student => ({
            lastName: student.lastName,
            firstName: student.firstName,
            id: student.id,
            nationality: student instanceof ForStudent ? student.nationality : undefined
        }));
    }

    read(str) {
        const studentObjects = JSON.parse(str);
        this.students = studentObjects.map(obj => {
            if (obj.nationality) {
                return new ForStudent(obj.lastName, obj.firstName, obj.id, obj.nationality);
            } else {
                return new Student(obj.lastName, obj.firstName, obj.id);
            }
        });
    }

    saveToFile(fileName) {
        const data = JSON.stringify(this.write());
        fs.writeFileSync(fileName, data);
    }

    readFromFile(fileName) {
        const data = fs.readFileSync(fileName, 'utf8');
        this.read(data);
    }
}
