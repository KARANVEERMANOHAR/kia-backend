"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealersModule = void 0;
const common_1 = require("@nestjs/common");
const dealers_service_1 = require("./dealers.service");
const dealers_controller_1 = require("./dealers.controller");
const dealer_schema_1 = require("../Schemas/dealer.schema");
const mongoose_1 = require("@nestjs/mongoose");
let DealersModule = class DealersModule {
};
exports.DealersModule = DealersModule;
exports.DealersModule = DealersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: dealer_schema_1.Dealer.name, schema: dealer_schema_1.DealerSchema }]),
        ],
        controllers: [dealers_controller_1.DealersController],
        providers: [dealers_service_1.DealersService],
    })
], DealersModule);
//# sourceMappingURL=dealers.module.js.map