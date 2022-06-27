import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthCredentialsDto } from "src/dto/auth-credentials.dto";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async signUp( authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const user = this.userRepository.create({
            ...authCredentialsDto,
        })

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