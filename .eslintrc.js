module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "globals": {
        // "React": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [2, 4, {"SwitchCase": 1}],
        "object-curly-spacing": [0, "never"],
        "global-require": "off",
        "import/no-unresolved": "off",
        "no-console": "off",
        "no-debugger": "error",
        "no-underscore-dangle": "off",
        "no-new-func": "off",
        "no-mixed-operators": "off",
        "no-param-reassign": "off",
        "react/prefer-stateless-function": "off",
        "react/no-multi-comp": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-indent": "off",
        "react/jsx-first-prop-new-line": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react/jsx-filename-extension": "off",
        "no-restricted-syntax": "off",
        "linebreak-style": "off",
        "no-bitwise": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "arrow-parens": "off",
        "consistent-return": "warn",
        "class-methods-use-this": "off",
        'max-len': 0,
        "no-plusplus": 0,
        "no-unused-expressions": 0,
        "import/extensions": "off",
    }

};
