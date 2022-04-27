import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET', // .env, duh
    });
  }

  async validate(payload: any) {
    //const user = await this.usersService.getById(payload.sub)
    //in case we don't want username in jwt payload
    return {
      id: payload.sub,
      name: payload.name,
    };
  }
}
