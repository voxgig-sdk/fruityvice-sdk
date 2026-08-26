package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Fruityvice",
			"slug": "fruityvice",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://www.fruityvice.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"fruit": map[string]any{},
			},
		},
		"entity": map[string]any{
			"fruit": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "calories",
						"short": "Calories per 100g",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "carbohydrates",
						"short": "Carbohydrates content in grams per 100g",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "family",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Botanical family of the fruit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fat",
						"short": "Fat content in grams per 100g",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "genus",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Botanical genus of the fruit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the fruit",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Name of the fruit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nutritions",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "Nutritional information per 100 grams",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "order",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Botanical order of the fruit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "protein",
						"short": "Protein content in grams per 100g",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "sugar",
						"short": "Sugar content in grams per 100g",
						"type": "`$NUMBER`",
					},
				},
				"name": "fruit",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/fruit/all",
								"parts": []any{
									"api",
									"fruit",
									"all",
								},
								"select": map[string]any{
									"$action": "all",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/fruit/{id}",
								"parts": []any{
									"api",
									"fruit",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.nutritions`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/fruit/{name}",
								"parts": []any{
									"api",
									"fruit",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"name": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.nutritions`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/fruit",
								"parts": []any{
									"api",
									"fruit",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
