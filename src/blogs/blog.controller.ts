import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateBlogDto } from "src/dto/create-blog.dto";
import { Blog } from "src/entities/blog.entity";
import { BlogService } from "./blog.service";

@Controller()
export class BlogController {
    constructor(
        private readonly blogService:BlogService
        ){}

    @Get('/')
    getAllBlog() {
        return this.blogService.getAllBlog();
    }

    @Post('/')
    async createBlog(@Body() createBlogDto:CreateBlogDto): Promise<Blog> {
        return this.blogService.createBlog(createBlogDto)
        }
        
    // async createBlog(@Body() body:CreateBlogDto) {
    //     const newBlog = new Blog();
    //     newBlog.title = body.title;
    //     // newBlog.setTitle(body.title);
    //     await this.blogService.createBlog(newBlog);
    // }

    // async createBlog() {
    //     const newBlog = new Blog();
    //     newBlog.title = "Frist Blog";
    //     newBlog.author = "JJ";
    //     newBlog.description = "This is my first Blog";
    //     await this.blogService.createBlog(newBlog)
    // }

    
    
}