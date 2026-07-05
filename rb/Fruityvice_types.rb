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
# @!attribute [rw] family
#   @return [String, nil]
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
# @!attribute [rw] nutrition
#   @return [Hash, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
Fruit = Struct.new(
  :family,
  :genus,
  :id,
  :message,
  :name,
  :nutrition,
  :order,
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
# @!attribute [rw] family
#   @return [String, nil]
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
# @!attribute [rw] nutrition
#   @return [Hash, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
FruitListMatch = Struct.new(
  :family,
  :genus,
  :id,
  :message,
  :name,
  :nutrition,
  :order,
  keyword_init: true
)

# Request payload for Fruit#update.
#
# @!attribute [rw] family
#   @return [String, nil]
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
# @!attribute [rw] nutrition
#   @return [Hash, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
FruitUpdateData = Struct.new(
  :family,
  :genus,
  :id,
  :message,
  :name,
  :nutrition,
  :order,
  keyword_init: true
)

