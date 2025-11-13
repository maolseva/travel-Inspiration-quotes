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
    let context =  "You are a creative travel writer. Write 1 short inspirational travel quote (2–3 lines max). At the very end, add the signature wrapped in HTML strong tags like this: <strong>-Sin Itinerario Viajes</strong>.";


    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let quoteElement = document.querySelector("#quote");
    quoteElement.classList.remove("hidden");
    quoteElement.innerHTML = `<div class="generating"> ⏱ Generating Travel Inspiration Quote about ${instructionsInput.value}</div>`;


    axios.get(apiUrl).then(displayQuote);

}


let quoteFormElement = document.querySelector("#quote-generator-form")
quoteFormElement.addEventListener("submit", generateQuote);