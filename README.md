exp-babel
===

Expansive plugin for transpiling ES6 Javascript using Babel into ES5 Javascript.

Provides the 'babel' service.

### To install:

    pak install exp-babel

### To configure in expansive.json:

* babel.enable &mdash; Enable the service to process '.js.es' files.
* babel.mappings &mdash; File extensions to process. Defaults to: [ '6' 'es'].
* babel.options &mdash; Traceur options.

```
{
    services: {
        'babel': {
            enable: true,
            options: '-experimental'
        }
    }
}

```

### Get Pak from

[https://www.embedthis.com/pak/](https://www.embedthis.com/pak/)
