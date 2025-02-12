const quizData = [
    {
        question: "What is the basic economic problem that all societies face?",
        a: "Inflation",
        b: "Scarcity",
        c: "Unemployment",
        d: "Taxation",
        correct: "b"
    },
    {
        question: "What does GDP stand for?",
        a: "Gross Domestic Product",
        b: "General Development Plan",
        c: "Global Debt Projection",
        d: "Gross Domestic Profit",
        correct: "a"
    },
    {
        question: "Which economic system is based on supply and demand with little government control?",
        a: "Command economy",
        b: "Mixed economy",
        c: "Market economy",
        d: "Traditional economy",
        correct: "c"
    },
    {
        question: "What is inflation?",
        a: "A decrease in overall prices",
        b: "An increase in the overall price level of goods and services",
        c: "A rise in employment rates",
        d: "A government policy to control money supply",
        correct: "b"
    },
    {
        question: "What is the term for a prolonged period of economic decline?",
        a: "Inflation",
        b: "Recession",
        c: "Stagflation",
        d: "Boom",
        correct: "b"
    },

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