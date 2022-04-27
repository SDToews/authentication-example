import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { githubGuard } from './auth/github.guard';
import { JwtAuthGuard } from './auth/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(githubGuard)
  @Post('login')
  login(@Request() req): any {
    console.log('login', this.authService.login(req.user));
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('loginsuccess')
  loginsuccess(@Request() req): any {
    console.log('loginsuccess', this.authService.login(req.user));
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
