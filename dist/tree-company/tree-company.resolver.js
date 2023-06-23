"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeCompanyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tree_company_service_1 = require("./tree-company.service");
let TreeCompanyResolver = class TreeCompanyResolver {
    constructor(treeCompanyService) {
        this.treeCompanyService = treeCompanyService;
    }
    getComnayTree() {
        return this.treeCompanyService.getCompanyTree();
    }
};
__decorate([
    (0, graphql_1.Query)('getCompanyTree'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TreeCompanyResolver.prototype, "getComnayTree", null);
TreeCompanyResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [tree_company_service_1.TreeCompanyService])
], TreeCompanyResolver);
exports.TreeCompanyResolver = TreeCompanyResolver;
//# sourceMappingURL=tree-company.resolver.js.map