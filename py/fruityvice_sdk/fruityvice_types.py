# Typed models for the Fruityvice SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class FruitRequired(TypedDict):
    family: str
    genus: str
    name: str
    nutritions: dict
    order: str


class Fruit(FruitRequired, total=False):
    calories: float
    carbohydrates: float
    fat: float
    id: int
    message: str
    protein: float
    sugar: float


class FruitLoadMatch(TypedDict):
    id: int


class FruitListMatch(TypedDict, total=False):
    calories: float
    carbohydrates: float
    family: str
    fat: float
    genus: str
    id: int
    message: str
    name: str
    nutritions: dict
    order: str
    protein: float
    sugar: float


class FruitUpdateData(TypedDict, total=False):
    calories: float
    carbohydrates: float
    family: str
    fat: float
    genus: str
    id: int
    message: str
    name: str
    nutritions: dict
    order: str
    protein: float
    sugar: float
