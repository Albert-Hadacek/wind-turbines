import {Container, Dropdown, Menu, Icon} from 'semantic-ui-react'
import {signOut, useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import Loader from './Loader'
import {useLoading} from '../context/LoadingContext'
import Error from './Error'


const Layout = ({children}) => {
  const { loading, setLoading } = useLoading();
  const router = useRouter()

  const { data: session, status } = useSession()


  useEffect(() => {
    if(status === "unauthenticated") {
      router.replace("/")
    }
  },[status])


  const handleLogout = async () => {
    await signOut({redirect: false})
  }

  if(status === "loading" || loading) {
    return <Loader/>
  }


  return (
    <>
    <Menu className="dashboard-menu">
        <Menu.Item
          name='editorials'
        >
          Dashboard
        </Menu.Item>

        <Menu.Item
          name='reviews'
        >
          Farms
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
        >
          Turbines
        </Menu.Item>

        <Dropdown
          item
          text='John Doe'
        >
          <Dropdown.Menu>
            <Dropdown.Item icon='setting' text='Settings'></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={"div"} color='red' onClick={handleLogout} icon='logout' text='Logout'></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        

    </Menu>
      <Container>
        {children}
      </Container>
      <Error />
    </>
  )
}

export default Layout
