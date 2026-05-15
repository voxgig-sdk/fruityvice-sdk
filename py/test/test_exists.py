# ProjectName SDK exists test

import pytest
from fruityvice_sdk import FruityviceSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FruityviceSDK.test(None, None)
        assert testsdk is not None
