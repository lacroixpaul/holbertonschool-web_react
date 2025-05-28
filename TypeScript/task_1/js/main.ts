// Task 1

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Task 2

interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 3

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Task 4

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "Paris",
  contract: true,
  subject: "Maths"
};

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17
};

console.log("Teacher:", teacher1);
console.log("Director:", director1);
console.log("printTeacher example:", printTeacher("John", "Doe"));

function displayPerson(person: Teacher | Directors): void {
  const container = document.createElement('div');
  container.style.border = "1px solid #ccc";
  container.style.padding = "1em";
  container.style.marginBottom = "1em";
  container.innerHTML = `
    <h2>${person.firstName} ${person.lastName}</h2>
    <p><strong>Full time:</strong> ${person.fullTimeEmployee}</p>
    ${person.yearsOfExperience ? `<p><strong>Experience:</strong> ${person.yearsOfExperience}</p>` : ""}
    <p><strong>Location:</strong> ${person.location}</p>
    <ul>
      ${Object.entries(person).map(([key, value]) => {
        if (
          ['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key)
        ) return '';
        return `<li><strong>${key}</strong>: ${value}</li>`;
      }).join('')}
    </ul>
  `;
  document.body.appendChild(container);
}

displayPerson(teacher1);
displayPerson(director1);

const printTeacherDiv = document.createElement('div');
printTeacherDiv.textContent = printTeacher("Jane", "Smith");
document.body.appendChild(printTeacherDiv);

const student = new StudentClass("Paul", "Dupont");
const studentDiv = document.createElement('div');
studentDiv.innerHTML = `
  <h2>Student: ${student.displayName()}</h2>
  <p>${student.workOnHomework()}</p>
`;
document.body.appendChild(studentDiv);
