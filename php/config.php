<?php
declare(strict_types=1);

// Fruityvice SDK configuration

class FruityviceConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Fruityvice",
                "slug" => "fruityvice",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
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
              'name' => 'calories',
              'title' => 'Calories',
              'type' => '`$NUMBER`',
              'short' => 'Calories per 100g',
            ],
            [
              'name' => 'carbohydrates',
              'title' => 'Carbohydrates',
              'type' => '`$NUMBER`',
              'short' => 'Carbohydrates content in grams per 100g',
            ],
            [
              'name' => 'family',
              'title' => 'Family',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Botanical family of the fruit',
            ],
            [
              'name' => 'fat',
              'title' => 'Fat',
              'type' => '`$NUMBER`',
              'short' => 'Fat content in grams per 100g',
            ],
            [
              'name' => 'genus',
              'title' => 'Genus',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Botanical genus of the fruit',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'Unique identifier for the fruit',
            ],
            [
              'name' => 'message',
              'title' => 'Message',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Name of the fruit',
            ],
            [
              'name' => 'nutritions',
              'title' => 'Nutritions',
              'type' => '`$OBJECT`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'Nutritional information per 100 grams',
            ],
            [
              'name' => 'order',
              'title' => 'Order',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Botanical order of the fruit',
            ],
            [
              'name' => 'protein',
              'title' => 'Protein',
              'type' => '`$NUMBER`',
              'short' => 'Protein content in grams per 100g',
            ],
            [
              'name' => 'sugar',
              'title' => 'Sugar',
              'type' => '`$NUMBER`',
              'short' => 'Sugar content in grams per 100g',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'fruit',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/fruit/all',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'fruit',
                    ],
                    [
                      'lit' => 'all',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'fruit',
                    'all',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [
                    '$action' => 'all',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/fruit/{id}',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'fruit',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'fruit',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.nutritions`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/fruit/{name}',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'fruit',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.nutritions`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/fruit',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'fruit',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'fruit',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
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
