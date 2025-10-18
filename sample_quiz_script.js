const questions = [
    {
        question : "Which is the largest animal?",
        answers :[
            {text:"Shark",correct:"False"},
            {text:"Blue Whale",correct:"True"},
            {text:"Girrafe",correct:"False"},
            {text:"Elephant",correct:"False"}
        ]
    },

    {
        question : "Which is the largest animal?",
        answers :[
            {text:"Shark",correct:"False"},
            {text:"Blue Whale",correct:"True"},
            {text:"Girrafe",correct:"False"},
            {text:"Elephant",correct:"False"}
        ]
    },

    {
        question : "Which is the largest animal?",
        answers :[
            {text:"Shark",correct:"False"},
            {text:"Blue Whale",correct:"True"},
            {text:"Girrafe",correct:"False"},
            {text:"Elephant",correct:"False"}
        ]
    },

    {
        question : "Which is the largest animal?",
        answers :[
            {text:"Shark",correct:"False"},
            {text:"Blue Whale",correct:"True"},
            {text:"Girrafe",correct:"False"},
            {text:"Elephant",correct:"False"}
        ]
    }

];

const questionElement = document.querySelector('.question')
const answerButton = document.querySelector('.answer-buttons')
const nextButton = document.querySelector('.nxt-btn')

let currQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currQuestionIndex]
    let questionNo = currQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = `${answer.text}`
        button.classList.add('btn')
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectanswer)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectanswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "True";
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect')
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === 'True'){
            button.classList.add('correct')
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`
    nextButton.innerHTML = `Play Again`
    nextButton.style.display = "block"
}

function handleNextButton(){
    currQuestionIndex++;
    if(currQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}

nextButton.addEventListener('click', () => {
    if(currQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz()
    }
})

startQuiz()