const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 / 2?',
    answers: [
      { text: '1', correct: true },
      { text: '2', correct: false }
    ]
  },
  {
    question: 'Which of these is an interface between a user and the kernel??',
    answers: [
      { text: 'Oracle', correct: false },
      { text: 'Linux', correct: false },
      { text: 'Shell', correct: true },
      { text: 'Windows', correct: false }
    ]
  },
  {
    question: 'Which command can you use to re-execute a previous command?',
    answers: [
      { text: '!cat', correct: false },
      { text: '!!', correct: true },
      { text: '!a', correct: false },
      { text: '!last', correct: false }
    ]
  },
  {
    question: 'What is the largest title tag called?',
    answers: [
      { text: 'head1', correct: false },
      { text: 'h1', correct: true },
      { text: 'heading1', correct: false },
      { text: 'title1', correct: false }
    ]
  },
  {   
    question: '______ tags label an unordered list and ______ tags label each element of the list.',
    answers: [
      { text: 'unorder & list', correct: false },
      { text: 'ul & li', correct: true },
      { text: 'listing & bullet', correct: false },
      { text: 'li & ul', correct: false }
    ]
  },
  {   
    question: 'How could you group the quiz content if you wanted to add a seperate background color?',
    answers: [
      { text: 'Put it in a head tag.', correct: false },
      { text: 'Put all of the html on the same line', correct: false },
      { text: 'Put it in a div tag with a #quiz-content id.', correct: true },
      { text: 'Add \DIVIDE at the beginning of each line.', correct: false }
    ]
  },
  
  {
    question: 'What is 45 * 20?',
    answers: [
      { text: '950', correct: false },
      { text: '900', correct: true }
    ]
  }
]