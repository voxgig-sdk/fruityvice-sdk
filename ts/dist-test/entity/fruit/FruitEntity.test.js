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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "calories", "req": false, "short": "Calories per 100g", "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "carbohydrates", "req": false, "short": "Carbohydrates content in grams per 100g", "type": "`$NUMBER`", "index$": 1 }, { "active": true, "name": "family", "op": { "list": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "Botanical family of the fruit", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "fat", "req": false, "short": "Fat content in grams per 100g", "type": "`$NUMBER`", "index$": 3 }, { "active": true, "name": "genus", "op": { "list": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "Botanical genus of the fruit", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the fruit", "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "message", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "name", "op": { "list": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "Name of the fruit", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "nutritions", "op": { "list": { "req": false, "type": "`$OBJECT`" } }, "req": true, "short": "Nutritional information per 100 grams", "type": "`$OBJECT`", "index$": 8 }, { "active": true, "name": "order", "op": { "list": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "Botanical order of the fruit", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "protein", "req": false, "short": "Protein content in grams per 100g", "type": "`$NUMBER`", "index$": 10 }, { "active": true, "name": "sugar", "req": false, "short": "Sugar content in grams per 100g", "type": "`$NUMBER`", "index$": 11 }], "id": { "field": "id", "name": "id" }, "name": "fruit", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api/fruit/all", "json": "{\"operationId\":\"getAllFruits\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"family\":{\"description\":\"Botanical family of the fruit\",\"example\":\"Rosaceae\",\"type\":\"string\"},\"genus\":{\"description\":\"Botanical genus of the fruit\",\"example\":\"Malus\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the fruit\",\"example\":1,\"type\":\"integer\"},\"name\":{\"description\":\"Name of the fruit\",\"example\":\"Apple\",\"type\":\"string\"},\"nutritions\":{\"description\":\"Nutritional information per 100 grams\",\"properties\":{\"calories\":{\"description\":\"Calories per 100g\",\"example\":52,\"type\":\"number\"},\"carbohydrates\":{\"description\":\"Carbohydrates content in grams per 100g\",\"example\":11.4,\"type\":\"number\"},\"fat\":{\"description\":\"Fat content in grams per 100g\",\"example\":0.4,\"type\":\"number\"},\"protein\":{\"description\":\"Protein content in grams per 100g\",\"example\":0.3,\"type\":\"number\"},\"sugar\":{\"description\":\"Sugar content in grams per 100g\",\"example\":10.3,\"type\":\"number\"}},\"type\":\"object\"},\"order\":{\"description\":\"Botanical order of the fruit\",\"example\":\"Rosales\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with all fruit data\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Fruit not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"The requested fruit could not be found in the database\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/fruit/all", "segments": [{ "lit": "api" }, { "lit": "fruit" }, { "lit": "all" }], "select": { "$action": "all" }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /api/fruit/{id}", "json": "{\"operationId\":\"getFruitById\",\"parameters\":[{\"description\":\"The ID of the fruit\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"family\":{\"description\":\"Botanical family of the fruit\",\"example\":\"Rosaceae\",\"type\":\"string\"},\"genus\":{\"description\":\"Botanical genus of the fruit\",\"example\":\"Malus\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the fruit\",\"example\":1,\"type\":\"integer\"},\"name\":{\"description\":\"Name of the fruit\",\"example\":\"Apple\",\"type\":\"string\"},\"nutritions\":{\"description\":\"Nutritional information per 100 grams\",\"properties\":{\"calories\":{\"description\":\"Calories per 100g\",\"example\":52,\"type\":\"number\"},\"carbohydrates\":{\"description\":\"Carbohydrates content in grams per 100g\",\"example\":11.4,\"type\":\"number\"},\"fat\":{\"description\":\"Fat content in grams per 100g\",\"example\":0.4,\"type\":\"number\"},\"protein\":{\"description\":\"Protein content in grams per 100g\",\"example\":0.3,\"type\":\"number\"},\"sugar\":{\"description\":\"Sugar content in grams per 100g\",\"example\":10.3,\"type\":\"number\"}},\"type\":\"object\"},\"order\":{\"description\":\"Botanical order of the fruit\",\"example\":\"Rosales\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with fruit data\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Fruit not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"The requested fruit could not be found in the database\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Fruit not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Fruit not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"The requested fruit could not be found in the database\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/fruit/{id}", "segments": [{ "lit": "api" }, { "lit": "fruit" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.nutritions`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "name", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/fruit/{name}", "json": "{\"operationId\":\"getFruitByName\",\"parameters\":[{\"description\":\"The name of the fruit\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"family\":{\"description\":\"Botanical family of the fruit\",\"example\":\"Rosaceae\",\"type\":\"string\"},\"genus\":{\"description\":\"Botanical genus of the fruit\",\"example\":\"Malus\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the fruit\",\"example\":1,\"type\":\"integer\"},\"name\":{\"description\":\"Name of the fruit\",\"example\":\"Apple\",\"type\":\"string\"},\"nutritions\":{\"description\":\"Nutritional information per 100 grams\",\"properties\":{\"calories\":{\"description\":\"Calories per 100g\",\"example\":52,\"type\":\"number\"},\"carbohydrates\":{\"description\":\"Carbohydrates content in grams per 100g\",\"example\":11.4,\"type\":\"number\"},\"fat\":{\"description\":\"Fat content in grams per 100g\",\"example\":0.4,\"type\":\"number\"},\"protein\":{\"description\":\"Protein content in grams per 100g\",\"example\":0.3,\"type\":\"number\"},\"sugar\":{\"description\":\"Sugar content in grams per 100g\",\"example\":10.3,\"type\":\"number\"}},\"type\":\"object\"},\"order\":{\"description\":\"Botanical order of the fruit\",\"example\":\"Rosales\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with fruit data\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Fruit not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"The requested fruit could not be found in the database\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Fruit not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Fruit not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"The requested fruit could not be found in the database\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/fruit/{name}", "rename": { "param": { "name": "id" } }, "segments": [{ "lit": "api" }, { "lit": "fruit" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.nutritions`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": {}, "contract": { "id": "PUT /api/fruit", "json": "{\"operationId\":\"addFruit\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"family\":{\"description\":\"Botanical family of the fruit\",\"example\":\"Musaceae\",\"type\":\"string\"},\"genus\":{\"description\":\"Botanical genus of the fruit\",\"example\":\"Musa\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the fruit\",\"example\":\"Banana\",\"type\":\"string\"},\"nutritions\":{\"description\":\"Nutritional information per 100 grams\",\"properties\":{\"calories\":{\"description\":\"Calories per 100g\",\"example\":89,\"type\":\"number\"},\"carbohydrates\":{\"description\":\"Carbohydrates content in grams per 100g\",\"example\":22.8,\"type\":\"number\"},\"fat\":{\"description\":\"Fat content in grams per 100g\",\"example\":0.3,\"type\":\"number\"},\"protein\":{\"description\":\"Protein content in grams per 100g\",\"example\":1.1,\"type\":\"number\"},\"sugar\":{\"description\":\"Sugar content in grams per 100g\",\"example\":12.2,\"type\":\"number\"}},\"required\":[\"calories\",\"fat\",\"sugar\",\"carbohydrates\",\"protein\"],\"type\":\"object\"},\"order\":{\"description\":\"Botanical order of the fruit\",\"example\":\"Zingiberales\",\"type\":\"string\"}},\"required\":[\"name\",\"family\",\"order\",\"genus\",\"nutritions\"],\"type\":\"object\"}}},\"description\":\"Fruit data to be added\",\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"example\":\"Fruit added successfully and pending approval\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Fruit successfully added and pending approval\"},\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"family\":{\"description\":\"Botanical family of the fruit\",\"example\":\"Rosaceae\",\"type\":\"string\"},\"genus\":{\"description\":\"Botanical genus of the fruit\",\"example\":\"Malus\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the fruit\",\"example\":1,\"type\":\"integer\"},\"name\":{\"description\":\"Name of the fruit\",\"example\":\"Apple\",\"type\":\"string\"},\"nutritions\":{\"description\":\"Nutritional information per 100 grams\",\"properties\":{\"calories\":{\"description\":\"Calories per 100g\",\"example\":52,\"type\":\"number\"},\"carbohydrates\":{\"description\":\"Carbohydrates content in grams per 100g\",\"example\":11.4,\"type\":\"number\"},\"fat\":{\"description\":\"Fat content in grams per 100g\",\"example\":0.4,\"type\":\"number\"},\"protein\":{\"description\":\"Protein content in grams per 100g\",\"example\":0.3,\"type\":\"number\"},\"sugar\":{\"description\":\"Sugar content in grams per 100g\",\"example\":10.3,\"type\":\"number\"}},\"type\":\"object\"},\"order\":{\"description\":\"Botanical order of the fruit\",\"example\":\"Rosales\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Fruit successfully created\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Fruit not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"The requested fruit could not be found in the database\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid fruit data\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Fruit not found\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"The requested fruit could not be found in the database\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/fruit", "segments": [{ "lit": "api" }, { "lit": "fruit" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "fruit", "name__orig": "fruit", "Name": "Fruit", "name_": "fruit", "name-": "fruit", "NAME": "FRUIT", "index$": 0 }, { "active": true, "entity": "fruit", "key$": "BasicFruitFlow", "kind": "basic", "name": "BasicFruitFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "fruit_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "fruit_ref01", "srcdatavar": "fruit_ref01_data", "suffix": "_up0", "textfield": "family" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-fruit_ref01" } }], "valid": [], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "fruit_ref01", "srcdatavar": "fruit_ref01_data", "suffix": "_dt0" }, "match": { "id": "fruit01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-fruit_ref01" } }], "index$": 2 }] }, 'Fruit');
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