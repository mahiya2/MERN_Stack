const box=document.getElementById("box");
let x=0;
let y=0;
function moveright(){
    x+=20;
    box.style.left=x+"px";
}
function moveleft(){
    x-=20;
    box.style.left=x+"px";
}
function moveup(){
    y-=20;
    box.style.top=y+"px";
}
function movedown(){
    y+=20;
    box.style.top=y+"px";
}
document.addEventListener(
    "keydown",
    (event)=>{
        if(event.key=="ArrowUp"){
            y-=30;
        }
    }
)
