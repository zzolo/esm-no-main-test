This is a basic test for issue:
https://github.com/standard-things/esm/issues/693

The problem is that if the module doesn't have a `main` field in the `package.json`, `esm` won't find it, even though there is a `module` field.

To run:

`npm install && node index.js`

this should output: `....`
