import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Index = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4001/menu-items')
      .then(res => setItems(res.data.items))
      .catch(e => console.error(e))
  }, [])
  return (
    <div>
      hi
    </div>
  )
}

export default Index
