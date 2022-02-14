const genero = document.querySelector('.buttonGenero');

const Tablegenero = document.querySelector('.generos');

const icone = document.getElementById('icone');
console.log(icone)

genero.onclick = () => {
        Tablegenero.classList.toggle('showGeneros');
        icone.classList.toggle('showI');
}


const Ls = document.querySelector('.L-S')

const user = document.querySelector('.a-profile img')

user.onclick = () => {
        Ls.classList.toggle('ShowL')
}


const Isearch = document.getElementById("Isearch");

const Inputsearch = document.querySelector('.search');


Isearch.onclick = () => {
        Inputsearch.classList.toggle('showSearch');
        Isearch.classList.toggle('moveI');
}