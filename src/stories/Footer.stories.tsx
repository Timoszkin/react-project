import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from "../components/Footer/Footer";

export default {
  title: "Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: any) => (
  <Footer {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  backgroundColor: "teal",
  color: "white",
};
