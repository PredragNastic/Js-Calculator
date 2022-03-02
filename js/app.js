//-RAD SA PODACIMA:
function getInputValue() {
    let currentEntry = document.getElementById('unos').value;
    return currentEntry;
}

function insertCharacter(character) {
    let currentEntry = getInputValue();
    let newEntry = currentEntry + character;
    setInputValue(newEntry);
}

function setInputValue(unos) {
    document.getElementById('unos').value = unos;
}

function deleteCharacter() {
    let currentEntry = getInputValue();
    let finalEntry = currentEntry.substr(0, currentEntry.length - 1);
    setInputValue(finalEntry);
}

//-MATEMATICKE OPERACIJE:
function calculate() {
    let currentEntry = getInputValue();
    let result = eval(currentEntry);
    setInputValue(result);
}

function square() {
    let currentEntry = getInputValue();
    let complexEntry = eval(currentEntry);
    let result = Math.pow(complexEntry, 2);
    setInputValue(result);
}

function squareRoot() {
    let currentEntry = getInputValue();
    let complexEntry = eval(currentEntry);
    let result = Math.sqrt(complexEntry);
    setInputValue(result);
}

function sine() {
    let currentEntry = getInputValue();
    let complexEntry = eval(currentEntry) * (Math.PI / 180);
    let result = Math.sin(complexEntry);
    setInputValue(result);
}

function cosine() {
    let currentEntry = getInputValue();
    let complexEntry = eval(currentEntry) * (Math.PI / 180);
    let result = Math.cos(complexEntry);
    setInputValue(result);
}