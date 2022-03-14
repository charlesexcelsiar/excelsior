import { Helmet } from 'react-helmet';
import React from 'react';

const HtmlHead = ({ title = '', description = '', children = null,canonical = '',metaKeywords = [], metaImage = '',ogImage = '',metaUrl = '',}) =>  {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      <meta name='title' content={title} />
    <meta name='description' content={description} />
    <meta name='keywords' content={metaKeywords.join(',')} />
    <meta property='og:title' content={title} />
    <meta property='og:image' content={metaImage} />
    <meta property="og:image:width" content="500" />
    <meta property="og:image:height" content="500" />
    <meta property='og:description' content={description} />
    <meta property="og:url" content={metaUrl} />
      {description && <meta name="description" content={description} />}
      {children && children}
      <link rel="image_src" href={metaImage} />
    </Helmet>
  );
};
export default HtmlHead;
