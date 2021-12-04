import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Button} from "./Button"


export default {
  title: 'Button',
  component: Button,
  argTypes: {
    width: {
      control: { type: 'range', min: 400, max: 1200, step: 50 },
    }
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Button',
};