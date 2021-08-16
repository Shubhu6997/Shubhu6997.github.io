let detailstable = document.querySelector("table");
let tableRow;

const details=["firstname","lastname","address","pincode","gender","food","state","country"];
function insertIntoTable(){
    console.log("Insert data");

    tableRow = document.createElement("tr");

    for(let i=0; i<8;i++){
            let tdData = document.createElement("td");
            if(i==4){
                if(document.getElementById("male").checked == true){
                    tdData.innerText = "Male";
                } 
                else{
                    tdData.innerText = "Female";
                }
                tableRow.appendChild(tdData);
            }
            else if(i==5){
                let foodItems="";
                if(document.getElementById("Icecream").checked == true) {
                    foodItems = foodItems +"Icecreame, "; 
                }
                if(document.getElementById("MilkShake").checked == true){
                    foodItems = foodItems +"MilkShake, "; 
                }
                if(document.getElementById("Pizza").checked == true){
                    foodItems = foodItems +"Pizza, "; 
                }
                if(document.getElementById("Burger").checked == true){
                    foodItems = foodItems +"Burger, "; 
                }
                if(document.getElementById("Panipuri").checked == true){
                    foodItems = foodItems +"Panipuri, "; 
                }
                tdData.innerText = foodItems.slice(0, -2);
                tableRow.appendChild(tdData);
            }
            else{
                tdData.innerText = document.getElementById(details[i]).value;
                tableRow.appendChild(tdData);
            }
             tableRow.appendChild(tdData);
    }
    detailstable.appendChild(tableRow);
}

