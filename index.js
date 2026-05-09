function startQuiz() {

    let username =
        document.querySelector(
            'input[type="text"]'
        ).value;

    let password =
        document.querySelector(
            'input[type="password"]'
        ).value;

    if(username === "" || password === "") {

        alert("Please Enter Username and Password");

    } else {
        localStorage.setItem(
            "currentUser",
           username
        );

        window.location.href = "quiz.html";

    }
}