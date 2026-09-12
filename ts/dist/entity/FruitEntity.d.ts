import { FruityviceEntityBase } from '../FruityviceEntityBase';
import type { FruityviceSDK } from '../FruityviceSDK';
import type { Control } from '../types';
import type { Fruit, FruitLoadMatch, FruitListMatch, FruitUpdateData } from '../FruityviceTypes';
declare class FruitEntity extends FruityviceEntityBase<Fruit> {
    constructor(client: FruityviceSDK, entopts: any);
    make(this: FruitEntity): FruitEntity;
    load(this: any, reqmatch?: FruitLoadMatch, ctrl?: Control): Promise<FruitEntity>;
    list(this: any, reqmatch?: FruitListMatch, ctrl?: Control): Promise<FruitEntity[]>;
    update(this: any, reqdata?: FruitUpdateData, ctrl?: Control): Promise<FruitEntity>;
}
export { FruitEntity };
