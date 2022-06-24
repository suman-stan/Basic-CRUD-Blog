import { IsNotEmpty, IsString } from "class-validator";
import { CreateCommentDto } from "./create-comment.dto";

export class CreateBlogDto  {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    description: string;
}