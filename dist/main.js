"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT);
    console.log('🚀 Server started at http://127.0.0.1:' + process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map