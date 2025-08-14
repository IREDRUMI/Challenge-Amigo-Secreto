// El principal objetivo de este desaf√≠o es fortalecer tus habilidades en l√≥gica de programaci√≥n. Aqu√≠ deber√°s desarrollar la l√≥gica para resolver el problema.
let listaAmigos = [];
let amigo = "";
let elementoHMTL = "";

//Agregar nombres: Los usuarios escribir·n el nombre de un amigo en un campo de texto y lo agregar·n a una lista visible al hacer clic en "Adicionar".
function agregarAmigo(){
    amigo = document.getElementById('amigo').value;
    if (amigo = ""){
        alert ("Ingrese un nombre valido");
    }
    else{
        listaAmigos.push(amigo);
    }
}

function asignarTextoElemento(elemento,texto){
    elementoHMTL = document.querySelector(elemento);
    elementoHMTL.innerHTML = texto
}

function asignarLista(idlistaHMTL,listaJavascript){
    let listaHTML = document.querySelector(¥#${idlistaHMTL}¥);
    for (let index = 0; index < listaJavascript.length; index++) {
        const element = array[index];
        
    }
}





/*Agregar nombres: Los usuarios escribir·n el nombre de un amigo en un campo de texto y lo agregar·n a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto est· vacÌo, el programa mostrar· una alerta pidiendo un nombre v·lido.

Visualizar la lista: Los nombres ingresados aparecer·n en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botÛn "Sortear Amigo", se seleccionar· aleatoriamente un nombre de la lista y se mostrar· en la p·gina.*/

