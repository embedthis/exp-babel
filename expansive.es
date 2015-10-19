Expansive.load({

    services: {
        name:   'babel',

        transforms: {
            mappings: {
                '6': 'js',
                'es': 'js',
            },
            render: function(contents) run('babel', contents)
        }
    }
})
