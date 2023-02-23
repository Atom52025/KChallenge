import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Dog } from './dogs/dog';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'admin',
    password: 'passw0rd',
    database: 'database',
    entities: [Dog],
    synchronize: true
  }), DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
