"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KiaCustomersModule = void 0;
const common_1 = require("@nestjs/common");
const kia_customers_service_1 = require("./kia-customers.service");
const kia_customers_controller_1 = require("./kia-customers.controller");
const mongoose_1 = require("@nestjs/mongoose");
const kiaCustomer_schema_1 = require("../Schemas/kiaCustomer.schema");
let KiaCustomersModule = class KiaCustomersModule {
};
exports.KiaCustomersModule = KiaCustomersModule;
exports.KiaCustomersModule = KiaCustomersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: kiaCustomer_schema_1.KiaCustomer.name, schema: kiaCustomer_schema_1.KiaCustomerSchema },
            ]),
        ],
        controllers: [kia_customers_controller_1.KiaCustomersController],
        providers: [kia_customers_service_1.KiaCustomersService],
    })
], KiaCustomersModule);
//# sourceMappingURL=kia-customers.module.js.map