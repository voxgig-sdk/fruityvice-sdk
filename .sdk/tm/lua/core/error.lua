-- Fruityvice SDK error

local FruityviceError = {}
FruityviceError.__index = FruityviceError


function FruityviceError.new(code, msg, ctx)
  local self = setmetatable({}, FruityviceError)
  self.is_sdk_error = true
  self.sdk = "Fruityvice"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FruityviceError:error()
  return self.msg
end


function FruityviceError:__tostring()
  return self.msg
end


return FruityviceError
