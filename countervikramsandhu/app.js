// set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const randomincrease = [1, 6, -8, 3, 2, -2, -6, -4, 31, 1000]

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else if (styles.contains('decrease10')){
            count -= 10;    
        }
        else if (styles.contains('increase10')){
            count += 10; 
        }
        else if (styles.contains('random')){
            count += randomincrease[getRandomNumber()];           
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if (count < 0){
            value.style.color = 'red';
        }
        if (count === 0){
            value.style.color = '#222';
        }
        
        value.textContent = count;
    });
});

function getRandomNumber(){
    return Math.floor(Math.random() * randomincrease.length);
}