fetch("https://restcountries.eu/rest/v2/lang/es")
    .then((data)=> data.json())
    //.then((countries)=>countries.forEach((country)=>CountryFlag(country)))
    .then((countries)=>console.log(countries))
    .catch((errMgs)=> console.log(errMgs));

/*
function CountryFlag({name,flag,population,region,capital}){

    const container = document.createElement("div");
    container.setAttribute("class","container");
    container.innerHTML = `
        <div class = "img_container">
            <img src="${flag}" width = "250px" height = "150px">
        </div>
        <div class = "info">
        <div>
            <h2>${name}</h2>
            <p><b>Population :</b> ${population}</p>
            <p><b>Region :</b> ${region}</p>
            <p><b>Capital :</b> ${capital}</p>
        </div>`

    document.body.append(container);
}
*/



