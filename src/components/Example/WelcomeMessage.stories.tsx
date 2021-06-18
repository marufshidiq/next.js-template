import { WelcomeMessage, WelcomeMessageProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Welcome Message',
  component: WelcomeMessage
} as Meta

const Template: Story<WelcomeMessageProps> = args => <WelcomeMessage {...args} />

export const Basic = Template.bind({})
