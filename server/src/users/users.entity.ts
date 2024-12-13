import { Game } from 'src/games/games.entity';
import { Player } from 'src/players/players.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  picture: string;

  @OneToMany(() => Game, (game) => game.user)
  games: Game[];

  @OneToMany(() => Player, (player) => player.user)
  players: Player[];
}
