import React from 'react';
import {addParameters,} from '@storybook/react';

/**
 * @ref :https://github.com/storybookjs/storybook/tree/master/addons/viewport
 * */

const customViewports = {
  ...require('./apple'),
  ...require('./samsung'),
  ...require('./amazon'),
};

addParameters({
  viewport: {viewports: customViewports},
  backgrounds: [
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
    { name:'google', value:"tomato", default:true}
  ],
});

