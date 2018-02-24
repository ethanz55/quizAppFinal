const questionList = [
  {
    number: 1,
    question: `When was the album ‘Culture’ released?`,
    answer1: `November 3, 2016`,
    answer2: `December 16, 2016`,
    answer3: `January 27, 2017`,
    answer4: `February 13, 2017`,
    correct: `January 27, 2017`
  },
  
  {
    number: 2,
    question: `Which of the following was the most popular song in the album ‘Culture’?`,
    answer1: `\"Bad and Boujee\"`,
    answer2: `\"Slippery\"`,
    answer3: `\"T-Shirt\"`,
    answer4: `\"Call Casting\"`,
    correct: `\"Bad and Boujee\"`
  },
  
  {
    number: 3,
    question: `Which of the following is not a member of Migos?`,
    answer1: `Quavo`,
    answer2: `Amine`,
    answer3: `Takeoff`,
    answer4: `Offset`,
    correct: `Amine`
  },
  
  {
    number: 4,
    question: `How many songs are in the album ‘Culture II’?`,
    answer1: `22 songs`,
    answer2: `23 songs`,
    answer3: `24 songs`,
    answer4: `25 songs`,
    correct: `24 songs`
  },
  
  {
    number: 5,
    question: `Which of the following is a song by Migos?`,
    answer1: `\"Shade\"`,
    answer2: `\"Nikes\"`,
    answer3: `\"OG Bobby Johnson\"`,
    answer4: `\"Big on Big\"`,
    correct: `\"Big on Big\"`
  },
  
  {
    number: 6,
    question: `Which famous rapper brought Migos to fame?`,
    answer1: `2 Chainz`,
    answer2: `Drake`,
    answer3: `Gucci Mane`,
    answer4: `Frank Ocean`,
    correct: `Drake`
  },
  
  {
    number: 7,
    question: `Who features in the Migos song “Slippery”?`,
    answer1: `2 Chainz`,
    answer2: `Drake`,
    answer3: `Gucci Mane`,
    answer4: `Frank Ocean`,
    correct: `Gucci Mane`
  },
  
  {
    number: 8,
    question: `Which Katy Perry song is the group Migos featured in?`,
    answer1: `\"Swish Swish\"`,
    answer2: `\"Bon appetit\"`,
    answer3: `\"Chained To The Rhythm\"`,
    answer4: `\"Choose Your Battles\"`,
    correct: `\"Bon appetit\"`
  },
  
  {
    number: 9,
    question: `What is Takeoff’s real name?`,
    answer1: `Quavious Keyate Marshall`,
    answer2: `Kirshnik Khari Ball`,
    answer3: `Kiari Kendrell Cephus`,
    answer4: `Ben Smith`,
    correct: `Kirshnik Khari Ball`
  },
  
  {
    number: 10,
    question: `How long was Offset’s first prison sentence?`,
    answer1: `8 months`,
    answer2: `12 months`,
    answer3: `18 months`,
    answer4: `24 months`,
    correct: `8 months`
  }
];

let questionNumber = 0;
let quizScore = 0;

function addQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
}
function addQuizScore() {
  quizScore++;
  $('.quizScore').text(quizScore);
}
function emptyContainer() {
  $('.pageInserts').empty();
}
function emptyTitle() {
  $('.questionScore').empty();
}

function handleStartButton() {
  $('.questionNumber').text(questionNumber + 1);
  $('.startButton').on('click', function(event) {
    $('.startQuiz').empty();
    $('.pageInserts').append(`
          <form>
            <fieldset>
            <legend>${questionList[questionNumber].question}</legend>
              <label for="answer1">
                <input type="radio" name="answer1" id="answer1" required>
              ${questionList[questionNumber].answer1}
              </label>
              
              <label for="answer2">
                <input type="radio" name="answer2" id="answer2" required>
              ${questionList[questionNumber].answer2}
              </label>
                
              <label for="answer3">
                <input type="radio" name="answer3" id="answer3" required>
              ${questionList[questionNumber].answer3}
              </label>
                
              <label for="answer4">
                <input type="radio" name="answer4" id="answer4" required>
              ${questionList[questionNumber].answer4}
              </label>
              
              <button type="submit" class="submitButton">Submit</button>
            </fieldset>
          </form>
    `);
    handleSubmitButton();
    console.log("`handleStartButton` ran");
    console.log("Starting Quiz");
  });
}

