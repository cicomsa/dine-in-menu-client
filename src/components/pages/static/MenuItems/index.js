import React, { useState, useEffect, useContext, useReducer } from 'react'
import Item from './Item'
import { ItemsContext } from '../../index'

const initialState = []

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_PREFERENCE':
      const alreadyChosen = state.find(item => item.id === payload.id)

      if (alreadyChosen) {
        const items = state.map(item => {
          if (item.id === payload.id) {
            const payloadKey = Object.keys(payload)[1]
            if (Object.keys(item).includes(payloadKey)) {
              return {
                ...item,
                [payloadKey]: [...item[payloadKey], ...payload[payloadKey]]
              }
            }

            return { ...item, [payloadKey]: payload[payloadKey] }
          }
          return item
        })

        return items

      } else {
        return [...state, payload]
      }

    default:
      return initialState
  }
}

const Index = () => {
  const { items, category } = useContext(ItemsContext)
  const [state, action] = useReducer(reducer, initialState)


  const menuItems = category === 'all'
    ? items : items.filter(item => item.category === category)
  return (
    <div>
      {menuItems
        .map(item =>
          <Item key={item.id} item={item} action={action} state={state} />

        )
      }
    </div>
  )
}

export default Index
