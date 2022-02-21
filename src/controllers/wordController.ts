import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
// @desc Get Word
// @route GET /api/word
// @access Public
const getWord = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ word: 'pizza' });
});

// @desc Submit Guess
// @route POST /api/word
// @access private
const postGuess = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.guess) {
    res.status(400);
    throw new Error('Please provide a guess in the request body');
  }
  res.status(201).json({ message: 'guess submitted' });
});

export {
  getWord,
  postGuess
}