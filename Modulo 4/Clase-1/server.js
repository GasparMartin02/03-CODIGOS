const express = require('express'); //esto es para traer la libreria express
const app = express();

app.get('/test', (req, res) => {
    res.status(200).send('hola');
});

app.post('/api/users', (req, res) => {
    res.status(201).send('Usuario creado con exito. Post');
});

app.put('/api/users', (req, res) => {
    res.status(201).send('Usuario editado con exito. Put');
});

app.patch('/api/users', (req, res) => {
    res.status(200).send('Usuario editado con exito. Patch');
});

app.delete('/api/users', (req, res) => {
    res.status(200).send('Usuario eliminado con exito. Delete');
});

app.listen(3100, () => {
    console.log('estamos en el puerto 3000');
});