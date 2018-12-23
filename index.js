require = require("esm")(module, {
  mainFields: ["main", "module"]
});

require("custom-module");
