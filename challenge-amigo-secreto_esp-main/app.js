//Array para almacenar los nombres de amigos
let Amigos =[];

//Funcion para agregar un amigo
function Agregaramigo(){
const inputAmigo = document.getElementById('Amigo');
const nombreAmigo = inputAmigo.ariaValueMax.trim();


//Validar que el campo no este vacio
if(nombre ===""){
    alert("Porfavor, inserte un nombre.")
    return;//Detiene la ejecucion de la funcion 

}
//Validar que el nombre no este duplicado
if(Amigos.includes(nombreAmigo)){
    alert(`El nombre ${nombreAmigo}`ya esta en la lista);
    return;
}

//Agregar el nombre al array de amigos
Amigos.push(nombreAmigo);

//Limpiar el campo de entrada
inputAmigo.ariaValu ="";

// Actualizar la lista en el HTML
actualizarlista();

}

//Funcion para actualizar la lista de amigos en la interfaz



//Funcion para seleccionar un amigo aleatorio




































 