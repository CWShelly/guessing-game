

var count = 0;
var user = prompt("What is your name?");
alert('Nice to meet you ' + user + ' enjoy the donuts.');
alert('Hope you have a good week,' + user);

var counter = 0;

var answer1 = prompt("Do I live in Chicago? Input yes or no only, please.").toUpperCase();

alert("You just said " + answer1);
console.log("For question 1, " + user + " said " + answer1);

if (answer1 == "YES") {alert("No, I live in Seattle."); }
else if (answer1 == "NO") { alert("Right. I live in Seattle, not Chicago."); counter +=1;} alert("You have " + counter + " right so far " + user);

var answer2 = prompt("Do I have brown hair? Again, input yes or no only, please.").toUpperCase();

alert("You just said " + answer2);
console.log("For question 2, " + user + " said " + answer2);

if (answer2 == "YES") {alert("Yep. I do."); counter += 1;}
else if (answer2 == "NO") {alert("Nope. Hair's brown.");}
alert("You have " + counter + " right so far " + user);



var answer3 = prompt("Am I an avid golfer? Input yes or no only, please.").toUpperCase();

alert("You said " + answer3);
console.log("For question 3, " + user + " said " + answer3);

if(answer3 == "YES") {alert("No, I'm not really into golf.");}
else if (answer3 == "NO") {alert ("Right. I'm not much of a golf person."); counter +=1;}
alert("You have " + counter + " right so far " + user);



var answer4 = prompt("Do I play piano?").toUpperCase();

alert("You said " + answer4);
console.log("For question 4, " + user + " said " + answer4);

if(answer4 == "YES") {alert("No. I don't tickle the ivories.");}

else if (answer4 == "NO") {alert("Right. I have no musical talent whatsover. Not even on spoons."); counter += 1;};

alert("You have " + counter + " right so far " + user);

var answer5 = prompt("Have I been to Prague?").toUpperCase();

alert("You said " + answer5);
console.log("For question 5, " + user + " said " + answer5);

if (answer5 == "YES") {alert("Nope. Never been. Would like to, though.");}

else if(answer5 == "NO") {alert("Right. I haven't. Might be fun, though."); counter +=1;}

alert("You have " + counter + " right so far " + user);


alert("You got " + counter + " correct, " + user + ". I don't live in Chicago. I do have brown hair. I am not an avid golfer. I don't play piano, and I haven't been to Prague.");


var answer = 7;
console.log(answer);

  var user = parseInt(prompt("I'm thinking of a number between 1 and 10."));

console.log(user);

while (user > answer) {
  user = parseInt(prompt('You said ' + user + ' Guess again. Too high.'))
}


while (user < answer) {
  user = parseInt(prompt('You said ' + user + ' Guess again. Too low.'))
}


while (user === answer) {
  alert("yes that's it");
  break;
}


alert("Last question.");


var question = prompt("Name a lead singer of Van Halen").toUpperCase();

var answers = ['DAVID LEE ROTH', 'SAMMY HAGAR', 'GARY CHERONE', 'ROTH', 'HAGAR', 'CHERONE'];
console.log(answers);

for(i = 0; i< answers.length; i++) {

  if (
    (question === answers[0]) || (question === answers[1]) || (question === answers[2]) || (question === answers[3]) || (question === answers[4]) || (question === answers[5])
  )

   {
    alert("Yep");

    break;}

  else {alert("Nope."); question = prompt('Try again.').toUpperCase();
}};
