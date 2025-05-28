var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};
var studentsList = [student1, student2];
// Créer une table HTML
var table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.marginTop = "20px";
// Optionnel : Ajouter un en-tête
var headerRow = document.createElement("tr");
var nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
nameHeader.style.border = "1px solid black";
nameHeader.style.padding = "8px";
var locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";
locationHeader.style.padding = "8px";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
// Ajouter une ligne par étudiant
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    nameCell.style.border = "1px solid black";
    nameCell.style.padding = "8px";
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black";
    locationCell.style.padding = "8px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Ajouter la table au body
document.body.appendChild(table);
