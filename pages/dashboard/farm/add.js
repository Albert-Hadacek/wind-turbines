import React from 'react'
import Layout from '../../../components/Layout'
import FarmForm from '../../../components/farms/FarmForm'

const AddFarm = () => {
  return (
    <Layout>
      <h1>Create a new Farm</h1>
      <FarmForm data={null}/>
    </Layout>
  )
}

export default AddFarm