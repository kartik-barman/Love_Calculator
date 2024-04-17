let calculate = document.querySelector("#calculate-btn");
let percentage = document.querySelector("#percentage");
let heart = document.querySelector(".heart");
let yourName = document.querySelector(".input1").value;
let crushName = document.querySelector("#input2").value;
calculate.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 100);
    console.log(`${random}%`);
    let p = document.createElement("p");
    percentage.innerHTML = `${random}%`;
    heart.appendChild(p);
    let yourName = document.querySelector(".input1").value;
    let crushName = document.querySelector("#input2").value;
    let yourNameText = document.querySelector("#your-name");
    let crushNameText = document.querySelector("#crush-name");
    let p1 = document.createElement("p");
    yourNameText.innerHTML = yourName;
    heart.appendChild(p1);
    let p2 = document.createElement("p");
    crushNameText.innerHTML = crushName;
    heart.appendChild(p2);
    console.log(yourName);
})

// Disable right click context Menu
document.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
});

// Disable Keyboard Shortcut Ctrl+u , ctrl+shift+i
document.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && (e.key === "u" || e.key === "U" || e.key === "i" || e.key === "I")) {
        e.preventDefault();
    }
});

// Disable Text Selection

document.addEventListener("selectstart", (e)=>{
    e.preventDefault();
});