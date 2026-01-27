import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { router as cursosRouter } from './routes/cursos.js';

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/api/cursos', cursosRouter);
app.listen(PORT, () => {
console.log(`Servidor escuchando en http://localhost:${PORT}`);
});