import { Player } from 'src/players/players.entity';
import { User } from 'src/users/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn()
  gameId: number;

  @ManyToOne(() => User, (user) => user.games, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'datetime', nullable: true })
  startTime: Date | null;

  @Column({
    type: 'enum',
    enum: ['public', 'private'],
    default: 'public',
  })
  visibility: 'public' | 'private';

  @Column({
    type: 'enum',
    enum: ['easy', 'medium', 'hard', 'extreme'],
  })
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';

  @Column({ type: 'char', length: 81 })
  initialBoard: string;

  @Column({ type: 'char', length: 81 })
  solvedBoard: string;

  @CreateDateColumn({ type: 'datetime' })
  creationTime: Date;

  @OneToMany(() => Player, (player) => player.game)
  players: Player[];
}
