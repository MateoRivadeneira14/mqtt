const express = require('express');
const path = require('path');
const broker = require('./broker'); // Importar la configuración del broker

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../frontend'))); // Servir el frontend estático

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
