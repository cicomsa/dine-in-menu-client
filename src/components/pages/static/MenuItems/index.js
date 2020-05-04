import React, { useState, useEffect, useContext } from 'react'
import Item from './Item'
import { ItemsContext } from '../../index'

const Index = () => {
  const { items, category } = useContext(ItemsContext)

  const menuItems = category === 'all'
    ? items : items.filter(item => item.category === category)
  return (
    <div>
      {menuItems
        .map(item => <Item key={item.id} item={item} />)
      }
    </div>
  )
}

export default Index
