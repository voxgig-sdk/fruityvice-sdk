"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('FruitEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FRUITYVICE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FRUITYVICE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FruityviceSDK.test();
        const ent = testsdk.Fruit();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FRUITYVICE_TEST_LIVE;
        for (const op of ['list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'fruit.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "calories": { "a": true, "h": "Calories", "n": "calories", "r": false, "sh": "Calories per 100g", "t": "`$NUMBER`", "key$": "calories", "index$": 0 }, "carbohydrates": { "a": true, "h": "Carbohydrates", "n": "carbohydrates", "r": false, "sh": "Carbohydrates content in grams per 100g", "t": "`$NUMBER`", "key$": "carbohydrates", "index$": 1 }, "family": { "a": true, "h": "Family", "n": "family", "op": { "list": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Botanical family of the fruit", "t": "`$STRING`", "key$": "family", "index$": 2 }, "fat": { "a": true, "h": "Fat", "n": "fat", "r": false, "sh": "Fat content in grams per 100g", "t": "`$NUMBER`", "key$": "fat", "index$": 3 }, "genus": { "a": true, "h": "Genus", "n": "genus", "op": { "list": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Botanical genus of the fruit", "t": "`$STRING`", "key$": "genus", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the fruit", "t": "`$INTEGER`", "key$": "id", "index$": 5 }, "message": { "a": true, "h": "Message", "n": "message", "r": false, "t": "`$STRING`", "key$": "message", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "list": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Name of the fruit", "t": "`$STRING`", "key$": "name", "index$": 7 }, "nutritions": { "a": true, "h": "Nutritions", "n": "nutritions", "op": { "list": { "req": false, "type": "`$OBJECT`" } }, "r": true, "sh": "Nutritional information per 100 grams", "t": "`$OBJECT`", "key$": "nutritions", "index$": 8 }, "order": { "a": true, "h": "Order", "n": "order", "op": { "list": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Botanical order of the fruit", "t": "`$STRING`", "key$": "order", "index$": 9 }, "protein": { "a": true, "h": "Protein", "n": "protein", "r": false, "sh": "Protein content in grams per 100g", "t": "`$NUMBER`", "key$": "protein", "index$": 10 }, "sugar": { "a": true, "h": "Sugar", "n": "sugar", "r": false, "sh": "Sugar content in grams per 100g", "t": "`$NUMBER`", "key$": "sugar", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "fruit", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/fruit/all", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/fruit/all", "q": { "$action": "all" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "fruit" }, { "lit": "all" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/fruit/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/fruit/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "fruit" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.nutritions`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/fruit/{name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "name", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/fruit/{name}", "q": { "exist": ["id"] }, "r": { "param": { "name": "id" } }, "s": [{ "lit": "api" }, { "lit": "fruit" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.nutritions`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/fruit", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PUT", "o": "/api/fruit", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "fruit" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "fruit", "name__orig": "fruit", "Name": "Fruit", "name_": "fruit", "name-": "fruit", "NAME": "FRUIT", "index$": 0 }, { "active": true, "entity": "fruit", "key$": "BasicFruitFlow", "kind": "basic", "name": "BasicFruitFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "fruit_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "fruit_ref01", "srcdatavar": "fruit_ref01_data", "suffix": "_up0", "textfield": "family" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-fruit_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "fruit_ref01", "srcdatavar": "fruit_ref01_data", "suffix": "_dt0" }, "m": { "id": "fruit01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-fruit_ref01" } }], "index$": 2 }] }, 'Fruit', { "GET /api/fruit/all": { "protocol": "http", "operationId": "getAllFruits", "responses": { "200": { "description": "Successful response with all fruit data", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "id": { "type": "integer", "description": "Unique identifier for the fruit", "example": 1, "key$": "id" }, "name": { "type": "string", "description": "Name of the fruit", "example": "Apple", "key$": "name" }, "family": { "type": "string", "description": "Botanical family of the fruit", "example": "Rosaceae", "key$": "family" }, "order": { "type": "string", "description": "Botanical order of the fruit", "example": "Rosales", "key$": "order" }, "genus": { "type": "string", "description": "Botanical genus of the fruit", "example": "Malus", "key$": "genus" }, "nutritions": { "type": "object", "description": "Nutritional information per 100 grams", "properties": { "calories": { "type": "number", "description": "Calories per 100g", "example": 52, "key$": "calories" }, "fat": { "type": "number", "description": "Fat content in grams per 100g", "example": 0.4, "key$": "fat" }, "sugar": { "type": "number", "description": "Sugar content in grams per 100g", "example": 10.3, "key$": "sugar" }, "carbohydrates": { "type": "number", "description": "Carbohydrates content in grams per 100g", "example": 11.4, "key$": "carbohydrates" }, "protein": { "type": "number", "description": "Protein content in grams per 100g", "example": 0.3, "key$": "protein" } }, "index$": 0, "key$": "nutritions" } }, "x-ref": "#/components/schemas/Fruit", "index$": 0 } } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Fruit not found" }, "message": { "type": "string", "description": "Detailed error message", "example": "The requested fruit could not be found in the database" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [], "securitySource": "unspecified" }, "GET /api/fruit/{id}": { "protocol": "http", "operationId": "getFruitById", "responses": { "200": { "description": "Successful response with fruit data", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "integer", "description": "Unique identifier for the fruit", "example": 1, "key$": "id" }, "name": { "type": "string", "description": "Name of the fruit", "example": "Apple", "key$": "name" }, "family": { "type": "string", "description": "Botanical family of the fruit", "example": "Rosaceae", "key$": "family" }, "order": { "type": "string", "description": "Botanical order of the fruit", "example": "Rosales", "key$": "order" }, "genus": { "type": "string", "description": "Botanical genus of the fruit", "example": "Malus", "key$": "genus" }, "nutritions": { "type": "object", "description": "Nutritional information per 100 grams", "properties": { "calories": { "type": "number", "description": "Calories per 100g", "example": 52, "key$": "calories" }, "fat": { "type": "number", "description": "Fat content in grams per 100g", "example": 0.4, "key$": "fat" }, "sugar": { "type": "number", "description": "Sugar content in grams per 100g", "example": 10.3, "key$": "sugar" }, "carbohydrates": { "type": "number", "description": "Carbohydrates content in grams per 100g", "example": 11.4, "key$": "carbohydrates" }, "protein": { "type": "number", "description": "Protein content in grams per 100g", "example": 0.3, "key$": "protein" } }, "index$": 0, "key$": "nutritions" } }, "x-ref": "#/components/schemas/Fruit" } } } }, "404": { "description": "Fruit not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Fruit not found" }, "message": { "type": "string", "description": "Detailed error message", "example": "The requested fruit could not be found in the database" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Fruit not found" }, "message": { "type": "string", "description": "Detailed error message", "example": "The requested fruit could not be found in the database" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "id", "in": "path", "required": true, "description": "The ID of the fruit", "schema": { "type": "integer" }, "index$": 0 }], "securitySource": "unspecified" }, "GET /api/fruit/{name}": { "protocol": "http", "operationId": "getFruitByName", "responses": { "200": { "description": "Successful response with fruit data", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "integer", "description": "Unique identifier for the fruit", "example": 1, "key$": "id" }, "name": { "type": "string", "description": "Name of the fruit", "example": "Apple", "key$": "name" }, "family": { "type": "string", "description": "Botanical family of the fruit", "example": "Rosaceae", "key$": "family" }, "order": { "type": "string", "description": "Botanical order of the fruit", "example": "Rosales", "key$": "order" }, "genus": { "type": "string", "description": "Botanical genus of the fruit", "example": "Malus", "key$": "genus" }, "nutritions": { "type": "object", "description": "Nutritional information per 100 grams", "properties": { "calories": { "type": "number", "description": "Calories per 100g", "example": 52, "key$": "calories" }, "fat": { "type": "number", "description": "Fat content in grams per 100g", "example": 0.4, "key$": "fat" }, "sugar": { "type": "number", "description": "Sugar content in grams per 100g", "example": 10.3, "key$": "sugar" }, "carbohydrates": { "type": "number", "description": "Carbohydrates content in grams per 100g", "example": 11.4, "key$": "carbohydrates" }, "protein": { "type": "number", "description": "Protein content in grams per 100g", "example": 0.3, "key$": "protein" } }, "index$": 0, "key$": "nutritions" } }, "x-ref": "#/components/schemas/Fruit" } } } }, "404": { "description": "Fruit not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Fruit not found" }, "message": { "type": "string", "description": "Detailed error message", "example": "The requested fruit could not be found in the database" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Fruit not found" }, "message": { "type": "string", "description": "Detailed error message", "example": "The requested fruit could not be found in the database" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "name", "in": "path", "required": true, "description": "The name of the fruit", "schema": { "type": "string" }, "index$": 0 }], "securitySource": "unspecified" }, "PUT /api/fruit": { "protocol": "http", "operationId": "addFruit", "requestBody": { "required": true, "description": "Fruit data to be added", "content": { "application/json": { "schema": { "type": "object", "required": ["name", "family", "order", "genus", "nutritions"], "properties": { "name": { "type": "string", "description": "Name of the fruit", "example": "Banana", "key$": "name" }, "family": { "type": "string", "description": "Botanical family of the fruit", "example": "Musaceae", "key$": "family" }, "order": { "type": "string", "description": "Botanical order of the fruit", "example": "Zingiberales", "key$": "order" }, "genus": { "type": "string", "description": "Botanical genus of the fruit", "example": "Musa", "key$": "genus" }, "nutritions": { "type": "object", "description": "Nutritional information per 100 grams", "required": ["calories", "fat", "sugar", "carbohydrates", "protein"], "properties": { "calories": { "type": "number", "description": "Calories per 100g", "example": 89 }, "fat": { "type": "number", "description": "Fat content in grams per 100g", "example": 0.3 }, "sugar": { "type": "number", "description": "Sugar content in grams per 100g", "example": 12.2 }, "carbohydrates": { "type": "number", "description": "Carbohydrates content in grams per 100g", "example": 22.8 }, "protein": { "type": "number", "description": "Protein content in grams per 100g", "example": 1.1 } }, "key$": "nutritions" } }, "x-ref": "#/components/schemas/FruitInput", "index$": 1 } } } }, "responses": { "200": { "description": "Fruit successfully added and pending approval", "content": { "application/json": { "schema": { "type": "object", "properties": { "message": { "type": "string", "example": "Fruit added successfully and pending approval", "key$": "message" } }, "index$": 0 } } } }, "201": { "description": "Fruit successfully created", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "integer", "description": "Unique identifier for the fruit", "example": 1, "key$": "id" }, "name": { "type": "string", "description": "Name of the fruit", "example": "Apple", "key$": "name" }, "family": { "type": "string", "description": "Botanical family of the fruit", "example": "Rosaceae", "key$": "family" }, "order": { "type": "string", "description": "Botanical order of the fruit", "example": "Rosales", "key$": "order" }, "genus": { "type": "string", "description": "Botanical genus of the fruit", "example": "Malus", "key$": "genus" }, "nutritions": { "type": "object", "description": "Nutritional information per 100 grams", "properties": { "calories": { "type": "number", "description": "Calories per 100g", "example": 52, "key$": "calories" }, "fat": { "type": "number", "description": "Fat content in grams per 100g", "example": 0.4, "key$": "fat" }, "sugar": { "type": "number", "description": "Sugar content in grams per 100g", "example": 10.3, "key$": "sugar" }, "carbohydrates": { "type": "number", "description": "Carbohydrates content in grams per 100g", "example": 11.4, "key$": "carbohydrates" }, "protein": { "type": "number", "description": "Protein content in grams per 100g", "example": 0.3, "key$": "protein" } }, "index$": 0, "key$": "nutritions" } }, "x-ref": "#/components/schemas/Fruit" } } } }, "400": { "description": "Bad request - invalid fruit data", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Fruit not found" }, "message": { "type": "string", "description": "Detailed error message", "example": "The requested fruit could not be found in the database" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Fruit not found" }, "message": { "type": "string", "description": "Detailed error message", "example": "The requested fruit could not be found in the database" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let fruit_ref01_data = Object.values(setup.data.existing.fruit)[0];
        // LIST
        const fruit_ref01_ent = client.Fruit();
        const fruit_ref01_match = {};
        const fruit_ref01_list = (await fruit_ref01_ent.list(fruit_ref01_match)).map((e) => e.data());
        // UPDATE
        const fruit_ref01_data_up0 = {};
        fruit_ref01_data_up0.id = fruit_ref01_data.id;
        const fruit_ref01_markdef_up0 = { name: 'family', value: 'Mark01-fruit_ref01_' + setup.now };
        fruit_ref01_data_up0[fruit_ref01_markdef_up0.name] = fruit_ref01_markdef_up0.value;
        const fruit_ref01_resdata_up0 = (await fruit_ref01_ent.update(fruit_ref01_data_up0)).data();
        (0, node_assert_1.default)(fruit_ref01_resdata_up0.id === fruit_ref01_data_up0.id);
        (0, node_assert_1.default)(fruit_ref01_resdata_up0[fruit_ref01_markdef_up0.name] === fruit_ref01_markdef_up0.value);
        // LOAD
        const fruit_ref01_match_dt0 = {};
        fruit_ref01_match_dt0.id = fruit_ref01_data.id;
        const fruit_ref01_data_dt0 = (await fruit_ref01_ent.load(fruit_ref01_match_dt0)).data();
        (0, node_assert_1.default)(fruit_ref01_data_dt0.id === fruit_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/fruit/FruitTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FruityviceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['fruit01', 'fruit02', 'fruit03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FRUITYVICE_TEST_FRUIT_ENTID': idmap,
        'FRUITYVICE_TEST_LIVE': 'FALSE',
        'FRUITYVICE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FRUITYVICE_TEST_FRUIT_ENTID'];
    const live = 'TRUE' === env.FRUITYVICE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FRUITYVICE_TEST_FRUIT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FruityviceSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.FRUITYVICE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=FruitEntity.test.js.map