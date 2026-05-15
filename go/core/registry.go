package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewFruitEntityFunc func(client *FruityviceSDK, entopts map[string]any) FruityviceEntity

