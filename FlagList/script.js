const countryDetails = [
    {
        name:"India",
        flagURL:"https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
        population:"1.352,642,280",
        region:"Asia",
        capital:"Delhi"
    },
    {
        name:"Germany",
        flagURL:"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
        population: "81,770,900",
        region:"Europe",
        capital:"Berlin"
    },
    {
        name:"United States of America",
        flagURL:"https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
        population: "323,947,000",
        region:"Americas",
        capital:"Washigton D.C."
    },
    {
        name:"Brazil",
        flagURL:"https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
        population: "206,135,893",
        region:"Americas",
        capital:"Brasilia"
    },
    
    {
        name:"Iceland",
        flagURL:"https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
        population: "334,300",
        region:"Europe",
        capital:"Reykjavik"
    }
];

countryDetails.forEach(country => {
    const container = document.createElement("div");
    container.setAttribute("class","container");
    const flag = document.createElement('img');
    flag.setAttribute("src",country.flagURL);
    const info = document.createElement("div");
    info.className = "info" 
    info.innerHTML = `<h2>${country.name}</h2>
                            <p><b>Population :</b> ${country.population}</p>
                            <p><b>Region :</b> ${country.region}</p>
                            <p><b>Capital :</b> ${country.capital}</p>`

    container.append(flag);
    container.append(info);
    document.body.append(container);
});




