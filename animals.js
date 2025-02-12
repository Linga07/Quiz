const quizData = [
    {
        question: "Which animal has the largest brain relative to its body size?",
        a: "Dolphin",
        b: "Elephant",
        c: "Ant",
        d: "Sperm Whale",
        correct: "a"
    },
    {
        question: "What is the only venomous primate?",
        a: "Howler Monkey",
        b: "Slow Loris",
        c: "Lemur",
        d: "Capuchin Monkey",
        correct: "b"
    },
    {
        question: "Which bird has the longest migration route of any species?",
        a: "Arctic Tern",
        b: "Albatross",
        c: "Peregrine Falcon",
        d: "Swallow",
        correct: "a"
    },
    {
        question: "What is the term for an animal that can survive both on land and in water?",
        a: "Amphibian",
        b: "Reptile",
        c: "Aquatic Mammal",
        d: "Marsupial",
        correct: "a"
    },
    {
        question: "Which mammal holds the record for the longest gestation period?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Rhinoceros",
        correct: "a"
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

