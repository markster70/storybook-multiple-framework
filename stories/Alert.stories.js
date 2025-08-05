import '../components/cfaAlertWc.js';

export default {
  title: 'Web Components/Alert',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    icon: { control: 'text' },
    dismissable: { control: 'boolean' },
  },
  args: {
    title: 'Test Alert',
    icon: 'info',
    dismissable: true,
  },
};

const Template = ({ title, icon, dismissable }) => {
  const el = document.createElement('cfa-alert');
  el.setAttribute('title', title);
  el.setAttribute('icon', icon);
  dismissable ? el.setAttribute('dismissable', '') : el.removeAttribute('dismissable');
  return el;
};

export const Default = Template.bind({});
