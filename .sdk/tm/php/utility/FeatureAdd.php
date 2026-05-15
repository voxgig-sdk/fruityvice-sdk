<?php
declare(strict_types=1);

// Fruityvice SDK utility: feature_add

class FruityviceFeatureAdd
{
    public static function call(FruityviceContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
