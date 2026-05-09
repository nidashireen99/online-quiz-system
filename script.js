let defaultQuestions = [

    {
        question: "Capital of India?",
        option1: "Delhi",
        option2: "Mumbai",
        option3: "Chennai",
        option4: "Kolkata",
        answer: "Delhi"
    },

    {
        question: "2 + 2 = ?",
        option1: "3",
        option2: "4",
        option3: "5",
        option4: "6",
        answer: "4"
    }

];

let adminQuestions =
    JSON.parse(
        localStorage.getItem("questions")
    ) || [];

let questions =
    [...defaultQuestions, ...adminQuestions];

let quizArea =
    document.getElementById("quiz-area");

questions.forEach((q, index) => {

    quizArea.innerHTML += `

    <div class="question-box">

        <h2>
            ${index + 1}. ${q.question}
        </h2>

        <label>
            <input type="radio"
                   name="q${index}"
                   value="${q.option1}">
            ${q.option1}
        </label>

        <label>
            <input type="radio"
                   name="q${index}"
                   value="${q.option2}">
            ${q.option2}
        </label>

        <label>
            <input type="radio"
                   name="q${index}"
                   value="${q.option3}">
            ${q.option3}
        </label>

        <label>
            <input type="radio"
                   name="q${index}"
                   value="${q.option4}">
            ${q.option4}
        </label>

    </div>

    `;
});

let timeLeft = 30;

let timer =
    document.querySelector(".timer");

let countdown =
    setInterval(function () {

        timer.innerHTML =
            "Time Left: "
            + timeLeft +
            " sec";

        timeLeft--;

        if(timeLeft < 0) {

            clearInterval(countdown);

            timer.innerHTML =
                "⏰ Time Up!";

            checkScore();
        }

    }, 1000);

function checkScore() {

    let score = 0;

    let username =
        localStorage.getItem(
            "currentUser"
        );

    questions.forEach((q, index) => {

        let selected =
            document.querySelector(
                `input[name="q${index}"]:checked`
            );

        if(selected &&
           selected.value === q.answer) {

            score++;
        }
    });

    let leaderboard =
        JSON.parse(
            localStorage.getItem(
                "leaderboard"
            )
        ) || [];

    leaderboard.push({

        username: username,
        score: score

    });

    localStorage.setItem(
        "leaderboard",
        JSON.stringify(leaderboard)
    );

    document.getElementById("result")
        .innerHTML =
        "🎉 Your Score = "
        + score +
        "/" +
        questions.length;
}