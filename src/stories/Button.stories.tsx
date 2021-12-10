import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    width: {
      control: { type: "range", min: 400, max: 1200, step: 50 },
    },
    borderWidth: {
      control: { type: "range", min: 0, max: 20, step: 1 },
    },
    handleClick: {
      action: "clicked",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);

export const Main = Template.bind({});
Main.args = {
  text: "Button",
  backgroundColor: "transparent",
  borderColor: "teal",
  color: "teal",
};

export const Hovered = Template.bind({});
Hovered.args = {
  text: "Button",
  backgroundColor: "teal",
  borderColor: "teal",
  color: "white",
};
