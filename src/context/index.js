import { useContext } from 'react'
import { createSelector } from 'reselect'

import { store } from './store'

export function useDispatch() {
  const [state, dispatch] = useContext(store)

  return (callback) => callback(dispatch, () => state)
}

export function useSelector(callback) {
  const [state] = useContext(store)
  const selector = createSelector([callback], (selected) => selected)

  return selector(state)
}
