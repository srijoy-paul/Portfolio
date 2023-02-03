const dynamic_content = document.getElementById("dynamic-content");

const phrases = ["Programmer...", "Frontend Developer...", "Avid explorer in Ai/Ml..."];
console.log(dynamic_content);

const phraseIndex = 0;
let letterIndex = 0;



function displayChars(phrase) {

    if (letterIndex == phrase.length) clearChars();
    else if (letterIndex < phrase.length) {
        dynamic_content.innerText += phrase.charAt(letterIndex);
        letterIndex++;
        setTimeout(() => {
            displayChars(phrase);
        }, 180);
    }
}

function clearChars() {
    if (letterIndex > -1) {
        let updatedPhrase = "";
        for (let i = 0; i < letterIndex; i++) {
            updatedPhrase += phrases[phraseIndex].charAt(i);
        }
        dynamic_content.textContent = updatedPhrase;
        letterIndex--;
        setTimeout(clearChars, 100);
    }
}
displayChars(phrases[phraseIndex]);