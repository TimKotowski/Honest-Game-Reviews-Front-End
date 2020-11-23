import React from 'react'
import {Route, Switch} from 'react-router-dom'
import GamesPortal from './Games/GamesPortal'
import Homepage from './Homepage'

 const Routes = () => {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/games" component={GamesPortal} />
      </Switch>
    </div>
  )
}

export default Routes
