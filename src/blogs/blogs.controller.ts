import { Body, Controller, Get, Post } from '@nestjs/common';
import { Blog } from './blog.model';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
    constructor(private blogsService: BlogsService) {}

    @Get()
    getAllBlogs(): Blog[] {
        return this.blogsService.getAllBlogs();
    }

    @Post()
    createBlog(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('author') author: string,
    ):Blog {
        return this.blogsService.createBlog(title, description, author);
    }
}
