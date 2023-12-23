const images = ["green", "red", "white",];
const btn = document.getElementById("btn");
const image = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = images[randomNumber];
    image.textContent = images[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * images.length);
}