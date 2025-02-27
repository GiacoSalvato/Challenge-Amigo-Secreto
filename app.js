// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//función principal
//agregar un amigo a la lista
 function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    console.log(nombre);

    if (nombre.trim() === "" || !isNaN(nombre)) { // Verificamos si esta vacío o con número
        agregarTextoElemento('h2', 'Ingrese un nombre de amigo válido');
        limpiarCaja();
        return;
    }

    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre)) { // Verificamos si solo tiene letras
        agregarTextoElemento('h2', 'Ingrese un nombre válido (solo letras)');
        return;
    }

    if (validarDuplicados(amigos, nombre)) { // Verificamos si ya existe el amigo
        agregarTextoElemento('h2', 'Este amigo ya está en la lista');
    } else {
        amigos.push(nombre); // Agregamos el amigo a la lista
        agregarTextoElemento('h2', 'Digite el nombre de sus amigos');
    console.log(amigos);
    }
    limpiarCaja();
    actualizarLista();
    return;
}


//función para validar duplicados
function validarDuplicados(listaAmigos , nombre) {
    let nombreNormalizado = nombre.trim().toLowerCase();
    return listaAmigos.some(amigo => amigo.toLowerCase() === nombreNormalizado);
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




