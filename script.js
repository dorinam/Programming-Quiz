var correct = 0;

// QUIZ QUESTIONS:

var answer1 = prompt("What language do you use to build the structure of web pages?");
if ( answer1.toUpperCase() === 'HTML' ) {
 correct += 1; 
}

var answer2 = prompt("What language do you use to style web pages?");
if ( answer2.toUpperCase() === 'CSS' ) {
 correct += 1; 
}

var answer3 = prompt("Name a programming language that's also a snake");
if ( answer3.toUpperCase() === 'PYTHON' ) {
 correct += 1; 
}

var answer4 = prompt("Name a programming language that's also a gem");
if ( answer4.toUpperCase() === 'RUBY' ) {
 correct += 1; 
}

var answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
 correct += 1; 
}

// RESULTS:

document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

// RANKING:

if ( correct === 5 ) {
  document.write('<br><img src="img/goldcrown.png"><br><br><p><strong>Congratulations! You earned a gold crown!</strong></p>');  
} else if (correct >= 3) {
  document.write('<br><img src="img/silvercrown.png"><br><br><p><strong>Congratulations! You earned a silver crown.</strong></p>');  
} else if (correct >= 2) {
  document.write('<br><img src="img/bronzecrown.png"><br><br><p><strong>Congratulations! You earned a bronze crown.</strong></p>');  
} else {
  document.write('<br><img src="img/nocrown.png"><br><br><p><strong>No crown for you. You need to study more.</strong></p>');
}
               