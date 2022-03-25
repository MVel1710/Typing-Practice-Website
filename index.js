//import {paragraphs} from './text';
const typingDiv = document.getElementById("typing");
const statsDiv = document.getElementById("stats");
const startGameBtn = document.getElementById("start-game");
const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random?maxLength=50'  //API url for random quote, max response length can be changed within the url
//console.log(RANDOM_QUOTE_API_URL);


//pregenerated text for now , API for random text will be added later
const paragraphs = [
    'There was a',
    'Space is the boundless three dimensional extent in which objects',
    'We gain the strength of the temptation we resist',
    'Nothing happens unless first we dream',
    'The years teach much which the days never know',
    'Our strength grows out of our weaknesses',
    'Fortune favors the brave',
]; 
/*function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL) // API url
        .then(response => response.json())
        .then(data => data.content)
}
async function renderNextQuote(){
    const quote = await getRandomQuote();
    console.log(quote);
    return quote;
}*/

console.log(paragraphs);

const startGame = () => {

    startGameBtn.classList.add("hidden");
    typingDiv.innerHTML = "";
    statsDiv.innerHTML = "";

    const text =paragraphs[parseInt(Math.random() * paragraphs.length)]; // grab random text from paragraphs
    console.log(text);
    //dynamically create spans that will be used for text coloring later on
    const characters = text.split("").map((char) => {
        const span = document.createElement('span');
        span.innerText = char;
        typingDiv.appendChild(span);
        return span;
    });

    let cursorIndex = 0;
    let cursorCharacter = characters[cursorIndex]; 
    cursorCharacter.classList.add('cursor');    

    let startTime = null;

    const keydown = ({key}) => {
            //console.log(key);
            if (!startTime){
                startTime = new Date(); //when key is pressed startime is set to new date 
            }
    
            if (key === cursorCharacter.innerText) {
                cursorCharacter.classList.remove("cursor");
                cursorCharacter.classList.add("done");
                cursorCharacter = characters[++cursorIndex]; //increment location of cursor - increment first to start at 1 not 0
            }
            //game ends
            if (cursorIndex >= characters.length){ // stThop timer when last character is typed
                const endTime = new Date();
                const delta = endTime - startTime; // time has passed between start and end 
                const seconds = delta / 1000; // time passed in seconds 
                const numberOfWords = text.split(" ").length; // how many words
                const wps = numberOfWords / seconds;
                const wpm = wps * 60.0;
                document.getElementById("stats").innerText = `WPM = ${Math.floor(wpm)}`;
                //display cpm and wpm
                document.removeEventListener("keydown", keydown);
                startGameBtn.classList.remove("hidden");
                return;
            }
            cursorCharacter.classList.add("cursor"); 
        };
    
    //typed characters
    document.addEventListener("keydown", keydown);
    
};

