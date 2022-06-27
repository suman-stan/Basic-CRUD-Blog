import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateBlogDto } from "src/dto/create-blog.dto";
import { CreateCommentDto } from "src/dto/create-comment.dto";
import { UpdateBlogDto } from "src/dto/update-blog.dto";
import { Blog } from "src/entities/blog.entity";
import { BlogService } from "./blog.service";

@Controller('/blog')
export class BlogController {
    constructor(
        private readonly blogService:BlogService
        ){}

    @Get('/')
    getAllBlog() {
        return this.blogService.getAllBlog();
    }

    @Get('/:id')
    getBlogById(@Param('id') id: number) {
        return this.blogService.getBlogById(id)
    }

    @Post('/')
    async createBlog(@Body(ValidationPipe) createBlogDto:CreateBlogDto): Promise<Blog> {
        // console.log('create-dto', createBlogDto.title)
        return this.blogService.createBlog(createBlogDto)
        }
        
    @Delete('/:id')
    @UsePipes(ValidationPipe)
    deleteBlogById(@Param('id') id: number) {
        return this.blogService.deleteBlogById(id);
    }

    @Patch('/:id')
    updateBlogById(
        @Param('id') id:number,
        @Body() updateBlogDto:UpdateBlogDto
        ) {
        return this.blogService.updateBlogById(id, updateBlogDto);
    }
    
    @Post('/:id/comment')
    createComment(@Param('id') id: number, @Body() createCommentDto: CreateCommentDto) {
        return this.blogService.createComment(id, createCommentDto)
    }
        }