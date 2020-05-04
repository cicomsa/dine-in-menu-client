import React, { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import StaticPages from './static'
import { STATIC_PAGES } from '@consts'
import { useRouter } from 'next/router'
import axios from 'axios'
import CategoryNav from '../CategoryNav'

const ItemsContext = createContext()

const Pages = ({ handle }) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const router = useRouter()
  const { pathname } = router
  const [category, setCategory] = useState('all')
  const [order, setOrder] = useState([])

  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4001/menu-items',
      { cancelToken: source.token })
      .then(res => setItems(res.data.items))
      .catch(e => console.error(e))

    return () => source.cancel();
  }, [])

  return (
    <>
      <ItemsContext.Provider value={category}>
        <CategoryNav setCategory={setCategory} menu={handle} />
      </ItemsContext.Provider>

      {STATIC_PAGES.includes(pathname)
        ? items.length && (
          <ItemsContext.Provider value={{ category, items, order, setOrder }} >
            <StaticPages path={pathname} />
          </ItemsContext.Provider >
        )
        : <p>Page not found.</p>
      }
    </>
  )
}

export default Pages
export { ItemsContext }

Pages.propTypes = {
  handle: PropTypes.string
}

Pages.defaultProps = {
  handle: ''
}