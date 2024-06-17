import { Injectable } from '@nestjs/common';
import { CreateMotionDto } from './dto/create-motion.dto';
import { UpdateMotionDto } from './dto/update-motion.dto';
import { Motion } from './entities/motion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MotionService {
  constructor(
    @InjectRepository(Motion)
    private readonly MotionRepository: Repository<Motion>,
  ) {}

  async getMotions() {
    return this.MotionRepository.find();
  }

  async getMotionsId(id: number): Promise<Motion[]> {
    return this.MotionRepository.createQueryBuilder('motion')
      .where('motion.cuentaId = :id', { id }) // Use a parameter to avoid SQL injection
      .getMany();
  }

  async createMotion(Motion: CreateMotionDto): Promise<CreateMotionDto> {
    return this.MotionRepository.save(Motion);
  }

  async updateMotion(
    id: number,
    Motion: UpdateMotionDto,
  ): Promise<UpdateMotionDto> {
    return this.MotionRepository.save({ ...Motion, id });
  }

  async deleteMotion(id: number): Promise<void> {
    await this.MotionRepository.delete(id);
  }
}
