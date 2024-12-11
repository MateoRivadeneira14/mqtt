// Conectar al broker MQTT
const client = mqtt.connect('ws://localhost:9001');  // Conexión WebSocket al broker

client.on('connect', () => {
    console.log('Conectado al broker MQTT');
    // Suscribirse al tema 'topic/test'
    client.subscribe('topic/test', (err) => {
        if (!err) {
            console.log('Suscripción exitosa a topic/test');
        }
    });
});

// Mostrar los mensajes recibidos
client.on('message', (topic, message) => {
    // Acceder al contenedor de mensajes en la página
    const messagesDiv = document.getElementById('messages');
    // Crear un nuevo elemento de párrafo para cada mensaje
    const newMessage = document.createElement('p');
    // Asignar el texto del mensaje recibido
    newMessage.textContent = `Nuevo mensaje: ${message.toString()}`;
    // Añadir el mensaje al contenedor
    messagesDiv.appendChild(newMessage);
});
