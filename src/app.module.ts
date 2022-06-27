import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { BlogController } from './blogs/blog.controller';
import { BlogModule } from './blogs/blog.module';
import { BlogService } from './blogs/blog.service';
import { Blog } from './entities/blog.entity';
import { Comment } from './entities/commet.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'blog',
      entities: [Blog, Comment, User],
      synchronize: true,
    }),
    BlogModule,
    AuthModule,
  ],
  
})
export class AppModule {}
