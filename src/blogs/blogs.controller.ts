import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.blogsService.getBlogById(id); 
    }

    @Post()
    createBlog(@Body() createBlogDto: CreateBlogDto):Blog {
        return this.blogsService.createBlog(createBlogDto);
    }

    @Delete('/:id')
    deleteBlog(@Param('id') id: string): void {
    this.blogsService.deleteBlog(id);
   }

   @Patch('/:id/update')
   updateBlogStatus(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('author') author: string
   ): Blog{
    return this.blogsService.updateBlogStatus(id, title, description, author);
   }
}
