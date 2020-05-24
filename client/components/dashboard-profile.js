import React from 'react'

import {Link, useParams} from 'react-router-dom'

const DashboardProfile = () => {
    const {user} = useParams()
    return (
    <div>
        <div className="flex items-center justify-center h-screen">
            <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
                <div id="title">Profile</div>
                 <div id="username">{user}</div>
                <Link to=" /dashboard">Go To Root</Link>
                <Link to="/dashboard/main">Go To Main</Link>
            </div>
      </div>
    </div>
  )
}

DashboardProfile.propTypes = {}

export default DashboardProfile
