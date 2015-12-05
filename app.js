


var user = prompt("What is your name?");

var half = document.getElementById('half');
var halfOne = document.getElementById('halfOne');
var one = document.getElementById('one');

var oneHalf = document.getElementById('oneHalf');


var two = document.getElementById('two');



half.textContent = 'Nice to meet you ' + user + '.';

counter = 0;

function question1() {

one.textContent = 'First question: Do I live in Chicago?';

var answer1 = prompt("Do I live in Chicago? Input yes or no only, please.").toUpperCase();

halfOne.textContent = "You just said " + answer1 + ".";
console.log("For question 1, " + user + " said " + answer1);

if (answer1 == "YES") {one.className ='wrong';
  one.textContent = "You said " + answer1 + " Nope. I live in Seattle.";
} else if (answer1 == "NO") { one.className = 'right'; one.textContent = "You said " + answer1 + " Right. I live in Seattle."; counter ++;
oneHalf.textContent = "You have " + counter + " correct."
}
};



function question2(){
  halfOne.textContent = "Second question: Do I play piano?";
  var answer4 = prompt("Do I play piano?").toUpperCase();

  console.log("For question 4, " + user + " said " + answer4);

  if(answer4 == "YES") {one.className ='wrong'; one.textContent = "You said " + answer4 + " Nope. I can't even play Chopsticks.";
}
  else if (answer4 == "NO") {one.className = 'right'; one.textContent = "You said " + answer4 + " Right. I have no musical talent whatsover. Can't even play spoons."; counter ++; oneHalf.textContent = "You have " + counter + " correct."
  }
  };

function question3() {

halfOne.textContent = 'Third question: Have I been to Prague?';

var answer5 = prompt("Have I been to Prague?").toUpperCase();


console.log("For question 5, " + user + "said " + answer5);

if (answer5 == "YES") {one.className ='wrong';
  one.textContent = "You said " + answer5 +" No. Would like to, though. I mean, why not Prague?";}

else if(answer5 == "NO") {one.className = 'right'; one.textContent = "You said " + answer5 + " Right. I haven't been to Prague. Might be fun, though."; counter ++; oneHalf.textContent = "You have " + counter + " correct."}

}


function question4(){

  halfOne.textContent = 'Fourth question: Am I an avid golfer?';
  var answer3 = prompt("Am I an avid golfer? Input yes or no only, please.").toUpperCase();


  console.log("For question 4, " + user + " said " + answer3);

  if(answer3 == "YES") {one.className ='wrong'; one.textContent = "You said " + answer3 + ". No. Not really. We can attempt mini golf, though.";}
  else if (answer3 == "NO") {one.className = 'right'; one.textContent = "You said " + answer3 + ". Right. Not really a golfer."; counter ++; oneHalf.textContent = "You have " + counter + " correct."}


}

function question5(){
  halfOne.textContent = "Fifth question: Do I have brown hair?";
  var answer2 = prompt("Do I have brown hair? Again, input yes or no only, please.").toUpperCase();

  console.log("For question 2, " + user + " said " + answer2);

  if (answer2 == "YES") {one.className = 'right';
    one.textContent = "You said " + answer2 + ". Right. I do have brown hair."; counter ++; oneHalf.textContent = "You have " + counter + " correct.";
}
  else if (answer2 == "NO") {one.className = 'wrong';
    one.textContent = "You said " + answer2 + ". Nope. I do have brown hair.";
  }

}

function question6(){
  halfOne.textContent = "Sixth quetion: I'm thinking of a number between 1 and 10. Take a guess."

  var theNumber = 4;
  var userGuess = parseInt(prompt("I'm thinking of a number from 1 to 10."));
  console.log(userGuess);

  while(userGuess !== theNumber){
    if(userGuess > theNumber){one.className = 'wrong'; one.textContent = 'You said ' + userGuess + ' Too high.';
    userGuess = parseInt(prompt("Guess again. Too high."));
    console.log(userGuess);
  } else if (userGuess < theNumber){ one.className = 'wrong'; one.textContent = " You said " + userGuess + " Too low.";
      userGuess = parseInt(prompt("Guess again. Too low."));
      console.log(userGuess);
  }

  while(userGuess === theNumber){one.className = 'right'; one.textContent = "Yep. You read my mind.";counter ++; oneHalf.textContent = "You have " + counter + " correct.";
    console.log("Yep. That's it. You read my mind.")
    break;
  }
}

}

function question7(){

  halfOne.textContent = "Last question: Name a lead singer of Van Halen.";

  var question = prompt("Name a lead singer of Van Halen").toUpperCase();

  var answers = ['DAVID LEE ROTH', 'SAMMY HAGAR', 'GARY CHERONE', 'ROTH', 'HAGAR', 'CHERONE'];
  console.log(answers);

  for(i = 0; i< answers.length; i++) {

    if (
      (question === answers[0]) || (question === answers[1]) || (question === answers[2]) || (question === answers[3]) || (question === answers[4]) || (question === answers[5])
    )

     {
       one.className = 'right';
      one.textContent = "Yep. You know your 80s rock bands that go through lead singers.";

      break;} else {one.className = 'wrong'; one.textContent = "Nope. Not " + question + ".";
    question = prompt('Try again.').toUpperCase();
  }};

two.textContent = "That's it. You now know stuff about me and, I guess, Van Halen."; counter ++; oneHalf.textContent = "You have " + counter + " correct.";
};


question1();
question2();
question3();
question4();
question5();
question6();
question7();
