module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true,
  },
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "react-hooks",
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "semi": ["error", "never"],
    "no-console": ["off"],
    "react/no-danger": ["off"],
    "prefer-destructuring": ["error", {"object": false, "array": false}], // 对象解构
    "max-len": ["off"],                                                   // 行 100
    "no-nested-ternary": ["off"],                                         // 三元嵌套
    "no-unneeded-ternary": ["off"],                                       // 三元正负
    "react/jsx-filename-extension": ["off"],                              // JSX 扩展名
    "import/no-unresolved": ["off"],                                      // 引入
    "react/jsx-fragments": ["off"],                                       // 有问题
    "no-useless-escape": ["off"],                                         // \/
    "no-unused-expressions": ["off"],                                     // \/
    "import/extensions": ["off"],
    "arrow-parens": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "jsx-a11y/control-has-associated-label": ["off"],
    "no-mixed-operators": ["off"],
    "prefer-object-spread": ["off"],
    "react/no-deprecated": ["off"],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": ["off"],
    "no-loop-func": ["off"],
    "no-param-reassign": ["off"],
    "no-multiple-empty-lines": ["off"],
  }
}

