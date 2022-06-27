import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { AuthCredentialsDto } from "src/dto/auth-credentials.dto";
import { User } from "src/entities/user.entity";
import { AuthService } from "./auth.service";

@Controller('/auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('/signup')
    async signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
        // console.log(authCredentialsDto);
        return this.authService.signUp(authCredentialsDto);
    }
    
    @Post('/signin')
    async signin(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
        return await this.authService.validateUserPassword(authCredentialsDto)
    }
}