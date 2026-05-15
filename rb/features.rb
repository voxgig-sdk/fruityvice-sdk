# Fruityvice SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FruityviceFeatures
  def self.make_feature(name)
    case name
    when "base"
      FruityviceBaseFeature.new
    when "test"
      FruityviceTestFeature.new
    else
      FruityviceBaseFeature.new
    end
  end
end
