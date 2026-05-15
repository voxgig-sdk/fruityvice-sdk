<?php
declare(strict_types=1);

// Fruityvice SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FruityviceFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FruityviceBaseFeature();
            case "test":
                return new FruityviceTestFeature();
            default:
                return new FruityviceBaseFeature();
        }
    }
}
