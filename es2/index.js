const counterElement = document.getElementById("counter");

// Controlla se il sessionStorage è supportato
if (typeof Storage !== "undefined") {
  // Ottieni il valore corrente dal sessionStorage
  let counterValue = sessionStorage.getItem("counterValue");

  // Converti il valore in numero, se esiste
  if (counterValue) {
    counterValue = parseInt(counterValue);
  } else {
    // Inizializza il contatore se non esiste un valore
    counterValue = 0;
  }

  // Aggiornare il contatore e mostrare il valore
  function updateCounter() {
    counterValue++;
    counterElement.textContent = counterValue;
    sessionStorage.setItem("counterValue", counterValue);
  }

  // Controlla il contatore ogni secondo
  setInterval(updateCounter, 1000);
} else {
  counterElement.textContent = "SessionStorage non supportato";
}
