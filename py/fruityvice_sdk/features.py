# Fruityvice SDK feature factory

from fruityvice_sdk.feature.base_feature import FruityviceBaseFeature
from fruityvice_sdk.feature.ratelimit_feature import FruityviceRatelimitFeature
from fruityvice_sdk.feature.retry_feature import FruityviceRetryFeature
from fruityvice_sdk.feature.test_feature import FruityviceTestFeature
from fruityvice_sdk.feature.timeout_feature import FruityviceTimeoutFeature


_FEATURES = {
    "base": lambda: FruityviceBaseFeature(),
    "ratelimit": lambda: FruityviceRatelimitFeature(),
    "retry": lambda: FruityviceRetryFeature(),
    "test": lambda: FruityviceTestFeature(),
    "timeout": lambda: FruityviceTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
