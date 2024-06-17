import { Account } from 'src/modules/account/entities/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Motion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fechaTransacccion: Date;

  @Column()
  montoTransaccion: number;

  @Column()
  descripcion: string;

  @ManyToOne(() => Account, (account) => account.motion)
  cuenta: Account;
}
