exp-es
===

Expansive plugin for transpiling ES6 Javascript using Babel into ES5 Javascript.

Provides the 'compile-es' service.

### To install:

    pak install exp-es

### To configure in expansive.json:

* compile-es.enable &mdash; Enable the compile-es service to process .js.es files.
* compile-es.options &mdash; Traceur options.

```
{
    services: {
        'compile-es': {
            enable: true,
            options: '-experimental'
        }
    }
}

```

### Get Pak from

[https://embedthis.com/pak/](https://embedthis.com/pak/download.html)
