var readlineSync=require("readline-sync");
var name=readlineSync.question("What's your name ? ");
console.log("Welcome to F.R.I.E.N.D.S Quiz!! "+name);
// var question,answer;
var score=0;

function game(question,answer){
  var answerOne=readlineSync.question(question)
  if(answerOne===answer){

    console.log("You are right!!");
    score+=1;
  }
  else{
    console.log("Better luck next time...")
  }
  console.log("Yay your score is : "+score);
}

console.log("*************")

var questions=[{
  question:"WHo said this dialouge: Welcome to the real world!! It's sucks..You're gonna love it!!",
  options:["Monica","Ross","Phoebe"],
  answer:"Monica",
},
{
question:"What is name of the barcalounge in Joyes place?",
options:["Rosita","Lisa"],
answer:"Rosita"
},
{
question:"Who is Jack Geller?",
options:["Ross's Father","Rachel's Father"],
answer:"Ross's Father"
}];
for(var i=0;i<questions.length;i++){
  var res=questions[i];
  console.log(game(res.question,res.answer));

}
var highscore =3;
if (highscore===score){
  console.log("Congratulations!! you hve the highest score !!!")
}
else{
  console.log("All the best for your next game")
}
console.log("************")