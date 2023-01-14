const bigMoney = document.getElementById('total-estimate')
const numInput2020 = document.getElementById('2020count')
const numInput2021 = document.getElementById('2021count')
const inputs = document.getElementsByTagName('input')
const warn1 = document.getElementById('average_fulltime_employees_2020_warning')
const warn2 = document.getElementById('average_fulltime_employees_2021_warning')

function w2logic () {
    const w2 = localStorage.getItem('w2_wages_paid')
    if(w2 == 'true'){
        document.location.href='./form4.html'
    }else{
        document.location.href='./sorry.html'
    }
}
function govLogic () {
    const gov = localStorage.getItem('government_entity')
    if(gov == 'true'){
        document.location.href='./sorry.html'
    }else{
        document.location.href='./form5.html'
    }
}
function bizStartLogic () {
    const startedBefore = localStorage.getItem('started_before_feb_2020')
    if(startedBefore == 'true'){
        document.location.href='./empnum.html'
    }else{
        document.location.href='./grossrev.html'
    }
}
function fteNumLogic () {
    const fteNum = localStorage.getItem('fte_2019')
    if(fteNum == 'OVER_500'){
        document.location.href='./sorry.html'
    }else{
        document.location.href='./qualop.html'
    }
}
function revLogic () {
    const rev = localStorage.getItem('over_million_gross_receipts')
    if(rev == 'true'){
        document.location.href='./qualop.html'
    }
    if(rev === 'false'){
        document.location.href='./startupqual.html'
    }
    //TODO finish startupqual qualification
}
function revReducLogic () {
    document.location.href='./supply.html'
}
function supplyChainLogic () {
        document.location.href='./lockdown.html'
}
function lockdownLogic () {
    const lockedDown = localStorage.getItem('suspension')
    const revReduc = localStorage.getItem('had_revenue_reduction')
    const sussy = localStorage.getItem('suspension')
    if(lockedDown == 'true' || revReduc == 'true' || sussy == 'true'){
        document.location.href='./qualified.html'
    }else{
        document.location.href='./sorry.html'
    }
}
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
    window.onmousemove = changeBigMoney
}

function persistInput(inputs) {
    for(const idx in inputs){
        const input = inputs[idx]
        const key = input.name;
        const storedValue = localStorage.getItem(key);

        if (storedValue && input.type != 'radio' && input.type != 'checkbox'){
        input.value = storedValue;
        }
        if((input.type == 'radio'|| input.type == 'checkbox') && input.value == storedValue){
            input.checked = true
        }
        input.addEventListener('input', function () {
            if(input.type != 'checkbox'){
                localStorage.setItem(key, input.value);
            }else{
                localStorage.setItem(key, input.checked)
            }
        });
    }
}
if(inputs.length) {
    persistInput(inputs)
}