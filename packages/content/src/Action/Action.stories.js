import React from 'react'
import { storiesOf } from '@storybook/react'

import Action from './index'

const actionStructuredContent = {
  html: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `,
}

storiesOf('content|Action', module).add(
  'with defaults',
  () => <Action data={actionStructuredContent} />,
  {
    info: `
        Demonstrates basic usage with defaults.
      `,
  }
)
