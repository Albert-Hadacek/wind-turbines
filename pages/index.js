import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {toast} from 'react-toastify'
import {useState} from 'react'
import Error from '../components/Error'

const Login = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.error("Something went wrong - recheck your password and email")
  }


  const isDisabled = !form.email.length || !form.password.length
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Renewable Dynamics Administration
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              value={form.email}
              fluid icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              onChange={(e) => {setForm({...form, email: e.target.value})}}
            />
            <Form.Input
              value={form.password}
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={(e) => {setForm({...form, password: e.target.value})}}
            />

            <Button color='teal' fluid size='large' disabled={isDisabled}>
              Login
            </Button>
          </Segment>
        </Form>
        <Error />
      </Grid.Column>
    </Grid>
  )
}

export default Login