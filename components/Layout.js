import {Container, Menu} from 'semantic-ui-react'
import {signOut, useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import {useEffect} from 'react'


const Layout = ({children}) => {

  const router = useRouter()

  const { data: session, status } = useSession()

  console.log(session)


  useEffect(() => {
    if(status === "unauthenticated") {
      router.replace("/")
    }
  },[status])


  const handleLogout = async () => {
    await signOut({redirect: false})
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
          <Menu.Item
            as={"div"}
            name='upcomingEvents'
            onClick={handleLogout}
          >
            Logout
          </Menu.Item>
    </Menu>
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout