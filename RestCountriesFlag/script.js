var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.send();
xhr.onload = function () {
    var data = JSON.parse(this.response);
    data.forEach(i => {
        console.log(i.flag);
    });
};
        