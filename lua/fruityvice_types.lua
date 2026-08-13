-- Typed models for the Fruityvice SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Fruit
---@field calories? number
---@field carbohydrates? number
---@field family string
---@field fat? number
---@field genus string
---@field id? number
---@field message? string
---@field name string
---@field nutritions table
---@field order string
---@field protein? number
---@field sugar? number

---@class FruitLoadMatch
---@field id number

---@class FruitListMatch
---@field calories? number
---@field carbohydrates? number
---@field family? string
---@field fat? number
---@field genus? string
---@field id? number
---@field message? string
---@field name? string
---@field nutritions? table
---@field order? string
---@field protein? number
---@field sugar? number

---@class FruitUpdateData
---@field calories? number
---@field carbohydrates? number
---@field family? string
---@field fat? number
---@field genus? string
---@field id? number
---@field message? string
---@field name? string
---@field nutritions? table
---@field order? string
---@field protein? number
---@field sugar? number

local M = {}

return M
