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

            //Agrega el evento a cada imagen
            imagen.addEventListener("click", function(){
                //Objetos HTML para mostrar la imagen en el div grande
                const divGrande = document.querySelector(".div-grande")
                const imagenGrande = document.querySelector("#imagenGrande");
                const btnCerrar = document.querySelector("#btn-cerrar");

                imagenGrande.src = imagen.src; //Le asigna la url de la imagen seleccionada a la imagen grande que vamos a abrir

                divGrande.classList.add("open"); //Añade la clase que va a mostrar el div con la imagen

                divGrande.addEventListener("click", function(e){     //cerrar el div con la imagen grande
                    if (e.target === btnCerrar) {
                        divGrande.classList.remove("open");
                    }
                });
            })

            //Resetea los input
            texto.value = "";
            url.value = "";

        }

    })

})