// --- Homepage Topics List ---
const topics = [
    "HTML Basics: Headings, Paragraphs, Images, Links, Forms, Media",
    "HTML Containers: div, span",
    "CSS Basics: color, font-size, borders, width",
    "External CSS Linking",
    "JavaScript Variables: let, const",
    "Data Types: number vs string",
    "If / Else Conditions",
    "Comparison Operators: ==, ===",
    "Ternary Operator",
    "Loops: for, continue, break",
    "Arrays and Array Access",
    "DOM Selection: getElementById, getElementsByClassName",
    "DOM Manipulation: innerText, innerHTML",
    "Linking JS to HTML",
    "Modifying multiple elements with loops"
];

const topicsList = document.getElementById("topics-list");
if (topicsList) {
    topics.forEach((topic, i) => {
        const li = document.createElement("li");
        li.innerText = `${topic}`;
        topicsList.appendChild(li);
    });
}

// --- Quiz Game ---
const quizQuestions = [
    {
        question: "Why do flamingos stand on one leg?",
        options: [
            "They’re trying to look taller to impress dates.",
            "They forgot where they put the second one",
            "To conserve body heat and save energy.",
            "To reduce water resistance, making it easier for them to detect tiny movements from prey in the water."
        ],
        answer: "To conserve body heat and save energy."
    },
    {
        question: "In the insect world, which species is infamous for turning romance into a post-dinner snack by eating its partner’s head?",
        options: ["Praying mantis", "Grasshopper", "Dragonfly", "Stick insect"],
        answer: "Praying mantis"
    },
    {
        question: "In which year did Kanye West announce he was running for President of the United States?",
        options: ["2016", "2020", "2024", "2018"],
        answer: "2020"
    },
    {
        question: "“You know what they call a Quarter Pounder with Cheese in Paris?” Which movie is this from?",
        options: ["Godfather", "The Fight Club", "Pulp Fiction", "Snatch"],
        answer: "Pulp Fiction"
    },
    {
        question: "Which fruit floats in water because it’s 25% air?",
        options: ["Apple", "Banana", "Orange", "Watermelon"],
        answer: "Apple"
    },
    {
        question: "Identify this person on the screen?",
        options: ["Friedrich Heinrich Jacobi", "Jacob Elordi", "Fyodor Dostoevsky", "Leo Tolstoy"],
        answer: "Friedrich Heinrich Jacobi",
        image: "Images/jacobi.jpg"
    },
    {
        question: "Which Greek god once transformed his lover into an animal to hide her from his jealous wife?",
        options: ["Zeus", "Apollo", "Hades", "Poseidon"],
        answer: "Zeus"
    },
    {
        question: "In anime Hunter x Hunter, what is Gon’s primary Nen type?",
        options: ["Enhancement", "Emission", "Conjuration", "Manipulation"],
        answer: "Enhancement"
    },
    {
        question: "Trump once called COVID-19 what nickname in public speeches?",
        options: ["The YUGE virus", "The Chinese virus", "The fake flu", "The tremendous sneeze"],
        answer: "The Chinese virus"
    },
    {
        question: "The Epstein files include repeated mentions of the founder or co‑founder of which tech company?",
        options: ["Tesla", "PayPal", "LinkedIn", "All of the above"],
        answer: "All of the above"
    }
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const quizImage = document.getElementById("quiz-image");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    if (!questionEl || !optionsEl || !scoreEl) return;

    optionsEl.innerHTML = "";
    if (currentQuestion >= quizQuestions.length) {
        questionEl.innerText = "Quiz Completed! Good Girl!!";
        scoreEl.innerText = `Your score: ${score} / ${quizQuestions.length}`;
        return;
    }

    const q = quizQuestions[currentQuestion];
    questionEl.innerText = q.question;

    if (q.image) {
        quizImage.src = q.image;
        quizImage.style.display = "block";
        quizImage.style.margin = "0 auto"; // center image
    } else {
        quizImage.style.display = "none";
    }

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.addEventListener("click", () => checkAnswer(option));
        optionsEl.appendChild(btn);
    });

    scoreEl.innerText = `Score: ${score}`;
}

function checkAnswer(selected) {
    const correct = selected === quizQuestions[currentQuestion].answer;
    
    // Show pop-up feedback
    const feedback = document.createElement("div");
    feedback.classList.add("feedback-box");
    feedback.innerText = correct ? "Yes, correct answer!! Have a cookie 🍪" : "Opsie!! Wrong Answer, Die!Die!Die!";
    document.getElementById("quiz-container").appendChild(feedback);

    setTimeout(() => {
        feedback.remove();
        if (correct) score++;
        currentQuestion++;
        showQuestion();
    }, 1200);
}

showQuestion();

// --- Contact Page Validation ---
function validateContactForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let valid = true;

    if (!name) {
        alert("Please enter your name!");
        valid = false;
    }
    if (!email || !email.includes("@")) {
        alert("Please enter a valid email!");
        valid = false;
    }
    if (!message) {
        alert("Please write a message!");
        valid = false;
    }

    if (valid) {
        alert(`Thanks ${name}! Your message has been submitted <3!!`);
        document.getElementById("contact-form").reset();
    }

    return false; // prevent default form submission
}

// --- CAT ANIMATION + TEXT ---
window.addEventListener("load", () => {
    const catContainer = document.getElementById("cat-container");
    const catText = document.getElementById("cat-text");

    // Slide cat into screen
    setTimeout(() => {
        catContainer.style.transition = "right 1s ease";
        catContainer.style.right = "60px";
    }, 300);

    // Show text after cat arrives
    setTimeout(() => {
        catText.style.transition = "opacity 0.5s ease";
        catText.style.opacity = 1;
        typeText("Hello! Welcome to our website!");
    }, 1400);

    // Typing effect
    function typeText(text) {
        let i = 0;
        catText.innerHTML = "";

        function typing() {
            if (i < text.length) {
                catText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, 40);
            }
        }

        typing();
    }
});
