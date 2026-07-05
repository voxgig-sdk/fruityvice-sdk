-- Typed models for the Fruityvice SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Fruit
---@field family? string
---@field genus? string
---@field id? number
---@field message? string
---@field name? string
---@field nutrition? table
---@field order? string

---@class FruitLoadMatch
---@field id number

---@class FruitListMatch
---@field family? string
---@field genus? string
---@field id? number
---@field message? string
---@field name? string
---@field nutrition? table
---@field order? string

---@class FruitUpdateData
---@field family? string
---@field genus? string
---@field id? number
---@field message? string
---@field name? string
---@field nutrition? table
---@field order? string

local M = {}

return M
