# Typed models for the Fruityvice SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Fruit:
    family: Optional[str] = None
    genus: Optional[str] = None
    id: Optional[int] = None
    message: Optional[str] = None
    name: Optional[str] = None
    nutrition: Optional[dict] = None
    order: Optional[str] = None


@dataclass
class FruitLoadMatch:
    id: int


@dataclass
class FruitListMatch:
    family: Optional[str] = None
    genus: Optional[str] = None
    id: Optional[int] = None
    message: Optional[str] = None
    name: Optional[str] = None
    nutrition: Optional[dict] = None
    order: Optional[str] = None


@dataclass
class FruitUpdateData:
    family: Optional[str] = None
    genus: Optional[str] = None
    id: Optional[int] = None
    message: Optional[str] = None
    name: Optional[str] = None
    nutrition: Optional[dict] = None
    order: Optional[str] = None

