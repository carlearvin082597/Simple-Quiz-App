const quizData = [
  
    {
        question: 'In the Philippine flag, what symbolizes the eight provinces that revolted against the Spaniards?',
        a: 'Star',
        b: 'Eight rays of the sun',
        c: 'Rectangle',
        d: 'Red',
        correct: 'b'
    }, 

    {
        question: 'What is the title of the letter Rizal wrote before his execution?',
        a: 'Huling El Bimbo',
        b: 'Mi Último Adiós',
        c: 'My Heart Will Go On',
        d: 'Super Bass',
        correct: 'b'
    }, 

    {
        question: 'What is the largest organ in the human body?',
        a: 'Eyes',
        b: 'Liver',
        c: 'Large intestine',
        d: 'Skin',
        correct: 'd'
    },

    {
        question: 'How many continents are there in the world?',
        a: 7,
        b: 6,
        c: 5,
        d: 4,
        correct: 'a'
    }, 
    
    {
        question: 'What is the process that converts light energy into chemical energy in plants?',
        a: 'Condensation',
        b: 'Photosynthesis',
        c: 'Fusion',
        d: 'Precipitation',
        correct: 'b'
    },

    {
        question: 'Who painted the Mona Lisa?',
        a: 'Vincent van Gogh',
        b: 'Leonardo da Vinci',
        c: 'Pablo Picasso',
        d: 'Claude Monet',
        correct: 'b'
    },

    {
        question: 'Which planet is known as the Red Planet?',
        a: 'Earth',
        b: 'Venus',
        c: 'Mars',
        d: 'Jupiter',
        correct: 'c'
    },

    {
        question: 'What is the capital city of Japan?',
        a: 'Seoul',
        b: 'Tokyo',
        c: 'Bangkok',
        d: 'Beijing',
        correct: 'b'
    },

    {
        question: 'What is the hardest natural substance on Earth?',
        a: 'Gold',
        b: 'Iron',
        c: 'Diamond',
        d: 'Platinum',
        correct: 'c'
    },

    {
        question: 'Which element has the atomic number 1?',
        a: 'Oxygen',
        b: 'Hydrogen',
        c: 'Nitrogen',
        d: 'Helium',
        correct: 'b'
    }
];

const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {


    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    console.log(answer);
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;   
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            alert(`You got ${score} out of ${quizData.length}.`);
                quiz.innerHTML = 
                    `<h2>You just finnish the quiz, 
                    you want to repeat? Just click the button below!</h2> 
                    
                    <button onclick="location.reload()"
                    >Reload</button>`;
        }
    }

        
});