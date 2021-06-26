
var counter = document.getElementById("counter");

for (var i = 1; i <= 11; i++) {
    let k = i;
    setTimeout(function () {
        counter.innerText = 11 - k;
        if (k == 11) {
            counter.innerText = "Happy New Year";
        }
    }, k * 1000);
}

