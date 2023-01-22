const radioYes = document.getElementById('id_supply_chain_disruption_0')
const radioNo = document.getElementById('id_supply_chain_disruption_1')
const container = document.getElementById('supply-chain-wrapper')

function hideUnhide () {
    if(radioYes.checked == true){
        container.style = ''
    }
    if(radioNo.checked == true){
        container.style = 'display: none;'
    }
}
function uncheckBoxes () {
    const box1 = document.getElementById('id_supply_chain_disruption_quarters_2021_0')
    const box2 = document.getElementById('id_supply_chain_disruption_quarters_2021_1')
    const box3 = document.getElementById('id_supply_chain_disruption_quarters_2021_2')
    const box4 = document.getElementById('id_supply_chain_terms')
    const boxes = [box1, box2, box3, box4]
    for (const idx in boxes){
        const input = boxes[idx]
        const key = input.name;
        input.checked = false
        localStorage.setItem(key, input.checked)
    }
}
radioYes.addEventListener('input', function () {
    hideUnhide();
});
radioNo.addEventListener('input', function () {
    hideUnhide();
    uncheckBoxes()
});
hideUnhide()
window.onload = hideUnhide