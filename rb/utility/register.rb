# Fruityvice SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FruityviceUtility.registrar = ->(u) {
  u.clean = FruityviceUtilities::Clean
  u.done = FruityviceUtilities::Done
  u.make_error = FruityviceUtilities::MakeError
  u.feature_add = FruityviceUtilities::FeatureAdd
  u.feature_hook = FruityviceUtilities::FeatureHook
  u.feature_init = FruityviceUtilities::FeatureInit
  u.fetcher = FruityviceUtilities::Fetcher
  u.make_fetch_def = FruityviceUtilities::MakeFetchDef
  u.make_context = FruityviceUtilities::MakeContext
  u.make_options = FruityviceUtilities::MakeOptions
  u.make_request = FruityviceUtilities::MakeRequest
  u.make_response = FruityviceUtilities::MakeResponse
  u.make_result = FruityviceUtilities::MakeResult
  u.make_point = FruityviceUtilities::MakePoint
  u.make_spec = FruityviceUtilities::MakeSpec
  u.make_url = FruityviceUtilities::MakeUrl
  u.param = FruityviceUtilities::Param
  u.prepare_auth = FruityviceUtilities::PrepareAuth
  u.prepare_body = FruityviceUtilities::PrepareBody
  u.prepare_headers = FruityviceUtilities::PrepareHeaders
  u.prepare_method = FruityviceUtilities::PrepareMethod
  u.prepare_params = FruityviceUtilities::PrepareParams
  u.prepare_path = FruityviceUtilities::PreparePath
  u.prepare_query = FruityviceUtilities::PrepareQuery
  u.result_basic = FruityviceUtilities::ResultBasic
  u.result_body = FruityviceUtilities::ResultBody
  u.result_headers = FruityviceUtilities::ResultHeaders
  u.transform_request = FruityviceUtilities::TransformRequest
  u.transform_response = FruityviceUtilities::TransformResponse
}
