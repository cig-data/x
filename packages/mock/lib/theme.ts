import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html,
body {
  box-sizing: border-box;
}

body,
ul,
p,
h2,
h3 {
  margin:0;
}

ul,
input {
  padding: 0;
}

ul {
  list-style: none;
}

input {
  border: 0 none;
}

b,
em {
  font-weight: normal;
}
`
