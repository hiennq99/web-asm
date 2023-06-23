import { Company, TreeCompanyService } from './tree-company.service';
export declare class TreeCompanyResolver {
    private readonly treeCompanyService;
    constructor(treeCompanyService: TreeCompanyService);
    getComnayTree(): Promise<Company>;
}
