import React from 'react';

import {withA11y} from '@storybook/addon-a11y';
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import {action, actions, withActions} from '@storybook/addon-actions'
import {addParameters} from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
//A11Y가 Accessibility를 뜻한다. 2014년 CSUN학회에서 정의

export default {
  title     : 'button',
  decorators: [withA11y, withKnobs],
};

addParameters({
  docs: {
    container: DocsContainer,
    page     : DocsPage,
  },
});

export const 웹접근성통과 = () => (
    <button disabled={boolean("비활성화", false)}>
      {text('버튼 텍스트', 'Hi!!')}
    </button>
);

const eventsFromObject = actions({onClick: '마우스 클릭 이벤트', onMouseOver: '마우스 호버 이벤트'});

export const 웹접근성경고 = () => (
    <button style={{backgroundColor: 'red', color: 'darkRed',}} {...eventsFromObject}>
      {text('버튼 텍스트', '웹 접근성 경고 버튼')}
    </button>
);

