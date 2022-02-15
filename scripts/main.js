const genero = document.querySelector('.buttonGenero');

const Tablegenero = document.querySelector('.generos');

const icone = document.getElementById('icone');

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


const onload = document.querySelector('.on-load')

window.addEventListener('load', () => {
        setInterval(() => {
                onload.style.display = "none";
        },200)
})


const chk = document.getElementById('chk')

const circle = document.querySelector(".circle")

const headrow = document.getElementById("headrow")

chk.onclick = () => {
        
        circle.classList.toggle('ative');
        headrow.classList.toggle('light');
}
