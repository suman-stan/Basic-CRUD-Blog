import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { Blog } from "src/entities/blog.entity";
import { Comment } from "src/entities/commet.entity";
import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Blog, Comment]),
        AuthModule,
    ],
    controllers: [BlogController],
    providers: [BlogService],
})
export class BlogModule{}