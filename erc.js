const bigMoney = document.getElementById('total-estimate')
const numInput2020 = document.getElementById('2020count')
const numInput2021 = document.getElementById('2021count')

function changeBigMoney () {
    const num2020 = numInput2020.value
    const num2021 = numInput2021.value
    let newBigMoneyVal = 0
    if(num2020 && num2020 >= 0){
        newBigMoneyVal += 4000 * num2020
    }
    if(num2021 && num2021 >= 0){
        newBigMoneyVal += 11550 * num2021
    }
    bigMoney.innerHTML = `$${newBigMoneyVal}`

}
window.onkeyup = changeBigMoney
window.onmouseup = changeBigMoney

