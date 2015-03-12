Expansive.load({
    transforms: {
        name:   'compile-es',
        mappings: {
            '6': 'js',
            'es': 'js',
        },
        options: '-experimental',
        script: `
            function transform(contents, meta, service) {
                let command = Cmd.locate('babel')
                return run(command, contents)
            }
        `
    }
})
