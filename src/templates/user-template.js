import React from 'react'

import PageTemplate from 'templates/page-template'
import UserDashboardContainer from 'components/user-dashboard/user-dashboard.container'

function UserTemplate(){
    return(
      <PageTemplate>
        <UserDashboardContainer />
      </PageTemplate>
    )
}

export default UserTemplate
