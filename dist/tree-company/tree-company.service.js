"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeCompanyService = void 0;
const common_1 = require("@nestjs/common");
let TreeCompanyService = class TreeCompanyService {
    async getCompanyTree() {
        const [companies, travels] = await this.fecthData();
        const res = this.processCompanyData(companies, travels);
        return res[0];
    }
    processCompanyData(companies, travels) {
        const companyMap = {};
        const nestedCompanies = [];
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
            }
            else {
                nestedCompanies.push(company);
            }
        });
        function calculateTotalCost(company) {
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
    fecthData() {
        return Promise.all([
            fetch('https://5f27781bf5d27e001612e057.mockapi.io/webprovise/companies').then((res) => res.json()),
            fetch('https://5f27781bf5d27e001612e057.mockapi.io/webprovise/travels').then((res) => res.json()),
        ]);
    }
};
TreeCompanyService = __decorate([
    (0, common_1.Injectable)()
], TreeCompanyService);
exports.TreeCompanyService = TreeCompanyService;
//# sourceMappingURL=tree-company.service.js.map