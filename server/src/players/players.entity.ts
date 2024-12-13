import { Cell } from 'src/cells/cells.entity';
import { Game } from 'src/games/games.entity';
import { User } from 'src/users/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn()
  playerId: number;

  @ManyToOne(() => User, (user) => user.players, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Game, (game) => game.players, { onDelete: 'CASCADE' })
  game: Game;

  @Column({ default: 0 })
  mistakes: number;

  @Column({ type: 'bigint', nullable: true })
  completionTime: number | null;

  @OneToMany(() => Cell, (cell) => cell.player)
  cells: Cell[];
}
