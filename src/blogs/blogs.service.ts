import { Injectable } from '@nestjs/common';
import { Blog, BlogStatus } from './blog.model';
import { v1 as uuid} from 'uuid';
import { CreateBlogDto } from './dto/create-blog-dto';

@Injectable()
export class BlogsService {
    private blogs: Blog[] = [];

    getAllBlogs(): Blog[] {
        return this.blogs;
    }

    getBlogById(id: string): Blog {
        return this.blogs.find(blog => blog.id === id);

    }

    createBlog(createBlogDto: CreateBlogDto): Blog {
        const {title, description, author } = createBlogDto;
        const blog: Blog = {
            id: uuid(),
            title,
            description,
            author,
            status: BlogStatus.OPEN,
            created_at: new Date(),
            updated_at: new Date(),
        };

        this.blogs.push(blog);
        return blog;
        
    }

}
