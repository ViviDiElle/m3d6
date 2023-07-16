function clickbottone() {
    for (let section of document.querySelectorAll('section')) {
    section.children[0].classList.add('collapse')
    section.children[0].classList.add('show')
    section.innerHTML= `
    <button style="btn btn-outline-light toggle-btn" data-bs-target="#${section.id} >div" data-bs-toggle="collapse"> Show / Hide Section </button>` + section.innerHTML
    }
}

    window.onload = function () {
        (clickbottone())
        (footer())
    }

function footer() {
    let numeroAlbum = document.querySelectorAll('img').length
    let span = document.createElement('span')
    span.classList.add('text-center')
    span.innerHTML = 'Questa pagina contiene ' + numeroAlbum + ' album' 
    document.querySelector('footer').appendChild(span)
}


