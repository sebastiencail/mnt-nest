import { Therapeute } from 'src/therapeute/entities/therapeute.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarif {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  prix: string;

  @Column('int')
  ordre: number;

  @ManyToOne(() => Therapeute, (therapeute) => therapeute.tarifs)
  therapeute: Therapeute;
}
