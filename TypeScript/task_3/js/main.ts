/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const output = document.createElement('div');
output.style.fontFamily = 'sans-serif';
document.body.appendChild(output);

function logToPage(message: string) {
  const p = document.createElement('p');
  p.textContent = message;
  output.appendChild(p);
}

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

logToPage(`Inserting row: ${JSON.stringify(row)}`);
const newRowID: RowID = CRUD.insertRow(row);
logToPage(`→ Inserted with ID: ${newRowID}`);

const updatedRow: RowElement = {
  ...row,
  age: 23,
};

logToPage(`Updating row ${newRowID} with: ${JSON.stringify(updatedRow)}`);
CRUD.updateRow(newRowID, updatedRow);
logToPage(`→ Updated row ${newRowID}`);

logToPage(`Deleting row ID ${newRowID}`);
CRUD.deleteRow(newRowID);
logToPage(`→ Deleted row ID ${newRowID}`);
