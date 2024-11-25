let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Ocultar el menu una vez que se seleccione una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Funcioon que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("net");
        habilidades[3].classList.add("c");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}
// detecta el scrolling para aplicar la anmiacion de la barra
window.onscroll = function() {
    efectoHabilidades();
}

/*const botonDescargar = document.getElementById("descargar-cv");


botonDescargar.addEventListener("click", () =>{
    const link = document.createElement("a");
    link.href = "hoja de Vida Yeison Orozco.pdf";
    link.download = "hoja_de_Vida_Yeison_Orozco.pdf";
    link.click();
});*/

document.body.addEventListener('focus'), (e) =>{
    e.target.blur();
    true;
};

document.querySelectorAll('*').forEach(el => {
    if (el.isContentEditable) {
        el.setAttribute('contenteditable', 'false');
    }
});

document.addEventListener('focusin', (event) => {
  if (event.target === document.body || event.target === document.documentElement) {
    event.target.blur();
  }
});
