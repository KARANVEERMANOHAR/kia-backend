"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDealerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dealer_dto_1 = require("./create-dealer.dto");
class UpdateDealerDto extends (0, mapped_types_1.PartialType)(create_dealer_dto_1.CreateDealerDto) {
}
exports.UpdateDealerDto = UpdateDealerDto;
//# sourceMappingURL=update-dealer.dto.js.map