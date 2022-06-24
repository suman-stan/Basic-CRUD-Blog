import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    description: string

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