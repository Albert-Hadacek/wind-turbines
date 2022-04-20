import React from 'react'
import {Segment, Header, Icon, Button} from 'semantic-ui-react'
import Link from 'next/link'
import FilePicker from '../FilePicker'
import FileReader from '../FileReader'

const Upload = (props) => {

  const files = props.FilePicker;

  return (
    <>
      <Link href=""><a className="header-link">Click here to upload some data</a></Link>
      <Segment placeholder>
        <Header icon>
          <Icon name='pdf file outline' />
          Let's upload some new data
        </Header>
        <FileReader />
        <FilePicker />
      </Segment>
    </>

  )
}

export default Upload

//<Button primary>Upload data form</Button>