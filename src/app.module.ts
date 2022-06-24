import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blogs/blog.controller';
import { BlogModule } from './blogs/blog.module';
import { BlogService } from './blogs/blog.service';
import { Blog } from './entities/blog.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'blog',
      entities: [Blog],
      synchronize: true,
    }),
    BlogModule,
  ],
  
})
export class AppModule {}
