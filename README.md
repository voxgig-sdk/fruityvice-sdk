# Fruityvice SDK

Fruityvice client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## Try it

**TypeScript**
```bash
npm install fruityvice
```

**Python**
```bash
pip install fruityvice-sdk
```

**PHP**
```bash
composer require voxgig/fruityvice-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/fruityvice-sdk/go
```

**Ruby**
```bash
gem install fruityvice-sdk
```

**Lua**
```bash
luarocks install fruityvice-sdk
```

## Quickstart

### TypeScript

```ts
import { FruityviceSDK } from 'fruityvice'

const client = new FruityviceSDK({
  apikey: process.env.FRUITYVICE_APIKEY,
})

// List all fruits
const fruits = await client.Fruit().list()
console.log(fruits.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o fruityvice-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "fruityvice": {
      "command": "/abs/path/to/fruityvice-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Fruit** |  | `/api/fruit/all` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from fruityvice_sdk import FruityviceSDK

client = FruityviceSDK({
    "apikey": os.environ.get("FRUITYVICE_APIKEY"),
})

# List all fruits
fruits, err = client.Fruit().list()
print(fruits)

# Load a specific fruit
fruit, err = client.Fruit().load({"id": "example_id"})
print(fruit)
```

### PHP

```php
<?php
require_once 'fruityvice_sdk.php';

$client = new FruityviceSDK([
    "apikey" => getenv("FRUITYVICE_APIKEY"),
]);

// List all fruits
[$fruits, $err] = $client->Fruit()->list();
print_r($fruits);

// Load a specific fruit
[$fruit, $err] = $client->Fruit()->load(["id" => "example_id"]);
print_r($fruit);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/fruityvice-sdk/go"

client := sdk.NewFruityviceSDK(map[string]any{
    "apikey": os.Getenv("FRUITYVICE_APIKEY"),
})

// List all fruits
fruits, err := client.Fruit(nil).List(nil, nil)
fmt.Println(fruits)
```

### Ruby

```ruby
require_relative "Fruityvice_sdk"

client = FruityviceSDK.new({
  "apikey" => ENV["FRUITYVICE_APIKEY"],
})

# List all fruits
fruits, err = client.Fruit().list
puts fruits

# Load a specific fruit
fruit, err = client.Fruit().load({ "id" => "example_id" })
puts fruit
```

### Lua

```lua
local sdk = require("fruityvice_sdk")

local client = sdk.new({
  apikey = os.getenv("FRUITYVICE_APIKEY"),
})

-- List all fruits
local fruits, err = client:Fruit():list()
print(fruits)

-- Load a specific fruit
local fruit, err = client:Fruit():load({ id = "example_id" })
print(fruit)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FruityviceSDK.test()
const result = await client.Fruit().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FruityviceSDK.test()
result, err = client.Fruit().load({"id": "test01"})
```

### PHP

```php
$client = FruityviceSDK::test();
[$result, $err] = $client->Fruit()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.Fruit(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FruityviceSDK.test
result, err = client.Fruit().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:Fruit():load({ id = "test01" })
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
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

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
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

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

---

Generated from the Fruityvice OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
