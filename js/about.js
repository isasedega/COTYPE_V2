// Cuando hago click .header-Menu--Hamburguesa--boton , .nav TOGGLE 'activo'

const button = document.querySelector('.header-Menu--Hamburguesa--boton')
const nav = document.querySelector('.nav')
const navCierre = document.querySelector('.nav-cierre')


button.addEventListener('click' , ()=>{
    nav.classList.toggle('activo')
})

navCierre.addEventListener('click' , ()=>{
    nav.classList.remove('activo')
})
