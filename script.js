let score = {
    win: 0,
    lost: 0,
    tie: 0,

    loadFromLocalStorage: function () {
        const saved = JSON.parse(localStorage.getItem("score"));
        if (saved) {
            this.win = saved.win;
            this.lost = saved.lost;
            this.tie = saved.tie;
        }
    },

    saveToLocalStorage: function () {
        localStorage.setItem("score", JSON.stringify({
            win: this.win,
            lost: this.lost,
            tie: this.tie
        }));
    },

    displayResult: function () {
        document.querySelector("#win").innerHTML = this.win;
        document.querySelector("#lost").innerHTML = this.lost;
        document.querySelector("#tie").innerHTML = this.tie;
    }
};

score.loadFromLocalStorage();
score.displayResult();

function showMove(yourMove, comMove) {
    document.querySelector("#yourchoice").innerText = yourMove;
    document.querySelector("#comchoice").innerText = comMove;
}

function result(yourMove, comMove) {
    showMove(yourMove, comMove);
    if (yourMove === comMove){
        return "Tie";
    } 
    if (
        (yourMove === "Ball" && comMove === "Stamp") ||
        (yourMove === "Bat" && comMove === "Ball") ||
        (yourMove === "Stamp" && comMove === "Bat")
    ) {
        return "Win";
    }
    return "Lost";
}

function computerMove() {
    const options = ["Ball", "Bat", "Stamp"];
    return options[Math.floor(Math.random() * 3)];
}

function action_perform(youChoose) {
    const comChoose = computerMove();
    const outcome = result(youChoose, comChoose);
    document.querySelector("#result").innerText = outcome;

    if (outcome === "Win") score.win++;
    else if (outcome === "Lost") score.lost++;
    else score.tie++;

    score.saveToLocalStorage();
    score.displayResult();
}

function resetScore() {
    score.win = 0;
    score.lost = 0;
    score.tie = 0;
    score.saveToLocalStorage();
    score.displayResult();
}