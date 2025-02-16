// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//función principal
//agregar un amigo a la lista
function agregarAmigo(){
    let listaAmigos = document.getElementById("amigo").value;
    console.log(listaAmigos);

    if(listaAmigos == "" || listaAmigos >= 0){
        agregarTextoElemento('h2', 'Ingrese un nombre de amigo válido');
        limpiarCaja();
    } else {
        agregarTextoElemento('h2', 'Digite el nombre de sus amigos');
        amigos.push(listaAmigos);
        console.log(amigos);
        limpiarCaja();
        actualizarLista();
    }
    return;
 }

 //crear una lista visible de los participantes
function actualizarLista(){
    let listadoAmigos = document.getElementById("listaAmigos");
    listadoAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        listadoAmigos.innerHTML += `<li>${amigos[i]}</li>`;
        console.log(amigos[i]);
    }
    return;
}

//sortear amigo aleatorio
function sortearAmigo(){
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("listaAmigos").innerHTML = amigoSorteado;
    if(amigos.length == 0){
        agregarTextoElemento('h2', 'No hay amigos para sortear');
        actualizarLista();
        return;
    }
    console.log(amigoSorteado);
    //sortear todos los participantes
    if(amigos.includes(amigoSorteado)){
        agregarTextoElemento('h2', 'Felicidades el amigo sorteado es: ' + amigoSorteado);
        let index = amigos.indexOf(amigoSorteado);
        amigos.splice(index, 1);
        actualizarLista();
    }
    return;
}


//modificar el texto de un elemento HTML
function agregarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}   


//limpiar caja de texto
function limpiarCaja(){
    document.getElementById("amigo").value = "";
    return;
}




