import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const Index = ({ menu, setCategory }) => {
  //   const categories = Object.keys(wagamama)
  //   const { sides, teppanyaki } = wagamama

  const handleClick = e => {
    setCategory(e.target.innerText)
  }

  return (
    <div className="navigation">
      <p onClick={e => handleClick(e)}>all</p>
      {/* {categories.map(category => {
        return (
          <p onClick={e => handleClick(e)} key={category}>{category}</p>
        )
      })} */}
      <style jsx>{styles}</style>
    </div>
  )
}

export default Index

// Index.propTypes = {
//   menu: PropTypes.string.isRequired,
//   setCategory: PropTypes.func.isRequired
// }