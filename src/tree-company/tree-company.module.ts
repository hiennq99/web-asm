import { Module } from '@nestjs/common';
import { TreeCompanyService } from './tree-company.service';
import { TreeCompanyResolver } from './tree-company.resolver';

@Module({
  providers: [TreeCompanyResolver, TreeCompanyService],
})
export class TreeCompanyModule {}
