


alert("this is working so far.");


var user = prompt("What is your name?");
alert('Nice to meet you ' + user + ' enjoy the donuts.');
alert('Hope you have a good week,' + user);

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');




function question1() {
var answer1 = prompt("Do I live in Chicago? Input yes or no only, please.").toUpperCase();

alert("You just said " + answer1);
console.log("For question 1, " + user + " said " + answer1);

if (answer1 == "YES") {one.className ='wrong';

  one.textContent = "Nope. I live in Seattle.";

   }
else if (answer1 == "NO") { one.className = 'right'; one.textContent = "Right. I live in Seattle.";

}
};



function question2(){
var answer4 = prompt("Do I play piano?").toUpperCase();

alert("You said " + answer4);
console.log("For question 4, " + user + " said " + answer4);

if(answer4 == "YES") {two.className ='wrong'; two.textContent = "Nope. I can't even play Chopsticks.";}

else if (answer4 == "NO") {two.className = 'right'; two.textContent = "Right. I have no musical talent whatsover. Can't even play spoons.";

}

}
function question3() {

var answer5 = prompt("Have I been to Prague?").toUpperCase();

alert("You said " + answer5);
console.log("For question 5, " + user + "said " + answer5);

if (answer5 == "YES") {three.className ='wrong';
  three.textContent = "No. Would like to, though.";}

else if(answer5 == "NO") {three.className = 'right'; three.textContent = "Right. I haven't. Might be fun, though."}
}


function question4(){
  var answer3 = prompt("Am I an avid golfer? Input yes or no only, please.").toUpperCase();

  alert("You said " + answer3);
  console.log("For question 4, " + user + " said " + answer3);

  if(answer3 == "YES") {four.className ='wrong'; four.textContent = "No. Not really. We can attempt mini golf, though.";}
  else if (answer3 == "NO") {four.className = 'right'; four.textContent = " Right. Not really."}



}

function question5(){
  var answer2 = prompt("Do I have brown hair? Again, input yes or no only, please.").toUpperCase();

  alert("You just said " + answer2);
  console.log("For question 2, " + user + " said " + answer2);

  if (answer2 == "YES") {five.className = 'right';
    five.textContent = "Right. I do.";
}
  else if (answer2 == "NO") {five.className = 'wrong';
    five.textContent = "Nope. I do.";
  }

}


function question6(){
var answer = 7;
console.log(answer);

  var user = parseInt(prompt("I'm thinking of a number between 1 and 10."));

console.log(user);

while (user > answer) {six.className = 'wrong'; six.textContent = "Too high.";
  user = parseInt(prompt('You said ' + user + ' Guess again. Too high.'));
}


while (user < answer) {six.className = 'wrong'; six.textContent = "Too low.";
  user = parseInt(prompt('You said ' + user + ' Guess again. Too low.'));

}


if (user === answer) {six.className ='right';
  six.textContent = "Yep. You read my mind.";

}
}


function question7(){

  var question = prompt("Name a lead singer of Van Halen").toUpperCase();

  var answers = ['DAVID LEE ROTH', 'SAMMY HAGAR', 'GARY CHERONE', 'ROTH', 'HAGAR', 'CHERONE'];
  console.log(answers);

  for(i = 0; i< answers.length; i++) {

    if (
      (question === answers[0]) || (question === answers[1]) || (question === answers[2]) || (question === answers[3]) || (question === answers[4]) || (question === answers[5])
    )

     {seven.className = 'right';
      seven.textContent = "Yep. You know your 80s rock bands that go through lead singers.";

      break;}

    else {seven.className = 'wrong'; seven.textContent = "No, he's not. At least that I know of. Maybe as of now he is though. It's possible.";
    question = prompt('Try again.').toUpperCase();
  }};

};



question1();
question2();
question3();
question4();
question5();
question6();
question7();
