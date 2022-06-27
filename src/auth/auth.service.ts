import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthCredentialsDto } from "src/dto/auth-credentials.dto";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async signUp( authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const saltOrRounds = 10; //cost factor
        const hash = await bcrypt.hash( authCredentialsDto.password,saltOrRounds );
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
}