// Typed models for the Fruityvice SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Fruit {
  family?: string
  genus?: string
  id?: number
  message?: string
  name?: string
  nutrition?: Record<string, any>
  order?: string
}

export interface FruitLoadMatch {
  id: number
}

export interface FruitListMatch {
  family?: string
  genus?: string
  id?: number
  message?: string
  name?: string
  nutrition?: Record<string, any>
  order?: string
}

export interface FruitUpdateData {
  family?: string
  genus?: string
  id?: number
  message?: string
  name?: string
  nutrition?: Record<string, any>
  order?: string
}

