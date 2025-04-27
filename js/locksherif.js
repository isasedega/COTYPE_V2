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



// Cuando muevo el ratón (MOUSEMOVE) en la ventana (WINDOW)
    //.caracteresgrandes LE STYLE transform: translateX() y translateY()

const caracteresGrandes = document.querySelector('.caracteres-grandes')

window.addEventListener('mousemove', (e) =>{
    const { clientX , clientY } = e
    //const x = e.clientX;
    //const y = e.clientY;

    caracteresGrandes.style.transform = `translateX(${clientX}px) translateY(${clientY}px)`
})

// Cuando MOUSEOVER en .letras
    //caracteresGrandes le add class visible
    //letrasGrandes remove isVisible
    // letrasGrandes [i] add isVisible

const letras = document.querySelectorAll('.letras')
const letrasGrandes = document.querySelectorAll('.letras-grandes')

letras.forEach(( _ , i ) => {
    letras[i].addEventListener('mouseover' , ()=>{
        caracteresGrandes.classList.add('isVisible')
   

            letrasGrandes.forEach(( _ , i ) =>{
                letrasGrandes[i].classList.remove('isVisible')
            })
        letrasGrandes[i].classList.toggle('isVisible')
    })
    letras[i].addEventListener('mouseout' , ()=>{
        caracteresGrandes.classList.remove('isVisible')
    })
})


const fontSize = document.querySelector('.font-size')
const fontLeading = document.querySelector('.font-leading')
const lineTracking = document.querySelector('.font-tracking')
const typeText = document.querySelector('.typeText')
const tipografiasSeleccion = document.querySelector('.tipografias-seleccion')

//Si cambio la barra del input 
        //typetext coge el valor del input para el tamaño de la tipografia
        //typetext coge el valor del input para el espaciado de las letras
        //typetext coge el valor del input para el interlineado


fontSize.addEventListener('change' , (e) =>{
    console.log(fontSize.value)
    typeText.style.fontSize = fontSize.value + 'px'
})

fontLeading.addEventListener("change" , (e) =>{
    console.log(fontLeading.value)
    typeText.style.letterSpacing = fontLeading.value + 'px'
})

lineTracking.addEventListener("change" , (e)=>{
    console.log(lineTracking.value)
    typeText.style.lineHeight = lineTracking.value + 'px'
})

// Si CAMBIO el input select
    //Cambia la familia de tipografia segun el valor seleccionado

tipografiasSeleccion.addEventListener('change' , (e) =>{
    console.log(tipografiasSeleccion.value)
    typeText.style.fontFamily = tipografiasSeleccion.value
})