var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ]

obj["next"] = "4th element";
obj["4.8"] = "Hello";

console.log("*****Using for loop*****");
for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);  
}

console.log("*****Using for in loop*****");
for(let i in obj){
        console.log(i+" : "+obj[i]);
}

console.log("*****Using for of loop*****");
for (const i of obj) {
    console.log(i);   
}

console.log("*****Using foreach loop*****");
obj.forEach(i => {
    console.log(i);
});
