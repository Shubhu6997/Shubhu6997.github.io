let detailstable = document.querySelector("table");
let tableRow;


const details=["firstname","lastname","address","pincode","gender","food","state","country"];
function insertIntoTable(event){
    let count = 0;
    event.preventDefault();
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
                    count++;
                }
                if(document.getElementById("MilkShake").checked == true){
                    foodItems = foodItems +"MilkShake, "; 
                    count++;
                }
                if(document.getElementById("Pizza").checked == true){
                    foodItems = foodItems +"Pizza, "; 
                    count++;
                }
                if(document.getElementById("Burger").checked == true){
                    foodItems = foodItems +"Burger, "; 
                    count++;
                }
                if(document.getElementById("Panipuri").checked == true){
                    foodItems = foodItems +"Panipuri, "; 
                    count++;
                }

                if(count<2){
                    window.alert("Select atleast two food items");
                    return;
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


    document.getElementById("myForm").reset();
}

