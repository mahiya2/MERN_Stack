const vegetables=["onion","tomato","brinjal","carrot","beetroot","pumpkin","broccli","mushroom"];
//vegetables.forEach(veg=>console.log(veg));
function nothing(m,callback)
{
    console.log(m+"Something something");
    callback();
}
function character()
{
console.log("Jayamravi , Thrisha");
}
//nothing("movie:",character);
//promise
let promise=new Promise((resolve,reject)=>{
    resolve("SUCCESS");
}
);
/*promise.then(result =>{
    console.log(result)
});*/
async function sum() {
    return 7+8;
}
//sum().then(console.log);
let std={
    name:"deepak",
    age:20,
};
let json=JSON.stringify(std);
console.log(json);