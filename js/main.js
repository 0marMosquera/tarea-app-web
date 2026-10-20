let nombre = "Omar Mosquera"; 
let edad = 22;
const COLOR_ROJO = "#FF0000";


console.log(nombre);

let contenidoDiv = document.getElementById("contenido");

function addContent(newContent) {
    contenidoDiv.innerHTML += newContent;
    console.log("Contenido añadido: " + newContent);
}

addContent(`<h2>${nombre}</h2><h3>Edad: ${edad} años</h3>`);

if (edad >= 18) {
    addContent("<p class='true'>Puedes entrar a la disco.</p>");
} else if (edad > 13) {
    addContent("<p class='adult'>Puedes entrar con un adulto responsable.</p>");
} else {
    addContent("<p class='false'>No puedes entrar bajo ninguna circunstancia.</p>");
}

let edades =;

for (let i = 0; i < edades.length; i++) {
    addContent(`<p>La edad procesada del arreglo es de: ${edades[i]} años.</p>`);
}
