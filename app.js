// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(nombre){
    let amigos =document.getElementById("amigo").value;
    console.log(amigos);

    if(amigos == ""){
        alert("Debe ingresar un nombre de amigo");
} else {
    limpiarCaja(); 
 }
 }



function limpiarCaja(){
    document.getElementById("amigo").value = "";
}




