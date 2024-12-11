const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function () {
  console.log('Conectado al broker');
  client.subscribe('topic/test', function (err) {
    if (!err) {
      console.log('Suscrito al tema "topic/test"');
      client.publish('topic/test', 'Mensaje desde cliente');
    } else {
      console.log('Error al suscribirse:', err);
    }
  });
});

client.on('message', function (topic, message) {
  console.log('Mensaje recibido:', topic, message.toString());
});
