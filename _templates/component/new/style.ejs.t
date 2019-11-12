---
to: src/components/<%= name %>/<%= name %>.scss
---
<% pName = h.changeCase.paramCase(name) %>.<%= pName %>-wrapper {
  border: 2px dotted red;
}
