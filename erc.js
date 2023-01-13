const bigMoney = document.getElementById('total-estimate')
const numInput2020 = document.getElementById('2020count')
const numInput2021 = document.getElementById('2021count')
const inputs = document.getElementsByTagName('input')
const warn1 = document.getElementById('average_fulltime_employees_2020_warning')
const warn2 = document.getElementById('average_fulltime_employees_2021_warning')
console.log(inputs)

function changeBigMoney () {
    const num2020 = numInput2020.value
    const num2021 = numInput2021.value
    let newBigMoneyVal = 0
    if(num2020 > 100){
        warn1.style = ''
    }else{
        warn1.style = 'display: none;'
    }
    if(num2021 > 500){
        warn2.style = ''
    }else{
        warn2.style = 'display: none;'
    }
    if(num2020 && num2020 >= 0 && num2020 <= 100){
        newBigMoneyVal += 4000 * num2020
    }
    if(num2021 && num2021 >= 0 && num2021 <= 500){
        newBigMoneyVal += 11550 * num2021
    }
    bigMoney.innerHTML = `$${newBigMoneyVal}`

}
if(numInput2020 || numInput2021){
    window.onkeyup = changeBigMoney
    window.onmouseup = changeBigMoney
}

function persistInput(inputs) {
    for(const idx in inputs){
        const input = inputs[idx]
        const key = input.name;
        const storedValue = localStorage.getItem(key);

        if (storedValue){
        input.value = storedValue;
        }
        input.addEventListener('input', function () {
            localStorage.setItem(key, input.value);
        });
    }
}
if(inputs.length) {
    persistInput(inputs)
}
changeBigMoney();