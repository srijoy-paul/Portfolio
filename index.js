const dynamic_content = document.getElementById("dynamic-content");

const phrases = ["Human...", "Programmer...", "Web Developer...", "Avid explorer of Ai/Ml..."];
console.log(dynamic_content);

let phraseIndex = 0;
let letterIndex = 0;



function displayChars(phrase) {

    if (letterIndex == phrase.length) clearChars();
    else if (letterIndex < phrase.length) {
        const currentChar = phrase.charAt(letterIndex);
        if (currentChar === " ") {
            dynamic_content.innerHTML += "&nbsp;";
        }
        else {
            dynamic_content.innerText += phrase.charAt(letterIndex);
        }
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
    else {
        phraseIndex++;
        if (phraseIndex >= phrases.length) {
            phraseIndex = 0;
        }
        letterIndex = 0;
        setTimeout(() => {
            displayChars(phrases[phraseIndex]);
        }, 300);
    }
}

displayChars(phrases[phraseIndex]);
