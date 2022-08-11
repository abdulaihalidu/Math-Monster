var answer;
var score = 0;
var prediction;
var previousBgs = [];
var backgroundImage = "";

function nextQuestion() {
  const n1 = Math.floor(Math.random() * 5);
  document.getElementById("n1").innerHTML = n1;

  const n2 = Math.floor(Math.random() * 6);
  document.getElementById("n2").innerHTML = n2;
  answer = n1 + n2;
}

function checkAnswer() {
  prediction = predictImage();
  
  if (prediction == answer) {
    score++;
    if (score <= 5) {
      previousBgs.push(backgroundImage);
      backgroundImage = `url('images/bg${score}.svg')`;
      document.body.style.backgroundImage = backgroundImage;
    } else {
      alert(
        "Well done! Your your monster is fully grown! Want to start again?"
      );
      score = 0;
      previousBgs = [];
      backgroundImage = "";
      document.body.style.backgroundImage = backgroundImage;
    }
  } else {
    if (score != 0) {
      score--;
    }

    alert(
      `Oops! Seems like you guessed the answer to be ${prediction} but our monster says
      it is ${answer}! Retry and make sure to write the number neater next time!`
    );
    setTimeout(function () {
      backgroundImage = previousBgs[previousBgs.length - 1];
      previousBgs.pop();
      document.body.style.backgroundImage = backgroundImage;
    }, 1200);
  }
}
