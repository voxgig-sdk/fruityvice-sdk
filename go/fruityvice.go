package voxgigfruityvicesdk

import (
	"github.com/voxgig-sdk/fruityvice-sdk/go/core"
	"github.com/voxgig-sdk/fruityvice-sdk/go/entity"
	"github.com/voxgig-sdk/fruityvice-sdk/go/feature"
	_ "github.com/voxgig-sdk/fruityvice-sdk/go/utility"
)

// Type aliases preserve external API.
type FruityviceSDK = core.FruityviceSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FruityviceEntity = core.FruityviceEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FruityviceError = core.FruityviceError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewFruitEntityFunc = func(client *core.FruityviceSDK, entopts map[string]any) core.FruityviceEntity {
		return entity.NewFruitEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFruityviceSDK = core.NewFruityviceSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewFruityviceSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *FruityviceSDK  { return NewFruityviceSDK(nil) }
func Test() *FruityviceSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
