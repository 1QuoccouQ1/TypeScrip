import { Person } from "./interfaces/person";
import { Student } from "./models/student";
function greeter (person: Person) {
    return "Hello," + person.firstName + + person. lastName;
}
let student: Student = new Student ("Thi", "Hong", "Nguyen");
document.body.innerHTML = greeter(student);