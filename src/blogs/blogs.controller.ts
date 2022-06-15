import { Controller, Get } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
    constructor(private blogsService: BlogsService) {}

    @Get()
    getAllBlogs() {
        return this.blogsService.getAllBlogs();
    }
}
