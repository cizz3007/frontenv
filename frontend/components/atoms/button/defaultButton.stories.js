import {storiesOf} from '@storybook/react'
import React from 'react';
import H1 from '../typography/h1'
import {withKnobs, text, boolean} from '@storybook/addon-knobs';
import Button from './defaultButton'
import {action} from '@storybook/addon-actions'

export default {
  title     : 'H1', // 스토리북에서 보여질 그룹과 경로를 명시
  component : H1, // 어떤 컴포넌트를 문서화 할지 명시
};

export const erer = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
);

// storiesOf(`Button`, module)
//     .addParameters({component:H1})
//     .add('default',()=> <H1>STORY BOOK TEST</H1>)
//     .addDecorator()
