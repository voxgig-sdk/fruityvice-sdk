
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Fruityvice',
        slug: "fruityvice",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://www.fruityvice.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      fruit: {
      },

    }
  }


  entity = {
    "fruit": {
      "fields": [
        {
          "name": "calories",
          "short": "Calories per 100g",
          "type": "`$NUMBER`"
        },
        {
          "name": "carbohydrates",
          "short": "Carbohydrates content in grams per 100g",
          "type": "`$NUMBER`"
        },
        {
          "name": "family",
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Botanical family of the fruit",
          "type": "`$STRING`"
        },
        {
          "name": "fat",
          "short": "Fat content in grams per 100g",
          "type": "`$NUMBER`"
        },
        {
          "name": "genus",
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Botanical genus of the fruit",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the fruit",
          "type": "`$INTEGER`"
        },
        {
          "name": "message",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Name of the fruit",
          "type": "`$STRING`"
        },
        {
          "name": "nutritions",
          "op": {
            "list": {
              "type": "`$OBJECT`"
            }
          },
          "req": true,
          "short": "Nutritional information per 100 grams",
          "type": "`$OBJECT`"
        },
        {
          "name": "order",
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Botanical order of the fruit",
          "type": "`$STRING`"
        },
        {
          "name": "protein",
          "short": "Protein content in grams per 100g",
          "type": "`$NUMBER`"
        },
        {
          "name": "sugar",
          "short": "Sugar content in grams per 100g",
          "type": "`$NUMBER`"
        }
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
                "all"
              ],
              "select": {
                "$action": "all"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/fruit/{id}",
              "parts": [
                "api",
                "fruit",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.nutritions`"
              }
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "name",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/fruit/{name}",
              "parts": [
                "api",
                "fruit",
                "{id}"
              ],
              "rename": {
                "param": {
                  "name": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.nutritions`"
              }
            }
          ]
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
                "fruit"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

