<?php
declare(strict_types=1);

// Fruityvice SDK utility: result_headers

class FruityviceResultHeaders
{
    public static function call(FruityviceContext $ctx): ?FruityviceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
