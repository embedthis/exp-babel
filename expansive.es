Expansive.load({
    transforms: {
        name:   'compile-6',
        input:  '6',
        output: 'js',
        options: '-experimental',
        script: `
            function transform(contents, meta, service) {
                let command = Cmd.locate('6to5')
                return run(command, contents)
            }
        `
    }
})
