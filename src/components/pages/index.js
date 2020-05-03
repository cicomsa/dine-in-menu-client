import React, { useState } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import StaticPages from './static'
import { STATIC_PAGES } from '@consts'
import { useRouter } from 'next/router'

const CategoryNav = dynamic(() => import('../CategoryNav'))

const Pages = ({ handle }) => {
  const router = useRouter()
  const { pathname } = router
  const [category, setCategory] = useState('all')

  return (
    <>
      <CategoryNav setCategory={setCategory} menu={handle} />
      {STATIC_PAGES.includes(pathname)
        ? <StaticPages category={category} path={pathname} />
        : <p>123 Page not found.</p>
      }
    </>
  )
}

export default Pages

Pages.propTypes = {
  handle: PropTypes.string
}

Pages.defaultProps = {
  handle: ''
}