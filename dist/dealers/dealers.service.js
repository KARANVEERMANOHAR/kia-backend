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
exports.DealersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dealer_schema_1 = require("../Schemas/dealer.schema");
let DealersService = class DealersService {
    constructor(dealerModel) {
        this.dealerModel = dealerModel;
    }
    async create(createDealerDto) {
        try {
            const findResult = await this.getDealerByDealerCode(createDealerDto?.dealer_code);
            if (findResult?.data?.dealer_code) {
                return { statusCode: 400, message: 'Dealer is already exists' };
            }
            else {
                console.log(findResult);
                const createdCat = new this.dealerModel(createDealerDto);
                const response = await createdCat.save();
                return {
                    statusCode: 200,
                    message: 'Successfully Created Dealer',
                    data: response,
                };
            }
        }
        catch (exception) {
            console.log('exception:', exception);
            return {
                statusCode: 500,
                message: 'Exception Occured',
                exception: exception._message,
            };
        }
    }
    async findOne(dealer_code) {
        console.log(dealer_code);
        try {
            const result = await this.getDealerByDealerCode(dealer_code);
            if (result.data) {
                return {
                    statusCode: 200,
                    message: 'Found ',
                    result: result.data,
                };
            }
            else {
                return {
                    statusCode: 200,
                    message: 'Not found Found ',
                    result: {},
                };
            }
        }
        catch (exception) {
            console.log('exception:', exception);
            return {
                statusCode: 500,
                message: 'Exception Occured',
                exception: exception._message,
            };
        }
    }
    async getDealerByDealerCode(dealer_code) {
        try {
            const result = await this.dealerModel.findOne({
                dealer_code: dealer_code,
            });
            return { data: result };
        }
        catch (ex) {
            console.log('exception at find dealer by code', ex);
            return null;
        }
    }
};
exports.DealersService = DealersService;
exports.DealersService = DealersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(dealer_schema_1.Dealer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DealersService);
//# sourceMappingURL=dealers.service.js.map