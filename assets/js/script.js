function scrollpage() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function sobre() {
    window.scrollTo({
        top: 300,
        left: 0,
        behavior: 'smooth'
    });
}

function projetos() {
    window.scrollTo({
        top: 750,
        left: 0,
        behavior: 'smooth'
    });
}

function conhecimentos() {
    window.scrollTo({
        top: 1700,
        left: 0,
        behavior: 'smooth'
    });
}

function educacao() {
    window.scrollTo({
        top: 2200,
        left: 0,
        behavior: 'smooth'
    });
}

function contatos() {
    window.scrollTo({
        top: 2800,
        left: 0,
        behavior: 'smooth'
    });
}

function scrollPosition() {
    if(window.scrollY === 0) {
    document.querySelector('.scroll-button').style.display = 'none';
    //OCULTAR
    } else {
    document.querySelector('.scroll-button').style.display = 'block';
    }
}

setInterval(scrollPosition, 1000);
