## How to reproduce error?

The parser crashes when encountering unquoted attribute value containing at least one or more `=`.
Check `index.js` for an example.

1. run `npm install`
2. run `npm run lint`
