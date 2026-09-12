export interface Fruit {
    calories?: number;
    carbohydrates?: number;
    family: string;
    fat?: number;
    genus: string;
    id?: number;
    message?: string;
    name: string;
    nutritions: Record<string, any>;
    order: string;
    protein?: number;
    sugar?: number;
}
export interface FruitLoadMatch {
    id: number;
}
export interface FruitListMatch {
    calories?: number;
    carbohydrates?: number;
    family?: string;
    fat?: number;
    genus?: string;
    id?: number;
    message?: string;
    name?: string;
    nutritions?: Record<string, any>;
    order?: string;
    protein?: number;
    sugar?: number;
    $action?: string;
    [action: string]: any;
}
export interface FruitUpdateData {
    calories?: number;
    carbohydrates?: number;
    family?: string;
    fat?: number;
    genus?: string;
    id?: number;
    message?: string;
    name?: string;
    nutritions?: Record<string, any>;
    order?: string;
    protein?: number;
    sugar?: number;
}
