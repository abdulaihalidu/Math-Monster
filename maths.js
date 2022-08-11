var answer;
var score = 0;
var prediction;
var backgroundImages = [];

function nextQuestion() {
  const n1 = Math.floor(Math.random() * 5);
  document.getElementById("n1").innerHTML = n1;

  const n2 = Math.floor(Math.random() * 6);
  document.getElementById("n2").innerHTML = n2;
  answer = n1 + n2;
}

function checkAnswer() {
  prediction = predictImage();
  // console.log(`Answer: ${answer}, prediction: ${prediction}`);

  if (prediction == answer) {
    score++;
    console.log(`Correct! Score: ${score}`);
    if (score <= 6) {
      backgroundImages.push(`url('images/bg${score}.svg')`);
      document.body.style.backgroundImage = backgroundImages;
    } else {
      alert(
        "Well done! Your your monster is fully grown! Want to start again?"
      );
      score = 0;
      backgroundImages = [];
      document.body.style.backgroundImage = backgroundImages;
    }
  } else {
    if (score != 0) {
      score--;
    }
    console.log(`Wrong. Score ${score}`);

    alert(
      `Oops! Seems like you guessed the answer to be ${answer} but our monster says
      it is ${prediction}! Retry and make sure to write the number neater next time!`
    );
    setTimeout(function () {
      backgroundImages.pop();
      document.body.style.backgroundImage = backgroundImages;
    }, 1000);
  }
}
