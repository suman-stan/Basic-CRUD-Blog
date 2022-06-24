import { Get, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBlogDto } from "src/dto/create-blog.dto";
import { UpdateBlogDto } from "src/dto/update-blog.dto";
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


    createBlog(createBlogDto:CreateBlogDto): Promise<Blog> {
        return this.blogRepository.save(createBlogDto)
    }
  
    getBlogById(id: number) {
        const blog = this.blogRepository.findOne({where: { id } });
        return blog;
    }

    async deleteBlogById(id: number) {
        const blog = await this.getBlogById(id);
        return this.blogRepository.remove(blog);
        
    }

    async updateBlogById(id: number, updateBlogDto: UpdateBlogDto) {
        
        //preload: If the entity already exists in the database, then it loads it (and everything related to it), replaces all values with the new ones from the given object, and returns the new entity.
        const blog = await this.blogRepository.preload({ 
            id: +id,
            ...updateBlogDto
        })

        return this.blogRepository.save(blog)
        
    }


}