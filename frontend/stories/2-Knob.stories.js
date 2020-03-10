import React from "react";
import {withKnobs, text, boolean, number, radios, color, files,} from "@storybook/addon-knobs";

export default {
  title     : "Storybook Knobs",
  decorators: [withKnobs]
};
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs for React props
export const withAButton = () => (
    <button disabled={boolean("Disabled", false)}>
      {text("Label", "Hello Storybook")}
    </button>
);

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};

export const inGroups = () => {
  const personalGroupId = 'personal info';
  const generalGroupId = 'general info';

  const name = text("Name", "James", personalGroupId);
  const age = number("Age", 35, personalGroupId);
  const message = text("Hello!", 35, generalGroupId);
  const content = `
    I am ${name} and I'm ${age} years old.
    ${message}
  `;

  return <div>{content}</div>;
};

export const ColorRange = () => {
  const label = 'Color';
  const defaultValue = '#fff';
  const groupId = '속성';
  const borderColor = text('borderColor','333',groupId)
  const value = color(label, defaultValue, groupId);

  return (
      <>
        <div style={{backgroundColor: value, width: '75px', height: '75px', borderRadius: '50%',border:`1px solid #${borderColor}`}}></div>
        <div style={{fontSize: '11px'}}>{value}</div>
      </>
  )
};

//
// const label = 'Images';
// const accept = '.xlsx, .pdf';
// const defaultValue = [];
// const groupId = 'GROUP-ID1';
//
// const value = files(label, accept, defaultValue, groupId);
