const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hlink = document.querySelector('#hlink');
const fasolid = document.querySelector('.fa-solid');

hamburger.addEventListener("click" , () => {
    menu.classList.toggle('hidden')
    fasolid.classList.toggle('fa-xmark')
    maincont2.classList.toggle('hidden')
    maincont2.classList.toggle('flex')
})



hlink.forEach(link =>{
    link.addEventListener('click',() =>{
        menu.classList.toggle('hidden')
        fasolid.classList.toggle('fa-xmark')
    })
})
