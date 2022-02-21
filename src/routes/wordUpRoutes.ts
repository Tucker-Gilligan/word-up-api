import express, { Request, Response, NextFunction } from 'express';
import { getWord, postGuess } from '../controllers/wordController';

const router = express.Router();

router
  .route('/')
  .get(getWord)
  .post(postGuess);

export default router;