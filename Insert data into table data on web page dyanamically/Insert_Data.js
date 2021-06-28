var allDetails = [];
var id = 0;
var details = {} ;
var flag = 0;
var update_id;
var temp_name;
var temp_age;
var temp_email;
function getDataAndInsert() {
    
    if(flag == 1)
    {
        allDetails[update_id].name =  document.getElementById("name").value;
        allDetails[update_id].age =  document.getElementById("age").value;
        allDetails[update_id].email =  document.getElementById("email").value;

        temp_name.innerHTML = document.getElementById("name").value;
        temp_age.innerHTML = document.getElementById("age").value;
        temp_email.innerHTML = document.getElementById("email").value; 
    }
    else{
        id++;
        details = {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            email: document.getElementById("email").value,
            edit_buttons: document.createElement("button"),
            delete_buttons: document.createElement("button")
        }

        details.edit_buttons.style.width = "50px";
        details.edit_buttons.style.height = "30px";
        details.edit_buttons.textContent = "Edit";
        details.edit_buttons.setAttribute("id", id);

        details.delete_buttons.style.width = "50px";
        details.delete_buttons.style.height = "30px";
        details.delete_buttons.textContent = "Delete";
        details.delete_buttons.setAttribute("id", id);

        allDetails.push(details);
        showInTable(details);
    }
    flag = 0;

    details.delete_buttons.onclick = function () {
        if (confirm("Are you sure do delete this row?")) {
        
            delete allDetails[this.id - 1];
            var row_num = this.parentNode.parentNode.rowIndex;
            document.getElementById("ShowTable").deleteRow(row_num);
            
            console.log(allDetails);
    
        }
        else {
            console.log("cancelled");
        }
    }

    details.edit_buttons.onclick = function(){
        
        document.getElementById("name").value = allDetails[this.id-1].name;
        document.getElementById("age").value =  allDetails[this.id-1].age;
        document.getElementById("email").value = allDetails[this.id-1].email;

        flag = 1;
        update_id = this.id - 1;

        temp_name = this.parentNode.parentNode.cells[0];
        temp_age = this.parentNode.parentNode.cells[1];
        temp_email = this.parentNode.parentNode.cells[2];
    
    }

    console.log(allDetails);
    
}

function showInTable(details) {
    var col = ["name", "age", "email", "edit_buttons", "delete_buttons"];
    var table = document.getElementById("ShowTable");

    var tr = document.createElement("tr");
    tr.setAttribute("id", "tr" + id);

    for (var i = 0; i < 5; i++) {
        var td = document.createElement("td");

        if (i == 3) {
            td.appendChild(details[col[i]])
            tr.appendChild(td);
        }
        else if (i == 4) {
            td.appendChild(details[col[i]])
            tr.appendChild(td);
        }
        else {

            td.innerText = details[col[i]];
            tr.appendChild(td);
        }
    }
    table.appendChild(tr);

}


