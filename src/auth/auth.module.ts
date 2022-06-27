import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule  } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";
@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'topSecret51',
            signOptions: {
                expiresIn: 3600, //3600 seconds
            },
        }),
        TypeOrmModule.forFeature([User,]), //defined User entity to make it availabel through out the module
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
    ], 
    exports: [
        JwtStrategy,
        PassportModule,
    ]
})
export class AuthModule {}