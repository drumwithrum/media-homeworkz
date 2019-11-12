---
to: src/views/<%= name %>/store/selectors.ts
---
import { createSelector } from 'reselect';

export const getExamples = (state: any) => state.<%= name %>.examples;
export const getFilteredExamples = createSelector(
  getExamples,
  examples => examples.filter((example: string) => example !== 'example'),
);
