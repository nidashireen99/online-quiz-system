let leaderboardBody =
    document.getElementById(
        "leaderboard-body"
    );

let leaderboard =
    JSON.parse(
        localStorage.getItem("leaderboard")
    ) || [];

leaderboard.sort((a, b) =>
    b.score - a.score
);

leaderboard.forEach((user, index) => {

    leaderboardBody.innerHTML += `

    <tr>

        <td>${index + 1}</td>

        <td>${user.username}</td>

        <td>${user.score}</td>

    </tr>

    `;
});