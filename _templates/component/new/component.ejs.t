---
to: src/components/<%= name %>/<%= name %>.tsx
---
<% pName = h.changeCase.paramCase(name) %>import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './<%= name %>.scss';

interface <%= name %>Props {
}

const <%= name %>: FC = (props: <%= name %>Props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="<%= pName %>-wrapper">
      This is your <%= name %> component!
    </div>
  );
};

export default <%= name %>;
