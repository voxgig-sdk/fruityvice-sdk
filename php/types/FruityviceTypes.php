<?php
declare(strict_types=1);

// Typed models for the Fruityvice SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Fruit entity data model. */
class Fruit
{
    public ?string $family = null;
    public ?string $genus = null;
    public ?int $id = null;
    public ?string $message = null;
    public ?string $name = null;
    public ?array $nutrition = null;
    public ?string $order = null;
}

/** Request payload for Fruit#load. */
class FruitLoadMatch
{
    public int $id;
}

/** Request payload for Fruit#list. */
class FruitListMatch
{
    public ?string $family = null;
    public ?string $genus = null;
    public ?int $id = null;
    public ?string $message = null;
    public ?string $name = null;
    public ?array $nutrition = null;
    public ?string $order = null;
}

/** Request payload for Fruit#update. */
class FruitUpdateData
{
    public ?string $family = null;
    public ?string $genus = null;
    public ?int $id = null;
    public ?string $message = null;
    public ?string $name = null;
    public ?array $nutrition = null;
    public ?string $order = null;
}

