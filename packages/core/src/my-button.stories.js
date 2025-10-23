// Import your "brick" so Storybook can use it
import './my-button.js';

// This is the main setup for your story
export default {
  title: 'Components/MyButton',
  component: 'my-button', // This is the HTML tag
  tags: ['autodocs'], // This tells Storybook to auto-generate a docs page
};

// This is the default "view" of your button
export const Primary = {
  args: {
    slotContent: 'Click Me!', // This is the text inside the button
  },
  render: (args) => `<my-button>${args.slotContent}</my-button>`,
};

// This is a second "view" of your button
export const AnotherExample = {
  args: {
    slotContent: 'Submit',
  },
  render: (args) => `<my-button>${args.slotContent}</my-button>`,
};