import { Player } from 'src/players/players.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('cells')
export class Cell {
  @PrimaryGeneratedColumn()
  cellId: number;

  @ManyToOne(() => Player, (player) => player.cells, { onDelete: 'CASCADE' })
  player: Player;

  @Column()
  row: number;

  @Column()
  col: number;

  @Column()
  val: number;
}
