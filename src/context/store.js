import React, { useReducer, createContext } from 'react'
import * as filters from './modules/filters'
//import products from './products'

export const store = createContext()
const { Provider } = store

const combineReducers = (reducers) => (state = {}, action) =>
  Object.keys(reducers).reduce((combined, key) => {
    combined[key] = reducers[key](state[key], action)
    return combined
  }, {})

const reducers = combineReducers({
  filters: filters.reducer,
})

const initialState = {
  filters: filters.state,
}

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducers, initialState)

  return <Provider value={[state, dispatch]}>{props.children}</Provider>
}
