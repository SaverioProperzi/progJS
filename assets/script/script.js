let counterValue = 0;

    function increaseCounter() {
      counterValue++;
      updateCounter();
    }

    function decreaseCounter() {
      counterValue--;
      updateCounter();
    }

    function updateCounter() {
      document.getElementById("counter").innerText = counterValue;
    }

    // Creazione div 
    const counterDiv = document.createElement("div");
    counterDiv.setAttribute("class","div")
    counterDiv.id = "counterContainer";

    // Creazione pulsante - 
    const decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.setAttribute ("class", "button")
    decreaseButton.addEventListener("click", decreaseCounter);
    counterDiv.appendChild(decreaseButton);

    // Creazione span 
    const counterSpan = document.createElement("span");
    counterSpan.id = "counter";
    counterSpan.setAttribute ("class","span")
    counterSpan.innerText = counterValue;
    counterDiv.appendChild(counterSpan);

    // Creazione pulsante +
    const increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.setAttribute ("class", "button")
    increaseButton.addEventListener("click", increaseCounter);
    counterDiv.appendChild(increaseButton);

    // Aggiunta div al documento
    document.body.appendChild(counterDiv);