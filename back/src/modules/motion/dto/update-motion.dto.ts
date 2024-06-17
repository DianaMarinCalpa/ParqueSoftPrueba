import { PartialType } from '@nestjs/mapped-types';
import { CreateMotionDto } from './create-motion.dto';

export class UpdateMotionDto extends PartialType(CreateMotionDto) {}
