import React from 'react'

import {Link, useParams} from 'react-router-dom'

const DashboardProfile = () => {
    const {user} = useParams()
    return (
      <div>
        <div id="title">Profile</div>
        <div id="username">{user}</div>
        <Link to="/dashboard">Go To Root</Link>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
  )
}

DashboardProfile.propTypes = {}

export default DashboardProfile
