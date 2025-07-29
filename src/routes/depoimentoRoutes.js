import express from 'express';
import depoimentosController from '../controllers/depoimentosController.js';

const router = express.Router();

router.get('/', depoimentosController.getDepoimentos);
router.post('/', depoimentosController.createDepoimento);
router.put('/:id', depoimentosController.updateDepoimento);
router.delete('/:id', depoimentosController.deleteDepoimento);

export default router;