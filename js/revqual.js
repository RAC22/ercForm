const radioYes = document.getElementById('id_had_revenue_reduction_0')
const radioNo = document.getElementById('id_had_revenue_reduction_1')
const container = document.getElementById('check-container')

function hideUnhide () {
    if(radioYes.checked == true){
        container.style = ''
    }
    if(radioNo.checked == true){
        container.style = 'display: none;'
    }
}
function uncheckBoxes () {
    const box1 = document.getElementById('id_revenue_qualifier_q1')
    const box2 = document.getElementById('id_revenue_qualifier_q2')
    const box3 = document.getElementById('id_revenue_qualifier_q3')
    const boxes = [box1, box2, box3]
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