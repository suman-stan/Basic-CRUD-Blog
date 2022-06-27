import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthCredentialsDto } from "src/dto/auth-credentials.dto";
import { User } from "src/entities/user.entity";
import { AuthService } from "./auth.service";
import { GetUser } from "./get-user.decorator";

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
    async signin(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string}> {
        return await this.authService.signin(authCredentialsDto)
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    // test(@Req() req) {
    //     console.log(req);
    test(@GetUser() user: User) {
     console.log(user)
    }
}