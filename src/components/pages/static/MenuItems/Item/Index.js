import React, { useContext, useState } from 'react'
import { ItemsContext } from '../../../index'
import styles from './styles.scss'

const Index = ({ item, action, state }) => {
  const { setOrder, order } = useContext(ItemsContext)
  const [amendment, setAmendment] = useState(false)
  const alreadyChosen = state.find(el => el.id === item.id)

  const addToOrder = (value) => {
    const items = order.includes(value)
      ? order.filter(id => id !== value)
      : [...order, value]
    setOrder(items)
  }

  const amend = () => setAmendment(true)
  const completeAmendment = () => setAmendment(false)

  const setChoice = (id, value, choice) => {
    action({
      type: 'SET_PREFERENCE', payload: {
        id,
        [choice]: [value]
      }
    })
  }

  const removePreference = (value) => {
    const choice = preference.extra.includes(value) ? 'extra' : 'without'
    const choiced = {
      [choice]: preference[choice].filter(ingredient => ingredient !== value)
    }

    setPreference({ ...preference, ...choiced })
  }

  return (
    <div>
      <div className="item">
        <h3 className="item__name">
          {item.name}
        </h3>
        <h3>£{item.price}</h3>
      </div>
      <em>{item.description}</em>
      {amendment && <p>Only the following ingredients can be amended: </p>}
      {amendment && (item.ingredients && item.ingredients.split(', ').map(ingredient => {
        return <div key={ingredient}>
          {(!alreadyChosen ||
            (alreadyChosen && !alreadyChosen.extra) ||
            (alreadyChosen && alreadyChosen.extra && !alreadyChosen.extra.includes(ingredient))) &&
            <button onClick={() => setChoice(item.id, ingredient, 'extra')} type="button">+</button>
          }
          <em>{ingredient}</em>
          {(!alreadyChosen ||
            (alreadyChosen && !alreadyChosen.without) ||
            (alreadyChosen && alreadyChosen.without && !alreadyChosen.without.includes(ingredient))) &&
            <button onClick={() => setChoice(item.id, ingredient, 'without')} type="button">-</button>
          }
          {alreadyChosen && ((alreadyChosen.without && alreadyChosen.without.includes(ingredient)) || (alreadyChosen.extra && alreadyChosen.extra.includes(ingredient))) && (
            <button onClick={() => removePreference(ingredient)} type="button">Remove preference option</button>
          )}
        </div>
      }

      )
      )}
      <div>
        {!amendment && item.ingredients && <button onClick={amend}>Amend ingredients</button>}
        {amendment && <button onClick={completeAmendment}>Complete amendment</button>}
      </div>
      <div>
        {!amendment && <button onClick={() => addToOrder(item.id, preference)}>Add to order</button>}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Index
