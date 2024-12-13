import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(name: string, picture: string): Promise<User> {
    const newUser = this.userRepository.create({ name, picture });
    const savedUser = await this.userRepository.save(newUser);
    return savedUser;
  }
}
