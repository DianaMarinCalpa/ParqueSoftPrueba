import { CreateMotionDto } from 'src/modules/motion/dto/create-motion.dto';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

export class CreateAccountDto {
  id: number;
  tipoCuenta: string;
  estado: number;
  valorDisponible: number;
  cliente: CreateUserDto;
  movimientos: CreateMotionDto[];
}
