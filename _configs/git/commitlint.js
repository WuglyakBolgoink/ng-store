// https://asciinema.org/a/212473
// https://asciinema.org/a/212490

module.exports = {
    extends: [
        '@commitlint/config-angular'
    ],
    rules: {
        // Тело коммита должно начинаться с пустой строки
        'body-leading-blank': [ 2, 'always' ],

        // Нижний колонтитул коммита должен начинаться с пустой строки
        'footer-leading-blank': [ 2, 'always' ],

        // Максимальная длина заголовка 72 символа
        'header-max-length': [ 2, 'always', 72 ],

        // Область всегда только в нижнем регистре
        'scope-case': [ 2, 'always', 'lower-case' ],

        // Описание не может быть пустым
        'subject-empty': [ 2, 'never' ],

        // Описание не должно заканчиваться '.'
        'subject-full-stop': [ 2, 'never', '.' ],

        // Тип всегда только в нижнем регистре
        'type-case': [ 2, 'always', 'lower-case' ],

        // Тип не может быть пустым
        'type-empty': [ 2, 'never' ],

        'subject-case': [
            2,
            'never',
            [ 'sentence-case', 'start-case', 'pascal-case', 'upper-case' ]
        ],

        // Перечислим все возможные варианты коммитов
        'type-enum': [
            2,
            'always',
            [
                // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
                'build',

                // Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
                'ci',

                // Documentation only changes
                'docs',

                // A new feature
                'feat',

                // A bug fix
                'fix',

                // A code change that improves performance
                'perf',

                // A code change that neither fixes a bug nor adds a feature
                'refactor',

                // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
                'style',

                // Adding missing tests or correcting existing tests
                'test',

                // Reverts a previous commit
                'revert',

                // Any other changes, that not affected CHANGELOG
                'chore'
            ]
        ]
    }
};
