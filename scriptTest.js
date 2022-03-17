const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currectQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currectQuestionIndex++
    setnextQuestion()
})


function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currectQuestionIndex = 0;
    nextButton.classList.remove('hide')
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore = 0
    document.getElementById('right-answers').innerText = "Wlasciwe odpowiedzi: " + quizScore + "/3"
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach((answer) =>{
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}


function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}


function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    Array.from(answerButtonElement.children).forEach((button)=>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currectQuestionIndex + 1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset = correct){
        quizScore++
    }
    document.getElementById('right-answers').innerText = "Wlasciwe odpowiedzi: " + quizScore + "/3"
}


function setStatusClass(element, correct){
    //clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    //element.classList.remove('correct')
    //element.classList.remove('wrong')
}



const questions = [
    {
        question : 'Ile rol ma DOTA?',
        answers:[
            {text: '3', correct: false},
            {text: '5', correct: true},
            {text: '7', correct: false},
            {text: '6', correct: false}
        ],
    },
    {
        question : 'Nazwy stron v DOTA to:',
        answers:[
            {text: 'Dire - Tide', correct: false},
            {text: 'Radiance - Darkness', correct: false},
            {text: 'Hunters - Ghosts', correct: false},
            {text: 'Dire - Radiant', correct: true}
        ],
    },
    {
        question : 'W ktorej minucie mozesz wstrzymac gre?',
        answers:[
            {text: 'Na 1', correct: false},
            {text: 'Na 2', correct: false},
            {text: 'Nigdy', correct: false},
            {text: 'Na 4', correct: true}
        ],
    },
]