function handleSubmitButton() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    let userAnswer = $('input:checked').parent().text().trim();
    console.log('`handleSubmitButton` ran');
    console.log(`User selects "${userAnswer}"`);
    let userAnswerCheck = $('input:checked').parent().text().trim();
    let correctAnswer = `${questionList[questionNumber].correct}`;
    if (userAnswerCheck === correctAnswer) {
      correctFeedback();
    }
    else {
      incorrectFeedback();
    }
  });
}

function correctFeedback() {
  emptyContainer();
  console.log('`correctFeedback` ran')
  $('.pageInserts').append(`
    <h3>Correct! Keep proving yourself!</h3>
    <button type="button" class="nextButton">Next Question</button>
  `);
  handleNextButton();
  addQuizScore();
}

function incorrectFeedback() {
  let correctAnswer = `${questionList[questionNumber].correct}`;
  emptyContainer();
  console.log('`incorrectFeedback` ran');
  $('.pageInserts').append(`
    <h3>Wrong! And you call yourself a fan?</h3>
    <h3>It was ${correctAnswer}</h3>
    <button type="button" class="nextButton">Next Question</button>
  `);
  handleNextButton();
}

function handleNextButton() {
  $('.nextButton').on('click', function(event) {
    if (questionNumber < 9) {
      console.log('`handleNextButton` ran');
      addQuestionNumber();
      emptyContainer();
      $('.pageInserts').append(`
          <form>
            <fieldset>
            <legend>${questionList[questionNumber].question}</legend>
              <label for="answer1">
                <input type="radio" name="answer" id="answer1" required>
              ${questionList[questionNumber].answer1}
              </label>
              
              <label for="answer2">
                <input type="radio" name="answer" id="answer2" required>
              ${questionList[questionNumber].answer2}
              </label>
                
              <label for="answer3">
                <input type="radio" name="answer" id="answer3" required>
              ${questionList[questionNumber].answer3}
              </label>
                
              <label for="answer4">
                <input type="radio" name="answer" id="answer4" required>
              ${questionList[questionNumber].answer4}
              </label>
              
              <button type="submit" class="submitButton">Submit</button>
            </fieldset>
          </form>
    `);
    handleSubmitButton();
    console.log(questionNumber);
    }
    else {
      emptyContainer();
      finalPage();
      handleRestartButton();
    }
  });
}

function finalPage() {
  console.log('`finalPage` ran');
  let finalScore = quizScore;
  console.log(`User's score: ${quizScore}`);
  if (finalScore >= 8) {
    console.log("User's score is greater than or equal to 8");
    emptyTitle();
    $('.pageInserts').append(`
      <p>Final Score: <span class="quizScore">${finalScore}</span>/10</p>
      <h3>Don't judge a book by it's cover...You're truly a fan</h3>
      <button type="button" class="restartButton">Restart Quiz</button>
    `);
  }
  else if (finalScore < 8 && finalScore >= 5) {
    console.log("User's score is between 5 and 7");
    emptyTitle();
    $('.pageInserts').append(`
      <p>Final Score: <span class="quizScore">${finalScore}</span>/10</p>
      <h3>You're no true fan yet, a little more work and you will be there</h3>
      <button type="button" class="restartButton">Restart Quiz</button>
    `);
  }
  else {
    console.log("User's score is less than or equal to 4");
    emptyTitle();
    $('.pageInserts').append(`
      <p>Final Score: <span class="quizScore">${finalScore}</span>/10</p>
      <h3>Disappointing...You must train more in the Migos arts, young disciple</h3>
      <button type="button" class="restartButton">Restart Quiz</button>
    `);
  }
}

function handleRestartButton() {
  $('.restartButton').on('click', function(event){
    console.log('`handleRestartButton` ran');
    window.location.reload(true);    
    // emptyContainer();
    // $('.questionScore').append(`
    //   <li>Question: <span class="questionNumber">0</span>/10</li>
    //   <li>Score: <span class="quizScore">0</span></li>
    // `);
    // $('.startquiz').append(`
    //   <h2>ARE YOU A TRUE MIGOS FAN?</h2>
    //   <button type="button" class="startButton">Start</button>
    // `);
    // questionNumber = 0;
    // quizScore = 0;
    // handleStartButton();
  });
}

function handleAllButtons() {
  console.log('`handleAllButtons` ran - Starting Quiz');
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

$(handleAllButtons);























