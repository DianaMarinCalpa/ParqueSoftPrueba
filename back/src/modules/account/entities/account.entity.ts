import { Motion } from 'src/modules/motion/entities/motion.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipoCuenta: string;

  @Column()
  estado: number;

  @Column()
  valorDisponible: number;

  @ManyToOne(() => User, (user) => user.account)
  user: User;

  @OneToMany(() => Motion, (motion) => motion.cuenta)
  motion: Motion[];
}
