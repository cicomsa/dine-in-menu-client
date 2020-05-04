import React, { useContext } from 'react'
import { ItemsContext } from '../../../index'
import styles from './styles.scss'

const Index = ({ item }) => {
  const { setOrder, order } = useContext(ItemsContext)

  const handleClick = (e, value) => {
    const items = order.includes(value)
      ? order.filter(id => id !== value)
      : [...order, value]
    setOrder(items)
  }

  return (
    <div>
      <div className="item">
        <h3 className="item__name" onClick={e => handleClick(e, item.id)}>
          {item.name}
        </h3>
        <h3>£{item.price}</h3>
      </div>
      <em>{item.description}</em>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Index
