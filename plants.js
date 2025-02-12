const quizData = [
    {
    question: "What process do plants use to make their own food?",
    a: "Respiration",
    b: "Photosynthesis",
    c: "Digestion",
    d: "Fermentation",
    correct: "b"
    },
    
    {
    question: "What is the green pigment in plants that captures sunlight?",
    a: "Chlorophyll",
    b: "Carotene",
    c: "Xanthophyll",
    d: "Anthocyanin",
    correct: "a"
    },
    {
    question:"Which type of plant loses its leaves in autumn?",
    a: "Evergreen",
    b: "Deciduous",
    c: "Herbaceous",
    d: "Coniferous",
    correct: "b"
    },
    {
    question: "Which of the following is NOT a type of plant?",
    a: "Fern",
    b: "Moss",
    c: "Fungi",
    d: "Algae",
    correct: "c"
    },
    {
    question: "Which part of the plant develops into fruit?",
    a: "Root",
    b: "Leaf",
    c: "Stem",
    d: "Ovary",
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