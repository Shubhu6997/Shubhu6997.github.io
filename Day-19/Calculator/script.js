let container = document.createElement("div");
container.setAttribute("class","container");

let containerForBtn = document.createElement("div");
containerForBtn.setAttribute("class","containerForBtn");

let containerForDisplay = document.createElement("input");
containerForDisplay.setAttribute("class","containerForDisplay");

container.append(containerForDisplay);
for(let i=1; i<=16;i++){
    let button = document.createElement("button");
    button.setAttribute("class","button");
    button.setAttribute("id",i);
    containerForBtn.append(button);
}


container.append(containerForBtn);

document.body.append(container);

document.getElementById("1").textContent = "7";
document.getElementById("2").textContent = "8";
document.getElementById("3").textContent = "9";
document.getElementById("4").textContent = "+";
document.getElementById("5").textContent = "4";
document.getElementById("6").textContent = "5";
document.getElementById("7").textContent = "6";
document.getElementById("8").textContent = "-";
document.getElementById("9").textContent = "1";
document.getElementById("10").textContent = "2";
document.getElementById("11").textContent = "3";
document.getElementById("12").textContent = "x";
document.getElementById("13").textContent = "0";
document.getElementById("14").textContent = ".";
document.getElementById("15").textContent = "/";
document.getElementById("16").textContent = "=";



document.getElementById("1").setAttribute("onclick","AppendSeven()");
document.getElementById("2").setAttribute("onclick","AppendEight()");
document.getElementById("3").setAttribute("onclick","AppendNine()");
document.getElementById("4").setAttribute("onclick","AppendPlus()");
document.getElementById("5").setAttribute("onclick","AppendFour()");
document.getElementById("6").setAttribute("onclick","AppendFive()");
document.getElementById("7").setAttribute("onclick","AppendSix()");
document.getElementById("8").setAttribute("onclick","AppendMinus()");
document.getElementById("9").setAttribute("onclick","AppendOne()");
document.getElementById("10").setAttribute("onclick","AppendTwo()");
document.getElementById("11").setAttribute("onclick","AppendThree()");
document.getElementById("12").setAttribute("onclick","AppendMultiplication()");
document.getElementById("13").setAttribute("onclick","AppendZero()");
document.getElementById("14").setAttribute("onclick","AppendDot()");
document.getElementById("15").setAttribute("onclick","AppendDivison()");
document.getElementById("16").setAttribute("onclick","ShowResult()");



document.getElementById("5").setAttribute("onclick","AppendFour()");
document.getElementById("5").setAttribute("onclick","AppendFour()");


function AppendZero(){
    containerForDisplay.value = containerForDisplay.value +"0";
}
function AppendOne(){
    containerForDisplay.value = containerForDisplay.value +"1";
}
function AppendTwo(){
    containerForDisplay.value = containerForDisplay.value +"2";
}
function AppendThree(){
    containerForDisplay.value = containerForDisplay.value +"3";
}
function AppendFour(){
    containerForDisplay.value = containerForDisplay.value +"4";
}
function AppendFive(){
    containerForDisplay.value = containerForDisplay.value +"5";
}
function AppendSix(){
    containerForDisplay.value = containerForDisplay.value +"6";
}
function AppendSeven(){
    containerForDisplay.value = containerForDisplay.value +"7";
}
function AppendEight(){
    containerForDisplay.value = containerForDisplay.value + "8";
}
function AppendNine(){
    containerForDisplay.value = containerForDisplay.value +"9";
}
function AppendPlus(){
    containerForDisplay.value = containerForDisplay.value + "+";
}
function AppendMinus(){
    containerForDisplay.value = containerForDisplay.value + "-";
}
function AppendMultiplication(){
    containerForDisplay.value = containerForDisplay.value + "*";
}
function AppendDivison(){
    containerForDisplay.value = containerForDisplay.value + "/";
}
function AppendDot(){
    containerForDisplay.value = containerForDisplay.value + ".";
}
function ShowResult(){
    containerForDisplay.value =  eval(containerForDisplay.value);  
}