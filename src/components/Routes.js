import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Homepage from './Homepage'

 const Routes = () => {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  )
}

export default Routes
