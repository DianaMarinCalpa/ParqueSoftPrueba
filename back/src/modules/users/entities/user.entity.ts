import { Account } from 'src/modules/account/entities/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cedula: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @OneToMany(() => Account, (account) => account.user)
  account: Account[];
}
