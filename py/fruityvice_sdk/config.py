# Fruityvice SDK configuration


def make_config():
    return {
        "main": {
            "name": "Fruityvice",
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
            "active": True,
            "name": "calories",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "carbohydrates",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "family",
            "op": {
              "list": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "fat",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "genus",
            "op": {
              "list": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "message",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "list": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "nutritions",
            "op": {
              "list": {
                "req": False,
                "type": "`$OBJECT`",
              },
            },
            "req": True,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "order",
            "op": {
              "list": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "protein",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "sugar",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 11,
          },
        ],
        "name": "fruit",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
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
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
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
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
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
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
