json-response
=============

API-ish JSON response for express using basic fields (status, data, message). DRY.

The response HTTP status code will ALWAYS be 200; The status on the JSON object will be the corresponding status code.

The JSON response looks like this:

```json
{
    "status": 200,
    "data": {
        "foo": "bar"
    },
    "message": "hello world"
}
```

## Installation

```sh
npm install --save json-response
```

## Usage

This module should only be required once, as soon as possible to the start of your application. It will extend Node's `http.ServerResponse.prototype` with HTTP status functions by code and name (see below).

```js
var express = require('express');
var app = express();

require('json-response');

app.get('/', function(req, res){
  res.ok({foo: 'bar'}, 'hello world');
});

app.listen(3000);
```

If you prefer to send your own responses (most likely using `res.send` or `res.json`) you can always use `res.response` to create a consistent response object.

```js
var express = require('express');
var app = express();

require('json-response');

app.get('/', function(req, res){
  res.send(res.response(200, {foo: 'bar'}, 'hello world'));
});

app.listen(3000);
```

### Available Methods

#### res.response(status, data, message);

Returns an object to be sent later to the client using res.send or similar.

```js
res.response(200, {foo:'bar'}, 'hello world');
```

---

**Note:** All the bellow methods can be used by either name or code; all of them call automatically `res.send`. If you need to add custom headers or any other response you can do so as usual before calling them.

---

#### res.ok(data, message)

```js
res.oK({foo:'bar'}, 'message');

// or

res[200](data, message)
```

---

#### res.created(data, message)

```js
res.created({foo:'bar'}, 'message');

// or

res[201](data, message)
```

---

#### res.accepted(data, message)

```js
res.accepted({foo:'bar'}, 'message');

// or

res[202](data, message)
```

---

#### res.nonAuthoritativeInformation(data, message)

```js
res.nonAuthoritativeInformation({foo:'bar'}, 'message');

// or

res[203](data, message)
```

---

#### res.noContent(data, message)

```js
res.noContent({foo:'bar'}, 'message');

// or

res[204](data, message)
```

---

#### res.resetContent(data, message)

```js
res.resetContent({foo:'bar'}, 'message');

// or

res[205](data, message)
```

---

#### res.partialContent(data, message)

```js
res.partialContent({foo:'bar'}, 'message');

// or

res[206](data, message)
```

---

#### res.badRequest(data, message)

```js
res.badRequest({foo:'bar'}, 'message');

// or

res[400](data, message)
```

---

#### res.unauthorized(data, message)

```js
res.unauthorized({foo:'bar'}, 'message');

// or

res[401](data, message)
```

---

#### res.paymentRequired(data, message)

```js
res.paymentRequired({foo:'bar'}, 'message');

// or

res[402](data, message)
```

---

#### res.forbidden(data, message)

```js
res.forbidden({foo:'bar'}, 'message');

// or

res[403](data, message)
```

---

#### res.notFound(data, message)

```js
res.notFound({foo:'bar'}, 'message');

// or

res[404](data, message)
```

---

#### res.methodNotAllowed(data, message)

```js
res.methodNotAllowed({foo:'bar'}, 'message');

// or

res[405](data, message)
```

---

#### res.notAcceptable(data, message)

```js
res.notAcceptable({foo:'bar'}, 'message');

// or

res[406](data, message)
```

---

#### res.proxyAuthenticationRequired(data, message)

```js
res.proxyAuthenticationRequired({foo:'bar'}, 'message');

// or

res[407](data, message)
```

---

#### res.requestTimeout(data, message)

```js
res.requestTimeout({foo:'bar'}, 'message');

// or

res[408](data, message)
```

---

#### res.conflict(data, message)

```js
res.conflict({foo:'bar'}, 'message');

// or

res[409](data, message)
```

---

#### res.gone(data, message)

```js
res.gone({foo:'bar'}, 'message');

// or

res[410](data, message)
```

---

#### res.lengthRequired(data, message)

```js
res.lengthRequired({foo:'bar'}, 'message');

// or

res[411](data, message)
```

---

#### res.preconditionFailed(data, message)

```js
res.preconditionFailed({foo:'bar'}, 'message');

// or

res[412](data, message)
```

---

#### res.requestEntityTooLarge(data, message)

```js
res.requestEntityTooLarge({foo:'bar'}, 'message');

// or

res[413](data, message)
```

---

#### res.requestURITooLong(data, message)

```js
res.requestURITooLong({foo:'bar'}, 'message');

// or

res[414](data, message)
```

---

#### res.unsupportedMediaType(data, message)

```js
res.unsupportedMediaType({foo:'bar'}, 'message');

// or

res[415](data, message)
```

---

#### res.requestedRangeNotSatisfiable(data, message)

```js
res.requestedRangeNotSatisfiable({foo:'bar'}, 'message');

// or

res[416](data, message)
```

---

#### res.expectationFailed(data, message)

```js
res.expectationFailed({foo:'bar'}, 'message');

// or

res[417](data, message)
```

---

#### res.internalServerError(data, message)

```js
res.internalServerError({foo:'bar'}, 'message');

// or

res[500](data, message)
```

---

#### res.notImplemented(data, message)

```js
res.notImplemented({foo:'bar'}, 'message');

// or

res[501](data, message)
```

---

#### res.badGateway(data, message)

```js
res.badGateway({foo:'bar'}, 'message');

// or

res[502](data, message)
```

---

#### res.serviceUnavailable(data, message)

```js
res.serviceUnavailable({foo:'bar'}, 'message');

// or

res[503](data, message)
```

---

#### res.gatewayTimeout(data, message)

```js
res.gatewayTimeout({foo:'bar'}, 'message');

// or

res[504](data, message)
```

---

#### res.httpVersionNotSupported(data, message)

```js
res.httpVersionNotSupported({foo:'bar'}, 'message');

// or

res[505]({foo:'bar'}, 'message');
```

---

## To Do

- Add test cases

## License

MIT
