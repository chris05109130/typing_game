// grab all DOM elements I need to make project run

const levelSelect = document.querySelector('.levels');
const wordToType = document.querySelector('.wordToType');
const typeValue = document.querySelector('#typeValue');
const gameOverMsg = document.querySelector('.gameOver');
const timeStamp = document.querySelector('.time');
const scoreCard = document.querySelector('.score');
const scoreResult = document.querySelector('.scoreResult');
const resetBTN = document.querySelector('.resetBtn');
let time = '';
let score = '';

const easyWords = [
    "Sky",
    "Blue",
    "Football",
    "Soccer",
    "Pizza",
    "Soda",
    "Computer",
    "Paper",
    "Pencil",
    "Color"

];

const mediumWords = [
    "FootBall Game",
    "Soccer Game",
    "BaseBall Game",
    "Hockey Game",
    "Midnight Hour",
    "Aid Station",
    "Groud Up",
    "Soda Can",
    "Automatic Repair",
    "Advanced Options"
];

const hardWords = [
    "Rainy Day Today",
    "Cheese Pizza Time",
    "Soda Party Today",
    "Building Block Stone",
    "Family Time Together",
    "Field Trip Paper",
    "Happy Party Time",
    "Animal Rescue Party",
    "Paper Beats Rock",
    "Computer Time AHOY"
];


typeValue.focus();

// cut down on resuing same code
function timeFunc(){
        timeStamp.innerHTML = time + ' seconds';  
        time--;
    if(time < 0){
        timeStamp.innerHTML = 0 + ' seconds';
        generateEndScreen();
    }
}



// when user selects level the time will be set
function selectLevel(e){
  const currentlevel = e.target.value;
    if(currentlevel === 'easy'){
        time = 4;
    
       setInterval(function(){
            timeFunc();
       },1000)
     
             wordToType.innerHTML = generateRand(easyWords,easyWords);
    }else if(currentlevel === 'medium'){
         time = 5;

      setInterval(function(){
            timeFunc();
        },1000)
  
            wordToType.innerHTML = generateRand(mediumWords,mediumWords);
     
    }else if(currentlevel === 'hard'){
        time = 6;

      setInterval(function(){
            timeFunc();
        },1000)

            wordToType.innerHTML = generateRand(hardWords, hardWords);
    }

}

// show end screen when game is over
function generateEndScreen(){
    gameOverMsg.style.display = 'flex';
    scoreResult.innerHTML = 'Your Score was ' + score;
}

// generates the random word to be typed
function generateRand(words, element){
    const rand = Math.floor(Math.random() * words.length);
    const randArray = element[rand];

    return randArray;
}
// check it match and add another random word by level
function checkWord(e){
    const currentWord = e.target.value;
    
    if(currentWord === wordToType.textContent){
        
    if(levelSelect.value === 'easy'){
             score++;
             time += 2;
            wordToType.innerHTML = generateRand(easyWords,easyWords);
            typeValue.value = '';
        }
    else if(levelSelect.value === 'medium'){
        score++;
        time +=3;
        wordToType.innerHTML = generateRand(mediumWords,mediumWords);
        typeValue.value = '';
    }
    else if(levelSelect.value === 'hard'){
        score++;
        time += 5;
        wordToType.innerHTML = generateRand(hardWords,hardWords);
        typeValue.value = '';
    }
    scoreCard.innerHTML = score;
}
}

// hit reset on end screen to reload game
function resetGame(){
   location.reload();
}

// Event listeners
levelSelect.addEventListener('change', selectLevel);
typeValue.addEventListener('keyup', checkWord);
resetBTN.addEventListener('click', resetGame);
