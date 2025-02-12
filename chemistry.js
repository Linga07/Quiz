const quizData = [
    {
    question: "What is the chemical symbol for Sodium?",
a: "S",
b: "Sn",
c: "Na",
d: "So",
    correct: "c"
    },
    
    {
    question: "What is the pH of a neutral solution?",
a: "0",
b: "7",
c: "14",
d: "10",
    correct: "b"
    },
    {
    question:"Which gas is most abundant in the Earth’s atmosphere?",
a: "Oxygen",
b: "Carbon Dioxide",
c: "Nitrogen",
d: "Hydrogen",
    correct: "c"
    },
    {
    question: "Which type of bond involves the sharing of electrons?",
a: "Ionic Bond",
b: "Covalent Bond",
c: "Metallic Bond",
d: "Hydrogen Bond",
    correct: "b"
    },
    {
    question: "Which of the following is a strong acid?",
a: "H₂O",
b: "HCl",
c: "NaOH",
d: "NH₃",
    correct: "b"
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
