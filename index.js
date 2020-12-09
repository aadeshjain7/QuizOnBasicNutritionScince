var readlineSync=require('readline-sync');
const chalk=require('chalk');
var score=0
var userName=readlineSync.question("Enter your name ");
console.log(chalk.green("Welcome "+chalk.yellow.italic(userName)+",Let's play a Quiz on "+chalk.yellow.italic("Basic Nutrion Science")));
var playorexit=readlineSync.question(chalk.green("Press "+chalk.yellow.italic('y ')+"if you want to play or any key if you want to exit "));
if(playorexit==='y'){
  console.log(chalk.red.bold("Rules:\n")+chalk.red("For every right answer you get +2 and for wrong you get -1\n\n")+chalk.green("Let's Play:"));

function play(question,answer){
  var userAnswer=readlineSync.question(chalk.blue(question));
  if (userAnswer===answer){
    console.log(chalk.red("You are right"));
    score=score+2;
  }else{
    console.log(chalk.red("You are wrong"));
    score=score-1
  }
  console.log(chalk.cyan("Your score is:"+chalk.yellow.italic(score)));
  console.log(chalk.green("==================================="))
}

var questions=[{
  question:"Nutrients in human body are classified as?\na.Macronutrients\nb.Micronutrients\nc.Both a and b\nd.None of the above\n",
  answer:"c"

},{question:"Macronutrients consits of:\na.Protein and Carbohydrates only\nb.Vitamins and Minerals only\nc.Fats only\nd.Protein,Carbohydrates and Fats only\n",
answer:"d"

},{question:"Micronutrients consits of:\na.Protein and Carbohydrates only\nb.Vitamins and Minerals only\nc.Fats only\nd.Protein,Carbohydrates and Fats only\n",
answer:"b"
},{
  question:"Human body require a deficit of how many calories per week to reduce 1 pound of bodyweight?\na.3000\nb.4000\nc.2500\nd.3500\n",
  answer:"d"
},{
  question:"Which among the following is least calorie dense food?\na.Oats\nb.Vegetables\nc.Paneer\nd.Banana\n",
  answer:"b"
},{question:"Calories per gram of carbohydrate and Protein is:\na.3\nb.4\nc.9\nd.7\n",
  answer:"b"

},{question:"Calories per gram of Fats is:\na.3\nb.4\nc.9\nd.7\n",
  answer:"c"}];
  for(i=0;i<questions.length;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer)
  }
  console.log(chalk.cyan("Your final score is: "+chalk.yellow.italic(score)));
  console.log(chalk.green("==================================="))
  console.log(chalk.red("Check out highscores:"))
  var highscores=[{
    name:"Moksh",
    score:14
  
  },{
    name:"Yash",
    score:11

  }];
  for(i=0;i<highscores.length;i++){
    var scores=highscores[i]
    console.log(chalk.cyan(scores.name),chalk.yellow.italic(scores.score))
    
  }
  console.log(chalk.green("Thank you for playing.\n\n"))
  console.log("Note:If you have scored more than 11,send me  screenshot i will update highscores list")
}else{
  console.clear()
}







