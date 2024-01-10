"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateKiaCustomerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_kia_customer_dto_1 = require("./create-kia-customer.dto");
class UpdateKiaCustomerDto extends (0, mapped_types_1.PartialType)(create_kia_customer_dto_1.CreateKiaCustomerDto) {
}
exports.UpdateKiaCustomerDto = UpdateKiaCustomerDto;
//# sourceMappingURL=update-kia-customer.dto.js.map