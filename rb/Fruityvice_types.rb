# frozen_string_literal: true

# Typed models for the Fruityvice SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Fruit entity data model.
#
# @!attribute [rw] calories
#   @return [Float, nil]
#
# @!attribute [rw] carbohydrates
#   @return [Float, nil]
#
# @!attribute [rw] family
#   @return [String]
#
# @!attribute [rw] fat
#   @return [Float, nil]
#
# @!attribute [rw] genus
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] nutritions
#   @return [Hash]
#
# @!attribute [rw] order
#   @return [String]
#
# @!attribute [rw] protein
#   @return [Float, nil]
#
# @!attribute [rw] sugar
#   @return [Float, nil]
Fruit = Struct.new(
  :calories,
  :carbohydrates,
  :family,
  :fat,
  :genus,
  :id,
  :message,
  :name,
  :nutritions,
  :order,
  :protein,
  :sugar,
  keyword_init: true
)

# Request payload for Fruit#load.
#
# @!attribute [rw] id
#   @return [Integer]
FruitLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Fruit#list.
#
# @!attribute [rw] calories
#   @return [Float, nil]
#
# @!attribute [rw] carbohydrates
#   @return [Float, nil]
#
# @!attribute [rw] family
#   @return [String, nil]
#
# @!attribute [rw] fat
#   @return [Float, nil]
#
# @!attribute [rw] genus
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] nutritions
#   @return [Hash, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] protein
#   @return [Float, nil]
#
# @!attribute [rw] sugar
#   @return [Float, nil]
FruitListMatch = Struct.new(
  :calories,
  :carbohydrates,
  :family,
  :fat,
  :genus,
  :id,
  :message,
  :name,
  :nutritions,
  :order,
  :protein,
  :sugar,
  keyword_init: true
)

# Request payload for Fruit#update.
#
# @!attribute [rw] calories
#   @return [Float, nil]
#
# @!attribute [rw] carbohydrates
#   @return [Float, nil]
#
# @!attribute [rw] family
#   @return [String, nil]
#
# @!attribute [rw] fat
#   @return [Float, nil]
#
# @!attribute [rw] genus
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] nutritions
#   @return [Hash, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] protein
#   @return [Float, nil]
#
# @!attribute [rw] sugar
#   @return [Float, nil]
FruitUpdateData = Struct.new(
  :calories,
  :carbohydrates,
  :family,
  :fat,
  :genus,
  :id,
  :message,
  :name,
  :nutritions,
  :order,
  :protein,
  :sugar,
  keyword_init: true
)

