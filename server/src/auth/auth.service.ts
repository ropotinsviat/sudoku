import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from 'jsonwebtoken';
import generateRandomUser from 'src/users/utils/generateRandomUser';
import { User } from 'src/users/users.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  validateToken(token: string | undefined): any {
    if (!token) throw new UnauthorizedException('No token provided');

    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET) as JwtPayload;
      const user = decoded?.data;
      if (!user) throw new UnauthorizedException('User is not verified');
      return user;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async authenticateToken(token: string | undefined): Promise<User> {
    try {
      return this.validateToken(token);
    } catch {
      const { name, picture } = generateRandomUser();
      return await this.usersService.createUser(name, picture);
    }
  }

  signToken(data: any): string {
    return jwt.sign({ data }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  }
}
