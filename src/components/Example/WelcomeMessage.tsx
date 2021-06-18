import * as React from 'react'

export interface WelcomeMessageProps {
  name: string
}

// Also can using rest of props using ({ name, ...rest })
const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ name }) => <div>Welcome {name}</div>

export default WelcomeMessage
