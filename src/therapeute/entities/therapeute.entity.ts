import { Consultation } from 'src/consultation/entities/consultation.entity';
import { Soin } from 'src/soin/entities/soin.entity';
import { Tarif } from 'src/tarif/entities/tarif.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Therapeute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ type: 'text', nullable: true })
  specialites: string;

  @Column({ type: 'text', nullable: true })
  siteWeb: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ length: 14, nullable: true })
  telPortable: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  email: string;

  @OneToMany(() => Tarif, (tarif) => tarif.therapeute)
  tarifs: Tarif[];

  @OneToMany(() => Soin, (soin) => soin.therapeute)
  soins: Soin[];

  @OneToMany(() => Consultation, (consultation) => consultation.therapeute)
  consultations: Consultation[];
}
