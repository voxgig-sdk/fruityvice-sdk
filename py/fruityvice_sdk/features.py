# Fruityvice SDK feature factory

from fruityvice_sdk.feature.base_feature import FruityviceBaseFeature
from fruityvice_sdk.feature.test_feature import FruityviceTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FruityviceBaseFeature(),
        "test": lambda: FruityviceTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
