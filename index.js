
const typingDiv = document.getElementById("typing");

console.log(typingDiv);

//pregenerated text fornow , API for random text will be added later
const text = "There was a limit to how creative you could be with the outdated means available."

//dynamically create spans that will be used for text coloring later on
const characters = text.split("").map((char) => {
    const span = document.createElement('span');
    span.innerText = char;
    typingDiv.appendChild(span);
    return span;
});

cosnt = cursorIndex = 0;
const firsCharacter = characters[cursorIndex]; 
firsCharacter.classList.add('cursor');

//typed characters
document.addEventListener("keydown", ({key}) => {
    console.log(key);

    if (key == firsCharacter.innerText) {
        firsCharacter.classList.remove("cursor");
        firsCharacter.classList.add("done");
        firsCharacter = characters[++cursorindex]; //increment location of cursor

    }
});

