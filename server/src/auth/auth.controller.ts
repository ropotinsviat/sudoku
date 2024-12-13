import { Controller, Get, Req, Res, Post } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('me')
  async authenticate(@Req() req: Request, @Res() res: Response): Promise<any> {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    const user = await this.authService.authenticateToken(token);
    const newToken = this.authService.signToken(user);

    res.setHeader('Authorization', `Bearer ${newToken}`);
    return res.json(user);
  }
}
