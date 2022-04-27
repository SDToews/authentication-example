import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { githubStrategy } from './github.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'SECRET', //.env, duh!
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, githubStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
