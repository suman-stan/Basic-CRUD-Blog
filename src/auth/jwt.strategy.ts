import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy, ExtractJwt } from 'passport-jwt'
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { JwtPlayload } from "./jwt-playload.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'topSecret51',
        });
    }   

    async validate(payload: JwtPlayload): Promise<User> {
        const user = await this.userRepository.findOne({ 
            where: {username: payload.username}});

        if(!user) {
            throw new UnauthorizedException();
        }

        return user;


    }
}