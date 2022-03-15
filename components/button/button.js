import Link from 'next/link'
import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonEmphasis = () => (
    //placing anchor over button shows a warning in the console
    //Buttons shouldn't be wrapped with Link, so I'm not gonna use them for navigation
    //see https://stackoverflow.com/questions/6393827/can-i-nest-a-button-element-inside-an-a-using-html5
  <div>
    <Button primary>Current wind farms</Button>
    <Button secondary>Add a wind farm</Button>
  </div>
)

export default ButtonEmphasis