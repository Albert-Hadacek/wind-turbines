import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {toast} from 'react-toastify'
import {useState, useEffect} from 'react'
import Error from '../components/Error'
import {signIn, useSession} from 'next-auth/react'
import {useRouter} from 'next/router'

const Login = () => {

  const router = useRouter()
  const { data: session, status } = useSession()
  useEffect(() => {
    if(status === "authenticated") {
      router.replace("/dashboard")
    }
  },[status])


  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const result = await signIn("credentials", {
      redirect: false,
      ...form
    })



    if(result.error) {
      toast.error("Something went wrong - recheck your password and email")
      setLoading(false)
      return
    }

    setLoading(false)

    router.push("/dashboard")

  }


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

            <Button color='teal' fluid size='large' loading={loading}>
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