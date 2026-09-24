# Fruityvice SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Fruityvice",
            "slug": "fruityvice",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://www.fruityvice.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "fruit": {},
            },
        },
        "entity": {
      "fruit": {
        "fields": [
          {
            "name": "calories",
            "title": "Calories",
            "type": "`$NUMBER`",
            "short": "Calories per 100g",
          },
          {
            "name": "carbohydrates",
            "title": "Carbohydrates",
            "type": "`$NUMBER`",
            "short": "Carbohydrates content in grams per 100g",
          },
          {
            "name": "family",
            "title": "Family",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "list": {
                "type": "`$STRING`",
              },
            },
            "short": "Botanical family of the fruit",
          },
          {
            "name": "fat",
            "title": "Fat",
            "type": "`$NUMBER`",
            "short": "Fat content in grams per 100g",
          },
          {
            "name": "genus",
            "title": "Genus",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "list": {
                "type": "`$STRING`",
              },
            },
            "short": "Botanical genus of the fruit",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the fruit",
          },
          {
            "name": "message",
            "title": "Message",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "list": {
                "type": "`$STRING`",
              },
            },
            "short": "Name of the fruit",
          },
          {
            "name": "nutritions",
            "title": "Nutritions",
            "type": "`$OBJECT`",
            "req": True,
            "op": {
              "list": {
                "type": "`$OBJECT`",
              },
            },
            "short": "Nutritional information per 100 grams",
          },
          {
            "name": "order",
            "title": "Order",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "list": {
                "type": "`$STRING`",
              },
            },
            "short": "Botanical order of the fruit",
          },
          {
            "name": "protein",
            "title": "Protein",
            "type": "`$NUMBER`",
            "short": "Protein content in grams per 100g",
          },
          {
            "name": "sugar",
            "title": "Sugar",
            "type": "`$NUMBER`",
            "short": "Sugar content in grams per 100g",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "fruit",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/fruit/all",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "fruit",
                  },
                  {
                    "lit": "all",
                  },
                ],
                "parts": [
                  "api",
                  "fruit",
                  "all",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {
                  "$action": "all",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/fruit/{id}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "fruit",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "fruit",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.nutritions`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/fruit/{name}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "fruit",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "fruit",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "name": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.nutritions`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/api/fruit",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "fruit",
                  },
                ],
                "parts": [
                  "api",
                  "fruit",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
