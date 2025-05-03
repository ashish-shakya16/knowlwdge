const questions = [
    { question: "What is the capital of France?", answers: [{ text: "Paris", correct: true }, { text: "London", correct: false }, { text: "Rome", correct: false }, { text: "Berlin", correct: false }] },
    { question: "Which planet is known as the Red Planet?", answers: [{ text: "Earth", correct: false }, { text: "Mars", correct: true }, { text: "Jupiter", correct: false }, { text: "Saturn", correct: false }] },
    { question: "What is the largest ocean on Earth?", answers: [{ text: "Atlantic Ocean", correct: false }, { text: "Indian Ocean", correct: false }, { text: "Pacific Ocean", correct: true }, { text: "Arctic Ocean", correct: false }] },
    { question: "Who wrote 'Romeo and Juliet'?", answers: [{ text: "Charles Dickens", correct: false }, { text: "Jane Austen", correct: false }, { text: "William Shakespeare", correct: true }, { text: "Mark Twain", correct: false }] },
    { question: "What is the chemical symbol for water?", answers: [{ text: "H2O", correct: true }, { text: "O2", correct: false }, { text: "CO2", correct: false }, { text: "NaCl", correct: false }] },
    { question: "What is the capital of Japan?", answers: [{ text: "Beijing", correct: false }, { text: "Seoul", correct: false }, { text: "Tokyo", correct: true }, { text: "Bangkok", correct: false }] },
    { question: "Who painted the Mona Lisa?", answers: [{ text: "Vincent van Gogh", correct: false }, { text: "Pablo Picasso", correct: false }, { text: "Leonardo da Vinci", correct: true }, { text: "Claude Monet", correct: false }] },
    { question: "What is the smallest planet in our solar system?", answers: [{ text: "Venus", correct: false }, { text: "Mars", correct: false }, { text: "Mercury", correct: true }, { text: "Pluto", correct: false }] },
    { question: "What is the hardest natural substance on Earth?", answers: [{ text: "Gold", correct: false }, { text: "Iron", correct: false }, { text: "Diamond", correct: true }, { text: "Silver", correct: false }] },
    { question: "What is the capital of Australia?", answers: [{ text: "Sydney", correct: false }, { text: "Melbourne", correct: false }, { text: "Canberra", correct: true }, { text: "Perth", correct: false }] },
    { question: "What is the speed of light?", answers: [{ text: "300,000 km/s", correct: true }, { text: "150,000 km/s", correct: false }, { text: "450,000 km/s", correct: false }, { text: "600,000 km/s", correct: false }] },
    { question: "Who is the author of 'Harry Potter' series?", answers: [{ text: "J.R.R. Tolkien", correct: false }, { text: "J.K. Rowling", correct: true }, { text: "Stephen King", correct: false }, { text: "George R.R. Martin", correct: false }] },
    { question: "What is the capital of Canada?", answers: [{ text: "Toronto", correct: false }, { text: "Vancouver", correct: false }, { text: "Ottawa", correct: true }, { text: "Montreal", correct: false }] },
    { question: "What is the formula for calculating the area of a circle?", answers: [{ text: "2πr", correct: false }, { text: "πr^2", correct: true }, { text: "πd", correct: false }, { text: "2πr^2", correct: false }] },
    { question: "Who discovered penicillin?", answers: [{ text: "Marie Curie", correct: false }, { text: "Albert Einstein", correct: false }, { text: "Alexander Fleming", correct: true }, { text: "Isaac Newton", correct: false }] },
    { question: "What is the capital of Brazil?", answers: [{ text: "Rio de Janeiro", correct: false }, { text: "São Paulo", correct: false }, { text: "Brasília", correct: true }, { text: "Salvador", correct: false }] },
    { question: "What is the longest river in the world?", answers: [{ text: "Amazon River", correct: false }, { text: "Nile River", correct: true }, { text: "Yangtze River", correct: false }, { text: "Mississippi River", correct: false }] },
    { question: "Who developed the theory of relativity?", answers: [{ text: "Isaac Newton", correct: false }, { text: "Galileo Galilei", correct: false }, { text: "Albert Einstein", correct: true }, { text: "Nikola Tesla", correct: false }] },
    { question: "What is the capital of Italy?", answers: [{ text: "Milan", correct: false }, { text: "Venice", correct: false }, { text: "Rome", correct: true }, { text: "Florence", correct: false }] },
    { question: "What is the largest desert in the world?", answers: [{ text: "Sahara Desert", correct: true }, { text: "Gobi Desert", correct: false }, { text: "Arabian Desert", correct: false }, { text: "Kalahari Desert", correct: false }] },
    { question: "Which gas do plants absorb from the atmosphere?", answers: [{ text: "Oxygen", correct: false }, { text: "Carbon Dioxide", correct: true }, { text: "Nitrogen", correct: false }, { text: "Helium", correct: false }] },
    { question: "What is the boiling point of water?", answers: [{ text: "90°C", correct: false }, { text: "100°C", correct: true }, { text: "110°C", correct: false }, { text: "120°C", correct: false }] },
    { question: "Who painted the ceiling of the Sistine Chapel?", answers: [{ text: "Leonardo da Vinci", correct: false }, { text: "Michelangelo", correct: true }, { text: "Raphael", correct: false }, { text: "Donatello", correct: false }] },
    { question: "What is the primary language spoken in Brazil?", answers: [{ text: "Spanish", correct: false }, { text: "Portuguese", correct: true }, { text: "English", correct: false }, { text: "French", correct: false }] },
    { question: "What is the hardest natural substance?", answers: [{ text: "Ruby", correct: false }, { text: "Diamond", correct: true }, { text: "Sapphire", correct: false }, { text: "Emerald", correct: false }] },
    { question: "What is the capital of Egypt?", answers: [{ text: "Cairo", correct: true }, { text: "Alexandria", correct: false }, { text: "Giza", correct: false }, { text: "Luxor", correct: false }] },
    { question: "In which year did the Titanic sink?", answers: [{ text: "1910", correct: false }, { text: "1912", correct: true }, { text: "1914", correct: false }, { text: "1916", correct: false }] },
    { question: "What is the currency of Japan?", answers: [{ text: "Yen", correct: true }, { text: "Won", correct: false }, { text: "Dollar", correct: false }, { text: "Euro", correct: false }] },
    { question: "What is the chemical symbol for gold?", answers: [{ text: "Au", correct: true }, { text: "Ag", correct: false }, { text: "Pb", correct: false }, { text: "Fe", correct: false }] },
    { question: "Who is known as the 'Father of Computer Science'?", answers: [{ text: "Charles Babbage", correct: true }, { text: "Alan Turing", correct: false }, { text: "Bill Gates", correct: false }, { text: "Steve Jobs", correct: false }] }
];


