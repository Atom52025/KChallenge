import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { QuotesModule } from './quotes/quotes.module';
import { SecurityModule } from './security/security.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    QuotesModule, 
    UsersModule,
    SecurityModule
  ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
