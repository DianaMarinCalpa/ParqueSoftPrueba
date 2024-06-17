import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<CreateUserDto[]> {
    return this.UserRepository.find();
  }

  async createUser(User: CreateUserDto): Promise<CreateUserDto> {
    return this.UserRepository.save(User);
  }

  async updateUser(id: number, User: UpdateUserDto): Promise<UpdateUserDto> {
    return this.UserRepository.save({ ...User, id });
  }

  async deleteUser(id: number): Promise<void> {
    await this.UserRepository.delete(id);
  }
}
