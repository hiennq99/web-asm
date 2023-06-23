import { Resolver, Query } from '@nestjs/graphql';
import { TreeCompanyService } from './tree-company.service';
import { Company } from './type';

@Resolver()
export class TreeCompanyResolver {
  constructor(private readonly treeCompanyService: TreeCompanyService) {}

  @Query('getCompanyTree')
  getComnayTree(): Promise<Company> {
    return this.treeCompanyService.getCompanyTree();
  }
}
