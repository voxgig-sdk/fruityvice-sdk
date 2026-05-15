<?php
declare(strict_types=1);

// Fruityvice SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FruityviceMakeContext
{
    public static function call(array $ctxmap, ?FruityviceContext $basectx): FruityviceContext
    {
        return new FruityviceContext($ctxmap, $basectx);
    }
}
