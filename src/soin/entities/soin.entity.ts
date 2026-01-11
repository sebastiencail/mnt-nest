import { Therapeute } from 'src/therapeute/entities/therapeute.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Soin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column('int')
  ordre: number;

  @ManyToOne(() => Therapeute, (therapeute) => therapeute.soins)
  therapeute: Therapeute;
}
