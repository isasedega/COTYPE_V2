// Las constantes

const inputText = document.querySelector('.typeText')
const outputElements = document.querySelectorAll('.output')
const isVisible = document.querySelector(`.isVisible`)
const next = document.querySelector(`.Next`)
const prev = document.querySelector(`.Prev`)
const sliderImgs = document.querySelectorAll(`.Slider-img`)
const sliderSpanInicial = document.querySelector(`.Slider-span--Inicial`)


    //Selecciona el campo de entrada de texto
    

    //Selecciona todos los elementos <p> con clase 'output'
    

    // Escucha el evento 'input' para detectar cambios en el campo de texto
   inputText.addEventListener('input', function() {
        // Obtiene el valor ingresado en el input
        const textValue = inputText.value

        // Cambia el texto de todos los elementos <p class="output">
       outputElements.forEach(function(p) {
           p.textContent = textValue; // Cambia el contenido del <p>
        });
    });




//document.addEventListener(`DOMContentLoaded` , ()=>{
    //inputText.addEventListener('input' , ()=>{
      //  const textValue = inputText.value
        
      //  

      //  outputElements.forEach(( _ , i )=>{
            // p.textContent = textValue

      //  })
  //  })

// })



// Manejadores de eventos para el slider de imágenes
let foto = 0 // Variable que lleva el seguimiento de la imagen actualmente visible en el slider
console.log( sliderSpanInicial )

next.addEventListener(`click` , ()=>{
    console.clear() // Limpiar la consola cada vez que se haga clic en "next"
    foto++ // Incrementar la imagen actual
    if( foto >= 5 ){ // Si hemos llegado al final (se asume que hay 5 imágenes)
        foto = 0 // Volver a la primera imagen
    }

    // Elimina la clase 'isVisible' de todas las imágenes
    sliderImgs.forEach((_ , i)=>{
        sliderImgs[i].classList.remove(`isVisible`)
    })

    // Añade la clase 'isVisible' a la imagen actual
    sliderImgs[foto].classList.add(`isVisible`)

    // Actualiza el número mostrado en el span
    sliderSpanInicial.innerHTML = foto + 1

    console.log(foto) // Muestra el índice de la imagen actual en la consola
})


// Lo mismo que lo anterior pero para la flecha de la izquierda
prev.addEventListener(`click` , ()=>{
    console.clear()
    foto--
    if(foto <= -1 ){
        foto = 4
    }

    sliderImgs.forEach((_ , i)=>{
        sliderImgs[i].classList.remove(`isVisible`)

    })

    sliderImgs[foto].classList.add(`isVisible`)

    sliderSpanInicial.innerHTML = foto + 1

    console.log(foto)
})


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


// Cuando CHANGE .rango .outputs le style font size según el valor del rango + px

rango.addEventListener('change' , (e)=>{
    console.log(rango.value)

    outputElements.forEach(( _ , i )=>{
        outputElements[i].style.fontSize = rango.value + 'px'
    })
})



// Cuando CHANGE .tracking .outputs le style letter spacing según el valor del rango + px

tracking.addEventListener('change' , (e)=>{
    console.log(tracking.value)
    
        outputElements.forEach(( _ , i)=>{
            outputElements[i].style.letterSpacing = tracking.value + 'px'
        })
})


