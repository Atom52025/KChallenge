import { Component, Inject } from '@nestjs/common';
import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from './auth.service';

@Component()
export class JwtStrategy extends Strategy {
    constructor(
        private readonly authService: AuthService,
        @Inject('secret') private readonly secret: string
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            passReqToCallback: true,
            secretOrKey: secret
        },
            async (req, payload, next) => await this.verify(req, payload, next));
        passport.use(this);
    }

    public async verify(req, payload, done) {
        const isValid = await this.authService.validateUser(payload);
        if (!isValid) {
          return done('Unauthorized', false);
        }
        done(null, payload);
      }
}