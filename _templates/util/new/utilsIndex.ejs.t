---
inject: <%= h.doesFileExist('src/utils/index.ts') %>
to: src/utils/index.ts
after: ;
---
export { default as <%= name %> } from './<%= name %>';
