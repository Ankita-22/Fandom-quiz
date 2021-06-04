var readlineSync = require("readline-sync");
var name = readlineSync.question("What's your name ? ");
console.log("Welcome to F.R.I.E.N.D.S Quiz!! " + name);
// var question,answer;
var score = 0;

function game(question, answer) {
  var answerOne = readlineSync.question(question)
  if (answerOne === answer) {

    console.log("You are right!!");
    score += 1;
  } else {
    console.log("Better luck next time...")
  }
  console.log("Yay your score is : " + score);
}

console.log("*************")

var levelOne = [{
    question: "How many seasons of Friends are there ?",
    options: ["10", "8", "5"],
    answer: "10",
  },
  {
    question: "What is name of the barcalounge in Joyes place?",
    options: ["Rosita", "Lisa"],
    answer: "Rosita"
  },
  {
    question: "Joey played Dr.Drake Ramoray on which Soap Opera?",
    options: ["DaysOfOurLives", "MacNCheese", "Alpachino"],
    answer: "DaysOfOurLives"
  },
  {
    question: "What is Chandler'sBing Job?",
    options: ["Transponster", "NoBody knows"],
    answer: "NoBody knows"
  },
  {
    question: "What is Chandler'sBing middle name?",
    options: ["Muriel", "Manny "],
    answer: "Muriel"
  },
  {
    question: "Which of the Joey's sisters did Chandler fool around?",
    options: ["Mary Queen", "Mary Angela"],
    answer: "Mary Angela"
  },
  
];
for (var i = 0; i < levelOne.length; i++) {
  var res = levelOne[i];
  console.log(game(res.question, res.answer));

}
// var highscore = 11;
if (score===6) {
  console.log("Congratulations!! you hve completed levelOne !!!")
  
  var bool=readlineSync.question("Do you want to play next level? ");
  if(bool==="yes"){
    console.log("LevelTwo started !!")
  }
} else {
  console.log("Better luck next time!!")
}
var levelTwo = [
{
    question: "What holidays did chandler hate?",
    options: ["Christmas", "Thanksgiving"],
    answer: "Thanksgiving"
  },
  {
    question: "How many pages was Rachel's letter to Ross?",
    options: [10, 20, 18],
    answer: 18
  },
  {
    question: " Who introduced Phoebe and Mike?",
    options: ["Ross","Monica","Joey"],
    answer: "Joey"
  },
   {
    question: " What food caused Ross to get sick on Space Mountain?",
    options: ["Pizza","Tacos","Sandwich"],
    answer: "Tacos"
  },
   {
    question: " What did mail man call?",
    options: ["Ms.ChanendlerBong","ChandlerBing"],
    answer: "Ms.ChanendlerBong"
  },
  {
    question: " What is Joeys favourite food?",
    options: ["Pizza","Sandwiches"],
    answer: "Sandwiches"
  },
  ];
  if(score===6){
  for (var i = 0; i < levelTwo.length; i++) {
  var res = levelTwo[i];
  console.log(game(res.question, res.answer));
  }
}
var highscore = 11;
if (highscore === score) {
  console.log("Congratulations!! you hve the highest score !!!")
} else {
  console.log("Well Played !! ")
}
console.log("*****************")