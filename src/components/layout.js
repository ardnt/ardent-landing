import React from 'react'
import PropTypes from 'prop-types'

import { Main } from '../ui'

import 'normalize.css/normalize.css'


const Layout = ({ children }) => (
  <Main>{ children }</Main>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export { Layout }
