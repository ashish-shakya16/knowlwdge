const questions = [
  { question: "Which element has the atomic number 1?", answers: [{ text: "Hydrogen", correct: true }, { text: "Helium", correct: false }, { text: "Oxygen", correct: false }, { text: "Carbon", correct: false }] },
  { question: "What is the square root of 144?", answers: [{ text: "10", correct: false }, { text: "12", correct: true }, { text: "14", correct: false }, { text: "16", correct: false }] },
  { question: "Which country hosted the 2016 Summer Olympics?", answers: [{ text: "China", correct: false }, { text: "Brazil", correct: true }, { text: "UK", correct: false }, { text: "Russia", correct: false }] },
  { question: "Who was the first President of the United States?", answers: [{ text: "Thomas Jefferson", correct: false }, { text: "George Washington", correct: true }, { text: "Abraham Lincoln", correct: false }, { text: "John Adams", correct: false }] },
  { question: "What is the tallest mountain in the world?", answers: [{ text: "K2", correct: false }, { text: "Mount Everest", correct: true }, { text: "Kangchenjunga", correct: false }, { text: "Lhotse", correct: false }] },
  { question: "Which planet has the most moons?", answers: [{ text: "Saturn", correct: true }, { text: "Jupiter", correct: false }, { text: "Uranus", correct: false }, { text: "Neptune", correct: false }] },
  { question: "Which country is famous for the Great Wall?", answers: [{ text: "India", correct: false }, { text: "China", correct: true }, { text: "Japan", correct: false }, { text: "Mongolia", correct: false }] },
  { question: "What is the currency of the United Kingdom?", answers: [{ text: "Euro", correct: false }, { text: "Pound Sterling", correct: true }, { text: "Dollar", correct: false }, { text: "Yen", correct: false }] },
  { question: "Which scientist proposed the laws of motion?", answers: [{ text: "Einstein", correct: false }, { text: "Newton", correct: true }, { text: "Galileo", correct: false }, { text: "Tesla", correct: false }] },
  { question: "What is the most spoken language in the world?", answers: [{ text: "Spanish", correct: false }, { text: "Mandarin Chinese", correct: true }, { text: "English", correct: false }, { text: "Hindi", correct: false }] },

  { question: "What is the freezing point of water?", answers: [{ text: "0°C", correct: true }, { text: "32°C", correct: false }, { text: "10°C", correct: false }, { text: "-1°C", correct: false }] },
  { question: "How many continents are there?", answers: [{ text: "5", correct: false }, { text: "6", correct: false }, { text: "7", correct: true }, { text: "8", correct: false }] },
  { question: "What is the largest mammal?", answers: [{ text: "Elephant", correct: false }, { text: "Blue Whale", correct: true }, { text: "Giraffe", correct: false }, { text: "Hippo", correct: false }] },
  { question: "Which is the largest internal organ in the human body?", answers: [{ text: "Liver", correct: true }, { text: "Heart", correct: false }, { text: "Lungs", correct: false }, { text: "Kidneys", correct: false }] },
  { question: "What gas do humans need to breathe?", answers: [{ text: "Carbon Dioxide", correct: false }, { text: "Oxygen", correct: true }, { text: "Hydrogen", correct: false }, { text: "Nitrogen", correct: false }] },
  { question: "Which is the longest bone in the human body?", answers: [{ text: "Tibia", correct: false }, { text: "Femur", correct: true }, { text: "Radius", correct: false }, { text: "Humerus", correct: false }] },
  { question: "Who invented the telephone?", answers: [{ text: "Edison", correct: false }, { text: "Bell", correct: true }, { text: "Tesla", correct: false }, { text: "Morse", correct: false }] },
  { question: "Which organ pumps blood through the body?", answers: [{ text: "Liver", correct: false }, { text: "Lungs", correct: false }, { text: "Heart", correct: true }, { text: "Kidneys", correct: false }] },
  { question: "How many planets are in the Solar System?", answers: [{ text: "7", correct: false }, { text: "8", correct: true }, { text: "9", correct: false }, { text: "10", correct: false }] },
  { question: "Which animal is known as the King of the Jungle?", answers: [{ text: "Elephant", correct: false }, { text: "Lion", correct: true }, { text: "Tiger", correct: false }, { text: "Leopard", correct: false }] },

  { question: "What color do you get when you mix red and yellow?", answers: [{ text: "Orange", correct: true }, { text: "Green", correct: false }, { text: "Purple", correct: false }, { text: "Brown", correct: false }] },
  { question: "How many hours are in a day?", answers: [{ text: "12", correct: false }, { text: "24", correct: true }, { text: "18", correct: false }, { text: "20", correct: false }] },
  { question: "What does DNA stand for?", answers: [{ text: "Deoxyribonucleic Acid", correct: true }, { text: "Digital Network Array", correct: false }, { text: "Dynamic Nucleic Acid", correct: false }, { text: "Data Node Analysis", correct: false }] },
  { question: "Which is the fastest land animal?", answers: [{ text: "Cheetah", correct: true }, { text: "Lion", correct: false }, { text: "Tiger", correct: false }, { text: "Leopard", correct: false }] },
  { question: "How many sides does a hexagon have?", answers: [{ text: "6", correct: true }, { text: "5", correct: false }, { text: "8", correct: false }, { text: "7", correct: false }] },
  { question: "What is the smallest prime number?", answers: [{ text: "0", correct: false }, { text: "1", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }] },
  { question: "Which famous scientist developed the laws of gravity?", answers: [{ text: "Einstein", correct: false }, { text: "Newton", correct: true }, { text: "Hawking", correct: false }, { text: "Copernicus", correct: false }] },
  { question: "What is the main language spoken in Argentina?", answers: [{ text: "Portuguese", correct: false }, { text: "Spanish", correct: true }, { text: "English", correct: false }, { text: "French", correct: false }] },
  { question: "How many legs does a spider have?", answers: [{ text: "6", correct: false }, { text: "8", correct: true }, { text: "10", correct: false }, { text: "12", correct: false }] },
  { question: "What is the name of our galaxy?", answers: [{ text: "Andromeda", correct: false }, { text: "Milky Way", correct: true }, { text: "Orion", correct: false }, { text: "Pegasus", correct: false }] },

  { question: "Who was the first person to walk on the Moon?", answers: [{ text: "Neil Armstrong", correct: true }, { text: "Buzz Aldrin", correct: false }, { text: "Yuri Gagarin", correct: false }, { text: "Michael Collins", correct: false }] },
  { question: "Which instrument measures temperature?", answers: [{ text: "Barometer", correct: false }, { text: "Thermometer", correct: true }, { text: "Altimeter", correct: false }, { text: "Hygrometer", correct: false }] },
  { question: "What is the capital of Russia?", answers: [{ text: "St. Petersburg", correct: false }, { text: "Moscow", correct: true }, { text: "Kazan", correct: false }, { text: "Vladivostok", correct: false }] },
  { question: "What color is chlorophyll?", answers: [{ text: "Red", correct: false }, { text: "Green", correct: true }, { text: "Blue", correct: false }, { text: "Yellow", correct: false }] },
  { question: "What do bees collect and use to make honey?", answers: [{ text: "Pollen", correct: false }, { text: "Nectar", correct: true }, { text: "Water", correct: false }, { text: "Sap", correct: false }] },
  { question: "What planet is closest to the sun?", answers: [{ text: "Venus", correct: false }, { text: "Earth", correct: false }, { text: "Mercury", correct: true }, { text: "Mars", correct: false }] },
  { question: "Which is the largest land animal?", answers: [{ text: "Rhino", correct: false }, { text: "Elephant", correct: true }, { text: "Hippo", correct: false }, { text: "Giraffe", correct: false }] },
  { question: "How many teeth does an adult human have?", answers: [{ text: "30", correct: false }, { text: "32", correct: true }, { text: "28", correct: false }, { text: "36", correct: false }] },
  { question: "What is the process of water turning into vapor?", answers: [{ text: "Freezing", correct: false }, { text: "Condensation", correct: false }, { text: "Evaporation", correct: true }, { text: "Sublimation", correct: false }] },
  { question: "Which is the largest island in the world?", answers: [{ text: "Australia", correct: false }, { text: "Greenland", correct: true }, { text: "Madagascar", correct: false }, { text: "Borneo", correct: false }] },

  { question: "Which blood type is known as the universal donor?", answers: [{ text: "A", correct: false }, { text: "B", correct: false }, { text: "AB", correct: false }, { text: "O-", correct: true }] },
  { question: "What is the name of Harry Potter’s pet owl?", answers: [{ text: "Hedwig", correct: true }, { text: "Errol", correct: false }, { text: "Crookshanks", correct: false }, { text: "Scabbers", correct: false }] },
  { question: "What kind of tree do acorns come from?", answers: [{ text: "Pine", correct: false }, { text: "Oak", correct: true }, { text: "Maple", correct: false }, { text: "Birch", correct: false }] },
  { question: "What is the capital of Germany?", answers: [{ text: "Berlin", correct: true }, { text: "Frankfurt", correct: false }, { text: "Munich", correct: false }, { text: "Hamburg", correct: false }] },
  { question: "Which is the largest planet in the Solar System?", answers: [{ text: "Earth", correct: false }, { text: "Jupiter", correct: true }, { text: "Saturn", correct: false }, { text: "Uranus", correct: false }] },
  { question: "Which day is celebrated as World Environment Day?", answers: [{ text: "June 5", correct: true }, { text: "April 22", correct: false }, { text: "March 21", correct: false }, { text: "July 11", correct: false }] },
  { question: "How many bones are in the adult human body?", answers: [{ text: "206", correct: true }, { text: "205", correct: false }, { text: "201", correct: false }, { text: "210", correct: false }] },
  { question: "Which vitamin is produced in the skin in sunlight?", answers: [{ text: "Vitamin A", correct: false }, { text: "Vitamin D", correct: true }, { text: "Vitamin C", correct: false }, { text: "Vitamin E", correct: false }] },
  { question: "What do you call a shape with 8 sides?", answers: [{ text: "Heptagon", correct: false }, { text: "Octagon", correct: true }, { text: "Nonagon", correct: false }, { text: "Hexagon", correct: false }] },
  { question: "Which bird is the symbol of peace?", answers: [{ text: "Crow", correct: false }, { text: "Dove", correct: true }, { text: "Sparrow", correct: false }, { text: "Peacock", correct: false }] }
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
