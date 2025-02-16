// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    let listaAmigos = document.getElementById("amigo").value;
    console.log(listaAmigos);
    
    if(listaAmigos == "" || listaAmigos >= 0){
        alert("Ingrese un nombre válido");
        limpiarCaja();
    } else {
        amigos.push(listaAmigos);
        console.log(amigos);
    limpiarCaja();
    }
    return;
 }

function actualizarLista(){
    let listadoAmigos = document.getElementById("listaAmigos");
    listadoAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        listadoAmigos.innerHTML += `<li>${amigos[i]}</li>`;
        console.log(amigos[i]);
    }
    return;
}

function sortearAmigo(){
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("listaAmigos").innerHTML = amigoSorteado;
    if(amigos.length == 0){
        alert("No hay amigos para sortear");
    }
    console.log(amigoSorteado);
    //sortear todos los participantes
    if(amigos.includes(amigoSorteado)){
        let index = amigos.indexOf(amigoSorteado);
        amigos.splice(index, 1);
    } 
return;
}



function limpiarCaja(){
    document.getElementById("amigo").value = "";
    return;
}




