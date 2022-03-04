const result = document.getElementById('result');
const bntGenerate = document.getElementById('btn-generate');
let time = 5;
let gap = 1000;
const arrRandom = [];

const myTime = setInterval(decrementTime, gap)


bntGenerate.addEventListener ('click', function () {
    for (i = 0; i < 5; i++) {
        let numberRandom = Math.floor(Math.random() * 10 + 1);
        arrRandom.push(numberRandom);
    
        while (arrRandom.includes(numberRandom)) {
            numberRandom = Math.floor(Math.random() * 10 + 1);
        }
        result.innerHTML = arrRandom;
    }
})

function decrementTime () {
    if (time == 0) {
        clearInterval(myTime);
    } else{
        time--;
    }
}