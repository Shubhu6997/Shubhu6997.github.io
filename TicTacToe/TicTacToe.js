var count = 0;
var data = [];
function changeText(id) {

    count++;
    var text = document.getElementById(id);
    text.style.fontSize = "x-large"
    if (count % 2 == 0) {

        text.innerText = "O";
        data[id] = "O";

    }
    else {
        text.innerText = "X";
        data[id] = "X";

    }

    text.disabled = true;
    checkWinner();
}

function checkWinner() {
    if ((data[0] == "X" && data[1] == "X" && data[2] == "X") || (data[0] == "O" && data[1] == "O" && data[2] == "O")) {
        alert("Congrats!! You are winner");
    } else if ((data[3] == "X" && data[4] == "X" && data[5] == "X") || (data[3] == "O" && data[4] == "O" && data[5] == "O")) {
        alert("Congrats!! You are winner");
    } else if ((data[6] == "X" && data[7] == "X" && data[8] == "X") || (data[6] == "O" && data[7] == "O" && data[8] == "O")) {
        alert("Congrats!! You are winner");
    } else if ((data[0] == "X" && data[3] == "X" && data[6] == "X") || (data[0] == "O" && data[3] == "O" && data[6] == "O")) {
        alert("Congrats!! You are winner");
    } else if ((data[1] == "X" && data[4] == "X" && data[7] == "X") || (data[1] == "O" && data[4] == "O" && data[7] == "O")) {
        alert("Congrats!! You are winner");
    } else if ((data[2] == "X" && data[5] == "X" && data[8] == "X") || (data[2] == "O" && data[5] == "O" && data[8] == "O")) {
        alert("Congrats!! You are winner");
    } else if ((data[0] == "X" && data[4] == "X" && data[8] == "X") || (data[0] == "O" && data[4] == "O" && data[8] == "O")) {
        alert("Congrats!! You are winner");
    } else if ((data[2] == "X" && data[4] == "X" && data[6] == "X") || (data[2] == "O" && data[4] == "O" && data[6] == "O")) {
        alert("Congrats!! You are winner");
    }
    else {
        if (count == 9) {
            alert("Its Draw");
        }
    }

}