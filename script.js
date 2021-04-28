document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector("#agregar");

    boton.addEventListener("click", () => {
        const texto = document.querySelector("#texto");
        const url = document.querySelector("#url");

        if (texto.value === "" || url.value === "") {
            alert("Ambos campos deben ser llenados");
        } else {

            const div = document.createElement("div");
            div.classList.add("caja");

            const p = document.createElement("p");
            p.textContent = texto.value;

            const imagen = document.createElement("img");
            imagen.src = url.value;
            imagen.classList.add("imagen");

            div.appendChild(imagen);
            div.appendChild(p);

            document.querySelector(".contenedor").appendChild(div);

            texto.value = "";
            url.value = "";

            //Guarda todas las imagenes en una array
            const imagenes = document.querySelectorAll(".imagen");
            for (let i = 0; i < imagenes.length; i++) {
                imagenes[i].addEventListener("click", abrirImagen) //Llamada a la funcion para abrir la imagen
            }
        }

    })

    //Guarda los objetos de HTML en variables
    const divGrande = document.querySelector(".div-grande")
    const imagenGrande = document.querySelector("#imagenGrande");
    const btnCerrar = document.querySelector("#btn-cerrar");

    //Funcion para abrir la imagen en su tamaño real
    function abrirImagen(e) {
        const urlImagen = e.target.src; //Obtiene la url de la imagen
        imagenGrande.src = urlImagen; //Le asigna la url de la imagen seleccionada a la imagen grande que vamos a abrir

        divGrande.classList.add("open"); //Añade la clase que va a mostrar el div con la imagen
        divGrande.addEventListener("click", cerrarImagen); //Llamada a cerrar el div con la imagen grande
    }

    //Funcion que cierra el div con la imagen
    function cerrarImagen(e) {
        if (e.target === btnCerrar) {
            divGrande.classList.remove("open");
        }
    }
})