// Typed models for the Fruityvice SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Fruit {
  calories?: number
  carbohydrates?: number
  family: string
  fat?: number
  genus: string
  id?: number
  message?: string
  name: string
  nutritions: Record<string, any>
  order: string
  protein?: number
  sugar?: number
}

export interface FruitLoadMatch {
  id: number
}

export interface FruitListMatch {
  calories?: number
  carbohydrates?: number
  family?: string
  fat?: number
  genus?: string
  id?: number
  message?: string
  name?: string
  nutritions?: Record<string, any>
  order?: string
  protein?: number
  sugar?: number

  // Selects a custom action instead of the plain list:
  //   'all'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface FruitUpdateData {
  calories?: number
  carbohydrates?: number
  family?: string
  fat?: number
  genus?: string
  id?: number
  message?: string
  name?: string
  nutritions?: Record<string, any>
  order?: string
  protein?: number
  sugar?: number
}

