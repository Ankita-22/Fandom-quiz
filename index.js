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
    answer: "10",
  },
  {
    question: "What is name of the barcalounge in Joyes place?",
    answer: "Rosita"
  },
  {
    question: "Joey played Dr.Drake Ramoray on which Soap Opera?",
    answer: "DaysOfOurLives"
  },
  {
    question: "What is Chandler'sBing Job?",
    answer: "NoBody knows"
  },
  {
    question: "What is Chandler'sBing middle name?",
    answer: "Muriel"
  },
  {
    question: "Which of the Joey's sisters did Chandler fool around?",
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
    answer: "Thanksgiving"
  },
  {
    question: "How many pages was Rachel's letter to Ross?",
    answer: 18
  },
  {
    question: " Who introduced Phoebe and Mike?",
    answer: "Joey"
  },
   {
    question: " What food caused Ross to get sick on Space Mountain?",
    answer: "Tacos"
  },
   {
    question: " What did mail man call?",
    answer: "Ms.ChanendlerBong"
  },
  {
    question: " What is Joeys favourite food?",
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