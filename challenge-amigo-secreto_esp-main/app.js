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
ActualizarLista();

}

//Funcion para actualizar la lista de amigos en la interfaz
function actualizarlista(){
    const ListaAmigos =document.getElementById('ListaAmigos');

    //Limpiar el contenido actual de la lista
    ListaAmigos.innerHTML = "";//Borra cualquier contenido previo dentro del contenedor de la lista

    //Recorrer el array con un ciclo for
    for(let i = 0; i<Amigos.length; i++){
        const li = document.createElement('Li'),
        Li.textcontent = Amigos[i];
        ListaAmigos.appendChild(Li);
    }

}


//Funcion para seleccionar un amigo aleatorio
function sortearAmigo(){
    //Validar que haya amigos disonibles
    if(Amigos.length === 0){//Comprueba si el array 'amigo' esta vacio.
        alert("No hay amigos disponibles para sortar. Agregar al menos uno.")

    }

    //Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * Amigos.length); //Genera un numero aleatorio entre el 0 la longitud del array menor
    
    //Obtener el nombre sorteado
    const amigoSorteado = Amigos[indiceAleatorio]//Use el indice aleatorio para obtener el nombe del array

    //Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}





































 