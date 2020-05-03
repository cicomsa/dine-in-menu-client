import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'next-routes'
import MenuItems from './MenuItems'

const StaticPages = ({ category, path }) => {
  return (
    <>
      {/* {/\//.test(path) && <Link route='post' params={{ handle: 'hi' }}><p>Main page</p></Link>} */}
      {/menu/.test(path) && <MenuItems />}
      {/orders/.test(path) && <p>Orders page</p>}
    </>
  )
}

export default StaticPages

// Index.propTypes = {
//   category: PropTypes.string.isRequired
// }