function generateQuote(event) {
    event.preventDefault();


    new Typewriter("#quote", {
      strings: "La razon del viaje es conectar",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}


let quoteFormElement = document.querySelector("#quote-generator-form")
quoteFormElement.addEventListener("submit", generateQuote);