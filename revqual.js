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

radioYes.addEventListener('input', function () {
    hideUnhide();
});
radioNo.addEventListener('input', function () {
    hideUnhide();
});
hideUnhide()
window.onmousemove = hideUnhide