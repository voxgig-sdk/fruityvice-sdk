# Fruityvice SDK utility: feature_add
module FruityviceUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
