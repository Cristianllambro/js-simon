const result = document.getElementById('result');
const bntGenerate = document.getElementById('btn-generate');
const error = document.getElementById('error');

let arrRandom = [];
let arrCorrect = [];

// click button for generate number
bntGenerate.addEventListener ('click', function (){
    if(arrRandom.length != 0) {
        arrRandom = [];
        arrCorrect = [];
    }
    fiveNumberRandom(10);
});


// function five random number
function fiveNumberRandom (max) {
    for (let i = 0; i < 5; i++) {
        let check = false;
        
        while (!check) {
            let numberRandom = Math.floor(Math.random() * max + 1);
            let checkValidate = true;
            for (let j = 0; j < arrRandom.length; j++) {
                if (numberRandom == arrRandom[j]) {
                    checkValidate = false;
                }
            }
            
            if (checkValidate) {
                arrRandom.push(numberRandom);
                check = true;
            }
        }
        console.log(arrRandom)
    }
    result.innerHTML = arrRandom;
    createTime();
}


// generate time 30 seconds
function createTime () {
    setTimeout(function () {
        result.innerHTML = '';
        setTimeout(function () {
            for (let i = 1; i < 6; i++) {
                let userNumber = parseInt(prompt("Inserisci il numero " + i + ':'));
                let check = false;
                for (let j = 0; j < arrRandom.length; j++) {
                    if (userNumber == arrRandom[j]) {
                        arrCorrect.push(userNumber);
                        check = true;
                    }
                }
                if (check){
                    let index = arrRandom.indexOf(userNumber);
                    arrRandom.splice(index, 1);
                }
            }
            result.innerHTML = 'numeri giusti: ' + arrCorrect;
            error.innerHTML = 'numeri sbagliati: ' + arrRandom;

        }, 500);
    }, 5000);
}

// l'ho fatto con un aiuto esterno perche' non sriuscivo e avevo un blocco