
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "fruit"
                },
                {
                  "lit": "all"
                }
              ],
              "select": {
                "$action": "all"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "fruit",
                "all"
              ]
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
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "fruit"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.nutritions`"
              },
              "parts": [
                "api",
                "fruit",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "name": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "fruit"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.nutritions`"
              },
              "parts": [
                "api",
                "fruit",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "fruit"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "fruit"
              ]
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
  config,
  FEATURE_PLUGINS,
}

