
//Using Promise

console.log("Using Promise");
const AsiaRegion = fetch("https://restcountries.eu/rest/v2/region/asia")
    .then((data)=> data.json())
    .catch((errMgs)=> console.log(errMgs));

const EuropeRegion = fetch("https://restcountries.eu/rest/v2/region/europe")
    .then((data)=> data.json())
    .catch((errMgs)=> console.log(errMgs));

Promise.all([AsiaRegion, EuropeRegion])
//.then((countries)=>((countries[0].concat(countries[1])).foreach((country)=>CountryFlag(country))));
.then((countries)=>console.log(countries[0].concat(countries[1])))
.catch((errMgs)=> console.log(errMgs));

//Using async and await


async function CountryData(){
    const AsiaRegion = await fetch("https://restcountries.eu/rest/v2/region/asia");
    const asiaData = await AsiaRegion.json();
    const EuropeRegion = await fetch("https://restcountries.eu/rest/v2/region/europe");
    const europeData = await EuropeRegion.json();
    console.log("Using async and await");
    console.log(asiaData.concat(europeData));
}

CountryData();

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



