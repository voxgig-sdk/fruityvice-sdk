<?php
declare(strict_types=1);

// Fruityvice SDK utility: prepare_body

class FruityvicePrepareBody
{
    public static function call(FruityviceContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
