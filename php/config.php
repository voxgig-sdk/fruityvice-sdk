<?php
declare(strict_types=1);

// Fruityvice SDK configuration

class FruityviceConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Fruityvice",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://www.fruityvice.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "fruit" => [],
                ],
            ],
            "entity" => [
        'fruit' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'calories',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'carbohydrates',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'family',
              'op' => [
                'list' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'fat',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'genus',
              'op' => [
                'list' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'message',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'list' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'nutritions',
              'op' => [
                'list' => [
                  'req' => false,
                  'type' => '`$OBJECT`',
                ],
              ],
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'order',
              'op' => [
                'list' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'protein',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'sugar',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 11,
            ],
          ],
          'name' => 'fruit',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/fruit/all',
                  'parts' => [
                    'api',
                    'fruit',
                    'all',
                  ],
                  'select' => [
                    '$action' => 'all',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/fruit/{id}',
                  'parts' => [
                    'api',
                    'fruit',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.nutritions`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'name',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/fruit/{name}',
                  'parts' => [
                    'api',
                    'fruit',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'name' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.nutritions`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'load',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/fruit',
                  'parts' => [
                    'api',
                    'fruit',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FruityviceFeatures::make_feature($name);
    }
}
