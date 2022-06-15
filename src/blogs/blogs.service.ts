import { Injectable } from '@nestjs/common';
import { Blog, BlogStatus } from './blog.model';
import { v1 as uuid} from 'uuid';
import { CreateBlogDto } from './dto/create-blog-dto';
import { takeLast } from 'rxjs';
import { UpdateBlogDto } from './dto/update-blog-dto';

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

    deleteBlog(id: string): void {
        this.blogs = this.blogs.filter(blog => blog.id !== id)
    }

    // updateBlogStatus(id: string, updateBlogStatus: UpdateBlogDto) {
    //     const blog = this.getBlogById(id);
    //     const {title, description, author } = updateBlogStatus;
    //     const update = {
    //         title,
    //         description,
    //         author
    //     } 
    // }

    updateBlogStatus(id:string, title: string, description: string, author: string): Blog {
        const blog = this.getBlogById(id);
        const update = [
            blog.title,
            blog.description,
            blog.author
        ]
        return 

    }

}
