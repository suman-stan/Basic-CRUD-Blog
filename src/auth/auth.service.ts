import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthCredentialsDto } from "src/dto/auth-credentials.dto";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt'
import e from "express";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async signUp( authCredentialsDto: AuthCredentialsDto): Promise<void> {
        
        // const saltOrRounds = 10; //cost factor
        //const hash = await bcrypt.hash( authCredentialsDto.password,saltOrRounds );
        
        const salt = await bcrypt.genSalt()
        authCredentialsDto.salt = salt
        const hash = await bcrypt.hash( authCredentialsDto.password,salt );
        authCredentialsDto.password = hash;
        const user = this.userRepository.create({
            ...authCredentialsDto,
        })
        // console.log(authCredentialsDto.password)
        //23505 is a code for duplicate username
        try {
        await this.userRepository.save(user)
        } catch (error) {
            if (error.code = '23505') {
                throw new ConflictException('UserName already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
        
    }

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const user = await this.userRepository.findOne({
            where: { username: authCredentialsDto.username },
        })

        if (!user) {
            throw new UnauthorizedException("Invalid Credentials")
        }
        
        if (user && await user.validatePassword(authCredentialsDto.password)) {
            return user.username;
        } else {
            return null;
        }
        
       
    }
}