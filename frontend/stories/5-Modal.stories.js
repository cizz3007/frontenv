import React from 'react';

import {withA11y} from '@storybook/addon-a11y';
import {withKnobs, text, boolean, button, number, color} from "@storybook/addon-knobs";
import {action, actions, withActions} from '@storybook/addon-actions'
import {addParameters} from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import ModalDiv, {ModalTheme, ModalType} from '@atoms/div/modal/defaultModal'
import {ModalStyledBottom, ModalStyledButton, ModalStyledMiddle, ModalStyledTop} from '@atoms/div/modal/modalStyle'
import Title, {TitleTheme} from '@atoms/typography/title'
import Paragraph, {ParagraphTheme} from '@atoms/typography/paragraph/defaultParagraph'
import ResetStyle from '@global/resetStyle'
//A11Y가 Accessibility를 뜻한다. 2014년 CSUN학회에서 정의

export default {
  title     : 'Components | Molecules | Modal',
  decorators: [withA11y, withKnobs],
};

addParameters({
  docs: {
    container: DocsContainer,
    page     : DocsPage,
  },
});

export const Modals = () => {
  const defaultValue = 'hi!';
  const groupId = 'modals';

  const test = text('title', '제목', groupId)
  const description = text('description', defaultValue, groupId);
  const cancel = text('cancelText', '취소', groupId);
  const confirm = text('confirmText', '확인', groupId);

  const eventsFromObject = actions({onClick: '마우스 클릭 이벤트', onMouseOver: '마우스 호버 이벤트'});

  return (
      <ModalDiv>
        <ResetStyle></ResetStyle>
        <ModalStyledTop>
          <Title>{test}</Title>
        </ModalStyledTop>
        <ModalStyledMiddle>
          <Paragraph>{description}</Paragraph>
        </ModalStyledMiddle>
        <ModalStyledBottom>
          <ModalStyledButton {...eventsFromObject}>{cancel}</ModalStyledButton>
          <ModalStyledButton {...eventsFromObject}>{confirm}</ModalStyledButton>
        </ModalStyledBottom>
      </ModalDiv>
  )
}



