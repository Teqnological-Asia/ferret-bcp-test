import * as React from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { configTitle } from './configTitle'

const App = props => {
  const path = props.location.pathname
  const title = configTitle.find((config) => path.match(config.route))
  return (
    <Helmet>
      <title>{ title ? title.title : '' }</title>
    </Helmet>
  )
}

export const AppHelmet = withRouter(App)