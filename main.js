
let button = document.querySelector('#button');
let campo = document.querySelector('#input');


button.addEventListener('click', () => {
    if(campo.value.length != ' '){
        alert(campo.value);
    }
})