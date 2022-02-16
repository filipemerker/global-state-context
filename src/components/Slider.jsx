import React, { useState, memo } from 'react'
import { priceUpdate } from '../context/modules/filters'
import { useDispatch, useSelector } from '../context'

const Slider = () => {
  const dispatch = useDispatch()
  const price = useSelector((state) => state.filters.price)
  const [value, setValue] = useState(price)
  console.log('Slider rendered!')

  return (
    <div>
      <header>
        <h3>Price: {value} €</h3>
        <br />
        <input
          type="range"
          id="vol"
          name="vol"
          min="0"
          max="50"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onMouseUp={(e) => dispatch(priceUpdate(Number(e.target.value)))}
        />
      </header>
    </div>
  )
}

export default memo(Slider)
