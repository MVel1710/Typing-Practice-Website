//import {paragraphs} from './text';
/*import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqQJ21jTKKJ41PnKbvdbKyNcEu8OEtsdk",
  authDomain: "practicetyping-d550d.firebaseapp.com",
  databaseURL: "https://practicetyping-d550d-default-rtdb.firebaseio.com",
  projectId: "practicetyping-d550d",
  storageBucket: "practicetyping-d550d.appspot.com",
  messagingSenderId: "1055567757885",
  appId: "1:1055567757885:web:aaf1529d27e09b38c8a054",
  measurementId: "G-YYPK1EFNXT"
  };
  
const database = getDatabase();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); */


const typingDiv = document.getElementById("typing");
const statsDiv = document.getElementById("stats");
const startGameBtn = document.getElementById("start-game");
//const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random?maxLength=50'  //API url for random quote, max response length can be changed within the url
//console.log(RANDOM_QUOTE_API_URL);


//pregenerated text for now , API for random text will be added later
const paragraphs = [
    'There was a',
    'Space is the boundless three dimensional extent in which objects',
    'We gain the strength of the temptation we resist',
    'Nothing happens unless first we dream',
    'Commitment is an act, not a word', 
    'Wisdom has never made a bigot, but learning has',
    'Fears are nothing more than a state of mind',
    'Action is the foundational key to all success',
    'Life is just a chance to grow a soul',
    'Our intention creates our reality',
    'The simplest things are often the truest',
    'We are wiser than we know',
    'A short saying often contains much wisdom',
    'One loyal friend is worth ten thousand relatives',
    'A jug fills drop by drop',
    'Silence is a source of great strength',
    'Not all those who wander are lost',
    'A goal without a plan is just a wish'
]; 
         
console.log(paragraphs);

const startGame = () => {   
    console.log(startGameBtn);
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

/*function writeUserData(name, typingSpeed) {
        const db = getDatabase();
        set(ref(db, 'email'), {
            email:"test",
            typingSpeed: wpm

        });
    } */