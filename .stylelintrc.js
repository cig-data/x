module.exports = {
  "extends": ["stylelint-config-airbnb", "stylelint-config-recess-order"],
  "plugins": [
    "stylelint-csstree-validator",   // 验证 CSS 的值是否匹配 W3C 标准和浏览器扩展
    "stylelint-order",               // 指定排序，比如声明的块内(插件包)属性的顺序。
  ],
  "processors": ["stylelint-processor-styled-components"],
}

