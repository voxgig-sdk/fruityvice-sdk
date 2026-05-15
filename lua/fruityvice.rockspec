package = "voxgig-sdk-fruityvice"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/fruityvice-sdk.git"
}
description = {
  summary = "Fruityvice SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["fruityvice_sdk"] = "fruityvice_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
