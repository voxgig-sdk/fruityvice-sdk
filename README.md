# Fruityvice SDK



Available for [Golang](go/) and [Go CLI](go-cli/) and [Lua](lua/) and [PHP](php/) and [Python](py/) and [Ruby](rb/) and [TypeScript](ts/).


## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Fruit** |  | `/api/fruit/all` |

Each entity supports the following operations where available: **load**, **list**, **create**,
**update**, and **remove**.


## Architecture

### Entity-operation model

Every SDK call follows the same pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

At each stage a feature hook fires (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), allowing features to inspect or modify the pipeline.

### Features

Features are hook-based middleware that extend SDK behaviour.

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

You can add custom features by passing them in the `extend` option at
construction time.

### Direct and Prepare

For endpoints not covered by the entity model, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`, `headers`,
and `body`.


## Quick start

### Golang

```go
import sdk "github.com/voxgig-sdk/fruityvice-sdk/go"

client := sdk.NewFruityviceSDK(map[string]any{
    "apikey": os.Getenv("FRUITYVICE_APIKEY"),
})

// List all fruits
fruits, err := client.Fruit(nil).List(nil, nil)
```

### Lua

```lua
local sdk = require("fruityvice_sdk")

local client = sdk.new({
  apikey = os.getenv("FRUITYVICE_APIKEY"),
})

-- List all fruits
local fruits, err = client:Fruit(nil):list(nil, nil)

-- Load a specific fruit
local fruit, err = client:Fruit(nil):load(
  { id = "example_id" }, nil
)
```

### PHP

```php
<?php
require_once 'fruityvice_sdk.php';

$client = new FruityviceSDK([
    "apikey" => getenv("FRUITYVICE_APIKEY"),
]);

// List all fruits
[$fruits, $err] = $client->Fruit(null)->list(null, null);

// Load a specific fruit
[$fruit, $err] = $client->Fruit(null)->load(
    ["id" => "example_id"], null
);
```

### Python

```python
import os
from fruityvice_sdk import FruityviceSDK

client = FruityviceSDK({
    "apikey": os.environ.get("FRUITYVICE_APIKEY"),
})

# List all fruits
fruits, err = client.Fruit(None).list(None, None)

# Load a specific fruit
fruit, err = client.Fruit(None).load(
    {"id": "example_id"}, None
)
```

### Ruby

```ruby
require_relative "Fruityvice_sdk"

client = FruityviceSDK.new({
  "apikey" => ENV["FRUITYVICE_APIKEY"],
})

# List all fruits
fruits, err = client.Fruit(nil).list(nil, nil)

# Load a specific fruit
fruit, err = client.Fruit(nil).load(
  { "id" => "example_id" }, nil
)
```

### TypeScript

```ts
import { FruityviceSDK } from 'fruityvice'

const client = new FruityviceSDK({
  apikey: process.env.FRUITYVICE_APIKEY,
})

// List all fruits
const fruits = await client.Fruit().list()
```


## Testing

Both SDKs provide a test mode that replaces the HTTP transport with an
in-memory mock, so tests run without a network connection.

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Fruit(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Fruit(nil):load(
  { id = "test01" }, nil
)
```

### PHP

```php
$client = FruityviceSDK::test(null, null);
[$result, $err] = $client->Fruit(null)->load(
    ["id" => "test01"], null
);
```

### Python

```python
client = FruityviceSDK.test(None, None)
result, err = client.Fruit(None).load(
    {"id": "test01"}, None
)
```

### Ruby

```ruby
client = FruityviceSDK.test(nil, nil)
result, err = client.Fruit(nil).load(
  { "id" => "test01" }, nil
)
```

### TypeScript

```ts
const client = FruityviceSDK.test()
const result = await client.Fruit().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```


## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```


## Language-specific documentation

- [Golang SDK](go/README.md)
- [Go CLI SDK](go-cli/README.md)
- [Lua SDK](lua/README.md)
- [PHP SDK](php/README.md)
- [Python SDK](py/README.md)
- [Ruby SDK](rb/README.md)
- [TypeScript SDK](ts/README.md)

