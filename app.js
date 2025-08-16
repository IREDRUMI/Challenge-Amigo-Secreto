//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosJS = [];

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo(){
    validacionAmigos ('amigo',listaAmigosJS);
    mostrarListaAmigos ('listaAmigos',listaAmigosJS);
}

function validacionAmigos(idinputHMTL,listaJavascript){
    //Capturar el valor del campo de entrada
    let amigo = document.getElementById(`${idinputHMTL}`).value;
    //Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío.
    if (amigo == ""){
        //Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
        alert ("Por favor, inserte un nombre.");
    }
    else{
        // Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push()
        listaJavascript.push(amigo);
        //Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
        document.getElementById('amigo').value = "";
        return listaJavascript;
    }
}

//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
function mostrarListaAmigos(idlistaHMTL,listaJavascript){
    //Obtener el elemento de la lista
    let listaHTML = document.querySelector(`#${idlistaHMTL}`);
    //Limpiar la lista existente
    listaHTML.innerHTML = ""
    let listaUnificada = ""    
    //Iterar sobre el arreglo
    for (let index = 0; index < listaJavascript.length; index++) {
        //Agregar elementos a la lista
        listaUnificada += `<li>${listaJavascript[index]}</li>`;      
    }
    listaHTML.innerHTML = listaUnificada;
    return;
}


//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrar  en la pagina.*/


//FUNCION UTILIZANDO APPEND.CHILD
/*function mostrarListaNombre(idlistaHMTL,listaJavascript){
    let listaHTML = document.querySelector(`#${idlistaHMTL}`);
    for (let index = 0; index < listaJavascript.length; index++) {
        let li = document.createElement ('li');
        li.innerText = listaJavascript[index];
        listaHTML.appendChild(li);
    }
}*/










