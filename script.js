const result = document.getElementById('result');
const bntGenerate = document.getElementById('btn-generate');
let timeSeconds = 30000;
const arrRandom = [];

// click button for generate number
bntGenerate.addEventListener ('click', function () {
    createTime();
    result.innerHTML = arrRandom;
})


// function five random number
function fiveNumberRandom () {
    for (let i = 0; i < 5; i++) {
        let numberRandom = Math.floor(Math.random() * 10 + 1);
        arrRandom.push(numberRandom);
        
        while (arrRandom.includes(numberRandom)) {
            numberRandom = Math.floor(Math.random() * 10 + 1);
        }
    }
}


// generate time 30 seconds
function createTime () {
    setTimeout(timeSeconds);
}