import Layout from '../../components/Layout'
import Farms from '../../components/dashboard/Farms'
import Upload from '../../components/dashboard/Upload'

const Dashboard = () => {
  return (
    <Layout>
      <Farms/>
      <Upload/>
    </Layout>
  )
}

export default Dashboard