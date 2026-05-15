
import { Context } from './Context'


class FruityviceError extends Error {

  isFruityviceError = true

  sdk = 'Fruityvice'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FruityviceError
}

