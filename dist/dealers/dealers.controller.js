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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealersController = void 0;
const common_1 = require("@nestjs/common");
const dealers_service_1 = require("./dealers.service");
const create_dealer_dto_1 = require("./dto/create-dealer.dto");
let DealersController = class DealersController {
    constructor(dealersService) {
        this.dealersService = dealersService;
    }
    create(createDealerDto) {
        return this.dealersService.create(createDealerDto);
    }
    findOne(dealer_code) {
        return this.dealersService.findOne(dealer_code);
    }
};
exports.DealersController = DealersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dealer_dto_1.CreateDealerDto]),
    __metadata("design:returntype", void 0)
], DealersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DealersController.prototype, "findOne", null);
exports.DealersController = DealersController = __decorate([
    (0, common_1.Controller)('dealers'),
    __metadata("design:paramtypes", [dealers_service_1.DealersService])
], DealersController);
//# sourceMappingURL=dealers.controller.js.map