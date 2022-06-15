import { Body, Controller, Get, Post } from '@nestjs/common';
import { Blog } from './blog.model';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog-dto';

@Controller('blogs')
export class BlogsController {
    constructor(private blogsService: BlogsService) {}

    @Get()
    getAllBlogs(): Blog[] {
        return this.blogsService.getAllBlogs();
    }

    @Post()
    createBlog(@Body() createBlogDto: CreateBlogDto):Blog {
        return this.blogsService.createBlog(createBlogDto);
    }
}
