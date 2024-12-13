import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { Game } from '../games.entity';
import generateSudoku from '../utils/sudoku.util';

@Injectable()
export class GameCreationService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
  ) {}

  async create(
    user: User,
    difficulty: 'easy' | 'medium' | 'hard' | 'extreme',
    visibility: 'public' | 'private',
  ): Promise<number> {
    const { startingBoard, solvedBoard } = generateSudoku(difficulty);
    const newGame = this.gameRepository.create({
      user,
      difficulty,
      visibility,
      initialBoard: startingBoard,
      solvedBoard: solvedBoard,
    });
    const savedGame = await this.gameRepository.save(newGame);
    return savedGame.gameId;
  }
}
