document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector("#agregar");

    boton.addEventListener("click", () => {
        const texto = document.querySelector("#texto");
        const url = document.querySelector("#url");

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

        texto.value= "";
        url.value= "";
    })
})