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