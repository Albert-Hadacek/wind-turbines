import {Container, Menu} from 'semantic-ui-react'


const Layout = ({children}) => {

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
            name='upcomingEvents'
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