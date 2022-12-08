import { Meta, Story } from '@storybook/react/types-6-0';
import { ToastProps } from 'src/components/toast/Toast';
import { ToastContextProvider } from 'src/components/toast/ToastContext';

import { ToastConsumer } from './ToastConsumer.stories';

const ToastMeta: Meta = {
  component: ToastContextProvider,
};

export default ToastMeta;

const Template: Story<ToastProps> = ({ children }: ToastProps) => (
  <ToastContextProvider>
    {children}
    <ToastConsumer />
  </ToastContextProvider>
);

export const Toast = Template.bind({});
Toast.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A162',
  },
};
