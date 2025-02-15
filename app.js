// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    let listaAmigos = document.getElementById("amigo").value;
    console.log(listaAmigos);
    
    if(listaAmigos == "" || listaAmigos >= 0){
        alert("Por favor, inserte un nombre");
        limpiarCaja();
    } else {
        amigos.push(listaAmigos);
        console.log(amigos);
    limpiarCaja();
    }
 }

function actualizarLista(){
    let listadoAmigos = document.getElementById("listaAmigos");
    listadoAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        listadoAmigos.innerHTML += `<li>${amigos[i]}</li>`;
        console.log(amigos[i]);
    }
}

function sortearAmigo(){
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("listaAmigos").innerHTML = amigoSorteado;
}


function limpiarCaja(){
    document.getElementById("amigo").value = "";
}




