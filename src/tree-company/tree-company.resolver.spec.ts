import { Test, TestingModule } from '@nestjs/testing';
import { TreeCompanyResolver } from './tree-company.resolver';
import { TreeCompanyService } from './tree-company.service';

describe('TreeCompanyResolver', () => {
  let resolver: TreeCompanyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreeCompanyResolver, TreeCompanyService],
    }).compile();

    resolver = module.get<TreeCompanyResolver>(TreeCompanyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
