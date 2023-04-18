const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function createColors(numBoxes){
  let numColor = parseInt(numBoxes/2);

  return array;
}

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  const gameSection = document.querySelector("section");
  console.log(gameSection.innerHTML);

  let i = 0;
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.dataset.color = color;
    newDiv.dataset.index = i;

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
    i++;
  }
}

let prevColor = '';
let prevInd = '';
let currColor = '';
let currInd = '';
var card1 = false;
var card2 = false;
var prevEle = null;
var match = false;
let timer = null;


// function colorMatch(obj1, obj2) {
//   let cm = obj1.dataset.color == obj2.dataset.color;
//   let nim = obj1.dataset.ind != obj2.dataset.ind;

//   return cm && nim;
// }


// TODO: Implement this function!
function handleCardClick(event) {
  console.log('begin_handleCardClick');
  if(card1 && card2) return;

  const ele = event.target;
  currColor = ele.dataset.color;
  currInd = ele.dataset.index;
  if(prevEle){
    prevColor = prevEle.dataset.color;
    prevInd = prevEle.dataset.index;
  }

  console.log('prevEle = ',prevEle);
  console.log('currObj = ',ele);

  ele.style.backgroundColor = currColor;

  console.log('prevColor = ' + prevColor);
  console.log('currColor = ' + currColor);
  console.log('prevInd = ' + prevInd);
  console.log('currInd = ' + currInd);

  //compare current and previous choice
  colorMatch = (currColor == prevColor) ;
  indNMatch = (currInd != prevInd);
  match = (colorMatch && indNMatch);

  if(match){
    //new match
    console.log('match found');
    //keep the colors
    ele.style.backgroundColor = currColor;
    prevEle.style.backgroundColor = currColor;

    //flag them as set
    ele.dataset.set = true;
    prevEle.dataset.set = true;

    //cleanup
    match = false;
    if(timer){
      clearTimeout(timer);
    }
  }
  else{
    if(!ele.dataset.set){//if new choice (not set as a match)

      //this timer determines how long the square will 
      //remain present if no viable match is found
      timer = setTimeout(function(){ 
          ele.style.backgroundColor = '';
          prevColor = '';
          prevInd = '';
          prevEle = null;
          //match = false;
      },1000);
    }
  } 

  // console.log('prevColor = ' + prevColor);
  // console.log('currColor = ' + currColor);
  // console.log('prevInd = ' + prevInd);
  // console.log('currInd = ' + currInd);

  //save prev object in case next is a match
  console.log('prevEle = ',prevEle);
  prevEle = ele;
  console.log('currObj = ',prevEle);
  
  //prevent more than 2 cards open at a time
  if(card1){
    card2 = true;
    setTimeout(function(){card2 = false},1000);
  }else{
    card1 = true;
    setTimeout(function(){card1 = false},1000);
  }

  const restartBtn = document.querySelector('#restart');
  restartBtn.addEventListener('click',function(e){
    e.preventDefault();
      console.log('game REstarted');
      prevColor = '';
      prevInd = '';
      currColor = '';
      currInd = '';
      card1 = false;
      card2 = false;
      prevEle = null;
      match = false;
      timer = null;

      const gameDiv = document.getElementById('game');
      const cards = gameDiv.querySelectorAll('div');
      //const cards = document.querySelectorAll('div');
      let i = 0;
      shuffledColors = shuffle(COLORS);
      for(let card of cards){
        card.style.backgroundColor = '';
        card.dataset.color = shuffledColors[i];
        card.dataset.index = i;
        delete card.dataset.set;
        //card.dataset.set = false;
        i++;
      }



      //document.location.reload();
      //startGame();

      //createDivsForColors(shuffledColors);
      //started = true;    
  });

  console.log('end');
}

const startBtn = document.querySelector('#startgame');

var started = false;

startBtn.addEventListener('click',function(e){
  e.preventDefault();
  if(!started){
    startGame();
  }
  
});

/*
const form = document.querySelector('#num-cards');
const input = document.querySelector('#num-item');

form.addEventListener('click', function(e){
    //console.log(e);
    //console.log(e.target);
    if(e.target.tagName === 'BUTTON'){
        
    }
});

*/

function startGame(){
  console.log('game started');
  createDivsForColors(shuffledColors);
  started = true;
}

// when the DOM loads

