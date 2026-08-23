# Fruityvice SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
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
            "short": "Calories per 100g",
            "type": "`$NUMBER`",
          },
          {
            "name": "carbohydrates",
            "short": "Carbohydrates content in grams per 100g",
            "type": "`$NUMBER`",
          },
          {
            "name": "family",
            "op": {
              "list": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "Botanical family of the fruit",
            "type": "`$STRING`",
          },
          {
            "name": "fat",
            "short": "Fat content in grams per 100g",
            "type": "`$NUMBER`",
          },
          {
            "name": "genus",
            "op": {
              "list": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "Botanical genus of the fruit",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the fruit",
            "type": "`$INTEGER`",
          },
          {
            "name": "message",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "op": {
              "list": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "Name of the fruit",
            "type": "`$STRING`",
          },
          {
            "name": "nutritions",
            "op": {
              "list": {
                "type": "`$OBJECT`",
              },
            },
            "req": True,
            "short": "Nutritional information per 100 grams",
            "type": "`$OBJECT`",
          },
          {
            "name": "order",
            "op": {
              "list": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "Botanical order of the fruit",
            "type": "`$STRING`",
          },
          {
            "name": "protein",
            "short": "Protein content in grams per 100g",
            "type": "`$NUMBER`",
          },
          {
            "name": "sugar",
            "short": "Sugar content in grams per 100g",
            "type": "`$NUMBER`",
          },
        ],
        "name": "fruit",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/fruit/all",
                "parts": [
                  "api",
                  "fruit",
                  "all",
                ],
                "select": {
                  "$action": "all",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/fruit/{id}",
                "parts": [
                  "api",
                  "fruit",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.nutritions`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/fruit/{name}",
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.nutritions`",
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "PUT",
                "orig": "/api/fruit",
                "parts": [
                  "api",
                  "fruit",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
