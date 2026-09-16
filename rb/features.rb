# Fruityvice SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FruityviceFeatures
  def self.make_feature(name)
    case name
    when "base"
      FruityviceBaseFeature.new
    when "ratelimit"
      FruityviceRatelimitFeature.new
    when "retry"
      FruityviceRetryFeature.new
    when "test"
      FruityviceTestFeature.new
    when "timeout"
      FruityviceTimeoutFeature.new
    else
      FruityviceBaseFeature.new
    end
  end
end
