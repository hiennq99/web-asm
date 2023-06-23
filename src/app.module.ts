import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TreeCompanyModule } from './tree-company/tree-company.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['src/**/*.graphql'],
      definitions: {
        path: '../src/**/*.graphql',
        outputAs: 'class',
      },
      introspection: true,
    }),
    TreeCompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
