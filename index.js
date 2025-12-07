import express from "express"
import cors from "cors"
import { configDotenv } from "dotenv"

const app = express();
const PORT = proccess.env.PORT || 3000;

const corsConfig = {
    origin: ['http://localhost:5173', 'https://midominio.com'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}

app.use(cors(corsConfig)); // para los headers
app.use(express.json()); // para el body

app.use((req, res, next) => {
    console.log(`Datos received at: ${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    res.status(404).send(`Recurso no encontrado o ruta inválida`);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});

