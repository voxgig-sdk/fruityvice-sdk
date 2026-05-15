# Fruityvice SDK utility: make_context

from core.context import FruityviceContext


def make_context_util(ctxmap, basectx):
    return FruityviceContext(ctxmap, basectx)
