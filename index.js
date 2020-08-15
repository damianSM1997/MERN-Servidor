const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')

//crear el servidor
const app = express();

//conectar a la DB
conectarDB();

//Habilitar cors
app.use(cors())

//habilitar express.json, ayuda a leer datos que el usuario coloque
app.use(express.json({extended:true}));

//puerto de la app
const port = process.env.PORT || 4000;

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`Server online puerto ${port}`)
});