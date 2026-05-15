# Fruityvice SDK exists test

require "minitest/autorun"
require_relative "../Fruityvice_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FruityviceSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
