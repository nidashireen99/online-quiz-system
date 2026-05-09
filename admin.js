let questionList =
    document.getElementById("question-list");

displayQuestions();

function addQuestion() {

    let question =
        document.getElementById("question").value;

    let option1 =
        document.getElementById("option1").value;

    let option2 =
        document.getElementById("option2").value;

    let option3 =
        document.getElementById("option3").value;

    let option4 =
        document.getElementById("option4").value;

    let answer =
        document.getElementById("answer").value;

    let newQuestion = {

        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        answer: answer

    };

    let questions =
        JSON.parse(
            localStorage.getItem("questions")
        ) || [];

    questions.push(newQuestion);

    localStorage.setItem(
        "questions",
        JSON.stringify(questions)
    );

    document.getElementById("message")
        .innerHTML =
        "✅ Question Added Successfully!";

    clearFields();

    displayQuestions();
}

function displayQuestions() {

    let questions =
        JSON.parse(
            localStorage.getItem("questions")
        ) || [];

    questionList.innerHTML = "";

    questions.forEach((q, index) => {

        questionList.innerHTML += `

        <div style="
            background:#f5f5f5;
            padding:10px;
            margin-top:10px;
            border-radius:10px;
        ">

            <b>${index + 1}.
            ${q.question}</b>

            <br><br>

            <button onclick="editQuestion(${index})">
                Edit
            </button>

        </div>

        `;
    });
}

function editQuestion(index) {

    let questions =
        JSON.parse(
            localStorage.getItem("questions")
        );

    let q = questions[index];

    document.getElementById("question")
        .value = q.question;

    document.getElementById("option1")
        .value = q.option1;

    document.getElementById("option2")
        .value = q.option2;

    document.getElementById("option3")
        .value = q.option3;

    document.getElementById("option4")
        .value = q.option4;

    document.getElementById("answer")
        .value = q.answer;

    questions.splice(index, 1);

    localStorage.setItem(
        "questions",
        JSON.stringify(questions)
    );

    displayQuestions();
}

function clearFields() {

    document.getElementById("question").value = "";

    document.getElementById("option1").value = "";

    document.getElementById("option2").value = "";

    document.getElementById("option3").value = "";

    document.getElementById("option4").value = "";

    document.getElementById("answer").value = "";
}