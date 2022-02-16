import React from 'react'
import CheckboxList from '../components/CheckboxList'
import ProductTile from '../components/ProductTile'
import Slider from '../components/Slider'

import { useSelector } from '../context'

function Search() {
  const { price, options } = useSelector((state) => state.filters)

  return (
    <div className="Search">
      <header>
        <h2>Context global state experiment</h2>
        <h5>
          The selected price is: {price} €
          <br />
          The selected options are:{' '}
          {options
            .filter(({ checked }) => checked)
            .map(({ name }) => name)
            .join(', ')}
          .
        </h5>
      </header>
      <aside>
        <CheckboxList />
        <Slider />
      </aside>
      <section>
        <ul>
          {[].map(({ name }, i) => (
            <li key={i}>
              <ProductTile name={name} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Search
