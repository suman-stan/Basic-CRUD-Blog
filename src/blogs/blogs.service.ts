import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogsService {
    private blogs = [];

    getAllBlogs() {
        return this.blogs;
    }

}
