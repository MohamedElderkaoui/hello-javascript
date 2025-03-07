/*
Clase 6 - Manejo del DOM (06/03/2025)
Vídeo: https://www.twitch.tv/videos/2398786900?t=00h11m52s
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página

const title = document.getElementById("title");
title.textContent = "¡Hola Mundo!";

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

const myImage = document.getElementById("myImage");
myImage.src = "https://via.placeholder.com/150";

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página

const box = document.getElementById("box");
box.classList.add("resaltado");


// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul

const paragraph = document.getElementById("paragraph");
paragraph.style.color = "blue";

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

const list = document.getElementById("list");
const button = document.createElement("button");
button.textContent = "Agregar elemento";
button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Nuevo elemento";
    list.appendChild(li);
});
document.body.appendChild(button);


// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

const deleteParagraph = document.getElementById("deleteParagraph");
const deleteButton = document.createElement("button");

deleteButton.textContent = "Borrar párrafo";
deleteButton.addEventListener("click", () => {
    deleteParagraph.remove();
});

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

const content = document.getElementById("content");
const newContent = document.createElement("h2");
newContent.textContent = "Nuevo Contenido";
content.replaceChildren(newContent);


// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

const greetBtn = document.getElementById("greetBtn");
greetBtn.addEventListener("click", () => {
    alert("��Hola!");
});

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

const textInput = document.getElementById("textInput");
const result = document.getElementById("result");

textInput.addEventListener("input", () => {
    result.textContent = textInput.value;
});


// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

const backgroundBtn = document.getElementById("backgroundBtn");
backgroundBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
});