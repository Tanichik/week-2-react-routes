import React from 'react'

import {Link} from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/4f8e83ac-f75b-45e7-94ca-0a803ab0a9a8">Go To Profile</Link>
      <Link to="/dashboard/">Go To Root</Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
