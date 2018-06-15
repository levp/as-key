# as-key

Convert any value to a string – except for symbols.

## Description

Behaves similar to a universal to-string-conversion tool, except that it doesn't degrade symbols into strings – which
makes them lose their unique indexing ability when used as object keys. 

Works with any special values such as `null` and `undefined`, objects, primitives, and even objects without
`toString` methods (e.g. `Object.create(null)`).

## API

```$javascript
function asKey(value: any): string | symbol;
```

## License

ISC