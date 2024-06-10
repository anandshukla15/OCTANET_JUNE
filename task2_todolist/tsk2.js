let btn1=document.querySelector(".button1");
let btn2=document.querySelector(".button2");
let a=[];
let i=0;
 btn1.addEventListener("click",function()
  {
    let t=prompt("enter your task");

a[i]=t;
++i;
//console.log("btn clicked");
let list=document.querySelector("#list");
    let li=document.createElement("li");
         li.innerText=t;
         list.appendChild(li);
  });

  btn2.addEventListener("click",function()
{
let m=prompt("enter number to deleted");
let list=document.querySelector("#list");
list.removeChild(list.children[m-1]);
});