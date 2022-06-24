import { Get, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBlogDto } from "src/dto/create-blog.dto";
import { Blog } from "src/entities/blog.entity";
import { Repository } from "typeorm";

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private readonly blogRepository: Repository<Blog>
        ){}


    getAllBlog(){
        return this.blogRepository.find();
    }

    // createBlog(createBlogDto: CreateBlogDto){
    //     const blog =  this.blogRepository.create(createBlogDto);
    //     return this.blogRepository.save(blog)

    // }

    createBlog(blog:Blog): Promise<Blog> {
        return this.blogRepository.save(blog)
    }
  
    // getBlogById(id: number) 


}