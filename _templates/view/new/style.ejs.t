---
to: src/views/<%= name %>/<%= name %>.scss
---
<% pName = h.changeCase.paramCase(name) %>.<%= pName %>-wrapper {
  border: 2px dotted red;
  height: 100%;
  box-sizing: border-box
}
