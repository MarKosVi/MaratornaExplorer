
let body = document.querySelector('body');

let section = document.createElement('section');
let h1 = document.createElement('h1');
let p = document.createElement('p');
let result = document.createElement('p');
let input = document.createElement('input');
let buttons = document.createElement('button');
let img = document.createElement('img')
img.src = './assets/bola_cristal.png';


input.setAttribute('type', 'Text');
input.setAttribute('placeholder', ' Digite sua pergunta');
input.setAttribute('id', 'input');
result.setAttribute('class', 'disabled');
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
section.appendChild(result); 

let button = document.querySelector('#button');
let campo = document.querySelector('#input');

let Respostas = [ "Certeza!",
"Não tenho tanta certeza.",
"É decididamente assim.",
"Não conte com isso.",
"Sem dúvidas!",
"Pergunte novamente mais tarde.",
"Sim, definitivamente!",
"Minha resposta é não.",
"Você pode contar com isso.",
"Melhor não te dizer agora.",
"A meu ver, sim.",
"Minhas fontes dizem não.",
"Provavelmente.",
"Não é possível prever agora.",
"Perspectiva boa.",
"As perspectivas não são tão boas.",
"Sim.",
"Concentre-se e pergunte novamente.",
"Sinais apontam que sim."];

// function
 // Limpar input
function clear() {
    setTimeout(()=> {
        campo.value = '';
        result.setAttribute('class', 'disabled');
    } ,5000);
}

button.addEventListener('click', () => {
    if(campo.value.length != ' '){
        let num = Math.floor(Math.random()* Respostas.length);
        result.innerText = Respostas[num];
        result.setAttribute('class', 'ativate');
        clear();
    }
})
