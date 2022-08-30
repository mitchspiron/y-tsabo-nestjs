"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentDoctorId = void 0;
const common_1 = require("@nestjs/common");
exports.GetCurrentDoctorId = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    return request.user['sub'];
});
//# sourceMappingURL=get-current-doctor-id.decorator.js.map