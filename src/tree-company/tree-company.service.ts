import { Injectable } from '@nestjs/common';
import { Company, Travel } from './type';

@Injectable()
export class TreeCompanyService {
  async getCompanyTree(): Promise<Company> {
    const [companies, travels] = await this.fecthData();
    const res = this.processCompanyData(companies, travels);
    return res[0];
  }

  processCompanyData(companies: Company[], travels: Travel[]): Company[] {
    const companyMap: { [id: string]: Company } = {};
    const nestedCompanies: Company[] = [];

    companies.forEach((company) => {
      companyMap[company.id] = company;
    });

    companies.forEach((company) => {
      const parentId = company.parentId;
      if (parentId in companyMap) {
        const parentCompany = companyMap[parentId];
        if (!parentCompany.children) {
          parentCompany.children = [];
        }
        parentCompany.children.push(company);
      } else {
        nestedCompanies.push(company);
      }
    });

    function calculateTotalCost(company: Company): number {
      let cost = travels
        .filter((travel) => travel.companyId === company.id)
        .reduce((acc, cur) => {
          return (acc += Number(cur.price));
        }, 0);
      if (company.children) {
        company.children.forEach((child) => {
          cost += calculateTotalCost(child);
        });
      }
      company.cost = cost;
      return cost;
    }

    nestedCompanies.forEach((company) => {
      calculateTotalCost(company);
    });

    return nestedCompanies;
  }

  fecthData(): Promise<any> {
    return Promise.all([
      fetch(
        'https://5f27781bf5d27e001612e057.mockapi.io/webprovise/companies',
      ).then((res) => res.json()),
      fetch(
        'https://5f27781bf5d27e001612e057.mockapi.io/webprovise/travels',
      ).then((res) => res.json()),
    ]);
  }
}
