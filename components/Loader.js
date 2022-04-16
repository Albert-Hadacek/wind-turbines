import React from 'react'
import Spinner from 'reactjs-simple-spinner'

const Loader = () => (
  <div className="spinner-wrapper">
    <Spinner size={60} message={"Loading..."}/>
  </div>
)


export default Loader