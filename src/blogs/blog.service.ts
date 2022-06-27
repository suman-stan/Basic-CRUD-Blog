import { Get, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBlogDto } from "src/dto/create-blog.dto";
import { CreateCommentDto } from "src/dto/create-comment.dto";
import { UpdateBlogDto } from "src/dto/update-blog.dto";
import { Blog } from "src/entities/blog.entity";
import { Comment } from "src/entities/commet.entity";
import { Repository } from "typeorm";

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private readonly blogRepository: Repository<Blog>,
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
        ){}


    getAllBlog(){
        return this.blogRepository.find({
            relations: ['comments'],
        });
    }


    createBlog(createBlogDto:CreateBlogDto): Promise<Blog> {
        return this.blogRepository.save(createBlogDto)
    }
  
    async getBlogById(id: number) {
        const blog = await this.blogRepository.findOne({
            where: { id },
            relations: ['comments'],

        });

        if(!blog) {
            // console.log("expection worked");
            throw new NotFoundException("BLog do not exit")
            
        }

        // console.log("expection DIDNT worked");
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

    async createComment(id: number, createCommentDto: CreateCommentDto) {
        const blog = await this.getBlogById(id);
        const comment = this.commentRepository.create({
            blog: blog,
            ...createCommentDto,
        })

        return this.commentRepository.save(comment);

    }


}