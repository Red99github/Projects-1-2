const hex = ['#D88823', '#63118C', '#000000'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const hexColor = getRandomNumber();
    document.body.style.backgroundColor = hex[hexColor];
    color.textContent = hex[hexColor];
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}