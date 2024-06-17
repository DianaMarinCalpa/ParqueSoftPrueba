import { CreateAccountDto } from 'src/modules/account/dto/create-account.dto';

export class CreateMotionDto {
  id: number;
  fechaTransacccion: Date;
  montoTransaccion: number;
  descripcion: string;
  cuenta: CreateAccountDto;
}
