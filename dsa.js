let students = [
    { name: "Rehmat", age: 20, class: "7th" },
    { name: "Adil", age: 21, class: "8th" },
    { name: "Tariq", age: 23, class: "9th" },
    { name: "Mannan", age: 24, class: "10th" },
    { name: "Faheem", age: 25, class: "11th" },
    { name: "Shari", age: 26, class: "12th" },
    { name: "Zeeshan", age: 27, class: "13th" },
    { name: "Asad", age: 28, class: "14th" },
    { name: "Salman", age: 29, class: "15th" },
    { name: "Hassan", age: 30, class: "16th" }
];

let keepRunning = true; 

while (keepRunning) {
    // Display student list
    console.log("Student List:");
    for (let i = 0; i < students.length; i++) {
        console.log(`${i + 1}. Name: ${students[i].name}, Age: ${students[i].age}, Class: ${students[i].class}`);
    }

    // Prompt the user for a choice
    const choice = prompt("Choose an option: 1. Display Students 2. Add Student 3. Update Student 4. Delete Student 5. Exit");

    // Display students again if chosen
    if (choice === '1') {
        console.log("Student List:");
        for (let i = 0; i < students.length; i++) {
            console.log(`${i + 1}. Name: ${students[i].name}, Age: ${students[i].age}, Class: ${students[i].class}`);
        }
    }
    // Add a new student
    else if (choice === '2') {
        const name = prompt("Enter student's name:");
        const age = parseInt(prompt("Enter student's age:"));
        const className = prompt("Enter student's class:");
        students.push({ name, age, class: className });
        console.log(`Added student: ${name}`);
    }
    // Update an existing student
    else if (choice === '3') {
        const name = prompt("Enter the name of the student you want to update:");
        let studentFound = false;
        for (let i = 0; i < students.length; i++) {
            if (students[i].name === name) {
                students[i].name = prompt("Enter new name:", students[i].name);
                students[i].age = parseInt(prompt("Enter new age:", students[i].age));
                students[i].class = prompt("Enter new class:", students[i].class);
                console.log(`Updated student: ${students[i].name}`);
                studentFound = true;
                break;
            }
        }
        if (!studentFound) {
            console.log("Student not found!");
        }
    }
    // Delete a student
    else if (choice === '4') {
        const name = prompt("Enter the name of the student you want to delete:");
        let studentIndex = -1;
        for (let i = 0; i < students.length; i++) {
            if (students[i].name === name) {
                studentIndex = i;
                break;
            }
        }
        if (studentIndex !== -1) {
            students.splice(studentIndex, 1);
            console.log(`${name} has been deleted.`);
        } else {
            console.log(`${name} is not in the array.`);
        }
    }
    // Exit the program
    else if (choice === '5') {
        console.log("Exiting the program.");
        keepRunning = false;
    }
    // Handle invalid choices
    else {
        console.log("Invalid choice, please try again.");
    }
}
