# Fruityvice TypeScript SDK Reference

Complete API reference for the Fruityvice TypeScript SDK.


## FruityviceSDK

### Constructor

```ts
new FruityviceSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FruityviceSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = FruityviceSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `FruityviceSDK` instance in test mode.


### Instance Methods

#### `Fruit(data?: object)`

Create a new `Fruit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FruitEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `FruityviceSDK.test()`.

**Returns:** `FruityviceSDK` instance in test mode.


---

## FruitEntity

```ts
const fruit = client.Fruit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calories` | `number` | No | Calories per 100g |
| `carbohydrates` | `number` | No | Carbohydrates content in grams per 100g |
| `family` | `string` | Yes | Botanical family of the fruit |
| `fat` | `number` | No | Fat content in grams per 100g |
| `genus` | `string` | Yes | Botanical genus of the fruit |
| `id` | `number` | No | Unique identifier for the fruit |
| `message` | `string` | No |  |
| `name` | `string` | Yes | Name of the fruit |
| `nutritions` | `Record<string, any>` | Yes | Nutritional information per 100 grams |
| `order` | `string` | Yes | Botanical order of the fruit |
| `protein` | `number` | No | Protein content in grams per 100g |
| `sugar` | `number` | No | Sugar content in grams per 100g |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `calories` | - | - | - |
| `carbohydrates` | - | - | - |
| `family` | - | Yes | - |
| `fat` | - | - | - |
| `genus` | - | Yes | - |
| `id` | - | - | - |
| `message` | - | - | - |
| `name` | - | Yes | - |
| `nutritions` | - | Yes | - |
| `order` | - | Yes | - |
| `protein` | - | - | - |
| `sugar` | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `all` | `/api/fruit/all` | `client.Fruit().list({ $action: 'all', ... })` |

An action returns that action's OWN response, which is not necessarily a
Fruit record — check the API definition for its shape.

```ts
const result = await client.Fruit().list({
  $action: 'all',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Fruit().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Fruit().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Fruit().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FruitEntity` instance with the same client and
options.

#### `client()`

Return the parent `FruityviceSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new FruityviceSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

