// meny för mobilanpassning
const navMenu = document.getElementById('nav_meny'),
    toggleMenu = document.getElementById('nav_pa'),
    closeMenu = document.getElementById('nav_stang')

// visa meny vid mobilanpassning
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// Kryssa ner meny vid mobilanpassning
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

