// Task 5

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else if (typeof salary === "string") {
    const numericSalary = Number(salary.replace(/[^0-9]/g, ''));
    if (numericSalary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  } else {
    return new Director();
  }
}

// Task 6

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): void {
  let message: string;
  if (isDirector(employee)) {
    message = employee.workDirectorTasks();
  } else {
    message = employee.workTeacherTasks();
  }
  console.log(message);

  const output = document.getElementById("output");
  if (output) {
    output.innerHTML += `<p>${message}</p>`;
  }
}

// Task 7

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

const outputDiv = document.createElement('div');
document.body.appendChild(outputDiv);

function appendToOutput(message: string): void {
  const output = document.getElementById("output");
  if (output) {
    output.innerHTML += `<p>${message}</p>`;
  }
}

const employee1 = createEmployee(200);
const employee2 = createEmployee(1000);
const employee3 = createEmployee("$500");


document.body.innerHTML = `
  <p>Employee 1 is a ${employee1.constructor.name}</p>
  <p>Employee 2 is a ${employee2.constructor.name}</p>
  <p>Employee 3 is a ${employee3.constructor.name}</p>
  <div id="output"></div>
`;

executeWork(employee1);
executeWork(employee2);
executeWork(employee3);

appendToOutput(teachClass("Math"));
appendToOutput(teachClass("History"));
