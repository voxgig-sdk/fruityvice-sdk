"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruityviceError = void 0;
class FruityviceError extends Error {
    isFruityviceError = true;
    sdk = 'Fruityvice';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FruityviceError = FruityviceError;
//# sourceMappingURL=FruityviceError.js.map