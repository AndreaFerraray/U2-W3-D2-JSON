const savedNameElement = document.getElementById("savedName");
const nameInput = document.getElementById("nameInput");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");

// Carica il valore salvato da localStorage all'avvio
const savedDataJSON = localStorage.getItem("savedData");
if (savedDataJSON) {
  const savedData = JSON.parse(savedDataJSON);
  savedNameElement.textContent = savedData.name;
}

// Salva i dati in formato JSON in localStorage
saveButton.addEventListener("click", () => {
  const name = nameInput.value;
  if (name) {
    const data = { name };
    localStorage.setItem("savedData", JSON.stringify(data));
    savedNameElement.textContent = name;
    nameInput.value = "";
  }
});

// Cancella i dati salvati
clearButton.addEventListener("click", () => {
  localStorage.removeItem("savedData");
  savedNameElement.textContent = "";
});
