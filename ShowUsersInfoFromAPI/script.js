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

//let userName = document.getElementById("name").value;
async function addUser(){
   const data =  await fetch("https://611f26c39771bf001785c78f.mockapi.io/users",
    {method: "POST",
        header:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name : "shubhu",
            avatar : "https://cdn.fakercloud.com/avatars/webtanya_128.jpg",
            createdAt : new Date().toISOString() 
        })
    });
    const userdata = await data.json();
    console.log(userdata);
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
            </div>`
    document.querySelector(".userList").append(container);
}

