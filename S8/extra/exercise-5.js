const getQuestions = async () => {
    const request = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
    const response = await request.json();
    return response;
    console.log(response);
};

const printTrivial = (questions) => {
    const contentDiv = document.querySelector('[data-function="gameboard"]');
    contentDiv.innerHTML = '';

    questions?.forEach(question => {
    
        const questionContent = `
        <div class="questionContent">
          <h5 class="question">${question.question}</h5>
          <div class="answers">
            <input type="checkbox" class="correct">${question.correct_answer}
            <input type="checkbox" class="incorret">${question.incorrect_answers[0]}
            <input type="checkbox" class="incorret">${question.incorrect_answers[1]}
            <input type="checkbox" class="incorret">${question.incorrect_answers[2]}
          </div>
        </div>`; 
      
    contentDiv.innerHTML = questionContent;
  });  
};

const choosedCorrect = (questions) => {
    let yourScore = 0;

    questions.forEach(question => {
        const answers = [...question.correct_answer, question.incorrect_answers];
        if (question.answers === question.correct_answer) {
            yourScore++;
        }
    });
    alert('your score is: ' + yourScore);
};

const init = async () => {
    const list = await getQuestions();
    console.log(list);
    
    const startGame = document.querySelector('[data-function="start-game"]');
    startGame.addEventListener('click', () => printTrivial(list.results));

    const checkGame = document.querySelector('[data-function="check-game"]');
    checkGame.addEventListener('click', () => choosedCorrect(list.results));
};

init();