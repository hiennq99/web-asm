import { Test, TestingModule } from '@nestjs/testing';
import { TreeCompanyService } from './tree-company.service';

describe('TreeCompanyService', () => {
  let service: TreeCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreeCompanyService],
    }).compile();

    service = module.get<TreeCompanyService>(TreeCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be correct cost', async () => {
    const companies = await service.getCompanyTree();
    expect(companies.cost).toEqual(52983);
  });
});
