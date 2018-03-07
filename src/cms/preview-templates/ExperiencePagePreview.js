import React from 'react';
import { ExperiencePageTemplate } from '../../templates/about-page';

const ExperiencePagePreview = ({ entry, widgetFor }) => (
  <ExperiencePageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

export default ExperiencePagePreview;
