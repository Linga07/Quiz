const quizData = [
    {
    question: "What is the square root of 144?",
a: "10",
b: "11",
c: "12",
d: "13",
    correct: "c"
    },
    
    {
    question: "Which of the following is a prime number?",
a: "4",
b: "9",
c: "17",
d: "21",
    correct: "c"
    },
    {
    question:"What is the value of2⁵?",
a: "16",
b: "32",
c: "64",
d: "128",
    correct: "b"
    },
    {
    question: "What is the area of a triangle with base 10 cm and height 5 cm?",
a: "25 cm²",
b: "30 cm²",
c: "50 cm²",
d: "100 cm²",
    correct: "a"
    },
    {
    question: "What is the perimeter of a square with side length 6 cm?",
a: "12 cm",
b: "18 cm",
c: "24 cm",
d: "36 cm",
    correct: "d"
    }
];

const quiz = document.querySelector('.card-body'); 
const answerEls = document.querySelectorAll('input[name="answer"]'); 
const questionEl = document.getElementById('question');
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

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer = null;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button class="btn btn-primary mt-3" onclick="location.reload()">Play Again</button>`;
                submitBtn.style.display = "none";
            }
    
    } else {
        alert("Please select an answer before submitting.");
    }
});
