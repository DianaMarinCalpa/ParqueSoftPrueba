import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MotionService } from './motion.service';
import { CreateMotionDto } from './dto/create-motion.dto';
import { UpdateMotionDto } from './dto/update-motion.dto';

@Controller('motion')
export class MotionController {
  constructor(private readonly motionService: MotionService) {}

  @Post()
  create(@Body() createMotionDto: CreateMotionDto) {
    return this.motionService.createMotion(createMotionDto);
  }

  @Get()
  findAll() {
    return this.motionService.getMotions();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motionService.getMotionsId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMotionDto: UpdateMotionDto) {
    return this.motionService.updateMotion(+id, updateMotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motionService.deleteMotion(+id);
  }
}
