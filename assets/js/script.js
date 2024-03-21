// Función asincrona para obtener y mostrar datos.
const obtieneDatos = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        // Realiza la petición a la URL.
        const resultado = await fetch(url);
        // Transforma datos a un arreglo en formato json.
        const arregloRespuesta = await resultado.json();
        // Muestra los títulos de los primeros 20 registros.
        arregloRespuesta.forEach((item) => {
            if (item.id <= 20) {
                console.log(`ID: ${item.id} , Titulo: ${item.title}`);
            }
        })
    }
    //Manejo de errores con catch.
    catch (error) {
        console.log(error);
    }
}

// Llama a la función para obtener y mostrar los datos requeridos.
obtieneDatos();

// Función que devuelve una promesa que se ejecuta después de 3 segundos con el mensaje 'Información Enviada'.
const enviarMensaje = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La información ha sido enviada");
        }, 3000);
    });
}

// Función asíncrona que espera a que se resuelva la promesa devuelta por enviarMensaje y luego muestra el mensaje.
const mostrarMensaje = async () => {
    // Espera que se resuelva la promesa.
    const mensaje = await enviarMensaje();
    // Muestra el mensaje en la consola.
    console.log(mensaje);
}

// Llama a la función para obtener y mostrar el mensaje.
mostrarMensaje();