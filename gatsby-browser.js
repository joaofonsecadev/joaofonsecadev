import React from 'react';
import Layout from './src/components/Layout';

import './src/styles/styles.scss';

export function wrapPageElement({ element, props }) {
  return <Layout>{element}</Layout>;
}
