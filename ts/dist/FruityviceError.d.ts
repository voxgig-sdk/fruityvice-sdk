import { Context } from './Context';
declare class FruityviceError extends Error {
    isFruityviceError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FruityviceError };
