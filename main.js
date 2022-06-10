
let body = document.querySelector('body');

let section = document.createElement('section');
let h1 = document.createElement('h1');
let p = document.createElement('p');
let input = document.createElement('input');
let buttons = document.createElement('button');
let img = document.createElement('img')
img.src = './assets/bola_cristal.png';


input.setAttribute('type', 'Text');
input.setAttribute('placeholder', ' Digite sua pergunta');
input.setAttribute('id', 'input');
buttons.setAttribute('id', 'button');
img.setAttribute('alt', 'Imagem de uma bola de cristal');


h1.innerText = 'Vou revelar seu Destino!';
p.innerHTML = 'Clique em fazer pergunta para que seu destino seja revelado.';
buttons.innerHTML = 'Fazer Pergunta';


section.setAttribute('class', 'container');
section.appendChild(img);
section.appendChild(h1);
section.appendChild(p);
section.appendChild(input);
section.appendChild(buttons);
body.appendChild(section);

let button = document.querySelector('#button');
let campo = document.querySelector('#input');

button.addEventListener('click', () => {
    if(campo.value.length != ' '){
        alert(campo.value);
    }
})