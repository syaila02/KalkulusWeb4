// Function to show pages
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Show Materi Page
function showMateriPage() {
    showPage('materiPage');
}

// Show specific Materi Pages
function showAljabar() {
    showPage('aljabarPage');
}

function showEksponensial() {
    showPage('eksponensialPage');
}

function showTrigonometri() {
    showPage('trigonometriPage');
}

function showImplicit() {
    showPage('implicitPage');
}

// Quiz functions
let timer;
let timeRemaining = 60 * 5; // 5 minutes timer
let correctAnswers = 0;

// Timer function
function startTimer() {
    timer = setInterval(function() {
        timeRemaining--;
        document.getElementById('timer').innerText = "Waktu: " + formatTime(timeRemaining);
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert("Waktu habis!");
            submitQuiz();
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
}

function startAljabarQuiz() {
    showPage('quizPage');
    document.getElementById('quizContent').innerHTML = `
        <div class="quiz-question">
            <p><strong>Soal 1:</strong> Apa turunan dari \( f(x) = 5x^3 \)?</p>
            <input type="radio" name="soal1" value="A"> a) \( 15x^2 \) <br>
            <input type="radio" name="soal1" value="B"> b) \( 5x^2 \) <br>
            <input type="radio" name="soal1" value="C"> c) \( 3x^2 \) <br>
            <input type="radio" name="soal1" value="D"> d) \( 5x^2 + 1 \) <br>
        </div>
        <div class="quiz-question">
            <p><strong>Soal 2:</strong> Apa turunan dari \( f(x) = 4x^2 + 2x + 1 \)?</p>
            <input type="radio" name="soal2" value="A"> a) \( 8x + 2 \) <br>
            <input type="radio" name="soal2" value="B"> b) \( 4x + 2 \) <br>
            <input type="radio" name="soal2" value="C"> c) \( 8x + 1 \) <br>
            <input type="radio" name="soal2" value="D"> d) \( 6x + 2 \) <br>
        </div>
        <!-- 18 additional questions go here (same format) -->
    `;
    startTimer();
}

function submitQuiz() {
    // Validate and calculate score
    correctAnswers = 0;
    const answers = {
        soal1: "A", // Correct answer for soal 1
        soal2: "A", // Correct answer for soal 2
        // Add answers for the rest of the questions
    };

    for (let i = 1; i <= 20; i++) {
        const selectedAnswer = document.querySelector(`input[name="soal${i}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[`soal${i}`]) {
            correctAnswers++;
        }
    }

    alert(`Kuis selesai! Skor Anda: ${correctAnswers} dari 20.`);
}

function goBackToMateri() {
    showMateriPage();
}
