const quizData = [
    
    {
        question: "Which ancient wonder was located in Babylon?",
        a: "The Great Pyramid of Giza",
        b: "The Hanging Gardens",
        c: "The Colossus of Rhodes",
        d: "The Lighthouse of Alexandria",
        correct: "b"
    },
    {
        question: "Who was the first ruler to unify Germany in 1871?",
        a: "Otto von Bismarck",
        b: "Wilhelm I",
        c: "Frederick the Great",
        d: "Napoleon Bonaparte",
        correct: "a"
    },
    {
        question: "Which event started World War I?",
        a: "The sinking of the Lusitania",
        b: "The invasion of Poland",
        c: "The assassination of Archduke Franz Ferdinand",
        d: "The signing of the Treaty of Versailles",
        correct: "c"
    },
    {
        question: "Which empire was known as the 'Empire on which the sun never sets'?",
        a: "The Roman Empire",
        b: "The British Empire",
        c: "The Ottoman Empire",
        d: "The Mongol Empire",
        correct: "b"
    },
    {
        question: "Who was the leader of the Soviet Union during World War II?",
        a: "Vladimir Lenin",
        b: "Joseph Stalin",
        c: "Mikhail Gorbachev",
        d: "Leon Trotsky",
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
