# Fruityvice SDK utility: make_context

from fruityvice_sdk.core.context import FruityviceContext


def make_context_util(ctxmap, basectx):
    return FruityviceContext(ctxmap, basectx)
