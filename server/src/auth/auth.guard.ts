import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    try {
      const user = await this.authService.validateToken(token);
      req.user = user;
      return true;
    } catch (e) {
      throw new UnauthorizedException('Not authenticated!');
    }
  }
}
