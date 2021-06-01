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

var questions = [{
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
  {
    question: "What holidays did chandler hate?",
    options: ["Christmas", "Thanksgiving"],
    answer: "NoBody knows"
  },
  {
    question: "How many pages was Rachel's letter to Ross?",
    options: [10, 20, 18],
    answer: 18
  },
];
for (var i = 0; i < questions.length; i++) {
  var res = questions[i];
  console.log(game(res.question, res.answer));

}
var highscore = 3;
if (highscore === score) {
  console.log("Congratulations!! you hve the highest score !!!")
} else {
  console.log("All the best for your next game")
}
console.log("************")