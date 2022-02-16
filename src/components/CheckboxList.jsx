import React, { memo } from 'react'
import { optionsUpdate } from '../context/modules/filters'
import { useDispatch, useSelector } from '../context'

function CheckboxList() {
  const dispatch = useDispatch()
  const options = useSelector((state) => state.filters.options)
  console.log('CheckboxList rendered!')

  const getUpdatedList = (list, updatedItem) =>
    list.map((item) => {
      if (updatedItem.name === item.name) {
        return updatedItem
      }

      return item
    })

  return (
    <div>
      <section>
        <h3>Options:</h3>
        <br />
        {options.map((item, i) => (
          <div key={item.name}>
            <input
              type="checkbox"
              id={item.name}
              name={item.name}
              value={item.name}
              checked={item.checked}
              onChange={(e) => {
                const updatedItem = { ...item, checked: e.target.checked }

                dispatch(optionsUpdate(getUpdatedList(options, updatedItem)))
              }}
            />
            <label> {item.label}</label>
            <br />
          </div>
        ))}
      </section>
    </div>
  )
}

export default memo(CheckboxList)
