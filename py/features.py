# Fruityvice SDK feature factory

from feature.base_feature import FruityviceBaseFeature
from feature.test_feature import FruityviceTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FruityviceBaseFeature(),
        "test": lambda: FruityviceTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
