import React from 'react'

import {Link} from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
            <div id="title">Main</div>
            <Link to="/dashboard/profile/4f8e83ac-f75b-45e7-94ca-0a803ab0a9a8">Go To Profile</Link>
            <Link to=" /dashboard">Go To Root</Link>
        </div>
      </div>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
