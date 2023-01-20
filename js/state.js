const select = document.getElementsByTagName('select')

function persistSelect(inputs) {
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
persistSelect(select)