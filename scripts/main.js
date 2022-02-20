/**generos */

const genero = document.querySelector('.buttonGenero');

const Tablegenero = document.querySelector('.generos');

const icone = document.getElementById('icone');

genero.onclick = () => {
        Tablegenero.classList.toggle('showGeneros');
        icone.classList.toggle('showI');
}


/**options login */


const Ls = document.querySelector('.L-S')

const user = document.querySelector('.a-profile img')


user.onclick = () => {
        Ls.classList.toggle('ShowLS');
}


        /** input animation */

        const Inputsearch = document.querySelector('.search')

        const Isearch = document.querySelector('.Isearch');

        Isearch.onclick = () => {
                Inputsearch.classList.toggle('showSearch');
                Isearch.classList.toggle('moveI')
          }



const onload = document.querySelector('.on-load')

window.addEventListener('load', () => {
        setInterval(() => {
                onload.style.display = "none";
        }, 150)
})



/** switcher theme */

function switcherTheme(){

        const circle = document.querySelector(".circle")

        const headrow = document.getElementById("headrow")

        const header = document.querySelector('.header')

        const Alight = document.querySelectorAll('.Alight')

        const logoP = document.querySelector('.logoP')

        const title = document.querySelectorAll('.title')

        Inputsearch.classList.toggle('darkInpt')

        circle.classList.toggle('ative');
        logoP.classList.toggle('darkP');
        headrow.classList.toggle('light');
        Isearch.classList.toggle('darki')
        header.classList.toggle('lightH');
        for (const list of Alight) {
                list.classList.toggle('dark')
        }
        for (const titles of title) {
                titles.classList.toggle('darkT')
        }

}



/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('.menu-mobile ul li a')

for (const link of links){
    link.addEventListener('click', () => menu.classList.remove('showmenu-m'))
}



/** Menu mobile */


const menu = document.querySelector('.menu-mobile');

const activeMenu = document.getElementById('MenuActive');


activeMenu.onclick = () => {
        menu.classList.toggle('showmenu-m');
}


