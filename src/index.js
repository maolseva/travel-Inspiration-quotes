function displayQuote(response) {
    new Typewriter("#quote", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}



function generateQuote(event) {
    event.preventDefault();

      let instructionsInput = document.querySelector("#commands");
    let apiKey = "20ac4e1fof3t6e4bfd071a3613757bcc";
    let prompt = `Generate travel quotes about ${instructionsInput.value}`;
    let context =  "Act as a travel-quote expert. Create a two-line inspiring travel quote and place **— SheCodes AI** as the last line";

    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let quoteElement = document.querySelector("#quote");
    quoteElement.classList.remove("hidden");
    quoteElement.innerHTML = `<div class="generating"> ⏱ Generating Travel Inspiration Quote about ${instructionsInput.value}</div>`;

    console.log ("Generating quote");
    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);

    axios.get(apiUrl).then(displayQuote);

}


let quoteFormElement = document.querySelector("#quote-generator-form")
quoteFormElement.addEventListener("submit", generateQuote);