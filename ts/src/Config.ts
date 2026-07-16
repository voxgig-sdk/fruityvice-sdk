
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


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://www.fruityvice.com',

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
          "active": true,
          "name": "family",
          "op": {
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "genus",
          "op": {
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "id",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 2
        },
        {
          "active": true,
          "name": "message",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "name",
          "op": {
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "nutrition",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "req": false,
          "type": "`$OBJECT`",
          "index$": 5
        },
        {
          "active": true,
          "name": "order",
          "op": {
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        }
      ],
      "name": "fruit",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {},
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
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "index$": 0
                  }
                ]
              },
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
                "res": "`body`"
              },
              "index$": 0
            },
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "kind": "param",
                    "name": "id",
                    "orig": "name",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
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
                "res": "`body`"
              },
              "index$": 1
            }
          ],
          "key$": "load"
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "active": true,
              "args": {},
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
              },
              "index$": 0
            }
          ],
          "key$": "update"
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

