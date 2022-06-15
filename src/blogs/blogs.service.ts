import { Injectable } from '@nestjs/common';
import { Blog, BlogStatus } from './blog.model';
import { v1 as uuid} from 'uuid';

@Injectable()
export class BlogsService {
    private blogs: Blog[] = [];

    getAllBlogs(): Blog[] {
        return this.blogs;
    }

    createBlog(title: string, description: string, author: string): Blog {
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
