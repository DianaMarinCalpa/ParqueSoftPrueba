import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async getAccount() {
    return this.accountRepository.find();
  }

  async createAccount(Account: CreateAccountDto): Promise<CreateAccountDto> {
    return this.accountRepository.save(Account);
  }

  async updateAccount(
    id: number,
    Account: UpdateAccountDto,
  ): Promise<UpdateAccountDto | null> {
    return this.accountRepository.save({ ...Account, id });
  }

  async deleteAccount(id: number): Promise<void> {
    await this.accountRepository.delete(id);
  }
}