const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer-display');
const feedbackContainer = document.getElementById('feedback');
const restartButton = document.getElementById('restart-btn');
const quitButton = document.getElementById('quit-btn');

const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');

let currentQuestionIndex, score, questionTimer, timeLeft;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hide');
    feedbackContainer.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.innerText = currentQuestion.question;
    questionContainer.appendChild(questionElement);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });

    startQuestionTimer();
}

function startQuestionTimer() {
    timeLeft = 15;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;
    questionTimer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            handleTimeOut();
        }
    }, 1000);
}

function resetState() {
    questionContainer.innerHTML = '';  
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); 
    }
    feedbackContainer.classList.add('hide');
    clearInterval(questionTimer); 
}

function selectAnswer(answer) {
    const correct = answer.correct;
    feedbackContainer.classList.remove('hide');
    
    if (correct) {
        score++;
        correctSound.play();
        feedbackContainer.innerText = "Correct!";
        feedbackContainer.classList.add('correct');
        feedbackContainer.classList.remove('incorrect');
    } else {
        incorrectSound.play();
        feedbackContainer.innerText = "Incorrect!";
        feedbackContainer.classList.add('incorrect');
        feedbackContainer.classList.remove('correct');
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

function handleTimeOut() {
    feedbackContainer.classList.remove('hide');
    feedbackContainer.innerText = "Time's up!";
    feedbackContainer.classList.add('incorrect');

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    resultContainer.classList.remove('hide');
    scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
    questionContainer.innerHTML = '';
    answerButtons.innerHTML = '';
    clearInterval(questionTimer); 
}

function restartQuiz() {
    startQuiz();
}

function quitQuiz() {
    endQuiz();
    alert(`You quit the quiz! Final Score: ${score} / ${questions.length}`);
}

restartButton.addEventListener('click', restartQuiz);
quitButton.addEventListener('click', quitQuiz);

startQuiz();
