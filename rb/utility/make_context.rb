# Fruityvice SDK utility: make_context
require_relative '../core/context'
module FruityviceUtilities
  MakeContext = ->(ctxmap, basectx) {
    FruityviceContext.new(ctxmap, basectx)
  }
end
