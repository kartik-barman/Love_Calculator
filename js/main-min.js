let calculate=document.querySelector("#calculate-btn"),percentage=document.querySelector("#percentage"),heart=document.querySelector(".heart"),yourName=document.querySelector(".input1").value,crushName=document.querySelector("#input2").value;calculate.addEventListener("click",(()=>{let e=Math.floor(100*Math.random()),t=document.createElement("p");percentage.innerHTML=`${e}%`,heart.appendChild(t);let n=document.querySelector(".input1").value,r=document.querySelector("#input2").value,u=document.querySelector("#your-name"),c=document.querySelector("#crush-name"),a=document.createElement("p");u.innerHTML=n,heart.appendChild(a);let l=document.createElement("p");c.innerHTML=r,heart.appendChild(l)})),document.addEventListener("contextmenu",(e=>{e.preventDefault()})),document.addEventListener("keydown",(e=>{!e.ctrlKey||"u"!==e.key&&"U"!==e.key&&"i"!==e.key&&"I"!==e.key||e.preventDefault()})),document.addEventListener("selectstart",(e=>{e.preventDefault()}));