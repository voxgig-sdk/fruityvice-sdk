# Fruityvice SDK configuration

module FruityviceConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Fruityvice",
        "slug" => "fruityvice",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://www.fruityvice.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "fruit" => {},
        },
      },
      "entity" => {
        "fruit" => {
          "fields" => [
            {
              "name" => "calories",
              "short" => "Calories per 100g",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "carbohydrates",
              "short" => "Carbohydrates content in grams per 100g",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "family",
              "op" => {
                "list" => {
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "short" => "Botanical family of the fruit",
              "type" => "`$STRING`",
            },
            {
              "name" => "fat",
              "short" => "Fat content in grams per 100g",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "genus",
              "op" => {
                "list" => {
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "short" => "Botanical genus of the fruit",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the fruit",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "message",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "op" => {
                "list" => {
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "short" => "Name of the fruit",
              "type" => "`$STRING`",
            },
            {
              "name" => "nutritions",
              "op" => {
                "list" => {
                  "type" => "`$OBJECT`",
                },
              },
              "req" => true,
              "short" => "Nutritional information per 100 grams",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "order",
              "op" => {
                "list" => {
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "short" => "Botanical order of the fruit",
              "type" => "`$STRING`",
            },
            {
              "name" => "protein",
              "short" => "Protein content in grams per 100g",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "sugar",
              "short" => "Sugar content in grams per 100g",
              "type" => "`$NUMBER`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "fruit",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/fruit/all",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "fruit",
                    },
                    {
                      "lit" => "all",
                    },
                  ],
                  "select" => {
                    "$action" => "all",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "fruit",
                    "all",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/fruit/{id}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "fruit",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.nutritions`",
                  },
                  "parts" => [
                    "api",
                    "fruit",
                    "{id}",
                  ],
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "name",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/fruit/{name}",
                  "rename" => {
                    "param" => {
                      "name" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "fruit",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.nutritions`",
                  },
                  "parts" => [
                    "api",
                    "fruit",
                    "{id}",
                  ],
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/api/fruit",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "fruit",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "fruit",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FruityviceFeatures.make_feature(name)
  end
end
