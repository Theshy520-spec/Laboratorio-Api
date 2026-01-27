import express from 'express';
import cursos from '../data/cursos.js';
export const router = express.Router();
// GET todos los cursos
router.get('/', (req, res) => {
res.json(cursos);
});
// GET curso por id
router.get('/:id', (req, res) => {
const curso = cursos.find(c => c.id === parseInt(req.params.id));
curso ? res.json(curso) : res.status(404).json({ mensaje: 'No encontrado' });
});
// POST nuevo curso
router.post('/', (req, res) => {
const nuevoCurso = { id: Date.now(), ...req.body };
cursos.push(nuevoCurso);
res.status(201).json(nuevoCurso);
});
