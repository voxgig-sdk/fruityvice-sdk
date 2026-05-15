<?php
declare(strict_types=1);

// Fruityvice SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FruityviceUtility::setRegistrar(function (FruityviceUtility $u): void {
    $u->clean = [FruityviceClean::class, 'call'];
    $u->done = [FruityviceDone::class, 'call'];
    $u->make_error = [FruityviceMakeError::class, 'call'];
    $u->feature_add = [FruityviceFeatureAdd::class, 'call'];
    $u->feature_hook = [FruityviceFeatureHook::class, 'call'];
    $u->feature_init = [FruityviceFeatureInit::class, 'call'];
    $u->fetcher = [FruityviceFetcher::class, 'call'];
    $u->make_fetch_def = [FruityviceMakeFetchDef::class, 'call'];
    $u->make_context = [FruityviceMakeContext::class, 'call'];
    $u->make_options = [FruityviceMakeOptions::class, 'call'];
    $u->make_request = [FruityviceMakeRequest::class, 'call'];
    $u->make_response = [FruityviceMakeResponse::class, 'call'];
    $u->make_result = [FruityviceMakeResult::class, 'call'];
    $u->make_point = [FruityviceMakePoint::class, 'call'];
    $u->make_spec = [FruityviceMakeSpec::class, 'call'];
    $u->make_url = [FruityviceMakeUrl::class, 'call'];
    $u->param = [FruityviceParam::class, 'call'];
    $u->prepare_auth = [FruityvicePrepareAuth::class, 'call'];
    $u->prepare_body = [FruityvicePrepareBody::class, 'call'];
    $u->prepare_headers = [FruityvicePrepareHeaders::class, 'call'];
    $u->prepare_method = [FruityvicePrepareMethod::class, 'call'];
    $u->prepare_params = [FruityvicePrepareParams::class, 'call'];
    $u->prepare_path = [FruityvicePreparePath::class, 'call'];
    $u->prepare_query = [FruityvicePrepareQuery::class, 'call'];
    $u->result_basic = [FruityviceResultBasic::class, 'call'];
    $u->result_body = [FruityviceResultBody::class, 'call'];
    $u->result_headers = [FruityviceResultHeaders::class, 'call'];
    $u->transform_request = [FruityviceTransformRequest::class, 'call'];
    $u->transform_response = [FruityviceTransformResponse::class, 'call'];
});
