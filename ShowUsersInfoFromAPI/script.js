getUsersdata();
async function getUsersdata(){
    const data = await fetch("https://611f26c39771bf001785c78f.mockapi.io/users",
                    {method: "GET"});
    const userData = await data.json();
    document.querySelector(".userList").innerHTML = ``;
    userData.forEach((user)=> CreateUsersdata(user));

}
async function deleteUser(id){
    const data = await fetch(`https://611f26c39771bf001785c78f.mockapi.io/users/${id}`,
                    {method: "DELETE"});
    const userdata = await data.json();
    getUsersdata();
    console.log(userdata);

}

async function addUser(){
   const data = await fetch("https://611f26c39771bf001785c78f.mockapi.io/users",
    {method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name : document.getElementById("name").value,
            avatar : document.getElementById("avatar").value
        })
    });
    const userdata = await data.json();
   // console.log(userdata);
    getUsersdata();
}

async function updateUser(id){
    const data = await fetch(`https://611f26c39771bf001785c78f.mockapi.io/users/${id}`,
    {method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            avatar: document.getElementById("avatar").value
        })
    });
    getUsersdata();
}

function CreateUsersdata({avatar, name, createdAt, id}){
    const container = document.createElement("div");
    container.setAttribute("class","container");
    container.innerHTML = `
            <div class = "img_container">
                <img src="${avatar}" width = "80px" height = "80px">
            </div>
            <div class = "info">
                <p><b>${name}<b></p>
                <p>${new Date(createdAt).toDateString()}</p>
                <button onclick = "deleteUser(${id})">Delete</button>
                <button onclick = "updateUser(${id})">Update</button>
            </div>`
    document.querySelector(".userList").append(container);
}

