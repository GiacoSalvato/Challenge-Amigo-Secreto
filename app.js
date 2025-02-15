// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(nombre){
    let amigos = document.getElementById("amigo").value;
    console.log(amigos);

    if(amigos == "" || amigos > 0){
        alert("Por favor, inserte un nombre");
        limpiarCaja();
} else {
    limpiarCaja(); 
 }
 }



function limpiarCaja(){
    document.getElementById("amigo").value = "";
}




