# Fruityvice SDK utility: make_context

from projectname_sdk.core.context import FruityviceContext


def make_context_util(ctxmap, basectx):
    return FruityviceContext(ctxmap, basectx)
