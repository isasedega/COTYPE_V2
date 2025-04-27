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



const rellene = document.querySelector('.boton-rellene');
const suscribir = document.querySelector('.boton-suscribirse');
const checkboxes = document.querySelectorAll('.checkbox');

function verificarCheckboxes() {
    // Comprobamos si todos los checkboxes están marcados con un array
    const todosMarcados = Array.from(checkboxes).every(checkbox => checkbox.checked);

    // Si todos los checkboxes están marcados, agregamos la clase 'completo' al botón rellene y le quitamos la clase a suscribir
    if (todosMarcados) {
        suscribir.classList.remove('completo');
        rellene.classList.add('completo')
    } else {
        // Si no todos están marcados, suscribir desaparece con la clase completo y rellene vuelve eliminandole dicha clase
        suscribir.classList.add('completo');
        rellene.classList.remove('completo')
    }
}

// Agregamos un event listener a cada checkbox para verificar el estado al hacer clic
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', verificarCheckboxes);
});
    



    

  