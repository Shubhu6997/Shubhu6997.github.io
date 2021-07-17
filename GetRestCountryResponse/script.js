//1. Create an XHR object
var request = new XMLHttpRequest();

//2 Open connection
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

//3. Sent connction
request.send();

//4. Once data has been received successfully, we have to convert the data.
request.onload = function(){
    var data = JSON.parse(this.response);
    data.forEach(element => {
        console.log(element.name +" "+element.capital+" "+element.flag);
    });
    //console.log(data);
 
}