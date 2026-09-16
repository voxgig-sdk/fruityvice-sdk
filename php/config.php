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
              'short' => 'Calories per 100g',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'carbohydrates',
              'short' => 'Carbohydrates content in grams per 100g',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'family',
              'op' => [
                'list' => [
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'short' => 'Botanical family of the fruit',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'fat',
              'short' => 'Fat content in grams per 100g',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'genus',
              'op' => [
                'list' => [
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'short' => 'Botanical genus of the fruit',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the fruit',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'message',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'op' => [
                'list' => [
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'short' => 'Name of the fruit',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'nutritions',
              'op' => [
                'list' => [
                  'type' => '`$OBJECT`',
                ],
              ],
              'req' => true,
              'short' => 'Nutritional information per 100 grams',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'order',
              'op' => [
                'list' => [
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'short' => 'Botanical order of the fruit',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'protein',
              'short' => 'Protein content in grams per 100g',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'sugar',
              'short' => 'Sugar content in grams per 100g',
              'type' => '`$NUMBER`',
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
                  'args' => [],
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
                  'select' => [
                    '$action' => 'all',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'api',
                    'fruit',
                    'all',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
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
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.nutritions`',
                  ],
                  'parts' => [
                    'api',
                    'fruit',
                    '{id}',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'name',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/fruit/{name}',
                  'rename' => [
                    'param' => [
                      'name' => 'id',
                    ],
                  ],
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
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.nutritions`',
                  ],
                  'parts' => [
                    'api',
                    'fruit',
                    '{id}',
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'args' => [],
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
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'api',
                    'fruit',
                  ],
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
