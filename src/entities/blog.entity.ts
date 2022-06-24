import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Comment } from "./commet.entity";
@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length:10 })
    title: string

    @Column()
    author: string

    @Column()
    description: string

    @OneToMany(() => Comment, (comment) => comment.blog)
    comments: Comment[] //shows it has reference to comments

    // getTitle(): string{
    //     return this.title
    // }

    // setTitle(title: string) {
    //     this.title = title;
    // }



    // @CreateDateColumn()
    // created_at = Date

    // @UpdateDateColumn()
    // updated_at = Date


}