# Fruityvice SDK

Free webservice for fruit data and per-100g nutrition info, open to community contributions

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Fruityvice

[Fruityvice](https://www.fruityvice.com) is a small public webservice that returns nutritional and taxonomic data about fruit. The project bills itself as "a powerful webservice which provides data for all kinds of fruit" and is open to community contributions: anyone can submit a new fruit, and submissions are reviewed by an admin before publication.

What you can do with the API:

- Look up a single fruit by name or numeric ID (e.g. `GET /api/fruit/banana`).
- Retrieve the full list of fruits via `GET /api/fruit/all`.
- Submit a new fruit record with `PUT /api/fruit` (subject to admin approval).

Each fruit record includes basic taxonomy and a nutrition block calculated per 100 grams of fruit. The exact field set is described in the project's REST documentation at `/doc/index.html`.

Operational notes: the service is HTTP-based, requires no authentication or API key, and according to the FreePublicAPIs catalogue page runs with sub-200ms typical response times. CORS is reported as disabled, so browser-side calls from another origin may need a proxy.

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

## 30-second quickstart

### TypeScript

```ts
import { FruityviceSDK } from 'fruityvice'

const client = new FruityviceSDK({})

// List all fruits
const fruits = await client.Fruit().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

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
| **Fruit** | A single fruit record with taxonomy (family, order, genus, name, id) and a per-100g nutrition block; accessed via `GET /api/fruit/{id|name}` or listed in bulk via `GET /api/fruit/all`. | `/api/fruit/all` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from fruityvice_sdk import FruityviceSDK

client = FruityviceSDK({})

# List all fruits
fruits, err = client.Fruit(None).list(None, None)

# Load a specific fruit
fruit, err = client.Fruit(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'fruityvice_sdk.php';

$client = new FruityviceSDK([]);

// List all fruits
[$fruits, $err] = $client->Fruit(null)->list(null, null);

// Load a specific fruit
[$fruit, $err] = $client->Fruit(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/fruityvice-sdk/go"

client := sdk.NewFruityviceSDK(map[string]any{})

// List all fruits
fruits, err := client.Fruit(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Fruityvice_sdk"

client = FruityviceSDK.new({})

# List all fruits
fruits, err = client.Fruit(nil).list(nil, nil)

# Load a specific fruit
fruit, err = client.Fruit(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("fruityvice_sdk")

local client = sdk.new({})

-- List all fruits
local fruits, err = client:Fruit(nil):list(nil, nil)

-- Load a specific fruit
local fruit, err = client:Fruit(nil):load(
  { id = "example_id" }, nil
)
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
client = FruityviceSDK.test(None, None)
result, err = client.Fruit(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FruityviceSDK::test(null, null);
[$result, $err] = $client->Fruit(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Fruit(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FruityviceSDK.test(nil, nil)
result, err = client.Fruit(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Fruit(nil):load(
  { id = "test01" }, nil
)
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

## Using the Fruityvice

- Upstream: [https://www.fruityvice.com](https://www.fruityvice.com)
- API docs: [https://www.fruityvice.com/doc/index.html](https://www.fruityvice.com/doc/index.html)

- Fruityvice describes itself as "completely free to use and contribute to".
- No formal open-source or data licence is published on the site.
- The site owner does not guarantee the data is 100% accurate.
- Treat the data as best-effort community-curated information and confirm critical values against an authoritative source.

---

Generated from the Fruityvice OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
