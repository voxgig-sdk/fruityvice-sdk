<?php
declare(strict_types=1);

// Fruityvice SDK utility: result_body

class FruityviceResultBody
{
    public static function call(FruityviceContext $ctx): ?FruityviceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
