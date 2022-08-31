"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentPatientId = void 0;
const common_1 = require("@nestjs/common");
exports.GetCurrentPatientId = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    return request.user['sub'];
});
//# sourceMappingURL=get-current-patient-id.decorator.js.map