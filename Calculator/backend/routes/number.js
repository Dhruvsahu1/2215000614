import express from 'express';
import { getNumbers } from '../controllers/numController.js';

const router = express.Router();

router.get('/:numberid', getNumbers);

export default router;
