import { Injectable } from "@nestjs/common";
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

        await this.userRepository.save(user)
    }
}