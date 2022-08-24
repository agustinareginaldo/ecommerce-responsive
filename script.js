const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) { // para hacer que podamos abrir el menu
    bar.addEventListener('click', () => {
        nav.classList.add('active'); // se activa el menu hamb cuando alguien le hace click

    })
}

if (close) { // para cerrar el menu
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // hace que podamos cerrar el menu hamb al clikear X
    })
}