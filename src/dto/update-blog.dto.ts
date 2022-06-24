import { IsString } from "class-validator";

export class UpdateBlogDto {
    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsString()
    description: string;
}