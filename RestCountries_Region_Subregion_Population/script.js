var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.send();
xhr.onload = function () {
    var data = JSON.parse(this.response);
    data.forEach(i => {
        console.log("Country Name:"+i.name+" Region:"+i.region+" SubRegion:"+i.subregion+" Population:"+i.population);
    });
};
        