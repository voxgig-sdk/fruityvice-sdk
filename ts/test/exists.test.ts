
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FruityviceSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FruityviceSDK.test()
    equal(testsdk instanceof FruityviceSDK, true,
      'FruityviceSDK.test() must return a client synchronously')
  })

})
